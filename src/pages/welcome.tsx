import mandalorian from '../assets/mandalorian.png'
import mandalorian1 from '../assets/mandalorian1.png'
import mandalorian2 from '../assets/mandalorian2.png'

function Welcome() {

  return (
    <div className='welcome'>
      <img className='imgHome' src={mandalorian} alt="" />
      <img className='imgHome' src={mandalorian1} alt="" />
      <img className='imgHome' src={mandalorian2} alt="" />
    </div>
  )
}

export default Welcome