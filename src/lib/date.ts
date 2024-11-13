export const parseDate = (dateString: string): Date => {
  // Check if the string matches the expected format
  const dateMatch = dateString.match(
    /^(\d{1,2}:\d{2})(am|pm) (\d{1,2})\/(\d{1,2})\/(\d{2})$/i
  );

  if (!dateMatch) {
    throw new Error(
      `Invalid date format: "${dateString}". Expected format: "HH:MMam/pm DD/MM/YY" (e.g., "9:30am 25/12/23")`
    );
  }

  const [, time, ampm, dateStr, monthStr, yearStr] = dateMatch;
  const [hoursStr, minutesStr] = time.split(":");

  // Convert strings to numbers
  const hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);
  const date = parseInt(dateStr, 10);
  const month = parseInt(monthStr, 10);
  const year = parseInt(yearStr, 10);

  // Validate hours and minutes
  if (hours < 1 || hours > 12) {
    throw new Error(`Invalid hours: ${hours}. Hours must be between 1 and 12`);
  }
  if (minutes < 0 || minutes > 59) {
    throw new Error(
      `Invalid minutes: ${minutes}. Minutes must be between 0 and 59`
    );
  }

  // Validate date and month
  if (date < 1 || date > 31) {
    throw new Error(`Invalid date: ${date}. Date must be between 1 and 31`);
  }
  if (month < 1 || month > 12) {
    throw new Error(`Invalid month: ${month}. Month must be between 1 and 12`);
  }

  const adjustedHours =
    ampm.toLowerCase() === "pm" && hours !== 12
      ? hours + 12
      : hours === 12 && ampm.toLowerCase() === "am"
      ? 0
      : hours;

  const adjustedYear = 2000 + year;
  const parsedDate = new Date(
    adjustedYear,
    month - 1,
    date,
    adjustedHours,
    minutes
  );

  // Check if the date is valid
  if (parsedDate.getDate() !== date) {
    throw new Error(`Invalid date: ${date}/${month}/${year} does not exist`);
  }

  // Check if the year is within a reasonable range
  const currentYear = new Date().getFullYear();
  const parsedYear = parsedDate.getFullYear();
  if (parsedYear < 2000 || parsedYear > currentYear + 1) {
    throw new Error(
      `Invalid year: ${year}. Year must be between 2000 and ${currentYear + 1}`
    );
  }

  return parsedDate;
};
