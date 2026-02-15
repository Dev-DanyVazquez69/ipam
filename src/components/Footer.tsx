
const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer className="bg-linear-to-r from-yellow-400 via-green-400 to-blue-500 text-white py-10">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
                    <div>
                        <h5 className="font-semibold mb-2">Institucional</h5>
                        <p className="text-sm">O Instituto</p>
                    </div>
                    <div>
                        <h5 className="font-semibold mb-2">Serviços</h5>
                        <p className="text-sm">Benefícios</p>
                    </div>
                    <div>
                        <h5 className="font-semibold mb-2">Transparência</h5>
                        <p className="text-sm">Relatórios</p>
                    </div>
                    <div>
                        <h5 className="font-semibold mb-2">LGPD</h5>
                        <p className="text-sm">Política de Privacidade</p>
                    </div>
                </div>

                <div className="text-center mt-8 text-sm">
                    © Daniel dos Santos Pessoa 2026. Todos os direitos reservados
                </div>
            </footer>
        </>
    )
};

export default Footer;