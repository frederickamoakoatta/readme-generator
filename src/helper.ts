export const languageSelector = (action : string) => {
    switch (action) {
        case "Frontend Projects (User Interface & Experience)":
            return [
                {name: "1. React JS", value: "React JS"},
                {name: "2. Angular JS", value: "Angular JS"},
                {name: "3. Vue JS", value: "Vue JS"},
                {name: "4. Vanilla JS", value: "Vanilla JS"},
                {name: "5. None", value: "None"},
            ];
        case "Backend Services (Data, APIs, Authentication)":
            return [
                {name: "1. Node.js (Express, NestJS)", value: "Node.js (Express, NestJS)"},
                {name: "2. Python (Django, FastAPI)", value: "Python (Django, FastAPI)"},
                {name: "3. Java (Spring Boot)", value: "Java (Spring Boot)"},
                {name: "4. PHP (Laravel)", value: "PHP (Laravel)"},
                {name: "5. Ruby on Rails", value: "Ruby on Rails"},
                {name: "6. .NET", value: ".NET"},
                {name: "7. None", value: "None"},
            ];
        case "Full-Stack Applications (Frontend + Backend)":
            return [
                {name: "1. MERN Stack (MongoDB, Express.js, React, Node.js)", value: "MERN Stack (MongoDB, Express.js, React, Node.js)"},
                {name: "2. MEAN Stack (MongoDB, Express.js, Angular, Node.js)", value: "MEAN Stack (MongoDB, Express.js, Angular, Node.js)"},
                {name: "3. PERN Stack (PostgreSQL, Express.js, React, Node.js)", value: "PERN Stack (PostgreSQL, Express.js, React, Node.js)"},
                {name: "4. LAMP Stack (Linux, Apache, MySQL, PHP)", value: "LAMP Stack (Linux, Apache, MySQL, PHP)"},
                {name: "5. JAM Stack (JavaScript, APIs, Markup)", value: "JAM Stack (JavaScript, APIs, Markup)"},
                {name: "6. Django + React (Python Full Stack)", value: "Django + React (Python Full Stack)"},
                {name: "7. Spring Boot + Angular (Java Full Stack)", value: "Spring Boot + Angular (Java Full Stack)"},
                {name: "8. None", value: "None"},
            ];
        case "DevOps & Cloud Projects (Infrastructure & Deployment)":
            return [
                {name: "1. Infrastructure as Code (IaC)", value: "Infrastructure as Code (IaC)"},
                {name: "2. Containerization & Orchestration", value: "Containerization & Orchestration"},
                {name: "3. CI/CD (Continuous Integration & Deployment)", value: "CI/CD (Continuous Integration & Deployment)"},
                {name: "4. Cloud Services & Deployment", value: "Cloud Services & Deployment"},
                {name: "5. Serverless & Function-as-a-Service (FaaS)", value: "Serverless & Function-as-a-Service (FaaS)"},
                {name: "6. GitOps & Infrastructure Automation", value: "GitOps & Infrastructure Automation"},
                {name: "7. None", value: "None"},
            ];
        case "AI, Data & Automation Projects":
            return [
                {name: "1. Python (TensorFlow, OpenAI API, Pandas)", value: "Python (TensorFlow, OpenAI API, Pandas)"},
                {name: "2. JS (TensorFlow.js)", value: "JS (TensorFlow.js)"},
                {name: "3. LangChain", value: "LangChain"},
                {name: "4. GPT", value: "GPT"},
                {name: "5. None", value: "None"},
            ];
        case "Blockchain & Web3 Projects":
            return [
                {name: "1. Solidity", value: "Solidity"},
                {name: "2. Ethereum", value: "Ethereum"},
                {name: "3. Hardhat", value: "Hardhat"},
                {name: "4. Truffle", value: "Truffle"},
                {name: "5. Smart Contracts", value: "Smart Contracts"},
                {name: "6. None", value: "None"},
            ];
        default :
            return [];
    }
}