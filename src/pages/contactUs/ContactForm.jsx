import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(2, "Too short!")
            .max(50, "Too long!")
            .required("First name is required"),
          lastName: Yup.string()
            .min(2, "Too short!")
            .max(50, "Too long!")
            .required("Last name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          phone: Yup.string()
            .matches(/^\d{10,15}$/, "Invalid phone number")
            .required("Phone number is required"),
          message: Yup.string()
            .min(10, "Message must be at least 10 characters")
            .required("Message is required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="max-w-[925px] mx-auto flex flex-col gap-7 my-14 px-7">
            {/* first name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label
                  htmlFor="first-name"
                  className="block font-light text-[21px] leading-[24.61px] mb-2"
                >
                  First Name
                </label>
                <Field
                  type="text"
                  id="first-name"
                  name="firstName"
                  placeholder="First name"
                  className=" border border-[#044358] px-2.5 max-w-[435px] w-full min-h-[78px]"
                />
                <ErrorMessage
                  name="firstName"
                  component="span"
                  className="text-red-700"
                />
              </div>

              {/* last name */}
              <div>
                <label
                  htmlFor="last-name"
                  className="block font-light text-[21px] leading-[24.61px] mb-2"
                >
                  Last Name
                </label>
                <Field
                  type="text"
                  id="last-name"
                  name="lastName"
                  placeholder="Last name"
                  className="border border-[#044358] px-2.5 max-w-[435px] w-full min-h-[78px]"
                />
                <ErrorMessage
                  name="lastName"
                  component="span"
                  className="text-red-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label
                  htmlFor="email"
                  className="block font-light text-[21px] leading-[24.61px] mb-2"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="email"
                  className="border border-[#044358] px-2.5 max-w-[435px] w-full min-h-[78px]"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-red-700"
                />
              </div>
              <div>
                {/* phone number */}
                <label
                  htmlFor="tel-num"
                  className="block font-light text-[21px] leading-[24.61px] mb-2"
                >
                  Phone Number
                </label>
                <Field
                  type="text"
                  id="tel-num"
                  name="phone"
                  placeholder="Phone number"
                  className="border border-[#044358] px-2.5 max-w-[435px] w-full min-h-[78px]"
                />
                <ErrorMessage
                  name="phone"
                  component="span"
                  className="text-red-700"
                />
              </div>
            </div>

            {/* message */}
            <div>
              <label
                htmlFor="user-message"
                className="block font-light text-[21px] leading-[24.61px] mb-2"
              >
                Message
              </label>
              <Field
                as="textarea"
                id="user-message"
                name="message"
                placeholder="Message content"
                className="border border-[#044358] px-2.5 max-w-[922px] w-full min-h-[273px]"
              />
              <ErrorMessage
                name="message"
                component="span"
                className="text-red-700"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="border rounded-[10px] border-[#044358] max-w-[919px] w-full h-[85px] bg-[#136ACD] text-[#ffffff] font-light text-[28px] leading-[33.6px]"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
