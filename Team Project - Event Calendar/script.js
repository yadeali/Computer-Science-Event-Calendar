$(document).ready(function() {
    $('#calendar').fullCalendar({
        selectable: true,
            selectHelper: true,
            select: function()
            {
                $('#myModal').modal('toggle');
            },
        header: {
            left: 'month, agendaWeek, agendaDay, list',
            center: 'title',
            right: 'prev, today, next',
        },
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'Local CS Workshop',
                start: '2024-03-03',
            },
            {
                title: 'Hackathon',
                start: '2024-03-07',
                end: '2024-03-10'
            },
            {
                title: 'Guest Lecture on AI',
                start: '2024-03-15T14:30:00',
            },
            {
                title: 'Guest Lecture on AI',
                start: '2024-04-16T14:30:00',
            },
            {
                title: 'Local CS Workshop',
                start: '2024-04-19',
            },
            // More events here
        ]
    });
});