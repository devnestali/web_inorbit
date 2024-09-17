import { Dialog } from './components/dialog'
import { CreateGoal } from './components/pages/create-goal'
import { Summary } from './components/pages/summary'
import { EmptyGoals } from './components/pages/empty-goals'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'

export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}
