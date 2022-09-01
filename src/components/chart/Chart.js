import './Chart.css'
import ChartBar from './ChartBar';

const Chart = (props) => {

    // convert into numbers
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)

    return(
        <div className='chart'>
        {props.dataPoints.map((dataPoint) => {
            return (
              <ChartBar
                key={dataPoint.label}
                label={dataPoint.label}
                maxValue={totalMaximum}
                value={dataPoint.value}
              />
            );
           
        })}
        </div>
    )
}


export default Chart;