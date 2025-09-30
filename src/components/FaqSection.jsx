import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdHelpOutline } from "react-icons/md";
import HeadingGradientText from "./HeadingGradientText";
import TagText from "./TagText";

const QuestionList = [
  {
    id: 1,
    question: "What services does FnFByte provide?",
    answer:
      "We specialize in UI/UX Design, Web & App Development, SaaS Platforms, Dashboards, AI/ML Solutions, and MVPs. Whether you’re a startup or an enterprise, we deliver end-to-end product solutions.",
    status: true,
  },
  {
    id: 2,
    question: "How does the project process work?",
    answer:
      "We specialize in UI/UX Design, Web & App Development, SaaS Platforms, Dashboards, AI/ML Solutions, and MVPs. Whether you’re a startup or an enterprise, we deliver end-to-end product solutions.",
    status: false,
  },
  {
    id: 3,
    question: "How long does a typical project take?",
    answer:
      "We specialize in UI/UX Design, Web & App Development, SaaS Platforms, Dashboards, AI/ML Solutions, and MVPs. Whether you’re a startup or an enterprise, we deliver end-to-end product solutions.",
    status: false,
  },
];

export default function FaqSection() {
  const [arrow, setArrow] = useState(QuestionList);

  function handleClick(questionID) {
    setArrow(
      arrow.map((q) => {
        if (q.id === questionID) {
          return { ...q, status: !q.status };
        } else {
          return q;
        }
      })
    );
  }
  return (
    <>
      {/* FAQ section */}
      <div className="flex flex-col lg:flex-row max-w-[1440px] w-full pt-2 md:pt-20 px-2 md:px-12 lg:px-16 pb-3 md:pb-16 justify-center items-start rounded-3xl bg-linear-[180deg] from-container-gray2 to-container-gray1 gap-3">
        {/* first part  */}
        <div className="flex flex-col justify-center items-start gap-1 self-stretch">
          <TagText text="FAQs">
            <MdHelpOutline className="text-zinc-400" />
          </TagText>
          <div className="flex flex-col items-start justify-between gap-1">
            <HeadingGradientText>
              Frequently Asked Questions
            </HeadingGradientText>
            <p className="text-slate-400 text-sm font-medium font-poppins">
              Quick answers to the most common questions about working with
              FnFByte.
            </p>
          </div>
        </div>

        {/* second part */}
        <div className="flex flex-col items-start gap-2 w-full">
          {arrow.map((q) => (
            <div
              key={q.id}
              className="flex p-6 items-center gap-4 self-stretch rounded-2xl border border-border cursor-pointer justify-between"
              onClick={() => {
                handleClick(q.id);
              }}
            >
              {/* question and answer */}
              <div className="flex flex-col items-start gap-1">
                <h1 className="text-white text-xl font-poppins font-bold">
                  {q.question}
                </h1>
                <p
                  className={`text-slate-400 font-poppins text-sm font-normal ${
                    q.status ? "flex" : "hidden"
                  }`}
                >
                  {q.answer}
                </p>
              </div>
              {/* icons */}
              <span className="flex p-2 items-center justify-center rounded-full bg-container-gray2">
                {q.status ? (
                  <IoIosArrowUp className="text-white" />
                ) : (
                  <IoIosArrowDown className="text-white" />
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
