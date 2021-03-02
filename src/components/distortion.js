import { DistortionText } from "react-text-fun";

export const Distortion = ({ text }) => {
  return (
    <>
      <DistortionText
        text={text}
        fontSize={120}
        speed={1.5}
        rotation={45.0}
        distortX={0.9}
        distortY={0.5}
        noiseAmplitude={0.8}
        noiseVolatility={1.2}
      />
    </>
  );
};
