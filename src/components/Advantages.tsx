import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const stats = [
  { value: "50+", label: "сданных объектов" },
  { value: "15+", label: "инженерных систем" },
  { value: "10 лет", label: "на рынке Красноярска" },
  { value: "24/7", label: "аварийный выезд" },
]

const items = [
  {
    icon: "Car",
    title: "Бесплатный выезд",
    desc: "Приедем на объект в кратчайшие сроки — бесплатно. Проведём аудит, сделаем замеры и подготовим смету.",
  },
  {
    icon: "Layers",
    title: "Объект под ключ",
    desc: "Проектируем, поставляем оборудование, монтируем и сдаём объект — всё в рамках одного договора без посредников.",
  },
  {
    icon: "Users",
    title: "Один контрагент",
    desc: "Обслуживаем все инженерные системы объекта сами. Один договор, один звонок — не нужно искать разных подрядчиков.",
  },
  {
    icon: "ShieldCheck",
    title: "Гарантия 12 месяцев",
    desc: "На все выполненные работы даём гарантию 12 месяцев. На оборудование — гарантия производителя.",
  },
  {
    icon: "Settings2",
    title: "Гибкий подход",
    desc: "Подстраиваемся под бюджет, сроки и особенности объекта. Находим решения там, где другие говорят «невозможно».",
  },
  {
    icon: "BadgeCheck",
    title: "Лицензии и допуски",
    desc: "Имеем лицензии МЧС, допуски СРО. Работаем в полном соответствии с требованиями законодательства.",
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

        {/* Stats strip */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 bg-indigo-600 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-4xl font-extrabold text-white font-heading mb-1">{s.value}</div>
              <div className="text-indigo-200 text-sm">{s.label}</div>
            </motion.div>
          ))}
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