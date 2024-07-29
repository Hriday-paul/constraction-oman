import AdminSidebar from '@/components/AdminSidebar/AdminSidebar'
import React from 'react'

export default function layout({ children }) {
    return (
        <div>
            <AdminSidebar>
                {children}
            </AdminSidebar>
        </div>
    )
}
