"use client";
import Link from "next/link";
import { getQuote } from "@/controllers/request";
import { Skeleton } from "@nextui-org/skeleton";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";

type Quotes = {
  quote: string;
  character: string;
  image: string;
  characterDirection: string;
};

export default function Home() {
  const [quote, setQuote] = useState<Quotes>();
  const [loading, setLoading] = useState(true);

  const fetchingQuote = async () => {
    setLoading(true);
    const response = await getQuote();
    setQuote(response);
    setLoading(false);
  };
  useEffect(() => {
    fetchingQuote();
    setTimeout(() => {
      setLoading(false);
    }, Math.floor(Math.random() * 5000));
  }, []);

  if (loading) {
    return (
      <div className="min-w-screen flex h-[70vh] flex-col items-center justify-center gap-2">
        <div className="flex w-full max-w-[300px] items-center gap-3">
          <div>
            <Skeleton className="flex h-20 w-20 rounded-full" />
          </div>
          <div className="flex w-full flex-col gap-2">
            <Skeleton className="h-3 w-3/5 rounded-lg" />
            <Skeleton className="h-3 w-4/5 rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

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

      <div className="flex items-center justify-center gap-2 w-fit h-fit">
        <Button
          className="mt-4"
          variant="shadow"
          color="warning">
          <Link href="/"> Volver</Link>
        </Button>

        <Button onPress={fetchingQuote} className="flex justify-center items-center mt-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg> Otra
</Button>
      </div>
    </div>
  );
}
