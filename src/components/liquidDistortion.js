import { LiquidDistortionText } from "react-text-fun";

export const LiquidDistortion = ({ text }) => {
  return (
    <>
      <LiquidDistortionText
        text={text}
        fontSize={120}
        speed={0.6}
        volatility={0.02}
      />
    </>
  );
};
