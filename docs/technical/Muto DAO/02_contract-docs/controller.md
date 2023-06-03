# Controller





Controller contract use for the governance, manage members/groups, voting and proposal creation permissions.

## Methods

### initialize

```solidity
function initialize(address tokenAddr) public initializer
```

Intialize the Muto Token (ERC20).




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### _authorizeUpgrade

```solidity
function _authorizeUpgrade(address) internal override onlyOwner {}
```

Upgrade the controller contract.




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### activate

```solidity
function activate() external onlyInitializing
```

Activate the controller state changes.

### deactivate

```solidity
function deactivate() external
```

Deactivate the controller state changes.

### setVotingContractAddress

```solidity
function setVotingContractAddress(address votingContractAddr) external onlyOwner
```

Set the voting contract address.




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### assertVotingContractAddr

```solidity
function assertVotingContractAddr() internal returns(bool)
```

Assert voting contract address.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### fetchAssertCommunity

```solidity
function fetchAssertCommunity(uint256 id, string memory errorMsg) internal view returns (Community storage)
```

Assert community.




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |
| _1 | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | Community | undefined |

### fetchCommunity

```solidity
function fetchCommunity(uint256 id) internal view returns (Community storage)
```

Retrieve data for target community if it exists. Used internally by various calls to validate community status, permissions, etc.




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | Community | undefined |

### setControllerProxy

```solidity
function setControllerProxy(address target) internal initializer returns (bool)
```

Set the proxy contract address which will call this contract. Can only be set once during contract initialization.





#### Parameters

| Name | Type | Description |
|---|---|---|
| policy_ | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### communityGroupsDetail

```solidity
function communityGroupsDetail(uint256 daoId) public view returns(Group[] memory group)
```

Check groups details of the particular community DAO




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | Group | undefined |

### communityDetail

```solidity
function communityDetail(uint256 daoId) public view returns(Community memory)
```

Create group of community and return array of id of the group.




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | Community | undefined |

### communityCreate

```solidity
function communityCreate(string memory name, string memory purpose, string memory legalStatus, string memory legalDocuments, string[] memory links, Group[] memory group, string memory logoImage, string memory coverImage) external onlyProxy returns (bool)
```

Create a Freedom MetaDAO Community using the provided parameters. Caller becomes the first member and admin automatically if the action succeeds.




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |
| _1 | string | undefined |
| _2 | string | undefined |
| _3 | string | undefined |
| _4 | string[] | undefined |
| _6 | Group[] | undefined |
| _7 | string | undefined |
| _8 | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### transferBounty

```solidity
function transferBounty(uint256 _amount, address _targetAcc, uint256 commId) external onlyProxy returns (bool)
```

Transfer a bounty




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |
| _1 | address | undefined |
| _2 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### depositAmount

```solidity
function depositAmount(uint _amount, uint256 commId) external onlyProxy returns (bool)
```

Deposit amount to community 




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint | undefined |
| _1 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### changeName

```solidity
function changeName(string memory proposedDaoName, uint256 commId) external onlyProxy returns (bool)
```

Change the community name with proposed community name.




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |
| _1 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### changePurpose

```solidity
function changePurpose(string memory proposedPurpose, uint256 commId) external onlyProxy returns (bool)
```

Change the community purpose description with proposed community purpose description.




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |
| _1 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### changelinks

```solidity
function changelinks(string[] memory links, uint256 commId) external onlyProxy returns (bool)
```

Change the community links with proposed links.




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string[] | undefined |
| _1 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### changeLogoNCoverImage

```solidity
function changeLogoNCoverImage(string memory logoImage, string memory coverImage, uint256 commId) external onlyProxy returns (bool)
```

Change the community logo and cover with proposed logo and cover.




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |
| _1 | string | undefined |
| _2 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### changeLegalStatusNDoc

```solidity
function changeLegalStatusNDoc(string memory legalStatus, string memory legalDocuments, uint256 commId) external onlyProxy returns (bool)
```

change the community legal status with proposed legal status.




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |
| _1 | string | undefined |
| _2 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### addMemberToGroup

```solidity
function addMemberToGroup(address addr, uint256 groupId, uint256 commId) external onlyProxy returns
```

Add member to group - internal function




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint256 | undefined |
| _2 | uint256 | undefined |

### removeMemberToGroup

```solidity
function removeMemberToGroup(address addr, uint256 groupId, uint256 commId) external onlyProxy returns (bool)
```

Remove member from group - internal function




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint256 | undefined |
| _2 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### createGroup

```solidity
function createGroup(Group memory newGroup, uint256 commId) external onlyProxy returns (bool)
```

Create group of a community.




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | Group | undefined |
| _1 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isMemberOfCommunity

```solidity
function isMemberOfCommunity(uint256 commId, address senderAddr) internal view returns (MemberOfCommRes memory)
```

Check if is it a member of that community.




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |
| _1 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | MemberOfCommRes | undefined |

### proposalCreationRight

```solidity
function proposalCreationRight(uint256 _type, uint256 commId, address senderAddr) external view returns (bool)
```

Do member have proposal creation rights.




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |
| _1 | uint256 | undefined |
| _1 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### votingRight

```solidity
function votingRight(uint256 _type, uint256 commId, address senderAddr) external view returns (bool)
```

Do member have voting rights on proposal.




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |
| _1 | uint256 | undefined |
| _1 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |


## Events

### EvtCommunityCreate

```solidity
event EvtCommunityCreate( uint256 id, uint256[] groupIds);

```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |
| _1 | uint256 | undefined |

### EvtCommunitySuspend

```solidity
event EvtCommunitySuspend( string reason )

```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### EvtCommunityUnsuspend

```solidity
event EvtCommunityUnsuspend( string reason )
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### EvtCreateGroup

```solidity
event EvtCreateGroup( uint256 groupId );
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |