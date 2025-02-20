'use client';

import React, { useState } from 'react';

import { cn } from '@/lib/utils';

interface Props extends React.ComponentProps<'textarea'> {
  counter?: boolean;
  maxlength?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ counter, maxlength = 200, className, onChange, ...props }, ref) => {
    const [length, setLength] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setLength(e.target.value.length);
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className='w-full h-fit relative'>
        <textarea
          className={cn(
            'resize-none p-24 pb-[56px] flex min-h-[246px] w-full rounded-md border-[1.2px] border-gray-2 bg-transparent placeholder:whitespace-pre-line text-base placeholder:text-gray-5 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className,
          )}
          ref={ref}
          onChange={handleChange}
          {...props}
        />
        {counter && (
          <span
            className={cn(
              'absolute right-24 bottom-24 typo-label1 font-medium text-gray-4',
              maxlength < length && 'text-error',
            )}
          >
            {length}/{maxlength}
          </span>
        )}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
