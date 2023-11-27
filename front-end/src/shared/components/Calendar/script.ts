const date: Date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays: Element | null = document.querySelector(".days");

  if (!monthDays) {
    return;
  }

  const lastDay: number = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const prevLastDay: number = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  const firstDayIndex: number = date.getDay();

  const lastDayIndex: number = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

  const nextDays: number = 7 - lastDayIndex - 1;

  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateHeading: HTMLElement | null = document.querySelector(".date h1");
  const dateParagraph: HTMLElement | null = document.querySelector(".date p");

  if (dateHeading && dateParagraph) {
    dateHeading.innerHTML = months[date.getMonth()];
    dateParagraph.innerHTML = new Date().toDateString();
  }

  let days: string = "";

  for (let x: number = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i: number = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j: number = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev")?.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next")?.addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
