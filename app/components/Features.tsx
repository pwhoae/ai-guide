import React from 'react';
import { FaBookOpen, FaClipboardList, FaChartLine, FaUsers, FaStar } from 'react-icons/fa';

const Features: React.FC = () => {
  return (
    <div className="features">
      <h2>Main Features</h2>
      <div className="feature-item">
        <FaBookOpen className="feature-icon" />
        <h3>Structured Learning Paths</h3>
        <p>Guided modules to help you learn effectively.</p>
      </div>
      <div className="feature-item">
        <FaClipboardList className="feature-icon" />
        <h3>Hands-On Tutorials</h3>
        <p>Interactive tutorials for practical experience.</p>
      </div>
      <div className="feature-item">
        <FaChartLine className="feature-icon" />
        <h3>Best Practices</h3>
        <p>Learn the best methods and techniques.</p>
      </div>
      <div className="feature-item">
        <FaUsers className="feature-icon" />
        <h3>Community-Driven Development</h3>
        <p>Collaborate and contribute with industry peers.</p>
      </div>
      <div className="feature-item">
        <FaStar className="feature-icon" />
        <h3>Latest Trends</h3>
        <p>Stay updated with the latest industry trends.</p>
      </div>
      <div className="feature-item">
        <FaStar className="feature-icon" />
        <h3>Free Access</h3>
        <p>Access all resources at no cost.</p>
      </div>
    </div>
  );
};

export default Features;