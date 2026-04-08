import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"

const Hero7 = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-28">
      {/* Фоновое фото */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=85"
          alt="Инженерные системы"
          className="w-full h-full object-cover opacity-25"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60" />
      </div>

      <div className="relative container">
        <div className="mx-auto flex max-w-6xl flex-col lg:flex-row items-center gap-12">
          {/* Left: Text + Form */}
          <div className="flex-1 text-left">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <Icon name="Shield" size={14} />
              Более 15 инженерных систем
            </motion.div>

            <motion.h1
              className="text-3xl font-extrabold lg:text-5xl font-heading text-white leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Инженерные системы{" "}
              <span className="text-indigo-400">«Под ключ»</span>
              : от проекта до сдачи.
            </motion.h1>

            <motion.ul
              className="flex flex-col gap-2.5 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              {[
                "Закажите монтаж систем безопасности",
                "Сократите операционные расходы",
                "Обеспечьте безопасность по всем нормам",
                "Приедем на объект бесплатно — сделаем замеры и смету за 24 часа",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300 text-base">
                  <Icon name="CheckCircle2" size={18} className="text-indigo-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <p className="text-sm font-semibold text-white mb-4">
                Оставьте заявку — получите смету и КП за 24 часа
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  placeholder="Ваш телефон"
                  className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-slate-400 focus:border-indigo-400"
                />
                <Button className="bg-indigo-500 hover:bg-indigo-400 text-white whitespace-nowrap font-semibold">
                  Оставить заявку
                </Button>
              </div>
              <p className="text-xs text-slate-400 mt-3 flex items-center gap-1">
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
                { icon: "Award", text: "Гарантия 12 месяцев" },
                { icon: "FileCheck", text: "Лицензии МЧС и СРО" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-slate-400">
                  <Icon name={item.icon as "Clock"} size={16} className="text-indigo-400" />
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1666625560956-dccd93e82278?w=900&q=85"
                alt="Монтаж инженерных систем"
                className="w-full h-80 lg:h-96 object-cover"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl overflow-hidden shadow-xl ring-4 ring-slate-800 w-40 h-28">
              <img
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&q=80"
                alt="Инженер на объекте"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -top-3 -right-3 bg-slate-800 border border-slate-700 rounded-xl p-3 shadow-lg">
              <div className="text-2xl font-bold text-indigo-400 font-heading">70+</div>
              <div className="text-xs text-slate-400">сданных объектов</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export { Hero7 }
