export default function convertUnixTimeToDateTime(dateInUnix) {
  const timestampInMilliseconds = dateInUnix * 1000;
  const date = new Date(timestampInMilliseconds);
  const day = date.toLocaleString("en-US", { weekday: "long" }); // Saturday
  const year = date.getFullYear().toString().slice(-2); // 2024 => 24
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 10
  const hours = date.getHours().toString().padStart(2, "0"); // 14
  const minutes = date.getMinutes().toString().padStart(2, "0"); // 30
  const formattedDateTime = `${day} ${year}-${month}-${date.getDate()} ${hours}:${minutes}hs`;

  return { formattedDateTime, formattedDay: day };
}
