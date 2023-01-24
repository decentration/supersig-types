// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Struct, Vec, u32 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId } from '@polkadot/types/interfaces/runtime';

/** @name CallId */
export interface CallId extends u32 {}

/** @name FetchListProposals */
export interface FetchListProposals extends Struct {
  readonly proposals_info: ProposalStates;
  readonly no_of_members: u32;
}

/** @name FetchProposalState */
export interface FetchProposalState extends Struct {
  readonly proposal_info: ProposalState;
  readonly no_of_members: u32;
}

/** @name MemberList */
export interface MemberList extends Struct {
  readonly account: AccountId;
  readonly role: Role;
}

/** @name MembersList */
export interface MembersList extends Struct {
  readonly member_info: Vec<ITuple<[AccountId, Role]>>;
}

/** @name ProposalState */
export interface ProposalState extends Struct {
  readonly id: CallId;
  readonly encoded_call: Bytes;
  readonly provider: AccountId;
  readonly voters: Vec<AccountId>;
}

/** @name ProposalStates */
export interface ProposalStates extends Vec<ProposalState> {}

/** @name Role */
export interface Role extends Enum {
  readonly isStandard: boolean;
  readonly asStandard: Bytes;
  readonly isMaster: boolean;
  readonly asMaster: Bytes;
  readonly isNotMember: boolean;
  readonly asNotMember: Bytes;
  readonly type: 'Standard' | 'Master' | 'NotMember';
}

/** @name SupersigId */
export interface SupersigId extends u32 {}

/** @name SupersigIdInfo */
export interface SupersigIdInfo extends Struct {
  readonly supersig_id: u32;
}

/** @name UserSupersig */
export interface UserSupersig extends Struct {
  readonly user_supersigs: Vec<SupersigIdInfo>;
}

export type PHANTOM_DEFAULT = 'default';
