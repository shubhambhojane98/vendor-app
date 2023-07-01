import { signIn } from 'next-auth/react'
import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Sign In with Google</h1>
        <button onClick={() => signIn("google")}>Login</button>
    </div>
  )
}

export default Login