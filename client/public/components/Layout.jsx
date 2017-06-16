import React from 'react'

export default ({ children }) => (
  <div id='app'>
    <div class="header">
      Header
      {children[0]}
    </div>
    <nav><ul><li><a href='/test'>Test</a></li></ul></nav>

    <main>{children[1]}</main>

    <div className='footer'>
      Footer
      {children[2]}
    </div>
  </div>
)
