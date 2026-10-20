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
      return (prev = Array(prev.length)
        .fill(0)
        .map((x, i) => {
          if (prev[i].label == `password`)
            return (x = { label: `password`, isValid: false });
          return (x = prev[i]);
        }));
    });
    if (value.length <= 0) {
      setCheck((prev) => (prev = { ...prev, password: value, pass: true }));
      return;
    }
    if (value.length >= 8) {
      setCheck((prev) => (prev = { ...prev, password: value, pass: true }));
      props.set((prev) => {
        return (prev = Array(prev.length)
          .fill(0)
          .map((x, i) => {
            if (prev[i].label == `password`)
              return (x = { label: `password`, isValid: true });
            return (x = prev[i]);
          }));
      });
    } else
      setCheck((prev) => (prev = { ...prev, password: value, pass: false }));
    if (value == check.doublePassword)
      setCheck((prev) => (prev = { ...prev, double: true }));
    props.validCheck();
  };

  const verifyDouble = (value) => {
    props.set((prev) => {
      return (prev = Array(prev.length)
        .fill(0)
        .map((x, i) => {
          if (prev[i].label == `passwordVerify`)
            return (x = { label: `passwordVerify`, isValid: false });
          return (x = prev[i]);
        }));
    });
    if (value.length <= 0) {
      setCheck(
        (prev) => (prev = { ...prev, doublePassword: value, double: true }),
      );
      return;
    }
    if (value == check.password) {
      setCheck(
        (prev) => (prev = { ...prev, doublePassword: value, double: true }),
      );
      props.set((prev) => {
        return (prev = Array(prev.length)
          .fill(0)
          .map((x, i) => {
            if (prev[i].label == `passwordVerify`)
              return (x = { label: `passwordVerify`, isValid: true });
            return (x = prev[i]);
          }));
      });
    } else
      setCheck(
        (prev) => (prev = { ...prev, doublePassword: value, double: false }),
      );
    props.validCheck();
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
