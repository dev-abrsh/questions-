import { useState } from 'react'
import { FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa'

const Question = ({ title, info, id }) => {
  const [showInfo, setShowInfo] = useState(false)
  const showAnswers = () => {
    setShowInfo(!showInfo)
  }

  return (
    <article className="mx-6 mt-5 pb-8">
      <div className="px-6 py-3 mt-6 shadow-md  font-semibold p-2">
        <div className="flex justify-between">
          <div className="text-lg text-indigo-500 mr-4">
            {id}, {title}
          </div>
          <button onClick={showAnswers} className="text-xl">
            {showInfo ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
          </button>
        </div>
        <div className="text-center my-4 text-gray-600">{showInfo && info}</div>
      </div>
    </article>
  )
}

export default Question
