let template = (title, message) => {
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>${title}</title>
    </head>
    <body>
    <div id="react-container">${message}</div>
    </body> 
    <script src="/dist/assets/bundle.js"></script>
    </html> `;
    return html;
}

export default template;