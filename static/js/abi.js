// var contractAddress = "0x6150C0D006Fb80a259257D0d4726735085b3667E";

var contractAddress = "0xE9188473faD650c9A821c748830C3494bd36307A" // New one, deployed on sepolia test_net

var abi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "_email",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "enum digiLocker.userType",
        "name": "utype",
        "type": "uint8"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_useraddress",
        "type": "address"
      }
    ],
    "name": "registeredUserEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "docid",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "docOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sharedWith",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "permission",
        "type": "uint8"
      }
    ],
    "name": "sharedDocumentEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "docid",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "docHash",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "user_addr",
        "type": "address"
      }
    ],
    "name": "uploadDocumentEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "docid",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "docOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sharedWith",
        "type": "address"
      }
    ],
    "name": "verifyDocumentEvent",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "isalreadyRegisteredUser",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getUseraccessKey",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getUserType",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getRegisteredUser",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_firstName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_lastName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_email",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "_utype",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "_contact",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "accessKey",
        "type": "bytes32"
      },
      {
        "internalType": "string",
        "name": "pubKey",
        "type": "string"
      }
    ],
    "name": "registerUser",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "docId",
        "type": "bytes32"
      }
    ],
    "name": "checkAlreadyUpload",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getDocCountByUserId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "docName",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "docId",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "docHash",
        "type": "bytes32"
      },
      {
        "internalType": "string",
        "name": "timestamp",
        "type": "string"
      }
    ],
    "name": "uploadDocument",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "docid",
        "type": "bytes32"
      },
      {
        "internalType": "uint8",
        "name": "permission",
        "type": "uint8"
      },
      {
        "internalType": "address",
        "name": "_requester",
        "type": "address"
      }
    ],
    "name": "shareDocumentwithUser",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "docid",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "verifyUserDocument",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "email_",
        "type": "string"
      }
    ],
    "name": "isValidSharableUser",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "docId",
        "type": "bytes32"
      }
    ],
    "name": "getOwnerDocInfoByDocId",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getOwnerDocumetList",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      },
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      },
      {
        "internalType": "bytes32[]",
        "name": "",
        "type": "bytes32[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_useradd",
        "type": "address"
      }
    ],
    "name": "getDocumetList",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      },
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      },
      {
        "internalType": "bytes32[]",
        "name": "",
        "type": "bytes32[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_docId",
        "type": "bytes32"
      }
    ],
    "name": "getDocumentListbyDocId",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getEmailIdByAddrss",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_email",
        "type": "string"
      }
    ],
    "name": "getAddressByEmail",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_usraddrs",
        "type": "address"
      }
    ],
    "name": "getEmailIdByUsrAddr",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_docid_",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "_uaddr_",
        "type": "address"
      }
    ],
    "name": "getDocIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_uaddr_",
        "type": "address"
      }
    ],
    "name": "getPublicKey",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_docId",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "docOwner",
        "type": "address"
      }
    ],
    "name": "getDocumentName",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]
