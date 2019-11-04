import React from 'react'
import PropTypes from 'prop-types'
import { pick, keys, filter, contains, take } from 'ramda'

import { Document, Page } from 'react-pdf/dist/entry.webpack'
import { pdfjs } from 'react-pdf'

import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import './TabPanel.css'
import { makeStyles } from '@material-ui/core/styles'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))


const makeTabs = (tabs, classes, value, props, styles)=> {
  return (
    tabs.map( (tab, index) => <Tab label={tab.name} {...a11yProps(index)} key={index} className="MenuItem" style={styles.tab[index]} /> )
  )
}

const makePics = pics => {
  // 
  let fourPics = take(4, pics)

  return (
    fourPics.map(pic => <img src={pic} alt={pic} key={pic} style={{ marginTop: '20px', marginRight: '10px', width: '325px', height: '225px' }} /> )
  )
}


const ScrollableTabsButtonForce = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { selectedPOI, lunchMenu, dinnerMenuUrl, poiPhotosArray } = props

  function handleChange(event, newValue) {
    setValue(newValue)
  }


  // This section adjusts tab styling for non-active tabs to desired styling  TODO: Try and set the below styles.tab to a function that
  //                                                                                uses selectedPOI.tabs data.
  //                                                                                Current code with 11 tabs would not have styling for that 11th tab.
  const styles = {
    default_tab:{
      fontFamily: 'Open Sans',
      fontSize: '18px',
    },
    active_tab:{
      fontFamily: 'Open Sans',
      fontSize: '18px',
      background: 'rgba(209,121,73,1)',
    }
  }
  
  styles.tab = []
  styles.tab[0] = styles.default_tab
  styles.tab[1] = styles.default_tab
  styles.tab[2] = styles.default_tab
  styles.tab[3] = styles.default_tab
  styles.tab[4] = styles.default_tab
  styles.tab[5] = styles.default_tab
  styles.tab[6] = styles.default_tab
  styles.tab[7] = styles.default_tab
  styles.tab[8] = styles.default_tab
  styles.tab[9] = styles.default_tab

  styles.tab[props.slideIndex] = Object.assign({},   styles.tab[props.slideIndex], styles.active_tab)
  // End of tab styling section


  // data for converting isaac id to name(s) to be display in Tab(s)
  const tabNames = [
    {id: 'description', name: "Overview", sections: ['description', 'hours', 'breakfastHours', 'lunchHours', 'dinnerHours', 'happyHours']},
    {id: 'lunchMenu', name: 'Lunch Menu'},
    {id: 'dinnerMenu', name: 'Dinner Menu'},
    {id: 'kidsMenu', name: 'Kids Menu'},
    {id: 'happyHourMenu', name: 'Happy Hour Menu'},
  ]

  // filter POI data down to tab panel objects
  const poiTabData = selectedPOI ? pick(['description', 'tabHours', 'ticketingInformation', 'lunchMenu', 'dinnerMenu', 'kidsMenu', 'happyHourMenu', 'tabPhotos'], selectedPOI) : undefined

  // Finds which tabName values exist in selectedPOI data and returns the keys
  const poiTabKeys = keys(poiTabData)

  // uses poiTabKeys to pull data from tabNames and send to the makeTabs()
  const tabsNamesToDisplay = filter(tab => contains(tab.id, poiTabKeys), tabNames)


  return (
    <div className={classes.root}>
      <AppBar position="relative" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          aria-label="scrollable force tabs example"
          TabIndicatorProps={{style: {background: 'rgba(209,121,73,1)'}}}    // Sets underline of selected tab to same color as background
        >
          {makeTabs(tabsNamesToDisplay, classes, value, props, styles)}
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} style={{ color: 'black', height: '1000px' }}>
        {poiTabData.description && (
          <div style={{ marginTop: '20px', marginLeft: '15px', marginRight: '15px' }} >
            <h4 className="tab-description-section-header" >{poiTabData.description[0].descriptionTitle} </h4>
            <p className="tab-description-section-paragraph" >{poiTabData.description[0].Description}</p>
          </div>
          )}

          {poiTabData.ticketingInformation && (
            <div style={{ marginTop: '30px', marginLeft: '15px', marginRight: '15px' }} >
              <h4 className="tab-description-section-header" >{poiTabData.ticketingInformation[0].descriptionTitle} </h4>
              <p className="tab-description-section-paragraph" >{poiTabData.ticketingInformation[0].Description}</p>
            </div>
          )}

        {poiTabData.tabHours && (
          <div style={{ marginTop: '30px', marginLeft: '15px', marginRight: '15px' }} >
            <h4 className="tab-description-section-header" >Hours:</h4>
            <p className="tab-description-section-paragraph" style={{ marginBottom: '1px' }} >Monday {poiTabData.tabHours.monday}</p>
            <p className="tab-description-section-paragraph" style={{ marginBottom: '1px' }} >Tuesday {poiTabData.tabHours.monday}</p>
            <p className="tab-description-section-paragraph" style={{ marginBottom: '1px' }} >Wednesday {poiTabData.tabHours.monday}</p>
            <p className="tab-description-section-paragraph" style={{ marginBottom: '1px' }} >Thursday {poiTabData.tabHours.monday}</p>
            <p className="tab-description-section-paragraph" style={{ marginBottom: '1px' }} >Friday {poiTabData.tabHours.monday}</p>
            <p className="tab-description-section-paragraph" style={{ marginBottom: '1px' }} >Saturday {poiTabData.tabHours.monday}</p>
            <p className="tab-description-section-paragraph" style={{ marginBottom: '1px' }} >Sunday {poiTabData.tabHours.monday}</p>
          </div>
        )}

        {poiPhotosArray && (
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px' }} >
            {makePics(poiPhotosArray)}
          </div>
        )}

      </TabPanel>

      {poiTabData.lunchMenu && (
        <TabPanel value={value} index={1} style={{ color: 'black', height: '1000px' }}>
          
          <Document className="pdf-document"
            file={lunchMenu}

            onLoadError={(error) => console.log('Error while loading document! ' + error.message) }
          >
            <Page style={{ justifyContent: 'center', color: 'red' }} pageNumber={1} />            
          </Document>
      </TabPanel>

      )}

      {poiTabData.dinnerMenu && (
        <TabPanel value={value} index={2} style={{ color: 'black', height: '1000px' }}>
          <Document className="pdf-document"
            file={dinnerMenuUrl}
            onLoadError={(error) => console.log('Error while loading document! ' + error.message) }
          >
            <Page className="pdf-page" pageNumber={1} />
          </Document>
      </TabPanel>  
      )}

    </div>
  )
}

export default ScrollableTabsButtonForce