import React from 'react'
import cx from 'classnames'
import FormField from '../elements/FormField'
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
  
  // const getCities = items =>
  //   Object.entries(items)
  //     .filter(elem => Number(elem[1].country) === Number(props.values.country))
  //     .map(item => ({
  //       id: item[0],
  //       name: item[1].name,
  //     }))

  const getCities = items => {
    return Object.keys(items).reduce((acc, cur, i) => {
      if (items[cur].country === Number(props.values.country)) {
        acc.push({ id: i, name: items[cur].name })
      }
      return acc
    }, [])
  }

  return (
    <div className="form__body">
      <FormField
        id="email"
        labelText="Email"
        type="email"
        placeholder="Enter email"
        name="email"
        value={values.email}
        onChange={onChange}
        error={errors.email}
      />
      <FormField
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
          <option value="" key="0">
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
          className={cx('form-control', {
            'form-control_invalid': errors.city,
          })}
          name="city"
          value={values.city}
          onChange={onChange}
        >
          <option value="" key="0">
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
