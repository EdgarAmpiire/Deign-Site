import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const SuccessResult = () => {
  return (
    <div className="d-flex gap-1 text-success">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-check-circle-fill"
          viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>
      </div>
      <div>
        <p className="font-size:sm">Your message was successfully sent.</p>
      </div>
    </div>
  );
};

export const Contact = () => {
  const [result, showResult] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_68ki23f",
        "template_1nwwvz6",
        e.target,
        "6taXaqkRcQumGuxEA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    console.log("Message submited: " + JSON.stringify(data));

    showResult(true);
  };

  //hide result
  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div className=" flex bg-black lg:h-screen items-center justify-center xs:py-8 lg:py-28">
      <div className="grid xs:grid-row-2 lg:grid-cols-2 gap-2 w-full xs:px-4 lg:px-24 h-full">
        <div className="flex flex-col items-start justify-start overflow-hidden">
          <div>
            <h1
            data-aos="fade-up" className="xs:text-3xl lg:text-4xl font-bold text-[#eb252a]">
              Got A Project Or A Partnership In Mind?
            </h1>

            <p
            data-aos="fade-up" className="text-2xl mt-8 font-bold text-[#444444] tracking-[-.075em] font-outline-2  antialiased">
              Top rated construction packages we pleasure rationally encounter
              consequences interesting who loves or pursue or desires
            </p>
          </div>

          <div
          data-aos="fade-up" className="py-5 h-fit xs:mt-4 lg:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7402869033267!2d32.60882417463312!3d0.3583456639610723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbf1a7f1ccff%3A0x30fbefa381782b6c!2sSwitch%20Media!5e0!3m2!1sen!2sug!4v1709728810771!5m2!1sen!2sug"
              width="600"
              height="280"
              style={{border:"0"}}
              allowfullscreen=""
              loading="lazy"
            //   referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>
        </div>

        <div className="flex items-start justify-center xs:mt-5 lg:mt-0">
          <form
          data-aos="fade-up"
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-start justify-center xs:w-11/12 lg:w-10/12">
            <div className="w-full mt- flex flex-col">
              <label htmlFor="" className="text-lg text-[#999999] mb-2">
                Your Name{" "}
              </label>
              <input
                {...register("form_name", { required: true })}
                type="text"
                name="form_name"
                placeholder=""
                //   className="py-3 px-5  rounded-md border-teal-500 border-2 bg-transparent focus:border-transparent transition duration-500 ease-in-out"
                className="py-2 px-1  border-b bg-transparent outline-none text-white border-[#444444] focus:border-white text-xl "
              />
              {errors.form_name && (
                <span className="text-red-500 font-semibold text-sm mt-1">
                  Name is required.
                </span>
              )}
            </div>

            <div className="w-full mt-8 flex flex-col">
              <label htmlFor="" className="text-lg text-[#999999] mb-2">
                Your Email{" "}
              </label>

              <input
                {...register(
                  "reply_to",
                  {
                    required: "Email is Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  },
                  { required: true }
                )}
                type="email"
                name="reply_to"
                placeholder=""
                className="py-2 px-1  border-b bg-transparent outline-none text-white text-xl border-[#444444] focus:border-white"
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
            {/* <div className="w-full mt-4 flex flex-col">
                <input
                  {...register("subject", { required: true })}
                  type="text"
                  name="subject"
                  placeholder="YOUR SUBJECT"
                  className="py-3 px-5  border-none rounded-md"
                />
                {errors.subject && (
                  <span className="text-red-500 font-semibold mt-1">Subject is required.</span>
                )}
              </div> */}

            <div className="w-full mt-8 flex flex-col">
              <label htmlFor="" className="text-lg text-[#999999] mb-2">
                How can we help you?{" "}
              </label>

              <textarea
                {...register("message", { required: true })}
                rows="5"
                name="message"
                placeholder=""
                className="py-2 px-1  border-b bg-transparent outline-none text-white text-xl border-[#444444] focus:border-white "></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm font-semibold mt-1">
                  Message is required.
                </span>
              )}
            </div>

            <div className="mt-6">
              <button
              data-aos="fade-up"
                type="submit"
                className="text-[#999999] font-semibold hover:text-white w-fit py-3 px-7 border-[#eb252a] border-2 hover:border-transparent transition duration-500 ease-in-out hover:bg-[#eb252a] rounded-md">
                <span className=" text-xl ">Send </span>
                {/* <span className="button-icon fa fa-send"></span> */}
              </button>
            </div>

            <div className="mt-3">{result ? <SuccessResult /> : null}</div>
          </form>
        </div>
      </div>
    </div>
  );
};
