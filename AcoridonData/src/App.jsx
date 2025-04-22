import Accordion from "./components/Accordion"
import {accordionData} from './utils/content'




const App = () => {
  return (
    <div>
      {accordionData.map(({title, content}) => {
        return <Accordion title={title} content={content} />
      })}
    </div>
  )
}

export default App