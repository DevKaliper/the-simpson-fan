"use client"

import {Card, CardHeader, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/button"
import {Chip} from "@nextui-org/chip"
import Image from "next/image";

import { Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";

const Character = (props:any) => {
    const character = props.character
    return (
        <Card isFooterBlurred isBlurred className="max-w-[400px] h-[300px] col-span-12 sm:col-span-5">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <Chip color={character.Estado =="Vivo" ? "success" : character.Estado =="Fallecido" ? "danger" : "default"} variant="shadow">{character.Estado}</Chip>
        </CardHeader>
        <Image
        width={2000}
        height={2000}
        priority
        
          alt={character.Nombre}
          className="z-0 w-1/2 mx-auto my-auto object-cover"
          src={character.Imagen}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black font-medium text-2xl">{character.Nombre}</p>
            <p className="text-black font-semibold">{character.Ocupacion}</p>
           
          </div>
          <Popover
          
          showArrow
          offset={10}
          placement="bottom"
          backdrop="blur"
        >
          <PopoverTrigger>
            <Button color="warning" variant="flat" className="capitalize">
              Historia
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[500px] p-5">
          {character.Historia}
            </PopoverContent>
        </Popover>
        </CardFooter>
      </Card>
    )
}

export default Character