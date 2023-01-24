declare const _default: {
    types: {
        Role: {
            _enum: {
                Standard: string;
                Master: string;
                NotMember: string;
            };
        };
        SupersigId: string;
        SupersigIdInfo: {
            supersig_id: string;
        };
        CallId: string;
        ProposalStates: string;
        FetchListProposals: {
            proposals_info: string;
            no_of_members: string;
        };
        ProposalState: {
            id: string;
            encoded_call: string;
            provider: string;
            voters: string;
        };
        FetchProposalState: {
            proposal_info: string;
            no_of_members: string;
        };
        MemberList: {
            account: string;
            role: string;
        };
        MembersList: {
            member_info: string;
        };
        UserSupersig: {
            user_supersigs: string;
        };
    };
};
export default _default;
