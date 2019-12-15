const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
      
  messagesData : [
    {id: 1, message: 'Lorem ipsum dolor sit amet'},
    {id: 2, message: 'Adipisci aperiam fuga possimus quae quis tenetur!'},
    {id: 3, message: 'Accusamus adipisci, aliquid animi aut consequuntur deleniti'},
    {id: 4, message: 'id ipsum nulla, odio quasi repellendus rerum sint'},
    
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
  ],
  
};

const chatReducer = (state = initialState, action) => {
  
  switch (action.type) {
    
    case SEND_MESSAGE:
        let body = action.newMessageBody;
        return {...state,
          myMessagesData: [...state.myMessagesData,{id: 6, myMessage: body}]};
      
    default: return state;
}}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default chatReducer;