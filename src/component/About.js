import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { remove } from '../Redux/FormReducer'

const About = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const responsive = useSelector((store) => store.user)
  console.log(responsive)
  const deletedata = (index) => {
    dispatch(remove(index))
    console.log(index)
  }
  const updatedata = (index) => {
    navigate(`/update${index}`)
  }
  const talbe = {
    butttonupdate: {
      borderRadius: '12px',
      padding: '4px 12px',
      border: 'none',
      backgroundColor: 'yellow',
      color: 'black',
    },
    butttondelete: {
      borderRadius: '12px',
      padding: '4px 12px',
      border: 'none',
      backgroundColor: 'red',
      color: '#fff',
    },
  }
  return (
      <div className="container mt-1 px-1" style={{ overflowX: 'auto' }}>
        <table class="table table-hover  ">
          <thead className='text-center'>
            <tr>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">NUMBER</th>
              <th scope="col">UPDATE</th>
              <th scope="col">REMOVE </th>
            </tr>
          </thead>
          <tbody>
            {responsive.map((cur, index) => {
              return (
                  <tr>
                    <th scope="row">{`${cur.FirstName}  ${cur.LastName}`}</th>
                    <td>{cur.Email}</td>
                    <td>{cur.PhoneNumber}</td>
                    <td>
                      <button
                        onClick={() => updatedata(index)}
                        style={talbe.butttonupdate}
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => deletedata(index)}
                        style={talbe.butttondelete}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
              )
            })}
          </tbody>
        </table>
      </div>
  )
}

export default About;