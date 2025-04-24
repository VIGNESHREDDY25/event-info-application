import { useEffect, useState } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('http://localhost:5009/api/events');
        setEvents(res.data);
      } catch (err) {
        setError('Failed to load events');
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {events.length === 0 ? (
        <p className="text-center text-gray-500">No events yet</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div key={event._id} className="bg-white p-4 rounded shadow-lg">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-contain rounded" // ✅ Fixed zoom issue
              />
              <h3 className="text-xl font-bold mt-2">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.date.slice(0, 10)} @ {event.location}</p>
              <p className="mt-2">{event.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                Created by: {event.createdBy?.username || 'Unknown'}
              </p>
              <p className="text-sm text-gray-500">Max: {event.maxParticipants}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;
