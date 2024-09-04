import React, { useEffect, useState } from "react";
import { deleteHistory, getHistory } from "../services/allApis";

function History() {
  const [history, setHistory] = useState([]);


  useEffect(()=>{
    getHis()
  },[])

  const getHis = async () => {
    const result = await getHistory();
    if (result.status == 200) {
      console.log(result.data);
      setHistory(result.data);
    }else{
      console.log(result);
    }

  };

  const delHistory=async(id)=>{
    const res=await deleteHistory(id)
    console.log(res);
    if(res.status==200){
      getHis()
    }
  }

  
  return (
    <>
      <div className="p-5">
        <h1>WATCH HISTORY</h1>
        {history.length > 0 ? (
          <table className="table table-bordered table-primary">
            <thead>
              <tr>
                <th>Video ID</th>
                <th>Title</th>
                <th>Video URL</th>
                <th>Date and Time</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                history.map(item=>(
                <tr>
                <td>{item.videoId}</td>
                <td>{item.title}</td>
                <td>{item.url}</td>
                <td>{item.datetime}</td>
                <td>
                  <button className="btn" onClick={()=>{delHistory(item.id)}}>
                    <i className="fa-solid fa-trash-can text-danger" />
                  </button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h3 className="text-center text-danger">No History</h3>
        )}
      </div>
    </>
  );
}

export default History;
