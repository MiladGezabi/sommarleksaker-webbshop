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

export const ProductName = atom({
  key: "productname",
  default: ""
})

export const Price = atom({
  key: "Price",
  default: ""
})

export const Picture = atom({
  key: "Picture",
  default: ""
})

export const Description = atom({
  key: "Description",
  default: ""
})

export const Products = atom({
  key: "prouducts",
  default: []
})
