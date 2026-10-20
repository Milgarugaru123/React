import { useState } from "react";
import Email from "./Email";
import Password from "./Password";
import Agree from "./Agree";
import Btn from "./Btn";

const App = () => {
  const [emailValid, setEmailValid] = useState({ email: ``, isValid: false });
  const [passwordValid, setPasswordValid] = useState([
    { label: `password`, isValid: false },
    { label: `passwordVerify`, isValid: false },
  ]);
  const [agree, setAgree] = useState([
    { label: `이용약관 동의`, isAgreed: false },
    {
      label: `개인정보 수집 · 이용 동의`,
      isAgreed: false,
    },
    { label: `마케팅 정보 수신 동의`, isAgreed: false },
  ]);
  const [allValid, setAllValid] = useState(false);

  const validCheck = () => {
    if (
      emailValid.isValid &&
      passwordValid[0].isValid &&
      passwordValid[1].isValid &&
      agree[0].isAgreed &&
      agree[1].isAgreed
    ) {
      setAllValid((prev) => (prev = true));
    } else setAllValid((prev) => (prev = false));
  };

  return (
    <div className="w-90 h-fit p-7 mx-auto mt-3 border rounded-xl flex flex-col gap-2.5">
      <div className="text-xl font-medium">회원 가입</div>
      <form
        action="/"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col gap-4"
      >
        <Email valid={emailValid} set={setEmailValid} validCheck={validCheck} />
        <Password
          valid={passwordValid}
          set={setPasswordValid}
          validCheck={validCheck}
        />
        <Agree agree={agree} set={setAgree} validCheck={validCheck} />
        <Btn placeholder="가입하기" isValid={allValid} />
      </form>
    </div>
  );
};

export default App;
