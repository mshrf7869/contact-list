import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { FaUserAlt, FaUserEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { fireDatabase } from "../config/Firebase";
import { toast } from "react-toastify";

const Contactdetails = ({ phone, name, idd, onEdit }) => {
  console.log("nnnn", idd);
  const deleteContact = async (idd) => {
    try {
      await deleteDoc(doc(fireDatabase, "List", idd));
      // toast.success("Deleted")
      window.location.reload();
    } catch (error) {
      console.log(error, "Unable to Delete");
    }
  };
  return (
    <div
      key={idd}
      className="flex border justify-between items-center h-[70px] px-2 rounded-md mt-2 bg-[#EDF2FA]"
    >
      <FaUserAlt className="size-[2rem]" />
      <div className="ml-[-1rem]">
        <h2>{name}</h2>
        <h2>{phone}</h2>
      </div>
      <div className="flex gap-6">
        <FaUserEdit
          onClick={onEdit}
          className="size-[2rem] cursor-pointer active:scale-150 duration-500"
        />
        <RiDeleteBin6Fill
          onClick={() => deleteContact(idd)}
          className="text-red-700 size-[2rem] cursor-pointer active:scale-150 duration-500"
        />
      </div>
    </div>
  );
};

export default Contactdetails;
