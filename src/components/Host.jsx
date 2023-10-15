import '../styles/Host.css'
import emptyHost from '../assets/empty-host.svg'

function Host({ host }) {
  const names = host.name.split(' ')
  return (
    <div id="host">
      <ul>
        {names.map((userName, index) => (
          <li key={userName + index}>{userName}</li>
        ))}
      </ul>
      <img src={host.picture !== '' ? host.picture : emptyHost} alt="" />
    </div>
  )
}

export default Host
