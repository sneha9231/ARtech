import Header from "./components/header"
import Hero from "./components/hero"
import Services from "./components/services"
import Features from "./components/features"
import Contact from "./components/contact"
import Products from "./components/products"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <Services />
      <Features />
      <Contact />
      <Footer />
    </main>
  )
}
