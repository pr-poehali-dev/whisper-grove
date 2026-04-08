import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"

const catalog = [
  { name: "Домофоны", full: "Домофонные системы", desc: "Монтаж и обслуживание аудио- и видеодомофонов, IP-домофонов для жилых и коммерческих объектов.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { name: "СКУД", full: "Контроль доступа", desc: "Турникеты, считыватели карт, биометрия — разграничиваем доступ на любом объекте.", image: "https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=600&q=80" },
  { name: "ОПС", full: "Охранно-пожарная сигнализация", desc: "Датчики дыма, тепла, движения. Автоматическое оповещение и вызов служб.", image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&q=80" },
  { name: "Видеонаблюдение", full: "Системы видеонаблюдения", desc: "IP-камеры, аналоговые системы, видеоаналитика, архив записей на сервере.", image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80" },
  { name: "АСПТ", full: "Автоматическое пожаротушение", desc: "Спринклерные, дренчерные и газовые системы тушения для любых помещений.", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80" },
  { name: "СКС / ЛВС", full: "Кабельные сети и локальная сеть", desc: "Прокладка кабелей, монтаж патч-панелей, настройка сетевого оборудования.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80" },
  { name: "ВОЛС", full: "Волоконно-оптические линии", desc: "Прокладка и сварка оптики, организация высокоскоростных магистралей.", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80" },
  { name: "Телефония", full: "Офисные АТС и телефонные сети", desc: "IP-телефония, аналоговые АТС, подключение SIP-транков и внутренней связи.", image: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?w=600&q=80" },
  { name: "Усиление связи", full: "Усиление сотового сигнала", desc: "Репиторы и распределённые антенные системы для уверенного приёма в здании.", image: "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?w=600&q=80" },
  { name: "Вентиляция", full: "Вентиляция и приточно-вытяжные системы", desc: "Проектирование, монтаж и обслуживание приточной, вытяжной и приточно-вытяжной вентиляции.", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80" },
  { name: "Кондиционирование", full: "Системы кондиционирования", desc: "Монтаж сплит-систем, мультизональных VRF/VRV систем, чиллеров. Сервис и заправка.", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80" },
  { name: "Электромонтаж", full: "Электромонтажные работы", desc: "Монтаж электрощитов, прокладка кабелей, установка розеток, автоматов и освещения.", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80" },
  { name: "Водоподготовка", full: "Водоподготовка и водоочистка", desc: "Обслуживание бассейнов, саун, хаммамов и СПА. Монтаж систем фильтрации и очистки воды.", image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80" },
  { name: "Ремонт и отделка", full: "Ремонтно-отделочные работы", desc: "Комплексный ремонт помещений: от черновой отделки до финишной отделки под ключ.", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" },
  { name: "Обслуживание", full: "Сервисное обслуживание систем", desc: "Техническое обслуживание всех инженерных систем объекта по договору. Аварийный выезд 24/7.", image: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=600&q=80" },
  { name: "СОУЭ", full: "Оповещение и управление эвакуацией", desc: "Монтаж систем речевого оповещения, световых табло и управления эвакуацией по нормам МЧС.", image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&q=80" },
  { name: "Часофикация", full: "Системы часофикации", desc: "Монтаж систем единого времени: первичные и вторичные часы для предприятий и объектов.", image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=600&q=80" },
]

export function ServiceCatalog() {
  const [selected, setSelected] = useState<typeof catalog[0] | null>(null)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [sent, setSent] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" })
  }

  const handleSubmit = () => {
    if (!phone) return
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setSelected(null)
      setName("")
      setPhone("")
    }, 2500)
  }

  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold font-heading text-gray-900 mb-3">Каталог услуг</h2>
          <p className="text-gray-500 text-lg">Нажмите на услугу — оставьте заявку</p>
        </motion.div>

        {/* Слайдер */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white border border-slate-200 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-indigo-50 transition-colors"
          >
            <Icon name="ChevronLeft" size={20} className="text-slate-600" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {catalog.map((item) => (
              <button
                key={item.name}
                onClick={() => { setSelected(item); setSent(false) }}
                className="group flex-shrink-0 w-56 rounded-2xl overflow-hidden border border-slate-200 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-indigo-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {item.name}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <p className="font-bold text-gray-900 font-heading text-sm mb-0.5">{item.full}</p>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{item.desc}</p>
                  <p className="text-indigo-600 text-xs font-semibold mt-2 flex items-center gap-1">
                    <Icon name="ArrowRight" size={12} />
                    Оставить заявку
                  </p>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white border border-slate-200 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-indigo-50 transition-colors"
          >
            <Icon name="ChevronRight" size={20} className="text-slate-600" />
          </button>
        </div>
      </div>

      {/* Модальное окно */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelected(null)} />
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ duration: 0.25 }}
            >
              {/* Шапка модала с фото */}
              <div className="relative h-36 overflow-hidden">
                <img src={selected.image} alt={selected.full} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-indigo-900/60" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 text-white/80 hover:text-white"
                >
                  <Icon name="X" size={22} />
                </button>
                <div className="absolute bottom-4 left-5">
                  <span className="bg-indigo-500 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-1 inline-block">{selected.name}</span>
                  <h3 className="text-white font-extrabold font-heading text-xl">{selected.full}</h3>
                </div>
              </div>

              <div className="p-6">
                {!sent ? (
                  <>
                    <p className="text-gray-500 text-sm mb-5">{selected.desc}</p>
                    <p className="font-semibold text-gray-800 text-sm mb-4">Оставьте заявку — перезвоним в течение часа</p>
                    <div className="flex flex-col gap-3">
                      <Input placeholder="Ваше имя" value={name} onChange={e => setName(e.target.value)} />
                      <Input placeholder="Телефон" value={phone} onChange={e => setPhone(e.target.value)} />
                      <Button
                        className="bg-indigo-600 hover:bg-indigo-700 text-white w-full font-semibold"
                        onClick={handleSubmit}
                      >
                        Оставить заявку
                      </Button>
                    </div>
                    <p className="text-xs text-gray-400 text-center mt-3 flex items-center justify-center gap-1">
                      <Icon name="Lock" size={11} />
                      Данные защищены и не передаются третьим лицам
                    </p>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="CheckCircle2" size={30} className="text-green-500" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg font-heading mb-1">Заявка принята!</h4>
                    <p className="text-gray-500 text-sm">Мы перезвоним вам в течение 1 часа.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}