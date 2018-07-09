const puppeteer = require('puppeteer');

const createElementScreenShot = async (pageData, elemData) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({
    width: pageData.width,
    height: pageData.height
  })

  await page.goto(pageData.url);

  const result = await page.screenshot({
    encoding: 'base64',
    clip: {
      x: elemData.x,
      y: elemData.y,
      width: elemData.width,
      height: elemData.height
    }
  })

  await browser.close();

  return Promise.resolve(result)
}

exports.createElementScreenShot = createElementScreenShot