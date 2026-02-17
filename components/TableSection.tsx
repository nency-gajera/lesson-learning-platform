import { Lesson } from '@/utils/lessons'
import { CopyIcon, Edit2, EllipsisVertical, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

interface MyLessonsMap {
    myLesson: Lesson[];
}

export default function TableSection({ myLesson }: MyLessonsMap) {

    const [openMenu, setOpenMenu] = useState<number | null>(null);

    // delete

    const handleDelete = (id: number) => {
        const updated = myLesson.filter((item) => item.id !== id);

        localStorage.setItem("lessons", JSON.stringify(updated));

        setOpenMenu(null);
        window.location.reload();
    };

    // Duplicate

    const handleDuplicate = (item: Lesson) => {
        const newLesson = {
            ...item,
            id: Date.now(),
        };

        const updated = [...myLesson, newLesson];

        localStorage.setItem("lessons", JSON.stringify(updated));

        setOpenMenu(null);
        window.location.reload();
    }

    // Edit

    const router = useRouter();

    const handleEdit = (item: Lesson) => {
        router.push(`/lesson/edit/${item.id}`)
    }

    return (
        <div className="w-full overflow-x-auto">

            <table className="min-w-[700px] w-full border-collapse text-sm sm:text-base">

                {/* Head */}
                <thead className="bg-gray-50">
                    <tr className="border-b text-left">

                        <th className="p-3">
                            <input type="checkbox" />
                        </th>

                        <th className="p-3">File Name</th>
                        <th className="p-3">Subject</th>
                        <th className="p-3 text-center">Lessons</th>
                        <th className="p-3">Year Group</th>
                        <th className="p-3"></th>

                    </tr>
                </thead>

                {/* Body */}
                <tbody>
                    {myLesson.map((item) => (
                        <tr
                            key={item.id}
                            className="border-b hover:bg-gray-50 transition"
                        >
                            <td className="p-3">
                                <input type="checkbox" />
                            </td>

                            <td className="p-3 font-medium whitespace-nowrap">
                                {item.fileName}
                            </td>

                            <td className="p-3 text-gray-600 whitespace-nowrap">
                                {item.subject}
                            </td>

                            <td className="p-3 text-center">
                                {item.lesson}
                            </td>

                            <td className="p-3 whitespace-nowrap">
                                {item.yearGroup}
                            </td>

                            <td className="p-3 relative">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setOpenMenu(openMenu === item.id ? null : item.id)
                                    }}
                                    className="p-1 rounded hover:bg-gray-200"
                                >
                                    <EllipsisVertical size={18} />
                                </button>

                                {openMenu === item.id && (
                                    <div
                                        onClick={(e) => e.stopPropagation()}
                                        className="absolute right-0 mt-2 bg-white border rounded-lg shadow-md w-36 z-20"
                                    >
                                        <button
                                            onClick={() => handleEdit(item)}
                                            className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-sm"
                                        >
                                            <Edit2 size={14} /> Edit
                                        </button>

                                        <button
                                            onClick={() => handleDuplicate(item)}
                                            className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-sm"
                                        >
                                            <CopyIcon size={14} /> Duplicate
                                        </button>

                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-sm text-red-500"
                                        >
                                            <Trash size={14} /> Delete
                                        </button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    )

}
