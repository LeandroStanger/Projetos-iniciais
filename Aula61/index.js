const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

// Adiciona o plugin Stealth
puppeteer.use(StealthPlugin());

(async () => {
    // Configurações adicionais para mimetizar um navegador real
    const browser = await puppeteer.launch({ 
        headless: false, // Pode ser 'new' em alguns casos
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-blink-features=AutomationControlled', // Remove flag de automação
        ]
    });
    
    const page = await browser.newPage();
    
    // Define um User-Agent comum e uma viewport realista
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36');
    await page.setViewport({ width: 1366, height: 768 });

    // Navega para um site que detecta bots (exemplo)
    await page.goto('https://bot.sannysoft.com/');
    
    // Aguarda um pouco para a página renderizar
    await page.waitForTimeout(3000);
    
    // Tira um screenshot para verificar se passou nos testes de detecção
    await page.screenshot({ path: 'stealth_test_result.png', fullPage: true });
    console.log('📸 Screenshot salvo como stealth_test_result.png');

    await browser.close();
})();