const initialStateValue={
    data:[],
    isLoading:true
}

const registerReducers=(state=initialStateValue,action)=>{
    switch(action.type) {
        case 'SET_USER_INFO':{
            return {...state,data:{...action.payload}}
        }
        case 'STOP_LOADING':{
            return {...state,isLoading:!state.isLoading}
        }
        default:{
            return {...state}
        }
    }
}
export default registerReducers