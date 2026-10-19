import { use } from "react";
import { useState } from "react";

const Agree = (props) => {
  const [agreeAll, setAgreeAll] = useState(false);

  const toggleAgreeData = (index) => {
    props.set((prev) => {
      return prev.map((x, i) => {
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
  };

  return (
    <div className="text-md border border-gray-300 rounded-lg px-4 mt-2">
      <label className="flex items-center gap-2 py-2.5" onChange={toggleAll}>
        <input type="checkbox" checked={agreeAll} />
        <div className="font-bold">전체 동의</div>
      </label>
      <hr className="border-gray-300" />
      <label
        className="flex items-center gap-2 py-2"
        onChange={() => {
          toggleAgreeData(0);
        }}
      >
        <input type="checkbox" checked={props.agree[0].isAgreed} />
        <div className="text-xs rounded-sm px-1.5 py-[0.1em] text-red-600 bg-red-100">
          필수
        </div>
        <div>{props.agree[0].label}</div>
      </label>
      <label
        className="flex items-center gap-2 py-2"
        onChange={() => {
          toggleAgreeData(1);
        }}
      >
        <input type="checkbox" checked={props.agree[1].isAgreed} />
        <div className="text-xs rounded-sm px-1.5 py-[0.1em] text-red-600 bg-red-100">
          필수
        </div>
        <div>{props.agree[1].label}</div>
      </label>
      <label
        className="flex items-center gap-2 py-2"
        onChange={() => {
          toggleAgreeData(2);
        }}
      >
        <input type="checkbox" checked={props.agree[2].isAgreed} />
        <div className="text-xs rounded-sm px-1.5 py-[0.1em] text-gray-600 bg-gray-100">
          선택
        </div>
        <div>{props.agree[2].label}</div>
      </label>
    </div>
  );
};

export default Agree;
