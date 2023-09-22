import Navbar from "./Navbar";
import Card from "./Card";
import "./Read.css";
import ReadMaterialData from "../data/ReadMaterialData";
import pdf1 from "../assets/story_01.pdf";
import pdf2 from "../assets/story_02.pdf";
import pdf3 from "../assets/display_01.pdf";
import pdf4 from "../assets/display_02.pdf";
import pdf5 from "../assets/flashcard_01.pdf";
import pdf6 from "../assets/flashcard_02.pdf";

export default function Read() {
  return (
    <>
      <Navbar />
      <section className="read">
        {ReadMaterialData.map((item, index) => (
          <Card
            key={index}
            classNameImage="image"
            src={item.image}
            alt={`Level ${item.level} Image`}
            title={item.level}
            category={item.category}
          />
        ))}
        <div className="pdf-container">
          <h2>Level 1 Story</h2>
          <object
            data={pdf1}
            type="application/pdf"
            aria-label="single letter sounds"
            width="850"
            height="600"
          ></object>
        </div>

        <div className="pdf-container">
          <h2>Level 2 Story</h2>
          <object
            data={pdf2}
            type="application/pdf"
            aria-label="complex sounds"
            width="850"
            height="600"
          ></object>
        </div>
        <div className="pdf-container">
          <h2>Level 1 Display</h2>
          <object
            data={pdf3}
            type="application/pdf"
            aria-label="cards for display"
            width="850"
            height="600"
          ></object>
        </div>
        <div className="pdf-container">
          <h2>Level 2 Display</h2>
          <object
            data={pdf4}
            type="application/pdf"
            aria-label="cards for display"
            width="850"
            height="600"
          ></object>
        </div>
        <div className="pdf-container">
          <h2>Level 1 Flashcards</h2>
          <object
            data={pdf5}
            type="application/pdf"
            aria-label="Flashcards"
            width="850"
            height="600"
          ></object>
        </div>
        <div className="pdf-container">
          <h2>Level 2 Flashcards</h2>
          <object
            data={pdf6}
            type="application/pdf"
            aria-label="Flashcards"
            width="850"
            height="600"
          ></object>
        </div>
      </section>
    </>
  );
}
