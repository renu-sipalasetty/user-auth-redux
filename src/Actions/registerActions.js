import axios from 'axios'

export const startRegisterAction=(registerData,redirect,resetForm)=>{
    return (
        
        ()=>{
            axios
                .post('http://dct-user-auth.herokuapp.com/users/register',registerData)

                .then((response)=>{
                    const res=response.data
                    console.log(res)
                    if(res.hasOwnProperty('errors')){
                        alert (res.errors)
                    }
                    else{
                        alert('user is registered successfully')
                        redirect()
                        resetForm()
                    }
                })

                .catch((err)=>{
                    console.log(err.message)
                })
        }
    )
}

export const userLoginAction=(loginData,redirect,resetForm)=>{

    return (

        (dispatch)=>{
            axios
                .post('http://dct-user-auth.herokuapp.com/users/login',loginData)

                .then((response)=>{
                    const res=response.data

                    if(res.hasOwnProperty('errors')){
                        alert(res.errors)
                    }
                    else{
                        alert('Logged in Successfully')

                        localStorage.setItem('JWT_Token',res.token)

                        dispatch(getUserDetails(res.token))

                        redirect()

                        resetForm()


                    }
                })

                .catch((err)=>{
                    alert(err.message)
                })
        }

    )
}

export const getUserDetails=()=>{

    return (
        (dispatch)=>{
            axios
                .get('http://dct-user-auth.herokuapp.com/users/account',{
                    headers:{
                        'x-auth':localStorage.getItem('JWT_Token')
                    }
                })
                .then((response)=>{
                    const res=response.data
                    dispatch(setUserInfo(res))
                    dispatch(stopLoading())
                })
                .catch((err)=>{
                    alert(err.message)
                })
        }
    )
}

export const setUserInfo=(users)=>{
    return {
        type:'SET_USER_INFO',
        payload:users
    }
}

export const stopLoading=()=>{
    return ({
        type:'STOP_LOADING'
    })
}