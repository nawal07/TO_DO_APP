import './text.css';

const TextArea = ({ onchange, value }) => {
  return (
    <>
      <textarea
        className="textArea"
        placeholder="Description"
        rows={3}
        onChange={onchange}
        value={value}
      ></textarea>
    </>
  );
};

export default TextArea;
