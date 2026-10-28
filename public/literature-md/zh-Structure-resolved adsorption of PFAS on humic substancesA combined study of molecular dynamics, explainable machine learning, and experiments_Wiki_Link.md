---
title: "zh-Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments Wiki全文"
source_markdown: "2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments.md"
cn_markdown: "2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/zh-Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments.md"
type: translated_fulltext_wiki
---
<!-- PaperMDLab-NAV:START -->
> [!info] 论文四向互链（PaperMDLab 自动维护）
> [[2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments|英文原文]] · [[2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/zh-Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments|中文译文]] · **中文全文双链（当前）** · [[4.SCI_AI_Summary/summary-zh-Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments|AI中文总结]]
<!-- PaperMDLab-NAV:END -->


![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/94972bf7ec9813445ffb2e08b9019bf50fec78fdcf3e795ce47f1950669ef350.jpg>)

# [[全氟和多氟烷基物质|PFAS]] 在[[腐殖质]]上[[吸附]]的结构解析：[[分子动力学]]、[[可解释机器学习]]与实验的联合研究

[[Yuxiang Nie]] <sup>a</sup>, [[RuiPeng Lai]] <sup>a</sup>, [[Huaicheng Bei]] <sup>a</sup>, [[Xianyu Song]] <sup>a,b,\*</sup>, [[Dan Liu]] <sup>b,\*\*</sup>, [[Limeng Yin]] <sup>c,\*\*</sup>, [[Shuangliang Zhao]] <sup>d</sup>, [[Honglai Liu]] <sup>e</sup>

<sup>a</sup> 重庆三峡学院环境与化学工程学院，三峡库区水环境演变与污染防治重点实验室，中国重庆，404020

<sup>b</sup> 四川文理学院化学化工学院，中国四川达州，635000 <sup>c</sup> 重庆三峡学院机械工程学院，中国重庆，404020 <sup>d</sup> 广西大学广西石化资源加工及过程强化技术重点实验室，中国南宁，530004 <sup>e</sup> 华东理工大学化学工程联合国家重点实验室及化学与分子工程学院，中国上海，200237

## 文 章 信 息

关键词：[[全氟和多氟烷基物质]]（PFAS） [[天然有机质]] [[分子动力学]] [[机器学习]] [[吸附]]

## 摘 要

理解 [[全氟和多氟烷基物质|PFAS]] 在[[腐殖质]]（HS）上的[[吸附]]行为，对于预测其[[环境归趋]]和制定有效的[[污染修复|修复策略]]至关重要。本研究结合[[分子动力学]]（MD）模拟、实验表征和[[可解释机器学习]]（XAI），从分子层面解析 PFAS 与 HS 的相互作用。基于 410 种 PFAS 结构，由 MD 获得的[[吸附能]]揭示了明确的结构依赖性吸附趋势，[[分子量]]与吸附能大小之间呈强负相关（Pearson's |r| > 0.72）。[[机器学习]]模型表现出稳健的预测性能 $\mathbf { \mathrm { ( R ^ { 2 } } } > 0 . 8 8 \mathrm { ) }$ ，能够准确预测结构各异的 PFAS 的吸附能。[[SHAP]] 分析表明，PFAS 在 HS 上的吸附受多个[[分子描述符]]的[[协同作用]]支配，而非由任何单一分子性质决定。[[摩尔折射率]]、[[三阶Kappa分子形状指数|Kappa3]]、[[氢键受体数量|氢键受体数]]和分子量是影响最大的描述符，凸显了[[电子极化性]]、[[分子拓扑结构]]、[[构象适应性]]和尺寸在控制吸附过程中的耦合作用。相比之下，与[[分子极性|极性]]和[[水合]]倾向相关的描述符与迁移行为的联系更为密切。[[吸附实验]]以及互补的光谱和显微表征一致证实，[[长链PFAS|长链 PFAS]] 会引起更强的[[氟富集]]，并使 HS 基质更加致密。总体而言，各项结果共同形成了一幅统一的分子图景：尺寸更大、极化性更强且结构适应性更高的 PFAS 优先被截留，而尺寸较小且更易水合的 PFAS 则保持相对较高的[[污染物迁移性|迁移性]]。本研究为预测 PFAS 在非均质有机环境中的迁移提供了一个融合物理知识且可解释的框架。

## 术语表

<table><tr><td>FTIR</td><td>傅里叶变换红外</td></tr><tr><td>GAFF</td><td>通用 Amber 力场</td></tr><tr><td>GB</td><td>梯度提升</td></tr><tr><td>HA</td><td>腐殖酸</td></tr></table>

（续）

（下栏续）

<table><tr><td>HS</td><td>腐殖质</td></tr><tr><td>Kappa3</td><td>Kappa 形状指数中的三阶分子形状指数</td></tr><tr><td>MAE</td><td>平均绝对误差</td></tr><tr><td>MD</td><td>分子动力学</td></tr><tr><td>ML</td><td>机器学习</td></tr></table>

（下页续）

（续）

<table><tr><td>MolMR</td><td>摩尔折射率</td></tr><tr><td>MolWt</td><td>分子量</td></tr><tr><td>MSE</td><td>均方误差</td></tr><tr><td>NOM</td><td>天然有机质</td></tr><tr><td>NumRotatableBonds</td><td>可旋转键数量</td></tr><tr><td>PFAS</td><td>全氟和多氟烷基物质</td></tr><tr><td>PFBA</td><td>全氟丁酸</td></tr><tr><td>PFHxA</td><td>全氟己酸</td></tr><tr><td>PFOA</td><td>全氟辛酸</td></tr><tr><td> $R^2$ </td><td>决定系数</td></tr><tr><td>RF</td><td>随机森林</td></tr><tr><td>RMSE</td><td>均方根误差</td></tr><tr><td>SEM</td><td>扫描电子显微术</td></tr><tr><td>SHAP</td><td>Shapley 加性解释</td></tr><tr><td>SMILES</td><td>简化分子线性输入规范</td></tr><tr><td>SP3 Flexibility</td><td>基于 $Sp^3$ 分数的分子柔性描述符</td></tr><tr><td>TPSA</td><td>拓扑极性表面积</td></tr><tr><td>TPSA×LogP</td><td>拓扑极性表面积与辛醇-水分配系数的乘积</td></tr><tr><td>XPS</td><td>X 射线光电子能谱</td></tr><tr><td>NumHAcceptors</td><td>氢键受体数量</td></tr></table>

## 1. 引言

[[全氟和多氟烷基物质]]（PFAS）因其极强的[[环境持久性|持久性]]、广泛的分布以及潜在的不良健康影响，已成为全球最紧迫的水质挑战之一。在不同气候和地理区域的[[地表水]]、[[地下水]]、[[饮用水供水系统]]和[[水生生态系统]]中，均有其污染的报道 [1,2]。随着全球监管限值不断收紧，准确预测 PFAS 的[[环境归趋]]和[[污染物迁移性|迁移性]]已成为[[水质管理]]、[[风险评估]]和[[污染修复|修复规划]]的迫切需求 [3,4]。PFAS 归趋评估中的一个核心不确定性在于其与[[天然有机质]]（NOM）的相互作用，后者普遍存在于地表水、地下水系统和地下环境中 [5–7]。然而，尽管它们广泛存在于天然水体中，支配 PFAS–NOM 相互作用的分子尺度机制仍未得到充分理解。

[[天然有机质|NOM]] 提供了一个[[吸附]]域，对水生体系中 [[全氟和多氟烷基物质|PFAS]] 的吸附行为具有关键影响 [7,8]。越来越多的证据表明，PFAS 在[[溶解性有机质]]上的吸附对有机基质的[[化学异质性]]高度敏感，包括其[[芳香性]]、[[疏水性]]以及[[含氧官能团]]的丰度 [9,10]。在富含芳香结构或具有疏水性的组分中，PFAS 通常表现出更强的[[吸附亲和力]]，凸显了 PFAS [[分子结构]]与有机质化学组成之间[[非共价相互作用]]的重要性 [11,12]。此外，$\mathrm { C a } ^ { 2 + }$ $\mathrm { M g } ^ { 2 + }$ 和 $\mathrm { F e } ^ { 3 + }$ 等[[多价阳离子]]可通过促进与 NOM 中[[官能团]]的[[桥联相互作用]]，进一步增强 PFAS 的吸附 [13]。相反，取决于分子组成和溶液条件，有机质也可能通过[[竞争性溶剂化]]或使 PFAS 稳定于溶解相中，降低其表观吸附 [14]。这些发现表明，NOM 对 PFAS 的吸附并非由单一的物理化学[[分子描述符|描述符]]所支配，而是由[[含氟链结构]]、[[头基化学性质]]及其[[结构异质性]]之间的复杂相互作用共同决定。然而，目前对 PFAS–NOM 相互作用的解释仍在很大程度上依赖于[[链长]]或整体疏水性等简化的经验关系，这些关系不足以解析结构多样的 PFAS 和 NOM 体系中的吸附行为 [15]。因此，对于 NOM 吸附 PFAS 的分子决定因素及其结构依赖性机制，目前仍缺乏深入认识。弥补这一认知空白，需要建立一个能够分辨结构差异且具有机制[[模型可解释性|可解释性]]的框架，将分子层面的相互作用与吸附行为预测联系起来。

[[腐殖质]]（HS），尤其是[[腐殖酸]]（HA），是 [[天然有机质|NOM]] 的主要组成部分，具有显著的化学和[[结构异质性]]。在分子层面，HS 可同时介导与 [[全氟和多氟烷基物质|PFAS]] 之间的多种相互作用途径，包括[[疏水分配]]、[[静电缔合]]、[[氢键相互作用|氢键相关相互作用]]以及[[空间位阻限域]] [16–18]。通过这些耦合机制，HS 可显著改变 PFAS 的[[吸附亲和力]]和表观分配行为 [19–21]。既往批量[[吸附]]研究表明，HA 既可能增强也可能抑制 PFAS 的吸附，具体取决于吸引性相互作用（如疏水分配和[[阳离子桥联]]）与[[竞争性位点占据]]或[[空间位阻屏蔽]]等抑制效应之间的平衡 [22]。复杂环境基质中的类似观察进一步表明，HS 的[[芳香性]]、化学多样性和[[官能团]]分布对 PFAS 的结合行为具有显著影响 [23,24]。此外，不同 PFAS [[同系物]]和[[异构体]]结构的吸附响应可能存在显著差异，表明仅凭[[链长]]或整体[[疏水性]]无法充分解释吸附行为 [25]。总体而言，这些研究揭示了一个高度依赖结构的吸附格局，其中 PFAS 的[[分子结构]]与 HS 的异质性共同决定吸附结果。然而，现有研究在很大程度上仍较为零散，往往聚焦于单一 PFAS、简化模型体系或 HS 的整体[[分子描述符|描述符]]，从而限制了对化学性质多样的 PFAS–HS 体系的机制解释和预测[[泛化能力]]。

克服这些局限需要建立一个分子层面的框架，明确考虑 [[全氟和多氟烷基物质|PFAS]] 的结构多样性和 [[腐殖质|HS]] 固有的[[化学异质性]]。HS 是由[[芳香族]]、[[脂肪族]]、[[分子极性|极性]]及带电结构域构成的复杂集合体，呈现出异质性的相互作用环境，而非均一的[[吸附剂]] [26]。因此，厘清不同 PFAS 结构如何与这一环境相互作用，对于解释[[吸附亲和力]]和分配行为的差异至关重要。然而，面对迅速扩展的 PFAS [[化学空间]]，仅靠实验方法在系统性解析这些机制方面存在固有局限。[[分子动力学]]（MD）模拟为以原子分辨率探究[[分子间相互作用]]，以及量化[[吸附]]与缔合的结构和能量驱动因素提供了有力手段 [27–30]。事实上，MD 已被广泛用于阐明复杂环境体系中的吸附和[[界面相互作用]]机制 [31–33]。然而，以往的模拟研究通常仅关注少数代表性 PFAS 或简化的腐殖质模型，限制了其机制认识向环境相关 PFAS–HS 体系的推广。与此同时，[[机器学习]]（ML）方法正越来越多地用于预测吸附相关性质和行为 [34,35]。然而，许多此类模型主要作为黑箱预测器运行，对支配吸附行为的分子决定因素缺乏充分的机制透明性。上述局限共同凸显了采用综合策略的必要性，即结合[[分子模拟]]、可解释的数据驱动建模和实验验证，建立对 [[腐殖酸|HA]] 吸附 PFAS 的具有预测能力且能分辨结构差异的认识。

在本研究中，我们建立了一个能够分辨结构差异且机制可解释的框架，将 [[分子动力学模拟|MD 模拟]]、[[机器学习]]和实验表征相结合，以阐明 [[腐殖质|HS]] 的代表性组分 [[腐殖酸|HA]] 对 [[全氟和多氟烷基物质|PFAS]] 的[[吸附]]。具体而言，我们系统地量化了近 410 个 PFAS–HA 体系的[[吸附能]]，涵盖了一组具有化学多样性的环境相关 PFAS。通过将具有物理依据的[[分子描述符]]与[[集成学习|集成 ML 模型]]及 [[SHAP|Shapley 加性解释]]（[[Shapley加性解释|SHAP]]）相结合，我们解析了支配不同化学结构 PFAS 吸附行为的主要结构和物理化学决定因素。此外，还开展了[[吸附实验]]测量，以独立验证模型预测并支持机制解释。这一综合框架深化了对富含腐殖质环境中 PFAS 吸附的预测性认识，并为解释[[环境分配]]行为、改进 PFAS [[风险评估]]以及指导[[污染修复|修复策略]]提供了分子层面的依据。

## 2. 材料与方法

## 2.1. 实验步骤

化学品与材料。选取[[全氟丁酸]]（PFBA，CAS No. 375–22-4）、[[全氟己酸]]（PFHxA，CAS No. 307–24-4）、[[全氟辛酸]]（PFOA，CAS No. 335–67-1）、[[全氟丁烷磺酸盐]]（[[全氟丁烷磺酸|PFBS]]，CAS No. 375–73-5）、6:2 氟调聚物[[磺酸盐]]（6:2 FTS，CAS No. 27619–97-2）和[[六氟环氧丙烷二聚体酸]]（[[GenX]]，CAS No. 13252–13-6）作为代表性 [[全氟和多氟烷基物质|PFAS]]，涵盖广泛的[[链长]]、[[头基化学性质]]和代际类别。所有标准品均购自 [[阿拉丁试剂|Aladdin]]（中国上海），按原样使用，未经进一步纯化。所有 PFAS 标准品均为[[分析纯]]（纯度 ≥98%），使用前未经进一步纯化。[[腐殖酸|HA]] 按下述方法从[[褐煤]]中提取。

提取物的制备。提取前，将[[褐煤]]样品[[风干]]并[[筛分]]，获得粒径为 2–5 mm 的粒级。使用 8%（w/v）NaOH 溶液对 [[腐殖酸|HA]] 进行碱提取。采用 1:15（g/[[机器学习|mL]]）的固液比，以确保碱溶性有机组分充分溶解。提取过程在用封口膜密封的锥形瓶中进行，以尽量减少 HA 氧化和溶剂蒸发。采用两种提取方法以提高 HA 的回收率。对于超声辅助提取，使用超声波浴（Digital XUB-10），以 0.200 kW 的超声功率在 $4 0 \pm 2  { \mathrm { ~ \circ ~ } } _ { \mathrm { { C } } }  { \mathrm { f o r } } 0 . 5  { \mathrm { ~ h ~ } }$ 对于动态浸渍提取，使用磁力搅拌器对混合物加热并持续搅拌，在受控条件下将温度保持在 $4 9 { - } 5 2 ~ ^ { \circ } \mathrm { C }$，持续 12 h。提取后，将悬浮液冷却至 $2 5 \pm 2 ^ { \circ } \mathrm { C }$，通过真空过滤去除固体残渣，并保留滤液。随后向滤液中加入稀盐酸，将 pH 调至 1，诱导形成絮状沉淀。将混合物静置沉降，随后通过倾析去除上清液。之后，使用 SIGMA 3-18KS 离心机（德国 Seelze）将悬浮液以 3000 rpm 离心 4 min，并收集沉淀。最后，用去离子水将所得固体洗涤至接近中性，[[冷冻干燥]]后用于后续表征和[[吸附实验]]。

[[FTIR|傅里叶变换红外光谱]]（[[傅里叶变换红外光谱|FTIR]]）。使用 FTIR 光谱仪（Shimadzu，日本）进行 FTIR 光谱分析，以表征所提取 [[腐殖酸|HA]] 和 HA–[[全氟和多氟烷基物质|PFAS]] 复合物的[[官能团]]。在室温下采用衰减全反射模式，在 $4 0 0 0 { - } 4 0 0 \mathrm { c m } ^ { - 1 }$ 的波数范围内记录光谱。分析前，将样品[[冷冻干燥]]、干燥至恒重并精细研磨，以确保光谱均一性。每张光谱均以 4 $\mathrm { c m } ^ { - \mathrm { i } }$ 的分辨率扫描 64 次采集，以提高信噪比。每次测量前均在相同条件下记录背景光谱，并自动扣除。进行包括基线校正和归一化在内的光谱处理，以确保样品间的可重复性和可比性。

[[X射线光电子能谱|X 射线光电子能谱]]（[[XPS]]）。采用 XPS 研究 [[腐殖酸|HA]] 在[[吸附]] [[全氟和多氟烷基物质|PFAS]] 前后的表面元素组成及化学态变化。使用配备单色 Al Kα X 射线源的 K-Alpha XPS 仪器进行测量 $( \mathrm { h } \nu = 1 4 8 6 . 6 \ : \mathrm { e V } )$ 。在超高真空条件下，工作功率设为 150 W。将[[冷冻干燥]]后的样品轻轻压在导电碳胶带上，未经进一步化学处理即送入分析室，以保留吸附引起的表面化学特征。在 −10–1350 eV 的[[结合能]]范围内采集全谱，以确定元素组成。随后，以 50 eV 的通能和

0.1 eV 的步长采集 C 1 s、O 1 s、S 2p 和 F 1 s 区域的高分辨率谱图。

[[SEM|扫描电子显微镜]]（[[扫描电子显微术|SEM]]）。使用 SEM5000 在 1–2 kV 的加速电压下开展 [[扫描电子显微镜|SEM]] 表征，以研究原始 [[腐殖酸|HA]] 和 HA–[[全氟和多氟烷基物质|PFAS]] 复合物的表面形貌及微观结构演变。[[吸附实验]]结束后，立即对样品进行真空[[冷冻干燥]]，以保留其原有聚集状态，并尽量减少常规热干燥过程中毛细力引起的结构坍塌。将冷冻干燥后的样品轻轻研磨成均匀粉末，并固定在导电碳胶带上。在多个放大倍数下采集显微图像，以评估整体颗粒分布和精细表面形貌。

液相色谱–串联质谱（LC–MS/ MS）。使用 Shimadzu LCMS-8045 三重四极杆 LC–MS/MS 系统，在负离子电喷雾电离（ESI−）和多反应监测（MRM）模式下测定水相中的 [[全氟和多氟烷基物质|PFAS]] 浓度。[[吸附]]平衡 72 h 后，将样品离心，并通过 0.22 μm 聚四氟乙烯（PTFE）滤膜过滤，以去除与 [[腐殖酸|HA]] 结合的聚集体。滤液直接进行 LC–MS/MS 分析，或根据需要稀释后再进行分析。以乙酸铵水溶液和甲醇为流动相，采用梯度洗脱，在反相 C18 色谱柱上分离 PFAS。每种分析物均使用两个特征 MRM 离子对进行监测，并采用外标校准曲线定量。定期分析程序空白和校准标准样品，以确保分析准确性和仪器稳定性。采用质量平衡法确定 HA 对 PFAS 的[[吸附量]]：$Q _ { e } = ( C _ { 0 } - C _ { e } ) { \cdot } V / m$ ，其中，$Q _ { e }$ 为[[平衡吸附容量]]，$C _ { 0 }$ 和 $C _ { e }$ 分别为 PFAS 的初始浓度和平衡浓度 $\mathrm { ( m g \bullet L ^ { - 1 } ) }$ ，V 为溶液体积，m 为 HA 的质量。PFAS 的初始浓度为 2.0 mg•L<sup>−</sup> <sup>1</sup>。

## 2.2. [[分子动力学模拟|MD 模拟]]

模拟方案。[[全氟和多氟烷基物质|PFAS]] 分子和 [[腐殖酸|HA]] 模型的[[分子拓扑结构|拓扑结构]]及力场参数使用 Automated Topology Builder（ATB）生成 [36]。ATB 参数化方案已在生物膜和软物质体系中得到广泛验证，能够准确描述包括卤键在内的关键[[非共价相互作用]] [37]。采用 SPC/E 水模型表示水环境。自然环境中的 HA 因来源不同而存在显著差异（例如 $g . ,$ ，水生环境、土壤、泥炭）。为开展结构分辨分析，本研究采用基于土壤 HA 建立的 [[Stevenson 腐殖酸模型|Stevenson HA 模型]] [38]。[[FTIR]] 分析证实，该结构能够表征天然 HA 的平均化学组成和代表性[[官能团]] [39]，包括[[芳香族]]羧酸、醌基团、类酪氨酸单元、连接基团、糖类和芳香族[[羟基]]，如图 S1 所示。这些化学性质各异的结构基元反映了 [[腐殖质|HS]] 所特有的分子异质性的关键方面。尽管具有代表性的 [[Stevenson腐殖酸模型|Stevenson HA 模型]]能够表征天然 HA 的关键结构特征，但它并未充分涵盖天然 HA 在组成和结构上的异质性。

[[分子动力学|MD]] 模型构建的示意图见图 S2。首先生成具有代表性的[[凝聚相]] [[腐殖酸|HA]] 结构并使其达到平衡。对于每种 [[全氟和多氟烷基物质|PFAS]]，通过将 PFAS 分子随机插入已平衡的 HA 基质中，构建独立的[[吸附]]体系，随后分别进行平衡和生产阶段的 [[分子动力学模拟|MD 模拟]]。对于所模拟水环境条件下的去质子化 HA 和离子化 PFAS 物种，MD 模拟采用相应的去质子化或离子化形式。加入 Na<sup>+</sup> 反离子以中和体系的净电荷，随后加入 NaCl，使离子强度达到 0.1 M。随后采用粒子网格 Ewald（PME）方法对所得体系进行模拟，以处理长程[[静电相互作用]]。更多细节见图 S2。

温度和压力分别维持在 300 K 和 1 bar。在三个空间方向上均施加周期性边界条件。采用粒子网格 Ewald 方法处理长程[[静电相互作用]]，实空间截断距离为 1.2 nm。范德华相互作用的截断距离设为 1.2 nm。使用 LINCS 算法约束所有涉及氢原子的共价键。我们此前的研究 [37,40,41] 对 [[分子动力学模拟|MD 模拟]]方法作了全面描述。随后在 NPT 系综下进行 100 ns 的 [[分子动力学|MD]] 模拟，时间步长为 2 fs。通过[[势能]]、RMSD 和[[密度分布]]评估收敛性，如图 S3 所示。稳定的能量和 RMSD 波动，以及在 80 至 100 ns 期间几乎不变的密度分布，证实模拟已达到平衡。尤其对于[[吸附]]在有机基质上的大型柔性 [[全氟和多氟烷基物质|PFAS]] 分子，100 ns 的模拟似乎足以对相关吸附构象进行采样，模拟快照中观察到的持续 PFAS–[[腐殖酸|HA]] 接触以及密度分布随时间的收敛为此提供了证据（图 S4）。使用 GROMACS（2020.5 版）[42] 开展 MD 模拟，以生成用于 [[机器学习|ML]] 模型训练的分子间[[结合能]]。详细的 MD 模拟方案已在我们此前的研究 [43,44] 中报道。

分子间能量。使用 GROMACS 软件的能量模块计算 [[全氟和多氟烷基物质|PFAS]]–[[腐殖酸|HA]] [[吸附能]]，将总相互作用能分解为静电贡献和范德华贡献：

$$
E _ {P F A S - H A} = E _ {C o u l o m b} ^ {P F A S - H A} + E _ {L J} ^ {P F A S - H A},
$$

其中，$E _ { C o u l o m b } ^ { P F A S - H S }$ 和 $E _ { L J } ^ { P F A S - H S }$ 分别表示 [[全氟和多氟烷基物质|PFAS]] 与 [[腐殖酸|HA]] 分子之间的[[静电相互作用能]]和 [[Lennard–Jones相互作用能|Lennard–Jones 相互作用能]]。对于这些贡献中的每一项，能量定义为 $E = E _ { c o m p l e x } - \ E _ { H S } - \ E _ { P F A S }$，其中，$E _ { c o m p l e x }$ 表示 [[PFAS–腐殖酸复合物|PFAS–HA 复合物]]的[[势能]]，E<sub>PFAS</sub> 和 $E _ { H S }$ 分别表示孤立 PFAS 分子和 HA 的能量。

## 2.3. [[机器学习]]

建立了一套[[物理信息机器学习|融入物理信息的 ML]] 工作流程，用于预测 [[腐殖酸|HA]] 环境中的 [[全氟和多氟烷基物质|PFAS]] [[吸附]]行为。由于训练数据来自单一的 [[Stevenson 腐殖酸模型|Stevenson HA 模型]]，所学习到的 PFAS–HA 相互作用模式可能受到该模型特定结构特征的影响，其向化学性质不同的 [[腐殖质|HS]] 体系迁移的能力仍有待评估。整个工作流程由七个依次进行的模块组成。如方案 S1 所示，这些模块包括：(i) [[数据集构建]]，(ii) [[分子特征构建]]，(iii) [[分子描述符|描述符]]共线性控制，(iv) [[特征工程]]，(v) [[共识特征选择|基于共识的特征选择]]，(vi) 集成模型开发，以及 (vii) 可解释模型分析。

[[数据集构建]]。构建了一个综合性 [[全氟和多氟烷基物质|PFAS]] 数据集，以建立支配 PFAS–[[腐殖酸|HA]] 体系的[[定量结构–相互作用关系]]。从文献中整理了共 413 种结构多样的 PFAS，主要依据 [[Mudlaff]] 等人 [45] 报道的汇编，该汇编提供了具有环境相关性的 PFAS 结构，涵盖不同的[[链长]]、[[头基]]、[[分子支化|支化模式]]和[[官能团]]取代形式。以[[简化分子线性输入规范]]（SMILES）格式获取[[分子结构]]，并在计算[[分子描述符|描述符]]之前进行标准化。对每种 PFAS 分子进行 [[分子动力学模拟|MD 模拟]]，以量化其在 HA 中的相互作用能量特征和[[污染物迁移性|迁移性]]。由此获得了近 410 个 PFAS–HA 相互作用体系，形成了具有明确结构信息的模拟数据集。所得[[吸附能]]分布见图 S5。数据集按 7:1.5:1.5 的比例随机划分为[[训练集]]、[[验证集]]和[[测试集]]。

[[分子特征构建]]。使用 [[RDKit]] [46]，根据规范 [[简化分子线性输入规范|SMILES]] 字符串生成 [[全氟和多氟烷基物质|PFAS]] 的[[分子表征]]。为同时捕捉局部子结构模式和整体物理化学特征，将[[环形分子指纹]]与具有物理意义的[[分子描述符]]相结合，构建了混合描述符空间。具体而言，生成了两组 [[Morgan指纹|Morgan 指纹]]（半径 = 2，2048 位；半径 = 3，1024 位），以编码氟化链结构基元、[[分子支化|支化模式]]以及[[官能团]]层面的[[结构异质性]]。同时，计算了一组扩展的物理化学和[[拓扑描述符]]，汇总见表 S2。

[[分子描述符|描述符]]共线性控制。为提高模型稳定性并减少连续描述符之间的冗余，在模型拟合前采用了三步共线性控制流程。首先，通过[[方差阈值过滤|低方差过滤]]去除方差可忽略不计的描述符。其次，进行两两 [[Pearson相关分析|Pearson 相关分析]]，并从每一对高度相关的描述符 $( | \mathbf { r } | \geq 0 . 9 5 )$ 中剔除一个描述符。第三，使用[[方差膨胀因子]]（VIF）对剩余描述符子集进行诊断评估，以验证[[多重共线性]]已得到有效抑制。该流程确保最终描述符矩阵在保留机理多样性的同时，避免[[过度参数化]]。

[[特征工程]]。为在原始[[分子描述符|描述符]]集的基础上增强物理化学[[模型可解释性|可解释性]]，进一步利用过滤后的描述符构建了一系列与相互作用相关的工程化描述符。这些描述符包括归一化[[分子极性|极性]]和[[疏水性]]指标（如[[拓扑极性表面积]]（TPSA）与[[分子量]]之比、[[辛醇-水分配系数|logP]] 与分子量之比）、[[氢键形成能力指数]]、[[芳香性比率]]、[[氟密度]]、柔性相关描述符、[[分子复杂度密度]]、[[电荷跨度描述符]]以及[[形状各向异性]]项。这些工程化特征旨在更好地反映与[[吸附]]相关的属性，如[[疏水分配]]倾向、[[静电异质性]]、[[构象柔性]]和[[氟化表面密度]]，预计这些属性会影响 [[全氟和多氟烷基物质|PFAS]] 与异质性 [[腐殖酸|HA]] 结构域的缔合。同时，采用[[方差阈值过滤]]对二元指纹空间进行[[降维]]，以去除不提供有效信息的位。随后，将保留的指纹特征与过滤后的连续描述符及工程化特征拼接，形成最终的候选特征矩阵。

[[共识特征选择|基于共识的特征选择]]。鉴于样本量适中且分子特征空间维度较高，采用了共识特征选择策略，以识别稳健的预测变量，同时降低[[过拟合]]风险。使用三种互补方法独立评估[[特征重要性]]：[[互信息回归]]、[[随机森林]]重要性排序以及基于 [[LASSO回归|LASSO]] 的[[稀疏回归]]。被三种方法中至少两种选中的特征被保留在最终的 [[机器学习|ML]] 输入空间中。这一基于投票的框架能够同时保留非线性相关性、基于树模型的预测效用以及线性稀疏结构，从而提高稳健性和[[模型可解释性|可解释性]]。

集成模型开发与评估。使用 [[RobustScaler]] 对选定特征进行缩放，选择该方法是为了降低对化学多样性较高的 [[全氟和多氟烷基物质|PFAS]] 数据集中常见的[[偏态分布]]和类似[[异常值]]的[[分子描述符|描述符]]数值的敏感性。随后，将数据集划分为[[训练集]]、[[验证集]]和[[测试集]]，分别用于模型开发、[[超参数调优]]和独立性能评估。对五种[[集成回归]]算法进行了基准比较：[[XGBoost]]、[[LightGBM]]、[[CatBoost]]、[[梯度提升]]（GB）和[[随机森林]]（RF）。选择这些算法是因为它们在结构化化学数据上表现出色，并且能够捕捉非线性[[结构–性质关系]]。集成模型优化后的超参数设置见表 S3。

[[模型可解释性]]分析。为超越预测准确性并提取机理层面的见解，采用 [[SHAP|Shapley 加性解释]]（Shapley Additive exPlanations，[[Shapley加性解释|SHAP]]）对表现最佳的集成模型进行解释。SHAP 分析用于在全局和单一样本层面量化各[[分子描述符|描述符]]对模型预测的贡献。该框架能够识别与 [[腐殖酸|HA]] 环境中 [[全氟和多氟烷基物质|PFAS]] [[吸附]]行为关联最强的结构和物理化学特征，并为区分[[污染物滞留|滞留]]主导型与迁移主导型分子行为模式提供可解释的依据。所构建的数据集和代码可见：https://github.com/ xysonglabx/[[机器学习|ML]]-PFAS。

准确性表现。采用[[决定系数]] $( \mathrm { R } ^ { 2 } ) ,$、[[均方根误差]]（RMSE）、[[平均绝对误差]]（MAE）和[[均方误差]]（MSE），在[[训练集]]、[[验证集]]和[[测试集]]上评估模型性能。此外，记录了基于提升方法的模型的迭代训练历程，以监测[[模型收敛|收敛行为]]并评估泛化稳定性。$\mathrm { R } ^ { 2 }$ 衡量模型所解释的观测数据方差比例，定义如下：

$$
R ^ {2} = 1 - \frac {\sum_ {i = 1} ^ {n} (y _ {i} - \widehat {y} _ {i}) ^ {2}}{\sum_ {i = 1} ^ {n} (y _ {i} - \overline {{y}} _ {i}) ^ {2}},
$$

其中，$y _ { i }$ 和 $\widehat { y } _ { i }$ 分别表示观测值和预测值，y 为观测值的平均值。$\mathrm { R } ^ { 2 }$ 的取值范围为负无穷至 1，越接近 1，表明预测性能越好。[[均方误差|MSE]] 用于评估预测值与观测值之间差值平方的平均值：

$$
M S E = \frac {1}{n} \sum_ {i = 1} ^ {n} \left(y _ {i} - \widehat {y} _ {i}\right) ^ {2}.
$$

[[均方根误差|RMSE]] 定义为 [[均方误差|MSE]] 的平方根，提供与目标变量单位相同的误差度量：$R M S E = \sqrt { M S E } .$ [[平均绝对误差|MAE]] 用于量化预测误差的平均大小，而不考虑其方向：

$$
M A E = \frac {1}{n} \sum_ {i = 1} ^ {n} \left| y _ {i} - \widehat {y} _ {i} \right|.
$$

[[均方根误差|RMSE]]、[[均方误差|MSE]] 和 [[平均绝对误差|MAE]] 的值越低，表明预测准确性越高。

## 3. 结果与讨论

## 3.1. 数据集准备

如图 1A 所示，[[SEM]] 成像显示，[[腐殖酸|HA]] 呈现典型的[[层状褶皱形貌]]，[[表面粗糙度]]具有非均一性。这种[[层状结构|层状]]结构表明，[[疏水性芳香域]]、富含[[分子极性|极性]][[官能团]]的区域以及纳米尺度的[[限域空腔]]可能共存。预计这种结构非均一性可为 [[全氟和多氟烷基物质|PFAS]] 分子形成多样的[[吸附微环境]]，为 [[天然有机质|NOM]] 中[[污染物滞留|滞留]]与迁移行为的共存提供结构基础。既往研究表明，空腔结构 [47] 和官能团丰度 [48] 均可影响污染物的[[吸附]]。由于本研究采用了具有代表性的 [[Stevenson 腐殖酸模型|Stevenson HA 模型]]，因此未显式考虑某些 [[Leonardite]] 来源 [[腐殖酸聚集体|HA 聚集体]]中已报道的复杂空腔结构 [49]。因此，所识别的吸附模式主要反映 PFAS 与官能团及表面吸附环境的相互作用，而[[空腔介导吸附|空腔介导的吸附]]仍有待探索 [50]。基于这些结构特征，构建了含 PFAS 的 [[腐殖酸–水两相体系|HA/水两相体系]]用于 [[分子动力学模拟|MD 模拟]]，如图 1B 所示。[[分子动力学|MD]] 模拟体系的构建细节见图 S2。该体系能够同时量化 PFAS 在 HA 界面处的吸附以及在水相和界面区域中的[[扩散|扩散行为]]。在图 1C 中，沿模拟盒 z 方向的[[密度分布]]曲线表明，HA 在模拟盒中心区域形成稳定的[[凝聚相]]，而外侧区域则以[[体相水]]为主。PFAS 分子在 [[腐殖酸–水界面|HA–水界面]]附近表现出明显的密度富集，并部分渗入 HA 内部。这一现象表明，PFAS 的分配受双重机制支配：[[界面吸附]]主导短程滞留，而 HA 内部的[[结构嵌入]]控制其在环境中的长期封存。这种双重行为与野外观测结果一致，即 PFAS 在富含有机质的环境中既表现出[[污染物阻滞|阻滞]]，也表现出缓慢释放。值得强调的是，将 HA 的[[体相密度]]与实验测量值进行比较后发现，两者吻合良好 [51]。

A  
![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/d8602291d7afce79ea24223efdffe198a7c99093ac8def7489202f7309f3e020.jpg>)

B  
![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/c108eec503a400d36a07f4fcedc1ff916d2ac4b76416f53ce3299d91490a3479.jpg>)

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/6a47e6bc6802efb904bbd72af9e7808bca40728562575372f3ef8bd02b2e22d5.jpg>)

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/4cabe774eb2e3437383d2e622df6b59fc5a67f6d76361072e527459496c9e985.jpg>)

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/313956211c5f7c951634505d5ffc849e08f47daa79b5113daebfe6d3a7af6a2c.jpg>)

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/e30dfc115bcf6e861b981987e35b96ab689584ef833efd5f41819452f5312633.jpg>)

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/08d3d0241529d2f8ad8e02114d2cf5787179f5908bf2e6e4077ecf8ebdc503da.jpg>)  
图 1. (A) 原始 HA 的 SEM 图像。(B) 用于计算结合能的 MD 模拟设置。(C) HA、水和 PFAS 沿模拟盒 z 方向的密度分布曲线。(D) PFAS 化学空间的 t-SNE 投影，其中灰色点代表已报道的 \~4600 种 PFAS，彩色点代表 \~410 种 PFAS；颜色表示结合能。(E1–E3) 完整 PFAS 数据库与所选数据集在 (E1) 分子量、(E2) LogP 和 (E3) TPSA 方面的分布比较。

为确保 [[机器学习|ML]] 模型的可靠性和[[泛化能力]]，我们评估了所选 [[全氟和多氟烷基物质|PFAS]] 数据集对[[化学空间]]的覆盖程度。如图 1D 所示，基于包含约 4600 种已报道 PFAS 污染物的数据库进行的 [[t-SNE]] 投影表明，本研究选取的 \~410 种 PFAS 分子在整个 PFAS 化学空间中分布良好。未观察到明显的聚类偏倚或[[分子描述符|描述符]]空白区域。在 $\mathbf { F i g . }$ S6 的 [[UMAP]] 投影中也可观察到类似结果。这证实，所选数据集有效涵盖了结构多样性，包括[[氟化链长度]]、[[头基化学性质]]和[[分子拓扑结构]]的变化。在图 1 E1 中，[[分子量]]分布表明，所选 PFAS 集合涵盖了从[[短链PFAS|短链 PFAS]] 到高分子量聚合物类或前体类物质的范围。在图 1 E2 中，[[辛醇-水分配系数|LogP]] 分布表明其覆盖了从[[亲水性]]到强[[疏水性]]的 PFAS，而图 1 E3 所示的[[拓扑极性表面积]]（TPSA）分布证实，该集合同时包含低[[分子极性|极性]]和高[[极性]]分子。重要的是，所选数据集的描述符分布与完整 PFAS 数据库的描述符分布高度一致，从而最大限度地减少了 ML 模型训练过程中的[[分布偏移]]。所选 PFAS 的[[吸附能]]分布见图 S5。

## 3.2. [[结构–性质关系]]

随后，我们评估了多种[[集成学习]]算法，以确保模型在结构多样的 [[全氟和多氟烷基物质|PFAS]] 化合物上的稳健性和预测可靠性。在图 2 A 和 2B 中，[[XGBoost]] 和 [[梯度提升|GB]] 模型在[[训练集]]和[[测试集]]上的预测[[吸附能]]均与 [[分子动力学|MD]] 计算的[[吸附]]能高度一致，表明其在较宽的吸附能范围内具有出色的回归保真度。预测值与计算值的一致性图显示，预测值紧密聚集在拟合线周围，XGBoost 和 GB 模型的 [[Pearson相关系数|Pearson's r]] 值均为 0.96，对应的 $\mathrm { R } ^ { 2 }$ 值分别为 0.93 和 0.92。训练动态进一步凸显了所测试算法之间优化行为的差异。如图 2C 所示，基于提升的模型在训练过程中表现出损失逐步降低和[[模型收敛|稳定收敛]]的特征，但其收敛轨迹和优化效率各不相同。[[LightGBM]] 和 GB 在训练过程中的损失下降最为显著，表明其优化速度快且学习有效。相比之下，XGBoost 和 [[CatBoost]] 的损失曲线几乎呈线性缓慢下降，表明其收敛过程更为渐进。[[随机森林|RF]] 在整个训练过程中表现出阶梯式的损失下降，反映出其集成学习过程与基于提升的模型有所不同。这些差异共同表明，基于提升的模型更适合捕捉支配 PFAS 在 [[腐殖酸|HA]] 上吸附的非线性、层次性[[分子描述符|描述符]]–性质关系。

图 2D–2G 和图 S7 使用四项互补的评价指标，对模型性能进行了更为定量的比较。总体而言，所有集成模型均取得了令人满意的预测性能，$\mathrm { R } ^ { 2 }$ 值介于 0.884 至 0.927 之间，证实该描述符集对 PFAS 吸附行为保有较强的解释能力。在所评估的模型中，XGBoost 始终表现出最佳的综合性能，取得了最高的 $\mathrm { R } ^ { 2 }$（0.927）和最低的预测误差（RMSE = 13.211、MSE = 174.528、MAE = 10.369）。GB 排名第二，其 $\begin{array} { r } { \mathsf { R } ^ { 2 } = 0 . 9 2 0 , } \end{array}$ RMSE = 13.839、MSE = 191.504、MAE = 11.132，表明其同样具有较强的预测能力。CatBoost 也表现出具有竞争力的性能，$\begin{array} { r } { ( \mathrm { R } ^ { 2 } = 0 . 9 1 3 . } \end{array}$、RMSE = 14.438、MSE = 208.449，以及 $\mathtt { M A E } = 1 0 . 6 0 7 )$，而 LightGBM 的性能为 $\mathrm { R } ^ { 2 } = 0 . 9 0 1$、RMSE = 15.347、MSE = 235.523，以及 $\mathbf { M A E } = 1 2 . 2 7 6$。相比之下，RF 的预测准确性最低 $( \mathrm { R } ^ { 2 } = 0 . 8 8 4 )$），且预测误差最大（RMSE = 16.639、MSE = 276.846、MAE = 13.007），表明其充分解析结构异质性 PFAS 分子间细微吸附能差异的能力相对较弱。我们还将所提出的模型与基于简单描述符的基线模型进行了比较，并在更严格的数据划分策略下评估了其性能（图 S8–S10）。基于描述符的基线模型预测准确性显著较低，表明仅凭分子尺寸无法充分解释吸附行为。此外，该模型在基于骨架/聚类的划分下仍保持稳健的性能，证明其能够在结构多样的 PFAS 化学结构之间实现泛化，而非依赖于密切相关的同系化合物。

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/c2856c7809048f0cd410f2f2cb272d8f15a578e0280e203dc82adbee5a9a54c3.jpg>)  
[[吸附能]]/kJ·mol-1

B  
![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/1c41af210b45d9aef2c44b41441c911e1d290ffb0be1e6f635e22106f70dddcd.jpg>)  
[[吸附能]]/kJ·mol-1

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/4d89f72e70abdecdaccb251d635501b221bb669dffdf290635071db362e80581.jpg>)

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/c17918c98ed82187012fcc4848f2147b855b51f94709039f584ac8a89d94d0ed.jpg>)

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/30349ea6f184111682afab22bf51594fc827e7de63e1066717061fa8b5174fb9.jpg>)

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/58ccbf466e74d49e7f65cd933d460b4ecaad08a208f4934fa26c25362c115bd2.jpg>)

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/42b1618c3bcb2b7c1ca6a3619b5b7effd83abeb9d3f3bce8b520ee16bc34c0df.jpg>)

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/66539daf3a7ba1c213ca6320d663a39d6b6246f763ffb7df0fd7e75c2dcdc09f.jpg>)  
图 2.（A–B）使用 XGBoost 和 GB 模型预测的吸附能与 MD 计算的吸附能的比较。（C）五种 ML 模型的训练损失演变。（D–G）基于 $\mathrm { R } ^ { 2 } ,$ RMSE、MSE 和 MAE 的模型性能比较。（H）模型性能随训练样本数量的变化。

为进一步评估数据充分性和模型可扩展性，图 2H 展示了预测性能 $( \mathrm { R } ^ { 2 } )$ 对训练样本数量的依赖关系。随着[[训练集]]扩大，所有模型总体上均呈现性能提升趋势。当训练样本数量从少于 \~75 增加至约 150–225 时，模型性能显著改善，$\bar { \mathsf { R } } ^ { 2 }$ 从约 0.50–0.65 上升至约 0.80–0.88。超出这一范围后，性能增益趋于平缓，表明一旦训练集涵盖足够多样的 [[全氟和多氟烷基物质|PFAS]] 结构，模型便开始趋近于更稳定的泛化状态。在较大的样本量下，[[CatBoost]]、[[XGBoost]] 和 [[梯度提升|GB]] 始终取得最高的 $\mathrm { R } ^ { 2 }$ 值，接近 \~0.90，而 [[随机森林|RF]] 在大多数训练集规模下的表现均略低。这些结果表明，将 [[分子动力学|MD]] 得到的[[吸附能]]量学信息与可解释的[[集成学习]]相结合，为预测富含[[腐殖质]]环境中的 PFAS [[污染物滞留|滞留]]行为提供了一个稳健且可扩展的框架，在[[环境归趋]]评估和[[污染物迁移]]建模方面具有很大潜力 [52]。

图 3 中的 SHAP 特征重要性排序和汇总分布为理解 PFAS 与 HA 之间的相互作用提供了一致且具有物理可解释性的见解。从机理上看，两个模型均指向多描述符协同作用框架，而非单一因素主导 [53]。在图 3A–3C 所示的 XGBoost 模型中，全局 SHAP 排序表明，摩尔折射率（MolMR）是占主导地位的描述符，其次依次为拓扑极性表面积（TPSA）、分子量（MolWt）、第三 Kier 分子形状指数（Kappa3）和氢键受体数（NumHAcceptors）。这些描述符表明，分子极化率、极性、尺寸和拓扑结构是 PFAS–HA 相互作用的主要决定因素。具体而言，MolMR 反映了分子的整体电子变形能力和色散相互作用能力，表明极化率更高的 PFAS 能够与 HA 中非均质的疏水域和芳香域形成更强的非共价相互作用。TPSA 和 NumHAcceptors 表征分子极性和形成氢键的倾向，凸显了水合及极性相互作用在调节吸附行为中的重要作用。Kappa3 是一种拓扑形状描述符 [54]，可反映分子支化程度和三维结构复杂性，而 NumRotatableBonds 和 SP3\_Flexibility 则反映构象适应性。图 3B 展示了 XGBoost 的 SHAP 蜂群分布，阐明了这些效应的方向。较高的 MolMR、MolWt、Kappa3 和 TPSA×LogP 值通常与正向 SHAP 贡献相关，表明预测吸附能力增强。从机理上看，这表明尺寸更大、极化率更高的 PFAS 分子，尤其是构象自由度更高的分子，能够最大限度地增强其与化学非均质 HA 网络之间的范德华接触、疏水分配和空间互补性。相反，TPSA 和 NumHAcceptors 的影响更依赖于具体情境，在整个数据集中既表现出正向 SHAP 贡献，也表现出负向 SHAP 贡献。这一行为表明，与 HA 官能团之间促进吸附的极性相互作用和水相中抑制吸附的水合稳定作用之间存在平衡。径向贡献图见

A  
![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/3672d493c509e906137e72b1a0db927130c9ccca2dcbead69cec67c2bc30c5d8.jpg>)

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/05a4f60df605a6eacec7e9b081a952462962e6f06d311869bae10d5ca038a139.jpg>)

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/3bfc192305296437f61d31a0f36540bce027bd4e72509603947ddaed22d77a6c.jpg>)

D  
![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/49eed2ffd11d27a4744f8e2ecbb37cd6b76eef57665aba2edeeae2b7db7b59da.jpg>)

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/614b0c99120fdecfc148be13cff6e83f2a7c087003c9c4106ab42d765ee4f8b5.jpg>)

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/0d71bbf6eee0d94c08641eb068f7a21f1f7e822f248edd0b7773035f616ef3c0.jpg>)  
图 3. 基于 SHAP 的 PFAS–HA 相互作用模型解释。按平均绝对 SHAP 值排序的全局特征重要性，分别对应（A）XGBoost 模型和（D）GB 模型。（B）XGBoost 和（E）GB 的 SHAP 蜂群图，展示描述符的影响及其方向。（C）XGBoost 和（F）GB 的相对 SHAP 贡献径向分布。拓扑结构、极化率和极性描述符共同控制 PFAS 在 HA 基质中的滞留。图中列出的特征已在表 S2 中说明。

图 3C，其结果验证了上述解释，显示 MolMR（16.8%）、TPSA（13.5%）、MolWt（11.2%）、Kappa3（10.7%）和 NumHAcceptors（10.3%）共同贡献了总体解释力的大部分，凸显了极化率、极性、分子尺寸和拓扑结构在控制 PFAS 滞留方面的共同重要性。

[[梯度提升|GB]] 模型也呈现出高度一致的[[分子描述符|描述符]]模式，如图 3D–3F 所示。[[分子摩尔折射率|MolMR]] 仍是影响最大的描述符，其次是 [[拓扑极性表面积|TPSA]]、[[三阶Kappa分子形状指数|Kappa3]]、[[分子量|MolWt]] 和 [[氢键受体数量|NumHAcceptors]]。尽管具体排序与 [[CatBoost]] 略有不同，但占主导地位的描述符类别保持不变，表明 [[全氟和多氟烷基物质|PFAS]] 在 [[腐殖酸|HA]] 上的[[吸附]]受共同的分子基础支配，而非源于特定模型的统计偏差。其中，[[摩尔折射率|MolMR]] 表征由[[极化率]]驱动的色散相互作用，TPSA 和 NumHAcceptors 描述[[分子极性|极性]]和[[水合]]倾向，[[三阶Kappa形状指数|Kappa3]] 表征[[分子拓扑结构]]，MolWt 则反映[[分子尺寸]]效应。在图 3E 中，GB 的 [[SHAP]] 分布表明，较高的 Kappa3、MolMR 和 [[可旋转键数量|NumRotatableBonds]] 通常有利于增强吸附，而[[极性]]相关描述符的增大往往产生负向贡献，或表现出依赖具体情境的贡献。这表明，PFAS 在 HA 上的吸附由色散相互作用、[[疏水分配]]、分子堆积和水合效应之间的多维相互作用共同决定，而非仅由[[疏水性]]决定。值得注意的是，与其他描述符相比，MolMR 和 TPSA 的 [[Shapley加性解释|SHAP]] 值范围更宽，这进一步凸显了二者对[[吸附能]]预测的主导影响。图 3F 中的径向 SHAP 分布显示，MolMR（28.5%）和 TPSA（20.8%）是主导描述符，两者合计贡献了近 50% 的模型重要性。这凸显了电子极化率和分子极性是 PFAS 吸附到 HA 上的主要驱动因素，而拓扑结构和尺寸相关效应则起到进一步的调节作用。

其他模型对应的 [[SHAP解释|SHAP 解释]]结果见图 S11–S13。如图 S14 所示，Pearson 相关矩阵和层次聚类分析进一步支持了 [[SHAP]] 解释所揭示的[[分子描述符|描述符]]与相互作用之间的关系。这些描述符可划分为若干具有一致性的簇，其中一个主导簇与[[分子尺寸]]、[[分子拓扑结构|拓扑结构]]、[[分子极性|极性]]和[[氢键]]特征相关。该簇包括 [[分子摩尔折射率|MolMR]] $( r = 0 . 6 2 )$、[[三阶Kappa分子形状指数|Kappa3]] $( r = 0 . 6 1 )$、[[分子量|MolWt]] $( r = 0 . 6 5 )$、[[拓扑极性表面积|TPSA]] × [[辛醇-水分配系数|LogP]] $( \mathbf { r } = 0 . 6 1 )$、[[氢键受体数量|NumHAcceptors]] $( r = 0 . 6 9 )$ 和 TPSA $( r = 0 . 6 4 )$，表明分子尺度、形状复杂性与[[极性]]官能特征之间存在很强的相互依赖性。值得注意的是，[[吸附能]]与以 [[摩尔折射率|MolMR]] 表征的分子量之间的关系如 $\mathrm { F i g . } 4 \mathbf { A } .$ 所示。[[吸附]]能与分子量呈明显负相关，表明较大的 [[全氟和多氟烷基物质|PFAS]] 分子通常对 [[腐殖酸|HA]] 表现出更强的[[吸附亲和力]]。这一趋势与 [[Shapley加性解释|SHAP]] 解释高度一致。图 S15 进一步表明，具有更复杂拓扑结构的[[长链PFAS|长链 PFAS]] 通过增强的范德华接触和[[疏水分配]]，优先[[污染物滞留|滞留]]于 HA 基质中。相比之下，尺寸较小且极性较强的 PFAS 与 HA 基质的相互作用较弱，滞留程度也较低 [55]。为定量阐明吸附机制，将 PFAS–HA 相互作用能分解为范德华贡献和静电贡献（图 S16）。范德华相互作用主导了吸附过程，凸显了 HA 基质内[[疏水缔合]]和分子堆积的关键作用。[[静电相互作用]]和氢键提供了次要的稳定作用，主要用于维持吸附构型。

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/2dd3972db0a9872588af9e0ed740d3cab462ce13dc10f6d9eed088c6faeb4210.jpg>)

在图 4B 中，对代表性 [[腐殖酸|HA]] 结构域（醌、类酪氨酸、糖相关及芳香[[羟基]]区域）的[[吸附能]]进行了分解，结果表明，[[全氟和多氟烷基物质|PFAS]] [[吸附]]并非由单一性质决定，而是受分子大小、含氟表面暴露程度、[[极化率]]以及局部结构域特异性相互作用的协同影响。相比之下，高[[分子极性|极性]]和[[氢键]]主导的[[分子描述符|描述符]]形成了一个相对独立的簇，且与强吸附的直接关联往往较弱，这意味着易于[[水合]]的 PFAS 保留效率较低。总体而言，这种相关性结构进一步支持了逐渐形成的机制认识，即体积更大、极化率更高且[[分子拓扑结构|拓扑结构]]更复杂的 PFAS 优先在具有[[芳香性]]和化学相互作用能力的 HA 区域中得到稳定。[[SHAP]] 分析表明，[[分子量]]和 [[分子摩尔折射率|MolMR]] 主要决定总体吸附趋势，反映了非特异性[[疏水相互作用]]和色散相互作用的重要性。相比之下，能量分解分析揭示了特定 HA [[官能团]]对 PFAS 保留的局部贡献。综合这些结果可知，非特异性相互作用主导总体吸附，而特定官能团则调节局部吸附环境。

## 3.3. [[全氟和多氟烷基物质|PFAS]]–[[腐殖酸|HA]] 相互作用实验

为验证模拟中所用 [[腐殖酸|HA]] 的[[分子结构]]，并阐明 HA 与 [[全氟和多氟烷基物质|PFAS]] 之间的相互作用机制，开展了 [[FTIR]] 和 [[XPS]] 分析，如图 5 所示。在图 5A 中，从[[褐煤]]中提取的 HA 的 [[傅里叶变换红外光谱|FTIR]] 光谱呈现出与所提出的 [[Stevenson腐殖酸模型|Stevenson 型结构模型]]一致的特征吸收带。以 $\mathrm { a t } \stackrel { - } { \sim } 3 4 0 0 \mathrm { c m } ^ { - 1 }$ 为中心的宽峰归属于酚基和[[羧基]]的 O–H 伸缩振动，支持芳香[[羟基]]和芳香羧酸基团的存在。$2 9 2 0 { - } 2 8 \dot { 5 } 0 \mathrm { c m } ^ { - 1 }$ 附近的峰对应于[[脂肪族]]

B  
![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/15683f91f4f334fa38ed1189b4fcdb7ed4934dcb5f77ad4ddcc508a017db23ff.jpg>)  
图 4. HA 基质中 PFAS 扩散与吸附之间依赖于结构的耦合关系。（A）吸附能与分子量的关系。（B）PFAS 与不同 HA 结构域相互作用时的吸附能分布。图 A 中的色条表示 MolMR 性质。

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/6d425b084e126d2f128e8825354232f9b0e8c2b549aa2a5cb9b8333535a8e1af.jpg>)

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/4f53865428171f38a4f48c417583b229e0ec120a0ef4f433cf93e39469e6a97f.jpg>)

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/f5b4966f8efa8a5199704ad560c625b833f853a931ee6084f2ab714c56e62de5.jpg>)

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/a44f518a5ec47a498fb39e06a1555a6b7f0ec8ab323d4783ba925ad6d14ffa43.jpg>)

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/eaa5346057b6cade0a00300820cae182b0836bd02486f0bff3430f2c066e57e2.jpg>)

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/0fcc3edd315e2b7b1c9c692ab74513097ef722ac0fb6c7621d2f5bbd5420bb47.jpg>)  
图 5.（A）原始 HA 和 HA–PFAS 复合物的 FTIR 光谱。（B）XPS 全谱，突出显示 PFAS 吸附后出现的 F 1 s 信号。（C）原始 HA 和（D）HA–GenX 的高分辨率 C 1 s 光谱，（E）吸附能与 MolMR 的关系，以及（F）平衡吸附量与 MolMR 的关系。在 E 和 F 图中，插图分别显示由 MD 模拟得到的 PFAS 吸附能排序，以及通过 LC–MS/MS 测定的相应平衡吸附量（Qe）。虚线表示线性回归，阴影区域表示 95% 置信区间。

C–H 伸缩振动，表明存在连接[[芳香结构域]]的连接区域。$1 7 0 0 { - } 1 7 2 0 \ \mathrm { c m } ^ { - 1 }$ 附近的一个明显谱带归属于羧酸和醌结构中 $\scriptstyle \mathrm { C = } 0$ 的伸缩振动，证实存在含[[羰基]][[官能团]]。$1 6 0 0 ~ \mathrm { { c m } ^ { - 1 } }$ 附近的吸收源于[[芳香族]] $\mathrm { c } { = } \mathrm { c }$ 骨架振动，而 $1 2 0 0 { - } 1 0 0 0 ~ \mathrm { c m } ^ { - 1 }$ 区域的信号与碳水化合物和酚类结构中的 [[碳氧单键|C–O]] 伸缩振动有关。这些光谱特征共同证实，提取的 [[腐殖酸|HA]] 含有芳香族羧酸、[[脂肪族]]连接结构、醌基、芳香族[[羟基]]官能团、类氨基酸结构（如酪氨酸型基团）[39] 以及碳水化合物组分，与 [[分子动力学模拟|MD 模拟]]所用的[[分子模型]]一致。

如全谱（图 S17）所示，[[全氟和多氟烷基物质|PFAS]] [[吸附]]后出现的 [[F 1s 光电子能谱|F 1 s 信号]]证实了 [[腐殖酸|HA]] 表面存在 PFAS。相应的高分辨率 F 1 s 光谱（图 5B）在 \~689 eV 处呈现出明显的峰，进一步证实 PFAS 已成功吸附。F 1 s 信号强度的增加表明[[吸附亲和力]]增强，尤其是对于[[长链PFAS|长链 PFAS]]。[[分子动力学模拟|MD 模拟]]快照也证实了类似结果，如图 S18 所示。具体而言，随着[[氟化链长度]]的增加 [56]，PFAS 在 HA 上的吸附逐渐增强，表现为更有利的[[吸附能]]（从 [[全氟丁酸与腐殖酸复合物|PFBA-HA]] 的 $( \mathrm { f r o m } - 1 5 1 . 1 8 \mathrm { k J } { \cdot } \mathrm { m o l } ^ { - 1 }$ 到 [[全氟己酸与腐殖酸复合物|PFHxA-HA]] 的 −156.05 kJ⋅mol<sup>−</sup> <sup>1</sup> 和 [[全氟辛酸与腐殖酸复合物|PFOA-HA]] 的 − 213.7 kJ⋅mol<sup>−</sup> <sup>1</sup>）以及接触数量的显著增加。图 5C–5D 分别展示了原始 HA 和吸附 [[GenX]] 后 HA 的高分辨率 [[C 1s 光电子能谱|C 1 s 光谱]]。原始 HA 的光谱被分解为四个组分，分别对应于 [[碳碳单键|C–C]]（284.8 eV）、[[碳氧单键|C–O]]（286.5 eV）、[[羰基|C––O]]（287.8 eV）和 $\scriptstyle 0 - \mathsf { C } = 0 ( 2 8 9 . 0 \mathrm { e V } )$ 吸附后，出现了明显的 [[碳氟键|C–F]]（288.0 eV）和 CF（289.8 eV）信号，证实 [[六氟环氧丙烷二聚体酸|GenX]] 已成功吸附到 HA 表面。含氧碳组分的同步变化表明，吸附扰动了 HA 的[[局部化学环境]]，这与[[含氧官能团]]通过[[非共价相互作用]]参与稳定 GenX 的作用一致。定量而言，[[分子动力学|MD]] 模拟得到的吸附能与 [[分子摩尔折射率|MolMR]] 呈强相关（[[Pearson相关系数|Pearson's r]] = 0.84，图 5E）。同样，通过 LC–MS/

MS 测定的[[平衡吸附容量]]也与 [[分子摩尔折射率|MolMR]] 呈强相关（Pearson's $r = 0 . 8 9 ,$ 图 5F），表明 [[摩尔折射率|MolMR]] 能够有效表征决定 [[全氟和多氟烷基物质|PFAS]] [[吸附]]行为的分子特征。对于含[[羧酸根]]和含[[磺酸根]]的 PFAS，较高的[[分子极性|极性]]通常会导致更强的[[水合作用]]和更大的[[去溶剂化能|去溶剂化能量代价]]，从而使[[吸附亲和力]]降低，并使其在水相中的[[污染物迁移性|迁移性]]增强 [57]。此外，较高的 MolMR 通常导致更低的[[结合能]]和更大的[[吸附量]]，表明[[极化率|可极化性]]更强的 PFAS 与 [[腐殖质|HS]] 基质之间具有更强的相互作用。

在图 S19 中，原始 [[腐殖酸|HA]] 的高分辨率 [[C 1s 光电子能谱|C 1 s 光谱]]可[[光谱解卷积|解卷积]]为四个组分：[[碳碳单键|C–C]]/[[碳碳双键|C=C]]（284.8 eV）、[[碳氧单键|C–O]]（≈286.2–286.6 eV）、[[羰基|C––O]]（≈287.8 eV）和 [[羧基|O–C=O]]（≈289.0 eV）。这些结果与 [[FTIR]] 分析一致，证实[[芳香碳]]、[[羟基]]/[[醚基]]、羰基和羧基[[官能团]]共存。[[吸附]] [[全氟和多氟烷基物质|PFAS]] 后，288–292 eV 区域内出现了额外的 [[碳氟键|C–F]] 相关贡献，其强度随 PFAS 结构而变化。具体而言，[[全氟丁烷磺酸|PFBS]]、6:2 FTS 和 [[GenX]] 表现出特征性的 C–F/[[二氟亚甲基|CF₂]] 信号，而 [[全氟丁酸|PFBA]]、[[全氟己酸|PFHxA]] 和 [[全氟辛酸|PFOA]] 主要增强了 289.0 eV 附近的 $0 { \mathrm { - C = } } 0 / \mathrm { C - F }$ 重叠组分。同时，观察到 C–O 和 C––O 组分发生细微位移及强度变化，表明[[含氧官能团]]参与了吸附过程。随着含氟链复杂性增加，C–F 相关信号逐渐增强，进一步表明 PFAS 氟碳部分与 HA [[芳香结构域]]之间的[[疏水相互作用]]对吸附有所贡献 [58]。含氧碳信号的变化意味着，PFAS 羧基（[[羧酸根]]、[[磺酸根]]及含醚部分）与 HA 官能团之间的[[氢键]]和[[静电相互作用]]也有助于吸附 [59,60]

在图 S20 中，高分辨率 [[O 1s 光电子能谱|O 1 s 光谱]]显示出来自 [[羰基|C––O]]（\~531.5–513.6 eV）、[[碳氧单键|C–O]]（\~532.5–532.8 eV）和[[吸附水]]（\~533.8–535.9 eV）的不同贡献。[[吸附]] [[全氟和多氟烷基物质|PFAS]] 后，观察到峰强度和相对面积发生细微变化，尤其是 C–O 和 C–O 组分，表明 PFAS [[官能团]]与 [[腐殖酸|HA]] 中的含氧部分之间存在相互作用。对于 [[全氟丁酸|PFBA]]、[[全氟己酸|PFHxA]]、[[全氟辛酸|PFOA]] 和 [[GenX]]，O 1 s 光谱的变化表明，[[羧酸根]]和[[醚基|含醚官能团]]参与了[[界面结合]]。此外，[[全氟丁烷磺酸|PFBS]] 和 6:2 FTS 出现了特征性的 $\textsf { S } 2 \mathsf { p }$ 信号（图 S20E–S20F），归属于 $\$ 2 p _ { 3/ 2}$ and S $\boldsymbol { 2 } \mathsf { p } _ { 1 / 2 }$ 组分，证实了含[[磺酸根]]的 PFAS 成功吸附于 HA 上。负载 PFAS 的样品中 C–O 贡献增强，表明[[氢键]]和[[静电相互作用]]参与了 PFAS 在 HA 界面上的稳定化。因此，结合 [[FTIR]] 结果，这些光谱观测结果验证了 HA [[分子模型]]的结构合理性，并表明 PFAS 吸附受疏水、π–π、氢键和静电相互作用的[[协同作用]]支配。[[全氟羧酸|PFCAs]]、[[磺酸盐|磺酸盐类]]和[[含醚全氟和多氟烷基物质|含醚 PFAS]] 各异的光谱响应进一步凸显了[[吸附的结构依赖性]] [61]。

此外，采用 [[SEM]] 研究了原始 [[腐殖酸|HA]] 及其与 [[全氟和多氟烷基物质|PFAS]] 形成的复合物的形貌特征，如图 6A-6G 所示。所研究 PFAS 的[[分子结构]]如图 6H 所示。如图 6 A1–6A3 所示，原始 HA 呈现不规则的碎片状颗粒，具有棱角分明的边缘和粗糙的表面纹理。在较低放大倍数下（100 μm），HA 表现为[[粒径分布]]较宽的[[非均质聚集体]]，如图 6 A1 所示。在图 6 A2–6A3 中，较高放大倍数的图像进一步显示出[[层状结构|层状]]和[[片状结构]]，表面具有丰富的微凸起和[[微裂缝]]。这些结构特征提供了相对较大的[[表面积]]和多个潜在[[吸附位点]] [62]，与 HA 的[[非均质性]]和[[多孔性]]一致。与原始 HA 相比，[[全氟丁酸与腐殖酸复合物|HA–PFBA]]（图 6 B1–6B3）保留了原有的片状形貌，仅表现出轻微的[[颗粒融合]]和边缘平滑化，表明其对 HA 骨架的扰动相对较弱。相比之下，[[全氟己酸与腐殖酸复合物|HA–PFHxA]] 和 [[全氟辛酸与腐殖酸复合物|HA–P FOA]]（图 6 C1–6D3）表现出逐渐增强的聚集、更致密的颗粒堆积以及降低的[[表面粗糙度]]，表明 PFAS 与 HA 之间存在更强的相互作用。值得注意的是，无法根据 [[扫描电子显微术|SEM]] 图像可靠地评估[[孔隙率]]和表面粗糙度，因为它们可能受到[[冷冻干燥]]和样品

制备过程的影响 [47]。

与 [[全氟丁烷磺酸|PFBS]]、6:2 FTS 和 [[GenX]] 结合的 [[腐殖酸|HA]] 的形貌（图 6 E1–6G3）进一步表明，[[全氟和多氟烷基物质|PFAS]] 的[[分子结构]]会影响[[界面组装]]。[[全氟丁烷磺酸盐|PFBS]] 在很大程度上保留 HA [[层状结构|层状]]形貌的同时形成了致密的聚集体，而 6:2 FTS 和 [[六氟环氧丙烷二聚体酸|GenX]] 则诱导了更显著的[[颗粒缔合]]和[[表面致密化]]。这些观察结果表明，除[[疏水相互作用]]外，PFAS 的[[官能团]]化学特性，包括[[磺酸根]]和[[醚基|含醚基团]]，也促进了 [[腐殖酸聚集体|HA 聚集体]]的[[结构重组]]。总体而言，PFAS [[吸附]]促进了 HA 的颗粒缔合和结构重组，表现为聚集增强 [63]、表面更加光滑以及颗粒间接触更加紧密。这些形貌变化的程度因 PFAS 种类而异，反映了[[氟化链长度]]和[[头基化学特性]]的差异。结合 [[FTIR]] 和 [[XPS]] 结果，[[SEM]] 观察结果支持以下认识：PFAS 在 HA 上的吸附受多种协同相互作用支配，包括[[疏水缔合]]、[[π–π相互作用|π–π 相互作用]]、[[氢键]]和[[静电相互作用]]，从而产生[[吸附的结构依赖性|依赖于结构的吸附行为]] [64]。

## 4. 结论

本研究建立了一个融入物理知识且具有[[模型可解释性|可解释性]]的框架，用于理解 [[全氟和多氟烷基物质|PFAS]] 在代表性 [[Stevenson 腐殖酸模型|Stevenson 腐殖酸（HA）模型]]中的[[污染物滞留|滞留]]与迁移。通过整合 [[分子动力学模拟|MD 模拟]]、实验验证和[[可解释机器学习]]，我们表明，PFAS 在 [[腐殖酸|HA]] 中的行为受一种明确的结构依赖机制支配：随着[[分子尺寸]]增大，[[吸附]]强度增加，而[[扩散率]]降低，从而使较大的 PFAS 优先滞留，较小的 PFAS 则具有更高的迁移能力。在机制层面，[[SHAP解释|SHAP 解释]]揭示，PFAS 在 HA 上的吸附并非由任何单一分子性质控制，而是源于分子尺寸、[[极化率]]、[[分子拓扑结构|拓扑结构]]和[[构象适应性]]的[[协同作用]]。[[分子摩尔折射率|MolMR]]、[[三阶Kappa分子形状指数|Kappa3]]、[[氢键受体数量|NumHAcceptors]]、[[SP3_Flexibility|SP3\_Flexibility]] 和 [[分子量|MolWt]] 等[[分子描述符|描述符]]始终被识别为 PFAS–HA 相互作用的关键决定因素。这些结果表明，尺寸更大、极化率更高且结构更灵活的 PFAS 能够更有效地分配进入异质性 HA 区域并与之相互作用，而[[分子极性|极性]]更强、更易[[水合]]的 PFAS 则保持相对较高的迁移能力。这些发现共同为[[天然有机质]]中 PFAS 的滞留与迁移提供了统一的分子层面解释。更广泛而言，本研究提供了一种可迁移的策略，将[[分子结构]]、[[环境分配]]与[[污染物迁移]]联系起来，对[[风险评估]]、[[污染物归趋预测|归趋预测]]以及[[修复材料]]和处理工艺的设计具有启示意义。尽管本研究采用了代表性的 [[Stevenson腐殖酸模型|Stevenson HA 模型]]来表征 [[腐殖质|HS]]，但未来纳入更多样化组成和结构的研究将进一步增强所提出框架的普适性。

![](<../2.SCI_MD/Structure-resolved adsorption of PFAS on humic substancesA combined study of molecular dynamics, explainable machine learning, and experiments/images/aab17690bc8ee592e4a754e75f42b937ba6b81dd1ba7b91e880cef661a104307.jpg>)  
图 6. 不同放大倍数下（比例尺分别为 100 μm、40 μm 和 10 μm）的 SEM 图像：(A1–A3) 原始 HA、(B1–B3) HA–PFBA、(C1–C3) HA–PFHxA、(D1–D3) HA–PFOA、(E1-E3) HA-PFBS、(F1-F3) HA-6:2 FTS 和 (G1-G3) HA GenX。(H) 所研究 PFAS 的分子结构，包括 PFBA、PFHxA、PFOA、PFBS、6:2 FTS 和 GenX。

## [[CRediT贡献者角色分类法|CRediT]] 作者贡献声明

[[Yuxiang Nie]]：研究实施。[[RuiPeng Lai]]：研究实施。[[Huaicheng Bei]]：研究实施。[[Xianyu Song]]：方法学、研究实施、经费获取、数据整理、概念构思。[[Dan Liu]]：研究实施。[[Limeng Yin]]：研究实施。[[Shuangliang Zhao]]：研究实施。[[Honglai Liu]]：研究实施。

## 利益冲突声明

作者声明，不存在任何已知的、可能被认为会影响本文所报告工作的竞争性经济利益或个人关系。

## 致谢

本研究得到国家自然科学基金（编号：22478045 和 22178072）、重庆市自然科学基金（编号：CSTB2024NSCQ-QCXMX0099 和 CSTB2025NSCQ-LZX0099）、重庆市教育委员会科学技术研究项目（编号：KJZD-K202301202），以及[[四川文理学院]]四川省教育厅低成本农村环境治理技术重点实验室（编号：XCH2025ZA-1）的资助。

## 附录 A. 补充数据

本文的补充数据可在线获取，网址为 https://doi. org/10.1016/j.cej.2026.179947.

## 数据可用性

所构建的数据集和代码可在以下地址获取：https://github. com/xysonglabx/[[机器学习|ML]]-[[全氟和多氟烷基物质|PFAS]]。

## References

[1] D. Ackerman Grunfeld, D. Gilbert, J. Hou, A.M. Jones, M.J. Lee, T.C. Kibbey, D. M. O’Carroll, Underestimated burden of per-and polyfluoroalkyl substances in global surface waters and groundwaters, Nat. Geosci. 17 (4) (2024) 340–346.

[2] Y. Dai, D. Ding, M. Cui, P. Duan, Y. Liu, X. Liu, T. Yue, J. Zhao, Z. Wang, B. Xing, Biotransformation of per- and polyfluoroalkyl substances (PFAS) in organisms, Chem. Eng. J. 524 (2025) 168618.

[3] C. Liu, Y. Shen, X. Zhao, Z. Chen, R. Gao, Q. Zuo, Q. He, J. Ma, Y. Zhi, Removal of per- and polyfluoroalkyl substances by nanofiltration: effect of molecular structure and coexisting natural organic matter, J. Hazard. Mater. 454 (2023) 131438.

[4] P. Mukherjee, K. Sathiyan, T. Zidki, M.N. Nadagouda, V.K. Sharma, Electrochemical degradation of per- and poly-fluoroalkyl substances in the presence of natural organic matter, Sep. Purif. Technol. 325 (2023) 124639.

[5] M.G. Evich, J. Ferreira, O. Adeyemi, P.A. Schroeder, J.C. Williams, B. Acrey, D. Burdette, M. Grieve, M.P. Neill, K. Simmons, Mineralogical controls on PFAS and anthropogenic anions in subsurface soils and aquifers, Nat. Commun. 16 (1) (2025) 3118.

[6] Y. Chen, D. Cao, X. Li, X. Jia, Y. Shi, Y. Cai, Interactive effects of soil dissolved organic matter (DOM) and per- and polyfluoroalkyl substances on contaminated soil site: DOM molecular-level perspective, J. Hazard. Mater. 488 (2025) 137372.

[7] L. Zhang, Y. Liu, Q. Wang, Y. Ruan, T. Cai, F. Li, H. Chen, Effects of bioturbation and dissolved organic matter on PFAS bioaccumulation in the aquatic environment, Environ. Pollut. 393 (2026) 127705

[8] T. Schwichtenberg, D. Bogdan, C.C. Carignan, P. Reardon, J. Rewerts, T. Wanzek, J.A. Field, PFAS and dissolved organic carbon enrichment in surface water foams on a northern U.S. freshwater Lake, Environ. Sci. Technol. 54 (22) (2020) 14455 14464.

[9] Y. Qi, H. Cao, W. Pan, C. Wang, Y. Liang, The role of dissolved organic matter during per- and Polyfluorinated substance (PFAS) adsorption, degradation, and plant uptake: a review, J. Hazard. Mater. 436 (2022) 129139.

[10] X. Ge, K. Wang, X. Xiao, C. Chu, X. Zhu, B. Chen, Beyond molecules: in situ imaging unveils DOM-driven PFAS nanoclusters with mitigated phytotoxicity, Environ. Sci. Technol. 60 (9) (2026) 7393–7404.

[11] S. Hazrati, J. Kumpiene, T. Leivisk¨a, I. Carabante, Reciprocal influence of per-and polyfluoroalkyl substances (PFAS) and soil organic matter on their fate in soils, Environ. Sci. Pollut. Res. 32 (40) (2025) 23265–23277.

[12] K. Hui, J. Song, B. Xi, Y. Yuan, W. Tan, Differentiated responses of dissolved organic matter molecular properties in surface and bottom soil layers to perfluoroalkyl and polyfluoroalkyl substances pollution, J. Hazard. Mater. 502 (15) (2025) 140638.

[13] A. Chaudhary, M. Usman, W. Cheng, S. Haderlein, J.-F. Boily, K. Hanna, Heavymetal ions control on PFAS adsorption on goethite in aquatic systems, Environ. Sci. Technol. 58 (45) (2024) 20235–20244.

[14] J. Jeon, K. Kannan, B.J. Lim, K.G. An, S.D. Kim, Effects of salinity and organic matter on the partitioning of perfluoroalkyl acid (PFAs) to clay particles, J. Environ. Monit. 13 (6) (2011) 1803–1810.

[15] S.L. Sherman-Bertinetti, E.G. Kostelnik, K.J. Gruber, S. Balgooyen, C.K. Remucal, Preferential partitioning of per- and Polyfluoroalkyl substances (PFAS) and dissolved organic matter in freshwater surface microlayer and natural foam, Environ. Sci. Technol. 58 (29) (2024) 13099 13109.

[16] X. Song, H. Liu, J. Hu, Y. Sun, M. Huang, J. Lin, S. Zhao, H. Liu, J. Jiang, Bioinspired humic acid-based membranes for water desalination: mechanistic insights from molecular simulations, Desalination 571 (2024) 117092.

[17] P. Rama, J.A. Gallego-Urrea, Z. Abbas, Interfacial interactions of humic acids with polystyrene nano-plastics in aqueous/ionic environments: a molecular dynamics exploration, Environ. Sci. Nano 10 (5) (2023) 1385–1393.

[18] M. Borisover, D. Petrov, C. Oostenbrink, E. Galicia-Andr´es, Diluting humic substances in water in molecular dynamics simulations: are aggregates stable? Colloids Surf. A Physicochem. Eng. Asp. 704 (2025) 135507.

[19] X. Lyu, X. Liu, Y. Sun, R. Ji, B. Gao, J. Wu, Transport and retention of perfluorooctanoic acid (PFOA) in natural soils: importance of soil organic matter and mineral contents, and solution ionic strength, J. Contam. Hydrol. 225 (2019) 103477.

[20] D.R. Ryan, C.K. Baldus, S.M. Kteeba, M. Samuel, Q. Dong, Y. Wang, L. Guo, B. K. Mayer, P. McNamara, Peroxi-electrocoagulation for PFAS mitigation: the impact of water quality and dissolved organic matter on removal pathways, ACS ES&T Eng. 5 (5) (2025) 1202–1214.

[21] J. Li, H. Sha, W. Liu, Y. Yuan, G. Zhu, F. Meng, B. Xi, W. Tan, Transport of per−/ polyfluoroalkyl substances from leachate to groundwater as affected by dissolved organic matter in landfills, Environ. Res. 247 (2024) 118230.

[22] F. Wang, K. Shih, J.O. Leckie, Effect of humic acid on the sorption of perfluorooctane sulfonate (PFOS) and perfluorobutane sulfonate (PFBS) on boehmite, Chemosphere 118 (2015) 213–218.

[23] J. Li, H. Sha, R. Ye, P. Zhang, S. Chen, G. Zhu, W. Tan, Chemodiversity and molecular mechanism between per−/polyfluoroalkyl substance complexation behavior of humic substances in landfill leachate, Water 16 (23) (2024) 3527.

[24] C.M. Luft, T.C. Schutt, M.K. Shukla, Properties and mechanisms for PFAS adsorption to aqueous clay and humic soil components, Environ. Sci. Technol. 56 (14) (2022) 10053–10061.

[25] J.-N. Uwayezu, L.W. Yeung, M. B¨ackstrom, ¨ Sorption of perfluorooctane sulfonic acid including its isomers to soils: effects of pH, natural organic matter and Na SO , Front. Environ. Chem. 3 (2022) 905170.

[26] P. Gao, S. Dou, Study on molecular structure model and visualization of humi acids in different soils based on statistics, J. Soil Sci. Plant Nutr. 22 (3) (2022) 2920 2932.

[27] S. Peng, Y. Sun, Y. Zhang, G. Liao, D. Wang, C. Hu, W. Zhang, Multi-scale mechanisms of Zn2 coordination by humic substances from different bio stabilized sludge: insights from structure-based modeling and molecular dynamics simulations, Water Res. 287 (2025) 124368.

[28] S. Li, M. Mohseni, Enhanced removal of per- and poly-fluoroalkyl substances (PFAS) by modified clay: adsorption behavior, simulation, and regeneration, Colloids and Surfaces C: Environmental Aspects 3 (2025) 100083.

[29] M. Zhang, W. Li, Z. Jin, Structural properties of deprotonated naphthenic acids immersed in water in pristine and hydroxylated carbon nanopores from molecular perspectives, J. Hazard. Mater. 415 (2021) 125660.

[30] M. Zhang, Z. Jin, Molecular simulation on CO2 adsorption in partially water saturated kaolinite nanopores in relation to carbon geological sequestration, Chem. Eng. J. 450 (2022) 138002.

[31] Z. Wang, X. Du, X. Wu, Z. Zhong, J. Liang, X. Tao, X. Zhu, Z. Dang, Y. Yu, G. Lu, Release mechanisms of decabromodiphenyl ether from typical e-waste microplastics into water: insights from molecular dynamics simulations, J. Hazard. Mater. 494 (2025) 138507.

[32] Y. Chen, H. Tang, Y. Cheng, T. Huang, B. Xing, Interaction between microplastics and humic acid and its effect on their properties as revealed by molecular dynamics simulations, J. Hazard. Mater. 455 (2023) 131636.

[33] B. Zhang, D. Moriyama, T.M. Herath, H. Zhao, Y. Bai, Y. Dang, W. Liu, H. Kato, K. Yamamoto, Y. Mochizuki, N. Arimitsu, A. Nakajima, X. Zhu, B. Chen, M. Fujii, T. Isobe, Pore structure modulation and surface functionalization boosted adsorption of PFAS on porous carbon: experimental and theoretical investigations, J. Hazard. Mater. 499 (2025) 140063.

[34] C. Ye, H. Liu, J. Liu, H. Wang, R. Ge, X. Chen, Y. Wang, C. Wang, J. Zhu, Machine learning-driven quantitative modeling and mechanistic interpretation of per and poly-fluoroalkyl substances (PFAS) toxicity, J. Environ. Chem. Eng. 14 (1) (2026) 121063.

[35] N.A. Fekry, M.E. Mahmoud, N.K. Kamel, M.F. Amira, Machine learning techniques for predicting the adsorption capacity of synergistic biochar functionalization with pyrrole-Sulfanilic acid copolymer in mercury and chromium remediation, Chem. Eng. J. 503 (2025) 158322.

[36] A.K. Malde, L. Zuo, M. Breeze, M. Stroet, D. Poger, P.C. Nair, C. Oostenbrink, A. E. Mark, An automated force field topology builder (ATB) and repository: version 1.0, J. Chem. Theory Comput. 7 (12) (2011) 4026–4037.

[37] X. Song, X. Duan, W. Xiang, S. Zhao, Noncovalent Interaction Thresholds Control Translocation and Cytotoxicity: A Combined Computational–Experimental Study, J. Med. Chem. 68 (14) (2025) 15015–15025.

[38] F.J. Stevenson, Humus Chemistry: Genesis, Composition, Reactions, John Wiley & Sons, 1994.

[39] T. Lan, P. Wu, Z. Liu, M. Stroet, J. Liao, Z. Chai, A.E. Mark, N. Liu, D. Wang, Understanding the effect of pH on the solubility and aggregation extent of humic acid in solution by combining simulation and the experiment, Environ. Sci. Technol. 56 (2) (2022) 917–927.

[40] Y. Yu, X. Song, X. Yang, C. Wang, X. Wu, Y. Wang, W. Xiang, S. Zhao, H. Liu, Optimization of chitosan-based demulsifiers via interfacial displacement: a molecular dynamics and principal component analysis approach, Sep. Purif. Technol. 365 (2025) 132693.

[41] Y. Yu, X. Song, Y. Wang, R. Lai, Y. Nie, W. Xiang, C. Zhou, S. Zhao, H. Liu, Defect mediated permeation of deep eutectic solvents in cellulose crystals: a combined experimental and molecular dynamics study, Carbohydr. Polym. 369 (2025) 124331.

[42] D. Van Der Spoel, E. Lindahl, B. Hess, G. Groenhof, A.E. Mark, H.J. Berendsen, GROMACS: fast, flexible, and free, J. Comput. Chem. 26 (16) (2005) 1701–1718.

[43] J. Hu, X. Yang, X. Song, Y. Miao, Y. Yu, W. Xiang, M. Huang, W. Wu, K. Liang, S. Zhao, H. Liu, Bioaccumulation mechanisms of perfluoroalkyl substances (PFASs) in aquatic environments: theoretical and experimental insights, J. Hazard. Mater. 480 (2024) 136283.

[44] J. Hu, X. Yang, X. Song, K. Liang, M. Huang, S. Zhao, H. Liu, Elucidating environmental fate and toxicological mechanisms of ultrashort- and short-chain PFAS: integrating machine learning, molecular modeling, and experimental validation, J. Environ. Manag. 390 (2025) 126277.

[45] M. Mudlaff, A. Sosnowska, L. Gorb, N. Bulawska, K. Jagiello, T. Puzyn, Environmental impact of PFAS: filling data gaps using theoretical quantum chemistry and QSPR modeling, Environ. Int. 185 (2024) 108568.

[46] A.P. Bento, A. Hersey, E. F´elix, G. Landrum, A. Gaulton, F. Atkinson, L.J. Bellis, M. De Veij, A.R. Leach, An open source chemical structure curation pipeline using RDKit, Aust. J. Chem. 12 (2020) 1–16.

[47] L.F. Dettmann, O. Kühn, A.A. Ahmed, Martini-based coarse-grained soil organic matter model derived from atomistic simulations, J. Chem. Theory Comput. 20 (12) (2024) 5291–5305.

[48] L.F. Dettmann, O. Kühn, A.A. Ahmed, Automated parametrization approach for coarse-graining soil organic matter molecules, J. Chem. Theory Comput. 20 (23) (2024) 10684–10696.

[49] D. Petrov, D. Tunega, M.H. Gerzabek, C. Oostenbrink, Molecular dynamics simulations of the standard Leonardite humic acid: microscopic analysis of the structure and dynamics, Environ. Sci. Technol. 51 (10) (2017) 5414–5424.

[50] A.A. Ahmed, S. Thiele-Bruhn, S.G. Aziz, R.H. Hilal, S.A. Elroby, A.O. Al-Youbi, P. Leinweber, O. Kühn, Interaction of polar and nonpolar organic pollutants with soil organic matter: sorption experiments and molecular dynamics simulation, Sci. Total Environ. 508 (2015) 276–287.

[51] E. Dinar, T.F. Mentel, Y. Rudich, The density of humic acids and humic like substances (HULIS) from fresh and aged wood burning and pollution aeroso particles, Atmos. Chem. Phys. 6 (12) (2006) 5213–5224.

[52] L. Zhang, C. Tan, Z. Xie, W. Li, R. Wu, G. Li, X. Li, C. Zhang, W. Xiong, J. Liang, Bridging Microscopic Dynamics and Macroscopic Fate: A Molecular Dynamics Machine Learning Approach for Predicting PFAS Solid–Liquid Distribution in Soils and Sediments, Environ. Sci. Technol. 60 (5) (2026) 4298–4308

[53] X. Fu, J. Sun, K. Tian, Y. Liu, H. Zhang, Predicting the sorption capacity of Perfluoroalkyl and Polyfluoroalkyl substances in soils: Meta-analysis and machin learning modeling, Environ. Sci. Technol. 59 (33) (2025) 17699–17710.

[54] Q. Yang, G. Xiao, D. Li, W. Li, Z. Zhang, Y. Wen, N. Cai, Q. Gao, W. Wang, Photoregenerable FeOCl@N-rich COFs for efficient PFAS remediation: green synthesis, sorption mechanisms and life-cycle assessment, Chem. Eng. J. 524 (2025) 169126.

[55] K. Zhang, A. Qadeer, S. Chang, X. Tu, H. Shang, M.A. Khan, Y. Zhu, Q. Fu, Y. Yu, Y. Feng, Short-chain PFASs dominance and their environmental transport dynamics in urban water systems: insights from multimedia transport analysis and human exposure risk, Environ. Int. 202 (2025) 109602

[56] Q. Wang, R. Xu, F. Zha, S. Liu, H. Yan, Adsorption and diffusion of vapour-phase PFAS in montmorillonite and kaolinite: effect of moisture content and chain length, Chem. Eng. J. 517 (2025) 164386.

[57] A.A. Ahmed, P. Leinweber, O. Kühn, Unravelling the nature of glyphosate binding to goethite surfaces by ab initio molecular dynamics simulations, PCCP 20 (3) (2018) 1531 1539.

[58] A. Choudhary, D. Bedrov, Interaction of short-chain PFAS with Polycationic gels: how much fluorination is necessary for efficient adsorption? ACS Macro Lett. 11 (9) (2022) 1123 1128.

[59] A. Choudhary, D. Dong, M. Tsianou, P. Alexandridis, D. Bedrov, Adsorption mechanism of Perfluorooctanoate on Cyclodextrin-based polymers: probing the synergy of electrostatic and hydrophobic interactions with molecular dynamics simulations, ACS Materials Letters 4 (5) (2022) 853–859.

[60] X. Wang, H. Zhang, S. Ham, R. Qiao, Graphene oxide and its derivatives as adsorbents for PFOA molecules, J. Phys. Chem. B 127 (44) (2023) 9620 9629.

[61] B.E. Ifon, F. Suanon, C. Kiki, P.O. Peter, V.D. Wotto, D. Mama, S.I. Mulla, C.-P. Yu, J. Li, A. Hu, The interaction between chromophoric dissolved organic matter and xenobiotics (bisphenols and perfluoroalkyl substances) identified by UV-vis absorption and FT-IR spectroscopy, J. Mol. Struct. 1295 (2024) 136762.

[62] A. Sayed, A.M. El-Sherbeeny, G.I. Abdel-Gawad, E.A. Mohamed, W. Al Zoubi, M. R. Abukhadra, Effective and realistic sequestration of Sr2+ and B3+ ions from the aqueous environments using coral reefs based ca-MCM-41: Gulf of Suez as case study, Front. Chem. 13 (2025) 1550726.

[63] L. Zhao, Y. Zhang, S. Fang, L. Zhu, Z. Liu, Comparative sorption and desorption behaviors of PFHxS and PFOS on sequentially extracted humic substances, J. Environ. Sci. 26 (12) (2014) 2517–2525.

[64] H.B. Wang, Y.J. Zhang, Mechanisms of interaction between polycyclic aromatic hydrocarbons and dissolved organic matters, J. Environ. Sci. Health A 49 (1) (2014) 78–84.