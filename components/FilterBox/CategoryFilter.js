"use client"

import { useState, useEffect } from "react"
import { fetchCategory } from "../../api/category"
import { fetchSubCategory } from "../../api/subCategory"
import { isEmpty } from "lodash"
import { buttonStyle } from "../../styles/style"
// import { Button } from "@/components/ui/button"

export default function CategoryFilter({
  selectedCategory = null,
  selectedSubcategory = null,
  onCategoryChange,
  removeCategory,
  onSubcategoryChange,
	}) {
  const [category, setCategory] = useState(null)
  const [subcategory, setSubcategory] = useState(null)

  const [categories, setCategories] = useState([])
  const [subCategories, setSubCategories] = useState([])

  useEffect(() => {
    setCategory(selectedCategory)
    setSubcategory(selectedSubcategory)
  }, [selectedCategory, selectedSubcategory])

  const handleCategoryClick = (value) => {
    if (value.category_name === category?.category_name) {
      setCategory(null)
      setSubcategory(null)
      onCategoryChange(null)
    } else {
      setCategory(value)
      setSubcategory(null)
      onCategoryChange(value)
    }
  }

  const handleSubcategoryClick = (value) => {
    if (value.sub_category_name === subcategory?.sub_category_name) {
      setSubcategory(null)
      onSubcategoryChange(null)
    } else {
      setSubcategory(value)
      onSubcategoryChange(value)
    }
  }

  useEffect(()=>{
    fetchCategory(setCategories);
  },[]);

  useEffect(()=>{
    if (!isEmpty(category?.category_name)) {
      fetchSubCategory(setSubCategories, category.category_name);
    }
  },[category]);

  return (
    <div className="mt-4">
      {!category && ( <><h3 className="text-sm font-medium mb-2">श्रेणी निवडा</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.category_name}
						className="btn theme-btn m-1"
            size="sm"
            style={buttonStyle}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat.category_name}
          </button>
        ))}
      </div></>)}
      {category && subcategory === null && (
        <>
          <h3 className="d-flex text-sm font-medium">उप श्रेणी निवडा</h3>
          <div className="flex flex-wrap gap-2 d-flex">
            {subCategories.map((subcat) => (
                <button
                  key={subcat.sub_category_id}
									className="btn theme-btn"
                  size="sm"
                  style={buttonStyle}
                  onClick={() => handleSubcategoryClick(subcat)}
                >
                  {subcat.sub_category_name}
                </button>
              ))}
          </div>
        </>
      )}
      {category && subcategory && (
        <>
          <h3 onClick={removeCategory} className="d-flex text-sm font-medium">मुख्य श्रेणीकडे परत जा</h3>
        </>
      )}
    </div>
  )
}

