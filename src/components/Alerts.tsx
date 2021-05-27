import { useEffect, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { removeAlert } from '../actions/alert'

const mapStateToProps = (state: RootStore) => ({
  alert: state.alert,
})
const connector = connect(mapStateToProps, { removeAlert })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

const Alerts = ({ alert, removeAlert }: Props) => {
  const [displayed, setDisplayed] = useState<string[]>([])

  useEffect(() => {
    const storeDisplayed = (id: string) => {
      setDisplayed([...displayed, id])
    }

    const removeDisplayed = (id: string) => {
      setDisplayed([...displayed.filter((key) => id !== key)])
    }

    alert.forEach((alert) => {
      if (!displayed.includes(alert.id)) {
        storeDisplayed(alert.id)

        toast.error(alert.message, {
          position: 'bottom-left',
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          onClose: () => {
            removeDisplayed(alert.id)
            removeAlert(alert.id)
          },
        })
      }
    })
  }, [alert, displayed, removeAlert])

  return <ToastContainer />
}

export default connector(Alerts)
