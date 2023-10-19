'use client';

import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export function Accordion({
  items
}: {
  items: {
    title: string;
    content: string;
  }[];
}) {
  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <div className="p-5">
      {items.map((item, index: number) => (
        <div key={index} className="w-full max-w-screen-xl mx-auto">
          <button
            type="button"
            role="tab"
            aria-controls={`accordion-content-${index}`}
            className={`${activeItem === index && 'active bg-secondary'} ${
              index === 0 ? 'rounded-t-md' : ''
            } w-full border border-primary p-4 `}
            onClick={() => setActiveItem(index)}
          >
            <div className="flex w-full items-center justify-between ">
              <h2
                className={
                  activeItem === index ? 'text-white font-bold' : 'text-text'
                }
              >
                {item.title}
              </h2>
              <IoIosArrowDown
                className={activeItem === index ? 'rotate-180 text-white' : ''}
              />
            </div>
          </button>
          {activeItem === index && (
            <div
              id={`accordion-content-${index}`}
              role="tabpanel"
              aria-labelledby={`accordion-title-${index}`}
              className="p-4 text-text opacity-80 border border-primary"
            >
              <p
                className={activeItem === index ? 'text-text' : 'text-primary'}
              >
                {item.content}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
