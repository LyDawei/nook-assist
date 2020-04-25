import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Toolbar, Paper, Tabs, Tab, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SwipeableViews from 'react-swipeable-views';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const Critterpedia = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Layout>
      <SEO title="Critterpedia" />
      <Paper className={classes.root}>
        <Tabs
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          value={value}
          onChange={handleChange}
        >
          <Tab label="Bugs" />
          <Tab label="Fish" />
          <Tab label="Donated" />
        </Tabs>
      </Paper>
      <SwipeableViews axis="x" index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0} {...a11yProps(0)}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} {...a11yProps(1)}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} {...a11yProps(2)}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Layout>
  );
};

export default Critterpedia;
