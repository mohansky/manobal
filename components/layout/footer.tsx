import React from "react";
import Image from "next/image"; 
import { Heading } from "../heading";
import SocialLinks from "../social-links";
import FooterNote from "../footer-note";

export default function Footer() {
  return (
    <>
      <footer className="bg-primary py-10 px-20">
        
        <div className="grid lg:grid-cols-6">
          <div className="lg:col-span-2 my-auto mb-5">
            <SocialLinks />
          </div>

          <div className="lg:col-span-4 my-auto">
            <FooterNote />
          </div>
        </div>
        {/* <hr className="p-0 m-0 bg-muted" /> */}
        {/* <div className="flex justify-between text-muted text-xs p-1">
          <p className="m-0">
            © {new Date().getFullYear()}, Property of Manobal
          </p>
          <p className="m-0">
            Designed and Developed by
            <a
              className="footer-link"
              href="https://mohankumar.dev/"
              target="_blank"
            >
              {" "}
              Mohan{" "}
            </a>
          </p>
        </div> */}
      </footer>
    </>
  );
}
