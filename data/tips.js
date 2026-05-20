const DATA_TIPS = [
  {
    "type": "tip",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Lerp / Linear Interpolate",
    "text": "Muốn trộn hai màu hoặc hai giá trị với nhau? Dùng <b>Lerp</b> thay vì tự nhân rồi cộng tay. Alpha = 0 ra giá trị A, Alpha = 1 ra giá trị B, ở giữa là blend mượt. <i>Tip: dùng một texture grayscale làm Alpha để blend theo hình dạng bất kỳ.</i>"
  },
  {
    "type": "tip",
    "eng": [
      "amplify",
      "unity"
    ],
    "node": "Texture Sample",
    "text": "Một texture RGBA chứa được 4 kênh độc lập (R, G, B, A). Tận dụng bằng cách nhét 4 mask khác nhau vào 4 kênh đó — ví dụ: R = roughness mask, G = wetness, B = dirt. Giảm số lần sample texture xuống còn 1 thay vì 4. <i>Kỹ thuật này gọi là \"texture packing\".</i>"
  },
  {
    "type": "tip",
    "eng": [
      "unreal"
    ],
    "node": "Texture Sample",
    "text": "Thay vì cắm texture thẳng vào node, hãy dùng <b>Texture Object Parameter</b> — nó tạo ra một \"slot\" để thay texture từ bên ngoài mà không cần mở lại graph. Rất tiện khi làm <i>Material Instance</i> (bản sao của material có thể chỉnh riêng từng thứ mà không tạo shader mới)."
  },
  {
    "type": "tip",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Normal Map",
    "text": "Muốn chồng hai normal map lên nhau (ví dụ: detail normal + base normal)? Dùng node <b>Blend Normals</b> thay vì cộng hoặc lerp thẳng. Cộng trực tiếp sẽ làm lệch hướng pháp tuyến, kết quả ánh sáng bị sai. <i>Pháp tuyến (normal) = hướng \"mặt ngoài\" của bề mặt, dùng để tính ánh sáng.</i>"
  },
  {
    "type": "tip",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Fresnel",
    "text": "<b>Fresnel</b> mô phỏng hiện tượng ngoài đời: nhìn thẳng vào bề mặt thì tối/trong, nhìn xiên thì phản chiếu sáng hơn (như kính, nước, sơn bóng). Kết hợp với <b>Lerp</b> để blend giữa màu chính và màu viền — đừng cắm thẳng vào Emission sẽ cháy sáng quá mức."
  },
  {
    "type": "tip",
    "eng": [
      "amplify",
      "unreal"
    ],
    "node": "Power",
    "text": "Node <b>Power</b> rất hữu ích để \"uốn\" hình dạng của một mask grayscale. Số mũ > 1 làm vùng xám tối lại, thu hẹp vùng trắng. Số mũ < 1 mở rộng vùng sáng ra. <i>Ứng dụng phổ biến: điều chỉnh độ sắc nét của Fresnel hoặc gradient.</i>"
  },
  {
    "type": "tip",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Panner / Tiling & Offset",
    "text": "Khi làm texture chuyển động (nước, lửa, mây), kết nối theo thứ tự: <b>Time → Multiply(Speed) → Panner</b>. Nếu cắm Time thẳng vào tốc độ sẽ cố định không chỉnh được. Tách Speed thành một Parameter để điều chỉnh dễ dàng sau này."
  },
  {
    "type": "tip",
    "eng": [
      "unity",
      "unreal"
    ],
    "node": "Scene Depth / Pixel Depth",
    "text": "<b>Scene Depth</b> cho biết điểm đó cách camera bao xa. Kết hợp với vị trí pixel hiện tại, tính được khoảng cách giữa mặt nước và đáy — từ đó tạo hiệu ứng bọt trắng ở chỗ sóng giao với bờ hoặc đá. <i>Lưu ý: chỉ dùng được với material Transparent hoặc Unlit, không dùng được với Opaque.</i>"
  },
  {
    "type": "tip",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Step / If",
    "text": "<b>Step</b> cho output rõ ràng đen hoặc trắng, không có vùng xám — như dao cắt thẳng. <b>Smoothstep</b> thì có vùng chuyển tiếp mờ dần ở giữa. Dùng Step khi cần viền cứng (phân vùng tuyết trên núi), Smoothstep khi muốn chuyển tiếp mượt (gradient mây)."
  },
  {
    "type": "tip",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "World Position",
    "text": "<b>World Position</b> trả về tọa độ thực của pixel trong scene — thường là số rất lớn (hàng trăm, hàng nghìn). Khi dùng để tile texture theo hướng world, nhớ chia nhỏ (ví dụ: ÷ 100) để đưa về range hợp lý, tránh pattern bị siêu nhỏ không nhìn thấy."
  },
  {
    "type": "tip",
    "eng": [
      "amplify",
      "unity"
    ],
    "node": "Vertex Color",
    "text": "<b>Vertex Color</b> là màu tô trực tiếp lên từng đỉnh của mesh trong Blender hoặc Maya. Trong shader, dùng nó như một mask miễn phí — không cần thêm texture. Ứng dụng thực tế: mask vùng rêu ở gốc cây, vùng bùn dưới chân nhân vật, vùng mòn trên armor."
  },
  {
    "type": "tip",
    "eng": [
      "unreal"
    ],
    "node": "Material Function",
    "text": "<b>Material Function</b> giống như một hàm trong lập trình — đóng gói một nhóm node thành một khối tái sử dụng. Sửa một lần là cập nhật toàn bộ material đang dùng nó. Luôn thêm ghi chú vào các chân input/output để bản thân (và đồng đội) hiểu ngay sau vài tháng không động vào."
  },
  {
    "type": "tip",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Smoothstep",
    "text": "<b>Smoothstep(edge0, edge1, x)</b>: khi x ≤ edge0 → output = 0, khi x ≥ edge1 → output = 1, ở giữa là đường cong hình chữ S (chuyển tiếp mượt ở hai đầu, không phải đường thẳng như Lerp). Đổi edge0 ↔ edge1 để đảo chiều."
  },
  {
    "type": "tip",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Remap",
    "text": "Thay vì tự tính công thức đổi range thủ công bằng Multiply + Add, hãy dùng node <b>Remap</b>. Ví dụ: texture roughness từ [0→1] nhưng muốn giới hạn lại trong khoảng [0.2→0.7] cho vật liệu bán bóng — Remap xử lý ngay, không cần nhớ công thức."
  },
  {
    "type": "tip",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Dot Product",
    "text": "<b>Dot Product</b> của hai vector = 1 nếu cùng hướng, 0 nếu vuông góc, -1 nếu ngược chiều. Ứng dụng phổ biến nhất: <code>Dot(Surface Normal, Light Direction)</code> → ra số thể hiện mặt phẳng đang quay về phía đèn nhiều hay ít, đây là cơ sở tính ánh sáng Lambertian. Thêm <b>Saturate</b> sau để loại bỏ giá trị âm."
  },
  {
    "type": "mistake",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Normal Map",
    "text": "Import texture rồi cắm vào slot Normal Map nhưng <b>quên đặt Texture Type = \"Normal Map\"</b> trong Import Settings. Engine xử lý nó như ảnh màu bình thường → bề mặt trông phẳng dẹt dù file nhìn đúng. Đây là lỗi phổ biến nhất với beginner — luôn kiểm tra Texture Type ngay sau khi import."
  },
  {
    "type": "mistake",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Lerp",
    "text": "Truyền giá trị <b>ngoài khoảng [0, 1]</b> vào chân Alpha của Lerp — ví dụ: noise chạy từ -1 đến 1, hoặc texture chưa normalize. Kết quả sẽ vượt ngoài A và B, gây màu tối/sáng bất thường. Sửa: thêm <b>Saturate</b> (= clamp 0→1) vào Alpha trước khi nối vào Lerp."
  },
  {
    "type": "mistake",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Texture Sample",
    "text": "Kéo cùng một texture vào graph <b>nhiều lần</b> cho tiện mỗi chỗ một node. Mỗi Texture Sample node là một lần đọc từ bộ nhớ GPU riêng biệt — rất tốn kém. Đúng cách: sample một lần duy nhất, rồi kéo dây từ output RGBA ra dùng ở nhiều nhánh khác nhau."
  },
  {
    "type": "mistake",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Power",
    "text": "Truyền số <b>âm</b> vào Base của Power — ví dụ: noise từ -1→1 chưa remap. Kết quả toán học không xác định → shader trả về <b>NaN</b> (Not a Number), hiển thị thành đen hoặc pixel nhiễu lạ trên màn hình. Fix: dùng <b>Abs</b> (lấy giá trị tuyệt đối) hoặc <b>Saturate</b> để đảm bảo Base ≥ 0."
  },
  {
    "type": "mistake",
    "eng": [
      "unity",
      "unreal"
    ],
    "node": "Scene Depth",
    "text": "Dùng Scene Depth trong material Opaque — sẽ không hoạt động. Lý do: object Opaque tự ghi depth buffer của chính nó, không đọc được depth phía sau. <b>Phải chuyển Surface Type sang Transparent hoặc Unlit</b> thì Scene Depth mới trả về giá trị đúng."
  },
  {
    "type": "mistake",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "World Normal / Object Normal",
    "text": "Lẫn <b>World Normal</b> và <b>Object Normal</b> khi làm hiệu ứng theo hướng nhất định. Object Normal thay đổi khi object bị xoay — dùng cho effect gắn với mesh. World Normal luôn cố định trong không gian thế giới — dùng cho tuyết (rơi thẳng xuống), nước (mặt phẳng ngang), hay triplanar mapping."
  },
  {
    "type": "mistake",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Divide",
    "text": "Chia cho một giá trị <b>có thể bằng 0</b> — ví dụ: normalize vector thủ công, chia theo độ dài, tính UV từ kích thước. Khi mẫu số = 0, kết quả là Infinity → pixel đen hoặc trắng bất thường. Fix: clamp mẫu số về tối thiểu 0.0001, hoặc dùng node <b>Safe Divide</b> nếu engine hỗ trợ."
  },
  {
    "type": "mistake",
    "eng": [
      "unreal"
    ],
    "node": "Static Switch",
    "text": "Dùng node <b>If</b> để bật/tắt tính năng trong Material Instance (ví dụ: \"có dùng detail texture không?\"). If vẫn compile và chạy cả hai nhánh, lãng phí instruction. Đúng hơn: dùng <b>Static Switch Parameter</b> — nhánh không dùng bị loại bỏ hoàn toàn khi compile, shader nhẹ hơn hẳn."
  },
  {
    "type": "mistake",
    "eng": [
      "amplify",
      "unity"
    ],
    "node": "Time",
    "text": "Cắm thẳng node <b>Time</b> vào UV offset mà không nhân thêm Speed — tốc độ animation phụ thuộc scale project, chạy khác nhau tùy thiết lập. Luôn nhân Time với một <b>Float Parameter</b> đặt tên \"Speed\" để vừa kiểm soát được vừa chỉnh từ bên ngoài material."
  },
  {
    "type": "mistake",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Fresnel",
    "text": "Tính Fresnel ở <b>Vertex shader</b> thay vì Pixel shader — mỗi vertex mới tính một lần, kết quả bị nội suy thô giữa các đỉnh → viền Fresnel bị răng cưa, đặc biệt rõ trên mesh ít polygon. <i>Fresnel bắt buộc phải tính per-pixel (fragment shader) mới cho kết quả mượt và chính xác.</i>"
  },
  {
    "type": "mistake",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Vertex Offset",
    "text": "Đẩy vertex ra xa nhiều (sóng biển lớn, gió mạnh) trên mesh <b>ít polygon</b> — kết quả bị gãy góc thấy rõ vì không đủ điểm để tạo đường cong mượt. Muốn offset lớn thì cần mesh đủ dày (subdivide thêm trong Blender/Maya), hoặc bật <b>Tessellation</b> để GPU tự chia nhỏ polygon lúc render."
  },
  {
    "type": "mistake",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Tiling & Offset / Panner",
    "text": "Tăng Tiling quá cao (> 8–10×) để có chi tiết nhỏ, nhưng nhìn từ xa texture bị <b>mờ nhòa hoặc rung shimmer</b>. Nguyên nhân: mipmap ở mức xa không đủ resolution để hiển thị pattern dày đặc. Fix: bật <b>Anisotropic Filtering</b> trên texture. <i>Mipmap = bản thu nhỏ tự động của texture, dùng khi nhìn từ xa để tránh nhấp nháy.</i>"
  },
  {
    "type": "tip",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Noise / Simple Noise",
    "text": "<b>Noise</b> sinh ra pattern ngẫu nhiên nhưng mượt — không phải nhiễu trắng lộn xộn. Dùng nó để tạo hiệu ứng tự nhiên: mây, khói, vân đá, bề mặt không đều. Kết hợp nhiều lớp Noise với Scale khác nhau (gọi là <i>FBM - Fractal Brownian Motion</i>) để có kết quả chi tiết hơn, giống texture ngoài đời thực hơn."
  },
  {
    "type": "tip",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Multiply / Add",
    "text": "Hai node hay dùng nhất nhưng dễ nhầm: <b>Multiply</b> điều chỉnh độ sáng/tối của một giá trị (nhân 0.5 = tối hơn nửa, nhân 2 = sáng gấp đôi). <b>Add</b> dịch chuyển giá trị lên/xuống (cộng 0.2 = sáng thêm một lượng cố định). <i>Kết hợp cả hai: Multiply trước để scale, Add sau để offset — đây là cách thủ công để Remap.</i>"
  },
  {
    "type": "tip",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "UV / Texture Coordinates",
    "text": "<b>UV</b> là tọa độ 2D xác định chỗ nào trên texture sẽ hiển thị lên chỗ nào trên mesh — U là chiều ngang, V là chiều dọc, cả hai từ 0 đến 1. Bạn có thể thao túng UV trước khi cắm vào Texture Sample để xoay, tile, offset, hay bóp méo texture theo ý muốn mà không cần sửa file texture gốc."
  },
  {
    "type": "tip",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Saturate / Clamp",
    "text": "<b>Saturate</b> là phiên bản nhanh của Clamp(0, 1) — ép mọi giá trị về khoảng [0, 1]. Dùng thường xuyên sau các phép tính có thể tràn range như cộng noise, Fresnel, hay Dot Product. <i>GPU có instruction riêng cho Saturate nên thường nhanh hơn Clamp tổng quát một chút.</i>"
  },
  {
    "type": "tip",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Emission / Emissive Color",
    "text": "Slot <b>Emission</b> làm cho bề mặt tự phát sáng, không phụ thuộc vào đèn trong scene. Muốn hiệu ứng glowing edge hay hologram? Nhân màu Emission với một số lớn hơn 1 (ví dụ: 3–5) để đẩy vào vùng HDR — lúc đó Bloom post-processing mới bắt lên và tạo ánh hào quang xung quanh. <i>HDR = High Dynamic Range, giá trị sáng vượt quá 1.</i>"
  },
  {
    "type": "tip",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Mask / Channel Split",
    "text": "Mỗi texture có 4 kênh màu (R, G, B, A). Dùng node <b>Split</b> hoặc <b>Mask</b> để tách riêng từng kênh và dùng độc lập. Ví dụ: kênh Alpha của một texture màu thường chứa opacity mask hoặc roughness — không cần tạo thêm texture mới, khai thác kênh sẵn có trước."
  },
  {
    "type": "tip",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "One Minus / 1-x",
    "text": "Node <b>One Minus</b> (hay 1-x) đảo ngược một giá trị: trắng thành đen, đen thành trắng, 0.3 thành 0.7. Dùng khi bạn có mask nhưng cần vùng ngược lại — ví dụ: mask vùng da sạch, nhưng muốn vùng bẩn thì OneMinus là xong, không cần tạo texture mới."
  },
  {
    "type": "mistake",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Roughness / Metallic",
    "text": "Cắm một texture màu (RGB) thẳng vào slot <b>Roughness</b> hoặc <b>Metallic</b> — hai slot này chỉ đọc giá trị grayscale (một kênh, từ 0 đến 1). Cắm RGB vào không gây lỗi nhưng engine chỉ đọc kênh R, bỏ G và B — kết quả có thể sai nếu roughness không nằm ở kênh R. Dùng node <b>Split</b> để tách đúng kênh trước."
  },
  {
    "type": "mistake",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Emission / Emissive Color",
    "text": "Nhân màu Emission với một giá trị rất lớn (> 10–20) mà không kiểm tra trong scene thực tế — trông đẹp trong Material Preview nhưng khi vào scene có Bloom thì object phát sáng loé mắt, ảnh hưởng cả vùng xung quanh. Luôn test Emission trực tiếp trong scene có đầy đủ post-processing trước khi chốt giá trị."
  },
  {
    "type": "mistake",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "UV / Texture Coordinates",
    "text": "Dùng UV Set 0 (mặc định) cho tất cả mọi thứ, kể cả lightmap — trong nhiều engine, lightmap cần <b>UV Set 1</b> riêng không trùng lắp (non-overlapping). Nếu dùng chung UV Set 0, lightmap sẽ bị bake sai, vùng bóng đổ nhòe hoặc lệch. Kiểm tra mesh có UV Set 1 chưa trước khi bake lighting."
  },
  {
    "type": "mistake",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Noise / Simple Noise",
    "text": "Dùng node Noise với <b>Scale quá cao</b> (> 50–100) mà không để ý — pattern trở nên cực nhỏ, nhìn như nhiễu hạt, mất hết cảm giác tự nhiên. Ngược lại, Scale quá thấp thì pattern quá to, trông như blob. Bắt đầu từ Scale = 5–15 rồi tăng dần, quan sát trong viewport thực tế chứ không phải Material Preview."
  },
  {
    "type": "mistake",
    "eng": [
      "amplify",
      "unity",
      "unreal"
    ],
    "node": "Color (sRGB vs Linear)",
    "text": "Cắm một texture màu sắc (albedo, color) vào shader nhưng <b>không để ý sRGB setting</b>. Texture màu thường được lưu ở không gian màu sRGB — nếu engine xử lý nó như Linear, màu sẽ bị nhạt và sai hue. Ngược lại, texture dữ liệu (roughness, normal, mask) phải để Linear, không phải sRGB. <i>Quy tắc nhớ: texture \"trông đẹp mắt\" → sRGB, texture \"chứa data\" → Linear.</i>"
  }
];