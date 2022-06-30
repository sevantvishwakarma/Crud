import React, { useEffect } from 'react';
// import { useState, useEffect } from 'react';



const Edit = ({data, setData}) => {
  
  useEffect (() => {
    const data = JSON.parse(localStorage.getItem(data.val))
    setData(data)
  }, [])

  return (
    <div className='container'>
    
    <>
    Name : <p>{localStorage.getItem(data.name)}</p>
    </>

    </div>
  )
}



export default Edit;





{/* <h2>Retrieve Data</h2>

  {localStorage.getItem('Name') && (
    <div>
      Name : <p>{localStorage.getItem(data.name)}</p>
    </div>
  )}

  {localStorage.getItem('Email') && (
    <div>
      Email : <p>{localStorage.getItem(data.email)}</p>
    </div>
  )}

  {localStorage.getItem('Gender') && (
    <div>
      Gender : <p>{localStorage.getItem(data.gender)}</p>
    </div>
  )} */}