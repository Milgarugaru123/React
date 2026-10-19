import { useState } from "react";

const Password = (props) => {
  const [check, setCheck] = useState({
    password: ``,
    doublePassword: ``,
    pass: true,
    double: true,
  });

  const verifyPassword = (value) => {
    props.set((prev) => {
      prev = Array(prev.length)
        .fill(0)
        .map((x, i) => {
          if (i === 0) return (x = { label: `password`, isValid: false });
          return x;
        });
    });
    if (value.length <= 0) {
      setCheck((prev) => (prev = { ...prev, pass: true }));
      return;
    }
    if (value.length >= 8) {
      setCheck((prev) => (prev = { ...prev, pass: true }));
      props.set((prev) => {
        prev = Array(prev.length)
          .fill(0)
          .map((x, i) => {
            if (i === 0) return (x = { label: `password`, isValid: true });
            return x;
          });
      });
    } else setCheck((prev) => (prev = { ...prev, pass: false }));
    // if (a);
  };

  const verifyDouble = (value) => {
    props.set((prev) => (prev = false));
    if (value.length <= 0) {
      setCheck((prev) => (prev = { ...prev, pass: true, double: true }));
      return;
    }
    if (/.+@.+[.].+/.test(value)) {
      setCheck((prev) => (prev = { ...prev, pass: true, double: true }));
      props.set((prev) => (prev = true));
    } else if (/@/.test(value))
      setCheck((prev) => (prev = { ...prev, pass: true, double: false }));
    else setCheck((prev) => (prev = { ...prev, pass: false, double: true }));
  };

  return (
    <>
      <div>
        <label className="flex flex-col gap-1">
          <div className="text-sm">비밀번호</div>
          <input
            type="password"
            className="border border-gray-300 rounded-lg px-3 py-2"
            onChange={(e) => {
              verifyPassword(e.currentTarget.value);
            }}
          />
        </label>
        <div
          className={`text-sm text-red-500 mt-1 ${check.pass ? `hidden` : ``}`}
        >
          8자 이상이어야 해요.
        </div>
      </div>
      <div>
        <label className="flex flex-col gap-1">
          <div className="text-sm">비밀번호 확인</div>
          <input
            type="password"
            className="border border-gray-300 rounded-lg px-3 py-2"
            onChange={(e) => {
              verifyDouble(e.currentTarget.value);
            }}
          />
        </label>
        <div
          className={`text-sm text-red-500 mt-1 ${check.double ? `hidden` : ``}`}
        >
          비밀번호가 달라요.
        </div>
      </div>
    </>
  );
};

export default Password;
