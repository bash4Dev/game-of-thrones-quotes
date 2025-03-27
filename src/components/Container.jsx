import Buttons from "./Buttons"
import QuoteCard from "./QuoteCard"
import { useState } from "react"

const Container = () => {
    const [quote, setQuote] = useState(null);

    const generateNewQuote = async () => {
        console.log('Ok')
        try {
            const res = await fetch('https://thronesapi.com/api/v2/Characters/');
            const characters = await res.json();
            const quoteRes = await fetch('https://api.gameofthronesquotes.xyz/v1/random');
            const quoteData = await quoteRes.json();
            console.log("res: ", quoteData, quoteData.sentence)

            // Match the APIs data
            const matchingCharacter = characters.find(char => char.fullName === quoteData.character.name);
            setQuote({...quoteData, authorImg: matchingCharacter?.imageUrl})  
        } catch (error) {
            console.log(error) 
        } 
    }

    return (
        <div className='container'>
            <h1 style={titleStyles}>Game Of Thrones Quotes</h1>
            <QuoteCard quoteData={quote}/>
            <Buttons generateNewQuote={generateNewQuote} />
        </div>
    )
}

// Container.defaultProps = {
//     title: 'Game Of Thrones Quotes'
// }

const titleStyles = {
    textAlign: 'center',
    fontSize: '2.8rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
}

export default Container;