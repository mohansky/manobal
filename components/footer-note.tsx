import React from "react";
import { Skeleton } from "./ui/skeleton";

export default function FooterNote() {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <div>
          <div className="bg-white rounded-md w-28 h-28 mx-auto mb-3" />
          <p className="text-center">
            A <i>Deepstambh</i> initiative
          </p>
        </div>
        <div className="col-span-2">
          <p className="text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using.
          </p>
        </div>
      </div>
    </>
  );
}
