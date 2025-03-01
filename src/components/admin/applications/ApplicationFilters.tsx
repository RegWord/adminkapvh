import React, { useState } from "react";
import { Search, Filter, Calendar as CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

interface ApplicationFiltersProps {
  onSearch?: (query: string) => void;
  onStatusChange?: (status: string) => void;
  onDateRangeChange?: (dateRange: DateRange | undefined) => void;
}

const ApplicationFilters = ({
  onSearch = () => {},
  onStatusChange = () => {},
  onDateRangeChange = () => {},
}: ApplicationFiltersProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: addDays(new Date(), -30),
    to: new Date(),
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleStatusChange = (value: string) => {
    onStatusChange(value);
  };

  const handleDateRangeChange = (range: DateRange | undefined) => {
    setDateRange(range);
    onDateRangeChange(range);
  };

  return (
    <div className="w-full bg-white p-4 rounded-md shadow-sm border border-gray-200">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        {/* Search Input */}
        <form onSubmit={handleSearch} className="flex-1">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search applications..."
              className="pl-9 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>

        {/* Status Filter */}
        <div className="w-full md:w-48">
          <Select onValueChange={handleStatusChange} defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Date Range Picker */}
        <div className="w-full md:w-auto">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full md:w-[240px] justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dateRange?.from ? (
                  dateRange.to ? (
                    <>
                      {format(dateRange.from, "MMM dd, yyyy")} -{" "}
                      {format(dateRange.to, "MMM dd, yyyy")}
                    </>
                  ) : (
                    format(dateRange.from, "MMM dd, yyyy")
                  )
                ) : (
                  <span>Select date range</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={dateRange?.from}
                selected={dateRange}
                onSelect={handleDateRangeChange}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Reset Filters Button */}
        <Button
          variant="ghost"
          onClick={() => {
            setSearchQuery("");
            setDateRange({
              from: addDays(new Date(), -30),
              to: new Date(),
            });
            onSearch("");
            onStatusChange("all");
            onDateRangeChange({
              from: addDays(new Date(), -30),
              to: new Date(),
            });
          }}
          className="w-full md:w-auto"
        >
          <Filter className="mr-2 h-4 w-4" />
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default ApplicationFilters;
