import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useFirebase } from '../../context/Firebase'

function Login() {
    const [email , setEmail ] = useState("")
    const [password , setPassword] = useState("")

    //establishing a link between the context and the component
    const firebase = useFirebase()

    //handleSubmit
    const handleSubmit = (e)=>{
        e.preventDefault()
        firebase.SignInUserWithEmailAndPassword(email , password ).then((result)=>(alert("User logged In successfully"))).catch((value)=>(alert("Someting went wrong")))
        setEmail("")
        setPassword("")
        


    }
     
   
    return (
        <div className=' flex justify-center items-center h-screen'>
            <form className=' bg-gray-800 px-10 py-10 rounded-xl '
            onSubmit={handleSubmit}
            >
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input type="email"
                        value={email}
                        name='email'
                        onChange={(e)=>(setEmail(e.target.value))}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e)=>(setPassword(e.target.value))}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                        className=' bg-yellow-400 hover:bg-yellow-500 transition duration-300 ease-in-out w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Don't have an account <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </form>
        </div>
    )
}

export default Login