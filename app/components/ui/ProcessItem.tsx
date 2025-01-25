import { type FC } from 'react'
import Image from 'next/image'
import { type ProcessItem as ProcessItemType } from '@/app/data/processData'

type ProcessItemProps = Omit<ProcessItemType, 'id'>

const ProcessItem: FC<ProcessItemProps> = ({ lightImg, darkImg, title, arrow, darkArrow }) => {
  return (
    <div className="flex items-center gap-5">
      <figure className="relative flex h-[110px] w-[110px] shrink-0 scale-100 items-center justify-center rounded-full bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 hover:transition-transform hover:duration-500 dark:bg-dark-200 max-lg:p-2">
        <div className="h-full rounded-full border border-dashed border-gray-100 p-6 dark:border-gray-100 dark:border-opacity-15 max-lg:p-5">
          <Image
            src={lightImg}
            width={40}
            height={40}
            placeholder="blur"
            alt={`${title} icon`}
            className="inline-block dark:hidden"
          />
          <Image
            src={darkImg}
            width={40}
            height={40}
            placeholder="blur"
            alt={`${title} icon - dark theme`}
            className="hidden dark:inline-block"
          />
        </div>
      </figure>
      <h3 className="leading-8">{title}</h3>
      <div className="h-auto w-12">
        {arrow && darkArrow && (
          <>
            <Image
              src={arrow}
              alt="Next step arrow"
              width={100}
              height={100}
              quality={60}
              className="h-full w-full dark:hidden"
            />
            <Image
              src={darkArrow}
              alt="Next step arrow - dark theme"
              width={100}
              height={100}
              quality={60}
              className="hidden h-full w-full dark:inline-block"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default ProcessItem
