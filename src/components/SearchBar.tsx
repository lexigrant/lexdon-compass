import { SetStateAction, useState } from "react";

const SearchBar = ({ searchChange }: { searchChange: (text: string) => void }) => {

    const [searchInput, setSearchInput] = useState("")

    // Function for search bar
    const handleSearchChange = (e: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
        e.preventDefault()
        setSearchInput(e.target.value)
        searchChange(e.target.value.toString())

    }

    return (
        <div>
            <input type="text" value={searchInput} className='search-bar' placeholder="Search..." onChange={handleSearchChange} />
        </div>
    )
}

export default SearchBar;