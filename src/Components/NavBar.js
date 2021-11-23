import React, { useEffect } from 'react'
import {Route,Link} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import Home from './Home'
import Register from './Register'
import NotesComponent from './NotesComponent'
import Login from './Login'
import Account from './Account'
import { getUserDetails, setUserInfo } from '../Actions/registerActions'


const NavBar=(props)=>{

    const dispatch = useDispatch()

    const fetchData=()=>{

        const token=localStorage.getItem('JWT_Token')

        if(token){
            dispatch(getUserDetails(token))
        }

    }

    useEffect(fetchData,[])

    const store=useSelector((state)=>{
        return state.register.data
    })

    const handleLogout=(e)=>{

        localStorage.removeItem('JWT_Token')

        alert('Logged Out Successfully')

        dispatch(setUserInfo({}))

        props.history.push('/')

    }

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='navbar-nav'>
                    
                    <Link to='/' className='navbar-brand mx-5 text-danger'>My Notes</Link>
                    {
                        Object.keys(store).length>0 ?
                        (
                            <>
                                <Link 
                                    to="/account"
                                    className='mx-5 nav-item nav-link text-primary'
                                >Account</Link>
                                <Link 
                                    to="/notes"
                                    className='mx-5 nav-item nav-link text-primary'
                                >My Notes</Link>
                                <Link 
                                    to="/logout" 
                                    onClick={handleLogout}
                                    className='mx-5 nav-item nav-link text-primary'
                                >Logout</Link>
                            </>
                        )
                        :
                        (
                            <>
                                <Link 
                                    to='/'
                                    className='mx-5 nav-item nav-link text-primary'
                                >Home</Link>

                                <Link 
                                    to='/register'
                                    className='mx-5 nav-item nav-link text-primary'
                                >Register</Link>
                                <Link 
                                    to='/login'
                                    className='mx-5 nav-item nav-link text-primary'
                                >Login</Link>
                            </>
                        )
                    }
                </div>
            </nav>
                <Route path='/' component={Home} exact={true} />
                <Route path='/register' component={Register} />
                <Route path='/notes' component={NotesComponent} />
                <Route path='/login' component={Login} />
                <Route path='/account' component={Account} />
        </>
    )
}

export default NavBar