import React, {
  forwardRef,
  FormHTMLAttributes,
  ReactNode,
  Ref,
  InputHTMLAttributes
} from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement>;

interface FormWrapperProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export const InputField = forwardRef(function InputField(
  { ...props }: InputFieldProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <input
      {...props}
      ref={ref}
      className="w-full rounded-md py-4 px-6 bg-input border-2 border-transparent outline-none text-text focus:border-primary disabled:opacity-40"
    />
  );
});

InputField.displayName = 'InputField';

export const FormWrapper = forwardRef(function FormWrapper(
  { children, ...props }: FormWrapperProps,
  ref: Ref<HTMLFormElement>
) {
  return (
    <form
      {...props}
      ref={ref}
      className="flex m-auto h-full flex-col  items-center justify-center w-4/5 text-center bg-background lg:w-2/4 xl:w-4/5 2xl:w-2/4"
    >
      {children}
    </form>
  );
});

FormWrapper.displayName = 'FormWrapper';
