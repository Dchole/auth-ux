import type { IncomingForm as IncomingFormType } from "formidable";
import { IncomingForm } from "formidable-serverless";
import { NextApiRequest, NextApiResponse } from "next";
import storageBucket from "@/lib/storage-bucket";

export const config = {
  api: {
    bodyParser: false
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const form: IncomingFormType = new IncomingForm();
      let path: string;
      let userID: string;

      form.uploadDir = "./uploads";
      form.keepExtensions = true;

      form.on("progress", (bytesReceived, bytesExpected) => {
        const loadedPercentage = (bytesReceived / bytesExpected) * 100;
        console.log(`${loadedPercentage}%`);
      });

      form.on("error", err => res.status(500).end(err.message));

      form.on("field", fields => {
        userID = fields.userID;
      });

      form.on("file", (_name, file) => {
        path = file.path;
      });

      const uploaded = form.on("end", async () => {
        const fileExtension = path.split(".").pop();
        const newFilename = `${userID}.${fileExtension}`;

        return storageBucket
          .upload(path, {
            gzip: true,
            destination: `images/${newFilename}`,
            validation: "crc32c",
            public: true
          })
          .then(data => data);
      });

      res.send(uploaded);
    } catch (error) {
      console.log(error);
    }
  }
};
