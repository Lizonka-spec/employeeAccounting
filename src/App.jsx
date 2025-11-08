import { useState } from "react";
import EmployeeForm from "./components/add-employee-form/EmployeeForm";
import { EmployeeList } from "./components/employee-list/index";
import { EmployeeCounter, PrimeCounter } from "./components/description/index";
import { Filters, Searching } from "./components/filters-form/index";

import style from "./App.module.scss";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [searchFilter, setSearchFilter] = useState("");

  const handleAddEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((emp) => emp.id !== id)
    );
  };

  const handleTogglePrime = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.id === id ? { ...emp, isPrime: !emp.isPrime } : emp
      )
    );
  };

  const handleSearchChange = (value) => {
    setSearchFilter(value);
  };

  const filterAndSearchEmployes = () => {
    let filteredList = employees;

    filteredList = filteredList.filter((emp) => {
      if (currentFilter === "increase") {
        return emp.isPrime;
      } else if (currentFilter === "more") {
        return emp.salary > 1000;
      }

      return true;
    });

    if (searchFilter) {
      filteredList = filteredList.filter((emp) => {
        return emp.name.toLowerCase().includes(searchFilter.toLowerCase());
      });
    }
    return filteredList;
  };

  const visibleEmployees = filterAndSearchEmployes();

  const totalEmployees = employees.length;
  const primeEmployees = employees.filter((emp) => emp.isPrime).length;

  return (
    <section className={style.container}>
      <div className={style.description}>
        <h1>Учет сотрудников в компании</h1>
        <EmployeeCounter total={totalEmployees} />
        <PrimeCounter primeCount={primeEmployees} />
      </div>

      <div className={style.filtersForm}>
        <Searching onSearchChange={handleSearchChange} />
        <Filters onFilterChange={setCurrentFilter} />
      </div>

      <div className={style.employeeList}>
        <EmployeeList
          employees={visibleEmployees}
          onDelete={handleDeleteEmployee}
          onTogglePrime={handleTogglePrime}
        />
      </div>

      <div className={style.addEmployeeForm}>
        <h3>Добавить нового сотрудника</h3>
        <div className={style.employeeFormContent}>
          <EmployeeForm onAddEmployee={handleAddEmployee} />
        </div>
      </div>
    </section>
  );
};

export default App;
