import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { upd } from '../Redux/FormReducer'
const Update = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  console.log('useParams', id)
  const [formdata, setformdata] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
  })
  const handlchange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
  }
  const handlsubmit = (e) => {
    e.preventDefault()
    dispatch(upd({ data: formdata, id: id }))

    localStorage.setItem('data', JSON.stringify(formdata))
    setformdata({
      FirstName: '',
      LastName: '',
      Email: '',
      PhoneNumber: '',
    })
  }
  return (
  
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto mt-5">
            <form className="row g-3 needs-validation" onSubmit={handlsubmit}>
              <div className="col-md-12">
                <label htmlFor="validationCustom01" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  name="FirstName"
                  required
                  maxLength={16}
                  minLength={3}
                  onChange={handlchange}
                  value={formdata.FirstName}
                />
                <div className="valid-feedback">plaese enter valid name</div>
              </div>
              <div className="12">
                <label htmlFor="validationCustom02" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  name="LastName"
                  required
                  maxLength={16}
                  minLength={3}
                  onChange={handlchange}
                  value={formdata.LastName}
                />

                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="12">
                <label
                  htmlFor="validationCustomUsername"
                  className="form-label"
                >
                  Username
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text" id="inputGroupPrepend">
                    @
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={handlchange}
                    name="Email"
                    value={formdata.Email}
                  />
                  <div className="invalid-feedback">
                    Please choose a username.
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <label htmlFor="validationCustom05" className="form-label">
                  PhoneNumber
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="validationCustom05"
                  required
                  min={10}
                  onChange={handlchange}
                  name="PhoneNumber"
                />
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
              </div>
              
              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Add Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    
  )
}

export default Update