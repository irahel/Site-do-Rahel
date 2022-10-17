import axios from "axios";
import { useEffect, useState } from "react";

const URL = "https://pensador-api.vercel.app/";
const authorOptions = ["Isaac+Asimov", "Albert+Einstein", "Isaac+Newton"];

function Phrase() {
  const [quote, setQuote] = useState({ phrase: "", author: "" });

  async function getQuoteOfTheDay(author: string) {
    try {
      let res = await axios({
        method: "get",
        url: URL + "?term=" + author,
      });
      const randomQuote = Math.floor(Math.random() * 11);
      setQuote({
        phrase: "“" + res.data.frases[randomQuote].texto + "”",
        author: res.data.frases[randomQuote].autor,
      });
    } catch (err: any) {
      setQuote({
        phrase:
          "“Se o conhecimento pode criar problemas, não é através da ignorância que podemos solucioná-los”",
        author: "Isaac Asimov",
      });
    }
  }

  useEffect(() => {
    getQuoteOfTheDay(
      authorOptions[Math.floor(Math.random() * authorOptions.length)]
    );
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
