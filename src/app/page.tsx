export default function Page() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Welcome</h1>
      <p className="text-muted-foreground">
        This is a minimal responsive layout. The sidebar is visible on md and up. 
        On mobile, use the menu button to open the Sheet. The content is centered with a max width.
      </p>
      <div className="rounded-lg border p-4">
        <p>Drop your documentation here.</p>
      </div>
    </section>
  )
}