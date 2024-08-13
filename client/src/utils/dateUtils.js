export function formatDateToStockholm(dateString) {
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        //second: '2-digit',
        timeZone: 'Europe/Stockholm',
    };
    return new Intl.DateTimeFormat('sv-SE', options).format(new Date(dateString));
}