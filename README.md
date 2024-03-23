# LiveLens

LiveLens is a state-of-the-art, real-time streaming platform developed using Next.js. It's designed to offer an unparalleled interactive and immersive experience for both streamers and viewers, leveraging the latest in web technology to provide innovative streaming solutions, dynamic user interaction, and a robust management system. This project demonstrates advanced proficiency in front-end development, back-end integration, and real-time data handling, all wrapped in a user-friendly design.

**Try it out now: [LiveLens Live Demo](https://livelens-livestream-nextjs.vercel.app/)**

**Steps to use LiveLens: [LiveLens User Manual](LiveLens_User_Manual.md)**

## Application Screenshots
![homepage](https://github.com/Md-Kaish-Alam/livelens-livestream-nextjs/assets/82415398/0829cf35-cf66-4c1a-af5c-48e971547da7)
![livestreaming image](https://github.com/Md-Kaish-Alam/livelens-livestream-nextjs/assets/82415398/3cbf2aed-36ee-4036-ad8b-1f47ddd47f76)

## Key Achievements

- **Innovative Streaming Solutions**: Seamless broadcasting capabilities using RTMP/WHIP protocols, integrated with OBS and similar software.
- **Dynamic User Interaction**: Real-time features like live chat (socket.io), viewer count, live statuses, and personalized viewer color codes in chat.
- **Robust User Management**: Comprehensive user functionality including authentication (Clerk), thumbnail uploads (Uploadthings), following system, and custom permissions.
- **Efficient Data Handling**: Syncing user and live status information with a MySQL database via Webhooks, supported by Prisma for ORM.
- **Engaging UI/UX Design**: A visually appealing interface crafted with ShadcnUI and Tailwind CSS, offering features like collapsible layout and theatre mode.
- **Advanced Features for Streamers**: A dashboard for stream management, analytics, and real-time interactions, powered by livekit-client and livekit-server-sdk.
- **Optimized Performance & SEO**: Utilizes Next.js for Server-Side Rendering (SSR), enhancing load times and search engine visibility.
- **Scalable Architecture**: Future-proof design with grouped routes & layouts for ease of maintenance and feature expansion.

## Built With

- [Next.js](https://nextjs.org/) & TypeScript - The foundation of our platform, offering robust app routing and type safety.
- [Tailwind CSS](https://tailwindcss.com/) & [ShadcnUI](https://shadcnui.com/) - For crafting a responsive and intuitive user interface.
- [Socket.io](https://socket.io/) - Enables real-time, bidirectional communication.
- [Prisma](https://www.prisma.io/) - Next-generation ORM for Node.js and TypeScript.
- [Supabase](https://supabase.io/) - An open-source Firebase alternative providing databases and authentication.
- [MySQL](https://www.mysql.com/) - The relational database for storing user and streaming data.
- [Clerk](https://clerk.dev/) - For secure user authentication and management.
- [JWT](https://jwt.io/) - Implements JSON Web Tokens for secure data transmission.
- [Sonner](https://ui.shadcn.com/docs/components/sonner) - Custom notification system.
- [Uploadthings](https://uploadthing.com/) - Image upload functionality.
- [livekit-client](https://docs.livekit.io/) & [livekit-server-sdk](https://docs.livekit.io/) - For real-time video and audio streaming.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Before you begin, ensure you have the latest version of npm installed:
```bash
npm install npm@latest -g
```
### Installation
- **Clone the repo**
  
```bash
git clone https://github.com/Md-Kaish-Alam/livelens-livestream-nextjs.git
```
- **Install NPM packages**
  
```bash
npm install
```
- **Running the project**
  
After installation, you can start the project locally using npm command:
```bash
npm run dev
```
This command starts the developement server on `http://localhost:3000/`. Open your browser and navigate to this address to view the application.

### Folder Structure
Below is an overview of the key directories and files within the LiveLens project:

```bash
LiveLens/
│
├── pages/           # Next.js pages directory, each file represents a route
│   ├── api/         # API routes
│   ├── _app.js      # Main application setup
│   └── index.js     # The entry point of the application
│
├── public/          # Static files like images, fonts, etc.
│
├── styles/          # Global styles and Tailwind configuration
│   ├── globals.css
│   └── tailwind.config.js
│
├── components/      # Reusable UI components
│
├── lib/             # Library code for external services integration
│
└── utils/           # Utility functions

```
## Some other screenshots

Authentication

![authentication](https://github.com/Md-Kaish-Alam/livelens-livestream-nextjs/assets/82415398/ea2bfb47-349b-44f1-bf93-ff35a5a9cd0f)


After authentication landing page

![authentication](https://github.com/Md-Kaish-Alam/livelens-livestream-nextjs/assets/82415398/f5ce445c-e281-4dc6-98f9-0470e820ba75)


User Profie Page

![profile page](https://github.com/Md-Kaish-Alam/livelens-livestream-nextjs/assets/82415398/2b69b37c-8da9-41aa-acc8-0a14b766cdf4)


User Dashboard Page

![User dashboard page](https://github.com/Md-Kaish-Alam/livelens-livestream-nextjs/assets/82415398/ee582d27-295c-4fa0-b702-9bd9cd33f6fc)


Streaming Key and Url Generation page

![Keys and Urls generation](https://github.com/Md-Kaish-Alam/livelens-livestream-nextjs/assets/82415398/a11e6081-2ab7-4ea7-9a19-5e91b4cfaed7)

## Deployment

This application is prepared for deployment using Vercel, ensuring a smooth transition from development to production. Consult the [Vercel deployment documentation](https://vercel.com/) for detailed instructions.

---

LiveLens exemplifies the power of modern web technologies to create deeply engaging and interactive user experiences. It stands as a testament to innovation, performance, and user satisfaction. Enjoy exploring and streaming on LiveLens!
 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


