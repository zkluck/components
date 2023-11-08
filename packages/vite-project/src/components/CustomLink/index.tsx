import React from 'react';
import './index.css';
// import { Link } from 'react-router-dom';

interface Props {
  to?: string;
  className?: string;
  style?: React.CSSProperties;
  prevent?: boolean;
  handleClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  children: React.ReactNode;
}
function CustomLink(props: Props) {
  const { to, handleClick, prevent, ...rest } = props;
  if (!to) {
    return (
      <a
        href="#"
        {...rest}
        onClick={(e) => {
          e.preventDefault();
          props.handleClick && props.handleClick(e);
          return;
        }}
        rel="noopener noreferrer"
      >
        {' '}
        {props.children}
      </a>
    );
  }
  const isExternal = /^(https?:)?\/\//.test(to);
  if (isExternal) {
    return (
      <a
        href={to}
        rel="noopener noreferrer"
        {...rest}
        onClick={(e) => {
          e.preventDefault();
          location.href = to;
          return;
        }}
      >
        {' '}
        {props.children}
      </a>
    );
  }
  return (
    <div
      {...rest}
      onClick={(e: any) => {
        if (props.prevent) {
          e.preventDefault();
        }
        props.handleClick && props.handleClick(e);
        return;
      }}
    >
      {' '}
      {props.children}
    </div>
  );
}

export default CustomLink;
