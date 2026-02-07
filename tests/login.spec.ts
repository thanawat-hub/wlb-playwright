import { test, expect } from '@playwright/test';
 

test("Login success ด้วย Username คือ demo และ Password คือ mode", async ({ page }) => {
  
  // Step 1: เปิดหน้าเว็บ
  await test.step("เปิด Browser แล้วไปยังหน้าที่จะทดสอบ", async () => {
    await page.goto('https://demo-login-workshop.vercel.app/');
  });

  // Step 2: กรอกข้อมูล (ใช้ page เดิมจาก Step 1 อยู่ใน scope (test) เดียวกัน)
  await test.step("กรอก Username", async () => {
    // ต้องสั่ง .fill เพื่อพิมพ์ข้อความลงไปครับ แค่ locator เฉยๆ จะเป็นการแค่หา element
    await page.locator("#username_field").fill("demo"); 
  });

  await test.step("กรอก Password", async () => {
    await page.locator("#password_field").fill("mode");
  });

  await test.step("กดปุ่ม Login", async () => {
    await page.locator("#login_button").click();
  });

  // ตรวจสอบว่า Login สำเร็จหรือไม่ โดยตรวจสอบ Expected Result
  await test.step("ตรวจสอบการ Login ว่าสำเร็จหรือไม่", async () => {
      
    // 1. ตรวจสอบหัวข้อ (Header)
    // ใช้ selector เจาะจงไปที่ data-test="page_name"
    await expect(page.locator('[data-test="page_name"]')).toHaveText('Welcome Page');

    // 2. ตรวจสอบประโยคผลลัพธ์ (Paragraph)
    // ใช้ selector เจาะจงไปที่ data-test="result"
    // สังเกตว่าเราใส่ข้อความ "logout." เข้าไปในประโยคเลย แม้มันจะเป็นลิงก์แยกก็ตาม
    await expect(page.locator('[data-test="result"]')).toHaveText('Login succeeded. Now you can logout.');
    
    // (Optional) 3. ถ้าอยากเช็คให้ชัวร์ว่าคำว่า logout เป็นลิงก์จริงๆ
    await expect(page.locator('[data-test="result"] >> a')).toHaveText('logout');
    await expect(page.locator('[data-test="result"] >> a')).toHaveAttribute('href', '.');
    }
  );
});