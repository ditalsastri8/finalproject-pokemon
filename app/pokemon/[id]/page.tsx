import Image from "next/image";
import Navbar from "@/components/navbar2";
import Link from "next/link";

async function getData(id: string) {
    const response = await fetch(`https://pokeapi.deno.dev/pokemon/${id}`);
    return response.json();
}

export default async function DetailPokemon({ params }: { params: { id: string } }) {
    const pokemon = await getData(params.id);

    return (
        <div>
            <Navbar />
            <div className="bg-blue-50 min-h-screen flex flex-col p-1 m-3">
            <h1 className="text-3xl font-bold">{pokemon.name}</h1>
                <Image
                src={pokemon.imageUrl}
                alt={pokemon.name}
                width={300}
                height={200}
                className="object-cover"
                />
                <h3 className="mt-6 border-l-2 pl-6 italic font-semibold tracking-tight">Deskripsi:<p>{pokemon.description}</p></h3>
                <h3 className="mt-6 border-l-2 pl-6 italic font-semibold tracking-tight">Types:<p>{pokemon.types}</p></h3>
                <h3 className="mt-6 border-l-2 pl-6 italic font-semibold tracking-tight">Color:<p>{pokemon.color}</p></h3>
                <h3 className="mt-6 border-l-2 pl-6 italic font-semibold tracking-tight">Abilities:</h3>
                <ul className="mt-6 border-l-2 pl-6 italic">
                    {pokemon.abilities.map((ability: any, index: number) => (
                    <li key={index}>
                        <strong>{ability.name}:</strong> {ability.description} ({ability.effect})
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
