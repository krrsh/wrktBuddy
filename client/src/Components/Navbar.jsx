import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLogout } from '../Hooks/useLogout'
import { useAuthContext } from '../Hooks/useAuthContext'

const Navbar = () => {
  const navigate = useNavigate()
  const {logout} = useLogout();

  const {user} = useAuthContext();

  const handleLogout = ()=>{
    logout()
  }
  return (
    <div className='font-roboto w-[100%] flex justify-between sm:p-8 p-2 sm:h-auto h-[100px] items-center bg-gray-600/80'>
      <h1 className='font-extrabold text-xl pl-2 sm:text-2xl cursor-pointer' onClick={()=>navigate('/')}>wrktBuddy</h1>
      {/* <div className='flex gap-2'> */}
        {user &&
        <div className='flex sm:gap-6 gap-2 flex-col sm:flex-row items-center mr-6'>
          <span className='text-stone-900 font-semibold underline-offset-2 underline'>{user.email}</span>
          <button onClick={handleLogout} className='bg-red-400 hover:bg-red-500 text-sm h-8 py-1 px-2 rounded cursor-pointer font-semibold'>Logout</button>
        </div> 
        }
        {!user &&
        <div className='flex gap-2'>
          <Link className='bg-gray-50 hover:bg-gray-200 text-sm h-8 py-1 px-2 rounded cursor-poiter' to='/login'>Login</Link>
          <Link className='bg-gray-50 hover:bg-gray-200 text-sm h-8 py-1 px-2 rounded cursor-poiter' to='/signup'>Sign Up</Link>
        </div> 
        }
      {/* </div> */}
    </div>
  )
}

export default Navbar
