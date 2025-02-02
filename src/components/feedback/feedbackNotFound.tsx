import Link from "next/link";
import Container from "../general/container";
import { Button } from "../ui/button";

export default function FeedbackNotFound() {
  return (
    <div className="w-full">
      <Container className="flex justify-center items-center min-h-screen">
        <div className=" flex flex-col gap-6">
          <p>This feedback has been closed by the admin</p>
          <Button>
            <Link href={"/"}>Create your Feedback link</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
