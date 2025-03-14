import iconStar from "../../assets/images/icon-star.svg";
import minusIcon from "../../assets/images/icon-minus.svg";
import plusIcon from "../../assets/images/icon-plus.svg";
import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqQuestions = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      question:
        "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];
  return (
    <div className="bg-white rounded-lg shadow-lg w-full lg:w-1/2 m-5 p-5">
      <div className="flex items-center py-4">
        <img alt="star icon" src={iconStar} className="mr-4" />
        <h1 className="text-5xl text-darkPurple font-work font-bold">FAQs</h1>
      </div>
      <ul>
        {faqQuestions.map((faq, index) => (
          <li
            key={index}
            className={`py-4 border-lightPink  ${
              index !== faqQuestions.length - 1 ? "border-b-2" : ""
            }`}
          >
            <div className="flex justify-between">
              <p className="text-darkPurple font-work font-bold text-base">
                {faq.question}
              </p>
              <img
                alt="toggle icon"
                src={openIndex === index ? minusIcon : plusIcon}
                className="cursor-pointer"
                onClick={() => handleToggle(index)}
              />
            </div>
            {openIndex === index && (
              <p className="text-grayishPurple text-semibold font-work text-base">
                {faq.answer}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
