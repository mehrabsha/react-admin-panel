import DatePicker, { Calendar, DateObject } from 'react-multi-date-picker';

import gregorian from 'react-date-object/calendars/gregorian';
import gregorian_en from 'react-date-object/locales/gregorian_en';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';

import persian from 'react-date-object/calendars/persian';
import persian_en from 'react-date-object/locales/persian_en';
import { ElementType, useEffect, useState } from 'react';
import { ElementFlags } from 'typescript';

interface props {
  value: string;
  setFieldValue: Function;
  name: string;
}

function MyPlugin({ setProps, props }: any) {
  const isPersian = props.calendar === persian;
  console.log(isPersian);
  const handleChange = (e: any) => {
    if (isPersian) {
      setProps({
        ...props,
        calendar: gregorian,
        locale: gregorian_en
      });
    } else {
      setProps({
        ...props,
        calendar: persian,
        locale: persian_en
      });
    }
  };
  return (
    <div className="d-flex flex-row justify-content-between py-4 mx-4">
      <label className="form-check-label text-left" htmlFor="useShamsi">
        use persian calendar
      </label>
      <input
        onChange={handleChange}
        checked={isPersian}
        className="form-check-input"
        type="checkbox"
        id="useShamsi"
      />
    </div>
  );
}
function CustomDatePicker({ value, setFieldValue, name }: props) {
  const [props, setProps] = useState({
    calendar: persian,
    locale: persian_en,
    calendarPosition: 'bottom-right'
  });

  useEffect(() => {
    console.log(value);

    const date = new DateObject({
      calendar: props.calendar,
      locale: props.locale
    });
    value || setFieldValue(name, date.format());
  }, [value]);

  return (
    <DatePicker
      containerStyle={{ display: 'block' }}
      render={<CustomInput />}
      name={name}
      id={name}
      onChange={val => {
        setFieldValue(name, val?.toString());
      }}
      value={value || new Date()}
      {...props}
      plugins={[
        <MyPlugin setProps={setProps} props={props} position="bottom" />
      ]}
    />
  );
}

function CustomInput({ openCalendar, value, handleValueChange }: any) {
  return (
    <input
      className="form-control"
      placeholder="2021/12/04"
      onFocus={openCalendar}
      value={value}
      onChange={handleValueChange}
    />
  );
}
export default CustomDatePicker;
