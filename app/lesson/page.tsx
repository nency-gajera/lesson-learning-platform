"use client"

import { fileSubjectMap, lessonMap, yearGroupMap } from '@/utils/subject';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function lesson() {

  const router = useRouter();

  const [fileName, setFileName] = useState("");
  const [subject, setSubject] = useState("");
  const [yearGroup, setYearGroup] = useState("");
  const [lesson, setLesson] = useState("");

  const subjects = fileName
    ? fileSubjectMap[fileName]
    : [];

  const handleSubmit = () => {
    if (!fileName || !subject || !yearGroup || !lesson) {
      alert("Please fill all fields");
      return;
    }

    const newLesson = {
      id: Date.now(),
      fileName,
      subject,
      yearGroup,
      lesson,
    };

    const oldData = localStorage.getItem("lessons");

    const lessons = oldData ? JSON.parse(oldData) : [];

    lessons.push(newLesson);

    localStorage.setItem("lessons", JSON.stringify(lessons));

    router.push("/");
  };

  return (
    <div className='min-h-screen bg-white/50'>
      <div className='bg-white/80'>
        <div className="flex flex-col sm:flex-row px-4 sm:px-6 py-4 items-center justify-between gap-3 border-b border-gray-200">
          <div className='flex'>
            <img src="/logo.svg" alt="" />
          </div>
          <div className='flex gap-2'>
            <button 
              className='text-[#128770]'
              onClick={() => router.back()}
            >
              Cancel
            </button>
            <button
              className='bg-[#128870] text-white rounded-lg p-2'
              onClick={handleSubmit}
            >
              Generate Lesson Plan
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center px-4 sm:px-6 lg:px-8 py-10">
        <div className="w-full max-w-5xl space-y-6">

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* main section */}
            <div className='flex flex-col items-start justify-center gap-2'>
              <h2 className='font-semibold text-2xl'>Create Lesson Plan</h2>
              <p className='text-gray-500 mb-2'>Create a lesson plan from forms or files.</p>
              <p>This tool can be used to create lesson plans. Simply provide a learning objective and year group, and the AI will draft the lesson plan including assessment suggestions.</p>
              <button className='rounded-lg border border-gray-200 p-2'>
                View instructions
              </button>
            </div>
            <img src="/create-lesson-plan-vector.svg" alt="" />
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* file and subject section */}
            <div className='flex flex-col items-start justify-center gap-2'>
              <h2 className='font-semibold text-2xl'>Select File Name and Subject</h2>
              <p className='text-gray-500'>A brief description of why we need to choose it.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4">
                <label>FileName</label>
                <select
                  value={fileName}
                  onChange={(e) => {
                    setFileName(e.target.value);
                    setSubject("");
                  }}
                  className='border p-2 w-full rounded'
                >
                  <option value="">Select File</option>
                  {Object.keys(fileSubjectMap).map((file) => (
                    <option key={file} value={file}>
                      {file}
                    </option>
                  ))}
                </select>

                <label>Subject</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  disabled={!fileName}
                  className='border p-2 w-full rounded disabled:bg-gray-100'
                >
                  <option value="">Select Subject</option>
                  {subjects.map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* year and lesson section */}
            <div className='flex flex-col items-start justify-center gap-2'>
              <h2 className='font-semibold text-2xl'>Select Year Group and Lessons</h2>
              <p className='text-gray-500'>A brief description of why we need to choose it.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4">
                <label>Year Group</label>
                <select
                  value={yearGroup}
                  onChange={(e) => setYearGroup(e.target.value)}
                  className='border p-2 w-full rounded'
                >
                  <option value="">Select a yearGroup</option>
                  {yearGroupMap.map((item) => (
                    <option key={item.label} value={item.label}>
                      {item.label}
                    </option>
                  ))}
                </select>

                <label>Number of lesson</label>
                <select
                  value={lesson}
                  onChange={(e) => setLesson(e.target.value)}
                  className='border p-2 w-full rounded'
                >
                  <option value="">Select a Lessons</option>
                  {lessonMap.map((item) => (
                    <option key={item.title} value={item.title}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
