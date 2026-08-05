# Hệ thống thiết kế website Quang Vinh

Tài liệu này là nguồn tham chiếu cho toàn bộ giao diện của website portfolio. Mục tiêu là giữ mọi trang mới nhất quán với ngôn ngữ thị giác hiện tại: **editorial tối giản, cảm giác giấy in, tương phản mạnh, có chất kỹ thuật nhưng vẫn giàu tính cá nhân**.

Các giá trị đang được triển khai nằm chủ yếu trong `tailwind.config.js`, `src/index.css` và các component dùng chung trong `src/components`. Khi tài liệu và code khác nhau, ưu tiên sửa token hoặc component dùng chung, sau đó cập nhật tài liệu; không tạo một biến thể riêng lẻ chỉ để xử lý một trang.

---

## 1. Tính cách thương hiệu

Website cần truyền tải bốn đặc tính:

1. **Rõ ràng và có chủ đích** — ít màu, ít trang trí, phân cấp thông tin mạnh.
2. **Editorial** — headline lớn như bìa tạp chí, nhịp điệu bất đối xứng, đường kẻ mảnh và khoảng trắng rộng.
3. **Kỹ thuật nhưng gần gũi** — sans-serif đậm đại diện cho tính hệ thống; serif nghiêng tạo nét người và cảm xúc.
4. **Tĩnh lặng, có điểm nhấn** — phần lớn giao diện dùng màu trung tính; cam-đỏ chỉ xuất hiện ở các điểm có ý nghĩa.

Từ khóa định hướng: `broadsheet`, `warm paper`, `quiet confidence`, `human + machine`, `precise`, `bold typography`.

Không biến website thành giao diện dashboard, landing page SaaS bóng bẩy, phong cách neon/cyberpunk hoặc hệ thống card dày đặc. Hình ảnh chủ đạo phải đến từ typography, bố cục và nội dung.

---

## 2. Nguồn sự thật trong code

| Phạm vi | Nguồn chính |
| --- | --- |
| Màu và font toàn cục | `tailwind.config.js` |
| Reset, hiệu ứng và CSS đặc thù | `src/index.css` |
| Khung trang, padding, reveal | `src/components/Layout.jsx` |
| Điều hướng | `src/components/Header.jsx` |
| Thông tin cuối trang | `src/components/Footer.jsx` |
| Texture giấy | `src/components/NoiseOverlay.jsx` |
| Hero và section chuẩn | `src/pages/AboutMe.jsx` |
| Biến thể sự kiện | `src/pages/GraduationCeremony.jsx` và nhóm `.graduation-*` |

Quy tắc triển khai:

- Dùng utility Tailwind cho bố cục và styling thông thường.
- Dùng CSS trong `src/index.css` cho hiệu ứng dùng chung, keyframe, pseudo-element phức tạp hoặc một cụm giao diện đặc thù có nhiều trạng thái.
- Token dùng lại từ hai nơi trở lên phải được đưa vào `tailwind.config.js` hoặc CSS custom property, không sao chép mã màu rải rác.
- Mọi route cấp cao phải dùng `<Layout>` để có cùng nền, header, footer, texture và hành vi reveal.

---

## 3. Màu sắc

### 3.1. Bảng màu cốt lõi

| Token | Giá trị | Vai trò |
| --- | --- | --- |
| `background` | `#E6E4E1` | Nền giấy xám kem của toàn website |
| `foreground` | `#111111` | Chữ chính, icon chính, đường viền có độ tương phản cao |
| `accent` | `#FF4500` | Dấu chấm thương hiệu, trạng thái active, hover và điểm nhấn |
| `gray-700` | Tailwind mặc định | Metadata cần độ rõ cao |
| `gray-600` | Tailwind mặc định | Nội dung body phụ |
| `gray-500` | Tailwind mặc định | Điều hướng không active, liên kết cấp thấp |
| `gray-400` | Tailwind mặc định | Eyebrow, nhãn nhỏ, metadata nhẹ |
| Highlight | `#FFDF53` | Nét bút vàng cho thông tin cần nhấn một lần |

`#111111` được dùng thay cho đen tuyệt đối để giảm độ gắt trên nền giấy. Nền chính không được đổi sang trắng tinh theo từng trang.

### 3.2. Tỷ lệ sử dụng

- Khoảng 80–90% diện tích là `background` và các vùng trung tính.
- `foreground` đảm nhiệm phần lớn chữ và nét cấu trúc.
- `accent` chỉ nên chiếm một tỷ lệ rất nhỏ. Mỗi khối nội dung thường chỉ cần một điểm cam-đỏ nổi bật.
- Không dùng thêm màu thương hiệu mới nếu màu đó không mang ý nghĩa riêng, lặp lại và có thể định nghĩa thành token.

### 3.3. Cách dùng accent

Nên dùng `accent` cho:

- Dấu chấm kết câu trong display headline.
- Trạng thái điều hướng hiện tại.
- Hover của liên kết, tiêu đề project hoặc icon social.
- Một từ serif quan trọng trong tiêu đề sự kiện.
- Nhãn nhỏ có vai trò định hướng.

Không dùng `accent` cho:

- Đoạn văn dài.
- Nền của nhiều section liên tiếp.
- Mọi icon hoặc mọi CTA cùng lúc.
- Trang trí không có quan hệ với phân cấp nội dung.

### 3.4. Đường kẻ và độ trong suốt

- Separator mặc định: `foreground/10` đến `foreground/15`, dày `1px`.
- Đường kẻ trong một panel cần rõ hơn: tối đa khoảng `foreground/25`.
- Ưu tiên hairline và gradient mờ hai đầu thay cho border nặng.
- Bóng đổ chỉ dùng khi mô phỏng vật thể giấy nằm trên mặt phẳng; không dùng shadow cho mọi section.

### 3.5. Biến thể Graduation

Trang lễ tốt nghiệp được phép dùng bảng màu phụ có phạm vi cục bộ:

| Token cục bộ | Giá trị | Vai trò |
| --- | --- | --- |
| `--grad-ink` | `#171713` | Mực in ấm |
| `--grad-orange` | `#FF4B19` | Cam sự kiện |
| Ticket paper | `#E3DFD4` | Giấy vé đậm hơn nền chính |
| Active text | `#F3EFE6` | Chữ sáng trên panel tối |
| Map marker tint | `#FFD1C2` | Điểm bản đồ phụ |
| White | `#FFFFFF` | Viền giấy và canvas bản đồ |

Các màu này chỉ dùng trong namespace `.graduation-*`. Trang vẫn phải giữ font, nền tổng, texture, header và footer của hệ thống chung.

---

## 4. Typography

### 4.1. Font family

- **Inter** (`font-sans`): font mặc định cho UI, body, metadata và display sans.
- **Playfair Display** (`font-serif`): font biểu cảm cho tên riêng, câu nhấn, dòng thứ hai của hero và tiêu đề bài viết.
- Fallback: `sans-serif` và `serif` tương ứng.

Font được tải trong `index.html` từ Google Fonts. Chỉ sử dụng weight thực sự đã tải: Inter `400`, `500`, `800`, `900`; Playfair Display regular và italic theo cấu hình hiện tại. Tránh yêu cầu weight không tồn tại vì trình duyệt có thể tự tổng hợp nét chữ không nhất quán.

### 4.2. Vai trò chữ

| Cấp | Kiểu chữ | Kích thước tham chiếu | Đặc điểm |
| --- | --- | --- | --- |
| Hero display | Inter 900 + Playfair italic | `clamp(2.5rem, 13–14vw, 11rem)`; desktop khoảng `11vw` | Line-height `0.85`, tracking rất chặt, thường 2 dòng |
| Section title | Inter 900 | Mobile `clamp(2rem, 9vw, 3rem)`; desktop đến `4.5rem` | Uppercase, line-height `0.85`, tracking `-0.055em` |
| Editorial heading | Playfair italic | `2xl` → `4xl`; bài viết đến `5.5rem` | Line-height chặt, màu foreground |
| Body lead | Inter 400/500 | `14–16px` | Line-height relaxed, giới hạn chiều rộng |
| Body/supporting | Inter 400/500 | `12–14px` | `text-gray-600`, line-height khoảng `1.6–1.75` |
| Eyebrow/metadata | Inter 500–800 | `8–12px` | Uppercase, letter-spacing `0.16–0.22em` |

### 4.3. Công thức headline chủ đạo

Headline lớn thường gồm:

1. Dòng sans-serif đen, uppercase, cực đậm.
2. Dòng Playfair Display italic, lowercase hoặc sentence case, thụt vào `5vw` trên mobile và `8vw` trên desktop.
3. Dấu chấm cuối màu `accent`.

Ví dụ cấu trúc:

```jsx
<h1 className="leading-[0.85]">
  <span className="font-black uppercase">MORE THAN</span>
  <span className="pl-[5vw] font-serif italic lowercase lg:pl-[8vw]">
    just models<span className="text-accent">.</span>
  </span>
</h1>
```

Không dùng nhiều hơn hai phong cách chữ trong cùng một headline. Tránh thêm outline, gradient text, shadow hoặc hiệu ứng 3D.

### 4.4. Độ dài và khả năng đọc

- Body copy nên giới hạn quanh `max-w-2xl` đến `max-w-3xl`.
- Với nội dung dài, giữ cỡ chữ tối thiểu `14px` trên mobile và line-height tối thiểu `1.6`.
- Heading dài phải cho phép xuống dòng và dùng `break-words`; chỉ dùng `whitespace-nowrap` khi chuỗi đã được kiểm soát và chắc chắn vừa viewport.
- Uppercase + tracking rộng chỉ dành cho nhãn ngắn, không dùng cho câu hoặc đoạn văn.
- Cỡ chữ `8–10px` chỉ dành cho metadata phụ, không dùng cho nội dung thiết yếu.

---

## 5. Bố cục và khoảng cách

### 5.1. Khung trang

`Layout` là khung bắt buộc:

- Chiều cao tối thiểu: `100vh` và `100dvh`.
- Padding ngoài: `16px 20px` ở mobile; `24px` ở `sm`; `32px` ở `md`; `48px` ở `lg`.
- Nền và typography được kế thừa từ toàn cục.
- Nội dung nằm trên texture với `position: relative; z-index: 10`.
- Header ở đầu, footer ở cuối; main được phép `flex-grow`.

Không đặt một lớp nền kín lên toàn bộ route nếu điều đó làm mất texture giấy. Nếu cần panel trắng hoặc tối, panel phải có ranh giới rõ và chỉ chiếm một vùng có chủ đích.

### 5.2. Container

- Container nội dung chính: `w-full lg:w-[75vw] max-w-[1440px]`.
- Bài viết dài: khoảng `lg:w-[65vw] max-w-[1100px]`.
- Khối nội dung đặc biệt như invitation/map: tối đa `1280px`.
- Container hẹp không cần căn giữa nếu bố cục chủ đích bám trái; bài viết nên dùng `mx-auto`.

`75vw` tạo khoảng thở kiểu editorial trên màn hình lớn. Không thay bằng full-width cho từng trang nếu nội dung không thực sự cần một canvas rộng.

### 5.3. Grid

- Grid nội dung desktop dùng 12 cột để căn các vai trò khác nhau.
- Mobile mặc định một cột; chỉ tách cột khi thứ tự đọc vẫn rõ.
- Gap thường dùng: `16–24px` mobile, `24–40px` desktop.
- Hình profile hiện chiếm 4/12 cột; copy chiếm phần còn lại.
- Dòng experience/project ưu tiên tiêu đề bên trái và mô tả bên phải, nhưng phải xếp dọc trên mobile.

### 5.4. Nhịp dọc

- Khoảng cách main với header/footer: `40–64px` tùy viewport.
- Section chính: padding dọc khoảng `32–80px`.
- Khoảng cách giữa section label và nội dung: `32–48px`.
- Khoảng cách heading → metadata/body: `12–32px` tùy cấp.
- Khoảng cách đoạn văn cùng nhóm: khoảng `20px`.

Dùng thang spacing Tailwind hiện có. Chỉ dùng giá trị arbitrary khi nó tạo nên tỷ lệ editorial quan trọng, ví dụ thụt dòng theo `vw` hoặc display type theo `clamp()`.

### 5.5. Khoảng trắng

Khoảng trắng là một thành phần thiết kế, không phải vùng cần lấp đầy. Một section nên có một tiêu điểm mạnh và đủ không gian trước khi chuyển chủ đề. Tránh thêm card, badge hoặc hình minh họa chỉ để làm vùng trống “bớt trống”.

---

## 6. Responsive

Website theo hướng mobile-first và dùng breakpoint Tailwind mặc định:

| Breakpoint | Chiều rộng | Ý nghĩa sử dụng |
| --- | ---: | --- |
| Base | `< 640px` | Một cột, padding gọn, headline co bằng `clamp()` |
| `sm` | `≥ 640px` | Tăng spacing và cỡ metadata; bắt đầu hiển thị rule trang trí |
| `md` | `≥ 768px` | Grid 12 cột, footer thành hàng ngang, body tăng cỡ |
| `lg` | `≥ 1024px` | Container 75vw, headline theo 11vw, spacing rộng |

Ngoài ra, cụm Graduation có mốc điều chỉnh cục bộ tại `800px`, `640px` và `520px`.

Quy tắc responsive:

- Không thiết kế desktop rồi chỉ thu nhỏ bằng scale.
- Thứ tự DOM phải hợp lý khi giao diện về một cột.
- Headline phải được thử ở chiều rộng tối thiểu `280px`, là `min-width` hiện tại của body.
- Không tạo cuộn ngang toàn trang. Carousel/marquee có thể overflow trong container riêng.
- Thành phần tương tác phải dùng được bằng touch; không để thông tin quan trọng chỉ xuất hiện khi hover.
- Ảnh dùng `width: 100%; height: auto` trừ trường hợp art-directed có khung cắt rõ ràng.

---

## 7. Component và pattern

### 7.1. Header

- Căn giữa, uppercase, cỡ `9–12px`, tracking `0.16–0.2em`.
- Khoảng cách item `40–48px`.
- Item không active dùng xám; active dùng `accent`.
- Hover dùng underline mảnh chạy từ trái sang phải và có thể chuyển sang accent.
- Header phải luôn có nhãn route ngắn, dễ quét. Không thêm logo lớn vào cùng hàng nếu làm mất sự tĩnh lặng.

### 7.2. Footer

- Ngăn với nội dung bằng border `foreground/10`.
- Desktop: bio bên trái, location/socials bên phải. Mobile: xếp dọc.
- Bio dùng body nhỏ; các vai trò nghề nghiệp có thể dùng serif italic.
- Icon social là outline đơn sắc, vùng bấm ít nhất `32 × 32px`; hover đổi màu và nâng tối đa `4px`.
- Mọi icon-only link phải có `aria-label`.

### 7.3. Section label

Pattern chuẩn gồm:

- Dấu chấm accent đứng trước tên section.
- Tên Inter 900 uppercase với tracking âm.
- Hairline kéo dài sang phải từ `sm` trở lên.
- Không đánh số section ở trang portfolio chính; biến thể sự kiện có thể dùng `01 / Label`.

### 7.4. Danh sách editorial

Dùng cho experience, project, education hoặc article index:

- Mỗi item là một hàng phẳng, không phải card bo góc.
- Các item được chia bằng hairline hoặc gradient line mờ.
- Tiêu đề ưu tiên serif italic; metadata uppercase nhỏ; mô tả sans-serif xám.
- Hover chỉ tác động vào phần có khả năng click. Nếu item không phải link, không tạo hover gây hiểu nhầm.

### 7.5. Liên kết

- Liên kết trong điều hướng hoặc CTA chữ dùng `.hover-underline-animation`.
- Transition chuẩn khoảng `250–300ms`, easing tự nhiên.
- Focus phải nhìn thấy rõ; không xóa outline nếu chưa có focus style thay thế.
- Link nội bộ dùng `Link`/`NavLink`; link ngoài dùng `<a>` và cần cân nhắc `rel="noreferrer"` khi mở tab mới.
- Nhãn liên kết phải diễn đạt đích đến; tránh chỉ ghi “Click here”.

### 7.6. Highlight marker

`.highlight` tạo nét vàng chạy sau chữ:

- Chỉ dùng cho một mốc hoặc cụm rất ngắn.
- Nét nằm sau chữ, cao khoảng `0.55em`.
- Không đặt nhiều highlight cạnh nhau trong cùng viewport.

### 7.7. Technology marquee

- Là dải ngang phẳng có border trên, không nằm trong card.
- Icon đơn sắc đen; tên công nghệ uppercase, cỡ nhỏ và đậm.
- Track lặp vô hạn trong `72s`, dừng khi hover.
- Hai mép dùng mask fade; mobile thu vùng fade còn `1.5rem`.
- Bản sao thứ hai phải `aria-hidden`; section có `aria-label` và list semantic.
- Khi `prefers-reduced-motion`, dừng animation, bỏ bản sao và cho phép cuộn ngang.

### 7.8. Coming soon và 404

- Dùng cùng công thức display headline của hero để giữ nhận diện ngay cả ở trang ít nội dung.
- Chỉ có một hành động trở về hoặc một câu trạng thái ngắn.
- Không thêm minh họa mặc định; typography là visual chính.

### 7.9. Blog/article

- Bài viết dùng container hẹp hơn các landing section.
- Thứ tự: back link → metadata → tiêu đề serif → excerpt → nội dung.
- Tiêu đề kết thúc bằng dấu chấm accent.
- Khi có nội dung thật, chiều dài dòng nên quanh 60–75 ký tự; heading và media có thể rộng hơn body.
- Các blockquote, code block, danh sách và heading cấp dưới phải kế thừa bảng màu giấy/mực; không nhập theme code nhiều màu thiếu kiểm soát.

### 7.10. Graduation invitation

Đây là biến thể “vật thể in” của hệ thống:

- Heading vẫn theo cấu trúc sans uppercase + serif italic accent.
- Ticket gồm lớp giấy trắng hơi xoay và lớp giấy kem xoay ngược để tạo cảm giác thủ công.
- Shadow rộng, nhẹ: mô phỏng giấy nổi chứ không mô phỏng modal.
- Bên trong dùng hai cột copy/portrait trên desktop và một cột trên mobile.
- Metadata rất nhỏ, uppercase, tracking rộng; thông tin ngày/giờ/địa điểm dùng serif italic.
- Từ `520px` trở xuống phải bỏ rotation để tránh cắt nội dung.

### 7.11. Campus map

- Canvas bản đồ màu trắng đi cùng panel thông tin màu giấy.
- Trạng thái mặc định sáng; khi một điểm active, panel chuyển sang `--grad-ink` với chữ sáng và thanh accent trên cùng.
- Hỗ trợ cả pointer và keyboard focus. Hướng dẫn phải ghi rõ `Hover / Tab`.
- Panel dùng `aria-live="polite"` để thông báo thay đổi mà không ngắt người dùng.
- Nội dung quan trọng không được phụ thuộc hoàn toàn vào màu marker; cần title/type bằng chữ.

---

## 8. Hình ảnh, icon và texture

### 8.1. Hình ảnh

- Ưu tiên SVG/vector sạch, nền trong suốt và hình minh họa có cùng chất in/editorial.
- Portrait không thêm border-radius theo mặc định. Hệ thống hiện tại dùng hình cắt tự do, không dùng avatar tròn.
- Ảnh phải có `alt` mô tả mục đích. Ảnh thuần trang trí dùng `alt=""` và `aria-hidden` khi phù hợp.
- Không bóp méo tỷ lệ. Dùng `object-fit` khi phải đặt ảnh vào khung.
- Tối ưu dung lượng trước khi đưa vào `assets` hoặc `public`.

### 8.2. Icon

- Icon UI ưu tiên stroke `currentColor`, nét khoảng `2`, kích thước nhìn thấy khoảng `18–32px`.
- Logo công nghệ được chuẩn hóa thành màu đen để không phá bảng màu.
- Không trộn nhiều bộ icon có độ dày nét khác nhau trong cùng một nhóm.

### 8.3. Texture giấy

`NoiseOverlay` gồm:

- Fractal noise fixed, `mix-blend-multiply`, opacity `0.15`.
- Vignette radial fixed, `mix-blend-darken`, opacity `0.6`.
- Cả hai lớp đều `pointer-events-none` và nằm trên visual bằng `z-index`, trong khi nội dung tương tác vẫn hoạt động.

Texture phải tinh tế. Không tăng opacity đến mức giảm độ đọc hoặc làm ảnh bị bẩn rõ rệt. Khi thêm modal/popover, kiểm tra z-index để overlay trang trí không che nội dung hay focus ring.

---

## 9. Chuyển động và tương tác

### 9.1. Nguyên tắc

Chuyển động dùng để bộc lộ cấu trúc hoặc phản hồi tương tác, không dùng để phô diễn. Một viewport không nên có nhiều hiệu ứng cạnh tranh.

### 9.2. Reveal khi cuộn

Các phần tử có `data-reveal`:

- Bắt đầu ở opacity `0`, lệch xuống `32px`, blur `3px`.
- Chuyển về trạng thái bình thường trong `700ms`.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Kích hoạt một lần khi khoảng 12% phần tử đi vào viewport; sau đó observer ngừng theo dõi.
- Có thể dùng `--reveal-delay` cho stagger ngắn, thường `0–150ms`; không tạo chuỗi chờ dài.

### 9.3. Intro và micro-interaction

- Fade-in ban đầu: `1.5s ease-out`, dịch dọc `10px`.
- Hover underline: `250ms ease-out`.
- Màu, transform icon và panel state: khoảng `220–300ms`.
- Hover transform nên nhỏ: icon nâng `4px`, scale quanh `1.1`, rotate khoảng `6deg` tối đa.
- Không làm layout shift khi hover.

### 9.4. Reduced motion

Mọi chuyển động mới phải có nhánh `@media (prefers-reduced-motion: reduce)`:

- Bỏ animation và transition không thiết yếu.
- Hiện nội dung ngay, không để opacity `0`.
- Thay marquee tự chạy bằng vùng cuộn thủ công.
- Không dùng parallax hoặc chuyển động liên tục nếu không có cách tắt.

---

## 10. Accessibility

Mức tối thiểu hướng tới là WCAG 2.2 AA cho nội dung và tương tác chính.

- Giữ thứ tự heading hợp lý: mỗi trang có một `h1`; section chính dùng `h2`; item con dùng `h3`.
- Dùng landmark `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` đúng vai trò.
- Mọi điều khiển phải dùng được bằng bàn phím và có focus visible.
- Không dùng màu sắc làm dấu hiệu duy nhất cho active/error/success.
- Link/icon phải có accessible name; ảnh có alt phù hợp.
- Vùng chạm ưu tiên tối thiểu `44 × 44px`; trường hợp icon hiện tại `32 × 32px` cần khoảng cách đủ lớn và nên tăng hit area khi chỉnh sửa.
- Text body phải đủ tương phản trên `background`; xám rất nhạt chỉ dùng cho metadata không thiết yếu.
- Không khóa zoom, không vô hiệu hóa text scaling.
- Nội dung thay đổi động chỉ dùng `aria-live` khi người dùng cần biết thay đổi.
- Không để noise, vignette hoặc pseudo-element nhận pointer event.
- Nội dung song ngữ phải có `lang` phù hợp ở cấp tài liệu hoặc phần tử khi cần. `index.html` hiện khai báo `lang="en"`; nếu một trang chủ yếu là tiếng Việt, đặt `lang="vi"` cho vùng đó hoặc điều chỉnh ở cấp trang.

---

## 11. Nội dung và giọng điệu

- Ngắn, trực tiếp, tự tin nhưng không khoa trương.
- Ưu tiên động từ cụ thể và kết quả thực tế; tránh buzzword không có ngữ cảnh.
- Headline có thể giàu tính biên tập; body phải rõ và dễ hiểu.
- UI label và metadata hiện dùng tiếng Anh, uppercase. Giữ nhất quán trong cùng một flow.
- Nội dung tiếng Việt phải được lưu UTF-8 và kiểm tra trực tiếp trong trình duyệt để tránh lỗi mojibake.
- Quy ước dấu câu trong display: một dấu chấm cam-đỏ là đủ; không lặp nhiều dấu trang trí.
- Ngày tháng cần dùng một định dạng nhất quán theo ngôn ngữ trang.

---

## 12. Quy ước khi tạo trang mới

1. Bọc nội dung bằng `<Layout>`.
2. Dùng một `main` có `flex-grow`, `position: relative`, `z-index: 10` và spacing phù hợp.
3. Chọn container chuẩn: landing `75vw / 1440px`, article `65vw / 1100px` hoặc special `1280px`.
4. Mỗi trang chỉ có một hero/tiêu điểm thị giác chính.
5. Tái sử dụng pattern headline, section label, list row, separator và link hiện có.
6. Chỉ thêm token mới nếu token có vai trò ngữ nghĩa rõ và khả năng tái sử dụng.
7. Thêm `data-reveal` ở cấp khối, không gắn cho từng dòng nhỏ trong cùng một đoạn.
8. Kiểm tra mobile trước, sau đó `sm`, `md`, `lg` và màn hình rất rộng.
9. Kiểm tra bàn phím, focus, reduced motion và zoom 200%.
10. Build production trước khi hoàn tất.

Mẫu tối thiểu:

```jsx
import Layout from '../components/Layout.jsx'

export default function NewPage() {
  return (
    <Layout>
      <main className="relative z-10 my-10 flex w-full flex-grow flex-col items-center sm:my-12 md:my-16">
        <section data-reveal className="w-full max-w-[1440px] lg:w-[75vw]">
          <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-gray-400 md:text-xs">
            Section label
          </p>
          <h1 className="leading-[0.85] text-foreground">
            {/* Dùng công thức display typography của hệ thống */}
          </h1>
        </section>
      </main>
    </Layout>
  )
}
```

---

## 13. Những điều nên và không nên làm

### Nên

- Dùng typography và khoảng trắng làm điểm nhấn chính.
- Tạo tương phản bằng scale, weight, serif/sans và alignment.
- Giữ accent có chủ đích.
- Dùng đường kẻ mảnh để tổ chức nội dung.
- Viết component semantic, responsive và dễ dùng bằng bàn phím.
- Chỉnh hệ thống chung khi một nhu cầu xuất hiện lặp lại.

### Không nên

- Tự thêm màu ngẫu nhiên hoặc đổi nền mỗi route.
- Dùng gradient sặc sỡ, glassmorphism, glow/neon hoặc shadow nặng.
- Bo tròn mọi khối thành card.
- Dùng serif cho body dài hoặc uppercase cho đoạn văn.
- Dùng animation liên tục ngoài marquee có kiểm soát.
- Thu nhỏ font thiết yếu xuống dưới mức dễ đọc để giữ bố cục một hàng.
- Copy nguyên utility dài sang nhiều trang khi có thể trích thành component.
- Dùng hover như cách duy nhất để truy cập nội dung.

---

## 14. Checklist duyệt thiết kế và giao diện

### Nhận diện

- [ ] Nền, foreground và accent dùng đúng token.
- [ ] Inter/Playfair được dùng đúng vai trò.
- [ ] Trang có một tiêu điểm rõ; accent không bị lạm dụng.
- [ ] Texture giấy vẫn hiện vừa đủ và không cản đọc.

### Bố cục

- [ ] Trang dùng `Layout` và container chuẩn.
- [ ] Khoảng cách section tạo nhịp thoáng, nhất quán.
- [ ] Không có cuộn ngang ở viewport từ `280px` trở lên.
- [ ] Thứ tự đọc mobile hợp lý.

### Tương tác

- [ ] Link, button và vùng tương tác có trạng thái hover/focus rõ.
- [ ] Tương tác không gây layout shift.
- [ ] Thông tin không phụ thuộc hoàn toàn vào hover hoặc màu sắc.
- [ ] Reduced motion hoạt động đúng.

### Nội dung và accessibility

- [ ] Chỉ có một `h1`; heading không bỏ cấp vô lý.
- [ ] Alt text, label và landmark đầy đủ.
- [ ] Body copy đủ cỡ, tương phản và chiều dài dòng hợp lý.
- [ ] Tiếng Việt hiển thị đúng UTF-8.
- [ ] Trang dùng được bằng bàn phím và ở zoom 200%.

### Kỹ thuật

- [ ] Không có mã màu/font lặp lại đáng lẽ là token.
- [ ] Không phá vỡ component dùng chung.
- [ ] Asset đã được tối ưu và không méo tỷ lệ.
- [ ] `npm run build` hoàn tất không lỗi.

---

## 15. Nguyên tắc phát triển hệ thống

Hệ thống có thể mở rộng, nhưng mọi thay đổi nên trả lời được ba câu hỏi:

1. Thay đổi này có củng cố tính cách editorial, giấy in và human + machine không?
2. Nó có giải quyết một nhu cầu lặp lại thay vì một ngoại lệ cục bộ không?
3. Nó có giữ được khả năng đọc, responsive và accessibility không?

Nếu cả ba câu trả lời đều là “có”, hãy thêm token/pattern vào nguồn dùng chung và cập nhật `DESIGN.md`. Nếu chỉ là một nhu cầu kể chuyện có chủ đích, hãy cô lập biến thể trong namespace riêng như `.graduation-*` và ghi rõ phạm vi sử dụng.
