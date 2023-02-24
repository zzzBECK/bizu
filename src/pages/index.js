import Head from "./head";
import Image from "next/image";
import logo from "../assets/logo.png";

export default function Home() {
  return (
    <>
      <Head />
      <main className="main">
        <section className="banner">
          <Image src={logo} alt="logo" className="logo" />
          <div className="banner_content">
            <h3>Evento online e gratuito</h3>
            <h1>Saiba o passo a passo da aprovação em concursos e mude sua vida esse ano</h1>
            <h2>
              Clique no botão abaixo e faça o seu <b>CADASTRO</b>
            </h2>
            <button className="inscription_button">SIM, QUERO ME INSCREVER!</button>
          </div>
        </section>
        <footer>
          <p>Copyright © Bizu da Aprovação 2023</p>
          <button className="privacy_button">Política de Privacidade - Termos de uso</button>
        </footer>
      </main>
    </>
  );
}
