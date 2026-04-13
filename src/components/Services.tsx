import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const groups = [
  {
    title: "Системы технической защиты",
    color: "indigo",
    services: [
      { icon: "KeyRound", name: "СКУД", desc: "Контроль и управление доступом" },
      { icon: "Bell", name: "ОПС", desc: "Охранно-пожарная сигнализация" },
      { icon: "Flame", name: "АСПТ", desc: "Автоматическое пожаротушение" },
      { icon: "Volume2", name: "СОУЭ", desc: "Оповещение и управление эвакуацией" },
      { icon: "Camera", name: "СВН", desc: "Системы видеонаблюдения" },
      { icon: "DoorOpen", name: "Домофоны", desc: "Монтаж и обслуживание домофонных систем" },
    ],
  },
  {
    title: "Информационные и коммутационные сети",
    color: "blue",
    services: [
      { icon: "Network", name: "СКС", desc: "Структурированные кабельные системы" },
      { icon: "Wifi", name: "ЛВС", desc: "Локальные вычислительные сети" },
      { icon: "Cable", name: "ВОЛС", desc: "Волоконно-оптические линии связи" },
      { icon: "MonitorSpeaker", name: "Световое табло", desc: "Информационные табло и часофикация" },
    ],
  },
  {
    title: "Связь и инженерия",
    color: "violet",
    services: [
      { icon: "Phone", name: "Телефония", desc: "Офисные АТС и телефонные сети" },
      { icon: "Signal", name: "Усиление сигнала", desc: "Усиление сотовой связи на объекте" },
      { icon: "Clock", name: "Часофикация", desc: "Системы единого времени: первичные и вторичные часы" },
      { icon: "Droplets", name: "Водоподготовка", desc: "Обслуживание бассейнов, саун, хаммамов и СПА-зон." },
    ],
  },
  {
    title: "Инженерные и отделочные работы",
    color: "emerald",
    services: [
      { icon: "Wind", name: "Вентиляция", desc: "Приточно-вытяжные системы вентиляции" },
      { icon: "Thermometer", name: "Кондиционирование", desc: "Монтаж сплит-систем и мультизональных VRF" },
      { icon: "Zap", name: "Электромонтаж", desc: "Электрощиты, кабели, освещение" },
      { icon: "HardHat", name: "Ремонт и отделка", desc: "Ремонтно-отделочные работы под ключ" },
      { icon: "Wrench", name: "Обслуживание", desc: "Сервис всех инженерных систем по договору" },
    ],
  },
]

const colorMap: Record<string, { bg: string; icon: string; badge: string }> = {
  indigo: { bg: "bg-indigo-50", icon: "text-indigo-600", badge: "bg-indigo-100 text-indigo-700" },
  blue: { bg: "bg-blue-50", icon: "text-blue-600", badge: "bg-blue-100 text-blue-700" },
  violet: { bg: "bg-violet-50", icon: "text-violet-600", badge: "bg-violet-100 text-violet-700" },
  emerald: { bg: "bg-emerald-50", icon: "text-emerald-600", badge: "bg-emerald-100 text-emerald-700" },
}

export function Services() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold font-heading text-gray-900 mb-3">
            Ваш единый подрядчик по 15+ инженерным системам
          </h2>
          <p className="text-gray-500 text-lg">Берёмся за любую задачу — от одной системы до полного оснащения объекта</p>
        </motion.div>

        {/* Photo banner */}
        <motion.div
          className="relative rounded-2xl overflow-hidden mb-10 h-56 lg:h-72"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/9000ff55-d7ea-4018-8d02-b0e77bf72e7a.jpg"
            alt="Инженерные системы"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-indigo-900/30 flex items-center px-10">
            <div className="text-white max-w-lg">
              <div className="text-3xl lg:text-4xl font-extrabold font-heading mb-2">Под ключ</div>
              <div className="text-indigo-200 text-lg">Проектирование → Монтаж → Сдача → Обслуживание</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((group, gi) => {
            const c = colorMap[group.color]
            return (
              <motion.div
                key={group.title}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: gi * 0.15 }}
              >
                <h3 className="font-bold text-gray-800 font-heading mb-5 text-sm uppercase tracking-wide">
                  {group.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {group.services.map((s) => (
                    <div key={s.name} className={`flex items-start gap-3 p-3 rounded-xl ${c.bg}`}>
                      <div className={`mt-0.5 ${c.icon}`}>
                        <Icon name={s.icon as "Phone"} size={18} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800 text-sm">{s.name}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}