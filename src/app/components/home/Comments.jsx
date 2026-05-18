import { Marquee } from "../ui/marquee";

const reviews = [
    {
        name: "Jose Manuel",
        body: "Increíble experiencia con el equipo, su profesionalismo y atención al detalle me dejaron totalmente satisfecho.",
    },
    {
        name: "Laura Martinez",
        body: "La calidad de atención y la calidez humana que recibí fue excepcional, me sentí en confianza desde el primer momento.",
    },
    {
        name: "Juan Perez",
        body: "Un servicio de primer nivel con instalaciones de vanguardia. La atención personalizada hizo que mi experiencia fuera realmente especial.",
    },
    {
        name: "Ana Garcia",
        body: "Me realizaron un implante dental y el resultado fue excelente. La atención fue personalizada y me sentí en confianza durante todo el proceso.",
    },
    {
        name: "Carlos Rodriguez",
        body: "El equipo de la clínica es muy profesional y amable. Siempre están dispuestos a resolver mis dudas y a brindarme el mejor servicio.",
    },
    {
        name: "Mariana Lopez",
        body: "Me sentí cómoda desde el primer momento. La atención fue personalizada y profesional, y los resultados superaron mis expectativas.",
    },
];

const ReviewCard = ({ name, body }) => {
    return (
        <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
            <div className="flex flex-row items-center gap-2">

                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium  ">
                        {name}
                    </figcaption>
                </div>
            </div>
            <blockquote className="mt-2 text-sm" style={{ fontFamily: 'Inter' }}>{body}</blockquote>
        </figure>
    );
};

const Comments = () => {
    return (
        <section id="comments" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-5xl text-gray-700 font-semibold text-center mb-2" style={{ fontFamily: 'Oswald' }}>Lo que dicen nuestros pacientes</h2>
                <p className="text-gray-600 text-center mb-2 " style={{ fontFamily: 'Inter' }}>Algunos testimonios de éxito de nuestros pacientes</p>
                <div className="relative flex h-[500px] w-full flex-col items-center mt-10 overflow-hidden rounded-lg bg-background">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {reviews.slice(0, reviews.length / 2).map((review) => (
                            <ReviewCard key={review.name} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s]">
                        {reviews.slice(reviews.length / 2).map((review) => (
                            <ReviewCard key={review.name} {...review} />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
                </div>
            </div>
        </section>
    );
}

export default Comments;