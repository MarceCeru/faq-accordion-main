
import './Section.css'
import { Header } from './Header'
import { Questions } from './Questions'
import { Line } from './Line'

export const Section = () => {

    const question = "What is Frontend Mentor, and how will it help me?";

    const answer = "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."

    const question2 = "Is Frontend Mentor free?";

    const answer2 = "Yes, Frontend Mentor is free to use. You can access all challenges and resources without any cost. However, there are premium challenges available for a fee that offer additional features and support."

    const question3 = "Can I use Frontend Mentor projects in my portfolio?"

    const answer3 = `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
    way to showcase your skills to potential employers!`

    const question4 = "How can I get help if I'm stuck on a Frontend Mentor challenge?"

    const answer4 = `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
  channel where you can ask questions and seek support from other community members.`

    return (
        <section className="section">
            <Header />
            <Questions question={question} answer={answer} />
            <Line />
            <Questions question={question2} answer={answer2} />
            <Line />
            <Questions question={question3} answer={answer3} />
            <Line />
            <Questions question={question4} answer={answer4} />
        </section>
    )
}  