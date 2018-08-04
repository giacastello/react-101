import React from 'react'
import ReactDOM from 'react'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// import 'HelloWorld' from './Component/HelloWorld/HelloWorld';


// Que queremos renderizar, donde lo queremos renderizar
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
