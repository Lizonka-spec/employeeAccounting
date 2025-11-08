import { FaCookie, FaTrash } from "react-icons/fa";
import style from "../../styles/EmployeeListItem.module.scss";

export const EmployeeListItem = ({ employee, onDelete, onTogglePrime }) => {
  const { id, name, salary, isPrime } = employee;

  return (
    <li className={style.listItem}>
      <span>{name}</span>
      <div className={style.itemContent}>
        <span>{salary}$</span>
        <div className={style.itemProperties}>
          <button
            className={`${style.addPrimeButton} ${isPrime ? style.prime : ""}`}
            onClick={() => onTogglePrime(id)}
          >
            <FaCookie />
          </button>
          <button className={style.deleteButton} onClick={() => onDelete(id)}>
            <FaTrash />
          </button>
        </div>
      </div>
    </li>
  );
};
