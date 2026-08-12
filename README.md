<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,2,5,30&height=220&section=header&text=MEDICAL%20CENTER%20APPOINTMENT&fontSize=44&fontColor=FFD700&fontAlignY=42&desc=🩺%20Doctor%20Booking%20Platform%20%C2%B7%20MERN%20Stack%20%C2%B7%20JWT%20Secured&descAlignY=62&descColor=DCDCDC&animation=fadeIn" width="100%"/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Share+Tech+Mono&weight=700&size=20&duration=2800&pause=900&color=FFD700&center=true&vCenter=true&width=760&lines=%F0%9F%A9%BA+Book+Appointments+with+Preferred+Doctors;%F0%9F%94%90+JWT+Auth+%C2%B7+Multi-Device+Sessions;%E2%AD%90+Doctor+Review+System;%F0%9F%93%B8+Firebase-Powered+Profile+Pictures;%F0%9F%8F%86+%231+GitHub+Committer+in+Colombia)](https://git.io/typing-svg)

<br/>

<p align="center">
  <a href="https://github.com/NietoDeveloper">
    <img src="https://img.shields.io/badge/Engineer-Manuel%20Nieto-blue?style=for-the-badge&logo=github"/>
  </a>
  <a href="https://committers.top/colombia#NietoDeveloper">
    <img src="https://img.shields.io/badge/Committers.top-%231%20Colombia-gold?style=for-the-badge"/>
  </a>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/Stack-MERN-61DAFB?style=for-the-badge&logo=react&logoColor=000"/>
  </a>
  <a href="https://firebase.google.com/">
    <img src="https://img.shields.io/badge/Storage-Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=000"/>
  </a>
  <a href="https://redux.js.org/">
    <img src="https://img.shields.io/badge/State-Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"/>
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge"/>
  </a>
</p>

<p align="center">
  <a href="https://github.com/NietoDeveloper/MedicalCenterAppointment">
    <img src="https://img.shields.io/badge/📂_Source-NietoDeveloper%2FMedicalCenterAppointment-000000?style=for-the-badge&logo=github&logoColor=FFD700"/>
  </a>
</p>

</div>

---

## 📋 Overview

A **CRUD** (Create, Read, Update, Delete) application built with the **MERN** stack. The system allows users to create an account, book appointments with their preferred doctor, and leave reviews for the doctors. Doctors, on the other hand, can create profiles showcasing their experience, specialization, and availability for appointments. Once a doctor sets up their profile, they can log in to manage their appointments.

---

## 🗂️ Project Structure

```text
MedicalCenterAppointment/
├── Appointment_system/       # React frontend
│   ├── public/
│   └── src/
│       ├── API/                # Backend API service calls
│       ├── assets/
│       │   └── images/
│       ├── components/
│       │   ├── Checkout/
│       │   ├── Explainer/
│       │   ├── Faq/
│       │   ├── Footer/
│       │   ├── Header/
│       │   ├── Hero/
│       │   ├── Offerings/
│       │   └── Preview/
│       ├── context/             # React Context providers
│       ├── features/            # Redux feature slices
│       ├── hooks/                # Custom React hooks
│       ├── pages/                # View controllers
│       └── utils/                # Helper functions
├── dist/                       # Production build output
│   └── assets/
└── Server/                     # Node.js + Express backend
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    └── routes/
        ├── doctorRoutes/
        └── userRoutes/
```

---

## 🔄 Appointment Booking Flow

```mermaid
flowchart LR
    A([👤 User]) -->|Search & Select| B[Doctor Profiles]
    B -->|Book Slot| C[Checkout Component]
    C -->|JWT Validated| D[Server: Appointment Controller]
    D -->|Persist| E[(MongoDB\nAppointments)]
    E -->|Confirmation| F([📅 Upcoming Appointments])
    F -->|Post-Visit| G[⭐ Review System]

    style A fill:#FFD700,color:#000,stroke:#FFD700
    style D fill:#0a0a0a,color:#FFD700,stroke:#FFD700
    style E fill:#47A248,color:#fff,stroke:#47A248
    style G fill:#000,color:#FFD700,stroke:#FFD700
```

---

## ✨ Features

- **User Authentication:** Secure JWT-based login for both users and doctors, supporting multiple devices — logging out on one device does not affect sessions on others.
- **Authorization:** Role-based access control ensures only authenticated users and doctors access their respective functionalities.
- **Profile Management:** Users can upload a profile picture; doctors can showcase experience, specialization, and appointment availability.
- **Appointment Booking:** Users can book appointments with their preferred doctors and view/manage upcoming appointments.
- **Review System:** Users can leave reviews for doctors, helping others make informed decisions.

---

## 🛠️ Technology Stack

<div align="center">

### Backend

| Technology | Role |
|:-----------|:-----|
| Node.js / Express | Server-side logic and RESTful APIs for frontend interaction |
| MongoDB | Database for user accounts, doctor profiles, appointments, and reviews |
| JWT (JSON Web Tokens) | Authentication and authorization via access and refresh tokens |
| Firebase | Storage for user profile pictures |

### Frontend

| Technology | Role |
|:-----------|:-----|
| React | User interface built to interact with the backend APIs |
| React Router | Route protection and in-app navigation |
| Redux | Session data management (user profiles, authentication status) |
| Axios & React Query | Efficient consumption of backend APIs for data retrieval and manipulation |
| Tailwind CSS | Styling and overall user experience |

</div>

---

## 🚀 Installation

**Step 1 — Clone the repository**

```bash
git clone https://github.com/NietoDeveloper/MedicalCenterAppointment
```

**Step 2 — Install frontend dependencies**

```bash
cd Appointment_system
npm install
```

**Step 3 — Install backend dependencies**

```bash
cd ../Server
npm install
```

**Step 4 — Configure environment variables**

Create a `.env` file in `Server/` with your MongoDB connection string, JWT secrets, and Firebase credentials.

**Step 5 — Run the application**

```bash
# Server
cd Server
npm start

# Appointment_system
cd Appointment_system
npm run dev
```

---

## 👨‍💻 Author

Created by **Manuel Nieto (NietoDeveloper)**.

---

## 📄 License

This project is licensed under the **MIT License**.

<div align="center">

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,2,5,30&height=120&section=footer&animation=fadeIn" width="100%"/>

</div>
