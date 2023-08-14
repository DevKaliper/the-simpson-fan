"use client";
import Character from "../components/character";
import { getCharacter } from "@/controllers/request";
import { useState, useEffect } from "react";
import { Pagination } from "@nextui-org/pagination";
import { Progress } from "@nextui-org/progress";


export default function Home() {
  //estados
  const [character, setCharacter] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  //------------------------------------------------

  //funciones
  const fetchinCharacter = async (page: number) => {


    const request = await getCharacter(page);

    console.log(request);
    setTimeout(() => {
      setCharacter(request);
	 
    }, Math.floor(Math.random()* 1000));//simulando una carga de 1 segundo (ALEATORIO)
  };

  const handleChangePagination = (page: number) => {
    console.log(page);
    setCharacter([]);
    setPage(page);
  };
  //------------------------------------------------

  //efectos
  useEffect(() => {
	setLoading(true);
    fetchinCharacter(page);
	setLoading(false);
  }, [page]);
  //------------------------------------------------

  return (
    <main className="overflow-hidden">
      <h1 className="text-4xl font-semibold dark:text-yellow-400 my-6">
        Personajes
      </h1>
      <section className="grid  grid-cols-1 gap-5 gap-x-9  md:grid-cols-2 2xl:grid-cols-3 ">
        {character.length > 0 || loading ? (
          character.map((r: any) => (
            <div
              key={r._id}
              className="col-span-1">
              <Character character={r} />
            </div>
          ))
        ) : (
          <div className="h-screen w-screen grid 0 place-items-center mx-auto my-auto">
            <Progress

              size="lg"
              isIndeterminate
              aria-label="Loading..."
              className="max-w-1/2 "
            />
          </div>
        )}
      </section>
      <footer className="my-5 grid w-full place-items-center">
        {" "}
        <Pagination
          onChange={(page: number) => handleChangePagination(page)}
          total={13}
          initialPage={1}
        />{" "}
      </footer>
    </main>
  );
}
