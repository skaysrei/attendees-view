import { createServerFn } from '@tanstack/react-start'

export type TicketKind = 'base' | 'early' | ''
export type AttendeeKind =
  | 'bar'
  | 'security'
  | 'wildcard'
  | 'staff'
  | 'attendee'
  | 'dealer'
  | 'av/it'
  | ''

// Public info only — returned by /api/pun25/attendees and /api/pun25/attendees/flat-list
export interface Attendee {
  id: string
  fursonaName: string
  profilePictureUrl: string
  ticketKind: TicketKind
  checkInCompleted: boolean
  registrationOrder: number
  kind: AttendeeKind
  isFursuiter: boolean
}

// Full info — returned by /api/pun25/admin/attendees (requires auth)
// possible schema returned by private API call, currently not implemented
export interface FullAttendee extends Attendee {
  name: string
  surname: string
  passEmailAddress: string
  telegramUsername: string
  dealerDescription: string
  dealerSocialContacts: string
  dealerAdditionalNeeds: string
  allergies: string
  additionalInfo: string
  formEmailAddress: string
  purchasedBarCardsCount: number
  registrationDate: string // ISO date-time
}

// Union type
export type AnyAttendee = Attendee | FullAttendee

// Type guard
export const isFullAttendee = (a: AnyAttendee): a is FullAttendee => {
  return 'name' in a
}

// Response shapes for the indexed endpoints
export type AttendeesByLetter = Record<string, Attendee[]>
export type FullAttendeesByLetter = Record<string, FullAttendee[]>

export const getAttendees = createServerFn({ method: 'GET' }).handler(
  async () => {
    const res = await fetch(
      'http://lesgoski.ddns.net:10621/api/pun25/attendees/flat-list',
    )
    if (!res.ok) throw new Error('Failed to fetch attendees')
    return res.json() as Promise<Attendee[]>
  },
)
