export const timeConversion = (time) => {
  const convertedTime = new Date(time).toLocaleString('en-PK', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Karachi',
  });
  return convertedTime;
};
