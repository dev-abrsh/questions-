import React from 'react'
import Review from './Review'
import data from './data'

function App() {
  return (
    <main className='flex flex-col justify-center h-screen items-center'>
      <div className='mb-8 flex flex-col items-center'>
        <h5 className='font-bold text-2xl'>Our Reviews</h5>
        <div className='h-1 w-2/3 mt-1 bg-indigo-500'></div>
      </div>
      <Review/>
    </main>
  )
}

export default App


