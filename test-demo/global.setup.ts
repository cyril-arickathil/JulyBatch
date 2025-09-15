// Import the dotenv package to load environment variables from a .env file
import dotenv from 'dotenv';

export default async function globalSetup() {
    console.log('Global setup starting...');

    // Load environment variables based on the ENV value
    // cross-env ENV=prod npx playwright test runInProd.spec.ts --headed --project=chromium
    //ENV=prod in script section of package.json
    const env = process.env.ENV || 'local';  //prod
    const envFilePath = `env/.env.${env}`; // env/.env.prod

    // Configure dotenv to read the appropriate .env file
    dotenv.config({ path: envFilePath }); // env/.env.prod

    console.log(`Environment variables loaded from ${envFilePath}`);
}