import React from 'react'

const Header = () => {
  return (
    <div >
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <div className="flex items-center space-x-3">
          <div className="bg-purple-600 text-white px-4 py-4 rounded-xl font-bold text-2xl shadow-lg">
  UP
</div>

          <div>
            <h1 className="text-3xl   text-purple-700 font-bold ">Relief Commissioner Portal</h1>
            <p className="text-sm text-gray-500 font-semibold">Advanced Boat Management System · Uttar Pradesh</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
            🟢 75 Districts Online
          </span>
          <button className="border px-4 py-1 rounded-md hover:bg-gray-100">Settings</button>
        </div>
      </header>
    </div>
  )
}

export default Header
