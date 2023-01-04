import './FAQ.css';
import Accordion from './Accordion';

function FAQ() {
    const accordionData = [
        {
            index: '01',
            title: 'How much time does it take ?',
            content: `Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.`
        },
        {
            index: '02',
            title: 'What is your class naming convention ?',
            content: `Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.`
        },
        {
            index: '03',
            title: 'How do we communicate ?',
            content: `Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.`
        },
        {
            index: '04',
            title: 'I have a bigger project. Can you handel it ?',
            content: `Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.`
        },
        {
            index: '05',
            title: 'What is your class naming convention ?',
            content: `Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.`
        }
    ];
    return <>
        <div className="FAQ">
            <div>
                <h3>Frequently asked question</h3>
                <label htmlFor=""><a href="">Contact us for more info</a></label>
            </div>
            <div className="FAQ-right">
                <ul>
                        <div className="accordion">
                            {accordionData.map(({ index, title, content }) => (
                                <li>
                                    <Accordion index = {index} title={title} content={content} />
                                </li>
                            ))}
                        </div>

                </ul>
            </div>
        </div>
    </>;
}

export default FAQ;