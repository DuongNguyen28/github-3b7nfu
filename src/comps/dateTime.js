//imports reacts for the project
import React from 'react';
// import materials
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import components
import DatePicker from '@mui/lab/DatePicker';

// export master
export default function BasicDatePicker(props) {
  let [date, setDate] = React.useState(props.dataFromParent);
  //return the master
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Deadline"
        value={date}
        onChange={(e) => {
          setDate(e);
          props.dataToParent(e);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
