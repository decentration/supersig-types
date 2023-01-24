// order here matches with what is found in (unused removed)

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
        SupersigIdInfo: {
          supersig_id: 'u32',
        },
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
        },
        MemberList: {
          account: 'AccountId',
          role: 'Role',
        },
        MembersList: {
          member_info: 'Vec<(AccountId, Role)>',
        },
        UserSupersig: {
          user_supersigs: 'Vec<SupersigIdInfo>'
        }


      },
  }