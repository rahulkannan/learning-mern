import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EventItem from '../components/EventItem'
import Spinner from '../components/Spinner'
import { getAllEvents, getEventRegistered , eventRegister, unRegisterEvent} from '../features/events/eventsAPIservice'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

function Dashboard() {
  const navigate = useNavigate()
  const [events, setEvents] = useState([]);
  const [eventsRegistered, setEventsRegistered] = useState([]);

  let { isLoading, isError, message } = {};
  const { user } = useSelector((state) => state.auth)

  useEffect(async () => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    if(!events.length ) {
       let data = await getAllEvents();
       setEvents(data);
    }

    if(!eventsRegistered.length ) {
      let data = await getEventRegistered(user);
      setEventsRegistered(data);
   }
   
  }, [])

  async function eventRegisterCallBack(eventId) {
    if(eventsRegistered.length >= 3 ) {
      toast.error('You cant register for more that 3 events');
      return;
    }

   let event = events.filter(event => event._id == eventId);
   let startTime = event[0].startTime;
   let endTime = event[0].endTime;
 
   let hasConflict = false;

   events.map(event => {
    if(eventsRegistered.includes(event._id) && event.startTime < endTime && startTime < event.endTime ) {
      hasConflict = true;
    }
   })

   if(hasConflict){
    toast("Selected event has conflict with other registered event");
    return;
   }
   
    await eventRegister(eventId,user);
    let data = await getEventRegistered(user);
    setEventsRegistered(data);
  }

  async function unRegisterCallBack(eventId) {
    await unRegisterEvent(eventId,user);
    let data = await getEventRegistered(user);
    setEventsRegistered(data);
  }

  if (!events.length) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Events Dashboard</p>
      </section>

      
      { eventsRegistered.length > 0 && <h1> My Registered Events </h1>}
      <section className='content'>
        {events.length > 0 ? (
          <div className='goals'>
            {events.map((event) => (
              eventsRegistered.includes(event._id) && <EventItem key={event._id} event={event} unRegister={unRegisterCallBack}  />
            ))}
          </div>
        ) : (
          <span></span>
        )}
      </section>

      <h1> All Events </h1>

      <section className='content'>
        {events.length > 0 ? (
          <div className='goals'>
            {events.map((event) => (
              !eventsRegistered.includes(event._id)  && <EventItem key={event._id} event={event} eventRegister={eventRegisterCallBack} />
            ))}
          </div>
        ) : (
          <span></span>
        )}
      </section>
    </>
  )
}

export default Dashboard
