export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="px-8 py-6">{children}</div>
}
