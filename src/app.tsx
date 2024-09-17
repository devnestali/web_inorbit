import { Dialog } from './components/dialog'
import { CreateGoal } from './components/pages/create-goal'
import { EmptyGoals } from './components/pages/empty-goals'

export function App() {
  return (
    <Dialog>
      <EmptyGoals />

      <CreateGoal />
    </Dialog>
  )
}
