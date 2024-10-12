import { configureStore } from "@reduxjs/toolkit";
import upvoteSlice from "./slices/upvoteSlice";
import articleSlice from "./slices/articleSlice";

const store = configureStore({
    reducer: {
        upvote: upvoteSlice.reducer,
        article: articleSlice.reducer,
    }
})

export default store;