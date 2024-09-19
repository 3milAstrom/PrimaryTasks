export default function FirstGradeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav></nav>
      {children}
    </section>
  );
}
