import React from 'react'
import cx from 'classnames'
import stepsNames from '../../data/stepsNames'

const FormHeader = props => {
  const { currentStep } = props

  return (
    <header className="form__header">
      <ul className="form__steps-list">
        {stepsNames.map((stepName, index) => {
          return (
            <li
              className={cx('form__steps-item step', {
                step_active: currentStep === index + 1,
                step_completed: currentStep > index + 1,
              })}
              key={index}
            >
              <div className="step__number">{index + 1}</div>
              <div className="step__title">{stepName}</div>
            </li>
          )
        })}
      </ul>
    </header>
  )
}

export default FormHeader
