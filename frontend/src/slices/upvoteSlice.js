import { createSlice } from '@reduxjs/toolkit';

const upvoteSlice = createSlice({
    name: 'upvote',
    initialState: {
        upvotes: 1
    },
    reducers: {
        addUpvote: (state, action) => {
            if (!state.upvoteIds.includes(action.payload)) {
                state.upvotes = state.upvotes + 1;
                state.upvoteIds = [action.payload, ...state.upvoteIds];
            }
            state.canUpvote = false;
        }
    }
}) 

export default upvoteSlice;