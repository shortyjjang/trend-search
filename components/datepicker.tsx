import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
const DATE_FORMAT = 'yyyy-MM-dd';
const DATE_FORMAT_CALENDAR = 'yyyy-MM';

export default function DatepickerInput({onChange}:{onChange: (date:Date) => void}) {
    const [selectDate, setSelectDate] = useState(new Date())

    return (
        <div className='flex justify-center pb-10'>
            <DatePicker
                selected={selectDate}
                minDate={new Date()}
                dateFormat={DATE_FORMAT}
                dateFormatCalendar={DATE_FORMAT_CALENDAR}
                onChange={date => {
                    setSelectDate(date ? date : new Date())
                    onChange(date ? date : new Date())
                }}
                className='cursor-pointer text-lg font-bold rounded-sm bg-transparent text-left'
            />
        </div>
    );
};

