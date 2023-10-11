import { useState } from 'react'
import fleche from '../assets/fleche.svg'
import '../styles/Accordion.css'

function Accordion({ title, content }) {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false)
  return (
    <div className="accordion">
      <div
        className="accordion-header"
        onClick={() => setAccordionIsOpen(!accordionIsOpen)}
      >
        <h3>{title}</h3>
        <img
          src={fleche}
          alt="fleche"
          className={accordionIsOpen ? 'rotate' : ''}
        />
      </div>
      <p className={!accordionIsOpen ? 'close' : 'open'}>{content}</p>
    </div>
  )
}
export default Accordion
