import {
  databases,
  storage,
  Query,
  bucket,
  collection,
  databaseId,
} from "@/services/appwrite";

export async function GetGithubURLAPI() {
  const res = await databases.listDocuments(databaseId, collection.socials);
  return res.documents[0]?.github_url ?? null;
}

export async function GetResumeAPI() {
  const res = await storage.listFiles(bucket.resume);
  const file = res.files[0];
  return file ? storage.getFileView(bucket.resume, file.$id) : null;
}

export async function GetHeroImageAPI() {
  const res = await storage.listFiles(bucket.heroImage);
  const file = res.files[0];
  return file ? storage.getFileView(bucket.heroImage, file.$id) : null;
}

export async function GetAboutDescriptionAPI() {
  const res = await databases.listDocuments(databaseId, collection.about);
  return res.documents[0]?.about_description ?? null;
}

export async function GetSkillsAPI() {
  const res = await storage.listFiles(bucket.skills);
  return res.files.map((file) => storage.getFileView(bucket.skills, file.$id));
}

export async function GetProjectsAPI() {
  const res = await databases.listDocuments(databaseId, collection.projects, [
    Query.equal("isPublished", true),
    Query.orderDesc("$createdAt"),
  ]);
  return res.documents;
}
