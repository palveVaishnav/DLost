import Image from "next/image";

export default function ThirdSection() {
    return (
        <section className="w-full p-20">
            <div className="flex justify-start gap-4 border-black rounded-2xl items-center overflow-hidden">
                <div className="relative p-2 w-full min-h-screen">
                    <Image
                        src="/createTrack.svg"
                        alt="Curvy design"
                        layout="fill"
                        objectFit="cover"
                        className="absolute"
                    />
                </div>
            </div>
        </section>
    )
}


// <div className="border rounded-[4em] min-h-[50vh] grid place-content-center bg-gradient-to-bl from-pink-300 to-pink-100">
//     Heere
// </div>