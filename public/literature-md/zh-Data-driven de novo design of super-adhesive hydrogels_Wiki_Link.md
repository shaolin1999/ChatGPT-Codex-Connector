---
title: "zh-Data-driven de novo design of super-adhesive hydrogels Wiki全文"
source_markdown: "2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/Data-driven de novo design of super-adhesive hydrogels.md"
cn_markdown: "2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/zh-Data-driven de novo design of super-adhesive hydrogels.md"
type: translated_fulltext_wiki
---
<!-- PaperMDLab-NAV:START -->
> [!info] 论文四向互链（PaperMDLab 自动维护）
> [[2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/Data-driven de novo design of super-adhesive hydrogels|英文原文]] · [[2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/zh-Data-driven de novo design of super-adhesive hydrogels|中文译文]] · **中文全文双链（当前）** · [[4.SCI_AI_Summary/summary-zh-Data-driven de novo design of super-adhesive hydrogels|AI中文总结]]
<!-- PaperMDLab-NAV:END -->


# 数据驱动的[[粘附水凝胶|超粘附水凝胶]][[从头设计]]

https://doi.org/10.1038/s41586-025-09269-4

收稿日期：2024 年 11 月 20 日

接收日期：2025 年 6 月 11 日

[[Hongguang Liao]]<sup>1,10</sup>、[[Sheng Hu]]<sup>2,3,10</sup>、[[Hu Yang]]<sup>4</sup>、[[Lei Wang]]<sup>2,5</sup>、[[Shinya Tanaka]]<sup>2,5</sup>、[[Ichigaku Takigawa]]<sup>2,6 ✉</sup>、[[Wei Li]]<sup>2,7 ✉</sup>、[[Hailong Fan]]<sup>2,9 ✉</sup> 及 [[Jian Ping Gong]]<sup>2,8 ✉</sup>

在线发表日期：2025 年 8 月 6 日

开放获取

检查更新

[[数据驱动方法]]利用标准化数据集，已经改变了具有明确原子结构的硬质材料的发现与预测，实现了准确的性能预测，并促进了设计空间的高效探索<sup>1–3</sup>。然而，这类方法在[[软材料]]中的应用仍然充满挑战，因为软材料具有复杂的[[多尺度结构—性能关系]]<sup>4–6</sup>。在此，我们提出一种数据驱动方法，将[[数据挖掘]]、实验和[[机器学习]]相结合，从零开始设计[[粘附水凝胶|高性能粘附水凝胶]]，以适用于要求严苛的水下环境。通过利用[[蛋白质数据库]]，我们开发了一种[[描述符策略]]，以[[理想无规共聚]]的方式在聚合物链中统计复现[[蛋白质]]序列模式，从而实现靶向[[仿生水凝胶|水凝胶]]设计和数据集构建。借助机器学习，我们从包含 180 种仿生[[水凝胶]]的初始数据集中优化水[[凝胶]]配方，使[[粘附强度]]显著提升，最大值超过 1 MPa。这些超粘附水凝胶在从生物医学工程到深海探索等多种应用中具有巨大潜力，标志着软材料数据驱动创新的显著进展。

设计[[软材料]]（如[[凝胶]]和[[弹性体]]）是一项复杂任务。它需要选择合适类型和数量的[[单体|构建单元]]（例如单体），并确定它们在材料中的排列方式，从而形成一个包含无数可能组合的巨大设计空间。此外，由于弱分子相互作用与热涨落的相互影响，软材料表现出复杂行为，导致在多个时间和长度尺度上形成复杂的[[多尺度结构—性能关系|结构—性能关系]]，其中介观尺度结构发挥着重要作用<sup>7</sup>。

这些复杂性阻碍了精确预测理论或计算模型的发展，往往使[[软材料]]的发现依赖于实验试错。为减少实验需求，[[数据驱动方法|数据驱动策略]]变得日益重要<sup>8,9</sup>。[[数据挖掘]]（DM）和[[机器学习]]（ML）等新兴工具正在推动对复杂行为的分析、改进性能预测，并促进理论和建模发展，从而改变这一领域<sup>5,10–13</sup>。

将这些工具有效整合到[[数据驱动方法|端到端设计框架]]中，对于加速[[软材料]]发现至关重要。关键的第一步是构建高质量数据集，而这一点因潜在材料设计众多和实验通量有限而变得复杂<sup>14,15</sup>。例如，[[粘附水凝胶]]是一类前景广阔的软材料，在高端应用中广受需求。然而，实现即时、强力且可重复的水下粘附仍然是一个长期挑战<sup>16,17</sup>。此前关于该材料的研究已确定了若干[[单体]]类型，这使得难以形成一致的数据集，也难以建立用于优化性能的简单设计原则<sup>16</sup>。

[[生物软组织]]作为自然[[进化]]出的[[软材料]]，体现了为特定功能量身定制的复杂结构<sup>18</sup>。研究这些体系有助于缩小合成软材料的设计空间<sup>19</sup>，例如受[[壁虎]]启发的[[干态胶粘剂]]<sup>20,21</sup>。尤其是[[粘附蛋白]]，广泛存在于不同生物体中（例如[[古菌]]、[[细菌]]、[[真核生物]]和[[病毒]]），能够在湿润环境中实现粘附。尽管种类多样，这些蛋白共享共同的序列模式，为设计[[水下胶粘剂]]提供了宝贵启示<sup>22</sup>。然而，识别有意义的模式、将其转化为合成策略，并通过[[机器学习]]实现外推预测，仍是实现[[数据驱动方法|端到端设计模型]]的主要挑战。

在此，我们提出一种新的[[数据驱动方法]]，整合[[数据挖掘]]（DM）、实验和[[机器学习]]（ML），以高效开发高性能[[粘附水凝胶|水下粘附水凝胶]]（图 1a）。通过挖掘[[粘附蛋白]]数据库，我们提取特征性序列特征来指导[[仿生水凝胶|水凝胶]]设计。利用无规共聚和[[相对组成]]策略，在 180 种合成[[水凝胶]]中复现这些特征，从而在生物保真度与实际合成之间取得平衡。在这些数据挖掘驱动的水[[凝胶]]中，有若干种表现出比文献报道更大的[[粘附强度]]（F）（图 1b）。这 180 种合成水凝胶构成了一个规模虽小但质量较高的数据集，可用于进一步的机器学习优化，从而获得水下 $F _ { \mathrm { a } }$ 超过 1 MPa 的机器学习驱动水凝胶——比此前报道的水下粘附水凝胶和[[弹性体]]提高一个数量级<sup>16</sup>（补充图 1）。

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/033d75f1296145ff569d4ee025b8038233210f090c4f23fe753a474634818d59.jpg>)  
图 1 | 水下粘附水凝胶的数据驱动从头设计。a，所提出方法的概念示意图，整合数据挖掘、实验和机器学习来设计高性能粘附水凝胶。b，此前报道的水凝胶（补充表 1）与本研究新开发水凝胶（数据挖掘驱动和机器学习驱动）之间水下粘附强度（F）的比较。$F _ { a }$ 采用粘性测试测定，测试条件经优化以获得最大性能。

所获得的超强[[粘附水凝胶]]在广泛的应用中具有巨大潜力，为传统胶粘剂常常无法胜任的场景提供了可靠解决方案（补充图 1）。它们能够改进医疗操作、推进生物医学工程、支持海洋养殖，并实现深海探测。性能的大幅提升展示了我们[[数据驱动方法]]在设计高性能[[仿生水凝胶|水凝胶]]方面的成功。此外，该方法具有高度通用性，可适用于开发其他类型的[[软材料|功能软材料]]，从而在多个领域开辟新的可能性。

## [[粘附蛋白]]的[[数据挖掘]]

我们利用关键词“[[粘附蛋白|adhesive protein]]”，从[[美国国家生物技术信息中心]]（[[NCBI]]）蛋白数据库中汇编了一个包含 24,707 种粘附蛋白的数据集。该数据集涵盖来自[[古菌]]、[[细菌]]、[[真核生物]]、[[病毒]]和人工蛋白的 3,822 种不同生物体的蛋白。统计分析表明，这些粘附蛋白的平均长度约为 300–500 个[[氨基酸]]（补充图 2）。

为识别最具代表性的[[蛋白质]]序列并尽量减少个体变异的影响，我们按各物种所含[[粘附蛋白]]的数量对其进行排序，并选取前 200 个物种用于进一步分析（图 2a 和补充图 3）。随后，我们使用 [[Clustal Omega]]<sup>23</sup> 进行[[多序列比对]]，以确定每个物种的一致序列（扩展数据图 1），这些序列被认为在[[进化]]过程中对维持蛋白质稳定性与粘附性起着关键作用<sup>24,25</sup>。

为降低变量维度，20 种标准[[氨基酸]]根据其物理化学性质被归为六类：[[疏水性]]、[[亲核性]]、[[酸性]]、[[阳离子型]]、[[酰胺型]]和[[芳香型]]（补充图 4）。随后，一致序列被编码为功能类别序列。为保证编码一致性，[[甘氨酸]]、[[丙氨酸]]和[[脯氨酸]]被排除在疏水类之外，因为它们的侧链较小，被认为与其他氨基酸相比在[[界面接触]]和相互作用中作用较弱<sup>26</sup>。

在编码序列中，每个功能类别的嵌段长度通常小于 3（图 2b），表明[[粘附蛋白]]即使在较粗糙的功能类别水平上也具有显著的[[序列异质性]]。不同物种在这些功能类别的成对频率上表现出不同的模式（图 2c）。这表明序列内部对特定功能类别配对存在偏好，暗示在观察到的序列异质性之下存在某种潜在有序性。

基于这些认识，我们设计了一种利用六种[[功能单体]]代表六类[[氨基酸]]功能类别的[[仿生水凝胶|水凝胶]]设计策略。虽然直接复制功能类别序列提供了一种模拟[[蛋白质]]一级结构和功能的直接途径，但在合成聚合物中实现对[[单体]]序列的精确控制仍然是一个显著挑战。因此，我们的目标是通过六种功能单体的[[理想无规共聚]]，在统计上重现功能类别的序列特征；这种聚合在过程中[[组成漂移]]极小，并能实现统计上受控的序列<sup>19,27–29</sup>。

为此，我们采用[[相对组成|相对组成方法]]来捕捉合成聚合物链中[[氨基酸]]功能类别的[[邻近偏好]]。具体而言，我们统计了六种功能类别中 21 种不同配对类型的出现次数，记作 $n _ { i j }$（其中 $i , j = 1 , . . . , 6 )$），沿每个物种的功能类别序列进行统计，并按降序排列。前五对合计约占所有出现次数的 50%，用于计算每个功能类别的[[单体]]比例，即 $\phi _ { i } = N _ { i } / \sum _ { i } N _ { i } ,$，其中 $\begin{array} { r } { N _ { i } { = } \sum _ { j } { ( n _ { i j } + { n _ { j i } } ) } } \end{array}$ 对应每个物种（扩展数据图 1 和补充数据 1 和 2）。这些相对组成被用作相应物种的[[描述符策略|描述符]]。从前 200 个物种中，去除 20 个重复后，我们获得了 180 个独特组成（补充表 2），随后将其用于[[仿生水凝胶|水凝胶]]合成。

## [[数据挖掘|DM]] 驱动[[仿生水凝胶|水凝胶]]的合成

选取了六种[[功能单体]]（图3a），每种分别代表[[氨基酸]]的六大功能类别之一。在以[[二甲亚砜]]（[[DMSO]]）为[[共溶剂]]进行[[自由基聚合]]时，通过<sup>1</sup>H [[核磁共振|NMR]]分析测得的各[[单体]]对[[反应活性比]]均接近1（补充图5和补充表3）。这些接近1的数值表明，在[[二甲基亚砜|DMSO]]中进行共聚合时[[组成漂移]]极小（补充图6和7）。

基于[[Mayo–Lewis模型]]进行了[[蒙特卡洛模拟]]，利用测得的[[反应活性比]]（补充表3）和推导得到的[[单体]]比例（ϕ）（参考文献30）（补充表2），分析了相应180种[[杂聚物]]中六种[[功能单体]]的序列特性。所得的嵌段长度分布和成对频率（图3b、c）与在[[粘附蛋白|黏附蛋白]]中观察到的结果高度吻合（图$^ { 2 \mathrm { b } , \mathrm { c } ) }$），证实了我们的合成方案能够有效捕捉关键统计特征（补充图8），例如[[序列异质性]]和[[邻近偏好|邻近偏好性]]。

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/20f0d378d9ca17fd5e618d7965610c979dd5c77131b6f4aee950407a8898af4b.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/d71900a2a146b72b8468b2357b1eff33ab782648c7191c7a1c572602b1009013.jpg>)  
图2 | 黏附蛋白的数据挖掘与配方设计。a，氨基酸特征提取流程示意图，该流程用于通过黏附蛋白数据挖掘、编码和相对组成计算，推导出仿生配方。b，基于前200个物种的共有序列，沿横轴展示了六大功能类别的嵌段长度分布（即来自同一功能类别的连续残基数量）。c，沿编码序列展示21种功能类别对类型的成对频率分布，覆盖整个数据集以及按数据库中生物学分类划分的八个代表性物种。

按照推导得到的配方，通过[[功能单体]]与[[交联剂]]在[[DMSO]]中进行[[一锅法自由基共聚合]]，合成了180种由[[数据挖掘]]驱动的[[凝胶]]，编号为[[G-001]]至[[G-180]]（方法和补充图9）。在将溶剂从[[二甲亚砜|DMSO]]置换为[[生理盐水]]（0.154 M NaCl）后，对这些[[仿生水凝胶|水凝胶]]进行了[[体积溶胀率]]、[[流变学行为]]以及[[粘附强度|水下黏附强度]]（F）表征。黏附性能通过[[粘性测试]]（图3d和补充图10）在生理盐水中的[[玻璃基材]]上进行评估，施加10 N的[[加载力]]和10秒的[[接触时间]]，以实现快速筛选。

图3e显示了全部180种水凝胶（直径15 mm，厚度0.3–0.8 mm）测得的$F _ { \mathrm { a } }$。其中，16种水凝胶表现出稳健的黏附性能，$F _ { \mathrm { a } } { > } 1 0 0 \mathsf { k P a }$，83种水凝胶的$F _ { \mathrm { a } } { > } 4 6 \mathsf { k P a }$超过了文献中报道的平均值（补充表1）。值得注意的是，G-042（来源于埃希氏菌属，补充图8），以下简称G-max，表现出最高的黏附强度，达到147 kPa。

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/f2e67dd82a82dc82a865fc96e766b00e034a2efcac14cee9e7efd2ef284079cf.jpg>)  
横轴，基于前200个物种的共有序列。c，沿编码序列展示21种功能类别对类型的成对频率分布，覆盖整个数据集以及八个代表性物种，沿横轴展示，按数据库中的生物学分类进行归类。

较高的$F _ { \mathrm { a } }$值证明了我们[[数据驱动方法]]在指导黏附[[仿生水凝胶|水凝胶]][[从头设计]]方面的有效性，并揭示了两个关键见解。首先，通过[[数据挖掘]]提取的功能类别序列捕捉到了[[粘附蛋白|黏附蛋白]]中对湿黏附至关重要的基本序列特征。其次，利用[[功能单体]]的[[理想无规共聚|理想无规共聚合]]，通过[[相对组成]]从统计学上重现这些序列特征，提供了一种有效策略，弥合了从头设计与材料制备之间的差距。

为验证第一个见解，我们考察了利用源自[[节肢弹性蛋白]] [[数据挖掘|DM]] 的序列所配制[[仿生水凝胶|水凝胶]]的[[粘附性能]]。这些[[水凝胶]]表现出较差的水下粘附性（扩展数据图 2 和补充表 4），凸显了来自[[粘附蛋白]]的特定序列特征对于有效粘附的重要性。

为验证第二个见解，我们分析了在[[二甲基硫醚]]（DMS）中通过非理想共聚合成的[[仿生水凝胶|水凝胶]]的[[粘附性能]]。在 DMS 中，大多数[[单体]]的[[反应活性比|竞聚率]]对显著偏离 1（补充表 3），导致聚合过程中发生[[组成漂移]]并形成[[嵌段式序列]]（补充图 6 和 7）。图 3f 比较了 [[G-004]] 的两种变体，显示在 DMS 中合成的变体更为半透明，并且其 $F _ { \mathrm { a } }$ 显著低于在 [[DMSO]] 中合成的具有统计序列的对应物。这一发现强调了[[功能单体]]（竞聚率接近 1）的[[理想无规共聚]]在获得模拟[[蛋白质]]功能所必需的统计序列特征中的重要作用<sup>19,27</sup>。

为提高 $F _ { \mathrm { a } } ,$，我们使用 [[Kendall τ 系数]]<sup>31</sup>评估了 $F _ { \mathrm { a } }$ 与 $\phi _ { i }$ 之间的相关性，并表征了 $F _ { \mathrm { a } }$ 对[[仿生水凝胶|水凝胶]]溶胀和流变行为的依赖关系（扩展数据图 3）。我们发现，$\phi _ { \mathrm { A T A C } } ,$ ϕ 和 $\phi _ { \mathrm { P E A } }$ 与 $F _ { \mathrm { a } } ,$ 呈弱正相关，而 ϕ、$\phi _ { \mathrm { A A m } }$ 和 ϕ 呈弱负相关。然而，这些弱相关性以及复杂的[[多尺度结构—性能关系|结构-性能关系]]（扩展数据图 3）不足以直接预测实现最佳粘附所需的[[水凝胶]]配方，这凸显了[[单体]]种类、序列和网络结构之间复杂的协同效应。

a  
b  
![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/f62a957ac58c1dcf5b379baba8cb35346436085fdd017fc80fc0cffb880bc66f.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/4510e5b9fa44496b31f793990e2f55a9ca133cf01ed31c9f000da9ed4202f788.jpg>)  
c

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/b6352df28a62616c3d94775dc9449efec3564a3d698c90d93cd2deb27f7605e6.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/44e012bbc3932e46cf208c0ac683c01575360aac340ddeb4d797b98e9f3491d5.jpg>)  
图 3 | DM 驱动的水凝胶用于水下粘附。a，六种功能单体的化学结构，每种单体代表氨基酸的六种功能类别之一。b，基于实验测定的竞聚率和衍生配方，通过蒙特卡洛模拟生成的杂聚物序列中单体嵌段长度的分布。c，通过蒙特卡洛模拟获得的杂聚物序列中单体对的成对频率分布，图中显示了所有 180 种衍生配方以及对应于代表性

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/14e5a2da72ae5093012645824f1c90dcf4a08495d94c8a44a881d579c25f7554.jpg>)

## 通过 [[机器学习|ML]] 优化[[仿生水凝胶|水凝胶]]

接下来，我们使用[[机器学习]]（ML）从 180 种[[仿生水凝胶|水凝胶]]数据集出发，探索具有增强[[粘附强度]]的[[水凝胶]]配方。在所基准测试的九种 ML 模型（补充表 5 和 6）中，[[高斯过程]]（GP）<sup>32</sup>和[[随机森林回归]]（RFR）<sup>33</sup>成为根据 ϕ 预测 F 的最有效基础模型，在实现低测试误差的同时将[[过拟合]]降至最低（扩展数据图 4）。

基于这些模型，我们实施了[[基于序列模型的优化]]（[[SMBO]]）<sup>33</sup>来提出新的[[仿生水凝胶|水凝胶]]配方，并以[[期望改进]]（EI）作为[[采集函数]]。为减少[[水凝胶]]合成与表征的实验轮数，我们设计了一种[[批量SMBO|批量 SMBO]] 工作流程，可在单轮中提出多个配方方案。

为了提高效率，我们探索了多种[[批量SMBO|批量 SMBO]] 方法，将已训练的基础模型作为假设值提供者（P），并将 [[高斯过程|GP]]、[[随机森林回归|RFR]]、[[极端随机树]]（[[极端随机树回归|ETR]]）<sup>34</sup> 和[[梯度提升机]] $( \mathsf { G B M } ) ^ { 3 5 }$ 作为 [[期望改进|EI]] 最大化器（M），统称为 P–M。我们还实现了传统[[贝叶斯优化]]方法，使用[[克里金置信]]（GP\_KB）（文献 36）、最大和最小常数谎言（GP\_ CLmax、GP\_CLmin）（文献 36）以及[[局部惩罚]]（GP\_LP）（文献 36,37）作为确定批量点的启发式方法。为了进行验证，我们选择了按 EI 幅值或预测 F（PRED）排序的前 10 个配方（每批提出 40 个中的前 10 个）作为实验测试集。

所有验证均遵循与训练集相同的协议，以确保[[数据一致性]]。图 4a 显示了不同 [[SMBO]] 方法所提出配方的真实 $F _ { \mathrm { a } }$ 值（补充表 7）。

f  
![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/73e3ca388469c5c3d97e29d1ea5cea08df12f776d237f07432830967ae18922a.jpg>)  
图 2c 中所示物种。d，用于测量水下黏附力的黏性测试示意图。e，180 种水凝胶的黏附强度（F）。f，两种 G-004 变体在黏性测试中的应力–位移曲线：（i）在 DMSO 中合成的统计序列和（ii）在 DMS 中合成的类嵌段序列。插图为两种水凝胶的外观。黏附测试在玻璃基底上于生理盐水（0.154 M NaCl）中施加 10 N 载荷并保持 10 s 的条件下进行。该测试条件用于快速筛选。

非 [[SMBO]] 基线 [[高斯过程|GP]]\_enu 和 [[随机森林回归|RFR]]\_enu 从 1000 万个随机配方的[[枚举]]中选择了前五个 PRED，但未能将 $F _ { \mathrm { a } }$ 提升到训练数据以上。相比之下，所有 [[基于序列模型的优化|SMBO]] 方法都实现了更高的 $F _ { \mathrm { a } } ,$，其中 GP\_KB 和 [[RFR-GP]] 表现最佳，并且 RFR-GP 总体上获得了最高的 $F _ { \mathrm { a } }$。

我们进一步测试了使用 [[RFR-GP]] 的“[[热启动]]”策略，即向训练集中添加由 [[随机森林回归|RFR]] 生成的 10 个额外数据点。该变体称为 RFR-[[高斯过程|GP]]\*，在所有模型中表现出最高的 $F _ { \mathrm { a } }$。此外，通过 PRED 排序选择的配方通常优于通过 [[期望改进|EI]] 排序选择的配方。这些发现证明了[[批量SMBO|批量 SMBO]] 的有效性，并为提高工作流效率提出了最佳模型和策略。

验证结果扩展了我们的[[仿生水凝胶|水凝胶]]数据集。为了评估 [[RFR-GP]] 和 [[高斯过程|GP]]\_KB 在 [[SMBO]] 框架内的探索能力，我们进行了两轮额外的 [[机器学习|ML]] 优化和实验验证。尽管识别出了新的高 $F _ { \mathrm { a } }$ 配方，但没有一个超过第一轮中实现的最大 $F _ { \mathrm { a } }$（扩展数据图 5）。我们推测，所采用[[单体]]种类的功能可能解释了观察到的性能平台期，因此未继续进行更多优化轮次。

最终数据集（包含 341 种[[仿生水凝胶|水凝胶]]）中 $F _ { \mathrm { a } }$ 与 $\phi _ { i }$ 之间的关系如图 4b 所示，使用[[均匀流形近似与投影]]（UMAP）<sup>38</sup> 进行降维（从六维降至二维）。值得注意的是，由 [[RFR-GP]] 和 [[高斯过程|GP]]\_KB 生成的配方与原始 180 种[[水凝胶]]数据集的重叠很小，表明优化过程中发生了外推。[[随机森林回归|RFR]]-GP 数据点比 GP\_KB 的更加分散，表明与传统[[贝叶斯优化]]相比，其探索范围更广。

为评估 $\phi _ { i }$ 对 $F _ { \mathrm { a } } ,$ 的影响，我们使用 [[SHAP]]（SHaply Additive exPlanations）<sup>39</sup>，并基于在最终 341 个[[仿生水凝胶|水凝胶]]数据集上训练的 [[随机森林回归|RFR]] 模型进行分析。SHAP 汇总图（图 4c）显示，较高的 $\phi _ { \mathrm { B A } }$ 和 $\phi _ { \mathrm { P E A } }$ 值会显著增强 $F _ { \mathrm { a } } .$。这是因为 [[BA]] 和 [[PEA]] 能有效[[接触界面排水|将水从接触界面排出]]，并且当其邻近

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/bca68d07db42b65e8a320bbec1a5ba595bbd681052b20a8081f936b9cee1e77d.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/040bccd5bbfed8aa98b4da0cc33c8bba4436ae7bb8997b243b355b5d1568241b.jpg>)  
图 4 | 水下粘附水凝胶的机器学习优化。a，基于在 180 个水凝胶数据集上训练的不同模型预测所制备水凝胶的粘附强度 $( F _ { \mathrm { a } } )$。模型命名及详细说明见方法部分。所有粘附测量均在训练集相同的测试条件下进行：10 N 加载力、10 秒接触时间、玻璃基底、生理盐水中。b，UMAP

[[ATAC]]（补充图 11）时，它们可增强与带负电[[玻璃]]表面的[[静电相互作用]] $\pmb { \mathrm { \Sigma } } ^ { 2 7 , 4 0 - 4 3 }$（补充图 12）。相比之下，较高的 $\dot { \varphi } _ { \mathrm { H E A } } , \phi _ { \mathrm { C B E A } } ,$ 和 $\phi _ { \mathrm { A A n } }$ 值往往降低 $F _ { \mathrm { a } } .$。有趣的是，$\mathbf { \nabla } \mathcal { P } _ { \mathtt { A T A C } }$ 具有双重效应（补充图 13）：较低水平会削弱静电相互作用，而过量的 $\phi _ { \mathrm { A T A C } }$ 会增加[[仿生水凝胶|水凝胶]]溶胀，限制聚合物与表面的接触并降低 $F _ { \mathrm { a } } .$。因此，适度的 $\phi _ { \mathrm { A T A C } }$ 至关重要。

这些发现在三轮[[机器学习]]中始终一致，确立了利用所选[[功能单体]]在[[玻璃]]表面实现强[[粘附水凝胶|水下粘附水凝胶]]的明确设计原则：引入 [[BA]]、[[PEA]] 和 [[ATAC]] 是关键。该组合同时利用[[疏水效应]]和[[静电相互作用]]，增强对带负电表面的水下粘附。每轮机器学习中具有最高 $\cdot F _ { \mathrm { a } }$ 的[[仿生水凝胶|水凝胶]]分别记为 [[R1-max]]、[[R2-max]] 和 [[R3-max]]，它们仅由这三种[[单体]]组成（图 5a），并且如[[蒙特卡洛模拟|蒙特卡罗模拟]]所示，具有相似的统计序列特征（补充图 11 和 14）。

## 超强[[粘附水凝胶]]的性能

我们对三种表现最佳的[[机器学习]]驱动[[仿生水凝胶|水凝胶]]（[[R1-max]]、[[R2-max]] 和 [[R3-max]]）进行了详细研究，并将其与最佳的 [[数据挖掘|DM]] 驱动[[水凝胶]]（[[G-max]]）进行了比较（图 5、扩展数据图 6 和补充表 8）。在刚制备状态下，所有[[凝胶]]均透明，并表现出与频率无关的[[储能模量]]（G′）（扩展数据图 6a），表明在 [[DMSO]] 中几乎没有分子间或分子内聚集。尽管组成不同，但相近的 $G ^ { \prime }$ 值表明它们具有相似的[[网络拓扑结构]]。

在[[生理盐水]]中平衡后，所有[[凝胶]]均发生收缩（扩展数据图 6c）。与 [[G-max]] 不同，[[机器学习]]驱动的[[仿生水凝胶|水凝胶]]表现出更高的不透明度（图 5b）、更强的[[粘弹性]]以及更高的模量（扩展数据图 6b）。这表明其较高的[[疏水性]] [[BA]] 和[[芳香性]] [[PEA]] 含量（图 5a）促进了共聚物链在水性介质中的强缔合，从而有利于[[能量耗散]]。此外，机器学习驱动的[[水凝胶]]表现出更高的[[机械强度]]和[[韧性]]（补充视频 1），其[[应力-应变曲线]]下面积更大即可证明（图 5c）。增强的粘[[弹性]]和韧性使其[[粘附性能]]优于 G-max<sup>44</sup>。

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/e89bc2164cd7eb02c898658f1b590f9ff473004bdb68b890bb07ca98d27b08d2.jpg>)  
对 F 与缩减[[单体]]比例（ϕ）之间关系的表示，突出显示了 [[高斯过程|GP]]\_KB 和 [[RFR-GP]]（在 [[SMBO]] 框架内）在不同轮次中提出的配方。符号大小代表粘合强度的量级。c，[[SHAP]] 蜂群图，按平均绝对 SHAP 值排序，显示在训练后的 [[随机森林回归|RFR]] 模型分析的 341 个样本的最终数据集中，ϕ 对 $F _ { a }$ 的影响。

为全面评估粘合性能，我们在一系列测试条件、基底和溶液介质中进行了[[粘性测试]]。总体而言，$. F _ { \mathrm { a } }$ 随[[加载力]]和[[接触时间]]的增加而增大，最终达到平台（图 5d 和扩展数据图 $\hphantom { - } 7 ) ,$），这归因于[[仿生水凝胶|水凝胶]]-基底界面处增强的[[界面接触]]和[[排水作用]]。这些平台值用于比较不同基底和溶液中的最大[[粘附性能]]。

在[[生理盐水]]中，[[R1-max]] 在[[玻璃]]上实现了超过 1 MPa 的最大 $\boldsymbol { F _ { \mathrm { a } } }$（图 5e），并在超过 200 次[[附着-脱附循环]]中保持了稳健的粘附力（扩展数据图 8）。它还对多种基底表现出强粘附性，包括[[无机材料]]、[[塑料]]和[[金属]]，这一点通过[[搭接剪切]]和[[剥离测试]]得到证实（扩展数据图 9）。值得注意的是，R1-max 在 1 kg [[剪切载荷]]下将不同材料制成的板材连接件维持了超过 1 年，展示了卓越的[[耐久性]]（图 5f 和补充图 15）。

在[[人工海水]]（0.7 M NaCl）中，所有三种 [[机器学习|ML]] 驱动的[[仿生水凝胶|水凝胶]]都表现出相似水平的强粘附性（图 5g）。然而，在[[去离子水]]中，[[R2-max]] 优于其他样品，在脱粘过程中出现[[空化]]现象（补充图 16）。这些结果表明，微小的组成变化可能影响不同环境中的[[粘附性能]]，这反映了一种在自然界中观察到的原理——对特定环境的适应性优于普适优化——[[生物系统]]通过[[进化]]在其特定环境中实现最优性能。

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/fe64464163394f6d342efe7a6278299bbba97d430efb1ebedb26a57f05c0846f.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/4ae074e704ed96dc512bf9a73a51e564db8a529c595edaa7cd382a9cfbd7413b.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/d323cdde4219b4381b72ecd0e5db7ef0a5baf8102ff4e7f26c347c44dc4cc1c7.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/97443a008ba7830a94a949f53a8407d7e107692a6c8b2c68925ef1128e6bad66.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/ec41b4e8f8ae1e43cbe974cfc950025e326a7206069811368b3af27583746d47.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/00039d4bac534b34e81540c89e9159296f71e84585a85af5317d3667352d8ccc.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/163276b5624b28d2ce68a3fec85919fdf6651795a5c97da92bfa572a9caa6f3e.jpg>)  
图 5 | 通过 DM（G-max）和 ML 优化（R1-max、R2-max 和 R3-max）识别的水凝胶的表征与性能。  
a，[[凝胶]]的配方。b，显示凝胶外观的照片。c，凝胶在 100 mm min<sup>−1</sup> [[拉伸速率]]下的[[单轴拉伸]][[应力-应变曲线]]。d，[[仿生水凝胶|水凝胶]]在[[生理盐水]]中[[玻璃]]上 F 随[[接触时间]]（左）和[[接触力]]（右）的变化。e，[[R1-max]] 在生理盐水中各种基底上的 F。[[PC]]，[[聚碳酸酯]]；[[聚甲基丙烯酸甲酯|PMMA]]，聚甲基丙烯酸甲酯；[[酚醛树脂|PF]]，酚醛树脂；[[聚甲醛|POM]]，聚甲醛；[[聚丙烯|PP]]，聚丙烯；[[聚四氟乙烯|PTFE]]，聚四氟乙烯；[[铝合金|Al]]，铝合金；[[钛合金|Ti]]，钛合金；[[不锈钢|SS]]，不锈钢。f，照片显示 R1-max（尺寸为 25 mm × 25 mm，厚度约 0.4 mm）在生理盐水中于 1 kg 载荷下连接[[陶瓷]]（左）、玻璃（中）和钛（右）板对超过 1 年。g，在[[去离子水]]、生理盐水和[[人工海水]]（0.7 M NaCl）中平衡后，[[水凝胶]]在玻璃基底上的 F。[[G-max]] 上的星号表示测试期间发生[[内聚破坏]]。误差棒表示 N = 3 次测量的[[标准差]]。

这一发现强调了在 [[机器学习|ML]] 优化中确保[[数据一致性]]的重要性，因为[[仿生水凝胶|水凝胶]]性能会随环境条件而变化。

为证明实际应用性，开展了若干案例研究。[[R1-max]] 被用于将一只[[橡皮鸭]]固定在[[海边岩石]]上（扩展数据图 10a）。其在盐水中的强粘附使鸭子能够承受持续的[[潮汐|海潮]]与[[波浪冲击]]，表明了其适用于严酷[[海洋环境]]（补充视频 2）。[[R2-max]] 在[[去离子水]]中表现出最高粘附力（图 5g），成功密封了一根 3 米高、装满自来水且底部开有 20 毫米直径孔的[[聚碳酸酯管]]（扩展数据图 10b）。它即刻止住了[[高压漏水]]（补充视频 3），展现了普通粘合剂无法达到的性能水平（扩展数据图 10c）。此外，所有这些[[仿生水凝胶|水凝胶]]均表现出良好的[[生物相容性]]，这一点通过小鼠[[皮下植入]]得到证实（补充图 17），支持了它们在[[生物医学应用]]中的潜力。

总之，我们提出了一种[[数据驱动方法]]，整合了从[[蛋白质]]中提取有价值的[[序列信息]]、可规模化的[[聚合物合成]]以及迭代[[机器学习]]，以应对[[软材料]][[从头设计]]与开发中长期存在的挑战。除[[粘附水凝胶]]外，这一数据驱动设计框架为开发各类[[功能性软材料]]提供了一种系统化、可扩展的端到端方法。然而，挑战仍然存在，主要源于[[单体多样性]]、用于将[[单体]]序列控制到适合材料开发规模的[[聚合物合成技术]]以及[[数据集可扩展性]]方面的限制。克服这些挑战需要扩展[[模块化单体库]]、推进[[聚合技术]]，并开发能够在稀疏、多尺度数据集中进行泛化的[[物理信息机器学习模型]]。

## 在线内容

任何方法、附加参考文献、Nature Portfolio 报告摘要、来源数据、扩展数据、补充信息、致谢、[[同行评审]]信息；作者贡献与竞争利益详情；以及数据和[[代码可用性]]声明，均可在 https://doi.org/10.1038/s41586-025-09269-4. 获取。

Zeni, C. et [[铝合金|al]]. A generative model for inorganic materials design. Nature 639, 624–632 (2025).

2. Merchant, A. et al. Scaling deep learning for materials discovery. Nature 624, 80–85 (2023).

3. Yao, Y. et al. High-entropy nanoparticles: synthesis-structure-property relationships and data-driven discovery. Science 376, eabn3103 (2022).

4. Li, F. et al. Design of self-assembly dipeptide hydrogels and machine learning via thei chemical features. Proc. Natl Acad. Sci. USA 116, 11259–11264 (2019).

5. Xu, T. et al. Accelerating the prediction and discovery of peptide hydrogels with humanin-the-loop. Nat. Commun. 14, 3880 (2023).

6. Tamasi, M. J. et al. Machine learning on a robotic platform for the design of polymer-protein hybrids. Adv. Mater. 34, 2201809 (2022).

7. Fan, H. L. & Gong, J. P. Fabrication of bioinspired hydrogels: challenges and opportunities Macromolecules 53, 2769–2782 (2020)

8. Butler, K. T., Davies, D. W., Cartwright, H., Isayev, O. & Walsh, A. Machine learning for molecular and materials science. Nature 559, 547–555 (2018).

9. Pollice, R. et al. Data-driven strategies for accelerated materials design. Acc. Chem. Res. 54, 849–860 (2021).

10. Ferguson, A. L. & Brown, K. A. Data-driven design and autonomous experimentation in soft and biological materials engineering. Annu. Rev. Chem. Biomol. Eng. 13, 25–44 (2022).

11. Jackson， N. E.， Webb， M. A. & de Pablo， J. J. Recent advances in machine learning towards multiscale soft materials design. Curr. Opin. Chem. Eng. 23， 106–114 (2019).

12. Li， Z. et [[铝合金|al]]. AI energized [[水凝胶|hydrogel]] design, optimization and application in biomedicine. Mater. Today Bio 25， 101014 (2024).

13. McDonald， S. M. et [[铝合金|al]]. Applied machine learning as a driver for polymeric biomaterial design. Nat. Commun. 14， 4838 (2023).

14. Gormley， A. J. & Webb， M. A. Machine learning in combinatorial polymer chemistry. Nat Rev. Mater. 6， 642–644 (2021).

15. Ferguson， A. L. Machine learning and data science in soft materials engineering. J. Phys Condens. Matter 30， 043002 (2018).

16. Fan， H. L. & Gong， J. P. Bioinspired underwater adhesives. Adv. Mater. 33， 2102983 (2021).

17. Narayanan， A.， Dhinojwala， A. & Joy， A. Design principles for creating synthetic underwater adhesives. Chem. Soc. Rev. 50， 13321–13345 (2021).

18. Chen， Y. et [[铝合金|al]]. Bioinspired multiscale wet adhesive surfaces: structures and controlled adhesion. Adv. Funct. Mater. 30， 1905287 (2020).

19. Ruan， Z. et [[铝合金|al]]. Population-based heteropolymer design to mimic protein mixtures. Nature 615， 251–258 (2023).

20. Kim， Y. et [[铝合金|al]]. Designing directional adhesive pillars using deep learning-based optimization 3D printing, and testing. Mech. Mater. 185， 104778 (2023).

21. Boesel， L. F.， Greiner， C.， Arzt， E. & del Campo， A. Gecko-inspired surfaces: a path to strong and reversible dry adhesives. Adv. Mater. 22， 2125–2137 (2010).

22. Lee， B. P.， Messersmith， P. B.， Israelachvili， J. N. & Waite， J. H. Mussel-inspired adhesives and coatings. Annu. Rev. Mater. Res. 41， 99–132 (2011).

23. Sievers， F. & Higgins， D. G. [[Clustal Omega]] for making accurate alignments of many protein sequences. Protein Sci. 27， 135–145 (2018).

24. Porebski， B. T. & Buckle， A. M. Consensus protein design. Protein Eng. Des. Sel. 29， 245–251 (2016).

25. Chang， M. P.， Huang， W. & Mai， D. J. Monomer-scale design of functional protein polymers using consensus repeat sequences. J. Polym. Sci. 59， 2644–2664 (2021).

26. Jacob， J.， Duclohier， H. & Cafiso， D. S. The role of proline and glycine in determining the backbone flexibility of a channel-forming peptide. Biophys. J. 76， 1367–1376 (1999).

27. Fan， H. L. et [[铝合金|al]]. Adjacent cationic-aromatic sequences yield strong electrostatic adhesion of [[水凝胶|hydrogels]] in seawater. Nat. Commun. 10， 5127 (2019).

28. Panganiban， B. et [[铝合金|al]]. Random heteropolymers preserve protein function in foreign environments. Science 359， 1239–1243 (2018).

29. Jiang, T. et al. Single-chain heteropolymers transport protons selectively and rapidly. Nature 577， 216–220 (2020).

30. Smith， A. A. A.， Hall， A.， Wu, V. & Xu， T. Practical prediction of heteropolymer composition and drift. ACS Macro Lett. 8, 36–40 (2019).

31. Kendall， M. G. Rank and product-moment correlation. Biometrika 36, 177–193 (1949).

32. Myers， R. H.， Montgomery， D. C. & Anderson-Cook， C. M. Response Surface Methodology: Process and Product Optimization Using Designed Experiments ([[Wiley]], 2016).

33. Hutter， F.， Hoos， H. H. & Leyton-Brown， K. Sequential model-based optimization for general algorithm configuration. In Proc. International Conference on Learning and Intelligent Optimization 507–523 (Springer)

34. Geurts， P.， Ernst， D. & Wehenkel， L. Extremely randomized trees. Mach. Learn. 63， 3–42 (2006).

35. Friedman， J. H. Greedy function approximation: a gradient boosting machine. Ann. Stat. 29， 1189–1232 (2001).

36. Ginsbourger, D.、Le Riche, R. 和 Carraro, L. 基于高斯过程的确定性并行全局优化多点准则。见《昂贵优化问题中的计算智能会议录》（Tenne Y. 和 Goh C. K. 编）131–162（Springer，2010）。

37. González, J.、Dai, Z.、Hennig, P. 和 Lawrence, N. 通过[[局部惩罚]]实现批量[[贝叶斯优化]]。见《人工智能与统计学会议录》648–657（PMLR，2016）

38. McInnes, L.、Healy, J.、Saul, N. 和 Großberger, L. [[均匀流形近似与投影|UMAP]]：均匀流形近似与投影。J. Open Source Softw. 3, 861（2018）

39. Lundberg, S. M. 等。用于预防手术期间低氧血症的可解释机器学习预测。Nat. Biomed. Eng. 2, 749–760（2018）。

40. Fan, H. L.、Cai, Y. R. 和 Gong, J. P. 通过调控阳离子-芳香族单体序列轻松调节水凝胶性能。Sci. China Chem. 64, 1560–1568（2021）。

41. Jin, Z. P. 等。利用水溶性聚合物作为栓塞剂，通过静电相互作用将血液胶合成凝胶。Proc. Natl Acad. Sci. USA 119, e2206685119（2022）。

42. Ou, X. 等。贻贝黏附蛋白的结构与序列特征赋予其耐盐黏附能力。Sci. Adv. 6, eabb7620（2020）。

43. Chang, H. 等。具有拓扑增强阳离子−π相互作用的短序列超黏附肽。Chem. Mater. 33, 5168–5176（2021）。

44. Creton, C. 和 Ciccotti, M. 软材料的断裂与黏附：综述。Rep. Prog. Phys 79, 046601（2016）。

出版商注 [[Springer Nature]] 对已出版地图中的管辖权主张及机构隶属关系保持中立。

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/77804bc1dd746f6e5cca59143bf61f7f0e3c3617ded243cf55c251ba30a63044.jpg>)

开放获取 本文根据[[知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议]]授权，该协议允许以任何媒介或格式进行任何非商业性使用、共享、分发和复制，前提是您适当注明原作者和来源，提供知识共享许可协议的链接，并说明是否对许可材料进行了修改。根据本许可协议，您无权共享改编自本文或其部分内容的材料。本文中的图像或其他第三方材料包含在本文的知识共享许可协议中，除非在材料的署名行中另有说明。如果材料未包含在本文的知识共享许可协议中，并且您的预期使用不受法律法规允许或超出许可使用范围，则需要直接获得版权持有人的许可。如需查看本许可协议的副本，请访问 http://creativecommons.org/licenses/by-nc-nd/4.0/。

© 作者 202

## 方法

## [[水凝胶制备]]

所有[[共聚物凝胶]]均通过[[单体]]与[[化学交联剂]]的[[一步自由基共聚合]]合成。[[交联剂浓度]]固定为相对于总单体含量的 0.1 mol%，以平衡[[凝胶]]的[[弹性]]与[[可变形性]]<sup>27</sup>。使用含有由 [[数据挖掘|DM]] 和 [[机器学习|ML]] 推导组成的[[功能单体]]（总浓度 2.4 M）的 [[DMSO]] 溶液（见补充表 2 和 7），以及化学[[交联剂]]（[[甘油 1,3-二甘油酸二丙烯酸酯]]，2.4 mM）和[[紫外引发剂]]（[[2-氧代戊二酸]]，6 mM）。例如，制备 [[G-max]] 凝胶时，将 1.819 g [[BA]]、0.413 g HEA、0.264 g CBEA、0.561 g [[ATAC]]、0.441 g [[PEA]]、8.4 mg 甘油 1,3-二甘油酸二丙烯酸酯和 8.8 mg 2-氧代戊二酸加入 10 ml 容量瓶中，随后用 [[二甲亚砜|DMSO]] 定容至 10 ml。前驱体溶液转移至[[手套箱]]中去除氧气，倒入反应池（两块 10 cm × 10 cm [[玻璃板]]，间距 0.5 mm），用波长 365 nm、强度 4 mW cm<sup>−2</sup> 的[[紫外光]]照射 8 h 以形成凝胶（补充图 9a）。紫外照射后，经 [[核磁共振|NMR]] 确证超过 99% 的单体转化为聚合物（补充图 9b）。

随后将所得[[有机凝胶]]浸入[[生理盐水]]（0.154 M NaCl）中，以去除溶剂和残留化学物质，每 12 h 更换一次生理盐水，持续至少 2 周直至达到[[溶胀平衡]]。[[仿生水凝胶|水凝胶]]在使用前储存于生理盐水中。

## [[水下粘附表征]]

[[粘性测试]]使用配备 [[Trapezium X]] 软件的 [[SHIMADZU]] 试验机（[[Autograph AG-X]]）进行。处于[[溶胀平衡]]状态的[[仿生水凝胶|水凝胶]]（厚度 0.3–0.8 mm）通过[[氰基丙烯酸酯]]粘合剂（[[强力胶]]）粘附于探头上。为快速筛选，将训练轮次中由 [[数据挖掘|DM]] 驱动的[[水凝胶]]以及三个优化轮次中由 [[机器学习|ML]] 驱动的[[水凝胶制备]]为直径 15 mm 的样品。对于详细粘附研究，使用直径 10 mm 的样品，以避免超出仪器量程。该直径变化不影响[[粘附强度]]结果。随后将带有水[[凝胶]]的探头浸入测试溶液（例如[[生理盐水]]）中 5 min 以达到平衡。探头以 1 mm min<sup>−1</sup> 的速度下降至基底，直至施加 10 N [[加载力]]，保持 10 s 后以 10 mm min<sup>−1</sup> 的速度撤回（补充图 10）。除非另有说明，这些测试条件用作标准方案。对于重复粘附测试，水凝胶在循环之间于水下静置 5 min，[[玻璃]]基底每 100 次测试更换一次。对于长时间附着–脱离循环（扩展数据图 8），采用 5 N 加载力和 10 s [[接触时间]]，以尽量减少凝胶疲劳。每个样品至少测试三次。对于水凝胶数据集构建，每个样品记录的最高粘附强度报告为 $F _ { \mathrm { a } } ,$，代表特定条件下的最大[[粘附性能]]。

[[搭接剪切]]粘合强度使用[[万能试验机]]（UTM，[[INSTRON 5965]]）测量。将处于[[溶胀平衡]]的[[仿生水凝胶|水凝胶]]（直径 10 mm，面积 A = 78.5 mm<sup>2</sup>）夹在两片[[玻璃]]载片之间，在[[生理盐水]]中以 20 N 压紧 1 min。以 50 mm min<sup>−1</sup> 施加[[剪切载荷]]。剪切粘合强度（F）按 $F _ { \mathrm { a } } { = } F _ { \mathrm { m a x } } / A$ 计算，其中 $F _ { \mathrm { m a x } }$ 为最大[[加载力]]。对于粘附[[耐久性]]测试（补充图 15），夹层组件在测试前于生理盐水中储存不同时间。

[[界面韧性]]通过 [[INSTRON 5965]] 的 [[180° 剥离试验]]测量。将[[仿生水凝胶|水凝胶]]条（10 mm × 150 mm）在[[生理盐水]]中用轻微手指压力粘附到[[玻璃基材]]上，然后用 2 kg 手辊在每个方向滚压 1 min，以确保均匀接触。[[聚对苯二甲酸乙二醇酯]]（[[PET]]）薄膜（厚度 50 μm）作为刚性背衬。剥离试验以 50 mm min<sup>−1</sup> 进行。界面[[韧性]] $( G _ { \mathrm { c } } )$ 按 $G _ { \mathrm { c } } = 2 F _ { \mathrm { c } } / w$ 计算，其中 $F _ { \mathrm { c } }$ 为平台力，w 为样品宽度（10 mm）。

## [[粘附蛋白]]的 [[数据挖掘|DM]]

从 [[NCBI]] 蛋白数据库汇编了一个全面的[[粘附蛋白]]数据集，使用“adhesive proteins”作为查询关键词。共收集了来自 3,822 种不同生物（[[细菌]]、[[病毒]]、[[真核生物]]和动物）的 24,707 条蛋白序列，未进行额外数据清洗。根据分类学注释，按物种对蛋白进行分组，并为每个物种生成一致性序列，以捕捉共同序列模式并减少个体变异的影响。

该数据集包含 3,111 个物种，注意由于分类学重叠，蛋白计数之和不等于 24,707。为进行稳健分析，选择按每个物种鉴定到的不同蛋白数量排序的前 200 个物种进行进一步研究。

使用 [[BioPython]]<sup>46</sup> 中的 [[Bio.SeqIO]] 接口将蛋白序列导出为 [[FASTA 格式]]<sup>45</sup>。使用 [[Clustal Omega]]<sup>23</sup> 计算一致性序列，该工具通过从两两比对生成距离矩阵、基于[[进化]]关系构建引导树，并逐步从最近到最远比对序列来执行[[多序列比对]]。所得比对确定每个位置出现频率最高的残基，从而产生突出[[保守区域]]的一致性序列。

[[Clustal Omega]] 使用以下命令执行：

$$
. / c l u s t a l o - i \text {   "input\_file"   --outfmt = clu - o   "output\_aln\_file"   -v }
$$

其中“input\_file”和“output\_aln\_file”分别表示输入蛋白序列和输出一致性序列。生成的 200 条一致性序列用于后续序列分析和[[仿生水凝胶|水凝胶]]配方设计。

## [[机器学习|ML]] 方法

使用六维[[特征向量]] $\phi _ { i } = [ \phi _ { \mathrm { B A } } , \phi _ { \mathrm { H E A } } , \phi _ { \mathrm { C B E A } } , \phi _ { \mathrm { A T A C } } , \phi _ { \mathrm { A A m } } , \phi _ { \mathrm { P E A } } ] ,$ 表示[[仿生水凝胶|水凝胶]]中的[[单体]]比例。目标变量为粘合强度，${ , F _ { \mathrm { a } } } { . }$ 为对 ϕ 与 $F _ { \mathrm { a } } ,$ 之间的关系进行建模，我们探索了线性和非线性 [[机器学习|ML]] 模型（补充表 5 和 6）。

线性模型包括最小绝对收缩与选择算子回归（[[Lasso]]）和[[岭回归]]（Ridge）。非线性模型包括 [[k 近邻]]（KNN）、[[核岭回归]]（KRR）、[[支持向量回归]]（SVR）、[[随机森林回归]]（RFR）、基于 [[XGBoost]] 的梯度提升回归（XGB）、[[极端随机树回归]]（[[极端随机树|ETR]]）以及使用 [[Matérn 核]]的[[高斯过程]]（GP）<sup>32,34</sup>。这些非线性模型涵盖了非参数方法（KNN）、基于核的方法（KRR、SVR 和 GP）以及树集成方法（RFR、XGB 和 ETR），从而能够进行全面比较<sup>34,35,47</sup>。

XGB 的版本为 v.1.6.2，而其他模型均使用 [[Scikit-learn]]（v.1.0.2）和 [[Scikit-optimize]]（v.0.9.0）实现。超参数 n\_estimators 使用 [[Optuna]]<sup>48</sup> 进行调优，其余超参数则通过[[网格搜索]]进行优化（补充表 6）。采用 [[10 折交叉验证]]策略，以[[均方根误差]]（RMSE）作为指标，评估模型在包含 180 种[[仿生水凝胶|水凝胶]]的数据集上的预测性能。在 90%/10% 训练/测试划分下，[[高斯过程|GP]] 和 [[随机森林回归|RFR]] 的训练-测试误差 RMSE 最低（扩展数据图 4），分别成为表现最优和次优的模型，并随后被用作基础（代理）模型。

为了进行外推预测，我们尝试了三类方法。1. 仅利用的[[枚举]]方法：

• [[高斯过程|GP]]\_enu：使用拟合的 GP 模型在输入空间中进行随机采样。

• [[随机森林回归|RFR]]\_enu：使用拟合的 RFR 模型在输入空间中进行随机采样。

• 针对每种[[单体]]，从[[均匀分布]] [0, 1.0) 中生成一千万个 $\phi _ { i }$ 向量，并归一化至总和为 1.0。根据每个模型预测的 F 值排序，选取前五个向量进行实验验证。

## 2. 批量[[贝叶斯优化]]（BO）：

• [[高斯过程|GP]]\_KB：使用 GP 预测值作为假设值，以选择使 [[期望改进|EI]] 最大化的下一批数据点。

• [[高斯过程|GP]]\_CLmax：使用训练集中的最大 F（y\_max）作为假设值，以选择具有最大 [[期望改进|EI]] 的下一批数据点。

• [[高斯过程|GP]]\_CLmin：使用最小 F（y\_min）来选择具有最大 [[期望改进|EI]] 的下一批数据点。

• [[高斯过程|GP]]\_LP：在 [[期望改进|EI]] 计算中加入[[局部惩罚]]项<sup>37</sup>。

• [[高斯过程|GP]]\_KB、GP\_CLmax 和 GP\_CLmin 通过将 GP 预测值用作假设值来选择具有最大 [[期望改进|EI]] 的下一批数据点，从而简化了联合 q-EI 概率计算<sup>36</sup>。批量大小选择为 q = 10。

3. 批量序贯基于模型的优化（[[SMBO]]）：

• [[高斯过程|GP]]-[[随机森林回归|RFR]]：以 GP 作为假设值提供者，以 RFR 作为 [[期望改进|EI]] 最大化器。

• [[随机森林回归|RFR]]-RFR：以 RFR 同时作为假设值提供者和 [[期望改进|EI]] 最大化器。

• [[RFR-GP]]：以 [[随机森林回归|RFR]] 作为假设值提供者，以 [[高斯过程|GP]] 作为 [[期望改进|EI]] 最大化器。

• [[RFR-GP]]\*：带[[热启动]]的 [[随机森林回归|RFR]]-[[高斯过程|GP]]，将 10 个由 RFR 生成的点加入真实数据集用于 GP 回归。

• [[随机森林回归|RFR]]-[[极端随机树|ETR]]：以 RFR 作为假设值提供者，以 [[极端随机树回归|ETR]] 作为 [[期望改进|EI]] 最大化器。

• [[随机森林回归|RFR]]-GBM：以 RFR 作为假设值提供者，以 GBM 作为 [[期望改进|EI]] 最大化器。

• [[SMBO]] 在探索有前景的数据点的同时迭代更新[[代理模型]]<sup>33</sup>。当 [[高斯过程|GP]] 和 [[随机森林回归|RFR]] 用作假设值提供者时，能够平衡利用与探索，而 GP\_CLmax 和 GP\_CLmin 则分别更侧重于利用和探索<sup>49</sup>。

[[SMBO]]（补充算法 1）由四个部分组成：真实函数（f）、全局域（X）、[[采集函数]]（S）和[[代理模型]]（M）。初始训练数据（D）从 X 中采样，并获得实验 F 值（第 1 行）。代理模型 M 对 D 进行拟合（第 3 行），S（[[期望改进|EI]]）基于预测不确定性确定下一个数据点（第 4 行）。该数据点随后通过实验验证（第 5 行），更新 D（第 6 行），并进行 T 次迭代（第 2 行）。

[[期望改进|EI]] 量化了期望改进，即 ∫ y y p y y( − \*) ( )d<sup>∞</sup> ，相对于 <sup>\*</sup>当前最佳目标值（y\*）。由于[[水凝胶制备]]耗时较长（每次约需 2 周），[[高斯过程|GP]] 和 [[随机森林回归|RFR]] 被用作假设值提供者，从而能够在每次迭代中最大化联合 q-EI 概率，而无需进行新的实验。EI 最大化器（GP、RFR、[[极端随机树|ETR]] 和 GBM）使用了来自 [[Scikit-optimize]]（v.0.9.0）的超参数。

对于以 [[高斯过程|GP]] 作为 [[期望改进|EI]] 最大化器的情况，每次迭代执行 20 次有限内存 Broyden–Fletcher–Goldfarb–Shannon（[[L-BFGS-B]]）算法<sup>50</sup>（共 40 次迭代），以识别具有最高 EI 的点，并更新 GP 先验。对于其他三个 EI 最大化器（[[随机森林回归|RFR]]、[[极端随机树|ETR]] 和 GBM），每次迭代随机采样 10,000 个点，因为数值优化更适合缺乏梯度信息的树集成模型。[[SMBO]] 对每个 EI 最大化器运行 40 次迭代，在每次迭代中选择两组各 10 个数据点：按 EI 值排序的前 10 个（批量大小 q = 10），以及按预测 F 值排序的前 10 个用于实验验证。这两组可能重叠，数据点总数可能少于 20。

对于 [[贝叶斯优化|BO]] 方法（[[高斯过程|GP]]\_KB、GP\_CLmax、GP\_CLmin 和 GP\_LP），流程类似，不同之处在于假设值提供者要么是 GP 本身（GP\_KB 和 GP\_LP），要么是常数值（GP\_CLmax 的 y\_max 和 GP\_CLmin 的 y\_min）。

第一轮之后，109 个经验证的点将数据集扩展到 289 个[[仿生水凝胶|水凝胶]]。第二轮和第三轮分别新增 27 个和 25 个点，最终数据集包含 341 个[[水凝胶]]。

## [[数据可用性]]

评估本文结论所需的所有数据均可在论文和/或补充信息中找到。支持本研究结果的数据可在 [[GitHub]] 上获取（https:// github.com/sheng-hu/[[水凝胶|hydrogels]]）。

## [[代码可用性]]

支持本研究结果的[[机器学习]]算法和 [[Python]] 代码可在 [[GitHub]] 上获取（https://github.com/sheng-hu/ [[水凝胶|hydrogels]]）。

45. Pearson, W. R. Finding protein and nucleotide similarities with FASTA. Curr. Protoc. Bioinformatics 53, 3.9.1–3.9.25 (2016).

46. Cock, P. J. A. et al. Biopython: freely available Python tools for computational molecula biology and bioinformatics. Bioinformatics 25, 1422–1423 (2009).

47. Jones, D. R., Schonlau, M. & Welch, W. J. Efficient global optimization of expensive black-box functions. J. Glob. Optim. 13, 455–492 (1998).

48. Akiba, T., Sano, S., Yanase, T., Ohta, T. & Koyama, M. Optuna: a next-generation hyperparameter optimization framework. In Proc. 25th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining 2623–2631 (Association for Computing Machinery, 2019).

49. Chevalier, C. & Ginsbourger, D. Fast computation of the multi-points expected improvement with applications in batch selection. In Proc. Learning and Intelligent Optimization (eds Nicosia, G. & Pardalos, P.) 59–69 (Springer, 2013).

50. Zhu, C., Byrd, R. H., Lu, P. & Nocedal, J. Algorithm 778: L-BFGS-B: Fortran subroutines for large-scale bound-constrained optimization. ACM Trans. Math. Softw. 23, 550–560 (1997).

致谢 本研究得到日本学术振兴会（JSPS）科研费资助（JP21K17745、JP21K14676、JP22K21342、JP22H04968 及 JP24K17728）。化学反应设计与发现研究所（WPI-ICReDD）由日本文部科学省（MEXT）世界顶级国际研究基地计划（WPI）设立。我们感谢 Y. Katsuyama 为实验装置准备所提供的帮助，以及 MT AquaPolymer 和大阪有机化学工业株式会社提供[[单体]]。

作者贡献 H.F.、S.H.、H.L.、W.L.、I.T. 和 J.P.G. 提出了本文的研究思路。S.H. 和 H.F. 完成了 [[数据挖掘|DM]]。H.L.、H.F. 和 J.P.G. 设计了实验。H.L. 和 H.F. 实施了实验。S.H. 和 I.T. 设计了[[机器学习]]策略。S.H. 实现了机器学习。W.L. 进行了模拟计算。L.W. 和 S.T. 完成了生物实验。H.L.、H.F.、S.H.、W.L.、H.Y. 和 J.P.G. 参与了数据整理、分析和论文撰写，并纳入全体作者的意见。I.T.、H.F. 和 J.P.G. 为这项研究提供了监督指导和资源保障。所有作者均参与了结果讨论并对最终论文作出贡献。

利益冲突 H.L.、S.H.、I.T.、W.L.、H.F. 和 J.P.G. 为由北海道大学提交的专利申请（2024-134812）的发明人，该专利题为“无规共聚物与粘合剂”，涵盖本研究中水下粘合材料的组成。

## 补充信息

补充信息 在线版本包含补充材料，可访问 https://doi.org/10.1038/s41586-025-09269-4.

通讯与材料索取请求应联系 [[Ichigaku Takigawa]]、[[Wei Li]]、[[Hailong Fan]] 或 [[Jian Ping Gong]]。

[[同行评审]]信息 Nature 感谢 Laura Russo 及另一位匿名审稿人对本工作同行评审所作的贡献。同行评审报告可获取。转载与许可信息可访问 http://www.nature.com/reprints

MNRIYSLRYSAVARGFIAVSEMXXXXXXXXXXXXXXXXXXXXXXXLJSXXXXXXXXAXEXNXXXGXXXXXXFAXXXGXXXXXXXXXXXYXXXGXXXXXXXXXAMPDFSAVDSEIGVATLXXGQYXXDVXVNGXXXXXSXGXXXNRAXLXIXXXXPXLSXXXXXXXXXXXXXXXXXXXXXXXXAXMSEYMKNEILEFLNRHNGGKTAEIAEALXXXXXPXXGAXXLXXXXXXAVTDYOARYYLLLLEKXGXVXXXXXXXXXXXXXGLXLDYXXXXXXXXXXXXGDORSPXX>XXXXLTLRRGMATYWXLKGEXQAGQXCSSXXTTXXXIPLDMXXXXXXXXXXXXXXFXXXXXXXXTWXXXSSXXXXXXTQGTTTYAMHGQQGNDLNAGKNLIFOGONGOXXLXXAIXXXXXXLTLGXNXXXXTXXFXXWXXXGXXLXSXXXXXXXXXXGXXXXXXXKIXLGTLXXXXTGXXXGXXXXXXXRVVVXXXXXXXXIXEXXXXXXEXXXPXXXXXAEXXXXXXXXXXXXXXLALLVNEMPGXXWDVXXXXGXIXNXXXRYXXXQXNHKSXXNXXXXXPXXXXXXXQXXXXXXXXXQXXXXXXXXXXXXXXXXXXXXXXXXXXXLXYEKEGLTNXXXXXXXXXGXXXXXXXXNMSLRKLLTLFIVSXXXXXXXXXLMALGTTSSXXXXXXXXXXXXXXDMVVXXXXXPPDLPVGSVILTRXWXXXXPGGASXYSLGXVNSYXXXXGXXNKIXXVVITQRPQFITSWRPGDXXGXXSASXXIATVTWNOCNGPXFADGSWAYYREYIAWVVFPKKVMTXNGYPLFIEVHNKGXXXXXXXXXCPXXXXXXXXXXXXXXXXXKXYXXXERAFDNGXXADNVNSLAAVKSGXKAKRAQRPAXXXXGKXXXXXSYXXXXXXXPXXEXKXXXXXXXLQIALXVAXXXXYXXXXXXXXXXXXXXXXXGXXXXXXXXSXXXXIXXXXRNTTPXXXXXXFXXXXXCXVXAXXXXXXXXXXXXXGXXIXXXXXXXXXXXXXXXXTYSHGKKFSVGLXXGWDSIVXXXGXLVDVXDPLQFNXXYTXGXLXXOXXPXXXXRXETRYITXXXXXRXYXXGTONLTIGSRLYGXXXXXXXGXIESSKIOPGVLSGXXXXXXMIXPLTXXXXXXXXXXXXXXXXXXXXXXXQGXGEXXADXXPXPXXXXXXXXXXXXXXXXRHNGXIXXXMPXX

b  
![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/ed7dd0ebf0fbc8f1eaabba395a3fc0210ac67353cb8f0a68386a3246b76fc6bf.jpg>)

<table><tr><td>功能类别</td><td>计数数量 ${N}_{i} = \mathop{\sum }\limits_{j}\left( {{n}_{ij} + {n}_{ji}}\right)$ </td><td>相对组成 ${\phi }_{i} = {N}_{i}/\mathop{\sum }\limits_{i}{N}_{i}$ </td></tr><tr><td>疏水性</td><td>308</td><td>0.621</td></tr><tr><td>亲核性</td><td>61</td><td>0.123</td></tr><tr><td>酸性</td><td>46</td><td>0.093</td></tr><tr><td>芳香性</td><td>44</td><td>0.089</td></tr><tr><td>阳离子型</td><td>37</td><td>0.074</td></tr><tr><td>酰胺</td><td>0</td><td>0</td></tr></table>

扩展数据 图 1 | [[肠杆菌科]][[粘附蛋白]]的序列分析。(a) 共有序列片段。(b) 共有序列片段内的成对功能类别计数。排名前 200 个物种的完整数据见补充数据 1 和补充数据 2。

基于[[粘附蛋白]]的 [[数据挖掘|DM]] 驱动[[仿生水凝胶|水凝胶]]  
a  
![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/cd89fc2a059dccce3da1539a994d71b6ad5f54d317698f26a57df39ad12567d8.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/e59212a67c7fa0299cdea38cf964b5506ec85828cba6c85240b38af588ddc99a.jpg>)  
扩展数据 图 2 | 基于[[节肢弹性蛋白]]数据库的[[数据挖掘]]驱动[[仿生水凝胶|水凝胶]]。(a) 来自数据挖掘（DM）的[[粘附蛋白]]和节肢[[弹性]]蛋白编码共有序列中 21 种功能类别对类型的成对频率分布。节肢弹性蛋白数据集包含 2,537 个[[蛋白质]]，来源于 [[NCBI 蛋白质数据库]]，关键词为“resilin”。(b) 源自粘附蛋白和节肢弹性蛋白数据库的配方中的平均[[单体]]比例。(c) 源自节肢弹性蛋白数据库的 DM 驱动[[水凝胶]]的[[粘附强度]] $( F _ { a } )$ 。星号表示显著[[凝胶]]收缩  
d

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/06e113dfeb5d110823387fbda1632c669c3c651696006ed77f5cee68eceefb3f.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/067d6d1dffa5aa8d7e29ca381ca8633f71288bc7b5df6ea46ab93d32619d7c8a.jpg>)  
基于[[节肢弹性蛋白]]的 [[数据挖掘|DM]] 驱动[[仿生水凝胶|水凝胶]]

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/d8d6a1845b6eaa7d8b4b3d3a3f25648efef8a054a111b3165561e0ca1efa9ea5.jpg>)  
发生在溶剂交换过程中，使这些样品的粘附测试不可行。详细配方见补充表 7。粘附测试在[[玻璃]]基底上于[[生理盐水]]中进行，采用[[粘性测试]]，[[加载力]]为 10 N，[[接触时间]]为 10 秒，与用于源自[[粘附蛋白]]的 [[数据挖掘|DM]] 驱动[[仿生水凝胶|水凝胶]]的条件一致。误差棒表示 N = 3 次测量的[[标准差]]。(d) 源自粘附蛋白和[[节肢弹性蛋白]]数据库的 DM 驱动[[水凝胶]]之间平均 $F _ { a }$ 的比较。

## 文章

a  
![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/8898cd9968c7c5f595f66df1e65ed7bb2ff37a99890c9799b847a5e01ee98fd1.jpg>)  
b

d  
![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/719433f734cb6fcfd63745f3130930acbf42c4a496de5a6445173895c445c129.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/8425dc865cddc1169655abcd1f110d3e95c765ea6902381a1addf5372c2f8982.jpg>)  
扩展数据 图 3 | 180 种[[仿生水凝胶]][[粘附强度]]（F）与性能之间相关性的分析。(a) [[单体]]比例（ϕ）与 $F _ { a } ,$ 之间的相关性，通过 [[Kendall τ 系数]]表示。这些系数表明 $\phi _ { \mathrm { B A ^ { \prime } } } \phi _ { \mathrm { A T A C ^ { \prime } } }$ 和 $\phi _ { \mathrm { P E A } }$ 与 $F _ { a } ,$ 呈弱正相关，而 $\theta _ { \mathrm { \mathbf { A E A } } } , \phi _ { \mathrm { \mathbf { A A m } } }$ 和 ϕ $\boldsymbol { \mathbf { \rho } } _ { \mathrm { C B E A } }$ 呈弱负相关。(b) 示例说明了由于不同单体的协同效应，$\phi _ { i }$ 与 $F _ { a } ,$ 之间的复杂相互作用。将 G-074 与 [[G-001]] 进行比较，$\phi _ { \mathrm { B A } } \mathrm { i } s$ 大致相同，$\phi _ { \mathrm { H E A } }$ 和 $\phi _ { \mathrm { C B E A } }$ 增加，而 $\phi _ { \mathrm { A T A C } }$ 减少。尽管 Kendall τ 系数表明 G-074 的 $F _ { a }$ 应当低于 G-001，但 G-074 的实际 $F _ { a }$ 约高出五倍。(c) 以 G-042 [[水凝胶]]为例，[[储能模量]]（G′）和[[损耗模量]]（G″）对[[角频率]]的依赖性。G′ 的斜率（k）由线性

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/53cf3833537a3bf146cc78569e69abb5884e94917d1aae74c90687d52eb724a9.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/e75b68ba4a11fdd1e2e628664824c295e51cf4fae8b992456e0859567f60fa17.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/94fb74dfb209615935f4795c3561e847e2a102130195bc512ef9ef4b2a9f6fe1.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/ef261e4531aab2e0db43dd23007fd5fca761e418bdd43fb3d66764a0f4dfb442.jpg>)  
连接0.1和100 rad s<sup>−1</sup>频率下的[[储能模量|G′]]值。斜率越大表明[[仿生水凝胶|水凝胶]]的[[粘弹性]]越强。(d) F作为180种仿生[[水凝胶]]网络性质的函数。Q、G′、Tan $\delta = G ^ { \prime \prime } / G ^ { \prime }$ 和k分别表示[[体积溶胀比]]、频率为 $1 0 ^ { 0 }$ rad s<sup>−1</sup>时的储能模量、频率为 $\mathrm { \dot { \ m } } ^ { 0 }$ rad $\mathbf { s } ^ { - 1 } ,$ 时的[[损耗因子]]，以及G′曲线的斜率。这些结果表明，具有收缩行为（Q < 1）、中等G′、高Tan δ和中等k的水[[凝胶]]往往表现出更高的 ${ \cdot } F _ { a }$ 值。所有表征均在[[生理盐水]]（0.154 M NaCl）中平衡的凝胶上进行。粘附测试采用[[粘性测试|粘性测试法]]，在[[玻璃]]基板上施加10 N[[加载力]]和10 s[[接触时间]]，以实现快速筛选并确保整个数据集的一致比较。

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/e7c2c397dbabdffc17ce53ef4977dc0e2d0d7eb8e37c5ed13767595ef40c5596.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/6d3f5746a9e8486168fb997d646d6228dd540c51098821bc2f0ad73d2cd5d6d7.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/53b7803e83b2a869e05fbb86fdf6d370c0ce0ddadb59ad8f8682412b512c6a3f.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/7f8ebcd3bcc733865a50062d0f823f4601ded544d96f519fcecd4144f9d88c11.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/c100bdd8645aa9a58510fb35e91d4cf85b844cdeb3c1106526008a80668a04d7.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/eb6793c59967837df82fb6bd01f2ace9c9eabb55229eea28ae690fc38a77ba4c.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/7b5caa46492b7f910bb7f5ed47f00fd934571edaf2c92b62d4f5895f61f306ea.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/3b419293f9607b55c8ec9d170935ba9474e21976dd6513a30bdc820537d62555.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/639e0f6d91c9821bf963d8deb79d9d608b02d86aad5cd531d0c07237288db540.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/db1a32e60d3cc27e1b8eed223f216706216a40c23e869e25e4d698612dd209e8.jpg>)  
扩展数据图4 | 图题见下一页。

## 文章

扩展数据图4 | [[机器学习]]（ML）训练模型。(a) 使用90%/10%[[训练-测试划分]]的九种ML模型的误差图。训练数据点以蓝色圆点表示，测试数据点以红色显示。虚线表示预测值与实验数据（真值）完全吻合的位置。(b) [[均方根误差]]（RMSEs）展示了在180种[[仿生水凝胶]]数据集上训练的九种ML模型的预测精度，通过[[10折交叉验证]]进行评估。较低的测试误差，结合最小化的[[过拟合]]（即训练误差与测试误差之间的差距更小），表明回归模型更有效。

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/5d828313c17ad5a1be5fc3ce73e4f7b38be1db027e83794cc794a42cfd74a00f.jpg>)

b  
![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/a576eef97ac0b0171bb17e87a115871a6f6096f6c844ff930860f5cb49d1f015.jpg>)

C  
![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/2189b242f04945e47c5f0fe0ee4c9731bd49fc4b5adfed1030ed03712fe659d0.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/b186fa0d6c9228915832c1ff938a67fbe9f68487fe829cfce4ec8df0e4a18a51.jpg>)  
扩展数据图5 | [[机器学习]]驱动的优化与三轮连续实验验证。(a) 根据[[高斯过程|GP]]\_KB和[[RFR-GP]]模型提出的配方在实验中制备的[[仿生水凝胶|水凝胶]]的[[粘附强度]] $( F _ { a } )$。(b) 性能指标的变化，包括：(i) [[成功率]]（SR），定义为测试集中真实 $F _ { a }$ 高于训练集的比例；(ii) 测试集与训练集之间最大真实 $F _ { a }$ 的比值；以及(iii) 测试集的[[均方根误差]]（RMSEs）。

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/bb3571ddfd63d768f6ba2b97b60631186db898535fe3b555f2a1f44a92352536.jpg>)  
[[成功率]]与 $F _ { a }$ 比值从第一轮到第二轮下降，并在第三轮趋于稳定，表明通过[[SMBO]]向全局最优收敛。同时，[[均方根误差|RMSE]]在三轮中持续下降，表明扩展训练数据集提高了回归模型的准确性。(c) 对比[[机器学习|ML]]预测的 $F _ { a }$ 与真实 $F _ { a } .$ 的[[奇偶图]]。

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/af68e46672b68e1a5627e8701175a951baf6e8812f13ca51acb795633380c5d3.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/8f84c647f18d214436c69d6bb0043ed1c688b3a268b5694f000fefa535841333.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/85786bff31b80bf5f00d4badc643ccc3cd154858918131016f71faa638132242.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/1c3afad706961fe1cf6fb4f26b5fa8cd5368760fc1cb9b69f1af662df9c32503.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/973ce8b97b11a089a05b1126cd52376c1287e85a5516cba5cd7eca0ecd574348.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/3e0c338fc95023e3e395879bb27549e0cfa6f260c1cb4f151b55cbb2c234529d.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/a13f89100fdcacec954f9af147c1f8c04f799098e07b15746d9caf873e4a1d79.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/0cb2ec60e93fdb7b4f2989fad9731bec67ffbefbad47f95512be25a8de5433f7.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/8cfe986886f689704d859219c7532385ff6589ea835afa22db615fcbb8aec275.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/89c4df33083c1a72cd09286c403c212ff3982e0c04b12f94f10a48361da28476.jpg>)  
d

扩展数据图 6 | 来自[[机器学习]]和[[数据挖掘]]方法的性能最优[[仿生水凝胶|水凝胶]]的特性。(a) 在 [[DMSO]] 中，性能最优的机器学习驱动[[凝胶]]（[[R1-max]]、[[R2-max]]、[[R3-max]]）和性能最优的数据挖掘驱动凝胶（[[G-max]]）的[[储能模量]] (G′) 和[[损耗模量]] (G″) 对[[角频率]]的依赖性。(b) 四种[[水凝胶]]在[[生理盐水]]（0.154 M NaCl）中平衡后，G′ 和 G″ 对角频率的依赖性。(c) 四种水凝胶在

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/53ed336f4e067b3a5f2983d3254d414e230572583da6a3a336a912c9a6f3355d.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/b2b2499e8ac746aada1b44409d8b2c10b802d372085578057d6bfb2fbbbcf521.jpg>)  
[[生理盐水]]中相对于其在 [[DMSO]] 中的制备状态平衡后的[[体积溶胀比]] (Q)。(d) [[R1-max]] [[仿生水凝胶|水凝胶]]（在生理盐水中平衡）在有无缺口情况下的纯剪切应力-拉伸比曲线，测试[[拉伸速率]]为 100 mm min<sup>−1</sup>。缺口样品在[[临界拉伸比]] (λ) 为 3.4 时出现裂纹扩展。图中显示了由[[纯剪切试验]]估算的[[断裂能]] (Γ)。实验细节见补充材料。误差棒表示 N = 3 次测量的[[标准差]]。

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/3e5f6b8cbcb78682d045d044cb50e429f1a2ff390ca1bf238e110878875bd045.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/51feaf5c5fcdcd0b523a5fd533b625ba92dee752a1becc246464b56ba534c210.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/b0dd9d102e717034e66811643d18bb53f6fa219c74c9d4a457ada322928f3c0e.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/31a18b53f6680aab2951d4e082b42a0086781c282f0a195809c40884cf8bc4e8.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/2c72151b9dcac75b5b42179143e4e2c0a06995f7dffa81cd6ef344c2e27edfd3.jpg>)  
扩展数据图 7 | 不同[[粘性测试]]条件下[[仿生水凝胶|水凝胶]]的[[粘附强度]] (F)。(a, b) [[G-max]] [[水凝胶]]的[[力-位移曲线]]：(a) 在固定[[加载力]]为 10 N 且[[接触时间]]不同的条件下，以及 (b) 在固定接触时间为 60 s 且加载力不同的条件下。(c, d) [[R1-max]] 水[[凝胶]]的力-位移曲线：(c) 在固定加载力为 10 N 且接触时间不同的条件下，以及 (d) 在固定接触时间为 60 s 且加载力不同的条件下。(e) 图 3e 中表现出高粘附性的 10 个样品在不同加载力和接触时间下测得的 $\mid F _ { a } \mid$。所有粘附测试均在[[生理盐水]]中于[[玻璃]]基底上进行。误差棒表示 N = 3 次测量的[[标准差]]。

## 论文正文

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/984932c730cb7811a27848836564abcc1da07b58e298defef10f0bfbd54bf07d.jpg>)  
扩展数据图 8 | [[R1-max]] [[仿生水凝胶|水凝胶]]的重复粘附。R1-max [[水凝胶]]（直径 10 mm，厚度约 0.4 mm）在[[生理盐水]]中于[[玻璃]]基底上经过 200 次[[附着-脱离循环]]后的粘附稳定性。测试在 5 N [[加载力]]和 10 s [[接触时间]]下进行。

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/6d52d3479c421972fb8a4713695a4f88040dce397f035b13e33d40f709a29256.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/0854cc70a1263b675009665c4fdc1b147275bcf25cf9575abecfd249798f75a8.jpg>)

![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/dfd2b5e138fcf0c3f0cadc18ced6f65af3720c0688171a139b3bc74df0c74590.jpg>)

d  
![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/8d79839b8c43a8c37462f955bcdb1144b01e2352eeb93e49f05338c522790ab1.jpg>)  
扩展数据图 9 | [[R1-max]] [[仿生水凝胶|水凝胶]]在各种基底上的[[粘附性能]]。(a) 用于粘附评估的[[搭接剪切]]和 [[180° 剥离测试]]示意图。(b) R1-max（直径 10 mm，厚度约 0.4 mm）粘附于[[玻璃]]、[[PET]] 和 [[PC]] 基底的搭接剪切测试[[力-位移曲线]]。(c) R1-max（10 mm × 150 mm 条带，厚度约 0.4 mm）粘附于玻璃、[[聚对苯二甲酸乙二醇酯|PET]]、[[聚碳酸酯|PC]] 和[[猪骨]]表面的 180° [[剥离测试]]力-位移曲线。(d) R1-max 在各种基底上的搭接剪切[[粘附强度]]和 180° 剥离

e  
![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/2540e7b0a1011d49fcedea83964ce1d345c425719d097b8fceb3b6c94c91da1d.jpg>)  
[[界面韧性]]。(e) 照片图像（来自不同视角）显示 [[R1-max]]（25 mm × 150 mm 条带，厚度约 0.4 mm）从[[猪骨]]表面被剥离。所有[[仿生水凝胶|水凝胶]]在测试前均在[[生理盐水]]中平衡。误差棒表示 N = 3 次测量的[[标准差]]。实验细节见方法部分。这些结果凸显了 R1-max 在各种表面上的卓越[[粘附性能]]。

a  
b  
![](<../2.SCI_MD/Data-driven de novo design of super-adhesive hydrogels/images/7c15bd232f2582c655047e115648076cac778b95bd2f40d69ff6729e91da7288.jpg>)  
C  
扩展数据图 10 | 数据驱动[[仿生水凝胶|水凝胶]]在实际应用中的展示。(a) [[R1-max]] 将一只[[橡皮鸭]]粘附在[[海边岩石]]上并经受海浪冲击的照片。(b) [[R2-max]]（尺寸为 6 cm × 6 cm，厚度约 0.37 mm）封堵一根 3 米高 [[PC]] 管底部 20 mm 直径孔洞以阻止[[高压漏水]]（孔洞出口处喷流速度约为 5.4 m s<sup>−1</sup>）的照片。(c) 照片显示 (i) R2-max 成功修复了一根装满自来水的 3 米高  
[[聚碳酸酯管]]底部 20 mm 的孔洞；(ii) 在空气中放置超过 5 个月未观察到漏水，[[凝胶]]干燥后变为透明，不透明区域表明水仅渗透至孔洞周围；(iii) 相比之下，商用 [[FLEX TAPE®]] 在相同条件下失效，1.5 小时内即发生漏水。这些发现凸显了 R2-max [[水凝胶]]卓越的[[湿粘附性能]]。