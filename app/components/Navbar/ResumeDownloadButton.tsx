import { GetResumeAPI } from "@/services/api";

const ResumeDownloadButton = async () => {
  const resumeLink = await GetResumeAPI();
  return (
    <a
      className="border-4 gap-2  p-2 md:p-4  duration-300 text-xs md:text-sm flex font-bold bg-white/10 backdrop-filter backdrop-blur-lg hover:bg-white hover:text-black uppercase"
      href={resumeLink}
      target="_blank"
    >
      <span className=" hidden md:block">Download</span>Resume
    </a>
  );
};

export default ResumeDownloadButton;
