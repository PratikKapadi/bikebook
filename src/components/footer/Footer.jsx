import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import './Footer.css'; // For additional custom styles
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        {/* Website name */}
        <h5 className="mb-3">BikeBook.com</h5>

        {/* Horizontal Line */}
        <hr className="my-3" style={{ width: '100px', margin: '0 auto', borderColor: '#ccc' }} />

        {/* Connect Us On */}
        <p className="mt-3">Connect Us On</p>

        {/* Social Icons */}
        <div className="d-flex justify-content-center mb-4">
          <a href="https://facebook.com" className="text-light mx-3">
            <FaFacebook size={30} />
          </a>
          <a href="https://instagram.com" className="text-light mx-3">
            <FaInstagram size={30} />
          </a>
          <a href="https://whatsapp.com" className="text-light mx-3">
            <FaWhatsapp size={30} />
          </a>
          <a href="https://youtube.com" className="text-light mx-3">
            <FaYoutube size={30} />
          </a>
        </div>

        {/* Copyright Section */}
        <p className="mb-0">
          Copyright &copy; 2024 All rights reserved | 
          <a href="#visitor-agreement" className="text-light mx-2">Visitor Agreement</a> & 
          <Link to='/privacy' className="text-light mx-2">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
