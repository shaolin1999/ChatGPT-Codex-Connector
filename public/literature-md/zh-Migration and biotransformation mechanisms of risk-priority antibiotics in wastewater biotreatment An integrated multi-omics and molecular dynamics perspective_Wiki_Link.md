---
title: "zh-Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective Wiki全文"
source_markdown: "2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective.md"
cn_markdown: "2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/zh-Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective.md"
type: translated_fulltext_wiki
---
<!-- PaperMDLab-NAV:START -->
> [!info] 论文四向互链（PaperMDLab 自动维护）
> [[2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective|英文原文]] · [[2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/zh-Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective|中文译文]] · **中文全文双链（当前）** · [[4.SCI_AI_Summary/summary-zh-Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective|AI中文总结]]
<!-- PaperMDLab-NAV:END -->


原创研究论文

# 废水中风险优先[[抗生素]]在污水生物处理中的迁移与生物转化机制：多组学与[[分子动力学]]整合视角

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/1ad9ae5c2c698ef57b1ba4b6fa1c98faf53c20b7a8b275a02756947babca6aa8.jpg>)

[[Wang Bingqing|王冰清]]<sup>a,b</sup>，[[Xu Zuxin|徐祖信]]<sup>a,b,\*</sup>，[[Dong Bin|董滨]]<sup>a,b</sup>

<sup>a</sup> 同济大学环境科学与工程学院，污染控制与资源化研究国家重点实验室，上海，200092，中国 <sup>b</sup> 同济大学长江水环境教育部重点实验室，上海，200092，中国

## 文章信息

关键词：[[抗生素]]生物转化 混合抗生素暴露 [[环丙沙星]]（CIP） [[磺胺甲噁唑]]（SMX） [[罗红霉素]]（ROX） [[宏基因组学]] [[宏蛋白质组学]] [[活性污泥]]

## 摘要

理解[[抗生素]]的归趋与转化对于控制[[污水处理厂]]（WWTPs）中的抗生素污染至关重要。本研究整合[[宏基因组学]]、[[宏蛋白质组学]]、[[分子动力学]]（MD）模拟和通路分析，阐明了[[环丙沙星]]（CIP）、[[磺胺甲噁唑]]（SMX）和[[罗红霉素]]（ROX）在[[活性污泥]]系统中单一及混合抗生素暴露下的行为。归趋分析揭示了不同的途径：SMX 主要被[[生物降解]]（>70%），而 CIP 和 ROX 主要[[吸附]]于污泥上，去除效果差且出水残留高（CIP > 50%，ROX > 60%）。在混合抗生素胁迫下，微生物倾向于选择能量需求较低的降解途径，导致转化过程简化（跳步式）。MD 模拟揭示，在[[胞外聚合物]]（EPS）基质中，[[蛋白质]]组分表现出最强的结合能力。对蛋白质组学来源的界面相关蛋白（[[OmpA]]）进行的对接和 MD 模拟揭示了混合抗生素暴露下的共吸附行为：CIP 通过多位点[[氢键]]/[[静电相互作用]]牢固锚定，并通过芳香堆积促进 SMX 在同一结合口袋中的稳定。多组学分析揭示了一种以抗性和修复为主导的微生物“生存优先”策略。值得注意的是，在混合胁迫下，转运蛋白相关应激反应显著，且多个 [[ABC转运蛋白|ABC 转运蛋白]]相关组分（如 K02003/K02004 和 K02033）与去除效率呈负相关，这与 [[Micropruina]] 和 [[Ottowia]] 等关键菌属降解能力下降相一致。在混合抗生素胁迫下，增强的抗性（如 [[IV型分泌系统|IV 型分泌系统]] K03205）、改变的 EPS 结合以及倾斜的能量分配（如[[辅因子合成]] ko01240 下调）共同导致了不完全降解和广泛持久性。本研究为优化污水处理厂以控制抗生素污染提供了一个多尺度理论框架。

## 1. 引言

[[抗生素]]是现代医学和畜牧业中不可或缺的药物，但由于其大量使用、代谢不完全以及固有的难降解性，已成为水生环境中频繁检出的普遍污染物 [1]。抗生素污染与[[抗菌素耐药性]]（AMR）的潜在风险相互叠加，对生态系统稳定性和人类健康构成重大威胁 [2]。[[污水处理厂]]被认为是抗生素累积的热点区域 [3]。其中的生物处理单元虽然主要针对常规污染物去除而设计，但同时也是控制抗生素环境归趋的关键环节。大量研究表明，抗生素可在这些系统中长期存留，并对出水水质和[[抗生素抗性基因]]（ARGs）的传播产生深远影响 [4]。

[[活性污泥]]系统持续暴露于[[抗生素]]，往往会导致微生物群落结构重塑、功能基因丰度变化，以及氮、磷等营养物去除效率下降 [5]。现有污水处理工艺对抗生素去除效果不足，使得母体化合物及其转化产物不断排入水生生态系统 [6]。在污水生物处理过程中，抗生素不仅以母体形式存留，还会经历[[吸附]]、[[生物降解]]以及转化为中间产物等复杂过程。这些动态行为直接决定了其环境归趋和潜在风险 [7]。因此，研究抗生素在[[污水处理厂]]中的迁移转化规律，不仅对于评估其持久性和生态效应至关重要，也能为工艺优化提供科学依据。

以往研究已探索了[[活性污泥]]系统中[[抗生素]]的[[吸附]]与降解途径，并揭示了它们对微生物群落及 ARG 传播的影响。例如，Peng 等 [8] 报道了多种药物在 [[污水处理厂|WWTP]] 中的吸附和转化行为，发现对于六种可[[生物降解]]药物，异养生物降解和吸附是主要去除途径。Li 等 [9] 报道[[诺氟沙星]]可干扰硝化细菌活性，导致氮转化效率下降；而 Li 等 [10] 的研究表明，磺胺类药物[如[[磺胺甲噁唑]]（sulfamethoxazole, SMX）]可通过改变关键代谢途径影响 ARG 的传播。然而，多种抗生素共存是真实环境中常见的情形，可能触发复杂的协同或拮抗效应，而支配这些相互作用及其对转化过程影响的潜在机制仍未被充分理解。尽管如此，大多数研究仍局限于单一抗生素体系或短期暴露 [11,12]，因此尚未充分解析现实混合污染物条件下抗生素行为的机制基础。此外，当前研究主要关注宏观去除效率和风险评估 [13]，而将分子相互作用、转化过程与微生物响应联系起来的机制理解仍然有限。从分子角度开展的系统研究，尤其是阐明抗生素与[[胞外聚合物]]（extracellular polymeric substances, EPS）之间的相互作用及其对转化途径的调控作用，仍然十分缺乏。这一知识空白制约了对抗生素环境归趋和生态风险的更深入理解，凸显了迫切需要全面阐明相关机制，以支持高级废水处理与耐药性控制。

为弥补上述不足，本研究采用长期反应器运行结合多组学与[[分子模拟]]方法，从机制层面考察[[抗生素]]的迁移与转化，关联单一及混合抗生素胁迫下的分子相互作用、转化途径与微生物群落响应。本研究旨在提供机制性认识，以支撑污水处理工艺优化与抗生素污染控制。具体而言，我们选取了在[[污水处理厂]]出水与污泥中均具有中高生态风险的三类抗生素[14]，即[[环丙沙星]]、[[磺胺甲噁唑]]和[[罗红霉素]]。在[[序批式反应器]]200天的运行过程中，系统分析了单一或混合抗生素胁迫下它们的长期归趋、相分配与生物转化机制。为此，研究采用多尺度方法：利用宏基因组通路富集分析，识别环丙沙星（CIP）、磺胺甲噁唑（SMX）和罗红霉素（ROX）单一或混合暴露下的关键通路；基于[[京都基因与基因组百科全书]]（[[KEGG]]）[[直系同源]]（KO）系统开展差异表达分析与物种贡献分析，识别功能菌属及核心抗性/降解基因；结合[[分子动力学]]（MD）模拟与[[DFT|密度泛函理论]]（[[密度泛函理论|DFT]]），阐明抗生素与[[胞外聚合物]]（EPS）蛋白结合过程中的分子机制与热力学偏好。研究结果为揭示抗生素部分降解与广泛持留背后的机制提供了新的分子视角，并为优化污水处理工艺和缓解环境抗性风险提供理论依据。

## 2. 材料与方法

## 2.1. 生物反应器与运行

为模拟[[生物污水处理]]过程，建立了五个[[序批式反应器]]（SBR），每个工作容积为$^ { 4 \mathrm { L } , }$。这些反应器分别设为对照组、[[环丙沙星|CIP]]组、[[磺胺甲噁唑|SMX]]组、[[罗红霉素|ROX]]组和混合[[抗生素]]组。初始[[活性污泥]]取自中国上海某市政[[污水处理厂]]的二沉池。接种污泥特性如下：[[混合液悬浮固体]]（MLSS）为2920–3250 mg/L，[[混合液挥发性悬浮固体]]与MLSS比值（MLVSS/MLSS）为79%–82%，pH为6.85–7.10。

五个反应器均设置为同时实现碳去除与生物脱氮除磷。它们作为[[序批式反应器|SBR]]在相同条件下运行[每天两个12 h周期；[[水力停留时间]]（HRT）约1 d；[[污泥停留时间]]（SRT）=20 d]。反应器在室温下运行，不设外部温度或pH控制；混合阶段[[溶解氧]]（DO）维持在0.16–0.24 mg/L，曝气通过气体流量计供给（约1.0 L/min）并调节。完整运行参数见表S1和文本S1。

启动后，向反应器中通入模拟典型城市污水组成而设计的合成废水。采用这一方法是为了尽量减少实际废水带来的变异性，并确保不同处理条件之间的可比性。合成进水中以乙酸钠、葡萄糖和蔗糖作为碳源，以氯化铵作为氮源，以磷酸二氢钾作为磷源。详细组成见表 S2。

在无[[抗生素]]条件下经过 20 天的驯化期后，向反应器中引入 [[环丙沙星|CIP]]、[[磺胺甲噁唑|SMX]] 和 [[罗红霉素|ROX]]。在单一抗生素反应器中，每种抗生素的进水浓度均为 1.0 mg/L。在混合反应器中，三种抗生素以 1:1:1 的比例同时投加，每种化合物的浓度均为 1.0 mg/L（总浓度为 3.0 mg/L），以确保各处理间单个抗生素浓度一致。每个周期开始时，进水投加时间为 30 min，每周期进水体积为 2 L。抗生素与营养物（C、N 和 P）一起溶解在进水中，并在进水阶段引入。因此，抗生素投加采用基于周期的进水投加方式，而不是脉冲冲击或连续滴加。所选浓度（1.0 mg/L）代表了一种面向机制研究的胁迫水平，用于在受控条件下考察转化途径和相互作用效应。

## 2.2. 理化分析

定期从反应器中采集进水、出水和污泥样品，以测定常规水质指标和[[抗生素]]浓度。分析前，所有水样均通过 0.22 μm 滤膜过滤。[[化学需氧量]]（COD）、[[总氮]]（TN）、[[总磷]]（TP）、[[氨氮]]（NH<sub>4</sub><sup>+</sup>-N）、[[硝态氮]]（NO<sub>3</sub><sup>−</sup>-N）和[[亚硝态氮]] $( \mathrm { N O } _ { 2 } ^ { - } { \cdot } \mathrm { N } )$ 的浓度均按照标准方法测定 [15]。

[[胞外聚合物]]按照文献 [16] 中所述方法提取。随后，分别采用[[苯酚-硫酸法]]和 [[Lowry法|Lowry 法]]测定 EPS 中[[多糖]]（PS）和[[蛋白质]]（PN）的含量 [17]。[[FTIR]] 光谱使用 Nicolet iS20 [[傅里叶变换红外光谱|FTIR]] 光谱仪（[[Thermo Fisher Scientific]]）在 400–4000 cm<sup>−</sup> <sup>1</sup> 范围内采集，扫描次数为 32 次，分辨率为 $\mathsf { I c m } ^ { - 1 }$。[[激发-发射矩阵]]（EEMs）使用荧光光谱仪（[[Hitachi]] FL-7100，日本）测定，所得

[[激发-发射矩阵|EEM]] 数据按如下步骤预处理：（1）扣除超纯水的背景荧光；（2）利用 [[MATLAB]] 中的 Dreem 工具箱进行拉曼散射和瑞利散射的裁剪，并通过插值进行平滑 [18]。进水、出水和 [[胞外聚合物|EPS]] 中的[[抗生素]]浓度使用[[高效液相色谱-质谱联用|高效液相色谱-质谱联用系统]]（HPLC-MS）（[[Shimadzu]] LC-MS 2050）定量。抗生素[[生物降解]]的中间产物通过 [[飞行时间质谱|TOF-MS]]（[[Agilent]] 6550 Q-TOF 与 Agilent 1290 [[超高效液相色谱|UPLC]] 联用）检测。基于这些测定结果，通过质量平衡方法计算三种抗生素在稳定运行阶段（运行第 110 天）的归趋。有关理化分析的详细信息见正文 S1。

## 2.3. [[分子对接]]和[[分子动力学模拟]]

2.3.1. 降解途径分析的计算方法 详细信息见正文 S2。

## 2.3.2. [[蛋白质]]对接的计算方法

小分子（[[抗生素]]和 [[TNB]] [[腐殖酸]]模型）在 [[ORCA]] 中进行了优化 [B3LYP-D3(BJ)/6-311G(d,p)]；RESP 电荷使用 [[Multiwfn]] 获得。拓扑生成使用 [[GAFF]]（[[Sobtop]]）和 [[Amber14SB]]（[[GROMACS]]）。[[胞外聚合物|EPS]] 模拟使用 [[Packmol]] 在 12 nm 立方盒子中构建，而 [[OmpA]]–抗生素复合物在 [[TIP3P]] 水中溶剂化（1.5 nm 填充），并用 NaCl 中和。本研究中使用的 OmpA 结构来自 [[AlphaFold]] [[蛋白质]]结构数据库（AF-Q05146-F1-v6）。模拟中仅保留可溶性结构域（残基 77−193），排除跨膜区，以聚焦参与界面相互作用的可及结构域。该工作流程未手动选择模板。复合 EPS 基质被用作代表性最小模型，而非对天然污泥 EPS 进行完整结构重建。三种组分在模拟盒子中进行空间组装，随后通过能量最小化和平衡进行弛豫，而不是作为预先形成的化学键合复合物处理。所有 [[分子动力学|MD]] 模拟均采用最速下降能量最小化、0.9 nm 实空间截断、[[粒子网格Ewald|粒子网格 Ewald]]（PME）静电，以及在 298.15 K/1 bar 下使用恒定的粒子数、压力和温度（[[恒定粒子数、压力和温度系综|NPT]]）系综进行生产运行，EPS 运行 100 ns，OmpA 运行 200 ns。详细的 MD 设置见 Text S3。

## 2.4. 生物信息学与统计分析

宏基因组 reads 使用 [[fastp]] 进行质量过滤，并使用 [[MEGAHIT]] 进行组装。基因使用 [[Prodigal]]（≥100 bp）预测，并用 [[CD-HIT]] 聚类以构建非冗余目录。Reads 使用 [[SOAPaligner]] 进行比对，基因丰度以 [[RPKM]] 归一化。功能注释基于 [[KEGG]] 和 [[NR数据库|NR]] 数据库进行。宏基因组文库在 [[Illumina Nova-SeqTM X Plus]] 平台上以双端 150 bp reads 测序，每个样本产生约 6–10 Gb 的清洁数据。共运行五个独立的 [[序批式反应器|SBR]]，分别对应对照、[[环丙沙星|CIP]]、[[磺胺甲噁唑|SMX]]、[[罗红霉素|ROX]] 和混合[[抗生素]]条件，每个条件一个反应器。从同一反应器在不同时间点采集的样本被视为纵向/时间序列样本，而非独立生物学重复。原始宏基因组 reads 使用 [[Majorbio]] 标准化流程处理。组间比较使用平台内置的统计模块进行，在适当情况下应用非参数检验，并在多重检验中使用[[假发现率]]（FDR）校正。统计显著性基于 FDR 校正后的 p 值进行评估，具体如每项分析所述。

蛋白鉴定在Q值<0.01下被接受，定量基于高置信度肽段，差异蛋白定义为|log倍数变化|>1，[[假发现率|FDR]]校正后$p < 0 . 0 5$。详细信息见文本S4。对于[[宏蛋白质组学]]分析，采用基于苯酚的方案从污泥样品中提取总蛋白，随后进行[[胰蛋白酶]]酶解。LC-MS/MS数据在[[Orbitrap Astral质谱仪]]上以[[数据非依赖采集]]（DIA）模式获取。蛋白鉴定基于本研究宏基因组数据集构建的非冗余蛋白/基因目录进行，从而确保宏基因组与宏[[蛋白质]]组分析之间的一致性。DIA原始数据使用[[Spectronaut]]（版本19）处理，设置胰蛋白酶/P特异性，最多2个漏切位点，半胱氨酸脲甲基化为固定修饰，甲硫氨酸氧化和蛋白N端乙酰化为可变修饰，蛋白和肽段水平的FDR均控制在≤1%。

## 3. 结果与讨论

## 3.1. [[抗生素]]暴露下的处理性能与运行稳定性

理解微生物对[[抗生素]]胁迫的功能响应，是评估[[生物污水处理]]系统处理性能稳定性及抗生素迁移相关风险的基础。通过监测六项水质指标的时间变化（图1a–f），我们观察到在初始无抗生素阶段（0–20 d），所有反应器在短暂驯化期后均迅速实现了对常规污染物的稳定高效去除。然而，在引入抗生素胁迫后（从第20天起），各反应器的处理性能出现轻微差异。总体而言，对照组反应器保持稳定性能，为处理组提供了基准。单一抗生素组性能略有下降，而混合抗生素组在所有处理中表现出最明显但仍属适度的变化。在整个运行期间，所有反应器的出水浓度始终满足相关城市污水处理国家排放标准（一级B），证实了生物处理系统的成功建立与稳定运行。

在[[环丙沙星|CIP]]组中，[[总氮|TN]]去除在第40至140天之间略有下降，NO<sup>−</sup>-N去除在第140至180天之间下降。不同[[抗生素]]处理下与氮、磷代谢相关功能基因的描述性模式见图S1，仅供定性参考，不作机制推断。长期暴露于[[磺胺甲噁唑|SMX]]导致TN去除效率下降2.0%，表明其对脱氮性能具有适度但持续的影响[19]。在[[罗红霉素|ROX]]组中，TN和[[总磷|TP]]去除效率分别下降3.9%和2.8%。相比之下，混合抗生素组在所有反应器中表现出最显著的处理性能变化。[[化学需氧量|COD]]、TP、TN和NH<sub>4</sub><sup>+</sup>-N的平均去除效率分别下降3.6%、3.6%、6.3%和3.1%。这些结果表明，联合抗生素暴露对整体处理性能产生了累积效应，但系统仍保持运行稳定并符合排放标准。

## 3.2. [[抗生素]]的归趋

在单一和混合[[抗生素]]组中均监测了抗生素的长期归趋，揭示了不同的去除模式（图2a–c）。在水相中，单一抗生素组的抗生素去除效率在最初40天内逐渐升高，随后达到稳定水平，而混合抗生素组的稳定期则延迟至第60天。第120天后，所有组别的去除效率基本稳定，平均效率大小顺序为[[磺胺甲噁唑|SMX]] > [[罗红霉素|ROX]] ≈ [[环丙沙星|CIP]]（图2a）。污泥相中也观察到相似模式，其中抗生素累积量在最初28天内持续增加，并在第115天后达到平台期。[[吸附]]亲和力顺序为：CIP > ROX > SMX（图2b和S2）。

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/2167f2bb53f60465296f5e450efd77d89677dd989b252ddd0433ff2fc5fefeab.jpg>)

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/dd4c48cb666b641cff758ebc0bcddcb1605f7b09d0b07af889809cedff5d5594.jpg>)

d  
![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/226321d97bbde2a58f30e9e284fae8e6985d764b8e5147f2256ff367799db7b6.jpg>)

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/88835a1d720cd991903d7d0e92ec140d69808dda53fdaeb266c28c1d73c9eeec.jpg>)

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/817f026ef7e6be0bb897a64c7ef834064a3ea06e1bd405af322a9308c3d9040a.jpg>)

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/446c1ded6becf8f48c596cafefd6c0e42d95896bc1bbc1e2b2e47fb8631c3cac.jpg>)  
图1. 反应器中出水浓度的长期监测：(a) COD，(b) TP，(c) TN，(d) NH<sub>4</sub><sup>+</sup>-N，(e) NO<sub>2</sub><sup>−</sup>-N，以及(f) NO<sub>3</sub><sup>−</sup>-N。CIP，环丙沙星；SMX，磺胺甲噁唑；ROX，罗红霉素；Mixed，含CIP、SMX和ROX的混合抗生素处理。

将时间动态与归趋分布分析相结合（图2c），揭示了三种[[抗生素]]不同的分配和转化行为。基于质量平衡分析，[[磺胺甲噁唑|SMX]]表现出最高的去除效率和最低的污泥累积量，表明其在驯化[[活性污泥]]系统中的去除主要由微生物[[生物降解]]驱动（>70%）[20]。基于操作定义的质量平衡分析，将水相、[[胞外聚合物|EPS]]相关组分和残余污泥相关组分分开考察，EPS相关[[吸附]]被确定为SMX的次要去除途径，而EPS提取后残余污泥基质的吸附仅贡献很小一部分。详细计算见Text S1。这一行为归因于SMX的高极性和亲水性，这降低了其在污泥表面的疏水性吸附，并通过与水分子之间的强相互作用增强了其迁移性[21]。此外，由于共存抗生素之间的竞争效应，混合组中SMX的微生物降解受到抑制，其出水中残留浓度（21.3%）显著高于单一抗生素组（7.4%）。

相比之下，[[环丙沙星|CIP]]和[[罗红霉素|ROX]]表现出相似的归趋特征，其特点为[[生物降解]]作用较弱。处理后，超过50%的CIP和超过60%的ROX残留在出水中。CIP和ROX的去除主要受[[胞外聚合物|EPS]]和污泥[[吸附]]控制 $( \mathsf { A d s } _ { \mathrm { e p s } } , \mathsf { A d s } _ { \mathrm { s l u } } )$ 值得注意的是，EPS对CIP的吸附亲和力高于主体污泥基质[22]，而对于ROX，污泥吸附的作用比EPS吸附更为显著。这是因为CIP通过其芳香环、氟原子和质子化哌嗪环介导的静电与疏水联合作用被吸附，而ROX则通过其质子化二甲氨基的静电作用以及大环内酯结构的疏水效应与污泥结合。

污泥体系中的[[吸附]]是一个复杂的、非均相的过程 [23]。污泥 [[胞外聚合物|EPS]] 中[[蛋白质]]和[[多糖]]的相对贡献通常用组成比来评价。本研究采用多糖/蛋白质比值（PS/PN）。如图 2d 所示，混合组表现出最高的 PS/PN 比值，表明在联合[[抗生素]]暴露下，EPS 中多糖的相对贡献增加。如图 2e 所示，$1 6 4 1 \mathrm { c m } ^ { - 1 }$ 处的峰对应蛋白质中的酰胺基团 [24]，在混合组和 [[环丙沙星|CIP]] 组中对吸附贡献最强。$3 4 2 8 \mathrm { c m } ^ { - 1 }$ 处的谱带代表羟基提供的活性吸附位点 [25]。$1 0 8 0 \mathrm { c m } ^ { - 1 }$ 处的峰归属于多糖或多糖类物质中的 C−O−C 伸缩振动，$\bar { 1 } 4 0 \bar { 5 } \mathrm { c m } ^ { - 1 }$ 处的谱带对应 COO<sup>−</sup> 伸缩振动，可能与糖醛酸有关 [26]。此外，三维荧光光谱（[[三维荧光光谱|3D-EEM]]）结果（图 2f）证实了类蛋白质物质，特别是酪氨酸（峰 B）和色氨酸（峰 T），参与了三种抗生素的吸附 [27]。这些结果表明，EPS 中与蛋白质相关的官能团在抗生素—EPS 相互作用中发挥重要作用，这促使后续在分子水平上进行分析。

## 3.3. [[抗生素]][[吸附]]机制

图 3a 展示了三种抗生素（CIP、ROX 和 SMX）与复合 EPS 基质（蛋白质—多糖—腐殖酸）相互作用的代表性 MD 快照，为清晰起见仅显示抗生素和蛋白质。CIP、ROX 和 SMX 分别以粉色、绿色和黄色着色。在 0 ns 时，抗生素分子随机分散在模拟盒子中，尚未与 EPS 组分结合，形成高度无序的构型。到 5 ns 时，随着抗生素接近 EPS 表面，初始吸附变得明显，可能由范德华力和静电吸引驱动，形成弱的、瞬态的相互作用，标志着早期扩散和初始结合阶段。到 50 ns 时，吸附增强，抗生素开始在 EPS 的特定位点（如蛋白质上的疏水口袋、带电残基和表面凹槽）累积，形成更稳定的中间复合物，表现为分子间距离缩短和逐渐形成的氢键网络。到 100 ns 时，观察到抗生素在 EPS 周围明显聚集，这是由静电相互作用、氢键、π–π 堆积和疏水效应共同驱动的。

e  
![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/b74f4620728495f2049082e791771525ec895d5d0c42e41f9271ae7d8747298c.jpg>)

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/3f9aa274c65fa4663f89ccc61e7bd1ccaa6e4d405697183f4fcd5b4059637341.jpg>)

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/9e57b18b85e8bdf93d7849d9920ee89400165c968b498110f760cf4be60a6833.jpg>)

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/5f8d83141ef5e7f0bf07321fe43ecfd96e25124664a3b8bfae36ab14f3001d30.jpg>)

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/bcc3c7fc00dd99effb8c70bf210b6f015074711cccf2c2930d4e2a320a69b275.jpg>)

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/b3ae1017fabe35094231d084fc480fb111ca5b0f16a20b71c4a1c7bee67d4d1c.jpg>)  
图 2. 单一及混合抗生素组中（a）水相去除效率与（b）污泥中抗生素累积的长期监测。（c）单一及混合抗生素组中抗生素的归趋。（d）多糖与蛋白质比值（PS/PN）的长期监测。（e）各组 EPS 的 FTIR 光谱。关键 FTIR 谱带归属如下：1641 cm<sup>−</sup> <sup>1</sup>（酰胺 I，蛋白质），3428 cm<sup>−</sup> <sup>1</sup>（O–H 伸缩振动，羟基相关吸附位点），$1 0 8 0 { \mathrm { c m } } ^ { - 1 } ( { \mathrm { C } } { \mathrm { - } } 0 { \mathrm { - C } }$ 伸缩振动，多糖），以及 1405 cm<sup>−</sup> <sup>1</sup>（COO<sup>−</sup> 伸缩振动，糖醛酸相关基团）。（f）各组在抗生素暴露初期（1）和后期（7）的 3D-EEM 峰拾取结果。对于 3D-EEM，峰 B 和峰 T 分别代表类酪氨酸和类色氨酸蛋白质类物质；峰 N 代表类蛋白质物质；峰 D、C、M 和 A 代表类腐殖质物质。3D-EEM，三维激发–发射矩阵荧光光谱；$\mathrm { \sf A d s _ { E P S } } ,$ 对 EPS 的吸附；$\mathsf { A d s } _ { \mathrm { s l u , } }$ 对污泥的吸附；Bio，生物降解；Con，对照；Eff，出水；EPS，胞外聚合物；FTIR，傅里叶变换红外光谱。

结合自由能计算与距离分析进一步揭示了[[抗生素]]与单一 [[胞外聚合物|EPS]] 组分之间的结合特征。如图 3b–d 和文本 S12 所示，在三种 EPS 组分中，[[蛋白质]]与所有抗生素的相互作用最强，表现为最小的蛋白质–抗生素距离（图 3b）。与此一致，蛋白质与抗生素之间的结合能显著强于（更有利）与[[多糖]]或[[腐殖酸]]相关的结合能（图 3e）。这种优先结合可能归因于蛋白质表面存在明确的疏水口袋、带电残基 $( \boldsymbol { \mathrm { e . } } \boldsymbol { \mathrm { g . } } ,$、精氨酸和赖氨酸）以及柔性环区 [28]，它们可通过[[氢键]]、静电吸引和范德华相互作用与抗生素的芳香环、羧基或胺基结合，从而在 [[分子动力学|MD]] 轨迹中产生更高的能量贡献和更低的结合自由能 [29]。相比之下，抗生素与多糖和腐殖酸的结合较弱（图 3e），表现为更长且波动更大的距离（图 3c–d）。这可由多糖主要呈线性/支化结构、缺乏特异性结合位点且易受溶剂竞争干扰来解释。腐殖酸作为一种无定形有机聚合物，具有异质且相对亲水的表面，使抗生素接触更加随机和非特异性；因此，观察到较大波动，且很少建立持久强结合，导致总体相互作用最弱。

图 3f–j 进一步阐明了蛋白质—抗生素的相互作用机制。RMSF 分析（图 3f）显示，CIP 结合降低了蛋白质的柔性，ROX 表现出相似趋势，而 SMX 结合则导致 RMSF 升高。这些结果表明，CIP 和 ROX 倾向于与蛋白质形成更稳定的复合物，从而限制特定残基/片段的动态，提高局部刚性和结构稳定性。如图 3g 所示，蛋白质-CIP 和蛋白质-ROX 体系在整个模拟过程中保持了相对较多的氢键数量，并随时间逐渐增加或保持稳定。代表性构象的可视化（图 3h）进一步表明，CIP 与 BSA 表面口袋具有更优的形状互补性，并能形成多个稳定的氢键。相比之下，ROX 由于分子尺寸较大且糖基侧链较为柔性，受到明显的空间位阻，较难深入蛋白质口袋内部（图 3j），因此其结合强度弱于 CIP。相反，SMX-蛋白质体系的氢键数量较少且波动较大，结合距离也更长，表明其结合较为松散且不稳定，可能主要受瞬时相互作用主导。

总体而言，这些结果表明，在污水处理系统中，[[胞外聚合物|EPS]] 蛋白是负责[[抗生素]][[吸附]]和滞留的主要组分，而[[多糖]]和类腐殖质物质的贡献相对较小（对于某些抗生素甚至可以忽略）。

## 3.3.2. 混合[[抗生素]]条件下 [[OmpA]] 介导的[[吸附]]与共滞留

为了在实际[[生物污水处理]]系统中从分子水平研究[[蛋白质]]—[[抗生素]]相互作用，我们从蛋白质组学数据集中选取了一个具有代表性的界面相关蛋白，进行[[分子对接]]和[[分子动力学模拟]]。该候选蛋白的筛选基于统计显著性、生物学相关性和结构可行性；详细筛选标准见

g  
a  
![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/48f22bb57e831fe8dc8e2bee1371b33fa16c8f233ed17bb419728426443a334a.jpg>)

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/200c8f7318d570ead2c597a69ada1abc5b365c1cf6bea6c81f9ee7e36d300e47.jpg>)

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/6855c63820e76fb51e417560883d7b222c91b658a6d472db0e2de57fa149b06d.jpg>)

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/1f89846dd90872b09b28c641b03dfab0f63c6a270a9c23e1e088eac12e090e76.jpg>)  
图 3.（a）复合 EPS 体系中抗生素吸附的代表性 MD 快照；抗生素与 EPS（b）蛋白质、（c）多糖和（d）腐殖酸之间的最小距离。（e）抗生素与 EPS 组分之间的结合能。（f）蛋白质骨架的 RMSF。（g）蛋白质与抗生素之间氢键随时间的演化；蛋白质与（h）CIP、（i）SMX 和（j）ROX 的代表性结合构象。MD，分子动力学；PN，蛋白质；PS，多糖；TNB，腐殖酸模型化合物；RMSF，均方根波动。

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/739d7375bd672081a942b2d8f90ff681005d49218756a341809f3937382a4d2f.jpg>)

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/24aa92854ae663bec9171c55908dcb26a299e5a10b4fdfef01bed7691633d7ea.jpg>)

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/a822f8592506fa5a1a1925fe2394468d95a176ddb90aba16b2c53a7323d05559.jpg>)

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/f66295c34286016468c55fd3544759b91bb9c7b22191c15d32fecf740317a415.jpg>)

正文 S5 中给出。

[[OmpA]]—[[抗生素]]复合物在约 100 ns 后趋于稳定。[[蛋白质]]骨架 [[均方根偏差|RMSD]] 收敛至约 0.30−0.35 nm（图 S3b），并且三种抗生素的配体 RMSD（相对于蛋白质）以及蛋白质—配体最小距离均趋于稳定（图 S3c–d）。这些趋势表明，配体在形成稳定结合构象之前经历了表面迁移、位点搜寻和稳定占据的过程，因此可以合理使用 100−200 ns 的轨迹进行机制统计和构象分析。

三种[[抗生素]]各自表现出不同的结合相互作用。[[环丙沙星|CIP]] 与 [[OmpA]] 的最小距离更短且波动更小，并在稳定阶段形成了更丰富的[[氢键]]网络（最多约 6−8 个氢键，模拟中后期出现明显增加；图 4a），表明 CIP 的结合以多点氢键和[[静电相互作用]]为主，从而导致强[[吸附]]和稳定滞留。相比之下，[[罗红霉素|ROX]] 随时间推移维持的氢键数目较少（约 1–3 个），但其 [[均方根偏差|RMSD]] 波动相对较小，意味着其结合模式更依赖[[疏水接触]]、[[水介导桥连]]以及特定位点的[[形状互补性]]。[[磺胺甲噁唑|SMX]] 则表现出后期增强现象：初始阶段氢键较少且构象调整更明显，约 120 ns 后氢键逐渐增加并趋于稳定，说明其吸附更受动力学重排控制。

[[均方根波动|RMSF]] 分析（图 4b）表明，[[抗生素]]结合并未诱导 [[OmpA]] 发生大规模构象转变；但显著降低了特定区段（约残基 20−40、45−65 和 75−90）的局部柔性。这意味着这些区域可能构成关键结合/约束元件，通过降低局部构象自由度来增强复合物稳定性。

重要的是，在混合[[抗生素]]条件下，我们观察到一种可能具有相关性的协同共[[吸附]]机制。结构可视化（图 4c）显示，[[罗红霉素|ROX]] 优先占据一个相对独立的结合位点，而 [[环丙沙星|CIP]] 和 [[磺胺甲噁唑|SMX]] 可以共同占据同一口袋。观察到其芳香基团之间存在直接的 [[π-π堆积|π–π 堆积]]和[[范德华相互作用|范德华协同作用]]，这可以降低局部自由能并增强占据稳定性。相互作用统计进一步表明，CIP 的相互作用更为集中，与 [[丙氨酸|ALA2]]、ALA3 和 [[赖氨酸|LYS4]] 等残基形成持续[[氢键]]，还表现出[[盐桥]]或[[阳离子-π相互作用|阳离子−π 相互作用]]（图 4d–f）。ROX 则通过更分散的网络进行相互作用，涉及 [[亮氨酸|LEU39]]、[[谷氨酰胺|GLN30]]/34、[[天冬氨酸|ASP38]] 和 [[缬氨酸|VAL31]] 等残基，与氢键/水桥和[[疏水接触]]的组合相一致。SMX 表现出中等程度的相互作用模式，主要通过氢键和[[疏水相互作用]]与 [[精氨酸|ARG103]]、ARG106、VAL6 和 LYS4 作用。

这些发现为结构不同的[[抗生素]]在污泥体系中差异迁移和滞留提供了分子层面的解释。[[环丙沙星|CIP]] 具有相对较高的极性和更强的多点[[氢键]]能力，更容易在界面蛋白位点被强[[吸附]]，从而实现持续滞留。相比之下，[[磺胺甲噁唑|SMX]] 单独存在时结合较弱并可能发生重排；然而在 CIP 存在下，它可以通过 π–π 协同作用在同一口袋内被共同稳定，从而提高共吸附和共滞留的概率。这一机制可以部分解释为什么混合组中 SMX 的平均吸附量超过单一抗生素组（图 S2）。相比之下，[[罗红霉素|ROX]] 更倾向于采用一种独立结合策略，主要由疏水和水桥相互作用驱动，与 CIP/SMX 的结合方式不同。

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/65e28c46812408f348b4ea808e20932f322d590ce6aed9e742ad28689f98872b.jpg>)

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/5485e0b2920e7b9390fbd9f9cf1de2c508bf4dd4e2855deaa9d373dec2ac22f7.jpg>)

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/7fd4316ce4a66c87de72c68079bdc154c43015cbfafb8221bfbb55ab9d29ed4f.jpg>)

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/4d185616a2d558508393b0db5db2d4df829bc399dd3592257f83e8bd78bf3b45.jpg>)

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/4be8261972e7ba570c8c7b04f7151c3a691170bbcbe79e7939a968c6fd08ec7c.jpg>)

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/3e13cdfbafc4c62edc8b78db05cfc1f745999e80c351af0ff07ff8751383a696.jpg>)  
图 4。（a）分子动力学模拟过程中抗生素与 OmpA 之间氢键数量。（b）OmpA–抗生素复合物与单独 OmpA 中蛋白质的 RMSF 变化。（c）抗生素与 OmpA 结合模式的可视化。（d）CIP、（e）SMX 和（f）ROX 与 OmpA 的相互作用统计。

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/1219e7155311006d499f125001a62ff74a35a71bfbe86056a7011350d8a69cae.jpg>)  
图 5。单一（蓝色箭头）和混合抗生素（红色箭头）组中（a）CIP、（b）SMX 和（c）ROX 的拟议生物降解路径。（d）CIP、（e）SMX 和（f）ROX 组反应路径产物之间的能垒步骤图，以及最高能垒步骤起始物的活性电子分布图像。

## 3.4. 拟议[[生物降解]]路径

为了建立分子尺度的反应性依据，我们计算了 [[环丙沙星|CIP]]、[[罗红霉素|ROX]] 和 [[磺胺甲噁唑|SMX]] 的一组电子结构描述符，以表征潜在的反应位点，包括[[前线分子轨道]]（HOMO/LUMO）、[[静电势]]（ESP）图和 [[Fukui函数|Fukui 函数]]（详见文本 S6）。

图 5a–f 展示了单一和混合抗生素组中三种抗生素的拟议降解路径及相关能垒分析。如图 5a–d 所示，单一抗生素组中 CIP 的降解始于哌嗪环上不同亚甲基碳的连续氧化羟基化，生成两种同分异构中间体 P1 $\mathrm { ( C _ { 1 7 } H _ { 1 8 } F N _ { 3 } O _ { 4 } ) }$ 和 P2 $( \mathrm { C _ { 1 7 } H _ { 1 8 } F N _ { 3 } O _ { 4 } } )$，其 m/z 为 348。随后，P1 和 P2 经氧化脱氢生成产物 P8 $( m / z = 3 6 0 )$。P8 的哌嗪环随后进一步发生氧化开环，生成产物 P3（m/z = 362）。接着，P3 发生去甲酰化（失去 –CHO），生成 P9 $( m / z = 3 3 4 )$。P9 进一步去甲酰化得到产物 P4 $( m / z = 3 0 6 )$，P4 再通过脱去乙胺基转化为 $\mathbf { P } 5 \ ( m / z = 2 6 3 )$。P5 的氨基随后可通过氧化去除，生成 P6 $( m / z = 2 4 8 )$。或者，P9 脱去乙胺基可生成 P10 $( m / z = 2 9 1 )$，P10 再通过去酰胺化转化为 P6。此外，母体化合物可先经脱氟，再经氧化羟基化生成产物 P7 $( m / z = 3 3 0 )$。这些阶段的产物将进一步降解，最终矿化为无机物质（如 H<sub>2</sub>O、CO<sub>2</sub>）。

在混合[[抗生素]]组中，[[环丙沙星|CIP]] 的初始降解与单一组一致（生成 P1/P2），但后续路径显著简化为三条主要途径。在已确定的其中两条路径中，P1 和 P2 经氧化[[开环]]直接转化为 P3，P3 再经 P4 和 P5 降解为 P6，绕过了中间体 P8、P9 和 P10。在路径 3 中，CIP 经脱氟转化为 P7。

对于单一[[抗生素]]组中的[[磺胺甲噁唑|SMX]]（图5b），第一条途径涉及初始的氧化[[开环]]生成P1。随后，[[磺酰胺键|S−N磺酰胺键]]的断裂释放出${ \mathrm { P 2 } } ,$，其进一步被氧化为P3。在第二条途径中，中间体P1通过$\mathrm { c } { - } \mathrm { c }$键的氧化断裂转化为P4。两条途径的最终产物均为小无机分子（H<sub>2</sub>O、CO<sub>2</sub>、CO<sub>3</sub><sup>2−</sup>、H<sub>2</sub>SO<sub>4</sub>）。然而，混合抗生素组中SMX的[[生物降解]]仅遵循单一路径（图5b），因为经由中间体P4进行的途径$^ { 2 , }$未被检测到。

在单一[[抗生素]]组中，[[罗红霉素|ROX]]共鉴定出七条降解途径（图5c），涉及[[氧化脱氢]]、[[C−O键断裂]]和[[开环]]等多种反应类型，均与其分子结构中的官能团（如氨基、酯基和醚基）密切相关。在途径1和2中，ROX或通过氧化脱氢转化为P1 $( m / \mathfrak { z } = 7 4 9 )$，或通过2-[(甲氧基乙氧基)-甲基]肟取代基中C−O键的断裂进行转化。途径3–5均由5-(4-二甲氨基-四氢-3-羟基-6-甲基-2-吡喃氧基)取代基中C−O键的断裂引发，导致失去一个$\mathrm { C } _ { 8 } \mathrm { H } _ { 1 5 } \mathrm { N O } _ { 2 }$部分并生成产物P3 $( m / \pmb { \mathrm { z } } = 6 8 0 )$。随后P3分为三条子路径：(i) 在3-(四氢-5-羟基-4-甲氧基-4,6-二甲基-2-吡喃氧基)位置发生C−O键断裂，释放一个$\mathrm { C _ { 8 } H _ { 1 4 } O _ { 3 } }$部分生成$\mathrm { P } 7 ( m / z = 5 2 2 ) ; \mathrm { ( i i ) }$；内酯的氧化开环生成P9 $( m / \mathfrak { z } = 6 9 6 ) ;$；或(iii) 肟基中C−N键的断裂，释放2-[(甲氧基乙氧基)-甲醇]生成P6（m/ $z = 5 7 6 )$）。

在途径6和7中，[[罗红霉素|ROX]]首先在3-(四氢-5-羟基-4-甲氧基-4,6-二甲基-2-吡喃氧基)位置通过[[C−O键断裂]]转化为P4 $( m / \mathfrak { z } = 6 7 9 )$，释放一个$\mathrm { C _ { 8 } H _ { 1 4 } O _ { 3 } }$部分。随后P4通过两条路线进一步降解。第一条路线涉及5-(4-二甲氨基-四氢-3-羟基-6-甲基-2-吡喃氧基)取代基处的C−O键断裂，释放一个$\mathrm { C } _ { 8 } \mathrm { H } _ { 1 5 } \mathrm { N O } _ { 2 }$部分生成P7（m/ $z = 5 2 2 )$）。P7进一步通过失去一个甲基乙基醚基团降解为P8 $( m / z = 4 6 2 )$，继而通过[[脱羧]]生成P10 $( m / z = 4 1 8 )$。第二条路线涉及内酯的氧化[[开环]]生成P5 $( m / z = 6 9 5 )$，随后其被裂解产生$^ { 3 , 4 , 6 }$-三脱氧-3-(二甲氨基)-β-D-木糖-己吡喃糖（P11；m/ $z = 1 7 6 )$）。在混合[[抗生素]]组中，ROX的[[生物降解]]途径简化为六条路线，主要表现为某些途径和步骤的省略。具体而言，途径4未被检测到，且途径3中的P10步骤和途径5中的P11步骤缺失。

对单一和混合[[抗生素]]组中三种抗生素降解的比较表明，对于给定抗生素，核心降解位点和主导途径在两个系统中保持一致。主要差异在于途径的数量和复杂性以及中间产物的多样性。单一抗生素组表现出更多且更复杂的途径，而在混合组中检测到的产物较少，途径更直接，常出现“跳步”反应（图 S8）。这与抗生素的内在特性和反应的能量需求有关。[[DFT]] 计算（图 5d–f；详见正文 $s 7 { - } S 9$ 和图 S5–S7）表明，在混合抗生素系统中的竞争压力和调整后的能量资源分配下，微生物优先选择能垒较低的降解途径。进一步使用基于 [[ECOSAR]] 的毒性预测评估了已鉴定转化产物的环境相关性，详细结果见文本 S10。

## 3.5. 基于宏基因组的机理解释

## 3.5.1. 单一[[抗生素]]组中的迁移与转化机制

为了在微生物和功能水平上进一步解释这些观察到的行为，进行了[[宏基因组学|宏基因组分析]]。在单一[[抗生素]]组中，不同抗生素的迁移和转化表现出不同的微生物群落适应性，并强烈依赖于分子结构[30,31]。宏基因组 [[KEGG]] 富集分析显示，在 [[环丙沙星|CIP]] 组中（图 S9a），与细胞表面黏附和膜运输相关的功能类别得到富集，包括[[细胞黏附分子]]（ko04514）、[[黏附连接]]（ko04520）、[[紧密连接]]（ko04530）和[[内吞作用]]（ko04144）。这些 [[京都基因与基因组百科全书|KEGG]] 通路名称保留为注释标签；富集反映的是映射到这些模块的细菌同源/[[直系同源]]物以及与运输/黏附相关的功能，而非真核生物连接或内吞过程本身。总体而言，这些富集表明细胞–细胞/细胞–[[胞外聚合物|EPS]] 相互作用增强，并可能增强与摄取相关的过程，从而增加[[生物膜]]和 EPS 介导的 CIP [[吸附]]与固存。然而，一旦在胞内受到挑战，CIP 主要引发以[[药物外排]]和 [[DNA修复|DNA 修复]]为核心的抗性网络[32,33]。编码 [[ABC转运系统|ABC 转运系统]]的关键基因 K02015 和 K02016（图 6a）显著上调，其核心组分 K02003 和 K02004 与 CIP 去除效率呈显著负相关（图 6d），表明增强的外排可能有助于 CIP 在水相中的持久存在。同时，DNA 加工蛋白 K04096 的显著上调（图 6a）表明对 CIP 诱导损伤的主动修复。CIP 的有限[[生物降解]]在统计学上与 [[Ottowia]] 和 [[Micropruina]] 通过未表征 KO K07090 的富集相关，该 KO 与抗生素去除性能呈显著相关（图 7b 和文本 S11），与先前报道将 K07090 确定为抗生素胁迫下的主要 KO 一致[34]。

[[磺胺甲噁唑|SMX]] 组表现出并存的[[生物降解]]–抗性响应。SMX 的低[[吸附]]与其在 SMX 胁迫下对[[生物膜]]相关通路（如[[群体感应]]，ko02024）的抑制有关（图 S9b）[35]。先前研究报道，

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/e940517e3f483a1d3ce3ca233f4edb5b45d6bb621fc4188c2aecc9676948b7ab.jpg>)  
图6.（a–c）与对照组相比，经Wilcoxon秩和检验鉴定的（a）CIP、（b）SMX和（c）ROX组中显著不同的KO。（d–f）在单一抗生素组中与抗生素去除效率显著相关的KO。在（d–f）图中，节点大小代表物种或功能的丰度；连线粗细表示相关性的强度。CI，置信区间。

K03088参与[[磺胺甲噁唑|SMX]][[生物降解]][36]。在我们的研究中，在长期SMX压力下，[[Micropruina]]和[[Kineosphaera]]成为优势菌属（图7f），由这些微生物贡献的K03088丰度与SMX去除效率呈显著正相关（图6e），支持了一种统计上稳健但仅为相关性的物种–功能关联（文本S11）。同时，暴露于SMX的群落激活了抗性网络，包括[[ABC转运系统]]ko02010（图S9b）、转录重编程（K02529）和[[水平基因转移]]（K07485）（图6b）。总体而言，降解潜力与系统性抗性的共存可能共同决定了SMX的归趋，其特征是相对较高的生物可降解性和较低的[[吸附]]性，但在出水中仍持续存在。

对于[[罗红霉素|ROX]]而言，其迁移和转化呈现出一种持久性模式，该模式由以下因素主导：占优势的[[生物膜]]/[[胞外聚合物|EPS]]相关[[吸附]]、增强的外排抗性以及受限的[[生物降解]]。[[宏基因组学|宏基因组分析]]表明，ROX胁迫下的群落重塑导致[[Micropruina]]成为优势菌属（图7f）。该菌属贡献了关键基因K01992和K07090，这些基因与ROX去除效率呈正相关（图7b）。具体而言，ABC 2型转运蛋白K01992（图6f）可能参与与ROX相关的转运相关过程，而功能未表征蛋白K07090（图6f）可能介导胞内转化。然而，这种有限的生物降解潜力似乎不足以抵消ROX较高的固有化学稳定性（初始能垒为0.72 eV）、与甘油脂代谢激活相关的增强吸附（ko00561；图S9c），以及“生存优先”策略的竞争优势，包括涉及K02033的ABC转运蛋白相关转运响应增强和DNA损伤修复（K03657）（图6c）。因此，ROX在污泥中表现出显著富集，并在出水中持续存在。

## 3.5.2. 混合[[抗生素]]组中的迁移与转化机制

在[[环丙沙星|CIP]]、[[磺胺甲噁唑|SMX]]和[[罗红霉素|ROX]]的联合胁迫下，微生物群落通过系统性上调[[ABC转运系统]]ko02010构建了一个高效的外排网络，该系统在[[蛋白质]]组水平上同样显著上调（图S9d）。其富集组分包括K02031（ddpD）和K02033（ABC.PE.P）（图7a），表明在混合胁迫下ABC转运蛋白相关膜转运模块被激活。鉴于K02033在[[KEGG]]中被注释为肽/镍转运系统通透酶蛋白，我们对该信号的解释较为保守，将其视为转运相关适应，而非多药[[抗生素]]外排的直接独立证据。如图7a所示，[[IV型分泌系统]]蛋白[[VirD4]]（K03205）可能促进抗性基因的水平转移，[[DNA旋转酶]][[gyrB]]（K02470）可能通过靶标修饰降低CIP的效力[33]，位点特异性重组酶[[spoIVCA]]（K06400）可能促进适应性基因组重组。

[[Zoogloea]] 作为优势属的出现（图 7f），以及细胞周期–Caulobacter 通路（ko04112；图 S9d）的富集，表明生长调控和[[生物膜]]相关适应增强，这与 [[胞外聚合物|EPS]] 产量增加能够为[[抗生素]]提供额外[[吸附]]位点的情况一致[37]。此外，[[宏基因组学|宏基因组分析]]表明，抗生素[[生物降解]]潜力受到复杂调控，既涉及激活也涉及抑制。一方面，群落富集了[[淀粉和蔗糖代谢]]（ko00500；图 S9d），并且 [[β-葡萄糖苷酶]]（bglB，K05350）的显著富集（图 S9f）表明[[多糖]]被活跃水解以获取碳源和能量[38]。这种代谢转变可能支持抗生素的共代谢转化，这与[[多环芳烃]]（ko00624）和[[糠醛]]（ko00365）降解相关通路的上调一致（图 S9d）。[[Dechloromonas]]（芳香族共代谢的潜在执行者）在群落组成谱中的出现（图 7f），以及 [[Micropruina]]（对与三种抗生素降解均呈正相关的 [[直系同源|KO]] 有主要贡献的属）的识别，进一步支持了物种–功能关联（图 7b）。

然而，这种[[生物降解]]潜力受到若干制约因素的削弱。运输和修复相关功能（包括 [[8-oxo-dGTPase]] K03574）的联合上调（图 7c–e），以及[[辅因子合成]]（ko01240）和[[次生代谢物合成]]（ko01110）通路的抑制（图 S9d），提示了一种“生存优先”的响应模式，这可能限制降解酶的活性和关键辅酶（如 [[NADH]]）的供应，从而抑制转化能力[33]。这一解释得到与[[抗生素]]去除效率相关的多组学相关性的支持，而非直接因果验证。总之，混合抗生素胁迫下抗生素的迁移与转化反映了多尺度协同效应：尽管优势属和代谢激活提供了转化潜力，但抗生素固有的稳定性、与 [[胞外聚合物|EPS]] 的差异性相互作用，以及群落层面的抗性/修复和代谢抑制，共同塑造了部分降解和广泛持留的最终结果。

a  
![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/8f01ffa888bc9a5ecd9d897b3aa96b7bd97e7bf35bd0020b244e0357b51a87fd.jpg>)

b  
![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/2a49a7ecb8ecbb7b8b0d0a07ebb41840489415424f56f321c9eac326475d16f6.jpg>)

C  
![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/50575cb95ed32bef40fe3434a5dc2075be7429ee43fa863e96c32225939f402d.jpg>)

e  
![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/755c5bf365c01b72951f97df6d718bcd227d58975b979708d2a8190d4a751289.jpg>)

![](<../2.SCI_MD/Migration and biotransformation mechanisms of risk-priority antibiotics in wastewater biotreatment An integrated multi-omics and molecular dynamics perspective/images/ff4026b483c076e01693aff70c126b493e762a13d131b9e44d813d93ad722314.jpg>)  
图 7. （a）与对照相比，混合组中显著不同的 KO，采用 Wilcoxon 秩和检验识别。（b）与抗生素去除呈正相关的 KO 在属水平上的物种和功能贡献分析条形图。（c–e）混合抗生素组中与抗生素去除效率显著相关的 KO（节点大小代表物种或功能的丰度；连线粗细表示相关性强度）。（f）各分组和时间点的属水平群落组成（1–7 分别代表第 15、45、75、105、135、165 和 195 天）。

## 4. 结论

本研究系统考察了三种具有中高风险水平的[[抗生素]]在[[生物污水处理]]过程中的迁移与转化机制，揭示其在环境中截然不同的归趋由微生物群落内部宏观代谢重构与微观分子相互作用共同塑造。具体而言，在长期运行过程中，水相中抗生素的去除效率遵循 [[磺胺甲噁唑|SMX]] > [[罗红霉素|ROX]] ≈ [[环丙沙星|CIP]] 的顺序，而污泥相中的[[吸附]]亲和力则为 CIP > ROX > SMX。[[胞外聚合物|EPS]] 表征（[[多糖|PS]]/[[蛋白质|PN]]、[[FTIR]] 和 [[三维荧光光谱|3D-EEM]]）一致证实类蛋白组分为主要吸附位点。从机制上看，模拟结果表明抗生素优先与蛋白组分结合，并支持混合暴露条件下可解释的共吸附行为：其中 CIP 通过多位点[[氢键]]/[[静电相互作用]]锚定，并通过芳香相互作用促进 SMX 在同一结合口袋内的稳定化，从而增加共滞留潜力。基于 [[DFT]] 的反应性描述符与能垒分析支持所提出的转化路径，并合理阐释了混合体系中简化的“跳步”转化现象。

在单一[[抗生素]]长期暴露条件下，微生物群落中富集了与抗生素去除显著相关的细菌属（如 [[Micropruina]]、[[Ottowia]]、[[Kineosphaera]]），同时伴随着更多样的反应产物和更复杂的降解路径。相比之下，混合抗生素产生的联合胁迫则表现为一种“生存优先”策略。转运相关应激响应激活、应激修复机制以及代谢抑制等响应更为突出，且与单一抗生素处理组相比，混合抗生素组的抗生素降解速率更低。此外，混合处理组中的微生物呈现出与热力学上更有利、能垒更低的“跳步”路径相一致的转化模式。

本研究深化了对[[活性污泥]]系统中[[抗生素]]迁移、转化与[[生物降解]]机制的认识，为优化[[生物污水处理]]中抗生素去除技术提供了机制性依据。

## [[CRediT]] 作者贡献声明

[[Bingqing Wang]]：正式分析、软件、初稿撰写、审阅与编辑。[[Zuxin Xu]]：概念构思、经费获取、方法学、资源提供。[[Bin Dong]]：正式分析、监督、验证。

## 利益冲突声明

作者声明不存在可能影响本文工作的已知竞争性经济利益或个人关系。

## 致谢

本工作受[[国家自然科学基金]]（52192684、U2340214）资助。

## 附录 A. 补充数据

本文的补充数据可在线获取：https://doi. org/10.1016/j.eehl.2026.100260.

## References

[1] P. Chaturvedi, P. Shukla, B.S. Giri, P. Chowdhary, R. Chandra, P. Gupta, et al., Prevalence and hazardous impact of pharmaceutical and personal care products and antibiotics in environment: a review on emerging contaminants, Environ. Res. 194 (2021) 110664.

[2] W. Liu, W. Huang, Z. Cao, Y. Ji, D. Liu, W. Huang, et al., Microalgae simultaneously promote antibiotic removal and antibiotic resistance genes/bacteria attenuation in algal-bacterial granular sludge system, J. Hazard. Mater. 438 (2022) 129286.

[3] J. Guo, J. Li, H. Chen, P.L. Bond, Z. Yuan, Metagenomic analysis reveals wastewater treatment plants as hotspots of antibiotic resistance genes and mobile genetic elements, Water Res. 123 (2017) 468–478.

[4] H. Sun, H. Zhang, D. Wu, J. Ding, Y. Niu, T. Jiang, et al., Deciphering the antibiotic resistome and microbial community in municipal wastewater treatment plants at different elevations in eastern and western China, Water Res. 229 (2023) 119461.

[5] G. Chu, W. Qi, W. Chen, Y. Zhang, S. Gao, Q. Wang, et al., Metagenomic insights into the nitrogen metabolism, antioxidant pathway, and antibiotic resistance genes of activated sludge from a sequencing batch reactor under tetracycline stress, J. Hazard. Mater. 462 (2024) 132788.

[6] L. Rong, B. Zhang, H. Qiu, H. Zhang, J. Yu, Q. Yuan, et al., Significant generational effects of tetracyclines upon the promoting plasmid-mediated conjugative transfer between typical wastewater bacteria and its mechanisms, Water Res. 287 (2025) 124290.

[7] S. Zhou, Y. Jia, H. Fang, C. Jin, Y. Mo, Z. Xiao, et al., A new understanding on the prerequisite of antibiotic biodegradation in wastewater treatment: adhesive behavior between antibiotic-degrading bacteria and ciprofloxacin, Water Res. 252 (2024) 121226.

[8] J. Peng, X. Wang, F. Yin, G. Xu, Characterizing the removal routes of seven pharmaceuticals in the activated sludge process, Sci. Total Environ. 650 (Pt 2) (2019) 2437 2445

[9] S. Li, B. Ma, Z. She, L. Guo, Y. Zhao, C. Jin, et al., Effect of norfloxacin on performance, microbial enzymatic activity and microbial community of a sequencing batch reactor, Environ. Technol. Innov. 18 (2020) 100726.

[10] T. Li, Y. Li, M. Li, N. Wang, Z. Sun, X. Li, et al., Effects of sulfamethoxazole on nitrogen transformation and antibiotic resistance genes in short-cut nitrification and denitrification process treating mariculture wastewater, Chem. Eng. J. 454 (2023) 140517.

[11] J. Qian, S. Bai, X. Mi, Q. Li, W. Hao, Y. Zhang, et al., Insights into norfloxacin biodegradation and the fate of antibiotics resistance genes associated with sulfurdriven autotrophic denitrification, Chem. Eng. J. 516 (2025) 164212.

[12] R. Yan, Y. Wang, J. Li, X. Wang, Y. Wang, Determination of the lower limits of antibiotic biodegradation and the fate of antibiotic resistant genes in activated

sludge: both nitrifying bacteria and heterotrophic bacteria matter, J. Hazard. Mater. 425 (2022) 127764.

[13] Q. Liu, Y. Li, Y. Sun, K. Xie, Q. Zeng, Y. Hao, et al., Deterioration of sludge characteristics and promotion of antibiotic resistance genes spread with the coexisting of polyvinylchloride microplastics and tetracycline in the sequencing batch reactor, Sci. Total Environ. 906 (2024) 167544.

[14] B. Wang, Z. Xu, B. Dong, Occurrence, fate, and ecological risk of antibiotics in wastewater treatment plants in China: a review, J. Hazard. Mater. 469 (2024) 133925.

[15] E.W. Rice, L. Bridgewater (Eds.), Standard Methods for the Examination of Water and Wastewater, twenty-second ed., American Public Health Association Washington, DC, 2012.

[16] L. Wang, Z. Lei, Z. Zhang, X. Yang, R. Chen, Deciphering the role of extracellular polymeric substances in the adsorption and biotransformation of organic micropollutants during anaerobic wastewater treatment, Water Res. 257 (2024) 121718.

[17] P. Zheng, Y. Li, Q. Chi, Y. Cheng, X. Jiang, D. Chen, et al., Structural characteristics and microbial function of biofilm in membrane-aerated biofilm reactor for the biodegradation of volatile pyridine, J. Hazard. Mater. 437 (2022) 129370.

[18] L. Li, Y. Wang, W. Zhang, S. Yu, X. Wang, N. Gao, New advances in fluorescence excitation-emission matrix spectroscopy for the characterization of dissolved organic matter in drinking water treatment: a review, Chem. Eng. J. 381 (2020) 122676.

[19] R. Wang, J. Lou, J. Cai, Strategies to attenuate ciprofloxacin inhibition on enhanced biological phosphorus removal from wastewater and its recoverability J. Environ. Manag. 354 (2024) 120456.

[20] J. Wang, S. Wang, Microbial degradation of sulfamethoxazole in the environment, Appl. Microbiol. Biotechnol. 102 (8) (2018) 3573–3582.

[21] J. Yu, K. Xiao, H. Xu, Y. Li, Q. Xue, W. Xue, et al., Spectroscopic fingerprint profiling the polysaccharide/protein/humic architecture of stratified extracellular polymeric substances (EPS) in activated sludge, Water Res. 235 (2023) 119866.

[22] H. Zhang, Y. Jia, S.K. Khanal, H. Lu, H. Fang, Q. Zhao, Understanding the role of extracellular polymeric substances on ciprofloxacin adsorption in aerobic sludge, anaerobic sludge, and sulfate-reducing bacteria sludge systems, Environ. Sci. Technol. 52 (11) (2018) 6476 6486

[23] Q. Ping, Z. Zhang, L. Ma, T. Yan, L. Wang, Y. Li, The prevalence and removal of antibiotic resistance genes in full-scale wastewater treatment plants: bacterial host, influencing factors and correlation with nitrogen metabolic pathway, Sci. Total Environ. 827 (2022) 154154.

[24] F. Jia, Q. Yang, X. Liu, X. Li, B. Li, L. Zhang, et al., Stratification of extracellular polymeric substances (EPS) for aggregated anammox microorganisms, Environ. Sci. Technol. 51 (6) (2017) 3260 3268.

[25] A. Chergui, R. Kerbachi, G.-A. Junter, Biosorption of hexacyanoferrate(III) complex anion to dead biomass of the basidiomycete Pleurotus mutilus: biosorbent characterization and batch experiments, Chem. Eng. J. 147 (2 3) (2009) 150 160.

[26] H. Mu, X. Zheng, Y. Chen, H. Chen, K. Liu, Response of anaerobic granular sludge to a shock load of zinc oxide nanoparticles during biological wastewater treatment, Environ. Sci. Technol. 46 (11) (2012) 5997–6003.

[27] W. Li, Environmental Behavior Characteristics of Dissolved Organic Matter in Waters from the Xiaolangdi–Kaifeng Section of the Yellow River, Master’s Thesis, Henan University, Kaifeng, China, 2023.

[28] C. Song, X.-F. Sun, S.-F. Xing, P.-F. Xia, Y.-J. Shi, S.-G. Wang, Characterization of the interactions between tetracycline antibiotics and microbial extracellular polymeric substances with spectroscopic approaches, Environ. Sci. Pollut. Res. Int. 21 (3) (2014) 1786–1795.

[29] N. Ahmad Malik, R. Jan, Absaa, I. Manzoor, Spectroscopic and thermodynamic aspects of interactions of serum albumins with antibiotics: a review, Rev. Adv. Chem. 15 (3) (2025) 101 115

[30] R. Zhao, J. Feng, J. Liu, W. Fu, X. Li, B. Li, Deciphering of microbial community and antibiotic resistance genes in activated sludge reactors under high selective pressure of different antibiotics, Water Res. 151 (2019) 388–402.

[31] Y. Zhang, J. Geng, H. Ma, H. Ren, K. Xu, L. Ding, Characterization of microbia community and antibiotic resistance genes in activated sludge under tetracycline and sulfamethoxazole selection pressure, Sci. Total Environ. 571 (2016) 479–486.

[32] Y. Jia, S.K. Khanal, H. Shu, H. Zhang, G.-H. Chen, H. Lu, Ciprofloxacin degradation in anaerobic sulfate-reducing bacteria (SRB) sludge system: mechanism and pathways, Water Res. 136 (2018) 64–74.

[33] O.E. Ohore, S. Zhang, S. Guo, F.G. Addo, B. Manirakiza, W. Zhang, Ciprofloxacin increased abundance of antibiotic resistance genes and shaped microbial community in epiphytic biofilm on Vallisneria spiralis in mesocosmic wetland, Bioresour. Technol. 323 (2021) 124574.

[34] L. Cheng, Effect of SBR on Treatment of Fosfomycin Wastewater and Its Microbiological Analysis, Master’s Thesis, Chinese Research Academy of Environmental Sciences, 2021. Beijing, China.

[35] X. Deng, C.Y. Dong, Review on microbial immobilization based on biofilm, Biotechnology 33 (6) (2023) 798–804.

[36] L. Lv, Fate of antibiotic resistance genes during antibiotic degradation enhanced by membrane bioreactors (MBRs). Master’s Thesis, Shandong University, Jinan, China, 2023.

[37] C.-Y. Ren, Q.-J. Xu, H.-P. Zhao, The unique features of aerobic granule sludge contribute to simultaneous antibiotic removal and mitigation of antibiotic resistance genes enrichment, J. Water Process Eng. 52 (2023) 103577.

[38] X. Wang, J. Li, X. Zhang, Z. Chen, J. Shen, J. Kang, The performance of aerobic granular sludge for simulated swine wastewater treatment and the remova mechanism of tetracycline, J. Hazard. Mater. 408 (2021) 124762