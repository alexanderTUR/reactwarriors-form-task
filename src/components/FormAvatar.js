import React from 'react'

const FormAvatar = props => {
  const { values, errors, onChangeAvatar } = props

  return (
    <div className="form__body">
      <div className="form__avatar">
        <img src={values.avatar} alt="Avatar" />
      </div>
      <div className="form-group">
        <input
          type="file"
          className="custom-file-input"
          id="avatar"
          onChange={onChangeAvatar}
        />
        <label
          htmlFor="avatar"
          className={
            errors.avatar
              ? 'custom-file-label form-control_invalid'
              : 'custom-file-label'
          }
        >
          Choose Avatar
        </label>
        {errors.avatar ? (
          <div className="invalid-feedback">{errors.avatar}</div>
        ) : null}
      </div>
    </div>
  )
}

export default FormAvatar
