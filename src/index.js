import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import './index.css'
import {todos} from "./data/data.js";
import {initTodos} from "./actions";

const store = createStore(rootReducer)

store.dispatch(initTodos(todos))

render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
)
