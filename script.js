// write your JavaScript here
'use strict';

// To check if clipboard API is supported
if (navigator.clipboard && navigator.clipboard.writeText) {
    console.log("Clipboard API is supported.");
    // Your copyContent function here
} else {
    console.error("Clipboard API is not supported in this browser.");
    // Provide a fallback method or inform the user
}

const copy = document.querySelector('.copy-button');

async function copyContent() {

    const text = document.querySelector('.url-space').value;
    if (text === "") {
        alert('Enter a link');
    } else {

    try{
        await navigator.clipboard.writeText(text);
        alert(`you have copied ${text}`);
        console.log(`${text}`);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}
}

 copy.addEventListener('click', copyContent);

// document.querySelector('.copy-button').addEventListener('click', async function() {
//     const text = 'Hello, world!'; // Test with a simple string
//     try {
//         await navigator.clipboard.writeText(text);
//         console.log('Content copied to clipboard');
//     } catch (err) {
//         console.error('Failed to copy: ', err);
//     }
// });
