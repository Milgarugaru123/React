import { data } from "./datas.js";

const Success = () => {
  return (
    <div className="w-90 h-fit text-md p-7 mx-auto mt-3 border rounded-xl flex flex-col gap-2.5">
      <div className="text-xl font-bold">회원가입 성공!</div>
      <div>{data.email} 님, 가입을 환영합니다~</div>
      <div>
        마케팅 정보 수신 :
        <span className="font-bold"> {data.isAgreed ? `동의` : `거부`}</span>
      </div>
    </div>
  );
};

export default Success;
