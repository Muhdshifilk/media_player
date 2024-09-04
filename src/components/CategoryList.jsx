import React, { useEffect, useState } from 'react'
import { getCategories,deleteCategory, updateCategory } from '../services/allApis'
import { toast } from 'react-toastify'
import VideoCard from './VideoCard'

function CategoryList({response}) {

    const [categoryList,setCategoryList]=useState([])

    useEffect(()=>{
        getData()   
    },[response])

    const getData=async()=>{
        const res=await getCategories()
        console.log(res)
        if(res.status==200){
            setCategoryList(res.data)
        }   
    }

    const deleteCat=async(id)=>{
        const result=await deleteCategory(id)
        console.log(result);
        if(result.status==200){
            getData()
        }
    }

    const drophandler=async(e,category)=>{
        console.log(e);
        const vid=JSON.parse(e.dataTransfer.getData("video"))
        category.videos.push(vid)
        const res=await updateCategory(category.id,category)
        console.log(res)
        if(res.status==200){
            toast.success(`${vid.title} added to ${category.title}`)
            getData()
        }
    }

    const dragover=(e)=>{
        e.preventDefault()
        console.log(e)
    }

  return (
    <>
        <div className="container-fluid border border-3 border-warning-subtle mt-3 p-2">
            {
               categoryList.length>0?
                <div >
                   {
                    categoryList.map(item=>(
                        <div className='border border-2 border-dark-subtle mt-3 '>
                            <div className='m-2 p-1 mb-3 d-flex justify-content-between' onDragOver={(e)=>{dragover(e)}} onDrop={(e)=>{drophandler(e,item)}} >
                                <h3>{item.title}</h3>
                                <button className='btn' onClick={()=>{deleteCat(item.id)}}>
                                    <i className="fa-solid fa-trash-can" style={{color: "#e60505"}}></i>
                                </button>
                            </div>
                            {
                                item?.videos?.length>0 &&
                                <div>
                                 {
                                    item.videos.map(vid=>(
                                        <VideoCard video={vid} cat={true}/>
                                    ))
                                 }
                                </div>   
                            }
                        </div>
                    ))} 
                </div>
                :
                <h5>No Categories</h5>
            }
        </div>
    </>
  )
}

export default CategoryList