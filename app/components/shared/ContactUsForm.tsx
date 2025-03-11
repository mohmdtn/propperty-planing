"use client";

import React from "react";
import { Button, Form } from "antd";
import Input from "./Input";
import TextArea from "./TextArea";
import useLocales from "@/app/locales/useLocales";

const ContactUsForm = () => {
  const { t } = useLocales();
  const [form] = Form.useForm();

  return (
    <div className="bg-gray-500 rounded-3xl p-5">
      <Form
        form={form}
        layout="vertical"
        initialValues={{ requiredMarkValue: "" }}
        // onValuesChange={() => {}}
        //   requiredMark={
        //     requiredMark === "customize" ? customizeRequiredMark : requiredMark
        //   }
      >
        <div>
          <h2 className="text-white text-base mb-3 font-bold">
            {t("full-name")}
          </h2>
          <Form.Item
            name="fullName"
            rules={[
              {
                required: true,
                message: t("please-input-your-nickname"),
                whitespace: true,
              },
            ]}
          >
            <Input placeholder={t("full-name")} />
          </Form.Item>
        </div>

        <div>
          <h2 className="text-white text-base mb-3 font-bold">
            {t("phone-number")}
          </h2>
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: t("please-input-your-phone-number") },
              {
                type: "number",
                message: t("phone-number"),
              },
            ]}
          >
            <Input placeholder={t("phone-number")} />
          </Form.Item>
        </div>

        <div>
          <h2 className="text-white text-base mb-3 font-bold">
            {t("email-address")}
          </h2>
          <Form.Item
            rules={[
              {
                type: "email",
                message: t("the-input-is-not-valid-email"),
              },
              {
                required: true,
                message: t("please-input-your-email"),
              },
            ]}
            name="email"
          >
            <Input placeholder={t("email-address")} />
          </Form.Item>
        </div>

        <div>
          <h2 className="text-white text-base mb-3 font-bold">
            {t("message")}
          </h2>
          <Form.Item
            name="message"
            rules={[{ required: true, message: t("please-input-message") }]}
          >
            <TextArea placeholder={t("type-you-message-here")} />
          </Form.Item>
        </div>
      </Form>

      <Button
        className="w-full bg-gradient-to-r from-[#b325f7] to-[#00e2f5] font-poppinsBold h-16 pt-2"
        shape="round"
        type="primary"
        size="large"
        htmlType="submit"
      >
        {t("submit-message")}
      </Button>
    </div>
  );
};

export default ContactUsForm;
