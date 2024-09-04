import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { addVideos } from "../services/allApis";
import { toast } from "react-toastify";

function Addvideo({response}) {
  const [show, setShow] = useState(false);
  const [video,setVideo]=useState({
    videoId:"",title:"",imageUrl:"",videoUrl:""
  })
  
  const handleUpload=async()=>{
    console.log(video);
    
    const {videoId,title,imageUrl,videoUrl}=video
    if (!videoId||!title||!imageUrl||!videoUrl){
      toast.warning("Please Enter Valid Input")
    }else{
      try{
        const vurl=videoUrl.split("v=")[1]
        const eurl=`https://www.youtube.com/embed/${vurl}?si=wtKYRrCYKoJdOGLp&autoplay=1`
        video.videoUrl=eurl
        const res=await addVideos(video)
        console.log(res)
        if(res.status==201){
        toast.success("Upload Successfull!!")
        handleClose()
        response(res)
        }else{
          toast.error("Upload Failed!!")
        }
      }
      catch(err){
        console.log(err);
        toast.error ("Upload Failed!!")
      }
    }
  }
  const handleClose=()=>{
    setShow(false);
    setVideo({
        videoId:"",title:"",imageUrl:"",videoUrl:""
    })
    
  }

  
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn" onClick={handleShow}>
        <i
          className="fa-regular fa-square-plus fa-lg"
          style={{ color: "#FFD43B" }}
        />
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingId" label="Video ID" className="mb-3" onChange={(e)=>{setVideo({...video,videoId:e.target.value})}}>
            <Form.Control type="number" placeholder="123" />
          </FloatingLabel>
          <FloatingLabel controlId="vtitle" label="Video Title" className="mb-3" onChange={(e)=>{setVideo({...video,title:e.target.value})}}>
            <Form.Control type="text" placeholder="title" />
          </FloatingLabel>
          <FloatingLabel controlId="imageurl" label="Video Image URL" className="mb-3"onChange={(e)=>{setVideo({...video,imageUrl:e.target.value})}}>
            <Form.Control type="text" placeholder="url" />
          </FloatingLabel>
          <FloatingLabel controlId="vurl" label="Youtube Video URL" className="mb-3" onChange={(e)=>{setVideo({...video,videoUrl:e.target.value})}}>
            <Form.Control type="text" placeholder="url" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addvideo;
