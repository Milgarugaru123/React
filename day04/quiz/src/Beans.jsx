import Bean from "./Bean";

const Beans = () => {
  return (
    <div className="w-full h-100">
      <Bean start={`5%`} end={-120} />
      <Bean start={`35%`} end={-260} />
      <Bean start={`80%`} end={-50} />
    </div>
  );
};

export default Beans;
