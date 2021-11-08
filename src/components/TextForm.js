import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("UpperCase Was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To Uppercase", "success");
    }


    const handleLoClick = () => {
        // console.log("UpperCase Was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To Lowercase", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied To Clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed", "success");
    }

    const handleCapitalize = () => {

        let firstchar = text.charAt(0); // storing the first char of the string
        let newText = firstchar.toUpperCase(); // converting that to uppercase
        setText(newText + text.slice(1)); // printing it with rest excluding the first char by using slice
        props.showAlert("Text Has Been Capitalize Now", "success");
    }

    const handleClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared !!!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#242B2E' : '#F4F1F1', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To Uppercase</button>

                <button disabled={text.length === 0} className="btn-primary mx-2 my-1" onClick={handleLoClick}>Convert To Lowercase</button>

                <button disabled={text.length === 0} className="btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>

                <button disabled={text.length === 0} className="btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

                <button disabled={text.length === 0} className="btn-primary mx-2 my-1" onClick={handleCapitalize}>Capitalize</button>

                <button disabled={text.length === 0} className="btn-primary mx-2 my-1" onClick={handleClear}>Clear Text</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes To Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing To Preview !!!"}</p>
            </div>
        </>
    )
}
