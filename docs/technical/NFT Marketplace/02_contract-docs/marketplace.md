# Marketplace


Manages selling and purchaing of the NFTs through Buy Now. The NFTs can also be of tyep Shop, Ticket, or any Asset of shop.

## Methods

### buyShop

```solidity
function buyShop(buyShopData memory _buyData)
```

Internal method that mints an NFT of type ERC-721

#### Parameters

```solidity
    struct buyShopData {
        assetData[] _assetsData;
        address nft;
        bytes signature;
        uint256 amount;
        string encodeKey;
        uint256 nonce;
        address erc20token;
        uint8 currency;
    }
```

### buyTicket

```solidity
function buyTicket(buyTicketData memory _buyTicketData)
```

Internal method that mints an NFT of type ERC-1155

#### Parameters

```solidity
    struct buyTicketData {
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

Other methods are explained in the NFT Marketplce Contracts