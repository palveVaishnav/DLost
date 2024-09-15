import Image from "next/image";

export default function Secondsection() {
    return (
        <section className="p-2">
            <div className="grid md:grid-cols-5">
                <div className="grid p-10 col-span-2  place-content-center">
                    <span className="text-[3em] font-semibold font-serif">
                        {" Find the "}
                    </span>
                    <span className="text-[3em] font-semibold font-serif">
                        {" path that"}
                    </span>
                    <span className="text-[3em] font-semibold font-serif">
                        {" intrests you!"}
                    </span>
                    <span>
                        {"Some witty tag line witty tag line."}
                    </span>
                </div>
                <div className="grid place-content-center relative w-full min-h-[60vh] col-span-3">
                    <Image
                        src="/cardsvg.svg"
                        alt="Curvy design"
                        layout="fill"
                        objectFit="cover"
                        className=" p-2"
                    />
                </div>
            </div>
        </section>
    )
}