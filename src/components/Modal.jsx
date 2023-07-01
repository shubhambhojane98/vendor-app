import React from 'react'

const Modal = ({children, isVisible,onClose}) => {

    if(!isVisible) return null

    const handleClose = (e) => {
        if(e.target.id === "wrapper") onClose();
    }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center' id='wrapper' onClick={handleClose}>
        <div className='bg-white p-4 rounded w-2/4 flex flex-col'>
            <button className='text-xl text-black place-self-end' onClick={() => onClose()}>X</button>
            {children}
        </div>
    </div>
  )
}

export default Modal