import React, { useState, Suspense } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { mainAxios } from '../utils/appAxios'
import { useToast } from '@chakra-ui/react'
import Loading from '../partials/Loading'





export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(true);


  const toast = useToast()
  const navigate = useNavigate()



  //Login Request
  const submitLogin = () => {
    mainAxios.post("api/v1/auth/login", {
      email,
      password
    })
      .then((res) => {
        console.log(res);
        toast({
          title: 'Login is successfull.',
          description: "You are being redirected to the dahsboard",
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top-right'
        })
        localStorage.clear()
        setIsLoading(false)
        setTimeout(() => {
          navigate("/dashboard")
          setIsLoading(true)
        }, 3000)
        localStorage.setItem("client_token", res.data.client_token)
        localStorage.setItem("user_email", res.data.email)
        localStorage.setItem("user_fullname", res.data.fullname)


      })
      .catch(err => {
        console.log(err);
        toast({
          title: 'Login is not successfull !',
          description: "Please review your indivation.",
          status: 'error',
          position: 'top-right',
          duration: 3000,
          isClosable: true,
        })
      })
  }



  return (
    <div>
      {
        isLoading ? <body className="flex h-screen ">
          <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
            <header>
              <img className="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />
            </header>
            <div>
              <div>
                <label className="block mb-2 text-indigo-500" for="username">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="email" />
              </div>
              <div>
                <label className="block mb-2 text-indigo-500" for="password">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password" />
              </div>
              <div>
                <button onClick={submitLogin} className='w-full bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 mb-6 rounded'>Login</button>
              </div>
            </div>
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

          :
          <Loading />

      }

    </div>
  )
}
