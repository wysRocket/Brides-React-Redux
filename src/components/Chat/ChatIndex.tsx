import React from 'react'
import style from './ChatIndex.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../../redux/chat-reducer'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import { required, maxLengthCreator } from '../../validators/validators'
import { Textarea } from '../FormControls/FormControl'
import { Message, DialogItem } from '..'
import { AppStateType } from '../../redux/redux-store'

type OldMessagePropsType = { text: string; id: number }
const OldMessage: React.FC<OldMessagePropsType> = ({ text, id }) => {
  return (
    <div className='chat_item'>
      <h1 className={style.chat_item_title}>
        Daryna
        <span className='title_chat_wrote'> wrote</span>
        <span className={style.title_chat_time}> 11:55</span>
      </h1>
      <div className={style.message}>
        <div className={style.message_ava}></div>
        <div className='message_text'>
          <p> {text} </p>
        </div>
      </div>
    </div>
  )
}
type MyMessagePropsType = { myMessage: string; id: number }
const MyMessage: React.FC<MyMessagePropsType> = ({ myMessage }) => {
  return (
    <div className='chat_item'>
      <h1 className={style.chat_item_title}>
        John
        <span className='title_chat_wrote'> wrote</span>
        <span className={style.title_chat_time}> 12:05</span>
      </h1>
      <div className={style.my_message}>
        <div className={style.my_message_ava}></div>
        <div className='message_text'>
          <p> {myMessage} </p>
        </div>
      </div>
    </div>
  )
}

const ChatIndex: React.FC = () => {
  const dispatch = useDispatch()
  const { messagesData, myMessagesData, chatsData } = useSelector(
    ({ chatsPage }: AppStateType) => chatsPage
  )
  const chatsElements = chatsData.map((chat) => (
    // @ts-ignore
    <DialogItem
      key={chat.id}
      text={chat.city}
      _id={chat.id}
      created_at={chat.created_at}
      partner={chat.name}
    />
  ))
  const messageElements = messagesData.map((msg) => (
    <OldMessage key={msg.id} text={msg.message} id={msg.id} />
  ))
  const myMessageElements = myMessagesData.map((m) => (
    <MyMessage key={m.id} myMessage={m.myMessage} id={m.id} />
  ))

  const addNewMessage = (values: NewMessageFormType) => {
    dispatch(actions.sendMessage(values.newMessageBody))
  }
  return (
    <div className={style.dialogs}>
      <div className={style.l_sidebar}>
        <input type='text' className={style.form_input} placeholder='SEARCH' />
        <ul className={style.girls_list}>{chatsElements}</ul>
      </div>
      <div className={style.dialog}>
        <div className='opp_mssgs'>{messageElements}</div>
        <div className='my_mssgs'>{myMessageElements}</div>
        <div className={style.type_mssge}>
          <h1 className={style.chat_item_title}>
            Type a message
            <span className={style.title_chat_time}> Press Enter to send</span>
          </h1>
          <SendMessageReduxForm onSubmit={addNewMessage} />
        </div>
      </div>

      <div className={style.r_sidebar}>
        <div className='view_profile_block'>
          <div className={style.girl_item}>
            <div className={style.img_box}>
              <div className={style.ava}></div>
            </div>
            <div className={style.text_box}>
              <h3 className={style.item_girl_name}> Tanya</h3>
              <span className={style.item_girl_from}> 25 years, from Lviv</span>
              <span className={style.view_profile_ac}>
                <a href='#'>View Profile</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Length10 = maxLengthCreator(10)

const SendMessageForm: React.FC<InjectedFormProps<NewMessageFormType>> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={style.sendMessage_field}>
        <Field component={Textarea} name='newMessageBody' validate={[required, Length10]} />
        <div>
          <button> Send </button>
        </div>
      </div>
    </form>
  )
}
const SendMessageReduxForm = reduxForm<NewMessageFormType>({ form: 'chatSendMessageForm' })(
  SendMessageForm
)

export default ChatIndex

type NewMessageFormType = {
  newMessageBody: string
}
