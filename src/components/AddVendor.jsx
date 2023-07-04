"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { mutate } from "swr";



const AddVendor = () => {
  const [showModal, setShowModal] = useState(false);
  const session = useSession();
  console.log("session",session);

   const router = useRouter()

   

  const handleSubmit =  async(e) => {
    e.preventDefault()

    const name = e.target[0].value
    const bankAccountNo = e.target[1].value
    const bankName = e.target[2].value
    const addressLine1 = e.target[3].value
    const addressLine2 = e.target[4].value
    const city = e.target[5].value
    const country = e.target[6].value
    const zipCode = e.target[7].value

    try {
      
      await fetch('api/vendorsList',{
        method : "POST",
        body :JSON.stringify({
          name,
          bankAccountNo,
          bankName,
          addressLine1,
          addressLine2,
          city,
          country,
          zipCode
        })
      });
      e.target.reset()
      mutate()
      router.push('/')
      setShowModal(false)
    } catch (error) {
      console.log("error",error)
    }
  }

  const addVendor = () => {
     if(session.status === 'unauthenticated' ){
        alert("Login to Add Vendor")
     }else{
       setShowModal(true)
     }
  }


  return (
    <div>
      <button
        className="bg-blue-400 px-3 py-2 rounded-sm"
        onClick={addVendor}
      >
        Add Vendor
      </button>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="h-96 overflow-y-scroll my-5">
          <h3 className="text-xl font-medium text-gray-900 text-center mb-2">
            Fill Vendor Details
          </h3>
          <form className="space-y-6 px-10" onSubmit={handleSubmit} >
            <div className=" flex flex-col items-start">
              <label className="block mb-2 font-medium text-md text-gray-900" for="name">Vendor Name</label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 p-1.5 w-full"
                placeholder="name"
                required
              />
            </div>
            <div className=" flex flex-col items-start">
              <label className="block mb-2 font-medium text-md text-gray-900" for="banckAccount">Bank Account No</label>
              <input
                type="number"
                id="banckAccount"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 p-1.5 w-full"
                placeholder="Banck Account No"
                required
              />
            </div>
            <div className=" flex flex-col items-start">
              <label className="block mb-2 font-medium text-md text-gray-900" for="bankName">Bank Name</label>
              <input
                type="text"
                id="bankName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 p-1.5 w-full"
                placeholder="bankName"
                required
              />
            </div>
            <div className=" flex flex-col items-start">
              <label className="block mb-2 font-medium text-md text-gray-900" for="adressLine1">Address Line 1</label>
              <input
                type="text"
                id="AdressLine 1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 p-1.5 w-full"
                placeholder="AdressLine 1"
                required
              />
            </div>
            <div className=" flex flex-col items-start">
              <label className="block mb-2 font-medium text-md text-gray-900" for="adressLine2">Address Line 2</label>
              <input
                type="text"
                id="adressLine2"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 p-1.5 w-full"
                placeholder="AdressLine 2"
        
              />
            </div>
            <div className=" flex flex-col items-start">
              <label className="block mb-2 font-medium text-md text-gray-900" for="city">City</label>
              <input
                type="text"
                id="city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 p-1.5 w-full"
                placeholder="City"
                required
              />
            </div>
            <div className=" flex flex-col items-start">
              <label className="block mb-2 font-medium text-md text-gray-900" for="country">Country</label>
              <input
                type="text"
                id="country"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 p-1.5 w-full"
                placeholder=""
                required
              />
            </div>
            <div className=" flex flex-col items-start">
              <label className="block mb-2 font-medium text-md text-gray-900" for="zipCode">Zip Code</label>
              <input
                type="number"
                id="zipCode"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 p-1.5 w-full"
                placeholder=""
                required
              />
            </div>
            <div className="flex justify-center">
            <button className="bg-blue-400 font-mediusm rounded-sm px-4 py-2">Sumbit</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddVendor;
