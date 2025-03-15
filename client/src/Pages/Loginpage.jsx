import React, { useEffect, useState } from 'react'
import { useLogin } from '../Hooks/useLogin';

const Loginpage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login, error} = useLogin()

  const handleClick =async (e)=>{
    e.preventDefault();
    await login(email, password)
    if(error === 'Incorrect email!'){
      setEmail("");
      setPassword("");
    }
    if(error === 'Incorrect password!'){
      setPassword("");
    }
  }


  return (
    <div className='bg-stone-200 h-[100vh] pt-[100px] font-roboto'>
      <div className='flex flex-col items-center sm:w-[50%] mx-auto p-10 rounded bg-white gap-4 shadow-[1px_5px_15px_rgba(0,0,0,0.6)]'>
        <h1 className='text-2xl font-bold text-cyan-700'>LOGIN</h1>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} className={`border-2 border-gray-400 ${error === 'Incorrect email!' && 'border-red-500'} p-2 rounded sm:w-fit sm:h-fit w-[200px] h-[30px]`} type="email" required placeholder='Enter Email ID'/>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} className={`border-2 border-gray-400 ${error === 'Incorrect password!' && 'border-red-500'}  p-2 rounded sm:w-fit sm:h-fit w-[200px] h-[30px]`} type="password" required placeholder='Create Password'/>
        <button onClick={handleClick} className='h-[30px] rounded sm:h-fit w-fit sm:py-1 px-2 cursor-pointer bg-cyan-600 hover:bg-cyan-500'>Login</button>
        {error && <p className='text-red-500'>{error}</p>}
      </div>
    </div>
  )
}

export default Loginpage
