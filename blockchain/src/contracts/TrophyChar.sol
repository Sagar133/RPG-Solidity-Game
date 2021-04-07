// contracts/Trophy.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.6.12;

// const RINKEBY_VRF_COORDINATOR = '0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B'
// const RINKEBY_LINKTOKEN = '0x01BE23585060835E02B77ef475b0Cc51aA1e0709'
// const RINKEBY_KEYHASH = '0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311'

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@chainlink/contracts/src/v0.6/VRFConsumerBase.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/utils/Strings.sol";

contract TrophyChar is ERC721, VRFConsumerBase {
    bytes32 public keyHash;
    address public VRFCoordinator;
    uint256 internal fee;
    uint256 public randomResult;
    address public Linktoken;

    struct Trophy {
        uint256 rarity;
        uint256 worth;
        string name;
    }

    Trophy[] public trophies;
    // mappings will go here 
    mapping(bytes32 => string) requestToTrophyName;
    mapping(bytes32 => address) requestToSender;
    mapping(bytes32 => uint256) requestToTokenId;



    constructor(address _VRFCoordinator, address _LinkToken, bytes32 _keyHash) public
    VRFConsumerBase(_VRFCoordinator, _LinkToken) 
    ERC721("TrophyChar", "TRP") {
        VRFCoordinator = _VRFCoordinator;
        keyHash = _keyHash;
        Linktoken = _LinkToken;
        fee = 0.1 * 10**18; // 0.1 LINK     
    }

    function requestNewRandomTrophy (uint256 userProvidedSeed, string memory name) public returns (bytes32) {
        bytes32 requestId = requestRandomness(keyHash, fee, userProvidedSeed);
        requestToTrophyName[requestId] = name;
        requestToSender[requestId] = msg.sender;
        return requestId;
    }

    function fulfillRandomness(bytes32 requestId, uint256 randomNumber)
    internal override {
        //define the NFT
        uint256 newId = trophies.length;
        uint256 rarity = (randomNumber % 100);
        uint256 worth = ((randomNumber % 1000) / 100);
        // uint256 stamina = ((randomNumber % 1000000) / 10000);

        trophies.push(
            Trophy(
                rarity,
                worth,
                // stamina,
                requestToTrophyName[requestId]
            )
        );
        _safeMint(requestToSender[requestId], newId);

    }

    function setTokenURI(uint256 tokenId, string memory _tokenURI) public {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: transfer caller is not owner nor approved"
        );
        _setTokenURI(tokenId, _tokenURI);

    }

}