const UPDATE_NEW_MESSAGE_BODY = "PDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};
export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 10, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
