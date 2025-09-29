SpaceX Mission Explorer :

A React-based web application to explore SpaceX missions using the SpaceX Public API (v4)
.
This project was built as part of the Atmosly React Intern Assignment.

Features

Browse Launches: View a list of SpaceX launches with mission name, date, rocket, and status.

Search & Filter:

Search missions by name (with debounced input).

Filter launches by year.

Toggle to show only successful launches.

Mission Details: Click a mission to open a modal with:

Mission patch image

Mission description

Rocket name

External links (Wikipedia, Webcast)

Favorites: Mark/unmark missions as favorites. Favorites are stored in localStorage and can be filtered.

Resilience: Loading skeletons, error messages, and empty states included.

Responsive UI: Works seamlessly on mobile and desktop.

Accessibility: Semantic HTML and keyboard navigation supported.

Tech Stack :

React + Vite for fast development

Tailwind CSS for styling

Axios for API calls

React Context API for state management (favorites)

React Testing Library (RTL) for testing

Deployment: Vercel / Netlify

📦 Installation & Setup

Clone the repository:

npm create@vitelatest spaceXmission
cd spaceXmission


Install dependencies:

npm install


Run the app:

npm run dev


Build for production:

npm run build


Run preview:

npm run preview

Testing

This project uses React Testing Library.
Run tests with:

npm run test

Covered Test Cases

Rendering & Filtering: Launch list updates when applying filters.

Favorites Toggle & Persistence: Favorites can be toggled and persist via localStorage.

Detail View: Modal renders mission details correctly.


Deployed in Vercel : https://space-xmission-git-master-prateeks-projects-a751c17f.vercel.app/

GitHub Repository : https://github.com/prateek-1211/SpaceXmission.git

nown Limitations / TODOs

Pagination not implemented (currently loads all launches at once).

Dark mode planned but not yet added.

Some API fields (e.g., rocket details) could be enriched further.
