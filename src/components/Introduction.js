

const Introduction = props => {

    const goToSandbox = () => {
        props.setIsSandboxMode(true);
    }

    return (

            <div className="introduction">
                <p> This is an ear training game!</p> <br />
                <p>< a href="https://en.wikipedia.org/wiki/Ear_training" rel="noreferrer" target="_blank" > Ear Training </a> improves your ability to identify and differentiate the musical intervals that make up an octave.</p>
                <br /><p> Functional pitch recognition is a fundamental, essential skill every musicial must hone.</p><br/>
            <button className="inverse-inverse-colors" onClick={goToSandbox}>New to intervals? Click here!</button>
            </div>
   


        ) 
}

export default Introduction