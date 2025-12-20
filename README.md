# ChatGPT UI Clone

A modern, responsive React-based clone of the ChatGPT user interface, designed to provide a seamless chat experience with AI-powered search and interaction features. This project replicates the look and feel of ChatGPT, allowing users to input queries, view results, and explore various AI-driven options.

## Features

- **Interactive Chat Interface**: Content-editable input field for typing queries, with support for multi-line text and real-time input handling.
- **Search Functionality**: Press Enter or click the search button to submit queries and display results in a dedicated results area.
- **Dynamic UI States**: Welcome screen for new users, search results display, and input reset after submission.
- **Dropdown Options**: Access additional features like adding files/photos, creating images, deep research, shopping search, and more via a dropdown menu.
- **Responsive Design**: Built with Tailwind CSS for a dark-themed, mobile-friendly layout.
- **Scrollable Content**: Results area supports vertical scrolling for long responses, while keeping the topbar and input fixed.
- **Voice and Dictation Support**: Placeholder for voice input functionality (UI ready).
- **Customizable Components**: Modular structure with reusable components like Topbar, Welcome, SearchResult, and various SVG icons.

## Technology Stack

- **Frontend Framework**: React (with Hooks for state management)
- **Build Tool**: Vite (for fast development and bundling)
- **Styling**: Tailwind CSS (for utility-first CSS classes)
- **Icons**: Custom SVG components
- **Deployment**: Ready for static hosting (e.g., Vercel, Netlify)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Shanto-prime/chatgpt-ui-clone.git
   cd chatgpt-ui-clone
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

### Build for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## Usage

- **Welcome Screen**: On load, you'll see a welcome message. Start typing in the input field at the bottom.
- **Input Queries**: Use the content-editable paragraph tag to enter your query. It supports line breaks and auto-resizes.
- **Submit Search**: Press Enter or click the blue search button (appears when text is entered) to submit.
- **View Results**: Results appear in the center area, with scrolling if content is long.
- **Additional Options**: Click the "+" button to access dropdown features like file uploads or image creation.
- **Reset Input**: After submission, the input clears automatically for the next query.

## Project Structure

```
src/
├── App.css                 # Global styles
├── App.jsx                 # Main app component
├── main.jsx                # Entry point
├── assets/                 # Static assets
│   └── Partials/           # Reusable partials (e.g., Welcome.jsx)
├── Components/             # Main components
│   ├── LeftSide.jsx        # Left sidebar (if applicable)
│   ├── RightSide.jsx       # Main chat area with input and results
│   └── Topbar.jsx          # Top navigation bar
└── Partials/               # Smaller components (e.g., SearchResult.jsx, SVGs)
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

For major changes, please open an issue first to discuss what you'd like to change.

## Acknowledgments

- Inspired by the ChatGPT interface.
- Built with React and Vite for a smooth development experience.
- Icons and UI elements designed to mimic modern AI chat applications.

## Future Enhancements

- Integrate with actual AI APIs (e.g., OpenAI) for real responses.
- Add voice input functionality.
- Implement user authentication and chat history.
- Enhance accessibility and internationalization.

---

For questions or support, feel free to open an issue on GitHub.
