import React from 'react'
import Field from './Field'

export default class FormBasic extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    // console.log(props)
  }

  render() {
    return (
      <div className="form__body">
        <Field
          id="firstname"
          labelText="Firstname"
          type="text"
          placeholder="Enter Firstname"
          name="firstname"
          value={this.props.values.firstname}
          onChange={this.props.onChange}
          // error={this.state.errors.username}
        />
      </div>
    )
  }
}
