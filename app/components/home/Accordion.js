'use client'

import { useState } from 'react'
import AccordionItem from '@/app/components/ui/AccordionItem'
import { faqData } from '@/app/data/faqData'

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className="mx-auto max-w-[830px]">
      <div className="[&>*:not(:last-child)]:mb-5">
        {faqData.slice(0, 3)?.map((faq) => (
          <AccordionItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={activeIndex === faq.id}
            onClick={() => handleItemClick(faq.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Accordion
