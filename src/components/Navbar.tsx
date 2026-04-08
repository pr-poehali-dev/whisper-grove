import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  return (
    <header className="relative z-10 w-full bg-slate-900 shadow-lg">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between gap-4">
        {/* Лого */}
        <a href="/" className="flex items-center flex-shrink-0">
          <img
            src="https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/bucket/7793d0d8-e24e-47d0-8735-3b0e56f30686.png"
            alt="ИнженерТехМонтаж"
            className="h-12 w-auto"
          />
        </a>

        {/* Навигация */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <span className="flex items-center gap-1.5 text-slate-400">
            <Icon name="MapPin" size={13} />
            г. Красноярск, ул. Дмитрия Мартынова
          </span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <Icon name="Clock" size={13} />
            Пн–Пт, 09:00–18:00
          </span>
          <a href="#catalog" className="hover:text-white transition-colors">Услуги</a>
          <a href="#contacts" className="hover:text-white transition-colors">Контакты</a>
        </nav>

        {/* Телефон + кнопка */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+79237838288"
            className="hidden lg:flex items-center gap-2 text-white font-bold text-base hover:text-indigo-300 transition-colors"
          >
            <Icon name="Phone" size={16} className="text-indigo-400" />
            +7(923)783-82-88
          </a>
          <Button
            asChild
            className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-md"
          >
            <a href="#contacts">Заказать обратный звонок</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
