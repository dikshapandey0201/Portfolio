import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import image from "../../public/linkedin.svg";
function Footer() {
  const [userMessage, setUserMessage] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", import.meta.env.VITE_FORM_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setUserMessage("");
      setEmail("");
      setFullName("");
      toast.success("Sent Successfully!");
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Create FormData object and append the access_key
  //   const formData = new FormData(e.target);
  //   formData.append("access_key", import.meta.env.VITE_FORM_ACCESS_KEY);

  //   // Create a new form element to submit the form data
  //   const form = document.createElement("form");
  //   form.method = "POST";
  //   form.action = "https://api.web3forms.com/submit";

  //   // Append formData to form
  //   for (let [key, value] of formData.entries()) {
  //     const input = document.createElement("input");
  //     input.type = "hidden";
  //     input.name = key;
  //     input.value = value;
  //     form.appendChild(input);

  //     // Append form to body and submit
  //     document.body.appendChild(form);
  //     form.submit();
  //     setUserMessage("");
  //     setEmail("");
  //     setFullName("");
  //   }
  // };
  return (
    <div className="flex flex-col  gap-10 text-stone-300 justify-between  px-10 pt-10 md:h-[80vh]">
      <div className=" flex gap-5 md:flex-row flex-col">
        <div className="flex-1 h-full  items-start justify-center flex flex-col gap-2">
          <h1 className="text-6xl font-semibold ">Let&apos;s Connect!</h1>
          <div className="flex gap-3 mt-2">
            <a
              className="text-[30px]"
              href="mailto:dikshapandey0201@gmail.com"
              target="blank"
            >
              <FcGoogle />
            </a>
            <a
              className="text-[30px]"
              href="https://github.com/dikshapandey0201"
              target="blank"
            >
              <FaGithub className="text-stone-300" />
            </a>
            <a
              className=""
              href="https://www.linkedin.com/in/diksha-pandey-8b4665332/"
              target="blank"
            >
              <img src={image} alt="" />
            </a>
          </div>
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit} method="POST">
            <div>
              <label className="block text-sm text-stone-300 " htmlFor="name">
                Full Name:
              </label>
              <input
                name="fullName"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
                className="h-8 rounded-md px-3 w-full text-stone-700"
                placeholder="Your name"
                id="name"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-stone-300" htmlFor="email">
                Email:
              </label>
              <input
                name="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="h-8 rounded-md px-3 w-full text-stone-700"
                type="email"
                placeholder="Your email"
                id="email"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-stone-300" htmlFor="msg">
                Message:
              </label>
              <textarea
                className="w-full p-3 rounded-md text-stone-700"
                onChange={(e) => {
                  setUserMessage(e.target.value);
                }}
                value={userMessage}
                rows={4}
                name="message"
                placeholder="Any message?"
                id="msg"
              />
            </div>

            <div className="flex w-full justify-end mt-3">
              <button
                type="submit"
                className="px-5 py-1 flex cardBg rounded-full "
              >
                Submit
              </button>
              <Toaster />
            </div>
          </form>
        </div>
      </div>
      <div className="text-center border-t p-1 border-stone-600 ">
        Copyright 2024
      </div>
    </div>
  );
}

export default Footer;
