import { useEffect, useState } from 'react';
import { getEvents } from '../services/api';

export const useCalendarEvents = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchEvents = async () => {
        try {
            setIsLoading(true);
            const response = await getEvents();
            console.log(response);
            if(response.data){
                response.data = response.data.map((event : any) => {
                    event.start_time = new Date(event.start_time);
                    event.end_time = new Date(event.end_time);

                    return event;
                })
            }
            setEvents(response.data);
        } catch (err : any) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return { events, isLoading, error, refetch: fetchEvents };
};