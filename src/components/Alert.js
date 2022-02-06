import React, {useContext} from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { CSSTransition } from 'react-transition-group'

export const Alert = () => {

    const {alert, hide} = useContext(AlertContext)

    return(
        <CSSTransition
        in={alert.visible}
        timeout={{
            enter:500,
            exit:350
        }}
        classNames={'alert'}
        mountOnEnter
        unmountOnExit
        >
            <div class={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                <strong>Внимание! </strong>
                &nbsp;{alert.text}
                <button onClick={hide} type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                    <span aria-hidden='true'>&times;</span>
                </button>
            </div>
        </CSSTransition>
    )
}