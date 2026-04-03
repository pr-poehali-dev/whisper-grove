import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  return (
    <nav className="relative z-10 w-full px-6 py-4 border-b border-slate-200/60 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-600">
            <Icon name="Zap" size={18} className="text-white" />
          </div>
          <div>
            <div className="text-lg font-bold font-heading text-gray-900 leading-tight">ИнжСистемы</div>
            <div className="text-xs text-gray-500 leading-tight">Проектирование · Монтаж · Сервис</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="tel:+74951234567" className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors">
            <Icon name="Phone" size={14} />
            +7 (495) 123-45-67
          </a>
          <a href="mailto:info@inzhsys.ru" className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors">
            <Icon name="Mail" size={14} />
            info@inzhsys.ru
          </a>
        </div>

        <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white">
          Проконсультироваться
        </Button>
      </div>
    </nav>
  )
}
