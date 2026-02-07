import { test, expect } from '@playwright/test';



// เปิด Browser แล้วไปยังหน้าที่จะทดสอบ
test("เปิด Browser แล้วไปยังหน้าที่จะทดสอบ", async ({ page }) => {
  await page.goto('https://demo-login-workshop.vercel.app/');
});
// กรอก Username 
// กรอก Password
// กดปุ่ม Login
// ตรวจสอบว่า Login สำเร็จหรือไม่ โดยตรวจสอบ Expected Result
