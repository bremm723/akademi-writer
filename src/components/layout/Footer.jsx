import { site } from "../../config/site"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-extrabold text-slate-900">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
                A
              </span>
              <span className="text-lg">{site.brand}</span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
              {site.tagline}. Pendampingan riset & akademik yang transparan,
              responsif, dan terpercaya.
            </p>
            <div className="mt-4 space-y-1 text-sm text-slate-600">
              <p>
                Email:{" "}
                <a
                  href={`mailto:${site.contact.email}`}
                  className="font-medium text-brand-700 hover:underline"
                >
                  {site.contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Hub Rekrutmen */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Gabung Tim Kami
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <a href={site.recruitment.konsultan} className="hover:text-brand-600">
                  Lowongan Konsultan
                </a>
              </li>
              <li>
                <a href={site.recruitment.admin} className="hover:text-brand-600">
                  Lowongan Admin
                </a>
              </li>
              <li>
                <a href={site.recruitment.freelancer} className="hover:text-brand-600">
                  Daftar Freelancer
                </a>
              </li>
            </ul>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Jelajahi
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href="#pilar" className="hover:text-brand-600">Layanan</a></li>
              <li><a href="#keunggulan" className="hover:text-brand-600">Keunggulan</a></li>
              <li><a href="#testimoni" className="hover:text-brand-600">Testimoni</a></li>
              <li><a href="#cara-kerja" className="hover:text-brand-600">Cara Kerja</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© {year} {site.brand}. Semua hak dilindungi.</p>
          <p>Dibuat dengan ❤️ untuk perjalanan akademikmu.</p>
        </div>
      </div>
    </footer>
  )
}
