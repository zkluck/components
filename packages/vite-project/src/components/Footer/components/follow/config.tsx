// import React from 'react';
import Player from './Player';
import Facebook from './Facebook';
// import Reddit from './Reddit';
import Twitter from './Twitter';
import Youtube from './Youtube';

export default [
  {
    name: 'Player',
    link: 'https://discord.gg/UMeHsWhChR',
    render: (styleColor: string) => <Player styleColor={styleColor} />
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/channel/UCeTMnn_dw5SM0285K8WjbpQ/playlists',
    render: (styleColor: string) => <Youtube styleColor={styleColor} />
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/TheCliCli/',
    render: (styleColor: string) => <Facebook styleColor={styleColor} />
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/TheCliCli',
    render: (styleColor: string) => <Twitter styleColor={styleColor} />
  }
  // {
  //   name: 'Reddit',
  //   link: 'https://www.reddit.com/r/TheCliCli/',
  //   render: (styleColor: string) => <Reddit styleColor={styleColor} />
  // }
];
