import "../../assets/styles/components/InputText.scss";

const InputText = ({
  name,
  value,
  updateStateVar,
  labelText,
  placeholder,
  type,
}) => {
  const handleChange = (ev) => {
    updateStateVar(ev.target.name, ev.target.value);
  };

  const handleWrite = (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
    }
  };

  return (
    <>
      <label htmlFor={name} className="main__login__form__label">
        {labelText}
      </label>

      <input
        className="main__login__form__input"
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        onKeyDown={handleWrite}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputText;
