---
title: "zh-Defluorination Mechanisms and Real-Time Dynamics of Per- and Polyfluoroalkyl Substances on Electrified Surfaces Wiki全文"
source_markdown: "2.SCI_MD/Defluorination Mechanisms and Real-Time Dynamics of Per- and Polyfluoroalkyl Substances on Electrified Surfaces/Defluorination Mechanisms and Real-Time Dynamics of Per- and Polyfluoroalkyl Substances on Electrified Surfaces.md"
cn_markdown: "2.SCI_MD/Defluorination Mechanisms and Real-Time Dynamics of Per- and Polyfluoroalkyl Substances on Electrified Surfaces/zh-Defluorination Mechanisms and Real-Time Dynamics of Per- and Polyfluoroalkyl Substances on Electrified Surfaces.md"
type: translated_fulltext_wiki
---
<!-- PaperMDLab-NAV:START -->
> [!info] 论文四向互链（PaperMDLab 自动维护）
> [[2.SCI_MD/Defluorination Mechanisms and Real-Time Dynamics of Per- and Polyfluoroalkyl Substances on Electrified Surfaces/Defluorination Mechanisms and Real-Time Dynamics of Per- and Polyfluoroalkyl Substances on Electrified Surfaces|英文原文]] · [[2.SCI_MD/Defluorination Mechanisms and Real-Time Dynamics of Per- and Polyfluoroalkyl Substances on Electrified Surfaces/zh-Defluorination Mechanisms and Real-Time Dynamics of Per- and Polyfluoroalkyl Substances on Electrified Surfaces|中文译文]] · **中文全文双链（当前）** · [[4.SCI_AI_Summary/summary-zh-Defluorination Mechanisms and Real-Time Dynamics of Per- and Polyfluoroalkyl Substances on Electrified Surfaces|AI中文总结]]
<!-- PaperMDLab-NAV:END -->


# 带电表面上[[全氟和多氟烷基物质]]的[[脱氟]]机制与实时动力学

作为 *[[Environmental Science & Technology Letters]]* 特刊“材料科学与环境适用性”的一部分发表。

[[Kamal Sharkas]] 和 [[Bryan M. Wong]]\*

![](<../2.SCI_MD/Defluorination Mechanisms and Real-Time Dynamics of Per- and Polyfluoroalkyl Substances on Electrified Surfaces/images/e16a517b321efa8097a91cd27cde963659622af2c21273df727b3b56b52b7a4a.jpg>)

引用本文：[[Environmental Science & Technology Letters|Environ. Sci. Technol. Lett.]] 2025, 12, 230−236

![](<../2.SCI_MD/Defluorination Mechanisms and Real-Time Dynamics of Per- and Polyfluoroalkyl Substances on Electrified Surfaces/images/9eba9900cbf264eb28bcc885cd677a4ef8228598d647cedb9d15b7fc1e05f369.jpg>)

在线阅读

访问

指标及更多

文章推荐

\*sı 补充信息

摘要：[[全氟和多氟烷基物质]]（[[PFAS]]）是存在于地下水源和多种消费品中的持久性环境污染物。近年来，[[电化学氧化|电化学方法]]因其高效性和无化学试剂的模块化特性，在降解这些有害污染物方面引起了广泛关注。然而，这些电化学过程发生在开放的、高度非平衡的体系中，对这些有前景技术中 PFAS 降解机制的详细理解仍处于起步阶段。为了从机理上阐明这些复杂过程，我们首次对带电表面上 PFAS 降解进行了[[恒定电极电势]]（[[CEP]]）量子计算。这些先进的 CEP 计算揭示了在[[电化学偏压]]存在下 PFAS 降解过程中发生的复杂电子过程的新机理细节，而这些细节无法从传统[[DFT|密度泛函理论]]计算中获得。我们用大规模[[从头算分子动力学]]模拟对 CEP 计算进行补充，

![](<../2.SCI_MD/Defluorination Mechanisms and Real-Time Dynamics of Per- and Polyfluoroalkyl Substances on Electrified Surfaces/images/f9148e8ba0dafd82dc2b691a3b8661c087fc5bddd80e594ba3e887376a6be775.jpg>)

在[[电化学偏压]]存在下进行，以提供带电表面上 [[PFAS]] 降解的时间尺度。综合来看，我们基于 [[CEP]] 的量子计算为开放电化学体系中 [[全氟和多氟烷基物质|PFAS]] 降解提供了关键的反应机制，可用于预筛选候选材料表面和修复 PFAS 及其他环境污染物的最优电化学条件。

关键词：[[PFAS]]，[[恒定电极电势]]，带电表面，[[脱氟]]，[[DFT|密度泛函理论]]

## 1. 引言

[[全氟和多氟烷基物质]]（[[PFAS]]）是具有强 [[C−F 键]]的合成化合物，这赋予它们优异的化学和热稳定性。由于这种固有的稳定性，PFAS 已被用于多种消费品中，例如包装材料、不粘炊具、防污织物、[[表面活性剂]]和[[消防泡沫]]。<sup>1−4</sup> 由于其广泛使用，PFAS 污染物现已在全球土壤/水源中被检测到，并可在食物链中[[生物累积]]。这些环境污染物的持久性尤其令人担忧，因为即使长期暴露于低浓度水平也与不良健康效应相关。由于其环境持久性和毒性，寻找高效消除这些污染物的方法至关重要。

在用于[[PFAS]]修复的各种[[氧化还原反应|氧化/还原过程]]中<sup>5−11</sup>，[[电化学氧化|电化学方法]]因其高效性和无需化学试剂、具有模块化特性而受到特别关注。<sup>12</sup>在这些电化学过程中，对含有[[全氟和多氟烷基物质|PFAS]]污染物的[[电解]]液施加外部偏压，从而促进电子转移，并随后在电极带电表面上实现PFAS降解。更具体地说，在[[电极-电解质界面]]处，PFAS分子同时与电极表面和溶剂发生相互作用。该界面（根据定义）是一个[[非平衡热力学系统|开放的非平衡热力学系统]]，与周围环境交换物质和能量，并在电极与[[电解质]]之间的电势差驱动下促进电化学反应。由于这些电化学过程本身的复杂性，目前对这些复杂环境中PFAS降解机制的详细理解仍然很少，尚处于起步阶段。<sup>13−16</sup>例如，电极材料的选择、电解质组成/浓度、温度和外部偏压都是可以改变的实验条件，但哪些参数组合对PFAS降解最为有利并不显而易见。此外，由于整个电[[化学系]]统处于外部偏压下，标准形式的常规[[DFT|密度泛函理论]]（[[密度泛函理论|DFT]]）（下文将进一步讨论）无法使用，因为该系统是开放的，并且被驱动到远离平衡的状态。<sup>17</sup>为了从机理上阐明这些电化学诱导过程，我们首次对带电表面上的PFAS降解进行了恒电极电势（[[CEP]]）量子计算。将[[恒定电极电势|CEP]]量子计算应用于电化学诱导的PFAS降解尤其具有新颖性，因为传统DFT方法本质上被限制在固定电子数的情况下，无法捕捉在能够与电极便捷交换电子的真实电化学条件。我们的CEP计算通过修改常规DFT形式体系，允许电子（经由电极电势）自由地供给或移出系统，从而超越了这一限制，能够准确模拟真实的电化学界面。这种方法使我们能够模拟电子的真实[[巨正则热力学系综]]，捕捉在这些电化学系统中支配复杂反应活性的关键[[费米能级]]涨落。我们描述了模拟这些复杂非平衡过程的方法，随后进行了多种分析并给出了实时动力学，以解释电化学诱导降解过程的潜在机理。最后，我们对结果进行了讨论和总结，并对基于CEP的技术在未来[[电化学降解]]PFAS方面的广泛应用提出了进一步展望。

![](<../2.SCI_MD/Defluorination Mechanisms and Real-Time Dynamics of Per- and Polyfluoroalkyl Substances on Electrified Surfaces/images/aba32404244416d1077ee4fce3a021b465bcb2f2cb1f88c0f88608e290cef495.jpg>)

## 2. 方法与材料

我们使用经过本地修改的 [[Vienna Ab initio Simulation Package]]（VASP）<sup>19,20</sup> 代码及 $\mathrm { V A S P s o l } ^ { 2 1 , 2 2 }$ [[隐式溶剂化模型]]，研究了恒定电极电位（[[CEP]]）<sup>18</sup> 下的 [[PFAS]] 降解反应。在 [[恒定电极电势|CEP]] 模型中，对处于隐式[[电解质]]中的整个化学体系，以不同电子数迭代地进行[[DFT|密度泛函理论]]<sup>23,24</sup>（[[密度泛函理论|DFT]]）计算。值得强调的是，这些 CEP 计算超越了传统的正则系综 DFT 形式，因为整个体系是开放的（即[[巨正则热力学系综|巨正则热力学体系]]），体系中的总电子数会被迭代调整，直到[[费米能级]] $E _ { F } ,$ 收敛到所施加的电极电位 U（单位为伏特）。当以下表达式自洽满足时，即得到 CEP 体系的解：

$$
U = \frac {- E _ {F} - \phi_ {\mathrm{SHE}}}{e}\tag{1}
$$

其中 $\phi _ { \mathrm { S H E } } ~ = ~ 4 . 6$ eV 是在 [[VASPsol]] 模型中使用 [[Perdew-Burke-Ernzerhof泛函|Perdew−Burke−Ernzerhof]] $( \mathrm { P B E } ) ^ { 2 . 5 }$ 泛函计算得到的[[标准氢电极]]（SHE）功函数，e 为[[元电荷]]。我们采用 0.01 eV 的[[电解质]]参考[[费米能级]]收敛判据，对式 1 进行自洽求解。

我们研究了[[吸附]]在电极表面上的质子化 [[PFOA]] $\left( \mathrm { C } _ { 7 } \mathrm { F } _ { 1 5 } \mathrm { C O O H } \right)$ 分子，该电极表面采用 4 层 ${ \mathsf { S } } \times { \mathsf { S } } { \mathsf { C u } } ( 1 1 1 )$ 平板模型。我们特别选择 [[Cu(111)]] 表面开展研究，是因为 Cu 是最广泛使用的[[过渡金属催化剂]]之一（因其储量丰富且成本低廉），并且 [[Cu(111)表面|Cu(111)]] 表面在实验和理论研究中都是被研究得最为充分的金属表面之一。<sup>26</sup> 我们还使用更大的平板进行了额外计算，并验证了本工作所用的 ${ \mathsf { S } } \times { \mathsf { S } } { \mathsf { C u } } ( { \mathsf { 1 1 1 } } )$ 平板足够大，能够给出准确结果。[[全氟辛酸|PFOA]] 分子以能量最低的“平躺”构型<sup>27</sup> 吸附在 Cu(111) 表面上，此时碳骨架平面与表面平行。为避免重复[[超胞]]中相邻化学物种之间的虚假相互作用，沿表面法线方向使用了约 25 Å 的真空间距。在下文中，我们将该超胞记为 PFOA/Cu(111)，其具有 1,850 个[[价电子]]。静态（即单点/结构弛豫）和[[分子动力学]]<sup>28</sup> [[DFT]] 模拟均在[[周期性边界条件]]和固定电极电位下，使用[[投影缀加平面波赝势|投影缀加平面波]]（PAW）赝势<sup>29,30</sup> 进行。我们在 [[VASPsol|VASPSol]] 程序包中使用了 3.0 Å 的[[德拜长度]]，这对应于常温条件下由一价阳离子和阴离子组成、浓度为 1 M 的本体[[电解质]]，以及水的[[相对介电常数]] 80。平面波展开采用色散校正的 [[Perdew-Burke-Ernzerhof泛函|PBE]] $\boldsymbol { \mathrm { D } } \boldsymbol { 3 } ^ { 3 1 }$ 泛函，[[截断能]]为 520 eV。PFOA/Cu(111) 的优化结构如图 S1 所示。[[布里渊区]]采用 ${ \texttt { a 2 } } \times { \texttt { 2 } } \times { \texttt { 1 } }$ [[Monkhorst-Pack网格|Monkhorst−Pack]] 网格进行采样；电子能量和力分别收敛至 1 × $1 0 ^ { - 6 } ~ \mathrm { e V }$ 以内和 0.02 eV/Å。模拟过程中，Cu 电极底层被固定在优化的体相结构上。[[从头算分子动力学]]（[[AIMD]]）模拟在 300 K 下使用 [[Nose-Hoover恒温器|Nose-́ Hoover 恒温器]]<sup>32</sup> 进行。

## 3. 结果与讨论

使用图S1中所示的优化[[超胞]]几何结构，我们对若干施加偏压值进行了[[CEP]]离子弛豫和[[AIMD]]计算，以研究带电电极表面上[[PFOA]]的降解动力学。

3.1. 带电电极表面上的[[PFAS]]降解机制。我们探索了相对于[[标准氢电极|SHE]]的宽范围施加阳极（+）/阴极（−）电压（从−3至+3 V），图S2显示了这些[[CEP]]离子弛豫计算得到的[[PFOA]]/[[Cu(111)]][[超胞]]优化结构。图1a绘制了[[全氟辛酸|PFOA]]/[[Cu(111)表面|Cu(111)]]在[[恒定电极电势|CEP]]离子弛豫计算中收敛的总电子数N（左纵轴，空心圆）和[[费米能级]]$E _ { F }$（右纵轴，实心圆）随施加电极电位的变化。在0.0 V时，CEP优化几何（图示于图1a最下方快照）与初始PFOA/Cu(111)几何相比仅有微小结构偏差（见图S1a,b）。然而，当施加+1.0 V时，[[羧基]]（−COOH）平面发生旋转，使羰基氧/羟基分别更靠近/远离表面平面（见图S2b）。该正电压有效地使N减少近3个电子，降至1846.9 e<sup>−</sup>，并使$E _ { F }$下移至−7.8 eV。在+2.0 V电位下，羰基氧与铜表面成键，羟基发生解离。释放出的氢原子随后结合到Cu(111)表面的顶位（见图S2d）。进一步将电位提高至+3.0 V时，可有效地从中性参考体系中移除近17个电子，并触发氢原子迁移至Cu(111)表面的空位（见图S2f）。除该[[去质子化]]反应外，在高达+3.0 V的电位下未发现PFOA的其他降解路径。将电位继续提高会导致CEP计算极难收敛，因为电子耗竭会在周期性胞中产生很大的正电荷，这在物理上是不合理的。我们的发现也与若干实验研究一致，这些研究表明，对于[[全氟和多氟烷基物质|PFAS]]的降解，正施加电压下的氧化过程效率可能低于（负偏压下发生的）还原过程。<sup>13−16</sup>

![](<../2.SCI_MD/Defluorination Mechanisms and Real-Time Dynamics of Per- and Polyfluoroalkyl Substances on Electrified Surfaces/images/da415754d5a309c159627ddbe8221fc9058ae968d225af6a07f313ba08b80110.jpg>)

(a)  
![](<../2.SCI_MD/Defluorination Mechanisms and Real-Time Dynamics of Per- and Polyfluoroalkyl Substances on Electrified Surfaces/images/9dbc3f6c8afe0a5e30b10bc27edb78f6ba7e48c74c44449b7ef6ca06db54bbca.jpg>)  
(b)

1.0  
![](<../2.SCI_MD/Defluorination Mechanisms and Real-Time Dynamics of Per- and Polyfluoroalkyl Substances on Electrified Surfaces/images/f6ed45e4b5453506fef6b58bd20c7f69f0edd54977aa7194a6e2ddf734078661.jpg>)  
(c)  
图1. (a) 总电子数$N _ { e }$（左纵轴，空心圆）和费米能级$E _ { F }$（右纵轴，实心圆）随施加电极电位的变化。面板a中的三个结构描绘了在−3.0、0.0和+3.0 V施加偏压下，由恒电极电位离子弛豫计算获得的PFOA/Cu(111)超胞优化几何。(b和c) 在0.0和−3.0 V施加偏压下，结构优化的$\mathrm { P F O A / C u ( 1 1 \bar { 1 } ) }$超胞中PFOA的Bader电荷分析。PFOA几何与面板a中所示相同。原子上的数字显示其Bader净原子电荷（以e为单位）。为简化可视化，主链F（灰色）原子上的电荷（约−0.6 e）未显示，因为它们在面板b和c之间没有显著差异。原子采用以下配色方案：H为白色，$\mathrm { C } ,$为棕色，O为红色，$\mathrm { F } ,$为灰色，Cu为蓝色。

将注意力转向负电压，图 S2 的 ${ \bf c } , { \bf e } ,$ 面板和 g 显示，[[PFOA]] 中的[[羧基]]平面旋转方向与正电压下获得的几何构型相反。如图 1a 所示，负偏压会导致更多电子被引入 $\mathrm { P F O A / C u ( 1 1 1 ) }$ [[超胞]]（与零偏压状态下的 $N _ { e } = 1 8 5 0 . 0 ~ \hat { e ^ { - } } )$ 相比），这通过该还原过程中的过量电子加速了 [[全氟辛酸|PFOA]] [[脱氟]]。这一现象也表现为随电压降低而上升的[[费米能级]]，如图 1a 所示。我们观察到，在比 −3.0 V 更正的电压下，PFOA 没有发生显著的结构变化；然而，在这一关键偏压值下，[[CEP]] 离子弛豫模拟显示，位于 C2 碳上的一个 [[C−F 键]]发生解离（本文中碳原子编号如 C2 或 C6，是按它们与羧基头基的距离来标注的）；见图 1a 中左中部的结构。这与先前的实验结果非常吻合，那些实验表明发生了 $\bar { \mathrm { C } } \mathrm { - } \mathrm { F }$ 键断裂。 发生在接近 $- 3 . 0 \mathrm { V } . ^ { 1 1 , 3 3 , 3 4 }$ 的电位下

为了进一步理解对体系施加负电势的影响，我们对 [[PFOA]]/[[Cu(111)]] 体系进行了 [[Bader电荷分析|Bader 电荷分析]]<sup>35,36</sup>，研究其在 $0 . 0 ~ \left( N _ { e } \right. ~ =$ $1 8 4 9 . 8 ~ e ^ { - } )$ 和 $- 3 . 0 \mathrm { ~ V ~ } \left( N _ { e } = 1 8 5 6 . 9 \ e ^ { - } \right)$ . 该分析表明，约有 68% $( \sim 4 . 8 ~ e ^ { - } )$ 在电池中新增的7.1个电子 $\mathrm { a t } - 3 . 0 \ : \mathrm { V }$ 被保留在[[Cu(111)表面]]板层内，而约32% $( \sim 2 . 3 ~ e ^ { - } )$ 被转移至[[全氟辛酸|PFOA]]。图1的b和c分图分别展示了PFOA/Cu(111)体系在0.0和−3.0 V外加电极电位下的Bader电荷分析结果。每个原子上标注的数值表示其Bader净原子电荷，该电荷由[[价电子]]数与该原子对应的Bader布居数之差确定。在 $0 . 0 \mathrm { ~ V } ,$ 几乎中性的 PFOA 由 15 个带负电荷的 F 原子组成 $\left( - 0 . 6 \ e \right)$ 碳骨架上。相比之下，碳原子的电荷范围为 +1 至 +1.8 e，并与带负电氧原子的[[羧基]]相连，以及 $\mathrm { ~ a ~ } + \ 0 . 5$ e 的氢原子。这一分析反映了众所周知的 [[C−F 键]]的部分离子特性，即氟的高[[电负性]]分别在 C 和 F 上产生部分正电荷与负电荷。在施加 $- 3 . 0 \mathrm { V } ,$ 的负电压后，PFOA 分子内部发生剧烈变化。H 原子上的正电荷降低至 +0.1 e，同时它更靠近表面。此外，C2 碳原子的电荷显著降低至 $+ 0 . 3 \ e ,$，且外部电压导致 C2−F 键断裂。结果，带负电的[[氟离子]] $\left( \mathrm { F } ^ { - } \right)$ 从分子中释放出来，并迁移至周围的[[电解质]]溶液中。

为理解外加偏压下 C−F 解离过程的电子机制，我们在 $\mathrm { L } \dot { \mathrm { O B S T E R } ^ { 3 7 } }$ 软件包中使用了[[晶体轨道哈密顿布居]]（Crystal Orbital Hamilton Population, COHP）分析。在 COHP 形式体系下，可对给定结构中原子对的成键、非键和反键相互作用加以识别，而[[晶体轨道键指数]]（ICOBI）的积分值等于化学键级。图 2 上方面板展示了在 −3.0 V 下 [[CEP 离子弛豫计算]]的 750 个离子步中，C2−F 键长 $( \mathrm { R } _ { \mathrm { C - F } } ,$ 左纵轴）和总电子数（右纵轴）的演变。图 2 下方面板报告了 C2−F 键在六个不同键长（在键长随离子步变化曲线上以实心蓝色圆点表示）下的[[投影晶体轨道哈密顿布居]]（pCOHP）成键分析随能量的变化。对每个键长，化学键级值均标注在相应 pCOHP 曲线下方，其中[[费米能级]] $\left( E _ { F } \right)$ 位于零 $\mathrm { e V , }$ 处，左侧（蓝色）/右侧（绿色）分别为反键/成键分布。在第一个离子步 $\mathbf { \bar { ( R _ { C - F } = 1 . 3 6 7 } }$ Å 和 $N _ { e } = 1 8 5 0 . 0 ~ e ^ { - } )$ 时，键级为 0.80，表明与键级为 1.0 的纯单键相比，该键较弱。这说明随着离子弛豫模拟的进行，在外加偏压下该键更不稳定，更容易断裂。在相应的 pCOHP 曲线中，费米能级附近出现 [[C−F 反键态]]，表明体系内存在电子不稳定性。在第 100 个离子步 $\left( \mathrm { R } _ { \mathrm { C - F } } = 1 . 6 1 2 \ \mathring \mathrm { A } \right.$ 和 $N _ { e } =$

![](<../2.SCI_MD/Defluorination Mechanisms and Real-Time Dynamics of Per- and Polyfluoroalkyl Substances on Electrified Surfaces/images/159db33f440abe9f8c7f22237afb48ec83f4d4be18143ddd5ef9c2d8747a3dba.jpg>)

![](<../2.SCI_MD/Defluorination Mechanisms and Real-Time Dynamics of Per- and Polyfluoroalkyl Substances on Electrified Surfaces/images/ca955e3954a0a2bc100ef11c0dd58dc7e7d485efcbd8f0d7741c2d1ddf7569c7.jpg>)  
图 2. C2−F 键的演变，以 PFOA 结构上的红色虚线标示（顶部）。在 −3.0 V 下 CEP 离子弛豫计算过程中，C−F 键长（左纵轴）随离子步数的变化。黑色曲线绘制了同一模拟过程中 PFOA/Cu(111) 超胞内的总电子数（右纵轴）。对 C2−F 键在六个不同键长（顶部红色曲线上的实心蓝色圆点）下的投影晶体轨道哈密顿布居（pCOHP）成键分析（底部）。COHP 曲线左侧（蓝色）和右侧（绿色）分别表示反键和成键分布；C2−F 键的键级标注在图底部。

1855.9 e<sup>−</sup>）时，键级已显著下降至 0.49，表明该键进一步减弱。[[投影晶体轨道哈密顿布居|pCOHP]] 图显示，这种键减弱伴随[[费米能级]]以下反键相互作用的增加。尽管到第 125 个离子步 $\left( \mathrm { R } _ { \mathrm { C - F } } \right) = 2 . 4 6 0$ Å 和 $N _ { e } ~ = ~ 1 8 5 6 . 7 ~ e ^ { - } )$ 时，反键态在费米能级处消失，但电子不稳定性仍然存在。这种持续存在归因于已占据反键态的存在，这些反键态随着模拟推进至第 150 步 $\left( \mathrm { R } _ { \mathrm { C - F } } = 3 . 8 6 8 \ \mathring \mathrm { A } \right.$ 和 $N _ { e } = 1 8 5 6 . 8 ~ e ^ { - } )$ 而逐渐减少。此时，键级趋于零，表明化学键完全解离。离子弛豫过程中 C2−F 键的伸长导致已占据反键态完全耗尽。到最后一个离子步 $\left( \mathrm { R } _ { \mathrm { C - F } } = 6 . 4 9 4 \mathrm { ~ \AA ~ } \right.$ 和 $N _ { e } = \bar { 1 } 8 5 6 . 9 e ^ { - } )$ 时，pCOHP 曲线中的费米能级位于成键区和反键区之间的带隙内，这表明体系中 C2−F 键处于稳定的非键态。

3.2. 带电电极表面上 [[PFAS]] 降解的实时动力学。尽管前述 [[CEP 离子弛豫计算]]为 [[全氟和多氟烷基物质|PFAS]] 降解过程提供了机理信息，但它们仅给出零 Kelvin 下平衡结构附近的单一、时间无关的降解过程快照。为了提供降解动力学的时间相关图像，并同时考虑温度效应，我们开展了计算密集型的 [[CEP AIMD]] 模拟，研究 [[PFOA]] 在 [[Cu(111)]] 表面上的降解。这些 [[AIMD]] 模拟本质上探索了 PFAS 降解过程更广泛的构型和能量景观，而 [[CEP]] 离子弛豫计算受限于初始几何结构，只能探索局部能量极小值附近的构型。以图 S1 的 a 和 b 面板所示的同一 [[全氟辛酸|PFOA]]/[[Cu(111)表面|Cu(111)]] 结构作为初始几何构型，在 −3.3 V 下进行了 1,307 fs 的 [[恒定电极电势|CEP]] [[从头算分子动力学|AIMD]] 计算。支持信息提供了 PFOA/Cu(111) 降解动力学的视频，图 3 的 a 和 b 面板展示了从 CEP AIMD 计算得到的 PFOA 最终分解结构。在 CEP AIMD 模拟过程中，PFOA 中所有 15 个 [[C−F 键]]的演化如图 3c 内嵌图所示。在约 1250 fs 时，C5−F 和 C6−F 键开始发生伸长（分别伸长 35% 和 73%），直至有效解离，导致 F 原子从分子中释放并迁移至周围[[电解质]]溶液中。值得提及的是，我们还对 Cu(111) 上的 PFOA 进行了常规 AIMD 计算（由于其封闭体系性质，仅允许固定数量的电子），未观察到任何类型的键解离。相比之下，我们基于 CEP 的 AIMD 计算在 −3.3 V 下清楚地显示了 PFOA 中 [[碳氟键|C−F 键]]的解离，这展示了 CEP 方法在捕捉电化学诱导断键过程方面的新能力。

![](<../2.SCI_MD/Defluorination Mechanisms and Real-Time Dynamics of Per- and Polyfluoroalkyl Substances on Electrified Surfaces/images/390c5a014edcb649115fe174ceecbaab3b63845e3ead2d94ac0d219a4e852d12.jpg>)  
(a)

![](<../2.SCI_MD/Defluorination Mechanisms and Real-Time Dynamics of Per- and Polyfluoroalkyl Substances on Electrified Surfaces/images/3b2cf69a8e9a743653fd4b1653b9b8f4e8547ea98a09c31033876d45a2044df9.jpg>)

![](<../2.SCI_MD/Defluorination Mechanisms and Real-Time Dynamics of Per- and Polyfluoroalkyl Substances on Electrified Surfaces/images/d33471bc91a835c683d3d506cdb1b9ebf01a147ac946dd7aff96576d001c1ca2.jpg>)  
(c)  
图 3. (a) 在 −3.3 V 下 CEP AIMD 模拟结束时（1307 fs）PFOA/Cu(111) 超胞的快照。(b) 面板 a 中所示 PFOA 分子的放大视图。(c) 在 CEP AIMD 模拟期间发生解离的 C5−F（红色）和 C6−F（黑色）键的演化。原子按以下着色方案标示：白色为 H，棕色为 C，红色为 O，灰色为 F，蓝色为 Cu。

综合来看，我们的量子计算佐证了此前关于 [[PFAS]] 降解的若干实验和计算观测结果。例如，我们在 −3.3 V 下的 [[CEP AIMD]] 计算自然预测了 [[PFOA]] 中 C5−F 和 C6−F 键的解离，而此前一项实验与计算联合研究已确认这些键具有最低的[[键解离能]]（见参考文献 38 的图 3d）。此外，我们的离子弛豫模拟预测，在施加 −3.0 V 的外加电位时，[[全氟辛酸|PFOA]] 中的一个 [[C−F 键]]发生解离，这与实验结果高度一致。<sup>33</sup> 最后，我们的量子计算支持 [[Bader电荷分析|Bader 电荷分析]]，以预测 [[全氟和多氟烷基物质|PFAS]] 中的电子分布，从而揭示在带电环境中电荷如何转移至这些污染物以促成后续降解反应。

总之，我们开展了带电表面上 [[PFAS]] 反应的首个[[恒电位模拟]]，以探究其在真实非平衡条件下的降解动力学。这些先进的 [[CEP]] 计算揭示了在外加[[电化学偏压]]下开放体系中 [[全氟和多氟烷基物质|PFAS]] 降解的新机理细节，而这些细节无法从传统 [[DFT]] 计算中获得。具体而言，我们的 [[恒定电极电势|CEP]] 计算表明，当体系处于负偏压下时，[[费米能级]]附近 $( \mathrm { i . e . , }$ 体系[[化学势]]）的 [[C−F 反键态]]会出现。这随后导致 [[C−F 键]]解离，直到体系达到稳定的[[非键合状态]]，此时 PFAS 的成键态与反键态在能量上彼此分离。为提供这一复杂过程的时间尺度，我们还对带电 [[Cu(111)]] 表面上的 [[PFOA]] 降解开展了大规模 [[CEP AIMD]] 计算，结果表明当体系处于 −3.3 V 负偏压下时，[[脱氟]]在 1，307 fs 内发生。综合来看，这些 CEP 计算提供了一种新的能力，可在真实、非平衡电化学条件下预测反应和时间分辨的 PFAS 降解机理。具体来说，我们的开放体系量子计算能够预测化学反应活性，并阐明外电势对带电表面上 PFAS 降解的影响。此外，这些具有预测能力的 CEP 方法在预筛选候选材料表面以及预测最优电化学条件/偏压方面具有巨大前景，可指导 PFAS 及其他新兴环境污染物的实验修复工作。例如，我们的计算方法可促进对[[硼掺杂金刚石]]（BDD）、[[氧化铅]]（PbO ）和[[氧化锡]]（SnO ）等替代电极材料的探索，为 [[全氟辛酸|PFOA]] 在这些不同表面上的氧化和脱氟机理提供机理认识。此外，我们的方法还可用于研究[[电解质]]对 PFAS 降解的影响，从而进一步用于改进处理工艺。利用我们的计算方法探索上述各个方面，可帮助 PFAS 研究人员理性筛选有前景的电极材料和[[电解]]质，以提高实验降解策略的效率。

## ■ 关联内容

## \*sı 支持信息

支持信息可在 https://pubs.acs.org/doi/10.1021/acs.estlett.4c01130. 免费获取。

优化的 [[PFOA]]/[[Cu(111)]] [[超胞]]，以及在若干外加偏压下由 [[CEP 离子弛豫计算]]得到的优化 [[全氟辛酸|PFOA]]/[[Cu(111)表面|Cu(111)]] 超胞（PDF）
−3.3 V 下 PFOA/Cu(111) 的 [[AIMD]] 降解动力学（MPG）

## ■ 作者信息

## 通讯作者

[[Bryan M. Wong]] − [[加利福尼亚大学河滨分校]][[化学系]]、[[物理与天文学系]]以及[[材料科学与工程项目]]，美国加利福尼亚州河滨市 92521；orcid.org/0000-0002-3477-8043；电子邮箱：bryan.[[Wong|wong]]@ucr.edu

## 作者

[[Kamal Sharkas]] − [[加利福尼亚大学河滨分校]][[化学系]]、[[物理与天文学系]]以及[[材料科学与工程项目]]，美国加利福尼亚州河滨市 92521；orcid.org/0000-0002-6809-8185

完整联系信息可在以下地址获取：

https://pubs.acs.org/10.1021/acs.estlett.4c01130

## 资助

本工作由[[美国能源部能源效率与可再生能源办公室]]（EERE）资助，项目编号 DE-EE0010432。

## 注释

作者声明不存在竞争性财务利益。

## ■ 致谢

本工作通过高级网络基础设施协调生态：服务与支持（[[ACCESS]]）计划的分配编号 TG-CHE240173，使用了[[圣地亚哥超级计算机中心]]的 [[Expanse 超级计算机]]。衷心感谢 [[Min Choi]] 博士和 [[Gabriel S. Phun]] 博士构建目录图。

## ■ 参考文献

(1) Schaider, L. A.; Balan, S. A.; Blum, A.; Andrews, D. Q.; Strynar, M. J.; Dickinson, M. E.; Lunderberg, D. M.; Lang, J. R.; Peaslee, G. F. Fluorinated Compounds in U.S. Fast Food Packaging. [[Environmental Science & Technology Letters|Environ. Sci. Technol. Lett.]] 2017, 4, 105−111.

(2) Sajid, M.; Ilyas, M. PTFE-Coated Non-Stick Cookware and Toxicity Concerns: A Perspective. [[Environmental Science and Pollution Research|Environ. Sci. Pollut. Res.]] 2017, 24, 23436−23440.

(3) Guelfo, J. L.; Adamson, D. T. Evaluation of a National Data Set for Insights into Sources, Composition, and Concentrations of Per and Polyfluoroalkyl Substances ([[全氟和多氟烷基物质|PFASs]]) in U.S. Drinking Water. [[Environmental Pollution|Environ. Pollut.]] 2018, 236, 505−513.

(4) Crone, B. C.; Speth, T. F.; Wahman, D. G.; Smith, S. J.; Abulikemu, G.; Kleiner, E. J.; Pressman, J. G. Occurrence of [[全氟和多氟烷基物质|Per- and Polyfluoroalkyl Substances]] ([[PFAS]]) in Source Water and Their Treatment in Drinking Water. [[Critical Reviews in Environmental Science and Technology|Crit. Rev. Environ. Sci. Technol.]] 2019, 49, 2359−2396.

(5) Su, Y.; Rao, U.; Khor, C. M.; Jensen, M. G.; Teesch, L. M.; [[Wong]], B. M.; Cwiertny, D. M.; Jassby, D. Potential-Driven Electron Transfer Lowers the Dissociation Energy of the C−F Bond and Facilitates [[还原脱氟|Reductive Defluorination]] of [[全氟辛烷磺酸|Perfluorooctane Sulfonate]] (PFOS). [[ACS Applied Materials & Interfaces|ACS Appl. Mater. Interfaces]] 2019, 11, 33913−33922.

(6) Rao, U.; Su, Y.; Khor, C. M.; Jung, B.; Ma, S.; Cwiertny, D. M.; [[Wong]], B. M.; Jassby, D. Structural Dependence of [[还原脱氟|Reductive Defluorination]] of Linear [[PFAS]] Compounds in a UV/[[电解|Electrochemical]] System. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2020, 54, 10668−10677.

(7) Yamijala, S. S. R. K. C.; Shinde, R.; [[Wong]], B. M. Real-Time Degradation Dynamics of Hydrated Per− and Polyfluoroalkyl Substances ([[全氟和多氟烷基物质|PFASs]]) in the Presence of Excess Electrons. [[Physical Chemistry Chemical Physics|Phys. Chem. Chem. Phys.]] 2020, 22, 6804−6808.

(8) Maza, W. A.; Breslin, V. M.; Owrutsky, J. C.; Pate, B. B.; Epshteyn, A. Nanosecond Transient Absorption of [[水合电子|Hydrated Electrons]] and Reduction of Linear Perfluoroalkyl Acids and Sulfonates. [[Environmental Science & Technology Letters|Environ. Sci. Technol. Lett.]] 2021, 8, 525−530.

(9) Biswas, S.; Yamijala, S. S. R. K. C.; [[Wong]], B. M. Degradation of [[全氟和多氟烷基物质|Per- and Polyfluoroalkyl Substances]] with [[水合电子|Hydrated Electrons]]: A New Mechanism from First-Principles Calculations. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2022, 56, 8167−8175.

(10) Biswas, S.; [[Wong]], B. M. Degradation of [[全氟辛酸|Perfluorooctanoic Acid]] on Aluminum Oxide Surfaces: New Mechanisms from Ab Initio [[分子动力学|Molecular Dynamics]] Simulations. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2023, 57, 6695−6702.

(11) Wang, Y.; Zhang, J.; Zhang, W.; Yao, J.; [[Liu]], J.; He, H.; Gu, C.; Gao, G.; Jin, X. Electrostatic Field in Contact-Electro-Catalysis Driven C-F Bond Cleavage of Perfluoroalkyl Substances. [[Angewandte Chemie International Edition|Angew. Chem., Int. Ed.]] 2024, 63, e202402440.

(12) Román Santiago, A.; Baldaguez Medina, P.; Su, X. [[电解|Electrochemical]] Remediation of Perfluoroalkyl Substances from Water. [[Electrochimica Acta|Electrochim. Acta]] 2022, 403, 139635.

(13) Su, Y.; Rao, U.; Khor, C. M.; Jensen, M. G.; Teesch, L. M.; [[Wong]], B. M.; Cwiertny, D. M.; Jassby, D. Potential-Driven Electron Transfer Lowers the Dissociation Energy of the C-F Bond and Facilitates [[还原脱氟|Reductive Defluorination]] of [[全氟辛烷磺酸|Perfluorooctane Sulfonate]] (PFOS). [[ACS Applied Materials & Interfaces|ACS Appl. Mater. Interfaces]] 2019, 11, 33913−33922.

(14) Rao, U.; Su, Y.; Khor, C. M.; Jung, B.; Ma, S.; Cwiertny, D. M.; [[Wong]], B. M.; Jassby, D. Structural Dependence of [[还原脱氟|Reductive Defluorination]] of Linear [[PFAS]] Compounds in a UV/[[电解|Electrochemical]] System. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2020, 54, 10668−10677.

(15) Biswas, S.; Wang, X.; [[Wong]], B. M. Advanced Experimental and Computational Approaches for Advanced Reduction of [[全氟和多氟烷基物质|Per- and Polyfluoroalkyl Substances]]. [[Current Opinion in Chemical Engineering|Curr. Opin. Chem. Eng.]] 2024, 44, 101017.

(16) King, J. F.; Chaplin, B. P. [[电解|Electrochemical]] Reduction of Perand Polyfluorinated Alkyl Substances ([[PFAS]]): Is It Possible? Applying Experimental and Quantum Mechanical Insights from the [[还原脱氟|Reductive Defluorination]] Literature. [[Current Opinion in Chemical Engineering|Curr. Opin. Chem. Eng.]] 2024, 44, 101014.

(17) Biswas, S.; [[Wong]], B. M. Beyond Conventional [[密度泛函理论|Density Functional Theory]]: Advanced Quantum Dynamical Methods for Understanding Degradation of [[全氟和多氟烷基物质|Per- and Polyfluoroalkyl Substances]]. [[ACS ES&T Engineering]] 2024, 4, 96−104.

(18) Garza, A. J.; Bell, A. T.; Head-Gordon, M. Mechanism of CO Reduction at Copper Surfaces: Pathways to C Products. [[ACS Catalysis|ACS Catal.]] 2018, 8, 1490−1499.

(19) Zhao, X.; [[Liu]], Y. Origin of Selective Production of Hydrogen Peroxide by [[电解|Electrochemical]] Oxygen Reduction. [[Journal of the American Chemical Society|J. Am. Chem. Soc.]] 2021, 143, 9423−9428.

(20) [[Yu]], S.; Levell, Z.; Jiang, Z.; Zhao, X.; [[Liu]], Y. What is the Rate-Limiting Step of Oxygen Reduction Reaction on Fe−N−C Catalysts? [[Journal of the American Chemical Society|J. Am. Chem. Soc.]] 2023, 145, 25352−25356.

(21) Mathew, K.; Kolluru, V. S. C.; Mula, S.; Steinmann, S. N.; Hennig, R. G. Implicit Self-Consistent Electrolyte Model in Plane-Wave [[密度泛函理论|Density-Functional Theory]]. [[The Journal of Chemical Physics|J. Chem. Phys.]] 2019, 151, 234101.

(22) Mathew, K.; Sundararaman, R.; Letchworth-Weaver, K.; Arias, T. A.; Hennig, R. G. Implicit Solvation Model for Density-Functional Study of Nanocrystal Surfaces and Reaction Pathways. [[The Journal of Chemical Physics|J. Chem. Phys.]] 2014, 140, 084106.

(23) Hohenberg, P.; Kohn, W. Inhomogeneous Electron Gas. [[Physical Review|Phys. Rev.]] 1964, 136, B864−B871.

(24) Kohn, W.; Sham, L. J. Self-Consistent Equations Including Exchange and Correlation Effects. [[Physical Review|Phys. Rev.]] 1965, 140, A1133− A1138.

(25) Perdew, J. P.; Burke, K.; Ernzerhof, M. [[广义梯度近似|Generalized Gradient Approximation]] Made Simple. [[Physical Review Letters|Phys. Rev. Lett.]] 1996, 77, 3865−3868.

(26) [[Xu]], L.; Lin, J.; Bai, Y.; Mavrikakis, M. Atomic and Molecular [[吸附|Adsorption]] on [[Cu(111)]]. [[Topics in Catalysis|Top. Catal.]] 2018, 61, 736−750.

(27) Jenness, G. R.; Shukla, M. K. What Can Blyholder Teach Us about [[PFAS]] Degradation on Metal Surfaces? Environ. Sci.: Adv. 2024, 3, 383−401.

(28) Bonnet, N.; Morishita, T.; Sugino, O.; Otani, M. First-Principles [[分子动力学|Molecular Dynamics]] at a Constant Electrode Potential. [[Physical Review Letters|Phys. Rev. Lett.]] 2012, 109, 266101.

(29) Blöchl, P. E. [[投影缀加波方法|Projector Augmented-Wave Method]]. [[Physical Review B|Phys. Rev. B]] 1994, 50, 17953−17979.

(30) Kresse, G.; Joubert, D. From Ultrasoft Pseudopotentials to the [[投影缀加波方法|Projector Augmented-Wave Method]]. [[Physical Review B|Phys. Rev. B]] 1999, 59, 1758− 1775.

(31) Grimme, S.; Antony, J.; Ehrlich, S.; Krieg, H. A Consistent and Accurate Ab Initio Parametrization of Density Functional Dispersion Correction ([[DFT]]-D) for the 94 Elements H-Pu. [[The Journal of Chemical Physics|J. Chem. Phys.]] 2010, 132, 154104.

(32) Evans, D. J.; Holian, B. L. The [[Nose-Hoover 恒温器|Nose-Hoover Thermostat]]. [[The Journal of Chemical Physics|J. Chem. Phys.]] 1985, 83, 4069−4074.

(33) Pud, A.; Shapoval, G.; Kukhar, V.; Mikulina, O.; Gervits, L. [[电解|Electrochemical]] Reduction of Some Saturated and Unsaturated Perfluorocarbons. [[Electrochimica Acta|Electrochim. Acta]] 1995, 40, 1157−1164.

(34) Röckl, J. L.; Robertson, E. L.; Lundberg, H. Electrosynthetic C−F bond cleavage. [[Organic & Biomolecular Chemistry|Org. Biomol. Chem.]] 2022, 20, 6707−6720.

(35) Bader, R. Atoms in Molecules: A Quantum Theory; International Series of Monographs on Chemistry; [[Clarendon Press]], 1990.

(36) Tang, W.; Sanville, E.; Henkelman, G. A Grid-Based [[Bader 分析|Bader Analysis]] Algorithm without Lattice Bias. J. Phys.: Condens. Matter 2009, 21, 084204.

(37) [[Nelson]], R.; [[Ertural]], C.; [[George]], J.; [[Deringer]], V. L.; [[Hautier]], G.; [[Dronskowski]], R. [[LOBSTER]]: [[局域轨道投影|Local Orbital Projections]], [[原子电荷|Atomic Charges]], and [[化学键分析|Chemical-Bonding Analysis]] from [[投影缀加波|Projector-Augmented-Wave]]-Based [[密度泛函理论|Density-Functional Theory]]. [[Journal of Computational Chemistry|J. Comput. Chem.]] 2020, 41, 1931−1940.

(38) [[Bentel]], M. J.; [[Yu]], Y.; [[Xu]], L.; [[Li]], Z.; [[Wong]], B. M.; [[Men]], Y.; [[Liu]], J. [[脱氟|Defluorination]] of [[全氟和多氟烷基物质|Per- and Polyfluoroalkyl Substances]] (PFASs) with [[水合电子|Hydrated Electrons]]: Structural Dependence and Implications to [[PFAS修复|PFAS Remediation]] and Management. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2019, 53, 3718−3728.