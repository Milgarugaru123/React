import Beans from "./Beans";
import Stagger from "./Stagger";
import Text from "./Text";
import Tween from "./Tween";

const App = () => {
  return (
    <>
      <div className="w-full h-fit">
        <Text desc="특별한 당신에게 딱 맞는 커피를 바나프레소가 완성합니다." />
        <Beans />
        <Text desc="개꿀맛 커피집" />
      </div>
      <Tween />
      <Stagger />
    </>
  );
};

export default App;
