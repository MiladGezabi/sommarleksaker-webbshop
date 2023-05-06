import { atom } from "recoil";


export const loginState = atom({
  key: "login",
  default: false
})

export const NameState = atom({
  key: "username",
  default: ""
})

export const PasswordState = atom({
  key: "password",
  default: ""
})

export const UsersList = atom({
  key: "userlist",
  default: [{
    name: "admin",
    password: "password"
  }]
})

export const CurrentAdmin = atom({
  key: "currentadmin",
  default:""
})