import React from 'react'
import { useState } from 'react';



const Home = () => {

    // const [data, setData] = useState('');  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');



    const handleSubmit = (e) => {
        
        
        e.preventDefault();
        let data = {
            name,
            email,
            gender
        }
        
        localStorage.setItem(data.name, JSON.stringify(data))
        

    };

    return (
        <div className='container'>
      
                        <label htmlFor='exampleInputName' className='form-label'>
                            Student Name
                        </label>
                    <div className='mb-3'>
                        <input type='text'
                            onChange={(e) => setName(e.target.value)}
                            className='form-control'
                            placeholder='Name..'
                            id='exampleInputName' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email

                        </label>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder='Email..'
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="d-flex flex-row">
                            Gender :
                        <div className="form-check ms-2">
                            <input
                                className="form-check-input"
                                onChange={(e) => setGender(e.target.value)}
                                type="checkbox"
                                name="Gender"
                                value="Male"
                                id="flexCheckBoxDefault1"
                            />
                            <label className="form-check-label" htmlFor="flexCheckBoxDefault1">
                                Male
                            </label>
                        </div>
                        <div className="form-check ms-2">
                            <input
                                className="form-check-input"
                                onChange={(e) => setGender(e.target.value)}
                                type="checkbox"
                                name="Gender"
                                value="Female"
                                id="flexCheckBoxDefault2"
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Female
                            </label>
                        </div>
                        
                    </div>
                        <br />
                        <button
                            type="submit"
                            className="btn btn-success"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>

    </div>
    )
}



export default Home;