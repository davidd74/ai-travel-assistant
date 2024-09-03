export const makeBookingLink = (
  destination: string | undefined,
  startDate: any,
  endDate: any,
  travelers: string | undefined
): string => {
  const baseUrl = "https://www.booking.com/searchresults.html";
  const params = new URLSearchParams({
    ss: destination || "",
    checkin_year: startDate?.year || "",
    checkin_month: startDate?.month || "",
    checkin_monthday: startDate?.day || "",
    checkout_year: endDate?.year || "",
    checkout_month: endDate?.month || "",
    checkout_monthday: endDate?.day || "",
    group_adults:
      travelers === "solo"
        ? "1"
        : travelers === "couple"
        ? "2"
        : travelers === "friends" || travelers === "family"
        ? "3"
        : "1",
    no_rooms: "1",
    group_children: "0",
  });
  return `${baseUrl}?${params.toString()}`;
};
