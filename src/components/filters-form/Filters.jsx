import style from "../../styles/Filters.module.scss";
import { useState } from "react";

const filtersButtons = [
  {
    id: "all",
    text: "Все сотрудники",
  },
  {
    id: "increase",
    text: "На повышение",
  },
  {
    id: "more",
    text: "З/П больше 1000$",
  },
];

export const Filters = ({ onFilterChange }) => {
  const [activeFilterId, setActiveFilterId] = useState("all");

  const handleFilterClick = (id) => {
    setActiveFilterId(id);
    if (onFilterChange) {
      onFilterChange(id);
    }
  };

  return (
    <div className={style.filters}>
      {filtersButtons.map((item) => {
        const isActive = item.id === activeFilterId;
        return (
          <button
            onClick={() => handleFilterClick(item.id)}
            style={{
              background: isActive ? "white" : "rgb(255, 128, 187)",
              color: isActive ? "black" : "white",
            }}
            key={item.id}
            className={style.button}
          >
            {item.text}
          </button>
        );
      })}
    </div>
  );
};
