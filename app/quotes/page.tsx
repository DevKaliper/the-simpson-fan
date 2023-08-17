"use client";
import Link from "next/link";
import { getQuote } from "@/controllers/request";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";

type Quotes = {
  quote: string;
  character: string;
  image: string;
  characterDirection: string;
};

export default function Home() {
  const [quote, setQuote] = useState<Quotes>();

  const fetchingQuote = async () => {
    const response = await getQuote();
    setQuote(response);
  };
  useEffect(() => {
    fetchingQuote();
  }, []);

  return (
    <div className="min-w-screen flex h-[70vh] flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-semibold">{quote && quote.quote}</h1>
      <span className="mt-3 w-[75%] text-right italic">
        {quote && "by " + quote.character}
      </span>

      {quote && (
        <Image
          src={quote.image}
          alt={quote.character}
          width={200}
          height={200}
          className="rounded-full"
        />
      )}
    </div>
  );
}
