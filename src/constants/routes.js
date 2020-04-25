import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import BookIcon from '@material-ui/icons/Book';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import ShowChartIcon from '@material-ui/icons/ShowChart';

export default [
  { label: 'Home', path: '/', icon: <HomeIcon /> },
  { label: 'About', path: '/about', icon: <InfoIcon /> },
  { label: 'Components', path: '/components', icon: <InfoIcon /> },
  {
    label: 'Critterpedia',
    path: '/critterpedia',
    icon: <BookIcon />,
  },
  {
    label: 'Flower box',
    path: '/flowerbox',
    icon: <LocalFloristIcon />,
  },
  {
    label: 'Stalk logs',
    path: '/stalkLogs',
    icon: <ShowChartIcon />,
  },
];
