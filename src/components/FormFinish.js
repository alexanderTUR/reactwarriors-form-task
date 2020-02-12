import React from 'react'

const FormFinish = props => {
  const { values, getCountryName, getCityName } = props
  return (
    <div className="form__body">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="form__avatar">
              <img src={values.avatar} alt="Avatar" />
            </div>
          </div>
          <div className="col-8 d-flex align-items-center">
            <h4>{values.firstname + ' ' + values.lastname}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>
              <strong>Email: </strong>
              {values.email}
            </p>
            <p>
              <strong>Mobile: </strong>
              {values.mobile}
            </p>
            <p>
              <strong>Location: </strong>
              {getCountryName(values.country) + ', ' + getCityName(values.city)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormFinish
