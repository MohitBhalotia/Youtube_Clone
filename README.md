# YouTube Clone Application

A fully functional YouTube clone built with **React**, **Redux Toolkit**, and **Tailwind CSS**, featuring video playback, search functionality, and infinite scrolling.

---

## **Features**

- **Home Feed**: Displays a grid of videos fetched using the YouTube API with infinite scrolling.
- **Video Playback**: Play videos using an embedded YouTube player with detailed video and channel information.
- **Search Functionality**: Dynamic search results with infinite scrolling.
- **Recommended Videos**: Personalized video recommendations displayed on the watch page.
- **Responsive Design**: Tailored for all devices using Tailwind CSS.

---

## **Tech Stack**

- **Frontend**: React, Tailwind CSS
- **State Management**: Redux Toolkit
- **API Requests**: Axios
- **Routing**: React Router
- **Icons**: React Icons

---

## **Getting Started**

### **Prerequisites**

Ensure you have the following installed:

- **Node.js**: v14+
- **npm** or **yarn**

### **Setup**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/youtube-clone.git
   cd youtube-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your YouTube Data API key:
     ```env
     VITE_YOUTUBE_DATA_API_KEY=your_api_key_here
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the application:
   Navigate to `http://localhost:3000` in your browser.

---

## **Folder Structure**

```plaintext
src/
├── components/        # Reusable UI components
│   ├── Card.jsx
│   ├── Hamburger.jsx
│   ├── Logo.jsx
│   ├── Navbar.jsx
│   ├── RecommendedVideoCard.jsx
│   ├── Search.jsx
│   ├── SearchCard.jsx
│   ├── Sidebar.jsx
│   ├── Spinner.jsx
├── pages/             # Page-level components
│   ├── Home.jsx
│   ├── Search.jsx
│   ├── Watch.jsx
├── store/             # Redux store and slices
│   ├── reducers/      # Async thunks
│   │   ├── getHomeVideos.js
│   │   ├── getSearchVideos.js
│   │   ├── getRecommendedVideo.js
│   │   ├── getVideoDetails.js
│   ├── slices/        # Redux slices
│   │   ├── youtubeSlice.js
├── utils/             # Utility functions
│   ├── convertRawtoString.js
│   ├── parseData.js
│   ├── parseVideoDuration.js
│   ├── timeSince.js
```

---

## **Key Components**

### **Navbar**
- Includes a search bar with auto-focus and submit functionality.
- User interaction elements like microphone, notifications, and profile.

### **Sidebar**
- Provides navigation links like Home, Shorts, Subscriptions, and Playlists.

### **Home**
- Displays videos in a responsive grid layout with infinite scrolling.

### **Search**
- Fetches and displays search results dynamically with `InfiniteScroll`.

### **Watch**
- Video player with detailed video and channel information.
- Recommended videos listed alongside.

---

## **API Integration**

The application uses the **YouTube Data API** for:
- Fetching video metadata and statistics.
- Displaying search results and recommendations.
- Supporting infinite scrolling with pagination.

---


## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**

- **React**: For the robust frontend framework.
- **Tailwind CSS**: For the utility-first styling.
- **YouTube Data API**: For providing video data.

---


