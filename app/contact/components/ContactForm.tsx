"use client";

import { AnimatePresence, motion, type Transition } from "framer-motion";
import {
  type FormEvent,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import { toast } from "sonner";

type ContactType = "company" | "individual";
type SubmissionStatus = "idle" | "success" | "error";

export const ContactForm = () => {
  const [selected, setSelected] = useState<ContactType>("individual");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [requestType, setRequestType] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isCompany = selected === "company";
  const isFormValid = useMemo(() => {
    const hasName = name.trim().length > 0;
    const hasEmail = email.trim().length > 0;
    const hasMessage = message.trim().length > 0;
    const hasRequestType = requestType !== "";
    const hasCompanyInfo = !isCompany || companyName.trim().length > 0;

    return (
      hasName &&
      hasEmail &&
      hasMessage &&
      hasRequestType &&
      hasCompanyInfo
    );
  }, [companyName, email, isCompany, message, name, requestType]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          companyName: isCompany ? companyName : undefined,
          requestType,
          message,
          contactType: selected,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setCompanyName("");
      setRequestType("");
      setMessage("");
      toast.success("Thanks for reaching out! We have received your message.", {
        description: "Email sent",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
      toast.error(
        "We couldn't send your message right now. Please try again shortly.",
        {
          description: "Email failed",
        },
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="p-4 bg-slate-100">
      <div className="w-full max-w-6xl mx-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
        <Form
          selected={selected}
          setSelected={setSelected}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          companyName={companyName}
          setCompanyName={setCompanyName}
          requestType={requestType}
          setRequestType={setRequestType}
          message={message}
          setMessage={setMessage}
          status={status}
          handleSubmit={handleSubmit}
          isFormValid={isFormValid}
          isSubmitting={isSubmitting}
        />
        <Images selected={selected} />
      </div>
    </section>
  );
};

const Form = ({
  selected,
  setSelected,
  name,
  setName,
  email,
  setEmail,
  companyName,
  setCompanyName,
  requestType,
  setRequestType,
  message,
  setMessage,
  status,
  handleSubmit,
  isFormValid,
  isSubmitting,
}: {
  selected: ContactType;
  setSelected: Dispatch<SetStateAction<ContactType>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  companyName: string;
  setCompanyName: Dispatch<SetStateAction<string>>;
  requestType: string;
  setRequestType: Dispatch<SetStateAction<string>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  status: SubmissionStatus;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  isFormValid: boolean;
  isSubmitting: boolean;
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className={`p-8 w-full text-white transition-colors duration-[750ms] ${
        selected === "company" ? "bg-[#175676]" : "bg-(--sage-green)"
      }`}
    >
      <h3 className="text-4xl font-bold mb-6 p-white">Contact us</h3>

      {/* Name input */}
      <div className="mb-6">
        <p className="text-2xl mb-2 p-white">Hi 👋! My name is...</p>
        <input
          type="text"
          placeholder="Your name..."
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={`${
            selected === "company" ? "bg-[#09384F]" : "bg-[#265B23]"
          } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      <div className="mb-6">
        <p className="text-2xl mb-2 p-white">You can reach me at...</p>
        <input
          type="email"
          placeholder="Your email address..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={`${
            selected === "company" ? "bg-[#09384F]" : "bg-[#265B23]"
          } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Company/individual toggle */}
      <div className="mb-6">
        <p className="text-2xl mb-2 p-white">and I represent...</p>
        <FormSelect selected={selected} setSelected={setSelected} />
      </div>

      {/* Company name */}
      <AnimatePresence>
        {selected === "company" && (
          <motion.div
            initial={{
              // 104 === height of element + margin
              // Alternatively can use mode='popLayout' on AnimatePresence
              // and add the "layout" prop to relevant elements to reduce
              // distortion
              marginTop: -104,
              opacity: 0,
            }}
            animate={{
              marginTop: 0,
              opacity: 1,
            }}
            exit={{
              marginTop: -104,
              opacity: 0,
            }}
            transition={BASE_TRANSITION}
            className="mb-6"
          >
            <p className="text-2xl mb-2 p-white">by the name of...</p>
            <input
              type="text"
              placeholder="Your company name..."
              value={companyName}
              onChange={(event) => setCompanyName(event.target.value)}
              className={`${
                selected === "company" ? "bg-[#09384F]" : "bg-[#265B23]"
              } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Request selection */}
      <div className="mb-6">
        <p className="text-2xl mb-2 p-white">Specify your request</p>
        <select
          value={requestType}
          onChange={(event) => setRequestType(event.target.value)}
          className={`${
            selected === "company" ? "bg-[#09384F]" : "bg-[#265B23]"
          } transition-colors duration-[750ms] p-2 rounded-md w-full focus:outline-0`}
        >
          <option value="" disabled>
            Choose an option
          </option>
          <option value="general">General inquiry</option>
          <option value="collaboration">Collaboration</option>
          <option value="support">Support</option>
        </select>
      </div>

      {/* Info */}
      <div className="mb-6">
        <p className="text-2xl mb-2 p-white">I’d love to ask about...</p>
        <textarea
          placeholder="Whatever your heart desires :)"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`${
            selected === "company" ? "bg-[#09384F]" : "bg-[#265B23]"
          } transition-colors duration-[750ms] min-h-[150px] resize-none placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Submit */}
      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.99,
        }}
        type="submit"
        disabled={!isFormValid || isSubmitting}
        className={`${
          selected === "company"
            ? "bg-white text-[#09384F] hover:bg-[#09384F] hover:text-white"
            : "bg-white text-[#265B23] hover:bg-[#265B23] hover:text-white"
        } transition-colors duration-[950ms] text-lg text-center rounded-lg w-full py-3 font-semibold disabled:opacity-60 disabled:cursor-not-allowed`}
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </motion.button>

      <AnimatePresence>
        {status !== "idle" && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={BASE_TRANSITION}
            className={`mt-4 text-sm font-medium ${
              status === "success" ? "text-green-200" : "text-red-200"
            }`}
          >
            {status === "success"
              ? "Thanks for reaching out! We will get back to you soon."
              : "Something went wrong. Please try again."}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
};

const FormSelect = ({
  selected,
  setSelected,
}: {
  selected: ContactType;
  setSelected: Dispatch<SetStateAction<ContactType>>;
}) => {
  return (
    <div className="border-[1px] rounded border-white overflow-hidden font-medium w-fit">
      <button
        type="button"
        className={`${
          selected === "individual" ? "text-[#265B23]" : "text-white"
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={() => setSelected("individual")}
      >
        <span className="relative z-10">An individual</span>
        {selected === "individual" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-white z-0"
          />
        )}
      </button>
      <button
        type="button"
        className={`${
          selected === "company" ? "text-[#09384F]" : "text-white"
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={() => setSelected("company")}
      >
        <span className="relative z-10">A company</span>
        {selected === "company" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-white z-0"
          />
        )}
      </button>
    </div>
  );
};

const Images = ({ selected }: { selected: ContactType }) => {
  return (
    <div className="bg-white relative overflow-hidden w-full min-h-[100px]">
      <motion.div
        initial={false}
        animate={{
          x: selected === "individual" ? "0%" : "100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <motion.div
        initial={false}
        animate={{
          x: selected === "company" ? "0%" : "-100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

export default ContactForm;

const BASE_TRANSITION: Transition = { ease: "anticipate", duration: 0.75 };
