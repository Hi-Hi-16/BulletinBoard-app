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

const value = 'some-param-value'

const url = new URL(window.location.href);
const searchParams = url.searchParams;
searchParams.set('someparam', value);

url.search = searchParams.toString();
const newUrl = url.toString();
window.history.replaceState(
    {...window.history.state, as: newUrl, url: newUrl},
    undefined,
    newUrl
);

export const {addPost, deletePost} = postSlice.actions;
export default postSlice.reducer;

//削除するときはfilter関数を使う
