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

        <form className="form_content" action="https://app.us21.list-manage.com/subscribe/post?u=79858f1fc33011634a9c3d4b3&amp;id=f6925e6ae9&amp;f_id=0039ffe1f0" method="post">
          <section className="form_content-group">
            <label htmlFor="name">
              <b>Nome*</b>
            </label>
            <input id="name" type="text" name="NAME" placeholder="Nome" required />
          </section>
          <section className="form_content-group">
            <label htmlFor="email">
              <b>Seu melhor E-mail*</b>
            </label>
            <input id="email" type="email" name="EMAIL" placeholder="exemplo@email.com" required />
          </section>
          <section className="form_content-group">
            <label htmlFor="phone">
              <b>Seu Whatsapp*</b>
            </label>
            <input
              id="phone"
              type="tel"
              name="PHONE"
              placeholder="7998121234"
              pattern="[0-9()#&+*-=.]+"
              title="Only numbers and phone characters (#, -, *, etc) are accepted."
              required
            />
          </section>
          <button type="submit" className="inscription_button">
            CONFIRMAR CADASTRO
          </button>
        </form>
      </article>
    </main>
  );
}
