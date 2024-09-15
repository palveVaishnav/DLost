// import Image from "next/image";

export default function Reviews() {
    return (
        <div className="grid place-content-center gap-4">
            <div className="p-4 grid w-full place-content-center gap-4">
                <div
                    className="text-3xl font-serif font-bold grid w-full place-content-center"
                >{'Testimonials'}</div>

                <div className="grid place-content-center px-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
                        {reviews.map((review, idx) => (
                            <div key={idx} className="border border-slate-200 w-full p-4 rounded-3xl hover:shadow-lg h-fit bg-gradient-to-br from-blue-300 to-blue-100">
                                <div
                                    className="text-md font-bold"
                                >{review.title}</div>
                                <div className="font-light p-2 px-4">
                                    {"'"}{review.review}{"'"}
                                </div>
                                <div className="flex p-8 gap-2 items-center">
                                    <div>
                                        <div className="font-bold" >{review.userName}</div>
                                        <div>{review.profession}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
const reviews = [
    {
        userName: 'Rohan Jadhav',
        profession: 'Traveler',
        avatar: 'https://avatar.iran.liara.run/public',
        title: 'Amazing Route Recommendations',
        review: 'I found some of the best travel routes on this platform. The suggestions were spot-on, making my trip so much more enjoyable! Highly recommend for all adventurers.'
    },
    {
        userName: 'Aarti Sharma',
        profession: 'Backpacker',
        avatar: 'https://avatar.iran.liara.run/public',
        title: 'Perfect for Exploration',
        review: 'This app helped me discover hidden gems along my journey. The routes were easy to follow and full of great places to stop by.'
    },
    {
        userName: 'Suresh Patel',
        profession: 'Hiker',
        avatar: 'https://avatar.iran.liara.run/public',
        title: 'Excellent Travel Tool',
        review: 'The routes suggested on this app saved me time and effort. They were well-planned and made my hikes much more enjoyable.'
    },
    {
        userName: 'Neha Singh',
        profession: 'Solo Traveler',
        avatar: 'https://avatar.iran.liara.run/public',
        title: 'Highly Recommended for Solo Trips',
        review: 'As a solo traveler, finding reliable and safe routes is essential. This platform has been my go-to resource for planning every step of my trips.'
    },
    {
        userName: 'Arjun Rao',
        profession: 'Road Trip Enthusiast',
        avatar: 'https://avatar.iran.liara.run/public',
        title: 'Best Road Trip Planner',
        review: 'This app turned my road trip into an unforgettable adventure. The routes were perfect, with stops at beautiful and lesser-known spots.'
    },
    {
        userName: 'Priya Menon',
        profession: 'Traveler',
        avatar: 'https://avatar.iran.liara.run/public',
        title: 'Great for Scenic Routes',
        review: 'I love taking the scenic route, and this app is perfect for that. The recommendations are full of picturesque stops and breathtaking views.'
    },
    {
        userName: 'Vikram Kumar',
        profession: 'Adventurer',
        avatar: 'https://avatar.iran.liara.run/public',
        title: 'Comprehensive Travel Planning',
        review: 'This platform provides everything you need to plan a trip. The routes are detailed and make traveling easier and more efficient.'
    }
];