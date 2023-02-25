import { useState } from "react";
import ModalPrivacy from "../modalPrivacy";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <footer>
        <ModalPrivacy isOpen={isOpen} toggleModal={toggleModal} />
        <p>Copyright © Bizu da Aprovação 2023 </p>
        <button onClick={toggleModal} className="privacy_button">
          Política de Privacidade - Termos de uso
        </button>
      </footer>
    </>
  );
}
