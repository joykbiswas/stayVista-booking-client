/* eslint-disable react/prop-types */

import { DateRange } from 'react-date-range'

const Calendar = ({ value }) => {
  return (
    <DateRange
    ranges={[value]}
      rangeColors={['#F43F5E']}
      onChange={console.log}
    //   date={value.startDate}
      direction='vertical'
      showDateDisplay={false}
    //   minDate={value.startDate}
    //   maxDate={value.endDate}
    />
  )
}

export default Calendar