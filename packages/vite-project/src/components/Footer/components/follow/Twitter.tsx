// import React from 'react';

const Twitter = (props: { styleColor: string }) => {
  const { styleColor } = props;
  return (
    <svg
      xmlSpace="preserve"
      viewBox="0 0 18.7 15.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.7 1.8c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.7.4-1.6.8-2.4.9C15 .5 14 0 12.9 0c-2.1 0-3.8 1.7-3.8 3.8 0 .3 0 .6.1.9C6 4.5 3.2 3 1.3.7 1 1.3.8 1.9.8 2.6c0 1.3.7 2.5 1.7 3.2-.6 0-1.2-.2-1.7-.5C.8 7.2 2.1 8.7 3.9 9c-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 1.9 2.6 3.6 2.6-1.3 1-3 1.6-4.8 1.6H.1c1.7 1.1 3.7 1.7 5.9 1.7 7 0 10.9-5.8 10.9-10.9v-.5c.6-.3 1.2-.9 1.8-1.7z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={styleColor === 'Light' ? '#383838' : '#fff'}
        data-follow-fill="#fff"
      />
    </svg>
  );
};

export default Twitter;
