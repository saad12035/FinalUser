// import * as React from 'react';
// import {DateRangePicker} from 'rsuite';
// import './test.css';
// import {Calendar, Col, Row} from "antd";
// import {useEffect, useState} from "react";
//
// export default function ResponsiveDateTimePickers() {
//   const [visible, setVisible] = useState(true);
//
//   function les(e) {
//     if(e.date()<Date().toLocaleString().substr(8,2)){
//       console.log("eror")
//       setVisible(true);
//       return;
//     }
//     if(e.year()<Date().toLocaleString().substr(11,4)){
//       console.log("eror")
//       setVisible(true);
//       return;
//     }
//         // if(e.month()<Date().toLocaleString().substr(11,4)){
//         //   console.log("eror")
//     // }
//     else {
//       console.log(Date().toLocaleString());
//       console.log(e.month()+1);
//       setVisible(false);
//
//     }
//   }
//   return (
//
//       <>
//         <div className="field">
//           <Row>
//             <Col offset={7}>
//               <Calendar style={{width:300}} fullscreen={false} onChange={les} />
//               <DateRangePicker disabled={visible} placeholder="Select Date Range" onOk={e => console.log(e.valueOf())} format="HH:mm:ss"
//                                ranges={[]}/>
//             </Col>
//           </Row>
//
//         </div>
//       </>
//   );
// }



import * as React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import {useState} from "react";
import moment from "moment";
import {DateRangePicker} from "rsuite";
import {Col, Row} from "antd";
import {Paper} from "@mui/material";
import {Box, Container} from "@material-ui/core";
import './test.css';

export default function StaticDatePickerLandscape() {
  const [value, setValue] = useState(new Date());
  const [visible, setVisible] = useState(true);

  function les(e) {
    // if (e.year() < Date().toLocaleString().substr(11, 4)) {
    //   console.log("eror")
    //   setVisible(true);
    //   return;
    // }
    //     // if(e.month()<Date().toLocaleString().substr(11,4)){
    //     //   console.log("eror")
    // // }
    // else {
    //   console.log(Date().toLocaleString());
    //   console.log(e.month() + 1);
    //   setVisible(false);
    //
    // }
    console.log(moment(e).format('DD-MM-YYYY').substr(0,2))
    console.log(Date().toLocaleString())
  }

  return (
      <>
        <Container component={Box} p={4} style={{minHeight:500}}>
        <Paper component={Box} p={3}>
          <Row>
            <Col offset={2} span={10} style={{marginTop:50}}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                    orientation="landscape"
                    openTo="day"
                    value={value}
                    onChange={les}
                    renderInput={(params) => <TextField {...params} />}
                />

              </LocalizationProvider>
            </Col>
            <Col offset={2} span={6}>
              <DateRangePicker disabled={false} placeholder="Select Date Range" onOk={e => console.log(e.valueOf())} format="HH:mm:ss"
                               ranges={[]}/>
            </Col>
          </Row>

        </Paper>
        </Container>

      </>
  );
}