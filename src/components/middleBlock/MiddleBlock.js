import React from "react"
import {connect} from "react-redux";
import {setFormVisible} from "../../actions";
import './MiddleBlock.css';

const MiddleBlock = ({onClick, event}) => {
  let [announcer, setAnnouncer] = React.useState({
    text: 'Init',
    isError: false,
    isVisible: false
  }),
      [previousEvent, setPreviousEvent] = React.useState({})

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
    }, 2000);
  }

  return (
      <div className={'middle-block'}>
        <div className={'announcer ' +
        ((announcer.isError) ? 'announcer-error ' : 'announcer-success ') +
        ((announcer.isVisible) ? 'visible ' : 'invisible ')
        }
        >{announcer.text}</div>
        <button onClick={onClick}>Create todo</button>
      </div>
  )
}


const mapStateToProps = state => ({
  event: state.announcerSetter
})

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(setFormVisible(null))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MiddleBlock)
