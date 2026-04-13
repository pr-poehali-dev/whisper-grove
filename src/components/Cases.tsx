import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const cases = [
  {
    type: "ЖКХ",
    icon: "Building2",
    title: "УК «ЖилКомРазвитие»",
    image: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/bucket/b08cd6dd-e461-4689-9995-3af1314530c2.png",
    tags: ["СКУД", "ОПС", "СВН"],
    works: [
      "Монтаж и обслуживание СКУД в жилых домах",
      "Монтаж и обслуживание охранно-пожарной сигнализации",
      "Монтаж и обслуживание систем видеонаблюдения",
    ],
  },
  {
    type: "Строительство",
    icon: "HardHat",
    title: "ООО «АРБАН»",
    image: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/bucket/d9256071-9778-421c-96fa-9dbd27fb85f3.png",
    tags: ["СКУД", "ОПС", "СОУЭ", "СВН", "СКС", "Телефония", "Усиление связи", "Часофикация"],
    works: [
      "Монтаж СКУД, ОПС, СОУЭ и видеонаблюдения",
      "Монтаж структурированных кабельных систем",
      "Монтаж телефонии, усиления сотовой связи и часофикации",
    ],
  },
  {
    type: "Фитнес",
    icon: "Dumbbell",
    title: "ООО «Единый Фитнес»",
    image: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/8b1a11a5-8630-4d4c-9145-f2c99dacbe35.jpg",
    tags: ["СКУД", "ОПС", "СОУЭ", "СВН", "СКС", "Телефония", "Усиление связи", "Часофикация", "Водоподготовка"],
    works: [
      "Обслуживание тренажёров, водоподготовка (бассейн, сауна)",
      "Монтаж СКУД, ОПС, СОУЭ и видеонаблюдения",
      "Монтаж структурированных кабельных систем",
      "Монтаж телефонии, усиления сотовой связи и часофикации",
    ],
  },
  {
    type: "Строительство",
    icon: "Wrench",
    title: "ООО «СТРОЙ-М»",
    image: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/1e6f0ced-5c44-4175-a19d-87cad2fdc533.jpg",
    tags: ["СКУД", "ОПС", "СВН"],
    works: [
      "Монтаж и обслуживание СКУД",
      "Монтаж и обслуживание охранно-пожарной сигнализации",
      "Монтаж и обслуживание систем видеонаблюдения",
    ],
  },
]

export function Cases() {
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
          <h2 className="text-3xl lg:text-4xl font-extrabold font-heading text-gray-900 mb-3">Реализованные проекты</h2>
          <p className="text-gray-500 text-lg">Работаем с компаниями разных отраслей по всему Красноярскому краю</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all overflow-hidden"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="h-44 overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon as "Building2"} size={22} className="text-indigo-600" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">{c.type}</span>
                    <h3 className="font-bold text-gray-900 font-heading mt-1 text-lg">{c.title}</h3>
                  </div>
                </div>

                <ul className="flex flex-col gap-2 mb-4">
                  {c.works.map((w) => (
                    <li key={w} className="flex items-start gap-2 text-sm text-gray-600">
                      <Icon name="CheckCircle2" size={15} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                      {w}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full">
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