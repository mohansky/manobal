import { Heading } from "./heading";
import { options } from "@/.velite";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { MessageCircle } from "lucide-react";
import ContactLink from "./contact-link";

export default function SocialLinks() {
  return (
    <>
      <div className="flex space-x-8">
        <ContactLink href="https://www.facebook.com/@manobal">
          <Facebook className="w-14 h-14 mx-auto mb-3"/>
          <p>Facebook</p>
        </ContactLink>
        <ContactLink href="https://www.instagram.com/@manobal">
          <Instagram  className="w-14 h-14 mx-auto mb-3"/>
          <p>Instagram</p>
        </ContactLink>
        <ContactLink href="https://www.whatsapp.com/@manobal">
          <MessageCircle  className="w-14 h-14 mx-auto mb-3"/>
          <p>WhatsApp</p>
        </ContactLink>
      </div>
    </>
  );
}
