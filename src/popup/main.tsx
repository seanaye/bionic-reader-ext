/* @refresh reload */
import 'virtual:windi.css'
import { render } from 'solid-js/web'

// import './index.css'
import App from './Popup'

render(() => <App />, document.getElementById('app') as HTMLElement)
