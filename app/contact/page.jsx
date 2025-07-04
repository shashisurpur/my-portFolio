"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectItem } from "@radix-ui/react-select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "8792948307",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "shashisurpurv@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Banneraghata road,Bengaluru.",
  },
];

const Contact = () => {
  const [formValues, setFormValues] = useState({
    firstname: "",
    email: "",
  });
  const [loadMessage, setLoadMessage] = useState(false);

  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newValue = { [name]: value };
    setFormValues((prev) => ({ ...prev, ...newValue }));
  };

  const handleSendmessage = async (e) => {
    e.preventDefault();
    console.log("submit", formValues, formValues.firstname.length);

    if (formValues.firstname.length === 0 && formValues.email.length === 0) {
      alert("Please enter Firstname and Email address");
    } else if (formValues.firstname.length === 0) {
      alert("Please enter Firstname");
    } else if (formValues.email === "") {
      alert("Please enter Email address");
    } else {
      setLoadMessage(true);
      try {
        const response = await fetch("/api/contactMe", {
          method: "POST",
          body: JSON.stringify(formValues),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        if (response.status === 200) {
          response.json;
        }
      } catch (error) {
      } finally {
        setLoadMessage(false);
      }
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 px-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 rounded-xl bg-[#27272c]">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              {/* <p className="text-white/60">jahhahdahdhahd</p> */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="Firstname"
                  name="firstname"
                  onChange={handleOnchange}
                />
                <Input
                  type="lastname"
                  name="lastname"
                  placeholder="Lastname"
                  onChange={handleOnchange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleOnchange}
                />
                <Input
                  type="phone"
                  name="phone"
                  placeholder="Phone number"
                  onChange={handleOnchange}
                />
              </div>

              {/* <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem
                      className="hover:bg-accent hover:text-primary"
                      value="web"
                    >
                      Web Development
                    </SelectItem>
                    <SelectItem
                      className="hover:bg-accent hover:text-primary"
                      value="ui"
                    >
                      UI/UX Development
                    </SelectItem>
                    <SelectItem
                      className="hover:bg-accent hover:text-primary"
                      value="logo"
                    >
                      Logo Design
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}

              <Textarea
                className="h-[200px] boder border-white/10"
                placeholder="Type your message here"
                name="description"
                onChange={handleOnchange}
              />
              {loadMessage ? (
                <Button
                  size="md"
                  className="max-w-40 bg-white/3"
                  onClick={handleSendmessage}
                  disabled={true}
                >
                  Loading...
                </Button>
              ) : (
                <Button
                  size="md"
                  className="max-w-40 cursor-pointer"
                  onClick={handleSendmessage}
                  disabled={loadMessage}
                >
                  {loadMessage ? "Loading..." : "Send message"}
                </Button>
              )}
              {/* <Button
                size="md"
                className="max-w-40 cursor-pointer"
                onClick={handleSendmessage}
                disabled={loadMessage}
              >
                {loadMessage ? "Loading..." : "Send message"}
              </Button> */}
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
