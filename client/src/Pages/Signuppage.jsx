import React, { useState } from 'react'
import { useSignup } from '../Hooks/useSignup';
import { useNavigate } from 'react-router-dom';

const Signuppage = () => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    //useSignup hook
    const {signup, error} = useSignup()
  
    const handleClick = async (e)=>{
      e.preventDefault();
        await signup(email, password);
        if(!error){
          setEmail('')
          setPassword('')
        }
    }

    return (
    <div className='bg-stone-200 h-[100vh] font-roboto pt-[100px]'>
      <div className='flex flex-col sm:w-[50%] mx-auto p-10 items-center rounded bg-white gap-4 shadow-[1px_5px_15px_rgba(0,0,0,0.6)]'>
        <h1 className='text-2xl font-bold text-teal-800'>Create Account</h1>
        <input required onChange={(e)=>setEmail(e.target.value)} value={email} className={`border-2 border-gray-400 ${error && "border-red-500"} p-2 rounded sm:w-fit sm:h-fit w-[200px] h-[30px]`} type="email" placeholder='Enter Email ID'/>
        <input required onChange={(e)=>setPassword(e.target.value)} value={password} className={`border-2 border-gray-400 ${error === 'Enter the Required field!' && "border-red-500"} p-2 rounded sm:w-fit sm:h-fit w-[200px] h-[30px]`} type="password" placeholder='Create Password'/>
        <button onClick={handleClick} className='h-[30px] rounded sm:h-fit w-fit sm:py-1 px-2 cursor-pointer bg-teal-600 hover:bg-teal-500'>Sign Up</button>
        {error  && <p className='text-red-500'>{error}</p>} 
        <div className='flex gap-2 items-center'>
        <span className=''>Already have an account ?</span>
        <button onClick={()=>navigate('/login')} className='h-[30px] rounded sm:h-fit w-fit sm:py-1 px-2 cursor-pointer bg-cyan-600 hover:bg-cyan-500'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Signuppage