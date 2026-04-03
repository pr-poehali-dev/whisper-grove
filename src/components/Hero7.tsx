import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"

const Hero7 = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto flex max-w-6xl flex-col lg:flex-row items-center gap-12">
          {/* Left: Text + Form */}
          <div className="flex-1 text-left">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <Icon name="Shield" size={14} />
              Более 15 инженерных систем под ключ
            </motion.div>

            <motion.h1
              className="text-3xl font-extrabold lg:text-5xl font-heading text-gray-900 leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Комплексные инженерные решения для{" "}
              <span className="text-indigo-600">безопасности и связи</span>{" "}
              вашего объекта
            </motion.h1>

            <motion.p
              className="text-gray-500 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              Проектирование, монтаж и сервис систем: от ОПС и СКУД до волоконной оптики и водоподготовки. Работаем с офисами, складами, ЖК и производствами.
            </motion.p>

            <motion.div
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <p className="text-sm font-semibold text-gray-700 mb-4">
                Оставьте заявку — получите смету и КП за 24 часа
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input placeholder="Ваш телефон или e-mail" className="flex-1" />
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white whitespace-nowrap">
                  Получить расчёт
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-3 flex items-center gap-1">
                <Icon name="Lock" size={11} />
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            >
              {[
                { icon: "Clock", text: "Выезд за 24 часа" },
                { icon: "Award", text: "Гарантия 36 месяцев" },
                { icon: "FileCheck", text: "Лицензии МЧС и ФСБ" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-gray-600">
                  <Icon name={item.icon as "Clock"} size={16} className="text-indigo-500" />
                  {item.text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image collage */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/afae11c2-1822-40f3-999b-ca317e173132.jpg"
                alt="Серверная и инженерные системы"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl overflow-hidden shadow-xl border-4 border-white w-40 h-28">
              <img
                src="https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/03654ba3-ff8a-4908-b41e-2fa290faf613.jpg"
                alt="Инженер на объекте"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-3 -right-3 bg-white rounded-xl p-3 shadow-lg border border-slate-100">
              <div className="text-2xl font-bold text-indigo-600 font-heading">200+</div>
              <div className="text-xs text-gray-500">сданных объектов</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export { Hero7 }
