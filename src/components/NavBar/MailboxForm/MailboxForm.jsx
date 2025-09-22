import { useState } from "react";
import { useNavigate } from 'react-router';



const MailboxForm =({ addBox })=> {
  const [boxOwner, setBoxOwner] = useState("");
  const [boxSize, setBoxSize] = useState("Small");
  const navigate = useNavigate();

 const handleSubmit=(e) =>{
    e.preventDefault();
    addBox({ boxOwner, boxSize });
    navigate("/mailboxes");
  }

  return (
    <section>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Owner:
          <input
            type="text"
            value={boxOwner}
            onChange={(e) => setBoxOwner(e.target.value)}
            required
          />
        </label>
        <label>
          Size:
          <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        <button type="submit">Create Mailbox</button>
      </form>
    </section>
  );
}
export default MailboxForm;
