import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

import { useState } from "react";
function SearchBar({ setSearchTerm }) {
  const [newSearchTerm, setNewSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(newSearchTerm);
    setNewSearchTerm("");
  }

  return (
    <section className="search">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            id="search-bar"
            value={newSearchTerm}
            onChange={(event) => setNewSearchTerm(event.target.value)}
          />
        </label>
        <IconButton
          color="success"
          size="medium"
          type="submit"
          sx={{ bgcolor: "background.paper", boxShadow: 2, borderRadius: 3 }}
        >
          <SearchIcon />
        </IconButton>
      </form>
    </section>
  );
}

export default SearchBar;
