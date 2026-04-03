import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const licenses = [
  { name: "МЧС России", desc: "Лицензия на монтаж средств пожарной безопасности" },
  { name: "СРО НП", desc: "Допуск к проектированию и строительным работам" },
  { name: "ФСБ России", desc: "Лицензия на работу с гостайной и охраняемыми объектами" },
  { name: "Гильдия лицензиатов", desc: "Действительный член НП «Гильдия лицензиатов МЧС»" },
]

export function Trust() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold font-heading text-white mb-3">
            Документы и сертификаты
          </h2>
          <p className="text-slate-400 text-lg">Работаем в полном соответствии с требованиями законодательства</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {licenses.map((lic, i) => (
            <motion.div
              key={lic.name}
              className="bg-slate-800 rounded-2xl p-5 border border-slate-700 hover:border-indigo-500 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center mb-3">
                <Icon name="Award" size={20} className="text-indigo-400" />
              </div>
              <div className="font-bold text-white font-heading mb-1">{lic.name}</div>
              <div className="text-slate-400 text-sm">{lic.desc}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button variant="outline" className="border-slate-500 text-white bg-transparent hover:bg-slate-800 gap-2">
            <Icon name="Download" size={16} />
            Скачать презентацию компании (PDF)
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
