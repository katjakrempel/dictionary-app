import { useState } from "react";
function SearchBar({ setSearchTerm }) {
  const [newSearchTerm, setNewSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(newSearchTerm);
    setNewSearchTerm("");
  }

  return (
    <section className="search-bar">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            value={newSearchTerm}
            onChange={(event) => setNewSearchTerm(event.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export default SearchBar;
