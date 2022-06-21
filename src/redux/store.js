import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how a u ?", likesCount: 10 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: "3 post" },
        { id: 4, message: "4 " },
        { id: 5, message: "5 " },
        { id: 6, message: "6 " },
      ],
      newPostText: "lol",
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Денис" },
        { id: 2, name: "Витя" },
        { id: 3, name: "Андрей" },
        { id: 4, name: "Лола" },
        { id: 5, name: "Лоли" },
        { id: 6, name: "Лолии" },
        { id: 6, name: "Ло1лии" },
      ],

      messages: [
        { id: 1, message: "first message" },
        { id: 2, message: "2 message" },
        { id: 3, message: "3 message" },
        { id: 4, message: "4 message" },
        { id: 5, message: "5 message" },
        { id: 6, message: "6 message" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("state changed");
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

    this._callSubscriber(this._state);
  },
};

window.state = store;

export default store;
