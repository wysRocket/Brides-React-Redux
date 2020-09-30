import { InferActionsTypes, BaseThunkType } from './redux-store'

type MyMessagesDataType = {
  id: number
  myMessage: string
}
type chatsDataType = {
  id: number
  name: string
  age: string
  city: string
  created_at: string
}
const initialState = {
  messagesData: [
    { id: 1, message: 'Lorem ipsum dolor sit amet' },
    { id: 2, message: 'Adipisci aperiam fuga possimus quae quis tenetur!' },
    { id: 3, message: 'Accusamus adipisci, aliquid animi aut consequuntur deleniti' },
    { id: 4, message: 'id ipsum nulla, odio quasi repellendus rerum sint' },
  ],
  chatsData: [
    { name: 'Tanya', id: 1, age: '29', city: 'Lviv', created_at: 'Mon Jul 18 1978 15:23:39' },
    { name: 'Maryana', id: 2, age: '22', city: 'Franek', created_at: 'Mon Jul 19 1978 15:23:39' },
    { name: 'Daryna', id: 3, age: '23', city: 'Gomel', created_at: 'Mon Jul 20 1978 15:23:39' },
    { name: 'Maryna', id: 4, age: '24', city: 'Chernigiv', created_at: 'Mon Jul 21 1978 15:23:39' },
    { name: 'Iryna', id: 5, age: '25', city: 'Kyiv', created_at: 'Mon Jul 22 1978 15:23:39' },
  ] as Array<chatsDataType>,
  myMessagesData: [
    { id: 1, myMessage: 'ipsum dolor sit amet' },
    { id: 2, myMessage: 'aperiam fuga possimus quae quis tenetur!' },
    { id: 3, myMessage: 'adipisci, aliquid animi aut consequuntur deleniti' },
    { id: 4, myMessage: 'Lorem id ipsum nulla, odio quasi repellendus rerum sint' },
  ] as Array<MyMessagesDataType>,
}

const chatReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      let body = action.newMessageBody
      return { ...state, myMessagesData: [...state.myMessagesData, { id: 6, myMessage: body }] }

    default:
      return state
  }
}

export const actions = {
  sendMessage: (newMessageBody: string) => ({ type: 'SEND_MESSAGE', newMessageBody } as const),
}

export default chatReducer

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
