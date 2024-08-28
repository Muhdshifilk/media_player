import React from 'react'

function History() {
  return (
    <>
      <div className='p-5'>
        <h1>WATCH HISTORY</h1>
        <table className='table table-bordered table-primary'>
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
            <tr>
              <td>1</td>
              <td>Thoofan</td>
              <td>https://www.youtube.com/embed/xUe3eR0n380?si=wtKYRrCYKoJdOGLp</td>
              <td>2024-08-24</td>
              <td>
                <button className='btn'>
                  <i className="fa-solid fa-trash-can text-danger"/>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default History
