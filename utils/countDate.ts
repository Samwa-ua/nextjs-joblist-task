const pluralize = (count: number, noun: string, suffix = 's') => {
    return `${count} ${noun}${count !== 1 ? suffix : ''}`
}

const currentDate: Date = new Date();
const countDate = (dateFromApi: string) => {
    const startDate = new Date(dateFromApi);
    const difference = (Number(currentDate) - Number(startDate)) / (1000 * 3600 * 24);
    return `Posted ${pluralize(Math.floor(difference), 'day')} ago`;
};



export default countDate