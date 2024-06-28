import css from "./Contacts.module.css";
import { FaPhone } from "react-icons/fa6";
import { FaUserAstronaut } from "react-icons/fa";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.contactContainer}>
      <div>
        <div className={css.contactItem}>
          <FaUserAstronaut className={css.iconPerson} />
          <span>{name}</span>
        </div>
        <div className={css.contactItem}>
          <FaPhone className={css.iconPhone} />
          <span>{number}</span>
        </div>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
