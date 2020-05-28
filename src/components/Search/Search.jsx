import React from 'react'
import { inject, observer } from 'mobx-react'

const Search = inject('GlobalStore')(observer(() => {
    return (
        <section>
          <h2>Search</h2>
        </section>
      )
}))

export default Search