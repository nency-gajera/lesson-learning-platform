import { BookOpen, File, LayoutDashboard, LucideIcon, Settings, Users } from "lucide-react";

export type menuItemData = {
    id: string,
    icon: LucideIcon,
    label: string,
    active?: boolean,
}

export const menuItem : menuItemData[] = [
    {
        id: "Dashboard",
        icon: LayoutDashboard,
        label: "Dashboard"
    },
    {
        id: "Lessons",
        icon: BookOpen,
        label: "My Lessons",
        active: true
    },
    {
        id: "Users",
        icon: Users,
        label: "Teacher Academy"
    },
    {
        id: "File",
        icon: File,
        label: "Resources"
    },
    {
        id: "Settings",
        icon: Settings,
        label: "Settings"
    },
]