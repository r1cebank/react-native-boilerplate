function formatTime(dateString) {
    const date = new Date(dateString);

    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const strTime = `${hours}:${minutes}`;

    return `${strTime} ${ampm}`;
}

module.exports = formatTime;
