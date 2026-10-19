import { useState } from "react";

const App = () => {
  const menu = [
    { name: `아메리카노`, price: 2000 },
    { name: `라떼`, price: 2500 },
    { name: `모카`, price: 3000 },
  ];

  const [count, setCount] = useState({
    [`${menu[0].name}`]: 0,
    [`${menu[1].name}`]: 0,
    [`${menu[2].name}`]: 0,
  });
  const [total, setTotal] = useState(0);

  const countDown = (index) => {
    setCount((prev) => {
      if (prev[Object.keys(prev).find((x) => menu[index].name)] === 0)
        return prev;
      const temp = {
        [`${menu[index].name}`]:
          prev[Object.keys(prev).find((x) => menu[index].name)] - 1,
      };
      return (prev = {
        ...prev,
        ...temp,
      });
    });
    totalRend();
  };
  const countUp = (index) => {
    setCount((prev) => {
      // console.log({
      //   ...prev,
      //   [`${menu[index].name}`]: prev[
      //     Object.keys(prev).find((x) => menu[index].name)
      //   ]++,
      // });
      const temp = {
        [`${menu[index].name}`]:
          prev[Object.keys(prev).find((x) => menu[index].name)] + 1,
      };
      return (prev = {
        ...prev,
        ...temp,
      });
    });
    totalRend();
  };

  const totalRend = () => {
    setTotal((prev) => {
      return (prev = Array(menu.length)
        .fill(0)
        .map(
          (x, i) =>
            menu[i].price * count[Object.keys(count).find((x) => menu[i].name)],
        )
        .reduce((x, y) => x + y));
    });
  };

  return (
    <div className="text-l font-bold w-fit flex flex-col items-center mx-auto mt-2 gap-3">
      {Array(menu.length)
        .fill(0)
        .map((x, i) => {
          return (
            <article key={} className="w-80 flex justify-between items-center gap-2">
              <div className="w-full">
                {menu[i].name} {menu[i].price}원
              </div>
              <button
                className="px-3 py-1 border rounded-lg cursor-pointer"
                onClick={() => {
                  countDown(i);
                }}
              >
                -
              </button>
              <div>{count[Object.keys(count).find((x) => menu[i].name)]}</div>
              <button
                className="px-3 py-1 border rounded-lg cursor-pointer"
                onClick={() => {
                  countUp(i);
                }}
              >
                +
              </button>
            </article>
          );
        })}
      <div>총 금액 : {total}원</div>
    </div>
  );
};

export default App;
