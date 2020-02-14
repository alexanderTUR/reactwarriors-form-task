import React from 'react'
import cx from 'classnames'

const FormAvatar = props => {
  const { values, errors, onChange } = props

  const onChangeAvatar = e => {
    const reader = new FileReader()
    reader.onload = e => {
      onChange({
        target: {
          name: 'avatar',
          value: e.target.result,
        },
      })
    }
    reader.readAsDataURL(e.target.files[0])
  }

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
          className={cx('custom-file-label', {
            'form-control_invalid': errors.avatar,
          })}
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
