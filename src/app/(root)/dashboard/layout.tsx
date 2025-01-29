import GenerateLinkForm from "@/components/dashboard/generateLinkForm";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-container mx-auto h-full mt-20 w-full">
      <GenerateLinkForm />
      {children}
    </div>
  );
}
