import { createRoot } from "react-dom/client"
import React, {Suspense, useState} from "react"
import { App } from "./App"
import { Underlay, Overlay } from "./layout"
import "./styles.css"



function App1() {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = 4; // Set the total number of pages

    const handleNextPage = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    };

    return (
        <div>
            <Underlay page={currentPage} />

            <Overlay page={currentPage} onNext={handleNextPage} onPrev={handlePrevPage} />
        </div>
    );
}
export default App1;

createRoot(document.getElementById("root")).render(
  <>
    {/*<Underlay />*/}
    <Suspense fallback={null}>
        <App/>
      <App1 />

    </Suspense>
    {/*<Overlay />*/}
  </>,
)
