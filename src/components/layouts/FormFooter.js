import React from 'react'

const FormFooter = props => {
  const { handlePreviousStep, handleNextStep, handleReset, currentStep } = props

  return (
    <footer className="form__footer">
      {currentStep < 4 ? (
        <div className="form__controls">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={handlePreviousStep}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={handleNextStep}
          >
            Next
          </button>
        </div>
      ) : (
        <div className="form__controls">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      )}
    </footer>
  )
}

export default FormFooter
