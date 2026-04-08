import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const steps = [
  { icon: "PhoneCall", title: "Заявка", desc: "Оставьте заявку или позвоните — ответим в течение 1 часа." },
  { icon: "MapPin", title: "Выезд", desc: "Бесплатный выезд инженера на объект в течение 24 часов." },
  { icon: "FileText", title: "Смета", desc: "Подготовим подробную смету и КП, согласуем с вами." },
  { icon: "Wrench", title: "Монтаж", desc: "Монтажные и пусконаладочные работы систем." },
  { icon: "ClipboardCheck", title: "Сдача", desc: "Подписываем акты, передаём исполнительную документацию." },
  { icon: "HeadphonesIcon", title: "Сервис", desc: "Заключение договора на обслуживание. Обслуживаем сами либо передаём функции обученному сотруднику заказчика." },
]

export function HowWeWork() {
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
          <h2 className="text-3xl lg:text-4xl font-extrabold font-heading text-gray-900 mb-3">Как мы работаем</h2>
          <p className="text-gray-500 text-lg">Чёткий процесс от заявки до сдачи объекта</p>
        </motion.div>

        {/* Photo + steps layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <motion.div
            className="lg:w-2/5 rounded-2xl overflow-hidden shadow-xl flex-shrink-0"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=85"
              alt="Монтаж инженерных систем"
              className="w-full h-full object-cover min-h-[400px] max-h-[500px] lg:max-h-none"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="flex gap-4 p-5 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-sm transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                    <Icon name={step.icon as "PhoneCall"} size={18} className="text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-xs text-indigo-500 font-semibold mb-0.5">Шаг {i + 1}</div>
                  <h3 className="font-bold text-gray-900 font-heading text-sm mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}