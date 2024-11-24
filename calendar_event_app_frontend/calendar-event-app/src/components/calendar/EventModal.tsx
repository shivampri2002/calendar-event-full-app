import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { eventSchema } from '../../utils/validation';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { CalendarEvent } from '../../types/event';
import { createEvent, updateEvent } from '../../services/api';
import moment from 'moment';

interface EventModalProps {
    isOpen: boolean;
    onClose: () => void;
    event?: CalendarEvent | null;
    refetchEvent: () => Promise<void>;
}

export const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, event, refetchEvent }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(eventSchema),
        defaultValues: event || {},
    });

    useEffect(() => {
        if (event) {
            reset({
                ...event,
                start_time: moment(event.start_time).format('YYYY-MM-DDTHH:mm'), // Format start_time
                end_time: moment(event.end_time).format('YYYY-MM-DDTHH:mm'),     // Format end_time
            }); // Reset form with new event data
        }
    }, [event, reset]);


    const onSubmit = async (data: CalendarEvent) => {
        try {
            if (event?.id) {
                // Update existing event
                await updateEvent(event.id, data);
            } else {
                // Create new event
                await createEvent(data);
            }

            refetchEvent();
            onClose();
        } catch (error) {
            console.error('Error saving event:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">
                    {event?.id ? 'Edit Event' : 'New Event'}
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <Input
                        label="Title"
                        {...register('title')}
                        error={errors.title?.message}
                    />
                    <Input
                        label="Description"
                        {...register('description')}
                        error={errors.description?.message}
                        multiline
                    />
                    <Input
                        label="Start Time"
                        type="datetime-local"
                        {...register('start_time')}
                        error={errors.start_time?.message}
                    />
                    <Input
                        label="End Time"
                        type="datetime-local"
                        {...register('end_time')}
                        error={errors.end_time?.message}
                    />
                    <div className="flex justify-end space-x-2">
                        <Button variant="secondary" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit">
                            {event?.id ? 'Save' : 'Create'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};