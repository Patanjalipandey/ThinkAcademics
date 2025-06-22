import React from 'react'

const FilterSideBar = () => {
    return (
        <aside className="w-full md:w-1/4 lg:w-1/5 pr-6">
            <h2 className="text-lg font-semibold mb-4">FILTERS</h2>

            <div className="mb-6 border-2 border-gray-400 p-4 rounded">
                <h3 className="text-sm font-semibold mb-2">CATEGORIES</h3>
                <div className="space-y-2 text-sm">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Men
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Women
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Kids
                    </label>
                </div>
            </div>

            <div className='border-2 border-gray-400 p-4 rounded'>
                <h3 className="text-sm font-semibold mb-2">TYPE</h3>
                <div className="space-y-2 text-sm">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Topwear
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Bottomwear
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Winterwear
                    </label>
                </div>
            </div>
        </aside>
    )
}

export default FilterSideBar