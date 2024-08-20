import { parse } from "date-fns";

export type DateRange = {
  start: Date;
  end: Date;
};

export const transformDateRange = (dateRange: string): DateRange => {
  if (!dateRange) {
    throw "Null/invalid date range";
  }
  const [startStr, endStr] = dateRange.split(" - ");

  if (!startStr || !endStr) {
    throw "Incorrect date format";
  }

  const start = parse(startStr, "MMMM yyyy", new Date());
  const end =
    endStr.toLowerCase() === "present"
      ? new Date()
      : parse(endStr, "MMMM yyyy", new Date());

  return { start, end };
};
