# Warsaw Housing Community

## Table of Contents
- [Home page demo](#home-page-demo)
- [Technologies](#technologies)
- [Refresh token flow](#refresh-token-flow)
- [How to use](#how-to-use)
- [Features](#features)


## Home page demo
![gifHomePage](https://github.com/adamsm2/housing-community-management/assets/95346590/798d5ccd-c283-4d21-a823-72ab3bb4cece)


## Technologies
- Docker - complex configuration with health checks
  
### Frontend
- Vite
- Typescript
- React
- Tailwind
- i18next
- Axios

### Backend
- Java
- Maven
- SpringBoot
- Hibernate
- OpenAPI (Swagger 3)
- TestContainers
- Junit
- PostgreSQL


## Refresh token flow
![refreshTokenFlow](https://github.com/adamsm2/housing-community-management/assets/95346590/ed738eea-ffbe-4824-86d7-f1fb7b42dcd4)


## How to use
### Access Swagger UI: http://localhost:8080/swagger-ui/index.html



### Installation ###

1. Clone the repository:
```bash
git clone https://github.com/GGurol/housing-community-management.git
```

2. Navigate the project directory:
```bash
cd housing-community-management
```

3. Build the docker:
```bash
docker compose up --build -d
```

4. Browse:
```bash
http://localhost:5173/
```

(***) Instead of a real e-mail operation, integrated localhost MailHog server on:
```bash
http://localhost:8025
```

(****) Auto-populated User's Info:
```bash
    ADMIN EMAIL = "admin@gmail.com";
    ADMIN PASSWORD = "admin123";
    USER EMAIL = "test@gmail.com";
    USER PASSWORD = "password";
```



## Done / todo
- [x] User authentication and authorization (JWT)
- [x] User's email verification 
- [x] Automatic access token refreshing when needed
- [x] Home page
- [x] Theme, language switching
- [ ] Announcements page
- [ ] User dashboard
- [ ] Admin dashboard
- [ ] Security issues like monitoring failed login attempts
