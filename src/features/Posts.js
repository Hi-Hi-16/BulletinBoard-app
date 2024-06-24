import {createSlice} from "@reduxjs/toolkit"
import { PostsData } from "../DummyData";

export const postSlice = createSlice({
    name : "posts",
    initialState : {value : PostsData},
    reducers : {//Reducer：更新する
        addPost : (state, action) => {
            state.value.push(action.payload);
        },
        deletePost: (state, action) => {
            state.value = state.value.filter((post) => post.id !== action.payload.id);
        }
    },
});

export const {addPost, deletePost} = postSlice.actions;
export default postSlice.reducer;

//削除するときはfilter関数を使う
