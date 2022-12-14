import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { mainAxios } from '../utils/appAxios'
export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  //Login Request
  const submitLogin = () => {
    mainAxios.post("api/v1/auth/login",{
      email,
      password
    })
    .then((res) => {
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  }



  return (
    <div>
      <body className="flex h-screen ">
        <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
          <header>
            <img className="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />
          </header>
          <form onSubmit>
            <div>
              <label className="block mb-2 text-indigo-500" for="username">Email</label>
              <input onChange={(e)=>setEmail(e.target.value)} className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="email" />
            </div>
            <div>
              <label className="block mb-2 text-indigo-500" for="password">Password</label>
              <input onChange={(e)=>setPassword(e.target.value)} className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password" />
            </div>
            <div>
              <button onClick={submitLogin} className='w-full bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 mb-6 rounded'>Login</button>
            </div>
          </form>
          <footer>
            <Link to="/reset_password">
              <a className="text-indigo-700 hover:text-indigo-900 text-sm float-left">Forgot Password?</a>
            </Link>
            <Link to="/register">
              <a className="text-indigo-700 hover:text-indigo-900 text-sm float-right">Create Account</a>
            </Link>
          </footer>
        </div>
      </body>
    </div>
  )
}
