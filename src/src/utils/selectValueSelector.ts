//it's a util for passing value to Select component with formik, Select component want a value with {value, lable} but formik just returns a string.

//Example:
// <Select
//   value={selectValueSelector(currncyOptions, formik.values.crypto)}
//   onChange={value => formik.setFieldValue('crypto', value?.value)}
//   options={currncyOptions}
//   name="crypto"
//   id="crypto"
//   placeholder="select currency ..."
//   classNamePrefix="form-controlaaa"
//   />

interface SelectOption {
    value: string;
    label: string;
}

const selectValueSelector = (options: SelectOption[], value: string) =>
    options
        ? options.find(option => option.value === value)
        : { value: '', label: '' };

export default selectValueSelector