export function NavigationBar() {
    return (
        <div className="flex border-black shadow-sm justify-around items-center p-1 bg-white">
            {/* Logo */}
            <div className="p-2 font-bold font-mono flex items-center">
                <div></div>
                <span className="font-mono p-2 font-bold">
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