import React from 'react'
import InputBar from './InputBar'
import MessageBoard from './MessageBoard'

const Home = () => {
  // const { data: messages, isPending, error } = useFetch('http://localhost:8000/messages');

  return (
    <div className="home">
    {/* //  { error && <div>{ error }</div> }
    // { isPending && <div>Loading...</div> } */}
    <InputBar/>
      <MessageBoard/>
    </div>
  )
}

export default Home
