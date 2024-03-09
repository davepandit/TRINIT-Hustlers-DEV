import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useFirebase } from '../../context/Firebase'

function Signup() {
    const [file , setFile] = useState("")
    

    //establishing a link between the component and the context
    const firebase = useFirebase()

    //handleSubmit
    const handleSubmit = (e)=>{
        e.preventDefault()
        firebase.handleUploadedFile(file).then((res)=>(alert("File uploaded successfully")))
        
        


    }
   
    return (
        <div className=' flex justify-center items-center h-[400px]'>
            <form className=' bg-gray-800 px-10 py-10 rounded-xl '
            onSubmit={handleSubmit}
            >
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Upload File</h1>
                </div>
                <div>
                    <input type="file"
                        name='file'
                        onChange={(e)=>(setFile(e.target.files[0]))}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='file'
                    />
                </div>
                
                <div className=' flex justify-center mb-3'>
                    <button
                        className=' bg-blue-400  hover:bg-blue-500 transition duration-300 ease-in-out w-full text-white font-bold  px-2 py-2 rounded-lg'>
                       Upload
                    </button>
                </div>
                
            </form>
        </div>
    )
}

export default Signup