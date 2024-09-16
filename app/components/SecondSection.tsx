import Image from "next/image";

export default function Secondsection() {
    return (
        <section className="p-2">
            <div className="grid md:grid-cols-5">
                <div className="grid p-10 col-span-2  place-content-center relative">
                    <span className="text-[3em] font-semibold font-serif">
                        {" Find the "}
                    </span>
                    <span className="text-[3em] font-semibold font-serif">
                        {" path that"}
                    </span>
                    <span className="text-[3em] font-semibold font-serif brandText">
                        {" intrests you!"}
                    </span>
                    <span>
                        {"Some witty tag line witty tag line."}
                    </span>
                    <Image
                        src={'/underlline.svg'}
                        alt="Underline"
                        // layout="fill"
                        objectFit="cover"
                        width={200}
                        height={200}
                        className="absolute z-5 w-60 bottom-28 left-28 rotate-6"
                    />
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