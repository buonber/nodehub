const DATA_DEFAULT = [
/* ─── MATH ─── */
{id:"math",label:"Math",ico:"∑",cls:"gm",desc:"Số học, lượng giác, logic trên scalar & vector",nodes:[
{n:"Add",cat:"",sc:"A+click",tags:[],p:[["A","Đầu vào 1"],["B","Đầu vào 2"]],f:"A+B theo từng kênh. Làm sáng màu, offset UV."},
{n:"Subtract",cat:"",sc:"",tags:[],p:[["A","Số bị trừ"],["B","Số trừ"]],f:"A−B theo từng kênh. Làm tối màu, tạo mask âm."},
{n:"Multiply",cat:"",sc:"M+click",tags:[],p:[["A","Đầu vào 1"],["B","Hệ số nhân"]],f:"A×B theo từng kênh. Tint màu, scale cường độ, áp mask."},
{n:"Divide",cat:"",sc:"",tags:[],p:[["A","Tử số"],["B","Mẫu số ≠ 0"]],f:"A÷B theo từng kênh. Cẩn thận chia cho 0."},
{n:"Abs",cat:"",sc:"",tags:[],p:[["Input","Giá trị bất kỳ"]],f:"Giá trị tuyệt đối |Input|. Biến số âm thành dương."},
{n:"Ceil",cat:"",sc:"",tags:[],p:[["Input","Số thực"]],f:"Làm tròn lên đến số nguyên gần nhất. ceil(0.1)=1."},
{n:"Floor",cat:"",sc:"",tags:[],p:[["Input","Số thực"]],f:"Làm tròn xuống. floor(0.9)=0."},
{n:"Round",cat:"",sc:"",tags:[],p:[["Input","Số thực"]],f:"Làm tròn đến số nguyên gần nhất."},
{n:"Truncate",cat:"",sc:"",tags:[],p:[["Input","Số thực"]],f:"Bỏ phần thập phân không làm tròn. trunc(−1.7)=−1."},
{n:"Frac",cat:"",sc:"",tags:[],p:[["Input","Số thực"]],f:"Phần thập phân: Frac(1.7)=0.7. Pattern lặp, UV tile."},
{n:"Fmod",cat:"",sc:"",tags:[],p:[["A","Số bị chia"],["B","Modulo"]],f:"Phần dư dấu phẩy động A mod B (tương tự % trong code)."},
{n:"Power",cat:"",sc:"",tags:[],p:[["Base","Cơ số"],["Exp","Số mũ"]],f:"Base^Exp. Remap đường cong Roughness, phân bố ánh sáng."},
{n:"Sqrt",cat:"",sc:"",tags:[],p:[["Input","Số ≥ 0"]],f:"√Input. Tính khoảng cách, normalize thủ công."},
{n:"Exp",cat:"",sc:"",tags:[],p:[["Input","Số mũ"]],f:"e^Input. Falloff theo hàm mũ tự nhiên."},
{n:"Exp2",cat:"",sc:"",tags:[],p:[["Input","Số mũ"]],f:"2^Input."},
{n:"Log",cat:"",sc:"",tags:[],p:[["X","Số > 0"]],f:"Logarithm tự nhiên ln(X)."},
{n:"Log2",cat:"",sc:"",tags:[],p:[["X","Số > 0"]],f:"Logarithm cơ số 2."},
{n:"Log10",cat:"",sc:"",tags:[],p:[["X","Số > 0"]],f:"Logarithm cơ số 10."},
{n:"Clamp",cat:"",sc:"",tags:[],p:[["Input","Giá trị"],["Min","Giới hạn dưới (mặc định 0)"],["Max","Giới hạn trên (mặc định 1)"]],f:"Kẹp Input trong [Min, Max]. Ngăn overflow và giá trị ngoài dải."},
{n:"Saturate",cat:"",sc:"",tags:[],p:[["Input","Giá trị"]],f:"Clamp(0,1) được tối ưu trên GPU. Nhanh hơn Clamp node."},
{n:"Min",cat:"",sc:"",tags:[],p:[["A","Giá trị 1"],["B","Giá trị 2"]],f:"Giá trị nhỏ hơn giữa A và B theo từng kênh."},
{n:"Max",cat:"",sc:"",tags:[],p:[["A","Giá trị 1"],["B","Giá trị 2"]],f:"Giá trị lớn hơn giữa A và B theo từng kênh."},
{n:"Sign",cat:"",sc:"",tags:[],p:[["Input","Số"]],f:"−1 nếu âm, 0 nếu =0, +1 nếu dương."},
{n:"OneMinus",cat:"",sc:"",tags:[],p:[["Input","Giá trị"]],f:"1−Input. Đảo ngược mask, invert alpha."},
{n:"Lerp",cat:"",sc:"L+click",tags:[],p:[["A","Điểm đầu"],["B","Điểm cuối"],["Alpha","[0–1]"]],f:"Nội suy tuyến tính A*(1−α)+B*α. Blend màu, roughness, texture."},
{n:"LinearInterpolate",cat:"",sc:"",tags:[],p:[["A","Đầu"],["B","Cuối"],["Alpha","[0–1]"]],f:"Tương đương Lerp. Alias dùng trong Material Functions."},
{n:"Smoothstep",cat:"",sc:"",tags:[],p:[["Min","Ngưỡng dưới"],["Max","Ngưỡng trên"],["Value","Đầu vào"]],f:"Nội suy Hermite cubic mượt từ 0→1 khi Value đi từ Min→Max."},
{n:"Step",cat:"",sc:"",tags:[],p:[["Y","Ngưỡng"],["X","Giá trị so sánh"]],f:"0 nếu X<Y, 1 nếu X≥Y. Hard cutoff không có transition."},
{n:"Sine",cat:"",sc:"",tags:[],p:[["Input","0–1 = một chu kỳ đầy đủ"]],f:"sin(Input×2π). Animation lắc lư, sóng."},
{n:"Cosine",cat:"",sc:"",tags:[],p:[["Input","0–1 = một chu kỳ"]],f:"cos(Input×2π). Giống Sine nhưng lệch pha 90°."},
{n:"Tangent",cat:"",sc:"",tags:[],p:[["Input","0–1 = một chu kỳ"]],f:"tan(Input×2π)."},
{n:"ArcSine",cat:"",sc:"",tags:[],p:[["Input","[−1,1]"]],f:"Arcsin — nghịch đảo Sine."},
{n:"ArcCosine",cat:"",sc:"",tags:[],p:[["Input","[−1,1]"]],f:"Arccos — nghịch đảo Cosine."},
{n:"ArcTangent",cat:"",sc:"",tags:[],p:[["Input","Số thực"]],f:"Arctan — góc từ tỷ số. Kết quả [−π/2, π/2]."},
{n:"ArcTangent2",cat:"",sc:"",tags:[],p:[["Y","Thành phần Y"],["X","Thành phần X"]],f:"Atan2(Y,X) — góc đầy đủ [−π,π]. Chính xác hơn ArcTangent."},
{n:"Cross",cat:"",sc:"",tags:[],p:[["A","Vector 3D"],["B","Vector 3D"]],f:"Tích có hướng A×B. Kết quả vuông góc cả hai. Tính bitangent, normal procedural."},
{n:"Dot",cat:"",sc:"D+click",tags:[],p:[["A","Vector"],["B","Vector"]],f:"Tích vô hướng Σ(Aᵢ×Bᵢ). Tính góc, diffuse NdotL."},
{n:"Normalize",cat:"",sc:"",tags:[],p:[["VectorInput","Vector"]],f:"Đưa vector về độ dài =1. Bắt buộc trước Dot/Cross với normal."},
{n:"Length",cat:"",sc:"",tags:[],p:[["Input","Vector"]],f:"Độ dài (magnitude) của vector."},
{n:"Distance",cat:"",sc:"",tags:[],p:[["A","Điểm A"],["B","Điểm B"]],f:"Khoảng cách Euclidean |A−B|. Mask theo khoảng cách từ một điểm."},
{n:"DDX",cat:"",sc:"",tags:[],p:[["Input","Giá trị"]],f:"Đạo hàm theo X screen-space (dFdx). Tính normal từ heightmap."},
{n:"DDY",cat:"",sc:"",tags:[],p:[["Input","Giá trị"]],f:"Đạo hàm theo Y screen-space (dFdy). Cặp với DDX tính tangent normal."},
{n:"DeriveNormalZ",cat:"",sc:"",tags:[],p:[["InXY","XY của normal (float2)"]],f:"Suy ra Z từ XY normal map. Tiết kiệm 1 kênh texture storage."},
{n:"ConstantBiasScale",cat:"",sc:"",tags:[],p:[["Input","Giá trị gốc"],["Bias","Cộng thêm"],["Scale","Nhân sau"]],f:"(Input + Bias) × Scale. Remap [0,1]→[−1,1]: Bias=−0.5, Scale=2. Dùng cho Normal map."}
]},
/* ─── TEXTURE SAMPLING ─── */
{id:"texture",label:"Texture Sampling",ico:"🖼",cls:"gt",desc:"Lấy mẫu Texture 2D, Cube, Volume, Array, External",nodes:[
{n:"TextureSample",cat:"",sc:"T+click",tags:[],p:[["UVs","Tọa độ UV"],["Tex","Texture Asset 2D"],["MipValueMode","None/DERIV/Level/Bias"]],f:"Node cơ bản lấy màu RGBA từ Texture 2D. Xuất R,G,B,A,RGB riêng lẻ."},
{n:"TextureSampleParameter2D",cat:"",sc:"",tags:[],p:[["UVs","UV"],["Tex","Default texture"],["Parameter Name","Tên override trong Instance"]],f:"Texture có thể thay thế qua Material Instance hoặc Blueprint runtime."},
{n:"TextureSampleParameterCube",cat:"",sc:"",tags:[],p:[["UVW","Hướng 3D"],["Tex","Cubemap Asset"]],f:"Lấy mẫu Cubemap (Reflection Capture, IBL). Đầu vào là hướng vector 3D."},
{n:"TextureSampleParameter2DArray",cat:"",sc:"",tags:[],p:[["UVs","UV 2D"],["Index","Layer index"],["Tex","Texture2DArray"]],f:"Lấy mẫu một layer trong Texture Array. Hữu ích cho terrain variant, animation."},
{n:"TextureSampleParameterVolume",cat:"",sc:"",tags:[],p:[["UVW","Tọa độ 3D"],["Tex","VolumeTexture"]],f:"Lấy mẫu Volume Texture 3D. Hiệu ứng thể tích (fog, fire, density field)."},
{n:"TextureSampleParameterSubUV",cat:"",sc:"",tags:[],p:[["Flipbook_H","Số cột"],["Flipbook_V","Số hàng"],["Tex","Flipbook texture"],["UVs","UV gốc"]],f:"Lấy mẫu sprite sheet / flipbook animation cho Particle System."},
{n:"TextureSampleParameterExternal",cat:"",sc:"",tags:[],p:[["UVs","UV"],["Parameter Name","Tên param"]],f:"Lấy mẫu External Texture (video feed từ platform). Hỗ trợ hạn chế theo platform."},
{n:"TextureObject",cat:"",sc:"",tags:[],p:[["Tex","Texture Asset"]],f:"Truyền Texture Object vào Material Function không lấy mẫu. Dùng với TextureSample."},
{n:"TextureObjectParameter",cat:"",sc:"",tags:[],p:[["Parameter Name","Tên"],["Tex","Default"]],f:"Texture Object có thể override qua Instance. Dùng trong Material Function linh hoạt."},
{n:"TextureProperty",cat:"",sc:"",tags:[],p:[["InTexture","Texture"],["Property","Width/Height/TexelSize/DepthSize"]],f:"Lấy metadata kích thước texture. Tính UV offset theo texel size."},
{n:"SceneColor",cat:"",sc:"",tags:[],p:[["UV/OffsetFraction","Screen UV hoặc offset"]],f:"Đọc màu scene tại điểm trên màn hình. Chỉ hoạt động với Translucent material."},
{n:"SceneTexture",cat:"",sc:"",tags:[],p:[["UV","Screen UV"],["SceneTextureId","GBuffer channel: BaseColor/Specular/Roughness/Normal/..."]],f:"Truy cập GBuffer channels trực tiếp. Dùng trong PostProcess material."},
{n:"ParticleSubUV",cat:"",sc:"",tags:[],p:[["Tex","Flipbook"],["SubImages_H","Cột"],["SubImages_V","Hàng"]],f:"Flipbook animation cho particle sprite. Tự động chuyển frame theo thời gian."},
{n:"SpriteTextureSampler",cat:"",sc:"",tags:[],p:[["SpriteTexture","Texture param \"SpriteTexture\""]],f:"Auto-bind texture từ Sprite asset vào param \"SpriteTexture\". Dùng trong sprite material."},
{n:"CurveAtlasRowParameter",cat:"",sc:"",tags:[],p:[["Atlas","CurveLinearColorAtlas asset"],["Curve","CurveLinearColor asset"],["Parameter Name","Tên scalar param"],["Default Value","Vị trí mặc định [0–1]"],["InputTime","Giá trị tra cứu [0–1]"]],f:"<span class=\"tag ue5\">UE5</span>Lấy màu từ Curve Atlas theo InputTime. Remap màu linh hoạt qua curve. Override row trong Instance."}
]},
/* ─── CONSTANTS & WORLD ─── */
{id:"const",label:"Constants & World",ico:"#",cls:"gc",desc:"Hằng số scalar/vector, vị trí và dữ liệu môi trường",nodes:[
{n:"Constant",cat:"",sc:"1+click",tags:[],p:[["Value","Float"]],f:"Scalar hằng số 1 kênh. Phím tắt nhanh nhất để nhập một số."},
{n:"Constant2Vector",cat:"",sc:"2+click",tags:[],p:[["R/X","Kênh 1"],["G/Y","Kênh 2"]],f:"Vector 2D hằng (float2). UV scale/offset."},
{n:"Constant3Vector",cat:"",sc:"3+click",tags:[],p:[["R","Red/X"],["G","Green/Y"],["B","Blue/Z"]],f:"Vector 3D hoặc màu RGB. Click mở color picker inline."},
{n:"Constant4Vector",cat:"",sc:"4+click",tags:[],p:[["R","Red"],["G","Green"],["B","Blue"],["A","Alpha"]],f:"Vector 4D (RGBA). Bao gồm alpha channel."},
{n:"ReflectionVectorWS",cat:"",sc:"",tags:[],p:[["CustomWorldNormal","Normal custom (tùy chọn)"]],f:"Vector phản chiếu camera trong World Space. Lấy mẫu Cubemap reflection."},
{n:"CameraVectorWS",cat:"",sc:"",tags:[],p:[],f:"Hướng từ pixel về camera trong World Space. Dùng Fresnel, specular."},
{n:"CameraPositionWS",cat:"",sc:"",tags:[],p:[],f:"Vị trí camera trong World Space. Tính khoảng cách cam–surface."},
{n:"ActorPositionWS",cat:"",sc:"",tags:[],p:[],f:"Vị trí World Space của Actor chứa material. Không thay đổi theo pixel."},
{n:"ObjectPositionWS",cat:"",sc:"",tags:[],p:[],f:"Vị trí tâm Object (Pivot) trong World Space."},
{n:"ObjectRadius",cat:"",sc:"",tags:[],p:[],f:"Bán kính bounding sphere của Object."},
{n:"ObjectBounds",cat:"",sc:"",tags:[],p:[],f:"XYZ half-extents bounding box Object. Normalize vị trí trong object."},
{n:"ObjectOrientation",cat:"",sc:"",tags:[],p:[],f:"Vector \"up\" của Object trong World Space."},
{n:"ObjectLocalBounds",cat:"",sc:"",tags:[],p:[["OutputType","Half/Full Extents/ObjectPosition"]],f:"Bounding box local của object."},
{n:"LightmassReplace",cat:"",sc:"",tags:[],p:[["Realtime","Output real-time"],["Lightmass","Output khi bake"]],f:"Giá trị khác nhau tùy ngữ cảnh (realtime vs Lightmass bake)."},
{n:"EyeAdaptation",cat:"",sc:"",tags:[],p:[],f:"Hệ số auto-exposure (Eye Adaptation). Dùng PostProcess material."},
{n:"GIReplace",cat:"",sc:"",tags:[],p:[["Direct","Direct lighting"],["StaticIndirect","Baked GI"],["DynamicIndirect","Dynamic GI"]],f:"Override màu nhận GI khác với màu direct. Stylized look."},
{n:"LightVector",cat:"",sc:"",tags:[],p:[],f:"Hướng ánh sáng trong Tangent Space (dùng trong Light Function material)."},
{n:"PreSkinnedLocalBounds",cat:"",sc:"",tags:[],p:[["OutputType","Half/Full Extents/Position"]],f:"<span class=\"tag ue5\">UE5</span>Bounding box trước skinning. Dùng cho Skeletal Mesh procedural effect."},
{n:"PreviousFrameSwitch",cat:"",sc:"",tags:[],p:[["CurrentFrame","Frame hiện tại"],["PreviousFrame","Frame trước"]],f:"<span class=\"tag ue5\">UE5</span>Chọn nhánh dựa trên frame context (Motion Vector rendering)."}
]},
/* ─── COORDINATES ─── */
{id:"coords",label:"Coordinates",ico:"⊕",cls:"gu",desc:"UV, vị trí, hướng và hệ tọa độ không gian",nodes:[
{n:"TextureCoordinate",cat:"",sc:"U+click",tags:[],p:[["UTiling","Lặp theo U"],["VTiling","Lặp theo V"],["UnMirrorU/V","Tắt mirror"],["CoordinateIndex","UV channel (0=UV0, 1=UV1...)"]],f:"UV tọa độ của mesh. Tiling để scale; CoordinateIndex chọn UV channel."},
{n:"Panner",cat:"",sc:"",tags:[],p:[["Coordinate","UV gốc"],["Time","Thời gian"],["SpeedX","Tốc độ pan U"],["SpeedY","Tốc độ pan V"]],f:"Cuộn UV theo thời gian. Nước chảy, lửa, mây trôi."},
{n:"Rotator",cat:"",sc:"",tags:[],p:[["Coordinate","UV gốc"],["Time","Thời gian"],["CenterX/Y","Tâm xoay [0–1]"],["Speed","Tốc độ xoay"]],f:"Xoay UV quanh tâm theo thời gian. Tua-bin, vòng xoáy."},
{n:"WorldPosition",cat:"",sc:"",tags:[],p:[["WorldPositionShaderOffset","Default/ExcludingMaterialOffsets/CameraRelative"]],f:"Vị trí World Space của pixel. Dùng làm UV tiling theo world (triplanar)."},
{n:"AbsoluteWorldPosition",cat:"",sc:"",tags:[],p:[],f:"World Position tuyệt đối không bị offset. Cần thiết khi camera-relative rendering."},
{n:"BumpOffset",cat:"",sc:"B+click",tags:[],p:[["Coordinate","UV gốc"],["Height","Heightmap grayscale"],["HeightRatio","Cường độ parallax"],["ReferencePlane","Mặt phẳng tham chiếu [0–1]"]],f:"Parallax Mapping — ảo giác chiều sâu không cần geometry thêm."},
{n:"ScreenPosition",cat:"",sc:"",tags:[],p:[["Mapping","SceneTextureUV/ViewportUV/PixelPosition"]],f:"Tọa độ màn hình của pixel (0–1 hoặc pixel coords). Screen-space effects."},
{n:"ViewSize",cat:"",sc:"",tags:[],p:[],f:"Kích thước viewport (width, height) tính bằng pixel."},
{n:"VertexNormalWS",cat:"",sc:"",tags:[],p:[],f:"Normal vertex trong World Space trước displacement. Vertex shader."},
{n:"PixelNormalWS",cat:"",sc:"",tags:[],p:[],f:"Normal pixel trong World Space sau khi áp normal map. Reflection, rim light."},
{n:"VertexTangentWS",cat:"",sc:"",tags:[],p:[],f:"Tangent vector của vertex trong World Space. Xây TBN matrix."},
{n:"VertexBinormalWS",cat:"",sc:"",tags:[],p:[],f:"Binormal (Bitangent) của vertex trong World Space."},
{n:"VertexColor",cat:"",sc:"",tags:[],p:[],f:"Vertex Color (RGBA) paint trên mesh. Mask blend layer, wind, v.v."},
{n:"TwoSidedSign",cat:"",sc:"",tags:[],p:[],f:"+1 nếu front-face, −1 nếu back-face. Đảo ngược normal cho two-sided material."},
{n:"PreSkinnedPosition",cat:"",sc:"",tags:[],p:[],f:"<span class=\"tag ue5\">UE5</span>Vị trí vertex trước skinning. Effect dựa trên bind-pose."},
{n:"PreSkinnedNormal",cat:"",sc:"",tags:[],p:[],f:"<span class=\"tag ue5\">UE5</span>Normal trước skinning."},
{n:"LightmapUVs",cat:"",sc:"",tags:[],p:[],f:"UV channel dùng cho Lightmap. Thường = UV channel 1."},
{n:"SpeedTreeWind",cat:"",sc:"",tags:[],p:[],f:"Output gió từ SpeedTree system để dùng với World Position Offset."},
{n:"ParticlePositionWS",cat:"",sc:"",tags:[],p:[],f:"Vị trí World Space của particle đang render."}
]},
/* ─── PARAMETERS ─── */
{id:"params",label:"Parameters",ico:"P",cls:"gp",desc:"Tham số override trong Material Instance & Blueprint",nodes:[
{n:"ScalarParameter",cat:"",sc:"",tags:[],p:[["Parameter Name","Tên duy nhất"],["Default Value","Float mặc định"],["Group","Nhóm trong MI Editor"],["Sort Priority","Thứ tự"],["Slider Min/Max","Giới hạn slider"]],f:"Giá trị float override qua Material Instance hoặc Set Scalar Parameter Value trong Blueprint."},
{n:"VectorParameter",cat:"",sc:"",tags:[],p:[["Parameter Name","Tên"],["Default Value","RGBA mặc định"],["Group","Nhóm"]],f:"Vector RGBA override qua Instance. Màu sắc, hướng, offsets."},
{n:"StaticBoolParameter",cat:"",sc:"",tags:[],p:[["Parameter Name","Tên"],["Default Value","true/false"]],f:"Boolean tĩnh — ảnh hưởng compile shader variant. Dùng với StaticSwitch."},
{n:"StaticSwitchParameter",cat:"",sc:"",tags:[],p:[["True","Output khi true"],["False","Output khi false"],["Parameter Name","Tên StaticBool"]],f:"Chọn nhánh theo StaticBool. Nhánh không dùng không compile → không tốn ALU."},
{n:"StaticComponentMaskParameter",cat:"",sc:"",tags:[],p:[["Input","Vector RGBA"],["R/G/B/A","Kênh nào xuất (toggle)"]],f:"Lọc kênh theo StaticBool. Mask linh hoạt qua Instance."},
{n:"DoubleVectorParameter",cat:"",sc:"",tags:[],p:[["Parameter Name","Tên"],["Default Value","float4 double precision"]],f:"<span class=\"tag ue5\">UE5</span>Vector 4D double precision. Tọa độ lớn (hành tinh, open world)."},
{n:"CollectionParameter",cat:"",sc:"",tags:[],p:[["Collection","Material Parameter Collection asset"],["Parameter Name","Tên param trong Collection"]],f:"Đọc từ Material Parameter Collection — chia sẻ params giữa nhiều material cùng lúc."},
{n:"CurveAtlasRowParameter",cat:"",sc:"",tags:[],p:[["Atlas","CurveLinearColorAtlas"],["Curve","CurveLinearColor"],["Parameter Name","Tên"],["Default Value","[0–1]"],["InputTime","Lookup time [0–1]"]],f:"<span class=\"tag ue5\">UE5</span>Lấy màu từ Curve Atlas theo InputTime. Remap màu theo curve vẽ thủ công, override qua Instance."},
{n:"CustomPrimitiveData",cat:"",sc:"",tags:[],p:[["DataIndex","Index (0–31)"],["DefaultValue","Float mặc định"]],f:"<span class=\"tag ue5\">UE5</span>Đọc per-instance Custom Primitive Data từ C++/Blueprint. Không cần tạo Material Instance."},
{n:"ShadingModel",cat:"",sc:"",tags:[],p:[["ShadingModel","Enum: Unlit/DefaultLit/Subsurface/..."]],f:"<span class=\"tag ue5\">UE5</span>Chỉ định shading model theo từng pixel. Kết hợp với pin Shading Model của Main node."}
]},
/* ─── UTILITY ─── */
{id:"utility",label:"Utility",ico:"⚙",cls:"gutil",desc:"Rẽ nhánh, switch, custom HLSL, attribute packing",nodes:[
{n:"If",cat:"",sc:"",tags:[],p:[["A","Giá trị 1"],["B","Giá trị 2"],["A > B","Output"],["A == B","Output"],["A < B","Output"]],f:"Rẽ nhánh so sánh A vs B. Cả hai nhánh đều compile."},
{n:"Switch",cat:"",sc:"",tags:[],p:[["Option_0..N","N options"],["Index","Chỉ số nhánh (integer)"]],f:"Chọn 1 trong N đầu ra theo Index nguyên."},
{n:"StaticSwitch",cat:"",sc:"",tags:[],p:[["True","Nhánh true"],["False","Nhánh false"],["Value","StaticBool/Param"]],f:"Nhánh không dùng không compile vào shader. Hiệu quả hơn If về shader size."},
{n:"Custom",cat:"",sc:"",tags:[],p:[["Inputs 0–N","Biến HLSL tùy ý"],["Code","HLSL code string"],["OutputType","Float1/2/3/4"],["IncludeFilePaths","Header files thêm vào"]],f:"Viết HLSL code tùy ý. Linh hoạt tối đa nhưng không có validation khi viết."},
{n:"Comment",cat:"",sc:"C+drag",tags:[],p:[],f:"Khung chú thích nhóm nodes. Không ảnh hưởng shader."},
{n:"Reroute",cat:"",sc:"",tags:[],p:[["Input","Kết nối đổi hướng"]],f:"Điểm relay đổi hướng dây nối. Không tốn performance."},
{n:"SetMaterialAttributes",cat:"",sc:"",tags:[],p:[["(nhiều pin input)","Tất cả attribute Main node"]],f:"Đóng gói Material Attributes vào 1 output struct. Nền tảng Layered Material."},
{n:"GetMaterialAttributes",cat:"",sc:"",tags:[],p:[["Material Attributes","Struct đầu vào"]],f:"Giải nén Material Attributes struct."},
{n:"BlendMaterialAttributes",cat:"",sc:"",tags:[],p:[["A","Attributes 1"],["B","Attributes 2"],["Alpha","[0–1]"]],f:"Trộn hai bộ Material Attributes. Nền tảng Layered Material system."},
{n:"MakeMaterialAttributes",cat:"",sc:"",tags:[],p:[["BaseColor/Metallic/...","Từng thuộc tính"]],f:"Tạo Material Attributes struct từ giá trị riêng lẻ."},
{n:"BreakMaterialAttributes",cat:"",sc:"",tags:[],p:[["Material Attributes","Struct"]],f:"Tách struct thành các giá trị riêng."},
{n:"QualitySwitch",cat:"",sc:"",tags:[],p:[["Default","Mặc định"],["Low","Low scalability"],["High","High scalability"]],f:"Chọn nhánh theo Engine Scalability setting. Tối ưu mobile/low-end."},
{n:"ShadingPathSwitch",cat:"",sc:"",tags:[],p:[["PathTracedOutput","Path Tracer"],["RasterOutput","Rasterizer"]],f:"<span class=\"tag ue5\">UE5</span>Chọn nhánh khác nhau giữa Path Tracer và Rasterizer."},
{n:"SphereMask",cat:"",sc:"",tags:[],p:[["A","Điểm test"],["B","Tâm hình cầu"],["Radius","Bán kính"],["Hardness","Độ cứng cạnh [0–1]"]],f:"Mask hình cầu — 1 bên trong, 0 bên ngoài, có feather. Mask theo khoảng cách từ tâm."},
{n:"RotateAboutAxis",cat:"",sc:"",tags:[],p:[["NormalizedRotationAxisAndAngle","Axis XYZ + góc W"],["PositionOnAxis","Điểm trên trục"],["Position","Điểm cần xoay"]],f:"Xoay vector quanh trục tùy ý. World Position Offset animation."},
{n:"DepthOfFieldFunction",cat:"",sc:"",tags:[],p:[["Depth","Override depth (tùy chọn)"]],f:"0=in focus, 1=blurred. Blend texture sắc/mờ theo DoF."},
{n:"Fresnel",cat:"",sc:"",tags:[],p:[["ExponentIn","Độ sắc cạnh (3–8)"],["BaseReflectFractionIn","Phản chiếu góc thẳng [0–1]"],["Normal","World Space normal (tùy chọn)"]],f:"Fresnel effect — viền sáng vật lý cho kính, nước, nhựa."},
{n:"BlackBody",cat:"",sc:"",tags:[],p:[["Temperature","Nhiệt độ Kelvin (1000–10000)"]],f:"Màu bức xạ blackbody vật lý. <3000K=đỏ cam, 6500K=trắng, >8000K=xanh. Lửa, kim loại nóng."},
{n:"ThinTranslucentMaterialOutput",cat:"",sc:"",tags:[],p:[["ColorScattering","Màu tán xạ"],["ColorTransmittance","Màu xuyên qua"]],f:"<span class=\"tag ue5\">UE5</span>Output vật lý cho kính tinted trong 1 pass. Tinted glass, plastic."},
{n:"AntialiasedTextureMask",cat:"",sc:"",tags:[],p:[["UVs","UV"],["Tex","Texture mask"],["Threshold","Ngưỡng cutoff"],["Channel","R/G/B/A"]],f:"Mask mượt chống răng cưa từ texture. Sắc nét hơn alpha cutout thông thường."}
]},
/* ─── VECTOR OPS ─── */
{id:"vector",label:"Vector Ops",ico:"→",cls:"gv",desc:"Kết hợp, tách, transform vectors giữa các không gian",nodes:[
{n:"AppendVector",cat:"",sc:"",tags:[],p:[["A","Vector (nhỏ hơn)"],["B","Vector/Scalar thêm vào"]],f:"Ghép hai vector. (R,G)+(B)=(R,G,B). Tái cấu trúc channels."},
{n:"ComponentMask",cat:"",sc:"",tags:[],p:[["Input","Vector RGBA"],["R/G/B/A","Tick kênh cần lấy"]],f:"Lọc chọn kênh của vector. Ví dụ: chỉ lấy R và B từ RGBA texture."},
{n:"Transform",cat:"",sc:"",tags:[],p:[["Input","Vector"],["TransformType","World↔Local↔Tangent↔View↔Camera"]],f:"Chuyển đổi không gian của vector hướng giữa các hệ tọa độ."},
{n:"TransformPosition",cat:"",sc:"",tags:[],p:[["Input","Position"],["TransformType","World↔Local↔Camera/View"]],f:"Chuyển đổi vị trí (có translation) giữa các không gian."},
{n:"InverseTransform",cat:"",sc:"",tags:[],p:[["Input","Vector"],["TransformType","World→Tangent..."]],f:"Nghịch đảo của Transform."},
{n:"InverseTransformPosition",cat:"",sc:"",tags:[],p:[["Input","Position"],["TransformType","World→Local..."]],f:"Nghịch đảo của TransformPosition."},
{n:"FlattenNormal",cat:"",sc:"",tags:[],p:[["Normal","Normal map"],["Flatness","0=giữ nguyên, 1=phẳng hoàn toàn"]],f:"Làm phẳng normal map từ từ. LOD, fade effect."},
{n:"MakeFloat2",cat:"",sc:"",tags:[],p:[["X","Kênh 1"],["Y","Kênh 2"]],f:"Tạo float2 từ hai scalar. Gọn hơn AppendVector."},
{n:"MakeFloat3",cat:"",sc:"",tags:[],p:[["X","R"],["Y","G"],["Z","B"]],f:"Tạo float3 từ ba scalar."},
{n:"MakeFloat4",cat:"",sc:"",tags:[],p:[["X","R"],["Y","G"],["Z","B"],["W","A"]],f:"Tạo float4 từ bốn scalar."},
{n:"DotProduct",cat:"",sc:"",tags:[],p:[["A","Vector"],["B","Vector"]],f:"Tích vô hướng (alias của Dot node)."},
{n:"CrossProduct",cat:"",sc:"",tags:[],p:[["A","Vector 3D"],["B","Vector 3D"]],f:"Tích có hướng (alias của Cross node)."},
{n:"BlendAngleCorrectedNormals",cat:"",sc:"",tags:[],p:[["BaseNormal","Normal gốc (tangent space)"],["AdditionalNormal","Normal lớp thêm"]],f:"Ghép hai normal map theo Reoriented Normal Mapping (RNM). Chính xác hơn Add/Overlay."}
]},
/* ─── COLOR ─── */
{id:"color",label:"Color",ico:"◉",cls:"gcol",desc:"Điều chỉnh màu sắc, contrast, bão hòa",nodes:[
{n:"Desaturation",cat:"",sc:"",tags:[],p:[["Input","Màu RGB"],["Fraction","0=màu, 1=xám"],["LuminanceFactors","Trọng số kênh (mặc định 0.3R+0.59G+0.11B)"]],f:"Chuyển màu sang thang xám theo mức độ chỉ định."},
{n:"CheapContrast",cat:"",sc:"",tags:[],p:[["In","Giá trị"],["Contrast","Hệ số"]],f:"Tăng/giảm contrast đơn giản ít ALU. Ít chính xác hơn S-curve."},
{n:"CheapContrast_RGB",cat:"",sc:"",tags:[],p:[["In","RGB"],["Contrast","Hệ số"]],f:"CheapContrast riêng từng kênh RGB."},
{n:"Contrast",cat:"",sc:"",tags:[],p:[["In","Màu"],["Contrast","Hệ số"]],f:"Điều chỉnh contrast dùng hàm S-curve chính xác hơn CheapContrast."},
{n:"HueShift",cat:"",sc:"",tags:[],p:[["Input","RGB"],["HueShiftPercent","0–1 = 0–360°"]],f:"Xoay hue trong không gian HSV."},
{n:"Saturation",cat:"",sc:"",tags:[],p:[["Input","RGB"],["Saturation","0=xám, 1=giữ, >1=tăng"]],f:"Điều chỉnh độ bão hòa màu."},
{n:"LinearToSRGB",cat:"",sc:"",tags:[],p:[["Input","Giá trị linear"]],f:"Linear → sRGB (gamma ~2.2). Cần khi xuất ra display."},
{n:"SRGBToLinear",cat:"",sc:"",tags:[],p:[["Input","Giá trị sRGB"]],f:"sRGB → linear. Thường tự động, cần khi xử lý thủ công."},
{n:"ColorRamp",cat:"",sc:"",tags:["ue5"],p:[["Input","Vector"]],f:"Dùng để chuyển một giá trị input thành dải màu gradient dựa trên nhiều mốc màu (color stops)."}
]},
/* ─── DEPTH ─── */
{id:"depth",label:"Depth",ico:"D",cls:"gd",desc:"Depth buffer, soft particles, DoF",nodes:[
{n:"PixelDepth",cat:"",sc:"",tags:[],p:[],f:"Khoảng cách từ camera đến pixel hiện tại. Fade theo khoảng cách."},
{n:"SceneDepth",cat:"",sc:"",tags:[],p:[["UV/OffsetFraction","Screen UV"],["InputMode","ExpressionInput/ScreenPosition"]],f:"Đọc depth buffer scene. Soft particles, intersection glow. Chỉ với Translucent."},
{n:"DepthFade",cat:"",sc:"",tags:[],p:[["InOpacity","Opacity ban đầu"],["FadeDistance","Khoảng cách fade (world units)"]],f:"Auto fade opacity gần bề mặt opaque. Soft edge cho particles, fog card, water edge."},
{n:"SceneTexelSize",cat:"",sc:"",tags:[],p:[],f:"Kích thước 1 texel scene (1/width, 1/height). Sample offset screen-space."},
{n:"CameraDepthFade",cat:"",sc:"",tags:[],p:[["InOpacity","Opacity"],["FadeLength","Độ dài fade"],["MaxOpacity","Max opacity"],["Bias","Khoảng cách bắt đầu"]],f:"Fade opacity theo khoảng cách camera. Fade ra xa."}
]},
/* ─── ATMOSPHERE & ENV ─── */
{id:"atmo",label:"Atmosphere & Env",ico:"☁",cls:"ga",desc:"Sky Atmosphere, sương mù, ánh sáng môi trường UE5",nodes:[
{n:"SkyAtmosphereAerialPerspective",cat:"",sc:"",tags:[],p:[["WorldPosition","Điểm world"]],f:"<span class=\"tag ue5\">UE5</span>Màu aerial perspective (khí quyển tán xạ) tại vị trí. UE5 Sky System."},
{n:"SkyAtmosphereLightDirection",cat:"",sc:"",tags:[],p:[["LightIndex","0=Sun, 1=Moon"]],f:"<span class=\"tag ue5\">UE5</span>Hướng nguồn sáng khí quyển. Dùng trong sky material."},
{n:"SkyAtmosphereLightIlluminance",cat:"",sc:"",tags:[],p:[["LightIndex","0=Sun, 1=Moon"],["WorldPosition","Vị trí world (tùy chọn)"]],f:"<span class=\"tag ue5\">UE5</span>Illuminance (màu + cường độ) của nguồn sáng mặt trời/trăng."},
{n:"SkyAtmosphereLightDiskLuminance",cat:"",sc:"",tags:[],p:[["LightIndex","0/1"]],f:"<span class=\"tag ue5\">UE5</span>Luminance đĩa sáng mặt trời/trăng trong sky material."},
{n:"SkyAtmosphereViewLuminance",cat:"",sc:"",tags:[],p:[],f:"<span class=\"tag ue5\">UE5</span>Luminance nhìn qua bầu khí quyển. Rendering bầu trời."},
{n:"SkyLightEnvMapSample",cat:"",sc:"",tags:[],p:[["Direction","Hướng 3D"],["Roughness","0–1"]],f:"Lấy mẫu Sky Light environment map theo hướng và roughness. Custom reflection."},
{n:"AtmosphericFogColor",cat:"",sc:"",tags:[],p:[["WorldPosition","Tùy chọn"]],f:"Màu fog khí quyển (Legacy). UE5 khuyên dùng Exponential Height Fog."},
{n:"PrecomputedAOMask",cat:"",sc:"",tags:[],p:[],f:"AO mask tính bởi Lightmass (baked). Cần build lighting + bật Generate AO Mask."},
{n:"PerInstanceFadeAmount",cat:"",sc:"",tags:[],p:[],f:"Fade amount của Instanced Static Mesh (foliage cull distance)."},
{n:"PerInstanceRandom",cat:"",sc:"",tags:[],p:[],f:"Giá trị ngẫu nhiên khác nhau mỗi instance. Biến thể màu foliage, scatter."},
{n:"PerInstanceCustomData",cat:"",sc:"",tags:[],p:[["DataIndex","0–31"],["Default","Giá trị fallback"]],f:"<span class=\"tag ue5\">UE5</span>Per-instance float data từ InstancedStaticMeshComponent."}
]},
/* ─── LANDSCAPE ─── */
{id:"landscape",label:"Landscape",ico:"⛰",cls:"gl",desc:"Nodes chuyên dụng cho hệ thống Landscape",nodes:[
{n:"LandscapeLayerBlend",cat:"",sc:"",tags:[],p:[["Layer_N","Màu/texture từng layer"],["Weight_N","Trọng số paint"]],f:"Trộn nhiều Landscape layer theo weight được paint. Node chính của Landscape material."},
{n:"LandscapeLayerCoords",cat:"",sc:"",tags:[],p:[["MappingType","XY/XZ/YZ Plane"],["Scale","Scale UV"],["SubsectionOffset","Offset giữa subsection"]],f:"Sinh UV tọa độ cho Landscape mapping, thích ứng subsection."},
{n:"LandscapeLayerWeight",cat:"",sc:"",tags:[],p:[["Base","Fallback value"],["Layer","Tên layer (string)"]],f:"Weight của một layer cụ thể tại pixel. Dùng làm Alpha blend."},
{n:"LandscapeLayerSample",cat:"",sc:"",tags:[],p:[["Layer","Tên layer"],["WeightmapChannel","Kênh weightmap"]],f:"Lấy mẫu trực tiếp giá trị weightmap của Landscape layer."},
{n:"LandscapeLayerSwitch",cat:"",sc:"",tags:[],p:[["LayerUsed","Output khi layer được paint"],["LayerNotUsed","Output khi không paint"],["Layer","Tên layer"]],f:"Switch output dựa trên layer có được paint không."},
{n:"LandscapeGrassOutput",cat:"",sc:"",tags:[],p:[["GrassType_N","Grass Type asset"]],f:"Định nghĩa loại cỏ spawn tự động theo paint weight. Chỉ trong Landscape material."},
{n:"LandscapeVisibilityMask",cat:"",sc:"",tags:[],p:[],f:"Mask ẩn/hiện Landscape (đào hầm với Landscape Hole)."},
{n:"LandscapePhysicalMaterialOutput",cat:"",sc:"",tags:[],p:[["PhysicalMaterial_N","Physical Material asset"]],f:"<span class=\"tag ue5\">UE5</span>Assign Physical Material theo từng paint layer. Footstep sound, decal."}
]},
/* ─── PARTICLES ─── */
{id:"particle",label:"Particles",ico:"✦",cls:"gpar",desc:"Dữ liệu từ Niagara / Cascade cho particle material",nodes:[
{n:"ParticleColor",cat:"",sc:"",tags:[],p:[],f:"Màu RGBA của particle từ emitter module."},
{n:"ParticlePositionWS",cat:"",sc:"",tags:[],p:[],f:"Vị trí World Space của particle."},
{n:"ParticleVelocity",cat:"",sc:"",tags:[],p:[],f:"Vector vận tốc particle trong World Space."},
{n:"ParticleRadius",cat:"",sc:"",tags:[],p:[],f:"Bán kính particle. Scale texture hoặc opacity theo kích thước."},
{n:"ParticleRelativeTime",cat:"",sc:"",tags:[],p:[],f:"Tuổi thọ tương đối [0–1]. 0=vừa sinh, 1=sắp chết. Fade in/out, color over life."},
{n:"ParticleSize",cat:"",sc:"",tags:[],p:[],f:"Kích thước sprite (X, Y)."},
{n:"ParticleSpeed",cat:"",sc:"",tags:[],p:[],f:"Tốc độ (scalar) UU/s."},
{n:"ParticleMacroUV",cat:"",sc:"",tags:[],p:[],f:"UV map lên toàn bộ particle system. Texture liền mạch qua nhiều particle."},
{n:"ParticleSubUV",cat:"",sc:"",tags:[],p:[["Tex","Flipbook texture"],["SubImages_H","Cột"],["SubImages_V","Hàng"],["BlendMode","Linear/Random"]],f:"Flipbook animation cho particle. Tự động chuyển frame."},
{n:"DynamicParameter",cat:"",sc:"",tags:[],p:[["Param0..3","Float4 từ emitter"]],f:"Nhận float4 truyền từ Cascade/Niagara emitter module. Giao tiếp emitter↔material."},
{n:"NiagaraMeshUV",cat:"",sc:"",tags:[],p:[["UVIndex","0 hoặc 1"]],f:"<span class=\"tag ue5\">UE5</span>UV tọa độ cho Niagara Mesh Particle."}
]},
/* ─── TIME & NOISE ─── */
{id:"time",label:"Time & Noise",ico:"⏱",cls:"gtime",desc:"Thời gian, noise procedural, random và animation",nodes:[
{n:"Time",cat:"",sc:"",tags:[],p:[["Period","Chu kỳ lặp (0=không lặp)"]],f:"Thời gian chạy tính bằng giây. Nối vào Panner, Sine, v.v."},
{n:"DeltaTime",cat:"",sc:"",tags:[],p:[],f:"Thời gian frame trước (delta time). Animation frame-rate independent."},
{n:"PeriodicHint",cat:"",sc:"",tags:[],p:[["Input","Giá trị"],["Period","Chu kỳ"]],f:"Gợi ý compiler giá trị có tính tuần hoàn — cải thiện tối ưu shader."},
{n:"Noise",cat:"",sc:"",tags:[],p:[["Position","Vị trí 3D"],["Scale","Scale noise"],["Quality","0=fastest, 4=best"],["Function","Simplex/Perlin/Gradient/Voronoi/CellNoise"],["Turbulence","Fractal multi-octave"],["Levels","Số octave"],["OutputMin/Max","Khoảng output"],["LevelScale","Tỉ lệ giảm mỗi octave"],["Tiling","Bật lặp"],["TileSize","Kích thước tile"]],f:"Procedural noise đa loại (Perlin, Simplex, Voronoi...). Nền tảng tạo hiệu ứng đá, mây, lửa, nước."},
{n:"VectorNoise",cat:"",sc:"",tags:[],p:[["Position","Vị trí 3D"],["Quality","0–1"],["Function","VectorCoordinate/Gradient/Curl3D/Voronoi..."],["Tiling","Bật lặp"],["TileSize","Kích thước tile"]],f:"Vector noise 3D. Curl Noise tạo chuyển động chất lỏng không phân kỳ (fluid simulation)."},
{n:"MakePeriodic",cat:"",sc:"",tags:[],p:[["Input","Giá trị"],["Period","Độ dài chu kỳ"]],f:"Đảm bảo giá trị trong chu kỳ, tạo loop mượt."},
{n:"AntialiasedTextureMask",cat:"",sc:"",tags:[],p:[["UVs","UV"],["Tex","Texture mask"],["Threshold","Ngưỡng"],["Channel","R/G/B/A"]],f:"Mask mượt chống răng cưa từ texture."}
]},
/* ─── BLENDS ─── */
{id:"blends",label:"Blends",ico:"⊞",cls:"gblend",desc:"Material Functions blend màu giống Photoshop Layer Blend Modes",nodes:[
{n:"Blend_ColorBurn",cat:"Material Function",sc:"",tags:[],p:[["Base","Texture nền (Vector3)"],["Blend","Texture blend (Vector3)"]],f:"Màu càng tối thì ảnh hưởng càng nhiều. Blend trắng = không thay đổi."},
{n:"Blend_ColorDodge",cat:"Material Function",sc:"",tags:[],p:[["Base","Vector3"],["Blend","Vector3"]],f:"Làm sáng bằng cách invert Base rồi chia cho Blend. Hiệu ứng sáng rực."},
{n:"Blend_Darken",cat:"Material Function",sc:"",tags:[],p:[["Base","Vector3"],["Blend","Vector3"]],f:"Giữ pixel tối hơn giữa Base và Blend. Blend trắng = không thay đổi."},
{n:"Blend_Difference",cat:"Material Function",sc:"",tags:[],p:[["Base","Vector3"],["Blend","Vector3"]],f:"|Base − Blend|. Tạo hiệu ứng inversion. Blend đen = không thay đổi."},
{n:"Blend_Exclusion",cat:"Material Function",sc:"",tags:[],p:[["Base","Vector3"],["Blend","Vector3"]],f:"Giống Difference nhưng ít tương phản hơn. Soft inversion effect."},
{n:"Blend_HardLight",cat:"Material Function",sc:"",tags:[],p:[["Base","Vector3"],["Blend","Vector3"]],f:"Giống Overlay nhưng khắc nghiệt hơn. Blend>50% gray → Screen; <50% → Multiply."},
{n:"Blend_Lighten",cat:"Material Function",sc:"",tags:[],p:[["Base","Vector3"],["Blend","Vector3"]],f:"Giữ pixel sáng hơn giữa Base và Blend. Blend đen = không thay đổi."},
{n:"Blend_LinearBurn",cat:"Material Function",sc:"",tags:[],p:[["Base","Vector3"],["Blend","Vector3"]],f:"Cộng Base+Blend rồi trừ 1. Tối hơn ColorBurn."},
{n:"Blend_LinearDodge",cat:"Material Function",sc:"",tags:[],p:[["Base","Vector3"],["Blend","Vector3"]],f:"Cộng Base+Blend. Sáng hơn ColorDodge (Add blend mode)."},
{n:"Blend_LinearLight",cat:"Material Function",sc:"",tags:[],p:[["Base","Vector3"],["Blend","Vector3"]],f:"Kết hợp LinearBurn và LinearDodge theo độ sáng của Blend. Khắc nghiệt hơn HardLight."},
{n:"Blend_Multiply",cat:"Material Function",sc:"",tags:[],p:[["Base","Vector3"],["Blend","Vector3"]],f:"Base×Blend. Luôn tối hơn hoặc bằng. Nhân màu — tương tự Multiply node."},
{n:"Blend_Overlay",cat:"Material Function",sc:"",tags:[],p:[["Base","Vector3"],["Blend","Vector3"]],f:"Base>50%→Screen, Base<50%→Multiply. Tăng contrast, giữ màu gốc."},
{n:"Blend_PinLight",cat:"Material Function",sc:"",tags:[],p:[["Base","Vector3"],["Blend","Vector3"]],f:"Blend>50%→ảnh hưởng chỗ sáng; <50%→ảnh hưởng chỗ tối. Bớt khắc nghiệt hơn Overlay."},
{n:"Blend_Screen",cat:"Material Function",sc:"",tags:[],p:[["Base","Vector3"],["Blend","Vector3"]],f:"1−(1−Base)×(1−Blend). Luôn sáng hơn hoặc bằng."},
{n:"Blend_SoftLight",cat:"Material Function",sc:"",tags:[],p:[["Base","Vector3"],["Blend","Vector3"]],f:"Phiên bản mềm hơn của Overlay. Contrast nhẹ, tự nhiên."},
{n:"Blend_VividLight",cat:"Material Function",sc:"",tags:[],p:[["Base","Vector3"],["Blend","Vector3"]],f:"Blend>50%→ColorDodge; <50%→ColorBurn. Rất tăng contrast."}
]},
/* ─── GRADIENTS ─── */
{id:"gradient",label:"Gradients",ico:"◐",cls:"ggrad",desc:"Gradient procedural từ UV — không cần texture, tiết kiệm memory",nodes:[
{n:"RadialGradientExponential",cat:"Material Function",sc:"",tags:[],p:[["UVs","UV (mặc định UV channel 0)"],["CenterX/Y","Tâm gradient [0–1]"],["Radius","Bán kính [0–1]"],["Density","Độ dày/falloff"],["Invert","Đảo ngược"]],f:"Gradient hình tròn (radial) với falloff theo hàm mũ. Nhanh hơn tạo texture gradient."},
{n:"DiamondGradient",cat:"Material Function",sc:"",tags:[],p:[["Falloff","Tốc độ falloff"]],f:"Gradient hình thoi (diamond shape) từ UV channel 0. Điều chỉnh Falloff để thay đổi hình dạng."},
{n:"LinearGradient",cat:"Material Function",sc:"",tags:[],p:[],f:"Gradient tuyến tính theo trục U hoặc V (chọn qua output pin). Từ UV channel 0."},
{n:"SmoothCurve",cat:"Material Function",sc:"",tags:[],p:[["Input","Texture channel hoặc gradient"],["Tangent_1","Hệ số tiếp tuyến 1"],["Tangent_2","Hệ số tiếp tuyến 2"]],f:"Áp dụng procedural curve lên gradient/texture. Điều chỉnh tangent để kiểm soát transition tối–sáng."},
{n:"EasyGradient",cat:"Material Function",sc:"",tags:[],p:[["UVs","UV input"],["Color_N","Màu tại từng điểm"],["Pos_N","Vị trí màu [0–1]"]],f:"Gradient đơn giản nhiều màu theo UV. Dễ thiết lập, ít kiểm soát hơn SmoothCurve."}
]},
/* ─── PROCEDURALS ─── */
{id:"proc",label:"Procedurals",ico:"⬡",cls:"gproc",desc:"Texture và mask procedural, normal từ heightmap",nodes:[
{n:"GeneratedBand",cat:"Material Function",sc:"",tags:[],p:[["UVs","UV (mặc định UV0)"],["Width","Độ rộng dải [0–1]"],["Center","Vị trí trung tâm dải [0–1]"],["Hardness","Độ cứng cạnh [0–1]"],["Horizontal","true=ngang, false=dọc"]],f:"Tạo một dải (band) ngang hoặc dọc procedural từ UV. Dùng cho stripes, glow ring, highlight trên cable/pipe."},
{n:"GeneratedOffsetBands",cat:"Material Function",sc:"",tags:[],p:[["UVs","UV"],["NumBands","Số lượng dải"],["Width","Độ rộng mỗi dải"],["Offset","Offset UV"],["Hardness","Độ cứng cạnh"]],f:"Như GeneratedBand nhưng tạo nhiều dải cùng lúc. Striped pattern, EQ bars, neon lines."},
{n:"NormalFromHeightMap",cat:"Material Function",sc:"",tags:[],p:[["Heightmap (T2d)","Texture Object (không phải TextureSample)"],["UVs","UV input"],["OutputNormal","Normal map output"]],f:"Tạo normal map nhanh từ heightmap đen trắng. Không cần load texture normal riêng vào memory."},
{n:"NormalFromHeightMapChaos",cat:"Material Function",sc:"",tags:[],p:[["Heightmap (T2d)","Texture Object"],["UVs","UV"],["Speed","Tốc độ animation"]],f:"Pan heightmap theo 4 hướng rồi blend lại tạo normal map xáo trộn (chaotic). Nước, lửa. Tốn performance."},
{n:"Motion_4WayChaos",cat:"Material Function",sc:"",tags:[],p:[["Tex (T2d)","Texture Object"],["UVs","UV"],["Speed","Tốc độ"],["Divisions","Số lần chia"]],f:"Pan texture theo 4 hướng ngẫu nhiên rồi blend. Tạo animated texture không lặp. Lửa, khói."},
{n:"WaterNormal_Cheap",cat:"Material Function",sc:"",tags:[],p:[["NormalTexture","Normal map nước"],["UVs","UV"],["Speed","Tốc độ chảy"]],f:"Blend 2 normal map nước chảy ngược chiều. Normal mặt nước nhanh, rẻ."},
{n:"SimpleGrassWind",cat:"Material Function",sc:"",tags:[],p:[["WindIntensity","Cường độ gió"],["WindWeight","Vertex Color mask"],["WindSpeed","Tốc độ"],["AdditionalWPO","WPO thêm vào"],["WorldPosition","Vị trí world"]],f:"World Position Offset đơn giản mô phỏng gió thổi cỏ. Dùng Vertex Color Red làm mask."}
]},
/* ─── TEXTURING ─── */
{id:"texturing",label:"Texturing",ico:"⊠",cls:"gtex",desc:"Các MF xử lý UV, triplanar, cropping, detail",nodes:[
{n:"WorldAlignedTexture",cat:"Material Function",sc:"",tags:[],p:[["TextureObject","Texture"],["WorldScale","Scale theo world units"],["BlendSharpness","Độ sắc nét blend"]],f:"Triplanar mapping — chiếu texture theo 3 trục World Space. Không bị stretching trên địa hình, vách đá."},
{n:"WorldAlignedNormal",cat:"Material Function",sc:"",tags:[],p:[["NormalTextureObject","Normal texture"],["WorldScale","Scale"],["BlendSharpness","Độ sắc blend"]],f:"Triplanar mapping cho normal map, blend theo hướng World Space."},
{n:"CameraDepthFade",cat:"Material Function",sc:"",tags:[],p:[["InOpacity","Opacity"],["FadeLength","Độ dài fade"],["MaxOpacity","Max opacity"],["Bias","Khoảng cách bắt đầu fade"]],f:"Fade opacity theo khoảng cách camera."},
{n:"TextureCropping",cat:"Material Function",sc:"",tags:[],p:[["UVs","UV gốc"],["CropUV","XYZW: U_start, V_start, U_end, V_end"]],f:"Crop (cắt) texture theo vùng UV định nghĩa bởi 4 giá trị."},
{n:"SelectiveMotionBlur",cat:"Material Function",sc:"",tags:[],p:[["Mask","Mask vùng blur"],["Amount","Cường độ blur"]],f:"Motion blur chọn lọc theo mask, không cần PostProcess volume."},
{n:"HeightLerp",cat:"Material Function",sc:"",tags:[],p:[["A","Layer A"],["B","Layer B"],["TransitionPhase","Ngưỡng [0–1]"],["HeightTexture","Heightmap blend"],["Contrast","Độ sắc blend"]],f:"Blend hai layer theo heightmap (height-based blend). Rất phổ biến trong terrain material."},
{n:"TextureFlipping",cat:"Material Function",sc:"",tags:[],p:[["Texture","Texture Object"],["UVs","UV"],["FlipU","Lật ngang"],["FlipV","Lật dọc"]],f:"Lật texture theo U hoặc V."}
]},
/* ─── IMAGE ADJUSTMENT ─── */
{id:"imgadj",label:"Image Adjustment",ico:"✏",cls:"gimg",desc:"Điều chỉnh texture: contrast, hue, brightness",nodes:[
{n:"3ColorBlend",cat:"Material Function",sc:"",tags:[],p:[["Alpha","Gradient [0–1]"],["LowColor","Màu tại 0"],["MidColor","Màu ở giữa"],["HighColor","Màu tại 1"]],f:"Blend 3 màu theo giá trị Alpha. Gradient 3 điểm tùy chỉnh."},
{n:"CheapContrast (MF)",cat:"Material Function",sc:"",tags:[],p:[["In","Input"],["Contrast","Hệ số"]],f:"Phiên bản MF của CheapContrast. Nhanh hơn S-curve."},
{n:"HueShift (MF)",cat:"Material Function",sc:"",tags:[],p:[["Input","RGB"],["HueShiftPercent","0–1 = 0–360°"]],f:"Xoay hue trong HSV — phiên bản MF."},
{n:"SaturationAdjustment",cat:"Material Function",sc:"",tags:[],p:[["Input","RGB"],["Saturation","Hệ số"]],f:"Điều chỉnh độ bão hòa màu."},
{n:"HardLight (MF)",cat:"Material Function",sc:"",tags:[],p:[["A","Texture A"],["B","Texture B"]],f:"HardLight blend trong Image Adjustment."},
{n:"SoftLight (MF)",cat:"Material Function",sc:"",tags:[],p:[["A","Texture A"],["B","Texture B"]],f:"SoftLight blend."}
]},
/* ─── WORLD POSITION OFFSET ─── */
{id:"wpo",label:"World Position Offset",ico:"↗",cls:"gwpo",desc:"Vertex animation qua World Position Offset",nodes:[
{n:"ObjectPivotPoint",cat:"Material Function",sc:"",tags:[],p:[],f:"Vị trí pivot của object trong World Space. Chỉ hoạt động trong Vertex Shader."},
{n:"ObjectScale",cat:"Material Function",sc:"",tags:[],p:[],f:"Scale XYZ của object (toàn bộ và riêng lẻ). Chỉ Vertex Shader."},
{n:"PivotAxis",cat:"Material Function",sc:"",tags:[],p:[["PivotAxis/pos","Trục và điểm pivot"],["WorldPosition","Vị trí world"]],f:"Tạo điểm pivot chung trên trục tùy ý. Hữu ích cho flag animation (pivot theo chiều rộng)."},
{n:"RotateAboutWorldAxis_cheap",cat:"Material Function",sc:"",tags:[],p:[["Degrees","Góc xoay"],["Axis","Trục xoay (0=X, 1=Y, 2=Z)"]],f:"Xoay object quanh trục world, ít tốn kém hơn RotateAboutAxis đầy đủ."},
{n:"StaticMeshMorphTargets",cat:"Material Function",sc:"",tags:[],p:[],f:"Giải nén morph target data được encode vào texture bằng 3ds Max Morph Packer MAXScript."},
{n:"SimpleGrassWind",cat:"Material Function",sc:"",tags:[],p:[["WindIntensity","Cường độ"],["WindWeight","Mask (Vertex Color)"],["WindSpeed","Tốc độ"],["AdditionalWPO","WPO thêm"]],f:"WPO đơn giản cho cỏ/lá rung theo gió. Phổ biến trong foliage material."},
{n:"PivotPainter2FoliageShader",cat:"Material Function",sc:"",tags:[],p:[["WindInputs","Thông số gió"],["Leaf/BranchData","Texture Pivot Painter 2"]],f:"Foliage wind shader đầy đủ từ Pivot Painter 2. Tự động xử lý wind turbulence theo hierarchy."}
]},
/* ─── SHADING ─── */
{id:"shading",label:"Shading",ico:"💡",cls:"gshad",desc:"Material Functions cho shading, reflection, subsurface",nodes:[
{n:"Fresnel_Function",cat:"Material Function",sc:"",tags:[],p:[["Exponent","Độ sắc nét (3–8)"],["BaseReflectFraction","Phản chiếu góc thẳng [0–1]"],["Normal","World Space normal"],["CameraVector","Hướng camera"]],f:"Fresnel effect vật lý. Viền sáng cho kính, nước, nhựa, fabric."},
{n:"ClearCoatBottomNormal",cat:"Material Function",sc:"",tags:[],p:[["BottomNormal","Normal lớp bên dưới"],["ClearCoatRoughness","Roughness lớp phủ"]],f:"Hỗ trợ two-layer normal cho Clear Coat shading model."},
{n:"SubsurfaceProfile_Opacity",cat:"Material Function",sc:"",tags:[],p:[["Opacity","Opacity value"]],f:"Điều chỉnh opacity cho Subsurface Profile shading model."},
{n:"TwoSidedFoliageExtra",cat:"Material Function",sc:"",tags:[],p:[["SubsurfaceColor","Màu subsurface back-face"]],f:"Thêm subsurface color cho Two Sided Foliage shading model."},
{n:"ShadingModelSwitch",cat:"Material Function",sc:"",tags:[],p:[["Lit","Output Lit"],["Unlit","Output Unlit"],["SubsurfaceSkin","Output Subsurface"]],f:"Switch output theo shading model đang dùng."}
]},
/* ─── HAIR & GROOM ─── */
{id:"hair",label:"Hair & Groom",ico:"〜",cls:"ghair",desc:"Nodes chuyên biệt cho hệ thống Groom / Hair của UE5",nodes:[
{n:"HairAttributes",cat:"",sc:"",tags:[],p:[],f:"<span class=\"tag ue5\">UE5</span>Xuất attribute sợi tóc: U (vị trí dọc 0–1), V (quanh sợi), Depth, Coverage, Seed, Root UV, Group Index. Material tóc phức tạp."},
{n:"HairColor",cat:"",sc:"",tags:[],p:[["Melanin","Nồng độ melanin [0–1]"],["Redness","Tỉ lệ pheomelanin/eumelanin [0–1]"]],f:"<span class=\"tag ue5\">UE5</span>Màu tóc vật lý từ thông số melanin. Mô phỏng màu tóc tự nhiên (đen, nâu, vàng, đỏ, xám)."}
]},
/* ─── VR TEXTURE & NANITE ─── */
{id:"vr",label:"VR Texture & Nanite",ico:"◈",cls:"gvr",desc:"Runtime Virtual Texture, Nanite Displacement, Substrate",nodes:[
{n:"RuntimeVirtualTextureSample",cat:"",sc:"",tags:[],p:[["WorldPosition","Vị trí world"],["WorldNormal","Normal world"],["TextureParam","RVT asset param"],["MipBias","Mip bias"]],f:"<span class=\"tag ue5\">UE5</span>Lấy mẫu Runtime Virtual Texture. Terrain blending, decal projection lên landscape."},
{n:"RuntimeVirtualTextureSampleParameter",cat:"",sc:"",tags:[],p:[["WorldPosition","Vị trí world"],["TextureParam","RVT param"]],f:"<span class=\"tag ue5\">UE5</span>RVT Sample có thể override qua Instance."},
{n:"RuntimeVirtualTextureOutput",cat:"",sc:"",tags:[],p:[["BaseColor","Màu"],["Specular","Specular"],["Roughness","Roughness"],["Normal","Normal"],["WorldHeight","World Height"],["Opacity","Opacity"]],f:"<span class=\"tag ue5\">UE5</span>Xuất dữ liệu material vào Runtime Virtual Texture. Landscape RVT workflow."},
{n:"VirtualTextureFeatureSwitch",cat:"",sc:"",tags:[],p:[["No Virtual Textures","Output không có VT"],["With Virtual Textures","Output khi có VT"]],f:"<span class=\"tag ue5\">UE5</span>Switch dựa trên Virtual Texture support."},
{n:"NaniteDisplacement",cat:"",sc:"",tags:[],p:[["Displacement","Heightmap"],["Scale","Scale displacement"],["Center","Điểm trung tâm [0–1]"]],f:"<span class=\"tag ue5\">UE5</span>Displacement hình học cho Nanite mesh — true geometric displacement, không phải WPO."},
{n:"SubstrateMaterial",cat:"",sc:"",tags:[],p:[["BSDF","Substrate BSDF node"]],f:"<span class=\"tag ue5\">UE5</span>Output node cho Substrate shading framework. Kết hợp nhiều BSDF layers."},
{n:"SubstrateSlabBSDF",cat:"",sc:"",tags:[],p:[["DiffuseAlbedo","Màu diffuse"],["F0","Specular at 0°"],["Roughness","0–1"],["Normal","Normal"],["Thickness","Độ dày slab"]],f:"<span class=\"tag ue5\">UE5</span>BSDF layer cơ bản cho Substrate. Thay thế Metallic/Roughness workflow."},
{n:"SubstrateCoatingBSDF",cat:"",sc:"",tags:[],p:[["F0","Phản chiếu coating"],["Roughness","Roughness coating"],["Normal","Normal coating"],["Thickness","Độ dày"]],f:"<span class=\"tag ue5\">UE5</span>BSDF lớp phủ bóng (clear coat) cho Substrate framework."}
]},
/* ─── CORE ─── */
{id:"mfcore",label:"Core",ico:"f(x)",cls:"gfunc",desc:"FunctionInput/Output, gọi MF, các MF nội bộ thông dụng",nodes:[
{n:"MaterialFunctionCall",cat:"Material Function",sc:"",tags:[],p:[["Material Function","Asset MF_*"],["Inputs","Tuỳ theo function"]],f:"Gọi một Material Function. Input/Output phụ thuộc vào định nghĩa function."},
{n:"FunctionInput",cat:"Material Function",sc:"",tags:[],p:[["Input Name","Tên pin"],["Input Type","Scalar/Vector2/3/4/Texture/bool..."],["Default Value","Giá trị khi không nối"],["Preview","Giá trị preview editor"],["Use Preview Value as Default","Dùng preview làm default"]],f:"Khai báo pin đầu vào của Material Function. Chỉ dùng bên trong MF asset."},
{n:"FunctionOutput",cat:"Material Function",sc:"",tags:[],p:[["Output Name","Tên pin xuất"]],f:"Khai báo pin đầu ra của Material Function."},
{n:"NormalBlend (MF)",cat:"Material Function",sc:"",tags:[],p:[["Base","Normal gốc"],["Additional","Normal thêm"],["Weight","Cường độ blend [0–1]"]],f:"Blend hai normal map theo phương pháp chuẩn."},
{n:"PlanarTexture",cat:"Material Function",sc:"",tags:[],p:[["Texture","Texture Object"],["Scale","Scale XY"]],f:"Chiếu texture phẳng theo trục XY World Space."},
{n:"MF_Pi",cat:"Material Function",sc:"",tags:[],p:[],f:"Xuất hằng số π (3.14159...). Dùng trong tính toán lượng giác."},
{n:"MF_TwoSidedSign",cat:"Material Function",sc:"",tags:[],p:[],f:"Xuất +1 front-face, −1 back-face (alias MF của TwoSidedSign node)."},
{n:"MF_VirtualTextureOutput",cat:"Material Function",sc:"",tags:[],p:[["BaseColor","..."],["Normal","..."],["Roughness","..."]],f:"<span class=\"tag ue5\">UE5</span>Xuất dữ liệu vào Runtime Virtual Texture."}
]},
/* ─── FONT ─── */
{id:"font",label:"Font",ico:"Aa",cls:"gfont",desc:"Lấy mẫu font asset trong Material",nodes:[
{n:"FontSample",cat:"",sc:"",tags:[],p:[["Font","Font Asset"],["FontTexturePage","Trang texture của font"]],f:"Lấy mẫu texture của font asset. Tạo material hiển thị text trực tiếp trên mesh."},
{n:"FontSampleParameter",cat:"",sc:"",tags:[],p:[["Parameter Name","Tên"],["Font","Default Font Asset"],["FontTexturePage","Trang mặc định"]],f:"FontSample có thể override qua Material Instance."}
]}
];