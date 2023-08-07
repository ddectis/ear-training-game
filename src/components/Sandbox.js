const Sandbox = props => {

    const returnToGame = () => {
        props.setIsSandboxMode(false)

    }

    return (
        <div className="stage-info flex-column">
            <h1>Introduction to Intervals</h1>

            <button onClick={returnToGame}>Return to game</button>
        </div>    
        )
    
}

export default Sandbox;