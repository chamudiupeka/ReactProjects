import React from 'react';

function Heading() {
  const date = new Date();

  
  const currentTime = date.getHours();
  let greeting;
  const customStyle = {
    color: '',
  };

  if (currentTime < 12) {
    greeting = 'Good Morning';
    customStyle.color = 'green';
  } else if (currentTime < 18) {
    greeting = 'Good Afternoon';
    customStyle.color = 'red';
  } else {
    greeting = 'Good Night';
    customStyle.color = 'blue';
  }
  return (
    <header>
      <h1 className="heading" style={customStyle}>
        {greeting}
      </h1>
    </header>
  );
}
export default Heading;
