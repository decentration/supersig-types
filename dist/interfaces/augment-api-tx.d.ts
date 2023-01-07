import '@polkadot/api-base/types/submittable';
import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api-base/types';
import type { Bytes, Compact, Vec, bool, u128, u32, u64 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, MultiAddress, Perbill } from '@polkadot/types/interfaces/runtime';
import type { PalletSupersigRole, SpCoreVoid, SpFinalityGrandpaEquivocationProof } from '@polkadot/types/lookup';
export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>;
declare module '@polkadot/api-base/types/submittable' {
    interface AugmentedSubmittables<ApiType extends ApiTypes> {
        balances: {
            /**
             * Exactly as `transfer`, except the origin must be root and the source account may be
             * specified.
             * # <weight>
             * - Same as transfer, but additional read and write because the source account is not
             * assumed to be in the overlay.
             * # </weight>
             **/
            forceTransfer: AugmentedSubmittable<(source: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Compact<u128>]>;
            /**
             * Unreserve some balance from a user by force.
             *
             * Can only be called by ROOT.
             **/
            forceUnreserve: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
            /**
             * Set the balances of a given account.
             *
             * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
             * also alter the total issuance of the system (`TotalIssuance`) appropriately.
             * If the new free or reserved balance is below the existential deposit,
             * it will reset the account nonce (`frame_system::AccountNonce`).
             *
             * The dispatch origin for this call is `root`.
             **/
            setBalance: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, newReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>, Compact<u128>]>;
            /**
             * Transfer some liquid free balance to another account.
             *
             * `transfer` will set the `FreeBalance` of the sender and receiver.
             * If the sender's account is below the existential deposit as a result
             * of the transfer, the account will be reaped.
             *
             * The dispatch origin for this call must be `Signed` by the transactor.
             *
             * # <weight>
             * - Dependent on arguments but not critical, given proper implementations for input config
             * types. See related functions below.
             * - It contains a limited number of reads and writes internally and no complex
             * computation.
             *
             * Related functions:
             *
             * - `ensure_can_withdraw` is always called internally but has a bounded complexity.
             * - Transferring balances to accounts that did not exist before will cause
             * `T::OnNewAccount::on_new_account` to be called.
             * - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
             * - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
             * that the transfer will not kill the origin account.
             * ---------------------------------
             * - Origin account is already in memory, so no DB operations for them.
             * # </weight>
             **/
            transfer: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
            /**
             * Transfer the entire transferable balance from the caller account.
             *
             * NOTE: This function only attempts to transfer _transferable_ balances. This means that
             * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
             * transferred by this function. To ensure that this function results in a killed account,
             * you might need to prepare the account by removing any reference counters, storage
             * deposits, etc...
             *
             * The dispatch origin of this call must be Signed.
             *
             * - `dest`: The recipient of the transfer.
             * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
             * of the funds the account has, causing the sender account to be killed (false), or
             * transfer everything except at least the existential deposit, which will guarantee to
             * keep the sender account alive (true). # <weight>
             * - O(1). Just like transfer, but reading the user's transferable balance first.
             * #</weight>
             **/
            transferAll: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
            /**
             * Same as the [`transfer`] call, but with a check that the transfer will not kill the
             * origin account.
             *
             * 99% of the time you want [`transfer`] instead.
             *
             * [`transfer`]: struct.Pallet.html#method.transfer
             **/
            transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
        };
        grandpa: {
            /**
             * Note that the current authority set of the GRANDPA finality gadget has stalled.
             *
             * This will trigger a forced authority set change at the beginning of the next session, to
             * be enacted `delay` blocks after that. The `delay` should be high enough to safely assume
             * that the block signalling the forced change will not be re-orged e.g. 1000 blocks.
             * The block production rate (which may be slowed down because of finality lagging) should
             * be taken into account when choosing the `delay`. The GRANDPA voters based on the new
             * authority will start voting on top of `best_finalized_block_number` for new finalized
             * blocks. `best_finalized_block_number` should be the highest of the latest finalized
             * block of all validators of the new authority set.
             *
             * Only callable by root.
             **/
            noteStalled: AugmentedSubmittable<(delay: u32 | AnyNumber | Uint8Array, bestFinalizedBlockNumber: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
            /**
             * Report voter equivocation/misbehavior. This method will verify the
             * equivocation proof and validate the given key ownership proof
             * against the extracted offender. If both are valid, the offence
             * will be reported.
             **/
            reportEquivocation: AugmentedSubmittable<(equivocationProof: SpFinalityGrandpaEquivocationProof | {
                setId?: any;
                equivocation?: any;
            } | string | Uint8Array, keyOwnerProof: SpCoreVoid | null) => SubmittableExtrinsic<ApiType>, [SpFinalityGrandpaEquivocationProof, SpCoreVoid]>;
            /**
             * Report voter equivocation/misbehavior. This method will verify the
             * equivocation proof and validate the given key ownership proof
             * against the extracted offender. If both are valid, the offence
             * will be reported.
             *
             * This extrinsic must be called unsigned and it is expected that only
             * block authors will call it (validated in `ValidateUnsigned`), as such
             * if the block author is defined it will be defined as the equivocation
             * reporter.
             **/
            reportEquivocationUnsigned: AugmentedSubmittable<(equivocationProof: SpFinalityGrandpaEquivocationProof | {
                setId?: any;
                equivocation?: any;
            } | string | Uint8Array, keyOwnerProof: SpCoreVoid | null) => SubmittableExtrinsic<ApiType>, [SpFinalityGrandpaEquivocationProof, SpCoreVoid]>;
        };
        sudo: {
            /**
             * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
             * key.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * # <weight>
             * - O(1).
             * - Limited storage reads.
             * - One DB change.
             * # </weight>
             **/
            setKey: AugmentedSubmittable<(updated: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
            /**
             * Authenticates the sudo key and dispatches a function call with `Root` origin.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * # <weight>
             * - O(1).
             * - Limited storage reads.
             * - One DB write (event).
             * - Weight of derivative `call` execution + 10,000.
             * # </weight>
             **/
            sudo: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
            /**
             * Authenticates the sudo key and dispatches a function call with `Signed` origin from
             * a given account.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * # <weight>
             * - O(1).
             * - Limited storage reads.
             * - One DB write (event).
             * - Weight of derivative `call` execution + 10,000.
             * # </weight>
             **/
            sudoAs: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Call]>;
            /**
             * Authenticates the sudo key and dispatches a function call with `Root` origin.
             * This function does not check the weight of the call, and instead allows the
             * Sudo user to specify the weight of the call.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * # <weight>
             * - O(1).
             * - The weight of this call is defined by the caller.
             * # </weight>
             **/
            sudoUncheckedWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, u64]>;
        };
        supersig: {
            /**
             * add members the supersig
             *
             * `add members` will add a list of addesses to the members list of the supersig.
             * if an address is already present, it will be ignored.
             *
             * The dispatch origin for this call must be `Signed` by the supersig
             *
             * # <weight>
             **/
            addMembers: AugmentedSubmittable<(newMembers: Vec<ITuple<[AccountId32, PalletSupersigRole]>> | ([AccountId32 | string | Uint8Array, PalletSupersigRole | 'Standard' | 'Master' | 'NotMember' | number | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId32, PalletSupersigRole]>>]>;
            /**
             * vote for a call in the supersig
             *
             * `approve_call` will add a positive, unique vote to the specified call proposal.
             * if the numbers of votes on this proposal = SimpleMajority (51%), then the call is
             * executed
             *
             * The dispatch origin for this call must be `Signed`, and the origin must be a
             * supersig's member
             *
             * # <weight>
             *
             * Related functions:
             * - `Currency::unreserve` will be called once IF SimpleMajority is reached
             **/
            approveCall: AugmentedSubmittable<(supersigAccount: AccountId32 | string | Uint8Array, callId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u128]>;
            /**
             * create a supersig.
             *
             * `create_supersig` will create a supersig with specified parameters, and transfer
             * currencies from the creator to the generated supersig:
             * - the existencial deposit (minimum amount to make an account alive)
             * - the price corresponding to the size (in bytes) of the members times the
             * DepositPerByte
             *
             * The dispatch origin for this call must be `Signed`.
             *
             * # <weight>
             *
             * Related functions:
             * - `Currency::transfer` will be called once to deposit an existencial amount on supersig
             * - `frame_system::inc_consumers` will be called once to protect the supersig from
             * deletion
             **/
            createSupersig: AugmentedSubmittable<(members: Vec<ITuple<[AccountId32, PalletSupersigRole]>> | ([AccountId32 | string | Uint8Array, PalletSupersigRole | 'Standard' | 'Master' | 'NotMember' | number | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId32, PalletSupersigRole]>>]>;
            /**
             * remove the supersig
             *
             * `delete_supersig` will remove every members, transfer every remanent funds to the
             * target account, remove the supersig from storage, and set the consumers and providers
             * to 0
             *
             * The dispatch origin for this call must be `Signed` by the supersig
             *
             * # <weight>
             **/
            deleteSupersig: AugmentedSubmittable<(beneficiary: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
            /**
             * leave a supersig
             *
             * `leave_supersig` will remove caller from selected supersig
             *
             * The dispatch origin for this call must be `Signed` by the user.
             *
             * # <weight>
             **/
            leaveSupersig: AugmentedSubmittable<(supersigAccount: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
            /**
             * remove a call from the supersig
             *
             * `remove_call` will remove a call from the poll.
             *
             * The dispatch origin for this call must be `Signed` by either the supersig or the
             * account who submited the call
             *
             * # <weight>
             *
             * Related functions:
             * - `Currency::unreserve` will be called once
             **/
            removeCall: AugmentedSubmittable<(supersigAccount: AccountId32 | string | Uint8Array, callId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u128]>;
            /**
             * remove members from the supersig
             *
             * `remove_members` will remove a list of addesses from the members list of the supersig.
             * if an address is not present, it will be ignored.
             *
             * The dispatch origin for this call must be `Signed` by the supersig
             *
             * # <weight>
             **/
            removeMembers: AugmentedSubmittable<(membersToRemove: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
            /**
             * submit a call to a specific supersig.
             *
             * `submit_call` will create a proposal on the supersig, that members can approve.
             * this will lock an amount that depend on the lenght of the encoded call, to prevent spam
             *
             * The dispatch origin for this call must be `Signed`, and the origin must be a
             * supersig's member
             *
             * # <weight>
             *
             * Related functions:
             * - `Currency::reserve` will be called once to lock the deposit amount
             **/
            submitCall: AugmentedSubmittable<(supersigAccount: AccountId32 | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Call]>;
        };
        system: {
            /**
             * A dispatch that will fill the block weight up to the given ratio.
             **/
            fillBlock: AugmentedSubmittable<(ratio: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
            /**
             * Kill all storage items with a key that starts with the given prefix.
             *
             * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
             * the prefix we are removing to accurately calculate the weight of this function.
             **/
            killPrefix: AugmentedSubmittable<(prefix: Bytes | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32]>;
            /**
             * Kill some items from storage.
             **/
            killStorage: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>]>;
            /**
             * Make some on-chain remark.
             *
             * # <weight>
             * - `O(1)`
             * # </weight>
             **/
            remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * Make some on-chain remark and emit event.
             **/
            remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * Set the new runtime code.
             *
             * # <weight>
             * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
             * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
             * expensive).
             * - 1 storage write (codec `O(C)`).
             * - 1 digest item.
             * - 1 event.
             * The weight of this function is dependent on the runtime, but generally this is very
             * expensive. We will treat this as a full block.
             * # </weight>
             **/
            setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * Set the new runtime code without doing any checks of the given `code`.
             *
             * # <weight>
             * - `O(C)` where `C` length of `code`
             * - 1 storage write (codec `O(C)`).
             * - 1 digest item.
             * - 1 event.
             * The weight of this function is dependent on the runtime. We will treat this as a full
             * block. # </weight>
             **/
            setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * Set the number of pages in the WebAssembly environment's heap.
             **/
            setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
            /**
             * Set some items of storage.
             **/
            setStorage: AugmentedSubmittable<(items: Vec<ITuple<[Bytes, Bytes]>> | ([Bytes | string | Uint8Array, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Bytes, Bytes]>>]>;
        };
        timestamp: {
            /**
             * Set the current time.
             *
             * This call should be invoked exactly once per block. It will panic at the finalization
             * phase, if this call hasn't been invoked by that time.
             *
             * The timestamp should be greater than the previous one by the amount specified by
             * `MinimumPeriod`.
             *
             * The dispatch origin for this call must be `Inherent`.
             *
             * # <weight>
             * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
             * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
             * `on_finalize`)
             * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
             * # </weight>
             **/
            set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
        };
    }
}
