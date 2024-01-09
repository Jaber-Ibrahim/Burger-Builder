import { useEffect, useState } from "react"
import { Modal } from "../../components/importComponents"
import { MyAux } from "../importHoc"


// the HOC first return a new component or function so we  write return twice 
const ErrorHandler = (WrappedCompnent,axios) => {
    return (props) => {
        const [error,setError] = useState(null)
        // const [reqInterceptor , setReqInterceptor] = useState(null)
        // const [resInterceptor , setResInterceptor] = useState(null)
        useEffect(() => {
            // Request Interceptor: — It allows you to write or execute a piece of your code before the request gets sent.
            // axios.interceptors.request.use(res,error => setError(null))
            let reqInterceptor = axios.interceptors.request.use(req => {
                setError(null)
                return req
            })
            // axios.interceptors.response.use(res => res ,error => {
                // Response Interceptor: — It allows you to write or execute a piece of your code before response reaches the calling end.
                let resInterceptor = axios.interceptors.response.use(res =>res ,error => {
                setError(error.message)
                console.log(error.message)
            })
            return () => {
                // the clean up when unmounting the component
                // if we dont use this we will face a problem in routing 
                setTimeout(() => {
                    // console.log("will unmount " , reqInterceptor , resInterceptor)
                    axios.interceptors.request.eject(reqInterceptor)
                    axios.interceptors.response.eject(resInterceptor)
                }, 500);
                };
        }, [error])
        
        // to close the modal when showing the error by clicking on it
        const errorConfirmedHandler = () => {
            // console.log(error)
            setError(null)
        }
        if(error) {
            console.log(error)
        }
        return (
            <MyAux>
                <Modal show= {error} close = {errorConfirmedHandler}> 
                    {error ? (<p>{error}</p>) : null}
                </Modal>
                {/* we dont know the props so we sont want to lose them */}
                <WrappedCompnent {...props}/>
            </MyAux>
          )
    }
}

export default ErrorHandler
