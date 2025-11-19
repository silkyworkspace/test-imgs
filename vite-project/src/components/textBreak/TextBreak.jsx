import textBreakLists from './textBreaLists';

export default function TextBreak() {
    return (
        <div>
            {textBreakLists.map((item) => (
                <p key={item.name}>
                    {item.text.map((line, i) => (
                        <span key={i} className='blockSpan'>{line}</span>
                        // .blockSpanにCSSでdisplay: block;を指定してください。
                    ))}
                </p>
            ))}
        </div>
    );
}