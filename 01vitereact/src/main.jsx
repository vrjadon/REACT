import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherUser = 'Vishwas'
const reactElement = React.createElement('a',{
  href : "https://www.google.com",
  target : "_blank"
}, 'Click on this link',
anotherUser)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    reactElement
 
)
