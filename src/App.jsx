// src/App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar/NavBar.jsx";
import MailboxForm from "./components/NavBar/MailboxForm/MailboxForm";
import MailboxList from "./components/NavBar/MailboxList/MailboxList";
import MailboxDetails from "./components/NavBar/MailboxDetails/MailboxDetails";





const App = () => {
const [mailboxes, setMailboxes] = useState([]);

  const addBox=(newBox)=> {
    const nextId = mailboxes.length + 1;
    const mailboxWithId = { _id: nextId, ...newBox };
    setMailboxes([...mailboxes, mailboxWithId]);
  }

  return (
    <>
    <NavBar/>
 
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
