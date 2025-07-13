import {
  resume_bid,
  storage,
  hero_image_bid,
  projects_cid,
  about_section_cid,
  database,
  databases,
  skills_photos_bid,
  socials_cid,
} from "@/services/appWriteConfig";
import { Query } from "appwrite";

export async function GetGithubURLAPI() {
  const response = await databases.listDocuments(database, socials_cid);

  return response.documents[0].github_url;
}
export async function GetResumeAPI() {
  const response = await storage.listFiles(resume_bid);
  const fileId = response.files[0].$id;
  return `https://cloud.appwrite.io/v1/storage/buckets/648b82ed147445b54f1e/files/${fileId}/view?project=648b8256bc833c7ec3e0&mode=admin`;
}

export async function GetHeroImageAPI() {
  const response = await storage.listFiles(hero_image_bid);
  const fileId = response.files[0].$id;
  return `https://cloud.appwrite.io/v1/storage/buckets/648bf6e406b47b7a7d94/files/${fileId}/view?project=648b8256bc833c7ec3e0&mode=admin`;
}

export async function GetAboutDescriptionAPI() {
  const response = await databases.listDocuments(database, about_section_cid);
  return response.documents[0].about_description;
}

export async function GetSkillsAPI() {
  const response = await storage.listFiles(skills_photos_bid);
  const results = [];

  for (const item of response.files) {
    // Option 1: Use getFileView for direct file access (no transformations)
    const fileUrl = storage.getFileView(skills_photos_bid, item.$id);

    // Include both URL and file metadata for the Skills component
    results.push(fileUrl);
  }

  return results;
}

export async function GetProjectsAPI() {
  const response = await databases.listDocuments(database, projects_cid, [
    Query.orderDesc("$createdAt"),
  ]);

  return response.documents;
}
