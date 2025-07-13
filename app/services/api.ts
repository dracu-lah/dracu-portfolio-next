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
  Query,
} from "@/services/appwrite";

export async function GetGithubURLAPI() {
  const response = await databases.listDocuments(database, socials_cid);

  return response.documents[0].github_url;
}
export async function GetResumeAPI() {
  const response = await storage.listFiles(resume_bid);
  return storage.getFileView(resume_bid, response.files[0].$id);
}

export async function GetHeroImageAPI() {
  const response = await storage.listFiles(hero_image_bid);
  return storage.getFileView(hero_image_bid, response.files[0].$id);
}

export async function GetAboutDescriptionAPI() {
  const response = await databases.listDocuments(database, about_section_cid);
  return response.documents[0].about_description;
}

export async function GetSkillsAPI() {
  const response = await storage.listFiles(skills_photos_bid);
  const results = [];

  for (const item of response.files) {
    const fileUrl = storage.getFileView(skills_photos_bid, item.$id);
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
