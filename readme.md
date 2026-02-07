ลง bun แทน npm ไว บน wsl

open wsl & run at path
```
cd ~
```
then run
```
curl -fsSL https://bun.sh/install | bash
```
note:
ตามแต่ละเครื่อง บางเครื่องไม่มี unzip ก็ลง unzip ก่อน
```
sudo apt update && sudo apt install -y unzip
```
หลังจากลงเสร็จ ให้ active หรือทำใหม่
```
source /home/tenet/.bashrc
```

และ check version กับการใช้งานได้เลย
```
bun --version
bun --help
```
> .
คำเตือนสำคัญ: อย่าหลงเชื่อคำแนะนำของ Terminal ที่บอกว่า sudo snap install bun-js เด็ดขาด 
เหตุผล: ตัว Snap มักจะมีปัญหาเรื่อง Permission และทำงานช้ากว่าแบบ Official script ที่เรากำลังทำอยู่นี้ครับ ให้ใช้ curl เท่านั้นครับ

# Start with bun
ไปอยู่ที่ path project-bun ที่ต้องการ
```
bun create playwright
```
เลือกตามนี้  
✔ Do you want to use TypeScript or JavaScript? · TypeScript  
✔ Where to put your end-to-end tests? · tests  
✔ Add a GitHub Actions workflow? (Y/n) · false  
✔ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true  
✔ Install Playwright operating system dependencies (requires sudo / root - can be done manually via 'sudo npx playwright install-deps')? (y/N) · true

etc.
ถ้าเผลอลงผิด path แล้วสามารถย้ายไปที่ ต้องการได้
mv package.json package-lock.json playwright.config.ts tests "/mnt/d/2026/_Project/we_love_bug_/_learn/2week_7_21_02/wllb-workshop-bun/e2e-ui/ex01/"

ถ้ามาท่านี้ให้ install node_modules ใหม่ , และลบที่เดิม <br>โดยรัน
```
bun install
bun run playwright install
```
.

## how to run file .ts
```
bun x playwright test tests/login.spec.ts
```

รันแบบ ui
```
bun x playwright test tests/login.spec.ts --ui
```