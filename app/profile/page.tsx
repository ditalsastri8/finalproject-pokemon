import Navbar from "@/components/navbar"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"


function profile () {
    return (
            <div>
                <Navbar />
                
            <h1 className=" bg-blue-50 text-justify text-xl font-bold p-5"> Hallo 
                <div className="text-center text-xl  p-3">
                    <Textarea  
                    placeholder="Perkenalkan aku Dita Sihombing,peserta talent class batch 13.
                    Aku lulusan Sarjana Sistem Informasi dari Institut Teknologi Del. Aku berpikir dulu ngoding itu hal yang sangat menakutkan dan aku berusaha menghindarinya.
                    Sampai akhirnya perlahan aku mulai menyadari betapa pentingnya belajar dengan bahasa pemrograman yang beragam, 
                    Talenthub pertamaku aku mengambil kelas UI/UX dan kelasku tahun ini ada NextJS, walaupun tidak begitu menguasai tapi aku senang dengan keberanianku saat ini " />
                
                
                </div>
            </h1>
           
           </div>
            
    )
}

export default profile