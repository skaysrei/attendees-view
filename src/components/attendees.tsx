import type { Attendee } from '../server/attendees'

interface AttendeesListProps {
  attendees: Attendee[]
}

export function AttendeesList({ attendees }: AttendeesListProps) {
  return (
    <ul>
      {attendees.map((attendee) => (
        <li key={attendee.id}>
          <img src={attendee.profilePictureUrl}></img>
          <span>{attendee.fursonaName}</span>
        </li>
      ))}
    </ul>
  )
}
