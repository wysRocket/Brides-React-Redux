const initialState = {
  items: [
    {
      _id: "35ce83ca80a9906817c95cbe0",
      text:
        ":santa: Ea deserunt exercitation sit irure aliqua ea. Nostrud est veniam eiusmod cillum duis exercitation veniam ad. Commodo occaecat veniam tempor ad dolor.",
      created_at: "Mon Jul 17 1978 15:23:39 GMT+0000 (UTC)",
      user: {
        _id: "35ce83ca8dbf6c8e9d04dfe95",
        fullname: "Stafford Whitley",
        avatar: null,
      },
      dialog: "6e68d13b2678d793d340b5fb0c79297d",
    },
    {
      _id: "35ce83ca8371d66a6490a6629",
      text:
        "Excepteur voluptate reprehenderit duis duis fugiat reprehenderit consectetur nisi. Anim nulla amet aliquip Lorem culpa. Labore voluptate non Lorem irure adipisicing.",
      created_at: "Tue Sep 04 1990 21:13:48 GMT+0000 (UTC)",
      user: {
        _id: "45ce83ca849b6f9d7ac27fe2c",
        fullname: "Nettie Cobb",
        avatar: null,
      },
      dialog: "6e68d13b2678d793d340b5fb0c79297d",
    },
    {
      _id: "25ce83ca8e64e10b218c412b1",
      text:
        "Est nostrud irure ut cupidatat pariatur qui aliqua excepteur reprehenderit commodo amet. Fugiat dolor cillum esse consequat enim sunt ullamco elit nulla. Dolor elit pariatur in ad nisi sint ea incididunt.",
      created_at: "Wed Oct 06 1982 09:45:38 GMT+0000 (UTC)",
      user: {
        _id: "15ce83ca89d3f3deef8240962",
        fullname: "Cole Merritt",
        avatar: null,
      },
      dialog: "6e68d13b2678d793d340b5fb0c79297d",
    },
    {
      _id: "45ce83ca83ebd82413d9507c5",
      text:
        "Duis ad nulla in commodo adipisicing reprehenderit aliqua consequat ex anim quis. Veniam sit excepteur consequat non eiusmod dolore sunt sint culpa aute duis id exercitation. Mollit veniam pariatur sint esse eiusmod in deserunt elit enim.",
      created_at: "Mon Jun 13 2011 09:20:49 GMT+0000 (UTC)",
      user: {
        _id: "15ce83ca840b57ddc4c86a9f9",
        fullname: "Haley Norman",
        avatar: null,
      },
      dialog: "6e68d13b2678d793d340b5fb0c79297d",
    },
    {
      _id: "35ce83ca83f2ba0b7649c43cb",
      text: "Привет! 😃",
      created_at: "Mon Jun 08 1992 04:57:55 GMT+0000 (UTC)",
      user: {
        _id: "35ce83ca8f41ffe5a11c0b72c",
        fullname: "Jacobs Barry",
        avatar: null,
      },
      dialog: "6e68d13b2678d793d340b5fb0c79297d",
    },
    {
      _id: "35ce83ca89d0fdae4548a8a8c",
      text: "Ау, ты где? 😒",
      created_at: "Tue Oct 27 2009 08:28:44 GMT+0000 (UTC)",
      user: {
        _id: "15ce83ca8038d9699c179048e",
        fullname: "Short Doyle",
        avatar: null,
      },
      dialog: "6e68d13b2678d793d340b5fb0c79297d",
    },
  ],
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "MESSAGES:ADD_MESSAGE":
      return {
        ...state,
        items: [...state.items, payload],
      };
    case "MESSAGES:SET_ITEMS":
      return {
        ...state,
        items: payload,
        isLoading: false,
      };
    case "DIALOGS:LAST_MESSAGE_READED_STATUS":
      return {
        ...state,
        items: state.items.map((message) => {
          if (message.dialog._id === payload.dialogId) {
            message.readed = true;
          }
          return message;
        }),
      };
    case "MESSAGES:REMOVE_MESSAGE":
      return {
        ...state,
        items: state.items.filter((message) => message._id !== payload),
      };
    case "MESSAGES:SET_IS_LOADING":
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};
