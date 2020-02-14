import React from 'react'
import avatar from '../img/empty-avatar.png'
import FormHeader from './layouts/FormHeader'
import FormBasic from './steps/FormBasic'
import FormContacts from './steps/FormContacts'
import FormAvatar from './steps/FormAvatar'
import FormFinish from './steps/FormFinish'
import FormFooter from './layouts/FormFooter'

export default class App extends React.Component {
  constructor() {
    super()

    this.initialState = {
      currentStep: 1,
      values: {
        firstname: '',
        lastname: '',
        password: '',
        repeatPassword: '',
        gender: '',
        email: '',
        mobile: '',
        country: '0',
        city: '0',
        avatar: avatar,
      },
      errors: {},
    }
    this.state = { ...this.initialState }
  }

  onChangeAvatar = e => {
    const reader = new FileReader()
    reader.onload = e => {
      this.setState({
        values: {
          ...this.state.values,
          avatar: e.target.result,
        },
        errors: {
          ...this.state.errors,
          avatar: '',
        },
      })
    }
    reader.readAsDataURL(e.target.files[0])
  }

  onChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: '',
      },
    })
  }

  checkErrors = () => {
    const errors = {}
    const mailRe = /\S+@\S+\.\S+/
    const telRe = /^([+]\d{2})?\d{10}$/
    switch (this.state.currentStep) {
      case 1:
        if (this.state.values.firstname.length === 0) {
          errors.firstname = 'Required'
        }
        if (
          this.state.values.firstname.length > 0 &&
          this.state.values.firstname.length < 5
        ) {
          errors.firstname = 'Must be 5 characters or more'
        }
        if (this.state.values.lastname.length === 0) {
          errors.lastname = 'Required'
        }
        if (
          this.state.values.lastname.length > 0 &&
          this.state.values.lastname.length < 5
        ) {
          errors.lastname = 'Must be 5 characters or more'
        }
        if (this.state.values.password.length === 0) {
          errors.password = 'Required'
        }
        if (
          this.state.values.password.length > 0 &&
          this.state.values.password.length < 6
        ) {
          errors.password = 'Must be 6 characters or more'
        }
        if (this.state.values.repeatPassword !== this.state.values.password) {
          errors.repeatPassword = 'Must be equal password'
        }
        if (this.state.values.gender.length === 0) {
          errors.gender = 'Required'
        }
        break
      case 2:
        if (this.state.values.email.length === 0) {
          errors.email = 'Required'
        }
        if (
          this.state.values.email.length > 0 &&
          !mailRe.test(this.state.values.email)
        ) {
          errors.email = 'Invalid email'
        }
        if (this.state.values.mobile.length === 0) {
          errors.mobile = 'Required'
        }
        if (
          this.state.values.mobile.length > 0 &&
          !telRe.test(this.state.values.mobile)
        ) {
          errors.mobile = 'Invalid mobile (should be 10 numeric)'
        }
        if (this.state.values.country === '0') {
          errors.country = 'Required'
        }
        if (this.state.values.city === '0') {
          errors.city = 'Required'
        }
        break
      case 3:
        if (this.state.values.avatar === avatar) {
          errors.avatar = 'Required'
        }
        break
      default:
        return null
    }
    return errors
  }

  handlePreviousStep = () => {
    this.setState({
      currentStep: this.state.currentStep - 1,
    })
  }

  handleNextStep = () => {
    const errors = this.checkErrors()
    if (Object.keys(errors).length) {
      this.setState({
        errors,
      })
    } else {
      this.setState({
        errors,
        currentStep: this.state.currentStep + 1,
      })
    }
  }

  handleReset = () => {
    this.setState(this.initialState)
  }

  render() {
    return (
      <div className="form-container card">
        <form className="form card-body">
          <FormHeader currentStep={this.state.currentStep} />
          {this.state.currentStep === 1 ? (
            <FormBasic
              values={this.state.values}
              errors={this.state.errors}
              onChange={this.onChange}
            />
          ) : this.state.currentStep === 2 ? (
            <FormContacts
              values={this.state.values}
              errors={this.state.errors}
              onChange={this.onChange}
            />
          ) : this.state.currentStep === 3 ? (
            <FormAvatar
              values={this.state.values}
              errors={this.state.errors}
              onChangeAvatar={this.onChangeAvatar}
            />
          ) : (
            <FormFinish values={this.state.values} />
          )}
          <FormFooter
            handlePreviousStep={this.handlePreviousStep}
            handleNextStep={this.handleNextStep}
            handleReset={this.handleReset}
            currentStep={this.state.currentStep}
          />
        </form>
      </div>
    )
  }
}
