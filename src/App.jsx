import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { collection, getDocs } from "firebase/firestore";
import { fireDatabase } from "./config/Firebase";
import Contactdetails from "./components/Contactdetails";
import Model from "./components/Model";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [contact, setContact] = useState([]);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [currentId, setCurrentID] = useState(null);

  useEffect(() => {
    const getContact = async () => {
      try {
        const ContactCollections = collection(fireDatabase, "List");
        const ContactSnap = await getDocs(ContactCollections);
        const ContactList = ContactSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setContact(ContactList);
      } catch (error) {
        console.log(error);
      }
    };
    getContact();
  }, []);

  const contactFilter = async (e) => {
    const value = e.target.value;
    try {
      const ContactCollections = collection(fireDatabase, "List");
      const ContactSnap = await getDocs(ContactCollections);
      const ContactList = ContactSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const filteredContacts = ContactList.filter(contact =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContact(filteredContacts);
    } catch (error) {
      console.log(error);
    }
  };

  const onCreate = () => {
    setOpen(true);
    setEdit(false);
    setCurrentID(null);
  };

  const onEdit = (id) => {
    setOpen(true);
    setEdit(true);
    setCurrentID(id);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex justify-center mt-2">
      <div className="max-w-[430px] border-4 px-3 ">
        <Navbar onCreate={onCreate} contactFilter={contactFilter} />
        <div className="mt-4">
          {contact.map((contact) => (
            <Contactdetails
              key={contact.id}
              idd={contact.id}
              name={contact.name}
              phone={contact.phone}
              onEdit={() => onEdit(contact.id)}
            />
          ))}
        </div>
      </div>
      <Model id={currentId} contact={contact} onClose={onClose} onCreate={onCreate} open={open} edit={edit} />
      <ToastContainer />
    </div>
  );
}

export default App;
