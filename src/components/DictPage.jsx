import { useState } from "react";
import DisplayWord from "./DisplayWord";
import SearchBar from "./SearchBar";

function DictPage() {
  const [searchTerm, setSearchTerm] = useState("");

  console.log("the search term is: ", searchTerm);

  return (
    <>
      <main className="dict-page">
        <div>DictPage here</div>
        <SearchBar setSearchTerm={setSearchTerm} />
        <DisplayWord />
      </main>
    </>
  );
}

export default DictPage;
