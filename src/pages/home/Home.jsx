import React from 'react'
import PreQues from '../../components/premadequestions/PreQues'
import UploadFiles from "../../components/uploadfiles/UploadFiles"

const Home = () => {
  return (
    <>
        <div className="relative inline-block mt-5 ml-7 ">
            <span className="relative z-10 p-4 font-bold text-lg">Already Designed For You 😁</span>
            <span className="absolute inset-0 bg-blue-100 transform -skew-x-6 z-0"></span>
        </div>
        <div className='mt-5 grid grid-cols-3 gap-4'>
            <PreQues /> 
            <PreQues /> 
            <PreQues /> 
            <PreQues /> 
            <PreQues /> 
            <PreQues /> 
        </div>
        <div className='flex flex-col gap-y-4 items-center '>
          <div className="relative inline-block mt-20 ml-7 ">
            <span class="relative z-10 p-4 font-bold text-3xl">Bored with the premixes, Create your own🔥</span>
            <span class="absolute inset-0 bg-blue-100 transform -skew-x-6 z-0"></span>
          </div>
          <div>
              <UploadFiles />
          </div>
        </div>
    </>
  )
}

export default Home