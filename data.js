// ==========================================================================
// 📚 《竹石》课文词典与诗行数据集 (data.js) - 4行逐句对齐古诗词黄金版
// 格式：["字词", "拼音", "EN 英文", "BM 马来文", "古义/本义：...\n今义：...", "u (可选:专名下划线)"]
// 结构：共 4 个区块（1–4 对应七言绝句第一句至第四句），与 analysis.js 1–4 完全对齐
// ==========================================================================

const lessonTitle = "竹石";
const sectionUnit = "句";

const lessonData = [
    // ===== 第一句（起句） =====
    ["咬定", "yǎo dìng", "biting firmly into / gripping tightly", "menggigit dengan kuat / mencengkam erat", "古义：咬紧不放（拟人，形容竹根牢牢扎在岩石缝隙中）\n今义：一口咬定、固执地认定某事"],
    ["青山", "qīng shān", "the green mountain", "gunung yang menghijau", "偏正名词：苍翠的山岭"],
    ["不", "bú", "never / not", "tidak sekali-kali", "副词（在第四声“放 fàng”前变调读 bú）：绝不"],
    ["放松", "fàng sōng", "loosening its grip / relaxing", "melepaskan cengkaman", "动词：松懈、松开"],
    ["，", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 第二句（承句）

    ["立根", "lì gēn", "striking root / taking root", "berakar umbi / menancapkan akar", "动宾短语：扎根、生根"],
    ["原", "yuán", "originally / in the first place", "pada asalnya / sememangnya", "古义：原本、本来（副词）\n今义：原因、平原"],
    ["在", "zài", "in / inside", "di dalam", "介词：在于、处在"],
    ["破岩", "pò yán", "cracked and shattered rocks", "celah-celah batu yang retak", "偏正短语：破碎、开裂的岩石缝隙"],
    ["中", "zhōng", "among / within", "di tengah-tengahnya", "方位名词：里面、当中"],
    ["。", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 第三句（转句）

    ["千", "qiān", "a thousand", "ribuan", "数词（虚指极多）：成千上万次（与“万”互文见义）"],
    ["磨", "mó", "tribulations / trials", "cubaan dan seksaan", "古义：折磨、磨难（动词/名词）\n今义：摩擦、消磨"],
    ["万", "wàn", "ten thousand", "puluhan ribu", "数词（虚指极多）：无数次"],
    ["击", "jī", "strikes / batterings", "hentaman dan pukulan", "动词/名词：打击、摧折"],
    ["还", "hái", "still / yet", "masih tetap", "古义：依然、仍然（副词）\n今义：还是、尚且"],
    ["坚劲", "jiān jìn", "tough, resilient and vigorous", "kukuh, tabah dan bertenaga", "古义：坚韧强劲（课本注音 jìn；亦统读 jìng）\n今义：坚强有力"],
    ["，", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 第四句（合句）

    ["任", "rèn", "no matter / letting", "biarpun / tidak peduli", "古义：任凭、听凭（介词/连词）\n今义：担任、信任"],
    ["尔", "ěr", "you (the howling winds)", "engkau (angin kencang)", "古义：你、你们（第二人称代词，此指狂风）\n今义：仅用于古诗文或成语“不过尔尔”"],
    ["东西南北", "dōng xī nán běi", "from east, west, south, and north (all directions)", "dari timur, barat, selatan dan utara (segenap penjuru)", "并列方位词：四面八方（极言风向之多变、攻势之猛烈）"],
    ["风", "fēng", "winds / gales", "angin ribut", "名词（比喻喻体）：狂风、暴风（比喻人生的挫折打击与险恶的政治环境）"],
    ["。", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 出处（自动右对齐落款）

    ["（〔", "", "", "", ""],
    ["清", "qīng", "Qing Dynasty", "Dinasti Qing", "朝代名，清朝", "u"],
    ["〕", "", "", "", ""],
    ["郑燮", "zhèng xiè", "Zheng Xie (Zheng Banqiao, 1693–1765)", "Zheng Xie (Zheng Banqiao)", "清代文学家、书画家，字克柔，号板桥，“扬州八怪”代表，诗书画三绝", "u"],
    ["《", "", "", "", ""],
    ["竹石", "zhú shí", "Bamboo in the Rock", "Buluh di Celah Batu", "七言题画绝句（托物言志诗）"],
    ["》）", "", "", "", ""]
];
