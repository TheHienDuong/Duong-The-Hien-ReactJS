import React, { useState } from 'react';
import PropTypes from 'prop-types';

const HeaderCarousel = ({ title, subtitle }) => (
  <h1 className="text-black text-6xl font-bold pt-[3rem] pb-24">
    <span className="text-black">{title}</span>
    <br />
    <span className="text-gray-500">{subtitle}</span>
  </h1>
);

HeaderCarousel.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node.isRequired,
};
const HeaderTab = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <li
      className="list-none relative pb-7"
    >
      <a
        href="/"
        className="text-gray-500 hover:text-black relative cursor-pointer"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        {children}

      </a>
      {isHovered && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
      )}
    </li>
  );
};

HeaderTab.propTypes = {
  children: PropTypes.node.isRequired,
};

const Header = () => (
  <div className="bg-light h-full">
    <div className="container mx-auto w-screen ">
      <div className="px-2 w-full h-full">
        <HeaderCarousel
          title="News and insights"
          subtitle=" from our experts"
        />
      </div>
      <div className="px-2 flex gap-12">
        <HeaderTab>All Articles</HeaderTab>
        <HeaderTab>Sales</HeaderTab>
        <HeaderTab>Marketing</HeaderTab>
        <HeaderTab>Service</HeaderTab>
        <HeaderTab>Product</HeaderTab>
        <HeaderTab>News</HeaderTab>
      </div>
      <div />
    </div>
  </div>
);

export default Header;
