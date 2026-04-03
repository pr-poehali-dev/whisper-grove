import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const items = [
  {
    icon: "Layers",
    title: "Под ключ",
    desc: "Разрабатываем ПД и РД, поставляем оборудование, монтируем, проводим пусконаладочные работы — всё в одном договоре.",
  },
  {
    icon: "BadgeCheck",
    title: "Лицензии и допуски",
    desc: "Работаем с гостайной, имеем лицензии МЧС и ФСБ. Допуски СРО. Все документы в наличии.",
  },
  {
    icon: "GitMerge",
    title: "Интеграция систем",
    desc: "Объединяем ОПС, СКУД и видеонаблюдение в единую платформу управления — одна точка контроля для всего объекта.",
  },
  {
    icon: "ShieldCheck",
    title: "Гарантия 36 месяцев",
    desc: "На выполненные работы даём гарантию 3 года. На оборудование — гарантия производителя.",
  },
  {
    icon: "Clock",
    title: "Выезд за 24 часа",
    desc: "Инженер приедет на ваш объект для бесплатного аудита в течение суток после обращения.",
  },
  {
    icon: "Wrench",
    title: "Абонентское обслуживание",
    desc: "Берём объекты на постгарантийное сопровождение: плановые ТО, аварийные выезды, обновление ПО систем.",
  },
]

export function Advantages() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold font-heading text-gray-900 mb-3">
            Почему выбирают нас
          </h2>
          <p className="text-gray-500 text-lg">Надёжный партнёр для инженерного оснащения объектов любого масштаба</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="p-6 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all duration-200"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                <Icon name={item.icon as "Layers"} size={22} className="text-indigo-600" />
              </div>
              <h3 className="font-bold text-gray-900 font-heading mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
