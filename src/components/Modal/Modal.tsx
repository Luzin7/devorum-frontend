interface ModalProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  description: string;
  title: string;
  btnMessage: string;
}

export function Modal({
  isOpen,
  setOpen,
  description,
  title,
  btnMessage
}: ModalProps) {
  if (isOpen) {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#00000091]">
        <div
          className="fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]
          bg-text text-background p-8 rounded-3xl w-11/12 md:w-3/6 xl:w-1/5
           h-2/4 md:h-1/4 lg:h-2/5 flex flex-col justify-evenly
        "
        >
          <h2 className="text-4xl font-bold">{title}</h2>
          <p>{description}</p>
          <button
            type="button"
            className="px-7 py-2 bg-accent text-text font-bold rounded-3xl text-xl hover:bg-primary transition-colors"
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            {btnMessage}
          </button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
