import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export function ModalBasic() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>열기</button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <div>dfdasgdfgdhfgh</div>
        <button onClick={() => setIsOpen(false)}>닫기</button>
      </Modal>
    </>
  );
}
