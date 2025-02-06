import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { text } from "stream/consumers";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function Hero() {
  return (
    <section className="text-center py-12 space-y-5">
      {/* <h1 className="text-2xl md:text-6xl font-medium tracking-tight">
        BlackTools
      </h1>
      <p className="text-xl font-normal">
        Tools collection to scale your operations!
      </p> */}
      <TypewriterEffect words={[{ text: "BlackTools" }]} className="lg:text-6xl font-semibold"/>
      <TextGenerateEffect words="Tools collection to scale your operations!" className="font-normal"/>
    </section>
  );
}
