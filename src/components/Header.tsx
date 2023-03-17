import React from 'react';

interface Props {
  title: string;
}

const Header = ({title}: Props) => {
  return (
    <div className="mx-auto max-w-screen-xl py-8">
      <h1 className="mb-4">
        <a href="/">
          <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
            {title}
          </span>
        </a>
      </h1>
    </div>
  );
};

export default Header;