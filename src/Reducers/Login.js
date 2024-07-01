const Login = (state=false,action) => {
    switch(action.type){
        case 'SignUp' : return state = true
        default : return state
    }
}

export default Login