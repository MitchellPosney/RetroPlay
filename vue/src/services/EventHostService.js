import axios from 'axios';
const http = axios.create({
    baseURL: "http://localhost:3000"
  });
export default {
   
    updateEvent(event) {
        return http.put(`/edit/event/${event.id}`, event);
      },

    // get(event) {
    //   return http.get(`/events/`)
    // }
}