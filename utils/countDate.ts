const currentDate: any = new Date();
const countDate = (startDate: any) => {
    startDate = new Date(startDate);
    const difference = (currentDate - startDate) / (1000 * 3600 * 24);
    return `Posted ${Math.floor(difference)} days ago`;
};

export default countDate