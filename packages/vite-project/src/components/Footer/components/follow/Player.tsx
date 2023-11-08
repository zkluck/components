// import React from 'react';

const Player = (props: { styleColor: string }) => {
  const { styleColor } = props;
  return (
    <svg
      xmlSpace="preserve"
      viewBox="0 0 21.1 16.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9 1.4c0-.1 0-.1 0 0C16.5.7 15.1.3 13.6 0c-.2.4-.4.7-.5 1.1-1.6-.2-3.2-.2-4.8 0C8 .8 7.8.4 7.6 0 6 .3 4.6.7 3.2 1.3.5 5.4-.3 9.4.1 13.3c1.6 1.2 3.4 2.1 5.3 2.7.4-.6.8-1.1 1.1-1.8-.6-.2-1.1-.5-1.6-.8.1-.2.2-.3.3-.4 3.5 1.6 7.2 1.6 10.6 0l.3.3c-.5.3-1.1.6-1.6.8.3.6.7 1.2 1.1 1.8 1.9-.6 3.7-1.5 5.3-2.7.6-4.4-.6-8.3-3-11.8zM7.1 11c-1 0-1.9-1-1.9-2.1S6 6.7 7.1 6.7c1.1 0 1.9 1 1.9 2.1C9 10 8.1 11 7.1 11zm7 0c-1 0-1.9-1-1.9-2.1s.8-2.1 1.9-2.1c1.1 0 1.9 1 1.9 2.1s-.9 2.1-1.9 2.1z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={styleColor === 'Light' ? '#383838' : '#fff'}
        data-follow-fill="#fff"
      />
    </svg>
  );
};

export default Player;
