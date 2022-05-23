import type { Component } from 'solid-js'

import logo from '../assets/icon.svg'

const Popup: Component = () => {
  return (
    <div className="w-64">
      <header >
        <img src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  )
}

export default Popup
