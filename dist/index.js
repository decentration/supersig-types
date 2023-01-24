"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("@polkadot/api-base/types/consts"),require("@polkadot/api-base/types/errors"),require("@polkadot/api-base/types/events"),require("@polkadot/api-base/types/storage"),require("@polkadot/api-base/types/submittable"),require("@polkadot/rpc-core/types/jsonrpc"),require("@polkadot/api-base/types/calls"),require("@polkadot/types/types/registry");var e=Object.freeze({__proto__:null,default:{types:{Role:{_enum:{Standard:"Vec<u8>",Master:"Vec<u8>",NotMember:"Vec<u8>"}},SupersigId:"u32",SupersigIdInfo:{supersig_id:"u32"},CallId:"u32",ProposalStates:"Vec<ProposalState<AccountId>>",FetchListProposals:{proposals_info:"ProposalStates",no_of_members:"u32"},ProposalState:{id:"CallId",encoded_call:"Vec<u8>",provider:"AccountId",voters:"Vec<AccountId>"},FetchProposalState:{proposal_info:"ProposalState<AccountId>",no_of_members:"u32"},MemberList:{account:"AccountId",role:"Role"},MembersList:{member_info:"Vec<(AccountId, Role)>"},UserSupersig:{user_supersigs:"Vec<SupersigIdInfo>"}}}});const s=Object.values(e).reduce(((e,{types:s})=>({...e,...s})),{}),t={superSig:{getProposalState:{description:"Get the proposal state",params:[{name:"supersig_id",type:"AccountId"},{name:"call_id",type:"CallId"}],type:"FetchProposalState"},getUserSupersigs:{description:"Get supersigs associated to the user.",params:[{name:"user_account",type:"AccountId"}],type:"UserSupersig"},listMembers:{description:"List members of the supersig",params:[{name:"supersig_id",type:"AccountId"}],type:"MembersList"},listProposals:{description:"List proposals associated to a supersig",params:[{name:"supersig_id",type:"AccountId"}],type:"FetchListProposals"}}},o={types:[{minmax:[0,void 0],types:s}],rpc:t},p={types:s,rpc:t};exports.defaultOptions=p,exports.mRpc=t,exports.mTypes=s,exports.options=({types:e={},rpc:o={},...p}={})=>({types:{...s,...e},rpc:{...t,...o},...p}),exports.typesBundleForPolkadotApps=o;
