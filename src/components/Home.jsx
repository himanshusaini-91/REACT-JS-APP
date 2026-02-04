import Hero from './Hero'
import screenshotImg from '../assets/Screenshot.png'
import BasicProps from './BasicProps'
import ChildrenProps from './ChildrenProps'
import ComplexProps from './ComplexProps'
import RefProps from './RefProps'
import ThemeToggler from './ThemeToggler'

export default function Home() {
    const cardData = [
        {
            title: "Course Overview",
            description: "Get started with our comprehensive course overview and learning objectives.",
            image: screenshotImg
        },
        {
            title: "Interactive Lessons",
            description: "Engage with hands-on exercises and interactive coding modules.",
            image: screenshotImg
        },
        {
            title: "Certification",
            description: "Earn a recognized certificate upon successful completion of the system.",
            image: screenshotImg
        }
    ];

    return (
        <>
            <Hero />
            <div className="container mx-auto px-4 mt-12 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden bg-gray-800 border border-white/10 rounded-xl shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                                    {card.title}
                                </h2>
                                <p className="text-gray-400 leading-relaxed">
                                    {card.description}
                                </p>
                                <button className="mt-6 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2">
                                    Learn more <span>&rarr;</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Educational Components Preview */}
            <div className="bg-gray-900 border-t border-white/5 py-24">
                <div className="container mx-auto px-4 text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">React Learning Hub</h2>
                    <p className="text-gray-400">Master React concepts with these interactive examples</p>
                </div>
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <BasicProps name="Student User" age={20} isStudent={true} />
                    <ThemeToggler />
                </div>
                <div className="text-center mt-12">
                    <a
                        href="/props-context"
                        className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold"
                    >
                        Explore all examples <span>&rarr;</span>
                    </a>
                </div>
            </div>
        </>
    );
}
