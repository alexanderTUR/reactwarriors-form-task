import React from 'react'
import FormHeader from './FormHeader'
import FormBody from './FormBody'
import FormFooter from './FormFooter'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentStep: 1,
      steps: [
        { id: 1, isActive: true, isCompleted: false, name: 'basic' },
        { id: 2, isActive: false, isCompleted: false, name: 'contacts' },
        { id: 3, isActive: false, isCompleted: false, name: 'avatar' },
        { id: 4, isActive: false, isCompleted: false, name: 'finish' },
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

  previousButtonClick = () => {
    console.log('Prev clicked')
    if (this.state.currentStep > 1) {
      this.setState({
        currentStep: this.state.currentStep - 1,
      })
    }
  }

  nextButtonClick = () => {
    console.log('Next clicked')
    if (this.state.currentStep < Object.keys(this.state.steps).length) {
      this.setState({
        currentStep: this.state.currentStep + 1,
      })
    }
  }

  render() {
    return (
      <div className="form-container card">
        <form className="form card-body">
          <FormHeader steps={this.state.steps} />
          <FormBody />
          <FormFooter
            previousButtonClick={this.previousButtonClick}
            nextButtonClick={this.nextButtonClick}
          />
        </form>
      </div>
    )
  }
}
