import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../Pages/login'
import Signup from '../Pages/signup'
import Home from '../Pages/home'



const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </BrowserRouter>
  )
}


export default AppRouter