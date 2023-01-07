declare const _default: {
    /**
     * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
     **/
    FrameSystemAccountInfo: {
        nonce: string;
        consumers: string;
        providers: string;
        sufficients: string;
        data: string;
    };
    /**
     * Lookup5: pallet_balances::AccountData<Balance>
     **/
    PalletBalancesAccountData: {
        free: string;
        reserved: string;
        miscFrozen: string;
        feeFrozen: string;
    };
    /**
     * Lookup7: frame_support::weights::PerDispatchClass<T>
     **/
    FrameSupportWeightsPerDispatchClassU64: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup11: sp_runtime::generic::digest::Digest
     **/
    SpRuntimeDigest: {
        logs: string;
    };
    /**
     * Lookup13: sp_runtime::generic::digest::DigestItem
     **/
    SpRuntimeDigestDigestItem: {
        _enum: {
            Other: string;
            __Unused1: string;
            __Unused2: string;
            __Unused3: string;
            Consensus: string;
            Seal: string;
            PreRuntime: string;
            __Unused7: string;
            RuntimeEnvironmentUpdated: string;
        };
    };
    /**
     * Lookup16: frame_system::EventRecord<node_template_runtime::Event, primitive_types::H256>
     **/
    FrameSystemEventRecord: {
        phase: string;
        event: string;
        topics: string;
    };
    /**
     * Lookup18: frame_system::pallet::Event<T>
     **/
    FrameSystemEvent: {
        _enum: {
            ExtrinsicSuccess: {
                dispatchInfo: string;
            };
            ExtrinsicFailed: {
                dispatchError: string;
                dispatchInfo: string;
            };
            CodeUpdated: string;
            NewAccount: {
                account: string;
            };
            KilledAccount: {
                account: string;
            };
            Remarked: {
                _alias: {
                    hash_: string;
                };
                sender: string;
                hash_: string;
            };
        };
    };
    /**
     * Lookup19: frame_support::weights::DispatchInfo
     **/
    FrameSupportWeightsDispatchInfo: {
        weight: string;
        class: string;
        paysFee: string;
    };
    /**
     * Lookup20: frame_support::weights::DispatchClass
     **/
    FrameSupportWeightsDispatchClass: {
        _enum: string[];
    };
    /**
     * Lookup21: frame_support::weights::Pays
     **/
    FrameSupportWeightsPays: {
        _enum: string[];
    };
    /**
     * Lookup22: sp_runtime::DispatchError
     **/
    SpRuntimeDispatchError: {
        _enum: {
            Other: string;
            CannotLookup: string;
            BadOrigin: string;
            Module: string;
            ConsumerRemaining: string;
            NoProviders: string;
            TooManyConsumers: string;
            Token: string;
            Arithmetic: string;
            Transactional: string;
        };
    };
    /**
     * Lookup23: sp_runtime::ModuleError
     **/
    SpRuntimeModuleError: {
        index: string;
        error: string;
    };
    /**
     * Lookup24: sp_runtime::TokenError
     **/
    SpRuntimeTokenError: {
        _enum: string[];
    };
    /**
     * Lookup25: sp_runtime::ArithmeticError
     **/
    SpRuntimeArithmeticError: {
        _enum: string[];
    };
    /**
     * Lookup26: sp_runtime::TransactionalError
     **/
    SpRuntimeTransactionalError: {
        _enum: string[];
    };
    /**
     * Lookup27: pallet_grandpa::pallet::Event
     **/
    PalletGrandpaEvent: {
        _enum: {
            NewAuthorities: {
                authoritySet: string;
            };
            Paused: string;
            Resumed: string;
        };
    };
    /**
     * Lookup30: sp_finality_grandpa::app::Public
     **/
    SpFinalityGrandpaAppPublic: string;
    /**
     * Lookup31: sp_core::ed25519::Public
     **/
    SpCoreEd25519Public: string;
    /**
     * Lookup32: pallet_balances::pallet::Event<T, I>
     **/
    PalletBalancesEvent: {
        _enum: {
            Endowed: {
                account: string;
                freeBalance: string;
            };
            DustLost: {
                account: string;
                amount: string;
            };
            Transfer: {
                from: string;
                to: string;
                amount: string;
            };
            BalanceSet: {
                who: string;
                free: string;
                reserved: string;
            };
            Reserved: {
                who: string;
                amount: string;
            };
            Unreserved: {
                who: string;
                amount: string;
            };
            ReserveRepatriated: {
                from: string;
                to: string;
                amount: string;
                destinationStatus: string;
            };
            Deposit: {
                who: string;
                amount: string;
            };
            Withdraw: {
                who: string;
                amount: string;
            };
            Slashed: {
                who: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup33: frame_support::traits::tokens::misc::BalanceStatus
     **/
    FrameSupportTokensMiscBalanceStatus: {
        _enum: string[];
    };
    /**
     * Lookup34: pallet_transaction_payment::pallet::Event<T>
     **/
    PalletTransactionPaymentEvent: {
        _enum: {
            TransactionFeePaid: {
                who: string;
                actualFee: string;
                tip: string;
            };
        };
    };
    /**
     * Lookup35: pallet_sudo::pallet::Event<T>
     **/
    PalletSudoEvent: {
        _enum: {
            Sudid: {
                sudoResult: string;
            };
            KeyChanged: {
                oldSudoer: string;
            };
            SudoAsDone: {
                sudoResult: string;
            };
        };
    };
    /**
     * Lookup39: pallet_supersig::pallet::Event<T>
     **/
    PalletSupersigEvent: {
        _enum: {
            SupersigCreated: string;
            SupersigRemoved: string;
            CallSubmitted: string;
            CallVoted: string;
            CallExecutionAttempted: string;
            CallRemoved: string;
            MembersAdded: string;
            MembersRemoved: string;
            SupersigLeaved: string;
        };
    };
    /**
     * Lookup43: pallet_supersig::types::Role
     **/
    PalletSupersigRole: {
        _enum: string[];
    };
    /**
     * Lookup45: frame_system::Phase
     **/
    FrameSystemPhase: {
        _enum: {
            ApplyExtrinsic: string;
            Finalization: string;
            Initialization: string;
        };
    };
    /**
     * Lookup49: frame_system::LastRuntimeUpgradeInfo
     **/
    FrameSystemLastRuntimeUpgradeInfo: {
        specVersion: string;
        specName: string;
    };
    /**
     * Lookup53: frame_system::pallet::Call<T>
     **/
    FrameSystemCall: {
        _enum: {
            fill_block: {
                ratio: string;
            };
            remark: {
                remark: string;
            };
            set_heap_pages: {
                pages: string;
            };
            set_code: {
                code: string;
            };
            set_code_without_checks: {
                code: string;
            };
            set_storage: {
                items: string;
            };
            kill_storage: {
                _alias: {
                    keys_: string;
                };
                keys_: string;
            };
            kill_prefix: {
                prefix: string;
                subkeys: string;
            };
            remark_with_event: {
                remark: string;
            };
        };
    };
    /**
     * Lookup58: frame_system::limits::BlockWeights
     **/
    FrameSystemLimitsBlockWeights: {
        baseBlock: string;
        maxBlock: string;
        perClass: string;
    };
    /**
     * Lookup59: frame_support::weights::PerDispatchClass<frame_system::limits::WeightsPerClass>
     **/
    FrameSupportWeightsPerDispatchClassWeightsPerClass: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup60: frame_system::limits::WeightsPerClass
     **/
    FrameSystemLimitsWeightsPerClass: {
        baseExtrinsic: string;
        maxExtrinsic: string;
        maxTotal: string;
        reserved: string;
    };
    /**
     * Lookup62: frame_system::limits::BlockLength
     **/
    FrameSystemLimitsBlockLength: {
        max: string;
    };
    /**
     * Lookup63: frame_support::weights::PerDispatchClass<T>
     **/
    FrameSupportWeightsPerDispatchClassU32: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup64: frame_support::weights::RuntimeDbWeight
     **/
    FrameSupportWeightsRuntimeDbWeight: {
        read: string;
        write: string;
    };
    /**
     * Lookup65: sp_version::RuntimeVersion
     **/
    SpVersionRuntimeVersion: {
        specName: string;
        implName: string;
        authoringVersion: string;
        specVersion: string;
        implVersion: string;
        apis: string;
        transactionVersion: string;
        stateVersion: string;
    };
    /**
     * Lookup71: frame_system::pallet::Error<T>
     **/
    FrameSystemError: {
        _enum: string[];
    };
    /**
     * Lookup73: pallet_timestamp::pallet::Call<T>
     **/
    PalletTimestampCall: {
        _enum: {
            set: {
                now: string;
            };
        };
    };
    /**
     * Lookup76: sp_consensus_aura::sr25519::app_sr25519::Public
     **/
    SpConsensusAuraSr25519AppSr25519Public: string;
    /**
     * Lookup77: sp_core::sr25519::Public
     **/
    SpCoreSr25519Public: string;
    /**
     * Lookup80: pallet_grandpa::StoredState<N>
     **/
    PalletGrandpaStoredState: {
        _enum: {
            Live: string;
            PendingPause: {
                scheduledAt: string;
                delay: string;
            };
            Paused: string;
            PendingResume: {
                scheduledAt: string;
                delay: string;
            };
        };
    };
    /**
     * Lookup81: pallet_grandpa::StoredPendingChange<N, Limit>
     **/
    PalletGrandpaStoredPendingChange: {
        scheduledAt: string;
        delay: string;
        nextAuthorities: string;
        forced: string;
    };
    /**
     * Lookup84: pallet_grandpa::pallet::Call<T>
     **/
    PalletGrandpaCall: {
        _enum: {
            report_equivocation: {
                equivocationProof: string;
                keyOwnerProof: string;
            };
            report_equivocation_unsigned: {
                equivocationProof: string;
                keyOwnerProof: string;
            };
            note_stalled: {
                delay: string;
                bestFinalizedBlockNumber: string;
            };
        };
    };
    /**
     * Lookup85: sp_finality_grandpa::EquivocationProof<primitive_types::H256, N>
     **/
    SpFinalityGrandpaEquivocationProof: {
        setId: string;
        equivocation: string;
    };
    /**
     * Lookup86: sp_finality_grandpa::Equivocation<primitive_types::H256, N>
     **/
    SpFinalityGrandpaEquivocation: {
        _enum: {
            Prevote: string;
            Precommit: string;
        };
    };
    /**
     * Lookup87: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
     **/
    FinalityGrandpaEquivocationPrevote: {
        roundNumber: string;
        identity: string;
        first: string;
        second: string;
    };
    /**
     * Lookup88: finality_grandpa::Prevote<primitive_types::H256, N>
     **/
    FinalityGrandpaPrevote: {
        targetHash: string;
        targetNumber: string;
    };
    /**
     * Lookup89: sp_finality_grandpa::app::Signature
     **/
    SpFinalityGrandpaAppSignature: string;
    /**
     * Lookup90: sp_core::ed25519::Signature
     **/
    SpCoreEd25519Signature: string;
    /**
     * Lookup93: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
     **/
    FinalityGrandpaEquivocationPrecommit: {
        roundNumber: string;
        identity: string;
        first: string;
        second: string;
    };
    /**
     * Lookup94: finality_grandpa::Precommit<primitive_types::H256, N>
     **/
    FinalityGrandpaPrecommit: {
        targetHash: string;
        targetNumber: string;
    };
    /**
     * Lookup96: sp_core::Void
     **/
    SpCoreVoid: string;
    /**
     * Lookup97: pallet_grandpa::pallet::Error<T>
     **/
    PalletGrandpaError: {
        _enum: string[];
    };
    /**
     * Lookup99: pallet_balances::BalanceLock<Balance>
     **/
    PalletBalancesBalanceLock: {
        id: string;
        amount: string;
        reasons: string;
    };
    /**
     * Lookup100: pallet_balances::Reasons
     **/
    PalletBalancesReasons: {
        _enum: string[];
    };
    /**
     * Lookup103: pallet_balances::ReserveData<ReserveIdentifier, Balance>
     **/
    PalletBalancesReserveData: {
        id: string;
        amount: string;
    };
    /**
     * Lookup105: pallet_balances::Releases
     **/
    PalletBalancesReleases: {
        _enum: string[];
    };
    /**
     * Lookup106: pallet_balances::pallet::Call<T, I>
     **/
    PalletBalancesCall: {
        _enum: {
            transfer: {
                dest: string;
                value: string;
            };
            set_balance: {
                who: string;
                newFree: string;
                newReserved: string;
            };
            force_transfer: {
                source: string;
                dest: string;
                value: string;
            };
            transfer_keep_alive: {
                dest: string;
                value: string;
            };
            transfer_all: {
                dest: string;
                keepAlive: string;
            };
            force_unreserve: {
                who: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup111: pallet_balances::pallet::Error<T, I>
     **/
    PalletBalancesError: {
        _enum: string[];
    };
    /**
     * Lookup113: pallet_transaction_payment::Releases
     **/
    PalletTransactionPaymentReleases: {
        _enum: string[];
    };
    /**
     * Lookup114: pallet_sudo::pallet::Call<T>
     **/
    PalletSudoCall: {
        _enum: {
            sudo: {
                call: string;
            };
            sudo_unchecked_weight: {
                call: string;
                weight: string;
            };
            set_key: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            sudo_as: {
                who: string;
                call: string;
            };
        };
    };
    /**
     * Lookup116: pallet_supersig::pallet::Call<T>
     **/
    PalletSupersigCall: {
        _enum: {
            create_supersig: {
                members: string;
            };
            submit_call: {
                supersigAccount: string;
                call: string;
            };
            approve_call: {
                supersigAccount: string;
                callId: string;
            };
            remove_call: {
                supersigAccount: string;
                callId: string;
            };
            add_members: {
                newMembers: string;
            };
            remove_members: {
                membersToRemove: string;
            };
            delete_supersig: {
                beneficiary: string;
            };
            leave_supersig: {
                supersigAccount: string;
            };
        };
    };
    /**
     * Lookup119: pallet_sudo::pallet::Error<T>
     **/
    PalletSudoError: {
        _enum: string[];
    };
    /**
     * Lookup122: pallet_supersig::types::PreimageCall<sp_core::crypto::AccountId32, Balance>
     **/
    PalletSupersigPreimageCall: {
        data: string;
        provider: string;
        deposit: string;
    };
    /**
     * Lookup124: frame_support::PalletId
     **/
    FrameSupportPalletId: string;
    /**
     * Lookup125: pallet_supersig::pallet::Error<T>
     **/
    PalletSupersigError: {
        _enum: string[];
    };
    /**
     * Lookup127: sp_runtime::MultiSignature
     **/
    SpRuntimeMultiSignature: {
        _enum: {
            Ed25519: string;
            Sr25519: string;
            Ecdsa: string;
        };
    };
    /**
     * Lookup128: sp_core::sr25519::Signature
     **/
    SpCoreSr25519Signature: string;
    /**
     * Lookup129: sp_core::ecdsa::Signature
     **/
    SpCoreEcdsaSignature: string;
    /**
     * Lookup132: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
     **/
    FrameSystemExtensionsCheckNonZeroSender: string;
    /**
     * Lookup133: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
     **/
    FrameSystemExtensionsCheckSpecVersion: string;
    /**
     * Lookup134: frame_system::extensions::check_tx_version::CheckTxVersion<T>
     **/
    FrameSystemExtensionsCheckTxVersion: string;
    /**
     * Lookup135: frame_system::extensions::check_genesis::CheckGenesis<T>
     **/
    FrameSystemExtensionsCheckGenesis: string;
    /**
     * Lookup138: frame_system::extensions::check_nonce::CheckNonce<T>
     **/
    FrameSystemExtensionsCheckNonce: string;
    /**
     * Lookup139: frame_system::extensions::check_weight::CheckWeight<T>
     **/
    FrameSystemExtensionsCheckWeight: string;
    /**
     * Lookup140: pallet_transaction_payment::ChargeTransactionPayment<T>
     **/
    PalletTransactionPaymentChargeTransactionPayment: string;
    /**
     * Lookup141: node_template_runtime::Runtime
     **/
    NodeTemplateRuntimeRuntime: string;
};
export default _default;
