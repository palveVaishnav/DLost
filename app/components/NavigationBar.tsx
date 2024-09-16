import Image from "next/image";

export function NavigationBar() {
    return (
        <div className="flex border-black shadow-sm justify-around items-center p-1 bg-white ">
            {/* Logo */}
            <div className="p-2 font-bold font-mono flex items-center">
                <div className="relative w-10 h-10">
                    <Image
                        alt="Logo"
                        layout="fill"
                        objectFit="cover"
                        src={"/logo.png"}
                        className="absolute"
                    />
                </div>
                <span className="geistSans p-2 font-bold text-xl Merienda">
                    {"D'Lost"}
                </span>
            </div>
            {/* Navigation */}
            <div className="flex gap-1 items-center font-semibold">
                <a
                    href="/"
                    className="p-2 px-3 hover:brandColor rounded-lg slowHover"
                >Home</a>
                <a
                    href="/about"
                    className="p-2 px-3 hover:brandColor rounded-lg slowHover"
                >Download App</a>
                <a
                    href="/projects"
                    className="p-2 px-3 hover:brandColor rounded-lg slowHover"
                >About</a>
                <a
                    href="/collaborations"
                    className="p-2 px-3 hover:brandColor rounded-lg slowHover"
                >Contact</a>
            </div>
        </div>
    )
}