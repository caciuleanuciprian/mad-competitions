import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { fileToUploadAtom } from "../../winners/utils/winners.recoil";

export const FileUpload = () => {
  const [fileToUpload, setFileToUpload] = useRecoilState(fileToUploadAtom);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFileToUpload(e.target.files[0]);
    }
  };

  //   const handleUploadClick = () => {
  //     if (!file) {
  //       return;
  //     }

  //     fetch("https://httpbin.org/post", {
  //       method: "POST",
  //       body: file,

  //       headers: {
  //         "content-type": file.type,
  //         "content-length": `${file.size}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data))
  //       .catch((err) => console.error(err));
  //   };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <div>
        {fileToUpload && `${fileToUpload?.name} - ${fileToUpload?.type}`}
      </div>
    </div>
  );
};
