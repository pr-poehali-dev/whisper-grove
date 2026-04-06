import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"


export function Navbar() {
  return (
    <nav className="relative z-10 w-full px-6 py-4 border-b border-slate-200/60 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center">
          <img
            src="https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/bucket/b6620dc8-9f2e-4d34-81e9-7e3598ca8be0.png"
            alt="ИнженерТехМонтаж"
            className="h-16 w-auto"
          />
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="tel:+79237838288" className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors">
            <Icon name="Phone" size={14} />
            +7 (923) 783-82-88
          </a>
          <a href="mailto:info@itmkrsk.ru" className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors">
            <Icon name="Mail" size={14} />
            info@itmkrsk.ru
          </a>
        </div>

        <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white">
          Проконсультироваться
        </Button>
      </div>
    </nav>
  )
}