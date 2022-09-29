import React, {memo} from "react"
import './DataContainer.css'

const DataContainer = memo(({data, primary, secondary, tertiary, className}) => {
  return (
      <div className={'container '+
          ((primary)? 'primary ' : '') +
          ((secondary)? 'secondary ' : '') +
          ((tertiary)? 'tertiary ' : '') +
          ((className)? className: '')
          }>
        { data }
      </div>
  )
})

export default DataContainer
