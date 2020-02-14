import React from 'react'
import cx from 'classnames'
import Field from '../elements/Field'
import countries from '../../data/countries'
import cities from '../../data/cities'

const FormContacts = props => {
  const { values, errors, onChange } = props

  const getOptions = items => {
    return items.map(item => (
      <option value={item.id} key={item.id}>
        {item.name}
      </option>
    ))
  }

  // TODO Try Object.keys and reduse
  const getCities = items =>
    Object.entries(items)
      .filter(elem => Number(elem[1].country) === Number(props.values.country))
      .map(item => ({
        id: item[0],
        name: item[1].name,
      }))

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
          className={cx('form-control', {
            'form-control_invalid': errors.country,
          })}
          name="country"
          value={values.country}
          onChange={onChange}
        >
          <option value="0" key="0">
            Select country
          </option>
          {getOptions(countries)}
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
          {getOptions(getCities(cities))}
        </select>
        {errors.city ? (
          <div className="invalid-feedback">{errors.city}</div>
        ) : null}
      </div>
    </div>
  )
}

export default FormContacts
