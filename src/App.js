import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import NavBar from './Components/NavBar'

const App=(props)=>{
    return (
        <BrowserRouter>
            <div>
                <NavBar />
            </div>
        </BrowserRouter>
    )
}

export default App