import './text.css';

const TextArea = ({ onchange, value, onkeydown }) => {
  return (
    <>
      <textarea
        className="textArea"
        placeholder="Description"
        rows={3}
        onChange={onchange}
        value={value}
        onKeyDown={onkeydown}
      ></textarea>
    </>
  );
};

export default TextArea;
