'use client'
import React from 'react'

const Pagination = ({page,setPage,data}) => {
    console.log(data?.length)
    console.log("reload",page)

    const selectPageHandler = (selectedPage) => {
        console.log("selectedPage",selectedPage)
        if (
          selectedPage >= 1 &&
          selectedPage <= data.length &&
          selectedPage !== page
        ) {
          console.log("run1")
          setPage(selectedPage);
        }
      };

  return (
    <div>
         {data?.length > 0 ? (
        <div className="px-2">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className="pagination-button"
          >
            {"<"}
          </span>

          {[...Array(Math.round(data?.length / 4))].map((_, i) => {
            console.log("i",i)
            return (
              <span
                key={i}
                className="bg-blue-400 px-2 mx-2"
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}

          <span
            onClick={() => selectPageHandler(page + 1)}
            className="px-2"
          >
            {">"}
          </span>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Pagination