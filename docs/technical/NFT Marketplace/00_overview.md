---
sidebar_position: 0
---

# Contracts Overview

The Muto NFT Marketplace is a place where different users can create, sell, purchase, auction their NFTs. The platform allows users to place bids or offers on the NFTs depending on the nature of their selling. Platform manages the royalty of the creators. 

### Configuration

There are no specific configurations you need to make on yoru side, except having some pre-requisits on your side. For example: a wallet, some Native tokens for the supported blockchains, and MUTO token.

## Managing NFTs

### Creating an NFT

Any user, logged into the sysytem can create their NFTs. ERC-721 and ERC-1155 both protocols are implmented, so users can create NFTs of the any mentioned protocols. While creating 1155, the maximum copies needs to be supplied. Additional properties of the NFTs can also be provided while creating NFTs.

### Selling NFTs

NFT's owner can put the NFTs for selling. While putting an NFT on selling, 2 options are availabel for the NFTs selling i.e Timed Auctions, and Fixed Price.

#### Timed Auctions

A method for selling the NFTs, when an NFT is put on Timed Auction, other users can bid on the NFT untill the NFT is not transferred to the other user. The owner of the NFT can accept any bid. While setting, a minimum amount can be defined for the bidders to start the bidding from.

#### Fixed Price

This is the second available option for selling NFTs. When put by the method, any NFT can be sold by the mentioned price, or the users can make their offers for the NFTs pricing.

### Purchaing NFTs

Any NFT can be purchased by paying the NFT's price at any time, if the NFT is put on sell by the owner with the method of Fixed Price. If the NFT is on Auction users can place bids on the NFT and owner decides which bid to be accepted.

#### Placing Bids
Bids can be placed on the NFT, if the NFT is on selling with timed auction method. A starting bid is decided by the owner, and then other users can place their bids. The bids should be greater than the initial bid value decided by the owner. It depends on the owner, if it accepts any bid or not. There is a deadline for placing the bids, if any bid is accepted before the time, the NFT is transferred to the bidder. If the bid is not accepted, the NFT is removed from selling.

#### Making Offers

If the NFT is on selling with Fixed Price, counter offers can be made by the users, which can be less than the amount mentioned by the NFT owner. Just like bids, offers also has a deadline, if the offer is accepted in time the NFT is transferred to the user whose offer is accepted, otherwise the NFT is removed from selling.

#### Direct Buy Now

An NFT can be direcly purchased by paying the amount set by the NFT's owner, if the NFT is on sale with Fixed Price.

### NFTs Purchaing currency

For the Buy Now, the NFTs can be purchased by paying either in Native tokens, or by paying MUTO tokens, it depends on the selection of the NFT seller. 
For making offers or bids, the user should have Wrapped token of the native token.

## NFT Types

### Single Mint NFT (ERC-721)

[A standard ERC-721 Token implementation. For details please visit.](https://ethereum.org/en/developers/docs/standards/tokens/erc-721/)

### Multi Mint NFT (ERC-1155)

[A standard ERC-1155 Token implementation. For details please visit.](https://ethereum.org/en/developers/docs/standards/tokens/erc-1155/)

## Other Features
NFT Collections, Authors, FAQs, Trading History, Profile Management, Explore NFT, Filters, Get in Touch are some of the major features of the NFTs.