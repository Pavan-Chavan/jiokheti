"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { useRouter } from 'next/router'
// import SearchBar from "./SearchBar"
import CategoryFilter from "./CategoryFilter"
// import { Button } from "@/components/ui/button"
// import { X } from "lucide-react"
import { isEmpty } from "lodash";
import { fetchCategoryFromSlug } from "../../api/category"
import { fetchSubCategoryFromSlug } from "../../api/subCategory"
import { buttonStyle, topNavbarStyle } from "../../styles/style"

export default function FilterBox({selectedCategory = "", selectedSubcategory = ""}) {
  const router = useRouter()
  const searchParams = useSearchParams()
	const query = router.query;
  const [searchQuery, setSearchQuery] = useState(searchParams.get("query") || "")
  const [category, setCategory] = useState(null)
  const [subcategory, setSubcategory] = useState(null)

  useEffect(() => {
    if (!isEmpty(selectedCategory)) {
      fetchCategoryFromSlug(setCategory, selectedCategory)
    }
    if (!isEmpty(selectedSubcategory)) {
      fetchSubCategoryFromSlug(setSubcategory, selectedSubcategory)
    }
  }, [selectedCategory, selectedSubcategory])

  const handleSearch = () => {
    setSearchQuery(query)
    updateFilters({ query })
  }

  const handleCategoryChange = (cat) => {
    setCategory(cat)
    setSubcategory(null);
    if (!isEmpty(cat)) {
      router.push(`/blogs/${cat.slug}`)
    }
    // updateFilters({ category: cat, subcategory: "" })
  }

  const handleSubcategoryChange = (subcat) => {
    setSubcategory(subcat)
    if (!isEmpty(subcat)) {    
      router.push(`/blogs/${category.slug}/${subcat.slug}`)
    }
    // updateFilters({ subcategory: subcat })
  }

  const removeCategory = () => {
    setCategory(null)
    setSubcategory(null)
    router.push(`/blogs`)
    // updateFilters({ category: "", subcategory: "" })
  }

  const removeSubcategory = () => {
    setSubcategory("")
    router.push(`/blogs/${category.slug}`)
    // updateFilters({ subcategory: "" })
  }

  const updateFilters = (params) => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newSearchParams.set(key, value)
      } else {
        newSearchParams.delete(key)
      }
    })
    router.push(`?${newSearchParams.toString()}`)
  }

  return (
    <div className="container" style={topNavbarStyle}>
      <div className="row">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        {/* <SearchBar initialQuery={searchQuery} onSearch={handleSearch} /> */}
          {(category || subcategory) && <div className="mt-4">
            {category && <h3 className="text-sm font-medium mb-2">निवडलेली श्रेणी</h3>}
            <div className="d-flex flex flex-wrap gap-2">
              {category && (
                <button className="btn theme-btn d-flex align-items-center" style={buttonStyle} onClick={removeCategory}>
                  {category?.category_name || "श्रेणी उपलब्ध नाही"}<i className="fi flaticon-delete"></i>
                </button>
              )}
              {subcategory && (
                <button className="btn theme-btn d-flex align-items-center" style={buttonStyle} onClick={removeSubcategory}>
                  {subcategory?.sub_category_name || "श्रेणी उपलब्ध नाही"}<i className="fi flaticon-delete"></i>
                </button>
              )}
            </div>
          </div>}
          <CategoryFilter
            selectedCategory={category}
            removeCategory={removeCategory}
            selectedSubcategory={subcategory}
            onCategoryChange={handleCategoryChange}
            onSubcategoryChange={handleSubcategoryChange}
          />
        </div>
      </div>
    </div>
  )
}

