declare const _default: {
    types: {
        VoteStage: {
            _enum: string[];
        };
        VoteType: {
            _enum: string[];
        };
        TallyType: {
            _enum: string[];
        };
        VoteOutcome: string;
        Tally: string;
        VoteData: {
            initiator: string;
            stage: string;
            vote_type: string;
            tally_type: string;
            is_commit_reveal: string;
        };
        Commitments: string;
        Reveals: string;
        VoteRecord: {
            id: string;
            commitments: string;
            reveals: string;
            data: string;
            outcomes: string;
        };
    };
};
export default _default;
