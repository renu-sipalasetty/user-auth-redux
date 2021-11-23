import React from 'react'
import { useSelector } from 'react-redux'
import TextTag from '../HtmlComponents/TextTags'
import Loader from './Loader'

const Account=(props)=>{

    const store=useSelector((state)=>{
        return state.register.data
    })
    console.log('store',store)
    return (
        <div>
            <TextTag
                Tag='h2'
                text='user account'
                className='text-capitalize mt-3 text-center text-primary'
            />

            <article>

            {/* Conditional Rendering Ternary Operator */}
            {
                (store.isLoading) 
                
                    ? 
                        
                        <Loader/> 
                        
                    :   <div className='text-center'>
                    
                            <p className='text-dark ml-2 lead'>
                                Username : {store.username} <br /> Email :  {store.email}
                            </p>
                        </div>
            }

            </article>

        </div>
    )
}
export default Account