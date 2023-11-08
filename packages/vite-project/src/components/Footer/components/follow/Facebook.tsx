// import React from 'react';

const Facebook = (props: { styleColor: string }) => {
  const { styleColor } = props;
  return (
    <svg
      xmlSpace="preserve"
      viewBox="0 0 10.5 20.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5.1v3.2H8.6c-.7 0-1.2.1-1.4.4-.3.4-.4.8-.4 1.4v2.3h3.6L9.9 11H6.8v9.2H3.1V11H0V7.4h3.1V4.7c0-1.5.4-2.7 1.3-3.5C5.2.4 6.3 0 7.7 0c1.2 0 2.1 0 2.8.1z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={styleColor === 'Light' ? '#383838' : '#fff'}
        data-follow-fill="#fff"
      />
    </svg>
  );
};

export default Facebook;
