import { useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SignatureCollection from "@/components/SignatureCollection";
import BhajiCollection from "@/components/BhajiCollection";
import OurStory from "@/components/OurStory";
import Gifting from "@/components/Gifting";
import BulkOrders from "@/components/BulkOrders";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App bg-cream">
      <CartProvider>
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <SignatureCollection />
          <BhajiCollection />
          <OurStory />
          <Gifting />
          <BulkOrders />
          <Marquee dark={false} />
          <Contact />
        </main>
        <Footer />
        <CartDrawer />
        <Toaster position="bottom-right" />
      </CartProvider>
    </div>
  );
}

export default App;
