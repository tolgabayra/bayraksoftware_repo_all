import { useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../partials/Loading'
import { mainAxios } from '../utils/appAxios'


export default function Register() {
  const [fullname, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(true);



  const toast = useToast()
  const navigate = useNavigate()

  const submitRegister = () => {
    mainAxios.post("api/v1/auth/register", {
      fullname,
      email,
      password
    })
      .then(() => {
        toast({
          title: 'Account created.',
          description: "You are being redirected to the loginpage",
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top-right'
        })
        setIsLoading(false)
        setTimeout(() => {
          setIsLoading(true)
          navigate("/login")
        }, 3000)
      })
      .catch(err => {
        console.log(err);
        toast({
          title: 'Account can not created.',
          description: "Please check your information",
          status: 'warning',
          duration: 2000,
          isClosable: true,
          position: 'top-right'
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
                <label className="block mb-2 text-indigo-500" for="username">Fullname</label>
                <input onChange={(e) => setFullName(e.target.value)} className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="username" />
              </div>
              <div>
                <label className="block mb-2 text-indigo-500" for="username">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="username" />
              </div>
              <div>
                <label className="block mb-2 text-indigo-500" for="password">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password" />
              </div>
              <div>
                <button onClick={submitRegister} className='w-full bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 mb-6 rounded'>Register</button>
              </div>
            </div>
            <footer>
              <Link to="/login">
                <a className="text-indigo-700 hover:text-indigo-900 text-sm float-right">Already have a account</a>
              </Link>
            </footer>
          </div>
        </body>
          : <Loading />
      }

    </div>)
}
