import { useState } from "react";

export default function Accordion() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className="accordion">
            <button onClick={handleClick}>
                {open ? "閉じる" : "開く"}
            </button>

            <div className={`content ${open ? "open" : ""}`}>
                <div className="content-inner">
                    <p>ここにアコーディオンの中身が入ります。</p>
                    <p>複数行でも大丈夫です。</p>
                </div>
            </div>
        </div>
    );
}