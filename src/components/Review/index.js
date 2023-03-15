import React, { useState } from 'react'
import * as C from './styles'
import people from '../../data/index'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'


function Review() {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }
  const randomPerson = () => {
    let randomPerson = Math.floor(Math.random() * people.length)
    if (randomPerson === people.length) {
      randomPerson = index + 1
    }
    setIndex(checkNumber(randomPerson))
  }

  return (
    <C.Article>
      <C.ImgContainer>
        <img src={image} alt={name}/>
        <span><FaQuoteRight/></span>
      </C.ImgContainer>
          <C.AuthorName>{name}</C.AuthorName>
          <C.Job>{job}</C.Job>
          <C.Info>{text}</C.Info>
          <C.ButtonContainer>
            <button className='PrevButton' onClick={prevPerson}><FaChevronLeft /></button>
            <button className='NextButton' onClick={nextPerson}><FaChevronRight /></button>
          </C.ButtonContainer>
        <C.SurpriseMeBtn onClick={randomPerson}>surprise me</C.SurpriseMeBtn>

    </C.Article>
  )
}

export default Review
