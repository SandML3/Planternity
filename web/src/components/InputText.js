import '../styles/InputText.scss';


const InputText = ({ name, user, handleInput, labelText, placeholder}) => {

  return <>
    <label htmlFor={name} className='main__login__form__label'>{labelText}</label>

    <input 
        className='main__login__form__input'
        type='text' 
        name={name} 
        id={name} 
        value={user}
        onChange={handleInput}
        placeholder={placeholder}
        />
    </>
}

export default InputText;