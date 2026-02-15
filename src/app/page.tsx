import Footer from "../components/Footer";
import News from "../components/News";
import { QuestionsAccordion } from "../components/Questions";
import Services from "../components/Services";
import TopBarHeader from "../components/TopBarHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <TopBarHeader />
      {/* Hero */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-700 mb-4">
              Garantindo segurança previdenciária aos servidores municipais
            </h2>
            <p className="mb-6 text-gray-600">
              Informações sobre aposentadoria, pensão e serviços previdenciários com transparência e responsabilidade.
            </p>
            <div className="flex gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-xl font-semibold shadow">
                Portal do Segurado
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow">
                Transparência
              </button>
            </div>
          </div>
          <div className="bg-[url('/ipam.png')] bg-cover bg-center h-64 rounded-2xl flex items-center justify-center shadow-inner">
          </div>
        </div>
      </section>
      <Services />
      {/* Transparência */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center mb-10">
          <h3 className="text-3xl font-bold text-blue-700">Transparência Pública</h3>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
          {["Relatórios Financeiros", "Atuarial", "Licitações", "Prestação de Contas"].map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition hover:scale-105">
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow">
            Acessar Portal Completo
          </button>
        </div>
      </section>
      <News />
      {/* Questions */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <h3 className="text-3xl font-bold text-blue-700">Perguntas Frequentes</h3>
        </div>
        <div className="max-w-4xl mx-auto px-6">
          <QuestionsAccordion />
        </div>
      </section>
      <Footer />
    </div>
  );
};