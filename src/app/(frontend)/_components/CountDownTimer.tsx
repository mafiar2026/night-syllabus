'use client'
import { useEffect, useState } from 'react'

function CountDownTimer({ duration = 5 * 3600 + 22 * 60 + 42 }) {
  const [time, setTime] = useState(duration)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((t) => (t > 0 ? t - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const days = Math.floor(time / 86400)
  const hours = Math.floor((time % 86400) / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = time % 60

  const format = (num: number) => String(num).padStart(2, '0')

  const Box = ({
    value,
    label,
    highlight = false,
  }: {
    value: string
    label: string
    highlight?: boolean
  }) => (
    <div
      className={`w-20 sm:w-24 md:w-28 h-20 rounded-xl border-2 
      flex flex-col items-center justify-center
      ${highlight ? 'bg-red-700 border-red-600' : 'bg-black border-red-600 text-white'}`}
    >
      <span className="text-3xl md:text-4xl font-bold">{value}</span>
      <span className="text-sm md:text-base mt-1">{label}</span>
    </div>
  )

  return (
    <div className="flex gap-3 md:gap-5 justify-center">
      <Box value={format(days)} label="দিন" />
      <Box value={format(hours)} label="ঘন্টা" />
      <Box value={format(minutes)} label="মিনিট" />
      <Box value={format(seconds)} label="সেকেন্ড" highlight />
    </div>
  )
}

export default CountDownTimer
