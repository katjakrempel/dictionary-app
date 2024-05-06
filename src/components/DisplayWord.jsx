import { useEffect, useState } from "react";

function DisplayWord({ searchTerm }) {
  const [output, setOutput] = useState({});

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`).then(
      (response) => response.json().then((data) => setOutput(data[0]))
    );
  }, [searchTerm]);
console.log(output)

  return Object.keys(output).length === 0 ? (
    <p>No results found</p>
  ) : (
    <section className="display-word">
      <p>Displaying results for: {output.word}</p>
      <p>Phonetic: {output.phonetic}</p>
      <p>Part of Speech: {output.meanings[0].partOfSpeech}</p>
      <p>Definition: {output.meanings[0].definitions[0].definition}</p> 
      <p>Examples: {output.meanings[0].definitions[0].example}</p>
    </section>
  );
}

export default DisplayWord;
