import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const steps = [
  { icon: "PhoneCall", title: "Заявка или звонок", desc: "Оставьте заявку на сайте или позвоните нам — обработаем в течение 1 часа." },
  { icon: "MapPin", title: "Выезд инженера", desc: "Бесплатный выезд на объект для аудита и замеров — в течение 24 часов." },
  { icon: "FileText", title: "Смета и КП", desc: "Готовим подробную смету и коммерческое предложение. Согласовываем с вами." },
  { icon: "PenTool", title: "Проектирование", desc: "Разрабатываем проектную (ПД) и рабочую (РД) документацию в полном объёме." },
  { icon: "Wrench", title: "Монтаж и пусконаладка", desc: "Монтируем оборудование, прокладываем кабели, настраиваем и тестируем системы." },
  { icon: "ClipboardCheck", title: "Сдача объекта", desc: "Подписываем акты выполненных работ, передаём исполнительную документацию." },
  { icon: "HeadphonesIcon", title: "Обслуживание", desc: "Берём на постгарантийное обслуживание: плановые ТО и аварийный выезд 24/7." },
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

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-indigo-100 -translate-x-1/2" />

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className={`flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  {i % 2 === 0 && (
                    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:border-indigo-200 transition-colors">
                      <h3 className="font-bold text-gray-900 font-heading mb-1">
                        {i + 1}. {step.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{step.desc}</p>
                    </div>
                  )}
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg">
                    <Icon name={step.icon as "PhoneCall"} size={20} className="text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  {i % 2 !== 0 && (
                    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:border-indigo-200 transition-colors">
                      <h3 className="font-bold text-gray-900 font-heading mb-1">
                        {i + 1}. {step.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{step.desc}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
