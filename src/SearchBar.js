import { useState } from "react"

export default function SearchBar({ search, setSearchInput }) {
    
    return (
        <div className="flex items-center justify-center">
            <div className="shadow-md rounded-lg p-6">
                <input onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder="Search..." className="rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-80" />
                <button onClick={search} className="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Search</button>
            </div>
        </div>
    )
}