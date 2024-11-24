import { format, parseISO } from 'date-fns';

export const formatDate = (date: string | Date, formatString = 'PPp') => {
    return format(
        typeof date === 'string' ? parseISO(date) : date,
        formatString
    );
};

export const isDateInPast = (date: string | Date) => {
    const inputDate = typeof date === 'string' ? parseISO(date) : date;
    return inputDate < new Date();
};