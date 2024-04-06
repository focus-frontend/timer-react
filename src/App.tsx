import { FC } from 'react'
import { useTimer } from 'react-timer-hook'

import Logo from './assets/images/logo.svg'

import style from './App.module.css'

const App: FC = () => {
  const expiryTimestamp = new Date(Date.UTC(2024, 3, 12, 18, 0, 0))
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds())

  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp })

  return (
    <div className={style.wraper}>
      <div className='container'>
        <a className={style.logo} href='#'>
          <img src={Logo} alt='logo' />
        </a>
        <div className={style.timer}>
          <div className={style.item}>
            <h1 className={style.title}>{days}</h1>
            <p className={style.text}>Days</p>
          </div>
          <div className={style.item}>
            <h1 className={style.title}>{hours}</h1>
            <p className={style.text}>Hours</p>
          </div>
          <div className={style.item}>
            <h1 className={style.title}>{minutes}</h1>
            <p className={style.text}>Minutes</p>
          </div>
          <div className={style.item}>
            <h1 className={style.title}>{seconds}</h1>
            <p className={style.text}>Seconds</p>
          </div>
        </div>
        <p className={style.end}>12th April, 6pm UTC</p>
      </div>
    </div>
  )
}

export default App
