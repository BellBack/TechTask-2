import React, {memo} from "react"
import './SVGContainer.css'
import './DataContainer.css'
import {SVGs} from '../../../svg/SVGs'

const SVGContainer = memo(({data, primary, secondary, tertiary, clickHandler}) => {
  return (
      (clickHandler)?
          <button className={'icon operation ' +
                  ((primary)? 'primary ' : '') +
                  ((secondary)? 'secondary ' : '') +
                  ((tertiary)? 'tertiary ' : '')}
                  onClick={clickHandler}
                  dangerouslySetInnerHTML={((data)?
                      {__html: SVGs[data]}:
                      {__html: SVGs.empty}
                      )}>
          </button> :
          <div className={'icon icon-wrapper ' +
          ((primary)? 'primary ' : '') +
          ((secondary)? 'secondary ' : '') +
          ((tertiary)? 'tertiary ' : '')}
               dangerouslySetInnerHTML={{__html: SVGs[data]}}>

          </div>
  )
})

export default SVGContainer
