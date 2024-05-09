"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./navbar";
import HamburgerMenu from "./hamburger-menu";
import Link from "next/link";
import Bounded from "../bounded";

export default function Menu() {
  const [yValue, setYValue] = useState(0);
  const [toHide, setToHide] = useState(false);

  useEffect(() => {
    const showHeaderOnScrollUp = () => {
      if (yValue >= window.scrollY) {
        setToHide(false);
      } else {
        setToHide(true);
      }
      setYValue(window.scrollY);
    };

    window.addEventListener("scroll", showHeaderOnScrollUp);

    return () => {
      window.removeEventListener("scroll", showHeaderOnScrollUp);
    };
  }, [yValue]);

  return (
    <>
      <div
        className={
          "fixed top-0 left-0 right-0 z-30 bg-primary backdrop-blur" +
          (toHide && "py-0 h-0 hidden")
        }
      >
        <Bounded width="marginx">
          <div className=" flex justify-between py-0">
            <Link href="/" className="my-auto">
              <span>
                <h1>
                  <b>MANO</b>BAL
                </h1>
              </span>
            </Link>
            <HamburgerMenu />
            <div className="hidden md:flex">
              <Navbar />
            </div>
          </div>
        </Bounded>
      </div>
    </>
  );
}
