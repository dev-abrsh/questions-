import { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = ({ data }) => {
  const [index, setIndex] = useState(3)
  const { name, job, image, text } = people[index]

  const prevPerson = () => {
    setIndex((index) => (index === 0 ? people.length - 1 : index - 1))
  }
  const nextPerson = () => {
    setIndex((index) => (index === people.length - 1 ? 0 : index + 1))
  }
  const randomPerson = () => {
    let num = Math.floor(Math.random() * people.length)
    if (num === index) {
      if (num === people.length - 1) {
        num = num - 1
      } else {
        num = num + 1
      }
    }
    setIndex(num)
  }
  return (
    <article className=" shadow-xl bg-white mx-8 rounded-lg max-w-lg text-center">
      <div className="flex justify-around my-5 text-center my-3 mx-5">
        <div className="relative">
          <img
            className="h-40 w-40 object-cover object-center rounded-full"
            src={image}
            alt="name"
          />
          <span className="absolute top-6 left-0 bg-indigo-400 text-white rounded-full p-2">
            <FaQuoteRight />{' '}
          </span>
        </div>
      </div>
      <h3 className=" capitalize text-center font-semibold text-2xl ">
        {name}
      </h3>
      <h4 className=" capitalize text-center mt-2 text-xl text-indigo-500">
        {job}
      </h4>
      <p className="my-3 mx-5 text-center text-gray-700">{text}</p>
      <div className="text-indigo-400 text-2xl flex justify-center my-6">
        <button className="mr-4" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="ml-4" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button
        onClick={randomPerson}
        className="hover:bg-indigo-400 hover:font-semibold hover:text-gray-800 delay-400 capitalize mb-8 p-2 rounded-lg text-white text-lg bg-indigo-500"
      >
        surprise me!
      </button>
    </article>
  )
}

export default Review
