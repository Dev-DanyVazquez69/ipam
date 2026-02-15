import Image from "next/image";

const TopBarHeader = () => {
    return (
        <>
            {/* Top Bar */}
            <div className="bg-linear-to-r from-yellow-400 via-green-400 to-blue-500 text-white text-sm py-2 px-6 flex justify-between">
                <div className="flex gap-4">
                    <button className="hover:underline">A+</button>
                    <button className="hover:underline">A-</button>
                    <button className="hover:underline">Alto Contraste</button>
                </div>
                <div>(98) XXXX-XXXX</div>
            </div>

            {/* Header */}
            <header className="shadow-md">
                <div className="px-6 py-4 flex justify-around bg-white">
                    <div className="hidden 2xl:block">
                        <Image
                            src="/icon0.svg"
                            alt="IPAM Logo"
                            width={60}
                            height={30}
                        />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-blue-700">
                            Instituto de Previdência e Assistência do Município - IPAM
                        </h1>
                        <p className="text-sm text-gray-600">Município de São Luís</p>
                    </div>
                    <nav className="hidden md:flex gap-6 items-center">
                        <a href="#" className="hover:text-blue-700">Início</a>
                        <a href="#" className="hover:text-blue-700">O Instituto</a>
                        <a href="#" className="hover:text-blue-700">Benefícios</a>
                        <a href="#" className="hover:text-blue-700">Transparência</a>
                        <a href="#" className="hover:text-blue-700">Contato</a>
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold">
                            Portal do Segurado
                        </button>
                    </nav>
                </div>
            </header>
        </>
    )
};

export default TopBarHeader;