import React from 'react'
import Field from './Field'

const FormContacts = props => {
  const {
    values,
    errors,
    onChange,
    countries,
    cities,
    getCountries,
    getCities,
  } = props

  return (
    <div className="form__body">
      <Field
        id="email"
        labelText="Email"
        type="email"
        placeholder="Enter email"
        name="email"
        value={values.email}
        onChange={onChange}
        error={errors.email}
      />
      <Field
        id="mobile"
        labelText="Mobile"
        type="text"
        placeholder="Enter mobile"
        name="mobile"
        value={values.mobile}
        onChange={onChange}
        error={errors.mobile}
      />
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <select
          id="country"
          className={
            errors.country
              ? 'form-control form-control_invalid'
              : 'form-control'
          }
          name="country"
          value={values.country}
          onChange={onChange}
        >
          <option value="0" key="0">
            Select country
          </option>
          {getCountries(countries)}
        </select>
        {errors.country ? (
          <div className="invalid-feedback">{errors.country}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <select
          id="city"
          className={
            errors.city ? 'form-control form-control_invalid' : 'form-control'
          }
          name="city"
          value={values.city}
          onChange={onChange}
        >
          <option value="0" key="0">
            Select city
          </option>
          {getCities(cities)}
        </select>
        {errors.city ? (
          <div className="invalid-feedback">{errors.city}</div>
        ) : null}
      </div>
    </div>
  )
}

export default FormContacts
