import React from 'react';
// react component plugin for creating a beautiful datetime dropdown picker
import Datetime from "react-datetime";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
// @material-ui/icons
// core components

 class DateTimePicker extends React.Component {


  onChangeDate = (e) =>{
      this.props.onChangeDate()
}

  render(){
    return (
    <div>
      <InputLabel >
        Datetime Picker
      </InputLabel>
      <br />
      <FormControl fullWidth>
        <Datetime
          inputProps={{ placeholder: "Datetime Picker Here", name:"dateTime" }}
        />
      </FormControl>
    </div>
  );
  }
 }


export default DateTimePicker;