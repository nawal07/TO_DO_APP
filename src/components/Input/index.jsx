import './input.css';

const Input = ({onchange,value}) => {
  return (
    <>
      <input value={value} placeholder='Title' onChange={onchange} type="text" className="inp"></input>
    </>
  );
};

export default Input;
