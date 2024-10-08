import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="min-h-screen grid place-content-center gap-2 ">
            <div className="w-full">
                <div className="grid">
                    <span>
                        {'Same destination yet differrent '}
                        <span className="font-serif font-bold">{'#paths '}</span>
                        {'to'}
                    </span>
                </div>
                <div className="text-[5em] font-semibold font-serif relative">
                    <span>{"Enjoy the "}</span>
                    <span className="font-normal brandText">
                        {"Curves!"}
                    </span>
                    <Image
                        src={'/underlline.svg'}
                        alt="Underline"
                        // layout="fill"
                        objectFit="cover"
                        width={200}
                        height={200}
                        className="absolute z-5 w-60 right-0 rotate-0 bottom-0"
                    />
                </div>
                <div className="grid place-content-center">
                    <a className="p-2 px-4 border rounded-full brandColor font-mono font-bold">
                        {'Get Started'}
                    </a>
                </div>
            </div>
            <div className="relative w-full min-h-[50vh]">
                <Image
                    src="/nestedmap.svg"
                    alt="Curvy design"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                />
            </div>
        </section>
    )
}