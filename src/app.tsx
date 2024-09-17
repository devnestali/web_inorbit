import { Dialog } from './components/dialog'
import { CreateGoal } from './components/pages/create-goal'
import { Summary } from './components/pages/summary'
//import { EmptyGoals } from './components/pages/empty-goals'

export function App() {
  return (
    <Dialog>
      {/* <EmptyGoals /> */}
      <Summary />

      <CreateGoal />
    </Dialog>
  )
}
