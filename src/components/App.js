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

  switchSteps = () => {
    console.log(this.state.currentStep)
  }

  previousButtonClick = () => {
    console.log('Prev clicked')
    if (this.state.currentStep > 1) {
      this.setState({
        currentStep: this.state.currentStep - 1,
      })
      // this.setState((prevState, props) => {
      // console.log(prevState)
      // currentStep: prevState.state.currentStep - 1,
      // })
      // this.switchSteps()
    }
  }

  nextButtonClick = () => {
    console.log('Next clicked')
    if (this.state.currentStep < Object.keys(this.state.steps).length) {
      this.setState({
        currentStep: this.state.currentStep + 1,
      })
      this.switchSteps()
    }
  }

  resetButtonClick = () => {
    console.log('Reset clicked')
    this.setState({
      currentStep: 1,
    })
    this.switchSteps()
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
            resetButtonClick={this.resetButtonClick}
            currentStep={this.state.currentStep}
          />
        </form>
      </div>
    )
  }
}
