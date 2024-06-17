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
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#00000091] z-50">
        <div
          className="fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]
          bg-accent text-text p-8 rounded-lg w-11/12 md:w-3/6 xl:w-1/5
           h-2/4 md:h-1/4 lg:h-2/5 flex flex-col justify-between
        "
        >
          <h2 className="scroll-m-20 pb-2 text-3xl tracking-tight first:mt-0 font-bold">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground">{description}</p>
          <button
            type="button"
            className="px-7 py-2 bg-primary text-muted rounded-lg text-xl"
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
