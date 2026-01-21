import type { ReactNode } from "react";

function PlayButton({ movieName }: { movieName: string }) {
  // 영화명 출력
  const handlePlayClick = () => {
    alert(`Playing ${movieName}`);
    console.log("playing button");
  };

  return (
    <>
      <Button3 onClick={handlePlayClick}>Play "{movieName}"</Button3>
    </>
  );
}

function UploadButton() {
  const handleUploadClick = () => {
    alert(`Uploading!`);
    console.log("upload button");
  };

  return (
    <>
      <Button3 onClick={handleUploadClick}>Upload Image</Button3>
    </>
  );
}

function Button3({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <>
      <button className="m-0.5 bg-green-500 p-4" onClick={onClick}>
        {children}
      </button>
    </>
  );
}

function Toolbar() {
  return (
    <>
      <PlayButton movieName={"악마가 프라다를 입는다"} />
      <UploadButton />
    </>
  );
}

export default Toolbar;
