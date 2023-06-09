import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: "xx-large",
          textAlign: "center",
          marginTop: "90px",
        }}
      >
        Phonebook
      </h1>
      <ContactForm />

      <h2
        style={{
          fontSize: "x-large",
          textAlign: "center",
          marginTop: "5px",
        }}
      >
        Contacts
      </h2>

      <Filter />

      <ContactList />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
