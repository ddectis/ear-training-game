const DelayToggle = props => {

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


    return (
        <div className="options-holder">
            <p><b><u>Option:</u></b> Play Notes of Interval:</p>
            <br/>
            <button className="active"
                id="delay"
                onClick={toggleDelay}
            >
                <p className="subtext">Delayed</p>
            </button>
            <button 
                id="no-delay"
                onClick={toggleDelay}
            >
                <p className="subtext">Together</p>
            </button>
            
        </div>
        )
}

export default DelayToggle;