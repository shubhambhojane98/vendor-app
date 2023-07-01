import React from 'react'
import { ClipLoader } from 'react-spinners'


const loading = () => {
  return (
    <div className="flex justify-center items-center">
    <ClipLoader color="#36d7b7"  />
    </div>
  )
}

export default loading