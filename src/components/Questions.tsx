import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const questions = [
    {
        value: "Questão-1",
        trigger: "Onde é localizado?",
        content:
            "O IPAM está localizado na Rua 15 de Novembro, 123, Centro, São Luis - MA."
    },
    {
        value: "Questão-2",
        trigger: "O que é o IPAM?",
        content:
            "O IPAM é o Instituto de Previdência e Assistência do Município de São Luis. É responsável por administrar o sistema previdenciário municipal, garantindo benefícios como aposentadorias, pensões e outros serviços de assistência social.",
    },
    {
        value: "Questão-3",
        trigger: "Quais os tipos de aposentadorias existentes?",
        content:
            "Apodentadoria por idade: Requer 65 anos para homens e 62 anos para mulheres, com pelo menos 15 anos de contribuição. Aposentadoria por tempo de contribuição: Requer 35 anos de contribuição para homens e 30 anos para mulheres, independentemente da idade. Aposentadoria especial: Para trabalhadores expostos a condições prejudiciais à saúde, com requisitos específicos de tempo de contribuição e exposição.",
    },
]

export function QuestionsAccordion() {
    return (
        <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="text-9xl"
        >
            {questions.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger className="text-xl hover:no-underline">{item.trigger}</AccordionTrigger>
                    <AccordionContent className="text-base">{item.content}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
