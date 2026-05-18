import { createFileRoute } from '@tanstack/react-router'
import { AttendeesList } from '../components/attendees'
import { getAttendees } from '../server/attendees'

export const Route = createFileRoute('/')({
  loader: () => getAttendees(),
  component: App,
})

function App() {
  const attendees = Route.useLoaderData()

  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section>
        <AttendeesList attendees={attendees} />
      </section>
    </main>
  )
}
