import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-primary/5">
      <div className="w-full max-w-md p-4">
        <SignUp appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-xl"
          }
        }} />
      </div>
    </div>
  );
}

