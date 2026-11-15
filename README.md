# DevScope

DevScope is a lightweight web application that helps recruiters and teams explore GitHub developer profiles, review their public repositories, and save interesting developers to a shortlist.

## Features

- **Search GitHub users** by username.
- **Explore developer profiles**, including their avatar, location, public repository count, followers, and following.
- **Review public repositories** with details such as repository name, primary language, and stars.
- **Build a candidate shortlist** by saving selected GitHub users.
- **View saved candidates** on a dedicated shortlist page, including their GitHub username, avatar, language, and date added.

## Tech Stack

- HTML5
- JavaScript (ES Modules)
- Tailwind CSS (browser CDN)
- GitHub REST API
- MockAPI for storing shortlisted candidates
- Axios (listed as a project dependency)

## Project Structure

```text
DevScope/
├── assets/
│   └── Image/
├── css/
│   └── style.css
├── src/
│   ├── api.js
│   ├── profile.js
│   ├── profileHtml.js
│   ├── search.js
│   ├── shortlist.js
│   ├── shortlistHtml.js
│   └── utlis.js
├── index.html
├── profile.html
├── shortlist.html
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Git
- Node.js and npm
- A modern web browser

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aymanechoukri/DevScope.git
   ```

2. Open the project folder:

   ```bash
   cd DevScope
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Run the project using a local development server. For example, with the **Live Server** extension in Visual Studio Code, open `index.html` and choose **Open with Live Server**.

> The project uses JavaScript modules, so run it through a local HTTP server rather than opening the HTML file directly with `file://`.

## How to Use

1. Open the **Search** page.
2. Enter a GitHub username and start the search.
3. Open the developer profile to inspect profile information and public repositories.
4. Select **Add to shortlist** to save the candidate.
5. Open the **Shortlist** page to see saved candidates.

## APIs

- **GitHub Users API:** `https://api.github.com/users` — retrieves public user profiles and repositories.
- **MockAPI:** stores shortlisted candidate records.

The MockAPI endpoint is configured in `src/api.js`.

## Notes

- GitHub API rate limits may affect how often profiles and repositories can be requested.
- Only public GitHub profile and repository information is used.
- Do not commit private API tokens or credentials to the repository.
- This project is a front-end application; shortlist persistence is handled through the configured MockAPI service.

## Future Improvements

- Add filtering and sorting for shortlisted candidates.
- Implement candidate status management (for example, contact, interview, selected, or rejected).
- Improve form validation and API error handling.
- Add pagination or repository filtering for profiles with many repositories.
- Make the interface fully responsive and improve accessibility.

## Author

**Aymane Chokri**

- GitHub: [@aymanechoukri](https://github.com/aymanechoukri)

---

Built as a practical project to explore GitHub API integration and candidate shortlisting.
