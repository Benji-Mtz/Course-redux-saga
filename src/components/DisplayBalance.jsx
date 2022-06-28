import { Statistic } from 'semantic-ui-react'

const DisplayBalance = ({ title, value, color }) => {
  return (
    <Statistic size="tiny" color={color}>
      <Statistic.Label style={{ textAlign: "left" }}>
        { title }
      </Statistic.Label>
      <Statistic.Value>
        { value }
      </Statistic.Value>
    </Statistic>
  )
}

export default DisplayBalance