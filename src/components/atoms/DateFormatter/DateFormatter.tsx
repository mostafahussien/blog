import { memo } from "react";

import { parseISO, format } from "date-fns";

interface DateFormatterProps {
  dateString: string;
}

const DateFormatter = ({ dateString }: DateFormatterProps) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default memo(DateFormatter);
