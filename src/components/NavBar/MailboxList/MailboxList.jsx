import { Link } from "react-router";

const MailboxList=({ mailboxes })=> {
  return (
    <>
   
      <h2>Mailboxes</h2>
      <div>
        {mailboxes.map((mailbox) => (
          <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
            <div className="mail-box">Mailbox {mailbox._id}</div>
          </Link>
            ))}
      </div>
   
    </>
  );
}

export default MailboxList;