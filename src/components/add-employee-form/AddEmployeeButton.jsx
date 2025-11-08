import style from "../../styles/ItemProperties.module.scss"
const AddEmployeeButton = () => {
  return (
    <button className={style.addButton} type="submit">
      Добавить
    </button>
  );
};

export default AddEmployeeButton