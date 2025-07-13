// src/services/appwrite.ts
import { Client, Storage, Databases, Account, Query } from "appwrite";

// Initialize Appwrite client
const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

// Core services
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

// IDs
export const databaseId = "648b831eb80f41aa8b37";
export const collection = {
  about: "648bf10a5ed391156f0b",
  socials: "648bf3fb6afc137df487",
  projects: "648b83371bf4cf374971",
};
export const bucket = {
  resume: "648b82ed147445b54f1e",
  heroImage: "648bf6e406b47b7a7d94",
  skills: "648b85d925a96d32d702",
};

export { Query };
