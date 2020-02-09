import React from 'react'

const FormFooter = props => {
  const {
    previousButtonClick,
    nextButtonClick,
    resetButtonClick,
    currentStep,
  } = props

  return (
    <footer className="form__footer">
      {currentStep < 4 ? (
        <div className="form__controls">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={previousButtonClick}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={nextButtonClick}
          >
            Next
          </button>
        </div>
      ) : (
        <div className="form__controls">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={resetButtonClick}
          >
            Reset
          </button>
        </div>
      )}
    </footer>
  )
}

export default FormFooter
