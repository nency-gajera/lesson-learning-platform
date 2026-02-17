"use client";

import { fileSubjectMap, lessonMap, yearGroupMap } from "@/utils/subject";
import { Lesson } from "@/utils/lessons";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function EditLesson() {
    const router = useRouter();
    const params = useParams();

    const id = Number(params.id);

    const [fileName, setFileName] = useState("");
    const [subject, setSubject] = useState("");
    const [yearGroup, setYearGroup] = useState("");
    const [lesson, setLesson] = useState("");

    // Load lesson from localStorage
    useEffect(() => {
        const data = localStorage.getItem("lessons");

        if (!data) return;

        const lessons: Lesson[] = JSON.parse(data);

        const found = lessons.find((l) => l.id === id);

        if (found) {
            setFileName(found.fileName);
            setSubject(found.subject);
            setYearGroup(found.yearGroup);
            setLesson(found.lesson);
        }
    }, [id]);

    // Auto update subjects
    const subjects = fileName
        ? fileSubjectMap[fileName]
        : [];

    // Update lesson
    const handleSubmit = () => {
        if (!fileName || !subject || !yearGroup || !lesson) {
            alert("Please fill all fields");
            return;
        }

        const data = localStorage.getItem("lessons");

        if (!data) return;

        const lessons: Lesson[] = JSON.parse(data);

        const updated = lessons.map((item) =>
            item.id === id
                ? {
                    ...item,
                    fileName,
                    subject,
                    yearGroup,
                    lesson,
                }
                : item
        );

        localStorage.setItem("lessons", JSON.stringify(updated));

        router.push("/"); // Back to home
    };

    return (
        <div className="min-h-screen bg-white/50">
            {/* Header */}
            <div className="bg-white/80">
                <div className="flex flex-col sm:flex-row px-4 sm:px-6 py-4 items-center justify-between gap-3 border-b border-gray-200">

                    <img src="/logo.svg" alt="" />

                    <div className="flex gap-2">
                        <button
                            className="text-gray-600 hover:text-gray-900 font-medium"
                            onClick={() => router.back()}
                        >
                            Cancel
                        </button>

                        <button
                            className="bg-[#128870] text-white rounded-lg px-5 py-2 font-medium hover:bg-[#0f6f5c] transition"
                            onClick={handleSubmit}
                        >
                            Update Lesson
                        </button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex justify-center px-4 sm:px-6 lg:px-8 py-10">
                <div className="w-full max-w-5xl space-y-6">

                    {/* Section 1 */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div className="flex flex-col gap-2">
                            <h2 className="font-semibold text-xl sm:text-2xl text-gray-900">
                                Edit Lesson Plan
                            </h2>
                            <p className="text-gray-500">
                                Update your lesson information.
                            </p>
                        </div>
                        <img src="/create-lesson-plan-vector.svg" alt="" />
                    </div>

                    {/* Section 2 */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
                        <h2 className="font-semibold text-xl mb-2">
                            Select File Name and Subject
                        </h2>
                        <div className="flex gap-4 p-4">

                            {/* File */}
                            <div className="flex flex-col w-full">
                                <label>File Name</label>
                                <select
                                    value={fileName}
                                    onChange={(e) => {
                                        setFileName(e.target.value);
                                        setSubject("");
                                    }}
                                    className="border p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#128870]"
                                >
                                    <option value="">Select File</option>
                                    {Object.keys(fileSubjectMap).map((file) => (
                                        <option key={file} value={file}>
                                            {file}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Subject */}
                            <div className="flex flex-col w-full">
                                <label>Subject</label>
                                <select
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    disabled={!fileName}
                                    className="border p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#128870] disabled:bg-gray-100"
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

                    {/* Section 3 */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
                        <h2 className="font-semibold text-xl mb-2">
                            Select Year Group and Lessons
                        </h2>
                        <div className="flex gap-4 p-4">

                            {/* Year */}
                            <div className="flex flex-col w-full">
                                <label>Year Group</label>
                                <select
                                    value={yearGroup}
                                    onChange={(e) => setYearGroup(e.target.value)}
                                    className="border p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#128870]"
                                >
                                    <option value="">Select Year</option>
                                    {yearGroupMap.map((item) => (
                                        <option key={item.label} value={item.label}>
                                            {item.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Lesson */}
                            <div className="flex flex-col w-full">
                                <label>Number of Lessons</label>
                                <select
                                    value={lesson}
                                    onChange={(e) => setLesson(e.target.value)}
                                    className="border p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#128870]"
                                >
                                    <option value="">Select Lessons</option>
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
    );
}
