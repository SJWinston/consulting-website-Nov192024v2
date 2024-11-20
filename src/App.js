import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">John Daly Consulting</h1>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <a href="#about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Strategic Business Consulting
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Helping businesses optimize operations and drive growth through data-driven insights and proven strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Proven Results</h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Strategic Growth */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Strategic Growth</h3>
              <ul className="space-y-4">
                <li>Developed $100M vertical market strategy for healthcare and hospitality sectors</li>
                <li>Delivered $30M revenue growth through category optimization</li>
              </ul>
            </div>

            {/* Operational Excellence */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Operational Excellence</h3>
              <ul className="space-y-4">
                <li>75% cycle time improvement with 60% cost reduction for global manufacturer</li>
                <li>Led $610M global supply chain across 14 countries</li>
              </ul>
            </div>

            {/* Digital Transform */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Digital Transform</h3>
              <ul className="space-y-4">
                <li>Transformed $100M+ e-commerce operations</li>
                <li>Implemented global analytics platform for Fortune 500 clients</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Section with CTA */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Partner With Industry Leaders</h2>
          <p className="text-lg text-gray-600 mb-8">
            Transform your business with proven strategies, operational excellence, and digital innovation.
          </p>
          <div className="space-y-4">
            <a
              href="mailto:requests@consultinget.services"
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200 inline-block"
            >
              Request a Consultation
            </a>
            <p className="text-gray-600">
              Or email us at Requests@ConsultingET.services
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">About John Daly</h2>
            <p className="mt-4 text-lg text-gray-600">
              With over 15 years of experience in business strategy and operations, John Daly has helped numerous organizations achieve their goals through effective consulting and implementation of best practices. His expertise spans across industries, with a particular focus on technology and healthcare sectors.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">Services</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Planning</h3>
              <p className="text-gray-600">Develop comprehensive business strategies aligned with your organization's goals and market opportunities.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Process Optimization</h3>
              <p className="text-gray-600">Streamline operations and improve efficiency through detailed analysis and implementation of best practices.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Transformation</h3>
              <p className="text-gray-600">Guide organizations through technological adoption and digital innovation initiatives.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">Contact</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center justify-center">
              <Phone className="h-6 w-6 text-gray-600 mr-2" />
              <span className="text-gray-600">(555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-6 w-6 text-gray-600 mr-2" />
              <span className="text-gray-600">requests@consultinget.services</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-6 w-6 text-gray-600 mr-2" />
              <span className="text-gray-600">Boston, MA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-500">
            <p>&copy; 2024 John Daly Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;