import React, { useState } from "react";
// import '../styles/style.css'
import emoji from "../assets/emoji.png";
import me from "../../public/Myself.png"
import { Button, IconButton } from "@radix-ui/themes";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";


const Intro = () => {
  const [email, setEmail] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null); // Reset success message

    try {
      setIsLoading(true);
      const response = await fetch(
        "https://portfolio-backend-ce6g.onrender.com/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong with the submission");
      }

      // Reset the form fields after successful submission
      setEmail("");
      setSuccess("Thanks for Subscribing!"); // Set success message
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <section className="bg-black text-white md:px-4 px-3 md:py-16 py-2 pb-12">
        <div className="flex flex-col items-center text-center justify-center w-full md:gap-5 gap-3 md:max-w-3xl mx-auto ">
          <img src={me} className="md:w-36 w-24 rounded-full" alt="" />
          <h1 className="font-medium flex items-center gap-2  text-lg">
            Hi I'm{" Joshua"},
            <span>
              <img className="w-3" src={emoji} alt="" />
            </span>
          </h1>
          <h1 className="font-bold text-3xl md:text-5xl md:mb-3 mb-1">
            Creative{" "}
            <span className="relative inline-block md:px-4 px-2">
              {/* Background rotated */}
              <span
                className="absolute inset-0 bg-blue-800"
                style={{ transform: "rotate(04deg)" }}
              ></span>

              {/* Text on top */}
              <span className="relative text-white">Software</span>
            </span>{" "}
            developer building impactful digital experiences.
          </h1>

          <p className="text-xs md:text-sm font-normal text-gray-100 px-10">
            An Experienced Software Developer | Expert in Nextjs, React,
            TypeScript, Node.js, and Django | Specializing in Intuitive UI
            Design & Scalable Backend Systems .
          </p>
          <Button className="p-4 mt-5 md:mt-2 cursor-pointer hover:bg-blue-700 bg-blue-800 rounded-none font-josefin">
            Connect With Me
          </Button>
        </div>

        {/* Social Media Section */}
        <div className="flex mx-auto justify-center items-center gap-4 mt-5">
          <a href="https://x.com/ifeoluwajohz">
            <TwitterLogoIcon className="text-white w-5 h-5" />
          </a>
          <a href="https://github.com/ifeoluwajohz">
            <GitHubLogoIcon className="text-white w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/ifeoluwajohz/">
            <LinkedInLogoIcon className="text-white w-5 h-5" />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-mail-check-icon lucide-mail-check"
            >
              <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              <path d="m16 19 2 2 4-4" />
            </svg>
          </a>
          <a href="tel:+8026144324">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-phone-icon lucide-phone"
            >
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
          </a>
          <a href="https://web.facebook.com/profile.php?id=100087388999705">
            <image src="" alt="Facebook" className="w-5 h-5" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-facebook-icon lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
};

export default Intro;
