import { useEffect, useRef, useState } from "react";

function DisplayWord({ searchTerm }) {
  const [output, setOutput] = useState({});
  const [error, setError] = useState(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          if (!data[0]) {
            throw new Error("Sorry, no results found.");
          }
          setOutput(data[0]);
        })
        .catch((error) => {
          setError(error);
        });
    }
  }, [searchTerm]);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  if (error) return <p>{error.message}</p>;

  return Object.keys(output).length === 0 || isFirstRender.current ? (
    <p></p>
  ) : (
    <section className="display-results">
      <p>Displaying search results for:</p>
      <h2>{output.word}</h2>
      <p>{output.phonetic}</p>
      {output.phonetics.length === 0 ? (
        <p>Phonetics not available</p>
      ) : (
        <audio controls src={output.phonetics[0].audio}>
          Your browser does not support the audio element
        </audio>
      )}
      <ol>
        {output.meanings.map((meaning) => {
          return (
            <li
              className="word-definition"
              key={meaning.definitions[0].definition}
            >
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
