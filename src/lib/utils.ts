import clsx, { ClassValue } from "clsx";
import moment from "moment-jalaali";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

function convertPersianToEnglishDigits(persianDate: any) {
  return persianDate.replace(/[۰-۹]/g, (d: any) => d.charCodeAt(0) - 1776);
}

export function convertJalaliToGregorian(jalaliDate: string) {
  const formattedDate = convertPersianToEnglishDigits(jalaliDate);
  // تاریخ شمسی را به فرمت میلادی تبدیل می‌کند
  const gregorianDate = new Date(
    moment(formattedDate, "jYYYY/jM/jD").format("YYYY-MM-DD"),
  );
  return gregorianDate;
}
