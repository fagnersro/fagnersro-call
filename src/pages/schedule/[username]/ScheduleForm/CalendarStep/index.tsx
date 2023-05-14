import { Calendar } from '@/components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerList,
  TimerPickerItem,
} from './styles'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { api } from '@/lib/axios'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [availability, setAvailability] = useState(null)

  const router = useRouter()

  const isDateSelected = !!selectedDate
  const username = String(router.query.username)

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  useEffect(() => {
    if (!selectedDate) {
      return
    }

    api
      .get(`/users/${username}/availability`, {
        params: {
          date: dayjs(selectedDate).format('YYYY-MM-DD'),
        },
      })
      .then((response) => {
        console.log(response.data)
      })
  }, [selectedDate, username])

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />
      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            {weekDay} <span>{describedDate}</span>
          </TimePickerHeader>
          <TimePickerList>
            <TimerPickerItem>08:00h</TimerPickerItem>
            <TimerPickerItem>09:00h</TimerPickerItem>
            <TimerPickerItem>10:00h</TimerPickerItem>
            <TimerPickerItem>11:00h</TimerPickerItem>
            <TimerPickerItem>12:00h</TimerPickerItem>
            <TimerPickerItem>13:00h</TimerPickerItem>
            <TimerPickerItem>14:00h</TimerPickerItem>
            <TimerPickerItem>15:00h</TimerPickerItem>
            <TimerPickerItem>16:00h</TimerPickerItem>
            <TimerPickerItem>17:00h</TimerPickerItem>
            <TimerPickerItem>18:00h</TimerPickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  )
}
