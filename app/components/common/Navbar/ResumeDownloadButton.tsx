import { GetResumeAPI } from "@/services/api";
import { Button } from "@/components/ui/button";

const ResumeDownloadButton = async () => {
  const resumeLink = await GetResumeAPI();
  return (
    <a href={resumeLink} target="_blank">
      <Button className="h-full">
        <span className=" hidden md:block">Download</span>Resume
      </Button>
    </a>
  );
};

export default ResumeDownloadButton;
