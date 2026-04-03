import { useState } from "react"
import { motion } from "framer-motion"

const filters = ["Все", "Офис", "Склад", "ЖК", "Производство"]

const cases = [
  {
    type: "Склад",
    title: "Логистический комплекс 5 000 м²",
    desc: "Смонтировали ОПС + АСПТ + видеонаблюдение (64 камеры). Срок: 14 дней.",
    tags: ["ОПС", "АСПТ", "СВН"],
    img: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/afae11c2-1822-40f3-999b-ca317e173132.jpg",
  },
  {
    type: "Офис",
    title: "Бизнес-центр класса А, 12 этажей",
    desc: "Проектирование и монтаж СКУД, СКС и телефонии. Интеграция в единую платформу.",
    tags: ["СКУД", "СКС", "Телефония"],
    img: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/c144be01-90f5-4b8c-a7ff-3b22cfd5dbac.jpg",
  },
  {
    type: "ЖК",
    title: "Жилой комплекс на 450 квартир",
    desc: "Система видеонаблюдения (120 камер), домофония, контроль доступа на КПП.",
    tags: ["СВН", "СКУД", "СОУЭ"],
    img: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/03654ba3-ff8a-4908-b41e-2fa290faf613.jpg",
  },
  {
    type: "Производство",
    title: "Завод машиностроения 20 000 м²",
    desc: "Полный цикл: ОПС, АСПТ, ВОЛС, системы водоподготовки. Срок реализации — 45 дней.",
    tags: ["ОПС", "АСПТ", "ВОЛС", "Водоподготовка"],
    img: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/afae11c2-1822-40f3-999b-ca317e173132.jpg",
  },
]

export function Cases() {
  const [active, setActive] = useState("Все")
  const filtered = active === "Все" ? cases : cases.filter((c) => c.type === active)

  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold font-heading text-gray-900 mb-3">Реализованные объекты</h2>
          <p className="text-gray-500 text-lg">Более 200 объектов по всей России</p>
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === f
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-white border border-slate-200 text-gray-600 hover:border-indigo-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((c, i) => (
            <motion.div
              key={c.title}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="h-48 overflow-hidden relative">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {c.type}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 font-heading mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="bg-indigo-50 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
