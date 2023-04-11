import React, { useState, useEffect } from 'react'
import './LatestPostPagination.css'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

const LatestPostPagination = ({ showPerPage, onPaginationChange, total }) => {
  const [pagiCounter, setPagiCounter] = useState(1)
  const [numberOfButtons, setNumberOfButtons] = useState(Math.ceil(total / showPerPage))

  useEffect(() => {
    const value = showPerPage * pagiCounter
    console.log(value - showPerPage)
    console.log(value)
    onPaginationChange(value - showPerPage, value)
  }, [pagiCounter])

  const onButtonClick = (type) => {
    if (type === 'prev') {
      if (pagiCounter === 1) {
        setPagiCounter(1)
      } else {
        setPagiCounter(pagiCounter - 1)
      }
    } else if (type == 'next') {
      if (numberOfButtons === pagiCounter) {
        setPagiCounter(pagiCounter)
      } else {
        setPagiCounter(pagiCounter + 1)
      }
    }
  }
  return (
    <div className='d-flex justify-content-start'>
      <nav aria-label="">
        <ul className="LatestPostPagination-pagination-ul gap-3">
          <li className="LatestPostPagination-pagination-li-arrow">
            <span className="page-link" onClick={() => onButtonClick('prev')}><MdOutlineKeyboardArrowLeft /></span>
          </li>
          {new Array(numberOfButtons).fill("").map((element, index) => {
            return (
              <li
                onClick={() => setPagiCounter(index + 1)}
                className={`LatestPostPagination-pagination-li ${index + 1 === pagiCounter ? 'LatestPostPagination-pagination-li-active' : ''}`}>
                {index + 1}
              </li>
            )
          })}
          <li className="LatestPostPagination-pagination-li-arrow">
            <span className="page-link" onClick={() => onButtonClick('next')}><MdOutlineKeyboardArrowRight /></span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default LatestPostPagination