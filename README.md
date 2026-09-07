# Лаборатори №1 — UI автомат тест (Playwright) B222270046 М. Билгүүн-Эрдэнэ

## Юу хийсэн
- Node.js/TypeScript ашиглан Playwright төсөл үүсгэсэн (`npm init playwright@latest`)
- https://www.saucedemo.com сайт дээр 3 тест бичсэн:
  1. Амжилттай нэвтрэх (`standard_user` / `secret_sauce`)
  2. Амжилтгүй нэвтрэх (буруу нууц үг)
  3. Нэвтэрсний дараа бараа сагслах, дараа нь гарах (logout ер нь цэвэрхэн байлгах зорилгоор)
- Орчин үеийн locator-ууд (`getByPlaceholder`, `getByRole`, `getByText`) ашигласан
- XPath ашиглаагүй
- Codegen ашиглан нэвтрэх үйлдлийг бичүүлж, гарсан кодыг өөрийн бичсэнтэй харьцуулсан
- Trace viewer ашиглан тестийн алхам бүрийг дүрс бичлэгээр шалгасан (Бас тусдаа алдаатайг бичиж туршиж үзсэн)

## Playwright vs Selenium ажиглалт
Playwright нь ашиглахад илүү хялбар ба `codegen` гэх хэрэгсэл нь тестийн ажлийг маш хялбар бөгөөд хурдан болгож өгсөн ба ердөө ганц мөр код болох `npx playwright install`-аар бүх татах суулгах зүйлсийг шийдсэн нь selenium шиг version тааруулах гэх мэт төвөгтэй цаг үрсэн ажилуудыг байхгүй болгосон нь хамгийн их таалагдсан. 

Playwright `auto-wait` байдаг тул элэментүүдийг ямар нэгэн зүйл хийх эсвэл харагдтал үйлдэл хийхгүй байж болдог.

Playwright нэг таталтаар Chromium, Firefox, WebKit гэх browser-үүдийг бүгдийг зохицуулдаг. Харин Selenium нь browser бүрт driver салгах хэрэг гардаг.

Playwright дотор built-in `Trace Viewer` болон `Codegen` үнэгүй байдаг. Харин Selenium-д тийм зүйл байхгүй ба гаднах хэрэгсэл эсвэл screenshot-ууд дээр л найдах болно.

Хурдны тал дээрP laywright хөтөчтэй шууд, дотоод (native) протоколоор харилцдаг тул хурдан ажилладаг. Xарин Selenium нь WebDriver протокол (HTTP дээр суурилсан) ашигладаг тул харьцангуй удаан байдаг.

## Хэрхэн ажиллуулах
bash:
npm install
npx playwright install
npx playwright test
npx playwright show-report

bash:
npx playwright test --trace on
npx playwright show-report

Codegen ашиглахад
bash:
npx playwright codegen saucedemo.com