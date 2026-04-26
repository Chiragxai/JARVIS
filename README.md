# JARVIS - Virtual Assistant
![JARVIS Preview](https://aagmaaltv.in/wp-content/uploads/2026/04/main.png)

A simple browser-based virtual assistant built using **HTML, CSS, and JavaScript** with **Speech Recognition** and **Speech Synthesis**.

JARVIS can listen to voice commands, respond with speech, open websites, search Google, tell jokes, read stories, check time/date, and more.

---

## Features

* Voice recognition using Web Speech API
* Text-to-speech responses
* Open Google
* Search anything on Google
* Weather updates (with OpenWeather API)
* Play music using Spotify
* Tell jokes
* Read short stories
* Open Gmail
* Open latest news
* Tell current time and date
* Greeting based on time of day

---

## Project Structure

```text
JARVIS/
│
├── index.html
├── style.css
├── app.js
├── giphy.gif
├── avatar.png
└── README.md
```

---

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Web Speech API
* OpenWeather API
* Font Awesome

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/chiragxai/JARVIS.git
```

### 2. Open Project Folder

```bash
cd JARVIS
```

### 3. Add Required Files

Make sure these files exist:

* `giphy.gif`
* `avatar.png`

Both should be placed in the root project folder.

### 4. Add Weather API Key

In `app.js`, replace:

```javascript
YOUR_API_KEY
```

with your real API key from:

[https://openweathermap.org/api](https://openweathermap.org/api)

Example:

```javascript
appid=your_real_api_key_here
```

### 5. Run the Project

Simply open `index.html` in your browser.

For best results, use:

* Google Chrome
* Microsoft Edge

---

## Important Notes

Some commands like:

* Open Calculator
* Open Notepad
* Volume Up / Down

may not work properly inside browsers because browsers restrict direct system access.

These features work better with desktop applications like Electron or Python integration.

---

## Example Voice Commands

Try saying:

* "Hello"
* "Open Google"
* "Play music"
* "Tell me a joke"
* "Current time"
* "Current date"
* "Search for AI tools"
* "Read me a story"
* "News"

---

## Future Improvements

* WhatsApp integration
* System volume control
* Open desktop apps directly
* AI chatbot integration
* Personal reminders and alarms
* Better UI animations

---

## Author

**Chirag**

BCA in Artificial Intelligence & Data Science
Pursuing M.Sc in Artificial Intelligence & Data Science

---

## License

This project is for learning and educational purposes.
