import { motion } from "framer-motion"

const catalog = [
  {
    name: "СКУД",
    full: "Контроль доступа",
    desc: "Турникеты, считыватели карт, биометрия — разграничиваем доступ на любом объекте.",
    image: "https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=600&q=80",
  },
  {
    name: "ОПС",
    full: "Охранно-пожарная сигнализация",
    desc: "Датчики дыма, тепла, движения. Автоматическое оповещение и вызов служб.",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&q=80",
  },
  {
    name: "Видеонаблюдение",
    full: "Системы видеонаблюдения",
    desc: "IP-камеры, аналоговые системы, видеоаналитика, архив записей на сервере.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80",
  },
  {
    name: "АСПТ",
    full: "Автоматическое пожаротушение",
    desc: "Спринклерные, дренчерные и газовые системы тушения для любых помещений.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
  },
  {
    name: "СКС / ЛВС",
    full: "Кабельные сети и локальная сеть",
    desc: "Прокладка кабелей, монтаж патч-панелей, настройка сетевого оборудования.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  },
  {
    name: "ВОЛС",
    full: "Волоконно-оптические линии",
    desc: "Прокладка и сварка оптики, организация высокоскоростных магистралей.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
  },
  {
    name: "Телефония",
    full: "Офисные АТС и телефонные сети",
    desc: "IP-телефония, аналоговые АТС, подключение SIP-транков и внутренней связи.",
    image: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?w=600&q=80",
  },
  {
    name: "Усиление связи",
    full: "Усиление сотового сигнала",
    desc: "Репиторы и распределённые антенные системы для уверенного приёма в здании.",
    image: "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?w=600&q=80",
  },
]

export function ServiceCatalog() {
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
          <h2 className="text-3xl lg:text-4xl font-extrabold font-heading text-gray-900 mb-3">Каталог услуг</h2>
          <p className="text-gray-500 text-lg">Монтируем и обслуживаем все ключевые инженерные системы</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {catalog.map((item, i) => (
            <motion.div
              key={item.name}
              className="group rounded-2xl overflow-hidden border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-indigo-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {item.name}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 font-heading text-sm mb-1">{item.full}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
