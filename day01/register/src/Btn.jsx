const Btn = (props) => {
  const style = {
    valid: `bg-gray-800 cursor-pointer`,
    notValid: `bg-gray-300 cursor-not-allowed`,
  };

  return (
    <>
      <div
        className={`text-lg text-white rounded-lg py-2 text-center ${props.isValid ? style.valid : style.notValid}`}
      >
        {props.placeholder}
      </div>
    </>
  );
};

export default Btn;
