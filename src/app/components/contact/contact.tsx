"use client";
import React from "react";
import { socialLinks } from "@/src/app/data/content";
import IconButton from "@/src/app/components/common/icon-button";

const Contact = () => {
  return (
    <section id="contact" className="mb-16 px-6 md:h-50vh md:px-40">
      <h2 className="text-4xl">Contact</h2>
      <p className="mt-4 text-xl md:w-6/12">Lets get in touch</p>
      <div className="my-20 flex justify-around	gap-6">
        {socialLinks.map((link, index) => (
          <IconButton
            index={link.name}
            key={index}
            href={link.url}
            icon={link.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;
