import { useState } from "react";
import ItemProperties from "./ItemProperties";
import AddEmployeeButton from "./AddEmployeeButton";
import style from "../../styles/ItemProperties.module.scss";

const EmployeeForm = ({ onAddEmployee }) => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  const handleNameChange = (e) => setName(e.target.value);

  const handleSalaryChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === "") {
      setSalary(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || salary.trim() === "") {
      alert("Пожалуйста, заполните все поля!");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      name: name,
      salary: parseFloat(salary),
      isPrime: false,
    };

    onAddEmployee(newEmployee);
    setName("");
    setSalary("");
  };

  return (
    <form className={style.addEmployeeForm} onSubmit={handleSubmit}>
      <ItemProperties
        name={name}
        salary={salary}
        onNameChange={handleNameChange}
        onSalaryChange={handleSalaryChange}
      />
      <AddEmployeeButton />
    </form>
  );
};

export default EmployeeForm;
