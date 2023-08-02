
const ToneGenerator = () => {


    const GenerateTone = () => {
        console.log("Tone Generator Click");

        const getRandomInt = max => {
            return Math.floor(Math.random() * max)
        }

        let rnd = getRandomInt(24)
        let audio = new Audio(`assets/audio/tones/${rnd}.mp3`)
            audio.play();
        
    }

    return (
        <div>
            <button onClick={GenerateTone}>Generate Tone</button>
            
        </div>
        )
}

export default ToneGenerator;