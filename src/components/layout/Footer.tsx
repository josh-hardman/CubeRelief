export function Footer() {
  return (
    <footer className="border-t border-dark-card-border py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <p className="text-white font-semibold text-lg">
          Cube Relief&#8482;
        </p>
        <p className="mt-1 text-sm text-text-muted">
          Comfort provided by MedyFoam&reg;
        </p>
        <p className="mt-4 text-xs text-text-muted/50">
          &copy; {new Date().getFullYear()} MedyFoam. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
