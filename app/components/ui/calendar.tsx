import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, DayPickerProps } from "react-day-picker";

import { cn } from "@/app/lib/utils";
import { buttonVariants } from "@/app/components/ui/button";

export type CalendarProps = DayPickerProps;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const mergedClassNames = React.useMemo(
    () => ({
      months: cn(
        "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        classNames?.months
      ),
      month: cn("space-y-4", classNames?.month),
      caption: cn("flex justify-center pt-1 relative items-center", classNames?.caption),
      caption_label: cn("text-sm font-medium", classNames?.caption_label),
      nav: cn("space-x-1 flex items-center", classNames?.nav),
      nav_button: cn(
        buttonVariants({ variant: "outline" }),
        "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        classNames?.nav_button
      ),
      nav_button_previous: cn("absolute left-1", classNames?.nav_button_previous),
      nav_button_next: cn("absolute right-1", classNames?.nav_button_next),
      table: cn("w-full border-collapse space-y-1", classNames?.table),
      head_row: cn("flex", classNames?.head_row),
      head_cell: cn(
        "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        classNames?.head_cell
      ),
      row: cn("flex w-full mt-2", classNames?.row),
      cell: cn(
        "h-9 w-9 text-center text-sm p-0 relative",
        "[&:has([aria-selected].day-range-end)]:rounded-r-md",
        "[&:has([aria-selected].day-outside)]:bg-accent/50",
        "[&:has([aria-selected])]:bg-accent",
        "first:[&:has([aria-selected])]:rounded-l-md",
        "last:[&:has([aria-selected])]:rounded-r-md",
        "focus-within:relative focus-within:z-20",
        classNames?.cell
      ),
      day: cn(
        buttonVariants({ variant: "ghost" }),
        "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
        classNames?.day
      ),
      day_range_end: cn("day-range-end", classNames?.day_range_end),
      day_selected: cn(
        "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        classNames?.day_selected
      ),
      day_today: cn("bg-accent text-accent-foreground", classNames?.day_today),
      day_outside: cn(
        "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        classNames?.day_outside
      ),
      day_disabled: cn("text-muted-foreground opacity-50", classNames?.day_disabled),
      day_range_middle: cn(
        "aria-selected:bg-accent aria-selected:text-accent-foreground",
        classNames?.day_range_middle
      ),
      day_hidden: cn("invisible", classNames?.day_hidden),
    }),
    [classNames]
  );

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={mergedClassNames}
      components={{
        IconLeft: (props) => <ChevronLeft {...props} className="h-4 w-4" />,
        IconRight: (props) => <ChevronRight {...props} className="h-4 w-4" />,
      }}

      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
