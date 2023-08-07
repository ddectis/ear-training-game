import { useState } from 'react'

const DelayToggle = props => {

    const [areOptionsVisible, setAreOptionsVisible] = useState(false)

    const toggleOptionsVisible = () => {
        setAreOptionsVisible(!areOptionsVisible);
    }

    const toggleDelay = ({ currentTarget })=> {
        const delayButton = document.querySelector("#delay")
        const noDelayButton = document.querySelector("#no-delay")
        

        console.log(currentTarget.id)
        if (currentTarget.id === "delay") {
            props.setDelay("500")
            delayButton.classList.add("active");
            noDelayButton.classList.remove("active");
        } else if (currentTarget.id === "no-delay") {
            props.setDelay("0")
            delayButton.classList.remove("active");
            noDelayButton.classList.add("active");
        }
        
    }

    const optionsButtonText = areOptionsVisible ? "-" : "+"

    return (
        
        <div className="options-holder flex flex-column">
            <div><button className="unset-background unset-border unset-shadow unset-color" onClick={toggleOptionsVisible}><p>Options {optionsButtonText}</p></button></div>
            {areOptionsVisible && <div>
                <p>Play Notes of Interval:</p>
                <br />
                <button className="active"
                    id="delay"
                    onClick={toggleDelay}
                >
                    <p>Delayed</p>
                </button>
                <button
                    id="no-delay"
                    onClick={toggleDelay}
                >
                    <p>Together</p>
                </button>
                
            </div> }
            
        </div>
        )
}

export default DelayToggle;