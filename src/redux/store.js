import chatsReducer from './chat-reducer';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
  _state: {
      chatsPage: {
      
      messagesData : [
        {id: 1, message: 'FFF Lorem ipsum dolor sit amet'},
        {id: 2, message: 'Adipisci aperiam fuga possimus quae quis tenetur!'},
        {id: 3, message: 'Accusamus adipisci, aliquid animi aut consequuntur deleniti'},
        {id: 4, message: 'id ipsum nulla, odio quasi repellendus rerum sint'},
        {id: 5, message: 'Whats the weather?'}
      ],
      chatsData : [
        {name: 'Tanya', id: 1, age: '29', city: 'Lviv'},
        {name: 'Maryana', id: 2, age: '22', city: 'Franek'},
        {name: 'Daryna', id: 3, age: '23', city: 'Gomel'},
        {name: 'Maryna', id: 4, age: '24', city: 'Chernigiv'},
        {name: 'Iryna', id: 5, age: '25', city: 'Kyiv'},
      ],
      myMessagesData : [
        {id: 1, myMessage: 'ipsum dolor sit amet'},
        {id: 2, myMessage: 'aperiam fuga possimus quae quis tenetur!'},
        {id: 3, myMessage: 'adipisci, aliquid animi aut consequuntur deleniti'},
        {id: 4, myMessage: 'Lorem id ipsum nulla, odio quasi repellendus rerum sint'},
        {id: 5, myMessage: 'The weather is fine!'}
      ],
      newMessageBody: 'brides.dating',

    },},
      _callSubscriber() {
        console.log('State has changed');
      },
      
      getState() {
        return this._state;
      },

      subscribe(observer) {
        this._callSubscriber = observer;
      },

      dispatch(action) {

        this._state.chatsPage = chatsReducer(this._state.chatsPage, action);
        this._callSubscriber(this._state);
        }
      
    
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => 
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default store;
window.state = store;