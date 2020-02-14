import React from 'react'
import countries from '../../data/countries'
import cities from '../../data/cities'

const FormFinish = props => {
  const { values } = props

  const getCountryName = id =>
    countries.find(item => Number(item.id) === Number(id)).name

  const getCityName = id => cities[id].name

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
            <h4>{`${values.firstname} ${values.lastname}`}</h4>
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
              {`${getCountryName(values.country)}, ${getCityName(values.city)}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormFinish
