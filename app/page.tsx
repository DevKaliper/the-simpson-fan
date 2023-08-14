
"use client"
import Character from '../components/character';
import { getCharacter } from '@/controllers/request';
import {useState, useEffect} from "react"
import {Pagination, PaginationItem, PaginationCursor} from "@nextui-org/pagination";
export default function Home() {
	const fetchinCharacter =  async() => {
		const request = await getCharacter()
		console.log(request)
		setCharacter(request)
	}
	const [character, setCharacter] = useState([])
	useEffect(() => {
		fetchinCharacter()
	}, [])

	const handleChangePagination = (page:number) => {
		console.log(page)

		
	}

	return (
		
		<main>
			<h1 className='text-4xl dark:text-yellow-400 font-semibold'>Personajes</h1>
			<section className='grid  grid-cols-1 md:grid-cols-2 2xl:grid-cols-3  gap-5 gap-x-9 '>
				{
					character ? character.map((r:any) => (
						<div key={r._id} className='col-span-1'>
							<Character  character={r}/>
						</div>
						
					)) : "Cargando"
				}
			</section>
			<footer className='my-5 w-full grid place-items-center'> <Pagination onChange={(page:number)=>handleChangePagination(page)} total={10} initialPage={1} /> </footer>
			
		</main>
	);
}
