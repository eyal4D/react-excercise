import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Game from './Pages/game'
import Login from './Pages/login'

export default function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
				<Route path='/game' element={<Game/>}/>
            </Routes>
        </Router>
    )
}