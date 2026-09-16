export function PageFooter() {
  return (
    <footer className="bg-[#151515] px-6 py-28 text-white lg:px-[3.4cqw] lg:py-[13.5cqw]">
      <div className="flex flex-col gap-6 text-body-lg lg:flex-row lg:items-end lg:justify-between">
        <p className="text-white/70">© Life Row</p>
        <a href="#top" className="hover:opacity-80">
          Back to top
        </a>
      </div>
    </footer>
  );
}
