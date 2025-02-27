import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "..", "README.md");

export const writeReadMeFile = async (fileContent: string) => {
    fs.writeFile(filePath, fileContent, "utf8", (error) => {
        throw error
    });
}
