/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Header = (props) => {
  const { randomImage } = props;
  console.log(randomImage);
  return (
    <header>
      <img src="https://images.vexels.com/media/users/3/143350/isolated/preview/150164edc7f28a716bfceae9dd58cf2c-coolface-trollface-meme-by-vexels.png" alt="trollface" />
    </header>
  );
};


export default Header;
