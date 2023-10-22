import { useState } from 'react'
import fleche from '../assets/fleche-accordion.svg'
import '../styles/Accordion.css'

function Accordion({ title, content, logementAccordion = false }) {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false)
  return (
    <div
      className="accordion"
      style={logementAccordion ? { marginInline: '0px' } : {}}
    >
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
      {Array.isArray(content) ? (
        <ul
          className={accordionIsOpen ? 'open' : 'close'}
          style={
            accordionIsOpen && logementAccordion
              ? { minHeight: '200px' }
              : { minHeight: '0px' }
          }
        >
          {content.map((element, index) => (
            <li key={element + index}>{element}</li>
          ))}
        </ul>
      ) : (
        <p
          className={accordionIsOpen ? 'open' : 'close'}
          style={
            accordionIsOpen && logementAccordion
              ? { minHeight: '200px' }
              : { minHeight: '0px' }
          }
        >
          {content}
        </p>
      )}
    </div>
  )
}
export default Accordion
