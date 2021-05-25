// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// const RINKEBY_VRF_COORDINATOR = '0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B'
// const RINKEBY_LINKTOKEN = '0x01BE23585060835E02B77ef475b0Cc51aA1e0709'
// const RINKEBY_KEYHASH = '0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311'

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./link/VRFConsumerBase.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import {SafeMath} from "./utils/Math.sol";

contract TrophyChar is ERC721URIStorage, VRFConsumerBase {
    using SafeMath for uint256;
    using Strings for string;
    
    bytes32 public keyHash;
    address public VRFCoordinator;
    uint256 internal fee;
    uint256 public randomResult;
    address public Linktoken;
    uint256 public tokensCount;
    address public add;

    struct Trophy {
        uint256 tokenId;
        uint256 rarity;
        uint256 worth;
        string name;
        uint256 levelPass;
        string image;
    }

    Trophy[] public trophies;
    // mappings will go here
    mapping(bytes32 => string) requestToTrophyName;
    mapping(bytes32 => uint256) requestToLevel;
    mapping(bytes32 => address) requestToSender;
    mapping(bytes32 => address) requestAddress;
    mapping(bytes32 => uint256) requestToTokenId;
    mapping(bytes32 => string) requestNftURI;
    mapping(address => mapping(uint256 => Trophy)) public usersNft;
    mapping(address => uint256) public usersNftCount;

    constructor(
        address _VRFCoordinator,
        address _LinkToken,
        bytes32 _keyHash
    )
        public
        VRFConsumerBase(_VRFCoordinator, _LinkToken)
        ERC721("TrophyChar", "TRP")
    {
        VRFCoordinator = _VRFCoordinator;
        keyHash = _keyHash;
        Linktoken = _LinkToken;
        fee = 0.1 * 10**18; // 0.1 LINK
    }

    function requestNewRandomTrophy(
        uint256 userProvidedSeed,
        string memory name,
        uint256 levelPass,
        address walletAddress,
        string memory _tokenURI
    ) public returns (bytes32) {
        require(
            LINK.balanceOf(address(this)) >= fee,
            "Not enough LINK - fill contract with faucet"
        );
        bytes32 requestId = requestRandomness(keyHash, fee, userProvidedSeed);
        requestToTrophyName[requestId] = name;
        requestToLevel[requestId] = levelPass;
        requestToSender[requestId] = msg.sender;
        requestAddress[requestId] = walletAddress;
        requestNftURI[requestId] = _tokenURI;

        return requestId;
    }

    function fulfillRandomness(bytes32 requestId, uint256 randomNumber)
        internal
        override
    {
        //define the NFT
        uint256 newId = trophies.length;
        uint256 rarity = (randomNumber % 100);
        uint256 worth = ((randomNumber % 1000) / 100);

        trophies.push(
            Trophy(
                newId,
                rarity,
                worth,
                requestToTrophyName[requestId],
                requestToLevel[requestId],
                requestNftURI[requestId]
            )
        );

        tokensCount++;
        add = requestAddress[requestId];
        usersNftCount[requestAddress[requestId]] =
            usersNftCount[requestAddress[requestId]] +
            1;

        usersNft[requestAddress[requestId]][
            usersNftCount[requestAddress[requestId]]
        ] = Trophy(
            newId,
            rarity,
            worth,
            requestToTrophyName[requestId],
            requestToLevel[requestId],
            requestNftURI[requestId]
        );

        //_safeMint(requestToSender[requestId], newId);
        _safeMint(requestToSender[requestId], newId);
        _setTokenURI(newId, requestNftURI[requestId]);
    }

    function getLevel(uint256 tokenId) public view returns (uint256) {
        return sqrt(trophies[tokenId].rarity);
    }

    function getNumberOfTrophies() public view returns (uint256) {
        return trophies.length;
    }

    function getTrophyOverView(uint256 tokenId)
        public
        view
        returns (
            string memory,
            uint256,
            uint256,
            uint256
        )
    {
        return (
            trophies[tokenId].name,
            trophies[tokenId].rarity + trophies[tokenId].worth,
            getLevel(tokenId),
            trophies[tokenId].rarity
        );
    }

    function getTrophyStats(uint256 tokenId)
        public
        view
        returns (uint256, uint256)
    {
        return (trophies[tokenId].rarity, trophies[tokenId].worth);
    }

    function sqrt(uint256 x) internal view returns (uint256 y) {
        uint256 z = (x + 1) / 2;
        y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
    }
}
