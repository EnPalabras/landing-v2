'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Work_Sans } from 'next/font/google'

import starIcon from './icon-star.svg'
import plusIcon from './icon-plus.svg'
import minusIcon from './icon-minus.svg'

const workSans = Work_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

interface FAQAccordionProps {
  questions: {
    question: string
    answer: string
  }[]
}

export default function FAQs({ questions }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [answerHeights, setAnswerHeights] = useState<number[]>(
    Array(questions.length).fill(0)
  )

  const toggleQuestion = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx)
    const newAnswerHeights = Array(questions.length).fill(0)
    if (activeIndex !== idx)
      newAnswerHeights[idx] = document.getElementById(
        `answer-${idx}`
      )?.scrollHeight
    setAnswerHeights(newAnswerHeights)
  }

  return (
    <section className="bg-purple-600 w-full px-2" id="faqs">
      <div
        className={`${workSans.className} container w-full xl:max-w-4xl rounded-xl bg-white p-6 my-8 text-purple-700`}
      >
        {/* Title */}
        <div className="flex items-center gap-6 border-b pb-2">
          <Image
            src={starIcon}
            aria-hidden="true"
            alt="star"
            className="h-6 w-6"
          />
          <h1 className="text-3xl font-bold ">FAQs</h1>
        </div>
        {/* Questions */}
        <div className="flex flex-col divide-y">
          {questions.map(({ question, answer }, idx) => (
            <div key={idx} className="py-6">
              <div
                className="flex items-center justify-between hover:cursor-pointer"
                onClick={() => toggleQuestion(idx)}
              >
                <h2 className="text-lg font-bold leading-6 text-purple-700 hover:text-purple-600">
                  {question}
                </h2>
                <Image
                  src={activeIndex === idx ? minusIcon : plusIcon}
                  alt="toggle question"
                />
              </div>
              <div
                id={`answer-${idx}`}
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: `${answerHeights[idx] || 0}px` }}
              >
                <p className="pt-6 text-gray-700">{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
