'use client'
import { useEffect, useState } from 'react'

function Countdown({ duration = 5 * 3600 + 22 * 60 + 42 }) {
  const [time, setTime] = useState(duration)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((t) => (t > 0 ? t - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const h = String(Math.floor(time / 3600)).padStart(2, '0')
  const m = String(Math.floor((time % 3600) / 60)).padStart(2, '0')
  const s = String(time % 60).padStart(2, '0')

  return (
    <div className="flex gap-2 text-2xl font-bold text-red-600">
      <span>{h}</span>:<span>{m}</span>:<span>{s}</span>
    </div>
  )
}

export default function SectionFive() {
  const items = [
    { title: 'মাস্টার লাভার কোর্স', old: '৳৫,০০০', new: '৳৩,০০০', icon: '🎓' },
    { title: 'দ্য আর্ট অফ ফোরপ্লে – ইবুক', old: '৳৩৮০', new: 'ফ্রি', icon: '📘' },
    { title: 'বিবাহ প্রস্তুতি – ইবুক', old: '৳২৮০', new: 'ফ্রি', icon: '📘' },
    { title: 'VIP কমিউনিটি মেম্বারশিপ (লাইফটাইম)', old: '৳৬,০০০', new: 'ফ্রি', icon: '💎' },
  ]

  const handleBuyNow = () => {
    const el = document.getElementById('checkout')
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <section className="bg-transparent border border-primary text-white py-16 px-6 min-w-2xl">
      <div className="max-w-5xl mx-auto space-y-10 text-2xl font-bold">
        {/* Countdown */}
        <div className="flex justify-between items-center gap-10 px-3">
          <div className="flex items-center gap-2 font-semibold">
            ⏱ <span>অফার শেষ হতে বাকি:</span>
          </div>
          <Countdown />
        </div>

        {/* Offer Items */}
        <div className="space-y-5">
          {items.map((item, i) => (
            <div key={i} className="flex items-center justify-between bg-gray-900 rounded-xl p-5">
              <div className="flex items-center gap-4">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
              <p className="text-right">
                <span className="line-through text-gray-400 mr-2">{item.old}</span>
                <span className="text-red-500 font-bold">{item.new}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700" />

        {/* Total Value */}
        <p className="text-center line-through text-gray-400 text-lg">সর্বমোট ভ্যালু: ৯,৬৬০ টাকা</p>

        {/* Big Price */}
        <div className="flex justify-center items-end gap-3">
          <span className="text-red-600 text-2xl font-bold">মাত্র</span>
          <span className="text-6xl md:text-7xl font-extrabold">১২৫০</span>
          <span className="text-2xl font-semibold">টাকা</span>
        </div>

        {/* CTA */}
        <div className="text-center pt-6">
          <button
            onClick={handleBuyNow}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-10 py-4 rounded-full text-lg font-bold transition-transform hover:scale-105"
          >
            🚀 অফারটি নিতে চাই!
          </button>
        </div>
      </div>
    </section>
  )
}
