import Sidebar from "../side";

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="w-full h-screen bg-back object-cover
        flex items-center"
    >
      <Sidebar />
      <div className=" h-[96%] w-full mx-8 bg-back rounded-3xl">{children}</div>
    </div>
  );
}
