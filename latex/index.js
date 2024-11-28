const latex = require("node-latex");
const fs = require("fs");

const input = fs.createReadStream("./latex/deancv.tex");
// const output = fs.createWriteStream("../public/cv/cv.pdf");
const output = fs.createWriteStream("./latex/cv.pdf");
const publicOutput = fs.createWriteStream("./public/cv.pdf");
const pdf = latex(input);

pdf.pipe(output);
pdf.pipe(publicOutput);

pdf.on("error", (err) => console.error(err));
pdf.on("finish", () => console.log("PDF generated!"));
