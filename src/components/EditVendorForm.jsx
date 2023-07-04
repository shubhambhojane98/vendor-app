'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


const EditVendorForm = ({id,data}) => {

    const router = useRouter()

    const [name,setName] = useState(data?.name); 
    const [bankAccountNo, setBankAccountNo] = useState(data?.bankAccountNo) 
    const [bankName,setBankName] = useState(data?.bankName) 
    const [addressLine1,setAddressLine1] = useState(data?.addressLine1) 
    const [addressLine2,setAddressLine2] = useState(data?.addressLine2) 
    const [city,setCity] = useState(data?.city) 
    const [country,setCountry] = useState(data?.country) 
    const [zipCode,setZipCode] = useState(data?.zipCode) 

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const res = await fetch(`https://vendor-app-nine.vercel.app/${id}`, {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
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
    
        //   router.refresh();
          router.push("/");
        } catch (error) {
          console.log("error",error);
        }
      };

  return (
    <div>
        <div className=''>
            <h1 className='text-center pt-2 font-semibold'>Update Vendor Details</h1>
        <form className="p-10 bg-white flex flex-col  w-2/5 mx-auto" onSubmit={handleSubmit} >
            <div className=" flex flex-col items-start">
              <label className="block mb-2 font-medium text-md text-gray-900" for="name">Vendor Name</label>
              <input
               onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                value={name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 p-1.5 w-full"
                placeholder="name"
                required
              />
            </div>
            <div className=" flex flex-col items-start">
              <label className="block mb-2 font-medium text-md text-gray-900" for="banckAccount">Bank Account No</label>
              <input
              onChange={(e) => setBankAccountNo(e.target.value)}
                type="number"
                id="banckAccount"
                value={bankAccountNo}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 p-1.5 w-full"
                placeholder="Banck Account No"
                required
              />
            </div>
            <div className=" flex flex-col items-start">
              <label className="block mb-2 font-medium text-md text-gray-900" for="bankName">Bank Name</label>
              <input
              onChange={(e) => setBankName(e.target.value)}
                type="text"
                id="bankName"
                value={bankName}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 p-1.5 w-full"
                placeholder="bankName"
                required
              />
            </div>
            <div className=" flex flex-col items-start">
              <label className="block mb-2 font-medium text-md text-gray-900" for="adressLine1">Address Line 1</label>
              <input
              onChange={(e) => setAddressLine1(e.target.value)}
                type="text"
                id="AdressLine 1"
                value={addressLine1}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 p-1.5 w-full"
                placeholder="AdressLine 1"
                required
              />
            </div>
            <div className=" flex flex-col items-start">
              <label className="block mb-2 font-medium text-md text-gray-900" for="adressLine2">Address Line 2</label>
              <input
              onChange={(e) => setAddressLine2(e.target.value)}
                type="text"
                id="adressLine2"
                value={addressLine2}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 p-1.5 w-full"
                placeholder="AdressLine 2"
        
              />
            </div>
            <div className=" flex flex-col items-start">
              <label className="block mb-2 font-medium text-md text-gray-900" for="city">City</label>
              <input
              onChange={(e) => setCity(e.target.value)}
                type="text"
                id="city"
                value={city}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 p-1.5 w-full"
                placeholder="City"
                required
              />
            </div>
            <div className=" flex flex-col items-start">
              <label className="block mb-2 font-medium text-md text-gray-900" for="country">Country</label>
              <input
              onChange={(e) => setCountry(e.target.value)}
                type="text"
                id="country"
                value={country}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 p-1.5 w-full"
                placeholder=""
                required
              />
            </div>
            <div className=" flex flex-col items-start">
              <label className="block mb-2 font-medium text-md text-gray-900" for="zipCode">Zip Code</label>
              <input
              onChange={(e) => setZipCode(e.target.value)}
                type="number"
                id="zipCode"
                value={zipCode}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 p-1.5 w-full"
                placeholder=""
                required
              />
            </div>
            <div className="flex justify-center my-4">
            <button className="bg-blue-400 font-mediusm rounded-sm px-4 py-2">Sumbit</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default EditVendorForm