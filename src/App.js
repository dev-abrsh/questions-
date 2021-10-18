import { useState } from 'react'
import Question from './Question'
import data from './data'

function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main className="lg:flex lg:justify-center">
      <section className=" bg-white mx-8 my-16 rounded-lg lg:w-1/2">
        <h3 className=" mx-8 pt-10 mb-8 font-bold text-2xl ">
          Questions and answers about login
        </h3>
        {questions.map((question) => {
          return <Question key={question.id} {...question} />
        })}
      </section>
    </main>
  )
}

export default App
