import { OverrideBundleDefinition } from "@polkadot/types/types";
import { ApiOptions } from "@polkadot/api/types";

import * as definitions from "./interfaces/definitions";

import "./interfaces/augment-api";
import "./interfaces/augment-api-consts";
import "./interfaces/augment-api-query";
import "./interfaces/augment-api-rpc";
import "./interfaces/augment-api-tx";
import "./interfaces/augment-types";

export const mTypes = Object.values(definitions).reduce(
  (res: Record<string, any>, { types }): Record<string, any> => ({
    ...res,
    ...types
  }),
  {}
);

export const mRpc = {

    superSig: {
      getProposalState: {
        description: 'Get the proposal state',
        params: [
          {
            name: 'supersig_id',
            type: 'AccountId'
          },
          {
            name: 'call_id',
            type: 'CallId'
          }
        ],
        type: 'FetchProposalState'
      },
      getUserSupersigs: {
        description: 'Get supersigs associated to the user.',
        params: [
          {
            name: 'user_account',
            type: 'AccountId'
          }
        ],
        type: 'UserSupersig'
      },
      listMembers: {
        description: 'List members of the supersig',
        params: [
          {
            name: 'supersig_id',
            type: 'AccountId'
          }
        ],
        type: 'MembersList'
      },
      listProposals: {
        description: 'List proposals associated to a supersig',
        params: [
          {
            name: 'supersig_id',
            type: 'AccountId'
          }
        ],
        type: 'FetchListProposals'
      }
    }
};

export const typesBundleForPolkadotApps: OverrideBundleDefinition = {
  types: [
    {
      minmax: [0, undefined],
      types: mTypes
    }
  ],
  rpc: mRpc
};

export const defaultOptions: ApiOptions = {
  types: mTypes,
  rpc: mRpc
};

export const options = ({
  types = {},
  rpc = {},
  ...otherOptions
}: ApiOptions = {}): ApiOptions => ({
  types: {
    ...mTypes,
    ...types
  },
  rpc: {
    ...mRpc,
    ...rpc
  },
  ...otherOptions
});