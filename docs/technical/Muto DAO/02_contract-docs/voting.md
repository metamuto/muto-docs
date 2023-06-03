# Voting





Manages proposal voting.


## Methods

### constructor

```solidity
constructor(address commAddr)
```

Initialization the community controller address.

### communityVoteCast

```solidity
function communityVoteCast(uint256 commId, uint256 pollId, bool vote) external
```

Cast vote for the community poll.




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |
| _0 | uint256 | undefined |
| _0 | bool | undefined |

### isAlreadyVoted

```solidity
function isAlreadyVoted(uint256 pollId) internal view returns(bool)
```

Check Voter already voted or not.




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### VotesInfo

```solidity
function VotesInfo(uint256 pollId) external
```

Function used to get the voting information of tha proposal.




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### pollFetch

```solidity
function pollFetch(uint256 id) internal returns ( CommunityPoll storage )
```

Get the details for the community poll (Proposal).




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | CommunityPoll | undefined |


### fetchPollData

```solidity
function fetchPollData(uint256 id) external view returns(CommunityPoll memory)
```

Get the poll details.




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | CommunityPoll | undefined |

### communityPollDelete

```solidity
function communityPollDelete(uint256 pollId) external 
```

Delete the community poll.




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getPollVotes

```solidity
function getPollVotes(uint256 pollId) external view returns(uint256 agreed, uint256 reject) 
```

Get votes details.




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |
| _1 | uint256 | undefined |
### _computePollResult

```solidity
function _computePollResult(uint256 communityId, uint256 pollId) internal returns(bool)
```

Compute poll result and return true or false.




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |
| _1 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |
### _doProposedChanges

```solidity
function _doProposedChanges(uint256 commId, uint256 pollId) external returns (bool)
```

It will do proposed changes in the community.





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |
| _1 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

## Events

### EvtCommunityPollCreate

```solidity
event EvtCommunityPollCreate(uint256 pollId, uint256 startTimestamp, uint256 endTimestamp)
```
### EvtCommunityPollDelete

```solidity
event EvtCommunityPollDelete(uint256 pollId)
```
### EvtCommunityPollVotes

```solidity
event EvtCommunityPollVotes(uint256[] votesIds)
```

### EvtCommunityPoll

```solidity
event EvtCommunityPoll(CommunityPoll poll)
```