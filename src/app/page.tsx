"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Star, Clock, Users, Award, Phone, Mail, MapPin, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function TaekwondoSummerCamp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [faqSearch, setFaqSearch] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TK</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Nafplio Taekwondo Camp</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 text-blue-600 transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("instructors")}
                className="text-gray-700 text-blue-600 transition-colors font-medium"
              >
                Instructors
              </button>
              <button
                onClick={() => scrollToSection("schedule")}
                className="text-gray-700 text-blue-600 transition-colors font-medium"
              >
                Schedule
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 text-blue-600 transition-colors font-medium"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("videos")}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Videos
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("register")}
                className="bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-200"
              >
                Register Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-gray-700 text-blue-600 transition-colors font-medium"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("instructors")}
                  className="text-left text-gray-700 text-blue-600 transition-colors font-medium"
                >
                  Instructors
                </button>
                <button
                  onClick={() => scrollToSection("schedule")}
                  className="text-left text-gray-700 text-blue-600 transition-colors font-medium"
                >
                  Schedule
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-left text-gray-700 text-blue-600 transition-colors font-medium"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Gallery
                </button>
                <button
                  onClick={() => scrollToSection("videos")}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Videos
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Contact
                </button>
                <Button
                  onClick={() => scrollToSection("register")}
                  className="bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold w-full"
                >
                  Register Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-amber-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-amber-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-amber-500 text-white px-4 py-2 text-sm font-semibold">
                Summer 2024 • Nafplio, Greece
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Kick Into
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
                  Summer Fun!
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Join our exciting Taekwondo summer camp in beautiful Nafplio! Learn martial arts, make friends, and
                build confidence in a fun, safe environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => scrollToSection("register")}
                  className="bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Register Now <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  onClick={() => scrollToSection("about")}
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-200"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Kids practicing Taekwondo"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-600 to-amber-500 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">Camp</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of martial arts training, character development, and summer fun in the
              historic city of Nafplio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Expert Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Learn from certified black belt instructors with years of experience teaching young martial artists.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Character Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Develop discipline, respect, confidence, and leadership skills that last a lifetime.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Fun Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enjoy games, competitions, cultural activities, and beach trips in beautiful Nafplio.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Camp?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Small class sizes for personalized attention</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Age-appropriate curriculum for all skill levels</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Safe, supervised environment with qualified staff</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Cultural immersion in historic Nafplio</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Taekwondo training session"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Camp{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">Gallery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a glimpse into the exciting world of our Taekwondo summer camp and the beautiful city of Nafplio.
            </p>
          </div>

          {/* Gallery Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold cursor-pointer hover:bg-blue-700 transition-colors">
              All Photos
            </Badge>
            <Badge
              variant="outline"
              className="border-blue-600 text-blue-600 px-4 py-2 text-sm font-semibold cursor-pointer hover:bg-blue-50 transition-colors"
            >
              Training
            </Badge>
            <Badge
              variant="outline"
              className="border-amber-500 text-amber-600 px-4 py-2 text-sm font-semibold cursor-pointer hover:bg-amber-50 transition-colors"
            >
              Activities
            </Badge>
            <Badge
              variant="outline"
              className="border-cyan-500 text-cyan-600 px-4 py-2 text-sm font-semibold cursor-pointer hover:bg-cyan-50 transition-colors"
            >
              Nafplio
            </Badge>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Training Photos */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Kids practicing Taekwondo kicks"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Taekwondo Training</h3>
                  <p className="text-sm text-blue-100">Learning proper techniques</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Belt testing ceremony"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Belt Testing</h3>
                  <p className="text-sm text-blue-100">Achievement ceremonies</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Sparring practice session"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Sparring Practice</h3>
                  <p className="text-sm text-blue-100">Safe controlled combat</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Forms demonstration"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Poomsae Forms</h3>
                  <p className="text-sm text-blue-100">Traditional patterns</p>
                </div>
              </div>
            </div>

            {/* Activities Photos */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Beach training session"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Beach Training</h3>
                  <p className="text-sm text-amber-100">Training by the sea</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Team building games"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Team Building</h3>
                  <p className="text-sm text-amber-100">Fun group activities</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Award ceremony"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Awards Ceremony</h3>
                  <p className="text-sm text-amber-100">Celebrating achievements</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Cultural activities"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Cultural Activities</h3>
                  <p className="text-sm text-amber-100">Greek traditions</p>
                </div>
              </div>
            </div>

            {/* Nafplio Photos */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Palamidi Castle Nafplio"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Palamidi Castle</h3>
                  <p className="text-sm text-cyan-100">Historic fortress visit</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Nafplio old town"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Old Town Nafplio</h3>
                  <p className="text-sm text-cyan-100">Beautiful architecture</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Nafplio harbor"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Nafplio Harbor</h3>
                  <p className="text-sm text-cyan-100">Scenic waterfront</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Greek beach"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Greek Beaches</h3>
                  <p className="text-sm text-cyan-100">Crystal clear waters</p>
                </div>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 py-3 rounded-full text-lg transition-all duration-200 bg-transparent"
            >
              View More Photos
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="videos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Camp{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">Videos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our young martial artists in action and experience the energy and excitement of our Taekwondo summer
              camp.
            </p>
          </div>

          {/* Video Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold cursor-pointer hover:bg-blue-700 transition-colors">
              All Videos
            </Badge>
            <Badge
              variant="outline"
              className="border-blue-600 text-blue-600 px-4 py-2 text-sm font-semibold cursor-pointer hover:bg-blue-50 transition-colors"
            >
              Training
            </Badge>
            <Badge
              variant="outline"
              className="border-amber-500 text-amber-600 px-4 py-2 text-sm font-semibold cursor-pointer hover:bg-amber-50 transition-colors"
            >
              Activities
            </Badge>
            <Badge
              variant="outline"
              className="border-cyan-500 text-cyan-600 px-4 py-2 text-sm font-semibold cursor-pointer hover:bg-cyan-50 transition-colors"
            >
              Testimonials
            </Badge>
          </div>

          {/* Featured Video */}
          <div className="mb-16">
            <Card className="overflow-hidden shadow-2xl border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-blue-600 to-amber-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer group">
                        <svg
                          className="w-8 h-8 ml-1 group-hover:scale-110 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Welcome to Nafplio Taekwondo Camp</h3>
                      <p className="text-blue-100">Get a glimpse of our amazing summer camp experience</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-500 text-white px-2 py-1 text-xs font-semibold">FEATURED</Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 text-white text-sm bg-black/50 px-2 py-1 rounded">3:45</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Training Videos */}
            <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-blue-500 to-blue-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer group-hover:scale-110">
                      <svg className="w-6 h-6 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">2:15</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Basic Kicks Training</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Learn fundamental Taekwondo kicking techniques with our expert instructors.
                  </p>
                  <Badge variant="outline" className="border-blue-600 text-blue-600 text-xs">
                    Training
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-blue-600 to-cyan-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer group-hover:scale-110">
                      <svg className="w-6 h-6 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">1:45</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Poomsae Forms Demo</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Watch our students perform traditional Taekwondo forms with precision.
                  </p>
                  <Badge variant="outline" className="border-blue-600 text-blue-600 text-xs">
                    Training
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-cyan-500 to-blue-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer group-hover:scale-110">
                      <svg className="w-6 h-6 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">3:20</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Sparring Techniques</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Safe and controlled sparring practice with protective gear.
                  </p>
                  <Badge variant="outline" className="border-blue-600 text-blue-600 text-xs">
                    Training
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Activity Videos */}
            <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-amber-500 to-yellow-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer group-hover:scale-110">
                      <svg className="w-6 h-6 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">2:30</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Beach Training Day</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Special training session on the beautiful beaches of Nafplio.
                  </p>
                  <Badge variant="outline" className="border-amber-500 text-amber-600 text-xs">
                    Activities
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-yellow-500 to-amber-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer group-hover:scale-110">
                      <svg className="w-6 h-6 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">1:55</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Cultural Activities</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Exploring Greek culture and traditions during camp activities.
                  </p>
                  <Badge variant="outline" className="border-amber-500 text-amber-600 text-xs">
                    Activities
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-amber-600 to-orange-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer group-hover:scale-110">
                      <svg className="w-6 h-6 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">4:10</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Awards Ceremony</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Celebrating achievements and progress at our graduation ceremony.
                  </p>
                  <Badge variant="outline" className="border-amber-500 text-amber-600 text-xs">
                    Activities
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial Videos */}
            <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-cyan-500 to-teal-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer group-hover:scale-110">
                      <svg className="w-6 h-6 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">1:20</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Parent Testimonials</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Hear what parents say about their children&apos;s camp experience.
                  </p>
                  <Badge variant="outline" className="border-cyan-500 text-cyan-600 text-xs">
                    Testimonials
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-teal-500 to-cyan-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer group-hover:scale-110">
                      <svg className="w-6 h-6 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">2:05</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Student Interviews</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Our young martial artists share their favorite camp memories.
                  </p>
                  <Badge variant="outline" className="border-cyan-500 text-cyan-600 text-xs">
                    Testimonials
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-cyan-600 to-blue-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer group-hover:scale-110">
                      <svg className="w-6 h-6 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">3:15</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Instructor Insights</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Our expert instructors discuss the camp&apos;s philosophy and approach.
                  </p>
                  <Badge variant="outline" className="border-cyan-500 text-cyan-600 text-xs">
                    Testimonials
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-amber-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Create Your Own Camp Memories?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join us this summer and become part of our amazing Taekwondo family in beautiful Nafplio!
              </p>
              <Button
                onClick={() => scrollToSection("register")}
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-3 rounded-full text-lg transform hover:scale-105 transition-all duration-200"
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
                Instructors
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from experienced, certified martial arts professionals who are passionate about teaching young
              athletes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Master Alex Chen",
                title: "Head Instructor",
                belt: "6th Dan Black Belt",
                experience: "15+ years teaching",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Instructor Maria Santos",
                title: "Youth Specialist",
                belt: "4th Dan Black Belt",
                experience: "10+ years with kids",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Coach David Kim",
                title: "Competition Coach",
                belt: "5th Dan Black Belt",
                experience: "Olympic Team Coach",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((instructor, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
              >
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <Image
                      src={instructor.image || "/placeholder.svg"}
                      alt={instructor.name}
                      width={150}
                      height={150}
                      className="rounded-full mx-auto border-4 bg-gradient-to-br from-blue-600 to-cyan-500"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{instructor.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">{instructor.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline" className="border-blue-600 text-blue-700">
                      {instructor.belt}
                    </Badge>
                    <p className="text-gray-600 text-sm">{instructor.experience}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Camp{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
                Schedule
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A perfect balance of training, fun activities, and cultural experiences throughout the week.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6 border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Clock className="w-6 h-6 text-blue-600 mr-2" />
                  Daily Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { time: "9:00 AM", activity: "Morning Warm-up & Stretching" },
                    { time: "9:30 AM", activity: "Taekwondo Techniques Training" },
                    { time: "10:30 AM", activity: "Break & Hydration" },
                    { time: "11:00 AM", activity: "Forms (Poomsae) Practice" },
                    { time: "12:00 PM", activity: "Lunch Break" },
                    { time: "1:00 PM", activity: "Games & Team Building" },
                    { time: "2:00 PM", activity: "Sparring & Self-Defense" },
                    { time: "3:00 PM", activity: "Cool Down & Reflection" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <Badge variant="outline" className="border-blue-600 text-blue-700 min-w-fit">
                        {item.time}
                      </Badge>
                      <span className="text-gray-700">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Star className="w-6 h-6 text-yellow-500 mr-2" />
                  Special Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { day: "Monday", activity: "Welcome Ceremony & Belt Testing" },
                    { day: "Tuesday", activity: "Cultural Tour of Nafplio Castle" },
                    { day: "Wednesday", activity: "Beach Training & Swimming" },
                    { day: "Thursday", activity: "Mini Tournament & Awards" },
                    { day: "Friday", activity: "Graduation & Parent Showcase" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <Badge variant="outline" className="border-yellow-500 text-yellow-600 min-w-fit">
                        {item.day}
                      </Badge>
                      <span className="text-gray-700">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Parents{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from families who have experienced the transformative power of our summer camp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                child: "Emma, age 8",
                text: "Emma came back from camp with so much confidence! She learned discipline and made amazing friends. The instructors were incredible with the kids.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                child: "Lucas, age 10",
                text: "Lucas has been asking to go back every summer since! The combination of martial arts and cultural activities in Nafplio was perfect.",
                rating: 5,
              },
              {
                name: "Anna Papadopoulos",
                child: "Sofia, age 7",
                text: "As a local parent, I was impressed by how well-organized everything was. Sofia learned so much and had the time of her life!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
              >
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">Parent of {testimonial.child}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our Taekwondo summer camp in Nafplio.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search FAQ questions..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full pl-12 pr-12 py-4 text-lg border-2 border-blue-200 rounded-full focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 bg-white shadow-lg"
              />
              {faqSearch && (
                <button
                  onClick={() => setFaqSearch("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            {faqSearch && (
              <div className="text-center mt-4">
                <Badge variant="outline" className="border-blue-600 text-blue-600 px-3 py-1">
                  {(() => {
                    const faqData = [
                      {
                        question: "What age groups do you accept for the summer camp?",
                        answer:
                          "Our summer camp welcomes children aged 6-16 years old. We group participants by age and skill level to ensure appropriate training and activities for everyone.",
                      },
                      {
                        question: "Do children need prior Taekwondo experience?",
                        answer:
                          "No prior experience is necessary! Our program is designed for all skill levels, from complete beginners to advanced students. Our certified instructors will assess each child's level and provide appropriate training.",
                      },
                      {
                        question: "What should my child bring to camp?",
                        answer:
                          "We provide all necessary training equipment including protective gear. Your child should bring comfortable athletic clothing, water bottle, sunscreen, swimwear for beach activities, and a positive attitude!",
                      },
                      {
                        question: "Are meals included in the camp fee?",
                        answer:
                          "Yes! The €299 fee includes all meals, snacks, and refreshments throughout the day. We accommodate dietary restrictions and allergies - just let us know during registration.",
                      },
                      {
                        question: "What safety measures do you have in place?",
                        answer:
                          "Safety is our top priority. All instructors are certified and trained in first aid. We maintain small class sizes, use proper protective equipment, and have medical support on standby. All activities are age-appropriate and supervised.",
                      },
                      {
                        question: "Can parents visit during camp activities?",
                        answer:
                          "We have an open-door policy! Parents are welcome to observe training sessions. We also host a special showcase on Friday where parents can see their children demonstrate what they've learned.",
                      },
                      {
                        question: "What happens if it rains during outdoor activities?",
                        answer:
                          "We have indoor training facilities and alternative activities planned for inclement weather. Beach training can be moved to our covered outdoor areas or indoor dojo.",
                      },
                      {
                        question: "Do you provide transportation?",
                        answer:
                          "Transportation is not included, but we can help coordinate carpools among families. The camp location in Nafplio is easily accessible and we provide detailed directions upon registration.",
                      },
                      {
                        question: "Will my child receive a certificate or belt promotion?",
                        answer:
                          "All participants receive a certificate of completion. Belt promotions are based on individual progress and skill demonstration during the camp, evaluated by our certified instructors.",
                      },
                      {
                        question: "What is your cancellation policy?",
                        answer:
                          "We offer full refunds for cancellations made 30 days before camp starts. Cancellations within 30 days receive a 50% refund. No refunds for cancellations within 7 days of camp start date.",
                      },
                    ]

                    const filteredFaqs = faqData.filter(
                      (faq) =>
                        faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
                        faq.answer.toLowerCase().includes(faqSearch.toLowerCase()),
                    )

                    return `${filteredFaqs.length} result${filteredFaqs.length !== 1 ? "s" : ""} found`
                  })()}
                </Badge>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {(() => {
              const faqData = [
                {
                  question: "What age groups do you accept for the summer camp?",
                  answer:
                    "Our summer camp welcomes children aged 6-16 years old. We group participants by age and skill level to ensure appropriate training and activities for everyone.",
                },
                {
                  question: "Do children need prior Taekwondo experience?",
                  answer:
                    "No prior experience is necessary! Our program is designed for all skill levels, from complete beginners to advanced students. Our certified instructors will assess each child's level and provide appropriate training.",
                },
                {
                  question: "What should my child bring to camp?",
                  answer:
                    "We provide all necessary training equipment including protective gear. Your child should bring comfortable athletic clothing, water bottle, sunscreen, swimwear for beach activities, and a positive attitude!",
                },
                {
                  question: "Are meals included in the camp fee?",
                  answer:
                    "Yes! The €299 fee includes all meals, snacks, and refreshments throughout the day. We accommodate dietary restrictions and allergies - just let us know during registration.",
                },
                {
                  question: "What safety measures do you have in place?",
                  answer:
                    "Safety is our top priority. All instructors are certified and trained in first aid. We maintain small class sizes, use proper protective equipment, and have medical support on standby. All activities are age-appropriate and supervised.",
                },
                {
                  question: "Can parents visit during camp activities?",
                  answer:
                    "We have an open-door policy! Parents are welcome to observe training sessions. We also host a special showcase on Friday where parents can see their children demonstrate what they've learned.",
                },
                {
                  question: "What happens if it rains during outdoor activities?",
                  answer:
                    "We have indoor training facilities and alternative activities planned for inclement weather. Beach training can be moved to our covered outdoor areas or indoor dojo.",
                },
                {
                  question: "Do you provide transportation?",
                  answer:
                    "Transportation is not included, but we can help coordinate carpools among families. The camp location in Nafplio is easily accessible and we provide detailed directions upon registration.",
                },
                {
                  question: "Will my child receive a certificate or belt promotion?",
                  answer:
                    "All participants receive a certificate of completion. Belt promotions are based on individual progress and skill demonstration during the camp, evaluated by our certified instructors.",
                },
                {
                  question: "What is your cancellation policy?",
                  answer:
                    "We offer full refunds for cancellations made 30 days before camp starts. Cancellations within 30 days receive a 50% refund. No refunds for cancellations within 7 days of camp start date.",
                },
              ]

              const filteredFaqs = faqData.filter(
                (faq) =>
                  faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
                  faq.answer.toLowerCase().includes(faqSearch.toLowerCase()),
              )

              if (filteredFaqs.length === 0 && faqSearch) {
                return (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                    <p className="text-gray-600 mb-4">
                      We couldn&apos;t find any FAQ questions matching &quot;{faqSearch}&quot;. Try different keywords or contact us
                      directly.
                    </p>
                    <Button
                      onClick={() => setFaqSearch("")}
                      variant="outline"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-2 rounded-full transition-all duration-200"
                    >
                      Clear Search
                    </Button>
                  </div>
                )
              }

              return filteredFaqs.map((faq, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <details className="group">
                      <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-blue-50 transition-colors">
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faqSearch ? (
                            <span
                              dangerouslySetInnerHTML={{
                                __html: faq.question.replace(
                                  new RegExp(`(${faqSearch})`, "gi"),
                                  '<mark class="bg-yellow-200 px-1 rounded">$1</mark>',
                                ),
                              }}
                            />
                          ) : (
                            faq.question
                          )}
                        </h3>
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                          </div>
                        </div>
                      </summary>
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faqSearch ? (
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: faq.answer.replace(
                                    new RegExp(`(${faqSearch})`, "gi"),
                                    '<mark class="bg-yellow-200 px-1 rounded">$1</mark>',
                                  ),
                                }}
                              />
                            ) : (
                              faq.answer
                            )}
                          </p>
                        </div>
                      </div>
                    </details>
                  </CardContent>
                </Card>
              ))
            })()}
          </div>

          {/* Contact for More Questions */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">
                We&apos;re here to help! Contact us directly and we&apos;ll be happy to answer any additional questions about our
                summer camp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200"
                  onClick={() => window.open("mailto:info@nafpliotkd.com?subject=Summer Camp Questions", "_blank")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 bg-transparent"
                  onClick={() => window.open("tel:+30123456789", "_blank")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to enroll your child or have questions about our Taekwondo summer camp? We&apos;re here to help!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">+30 123 456 789</p>
                      <p className="text-sm text-gray-500">Available 9:00 AM - 6:00 PM (GMT+3)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@nafpliotkd.com</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                      <p className="text-gray-600">Historic Center of Nafplio</p>
                      <p className="text-gray-600">Argolis, Peloponnese, Greece</p>
                      <p className="text-sm text-gray-500">Near Palamidi Castle</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  Camp Hours & Contact Times
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Camp Hours:</span>
                    <span className="font-semibold text-gray-900">9:00 AM - 3:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Office Hours:</span>
                    <span className="font-semibold text-gray-900">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Emergency Contact:</span>
                    <span className="font-semibold text-gray-900">Available 24/7</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900">Quick Actions</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 flex items-center justify-center"
                    onClick={() => window.open("tel:+30123456789", "_blank")}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 bg-transparent flex items-center justify-center"
                    onClick={() => window.open("mailto:info@nafpliotkd.com", "_blank")}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Send Us a Message</CardTitle>
                  <CardDescription className="text-gray-600">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-2">
                        Child&apos;s Age
                      </label>
                      <select
                        id="childAge"
                        name="childAge"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                      >
                        <option value="">Select age range</option>
                        <option value="6-8">6-8 years old</option>
                        <option value="9-12">9-12 years old</option>
                        <option value="13-16">13-16 years old</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                      >
                        <option value="">Select a subject</option>
                        <option value="registration">Camp Registration</option>
                        <option value="information">General Information</option>
                        <option value="schedule">Schedule Questions</option>
                        <option value="pricing">Pricing & Payment</option>
                        <option value="special-needs">Special Needs/Accommodations</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 resize-vertical"
                        placeholder="Tell us about your questions or how we can help you..."
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-full text-lg transform hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                      Send Message
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>

                  <div className="mt-6 text-center text-sm text-gray-500">
                    <p>
                      By submitting this form, you agree to our privacy policy. We&apos;ll only use your information to
                      respond to your inquiry.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Location Map */}
          <div className="mt-16">
            <Card className="overflow-hidden shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-amber-500 text-white">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  Find Us in Nafplio
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Historic Center • Near Palamidi Castle • Argolis, Greece
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12547.123456789!2d22.7969!3d37.5681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149ff1b3b3b3b3b3%3A0x123456789abcdef!2sNafplio%2C%20Greece!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                    title="Nafplio Location Map"
                  ></iframe>
                  <div className="absolute top-4 right-4">
                    <Button
                      size="sm"
                      className="bg-white/90 text-blue-600 hover:bg-white hover:text-blue-700 font-semibold shadow-lg backdrop-blur-sm"
                      onClick={() => window.open("https://maps.google.com/?q=Nafplio,Greece", "_blank")}
                    >
                      <MapPin className="w-4 h-4 mr-1" />
                      View Larger Map
                    </Button>
                  </div>
                </div>

                {/* Location Details */}
                <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-sm text-gray-600">Historic Center of Nafplio</p>
                      <p className="text-sm text-gray-600">Near Palamidi Castle</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Distance</h4>
                      <p className="text-sm text-gray-600">5 min walk from city center</p>
                      <p className="text-sm text-gray-600">10 min from main square</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Parking</h4>
                      <p className="text-sm text-gray-600">Free parking available</p>
                      <p className="text-sm text-gray-600">Multiple nearby lots</p>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600 mb-4">
                      Our camp is located in the heart of historic Nafplio, easily accessible by car or on foot. The
                      beautiful setting provides the perfect backdrop for our martial arts training and cultural
                      activities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                        onClick={() => window.open("https://maps.google.com/maps/dir//Nafplio,Greece", "_blank")}
                      >
                        Get Directions
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white bg-transparent"
                        onClick={() =>
                          window.open("https://www.google.com/maps/search/parking+near+Nafplio,Greece", "_blank")
                        }
                      >
                        Find Parking
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20 bg-gradient-to-br from-blue-50 via-white to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Register for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
                Summer Camp
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure your child&apos;s spot in our exciting Taekwondo summer camp. Fill out the form below to get started!
            </p>
          </div>

          {/* Camp Information Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6 border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Camp Dates</h3>
                <p className="text-gray-600">July 15-19, 2024</p>
                <p className="text-sm text-gray-500">5 Days of Adventure</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 border-amber-100 hover:border-amber-200 transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Age Groups</h3>
                <p className="text-gray-600">6-16 Years Old</p>
                <p className="text-sm text-gray-500">All Skill Levels Welcome</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 border-cyan-100 hover:border-cyan-200 transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Investment</h3>
                <p className="text-2xl font-bold text-blue-600">€299</p>
                <p className="text-sm text-gray-500">All Inclusive Package</p>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <Card className="shadow-2xl border-2 border-blue-100">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-amber-500 text-white">
              <CardTitle className="text-2xl font-bold">Camp Registration Form</CardTitle>
              <CardDescription className="text-blue-100">
                Please provide the following information to register your child for our summer camp.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-8">
                {/* Parent/Guardian Information */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    Parent/Guardian Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="parentFirstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="parentFirstName"
                        name="parentFirstName"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                        placeholder="Enter your first name"
                      />
                    </div>

                    <div>
                      <label htmlFor="parentLastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="parentLastName"
                        name="parentLastName"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="parentEmail"
                        name="parentEmail"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="parentPhone"
                        name="parentPhone"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="parentAddress" className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <textarea
                      id="parentAddress"
                      name="parentAddress"
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 resize-vertical"
                      placeholder="Enter your full address"
                    ></textarea>
                  </div>
                </div>

                {/* Child Information */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    Child Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="childFirstName" className="block text-sm font-medium text-gray-700 mb-2">
                        Child&apos;s First Name *
                      </label>
                      <input
                        type="text"
                        id="childFirstName"
                        name="childFirstName"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                        placeholder="Enter child's first name"
                      />
                    </div>

                    <div>
                      <label htmlFor="childLastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Child&apos;s Last Name *
                      </label>
                      <input
                        type="text"
                        id="childLastName"
                        name="childLastName"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                        placeholder="Enter child's last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div>
                      <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-2">
                        Age *
                      </label>
                      <select
                        id="childAge"
                        name="childAge"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                      >
                        <option value="">Select age</option>
                        <option value="6">6 years old</option>
                        <option value="7">7 years old</option>
                        <option value="8">8 years old</option>
                        <option value="9">9 years old</option>
                        <option value="10">10 years old</option>
                        <option value="11">11 years old</option>
                        <option value="12">12 years old</option>
                        <option value="13">13 years old</option>
                        <option value="14">14 years old</option>
                        <option value="15">15 years old</option>
                        <option value="16">16 years old</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="childGender" className="block text-sm font-medium text-gray-700 mb-2">
                        Gender *
                      </label>
                      <select
                        id="childGender"
                        name="childGender"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="tshirtSize" className="block text-sm font-medium text-gray-700 mb-2">
                        T-Shirt Size *
                      </label>
                      <select
                        id="tshirtSize"
                        name="tshirtSize"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                      >
                        <option value="">Select size</option>
                        <option value="xs">XS (Youth)</option>
                        <option value="s">S (Youth)</option>
                        <option value="m">M (Youth)</option>
                        <option value="l">L (Youth)</option>
                        <option value="xs-adult">XS (Adult)</option>
                        <option value="s-adult">S (Adult)</option>
                        <option value="m-adult">M (Adult)</option>
                        <option value="l-adult">L (Adult)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label htmlFor="martialArtsExperience" className="block text-sm font-medium text-gray-700 mb-2">
                        Martial Arts Experience
                      </label>
                      <select
                        id="martialArtsExperience"
                        name="martialArtsExperience"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                      >
                        <option value="">Select experience level</option>
                        <option value="none">No experience</option>
                        <option value="beginner">Beginner (less than 1 year)</option>
                        <option value="intermediate">Intermediate (1-3 years)</option>
                        <option value="advanced">Advanced (3+ years)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="currentBelt" className="block text-sm font-medium text-gray-700 mb-2">
                        Current Belt Rank (if applicable)
                      </label>
                      <select
                        id="currentBelt"
                        name="currentBelt"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                      >
                        <option value="">Select belt rank</option>
                        <option value="white">White Belt</option>
                        <option value="yellow">Yellow Belt</option>
                        <option value="orange">Orange Belt</option>
                        <option value="green">Green Belt</option>
                        <option value="blue">Blue Belt</option>
                        <option value="purple">Purple Belt</option>
                        <option value="brown">Brown Belt</option>
                        <option value="red">Red Belt</option>
                        <option value="black">Black Belt</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Medical Information */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-700 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    Medical & Emergency Information
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <label htmlFor="allergies" className="block text-sm font-medium text-gray-700 mb-2">
                        Allergies or Dietary Restrictions
                      </label>
                      <textarea
                        id="allergies"
                        name="allergies"
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 resize-vertical"
                        placeholder="Please list any allergies, dietary restrictions, or special needs"
                      ></textarea>
                    </div>

                    <div>
                      <label htmlFor="medicalConditions" className="block text-sm font-medium text-gray-700 mb-2">
                        Medical Conditions or Medications
                      </label>
                      <textarea
                        id="medicalConditions"
                        name="medicalConditions"
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 resize-vertical"
                        placeholder="Please list any medical conditions, medications, or health concerns"
                      ></textarea>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="emergencyContactName" className="block text-sm font-medium text-gray-700 mb-2">
                          Emergency Contact Name *
                        </label>
                        <input
                          type="text"
                          id="emergencyContactName"
                          name="emergencyContactName"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                          placeholder="Emergency contact full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="emergencyContactPhone" className="block text-sm font-medium text-gray-700 mb-2">
                          Emergency Contact Phone *
                        </label>
                        <input
                          type="tel"
                          id="emergencyContactPhone"
                          name="emergencyContactPhone"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                          placeholder="Emergency contact phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="emergencyContactRelation"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Relationship to Child *
                      </label>
                      <select
                        id="emergencyContactRelation"
                        name="emergencyContactRelation"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                      >
                        <option value="">Select relationship</option>
                        <option value="parent">Parent</option>
                        <option value="guardian">Guardian</option>
                        <option value="grandparent">Grandparent</option>
                        <option value="aunt-uncle">Aunt/Uncle</option>
                        <option value="sibling">Sibling</option>
                        <option value="family-friend">Family Friend</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    Additional Information
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <label htmlFor="howHeard" className="block text-sm font-medium text-gray-700 mb-2">
                        How did you hear about our camp?
                      </label>
                      <select
                        id="howHeard"
                        name="howHeard"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                      >
                        <option value="">Select an option</option>
                        <option value="google">Google Search</option>
                        <option value="facebook">Facebook</option>
                        <option value="instagram">Instagram</option>
                        <option value="friend">Friend/Family Recommendation</option>
                        <option value="school">School/Teacher</option>
                        <option value="flyer">Flyer/Poster</option>
                        <option value="website">Website</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
                        Special Requests or Additional Comments
                      </label>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 resize-vertical"
                        placeholder="Please share any special requests, concerns, or additional information you'd like us to know"
                      ></textarea>
                    </div>

                    {/* Photo/Video Permission */}
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Photo & Video Permission</h4>
                      <div className="space-y-3">
                        <label className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            name="photoPermission"
                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="text-sm text-gray-700">
                            I give permission for my child to be photographed and/or videotaped during camp activities
                            for promotional purposes.
                          </span>
                        </label>
                        <label className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            name="socialMediaPermission"
                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="text-sm text-gray-700">
                            I give permission for photos/videos of my child to be shared on the camp&apos;s social media
                            accounts and website.
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="bg-amber-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Terms & Conditions</h4>
                      <div className="space-y-3">
                        <label className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            name="termsAccepted"
                            required
                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="text-sm text-gray-700">
                            I have read and agree to the camp&apos;s terms and conditions, liability waiver, and cancellation
                            policy. *
                          </span>
                        </label>
                        <label className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            name="liabilityWaiver"
                            required
                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="text-sm text-gray-700">
                            I acknowledge that martial arts training involves physical activity and accept
                            responsibility for any risks involved. *
                          </span>
                        </label>
                        <label className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            name="medicalTreatment"
                            required
                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="text-sm text-gray-700">
                            I give permission for camp staff to seek emergency medical treatment for my child if
                            necessary. *
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">5</span>
                    </div>
                    Payment Information
                  </h3>

                  <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-lg p-6 mb-6">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Total Camp Fee: €299</h4>
                      <p className="text-gray-600 mb-4">
                        Includes all training, meals, activities, equipment, and camp t-shirt
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                        <div className="flex justify-between">
                          <span>Training & Instruction:</span>
                          <span>Included</span>
                        </div>
                        <div className="flex justify-between">
                          <span>All Meals & Snacks:</span>
                          <span>Included</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Equipment & Gear:</span>
                          <span>Included</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Camp T-Shirt:</span>
                          <span>Included</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Beach Activities:</span>
                          <span>Included</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Cultural Tours:</span>
                          <span>Included</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Payment Method *
                    </label>
                    <select
                      id="paymentMethod"
                      name="paymentMethod"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                    >
                      <option value="">Select payment method</option>
                      <option value="bank-transfer">Bank Transfer</option>
                      <option value="credit-card">Credit Card</option>
                      <option value="paypal">PayPal</option>
                      <option value="cash">Cash (in person)</option>
                    </select>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Payment Instructions:</strong> After submitting this form, you will receive an email with
                      detailed payment instructions and an invoice. Full payment is required within 7 days to secure
                      your child&apos;s spot. We accept major credit cards, bank transfers, and PayPal.
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="border-t border-gray-200 pt-8">
                  <div className="text-center">
                    <Button
                      type="submit"
                      className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 px-12 rounded-full text-lg transform hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                      Submit Registration
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>

                    <p className="mt-4 text-sm text-gray-600">
                      By submitting this form, you&apos;ll receive a confirmation email within 24 hours with payment
                      instructions and additional camp details.
                    </p>

                    <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>+30 123 456 789</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>info@nafpliotkd.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-amber-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">TK</span>
                </div>
                <span className="text-xl font-bold">Nafplio Taekwondo Camp</span>
              </div>
              <p className="text-gray-400">
                Empowering young martial artists through discipline, respect, and fun in beautiful Nafplio, Greece.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Nafplio, Argolis, Greece</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+30 123 456 789</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@nafpliotkd.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About the Camp
                </button>
                <button
                  onClick={() => scrollToSection("instructors")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Our Instructors
                </button>
                <button
                  onClick={() => scrollToSection("schedule")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Schedule
                </button>
                <button
                  onClick={() => scrollToSection("register")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Register Now
                </button>
                <button
                  onClick={() => scrollToSection("register")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Register Now
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Gallery
                </button>
                <button
                  onClick={() => scrollToSection("videos")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Videos
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Nafplio Taekwondo Summer Camp. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => scrollToSection("register")}
          className="bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold px-6 py-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-200 animate-pulse"
        >
          Register Now!
        </Button>
      </div>
    </div>
  )
}
