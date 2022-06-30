import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";




const UserList = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    // const newData = JSON.stringify()
    setData(Object.keys(localStorage))
  }, [])
  // console.log(data)

  

  return (
    <>
      <div className="container-content">
        <div className="border mt-4 p-4">
          <h2 className="text-center mb-3">
            Student Management System
          </h2>
          {data.lentgh === 0 ? null : data.map(x => {
            return (
              <>
                <Table>
                  <tbody>
                    <tr>
                      <LocalData
                        item={x} />
                    </tr>
                  </tbody>
                </Table>

              </>
            )
          })}
        </div>
      </div>
    </>
  );
};


const LocalData = (props) => {

  const [data, setData] = useState({})

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(props.item))
    setData(data)
  }, [])
  

 
  const removeItems = () => {
    localStorage.removeItem(data);
  }
  



  return (

    <>
      <Table>
        <tbody>
          <tr>
            <div className="ms-4" >
              <h5>
                <td> Name: {data.name} </td>
              </h5>
              <h5>
                <td> Email: {data.email} </td>
              </h5>
              <h5>
                <td> Gender: {data.gender} </td>
              </h5>
            </div>
          </tr>
        </tbody>
      </Table>
      <Link
        className='btn btn-primary'
        to={`/UserList/edit`}>
        Edit
      </Link>

      <button
        type="button"
        onClick={() => removeItems}
        // onClick={removeItem()}
        class="btn btn-outline-danger"
      >

        Delete
      </button>

    </>
  )
}


export default UserList;