import React from 'react'
import Stop from './stop'
import Start from './start'
import Slow from './slow'
import Fast from './fast'
import Random from './random'
import Clear from './clear'

const Controller = ({ clear, random, stop, start, slow, fast }) => (
  <div className='controller'>
    <Start start={start} title='start' />
    <Stop stop={stop} title='stop' />
    <Slow slow={slow} title='slow' />
    <Fast fast={fast} title='fast' />
    <Random  random={random} title='random' />
    <Clear clear={clear} title='clear' />
  </div>
)

export default Controller

