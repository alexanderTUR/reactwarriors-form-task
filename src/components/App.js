import React from 'react'
import countries from '../data/countries'
import cities from '../data/cities'
import avatar from '../img/empty-avatar.png'
import FormHeader from './FormHeader'
import FormBasic from './FormBasic'
import FormContacts from './FormContacts'
import FormAvatar from './FormAvatar'
import FormFinish from './FormFinish'
import FormFooter from './FormFooter'

export default class App extends React.Component {
  constructor() {
    super()

    this.initialState = {
      countries: countries,
      cities: cities,
      currentStep: 1,
      steps: [
        { id: 1, name: 'basic' },
        { id: 2, name: 'contacts' },
        { id: 3, name: 'avatar' },
        { id: 4, name: 'finish' },
      ],
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

  getCountries = items => {
    return items.map(item => (
      <option value={item.id} key={item.id}>
        {item.name}
      </option>
    ))
  }

  getCities = items => {
    const citiesArray = Object.entries(items)
    const filtredCities = citiesArray.filter(elem => {
      return elem[1].country === +this.state.values.country
    })
    return filtredCities.map(item => (
      <option value={item[0]} key={item[0]}>
        {item[1].name}
      </option>
    ))
  }

  getCountryName = id => {
    const result = this.state.countries.find(item => item.id === +id)
    return result.name
  }

  getCityName = id => {
    return this.state.cities[id].name
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

  previousButtonClick = () => {
    console.log('Prev clicked')
    this.setState({
      currentStep: this.state.currentStep - 1,
    })
  }

  nextButtonClick = () => {
    console.log('Next clicked')
    if (Object.keys(this.checkErrors()).length) {
      this.setState({
        errors: this.checkErrors(),
      })
    } else {
      this.setState({
        errors: this.checkErrors(),
        currentStep: this.state.currentStep + 1,
      })
    }
  }

  resetButtonClick = () => {
    console.log('Reset clicked')
    this.setState({
      values: {
        ...this.initialState.values,
      },
      errors: {
        ...this.initialState.errors,
        avatar: '',
      },
      currentStep: 1,
    })
  }

  render() {
    return (
      <div className="form-container card">
        <form className="form card-body">
          <FormHeader
            steps={this.state.steps}
            currentStep={this.state.currentStep}
          />
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
              countries={this.state.countries}
              cities={this.state.cities}
              getCountries={this.getCountries}
              getCities={this.getCities}
            />
          ) : this.state.currentStep === 3 ? (
            <FormAvatar
              values={this.state.values}
              errors={this.state.errors}
              onChangeAvatar={this.onChangeAvatar}
            />
          ) : (
            <FormFinish
              values={this.state.values}
              getCountryName={this.getCountryName}
              getCityName={this.getCityName}
            />
          )}
          <FormFooter
            previousButtonClick={this.previousButtonClick}
            nextButtonClick={this.nextButtonClick}
            resetButtonClick={this.resetButtonClick}
            currentStep={this.state.currentStep}
          />
        </form>
      </div>
    )
  }
}
