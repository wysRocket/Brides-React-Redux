const initialState = {
  data: {
    confirmed: false,
    last_seen: "2020-05-21T16:24:17.344Z",
    _id: "5ec6c29b128d589e18578049",
    email: "wysmyfree@outlook.com",
    fullname: "Vladimir Morozov",
    password: "$2b$10$17gP4UUBGRVgVN8OZAzHceL95Kr5Um0Qr26fejmm6szI8ImarhoKC",
    createdAt: "2020-05-21T18:04:11.309Z",
    updatedAt: "2020-05-21T18:04:11.309Z",
    confirm_hash:
      "$2b$10$hC/DOjWbfsh1taaCFFlJ6u4uL9n.laDWVW3BRkJ8yWkteXd69AX8e",
    __v: 0,
    isOnline: false,
    id: "5ec6c29b128d589e18578049",
  },
  token: window.localStorage.token,
  isAuth: !!window.localStorage.token,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "USER:SET_DATA":
      return {
        ...state,
        data: payload,
        isAuth: true,
        token: window.localStorage.token,
      };
    case "USER:SET_IS_AUTH":
      return {
        ...state,
        isAuth: payload,
      };
    default:
      return state;
  }
};
