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
      { icon: "Droplets", name: "Водоподготовка", desc: "Автоматическое дозирование реагентов" },
    ],
  },
]

const colorMap: Record<string, { bg: string; icon: string; badge: string }> = {
  indigo: { bg: "bg-indigo-50", icon: "text-indigo-600", badge: "bg-indigo-100 text-indigo-700" },
  blue: { bg: "bg-blue-50", icon: "text-blue-600", badge: "bg-blue-100 text-blue-700" },
  violet: { bg: "bg-violet-50", icon: "text-violet-600", badge: "bg-violet-100 text-violet-700" },
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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