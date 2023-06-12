import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative py-20 text-center">
      <div className="mx-auto max-w-3xl border-t-2 border-white pt-20 dark:border-slate-800">
        <nav className="mb-10 flex flex-row justify-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Projects</Link>
          <Link href="/">Notes</Link>
          <Link href="/">Snippets</Link>
          <Link href="/">Guestbook</Link>
        </nav>

        <small>© 2023 Mustafa Adam Alshammaa, Inc. All rights reserved.</small>
      </div>
    </footer>
  )
}
