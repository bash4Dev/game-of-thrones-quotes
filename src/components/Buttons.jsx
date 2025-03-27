import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Buttons = ({generateNewQuote}) => {

    return (
        <>
            <div id="buttons">
                <div class="social-links">
                    <a href="#" class="social-btn twitter" id="twitterBtn" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                    </a>
                    <a href="#" class="social-btn linkedin" id="linkedinBtn" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
                    </a>
                </div>
                <button class="new-quote-btn" onClick={generateNewQuote}>Get New Quote</button>
            </div>
        </>
    )
}

export default Buttons