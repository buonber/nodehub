const DATA_DEFAULT = [
/* ─── MATH OPERATORS ─── */
{id:"math",label:"Math Operators",ico:"∑",cls:"gm",desc:"Phép tính cơ bản, lũy thừa, logarithm, làm tròn, kẹp giá trị, nội suy",nodes:[
{n:"Add",cat:"",sc:"A",tags:[],p:[["A","Đầu vào 1"],["B","Đầu vào 2 (có thể thêm tới 10 port)"]],f:"A + B theo từng kênh. Hỗ trợ cộng tới 10 đầu vào. Port tự động cast nếu A và B khác số kênh."},
{n:"Subtract",cat:"",sc:"S",tags:[],p:[["A","Số bị trừ"],["B","Số trừ"]],f:"A − B theo từng kênh. Cast tự động nếu khác số kênh."},
{n:"Multiply",cat:"",sc:"M",tags:[],p:[["A","Đầu vào 1"],["B","Hệ số nhân (hỗ trợ tới 10 port)"]],f:"A × B theo từng kênh. Hỗ trợ nhân ma trận — khi đó không cho thêm port vì matrix mul không có tính giao hoán."},
{n:"Divide",cat:"",sc:"D",tags:[],p:[["A","Tử số"],["B","Mẫu số ≠ 0"]],f:"A ÷ B theo từng kênh. Chia cho 0 gây lỗi biên dịch."},
{n:"Abs",cat:"",sc:"K",tags:[],p:[["In","Giá trị bất kỳ"]],f:"Giá trị tuyệt đối |In|. Per-channel. Dùng để mirror, flip normal channel."},
{n:"Ceil",cat:"Round",sc:"",tags:[],p:[["In","Số thực"]],f:"Làm tròn lên (ceiling). ceil(0.1)=1, ceil(−0.7)=0. Per-channel."},
{n:"Clamp",cat:"Range",sc:"",tags:[],p:[["In","Giá trị cần kẹp"],["Min","Giới hạn dưới"],["Max","Giới hạn trên"]],f:"Kẹp In trong [Min, Max]. Ngăn overflow sau tính toán."},
{n:"DDX",cat:"Derivative",sc:"",tags:[],p:[["In","Giá trị fragment"]],f:"Đạo hàm riêng theo X screen-space (dFdx). Tính normal từ heightmap procedural. Chỉ dùng ở Fragment stage."},
{n:"DDY",cat:"Derivative",sc:"",tags:[],p:[["In","Giá trị fragment"]],f:"Đạo hàm riêng theo Y screen-space (dFdy). Ghép với DDX để tính cross-product normal. Fragment stage only."},
{n:"FWidth",cat:"Derivative",sc:"",tags:[],p:[["In","Giá trị"]],f:"abs(ddx(In)) + abs(ddy(In)). Tổng độ biến thiên cả hai trục màn hình. Dùng cho anti-aliasing edge procedural."},
{n:"Exp",cat:"Power",sc:"",tags:[],p:[["In","Số mũ"]],f:"e^In (base e tự nhiên). Falloff tự nhiên, fog, dissolve."},
{n:"Exp2",cat:"Power",sc:"",tags:[],p:[["In","Số mũ"]],f:"2^In. Remap theo lũy thừa base-2."},
{n:"Floor",cat:"Round",sc:"",tags:[],p:[["In","Số thực"]],f:"Làm tròn xuống. floor(0.9)=0, floor(−0.1)=−1. Pixel art, tile index, UV tiling."},
{n:"Fmod",cat:"Range",sc:"",tags:[],p:[["A","Số bị chia"],["B","Số chia ≠ 0"]],f:"Phần dư của A/B, dấu theo A (HLSL fmod). Khác Remainder ở dấu số âm. Pattern lặp chính xác."},
{n:"Fract",cat:"Range",sc:"",tags:[],p:[["In","Số thực"]],f:"Phần thập phân: In − floor(In). fract(1.7)=0.7. Tạo pattern lặp tuần hoàn, UV tile liên tục."},
{n:"Lerp",cat:"Interpolation",sc:"L",tags:[],p:[["A","Điểm đầu"],["B","Điểm cuối"],["Alpha","[0–1] hệ số blend"]],f:"Nội suy tuyến tính A*(1−Alpha)+B*Alpha. Blend màu, roughness, vị trí."},
{n:"Log",cat:"Power",sc:"",tags:[],p:[["In","Số > 0"]],f:"ln(In) — logarithm tự nhiên cơ số e. Remap phi tuyến."},
{n:"Log2",cat:"Power",sc:"",tags:[],p:[["In","Số > 0"]],f:"log₂(In). Logarithm cơ số 2."},
{n:"Log10",cat:"Power",sc:"",tags:[],p:[["In","Số > 0"]],f:"log₁₀(In). Logarithm thập phân."},
{n:"Max",cat:"Range",sc:"",tags:[],p:[["A","Giá trị 1"],["B","Giá trị 2"]],f:"Giá trị lớn hơn giữa A và B. Per-channel."},
{n:"Min",cat:"Range",sc:"",tags:[],p:[["A","Giá trị 1"],["B","Giá trị 2"]],f:"Giá trị nhỏ hơn giữa A và B. Per-channel."},
{n:"Negate",cat:"",sc:"",tags:[],p:[["In","Giá trị"]],f:"Phủ định −In. Đảo hướng normal, flip offset."},
{n:"One Minus",cat:"",sc:"O",tags:[],p:[["In","Giá trị"]],f:"1 − In. Đảo ngược mask, invert alpha, flip UV channel."},
{n:"Pow",cat:"Power",sc:"",tags:[],p:[["A","Cơ số"],["B","Số mũ"]],f:"A^B per-channel. Remap Roughness/Metallic, phân bố specular."},
{n:"Remainder",cat:"Range",sc:"",tags:[],p:[["A","Số bị chia"],["B","Số chia ≠ 0"]],f:"A % B — phần dư dấu phẩy động. Khác Fmod: không đảm bảo dấu theo A. Nhanh hơn Fmod."},
{n:"Remap",cat:"Range",sc:"",tags:[],p:[["In","Giá trị đầu vào"],["Min Old","Giới hạn dưới nguồn"],["Max Old","Giới hạn trên nguồn"],["Min New","Giới hạn dưới đích"],["Max New","Giới hạn trên đích"]],f:"Remap In từ [MinOld, MaxOld] → [MinNew, MaxNew]. Linh hoạt hơn Lerp + InverseLerp."},
{n:"Round",cat:"Round",sc:"",tags:[],p:[["In","Số thực"]],f:"Làm tròn tới số nguyên gần nhất. round(0.5)=1."},
{n:"RSqrt",cat:"Power",sc:"",tags:[],p:[["In","Số > 0"]],f:"1/√In (reciprocal square root). Tối ưu GPU hơn Sqrt + Divide. Normalize thủ công."},
{n:"Saturate",cat:"Range",sc:"",tags:[],p:[["In","Giá trị"]],f:"Clamp vào [0,1] được tối ưu GPU (saturate intrinsic). Nhanh hơn node Clamp thông thường."},
{n:"Scale",cat:"",sc:"",tags:[],p:[["In","Giá trị"],["Scale","Hệ số nhân scalar"]],f:"In × Scale. Nhân nhanh với một scalar. Đơn giản hơn Multiply khi chỉ cần nhân scalar."},
{n:"Scale And Offset",cat:"",sc:"Z",tags:[],p:[["In","Giá trị"],["Scale","Hệ số nhân"],["Offset","Giá trị cộng thêm"]],f:"In * Scale + Offset. Mad (multiply-add). Shortcut nhanh cho rescale phạm vi."},
{n:"Sign",cat:"Round",sc:"",tags:[],p:[["In","Số"]],f:"−1 nếu âm, 0 nếu = 0, +1 nếu dương. Xác định chiều/hướng vector."},
{n:"Simplified Fmod",cat:"Range",sc:"",tags:[],p:[["A","Số bị chia"],["B","Số chia ≠ 0"]],f:"Fmod đơn giản hóa: nhanh hơn Fmod nhưng không đảm bảo dấu kết quả với số âm. Dùng khi chỉ cần phần dư không âm."},
{n:"Smoothstep",cat:"Interpolation",sc:"Y",tags:[],p:[["Min","Ngưỡng dưới"],["Max","Ngưỡng trên"],["In","Đầu vào"]],f:"Nội suy Hermite cubic 0→1 khi In đi từ Min→Max. Soft mask, dissolve edge, fog boundary."},
{n:"Sqrt",cat:"Power",sc:"",tags:[],p:[["In","Số ≥ 0"]],f:"√In. Tính khoảng cách, normalize thủ công."},
{n:"Step",cat:"Round",sc:"",tags:[],p:[["Edge","Ngưỡng"],["In","Giá trị"]],f:"1 nếu In ≥ Edge, 0 nếu In < Edge. Hard cutoff nhị phân, mask sắc nét. Nhanh hơn Smoothstep."},
{n:"Step Antialiasing",cat:"Round",sc:"",tags:[],p:[["Edge","Ngưỡng"],["In","Giá trị"]],f:"Step có anti-aliasing tự động dựa trên FWidth. Giảm aliasing tại biên cứng mà không cần chỉnh tay."},
{n:"Trunc",cat:"Round",sc:"",tags:[],p:[["In","Số thực"]],f:"Bỏ phần thập phân không làm tròn. trunc(−1.7)=−1. Giữ phần nguyên."}
]},
/* ─── TRIGONOMETRY OPERATORS ─── */
{id:"trig",label:"Trigonometry Operators",ico:"〜",cls:"gt",desc:"Hàm lượng giác, hàm nghịch đảo, hyperbolic, chuyển đổi độ/radian",nodes:[
{n:"Sin",cat:"",sc:"",tags:[],p:[["In","Radian"]],f:"sin(In). Input tính bằng radian. Animation sóng, lắc lư tuần hoàn."},
{n:"Cos",cat:"",sc:"C",tags:[],p:[["In","Radian"]],f:"cos(In). Lệch pha π/2 so với Sin."},
{n:"Tan",cat:"",sc:"",tags:[],p:[["In","Radian"]],f:"tan(In). Cẩn thận với In gần π/2 (tiến về vô cực)."},
{n:"ASin",cat:"Inverse",sc:"",tags:[],p:[["In","[−1, 1]"]],f:"arcsin(In) → [−π/2, π/2]. Nghịch đảo Sin."},
{n:"ACos",cat:"Inverse",sc:"",tags:[],p:[["In","[−1, 1]"]],f:"arccos(In) → [0, π]. Nghịch đảo Cos."},
{n:"ATan",cat:"Inverse",sc:"",tags:[],p:[["In","Số thực"]],f:"arctan(In) → [−π/2, π/2]. Nghịch đảo Tan."},
{n:"ATan2",cat:"Inverse",sc:"",tags:[],p:[["A","Y component"],["B","X component"]],f:"atan2(A, B) → [−π, π]. Góc đầy đủ 360°. Polar coordinates, sprite rotation."},
{n:"Sinh",cat:"Hyperbolic",sc:"",tags:[],p:[["In","Số"]],f:"sinh(In). Hàm sin hyperbolic."},
{n:"Cosh",cat:"Hyperbolic",sc:"",tags:[],p:[["In","Số"]],f:"cosh(In). Hàm cos hyperbolic."},
{n:"Tanh",cat:"Hyperbolic",sc:"",tags:[],p:[["In","Số"]],f:"tanh(In) → [−1, 1]. Hội tụ — dùng như activation function mượt."},
{n:"Radians",cat:"Conversion",sc:"",tags:[],p:[["In","Độ (degrees)"]],f:"In × π/180. Chuyển độ sang radian trước Trig nodes."},
{n:"Degrees",cat:"Conversion",sc:"",tags:[],p:[["In","Radian"]],f:"In × 180/π. Chuyển radian sang độ để debug hoặc hiển thị."}
]},
/* ─── VECTOR OPERATORS ─── */
{id:"vector",label:"Vector Operators",ico:"→",cls:"gv",desc:"Append, Split, Dot, Cross, Normalize, Reflect, Refract, Transform, Swizzle...",nodes:[
{n:"Append",cat:"",sc:"V",tags:[],p:[["X / R","Kênh đầu tiên"],["Y / G","Kênh thứ hai"],["Z / B","Kênh thứ ba (nếu cần)"],["W / A","Kênh thứ tư (nếu cần)"]],f:"Ghép các kênh riêng lẻ thành một vector lớn hơn. Số port phụ thuộc Output Type chọn trong node."},
{n:"Break To Components",cat:"Split",sc:"B",tags:[],p:[["In","Vector bất kỳ"]],f:"Tách vector thành các kênh riêng lẻ (R/G/B/A hoặc X/Y/Z/W). Còn gọi là Split từ v1.8.7+."},
{n:"Component Mask",cat:"Swizzle",sc:"",tags:[],p:[["In","Vector"]],f:"Chọn và sắp xếp lại kênh tùy ý (swizzle). Ví dụ: .xzy, .rrg. Linh hoạt hơn Break To Components."},
{n:"Create Orthogonal Vector",cat:"",sc:"",tags:[],p:[["In","Vector3 bất kỳ"]],f:"Tạo vector vuông góc với In. Dùng để xây TBN frame thủ công khi không có tangent."},
{n:"Distance",cat:"",sc:"",tags:[],p:[["A","Điểm A"],["B","Điểm B"]],f:"Khoảng cách Euclidean |A − B|. Sphere of influence, proximity mask."},
{n:"Dot",cat:"",sc:".",tags:[],p:[["A","Vector"],["B","Vector"]],f:"Tích vô hướng Σ(Aᵢ×Bᵢ). Tính góc, diffuse NdotL lighting, rim light."},
{n:"Cross",cat:"",sc:"X",tags:[],p:[["A","Vector3"],["B","Vector3"]],f:"Tích có hướng A × B. Vuông góc cả hai vector. Tính bitangent, procedural normal. Thứ tự quan trọng: A×B ≠ B×A."},
{n:"Length",cat:"",sc:"",tags:[],p:[["In","Vector"]],f:"Độ dài (magnitude) của vector. Tính khoảng cách từ gốc tọa độ."},
{n:"Normalize",cat:"",sc:"N",tags:[],p:[["In","Vector"]],f:"Đưa vector về độ dài = 1. Bắt buộc trước Dot/Cross với normal."},
{n:"Reflect",cat:"",sc:"",tags:[],p:[["Incident","Vector chiếu tới"],["Normal","Vector pháp tuyến (nên normalize)"]],f:"Vector phản chiếu: Incident − 2*Normal*dot(Incident, Normal). Normal phải normalize để giữ đúng độ dài kết quả."},
{n:"Refract",cat:"",sc:"",tags:[],p:[["Incident","Vector chiếu tới (normalized)"],["Normal","Vector pháp tuyến (normalized)"],["Eta","Tỷ số chiết suất (n1/n2)"]],f:"Vector khúc xạ theo định luật Snell. Eta = n1/n2 (ví dụ không khí→kính ≈ 0.67). Cả Incident và Normal phải normalized."},
{n:"Rotate About Axis",cat:"",sc:"",tags:[],p:[["Position","Vector3 vị trí cần xoay"],["Axis","Trục xoay (Vector3 normalized)"],["Angle","Góc radian"]],f:"Xoay Position quanh Axis một góc Angle (radian). Vertex animation, spinning object."},
{n:"Swizzle",cat:"",sc:"",tags:[],p:[["In","Vector"]],f:"Truy cập và hoán đổi thành phần tùy ý (shorthand component mask). Ví dụ: .xy, .zw, .xxx."},
{n:"Transform Direction",cat:"",sc:"",tags:[],p:[["In","Vector3 hướng hoặc vị trí"],["From","Không gian nguồn"],["To","Không gian đích"]],f:"Chuyển đổi vector giữa các không gian tọa độ: Object ↔ World ↔ View ↔ Tangent ↔ Clip. Chọn không gian bằng dropdown."}
]},
/* ─── MATRIX OPERATORS ─── */
{id:"matrix",label:"Matrix Operators",ico:"▦",cls:"gmat",desc:"Xây, tách, chuyển vị, determinant, nhân ma trận",nodes:[
{n:"Matrix From Vectors",cat:"",sc:"",tags:[],p:[["Row0","Hàng 0 (Vector3/4)"],["Row1","Hàng 1 (Vector3/4)"],["Row2","Hàng 2 (Vector3/4)"],["Row3","Hàng 3 (tùy chọn)"]],f:"Xây ma trận từ các vector hàng. Ví dụ dùng: TBN matrix từ tangent, bitangent, normal."},
{n:"Split Matrix",cat:"",sc:"",tags:[],p:[["In","Ma trận"]],f:"Tách ma trận thành các vector hàng/cột. Ngược với Matrix From Vectors."},
{n:"Transpose",cat:"",sc:"",tags:[],p:[["In","Ma trận"]],f:"Chuyển vị ma trận (đổi hàng ↔ cột). Inverse của rotation matrix (orthogonal)."},
{n:"Determinant",cat:"",sc:"",tags:[],p:[["In","Ma trận vuông"]],f:"Trả về determinant scalar. Kiểm tra khả năng nghịch đảo."}
]},
/* ─── MATRIX TRANSFORM ─── */
{id:"matrixtx",label:"Matrix Transform",ico:"⊞",cls:"gmat",desc:"Nhân ma trận-vector, object/world/view transform, projection",nodes:[
{n:"Mul Matrix",cat:"",sc:"",tags:[],p:[["A","Ma trận hoặc vector"],["B","Ma trận hoặc vector"]],f:"Nhân ma trận. Thứ tự quan trọng (không giao hoán). Áp transform tùy chỉnh cho vertex."},
{n:"Object To World",cat:"",sc:"",tags:[],p:[["In","Vị trí hoặc hướng (Object space)"]],f:"Chuyển từ Object space → World space dùng unity_ObjectToWorld."},
{n:"World To Object",cat:"",sc:"",tags:[],p:[["In","Vị trí hoặc hướng (World space)"]],f:"Chuyển từ World space → Object space dùng unity_WorldToObject."},
{n:"Object To Clip",cat:"",sc:"",tags:[],p:[["In","Vị trí (Object space)"]],f:"Chuyển từ Object space → Clip space (MVP). Thường dùng cho custom vertex output."},
{n:"World To Clip",cat:"",sc:"",tags:[],p:[["In","Vị trí (World space)"]],f:"Chuyển từ World space → Clip space (VP). Bỏ qua Model matrix."},
{n:"View To Clip",cat:"",sc:"",tags:[],p:[["In","Vị trí (View/Camera space)"]],f:"Chuyển từ View space → Clip space (P). Chỉ projection."}
]},
/* ─── VERTEX DATA ─── */
{id:"vertex",label:"Vertex Data",ico:"◈",cls:"gd",desc:"Dữ liệu gốc của mesh: position, normal, tangent, color, UV, ID, scale...",nodes:[
{n:"Vertex Position",cat:"",sc:"",tags:[],p:[],f:"Vị trí vertex trong Object space (float3 xyz). Dùng để displacement, custom vertex animation."},
{n:"Vertex Normal",cat:"",sc:"",tags:[],p:[],f:"Normal vector tại vertex trong Object space (float3). Cần normalize trước khi dùng ánh sáng."},
{n:"Vertex Tangent",cat:"",sc:"",tags:[],p:[],f:"Tangent vector tại vertex (float4 — W chứa handedness sign). Xây TBN matrix trong vertex shader."},
{n:"Vertex Bitangent",cat:"",sc:"",tags:[],p:[],f:"Bitangent = cross(Normal, Tangent) × TangentSign. Trục thứ ba của không gian tiếp tuyến."},
{n:"Vertex Tangent Sign",cat:"",sc:"",tags:[],p:[],f:"Dấu của tangent (±1, lưu trong Tangent.W). Dùng khi tự tính Bitangent: normal × tangent × sign."},
{n:"Vertex Color",cat:"",sc:"",tags:[],p:[],f:"Màu vertex (RGBA) được paint trên mesh. Dùng để blend layer vật liệu, mask, tint texture."},
{n:"Vertex TexCoord",cat:"UV",sc:"U",tags:[],p:[["UV Channel","0–3 (dropdown)"]],f:"UV tọa độ thô từ mesh, không có tiling/offset. Đầu vào cơ bản nhất cho UV."},
{n:"Vertex ID",cat:"",sc:"",tags:[],p:[],f:"ID số nguyên duy nhất cho từng vertex (SV_VertexID). Tạo procedural geometry, vertex animation offsets."},
{n:"Instance ID",cat:"",sc:"",tags:[],p:[],f:"ID của instance trong GPU Instancing (SV_InstanceID). Phân biệt instance để tạo variation."},
{n:"Primitive ID",cat:"",sc:"",tags:[],p:[],f:"ID của primitive (SV_PrimitiveID). Cần geometry shader stage. Hiếm dùng trong Surface shader."},
{n:"Face",cat:"",sc:"",tags:[],p:[],f:"Render mặt nào đang xử lý: +1 nếu front face, −1 nếu back face (VFACE semantic). Double-sided shader với logic khác nhau."},
{n:"Object Scale",cat:"",sc:"",tags:[],p:[],f:"Tỷ lệ GameObject trong World space (float3 xyz scale). Tính toán kích thước thực khi scale object."}
]},
/* ─── OBJECT TRANSFORM ─── */
{id:"objecttx",label:"Object Transform",ico:"⬡",cls:"gd",desc:"Transform, vị trí, bounds, pivot của object trong World space",nodes:[
{n:"Object Bounds",cat:"",sc:"",tags:[],p:[],f:"Kích thước bounds của mesh (Bounds Size, float3). Dùng để scale UVs theo kích thước mesh."},
{n:"Object Pivot",cat:"",sc:"",tags:[],p:[],f:"Vị trí pivot (gốc tọa độ) của object trong World space. Radial mask tính từ tâm mesh."},
{n:"Object Position",cat:"",sc:"",tags:[],p:[],f:"Vị trí center của object trong World space (float3). Tính khoảng cách từ tâm object."},
{n:"World Transform Params",cat:"",sc:"",tags:[],p:[],f:"Params gói lại từ unity_WorldTransformParams: chứa odd-negative scale flag cho Bitangent sign correction."}
]},
/* ─── SURFACE DATA ─── */
{id:"surface",label:"Surface Data",ico:"◉",cls:"gsd",desc:"Thông tin bề mặt tại điểm fragment: position, normal, depth, view direction, light...",nodes:[
{n:"World Position",cat:"",sc:"",tags:[],p:[],f:"Vị trí fragment trong World space (float3). Mask theo khoảng cách, world-space pattern."},
{n:"World Normal",cat:"",sc:"W",tags:[],p:[],f:"Normal tại fragment trong World space (float3). Ánh sáng, reflection, fresnel."},
{n:"World Reflection",cat:"",sc:"",tags:[],p:[["Normal","Normal World space (tùy chọn)"]],f:"Vector phản chiếu của View Direction qua Normal. Cubemap lookup, environment reflection."},
{n:"World Bitangent",cat:"",sc:"",tags:[],p:[],f:"Bitangent tại fragment trong World space. Tự tính TBN nếu cần transform thủ công."},
{n:"World Tangent",cat:"",sc:"",tags:[],p:[],f:"Tangent tại fragment trong World space. Kết hợp với World Normal, World Bitangent → TBN."},
{n:"View Dir",cat:"",sc:"F",tags:[],p:[],f:"Vector hướng nhìn từ camera đến fragment (World space, không nhất thiết normalized). Fresnel, rim, specular."},
{n:"World Space Camera Pos",cat:"",sc:"",tags:[],p:[],f:"Vị trí camera trong World space (float3). Tính khoảng cách từ camera, ray direction."},
{n:"Half Lambert Term",cat:"",sc:"",tags:[],p:[],f:"dot(WorldNormal, WorldSpaceLightDir) * 0.5 + 0.5. Wrapped diffuse mềm, không bị tối cứng phía sau."},
{n:"Blinn-Phong Half Vector",cat:"",sc:"",tags:[],p:[],f:"normalize(ViewDir + WorldSpaceLightDir). Half vector cho Blinn-Phong specular."},
{n:"Surface Depth",cat:"",sc:"",tags:[],p:[["In","UV screen (tùy chọn)"]],f:"Depth tại bề mặt hiện tại (eye depth, linear). Fog, soft particles, depth-based effects."}
]},
/* ─── CAMERA AND SCREEN ─── */
{id:"camera",label:"Camera And Screen",ico:"📷",cls:"gcam",desc:"Thông số camera, depth buffer, screen position, grab pass...",nodes:[
{n:"Screen Position",cat:"",sc:"",tags:[],p:[["Mode","Normalized/Raw/Tiled/Pixel (dropdown)"]],f:"Vị trí fragment trên màn hình. Mode Normalized: [0,1]. Tiled: lặp lại. Pixel: pixel space."},
{n:"Grab Screen Color",cat:"",sc:"",tags:[],p:[["UV","Tọa độ screen UV"],["LOD","Mip level (tùy chọn)"]],f:"Lấy màu màn hình sau khi render opaque (Grab Pass). Distortion, glass refraction, heat haze. Không hỗ trợ SRP Forward."},
{n:"Grab Screen Pos",cat:"",sc:"",tags:[],p:[["Vertex","Clip space position"]],f:"Tính UV screen space chuẩn để dùng với Grab Screen Color."},
{n:"Compute Screen Pos",cat:"",sc:"",tags:[],p:[["Vertex","Clip space position (từ vertex)"]],f:"ComputeScreenPos() — tính screen UV cho sử dụng ở fragment. Cần xử lý perspective divide (chia .w)."},
{n:"Compute Grab Screen Pos",cat:"",sc:"",tags:[],p:[["Vertex","Clip space position"]],f:"ComputeGrabScreenPos() — phiên bản cho Grab Pass. Đã kết hợp perspective."},
{n:"Screen Depth",cat:"",sc:"",tags:[],p:[["UV","Screen UV"],["Mode","Depth mode dropdown"]],f:"Đọc depth buffer tại UV. Linear01, LinearEye, hoặc Raw. Soft particles, screen-space shadows."},
{n:"Screen Params",cat:"",sc:"",tags:[],p:[],f:"(Width, Height, 1/Width, 1/Height) — kích thước render target. Tính texel size."},
{n:"Camera Depth Fade",cat:"",sc:"",tags:[],p:[["Length","Khoảng fade"],["Offset","Bắt đầu fade"]],f:"Fade alpha theo khoảng cách từ camera. Soft particles, fog proximity."},
{n:"Clip Planes",cat:"",sc:"",tags:[],p:[],f:"Near và Far clip planes của camera (float2: x=near, y=far)."},
{n:"View Dir",cat:"",sc:"",tags:[],p:[],f:"Xem thêm ở Surface Data. Hướng nhìn camera → fragment. Trùng với mục Surface Data."},
{n:"Ortho Params",cat:"",sc:"",tags:[],p:[],f:"Thông số orthographic camera: (Width, Height, unused, isOrtho). Phát hiện Ortho mode."},
{n:"Projection Params",cat:"",sc:"",tags:[],p:[],f:"(_ProjectionParams) Vector4: x=flip, y=near, z=far, w=1/far. Tính depth tuyến tính thủ công."},
{n:"Projection Matrices",cat:"",sc:"",tags:[],p:[],f:"Ma trận Projection (UNITY_MATRIX_P) và Inverse Projection. Custom projection, ray casting."},
{n:"Z Buffer Params",cat:"",sc:"",tags:[],p:[],f:"(_ZBufferParams) Dùng để linearize depth buffer: Linear01Depth, LinearEyeDepth."},
{n:"Dither",cat:"",sc:"",tags:[],p:[["In","Giá trị alpha"],["Screen Pos","Screen position"]],f:"Alpha dithering 4×4 Bayer pattern. Pseudo-transparency không cần blend state. LOD cross-fade."}
]},
/* ─── CONSTANTS AND PROPERTIES ─── */
{id:"constants",label:"Constants And Properties",ico:"#",cls:"gconst",desc:"Hằng số, property vật liệu, gradient, PI, màu, vector...",nodes:[
{n:"Float",cat:"Property",sc:"1",tags:[],p:[],f:"Property scalar (float). Có thể Exposed (hiển thị trên Inspector) hoặc internal."},
{n:"Vector2",cat:"Property",sc:"2",tags:[],p:[],f:"Property Vector2."},
{n:"Vector3",cat:"Property",sc:"3",tags:[],p:[],f:"Property Vector3."},
{n:"Vector4",cat:"Property",sc:"4",tags:[],p:[],f:"Property Vector4."},
{n:"Color",cat:"Property",sc:"5",tags:[],p:[],f:"Property Color (HDR hỗ trợ). Hiển thị color picker trên Inspector."},
{n:"Int",cat:"Property",sc:"",tags:[],p:[],f:"Property số nguyên (Integer). Dùng index, switch states."},
{n:"Toggle",cat:"Property",sc:"",tags:[],p:[],f:"Property Boolean (0 hoặc 1). Toggle feature on/off trong shader variant."},
{n:"Range",cat:"Property",sc:"",tags:[],p:[["Min","Giới hạn dưới slider"],["Max","Giới hạn trên slider"]],f:"Property float với slider giới hạn [Min, Max] trên Inspector."},
{n:"PI",cat:"Constant",sc:"",tags:[],p:[],f:"Hằng số π ≈ 3.14159. Dùng với Trig nodes."},
{n:"Tau",cat:"Constant",sc:"",tags:[],p:[["Mul","Hệ số nhân (mặc định 1)"]],f:"2π ≈ 6.28318. Chu kỳ đầy đủ của sóng sin/cos."},
{n:"Euler Number",cat:"Constant",sc:"",tags:[],p:[],f:"Hằng số e ≈ 2.71828. Cơ số tự nhiên."},
{n:"Golden Ratio",cat:"Constant",sc:"",tags:[],p:[],f:"Tỷ lệ vàng φ ≈ 1.61803. Phân bố Fibonacci, noise blue."},
{n:"Root 2",cat:"Constant",sc:"",tags:[],p:[],f:"√2 ≈ 1.41421. Đường chéo hình vuông đơn vị."},
{n:"Gradient",cat:"",sc:"",tags:[],p:[["Time","[0,1] vị trí lấy mẫu"]],f:"Gradient màu custom (tối đa 8 màu + 8 alpha key). Cấu hình trong node UI. Ramp shader, color over life."}
]},
/* ─── TEXTURES ─── */
{id:"textures",label:"Textures",ico:"🖼",cls:"gtex",desc:"Sample, Object, Array, Cubemap, Normal Unpack, Triplanar, Blend...",nodes:[
{n:"Texture Sample",cat:"",sc:"T",tags:[],p:[["Tex","Texture2D asset hoặc Texture Object"],["UV","Tọa độ UV (mặc định: mesh UV0)"],["SS","Sampler State (tùy chọn, Unity 2018.1+)"],["Scale","Scale normal (nếu chế độ Normal)"],["LOD","Mip level cho SampleLevel"]],f:"Lấy mẫu texture và đọc pixel màu. Tích hợp auto-decode Normal map nếu bật chế độ Normal. Kéo thả texture asset vào graph sẽ tự tạo node. Output: RGBA hoặc XYZ (normal mode)."},
{n:"Texture Object",cat:"",sc:"X+T",tags:[],p:[],f:"Chỉ tham chiếu texture (sampler2D), không sample. Dùng để chia sẻ cùng texture cho nhiều Texture Sample node."},
{n:"Texture Array",cat:"",sc:"",tags:[],p:[["Tex","Texture2DArray asset"],["UV","UV tọa độ"],["Index","Index lớp trong array"],["SS","Sampler State (tùy chọn)"]],f:"Sample Texture2DArray. Tiết kiệm sampler khi dùng nhiều texture giống size/format. Yêu cầu Shader Model 3.5+."},
{n:"Texture 3D",cat:"",sc:"",tags:[],p:[["Tex","Texture3D asset"],["UVW","Vector3 tọa độ (XYZ)"],["SS","Sampler State (tùy chọn)"]],f:"Sample Texture3D (volume texture). Noise 3D, smoke, cloud shader."},
{n:"Texture Cube",cat:"",sc:"",tags:[],p:[["Tex","Cubemap asset"],["Dir","Vector3 hướng lookup"],["SS","Sampler State (tùy chọn)"]],f:"Sample Cubemap. Environment map, skybox, reflection probe fallback."},
{n:"Sampler State",cat:"",sc:"",tags:[],p:[["Tex","Texture Object (tùy chọn tham chiếu)"]],f:"Tạo Sampler State riêng (Wrap + Filter mode). Tách sampler khỏi texture → tối đa 128 texture vs 16 sampler. Yêu cầu Unity 2018.1+ và Use Sampling Macros."},
{n:"Virtual Texture Object",cat:"",sc:"",tags:[],p:[],f:"Tham chiếu Virtual Texture (Amplify Texture plugin). Giống Texture Object nhưng cho Amplify Virtual Texturing."},
{n:"Unpack Scale Normal",cat:"Normal",sc:"",tags:[],p:[["Tex","Texture sample output (encoded normal)"],["Scale","Cường độ normal [0–2]"]],f:"Giải mã normal map (UnpackScaleNormal) từ DXT5nm về float3 tangent space. Scale = 0: flat, 1: bình thường, >1: phóng to."},
{n:"Blend Normals",cat:"Normal",sc:"",tags:[],p:[["A","Normal1 (float3 tangent)"],["B","Normal2 (float3 tangent)"]],f:"Blend hai normal map theo phương pháp Reoriented Normal Mapping (RNM). Chính xác hơn Add+Normalize."},
{n:"Heightmap Blend",cat:"Normal",sc:"",tags:[],p:[["HeightA","Heightmap A [0−1]"],["HeightB","Heightmap B [0−1]"],["A","Giá trị blend A"],["B","Giá trị blend B"],["Contrast","Độ sắc nét biên [0−1]"]],f:"Blend 2 layer theo heightmap — layer cao hơn \"thắng\". Tạo biên tự nhiên giữa layer đất và đá."},
{n:"Triplanar Sample",cat:"",sc:"",tags:[],p:[["Top","Texture cho mặt trên"],["Mid","Texture cho mặt bên"],["Bot","Texture cho mặt dưới (tùy chọn)"],["Scale","Kích thước tile"],["Blend","Softness biên blend"]],f:"Sample texture theo 3 trục World space (XY, XZ, YZ) và blend. Không cần UV — dùng cho terrain, rock, procedural mesh."},
{n:"Texel Size",cat:"",sc:"",tags:[],p:[["Tex","Texture Object"]],f:"Trả về {1/width, 1/height, width, height} — kích thước texel. Dùng khi cần offset đúng 1 pixel (blur, sobel edge)."},
{n:"Texture Transform",cat:"",sc:"",tags:[],p:[["Tex","Texture Object"],["UV","Tọa độ UV vào"],["Tiling","Vector2 tiling"],["Offset","Vector2 offset"]],f:"Áp dụng Tiling và Offset của texture vào UV theo cách giống Unity standard (TRANSFORM_TEX)."}
]},
/* ─── UV COORDINATES ─── */
{id:"uv",label:"UV Coordinates",ico:"⊡",cls:"guv",desc:"UV tiling, Panner, Rotator, Parallax, Flipbook, Pixelate...",nodes:[
{n:"Texture Coordinates",cat:"",sc:"U",tags:[],p:[["Tex","Texture Object (tùy chọn, lấy tiling/offset)"],["UV Channel","0–3"],["Tiling","Vector2 tile"],["Offset","Vector2 offset"]],f:"UV mesh + tiling/offset. Nếu kết nối Tex, dùng tiling/offset của texture asset đó."},
{n:"Panner",cat:"Animation",sc:"",tags:[],p:[["UV","UV đầu vào"],["Speed","Vector2 tốc độ cuộn (U, V)"],["Time","Thời gian (thường nối Time)"],["Ping-Pong","Boolean back-and-forth"]],f:"Cuộn UV theo thời gian. Chảy nước, lửa, mây, conveyor belt. Ping-Pong để đảo chiều."},
{n:"Rotator",cat:"Animation",sc:"",tags:[],p:[["UV","UV đầu vào"],["Center","Tâm xoay (Vector2, mặc định 0.5, 0.5)"],["Angle","Góc radian"],["Use Time","Dùng Time tự động"]],f:"Xoay UV quanh điểm Center. Animation xoay texture. Use Time = tự quay liên tục."},
{n:"Flipbook",cat:"Animation",sc:"",tags:[],p:[["UV","UV đầu vào"],["Columns","Số cột sprite sheet"],["Rows","Số hàng sprite sheet"],["Frame","Chỉ số frame"],["Speed","Tốc độ (nếu dùng time)"],["Start Frame","Frame bắt đầu (tùy chọn)"],["Smooth","Boolean blend giữa frame"]],f:"Chia UV thành sprite sheet và animate. Frame = 0 → Columns*Rows−1. Smooth blend frame liền kề."},
{n:"Pixelate UV",cat:"",sc:"",tags:[],p:[["UV","UV đầu vào"],["Pixel Count","Số pixel [V2]"]],f:"Lượng tử hóa UV → hiệu ứng pixel art. Mỗi \"pixel\" dùng màu trung tâm."},
{n:"Parallax Mapping",cat:"Parallax",sc:"",tags:[],p:[["UV","UV đầu vào"],["Height","Heightmap [0−1]"],["View Dir","View Direction tangent space"],["Amplitude","Độ sâu hiệu ứng"]],f:"Parallax mapping cơ bản. Offset UV theo heightmap + góc nhìn. Nhanh, phù hợp mobile."},
{n:"Parallax Offset",cat:"Parallax",sc:"",tags:[],p:[["Height","Heightmap [0−1]"],["View Dir","View Direction tangent space"],["Amplitude","Độ sâu"]],f:"Tính offset UV parallax không lặp ray. Đơn giản, dùng kết hợp với Texture Coordinates."},
{n:"Parallax Occlusion Mapping",cat:"Parallax",sc:"",tags:[],p:[["UV","UV đầu vào"],["Tex","Heightmap Texture Object"],["View Dir","View Direction tangent space"],["Amplitude","Độ sâu"],["Steps","Số bước ray march"],["Silhouette","Clamp biên"]],f:"POM — ray march dọc heightmap. Chất lượng cao, parallax sâu với tự-occlusion. Tốn performance hơn parallax thường."},
{n:"Bidirectional Parallax Mapping",cat:"Parallax",sc:"",tags:[],p:[["UV","UV đầu vào"],["Height","Heightmap [0−1]"],["View Dir","View tangent"],["Light Dir","Light tangent"],["Amplitude","Độ sâu"]],f:"Parallax hai chiều (view + light). Bóng self-shadow từ parallax."}
]},
/* ─── LIGHT ─── */
{id:"light",label:"Light",ico:"☀",cls:"glight",desc:"Hướng ánh sáng, màu, ambient, shadow, lightmap...",nodes:[
{n:"World Space Light Dir",cat:"",sc:"",tags:[],p:[],f:"Hướng ánh sáng chính (directional light) trong World space (not normalized). Normalize trước khi dùng Dot."},
{n:"Light Color",cat:"",sc:"",tags:[],p:[],f:"Màu + cường độ ánh sáng chính (_LightColor0). Tích hợp vào custom lighting."},
{n:"Indirect Diffuse Light",cat:"",sc:"",tags:[],p:[["Normal","World normal"]],f:"Ánh sáng diffuse gián tiếp (GI / ambient SH) dựa trên normal. ShadeSH9."},
{n:"Ambient Light",cat:"",sc:"",tags:[],p:[],f:"Màu ambient (unity_AmbientSky / unity_AmbientGround / unity_AmbientEquator tùy mode)."},
{n:"Light Attenuation",cat:"",sc:"",tags:[],p:[["World Pos","Vị trí World space"]],f:"Attenuation ánh sáng (bao gồm shadow attenuation nếu có) tại World Pos. Cần ShadowCoords."},
{n:"Lightmap Decode Values",cat:"",sc:"",tags:[],p:[],f:"unity_Lightmap_HDR — decode HDR lightmap (scale + exponent)."},
{n:"Decoded Lightmap",cat:"",sc:"",tags:[],p:[["UV","Lightmap UV (TEXCOORD1)"]],f:"Sample và decode lightmap từ UV. Kết hợp với Albedo cho baked lighting."},
{n:"Decode Directional Lightmap",cat:"",sc:"",tags:[],p:[["Lightmap Color","Decoded lightmap"],["Lightmap Dir","Directional lightmap"],["Normal","World normal"]],f:"Ánh sáng bake định hướng — lấy half-Lambert từ lightmap directional channel."}
]},
/* ─── TIME ─── */
{id:"time",label:"Time",ico:"⏱",cls:"gtime",desc:"Thời gian Unity: _Time, delta, sin/cos time...",nodes:[
{n:"Time",cat:"",sc:"",tags:[],p:[],f:"_Time Vector4: (t/20, t, 2t, 3t). Chọn thành phần bằng swizzle. Dùng cho animation theo thời gian."},
{n:"Delta Time",cat:"",sc:"",tags:[],p:[],f:"_DeltaTime: (dt, 1/dt, smoothDt, 1/smoothDt). Delta time frame-independent."},
{n:"Sin Time",cat:"",sc:"",tags:[],p:[],f:"_SinTime: sin(_Time) các tần số khác nhau. Wave animation không cần thêm Sin node."},
{n:"Cos Time",cat:"",sc:"",tags:[],p:[],f:"_CosTime: cos(_Time) các tần số khác nhau. Wave animation vuông pha với Sin."},
{n:"Time Parameters",cat:"",sc:"",tags:[],p:[],f:"Gói tất cả time uniforms: Time, SinTime, CosTime, DeltaTime. Chọn output cần qua thành phần."}
]},
/* ─── FUNCTIONS ─── */
{id:"functions",label:"Functions",ico:"ƒ",cls:"gfunc",desc:"Composite nodes: Grayscale, Hue Shift, Color Mask, Fresnel, PBR utility...",nodes:[
{n:"Grayscale",cat:"Color",sc:"G",tags:[],p:[["In","Color RGB/RGBA"]],f:"Chuyển màu sang grayscale theo Luminance. 0.299R + 0.587G + 0.114B."},
{n:"Hue",cat:"Color",sc:"",tags:[],p:[["In","Color RGB"],["Offset","Góc hue [0–1] = 360°"]],f:"Dịch chuyển Hue của màu trong không gian HSV. Color shifting effect."},
{n:"Saturation",cat:"Color",sc:"",tags:[],p:[["In","Color RGB"],["Saturation","0=grayscale, 1=gốc, >1=tăng bão hòa"]],f:"Điều chỉnh saturation. Kết hợp lerp từ grayscale."},
{n:"Contrast",cat:"Color",sc:"",tags:[],p:[["In","Color RGB"],["Contrast","Hệ số, 1=gốc"]],f:"Tăng/giảm contrast màu quanh trung điểm 0.5."},
{n:"Color Mask",cat:"Color",sc:"",tags:[],p:[["Color","Màu nguồn"],["Mask Color","Màu cần mask"],["Range","Bán kính so sánh"],["Smoothness","Độ mềm biên"]],f:"Tạo mask từ vùng màu chỉ định. Chọn/loại trừ pixel theo màu. Chroma key, selection mask."},
{n:"Blend",cat:"Blend",sc:"",tags:[],p:[["A","Layer dưới"],["B","Layer trên"],["Blend","Blend mode dropdown"],["Opacity","Mức độ blend [0−1]"]],f:"Blend hai màu/texture theo các mode: Multiply, Screen, Overlay, HardLight, Lerp... Giống layer blend trong Photoshop."},
{n:"Lerp",cat:"Blend",sc:"L",tags:[],p:[["A","Giá trị A"],["B","Giá trị B"],["Alpha","Blend factor [0−1]"]],f:"Nội suy tuyến tính. Xem thêm ở Math Operators."},
{n:"Color Balance",cat:"Color",sc:"",tags:[],p:[["In","Color RGB"],["Cyan Red","Shift cyan↔red"],["Magenta Green","Shift magenta↔green"],["Yellow Blue","Shift yellow↔blue"]],f:"Điều chỉnh cân bằng màu kiểu Photoshop Color Balance."},
{n:"Fresnel",cat:"Lighting",sc:"",tags:[],p:[["Bias","Offset cơ bản [0−1]"],["Scale","Nhân cường độ"],["Power","Sharpness rìa"]],f:"Hiệu ứng Fresnel: phản chiếu mạnh hơn ở góc grazing. Rim light, force field, glass edge, wax."},
{n:"Constant Bias Scale",cat:"Utility",sc:"",tags:[],p:[["In","Giá trị"],["Bias","Offset cộng vào"],["Scale","Hệ số nhân sau bias"]],f:"(In + Bias) * Scale. Remap nhanh giá trị, thường dùng để chuyển normal từ [−1,1] → [0,1]."},
{n:"Box Mask",cat:"Mask",sc:"",tags:[],p:[["UV","Tọa độ UV"],["Center","Tâm hộp (V2)"],["Width","Nửa chiều rộng"],["Height","Nửa chiều cao"],["Smooth","Softness"]],f:"Mask hình chữ nhật trong không gian UV. Gradient biên tùy chỉnh."},
{n:"Cool Wave",cat:"Procedural",sc:"",tags:[],p:[["UV","UV đầu vào"],["Speed","Tốc độ chuyển động"],["Width","Độ rộng sóng"],["Intensity","Cường độ sóng"]],f:"Sóng gợn nước procedural. Kết hợp sin waves theo UV."},
{n:"Derive Tangent Basis",cat:"Utility",sc:"",tags:[],p:[["World Pos","World Position"],["UV","UV tọa độ"]],f:"Tính TBN matrix từ dFdx/dFdy screen-space — không cần vertex tangent. Fragment stage only."},
{n:"Cotangent Frame",cat:"Utility",sc:"",tags:[],p:[["World Pos","World Position"],["World Normal","World Normal"],["UV","UV tọa độ"]],f:"Tính ma trận cotangent frame (TBN) thủ công. Dùng với perturb_normal để áp normal map không cần tangent."},
{n:"Detail Albedo",cat:"Blend",sc:"",tags:[],p:[["Base","Albedo chính"],["Detail","Albedo chi tiết"],["Mask","Cường độ detail [0−1]"]],f:"Blend detail albedo theo kiểu Unity Standard: 2 × Base × Detail (overlay-like). Tăng chi tiết texture."},
{n:"BlinnPhong Light Wrap",cat:"Lighting",sc:"",tags:[],p:[["Normal","World Normal"],["Light Dir","World Light Dir"],["Wrap","Wrap amount [0−1]"]],f:"Wrapped Lambert: (dot(N,L) + wrap) / (1+wrap). Soft diffuse cả mặt tối, dùng cho da/vải."},
{n:"Burn Effect",cat:"Procedural",sc:"",tags:[],p:[["Noise","Noise texture [0−1]"],["Threshold","Mức burn [0−1]"],["Edge Width","Độ rộng viền cháy"],["Edge Color","Màu viền"]],f:"Hiệu ứng cháy/dissolve: clip theo noise + glow viền. Dùng với Alpha Clip."},
{n:"Scale And Offset",cat:"Utility",sc:"Z",tags:[],p:[["In","Giá trị đầu vào"],["Scale","Hệ số nhân"],["Offset","Cộng thêm"]],f:"In * Scale + Offset. Xem ở Math Operators."}
]},
/* ─── IMAGE EFFECTS ─── */
{id:"imageeffects",label:"Image Effects",ico:"✦",cls:"gfx",desc:"Post-process node: Vignette, Sharpen, Channel Mixer...",nodes:[
{n:"Vignette",cat:"",sc:"",tags:[],p:[["UV","Screen UV"],["Center","Tâm (V2, default 0.5,0.5)"],["Intensity","Cường độ tối rìa"],["Smoothness","Mềm biên"]],f:"Làm tối rìa màn hình (vignette effect). Post-processing, film look, focus effect."},
{n:"Channel Mixer",cat:"Color",sc:"",tags:[],p:[["R","Output R kết hợp RGB"],["G","Output G kết hợp RGB"],["B","Output B kết hợp RGB"]],f:"Trộn lại các kênh RGB. Mỗi output là tổ hợp tuyến tính R,G,B nguồn. Color grading, channel swap."},
{n:"Sharpen",cat:"Filter",sc:"",tags:[],p:[["Tex","Texture Object"],["UV","UV tọa độ"],["Intensity","Mức sắc nét"]],f:"Làm sắc nét texture bằng unsharp mask. Tăng detail cảm nhận."},
{n:"Blur",cat:"Filter",sc:"",tags:[],p:[["Tex","Texture Object"],["UV","UV tọa độ"],["Size","Kernel size"]],f:"Làm mờ texture (box/Gaussian blur đơn giản trong UV space). Soft mask, fake DoF."},
{n:"Posterize",cat:"Color",sc:"",tags:[],p:[["In","Giá trị"],["Steps","Số bước lượng tử hóa"]],f:"Làm phẳng thành N mức riêng biệt. Cel-shading toon, stylized look."}
]},
/* ─── LOGICAL OPERATORS ─── */
{id:"logical",label:"Logical Operators",ico:"⁇",cls:"glogic",desc:"So sánh, rẽ nhánh, switch, debug, keyword shader variant",nodes:[
{n:"Compare (A == B)",cat:"Compare",sc:"",tags:[],p:[["A","Giá trị A"],["B","Giá trị B"],["True","Kết quả nếu đúng"],["False","Kết quả nếu sai"]],f:"Trả về True nếu A == B. GPU chạy cả hai nhánh — không phải if/else thực sự."},
{n:"Compare (A != B)",cat:"Compare",sc:"",tags:[],p:[["A","Giá trị A"],["B","Giá trị B"],["True","Kết quả nếu đúng"],["False","Kết quả nếu sai"]],f:"Trả về True nếu A ≠ B."},
{n:"Compare (A < B)",cat:"Compare",sc:"",tags:[],p:[["A","Giá trị A"],["B","Giá trị B"],["True","Kết quả nếu đúng"],["False","Kết quả nếu sai"]],f:"Trả về True nếu A < B."},
{n:"Compare (A > B)",cat:"Compare",sc:"",tags:[],p:[["A","Giá trị A"],["B","Giá trị B"],["True","Kết quả nếu đúng"],["False","Kết quả nếu sai"]],f:"Trả về True nếu A > B."},
{n:"Compare (A <= B)",cat:"Compare",sc:"",tags:[],p:[["A","Giá trị A"],["B","Giá trị B"],["True","Kết quả nếu đúng"],["False","Kết quả nếu sai"]],f:"Trả về True nếu A ≤ B."},
{n:"Compare (A >= B)",cat:"Compare",sc:"",tags:[],p:[["A","Giá trị A"],["B","Giá trị B"],["True","Kết quả nếu đúng"],["False","Kết quả nếu sai"]],f:"Trả về True nếu A ≥ B."},
{n:"Compare With Range",cat:"Compare",sc:"",tags:[],p:[["In","Giá trị so sánh"],["Min","Giới hạn dưới"],["Max","Giới hạn trên"],["True","Kết quả nếu trong range"],["False","Kết quả nếu ngoài range"]],f:"True nếu Min ≤ In ≤ Max. Mask theo vùng giá trị."},
{n:"If",cat:"Branch",sc:"",tags:[],p:[["A","Giá trị A"],["B","Giá trị B"],["A > B","Kết quả khi A > B"],["A == B","Kết quả khi A == B"],["A < B","Kết quả khi A < B"]],f:"Rẽ nhánh 3 chiều. GPU chạy tất cả 3 nhánh. Tránh dùng nhiều cho performance."},
{n:"Static Switch",cat:"Branch",sc:"",tags:[],p:[["On","Giá trị khi bật"],["Off","Giá trị khi tắt"]],f:"Biên dịch shader variant: khi Off, code không được compile. Không tốn runtime. Dùng để bật/tắt feature."},
{n:"Toggle Switch",cat:"Branch",sc:"",tags:[],p:[["On","Giá trị khi On"],["Off","Giá trị khi Off"]],f:"Switch runtime theo property Boolean. Thay đổi được trên Inspector/Material. Không tạo variant."},
{n:"Debug Switch",cat:"Debug",sc:"",tags:[],p:[["Input 0","Option 0"],["Input 1","Option 1"],["Input 2","Option 2"],["Input 3","Option 3"],["Input 4","Option 4"],["Select","Index 0–4"]],f:"Chọn một trong 5 đầu vào để output — debug xem giá trị trung gian nào. Không dùng production."},
{n:"Material Quality",cat:"Branch",sc:"",tags:[],p:[["High","Khi Quality = High"],["Medium","Khi Quality = Medium"],["Low","Khi Quality = Low"]],f:"Rẽ nhánh theo _material_quality macro. Tối ưu nội dung theo GPU tier."},
{n:"Template Multi-Pass Switch",cat:"Branch",sc:"",tags:[],p:[["Pass 0","Giá trị Pass 0"],["Pass 1","Giá trị Pass 1"],["Pass 2","Giá trị Pass 2 (tùy chọn)"]],f:"Chọn giá trị riêng theo từng Pass trong multi-pass template. Outline pass, shadow pass khác nhau."}
]},
/* ─── MISCELLANEOUS ─── */
{id:"misc",label:"Miscellaneous",ico:"⚙",cls:"gutil",desc:"Custom Expression, Shader Function, Comment, Relay, Switch By Precision...",nodes:[
{n:"Custom Expression",cat:"",sc:"E",tags:[],p:[],f:"Viết HLSL tùy chỉnh inline (String mode) hoặc từ file .hlsl (File mode). Khi Shader Graph không đủ node. Input/Output port tùy chỉnh."},
{n:"Function Node",cat:"",sc:"",tags:[],p:[],f:"Gọi một Shader Function asset (.asset). Tái sử dụng logic qua nhiều shader, tương tự Material Function trong UE5."},
{n:"Comment",cat:"",sc:"",tags:[],p:[],f:"Khung chú thích / group nhóm nodes. Không ảnh hưởng shader. Kéo nodes vào để tổ chức graph."},
{n:"Relay",cat:"",sc:"",tags:[],p:[["In","Bất kỳ"]],f:"Node rỗng redirect dây nối (wire reroute). Double-click trên wire để tạo. Giúp graph gọn gàng."},
{n:"Set Local Var",cat:"Variable",sc:"",tags:[],p:[["In","Giá trị cần lưu"],["Name","Tên biến"]],f:"Gán giá trị vào biến cục bộ. Tránh duplicate computation — kết hợp với Get Local Var."},
{n:"Get Local Var",cat:"Variable",sc:"",tags:[],p:[["Name","Tên biến (dropdown)"]],f:"Lấy lại giá trị đã lưu bởi Set Local Var. Tái sử dụng kết quả tính toán phức tạp mà không tính lại."},
{n:"Switch By Precision",cat:"",sc:"",tags:[],p:[["Half","Giá trị khi precision = half"],["Float","Giá trị khi precision = float"]],f:"Chọn path theo precision mode của shader. Tối ưu mobile (half) vs desktop (float)."},
{n:"Message",cat:"",sc:"",tags:[],p:[["In","Giá trị debug"]],f:"In giá trị ra Debug Log trong Unity Editor. Chỉ hoạt động với ASE live update / preview. Không xuất vào shader cuối."}
]},
/* ─── OUTPUT NODE (MASTER) ─── */
{id:"output",label:"Output Node (Master)",ico:"▣",cls:"gd",desc:"Node đầu ra cuối cùng — cấu hình shader type, blend mode, các kênh PBR",nodes:[
{n:"Albedo",cat:"Fragment",sc:"",tags:[],p:[["Albedo","Vector3 RGB màu cơ bản"]],f:"Màu cơ bản (diffuse/albedo) vật liệu Standard. Kết hợp với AO, lighting để ra màu cuối. Surface shader output."},
{n:"Normal",cat:"Fragment",sc:"",tags:[],p:[["Normal","Vector3 tangent-space normal (XYZ)"]],f:"Normal map ở tangent space. Kết nối sau Unpack Scale Normal. Ảnh hưởng lighting, specular."},
{n:"Emission",cat:"Fragment",sc:"",tags:[],p:[["Emission","Vector3 RGB (HDR)"]],f:"Màu phát sáng HDR. Giá trị > 1 kết hợp Bloom post-effect tạo glow."},
{n:"Metallic",cat:"Fragment",sc:"",tags:[],p:[["Metallic","Float [0−1]"]],f:"Mức metallic. 0 = dielectric, 1 = full metal. Workflow Metallic/Roughness."},
{n:"Smoothness",cat:"Fragment",sc:"",tags:[],p:[["Smoothness","Float [0−1]"]],f:"Độ mịn bề mặt. 0=matte, 1=mirror. Nghịch đảo của Roughness."},
{n:"Occlusion",cat:"Fragment",sc:"",tags:[],p:[["Occlusion","Float [0−1]"]],f:"Ambient Occlusion: 0=bị che khuất, 1=sáng hoàn toàn. Giảm indirect lighting tại rãnh, kẽ hở."},
{n:"Translucency",cat:"Fragment",sc:"",tags:[],p:[["Translucency","Float [0−1]"]],f:"Độ xuyên sáng (subsurface scattering đơn giản). Lá cây, tai, vải mỏng."},
{n:"Alpha",cat:"Fragment",sc:"",tags:[],p:[["Alpha","Float [0−1]"]],f:"Độ trong suốt. Cần Surface Type=Transparent hoặc Alpha Clip để hiệu lực."},
{n:"Alpha Clip Threshold",cat:"Fragment",sc:"",tags:[],p:[["Threshold","Float [0−1]"]],f:"Ngưỡng cắt cutout (Alpha Test). Pixel bị discard nếu Alpha < Threshold."},
{n:"Local Vertex Offset",cat:"Vertex",sc:"",tags:[],p:[["Offset","Vector3 offset trong Object space"]],f:"Dịch chuyển vertex theo hướng tùy chỉnh (displacement). Wind, water surface, morph."},
{n:"Local Vertex Normal",cat:"Vertex",sc:"",tags:[],p:[["Normal","Vector3 override normal"]],f:"Override normal tại vertex stage. Đồng bộ với displacement để lighting đúng."},
{n:"Local Vertex Position",cat:"Vertex",sc:"",tags:[],p:[["Position","Vector3 vị trí vertex mới"]],f:"Thay thế hoàn toàn vị trí vertex (dùng thay LocalVertexOffset nếu cần absolute position)."},
{n:"Tessellation",cat:"Tessellation",sc:"",tags:[],p:[["Tessellation","Float mức tessellation"]],f:"Mức chia nhỏ geometry (tessellation factor). Cần bật Tessellation trong Output Node settings."},
{n:"Tessellation Displacement",cat:"Tessellation",sc:"",tags:[],p:[["Height","Heightmap [0−1]"],["Scale","Biên độ displacement"]],f:"Displacement theo heightmap kết hợp tessellation. Terrain, rocks, skin pores."}
]}
];