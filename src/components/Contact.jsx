import React from 'react'

const Contact = () => {
  return (
    <div>
        <form className="flex flex-col justify-center items-center space-y-4">
    <div className="flex flex-col items-start">
      <label>Name</label>
      <input className="shadow p-2 rounded"></input>
    </div>
    <div className="flex flex-col items-start">
      <label>Phone Number</label>
      <input className="shadow w-64 p-2 rounded"></input>
    </div>
    <div className="flex flex-col items-start">
      <label>Message</label>
      <input className="shadow w-64 p-2 rounded"></input>
    </div>
  </form>
</div>
  )
}

export default Contact
