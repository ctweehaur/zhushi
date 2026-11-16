// ==========================================================================
// 📖 《竹石》深度文本赏析数据库 (analysis.js) - 第一句至第四句标准对齐版
// ==========================================================================

const sectionUnit = "句"; // 👈 供 index.html 识别，将“第X段”自动切换为“第X句”

const U_TAG = (text) => `<span class="proper-noun">${text}</span>`;

const GRAMMAR_TAG = (type, text) => 
    `<span style="display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.22); padding:2px 8px; margin:2px 4px 2px 0; border-radius:5px; font-size:12px; font-weight:800; vertical-align:top;">${type}：${text}</span>`;

const ANCIENT_MODERN_TAG = (word, ancient, modern) => 
    `<div style="display:inline-flex; flex-direction:column; background:var(--notebook-bg); border:1px solid rgba(43,76,101,0.22); padding:5px 10px; margin:3px 6px 3px 0; border-radius:6px; font-size:12px; line-height:1.55; vertical-align:middle;">` +
        `<div style="color:var(--primary-color); font-weight:800;">🔹 【${word}】古义：${ancient}</div>` +
        `<div style="color:var(--text-muted); font-weight:600; border-top:1px dashed var(--input-border); margin-top:2px; padding-top:2px;">🔸 【${word}】今义：${modern}</div>` +
    `</div>`;

const lessonTeacherAnalysis = {
    overview: "<strong>【全诗白话译文】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:6px; line-height:1.95;'>" +
        "竹子紧紧咬住青山绝不放松，它的根原本就深深扎在坚硬破碎的岩石缝隙之中。任凭遭受成千上万次的折磨与狂暴打击，它依然挺拔坚韧强劲；任凭从东南西北各方刮来凶猛狂烈的大风，它也傲然挺立、毫不动摇！" +
        "</span><br><br>" +
        "<strong>【创作背景与艺术特色（“诗书画三绝”郑板桥的铮铮傲骨）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:4px;'>《竹石》是" + U_TAG("清") + "代著名文学家、书画家、“扬州八怪”杰出代表" + U_TAG("郑燮") + "（1693–1765，字克柔，号板桥，世称“诗、书、画三绝”，独创“六分半书”）为自己所画的《竹石图》题写的一首七言绝句（收录于马来西亚《中二华文》第七单元第4课）。郑板桥一生酷爱画竹，曾任山东范县、潍县知县，因清廉刚正、开仓赈灾得罪豪绅权贵而愤然辞官。这首题画诗采用<strong>托物言志（借物喻人）</strong>的手法，表面上句句写扎根破岩、傲立狂风的翠竹，实际上句句都在写诗人自己<strong>刚正不阿、铁骨铮铮、绝不向邪恶势力与严酷逆境低头的高尚气节</strong>。</span>",

    paragraphs: {
        1: "<strong>【第一句赏析：咬定青山，拟人起笔显神威】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   "[咬定]青山[不放松]，" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   "竹子[紧紧咬住]✓青山[绝不放松]✓，" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   ANCIENT_MODERN_TAG("咬定", "咬紧不松口（拟人，形容竹根牢牢扎进山石）", "一口咬定、固执认定") +
                   GRAMMAR_TAG("理解与探究第1题（“咬定”之妙）", "起笔不凡！运用拟人修辞，将无生命的竹根化作紧咬青山不放的勇士，极具抓地力与坚定意志") +
               "</div>" +
           "</div>",

        2: "<strong>【第二句赏析：立根破岩，险恶环境反衬顽强生机】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   "[立根][原]在[破岩]中。" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   "它的根[原本]✓就[深深扎]✓在[破碎开裂的岩石缝隙]✓之中。" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   ANCIENT_MODERN_TAG("原", "原本、本来（副词）", "原因、平原") +
                   ANCIENT_MODERN_TAG("破岩", "破碎、开裂的岩石缝隙", "破损的岩石") +
                   GRAMMAR_TAG("理解与探究第1题（“破岩”之妙）", "补充交代竹子立足的根基——并非沃土平地，而是贫瘠险恶的“破岩”，反衬其坚韧不拔的生命根基") +
               "</div>" +
           "</div>",

        3: "<strong>【第三句赏析：千磨万击，百折不挠见风骨】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   "[千磨万击][还][坚劲]，" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   "任凭遭受[成千上万次的折磨与猛烈打击]✓，它[依然]✓[坚韧强劲]✓，" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   ANCIENT_MODERN_TAG("磨", "折磨、磨难", "摩擦、消磨") +
                   ANCIENT_MODERN_TAG("坚劲", "坚韧强劲（课本注音 jìn；亦统读 jìng）", "坚强有力") +
                   GRAMMAR_TAG("互文兼夸张对比", "“千磨万击”极言考验之严酷繁多，一个“还”字与“坚劲”则尽显愈挫愈勇的铮铮铁骨") +
               "</div>" +
           "</div>",

        4: "<strong>【第四句赏析：任尔狂风，托物言志铸就千古绝唱】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   "[任][尔][东西南北风]。" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   "[任凭]✓[你]✓从[东南西北四面八方刮来凶猛狂风]✓，它也傲然挺立、毫不动摇！" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   ANCIENT_MODERN_TAG("任尔", "任凭你（尔：第二人称代词，指代狂风）", "罕用") +
                   ANCIENT_MODERN_TAG("东西南北风", "四面八方的狂风（比喻人生逆境与险恶政治风浪）", "自然界的风向") +
                   GRAMMAR_TAG("理解与探究第2、3题（托物言志）", "直呼狂风为“尔（你）”，充满蔑视强权与逆境的豪迈气概，将全诗刚毅不屈的君子傲骨推向巅峰") +
               "</div>" +
           "</div>"
    }
};
