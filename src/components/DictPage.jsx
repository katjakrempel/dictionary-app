import { useState } from "react";
import DisplayWord from "./DisplayWord";
import SearchBar from "./SearchBar";

function DictPage() {
  const [searchTerm, setSearchTerm] = useState("meander");

  return (
    <>
      <main className="dict-page">
        <div>DictPage here</div>
        <SearchBar setSearchTerm={setSearchTerm} />
        <DisplayWord searchTerm={searchTerm} />
      </main>
    </>
  );
}

export default DictPage;
