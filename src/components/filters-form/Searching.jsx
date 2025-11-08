import { useState } from "react";
import style from "../../styles/Searching.module.scss";
export const Searching = ({ onSearchChange }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onSearchChange(newValue);
  };
  return (
    <input
      className={style.input}
      type="text"
      placeholder="Найти сотрудника"
      value={value}
      onChange={handleChange}
    />
  );
};
