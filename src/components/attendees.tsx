import type { Attendee } from '../server/attendees'
import { useState } from 'react'

interface AttendeesListProps {
  attendees: Attendee[]
}

const colorMap: Record<number, { bg: string; text: string }> = {
  0: { bg: '#EEEDFE', text: '#3C3489' },
  1: { bg: '#E1F5EE', text: '#085041' },
  2: { bg: '#FAECE7', text: '#712B13' },
  3: { bg: '#E6F1FB', text: '#0C447C' },
}

function getInitials(name: string) {
  return name.slice(0, 2).toUpperCase()
}

function getColor(id: string) {
  return colorMap[id.charCodeAt(0) % 4]
}

interface AttendeesListProps {
  attendees: Attendee[]
}

function Avatar({ url, name }: { url: string; name: string }) {
  const [imgFailed, setImgFailed] = useState(false)
  const c = getColor(name)

  if (!url || imgFailed) {
    return (
      <div
        className="w-20 h-20 rounded-lg flex items-center justify-center text-2xl font-medium shrink-0"
        style={{ background: c.bg, color: c.text }}
      >
        {getInitials(name)}
      </div>
    )
  }

  return (
    <img
      src={url}
      alt={name}
      className="w-20 h-20 rounded-lg object-cover shrink-0"
      onError={() => setImgFailed(true)}
    />
  )
}

export function AttendeesList({ attendees }: AttendeesListProps) {
  return (
    <ul className="flex flex-col gap-0.5">
      {attendees.map((attendee) => {
        return (
          <li
            key={attendee.id}
            className="flex items-center gap-3.5 px-1.5 py-1.5 rounded-lg border border-border bg-white hover:bg-gray-50 transition-colors"
          >
            <Avatar
              url={attendee.profilePictureUrl}
              name={getInitials(attendee.fursonaName)}
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">
                {attendee.fursonaName} {attendee.isFursuiter && <Badge label="Fursuiter" />}
              </p>
              <div className="flex gap-1 flex-wrap mt-1">
                <Badge label={attendee.ticketKind} />
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

function Badge({ label }: { label: string }) {
  return (
    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">
      {label}
    </span>
  )
}
