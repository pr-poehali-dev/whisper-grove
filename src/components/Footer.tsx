import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            © 2024 ООО «ИнженерТехМонтаж». Все права защищены.
            <a href="#" className="ml-3 hover:text-white transition-colors underline underline-offset-2">
              Политика обработки персональных данных
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm">Написать в мессенджер:</span>
            <a
              href="https://wa.me/74951234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-3 py-1.5 rounded-lg transition-colors"
            >
              <Icon name="MessageCircle" size={14} />
              WhatsApp
            </a>
            <a
              href="https://t.me/inzhsys"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium px-3 py-1.5 rounded-lg transition-colors"
            >
              <Icon name="Send" size={14} />
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}