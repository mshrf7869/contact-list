import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { fireDatabase } from "../config/Firebase";
import { toast } from "react-toastify";

const Model = ({ id, open, onClose, edit, contact }) => {
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  console.log("edit", edit);
  console.log("contact IDdd", id);

  const addContact = async (e) => {
    e.preventDefault();
    try {
      if (edit && contact) {
        const contactRef = doc(fireDatabase, "List", id);
        await updateDoc(contactRef, { name, phone });
        //  toast.success("Updated")
      } else {
        const contactRef = collection(fireDatabase, "List");
        await addDoc(contactRef, { name, phone });
        //  toast.success("Added")
      }
      setName("");
      setPhone("");
      onClose();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {open && (
        <div className="max-w-[90vw] min-h-[200px] bg-slate-400 rounded-md absolute top-[35%] left-[35%] sm:max-w-[35%] transform -translate-x-1/3 -translate-y-1/2">
          <div className="p-4">
            <IoIosCloseCircle
              onClick={onClose}
              className="size-[2.2rem] hover:text-[#FF0133] cursor-pointer active:scale-105 duration-200 absolute right-[4%]"
            />
          </div>
          <form
            onSubmit={addContact}
            className="p-4 flex flex-col gap-4 items-center mt-3"
          >
            <div className="flex gap-2  items-center">
              <h2 className="font-bold">Name</h2>
              <input required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Enter Name"
                className="ml-8 h-[40px] px-4 rounded-lg outline-none"
              />
            </div>
            <div className="flex gap-2 items-center">
              <h2 className="font-bold">Phone No.</h2>
              <input required
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="text"
                placeholder="Enter Phone number"
                className="h-[40px] px-4 rounded-lg outline-none"
              />
            </div>
            <button className="bg-green-500 p-1 px-3 font-bold rounded-lg active:scale-125 duration-300">
              {edit ? "Edit" : "Add"} Contact
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Model;
