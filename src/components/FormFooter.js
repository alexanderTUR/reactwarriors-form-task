import React from 'react'

const FormFooter = props => {
  const { previousButtonClick, nextButtonClick } = props

  return (
    <footer className="form__footer">
      <div className="form__controls">
        <button
          className="btn btn-secondary"
          type="button"
          onClick={previousButtonClick}
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
    </footer>
  )
}

export default FormFooter
