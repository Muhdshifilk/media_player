import React,{useEffect, useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getVideos } from '../services/allApis'

function Videos({resp}) {

  const [Videos,SetVideos]=useState([])
  const [delResponse,setdelResponse]=useState("")

  useEffect(()=>{
    getData()
  },[resp,delResponse])

  const getData=async()=>{
    const res=await getVideos()
    console.log(res);
    if(res.status==200){
      SetVideos(res.data)
    }else{
      console.log(res);  
    }
  }

  return (
    <>
    <div className='border border-3 rounded-1 border-warning-subtle  shdow p-5 mb-3'>
        {
          Videos.length > 0?
          <Row>
            {
              Videos.map(item=>(
                <Col>
                    <VideoCard video={item} response={setdelResponse}/>
                </Col>
              ))
            }
          </Row>
          :
          <h2 className='text-center text-danger'>No Videos Available</h2>
        }
    </div>
    </>
  )
}

export default Videos