import * as path from "path";
import * as fs from "fs";
import { DotenvParseOutput, parse } from "dotenv";

export function configLoader(): DotenvParseOutput {
  const envFilePath = path.join(__dirname, "../../../.env"); // Adjust the path as needed
  return parse(fs.readFileSync(envFilePath));
}
