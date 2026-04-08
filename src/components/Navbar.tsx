import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"


export function Navbar() {
  return (
    <header className="relative z-10 w-full">
      {/* Верхняя инфополоса */}
      <div className="bg-indigo-700 text-white text-sm">
        <div className="mx-auto max-w-7xl px-6 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-5">
            <span className="flex items-center gap-1.5 font-medium">
              <Icon name="MapPin" size={14} className="opacity-80" />
              г. Красноярск, ул. Дмитрия Мартынова
            </span>
            <span className="flex items-center gap-1.5 text-indigo-200">
              <Icon name="Clock" size={14} className="opacity-80" />
              Пн–Пт, 09:00–18:00
            </span>
          </div>
          <div className="flex items-center gap-4 text-indigo-200">
            <a href="mailto:info@itmkrsk.ru" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Icon name="Mail" size={14} />
              info@itmkrsk.ru
            </a>
          </div>
        </div>
      </div>

      {/* Основная навигация */}
      <nav className="w-full px-6 py-5 border-b border-slate-200/60 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <div className="flex items-center">
            <img
              src="https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/bucket/b6620dc8-9f2e-4d34-81e9-7e3598ca8be0.png"
              alt="ИнженерТехМонтаж"
              className="h-64 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-8 text-base font-semibold text-gray-700">
            <a href="#" className="hover:text-indigo-600 transition-colors tracking-wide">Услуги</a>
            <a href="#" className="hover:text-indigo-600 transition-colors tracking-wide">Проекты</a>
            <a href="#" className="hover:text-indigo-600 transition-colors tracking-wide">О компании</a>
            <a href="#contacts" className="hover:text-indigo-600 transition-colors tracking-wide">Контакты</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:+79237838288" className="hidden lg:flex items-center gap-2 text-gray-800 font-bold text-lg tracking-wide hover:text-indigo-600 transition-colors">
              <Icon name="Phone" size={18} className="text-indigo-600" />
              +7 (923) 783-82-88
            </a>
            <Button size="default" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base px-5">
              Заказать обратный звонок
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
