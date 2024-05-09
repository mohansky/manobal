import React from "react";
import { Heading } from "./heading";
import Image from "next/image";

export default function People() {
  return (
    <>
      <section className="my-20">
        <Heading className="mt-10 mb-5">The people</Heading>
        <div className="grid md:grid-cols-5 gap-12">
          <Image
            className="col-span-2"
            src="/images/people.jpg"
            alt=""
            width="720"
            height="720"
          />

          <div className="md:col-span-3 grid content-between">
            <div>
              <Heading size="md" className="mb-10">
                Lorem Ipsum
              </Heading>
              <p className="leading-loose">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using, content
                here, making it look like readable English. Many desktop
                publishing packages.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-4 justify-between ">
              <Image src="/images/people.jpg" alt="" width="180" height="180" />
              <Image src="/images/people.jpg" alt="" width="180" height="180" />
              <Image src="/images/people.jpg" alt="" width="180" height="180" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
