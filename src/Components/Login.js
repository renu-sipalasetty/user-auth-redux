import React, { useState } from 'react'
import validator from 'validator'
import { useDispatch } from 'react-redux'
import TextTag from '../HtmlComponents/TextTags'
import { userLoginAction } from '../Actions/registerActions'

const Login=(props)=>{

    const dispatch=useDispatch()
    const [user,setUser]=useState({
        email:'',
        password:'',
        formErrors:{}
    })
    const errors={}

    const handleForm=(e)=>{
        const attr=e.target.name
        const value=e.target.value
        if(attr==='email'){
            setUser({...user,email:value})
        }
        if(attr==='password'){
            setUser({...user,password:value})
        }
    }

    const runValidations=()=>{
        if(user.email.trim().length===0){
            errors['email']='email should not be blank'
        }
        else if(!validator.isEmail(user.email)){
            errors['email']='invalid email format'
        }
        if(user.password.trim().length===0){
            errors['password']='password should not be blank'
        }

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        runValidations()
        if(Object.keys(errors).length===0){

            setUser({...user,formErrors:{}})

            const {email,password}=user

            const formData={
                email,
                password
            }
            console.log(formData)
            const redirect=()=>{
                props.history.push('/')
            }

            const reset=()=>{
                setUser({
                    email:'',
                    password:''
                })
            }
            
            dispatch(userLoginAction(formData,redirect,reset))

        }
        else{
            setUser({...user,formErrors:errors})
        }
    }
    return (
        <>
            <TextTag 
                Tag='h2'
                text='login to your account'
                className='text-primary text-capitalize text-center'
            />
            <form onSubmit={handleSubmit}>  

                <div className='form-group mx-5 my-5'>
                    <input
                        type='email'
                        name='email'
                        className='form-control mt-3'
                        placeholder='enter email...'
                        value={user.email}
                        onChange={handleForm}
                    />

                    {
                        (user.formErrors.email) && 
                        <TextTag Tag='span' className='text-danger my-2' text={user.formErrors.email} />
                    }


                    <input
                        type='password'
                        name='password'
                        value={user.password}
                        onChange={handleForm}
                        placeholder='enter password...'
                        className='form-control mt-3'
                    />

                    {   
                        (user.formErrors.password) && 
                        <TextTag Tag='span' className='text-danger my-2' text={user.formErrors.password} />
                    }

                    <input
                        type='submit'
                        value='Login'
                        className='btn btn-warning mt-3'
                    />
                </div>
            </form>   
        </>
    )
}
export default Login