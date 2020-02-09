import React from 'react'

const FormHeader = props => {
  const { steps } = props

  const stepClasses = step => {
    let result = 'form__steps-item step'
    if (step.isActive) result += ' step_active'
    if (step.isCompleted) result += ' step_completed'
    return result
    // return `form__steps-item step ${step.isActive ? 'step_active' : ''} ${
    //   step.isCompleted ? 'step_completed' : ''
    // }`
  }

  return (
    <header className="form__header">
      <ul className="form__steps-list">
        {steps.map(step => {
          return (
            <li className={stepClasses(step)} key={step.id}>
              <div className="step__number">{step.id}</div>
              <div className="step__title">{step.name}</div>
            </li>
          )
        })}
      </ul>
    </header>
  )
}

export default FormHeader
