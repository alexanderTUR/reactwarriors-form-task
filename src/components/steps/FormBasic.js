import React from 'react'
import Field from '../elements/Field'

const FormBasic = props => {
  const { values, errors, onChange } = props
  return (
    <div className="form__body">
      <Field
        id="firstname"
        labelText="Firstname"
        type="text"
        placeholder="Enter firstname"
        name="firstname"
        value={values.firstname}
        onChange={onChange}
        error={errors.firstname}
      />
      <Field
        id="lastname"
        labelText="Lastname"
        type="text"
        placeholder="Enter lastname"
        name="lastname"
        value={values.lastname}
        onChange={onChange}
        error={errors.lastname}
      />
      <Field
        id="password"
        labelText="Password"
        type="password"
        placeholder="Enter password"
        name="password"
        value={values.password}
        onChange={onChange}
        error={errors.password}
      />
      <Field
        id="repeatPassword"
        labelText="Repeat Password"
        type="password"
        placeholder="Enter repeat password"
        name="repeatPassword"
        value={values.repeatPassword}
        onChange={onChange}
        error={errors.repeatPassword}
      />
      <fieldset className="form-group">
        <div className={errors.gender ? 'warn' : null}>Gender</div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={values.gender === 'male'}
            onChange={onChange}
            error={errors.gender}
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={values.gender === 'female'}
            onChange={onChange}
            error={errors.gender}
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
        {errors.gender ? (
          <div className="invalid-feedback">{errors.gender}</div>
        ) : null}
      </fieldset>
    </div>
  )
}

export default FormBasic
