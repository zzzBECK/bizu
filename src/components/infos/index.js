import Image from "next/image";
import meet from "@/assets/meet.svg";
import check from "@/assets/check-solid.svg";
import InscriptionButton from "../inscriptionButton";


export default function Infos() {
  return (
    <section className="infos">
      <h1>Domingo, dia 5 de março às 19:00</h1>
      <Image src={meet} />
      <h2>Evento no Google Meet</h2>

      <h1>Participe do Bizu da Aprovação...<br/>e <b>aprenda:</b></h1>

      <ul>
        <li><Image src={check} /> A forma certa de se preparar para concursos</li>
        <li><Image src={check} /> Como aproveitar melhor seu tempo</li>
        <li><Image src={check} /> Técnicas de estudo</li>
        <li><Image src={check} /> Planejamento estratégico</li>
        <li><Image src={check} /> Rotina de um aprovado na PM</li>
        <li><Image src={check} /> Produtividade e disciplina</li>
        <li><Image src={check} /> Como sair da procrastinação</li>
      </ul>

      <InscriptionButton label="SIM, QUERO ME INSCREVER!"/>

    </section>
  );
}
