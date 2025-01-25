'use client'

import React, { useRef } from 'react'

interface AccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div className="rounded-medium bg-white p-2.5 dark:bg-dark-200">
      <button
        className="flex w-full cursor-pointer items-center rounded border border-dashed border-gray-100 bg-white px-5 py-3 dark:border-borderColor-dark dark:bg-dark-200 max-md:gap-x-2.5"
        onClick={onClick}
        aria-expanded={isOpen}>
        <span className="text-left text-xl font-semibold">Q. {question}</span>
        <span className="ml-auto shrink-0">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M6.25 10H13.75M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                className="stroke-paragraph dark:stroke-primary"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M6.25 10H13.75M10 6.25V13.75M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                className="stroke-paragraph dark:stroke-primary"
              />
            </svg>
          )}
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
        style={{
          height: isOpen && contentRef.current ? `${contentRef.current.scrollHeight}px` : '0px',
        }}>
        <p className="px-6 pb-3.5 pt-6 text-paragraph-light dark:text-[#A1A49D]">{answer}</p>
      </div>
    </div>
  )
}

export default AccordionItem
