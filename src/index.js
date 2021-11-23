import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import configureStore from './Store/configureStore'
import 'bootstrap/dist/css/bootstrap.css'

const store=configureStore()
console.log(store.getState())
store.subscribe(()=>{
    console.log('updated state',store.getState())
})
ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'))