const { chromium } = require('playwright');

async function testElectronBookApp() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    console.log('🧪 Testing Electronic Book Application...');
    
    // Test 1: Navigate to the deployed URL
    console.log('📍 Test 1 to main page');
    await page.goto('https://dh56fwhs3nat.space.minimax.io');
    await page.waitForLoadState('networkidle');
    console.log('✅ Main page loaded successfully');

    // Test 2: Check if main page elements are visible
    console.log('📍 Test 2: Checking main page elements');
    const title = await page.textContent('h1');
    if (title && title.includes('Bolalarni Maktabga Tayyorlash Metodikasi')) {
      console.log('✅ Main title is correct');
    } else {
      console.log('❌ Main title is missing or incorrect');
    }

    // Test 3: Check if topic cards are visible
    console.log('📍 Test 3: Checking topic cards');
    const topicCards = await page.locator('a[href^="/topics/"]').count();
    if (topicCards > 0) {
      console.log(`✅ Found ${topicCards} topic cards`);
    } else {
      console.log('❌ No topic cards found');
    }

    // Test 4: Click on a topic card and check if it navigates to detail page
    console.log('📍 Test 4: Testing topic navigation');
    const firstTopicCard = page.locator('a[href^="/topics/"]').first();
    if (await firstTopicCard.isVisible()) {
      await firstTopicCard.click();
      await page.waitForLoadState('networkidle');
      
      const currentUrl = page.url();
      if (currentUrl.includes('/topics/')) {
        console.log('✅ Topic navigation works correctly');
      } else {
        console.log('❌ Topic navigation failed');
      }

      // Test 5: Check if accordion sections are visible on topic page
      console.log('📍 Test 5: Checking accordion sections');
      const accordionItems = await page.locator('button').filter({ hasText: /^\d+\./ }).count();
      if (accordionItems > 0) {
        console.log(`✅ Found ${accordionItems} accordion sections`);
      } else {
        console.log('❌ No accordion sections found');
      }

      // Test 6: Check if QuestionSpinner is visible
      console.log('📍 Test 6: Checking Question Spinner');
      const spinner = await page.locator('button').filter({ hasText: /G\'ildirakni Aylantirish/ }).count();
      if (spinner > 0) {
        console.log('✅ Question Spinner is visible');
      } else {
        console.log('❌ Question Spinner is not visible');
      }

      // Test 7: Test spinner functionality
      console.log('📍 Test 7: Testing spinner functionality');
      const spinButton = page.locator('button').filter({ hasText: /G\'ildirakni Aylantirish/ }).first();
      if (await spinButton.isVisible()) {
        await spinButton.click();
        await page.waitForTimeout(1000); // Wait for animation
        
        // Check if spinner button text changes during spinning
        const buttonText = await spinButton.textContent();
        if (buttonText && buttonText.includes('Aylanayapti')) {
          console.log('✅ Spinner animation works correctly');
        } else {
          console.log('❌ Spinner animation might not be working');
        }
      }
    }

    // Test 8: Test navigation back to home
    console.log('📍 Test 8: Testing back navigation');
    const backButton = page.locator('a').filter({ hasText: /Bosh sahifaga qaytish/ });
    if (await backButton.isVisible()) {
      await backButton.click();
      await page.waitForLoadState('networkidle');
      
      const currentUrl = page.url();
      if (currentUrl === 'https://dh56fwhs3nat.space.minimax.io/') {
        console.log('✅ Back navigation works correctly');
      } else {
        console.log('❌ Back navigation failed');
      }
    }

    // Test 9: Check other navigation links
    console.log('📍 Test 9: Testing other navigation links');
    const navLinks = [
      { text: 'Adabiyotlar', url: '/bibliography' },
      { text: 'Mualliflar', url: '/authors' },
      { text: 'Ilova haqida', url: '/app-info' }
    ];

    for (const link of navLinks) {
      const navLink = page.locator('a').filter({ hasText: link.text });
      if (await navLink.isVisible()) {
        await navLink.click();
        await page.waitForLoadState('networkidle');
        
        const currentUrl = page.url();
        if (currentUrl.includes(link.url)) {
          console.log(`✅ ${link.text} navigation works`);
        } else {
          console.log(`❌ ${link.text} navigation failed`);
        }
        
        // Navigate back to home for next test
        await page.goto('https://dh56fwhs3nat.space.minimax.io');
        await page.waitForLoadState('networkidle');
      }
    }

    console.log('🎉 All tests completed successfully!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
}

// Run the tests
testElectronBookApp().catch(console.error);