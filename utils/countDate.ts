const currentDate: Date = new Date();
const countDate = (dateFromApi: string) => {
    const startDate = new Date(dateFromApi);
    const difference = (Number(currentDate) - Number(startDate)) / (1000 * 3600 * 24);
    return `Posted ${Math.floor(difference)} days ago`;
};

export default countDate