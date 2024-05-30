import Image from "next/image";
import Navbar from "@/components/navbar";
import Link from "next/link";

async function getData() {
    const response = await fetch("https://pokeapi.deno.dev/pokemon?limit=20");
    return response.json();
}

export default async function PokemonData() {
    const pokemonData = await getData();

    return (
        <div>
            <Navbar />
            <h1 className="text-center text-xl font-bold p-3">Pokemon Data </h1>
            <section className="bg-blue-50 flex flex-wrap justify-center gap-2 p-5">
                {pokemonData.map((pokemon: any) => (
                <div className="w-52 border-2 border-gray-900 p-2" key={pokemon.id}>
              <Link href={`/pokemon/${pokemon.id}`}>
                <Image
                src={`${pokemon.imageUrl}`} 
                alt={pokemon.name}
                width={800}
                height={600}
                className="object-cover"
                />
                <h2 className="text-center text-xl font-bold">{pokemon.name}</h2>
                <h3 className="mt-6 border-l-2 pl-6 italic font-semibold tracking-tight"><p>{pokemon.color}</p></h3>
              </Link>
              </div>
            
            ))}
            </section>
        </div>
    );
}
