import { FliesText } from "react-text-fun";

export const Flies = ({ text }) => {
  return (
    <>
      <FliesText
        cellRadius={0.5}
        text={text}
        fontSize={120}
        cellWidth={0.02}
        speed={2}
        dodge={true}
        dodgeY={0.05}
        dodgeSpread={0.08}
      />
    </>
  );
};
