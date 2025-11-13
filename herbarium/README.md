# Echo Next.js Chat Template

A full-featured chat application built with Next.js and Echo, showcasing AI billing, user management, and authentication.

## Quick Start

Use the Echo CLI to create a new project with this template:

```bash
npx echo-start@latest --template next-chat
```

You'll be prompted for your Echo App ID. Don't have one? Get it at [echo.merit.systems/new](https://echo.merit.systems/new).

---

This is a demonstration Next.js application showcasing the power and simplicity of [Echo](https://echo.merit.systems) - a platform that provides AI billing, user management, and authentication for AI applications.

## 🚀 What is Echo?

Echo is a comprehensive platform that handles the complex infrastructure needed for AI applications, including:

- **AI Billing & Usage Tracking** - Automatic cost tracking and billing for AI API calls
- **User Authentication** - Secure sign-in and session management
- **Balance Management** - Real-time balance tracking and top-ups
- **Multi-Model Support** - Seamless integration with OpenAI, Anthropic, and other AI providers

## 📋 Demo Features

This demo application demonstrates:

- ✅ **AI Chat Interface** - Interactive chat with GPT-4o and GPT-5 nano models
- ✅ **Echo Authentication** - Secure user sign-in with Echo accounts
- ✅ **Real-time Balance Display** - Live balance tracking in the header
- ✅ **Automatic Billing** - AI usage automatically tracked and billed through Echo
- ✅ **Modern UI Components** - Beautiful, responsive interface with Tailwind CSS
- ✅ **Streaming Responses** - Real-time AI response streaming with reasoning display

## 🏗️ Architecture Overview

### Application Structure

```
src/
├── app/
│   ├── _components/
│   │   ├── chat.tsx              # Main chat interface component
│   │   ├── echo/
│   │   │   ├── balance.tsx       # Real-time balance display
│   │   │   └── sign-in-button.tsx # Echo authentication button
│   │   └── header.tsx            # App header with auth state
│   ├── api/
│   │   ├── chat/
│   │   │   └── route.ts          # Chat API endpoint using Echo OpenAI
│   │   └── echo/
│   │       └── [...echo]/
│   │           └── route.ts      # Echo webhook handlers
│   ├── layout.tsx                # Root layout with Echo integration
│   └── page.tsx                  # Main page with auth guard
├── echo/
│   └── index.ts                  # Echo SDK configuration
└── components/
    ├── ai-elements/              # Reusable AI chat components
    └── ui/                       # Base UI components (shadcn/ui)
```

### Key Components

#### 1. Echo SDK Configuration (`src/echo/index.ts`)

```typescript
import Echo from '@merit-systems/echo-next-sdk';

export const { handlers, isSignedIn, openai, anthropic } = Echo({
  appId: 'your-echo-app-id',
});
```

#### 2. Authentication Flow

- **Sign-in**: Uses Echo's built-in authentication system
- **Session Management**: Automatic session handling across requests
- **Auth Guards**: Pages check authentication status server-side

#### 3. AI Integration

- **Model Access**: Direct access to OpenAI models through Echo
- **Automatic Billing**: All AI usage is tracked and billed automatically
- **Streaming**: Real-time response streaming with reasoning display

#### 4. Balance Management

- **Real-time Updates**: Live balance display in the header
- **Automatic Deduction**: Costs automatically deducted from user balance
- **Top-up Integration**: Users can add funds through Echo platform

## 🔧 Echo Integration Details

### Authentication

The app uses Echo's authentication system which provides:

- Secure OAuth-based sign-in
- Session management
- User identity verification

```typescript
// Check if user is signed in (server-side)
const signedIn = await isSignedIn();

// Sign in user (client-side)
import { signIn } from '@merit-systems/echo-next-sdk/client';
signIn();
```

### AI Model Access

Echo provides direct access to AI models with automatic billing:

```typescript
import { openai } from '@/echo';

// Use OpenAI models with automatic billing
const result = streamText({
  model: openai('gpt-4o'), // or "gpt-5-nano"
  messages: convertToModelMessages(messages),
});
```

### Balance Management

Real-time balance tracking and display:

```typescript
import { useEcho } from '@merit-systems/echo-next-sdk/client';

const echoClient = useEcho();
const balanceData = await echoClient.balance.getBalance();
```

### API Endpoints

Echo provides webhook handlers for various platform events:

```typescript
// src/app/api/echo/[...echo]/route.ts
import { handlers } from '@/echo';
export const { GET, POST } = handlers;
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- An Echo account ([sign up here](https://echo.merit.systems))

### Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd my-next-ai-app
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Configure Echo**
   - Visit [echo.merit.systems](https://echo.merit.systems)
   - Create a new app and get your App ID
   - Update `src/echo/index.ts` with your App ID

4. **Run the development server**

   ```bash
   pnpm dev
   ```

5. **Open the app**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Setup

No environment variables needed! Echo handles all configuration through the App ID.

## 📚 Learn More

### Echo Documentation

- **Platform**: [echo.merit.systems](https://echo.merit.systems)
- **Next.js Integration Guide**: [echo.merit.systems/docs/nextjs](https://echo.merit.systems/docs/nextjs)
- **API Documentation**: Available in your Echo dashboard

### Technology Stack

- **Framework**: Next.js 15 with App Router
- **AI SDK**: Vercel AI SDK with Echo integration
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives with shadcn/ui
- **Authentication**: Echo built-in auth system
- **Billing**: Automatic through Echo platform

## 🔄 How It Works

1. **User Authentication**: Users sign in through Echo's secure authentication system
2. **Balance Check**: App displays user's current balance in real-time
3. **AI Interaction**: Users chat with AI models (GPT-4o, GPT-5 nano)
4. **Automatic Billing**: Each AI request is automatically tracked and billed
5. **Balance Updates**: User balance is updated in real-time after each request

## 💡 Key Benefits of Echo

- **Zero Infrastructure Setup**: No need to manage API keys, billing systems, or user databases
- **Automatic Cost Tracking**: Every AI request is tracked and billed automatically
- **Built-in Authentication**: Secure user management out of the box
- **Multi-Model Support**: Access to multiple AI providers through one interface
- **Real-time Balance**: Users can see their usage and remaining balance instantly
- **Developer Friendly**: Simple SDK integration with minimal boilerplate

## 🚀 Deployment

This app can be deployed to any platform that supports Next.js:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your git repository
- **Railway**: `railway deploy`
- **Docker**: Use the included Dockerfile

Make sure to update your Echo app configuration with your production domain.

## 📞 Support

- **Echo Platform**: [echo.merit.systems](https://echo.merit.systems)
- **Documentation**: [echo.merit.systems/docs/nextjs](https://echo.merit.systems/docs/nextjs)
- **Issues**: Create an issue in this repository

---

Built with ❤️ using [Echo](https://echo.merit.systems) - The simplest way to build AI applications with built-in billing and user management.


Roadmap: 
1. Core Plant Management
1.1. Plant Inventory (The Specimen Archive)
Add plants manually, by photo, or via AI recognition
Auto-fetch species information (light, water, humidity, toxicity, etc.)
Assign custom names & scientific names
Generate unique accession IDs (Herbarium-style catalog numbers)
Assign plants to locations (Living Room, Office, South Window, etc.)

1.2. Specimen Sheets (Plant Profile Pages)
Each plant gets a layout styled like a botanical herbarium sheet:
High-res plant image at top
Scientific classification (family, genus, species)
Origin or acquisition date
Growth status indicator
Notes section with academic-style formatting
Environmental needs at a glance (icons)

1.3. Photo Gallery
Per-plant photo stream
Auto-sorting by date
Before/after slider for growth comparison
Optional “pressed plant” monochrome photo filter for fun

2. Care & Maintenance Tracking
2.1. Watering & Fertilizing Logs
Track last watering with timestamps
Recurring schedules based on species needs
Fertilizer type, amount, and frequency
Soil moisture notes
Notifications (“Specimen #019 overdue for hydration by 3 days”)

2.2. Repotting History
Current pot size, medium, and soil type
Previous pot sizes & dates
Repot reminders based on growth rate
“New roots visible” quick-log option

2.3. Pruning & Propagation
Log pruning events
Track propagation cuttings and their growth
Attach photos of clippings and roots

2.4. Health Condition Tracking
Log issues (yellow leaves, wilt, pests)
Severity scale
AI-assisted diagnoses with suggested actions
Track resolution over time

3. Environmental Intelligence
3.1. Light Mapping
Assign each plant’s location to a room
Rate sunlight intensity (manual or AI vision)
Suggest better placements based on species
Track seasonal light changes for windows

3.2. Seasonal Almanac
Monthly care recommendations
Winter dormancy mode
Summer heat & burn warnings
Local climate adjustments (optional user input)

3.3. Movement History
Track when a plant is moved from one location to another
Compare health before/after moves

4. Growth Analytics
4.1. Growth Timeline
Daily, weekly, or monthly logs
Height measurements
Leaf count
Milestones (new leaf, flowering)

4.2. AI Growth Insights
“Your specimen is showing a 14% increase in leaf mass over the last month.”
Detect stunted growth patterns
Highlight optimal conditions based on past logs

4.3. Photo-to-Metrics Extraction
AI estimates leaf count
AI detects new growth
AI compares shape & color over time

5. AI Botanical Assistant
5.1. General Assistant
A calm, academic botanical voice:
Species info
Care recommendations
Troubleshooting
Seasonal advice
“Suggest best placement”
Soil type recommendations

5.2. Per-Plant Chat Mode
Talk to each plant, or about each plant:
“How’s my monstera doing this week?”
“Why are its leaves curling?”
“Which window should I move it to?”
“Write a care plan for the next 30 days.”

5.3. Academic Persona Mode
Assistant tone mimics:
A herbarium archivist
A botanical field researcher
A calm naturalist
No cutesy plant personalities unless you want a toggle for that.

6. Field Guide Features
6.1. Personal “Flora of My Home” Guide
Auto-generated digital book:
Sorted by genus/family
Sorted by room
Sorted by care difficulty
Beautiful printable PDF export

6.2. Specimen Labels
Create physical labels for your actual pots:
QR code linking to the plant profile
Accession number
Scientific name
Room location
Light/water needs

6.3. Botanical Encyclopedia Mode
A searchable plant database:
Common houseplants
Toxicity info (pets!)
Propagation complexity
Blooming seasons

7. Task Automation
7.1. Automated Care Schedule
Based on species:
Watering intervals
Fertilizer cycles
Seasonal adjustments
“Do this soon” alerts

7.2. Smart Reminders
Push notifications (or in-app badges):
Watering
Repotting
Fertilizing
Rotate plant for even growth
Check for pests during high-risk seasons

7.3. Plant Dashboard
One overall view:
Plants needing attention
At-risk plants
Healthy plants
Recently updated logs

8. Advanced Tools
8.1. Light & Temperature Logging (optional future hardware tie-in)
Integrate with sensor devices (if ever)
Track room climate over time
Correlate plant health with environment

8.2. Import/Export
Export all data to CSV/JSON
Backup / restore
Data portability for longtime collectors

8.3. Room Mapping
Upload a photo of your room
Add markers showing plant positions
AI suggests better spots

9. UX & Aesthetic Elements (Field Guide Edition)
9.1. Branding
Vintage botanical illustration style
Off-white paper textures
Deep leaf-green ink
Fine linework icons
Serif headers + clean sans-serif body

9.2. UI Layout
Specimen sheet layout
Archival card UI for lists
Ink-stamp accents (subtle)
Minimal, elegant, academic

9.3. OG + App Icon
Pressed-leaf silhouette
Botanical circle emblem
Index-card style favicon

10. Nice-to-Have Extras (Future Expansions)
10.1. Plant Trading / Sharing
Share pages with friends who also have the app.

10.2. Plant Social Feed
Share growth logs / milestones (optional private-only version).

10.3. Community Field Guide
Users can contribute their own species finds.

10.4. Garden Mode
If you ever expand outdoors:
garden beds
vegetable plots
plant guilds
companion planting matrix