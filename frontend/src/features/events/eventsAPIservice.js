import axios from "axios";
const API_URL = '/api/events/'
const API_EVENT_REGISTER = '/api/eventRegister/'

const getAllEvents =  async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

const eventRegister = async (eventId, user) => {
    const response = await axios.post(API_EVENT_REGISTER, {
        userId : user._id,
        eventId
    })
}

const getEventRegistered = async (user) => {
    const response = await axios.get(API_EVENT_REGISTER + `?userId=${user._id}`);
    return response.data;
}

const unRegisterEvent = async (eventId, user) => {
    const response = await axios.delete(API_EVENT_REGISTER + `?userId=${user._id}&eventId=${eventId}`);
    return response.data;
}

export {
    getAllEvents,
    eventRegister,
    getEventRegistered,
    unRegisterEvent
} 