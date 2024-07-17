import React from 'react'

function Buttons({name}) {
  return (
    <><div class="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
    <button
      type="button"
      class="rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      {name}
    </button>
  </div>
  </>

  )
}

export default Buttons