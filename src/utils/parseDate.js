export const convertTime = (db_timestamp) => {
    const lastOnline = 'Last online'
    
    return `${lastOnline}: ${new Date(db_timestamp).toDateString()}`
    
}