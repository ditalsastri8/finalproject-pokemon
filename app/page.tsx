import Image from "next/image";
import ItemCard from "@/components/item-card";
import Counter from "@/components/counter";
import ItemMovie from "@/components/item-movie";
import ItemProduct from "@/components/item-product";
import ItemCity from "@/components/item-city";
import Navbar from "@/components/navbar"; // Import the Navbar component

// Server components
export default function Home() {
  return (
    <div>
      <Navbar /> {
      /* Add the Navbar component here */}
      <main className="container mt-5 bg-slate-100 p-7">
        <div>
          <h2 className="scroll-m-14 text-2xl font lg:text-2xl">Talent Digital - Implementasi Project</h2>
          <div>
          <main className="container mt-5"></main>
          </div>
          <h2>Data Kucing</h2>
          <div className="flex flew-52 border-2 border-gray-900 p-2x-wrap gap-5">
            <ItemCard name="Abyssinian" imgCat="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" /><Counter />
            <ItemCard name="Bombay" imgCat="https://cdn2.thecatapi.com/images/-OuP5pNNE.jpg" /><Counter />
            <ItemCard name="Cheetos" imgCat="https://cdn2.thecatapi.com/images/IFXsxmXLm.jpg" /><Counter />
            <ItemCard name="Donskoy" imgCat="https://cdn2.thecatapi.com/images/3KG57GfMW.jpg" /><Counter />
          </div>
          <h1>Data Movie</h1>
          <div className="flex flew-52 border-2 border-gray-900 p-2x-wrap gap-5">
            <ItemMovie name="Harry Potter" imgCat="https://i.pinimg.com/564x/2b/14/da/2b14da6668dcc8e6456ab0ce9bcf1a5d.jpg" /><Counter />
            <ItemMovie name="Toy Story" imgCat="https://i.pinimg.com/736x/eb/84/c9/eb84c9818e3fd1badf755646c402a679.jpg" /><Counter />
            <ItemMovie name="Moana" imgCat="https://i.pinimg.com/736x/78/f0/2e/78f02e6a0ae0e2e86316224de52cd8df.jpg" /><Counter />
            <ItemMovie name="Home Alone" imgCat="https://i.pinimg.com/736x/f7/70/d6/f770d6b297c92d2a8de5a28922e42d80.jpg" /><Counter />
          </div>
          <h1>Data Product</h1>
          <div className="flex flew-52 border-2 border-gray-900 p-2x-wrap gap-5">
            <ItemProduct name="Fenty" imgCat="https://i.pinimg.com/564x/98/0e/14/980e14fea2560403ab84a79a28d273b7.jpg" /><Counter />
            <ItemProduct name="Rose" imgCat="https://i.pinimg.com/736x/d5/da/95/d5da95605649c5b8fa3f7783cbdacf0d.jpg" /><Counter />
            <ItemProduct name="Hugley" imgCat="https://i.pinimg.com/564x/13/14/6c/13146c62bf5a9b75a9c2fe21cc90635c.jpg" /><Counter />
            <ItemProduct name="Glossier" imgCat="https://i.pinimg.com/564x/e4/97/ac/e497ac6330db465a28a77422d1f074a4.jpg" /><Counter />
          </div>
          <h1>Data City</h1>
          <div className="flex flew-52 border-2 border-gray-900 p-2x-wrap gap-5">
            <ItemCity name="Medan" imgCat="https://asset.kompas.com/crops/yYRaBL3VPJpZbe2k_5nkinn2MOg=/180x0:1044x576/750x500/data/photo/2023/07/05/64a453ba98fd6.jpg" /><Counter />
            <ItemCity name="Bali" imgCat="https://asset.kompas.com/crops/BrRQi1cffxUhxeE9rBKJtDBOwpU=/0x0:780x390/750x500/data/photo/2018/11/30/430689995.jpg" /><Counter />
            <ItemCity name="Surabaya" imgCat="https://asset.kompas.com/crops/DPAgOH41nUfADH7zMYB3uXNd89o=/0x0:1000x667/750x500/data/photo/2020/01/13/5e1c708515e4c.jpg" /><Counter />
            <ItemCity name="Bandung" imgCat="https://asset.kompas.com/crops/giFjrk5sRM4PN5eL7I0csyzpFGQ=/0x0:720x480/750x500/data/photo/2021/08/23/612338d56e686.jpg" /><Counter />
          </div>
        </div>
      </main>
    </div>
  );
}
