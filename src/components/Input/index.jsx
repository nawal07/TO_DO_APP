import './input.css';

const Input = ({onchange,value}) => {
  return (
    <>
      <input value={value} onChange={onchange} type="text" className="inp"></input>
    </>
  );
};

export default Input;
