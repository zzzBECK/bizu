import Head from "./head";
import Banner from "@/components/banner";
import Infos from "@/components/infos";
import Footer from "@/components/footer";
import ModalPrivacy from "@/components/modalPrivacy";

export default function Home() {
  return (
    <>
      <Head />
      <main className="main">
        <Banner />
        <Infos />
        <Footer />
      </main>
    </>
  );
}
