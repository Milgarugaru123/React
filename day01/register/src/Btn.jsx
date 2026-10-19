const Btn = (props) => {
  return (
    <>
      <button className="text-lg rounded-lg py-2 text-white bg-gray-300 cursor-not-allowed">
        {props.placeholder}
      </button>
    </>
  );
};

export default Btn;
