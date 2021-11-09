import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './shared/App'
import store from './redux/store'
import { Provider } from 'react-redux'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

serviceWorkerRegistration.register()
reportWebVitals()
