import React from 'react'
import Field from './Field'

export default class FormBasic extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="form__body">
        <Field
          id="firstname"
          labelText="Firstname"
          type="text"
          placeholder="Enter firstname"
          name="firstname"
          value={this.props.values.firstname}
          onChange={this.props.onChange}
          error={this.props.errors.firstname}
        />
        <Field
          id="lastname"
          labelText="Lastname"
          type="text"
          placeholder="Enter lastname"
          name="lastname"
          value={this.props.values.lastname}
          onChange={this.props.onChange}
          error={this.props.errors.lastname}
        />
        <Field
          id="password"
          labelText="Password"
          type="password"
          placeholder="Enter password"
          name="password"
          value={this.props.values.password}
          onChange={this.props.onChange}
          error={this.props.errors.password}
        />
        <Field
          id="repeatPassword"
          labelText="Repeat Password"
          type="password"
          placeholder="Enter repeat password"
          name="repeatPassword"
          value={this.props.values.repeatPassword}
          onChange={this.props.onChange}
          error={this.props.errors.repeatPassword}
        />
        <fieldset className="form-group">
          <div className={this.props.errors.gender ? 'warn' : null}>Gender</div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={this.props.values.gender === 'male'}
              onChange={this.props.onChange}
              error={this.props.errors.gender}
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
              checked={this.props.values.gender === 'female'}
              onChange={this.props.onChange}
              error={this.props.errors.gender}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
          {this.props.errors.gender ? (
            <div className="invalid-feedback">{this.props.errors.gender}</div>
          ) : null}
        </fieldset>
      </div>
    )
  }
}
