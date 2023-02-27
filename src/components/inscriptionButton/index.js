import { useState } from "react";
import ModalForm from "../modalForm";

export default function Button({ label }) {
  const [isOpen, setIsOpen] = useState(false);
  function toggleForm() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <ModalForm isOpen={isOpen} toggleForm={toggleForm} />
      <button onClick={toggleForm} className="inscription_button">
        {label}
      </button>
    </>
  );
}
