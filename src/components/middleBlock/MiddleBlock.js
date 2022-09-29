import React from "react"
import {connect} from "react-redux";
import {setAnnouncerEvent, setFormVisible} from "../../actions";
import './MiddleBlock.css';

const MiddleBlock = ({dispatch, event}) => {
  let emptyObj = {
    text: 'Init',
    isError: false,
    isVisible: false
  }
  let [announcer, setAnnouncer] = React.useState(emptyObj)
  let [previousEvent, setPreviousEvent] = React.useState({})

  if (event && Object.keys(event).length && JSON.stringify(previousEvent) !== JSON.stringify(event)) {
    setPreviousEvent({
      ...event
    })
    setAnnouncer({
      ...announcer,
      text: event.text,
      isError: event.isError,
      isVisible: true
    })

    setTimeout(() => {
      setAnnouncer({
        text: event.text,
        isError: event.isError,
        isVisible: false
      })
    }, 1500);
  }

  return (
      <div className={'wrapper middle-block'}>
        <div className={'announcer ' +
        ((announcer.isError) ? 'announcer-error ' : 'announcer-success ') +
        ((announcer.isVisible) ? 'visible ' : 'invisible ')
        }
        >{announcer.text}</div>
        <button onClick={() => dispatch(setFormVisible(null))}>Create todo</button>
      </div>
  )
}


const mapStateToProps = state => ({
  event: state.announcerSetter
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MiddleBlock)
