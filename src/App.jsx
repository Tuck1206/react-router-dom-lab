// src/App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar/NavBar.jsx";
//import MailboxForm from "./components/NavBar/MailboxForm/MailboxForm";
import MailboxList from "./components/NavBar/MailboxList/MailboxList";
//import MailboxDetails from "./components/MailboxDetails/MailboxDetails";





const App = () => {
const [mailboxes, setMailboxes] = useState([]);

  const addBox=(newMailboxData) => {
    newMailboxdata._id = Mailbox.length + 1
    setMailboxes ([...mailboxes, newMailboxData])
  }
  
  return (
    <>
    <NavBar/>
  <h1>React Mailboxes</h1>
  <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
  </Routes>
  </>
)
};

export default App;
