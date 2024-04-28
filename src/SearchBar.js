import { useState } from "react"

export default function SearchBar({ search }) {
    const [searchInput, setSearchInput] = useState('');

    function handleClick() {
        if (searchInput.trim() === '')
            search(searchInput);

        setSearchInput('');
    }

    return (
        <div className="flex items-center justify-center">
            <div className="shadow-md rounded-lg">
                <input onChange={(e) => setSearchInput(e.target.value)} value={searchInput} type="text" placeholder="Search..." className="rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-80" />
                <button onClick={handleClick} className="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Search</button>
            </div>
        </div>
    )
}
