# Marketplace


Manages selling and purchaing of the NFTs through Buy Now, Bids, and Offers.

## Methods

### mint721

```solidity
function mint721(mint721Data memory _nftData) internal returns (uint256)
```

Internal method that mints an NFT of type ERC-721

#### Parameters

```solidity
    struct mint721Data {
        string metadata;
        address payable owner;
        address nft;
    }
```

### mint1155

```solidity
function mint1155(mint1155Data memory _nftData) internal returns (uint256)
```

Internal method that mints an NFT of type ERC-1155

#### Parameters

```solidity
    struct mint1155Data {
        address payable owner;
        address nft;
        uint256 amount;
    }
```


### transfer721

```solidity
function transfer721(address cAddress, address from, address to, uint256 token)
```

Internal method that transfers an NFT of type ERC-721

#### Parameters

| Name | Type |
|---|---|
| cAddress | address |
| from | address |
| to | address |
| token | uint256 |


### transfer1155

```solidity
function transfer1155(address cAddress, address from, address to, uint256 amount, uint256 token)
```

Internal method that transfers an NFT of type ERC-1155

#### Parameters

| Name | Type |
|---|---|
| cAddress | address |
| from | address |
| to | address |
| amount | uint256 |
| token | uint256 |


### transfer20

```solidity
function transfer20(address from, address to, uint256 amount, address tokenAddress)
```

Internal method that transfers an NFT of type ERC-20

#### Parameters

| Name | Type |
|---|---|
| from | address |
| to | address |
| amount | uint256 |
| tokenAddress | address |


### calculatePercentValue

```solidity
function calculatePercentValue(uint256 total, uint256 percent)
```

Internal method that calculates percentages

#### Parameters

| Name | Type |
|---|---|
| total | uint256 |
| percent | uint256 |


### acceptOfferBid721

```solidity
function acceptOfferBid721(acceptOfferBid721Data memory _transferData)
```

Public method that manages the transfer of NFT by accepting bid or offers for ERC-721

#### Parameters

```solidity
    struct acceptOfferBid721Data {
        string metadata;
        uint256 tokenId;
        address newOwner;
        address creator;
        address nft;
        bytes signature;
        uint256 amount;
        uint256 percent;
        uint256 royalty;
        string encodeKey;
        uint256 nonce;
        address erc20token;
    }
```


### acceptOfferBid1155

```solidity
function acceptOfferBid1155(acceptOfferBid1155Data memory _transferData)
```

Public method that manages the transfer of NFT by accepting bid or offers for ERC-1155

#### Parameters

```solidity
    struct acceptOfferBid1155Data {
        uint256 tokenId;
        address newOwner;
        address creator;
        uint256 quantity;
        uint256 totalQuantity;
        address nft;
        bytes signature;
        uint256 amount;
        uint256 percent;
        uint256 royalty;
        string encodeKey;
        uint256 nonce;
        address erc20token;
    }
```


### buy721

```solidity
function buy721(buy721Data memory _buyData)
```

Public method that manages the transfer of NFT by directly buying an ERC-721

#### Parameters

```solidity
    struct buy721Data {
        string metadata;
        uint256 tokenId;
        address owner;
        address creator;
        address nft;
        bytes signature;
        uint256 amount;
        uint256 percent;
        uint256 royalty;
        string encodeKey;
        uint256 nonce;
        address erc20token;
        uint8 currency;
    }
```

### buy1155

```solidity
function buy1155(buy1155Data memory _buyData)
```

Public method that manages the transfer of NFT by directly buying an ERC-1155

#### Parameters

```solidity
    struct buy1155Data {
        uint256 tokenId;
        address owner;
        address creator;
        uint256 quantity;
        uint256 totalQuantity;
        address nft;
        bytes signature;
        uint256 amount;
        uint256 percent;
        uint256 royalty;
        string encodeKey;
        uint256 nonce;
        address erc20token;
        uint8 currency;
    }
```

### create721

```solidity
function create721(create721Data memory _createData)
```

Public method that creates an NFT of ERC-721

#### Parameters

```solidity
    struct create721Data {
        string metadata;
        address owner;
        address nft;
        bytes signature;
        uint256 amount;
        string encodeKey;
        uint256 nonce;
    }
```

### create1155

```solidity
function create1155(create1155Data memory _createData)
```

Public method that creates an NFT of ERC-1155

#### Parameters

```solidity
    struct create1155Data {
        address owner;
        address nft;
        bytes signature;
        uint256 amount;
        string encodeKey;
        uint256 nonce;
        uint256 totalQuantity;
    }
```


### transferForFree721

```solidity
function transferForFree721(transfer721Data memory _transferData)
```

Public method that manages free transfer of an NFT of ERC-721

#### Parameters

```solidity
    struct transfer721Data {
        string metadata;
        uint256 tokenId; 
        address newOwner;
        address nft;
        uint256 amount;
        bytes signature;
        address currentOwner;
        string encodeKey;
        uint256 nonce;
    }
```


### transferForFree1155

```solidity
function transferForFree1155(transfer1155Data memory _transferData)
```

Public method that manages free transfer of an NFT of ERC-1155

#### Parameters

```solidity
    struct transfer1155Data {
        string metadata;
        uint256 tokenId; 
        address newOwner;
        address nft;
        uint256 amount;
        uint256 quantity;
        bytes signature;
        address currentOwner;
        string encodeKey;
        uint256 nonce;
    }
```
