import React from "react";
import Button from "./ui/Button";
import Modal from "./ui/Modal";

type Props = {
  //   confirmButton: (id: string) => void;
  open?: boolean;
  cancelButton: () => void;
  confirmButton: () => void;
};

const ConfirmationModal: React.FC<Props> = ({
  open = false,
  cancelButton,
  confirmButton,
}) => {
  return (
    <>
      {open && (
        <Modal open={open}>
          <p className="text-lg">Are you sure you want to delete the item?</p>
          <div className="flex justify-end gap-2">
            <Button buttonText="Confirm" size="small" onClick={confirmButton} />
            <Button
              buttonText="Cancel"
              variant="secondary"
              size="small"
              onClick={cancelButton}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default ConfirmationModal;
