const Button = ({ name, func }) => {
  return (
    <>
      <button style={{ fontSize: `20px` }} onClick={func}>
        {name}
      </button>
    </>
  );
};

export default Button;
