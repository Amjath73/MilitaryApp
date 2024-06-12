import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewAll = () => {
      const [data, setData] = useState([])
    const fetchData = () => {
        axios.get("http://localhost:8081/view").then(
            (response) => {
                console.log(response.data)
                setData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    useEffect(()=> { fetchData() }, [])
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">studentId</th>
                                    <th scope="col">name</th>
                                    <th scope="col">dob</th>
                                    <th scope="col">address</th>
                                    <th scope="col">pincode</th>
                                    <th scope="col">state</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value,index)=>{
                                        return  <tr>
                                        <td>{value.studentId}</td>
                                        <td>{value.name}</td>
                                        <td>{value.dob}</td>
                                        <td>{value.address}</td>
                                        <td>{value.pincode}</td>
                                        <td>{value.state}</td>
                                    </tr>

                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
      
    </div>
  )
}

export default ViewAll
