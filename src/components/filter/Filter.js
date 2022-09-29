import React from 'react'
import FilterLink from './link/FilterLink'
import {VisibilityFilters} from '../../actions'
import './Filter.css'

const Filter = () => (
    <div className={'filter'}>
      <span>Show</span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>
        All
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
        Active
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </div>
)

export default Filter
