import Hero from "./components/home/Hero";
import Header from "./components/layout/header";
import Services from "./components/home/Services";
import About from "./components/home/About";
import Comments from "./components/home/Comments";
import Contact from "./components/home/Contact";
import WhatsAppFixed from "./components/ui/whatsapp-fixed";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Comments />
      <Contact />
      <WhatsAppFixed />
    </>
  );
}
