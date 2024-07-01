module.exports = {
    formatDate(inputDate) {
        const dateObj = new Date(inputDate);
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
    
        // Ensure two-digit format for day and month
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;
    
        return `${formattedDay}.${formattedMonth}.${year}`;
    }
}
