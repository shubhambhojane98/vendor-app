import EditVendorForm from '@/components/EditVendorForm';
import React from 'react'


async function getData(id) {

    try {
        const res = await fetch(`http://localhost:3000/api/vendorsList/${id}`, { cache : 'no-store' });
          return res.json();
    } catch (error) {
        console.log(error);
    }
   
  }

const editVendor = async ({params}) => {
 
    const {id} = params;
    const data = await  getData(id)
   console.log(id)
    console.log("data",data)
  return (
    <div>
        <EditVendorForm id={id} data={data} />
    </div>
  )
}

export default editVendor