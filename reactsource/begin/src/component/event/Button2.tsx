import type { ReactNode } from "react";

function AlertButton({
  children,
  message,
}: {
  children: ReactNode;
  message: string;
}) {
  return (
    <>
      <button className="bg-green-500 p-4" onClick={() => alert({ message })}>
        {children}
      </button>
    </>
  );
}

function Button2() {
  return (
    <>
      <AlertButton message={"playing"}>Play Moive</AlertButton>
      <AlertButton message={"uploading"}>Upload Image</AlertButton>
    </>
  );
}

export default Button2;
