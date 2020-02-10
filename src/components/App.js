import React from 'react'
// import countries from '../data/countries'
// import cities from '../data/cities'
import FormHeader from './FormHeader'
import FormBasic from './FormBasic'
import FormContacts from './FormContacts'
import FormAvatar from './FormAvatar'
import FormFinish from './FormFinish'
import FormFooter from './FormFooter'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
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
        gender: 'male',
        email: '',
        mobile: '',
        country: '',
        city: '',
        avatar: null,
        age: 16,
      },
      errors: {},
    }
  }

  onChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    })
  }

  checkErrors = () => {
    const errors = {}
    if (this.state.values.firstname.length === 0) {
      errors.firstname = 'Required'
    }
    if (
      this.state.values.firstname.length > 0 &&
      this.state.values.firstname.length < 5
    ) {
      errors.firstname = 'Must be 5 characters or more'
    }
    this.setState({
      errors: errors,
    })
  }

  previousButtonClick = () => {
    console.log('Prev clicked')
    this.setState({
      currentStep: this.state.currentStep - 1,
    })
  }

  nextButtonClick = () => {
    console.log('Next clicked')
    this.checkErrors()
    if (!Object.keys(this.state.errors).length) {
      this.setState({
        currentStep: this.state.currentStep + 1,
      })
    }
  }

  resetButtonClick = () => {
    console.log('Reset clicked')
    this.setState({
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
            <FormContacts />
          ) : this.state.currentStep === 3 ? (
            <FormAvatar />
          ) : (
            <FormFinish />
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
