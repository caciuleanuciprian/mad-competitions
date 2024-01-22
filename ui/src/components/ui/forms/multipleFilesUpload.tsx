import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { shouldSubmitAtom } from "../../winners/utils/winners.recoil";

export const MultipleFilesUpload = () => {
  const [fileList, setFileList] = useState<FileList | null>(null);
  const [shouldSubmit] = useRecoilState(shouldSubmitAtom);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileList(e.target.files);
  };

  const handleUploadClick = () => {
    if (!fileList) {
      return;
    }

    const data = new FormData();
    files.forEach((file, i) => {
      data.append(`file-${i}`, file, file.name);
    });

    fetch("https://httpbin.org/post", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  const files = fileList ? [...fileList] : [];

  useEffect(() => {
    if (shouldSubmit) {
      handleUploadClick();
    }
  }, [shouldSubmit]);

  return (
    <div>
      <input type="file" onChange={handleFileChange} multiple />

      <ul>
        {files.map((file, i) => (
          <li key={i}>
            {file.name} - {file.type}
          </li>
        ))}
      </ul>
    </div>
  );
};
