window.TERMS = [
  {
    "term": "UV Coordinates",
    "tag": "Texture",
    "def": "Hệ tọa độ 2D (U theo chiều ngang, V theo chiều dọc) dùng để \"trải phẳng\" bề mặt 3D ra thành hình chữ nhật, từ đó \"dán\" texture lên đúng vị trí. Giống như mở hộp giấy ra để dán nhãn."
  },
  {
    "term": "Lerp (Linear Interpolation)",
    "tag": "Math",
    "def": "Trộn/chuyển tiếp đều đặn giữa hai giá trị A và B theo một tỉ lệ T (từ 0 đến 1). T=0 cho ra A, T=1 cho ra B, T=0.5 cho ra chính giữa. Dùng rất nhiều để blend màu, vị trí, độ mờ."
  },
  {
    "term": "Normal Map",
    "tag": "Rendering",
    "def": "Texture đặc biệt lưu thông tin \"hướng bề mặt\" (pháp tuyến) dưới dạng màu sắc RGB. Giả lập chi tiết gồ ghề mà không cần thêm đa giác 3D thực sự. Màu xanh tím đặc trưng là dấu hiệu nhận biết."
  },
  {
    "term": "Fresnel Effect",
    "tag": "Optics",
    "def": "Hiện tượng vật lý: bề mặt trông phản chiếu nhiều hơn khi nhìn từ góc nghiêng (grazing angle) so với nhìn thẳng. Giải thích tại sao mặt hồ trông như gương ở phía xa nhưng trong suốt ngay dưới chân."
  },
  {
    "term": "Vertex",
    "tag": "Geometry",
    "def": "Điểm góc (đỉnh) của một mesh 3D. Mỗi vertex lưu vị trí XYZ, thường kèm theo normal, UV, và màu sắc. Nhiều vertex nối lại tạo thành tam giác → tạo thành bề mặt 3D."
  },
  {
    "term": "Ambient Occlusion (AO)",
    "tag": "Lighting",
    "def": "Kỹ thuật tính toán xem một điểm trên bề mặt bị \"che khuất\" bao nhiêu so với môi trường xung quanh. Góc kẹp, khe hở, vùng lõm sẽ tối hơn vùng trống. Cho cảm giác depth và tiếp xúc thực tế."
  },
  {
    "term": "Roughness",
    "tag": "PBR",
    "def": "Thông số kiểm soát độ nhám của bề mặt trong mô hình PBR (vật lý thực tế). Roughness = 0 → gương hoàn hảo, Roughness = 1 → hoàn toàn mờ đục như đất sét. Ảnh hưởng trực tiếp đến hình dạng vệt sáng (specular highlight)."
  },
  {
    "term": "Procedural Texture",
    "tag": "Texture",
    "def": "Texture được tạo ra bằng công thức toán học thay vì vẽ tay hay chụp ảnh. Ưu điểm: không bị vỡ ở độ phân giải nào, không lặp hoa văn rõ ràng, tham số có thể điều chỉnh linh hoạt. Ví dụ: vân gỗ, đá hoa cương tạo bằng Noise node."
  },
  {
    "term": "Alpha Channel",
    "tag": "Texture",
    "def": "Kênh thứ 4 (A) trong màu RGBA, biểu thị độ trong suốt. A=0 là hoàn toàn trong suốt, A=1 là đục hoàn toàn. Hay dùng để tạo mask, cutout effect, hoặc fade in/out."
  },
  {
    "term": "Metallic",
    "tag": "PBR",
    "def": "Thông số nhị phân (0 hoặc 1) xác định vật liệu là kim loại hay phi kim. Kim loại (Metallic=1) phản chiếu màu sắc của môi trường và không có diffuse color riêng. Phi kim (Metallic=0) có màu sắc bề mặt và phản chiếu trắng."
  },
  {
    "term": "Blend Mode",
    "tag": "Rendering",
    "def": "Cách một object/layer hòa trộn màu sắc của nó lên nền bên dưới. Opaque = che hoàn toàn, Transparent = pha trộn dựa theo alpha, Additive = cộng màu (sáng thêm, phù hợp lửa/glows), Multiply = nhân màu (tối đi)."
  },
  {
    "term": "Tangent Space",
    "tag": "Geometry",
    "def": "Không gian tọa độ cục bộ gắn với bề mặt của mesh, gồm 3 trục: Normal (vuông góc bề mặt), Tangent (dọc theo UV-U), Bitangent (dọc theo UV-V). Normal map thường lưu dữ liệu trong không gian này để hoạt động đúng dù mesh xoay theo hướng nào."
  },
  {
    "term": "Shader",
    "tag": "Rendering",
    "def": "Chương trình chạy trực tiếp trên GPU, quyết định từng pixel trên màn hình trông như thế nào. Vertex shader xử lý vị trí các đỉnh, Fragment (Pixel) shader tính màu từng điểm ảnh. Node graph thực chất là công cụ tạo shader bằng giao diện trực quan."
  },
  {
    "term": "Bitmask",
    "tag": "Logic",
    "def": "Mẹo đóng gói nhiều nút Bật/Tắt (True/False) vào chung một con số để siêu tiết kiệm bộ nhớ. Hãy tưởng tượng một dãy công tắc điện: thay vì dùng 4 biến riêng lẻ, ta chỉ cần 1 chuỗi bit như 1011 (Ví dụ: Bật đổ bóng, Tắt phản chiếu, Bật nhận ánh sáng, Bật hiển thị)."
  },
  {
    "term": "Emissive",
    "tag": "Lighting",
    "def": "Kênh màu đặc biệt khiến bề mặt tự phát sáng, không phụ thuộc vào ánh sáng bên ngoài. Emissive không thực sự chiếu sáng vật xung quanh (trừ khi dùng thêm GI / bloom). Phổ biến cho đèn, màn hình, laze, lửa."
  },
  {
    "term": "Clamp",
    "tag": "Math",
    "def": "Kẹp một giá trị vào trong khoảng [Min, Max]. Nếu vượt quá Max thì trả về Max, nếu nhỏ hơn Min thì trả về Min. Giống như giới hạn âm lượng: dù vặn bao nhiêu cũng không quá 100%."
  },
  {
    "term": "Mip Map",
    "tag": "Texture",
    "def": "Bộ texture thu nhỏ nhiều cấp (1/2, 1/4, 1/8...) được tạo sẵn khi import. GPU tự chọn cấp phù hợp với khoảng cách camera, giúp tránh shimmer/aliasing và tăng hiệu năng khi render vật ở xa."
  },
  {
    "term": "Instance",
    "tag": "Rendering",
    "def": "Kỹ thuật render nhiều bản sao của cùng một mesh trong một draw call duy nhất, mỗi bản sao có thể có vị trí/xoay/scale khác nhau. Cực kỳ hiệu quả cho cây, đá, cỏ hay bất kỳ vật thể lặp lại nhiều lần."
  },
  {
    "term": "Noise (Perlin / Simplex)",
    "tag": "Procedural",
    "def": "Hàm tạo ra các giá trị ngẫu nhiên nhưng mượt mà, liên tục — không bị vỡ hạt như random thông thường. Perlin noise tạo ra cấu trúc \"tự nhiên\" dùng cho mây, đất, sóng nước, bụi bặm, hoặc bất kỳ thứ gì hữu cơ."
  },
  {
    "term": "Texel",
    "tag": "Texture",
    "def": "Viết tắt của Texture Element.\nNó là “1 điểm dữ liệu” trong texture, giống như pixel nhưng dành cho texture 3D."
  },
  {
    "term": "Linear Space",
    "tag": "Rendering",
    "def": "Không gian màu sắc toán học thuần túy, nơi các giá trị ánh sáng tăng tiến một cách tuyến tính (vật lý thực tế). GPU luôn muốn tính toán shader trong không gian này để màu sắc pha trộn chính xác, không bị rực hoặc xỉn màu một cách bất thường."
  },
  {
    "term": "Gamma Space",
    "tag": "Rendering",
    "def": "Không gian màu sắc được nén lại để phù hợp với cách mắt người cảm nhận bóng tối và hiển thị trên màn hình. Hầu hết các texture khuếch tán (Base Color/Diffuse) ta vẽ ra đều ở Gamma Space, nên cần phải chuyển đổi về Linear Space trước khi đưa vào shader tính toán."
  },
  {
    "term": "Anisotropic Strand",
    "tag": "PBR",
    "def": "Hiệu ứng phản chiếu ánh sáng theo vệt dài (như vệt sáng dọc trên sợi tóc hoặc vòng tròn trên đĩa CD) thay vì gom lại một đốm tròn. Nó mô phỏng các bề mặt có hàng triệu rãnh siêu nhỏ chạy song song nhau, khiến ánh sáng bị lan tỏa theo một hướng cố định."
  },
  {
    "term": "Grazing Angle",
    "tag": "Optics",
    "def": "Góc nhìn cực nghiêng, gần như song song với bề mặt vật thể. Tại góc này, hầu hết mọi vật liệu (kể cả những thứ mờ nhám như vải, giấy) đều phản chiếu ánh sáng mạnh hơn rất nhiều do hiệu ứng Fresnel. Hiểu góc này giúp bạn kiểm tra lỗi phản chiếu ở viền mép model."
  },
  {
    "term": "Object Space",
    "tag": "Geometry",
    "def": "Không gian tọa độ cục bộ của riêng mô hình 3D, lấy tâm (Pivot) của chính model đó làm gốc (0,0,0). Khi tính toán trong không gian này, hiệu ứng sẽ dính chặt vào model: dù bạn có dịch chuyển hay xoay model đi đâu trong màn chơi, các hoa văn hay mặt nạ được tính theo Object Space vẫn giữ nguyên vị trí."
  },
  {
    "term": "Screen Space",
    "tag": "Rendering",
    "def": "Không gian tọa độ 2D phẳng của chính màn hình người chơi. Các hiệu ứng tính theo không gian này (như hiện tượng phản chiếu SSR, đổ bóng hay bloom) chỉ quan tâm đến những gì đang lọt vào ống kính camera; những vật nằm ngoài rìa màn hình sẽ hoàn toàn bị \"ngó lơ\"."
  },
  {
    "term": "Texel Density",
    "tag": "Texture",
    "def": "Là mật độ texel (pixel texture) trên bề mặt model 3D.\nTexel Density càng cao → bề mặt model có nhiều chi tiết texture hơn → nhìn sắc nét hơn."
  },
  {
    "term": "Specular Highlight",
    "tag": "Lighting",
    "def": "Vệt sáng bóng lấp lánh xuất hiện trên bề mặt vật thể khi ánh sáng từ nguồn sáng dội thẳng vào mắt người nhìn. Độ sắc nét hay mờ nhòe của vệt sáng này được quyết định bởi độ nhám (Roughness) của vật liệu."
  },
  {
    "term": "Dielectric",
    "tag": "PBR",
    "def": "Từ chuyên ngành để chỉ các vật liệu \"phi kim loại\" (nhựa, gỗ, đá, da). Đặc điểm của chúng trong PBR là luôn phản chiếu ánh sáng môi trường thành màu trắng/xám chứ không bao giờ lấy màu bản thân của nó để nhuộm màu vệt sáng phản chiếu."
  },
  {
    "term": "Albedo",
    "tag": "PBR",
    "def": "Giá trị màu sắc nguyên bản, thuần khiết của bề mặt khi hoàn toàn không có ánh sáng, bóng đổ hay sự phản chiếu nào tác động vào. Đây là dữ liệu đầu vào cốt lõi để shader bắt đầu tính toán các lớp ánh sáng và môi trường đè lên."
  },
  {
    "term": "Artifact",
    "tag": "Rendering",
    "def": "Thuật ngữ chỉ các lỗi hiển thị hoặc hiện tượng răng cưa, sọc màu, đốm sáng lạ xuất hiện trên màn hình do tính toán shader bị sai, tràn số, hoặc texture bị nén quá mức. Nhận biết và khử \"artifact\" là công việc hằng ngày khi tối ưu shader."
  },
  {
    "term": "Lightmap",
    "tag": "Lighting",
    "def": "Bản đồ texture đặc biệt lưu thông tin ánh sáng và bóng đổ tĩnh đã được \"nướng\" (bake) sẵn từ trước. Thay vì bắt card đồ họa tính toán ánh sáng theo thời gian thực rất tốn hiệu năng, engine chỉ cần dán tấm texture này lên màn chơi để tạo ra bóng đổ chuẩn xác và mượt mà."
  },
  {
    "term": "Tessellation",
    "tag": "Geometry",
    "def": "Kỹ thuật tự động chia nhỏ các tam giác trên mesh 3D thành nhiều tam giác nhỏ hơn ngay trong quá trình render (chạy bằng GPU). Khi kết hợp với Heightmap, nó giúp bề mặt của model thực sự lồi lõm và gồ ghề ra ngoài không gian 3D thay vì chỉ đánh lừa thị giác như Normal Map."
  }
];