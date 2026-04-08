import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Icon from "@/components/ui/icon"

export function Contacts() {
  return (
    <section id="contacts" className="py-20 bg-slate-50">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold font-heading text-gray-900 mb-3">
            Свяжитесь с нами
          </h2>
          <p className="text-gray-500 text-lg">Не нашли нужную систему? Напишите — подберём решение под вашу задачу</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-5 mb-8">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (923) 783-82-88", href: "tel:+79237838288" },
                { icon: "Mail", label: "E-mail", value: "info@itmkrsk.ru", href: "mailto:info@itmkrsk.ru" },
                { icon: "MapPin", label: "Адрес", value: "660012, г. Красноярск, ул. Дмитрия Мартынова, д. 33, кв. 61", href: "#" },
              ].map((c) => (
                <a key={c.label} href={c.href} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-100 transition-colors">
                    <Icon name={c.icon as "Phone"} size={18} className="text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">{c.label}</div>
                    <div className="font-semibold text-gray-800">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5">
              <div className="text-sm font-semibold text-gray-700 mb-3">Реквизиты компании</div>
              <div className="text-sm text-gray-500 flex flex-col gap-1">
                <div>ООО «ИнженерТехМонтаж»</div>
                <div>ИНН: 2464124754 / КПП: 246601001</div>
                <div>ОГРН: 1162468052207</div>
                <div>БИК: 045004774</div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 h-52">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=92.852572,56.010563&z=14&pt=92.852572,56.010563,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Карта офиса"
                className="w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-bold text-gray-900 font-heading mb-5">Напишите нам</h3>
            <div className="flex flex-col gap-4">
              <Input placeholder="Ваше имя" />
              <Input placeholder="Телефон" />
              <Textarea placeholder="Опишите задачу: тип объекта, площадь, нужные системы..." rows={4} />
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white w-full">
                Отправить заявку
              </Button>
              <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
                <Icon name="Lock" size={11} />
                Данные защищены и не передаются третьим лицам
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}