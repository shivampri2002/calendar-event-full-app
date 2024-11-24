import React from 'react';
import { Calendar, SlotInfo, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { useCalendarEvents } from '../../hooks/useCalendarEvents';
import { EventModal } from './EventModal';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarEvent } from '../../types/event';
// import { formatDate } from '../../utils/date';


const locales = {
    'en-US': enUS,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});


export const CalendarView = () => {
    const { events, isLoading, refetch } = useCalendarEvents();
    const [selectedEvent, setSelectedEvent] = React.useState<CalendarEvent | null>(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleSelectSlot = ({ start, end } : SlotInfo) => {
        let newEvent : CalendarEvent = {
            title: '', // Empty title or use a default title
            description: '', // Empty description
            start_time: start.toISOString(), // Convert Date to ISO string for consistency
            end_time: end.toISOString(), // Convert Date to ISO string
            created_at: new Date().toISOString(), // Set creation time to current time
            updated_at: new Date().toISOString(), // Set update time to current time
        };

        setSelectedEvent(newEvent);
        setIsModalOpen(true);
    };

    const handleSelectEvent = (event : CalendarEvent) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="h-screen p-4">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start_time"
                endAccessor="end_time"
                style={{ height: 'calc(100vh - 100px)' }}
                onSelectSlot={handleSelectSlot}
                onSelectEvent={handleSelectEvent}
                selectable
                className="bg-white rounded-lg shadow-lg p-4"
            />
            <EventModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                event={selectedEvent}
                refetchEvent={refetch}
            />
        </div>
    );
};
