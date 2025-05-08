export const config = {
    workingHours: {
        start: 8,  // Starting from 8:00
        end: 18    // Ending at 18:00
    },
    defaultProjectColors: [
        "#4A90E2", // Blue
        "#32CD32", // Green
        "#E74C3C", // Red
        "#9B59B6", // Purple
        "#F39C12", // Orange
        "#1ABC9C", // Teal
        "#34495E"  // Dark Blue
    ],
    timeFormat: {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit"
    },
    dateFormat: {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    },
    daysToShow: 5
};