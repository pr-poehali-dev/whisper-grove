import { Navbar } from "@/components/Navbar"
import { Hero7 } from "@/components/Hero7"
import { Services } from "@/components/Services"
import { Advantages } from "@/components/Advantages"
import { Cases } from "@/components/Cases"
import { HowWeWork } from "@/components/HowWeWork"
import { Trust } from "@/components/Trust"
import { FAQ } from "@/components/FAQ"
import { Contacts } from "@/components/Contacts"
import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="relative">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: "radial-gradient(125% 60% at 60% 0%, #fff 50%, #6366f1 140%)",
          }}
        />
        <div className="relative z-10">
          <Navbar />
          <Hero7 />
        </div>
      </div>

      <Services />
      <Advantages />
      <Cases />
      <HowWeWork />
      <Trust />
      <FAQ />
      <Contacts />
      <Footer />
    </div>
  )
}

export default Index
