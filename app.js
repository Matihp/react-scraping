const puppeteer = require('puppeteer');

inicio();

async function inicio() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const pagina = await browser.newPage();

  await pagina.goto("https://www.sporting.com.ar/sporting/calzado/zapatillas");

  const num = Array.from({ length: 20 }, (_, index) => index + 1);
  const text = await pagina.evaluate((num) => {
    const result = [];
    num.forEach((num) => {
      const selector = `#gallery-layout-container > div:nth-child(${num})`;
      const element = document.querySelector(selector);
      if (element) {
        result.push(element.innerText);
      }
    });
    return result;
  }, num);

  console.log(text);

  setTimeout(() => {
    browser.close();
  }, 3000);
}                               