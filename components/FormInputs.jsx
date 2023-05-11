import { useApp } from "@/context";
import FirstPage from "../components/orderForm/FirstPage";
const FormInputs = () => {
  const { page } = useApp();

  const display = {
    0: <FirstPage />,
    1: "<Shipping />",
    2: "<OptIn />",
  };

  return <div className="">{display[page]}</div>;
};
export default FormInputs;
