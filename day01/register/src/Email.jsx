import { useState } from "react";

const Email = (props) => {
  const [check, setCheck] = useState({ atCheck: true, emailCheck: true });

  const verifyEmail = (value) => {
    props.set((prev) => (prev = false));
    if (value.length <= 0) {
      setCheck((prev) => (prev = { atCheck: true, emailCheck: true }));
      return;
    }
    if (/.+@.+[.].+/.test(value)) {
      setCheck((prev) => (prev = { atCheck: true, emailCheck: true }));
      props.set((prev) => (prev = true));
    } else if (/@/.test(value))
      setCheck((prev) => (prev = { atCheck: true, emailCheck: false }));
    else setCheck((prev) => (prev = { atCheck: false, emailCheck: true }));
  };

  return (
    <div>
      <label className="flex flex-col gap-1">
        <div className="text-sm">이메일</div>
        <input
          type="text"
          className="border border-gray-300 rounded-lg px-3 py-2"
          onChange={(e) => {
            verifyEmail(e.currentTarget.value);
          }}
        />
      </label>
      <div
        className={`text-sm text-red-500 mt-1 ${check.atCheck ? `hidden` : ``}`}
      >
        @가 빠졌어요.
      </div>
      <div
        className={`text-sm text-red-500 mt-1 ${check.emailCheck ? `hidden` : ``}`}
      >
        이메일 양식을 지켜주세요.
      </div>
    </div>
  );
};

export default Email;
