import Link from "next/link";
import Container from "../general/container";
import { Button } from "../ui/button";

export default function FeedbackNotFound() {
  return (
    <div className="w-full">
      <Container className="flex justify-center items-center min-h-[70dvh]">
        <div className=" flex flex-col gap-6">
          <div className="text-center">
            <p>This feedback has been closed by the admin for now.</p>
            <p>OR</p>
            <p>This is a private feedback.</p>
            <p>OR</p>
            <p>This feedback doesn&apos;t exist anymore.</p>
          </div>
          <Button>
            <Link href={"/"}>Create your Feedback link</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
