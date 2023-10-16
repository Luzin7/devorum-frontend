import { Ref, forwardRef } from 'react';
import { ButtonProps } from 'types/globalStyledComponents';

export const Error = ({ errorMessage }: { errorMessage: string }) => {
  return <span className="text-red-400">{errorMessage}</span>;
};

export const Button = forwardRef(function Button(
  {
    isLoading = false,
    bgColor = 'secondary',
    txtColor = 'text',
    txtHoverColor = 'primary',
    txtSize = 'xl',
    ...props
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      ref={ref}
      className={`bg-${bgColor} mt-7 font-bold py-4 min-w-full rounded-lg text-${txtSize} text-${txtColor} hover:text-${txtHoverColor} ${
        isLoading && 'animate-pulse'
      }`}
    ></button>
  );
});

Button.displayName = 'Button';
