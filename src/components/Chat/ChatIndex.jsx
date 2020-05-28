import React from "react";
import style from "./ChatIndex.module.css";
import { NavLink, Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../validators/validators";
import { Textarea } from "./../FormControls/FormControl";
import { Message, DialogItem } from "../";

const OldMessage = (props) => {
  return (
    <div className="chat_item">
      <h1 className={style.chat_item_title}>
        Daryna
        <span className="title_chat_wrote"> wrote</span>
        <span className={style.title_chat_time}> 11:55</span>
      </h1>
      <div className={style.message}>
        <div className={style.message_ava}></div>
        <div className="message_text">
          <p> {props.message} </p>
        </div>
      </div>
    </div>
  );
};

const MyMessage = (props) => {
  return (
    <div className="chat_item">
      <h1 className={style.chat_item_title}>
        John
        <span className="title_chat_wrote"> wrote</span>
        <span className={style.title_chat_time}> 12:05</span>
      </h1>
      <div className={style.my_message}>
        <div className={style.my_message_ava}></div>
        <div className="message_text">
          <p> {props.myMessage} </p>
        </div>
      </div>
    </div>
  );
};

const ChatIndex = (props) => {
  let chatsElements = props.chatsPage.dialogs.items.map((chat) => (
    <DialogItem
      key={chat._id}
      text={chat.text}
      id={chat._id}
      created_at={chat.created_at}
      partner={chat.user}
    />
  ));
  let messageElements = props.chatsPage.messages.items.map((msg) => (
    <OldMessage
      key={msg._id}
      text={msg.text}
      id={msg._id}
      date={msg.created_at}
    />
  ));
  /*  let myMessageElements = props.chatsPage.myMessagesData.map((mymssg) => (
    <MyMessage key={mymssg.id} myMessage={mymssg.myMessage} id={mymssg.id} />
  ));

     if (!props.isAuth) return <Redirect to={"/login"} />;*/

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };
  return (
    <div className={style.dialogs}>
      <div className={style.l_sidebar}>
        <input type="text" className={style.form_input} placeholder="SEARCH" />
        <ul className={style.girls_list}>{chatsElements}</ul>
      </div>
      <div className={style.dialog}>
        <div className="opp_mssgs">{messageElements}</div>
        {/*        <div className="my_mssgs">{myMessageElements}</div>*/}
        <div className={style.type_mssge}>
          <h1 className={style.chat_item_title}>
            Type a message
            <span className={style.title_chat_time}> Press Enter to send</span>
          </h1>
          <SendMessageReduxForm onSubmit={addNewMessage} />
        </div>
      </div>

      <div className={style.r_sidebar}>
        <div className="view_profile_block">
          <div className={style.girl_item}>
            <div className={style.img_box}>
              <div className={style.ava}></div>
            </div>
            <div className={style.text_box}>
              <h3 className={style.item_girl_name}> Tanya</h3>
              <span className={style.item_girl_from}> 25 years, from Lviv</span>
              <span className={style.view_profile_ac}>
                <a href="#">View Profile</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Length10 = maxLengthCreator(10);

const SendMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={style.sendMessage_field}>
        <Field
          component={Textarea}
          name="newMessageBody"
          validate={[required, Length10]}
        />
        <div>
          <button> Send </button>
        </div>
      </div>
    </form>
  );
};
const SendMessageReduxForm = reduxForm({ form: "chatSendMessageForm" })(
  SendMessageForm
);

export default ChatIndex;
