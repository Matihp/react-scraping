puppe = require('puppeteer')              
        
inicio() 

async function inicio() {

  browser = await puppe.launch({ headless: false });

  pagina = await browser.newPage();

  await pagina.goto("https://www.dolarsi.com.ar/func/tool4.php");

  let text = await pagina.evaluate(() => {
    return document.querySelector("#v1").innerText;
  });

  console.log(text);
  
  setTimeout(() => {
    browser.close();
  }, 1000);
}                                        