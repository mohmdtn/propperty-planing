import React from "react";
import ContactUsForm from "./ContactUsForm";
import { SocialMedia } from "./menu/SocialMedia";
import useLocales from "@/app/locales/useLocales";

const ContactUs = () => {
  const { t } = useLocales();
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 my-24">
      <div className="grid grid-rows-2 gap-6 h-auto">
        <div className="row-span-1 gap-6 bg-[url('/pictures/formFirstBg.png')] bg-cover text-white rounded-2xl overflow-hidden p-7">
          <h1 className="text-3xl font-poppinsExtraBold mb-5">
            {t("have-any-project-lets-&-grow-your-business")}
          </h1>
          <h6 className="text-base">{t("contact-us-summary")}</h6>
        </div>
        <div className="row-span-7 bg-[url('/pictures/formSecondBg.png')] bg-cover flex w-full h-full justify-start items-end gap-3 rounded-2xl overflow-hidden p-5">
          <SocialMedia padding={false} />
        </div>
      </div>
      <div className="bg-gray-500 rounded-3xl p-5">
        <ContactUsForm />
      </div>
    </section>
  );
};

export default ContactUs;
