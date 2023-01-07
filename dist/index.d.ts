import { OverrideBundleDefinition } from "@polkadot/types/types";
import { ApiOptions } from "@polkadot/api/types";
import "./interfaces/augment-api";
import "./interfaces/augment-api-consts";
import "./interfaces/augment-api-query";
import "./interfaces/augment-api-rpc";
import "./interfaces/augment-api-tx";
import "./interfaces/augment-types";
export declare const mTypes: Record<string, any>;
export declare const mRpc: {
    superSig: {
        getProposalState: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
        getUserSupersigs: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
        listMembers: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
        listProposals: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
    };
};
export declare const typesBundleForPolkadotApps: OverrideBundleDefinition;
export declare const defaultOptions: ApiOptions;
export declare const options: ({ types, rpc, ...otherOptions }?: ApiOptions) => ApiOptions;
