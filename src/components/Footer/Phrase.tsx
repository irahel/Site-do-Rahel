import axios from "axios";
import { useEffect, useState } from "react";
import { randomRangeInt } from "../Utils";

const URL = "https://pensador-api.vercel.app/";
const authorOptions = ["Isaac+Asimov", "Albert+Einstein", "Isaac+Newton"];

function Phrase() {
  const [quote, setQuote] = useState({
    phrase:
      "“Se o conhecimento pode criar problemas, não é através da ignorância que podemos solucioná-los”",
    author: "Isaac Asimov",
  });

  async function getQuoteOfTheDay(author: string) {
    let res = await axios({
      method: "get",
      url: URL + "?term=" + author,
    });
    const randomQuote = randomRangeInt(res.data.frases.length);
    setQuote({
      phrase: "“" + res.data.frases[randomQuote].texto + "”",
      author: res.data.frases[randomQuote].autor,
    });
  }

  useEffect(() => {
    getQuoteOfTheDay(authorOptions[randomRangeInt(authorOptions.length)]);
  }, []);

  return (
    <div
      className="text-center text-dark
    flex flex-col items-center w-[580px] justify-center gap-2"
    >
      <h1 className="text-2xl font-bold font-serif">{quote.phrase}</h1>
      <h2 className="text-base font-medium font-serif">{quote.author}</h2>
    </div>
  );
}

export default Phrase;
