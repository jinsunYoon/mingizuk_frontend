import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './shared/App'
import store from './redux/store'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

const queryClient = new QueryClient()

ReactDOM.render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </Provider>,
    document.getElementById('root')
)

serviceWorkerRegistration.register()
reportWebVitals()
