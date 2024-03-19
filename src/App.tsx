import Counter from './Counter'
import Request from './Request'
import LeadStageValidator from './LeadStageValidator'

function App() {

  let refId = 1
  return (
    <>
      <LeadStageValidator refId={refId} stage={'inquiry'}>
        <Counter />
      </LeadStageValidator>
      <LeadStageValidator refId={refId} stage={'lead'}>
        <Counter />
      </LeadStageValidator>
      <LeadStageValidator refId={refId} stage={'analysis'}>
        <Counter />
      </LeadStageValidator>
    </>
  )
}

export default App
