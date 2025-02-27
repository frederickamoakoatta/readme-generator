#!/usr/bin/env node
import {question1, question2, question3, question4} from "./prompt";
import {fetchAIRes} from "./ai-query";
import {writeReadMeFile} from "./util";

export interface AiQuery {
    type : string,
    language : string,
    description : string,
    author : string,
}

const main = async () : Promise<void> => {
    try{
        const answer1 = await question1();
        const answer2 = await question2(answer1);
        const answer3 = await question3();
        const answer4 = await question4();
        const query : AiQuery = {
            type: answer1,
            language: answer2,
            description: answer3,
            author: answer4
        }
        const res = await fetchAIRes(query);
        await writeReadMeFile(res);
        console.log("README generated successfully. 🔥");
    }
    catch(err){
        console.error(err);
    }
}

main();
