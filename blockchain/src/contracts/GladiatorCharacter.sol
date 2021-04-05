// contracts/NFTSimple.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.6.12;

// const RINKEBY_VRF_COORDINATOR = '0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B'
// const RINKEBY_LINKTOKEN = '0x01BE23585060835E02B77ef475b0Cc51aA1e0709'
// const RINKEBY_KEYHASH = '0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311'

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@chainlink/contracts/src/v0.6/VRFConsumerBase.sol";

contract GladiatorCharacter is ERC721, VRFConsumerBase {
    bytes32 public keyHash;
    address public VRFCoordinator;
    // bytes32 internal keyHash;
    uint256 internal fee;
    uint256 public randomResult;
    address public Linktoken;

    struct Character {
        uint256 strength;
        uint256 speed;
        uint256 stamina;
        string name;
    }

    Character[] public characters;
    // mappings will go here 
    mapping(bytes32 => string) requestToCharacterName;
    mapping(bytes32 => address) requestToSender;
    mapping(bytes32 => uint256) requestToTokenId;



    constructor(address _VRFCoordinator, address _LinkToken, bytes32 _keyHash) public
    VRFConsumerBase(_VRFCoordinator, _LinkToken) 
    ERC721("GladiatorCharacter", "GDCT") {
        VRFCoordinator = _VRFCoordinator;
        keyHash = _keyHash;
        Linktoken = _LinkToken;
        fee = 0.1 * 10**18; // 0.1 LINK     
    }

    function requestNewRandomCharacter (uint256 userProvidedSeed, string memory name) public returns (bytes32) {
        bytes32 requestId = requestRandomness(keyHash, fee, userProvidedSeed);
        requestToCharacterName[requestId] = name;
        requestToSender[requestId] = msg.sender;
        return requestId;
    }

    function fulfillRandomness(bytes32 requestId, uint256 randomNumber)
    internal override {
        //define the NFT
        uint256 newId = characters.length;
        uint256 strength = (randomNumber % 100);
        uint256 speed = ((randomNumber % 1000) / 100);
        uint256 stamina = ((randomNumber % 1000000) / 10000);

        characters.push(
            Character(
                strength,
                speed,
                stamina,
                requestToCharacterName[requestId]
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


// pragma solidity ^0.6.12;

// // const RINKEBY_VRF_COORDINATOR = '0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B'
// // const RINKEBY_LINKTOKEN = '0x01BE23585060835E02B77ef475b0Cc51aA1e0709'
// // const RINKEBY_KEYHASH = '0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311'

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@chainlink/contracts/src/v0.6/VRFConsumerBase.sol";

// contract GladiatorCharacter is ERC721, VRFConsumerBase {
//     bytes32 public keyHash;
//     address VRFCoordinator;
//     // bytes32 internal keyHash;
//     uint256 internal fee;
//     uint256 public randomResult;
//     address public Linktoken;
//     uint256 public counter;


//     struct Character {
//         uint256 strength;
//         uint256 speed;
//         uint256 stamina;
//         string name;
//     }
//     // Character[] public characters;
//     // mappings will go here 
//     mapping(uint256 => Character) characters;
//     mapping(bytes32 => string) requestToCharacterName;
//     mapping(bytes32 => address) requestToSender;
//     mapping(bytes32 => uint256) requestToTokenId;



//     constructor(address _VRFCoordinator, address _LinkToken, bytes32 _keyHash) public
//     VRFConsumerBase(_VRFCoordinator, _LinkToken) 
//     ERC721("GladiatorCharacter", "GDCT") {
//         VRFCoordinator = _VRFCoordinator;
//         keyHash = _keyHash;
//         Linktoken = _LinkToken;
//         fee = 0.1 * 10**18; // 0.1 LINK     
//     }

//     function requestNewRandomCharacter (uint256 userProvidedSeed, string memory name) public returns (bytes32) {
//         bytes32 requestId = requestRandomness(keyHash, fee, userProvidedSeed);
//         requestToCharacterName[requestId] = name;
//         requestToSender[requestId] = msg.sender;
//         return requestId;
//     }

//     // function fulfillRandomness(bytes32 requestId, uint256 randomNumber)
//     // internal override {
//     //     //define the NFT
//     //     uint256 newId = characters.length;
//     //     uint256 strength = (randomNumber % 100);
//     //     uint256 speed = ((randomNumber % 1000) / 100);
//     //     uint256 stamina = ((randomNumber % 1000000) / 10000);

//     //     characters.push(
//     //         Character(
//     //             strength,
//     //             speed,
//     //             stamina,
//     //             requestToCharacterName[requestId]
//     //         )
//     //     );
//     //     _safeMint(requestToSender[requestId], newId);

//     // }

//     function fulfillRandomness(bytes32 requestId, uint256 randomNumber)
//     internal override {
//         counter++;
//         //define the NFT
//         // uint256 newId = characters.length;
//         uint256 strength = (randomNumber % 100);
//         uint256 speed = ((randomNumber % 1000) / 100);
//         uint256 stamina = ((randomNumber % 1000000) / 10000);

//         characters[counter] = Character(
//                 strength,
//                 speed,
//                 stamina,
//                 requestToCharacterName[requestId]
//             );
//         _safeMint(requestToSender[requestId], counter);

//     }

//     function setTokenURI(uint256 tokenId, string memory _tokenURI) public {
//         require(
//             _isApprovedOrOwner(_msgSender(), tokenId),
//             "ERC721: transfer caller is not owner nor approved"
//         );
//         _setTokenURI(tokenId, _tokenURI);

//     }

// }