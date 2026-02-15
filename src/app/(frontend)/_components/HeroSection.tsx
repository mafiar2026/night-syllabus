'use client'

import React, { useState, useEffect } from 'react'
import CountDownTimer from './CountDownTimer'

export default function HeroSection({ page }: { page: any }) {
  const bdPrice = page?.pricing?.[0]?.bdPrice

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
    <section className="py-14 ">
      <div className="w-full flex flex-col gap-5 items-center justify-center">
        {/* Heading 1 */}
        <div className="p-3 border-primary border-2 rounded-full" data-id="1994505">
          <span className="">✨ 4,500+ Satisfied Learners ✨</span>
        </div>

        {/* Heading 2 */}
        <div className="text-center" data-id="1364672">
          <div className="text-7xl font-extrabold">
            বিছানায় আপনার স্ত্রীকে কি <br />
            <span style={{ color: '#FF0000' }}>সত্যিই তৃপ্তি দিতে পারছেন?</span>
          </div>
        </div>

        {/* Heading 3 */}
        <div className="text-2xl font-bold text-center" data-id="5216b81">
          <div className="elementor-heading-title elementor-size-default">
            ৯০% পুরুষ জানেই না, কিভাবে নারীর শরীরকে উত্তেজিত করতে হয়!
            <br />
            <b>
              <span style={{ color: '#FF0000' }}>
                কিন্তু একজন &apos;মাস্টার লাভার&apos; জানে কীভাবে নারীর শরীরের প্রতিটি ইঞ্চিতে শিহরণ
                জাগাতে হয়!
              </span>
            </b>
          </div>
        </div>

        {/* Video Section */}
        <div className="border-white border-2 rounded-md" data-id="829cec1">
          <div className="w-6xl h-auto max-w-4xl mx-auto">
            <iframe
              width="100%"
              style={{ aspectRatio: '16/9' }}
              src="https://www.youtube.com/embed/abzpfDXtXPE?si=h9gULhx-TWaPy8M3"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Buttons Container */}
        <div className="flex gap-5 items-center justify-center text-2xl mt-5" data-id="74edddc">
          {/* Module Button */}
          <div
            className="bg-white font-bold text-black px-4 py-2 rounded-full cursor-pointer"
            data-id="e6e30c2"
          >
            <div
              className="elementor-button elementor-size-sm elementor-animation-grow"
              style={{ cursor: 'pointer' }}
              onClick={() =>
                document.getElementById('module')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
            >
              <div className="elementor-button-content-wrapper">
                <div className="elementor-button-text">কোর্সের মডিউল দেখুন</div>
              </div>
            </div>
          </div>

          {/* Enroll Button */}
          <div
            className="bg-primary text-white font-bold px-4 py-2 rounded-full cursor-pointer"
            data-id="f8aa14d"
          >
            <div
              className="elementor-button elementor-size-sm elementor-animation-grow"
              style={{ cursor: 'pointer' }}
              onClick={handleBuyNow}
            >
              <button className="flex gap-2 items-center justify-center font-bold">
                <span className="elementor-button-icon">🚀</span>
                <span className="font-bold">এখনই এনরোল করুন</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
