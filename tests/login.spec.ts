import { test, expect } from '@playwright/test';
 

test("Login success ด้วย Username คือ demo และ Password คือ mode", async ({ page }) => {
  
  // Step 1: เปิดหน้าเว็บ
  await test.step("เปิด Browser แล้วไปยังหน้าที่จะทดสอบ", async () => {
    await page.goto('https://demo-login-workshop.vercel.app/');
  });

  // Step 2: กรอกข้อมูล (ใช้ page เดิมจาก Step 1)
  await test.step("กรอก Username", async () => {
    // ต้องสั่ง .fill เพื่อพิมพ์ข้อความลงไปครับ แค่ locator เฉยๆ จะเป็นการแค่หา element
    await page.locator("#username_field").fill("emo"); 
  });

  await test.step("กรอก Password", async () => {
    await page.locator("#password_field").fill("mode");
  });

  await test.step("กดปุ่ม Login", async () => {
    await page.locator("#login_button").click();
  });

});
// กรอก Password
// กดปุ่ม Login
// ตรวจสอบว่า Login สำเร็จหรือไม่ โดยตรวจสอบ Expected Result
