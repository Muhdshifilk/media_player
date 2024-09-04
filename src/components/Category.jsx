import React from 'react'
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { addCategory } from '../services/allApis';
import { toast } from 'react-toastify';
import CategoryList from './CategoryList';

function Category() {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState({
    categoryId:"",title:"",videos:[]
  });

  const [addResponse,setAddResponse]=useState("")

  const handleCategory=async()=>{
    console.log(category);
    const {categoryId,title}=category
    if(!categoryId || !title){
      toast.warning("Enter Valid Inputs")
    }else{
      const result=await addCategory(category)
      console.log(result);
      if(result.status==201){
        toast.success("Category Added")
        handleClose()
        setAddResponse(result)
      }else{
        toast.error('Category Not Addedd!!')
      }
    }
  }

  const handleClose = () =>{
     setShow(false)
     setCategory({categoryId:"",title:"",videos:[]})
    };
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='d-grid pe-4'>
        <button className='btn btn-success ' onClick={handleShow}>Add Category</button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Add Category
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FloatingLabel controlId="cid" label="Category ID" className="mb-3">
              <Form.Control type="number" onChange={(e)=>{setCategory({...category,categoryId:e.target.value})}} placeholder="123" />
            </FloatingLabel>
            <FloatingLabel controlId="cname" label="Category Title" className="mb-3">
              <Form.Control type="text" onChange={(e)=>{setCategory({...category,title:e.target.value})}} placeholder="name" />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={handleCategory}>Add</Button>
          </Modal.Footer>
        </Modal>
        <CategoryList response={addResponse}/>
      </div>
    </>
  )
}

export default Category