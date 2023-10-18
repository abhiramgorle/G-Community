import React,{useState,useContext,useEffect} from 'react'
import login from '../../Assets/loginpic.png'
import logo from '../../Assets/logo.png'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../Appcontext/AppContext'
import { auth, onAuthStateChanged } from "../Firebase/Firebase";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const { signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // navigate("/dashboard");
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, [navigate]);


    
    
  return (
    
<div className="flex h-full">
    <div className="w-4/6 ">
        <div className='m-16 p-20 '>
            <img src={login} alt='loginimage'></img>
        </div>
    </div>
    <div className="w-2/6  shadow-lg shadow-cyan-500/50" >
        <div className="my-60 mx-14 flex flex-col gap-5 h-3/4 w-4/5 ">
            <div className='my-4  flex justify-center mx-14'>
                <img src={logo} alt='logo' className='w-2/3'></img>
            </div>
            <div className=''>
                <span className='text-lg font-bold'>Login into your Account using Gitam Mail</span>
            </div>
            {/* <form onSubmit={handleSubmit}>
                <div className='flex flex-col justify-start h-3/7 w-5/6 gap-2 mx-6 '>
                    <span className='text-base font-light text-left'>Email</span>
                    <div className='flex flex-row '>
                        <input name='email' label='email' type='email' placeholder='aler@gitam.in' className=' bg-inputgray rounded-md w-5/6 h-10 p-2 placeholder:italic placeholder:text-slate-300'></input>
                        <button className='bg-mi text-white rounded-md  w-1/6 h-10 p-2'>
                                <img className='mx-2' src={frame} alt='mes icon'></img>
                        </button>
                    </div>
                    <span className='text-base font-light text-left'>Password</span>
                    <div className='flex flex-row '>
                        <input type='password' placeholder=' Enter your Password' className=' bg-inputgray rounded-md w-5/6 h-10 p-2 placeholder:italic placeholder:text-slate-300'></input>
                        <button className='bg-mi text-white rounded-md  w-1/6 h-10 p-2'>
                            <img className='mx-2' src={frame1} alt='mes icon'></img>
                        </button>
                    </div>
                    <a href='https://github.com' className='text-end'><span className='text-base font-light text-end'>Forgot Password?</span></a>
                    <button className='bg-mi text-white font-bold rounded-md p-2'>Login</button>
                </div>
            </form> */}
            {/* <div className=' flex flex-row mx-14  mt-20 justify-items-stretch cursor-pointer bg-blue'>
                <FcGoogle size={30} className='text-white' ></FcGoogle>
                <span className='text-lg font-normal text-gray mx-2'>Continue With Google</span>

            </div> */}
            <div className='flex flex-col w-5/6 gap-1 mx-6 cursor-pointer '  onClick={signInWithGoogle}>
                <span className='border-2 border-mi text-mi font-bold rounded-md p-2 ' >Login Now</span>
            </div>
        </div>
    </div>
    
</div>
    
  )
}

export default Login
