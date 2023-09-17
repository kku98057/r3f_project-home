import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

export default function Overlay() {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityThirdSection, setOpacityThirdSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityThirdSection(scroll.range(2 / 3, 1 / 3));
  });
  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-serif text-2xl">Hello World</h1>
          <p className="text-gray-500">Welcome to my beautiful portfolio</p>
          <p className="mt-3">i Know</p>
          <ul className="leading-9">
            <li>How to code</li>
            <li>How to learn</li>
            <li>How to deliver</li>
          </ul>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-serif text-2xl">Hello World</h1>
          <p className="text-gray-500">Welcome to my beautiful portfolio</p>
          <p className="mt-3">i Know</p>
          <ul className="leading-9">
            <li>How to code</li>
            <li>How to learn</li>
            <li>How to deliver</li>
          </ul>
        </Section>
        <Section opacity={opacityThirdSection}>
          <h1 className="font-serif text-2xl">Hello World</h1>
          <p className="text-gray-500">Welcome to my beautiful portfolio</p>
          <p className="mt-3">i Know</p>
          <ul className="leading-9">
            <li>How to code</li>
            <li>How to learn</li>
            <li>How to deliver</li>
          </ul>
        </Section>
      </div>
    </Scroll>
  );
}

const Section = ({ children, right, opacity }) => {
  return (
    <section
      style={{ opacity: opacity }}
      className={`h-screen flex flex-col justify-center p-10 ${
        right ? "items-end" : "items-start"
      }`}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg px-8 py-12">{children}</div>
        </div>
      </div>
    </section>
  );
};
