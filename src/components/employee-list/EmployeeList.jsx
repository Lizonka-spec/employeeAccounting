import { EmployeeListItem } from "./EmployeeListItem";
export const EmployeeList = ({ employees, onDelete, onTogglePrime }) => {
  return (
    <ul>
      {(employees || []).map((employee) => (
        <EmployeeListItem
          key={employee.id}
          employee={employee}
          onDelete={onDelete}
          onTogglePrime={onTogglePrime}
        />
      ))}
    </ul>
  );
};
