"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-semibold">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Ready to <span className="text-blue-600">Get Started</span>?
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to discuss your laser cutting needs? Contact us today for expert consultation and competitive quotes.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">Phone Number</h4>
                    <p className="text-slate-600 text-lg font-semibold">+91 9997360023</p>
                    <p className="text-slate-500 text-sm">Mon-Sun, 24/7</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">Email Address</h4>
                    <p className="text-slate-600 text-lg font-semibold">ar.technology107@gmail.com</p>
                    <p className="text-slate-500 text-sm">We respond within hour</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">Our Location</h4>
                    <p className="text-slate-600 text-lg font-semibold">
                    Mainpuri, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">Business Hours</h4>
                    <div className="text-slate-600 text-lg font-semibold">
                      Monday - Sunday: 24/7 available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-6 text-white">
                <h4 className="font-bold text-white mb-3 text-lg">Need Immediate Assistance?</h4>
                <p className="text-blue-100 mb-6 text-sm">For urgent inquiries or technical support, call our direct line.</p>
                <Button 
                  className="bg-white text-blue-600 hover:bg-slate-100 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.location.href = 'tel:+919997360023'}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-base shadow-sm"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-base shadow-sm"
                        placeholder="ar.technology107@gmail.com"
                        defaultValue="ar.technology107@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-3">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-base shadow-sm"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-base shadow-sm"
                        placeholder="+91 9997360023"
                        defaultValue="+91 9997360023"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-3">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-base shadow-sm"
                    >
                      <option value="">Select a subject</option>
                      <option value="quote">Request Quote</option>
                      <option value="technical">Technical Support</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical text-base shadow-sm"
                      placeholder="Please describe your laser cutting requirements, including materials, thickness, and project details..."
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      className="mt-1 w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="consent" className="text-sm text-slate-600">
                      I agree to receive communications about products and services. You can unsubscribe at any time.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold py-4 rounded-xl transform hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-3" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
