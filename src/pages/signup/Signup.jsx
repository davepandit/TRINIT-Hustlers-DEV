import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useFirebase } from '../../context/Firebase'

function Signup() {
    const [email , setEmail] = useState("")
    const [password , setpassword] = useState("")

    //establishing a link between the component and the context

    const firebase = useFirebase()

    //handleSubmit
    const handleSubmit = async(e)=>{
        e.preventDefault()
        await firebase.SignUpUserWithEmailAndPassword(email , password ).then((result)=>(console.log("usersignup done")))
        


    }
   
    return (
        <div className=' flex justify-center items-center h-screen'>
            <form className=' bg-gray-800 px-10 py-10 rounded-xl '
            onSubmit={handleSubmit}
            >
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <input type="email"
                        name='email'
                        value={email}
                        onChange={(e)=>(setEmail(e.target.value))}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e)=>(setpassword(e.target.value))}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                        className=' bg-red-400  hover:bg-red-500 transition duration-300 ease-in-out w-full text-white font-bold  px-2 py-2 rounded-lg'>
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Have an account <Link className=' text-red-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </form>
        </div>
    )
}

export default Signup