"use client";
import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import useSWR from "swr";
import Modal from "./Modal";
import Link from "next/link";
import Pagination from "./Pagination";
import { useSession } from "next-auth/react";
import { ClipLoader } from 'react-spinners'
import { useRouter } from "next/navigation";



const VendorList = () => {
  //   const data = await getData();

  const [showModal, setShowModal] = useState(false);
  const[page,setPage] = useState(1);
  const [deleteId,setDeleteId] = useState('')

  const session = useSession();
  const router = useRouter()


  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate ,isLoading } = useSWR(
    "https://vendor-app-alpha.vercel.app/api/vendorsList",
    fetcher
  );

 


  const handleDelete = async () => {
    try {
      await fetch(`/api/vendorsList/${deleteId}`, {
        method: "DELETE",
      });
      mutate();
      setShowModal(false)
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteItem =  (id) => {
        setShowModal(true)
        setDeleteId(id)
    
  }

  if(isLoading){
    return(
        <div className="flex justify-center">
        <ClipLoader color="#36d7b7"  />
        </div>
    )
  }

  return (
    <div>
      <table className="w-5/6 mx-auto">
        <thead className="bg-gray-50 border-b-2 border-gray-300">
          <tr>
            <th className="p-3 text-xl font-semibold text-left">Vendor Name</th>
            <th className="p-3 text-xl font-semibold text-left">
              Bank Account No
            </th>
            <th className="p-3 text-xl font-semibold text-left">Bank Name</th>
            {session.status === 'authenticated' && (<th colSpan={2} className="p-3 text-xl font-semibold text-left">Actions</th>)}
          </tr>
        </thead>
        <tbody className="border">
          {data?.slice(page * 4 - 4, page * 4).map((item) => (
            <tr key={item._id} className="bg-gray-50">
              <td className="p-3 text-lg text-gray-700">{item.name}</td>
              <td className="p-3 text-lg text-gray-700">
                {item.bankAccountNo}
              </td>
              <td className="p-3 text-lg text-gray-700">{item.bankName}</td>
              {session.status === "authenticated" ? (<Link href={`/editVendor/${item._id}`}>
              <td
                className="p-3 text-lg text-gray-700"
              >
                <AiFillEdit color="blue" />
              </td>
              </Link>) : '' }
             {session.status === "authenticated" && ( <td
                className="p-3 pb-5 text-lg text-gray-700"
                onClick={() => handleDeleteItem(item._id)}
              >
                <AiFillDelete color="red" />
              </td>)}
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="flex flex-col items-center">
        <h1 className="text-center font-medium mb-2">Are you sure you want to Remove</h1>
        <button className="bg-red-500 text-white rounded p-2" onClick={() => handleDelete()}>Remove</button>
        </div>
      </Modal>
      <div className="flex justify-center mt-10">
        <Pagination data={data} page={page} setPage={(args) => setPage(args)} />
      </div>
    </div>
  );
};

export default VendorList;
