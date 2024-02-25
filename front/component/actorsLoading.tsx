import React from 'react'
import { ChatRightHeart, Film, HeartFill, QuestionCircle, Receipt, StarFill } from 'react-bootstrap-icons'

export default function actorsLoading({ actor_id, actor_name }) {
  return (
    <div className='actorcard'>
      {/* <li>{actor_id}</li> */}
      <a href={`/actor/${actor_id}`} >
        <div className='m-3'>
          <div className='d-flex justify-content-between align-items-center px-2'>
            <p className='p-2 h3 my-0'>{actor_name}</p>
            <p className='maincolor maincolor-border my-0 h4 px-2 py-1 rounded-5'>OOO</p>
          </div>
          <div className='d-flex justify-content-center'>
            {/* 태어난 곳 주소 축소 */}
            <p>OOO</p>
            <p className='mx-1'>|</p>
            <p>OOO</p>
          </div>
        </div>

        <div className={`text-center`}>
          <img className="noimg" alt="loading-img" />
        </div>
      </a>

      <div className='d-flex justify-content-between p-4'>
        <div>
          <StarFill className='me-2' />
          <span>Rating : </span>
          <span className='maincolor'>OOO</span>
        </div>
        <div>
          <Receipt className='me-2' />
          <span>Votes : </span>
          <span className='maincolor'>OOO</span>
        </div>
      </div>
      <div className='d-flex justify-content-between px-4'>
        <div>
          <ChatRightHeart className='me-2' />
          <span>Personal popularity : </span>
          <span className='maincolor'>OOO</span>
        </div>
        <div>
          <Film className='me-2' />
          <span>Movies :</span>
          <span className='maincolor'> OOO</span>
        </div>
      </div>
      <div className='d-flex justify-content-between p-4'>
        <div>
          <HeartFill className='me-2' />
          <span>Total Popularity : </span>
          <span className='maincolor'>OOO</span>
        </div>
        <div>
          <a href="/criteria"><QuestionCircle className='h5 cursur-pointer' /></a>
        </div>
      </div>
    </div>
  )
}
