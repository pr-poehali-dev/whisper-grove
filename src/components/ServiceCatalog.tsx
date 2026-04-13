import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"

const catalog = [
  { name: "Домофоны", full: "Домофонные системы", desc: "Монтаж и обслуживание аудио- и видеодомофонов, IP-домофонов для жилых и коммерческих объектов.", image: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/87ba4e22-e650-4eb3-932e-d2535f94915b.jpg" },
  { name: "СКУД", full: "Контроль доступа", desc: "Турникеты, считыватели карт, биометрия — разграничиваем доступ на любом объекте.", image: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/b1e478ea-896c-439f-a89b-455fc419701e.jpg" },
  { name: "ОПС", full: "Охранно-пожарная сигнализация", desc: "Датчики дыма, тепла, движения. Автоматическое оповещение и вызов служб.", image: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/f3b03919-0bea-47d6-8273-8fe6a2ebe0c2.jpg" },
  { name: "Видеонаблюдение", full: "Системы видеонаблюдения", desc: "IP-камеры, аналоговые системы, видеоаналитика, архив записей на сервере.", image: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/c6cd4f0c-6a83-4013-b652-cc0fdb9b486f.jpg" },
  { name: "АСПТ", full: "Автоматическое пожаротушение", desc: "Спринклерные, дренчерные и газовые системы тушения для любых помещений.", image: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/f33c5c9e-6628-47e0-9968-9d55c672c7d6.jpg" },
  { name: "СКС / ЛВС", full: "Кабельные сети и локальная сеть", desc: "Прокладка кабелей, монтаж патч-панелей, настройка сетевого оборудования.", image: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/8892bb00-7b86-45ed-960c-58f3945bc58f.jpg" },
  { name: "ВОЛС", full: "Волоконно-оптические линии", desc: "Прокладка и сварка оптики, организация высокоскоростных магистралей.", image: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/a13299ea-fe8a-41e7-8cfd-7154365dee1d.jpg" },
  { name: "Телефония", full: "Офисные АТС и телефонные сети", desc: "IP-телефония, аналоговые АТС, подключение SIP-транков и внутренней связи.", image: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/41132ab5-59a7-41d9-a4e0-7d8920c33dd6.jpg" },
  { name: "Усиление связи", full: "Усиление сотового сигнала", desc: "Репиторы и распределённые антенные системы для уверенного приёма в здании.", image: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/7e00a34a-02b2-4b26-877b-d3612bbde562.jpg" },
  { name: "Вентиляция", full: "Вентиляция и приточно-вытяжные системы", desc: "Проектирование, монтаж и обслуживание приточной, вытяжной и приточно-вытяжной вентиляции.", image: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/857a0c8e-603f-414a-8920-3b9eb6cb5089.jpg" },
  { name: "Кондиционирование", full: "Системы кондиционирования", desc: "Монтаж сплит-систем, мультизональных VRF/VRV систем, чиллеров. Сервис и заправка.", image: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/db37ff78-b885-4ca6-8ecf-3fc7bcd6b645.jpg" },
  { name: "Электромонтаж", full: "Электромонтажные работы", desc: "Монтаж электрощитов, прокладка кабелей, установка розеток, автоматов и освещения.", image: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/e4c0060b-439a-46fb-9155-fc031e830e0a.jpg" },
  { name: "Водоподготовка", full: "Водоподготовка и водоочистка", desc: "Обслуживание бассейнов, саун, хаммамов и СПА. Монтаж систем фильтрации и очистки воды.", image: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/277bc382-0262-477f-b8f7-f93c924c3e61.jpg" },
  { name: "Ремонт и отделка", full: "Ремонтно-отделочные работы", desc: "Комплексный ремонт помещений: от черновой отделки до финишной отделки под ключ.", image: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/7f1c8b9c-768a-49c1-9837-d14e403f45bc.jpg" },
  { name: "Обслуживание", full: "Сервисное обслуживание систем", desc: "Техническое обслуживание всех инженерных систем объекта по договору. Аварийный выезд 24/7.", image: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/68856a99-1a1e-4251-9efc-7fca911d02ff.jpg" },
  { name: "СОУЭ", full: "Оповещение и управление эвакуацией", desc: "Монтаж систем речевого оповещения, световых табло и управления эвакуацией по нормам МЧС.", image: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/f0b81e1a-388a-4f9e-b8f4-6449efe6491a.jpg" },
  { name: "Часофикация", full: "Системы часофикации", desc: "Монтаж систем единого времени: первичные и вторичные часы для предприятий и объектов.", image: "https://cdn.poehali.dev/projects/87c2c339-71a8-4667-9743-bce6b2718f3b/files/0c576755-661e-4fb8-a30a-7afe8b582a9c.jpg" },
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