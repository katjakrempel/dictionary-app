import { useState } from "react";
import DisplayWord from "./DisplayWord";
import SearchBar from "./SearchBar";

function DictPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <main className="dict-page">
        <div>What word would you like to look up?</div>
        <SearchBar setSearchTerm={setSearchTerm} />
        <DisplayWord searchTerm={searchTerm} />
      </main>
    </>
  );
}

export default DictPage;
