import Image from "next/image";
import logo from "../../assets/logo.png";
import InscriptionButton from "../inscriptionButton";

export default function Banner() {

  return (
    <>

      <section className="banner">
        <div className="filter"></div>
        <Image src={logo} alt="logo" className="logo" />
        <div className="banner_content">
          <h3>Evento online e gratuito</h3>
          <h1>Saiba o passo a passo da aprovação em concursos e mude sua vida esse ano</h1>
          <h2>
            Clique no botão abaixo e faça o seu <b>CADASTRO</b>
          </h2>
          <InscriptionButton label="SIM, QUERO ME INSCREVER!" />
        </div>
      </section>
    </>
  );
}
