import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./MuiTabs.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: "70vh" }}>
      <Box
      //   sx={{ borderBottom: 1, borderColor: "gold" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          aria-label="basic tabs example"
          TabIndicatorProps={{ sx: { backgroundColor: "gold", height: 3 } }}
          sx={{
            "& button": { color: "white", fontSize: "1.5rem" },
            // "& button:hover": { backgroundColor: "gold", opacity: 0.9 },
          }}
          textColor="white"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="WEB DESIGN" {...a11yProps(1)} />
          <Tab label="DIGITAL ART" {...a11yProps(2)} />
          <Tab label="PEN AND INK" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="box-container-r1">
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
        </div>
        <div className="box-container-r2">
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="box-container-r1">
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="box-container-r1">
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="box-container-r1">
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
        </div>
      </TabPanel>
    </Box>
  );
}
// export default ;

const CardBox = () => {
  return <div className="box"></div>;
};
