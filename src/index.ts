#!/usr/bin/env node
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import {fetchAIRes} from "./ai-query.js";


const rl = readline.createInterface({ input, output });


const main = async () : Promise<void> => {
    const answer = await rl.question('Describe your project ?');
    const res = await fetchAIRes(answer);
    console.log(`AI Answer: ${res}`);
}

rl.close();

main();
