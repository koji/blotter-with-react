import { SplitColorChannelText } from "react-text-fun";

export const SplitColor = ({ text }) => {
  return (
    <>
      <SplitColorChannelText
        text={text}
        fontSize={120}
        rotation={5.0}
        rgbOffset={0.8}
        addBlur={false}
        addNoise={true}
      />
    </>
  );
};
