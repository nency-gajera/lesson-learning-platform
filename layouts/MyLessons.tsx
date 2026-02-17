"use client"

import TableSection from '@/components/TableSection';
import { Lesson } from '@/utils/lessons';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface Props {
  search: string;
}

export default function MyLessons({ search }: Props) {

  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("lessons");

    if (data) {
      setLessons(JSON.parse(data));
    }
  }, []);

  const filteredLessons = lessons.filter((item) =>
    item.fileName.toLowerCase().includes(search.toLowerCase()) ||
    item.subject.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="space-y-6">

      {filteredLessons.length === 0 && (
        <div className="flex flex-col items-center justify-center text-center mt-16 px-4">

          <img
            src="/empty-state-vector.svg"
            alt="empty"
            className="w-48 sm:w-64 md:w-72 mb-6"
          />

          <p className="font-bold text-lg">No content yet</p>

          <p className="text-gray-500 text-sm sm:text-base max-w-md">
            Your library is empty. Create your first lesson now!
          </p>

          <Link href="/lesson">
            <button className="mt-4 bg-[#128770] text-white rounded-lg px-4 py-2 text-sm sm:text-base">
              Create new Lesson
            </button>
          </Link>

        </div>
      )}

      {filteredLessons.length > 0 && (
        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-4">My Lessons</h2>

          <TableSection myLesson={filteredLessons} />
        </div>
      )}

    </div>
  )

}
