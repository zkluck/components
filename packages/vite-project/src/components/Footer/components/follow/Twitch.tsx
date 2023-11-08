// import React from 'react';

const Twitch = (props: { styleColor: string }) => {
  const { styleColor } = props;
  return (
    <svg
      xmlSpace="preserve"
      viewBox="0 0 19 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 5.2v5.2H7.8V5.2h1.7zm4.7 0v5.2h-1.7V5.2h1.7zm0 9.1 3-3V1.7H3v12.6h3.9v2.6l2.6-2.6h4.7zM19 0v12.1l-5.2 5.2H9.9L7.3 20H4.7v-2.6H0V3.5L1.3 0H19z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={styleColor === 'Light' ? '#383838' : '#fff'}
        data-follow-fill="#fff"
      />
    </svg>
  );
};

export default Twitch;
