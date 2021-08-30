import DatePicker, { Calendar } from 'react-multi-date-picker';

import Gregorian from 'react-date-object/calendars/gregorian';
import gregorian_en from 'react-date-object/locales/gregorian_en';

import persian from 'react-date-object/calendars/persian';
import persian_en from 'react-date-object/locales/persian_en';

function CustomDatePicker() {
  return (
    <DatePicker
      containerStyle={{ display: 'block' }}
      calendar={persian}
      locale={persian_en}
      render={<CustomInput />}
    />
  );
}

function CustomInput({ openCalendar, value, handleValueChange }: any) {
  return (
    <input
      className="form-control"
      id="network"
      name="network"
      placeholder="2021/12/04"
      onFocus={openCalendar}
      value={value}
      onChange={handleValueChange}
    />
  );
}
export default CustomDatePicker;
