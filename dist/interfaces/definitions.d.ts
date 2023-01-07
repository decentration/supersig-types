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
    };
};
export default _default;
