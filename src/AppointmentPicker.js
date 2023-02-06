import PropTypes from "prop-types";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentPicker.css';
import { DayPane } from './components/DayPane';

import { useState } from 'react';

function tileContent({ date, view }) {
  // Add class to tiles in month view only
  console.log(date, view)
  if (view === 'month') {
    // TODO: add logic which dot to add
    return <div>
      { Math.random() > 0.5 ? <div className="dot-morning"></div> : <div className="dot-spacer"></div> }
      { Math.random() > 0.5 ? <div className="dot-afternoon"></div> : <div className="dot-spacer"></div> }
      { Math.random() > 0.5 ? <div className="dot-evening"></div> : <div className="dot-spacer"></div> }
    </div>
  }
}

const AppointmentPicker = (props) => {
  // state is local to this widget
  const [value, setValue] = useState(new Date());

  console.log('props.dates is ', props.dates)

  function handleChange(nextValue) {
    console.log('value has changed to', value);
    setValue(nextValue);
  }

  return <div className='flex-picker'>
    <Calendar
      onChange={handleChange}
      value={value}
      tileContent={tileContent}
    />
    <DayPane />
  </div>
};

export default AppointmentPicker;