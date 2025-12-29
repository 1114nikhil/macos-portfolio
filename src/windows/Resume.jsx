import React from 'react';
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
const Resume = ({ mobile }) => {
  const [width, setWidth] = React.useState(null);

  React.useEffect(() => {
    if (mobile) {
      setWidth(window.innerWidth);
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [mobile]);

  return (
    <div className="flex flex-col h-full w-full">
      <div id="window-header" className="shrink-0">
        <WindowControls target="resume" />
        <h2>Nikhil T.Kochparambil(Software Engineer).pdf</h2>
        <a
          href="files/Nikhil T.Kochparambil(Software Engineer).pdf"
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>
      <div className="flex-1 w-full h-full overflow-y-auto overflow-x-hidden bg-gray-100/50 flex justify-center">
        <Document file="files/Nikhil T.Kochparambil(Software Engineer).pdf">
          <Page
            pageNumber={1}
            renderTextLayer
            renderAnnotationLayer
            width={mobile ? width : undefined}
            scale={mobile ? 1 : 1.2}
          />
        </Document>
      </div>
    </div>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;