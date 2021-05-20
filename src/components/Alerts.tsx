import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'

const mapStateToProps = (state: RootStore) => ({
  alert: state.alert,
})
const connector = connect(mapStateToProps, {})
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

const Alerts = ({ alert }: Props) => {
  return (
    <div>
      <ul>
        {alert.map((alert) => (
          <li>
            <h3>{alert.variant}</h3>
            <h2>{alert.message}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default connector(Alerts)
