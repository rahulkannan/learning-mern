function EventItem({ event, eventRegister, unRegister }) {
  return (
    <div className='goal'>
      <h2>{event.name}</h2>
      <div> {event.category}</div>
      <div>  {new Date(event.endTime).toLocaleDateString()}</div>
      <span>  {new Date(event.startTime).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}  to</span>
      <span>  {new Date(event.endTime).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}</span>     
      <div className="btn-container">
        {
          eventRegister && <button className="btn" onClick={() => eventRegister(event._id)} >
            Select
          </button>
        }
        {
          unRegister && <button className="btn" onClick={() => unRegister(event._id)} >
            Remove
          </button>
        }
      </div>
    </div>
  )
}

export default EventItem
