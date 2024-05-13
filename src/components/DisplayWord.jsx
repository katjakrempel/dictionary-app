import { useEffect, useRef, useState } from "react";

function DisplayWord({ searchTerm }) {
  const [output, setOutput] = useState({});
  const isFirstRender = useRef(true);
  console.log(output);
  useEffect(() => {
    if (!isFirstRender.current) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
        .then((response) => response.json())
        .then((data) => setOutput(data[0]));
    }
  }, [searchTerm]);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return Object.keys(output).length === 0 || isFirstRender.current ? (
    <p></p>
  ) : (
    <section className="display-results">
      <p>Displaying search results for:</p>
      <h2>{output.word}</h2>
      <p>Phonetic: {output.phonetic}</p>
      <ol>
        {output.meanings.map((meaning) => {
          return (
            <li className="word-definition" key={meaning.definitions[0].definition}>
              <h3>{meaning.partOfSpeech}</h3>
              <p>Definition:</p>
              <p>{meaning.definitions[0].definition}</p>
              <p>Example:</p>
              <p>{meaning.definitions[0].example}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default DisplayWord;
