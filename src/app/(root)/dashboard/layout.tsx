

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-container mx-auto h-full w-full">{children}</div>
  );
}
