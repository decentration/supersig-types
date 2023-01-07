// order here matches with what is found in (unused removed)
//   https://www.npmjs.com/package/edgeware-node-types
//   https://github.com/hicommonwealth/edgeware-node-types/tree/master/types

export default  {
    types: {
        Role: {
          _enum: {
            Standard: 'Vec<u8>',
            Master: 'Vec<u8>',
            NotMember: 'Vec<u8>'
          }
        },
        SupersigId: 'u32',
        CallId: 'u32',
        ProposalStates: 'Vec<ProposalState<AccountId>>',
        FetchListProposals: {
          proposals_info: 'ProposalStates',
          no_of_members: 'u32'
        },
        ProposalState: {
          id: 'CallId',
          encoded_call: 'Vec<u8>',
          provider: 'AccountId',
          voters: 'Vec<AccountId>'
        },
        FetchProposalState: {
          proposal_info: 'ProposalState<AccountId>',
          no_of_members: 'u32'
        }
      },
  }