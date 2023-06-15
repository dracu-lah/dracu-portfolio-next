// AppWrite Configuration
import { Client } from "appwrite";
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("648b8256bc833c7ec3e0");

export default client;
