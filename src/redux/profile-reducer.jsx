const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
let initialState = {
  posts: [
    { id: 1, message: "Hi, how a u ?", likesCount: 10 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "3 post" },
    { id: 4, message: "4 " },
    { id: 5, message: "5 " },
    { id: 6, message: "6 " },
  ],
  newPostText: "lol",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 7,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
