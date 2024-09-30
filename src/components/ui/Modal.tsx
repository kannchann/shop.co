import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  open?: boolean;
};

const Modal: React.FC<Props> = ({ children, open }) => {
  return (
    <>
      {open && (
        <section className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black-700 bg-opacity-40">
          <div className="relative w-[500px] rounded-lg bg-white p-9">
            <div className="modal-content grid space-y-8">{children}</div>
          </div>
        </section>
      )}
    </>
  );
};

export default Modal;
