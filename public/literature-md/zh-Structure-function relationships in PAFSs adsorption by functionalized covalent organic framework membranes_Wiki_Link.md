---
title: "zh-Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes Wiki全文"
source_markdown: "2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes.md"
cn_markdown: "2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/zh-Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes.md"
type: translated_fulltext_wiki
---
<!-- PaperMDLab-NAV:START -->
> [!info] 论文四向互链（PaperMDLab 自动维护）
> [[2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes|英文原文]] · [[2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/zh-Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes|中文译文]] · **中文全文双链（当前）** · [[4.SCI_AI_Summary/summary-zh-Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes|AI中文总结]]
<!-- PaperMDLab-NAV:END -->


# 功能化[[共价有机框架膜]][[吸附]] PAFSs 的[[结构–功能关系]]

![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/9fffcb5ed003c1c33a167d36835fe3a6b6dc87f409bbe39a57185f3854211890.jpg>)

[[Shideng Yuan]] <sup>a</sup>, [[Xiaorong Cao]] <sup>a,\*</sup>, [[Zhining Wang]] <sup>b,\*\*</sup>

<sup>a</sup> 齐鲁师范学院化学与化工学院，中国山东济南，250200 齐鲁师范学院化学与化工学院，中国山东济南，250200 <sup>b</sup> 山东大学环境科学与工程学院，山东省水污染控制与资源化利用重点实验室，中国青岛，266237

## 文 章 信 息

关键词：[[全氟和多氟烷基物质]] [[共价有机框架膜]] [[向内迁移]] [[界面水合结构]] [[传输机制]]

## 摘 要

[[全氟和多氟烷基物质]]（PFASs）是持久性[[水体污染物]]，具有显著的[[生态风险|生态和健康风险]]。[[共价有机框架膜|共价有机框架（COF）膜]]凭借高[[BET|比表面积]]和可调[[孔道]]展现出良好的[[吸附]]潜力，但 PFASs–[[共价有机框架|COF]] 相互作用机制尚不明确，阻碍了其优化设计。本研究采用[[分子动力学]]模拟，考察了 PFASs 在[[氨基]]和[[氰基]]功能化 COF（[[氰基功能化共价有机框架|COF–CN]] 和 [[氨基功能化共价有机框架|COF–NH]]）膜上的吸附行为，重点关注从表面向孔内的迁移、[[官能团]]效应以及[[水合层]]的影响。我们的结果表明，COF–NH 膜对 PFASs 的[[吸附量]]高于 COF–CN 膜。关键因素在于，COF–NH 的[[表面到孔内转化率]]（\~75 %）高于 COF–CN（\~40 %）。这一差异归因于官能团在孔内诱导的[[静电势]]，其中，COF–CN 因氰基而呈现约 −30 kcal mol<sup>−</sup> <sup>1</sup> 的负电势，而 COF–NH 则因氨基而呈现 12.85 kcal mol<sup>−</sup> <sup>1</sup> 的正电势。PFASs（在水溶液中以[[阴离子]]形式存在）优先占据 COF–NH 带正电的孔道。此外，COF–CN 的[[双水合层]]限制了 PFASs 的进入，导致吸附量较低；而 COF–NH<sub>2</sub> 上的[[水合不对称性|不对称水合结构]]则促进其进入并限制其逸出，从而提高了[[吸附效率]]。这些发现确立了 COF [[材料功能化|膜功能化]]和水合不对称性对 PFASs 吸附效率的关键调控作用，为设计具有高选择性和稳定性的下一代[[吸附剂]]提供了分子层面的指导。

## 1. 引言

[[全氟和多氟烷基物质|PFASs]] 是一类种类繁多的合成[[含氟化合物]]，广泛用于工业过程和消费品中 [1]。因此，在全球范围内的[[饮用水]]、[[水生系统]]和[[人类血清]]中均已检测到 PFASs [2–4]。由于其[[环境持久性]]和已有记录的[[健康风险]]，传统[[长链全氟和多氟烷基物质|长链 PFASs]] 现已被列入《[[斯德哥尔摩公约]]》，接受全球监管 [5]。2024 年 4 月 10 日，[[美国环境保护署]]（EPA）发布了最终版《[[国家一级饮用水法规]]》（NPDWR），为六种 PFASs 确立了具有强制执行力的[[最大污染物限值]]（MCLs）（例如，[[全氟辛酸|PFOA]]/[[全氟辛烷磺酸|PFOS]] 为 4.0 ppt，[[全氟己烷磺酸|PFHxS]]、[[全氟壬酸|PFNA]]、[[全氟丁烷磺酸|PFBS]] 和 [[六氟环氧丙烷二聚酸|HFPO-DA]] 为 10 ppt），并将 PFAS 混合物的[[危害指数]]限值设为 1 [6–8]。该法规要求到 2027 年在全国范围内开展 PFASs 监测，并在浓度超出限值时采取纠正措施 [9]。拟议法规要求加强对饮用水中较低浓度的短链和长链 PFASs 的削减。

尽管[[颗粒活性炭]]目前已用于受污染影响的社区 [10–12]，但其对[[短链全氟和多氟烷基物质|短链 PFASs]] 的[[吸附容量]]有限，推动了对替代处理方案的研究。[[共价有机框架膜|COF 膜]]是由[[单体]]通过定向[[共价键]]连接而成的高度有序[[多孔聚合物材料]] [13–15]。[[有机连接体]]的有序排列赋予其均一的[[孔径]]、明确的[[孔道结构]]、高[[孔隙率]]以及可调控的功能特性，使 [[共价有机框架|COF]] 膜成为面向特定污染物的[[吸附剂]]的理想平台 [16,17]。COF 膜的[[多孔结构]]和均一的[[纳米通道|纳米级通道]]有利于快速扩散和高效[[吸附]]，而其富含[[苯基]]的骨架则赋予其较强的[[疏水性]]，使[[多氟烷基链]]能够优先从水中分配至膜中 [18,19]。含氮 COF 膜能够与 [[全氟和多氟烷基物质|PFASs]] 分子发生特定的[[分子间相互作用]]，如[[氢键]]、[[静电相互作用]]和[[疏水效应]]，因此在去除 PFASs 方面展现出尤为突出的潜力 [20–23]。[[Wang]] 等系统探究了 COF 膜的结构特征如何影响其与 PFASs 分子之间的相互作用，揭示了[[孔径匹配]]和界面纳米气泡在调控吸附行为中的作用 [24]。

![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/3e2e4e4ec289037a2532c18de20b58a9951f35c21d58cb8e9aec72c4978e2213.jpg>)  
图 1. (a) COF–CN 和 COF–NH 膜的结构示意图。(b) 所构建 COF 模型的俯视示意图。(c) PFASs 初始吸附模型的代表性快照。(d) MD 模拟中使用的 PFASs 分子。

[[全氟和多氟烷基物质|PFASs]] 的一个关键结构特征是，[[氟碳链长度]]的变化决定了分子的整体尺寸，从而影响其在[[多孔材料]]上的[[吸附]]行为 [25,26]。然而，目前对 [[共价有机框架|COF]] [[官能团化学性质]]如何影响 PFASs 的识别与选择性的理解仍不充分。不同的[[表面基团]]可以改变[[静电相互作用]]、[[氢键]]和[[疏水效应]]，而这些作用对 PFASs 的捕获均至关重要 [27–29]。因此，[[官能团]]的细微变化可能决定其对特定链长或[[端基]]的[[亲和力]] [30]。对[[结构–性能关系]]的阐释尚不充分，尤其是对 COF 官能团在 [[分子识别|PFASs 识别]]与结合机制中所起作用的认识不足，阻碍了针对特定 PFASs 污染物的 COF 基[[吸附剂]]的合理设计。[[分子动力学]]（MD）模拟能够详细揭示 PFASs 与功能化 COF 之间的原子尺度相互作用，为弥补这些认知空白提供了有力工具 [24,31]。通过模拟 PFASs 在 COF [[孔道]]内的动态行为，MD 可以阐明[[范德华力]]、氢键和静电相互作用对吸附过程的贡献。此外，[[分子动力学模拟|MD 模拟]]还可以揭示空间和能量因素如何调控 PFASs 的结合，从而从机制层面理解其选择性和效率。

本研究基于已报道的实验体系，考察了两种具有代表性的 [[共价有机框架膜|COF 膜]]：一种带有[[氰基]]取代基、以[[烯烃键]]连接的 [[共价有机框架|COF]]（[[氰基功能化共价有机框架|COF–CN]]），以及通过[[合成后还原]]获得的[[氨基]]功能化衍生物（[[氨基功能化共价有机框架|COF–NH]]）[32,33]。

[[氰基]]为结构修饰提供了坚固且[[化学稳定性|化学稳定]]的骨架，而[[氨基]]的引入赋予了独特的[[极性]]和[[氢键]]形成能力，使我们能够研究不同[[官能团]]如何调控 [[全氟和多氟烷基物质|PFASs]] 分子的[[分子识别|吸附与识别]] [34,35]。随后，构建了 PFASs 的[[吸附]]模型，并进行了[[分子动力学]]模拟。从热力学和动力学两个角度评估并进一步阐明了 [[共价有机框架膜|COF 膜]]官能团对 PFASs 捕获的影响。这些认识提供了分子层面的理解，可指导合理设计基于 [[共价有机框架|COF]] 膜的[[吸附剂]]，以高效去除 PFASs。

## 2. 方法

## 2.1. [[共价有机框架膜|COF 膜]]的构建

本研究考虑了带有[[氰基]]取代基的[[烯烃连接共价有机框架|烯烃连接 COF]]（[[氰基功能化共价有机框架|COF–CN]]）及其[[氨基]]功能化衍生物（[[氨基功能化共价有机框架|COF–NH]] ），如图 1a 所示。[[共价有机框架|COF]]–CN 模型采用由实验 PXRD 获得的结构参数构建，采用 AA 堆积排列，层间距为 3.68 Å，[[孔径]]为 17.26 Å [32]。随后构建了氨基功能化的 COF–NH，以探究[[官能团]]对[[吸附]]的影响 [32]。获得晶胞结构后，使用 CP2K 在 PBEsol/DZVP-MOLOPT-SR-GTH 水平上进行几何优化 [36]。使用 Multiwfn 获得 REPEAT 电荷 [37,38]。进一步调整晶胞角度，以构建正交晶胞。扩胞后，将所得构型用于[[分子动力学]]模拟（图 1b）。随后，将 COF 扩展至四层，以构建完整的 COF 分子模型（图 1c）。从以往研究中选取具有代表性的 [[全氟和多氟烷基物质|PFASs]] 分子，以研究它们与这些 [[共价有机框架膜|COF 膜]]之间的相互作用（图 1d）。所有 [[分子动力学模拟|MD 模拟]]均在模拟的中性 [[pH]] 条件（pH ≈ 7）下进行。基于其极低的 [[酸解离常数|pKa]] 值（pKa <1），所有研究的

[[全氟和多氟烷基物质|PFASs]] 分子（[[全氟辛酸|PFOA]]、[[全氟辛烷磺酸|PFOS]]、[[全氟丁烷磺酸|PFBS]]）均仅以[[去质子化]]的[[阴离子]]状态建模。同时，$\mathrm { C O F { - } N H _ { 2 } }$ 膜上的[[氨基]]（-NH<sub>2</sub>）因其 [[酸解离常数|pKa]] 低于中性 [[pH]]，采用电中性的去[[质子化]]形式建模。这些模型作为所有后续 [[分子动力学模拟|MD 模拟]]的基础。首先进行能量最小化，随后开展 100 ns 的 NPT [[分子动力学]]模拟。共设计了六个模拟体系，以研究三种 PFAS 分子（PFOA、PFOS 和 PFBS）在两种功能化 [[共价有机框架膜|COF 膜]] $\mathrm { ( C O F  – N H _ { 2 } }$ 和 [[氰基功能化共价有机框架|COF–CN]]）上的[[吸附]]。

## 2.2. [[DFT|密度泛函理论]]计算

为阐明 [[共价有机框架膜|COF 膜]]与 [[全氟和多氟烷基物质|PFAS]] 之间的相互作用机制，开展了量子化学计算。通过 G16 程序，在 SMD//B3LYP-D3 $( \mathrm { B J } ) / 6 { \cdot } 3 1 1 { \cdot } + \mathrm { G } ( 2 \mathrm { d } , \mathrm { p } )$ 水平上对 [[共价有机框架|COFs]] 和 PFASs 的几何结构进行充分优化，并获得相应的波函数。使用 Multiwfn 分析[[静电势]]分布 [37,38]，计算 COFs 与 PFASs 之间的[[相互作用能]]，并使用 sobEDA 方法将其进一步分解为具有明确物理意义的贡献项 [39]。相互作用能被分解为四个具有明确物理意义的分量：色散项 $( \Delta \ E _ { \mathrm { d i s p } } ) _ { \mathrm { : } }$、交换-相关项 $( \Delta \ E _ { \mathrm { x r e p } } ) ,$ 轨道项 $( \Delta \ E _ { \mathrm { o r b } } ) _ { \mathrm { : } }$，以及静电项（Δ $E _ { \mathrm { e l s } } )$

## 2.3. [[分子动力学模拟|MD 模拟]]

采用 GROMACS，使用 GAFF 力场开展[[分子动力学]]模拟 [40]。采用 TIP3P 力场显式表示水分子。GAFF 力场参数的验证见补充信息第 S1 节。采用 V-rescale 恒温器将模拟温度维持在 298 K [41]。在 NPT 模拟过程中，使用 Parrinello-Rahman 恒压器将压力维持在 $1 . 0 1 \times 1 0 ^ { 5 }$ Pa，截断距离设为 1.2 nm [42]。采用 LINCS 算法约束所有涉及氢原子的化学键，从而使用 2 fs 的积分时间步长 [43]。采用粒子网格 Ewald（Particle Mesh Ewald，PME）方法处理[[长程静电相互作用]]。使用 VMD 对模拟轨迹进行分析和可视化 [44]。

## 3. 结果与讨论

## 3.1. [[官能团]]对 [[全氟和多氟烷基物质|PFASs]] [[吸附动力学]]的影响

首先，通过 [[分子动力学模拟|MD 模拟]]研究 [[全氟和多氟烷基物质|PFASs]] 在 [[共价有机框架膜|COF 膜]]表面的动态[[吸附]]行为。[[全氟辛烷磺酸|PFOS]] 在 $\mathrm { C O F { - } N H _ { 2 } }$ 和 [[氰基功能化共价有机框架|COF–CN]] 上的典型模拟快照及相应模拟时间分别如图 2a 和图 2b 所示。将总计 100 个 PFOS 分子随机放置在 [[共价有机框架|COF]] 表面上方 3 nm 处。总体而言，随着 PFOS 分子接近 COF，它们也在溶液中形成[[分子聚集|聚集]]体（图 2 和图 S4 中的最初 5 ns）。从结构上看，PFASs 的[[疏水尾链]]之间发生[[疏水相互作用]]，而水溶液中熵驱动的聚集以及 PFASs 降低水表面张力的趋势进一步增强了这些相互作用 [45]。这一观察结果与先前关于 PFASs 在吸附到固体表面之前先在体相溶液中聚集的研究报道一致 [46]，其中[[胶束]]的形成显著影响[[吸附动力学]]和界面行为。如图 2 和图 S4 所示，PFOS 以胶束态和[[单体]]态两种形式接近 COF 膜，其中胶束态占主导。PFASs 胶束化的能量景观表明，这种胶束形成是一个不可逆过程 [47]，这意味着使用单个 PFASs 分子的模拟可能无法充分反映[[集体吸附机制]] [26]。吸附后，PFOS 呈现三种不同状态：游离于溶液中、位于 COF 界面处以及处于 COF [[孔道]]内。值得注意的是，在模拟结束时，PFOS 在 $\mathrm { C O F { - } N H _ { 2 } }$ 和 COF[[氰基|–CN]] 表面的分布表现出显著差异，突显了 COF [[材料表面化学|表面化学性质]]在 PFASs [[吸附选择性]]中的作用（图 2 中的 100 ns）。

为进一步量化 [[全氟和多氟烷基物质|PFASs]] 的[[吸附]]并评估体系平衡，

![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/046ae95d096007bbafb493149ba788c8d59740094137b44c7c63fec0b570d97e.jpg>)  
图 2. PFOS 在 (a) COF– $\mathrm { \cdot N H _ { 2 } } ,$ 和 (b) COF–CN 上随模拟时间变化的吸附行为。为更清晰地展示吸附几何构型，隐藏了水分子。

评估了 [[全氟和多氟烷基物质|PFASs]] 分子与 [[共价有机框架膜|COF 膜]]之间的[[原子接触数|接触数]]（图 3a 和图 S5）。当任意一对原子之间的最短距离小于 0.6 nm 时，即定义为一次接触 [48, 49]。如图 3a 所示，接触数最初为零，表明 PFASs 分子自由分散于水相中。一旦 PFASs 分子开始与 [[共价有机框架|COF]] 膜相互作用，接触数便迅速增加，这与此前观察到的[[吸附]]变化趋势一致 [32]。这一时期被划定为[[吸附附着阶段|附着阶段]]（0–13 ns）。随后，接触形成速率开始减缓。在这一阶段，PFASs 分子逐渐接近[[吸附饱和]]，部分分子迁移进入 COF [[孔道]]，为后续吸附提供了额外位点。因此，该阶段被定义为[[吸附重排阶段|重排阶段]]（13–26 ns）。最后，接触数趋于稳定，波动极小，表明体系已达到平衡。基于上述分析，两种组分之间的接触数可用作[[吸附量]]的近似衡量指标。需要指出的是，吸附过程是根据接触数曲线斜率的变化划分为三个阶段的，各时间点均为近似值。为便于与实验数据进行比较，计算了模拟最后 10 ns 内每种 PFASs 与 COF 之间的接触数。如图 3b 所示，不同 PFASs 的吸附量遵循 [[全氟辛酸|PFOA]] > [[全氟辛烷磺酸|PFOS]] > [[全氟丁烷磺酸|PFBS]] 的顺序。此外，[[氨基功能化共价有机框架|COF–NH]] 对 PFASs 的[[吸附容量]]和[[吸附速率]]均高于 [[氰基功能化共价有机框架|COF–CN]]。这些观察结果与实验结果高度一致 [32]，验证了所构建模型及所选力场参数的可靠性。这也凸显了 COF [[官能团]]和 PFASs 链长对[[吸附性能]]的影响 [50]。此外，还模拟了混合 PFASs 在 COF[[氰基|–CN]] 表面的吸附，以评估其与[[单组分吸附]]的一致性及差异。如图 S7 所示，混合体系同样表现出两个特征吸附峰，与单组分结果一致（图 2）。这一发现表明，多种 PFASs 的共存并未改变由 COF 固有结构所决定的吸附特征。然而，溶液中混合[[胶束]]的形成（图 S7 中的 5 ns 时）减小了不同 PFAS 组分之间的吸附差异。如图 S8 所示，混合体系中 PFOA 与 PFOS 的吸附量差异小于其各自单组分体系中的差异（图 3b）。

在图 3a 中，[[吸附构型]]的分类依据不同阶段的[[吸附速率]]确定。为进一步量化这些阶段中 [[全氟和多氟烷基物质|PFASs]] 的动力学特征，采用以下方程计算了[[均方位移]]（mean squared displacement，MSD）和[[扩散系数]]：

$$
\operatorname{MSD} (t) = \left\langle \frac {1}{N _ {a}} \sum_ {i = 1} ^ {N _ {a}} \left| r _ {i} (t) - r _ {i} (0) \right| ^ {2} \right\rangle\tag{1}
$$

$$
D _ {\alpha} = \frac {1}{2 d N _ {\alpha}} \lim _ {t \rightarrow \infty} \frac {d}{d t} \sum_ {i = 1} ^ {N _ {\alpha}} \left\langle\left[ r _ {i} (t) - r _ {i} (0) \right] ^ {2} \right\rangle\tag{2}
$$

其中，N 表示分子数量，r<sub>i</sub>(t) 和 $r _ { i } ( 0 )$ 分别表示第 i 个原子在时刻 t 和时刻 $^ { 0 , }$ 的位置，d 表示系统维度。如图 3c 所示，所有 [[全氟和多氟烷基物质|PFASs]] 在[[吸附附着阶段|附着阶段]]均表现出最高的[[均方位移]]（MSD）值，而在[[吸附平衡阶段|平衡阶段]]则表现出最低值。此外，在所有阶段，[[全氟辛酸|PFOA]] 的 MSD 均高于 [[全氟辛烷磺酸|PFOS]]，表明与 PFOS 相比，PFOA 更倾向于[[吸附]]到 [[共价有机框架|COF]] 表面。计算得到的[[扩散系数]]进一步证实了这一观察结果（图 3d）。具体而言，PFOA 在附着、重排和平衡阶段的扩散系数分别为

![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/25ae3bb687af0818598b45fd61661009f34e769c63112fc685a63977fdb0fe1b.jpg>)

b  
![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/45eaa8c1eff9733dee7164c0a08653775ad8dcb4506c5aa01375332d559aef82.jpg>)  
C

![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/dc48656504cc82a032e4289257b3b41d14284ac1544c488374dc6ed3ce3f2562.jpg>)

e  
![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/b685e6d2ddf078d5d0a3e108d336445530f526d7b6b0ead75df67543d6416126.jpg>)

f  
![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/90f565e069e669841153647f94f34176e8bdc1f226ad35d1121b0546a4aa76e1.jpg>)

![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/d7940e734732e17781afddba660acc862c95c5810b248c33a8f5b7aa0389fb09.jpg>)  
图 3. (a) PFOS 与 COF 膜之间的接触数。不同颜色的文字表示人工划分的三个吸附阶段。(b) 最后 10 ns 内 PFASs 与 COF 膜之间的接触数。(c) PFASs 在不同吸附阶段的均方位移。(d) PFASs 在不同吸附阶段的扩散系数。(e) 吸附过程中 PFOS 与 COF NH 之间的相互作用及其扩散系数景观。颜色表示模拟时间。(f) 最后 10 ns 内 PFASs 与 COF 膜之间的相互作用能。

![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/a073e6462a20c7b87e1b9131f63c57e1aa1956c92be6b3164b586ddb2e4f9059.jpg>)

0.4355 $\times 1 0 ^ { - 5 } \mathrm { c m } ^ { 2 } s ^ { - 1 } , 0 . 3 4 1 6 \times 1 0 ^ { - 5 } \mathrm { c m } ^ { 2 } s ^ { - 1 }$ 和 0.164 $\times \ : 1 0 ^ { - 5 } \ : \mathrm { c m } ^ { 2 }$ $s ^ { - 1 }$，而 [[全氟辛烷磺酸|PFOS]] 的[[扩散系数]]分别为 $0 . 3 5 5 \times 1 0 ^ { - 5 } \ \mathrm { c m } ^ { 2 } \ s ^ { - 1 }$ 0.1133 $\times 1 0 ^ { - 5 } \mathrm { c m } ^ { 2 } s ^ { - 1 }$ 和 $0 . 0 2 9 6 \times 1 0 ^ { - 5 } { \mathrm { ~ c m } } ^ { 2 } s ^ { - 1 } .$。实验测得的 PFOS 扩散系数 $( 0 . 4 5 0 \times 1 0 ^ { - 5 } \mathrm { c m } ^ { 2 } s ^ { - 1 } )$ 与我们的模拟结果吻合良好 [47]。为进一步考察不同阶段扩散行为的差异，构建了 PFOS 扩散系数与 PFOS-[[共价有机框架|COF]] [[相互作用能]]的自由能景观（图 3e）。随着模拟的进行，PFOS 的扩散系数逐渐降低，同时 PFOS 与 COF 之间的相互作用能增大。结合前述分析，这些结果表明 PFOS-COF 相互作用具有双重作用：一方面驱动 PFOS 分子向 COF 表面移动，另一方面在其[[吸附]]后限制其进一步位移。如图 3f 所示，[[全氟和多氟烷基物质|PFASs]] 与 $\mathrm { C O F { - } N H _ { 2 } }$ 之间更强的相互作用能（相对于 [[氰基功能化共价有机框架|COF–CN]]）解释了在 $\mathrm { C O F { - } N H _ { 2 } }$ 上观察到的更高[[吸附容量]]。此外，随着 PFASs 链长的增加，其与 COF 之间的[[分子间相互作用]]能也随之增大。这一发现表明，[[长链全氟和多氟烷基物质|长链 PFASs]] 的富集增强主要由 PFASs [[烷基链]]与 COF [[吸附剂]]之间的[[疏水相互作用]]驱动 [51]。在吸附材料的合理设计中，应仔细考虑此类效应 [52]。

## 3.2. [[官能团]]对 [[全氟和多氟烷基物质|PFASs]] [[吸附]]的影响

进一步计算了 [[全氟和多氟烷基物质|PFASs]] 在 [[共价有机框架膜|COF 膜]]表面的分布，以表征其[[吸附]]状态。如图 4a 所示，PFASs 的分布峰主要出现在 $\mathrm { C O F - N H } _ { 2 } ,$ 内部，表明这些分子吸附于 [[氨基功能化共价有机框架|COF–NH]]<sub>2</sub> 的[[孔道]]内。相比之下，在 [[氰基功能化共价有机框架|COF–CN]] 上观察到两个明显的分布峰（图 4b）。这些峰位于距 [[共价有机框架|COF]][[氰基|–CN]] 表面约 1 nm 处，该距离对应于以下对象的横截面长度：

[[全氟和多氟烷基物质|PFASs]] 分子 [53]，表明 [[氰基功能化共价有机框架|COF–CN]] 表面形成了[[单分子吸附层]]。这些表面峰的强度约为孔内峰强度的 4 倍。无论末端[[官能团]]为何，[[界面吸附结构]]均不受 PFASs 链长的影响。然而，[[共价有机框架膜|COF 膜]]上的[[吸附]]峰强度遵循 [[全氟辛酸|PFOA]] > [[全氟辛烷磺酸|PFOS]] > [[全氟丁烷磺酸|PFBS]] 的顺序，这与实验观察结果一致 [20,32]。详细的吸附横截面快照见图 4c 和图 S9。如图 S9 所示，短链 PFBS 表现出更高的迁移性 [54]，这促进了分子交换并防止了 PFASs [[分子聚集|聚集]]。图 4c 和图 S9 进一步表明，[[氨基功能化共价有机框架|COF–NH]]<sub>2</sub> 中的 PFASs 主要吸附在孔内，且优先沿 z 方向取向，而在 [[共价有机框架|COF]][[氰基|–CN]] 上，吸附结构的取向垂直于 z 方向。图 4d 和图 S10 中[[吸附复合物]]的俯视图清楚地展示了这些吸附特征。在图 4d 中，PFASs 主要与 $\mathrm { C O F - N H } _ { 2 } ,$ 的内壁接触，而在 COF–CN 上，主要接触区域位于表面（图 4e）。这些结果表明，COF 表面官能团显著影响了 PFASs 的[[吸附容量]]和[[吸附构型]]。此外，吸附结构还可能进一步影响[[吸附稳定性]]；例如，当[[吸附剂]]材料受到水中水动力扰动时，吸附在表面的 PFASs 可能会脱落 [55]。

考虑到[[表面吸附]]是 [[全氟和多氟烷基物质|PFASs]] [[吸附]]过程的初始步骤，计算了整个过程中表面吸附所占的比例，如图 4f 和图 S11 所示。该比例通过将 PFASs 与表面（上表面和下表面）的[[原子接触数|接触数]]除以 PFASs 与 [[共价有机框架|COF]] 的总接触数来确定。由图 4f 和图 S11 可知，在模拟开始时，[[表面吸附比例]]初始为 1。随后，该比例在早期阶段（0–13 ns）急剧下降，并在随后的[[吸附重排阶段|重排阶段]]保持稳定，证实了其可靠性

![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/49dc4c80c930e1367323914f100f29499e8a9770823437e8159807a5c7a68985.jpg>)

![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/4db6f1bd69b1294568cf44135076376ea7d6bd8a0b975f42dfb00b4e57d734cd.jpg>)  
C

d  
e  
![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/28a47aaf878361464aca60edc0720a1e4dcf987e8b7246f0379e0b3245b9923d.jpg>)

f  
![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/4860d6aa211bdc43b67439ae0575e6c104038c5b2f0284fec7fb6da0751bd051.jpg>)

![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/8a7a597ea43cb4f7e68be3a56eaf8da6c3d2381787dc217461e9a7c703af6a76.jpg>)  
图 4. 在 100 ns 时，(a) $\mathrm { C O F } { \mathrm { - N H } } _ { 2 }$ 体系和 (b) COF–CN 体系中 PFASs 和 COF 沿 COF 平面（z 方向）的密度分布。x 轴上的 0 nm 对应于 COF 膜的中心。(c) 模拟最终时刻吸附在 COF 表面上的 PFOA 的侧视快照。模拟最终时刻吸附在 (d) COF–NH 和 (e) COF–CN 表面上的 PFOA 的俯视快照。(f) 表面吸附占总吸附比例随时间的变化。为更清晰地展示吸附几何构型，水分子已隐藏。

C

我们模拟中的相态划分。一旦[[表面吸附比例]]达到[[稳态]]，[[共价有机框架|COF]] 表面便建立了[[动态平衡]]。换言之，分子从表面迁移至[[孔道]]内部，同时留下空置的[[表面位点]]，供本体溶液中的 [[全氟和多氟烷基物质|PFASs]] 分子占据。因此，分子从表面向内部迁移的难易程度成为衡量 COF [[吸附容量]]的关键指标。对于 $\mathrm { C O F - N H } _ { 2 } ,$，[[全氟辛酸|PFOA]] 和 [[全氟辛烷磺酸|PFOS]] 的[[表面吸附]]比例均稳定在 \~0.25（图 S12）。相比之下，对于 [[氰基功能化共价有机框架|COF–CN]]，PFOA 和 PFOS 的表面[[吸附]]比例高达 0.6。因此，COF[[氰基|–CN]] 中 PFASs 从表面向内部的转移程度显著较低，成为限制其[[吸附性能]]的关键因素。这些发现表明，[[共价有机框架膜|COF 膜]]的功能化不仅调节了表面吸附程度，还决定了孔道内部的动态可达性，从而支配整体[[吸附效率]] [56]。

## 3.3. [[全氟和多氟烷基物质|PFASs]] 在 [[共价有机框架膜|COF 膜]]中从表面向内部的迁移

基于上述分析，[[全氟和多氟烷基物质|PFASs]] 从[[表面吸附]]状态向内部进入的迁移过程被确定为限制 [[共价有机框架|COF]] 整体[[吸附容量]]的关键步骤。本节重点探讨 COF [[官能团]]在调控这一内部转移过程中的作用。首先计算了[[氨基]]和[[氰基]]功能化 COF 的[[静电势]]（ESP）分布。如图 5a 所示，[[氰基功能化共价有机框架|COF–CN]] 内部以负 ESP 区域为主，其值约为 −30 kcal $\mathrm { m o l } ^ { - 1 }$。相比之下，$\mathrm { C O F { - } N H _ { 2 } }$ 的内表面呈现正 ESP 分布，约为 12.85 kcal mol<sup>−</sup> <sup>1</sup>（图 5b）。[[全氟辛酸|PFOA]]、[[全氟辛烷磺酸|PFOS]] 和 [[全氟丁烷磺酸|PFBS]] 的 [[酸解离常数|pKa]] 值均低于 1 [57]，表明这些分子主要以[[阴离子]]状态存在。如图 5c 所示，PFASs 表面以负 ESP 区域为主。因此，[[氨基功能化共价有机框架|COF–NH]]<sub>2</sub> [[孔道]]内的 PFASs 倾向于通过[[静电互补|互补电荷匹配]]形成更强的相互作用，而[[静电排斥]]则阻碍 PFASs 进入 COF–CN 的孔道，并限制其[[吸附]]容量。

为验证这一假设，考察了 [[全氟辛烷磺酸|PFOS]] 与不同 [[共价有机框架|COF]] 形成的优化复合物，并对其[[相互作用能分解|相互作用能进行了分解]]。如图 5d 所示，[[氨基功能化共价有机框架|COF–NH]]<sub>2</sub>@PFOS 复合物的[[相互作用能]]为 −5.52 kcal mol<sup>−</sup> <sup>1</sup>，表明其[[吸附]]过程在热力学上有利。相比之下，[[氰基功能化共价有机框架与全氟辛烷磺酸复合物|COF–CN@PFOS]] 复合物的相互作用能为正值，为 0.87 kcal $\mathrm { \ m o l ^ { - 1 } } .$。[[静电相互作用]]是主要贡献项，[[氨基功能化共价有机框架与全氟辛烷磺酸复合物|COF–NH2@PFOS]] 和 [[氰基功能化共价有机框架|COF–CN]]@PFOS 的[[静电相互作用能]]分别为 −3.77 kcal $\mathrm { m o l } ^ { - 1 }$ 和 2.57 kcal $\mathrm { m o l } ^ { - 1 }$。这些发现表明，COF 的[[官能团化学性质]]在控制 [[全氟和多氟烷基物质|PFASs]] 进入内部的过程中起着决定性作用。带正电的[[孔道]]环境促进了更深层的吸附，而带负电的孔道环境则形成了较强的[[势垒]]。

图 5 的分析表明，官能团改变了 COF 膜的固有性质，进而影响其对 PFASs 的吸附能力。本节进一步考察了 COF 官能团的修饰如何影响其周围的水环境。在分子吸附过程中，水合层是决定吸附性能的关键因素 [58]，这一概念也被广泛用于解释抗污染机制 [59]。鉴于其关键重要性，进一步对 $\mathrm { C O F { - } N H _ { 2 } }$ 和 COF–CN 表面的水合层进行了可视化，如图 6a 所示。如图 6a 所示，COF–CN 的上、下表面均形成了两个致密的水合层。最靠近 COF 表面的层被定义为第一水合层，第二水合层则位于更远处。第一水合层的密度高于第二水合层，且显著超过体相水的密度。相比之下，$\mathrm { C O F \mathrm { - } \ N H _ { 2 } }$ 的水合结构呈现出不对称分布：以 –NH 为端基的一侧形成的水合层相较于另一侧较弱。图 4a 中观察到的 PFASs 在 $\mathrm { C O F { - } N H _ { 2 } }$ 中的不均匀分布印证了这一解释。COF–NH 的不对称水合结构源于 –NH 基团的单向分布，这种分布局部扰乱了界面水的有序排列，并导致两侧呈现不同的动力学性质（图 S13）。

为定量表征[[水合层]]的性质，计算了水分子的[[质量密度分布]]。如图 6b 所示，[[氰基功能化共价有机框架|COF–CN]] 的两个表面均呈现出两个明显的水合层，其中第一层的密度峰值达到 1280 kg $\mathbf { m } ^ { - 3 }$，显著

![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/555e3e260f6ad4d89a5b603e863d5708a7cd51128ac34d334951f10aeeb94261.jpg>)

![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/252bec4b0cb917e94d3baa08d20d29d3b698d50340fe2e00b7da67b8b4e89758.jpg>)

![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/cc8ea448ee6b9d23fe6f1a9e2b6e2231f14b9f4b4d6b73a53d6c568c294b04f0.jpg>)  
图 5. (a) COF–CN、(b) COF– $\begin{array} { r } { - \ N \mathrm { H } _ { 2 } , } \end{array}$ 和 (c) PFASs 的静电势（ESP）分布。(d) PFOS 吸附进入 COF–CN 和 $\mathrm { C O F } { \mathrm { - N H } } _ { 2 } .$ 的稳定构型

a  
![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/7fbdea50ab05c1da7bf126dc85117c4ccc2d61bc67f0118bc33c63ca28d19a83.jpg>)  
b

C  
![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/655466e6716804a07eb5384c65b2c65486054e6e663a89dff65372a78cacc837.jpg>)

![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/fbe79132c660b45bc11af4478bb17ecb4aa46bbc387a98c1adf42c4b84888420.jpg>)

![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/eb2bc4a19890c68274c796de0be78978f6e21446256d4fef24be28904863c121.jpg>)  
e

![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/70b58e39dce51465db50b817ae1a671c9bb360ef43adaffab8a827020784e5d0.jpg>)

![](<../2.SCI_MD/Structure-function relationships in PAFSs adsorption by functionalized covalent organic framework membranes/images/900fb93cab967165e0f4f59ad182f6c92dbd0be63f9c4840b1fd9edf5084d1a3.jpg>)  
图 6. (a) 侧视图（x-z 平面）中水分子的二维数密度分布。(b) COF–NH 体系和 (c) COF–CN 体系中水分子沿 COF 平面（z 方向）的密度分布。(d) 不同水合层中水分子的径向分布函数（RDF）和 (e) MSD。(f) 俯视图（x-y 平面）中 COF CN 表面水分子的二维数密度分布。

高于[[体相水]]的密度（1000 kg $\mathbf { m } ^ { - 3 } ) .$ 相比之下，[[氨基功能化共价有机框架|COF–NH]] 仅在一侧形成了厚度约为 \~0.4 nm 的[[水合层]]（图 6c）。随后计算了水合层内水分子的[[径向分布函数]]（图 6c 中的 rdf）和[[均方位移]]（图 6e 中的 MSD），以进一步探究其结构和动力学性质。如图 6d 和图 6e 所示，水合层内的水分子排列更加致密，rdf 峰值更高，迁移能力减弱，[[扩散系数]]更低。这些发现表明，水合层充当了物理屏障，既阻碍 [[全氟和多氟烷基物质|PFASs]] 进入 [[共价有机框架|COF]]，又限制其在被限域于[[孔道]]内后的释放。如图 6f 所示，[[氰基功能化共价有机框架|COF–CN]] 中水合层的形成可追溯至表面[[氰基]]。综上所述，COF–CN 的双侧水合层充当了限制 PFAS 进入的屏障，导致其[[吸附容量]]较低。相比之下，$\mathrm { C O F { - } N H _ { 2 } }$ 的[[不对称水合层]]允许 PFASs 分子从一侧进入，并限制其从另一侧逸出，其作用类似于“[[分子瓶效应|分子瓶]]”，由此解释了其优异的[[吸附性能]]。– $\mathrm { - N H _ { 2 } }$ 封端一侧较短的[[氢键驻留时间]]（3.12 ps，相比之下另一侧为 4.09 ps）表明该侧水分子的动态变化更快（图 S14），进一步证实了不对称水合环境有助于形成调控 PFAS [[吸附]]的“分子瓶”效应。这些结果凸显了[[水合结构]]兼具保护壳与选择性筛的双重作用。同时，这些结果也表明，通过设计 COF 表面[[官能团]]来调控[[水合不对称性]]，可能为开发具有更高 PFASs [[吸附量]]和更强保留稳定性的先进[[吸附剂]]提供有效策略。

## 4. 结论

本研究采用 [[分子动力学模拟|MD 模拟]]，揭示了 [[全氟和多氟烷基物质|PFASs]] 在以 $\mathrm { - N H _ { 2 } }$ 和 [[氰基|–CN]] 基团功能化的 [[共价有机框架膜|COF 膜]]上的[[吸附机制]]。结果表明，PFASs 的[[吸附]]遵循多阶段路径，包括初始附着、[[结构重排]]和平衡。实验中也曾报道过此类[[序贯吸附|序贯吸附过程]]，即快速的表面捕获之后是较慢的[[孔道渗入]]与稳定过程。重要的是，模拟表明，PFASs 在吸附前已在水溶液中发生[[分子聚集|聚集]]，凸显了在评估[[吸附动力学]]时考虑[[胶束|胶束状态]]而非单个分子的必要性。对 $\mathrm { C O F - N H _ { 2 } }$ 与 [[氰基功能化共价有机框架|COF–CN]] 的比较分析表明，[[表面功能化]]显著影响[[吸附性能]]。[[共价有机框架|COF]]– $\mathrm { - N H _ { 2 } }$ 表现出更高的[[吸附容量]]和更强的相互作用，这主要归因于其带正电的[[孔道]]内部与带负电的 PFASs [[头基]]之间有利的[[静电互补|静电互补作用]]。相反，COF–CN 孔道内的负[[静电势]]导致排斥作用，抑制了内部吸附。这些结果与先前吸附研究的报道一致，即与[[氰基功能化多孔材料]]相比，[[胺改性多孔材料]]具有更优的 PFASs 去除性能 [32]。研究还发现，[[水合层]]是吸附过程的关键调控因素。COF–CN 在两个表面上均形成了对称、致密的水合壳层，这些壳层构成了阻碍 PFASs 进入的屏障，也解释了其较低的[[吸附量]]。相比之下，$\mathrm { C O F { - } N H _ { 2 } }$ 表现出不对称水合特征，其[[氨基|胺基]]侧的水合层较弱。这种不对称性使 PFASs 能够进入孔道，同时限制其释放，发挥类似分子“瓶”的作用。这些发现与强调[[水合结构]]在控制[[分子可接近性]]方面重要作用的[[抗污染膜]]研究相呼应 [59,60]。总体而言，这些认识超越了以往主要将 PFASs 吸附归因于[[疏水相互作用]]或[[孔道限域]]的研究 [24,25]。本研究表明，[[静电相互作用|静电作用]]和[[水合不对称性]]在决定 PFASs 吸附的效率与稳定性方面同样具有决定性作用。这些发现揭示，静电互补与水合不对称性的协同作用，是增强胺基功能化 COF 膜对 PFAS 吸附的关键决定因素。结果凸显了下一代膜的一项设计原则：引入局部正电荷区域和可调控的水合环境，能够同时提高膜对[[离子型污染物]]的[[亲和力]]并维持[[抗污染稳定性]]。此外，我们在中性 [[pH]] 条件下开展的模拟揭示了支配 PFAS 在 $\mathrm { C O F  – N H _ { 2 } }$ [[表面吸附]]的基本[[非静电相互作用]]。鉴于氨基的[[质子化]]具有 pH 依赖性，预计酸性环境会增强[[静电吸引]]并促进 PFAS [[阴离子]]的[[去溶剂化]]，从而提高吸附性能。这些认识表明，在未来研究中，[[pH调控|pH 调控]]有望成为调节[[界面相互作用]]和优化 COF 膜基[[吸附剂]]的一种策略。未来结合模拟与实验验证的工作应聚焦于能够在复杂水处理情境下有效运行的多功能 COF 膜或[[杂化框架]]。

## [[CRediT贡献者角色分类法|CRediT]] 作者贡献声明

[[Shideng Yuan]]：写作—审阅与编辑，写作—初稿，软件，资源，正式分析，数据整理，概念构思。[[Xiaorong Cao]]：写作—审阅与编辑，软件，资源，方法学。[[Zhining Wang]]：写作—审阅与编辑，写作—初稿，监督指导，软件，资源，方法学，资金获取，数据整理。

## 利益冲突声明

作者声明，不存在任何已知的、可能被认为会影响本文所报告工作的竞争性经济利益或个人关系。

## 致谢

本研究获得了[[国家重点研发计划]]（项目编号：2023YFC3208003）、[[山东省自然科学基金]]（ZR2024QB118）、[[国家自然科学基金]]（U23A20116）、[[山东省泰山学者基金]]（tsqn20240802）、[[济南市校融合发展战略项目]]（编号：JNSX2023077）以及[[齐鲁师范学院青年科研创新团队培育计划]]（2025QCPYTD04）的经费支持。

## 附录 A. 补充数据

本文的补充数据可在线获取，网址为：https://doi. org/10.1016/j.memsci.2025.124956.

## 数据可用性

数据可应要求提供。

## References

[1] N. Jeong, S. Park, S. Mahajan, J. Zhou, J. Blotevogel, Y. Li, T. Tong, Y. Chen, Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations, Nat. Commun. 15 (2024) 10918.

[2] M. Sadia, I. Nollen, R. Helmus, T.L. ter Laak, F. B´een, A. Praetorius, A.P. van Wezel, Occurrence, fate, and related health risks of PFAS in raw and produced drinking water, Environ. Sci. Technol. 57 (2023) 3062 3074.

[3] K. Kato, L.-Y. Wong, L.T. Jia, Z. Kuklenyik, A.M. Calafat, Trends in exposure to polyfluoroalkyl chemicals in the U.S. population: 1999−2008, Environ. Sci. Technol. 45 (2011) 8037–8045.

[4] C.J.A.F. Kwadijk, P. Korytar, ´ A.A. Koelmans, Distribution of perfluorinated compounds in aquatic systems in the Netherlands, Environ. Sci. Technol. 44 (2010) 3746–3751.

[5] X. Zhang, D. Wang, K. Wang, Z. Yang, M. Ai, Y. Zhang, Legacy and novel Per- and polyfluoroalkyl substances in tap water from east China: impact from water sources and risk mitigation by household purifiers, Environ. Sci. Technol. 59 (2025) 17210–17221.

[6] P. McCleaf, S. Englund, A. Ostlund, ¨ K. Lindegren, K. Wiberg, L. Ahrens, Removal efficiency of multiple poly- and perfluoroalkyl substances (PFASs) in drinking water using granular activated carbon (GAC) and anion exchange (AE) column tests, Water Res. 120 (2017) 77 87.

[7] P. Ramos, S. Singh Kalra, N.W. Johnson, C.M. Khor, A. Borthakur, B. Cranmer, G. Dooley, S.K. Mohanty, D. Jassby, J. Blotevogel, S. Mahendra, Enhanced removal of per- and polyfluoroalkyl substances in complex matrices by polyDADMACcoated regenerable granular activated carbon, Environ. Pollut. 294 (2022) 118603.

[8] Y. Zhang, C.-S. Lee, D. Li, S. Zheng, B.S. Hsiao, A.K. Venkatesan, Hydrophobic ion pairing as a pretreatment to enhance the removal of short-chain Per- and polyfluoroalkyl substances by granular activated carbon, Environ. Sci. Technol. 59 (2025) 20761–20771.

[9] E. Wood, R.E. Mulhern, J.M. Gibson, B.J. Reich, A. McWilliams, C. Liyanapatirana, K. Hoffman, A.J. Kondash, J. Hoponick Redmon, PFAS in rural U.S. well water: using participatory science to identify and communicate results to address risks Environ. Sci. Technol. 59 (2025) 16852–16863.

[10] O. Soker, B. Tajdini, A. Abarca-Perez, A. Wadia, C. Bellona, S. Hao, K. Doudrick, T. J. Strathmann, Reuse of spent granular activated carbon for PFAS removal following hydrothermal alkaline treatment, Water Res. 283 (2025) 123794

[11] J. Cao, S. Feng, A.A. Dolatabad, Y. Zhi, B. Deng, C. Liu, X. Lyu, C.S.Q. Christensen, J.J. Pignatello, P. Ni, S. Lin, Z. Wei, F. Xiao, PFAS removal from reverse osmosis and nanofiltration brine by granular activated carbon: thermodynamic insight into salinity effects, Water Res. 282 (2025) 123758.

[12] Y. Zhang, A. Thomas, O. Apul, A.K. Venkatesan, Coexisting ions and long-chain per- and polyfluoroalkyl substances (PFAS) inhibit the adsorption of short-chain PFAS by granular activated carbon, J. Hazard Mater. 460 (2023) 132378.

[13] C.R. DeBlase, W.R. Dichtel, Moving beyond boron: the emergence of new linkage chemistries in covalent organic frameworks, Macromolecules 49 (2016) 5297 5305.

[14] N. Huang, P. Wang, D. Jiang, Covalent organic frameworks: a materials platform for structural and functional designs, Nat. Rev. Mater. 1 (2016) 16068.

[15] R.P. Bisbey, W.R. Dichtel, Covalent organic frameworks as a platform for multidimensional polymerization, ACS Cent. Sci. 3 (2017) 533 543.

[16] L. Deng, Z. Ding, X. Ye, D. Jiang, Covalent organic frameworks: chemistry of pore (2022) 879–893.

[17] X. Qin, X. Qin, X. Xu, J. Zhao, Y. Gui, H. Guo, J. Mao, Y. Wang, Z. Zhang, The membrane-based desalination: focus on MOFs and COFs, Desalination 557 (2023) 116598.

[18] L. Jiang, R. Cao, Z. Huang, J. Jin, Z. Du, H. Li, Efficiencies and mechanisms of remediation techniques for cationic and zwitterionic per- and polyfluoroalkyl substances (PFAS) from aqueous environments: a review, Chem. Eng. J. 502 (2024) 158161.

[19] M. Cai, Y. Li, Q. Liu, Z. Xue, H. Wang, Y. Fan, K. Zhu, Z. Ke, C.-Y. Su, G. Li, One-step construction of hydrophobic MOFs@COFs core–shell composites for heterogeneous selective catalysis, Adv. Sci. 6 (2019) 1802365.

[20] W. Ji, L. Xiao, Y. Ling, C. Ching, M. Matsumoto, R.P. Bisbey, D.E. Helbling, W. R. Dichtel, Removal of GenX and perfluorinated alkyl substances from water by amine-functionalized covalent organic frameworks, J. Am. Chem. Soc. 140 (2018) 12677–12681.

[21] E. Issaka, M. Adams, J. Baffoe, E. Danso-Boateng, L. Melville, A. Fazal, Covalent organic frameworks: a review of synthesis methods, properties and applications for per- and poly-fluoroalkyl substances removal, Clean Technol. Environ. Policy 27 (2025) 833–860.

[22] T.C. Ricard, T.C. Schutt, C.G. Bresnahan, M.K. Shukla, Pore size effects upon adsorption of PFAS in covalent organic frameworks: molecular dynamics study, Environ. Sci. Adv. 4 (2025) 1633 1649.

[23] Y.-Y. Lu, X.-L. Wang, L.-L. Wang, W. Zhang, J. Wei, J.-M. Lin, R.-S. Zhao, Room temperature synthesis of amino-functionalized magnetic covalent organic frameworks for efficient extraction of perfluoroalkyl acids in environmental water samples, J. Hazard Mater. 407 (2021) 124782.

[24] W. Wang, Y. Jia, S. Zhou, S. Deng, Removal of typical PFAS from water by covalent organic frameworks with different pore sizes, J. Hazard Mater. 460 (2023) 132522.

[25] M. Park, S. Wu, I.J. Lopez, J.Y. Chang, T. Karanfil, S.A. Snyder, Adsorption of perfluoroalkyl substances (PFAS) in groundwater by granular activated carbons: roles of hydrophobicity of PFAS and carbon characteristics, Water Res. 170 (2020) 115364.

[26] S. Yuan, X. Wang, Z. Jiang, H. Zhang, S. Yuan, Contribution of air-water interface in removing PFAS from drinking water: adsorption, stability, interaction and machine learning studies, Water Res. 236 (2023) 119947.

[27] Q. Zhang, S. He, M.M. Mian, X. Jiang, A. Zhang, S. Deng, Highly catalytic degradation and defluorination mechanism of perfluorooctanoic acid during the hydrothermal alkaline treatment of spent activated carbon, Chem. Eng. J. 519 (2025) 164968.

[28] X. Jiang, Z. Zhou, Z. Qin, T. Ou, Q. Zhang, H. Zhang, X. Wu, S. He, B. Meng, Y. Ge, J. Huang, Y. Zhang, Z. Peng, G. Yu, S. Deng, Occurrence, transport, and full-scale adsorptive removal of PFAS in electroplating parks in China, Environ. Sci. Technol. 58 (2024) 22744–22754.

[29] W. Wang, S. Zhou, X. Jiang, G. Yu, S. Deng, Fluorinated Quaternary ammonium covalent organic frameworks for selective and efficient removal of typical per- and polyfluoroalkyl substances, Chem. Eng. J. 474 (2023) 145629.

[30] X. Jiang, Y. Luo, S. Mu, B. Meng, W. Wang, G. Yu, S. Deng, Structure-selectivity relationship of anion exchange resins with different quaternary amine functional groups for highly selective removal of PFAS from chromium-plating wastewater, Water Res. 268 (2025) 122749.

[31] H. Liu, S. Di, Y. Liu, Z. Li, P. Chen, S. Zhu, Magnetic fluorinated mesoporous metalorganic frameworks for rapid derivatization-assisted GC–MS analysis of perfluoroalkyl carboxylic acids in harsh water environment, J. Chromatogr. A 1741 (2025) 465612.

[32] X. Song, R. Wang, X. Wang, H. Han, Z. Qiao, X. Sun, W. Ji, An amine-functionalized olefin-linked covalent organic framework used for the solid-phase microextraction of legacy and emerging per- and polyfluoroalkyl substances in fish, J. Hazard Mater. 423 (2022) 127226.

[33] F.-F. Li, W.-R. Cui, W. Jiang, C.-R. Zhang, R.-P. Liang, J.-D. Qiu, Stable sp2 carbon conjugated covalent organic framework for detection and efficient adsorption of uranium from radioactive wastewater, J. Hazard Mater. 392 (2020) 122333.

[34] M. Chafiq, A. Chaouiki, Y.G. Ko, Advances in COFs for energy storage devices: harnessing the potential of covalent organic framework materials, Energy Storage Mater. 63 (2023) 103014.

[35] Z. Liu, M. Liao, L. Wang, S. Zhuang, Recent advancements in PFAS adsorptive removal using MOFs and COFs: a review, Rev. Environ. Sci. Biotechnol. 24 (2025) 63–95.

[36] T.D. Kühne, M. Iannuzzi, M. Del Ben, V.V. Rybkin, P. Seewald, F. Stein, T. Laino, R. Z. Khaliullin, O. Schütt, F. Schiffmann, D. Golze, J. Wilhelm, S. Chulkov, M. H. Bani-Hashemian, V. Weber, U. Borˇstnik, M. Taillefumier, A.S. Jakobovits, A. Lazzaro, H. Pabst, T. Müller, R. Schade, M. Guidon, S. Andermatt, N. Holmberg, G.K. Schenter, A. Hehn, A. Bussy, F. Belleflamme, G. Tabacchi, A. Glo¨ß, M. Lass, I. Bethune, C.J. Mundy, C. Plessl, M. Watkins, J. VandeVondele, M. Krack, J. Hutter, CP2K: an electronic structure and molecular dynamics software package - quickstep: efficient and accurate electronic structure calculations, J. Chem. Phys. 152 (2020) 194103.

[37] T. Lu, F. Chen, Multiwfn: a multifunctional wavefunction analyzer, J. Comput. Chem. 33 (2012) 580 592.

[38] T. Lu, A comprehensive electron wavefunction analysis toolbox for chemists, multiwfn, J. Chem. Phys. 161 (2024) 082503.

[39] T. Lu, Q. Chen, Simple, efficient, and universal energy decomposition analysis method based on dispersion-corrected density functional theory, J. Phys. Chem 127 (2023) 7023–7035.

[40] J. Wang, R.M. Wolf, J.W. Caldwell, P.A. Kollman, D.A. Case, Development and testing of a general amber force field, J. Comput. Chem. 25 (2004) 1157–1174.

[41] G. Bussi, D. Donadio, M. Parrinello, Canonical sampling through velocity rescaling, J. Chem. Phys. 126 (2007) 014101.

[42] M. Parrinello, A. Rahman, Polymorphic transitions in single crystals: a new molecular dynamics method, J. Appl. Phys. 52 (1981) 7182–7190.

[43] B. Hess, H. Bekker, H.J.C. Berendsen, J.G.E.M. Fraaije, LINCS: a linear constraint solver for molecular simulations, J. Comput. Chem. 18 (1997) 1463–1472.

[44] W. Humphrey, A. Dalke, K. Schulten, VMD: visual molecular dynamics, J. Mol Graph. 14 (1996) 33 38.

[45] B. Yan, R. Alessandri, S.J. Marrink, L.S. Lee, J. Liu, Insight into the self-assembl behaviors of Per- and polyfluoroalkyl substances using a “Computational Microscope , Environ. Sci. Technol. Lett. 12 (2025) 626 631.

[46] N. Loganathan, A.K. Wilson, Adsorption, structure, and dynamics of Short- and long-chain PFAS molecules in kaolinite: molecular-level insights, Environ. Sci. Technol. 56 (2022) 8043–8052

[47] J. Hu, X. Yang, X. Song, Y. Miao, Y. Yu, W. Xiang, M. Huang, W. Wu, K. Liang, S. Zhao, H. Liu, Bioaccumulation mechanisms of perfluoroalkyl substances (PFASs) in aquatic environments: theoretical and experimental insights, J. Hazard Mater. 480 (2024) 136283.

[48] P.-C. Hsu, D. Jefferies, S. Khalid, Molecular dynamics simulations predict the pathways via which pristine fullerenes penetrate bacterial membranes, J. Phys. Chem. B 120 (2016) 11170–11179.

[49] S. Yuan, N. Zhang, S. Yuan, Z. Wang, Insights into the silica scaling behaviors in membrane distillation and anti-scaling mechanism of functional polymers, Water Res. 261 (2024) 122006.

[50] A. Zarei, A. Khosropour, L. Khazdooz, S. Amirjalayer, A. Khojastegi, A. Zadehnazari, Y. Zhao, A. Abbaspourrad, Substitution and orientation effects on the crystallinity and PFAS adsorption of olefin-linked 2D COFs, ACS Appl. Mater. Interfaces 16 (2024) 9483–9494.

[51] V.K. Sharma, X. Ma, D. Shetty, M.N. Nadagouda, Recent advances in covalent organic frameworks for PFAS removal: a comparative review on 2D and 3D architectures, Chem. Eng. J. 519 (2025) 164298

[52] F. Liu, J.J. Pignatello, R. Sun, X. Guan, F. Xiao, A comprehensive review of novel adsorbents for Per- and polyfluoroalkyl substances in water, ACS ES T Water 4 (2024) 1191 1205.

[53] Z.-W. Ke, S.-J. Wei, P. Shen, Y.-M. Chen, Y.-C. Li, Mechanism for the adsorption of Per- and polyfluoroalkyl substances on kaolinite: molecular dynamics modeling, Appl. Clay Sci. 232 (2023) 106804.

[54] G. Damiao, ˜ P. Morgado, P. Silva, L.F.G. Martins, C. McAbe, E.J.M. Filipe, Perfluorinated pollutants in water: diffusion coefficient of perfluorosulfonic acids by molecular dynamics simulations, Fluid Phase Equilib. 575 (2023) 113928.

[55] M. Kah, D. Oliver, R. Kookana, Sequestration and potential release of PFAS from spent engineered sorbents, Sci. Total Environ. 765 (2021) 142770.

[56] S. Bandehali, S. Moradi, M. Khalili, M. Bandehali, A. Alimadadi, Molecular dynamic simulation (MD) for COF-based membrane in water treatment, Colloid and Interface Science Communications 62 (2024).100798

[57] F. Xiao, Emerging poly- and perfluoroalkyl substances in the aquatic environment: a review of current literature, Water Res. 124 (2017) 482–495.

[58] I.J. Gresham, D.M. Reurink, S.W. Prescott, A.R.J. Nelson, W.M. de Vos, J.D. Willott, Structure and hydration of asymmetric polyelectrolyte multilayers as studied by neutron reflectometry: connecting multilayer structure to superior membrane performance, Macromolecules 53 (2020) 10644–10654.

[59] J. Niu, Y. Li, Y. Shen, S. Yuan, D. Wang, P. Zheng, Z. Wang, Hydrogel-anchored caffeic acid-copper ions coating: integrated defensive and offensive strategy for synergistic antifouling, Chem. Eng. J. 515 (2025) 163766.

[60] X. Yang, N. Zhang, J. Zhang, W. Liu, M. Zhao, S. Lin, Z. Wang, Nanocomposite hydrogel engineered janus membrane for membrane distillation with robust fouling, wetting, and scaling resistance, Environ. Sci. Technol. 57 (2023) 15725–15735.