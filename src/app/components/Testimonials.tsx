export default function Testimonials() {
    const testimonials = [
        {
            name: "Rajiv Sharma",
            role: "Real Estate Developer",
            quote: "IBT provided us with complete clarity and professional handling of our project. Their team is incredibly knowledgeable and passionate.",
            image: "/testimonials/client1.jpg"
        },
        {
            name: "Anita Verma",
            role: "Architect & Consultant",
            quote: "From planning to execution, the entire process was managed seamlessly. We highly recommend IBT for any construction or design needs.",
            image: "/testimonials/client2.jpg"
        },
        {
            name: "Dr. Sandeep Gupta",
            role: "Hospital Administrator",
            quote: "Their commitment to quality and safety helped us deliver our hospital project ahead of schedule.",
            image: "/testimonials/client3.jpg"
        }
    ];

    return (
        <section id="testimonials" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    What Our Clients Say
                </h2>
                <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
                    Our clients’ satisfaction is at the heart of everything we do. Here’s what they have to say about working with Infinite Building Technologies.
                </p>

                <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-20 h-20 rounded-full object-cover border-4 border-green-500 shadow-md"
                            />
                            <p className="mt-4 text-gray-700 italic">
                                "{testimonial.quote}"
                            </p>
                            <h3 className="mt-6 font-semibold text-gray-900">{testimonial.name}</h3>
                            <span className="text-sm text-gray-500">{testimonial.role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
