import exit from "@/assets/xmark.svg";
import Image from "next/image";
export default function ModalPrivacy({ isOpen, toggleModal }) {
  if (!isOpen) return;
  return (
    <main className="modal_background" onClick={toggleModal}>
      <article className="modal_privacy" onClick={(e) => e.stopPropagation()}>
        <header className="modal_privacy-header">
          <button className="exit_modal_button" onClick={toggleModal}>
            <Image src={exit} alt="exit button" height={20} />
          </button>
        </header>
        <h1>Política de Privacidade</h1>
        <div className="modal_privacy-content">
          <p>
            A sua privacidade é importante para nós. É política do Bizu da Aprovação respeitar a sua
            privacidade em relação a qualquer informação sua que possamos coletar no site
            Patrulheiro Jota, e outros sites que possuímos e operamos.
          </p>
          <p>
            Solicitamos informações pessoais apenas quando realemente prcisamos delas para lhe
            fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e
            consentimento. Também informamos por que estamos coletando e como será usado.
          </p>
          <p>
            Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para
            evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não
            autorizados.
          </p>
          <p>
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros,
            exceto quando exigido por lei.
          </p>
          <p>
            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que
            talvez não possamos fornecer alguns dos serviços desejados.
          </p>
        </div>
      </article>
    </main>
  );
}
