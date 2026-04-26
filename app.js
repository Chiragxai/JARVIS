const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } 
    else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...");
    } 
    else {
        speak("Good Evening Sir...");
    }
}

window.addEventListener("load", () => {
    speak("Initializing JARVIS...");
    wishMe();
});

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    let transcript = event.results[event.resultIndex][0].transcript;

    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {

    if (message.includes("hey") || message.includes("hello")) {
        speak("Hello Sir, How May I Help You?");
    }

    else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    }

    else if (message.includes("weather")) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=YOUR_API_KEY")
            .then(response => response.json())
            .then(data => {
                let weather = `The temperature in Delhi is ${Math.round(data.main.temp - 273.15)} degrees Celsius with ${data.weather[0].description}.`;
                speak(weather);
            });
    }

    else if (message.includes("play music")) {
        window.open("https://open.spotify.com", "_blank");
        speak("Playing your favorite music...");
    }

    else if (message.includes("tell me a joke")) {
        let jokes = [
            "Why don't scientists trust atoms? Because they make up everything!",
            "Why did the computer go to the doctor? Because it had a virus!"
        ];

        let joke = jokes[Math.floor(Math.random() * jokes.length)];
        speak(joke);
    }

    else if (message.includes("news")) {
        window.open("https://news.google.com", "_blank");
        speak("Fetching the latest news for you...");
    }

    else if (message.includes("set alarm")) {
        speak("Please set an alarm on your phone or system settings, as I cannot do it directly yet.");
    }

    else if (message.includes("volume up")) {
        speak("Increasing system volume");
        // Add code to increase volume
    }

    else if (message.includes("volume down")) {
        speak("Decreasing system volume");
        // Add code to decrease volume
    }

    else if (message.includes("open calculator")) {
        window.open("Calculator:///");
        speak("Opening Calculator...");
    }

    else if (message.includes("current time")) {
        let time = new Date().toLocaleTimeString();
        speak("The current time is " + time);
    }

    else if (message.includes("current date")) {
        let date = new Date().toLocaleDateString();
        speak("Today's date is " + date);
    }

    else if (message.includes("open notepad")) {
        window.open("notepad:///");
        speak("Opening Notepad...");
    }

    else if (message.includes("search for")) {
        let query = message.replace("search for", "").trim();

        window.open(
            `https://www.google.com/search?q=${query.replace(" ", "+")}`,
            "_blank"
        );

        speak("Searching for " + query + " on Google");
    }

    else if (message.includes("send email")) {
        window.open("https://mail.google.com", "_blank");
        speak("Opening Gmail, please compose your email");
    }

    else if (message.includes("read me a story")) {
        let stories = [
            "Once upon a time, in a faraway kingdom, there was a wise old king who...",
            "A young adventurer set out on a journey to find a hidden treasure..."
        ];

        let story = stories[Math.floor(Math.random() * stories.length)];
        speak(story);
    }

    else {
        window.open(
            `https://www.google.com/search?q=${message.replace(" ", "+")}`,
            "_blank"
        );

        speak("I found some information on Google");
    }
}