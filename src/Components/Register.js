import React, { useState } from 'react'
import {Input,Form,FormGroup,Button,ButtonGroup} from 'reactstrap'
import validator from 'validator'
import { useDispatch } from 'react-redux'
import TextTag from '../HtmlComponents/TextTags'
import { startRegisterAction } from '../Actions/registerActions'
const Register=(props)=>{


    const dispatch=useDispatch()

    const [user,setUser]=useState({
        username:'',
        email:'',
        password:'',
        formErrors:{}
    })

    const errors={}

    const handleForm=(e)=>{
        const attr=e.target.name
        if(attr==='username'){
            setUser({...user,username:e.target.value})
        }
        if(attr==='email'){
            setUser({...user,email:e.target.value})
        }
        if(attr==='password'){
            setUser({...user,password:e.target.value})
        }
    }

    const runValidations=()=>{

        if(user.username.trim().length===0){
            errors['username']='username should not be blank'
        }
        if(user.email.trim().length===0){
            errors['email']='email should not be blank'
        }
        else if(!validator.isEmail(user.email)){
            errors['email']='invalid email format'
        }
        if(user.password.trim().length===0){
            errors['password']='password should not be blank'
        }
        else if(user.password.length<8 || user.password.length>120){
            errors['password']='password length should be between 8-120 characters'
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        runValidations()

        if(Object.keys(errors).length===0){

            setUser({...user,formErrors:{}})

            const {username,email,password}=user

            const formData={
                username,
                email,
                password
            }
            console.log(formData)

            const redirect=()=>{
                console.log('redirect')
                props.history.push('/login')
            }

            const resetForm=()=>{
                setUser({
                    username:'',
                    email:'',
                    password: '',
                    formErrors:{}
                })
            }

            dispatch(startRegisterAction(formData,redirect,resetForm))
        }
        else{
            setUser({...user,formErrors:errors})
        }
    }

    return (
        <div>
            <form>
                <TextTag Tag='h3' text='Registration form' className='text-center text-primary' />
                <div className='mx-3 form-group '>
                <input
                        name='username'
                        type='text'
                        value={user.username}
                        onChange={handleForm}
                        placeholder='Enter your Name...'
                        className='form-control mt-3'
                    />

                    {user.formErrors.username && <TextTag Tag='span' className='text-danger ml-2' text={user.formErrors.username} />}


                    <input
                        name='email'
                        type='email'
                        value={user.email}
                        onChange={handleForm}
                        placeholder='enter email...'
                        className='form-control mt-3'
                    />

                    {user.formErrors.email && <TextTag Tag='span' className='text-danger' text={user.formErrors.email} />}


                    <input
                        type='password'
                        name='password'
                        value={user.password}
                        onChange={handleForm}
                        placeholder='Enter Your Password...'
                        className='form-control mt-3'
                    />

                    {user.formErrors.password && <TextTag Tag='span' className='text-danger ml-2' text={user.formErrors.password} /> }

                    <input 
                        type='submit'
                        value='Register'
                        className='btn btn-success mt-3'
                    />
                </div>
            </form>
        </div>
    )
}
export default Register