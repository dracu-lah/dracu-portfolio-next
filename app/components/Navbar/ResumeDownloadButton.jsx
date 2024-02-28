import { resume_bid, storage } from "@/app/utils/appWrite";
import Link from "next/link";

async function getData() {
  const res = await storage.listFiles(resume_bid);

  return res.files[0].$id;
}

const ResumeDownloadButton = async () => {
  const fileID = await getData();
  const resume_link = `https://cloud.appwrite.io/v1/storage/buckets/648b82ed147445b54f1e/files/${fileID}/view?project=648b8256bc833c7ec3e0&mode=admin`;
  return (
    <Link
      className="border-4 gap-2  p-2 md:p-4  duration-300 text-xs md:text-sm flex font-bold bg-white/10 backdrop-filter backdrop-blur-lg hover:bg-white hover:text-black uppercase"
      href={resume_link}
    >
      <span className=" hidden md:block">Download</span>Resume
    </Link>
  );
};

export default ResumeDownloadButton;
