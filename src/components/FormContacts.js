import React from 'react'
import Field from './Field'

export default class FormContacts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  getOptionItems = items => {
    return items.map(item => (
      <option value={item.id} key={item.id}>
        {item.name}
      </option>
    ))
  }

  render() {
    return (
      <div className="form__body">
        <Field
          id="email"
          labelText="Email"
          type="email"
          placeholder="Enter email"
          name="email"
          value={this.props.values.email}
          onChange={this.props.onChange}
          error={this.props.errors.email}
        />
        <Field
          id="mobile"
          labelText="Mobile"
          type="text"
          placeholder="Enter mobile"
          name="mobile"
          value={this.props.values.mobile}
          onChange={this.props.onChange}
          error={this.props.errors.mobile}
        />
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            className="form-control"
            name="country"
            value={this.props.values.country}
            onChange={this.props.onChange}
          >
            {this.getOptionItems(this.props.values.country)}
          </select>
        </div>
      </div>
    )
  }
}
