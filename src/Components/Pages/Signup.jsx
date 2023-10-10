import React,{useState} from 'react'
import login from '../../Assets/loginpic.png'
import logo from '../../Assets/logo.png'
import googlelogo from '../../Assets/Google Logo.png'
import {useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [year, setYear] = useState('')
    const [password, setPassword] = useState('');
 
    
 
   const onSubmit = (e) => {
        e.preventDefault();
      };
    
  return (
    <div className="flex h-full">
    <div className="w-3/6 ">
        <div className='m-16 p-20 '>
            <img src={login} alt='loginimage'></img>
        </div>
    </div>
    <div className="w-3/6 shadow-lg shadow-cyan-500/50 h-full" >
        <div className="my-2 mx-14 flex flex-col gap-5 h-3/4 w-4/5 ">
            <div className='my-1/2 flex justify-center mx-14'>
                <img src={logo} alt='logo' className='w-2/3'></img>
            </div>
            <div className=''>
                <span className='text-lg font-bold'>Signin into your Account</span>
            </div>
            <div className='flex flex-col justify-start h-3/7 space-y-3 mx-6 my-2 '>
                <form>
                
                <div className='flex flex-row gap-2 my-2'>
                    <div className='flex flex-col w-1/2'>
                        <span className='text-base font-light text-left'>Name</span>
                        <input type='text' placeholder='aler james' value={name} onChange={(e) => setName(e.target.value)} className=' bg-inputgray rounded-md  h-10 p-2 placeholder:italic placeholder:text-slate-300'></input>
                        
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <span className='text-base font-light text-left'>Email</span>
                        <input type='email' placeholder='aler@gitam.in' value={email} onChange={(e) => setEmail(e.target.value)} className=' bg-inputgray rounded-md  h-10 p-2 placeholder:italic placeholder:text-slate-300'></input>
                        
                    </div>

                </div>
                <div className='flex flex-row gap-2 my-2'>
                    <div className='flex flex-col w-1/2'>
                        <span className='text-base font-light text-left'>Phone Number</span>
                        <input type='phone' placeholder='999-999-9999' value={phone} onChange={(e) => setPhone(e.target.value)} className=' bg-inputgray rounded-md  h-10 p-2 placeholder:italic placeholder:text-slate-300'></input>
                        
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <span className='text-base font-light text-left'>Year Of study</span>
                        {/* <input type='email' placeholder='aler@gitam.in' value={email} onChange={(e) => setEmail(e.target.value)} className=' bg-inputgray rounded-md  h-10 p-2 placeholder:italic placeholder:text-slate-300'></input> */}
                        <select className='bg-inputgray rounded-md  h-10 p-2 placeholder:italic placeholder:text-slate-300' value={year} onChange={(e) => setYear(e.target.value)}>
                            <option value='1'>1st Year</option>
                            <option value='2'>2nd Year</option>
                            <option value='3'>3rd Year</option>
                            <option value='4'>4th Year</option>
                            <option value='5'>5th Year</option>
                        </select>
                    </div>

                </div>
                <div className='flex flex-row gap-2 my-2'>
                    <div className='flex flex-col w-1/2'>
                        <span className='text-base font-light text-left'>Password</span>
                        <input type='password'placeholder=' Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} className=' bg-inputgray rounded-md h-10 p-2 placeholder:italic placeholder:text-slate-300'></input>    
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <span className='text-base font-light text-left'>Re-enter Password</span>
                        <input type='password' placeholder=' Re-Enter your Password' className=' bg-inputgray rounded-md  h-10 p-2 placeholder:italic placeholder:text-slate-300'></input>
                    </div>
                </div>
                </form>
                <a href='https://github.com' className='text-end'><span className='text-base font-light text-end'>Forgot Password?</span></a>
                <button className='bg-mi text-white font-bold rounded-md p-2' onClick={onSubmit} >Sign Up</button>
            </div>
            <div className=' flex flex-row mx-10 justify-items-stretch '>
                <img src={googlelogo} alt='googlelogo' className='m-1'></img>
                <a href='https://github.com' className='mx-4'><span className='text-lg font-normal text-gray '>Signin With Google</span></a>

            </div>
            <div className=' gap-1 mx-6 justify-items-stretch '>
                <a className='border-2 border-mi text-mi font-bold rounded-md p-2' href='/login'>Login Now</a>
            </div>
        </div>
    </div>
    
</div>
  )
}

export default Signup
