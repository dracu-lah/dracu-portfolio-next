// AppWrite Configuration
import { Client, ID, Storage, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);
const database = "648b831eb80f41aa8b37";
const about_section_cid = "648bf10a5ed391156f0b";
const skills_photos_bid = "648b85d925a96d32d702";
const socials_cid = "648bf3fb6afc137df487";
const projects_cid = "648b83371bf4cf374971";
const resume_bid = "648b82ed147445b54f1e";
export {
  client,
  account,
  databases,
  storage,
  database,
  about_section_cid,
  skills_photos_bid,
  socials_cid,
  projects_cid,
  resume_bid,
};
