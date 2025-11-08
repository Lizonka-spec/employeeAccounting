import style from "../../styles/ItemProperties.module.scss";

const ItemProperties = ({ name, salary, onNameChange, onSalaryChange }) => {
    return (
        <>
            <input
                className={style.itemName}
                type="text"
                placeholder="Как его зовут?"
                value={name}
                onChange={onNameChange}
            />
            <input
                className={style.itemSalary}
                type="text" 
                placeholder="З/П в $?"
                value={salary}
                onChange={onSalaryChange}
            />
        </>
    );
};

export default ItemProperties