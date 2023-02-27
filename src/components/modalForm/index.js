import exit from "@/assets/xmark.svg";
import Image from "next/image";

export default function ModalForm({ isOpen, toggleForm }) {
  if (!isOpen) return;
  if (isOpen) {
    document.body.style.overflow = "hidden";
  }
  return (
    <main className="form_background" onClick={toggleForm}>
      <article className="form" onClick={(e) => e.stopPropagation()}>
        <header className="form_header">
          <h1>
            <b>Digite seu contato</b> abaixo e garanta sua vaga no <b>Bizu da Aprovação:</b>
          </h1>
          <button className="exit_form_button" onClick={toggleForm}>
            <Image src={exit} alt="exit button" height={20} />
          </button>
        </header>
        <form className="form_content">
          <section className="form_content-group">
            <label htmlFor="name">Nome*</label>
            <input id="name" type="text" name="name" placeholder="Nome" required />
          </section>
          <section className="form_content-group">
            <label htmlFor="email">Seu melhor E-mail*</label>
            <input id="email" type="email" name="email" placeholder="exemplo@email.com" required />
          </section>
          <section className="form_content-group">
            <label htmlFor="phone">Seu Whatsapp*</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="7998121234"
              pattern="[0-9()#&+*-=.]+"
              title="Only numbers and phone characters (#, -, *, etc) are accepted."
              required
            />
          </section>
          <button className="inscription_button">CONFIRMAR CADASTRO</button>
        </form>
      </article>
    </main>
  );
}
