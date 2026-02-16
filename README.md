# User Management System (Frontend)

A modern, responsive frontend for the User Management System, built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

This application provides user authentication (Login, Register), a protected Dashboard, and Role-Based Access Control (RBAC) features, tailored to work with a NestJS backend.

## 🚀 Features

- **Authentication**: Secure Login and Registration forms.
- **Dashboard**: Protected route displaying user profile information.
- **RBAC**: Conditional rendering of "Admin Panel" links based on user roles (`admin` vs `user`).
- **Form Validation**: Robust client-side validation using **Zod** and **React Hook Form**.
- **Responsive Design**: Built with Tailwind CSS for mobile-first responsiveness.
- **Dark Mode**: Supports system preference (via Tailwind's dark mode).

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **State Management**: React Context API (`AuthContext`)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Icons**: [Heroicons](https://heroicons.com/) (optional/implied)

## 📋 Prerequisites

- **Node.js**: v18 or higher recommended.
- **Backend**: A running instance of the [UMS Backend](https://github.com/dinelkathilina/be.git) on port `5000`.

## 📦 Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/dinelkathilina/fe.git
    cd fe
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

## ⚙️ Configuration

The application is configured to proxy API requests to the backend to avoid CORS issues during development.

**`next.config.ts`**:

```typescript
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5000/:path*", // Forward /api requests to backend
      },
    ];
  },
};
```

Ensure your backend server is running on `http://localhost:5000`.

## 🏃‍♂️ Running the Application

1.  **Start the development server**:

    ```bash
    npm run dev
    ```

2.  **Open in browser**:
    Navigate to [http://localhost:3000](http://localhost:3000).

## 🧪 Usage

### Registration

- Navigate to `/register`.
- Fill in Name, Email, and Password.
- (Optional) Check "Register as Admin (Demo only)" to test admin features.
- Click **Sign up**.

### Login

- Navigate to `/login`.
- Enter your registered email and password.
- Click **Sign in**.

### Dashboard

- Once logged in, you will be redirected to `/dashboard`.
- View your profile details.
- If you have the `admin` role, you will see the **Admin Controls** section.

## 📂 Project Structure

```
src/
├── app/                # Next.js App Router pages
│   ├── dashboard/      # Protected dashboard page
│   ├── login/          # Login page
│   ├── register/       # Registration page
│   ├── layout.tsx      # Global layout (Auth Provider, Navbar)
│   └── page.tsx        # Landing page
├── components/         # Reusable UI components
│   ├── Button.tsx
│   ├── Input.tsx
│   └── Navbar.tsx
├── context/            # Global state context
│   └── AuthContext.tsx # Authentication logic & API calls
├── lib/                # Utilities & Libraries
│   └── schemas/        # Zod validation schemas
└── types/              # TypeScript definitions
```
