import { use } from "react";
import { useState } from "react";
import Badge from "./atoms/Badge";
import { data } from "./datas.js";

const Agree = (props) => {
  const [agreeAll, setAgreeAll] = useState(false);

  const toggleAgreeData = (index) => {
    data.isAgreed = false;
    props.set((prev) => {
      return prev.map((x, i) => {
        if (i === 2) data.isAgreed = true;
        if (i === index) return { ...x, isAgreed: !x.isAgreed };
        return x;
      });
    });
    if (
      props.agree.filter((x) => x.isAgreed).length === props.agree.length - 1 &&
      props.agree[index].isAgreed === false
    ) {
      setAgreeAll((prev) => (prev = true));
    } else setAgreeAll((prev) => (prev = false));
    props.validCheck();
  };

  const toggleAll = () => {
    if (props.agree.filter((x) => x.isAgreed).length === props.agree.length) {
      setAgreeAll((prev) => (prev = false));
      props.set((prev) => {
        return prev.map((x) => {
          return { ...x, isAgreed: false };
        });
      });
    } else {
      setAgreeAll((prev) => (prev = true));
      props.set((prev) => {
        return prev.map((x) => {
          return { ...x, isAgreed: true };
        });
      });
    }
    props.validCheck();
  };

  return (
    <div className="text-md border border-gray-300 rounded-lg px-4 mt-2">
      <label className="flex items-center gap-2 py-2.5">
        <input
          type="checkbox"
          checked={agreeAll}
          className="accent-gray-800 scale-130"
          onChange={toggleAll}
        />
        <div className="font-bold">전체 동의</div>
      </label>
      <hr className="border-gray-300" />
      <label className="flex items-center gap-2 py-2">
        <input
          type="checkbox"
          checked={props.agree[0].isAgreed}
          className="accent-gray-800 scale-130"
          onChange={() => {
            toggleAgreeData(0);
          }}
        />
        <Badge isNecessary={true} />
        <div>{props.agree[0].label}</div>
      </label>
      <label className="flex items-center gap-2 py-2">
        <input
          type="checkbox"
          checked={props.agree[1].isAgreed}
          className="accent-gray-800 scale-130"
          onChange={() => {
            toggleAgreeData(1);
          }}
        />
        <Badge isNecessary={true} />
        <div>{props.agree[1].label}</div>
      </label>
      <label className="flex items-center gap-2 py-2">
        <input
          type="checkbox"
          checked={props.agree[2].isAgreed}
          className="accent-gray-800 scale-130"
          onChange={() => {
            toggleAgreeData(2);
          }}
        />
        <Badge isNecessary={false} />
        <div>{props.agree[2].label}</div>
      </label>
    </div>
  );
};

export default Agree;
