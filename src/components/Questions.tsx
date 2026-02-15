import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const questions = [
    {
        value: "Questão-1",
        trigger: "Como funciona o sistema?",
        content:
            "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.",
    },
    {
        value: "Questão-2",
        trigger: "O que é o IPAM?",
        content:
            "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
    },
    {
        value: "Questão-3",
        trigger: "Quais métodos de pagamento vocês aceitam?",
        content:
            "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
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
