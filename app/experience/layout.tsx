export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="prose prose-gray dark:prose-invert mt-24 pb-20">
      {children}
    </main>
  )
}
