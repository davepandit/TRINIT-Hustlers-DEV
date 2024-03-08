import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function Footer() {
    
    return (
        <footer className="text-gray-600 body-font bg-gray-300 mt-7" >
            <div className='flex justify-around p-4'>
              <div className='flex flex-col gap-y-4'>
                <h2 href='#' className='font-bold text-2xl hover:cursor-pointer'><Link to={'/'}>Test Formatter📒</Link></h2>
                <h2 className='font-bold'>Contact</h2>
                <h2>9846265889</h2>
                <h2>9846765889</h2>
              </div>
              <div className='flex flex-col gap-y-4'>
                <h2 className='font-bold hover:cursor-pointer'>Quick Links</h2>
                <h2 className='font-bold hover:cursor-pointer'><Link to={'/terms and conditions'}>Terms and Conditions</Link></h2>
                <h2 className='font-bold hover:cursor-pointer'><Link to={'/privacy policy'}>Privacy Policy</Link></h2>
              </div>
            </div>

            <div className="bg-gray-200" >
                <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
                    <Link to={'/'} className='flex'>
                        <div className="flex ">
                            <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' >Test Formatter</h1>
                        </div>
                    </Link>
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4" >© 2024 Test Formatter —
                        <a href="https://twitter.com/narendramodi" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank" >www.Test Formatter.com</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                <circle cx={4} cy={4} r={2} stroke="none" />
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}