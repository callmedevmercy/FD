AccessTravel 🌍Empowering Accessible Travel for Everyone.AccessTravel is a web-based platform designed to bridge the information gap for travelers with disabilities.
It provides a curated database of accessible hotels, attractions, and restaurants, allowing users to filter locations based on their specific physical or sensory needs.
🚀 Live DemoFrontend Deployment: [https://fd-phi-wheat.vercel.app/]
FeaturesCustom Accessibility Profiles: Users can define their specific needs (Wheelchair, Braille, Hearing Assistance) which are saved to localStorage for a persistent, tailored experience.Dynamic Search & 
Filter: A real-time exploration page that fetches data from a cloud-hosted MongoDB database and filters it against the user's saved profile.

Detailed View: Specific pages for each location showing high-quality images, descriptions, and a checklist of verified accessibility features.Responsive UI: A mobile-first design featuring a custom hamburger navigation menu and optimized layouts for all screen sizes.

🛠️ Tech StackLayerTechnologyFrontendHTML5, Tailwind CSSLogicJavaScript (ES6+), AxiosStorageBrowser LocalStorage (Client-side)BackendNode.js, Express (Hosted on Render)DatabaseMongoDB📂 
Project Structure
```text
AccessTravel/
├── asset/
│   ├── js/
│   │   ├── api/ 
│   │   │   └── apiClient.js        # Axios instance & Interceptors
│   │   ├── components.js            # Dynamic Navbar/Footer loader
│   │   └── main.js                  # Mobile menu & Global UI logic
│   └── styles/ 
│       └── main.css                 # Custom CSS overrides
├── components/
│   ├── navbar.html                  # Responsive navigation component
│   └── footer.html                  # Footer component
├── pages/
│   ├── accessability.html           # Profile creation & local save logic
│   ├── explore.html                 # Main search & filtering engine
│   └── hotel-details.html           # Dynamic single-place display
└── index.html                       # Landing page

```
🔧 Installation & Local SetupTo run this project locally, ensure you have a modern web browser and follow these steps:Clone the RepositoryBashgit clone https://github.com/Accesstrvl/FD.git
Navigate to the FolderBashcd FD
Run with Live ServerOpen index.html using the VS Code Live Server extension or simply drag the file into your browser.🤝 Project BackgroundThis project was developed as a Final Year Capstone Project. It aims to solve real-world mobility challenges by providing a reliable, community-verified data source for accessible tourism.Lead Developer: Mercy📝 Assistant Lead :Sean
LicenseCopyright © 2026 Mercy/AccessTravel/TECHCRUSH. This project is for educational purposes.
