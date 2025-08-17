import Header from "./components/header"
import Hero from "./components/hero"
import Features from "./components/features"
import About from "./components/about"
import Products from "./components/products"
import Services from "./components/services"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <About />
      <Products />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
