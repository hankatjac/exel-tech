import React, { useInsertionEffect, useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
// import { v4 as uuidV4 } from 'uuid'

export default function Login({ onIdSubmit }) {
  const idRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    // console.log(idRef.current.value)
 
    
    if ((idRef.current.value).trim().toUpperCase() == "ADMIN") {

      let psw = prompt("Please enter password:");
      if (psw == '123456') {
        onIdSubmit('Admin')
      } else {
        alert('password required');
      }
    }
else

    onIdSubmit(idRef.current.value)

  }


  // function createNewId() {
  //   onIdSubmit(uuidV4())
  // }



  return (
    <Container className="align-items-center d-flex">
      <Form onSubmit={handleSubmit} className="w-100">

        <Form.Group>
          <Form.Label>Please Enter Your Name</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="mr-2">Go</Button>

      </Form>
    </Container>
  )
}
