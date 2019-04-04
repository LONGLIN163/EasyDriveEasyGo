import React from 'react'
import ReactDOM from "react-dom"
import dva from 'dva'
import logger from 'redux-logger'

//create app
const app=dva({
    onAction:logger
})

import App from './container/App'
import picshow from "./models/picshow"
import carlist from "./models/carlist"

//use router() to return a jsx obj
//app.router(()=><div><h1>Hello,Dvadvvvvvvvvvvvvvvvvvvvvvvvvvv</h1></div>)
app.router(()=><App/>)

//model regist
app.model(picshow)
app.model(carlist)

//mount app to the dom
app.start("#app")