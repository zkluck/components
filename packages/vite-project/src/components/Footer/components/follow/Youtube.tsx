// import React from 'react';

const Youtube = (props: { styleColor: string }) => {
  const { styleColor } = props;
  return (
    <svg
      xmlSpace="preserve"
      viewBox="0 0 21.9 15.3"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.4 2.4c-.3-.9-1-1.7-1.9-1.9-1.7-.5-8.6-.5-8.6-.5S4.1 0 2.4.5C1.5.8.7 1.5.5 2.4 0 4.1 0 7.6 0 7.6s0 3.6.5 5.3c.3.9 1 1.7 1.9 1.9 1.7.5 8.5.5 8.5.5s6.8 0 8.5-.5c.9-.3 1.7-1 1.9-1.9.5-1.7.5-5.3.5-5.3s.1-3.5-.4-5.2zM8.8 10.9V4.4l5.7 3.2-5.7 3.3z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={styleColor === 'Light' ? '#383838' : '#fff'}
        data-follow-fill="#fff"
      />
    </svg>
  );
};

export default Youtube;
