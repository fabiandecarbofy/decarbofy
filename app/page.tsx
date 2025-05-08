import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Zap, CloudSun } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">Decarbofy</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="#technology" className="text-sm font-medium hover:text-green-600 transition-colors">
              Technology
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-green-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-green-600 hover:bg-green-700">Partner with Us</Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden border-b border-muted">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Sustainable agriculture"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 to-transparent"></div>
          </div>
          <div className="container relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Transforming Waste into Climate Solutions
                </h1>
                <p className="text-xl text-muted-foreground max-w-[600px]">
                  Innovative biochar technology converting agricultural and forestry waste into renewable energy and
                  carbon-negative products.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Partner with Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Biochar production"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-green-50/50">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-background">
                  About Decarbofy
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Driving Sustainable Solutions</h2>
                <p className="text-lg text-muted-foreground">
                  At Decarbofy, we collaborate with forward-thinking companies to unlock the true potential of what was
                  once considered waste. Through our innovative solutions, we convert agricultural and forestry waste
                  into multiple sources of sustainable solutions.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our mission is to create a circular economy where waste becomes a valuable resource, reducing carbon
                  emissions and creating sustainable products for future generations.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Agricultural waste"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden mt-8">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Biochar production"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Renewable energy"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden mt-8">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Sustainable agriculture"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="technology" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-background mb-4">
                Our Technology
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Our Breakthrough Technology</h2>
              <p className="text-lg text-muted-foreground mt-4">
                Innovative solutions that transform waste into valuable resources while reducing carbon emissions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Produces Biochar</h3>
                <p className="text-muted-foreground">
                  A highly porous, stable, and carbon-rich material that can be used as a soil amendment, enhancing its
                  fertility, water-holding capacity, and overall health.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Generates Renewable Energy</h3>
                <p className="text-muted-foreground">
                  In addition to biochar production, our reactors also generate renewable energy, further contributing
                  to a sustainable and clean energy future.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CloudSun className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Reduces CO₂ Emissions</h3>
                <p className="text-muted-foreground">
                  Through the utilization of wood waste and the production of biochar, our solution significantly
                  reduces CO₂ emissions that would otherwise be released into the atmosphere.
                </p>
              </div>
            </div>

            <div className="mt-16 relative rounded-xl overflow-hidden">
              <div className="aspect-[21/9] relative">
                <Image
                  src="/placeholder.svg?height=900&width=1920"
                  alt="Biochar technology in action"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-transparent flex items-center">
                <div className="p-8 md:p-12 max-w-xl">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Innovative Process</h3>
                  <p className="text-white/90 mb-6">
                    Our proprietary technology efficiently converts waste biomass into biochar and renewable energy,
                    creating a sustainable cycle that benefits both the environment and agriculture.
                  </p>
                  <Button className="bg-white text-green-800 hover:bg-green-50">Learn About Our Process</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 md:py-24 bg-green-900 text-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Our Environmental Impact</h2>
              <p className="text-white/80 mt-4 text-lg">
                Every ton of biochar produced can sequester approximately 3 tons of CO₂ equivalent.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-green-300 mb-2">1000+</div>
                <p className="text-white/80">Tons of Waste Processed</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-green-300 mb-2">3000+</div>
                <p className="text-white/80">Tons of CO₂ Sequestered</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-green-300 mb-2">500+</div>
                <p className="text-white/80">Acres Improved</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-green-300 mb-2">25+</div>
                <p className="text-white/80">Partner Companies</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="contact" className="py-16 md:py-24 bg-green-50/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Join Us in Building a Sustainable Future
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Partner with Decarbofy to transform your waste streams into valuable resources while reducing your
                carbon footprint and contributing to a more sustainable world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/40">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-5 w-5 text-green-600" />
                <span className="text-lg font-bold">Decarbofy</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transforming waste into climate solutions through innovative biochar technology.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                    News
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Technology</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                    Biochar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                    Renewable Energy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                    Carbon Sequestration
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                    Research
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">info@decarbofy.com</li>
                <li className="text-muted-foreground">+1 (555) 123-4567</li>
                <li className="text-muted-foreground">123 Green Street, Eco City, EC 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Decarbofy. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
