import React from "react";
import Image from "next/image";
import { Heading } from "./heading";
import { Skeleton } from "./ui/skeleton";

export default function Intro() {
  return (
    <>
      <section className="my-20">
        <Image
          src="/images/manobal-hero.png"
          alt=""
          width="1920"
          height="1080"
        />
        <Heading className="my-5">Empowering Women. Reviving Craft.</Heading>

        <p className="md:columns-2 gap-8 text-justify leading-loose">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isnt anything embarrassing hidden in the middle of text. All the
          Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </section>
    </>
  );
}
