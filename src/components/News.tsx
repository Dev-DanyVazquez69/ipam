// import Image from "next/image";

// const News = () => {
//     return (
//         <>
//             {/* Notícias */}
//             <section className="py-20">
//                 <div className="max-w-6xl mx-auto px-6 text-center mb-12">
//                     <h3 className="text-3xl font-bold text-blue-700">Notícias e Comunicados</h3>
//                 </div>

//                 <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
//                     {[1, 2, 3].map((item) => (
//                         <div key={item} className="bg-white rounded-2xl shadow p-6 hover:shadow-xl transition hover:scale-105">
//                             <div className="bg-[url('/ipam.png')] bg-cover bg-center h-32 mb-4 rounded-xl"></div>
//                             <h4 className="font-semibold mb-2">Título da Notícia {item}</h4>
//                             <p className="text-sm text-gray-600">Resumo breve da notícia institucional.</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </>
//     )
// };

// export default News;


import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const News = () => {
    return (
        <>
            <Carousel
                opts={{
                    align: "center",
                }}
                className="max-w-6xl mx-auto px-6 grid gap-8 my-5"
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="basis-1/2 lg:basis-1/3 ">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="aspect-video items-center justify-center p-6 hover:scale-105">
                                        <div className="bg-[url('/ipam.png')] bg-cover bg-center h-32 mb-4 rounded-xl"></div>
                                        <h4 className="font-semibold mb-2">Título da Notícia {index + 1}</h4>
                                        <p className="text-sm text-gray-600">Resumo breve da notícia institucional.</p>                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    )
}
export default News;
