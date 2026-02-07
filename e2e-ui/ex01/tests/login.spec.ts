import { test, expect } from '@playwright/test';



// เปิด Browser แล้วไปยังหน้าที่จะทดสอบ
test("เปิด Browser แล้วไปยังหน้าที่จะทดสอบ", async ({ page }) => {
  await page.goto('https://demo-login-workshop.vercel.app/');
});

// กรอก Username 
test("กรอก Username", async ({ page }) => {
  await page.locator("#username_field");
});

// กรอก Password
// กดปุ่ม Login
// ตรวจสอบว่า Login สำเร็จหรือไม่ โดยตรวจสอบ Expected Result
