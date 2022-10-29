import React from 'react'

function Naaav() {
  return (
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
    <h1 class="first u-text first u-text-default first u-text-1">
            La <span class="first u-text-palette-1-base">Cass</span>a
          </h1>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href='/'>
        Home
      </a>

      <a class="navbar-item" href='/umar'>
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        
      </div>
    </div>
  </div>
</nav>
  )
}

export default Naaav