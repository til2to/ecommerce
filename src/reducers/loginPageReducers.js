import * as actions from "../Types";

let showloginPage = JSON.parse(window.localStorage.getItem("loginPage"));

const initialState = {
  loginPageStatus: showloginPage,
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_PAGE:
      let loginPageStatus = action.payload;
      console.log(loginPageStatus)
      window.localStorage.setItem("loginPage", loginPageStatus);
      return loginPageStatus;

    default:
      return state;
  }
};
