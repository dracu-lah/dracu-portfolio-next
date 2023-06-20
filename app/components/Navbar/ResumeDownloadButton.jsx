"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Storage } from "appwrite";
import client from "@/app/utils/appWrite";
const ResumeDownloadButton = () => {
  const [fileID, setFileID] = useState("");
  useEffect(() => {
    const storage = new Storage(client);

    storage
      .listFiles("648b82ed147445b54f1e")
      .then((response) => {
        console.log(response); // Success
        setFileID(response.files[0].$id);
      })
      .catch((error) => {
        console.log(error); // Failure
      });
  }, []);

  return (
    <Link
      className="border-4 gap-2  p-2 md:p-4  duration-300 text-xs md:text-sm flex font-bold bg-transparent hover:bg-white hover:text-black uppercase"
      href={`https://cloud.appwrite.io/v1/storage/buckets/648b82ed147445b54f1e/files/${fileID}/view?project=648b8256bc833c7ec3e0&mode=admin`}
    >
      <span className=" hidden md:block">Download</span>Resume
    </Link>
  );
};

export default ResumeDownloadButton;
