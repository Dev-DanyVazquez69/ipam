
const Services = () => {
    return (
        <>
            {/* Serviços */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6 text-center mb-12">
                    <h3 className="text-3xl font-bold text-blue-700">Serviços ao Segurado</h3>
                </div>

                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
                    {["Aposentadoria", "Pensão", "Protocolo Digital", "Simulador"].map((item, index) => (
                        <div key={index} className=" shadow-md rounded-2xl p-6 hover:shadow-xl transition hover:scale-105">
                            <h4 className="font-semibold text-lg mb-2">{item}</h4>
                            <p className="text-sm text-gray-600">
                                Acesse informações e serviços relacionados a {item.toLowerCase()}.
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
};

export default Services;