import FeedbackTable from "@/components/dashboard/feedbackTable";
import GenerateLinkForm from "@/components/dashboard/generateLinkForm";
import ShareLink from "@/components/dashboard/shareLink";

export default function Dashboard() {
  return (
    <div className="my-10 w-full flex flex-col items-center gap-10">
      <GenerateLinkForm />
      <ShareLink />
      <FeedbackTable />
    </div>
  );
}
