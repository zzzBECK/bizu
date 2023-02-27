import { useState } from "react";
import Form from "../form";

export default function Button({ label }) {
  const [isOpen, setIsOpen] = useState(false);
  function toggleForm() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Form isOpen={isOpen} toggleForm={toggleForm} />
      <button onClick={toggleForm} className="inscription_button">{label}</button>
    </>
  )
}
