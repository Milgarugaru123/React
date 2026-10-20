const Badge = ({ isNecessary }) => {
  const style = {
    necessary: `text-red-600 bg-red-100`,
    notNecessary: `text-gray-600 bg-gray-100`,
  };

  return (
    <div
      className={`text-xs rounded-sm px-1.5 py-[0.1em] ${isNecessary ? style.necessary : style.notNecessary}`}
    >
      {isNecessary ? `필수` : `선택`}
    </div>
  );
};

export default Badge;
