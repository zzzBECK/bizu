import exit from "@/assets/xmark.svg";
import Image from "next/image";


export default function Form({ isOpen, toggleForm }) {
  if (!isOpen) return;
  return (
    <main className="form_background" onClick={toggleForm}>
      <article className="form" onClick={(e) => e.stopPropagation()}>
        <header className="form_header">
          <button className="exit_form_button" onClick={toggleForm}>
            <Image src={exit} alt="exit button" height={20} />
          </button>
        </header>
        <h1>FORM TESTE</h1>
        <div className="form_content">
          <input type="text" name="name" required />
        </div>
      </article>
    </main>
  );
}
