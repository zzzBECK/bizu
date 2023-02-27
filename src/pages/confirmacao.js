import Footer from "../components/footer"

export default function Confirmacao () {

    return (
        <>
            <main className="confirmacao_background">
                <section className="confirmacao_content">
                    <h1>Parabéns</h1>

                    <h2>Você está inscrito no Bizu da Aprovação.</h2>
                    <h2>Para você garantir sua presença no evento, entre no nosso grupo do whatsapp e receba, em primeira mão, todas as informações e avisos importantes.</h2>

                    <a href="https://chat.whatsapp.com/LVtf9ttmOmq0kmUmqMq0ls"><button className="inscription_button">
                    ENTRAR NO GRUPO DE WHATSAPP
                    </button>
                    </a>

                    <h2><b>Lembrando que por lá eu vou conseguir te enviar o link do evento ao vivo!</b></h2>                
                </section>
            
                <Footer />
            </main>
        </>
    )

}