import { select, input } from '@inquirer/prompts';
import {languageSelector} from "./helper";

const question1 = async () => {
    return select(
        {
            message: "Select your project type :",
            choices: [
                {name: "1. Frontend Projects (User Interface & Experience)", value: "Frontend Projects (User Interface & Experience)"},
                {name: "2. Backend Services (Data, APIs, Authentication)", value: "Backend Services (Data, APIs, Authentication)"},
                {name: "3. Full-Stack Applications (Frontend + Backend)", value: "Full-Stack Applications (Frontend + Backend)"},
                {name: "4. DevOps & Cloud Projects (Infrastructure & Deployment)", value: "DevOps & Cloud Projects (Infrastructure & Deployment)"},
                {name: "5. AI, Data & Automation Projects", value: "AI, Data & Automation Projects"},
                {name: "6. Blockchain & Web3 Projects", value: "Blockchain & Web3 Projects"},
            ],
        },
    );
}

const question2 = async (answer1: string) => {
    return select(
        {
            message: "Select your language :",
            choices: languageSelector(answer1),
        },
    );
}

const question3 = async () => {
    return input(
        {
            message: "Describe your project ?",
        },
    );
}

const question4 = async () => {
    return input(
        {
            message: "Author",
        },
    );
}

export {question1, question2, question3, question4};