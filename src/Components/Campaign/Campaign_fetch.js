import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Campaign_fetch() {



  const [prdData, setPrddata] = useState({
    name: "",
    price: "",
    description: ""
  });



  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://php83.example.com//product/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(prdData)
    })
      .then((response) => {
        if (response.ok) {
          console.log('details is added');
          alert('Details added successfully');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target; // Destructuring the event target correctly
    setPrddata((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const [details, setdetails] = useState([])

  useEffect(() => {
    axios.get('http://php83.example.com//product/')
      .then((response) => {
        setdetails(response.data)
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  })


  return (





    <div>

      <table className='tbl' border="2" cellPadding='8' cellSpacing='12'>
        {details.map((i) => (
          <div>

            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th colSpan={2}>Action</th>
            </tr>
            <tr>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{i.description}</td>
              <td>{i.price}</td>
              <td>

                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  ADD
                </button>


                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Product Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">

                        <form onSubmit={handleSubmit}>
                          <div>
                            <input type="text" placeholder='Enter product name' name="name" id="name" onChange={handleChange} value={prdData.name}></input>
                          </div>

                          <div>
                            <input type="number" placeholder='Enter product price' name="price" id="price" onChange={handleChange} value={prdData.price}></input>
                          </div>

                          <div>
                            <input type="text" placeholder='Enter product price' name="price" id="price" onChange={handleChange} value={prdData.description}></input>
                          </div>

                          <div>
                            <input type="checkbox" name="category" id="category" value={prdData.category}></input>
                          </div>
                        </form>


                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-primary">SUbmit</button>
                      </div>
                    </div>
                  </div>
                </div>


              </td>
            </tr>

          </div>
        ))}
      </table>

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add
      </button>



      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Servicer</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="departmentform" name="departmentform" class="n">

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Name</label>
                  <input type="text" class="form-control p-3" id="servicerName"
                    name="servicerName" placeholder="Enter name" />
                </div>

                <div class="col-auto d-flex justify-content-center align-item-center pt-3">
                  <button type="submit" class="btn btn-primary submitbtn"
                    id="submitbtn">submit</button>
                  <button type="submit" class="btn btn-primary updatebtn" id="updatebtn"
                    data-bs-dismiss="modal">Update</button>

                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>


      
    </div>





  )
}

export default Campaign_fetch
