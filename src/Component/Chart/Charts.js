import React, {useMemo} from 'react'
import { Chart } from 'react-charts'

const Charts = () => {

    
  const data = useMemo(
    () => [
      {
        label: '',
        data: [[6, 50], [7, 123], [8, 153], [9, 160], [10, 169],[11, 180],[12, 203],[13, 145], [14, 96],[15, 129] ]
      }
    ],
    []
  )

  const axes = useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  return ( 
    <div className='line chart-less' style={{ height: '500px'}} >
      <Chart data={data} axes={axes} />
    </div>
  )
}

export default Charts;