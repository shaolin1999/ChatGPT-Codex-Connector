---
title: "zh-Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment Wiki全文"
source_markdown: "2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment.md"
cn_markdown: "2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/zh-Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment.md"
type: translated_fulltext_wiki
---
<!-- PaperMDLab-NAV:START -->
> [!info] 论文四向互链（PaperMDLab 自动维护）
> [[2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment|英文原文]] · [[2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/zh-Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment|中文译文]] · **中文全文双链（当前）** · [[4.SCI_AI_Summary/summary-zh-Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment|AI中文总结]]
<!-- PaperMDLab-NAV:END -->


![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/5ce027a2464a96f9915287aa0b6f4db1aa6771747e727d1b69fdad4ff78a04f9.jpg>)

pubs.acs.org/est

研究论文

# 结合模拟与实验理解 [[pH]] 对溶液中[[腐殖酸]][[溶解度]]和[[分子聚集|聚集]]程度的影响

[[Tu Lan]], [[Peng Wu]], [[Ziyi Liu]], [[Martin Stroet]], [[Jiali Liao]], [[Zhifang Chai]], [[Alan E. Mark]],\* [[Ning Liu]],\* 和 [[Dongqi Wang]]\*

![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/90b43c7fb7b31a230c767e383600ea45df25c74290b413d62afe822d74615570.jpg>)

引用本文：[[Environmental Science & Technology|Environ. Sci. Technol.]] 2022, 56, 917−927

![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/c49c3dc8e4b641ea757e48dd43be64f4ef42dbdbdc0aaf966a915a21af96e2bd.jpg>)

在线阅读

## 访问

指标及更多信息

摘要：采用[[分子动力学模拟|分子动力学（MD）模拟]]研究了[[腐殖酸]]（HA）在水溶液中的动力学行为，以及 [[pH]]、温度和 HA 浓度的影响。利用实验测得的化学组成数据和[[傅里叶变换红外光谱|傅里叶变换红外（FTIR）光谱]]，选择并验证了 MD 模拟中使用的 HA 模型。模拟表明，无论 pH 如何，HA 分子在水中均具有采取[[紧凑构象]]的强烈倾向，而 HA 的[[分子聚集|聚集]]则表现出对 pH 的依赖性。在高 pH 下，电离的 HA 组装成[[丝状结构]]，使其与水的接触最大化。在低 pH 下，中性的 HA 形成[[液滴状聚集体]]，使其与溶剂的接触最小化。模拟结果与动态光

推荐文章

\*sı 支持信息

![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/97c2bf728a9f5ae748046b264d0814fa89771d412ca7da35637f5821b717c2af.jpg>)

散射（[[动态光散射|DLS]]）测量和[[透射电子显微镜]]（TEM）成像的实验数据一致。本研究为 [[腐殖酸|HA]] 随 [[pH]] 变化的[[分子折叠|折叠]]和[[分子聚集|聚集行为]]提供了新的认识，并从分子层面揭示了[[酸度]]与 HA 的结构、[[溶解度]]和聚集之间的关系，对基于 HA 的[[污染场地修复|污染场地修复策略]]具有直接的指导意义。关键词：腐殖酸（HA）、酸度、溶解度、折叠、聚集、机制、模拟与实验

## 1. 引言

[[腐殖酸]]（HAs）是一类[[天然有机化合物]]，属于[[腐殖质]]（HSs）家族。根据提取方法，其定义特征为易溶于强碱性溶液，但在低 [[pH]] 下[[溶解度]]较低。这使其区别于其他 HSs，即以不溶性为定义特征的[[胡敏素]]，以及以在低 pH 下优先溶解为定义特征的[[富里酸]]。<sup>1</sup> HAs 广泛分布于[[土壤]]、[[沉积物]]和天然水源中，在自然环境中[[金属离子]]和[[疏水性有机污染物]]（HOCs）的[[污染物固存|固存]]过程中发挥着关键作用。HA 中常见的典型[[官能团]]包括[[羧基]]、[[羰基]]、[[羟基]]、[[酚盐基团]]和[[芳香环]]。这种多样的组成使 HA 具有[[两亲性]]，并表现出与土壤和[[地下水]]中的金属离子及 HOCs 相互作用的强烈倾向。<sup>1,2</sup> 这些性质使人们日益关注 HAs 在各类污染物于土壤和沉积物中[[污染物迁移|迁移]]时所发挥的作用，以及其在[[污染场地修复]]中的潜在应用。

即使采用最先进的实验技术，在分子水平上对 [[腐殖质|HSs]] 与无机/有机物质之间的相互作用进行[[实验表征]]仍具有挑战性。因此，随着[[高性能计算]]设施日益普及，理论方法越来越多地被用于揭示这些体系的特征。<sup>3−12</sup> 在近期的一系列研究中，<sup>13,14</sup> 我们证明，[[分子动力学模拟|分子动力学（MD）模拟]]可用于描述 [[腐殖酸-铀酰-碳纳米管或氧化石墨烯三元体系|HA−铀酰−碳纳米管（CNT）/氧化石墨烯（GO）三元体系]]的动力学，其中 [[碳纳米管|CNT]] 和 [[氧化石墨烯|GO]] 分别代表[[疏水性]]和[[两亲性]]两种不同的表面。这些研究揭示了表面通过与 [[腐殖酸|HA]] 的[[非共价相互作用]]由疏水性转变为[[亲水性]]的过程。[[Zhu]] 等人<sup>15</sup> 模拟了[[沥青质]]与 [[Leonardite 腐殖酸]]（LHA）的[[共聚集]]，并指出 HA 在[[石油污染物]]的[[污染物归趋|归趋]]与[[污染物迁移|迁移]]中发挥关键作用。他们还发现，在所有模拟体系中，LHA 的存在均促进了沥青质的[[分子聚集|聚集]]，并降低了沥青质的[[扩散系数]]。[[Oostenbrink]] 及其合作者开发了一款名为 [[Vienna Soil Organic-Matter Modeler]] 的在线工具，可方便地构建用于计算机模拟的[[凝聚相]] HA 模型体系。<sup>16,17</sup> 他们对标准 LHA 结构与动力学的研究能够再现一系列实验数据。<sup>18</sup> 尽管 HA 的结构被认为在决定其与[[金属离子]]和 [[疏水性有机污染物|HOCs]] 的相互作用方面起着至关重要的作用，但现有与 HA 相关的实验或理论研究中，很少有研究关注 HA 本身的结构与动力学。<sup>18−22</sup> 事实上，了解 HAs 的结构是先预测、最终调控用于环境修复的 HAs 性质的关键前提，这也是本研究的根本动机。

![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/40ee30cec1930ba1d6783cbcc90317ad2a023a683f906b9b5ad3da1ffab535c0.jpg>)  
图 1. 本研究所用的基于 Stevenson 模型的 HA 分子结构。两个向量之间的夹角（绿色的 σ1 和 σ2，记为 V1）、两个平面之间的夹角（蓝色加粗的 γ1 和红色加粗的 γ2，记为 P1）以及三个二面角（$( \alpha 1 , \alpha 2 ,$ 和 α3，记为 D1）被用作折叠描述符。根据官能团，将该模型划分为六个结构单元：A：芳香羧酸（蓝色）；B：连接区域（黑色）；C：醌（红色）；D：芳香羟基（紫色）；E：酪氨酸（绿色）；F：碳水化合物（棕色）。

本研究采用 [[分子动力学模拟|MD 模拟]]，考察了 [[pH]]、温度和 [[腐殖酸|HA]] 浓度对水溶液中 HA [[分子折叠|折叠]]与[[分子聚集|聚集]]的影响。通过[[动态光散射]]（DLS）测量和[[透射电子显微镜]]（TEM）成像验证了模拟结果，这些实验还进一步揭示了不同 pH 值下 HA 的聚集状态。用于表征 HA 的结构模型基于 [[Stevenson]] 提出的模型，<sup>1</sup> 该模型是在分析了实验研究所用[[纯化]] HA 的化学组成后选定的。本研究从原子水平揭示了 HA 的折叠与聚集行为，并讨论了其对基于 HA 的[[污染场地修复|污染场地修复策略]]的潜在启示。

## 2. 材料与方法

2.1. 实验。2.1.1. [[腐殖酸|HA]] 的[[纯化]]与表征。HA 购自 [[Real & Lead Chemical Co., Ltd.]]，并按照[[国际腐殖质学会]]（IHSS）提出的方法进行纯化，略作修改。<sup>23,24</sup> [[分析纯]]试剂未经进一步纯化直接使用。C、H 和 N 含量采用 [[Flash EA 1112 元素分析仪]]（[[Thermo]]）测定。使用 [[Nicolet 6700 傅里叶变换红外光谱仪|Nicolet 6700 傅里叶变换红外（FTIR）光谱仪]]（Thermo），在 $\dot { 5 } 0 0 { - } 4 0 0 0 ~ \mathrm { c m } ^ { - 1 }$ 范围内记录[[红外光谱]]。HA 样品的[[羧基]]酸性基团数量和[[总酸度]]分别采用[[乙酸钙法]]和[[氢氧化钡法]]测定。[[酚类酸性基团]]数量由总[[酸度]]与羧基酸性基团数量之差计算得到。[[羰基]]和[[醌基]]采用 [[TitraMate 20 电位滴定仪]]（[[Mettler Toledo]]，瑞士）通过[[电位滴定法]]测定。

2.1.2. [[动态光散射|DLS 测量]]与 [[透射电子显微镜|TEM]] 成像。在 298 K 下，使用 [[Zetasizer Nano ZS90]] 仪器（[[Malvern]]，英国），通过 DLS 技术测定 [[腐殖酸|HA]] 在酸性（[[pH]] 2.5）和近中性（pH 7.8）条件下的[[聚集动力学]]。本研究使用的 [[乙酸钠-乙酸缓冲液|NaAc−HAc]]（pH 2.5）和 [[Tris-HCl 缓冲液|Tris−HCl]]（pH 7.8）[[缓冲液]]均用[[去离子水]]配制。对于每个样品，先向[[石英比色皿]]中加入 0.50 mL 缓冲液，再加入 0.50 mL 用相同缓冲液溶解的 HA 溶液（100 mg/L）。所得[[质量浓度]]为 50 mg/L 的 HA 样品分为两个平行组，其中三个用于 DLS 测量，一个用于 TEM 成像。样品在 120 s 后进行测量，并静置至总时长 3600 s（1 h），以确保[[分子聚集|聚集]]过程完成。使用 [[Tecnai G2 F20 S-TWIN|Tecnai G2 F20 S-TWIN TEM]]（[[FEI]]）观察 HA 聚集前后的[[表面形貌]]。聚集后的 HA 样品在 12 h 后获得。将 0.1 mL HA 质量浓度为 50 mg/L 的溶液滴加到[[铜网]]上，制备两种不同 pH 值（2.5 和 7.8）下的 HA 的 TEM 样品。为尽可能保持 [[腐殖酸聚集体|HA 聚集体]]的原始特征，将载有样品的铜网在[[液氮]]中[[快速冷冻]]，然后进行[[冷冻干燥]]。

2.2. [[分子动力学模拟]]。2.2.1. 模型与体系。本研究采用 [[Stevenson]]<sup>1</sup> 提出的 [[腐殖酸|HA]] 模型 $( \mathrm { C } _ { 7 6 } \mathrm { H } _ { 4 9 } \mathrm { N } _ { 3 } \mathrm { O } _ { 3 2 } ,$ 图 1）。如支持信息（SI）第 S1 节所示，该特定结构与实验分析所用 HA 样品的元素组成和[[官能团]]含量高度一致。该模型包含 HA 中常见的一系列疏水和亲水官能团，包括[[芳香环]]、[[芳香羧基]]、[[酚羟基]]、醌、[[氧桥]]、[[氨基酸残基]]和[[碳水化合物基团]]。需要注意的是，尽管该 HA 模型同时含有酸性、极性和[[非极性基团]]，但这些基团分散在整个分子中，这意味着不能像许多[[表面活性剂]]那样将该分子视为[[两亲性]]分子。不过，其柔性骨架能够使其发生[[分子折叠|折叠]]，并根据所处环境表现出不同程度的两亲性。

以 [[腐殖酸|HA]] 的基本 [[Stevenson 腐殖酸模型|Stevenson 模型]]（图 1）为基础，考察了两种不同的[[电荷状态]]：[[离子态]]和[[中性态]]。在[[离子态腐殖酸模型|离子化模型]]（称为 IHA）中，所有[[羧酸根基团]]均处于去[[质子化]]状态，胺基则处于质子化状态。由此得到的分子结构含有 158 个原子，净负电荷为 −2 e，代表近中性溶液中的 HA。在[[中性腐殖酸模型|中性模型]]（称为 [[中性腐殖酸|NHA]]）中，由于指定三个羧酸根基团中的哪两个应被质子化或去质子化可能涉及组合问题，因此将所有可滴定基团（三个羧酸根基团和一个胺基）均建模为中性形式。NHA 用于表征 HA 在酸性溶液中的行为，并与 IHA 进行比较。共构建了六个体系，其 HA 分子的类型和数量各不相同。这些体系及其模拟温度列于 SI 的第 S2 节。前三个体系在特定温度下的水相中包含一个 IHA 或 NHA 分子（I1A、N1：300 K；I1B：350 K）。构建这些体系是为了研究 [[pH]] 和温度对 HA [[分子折叠|折叠]]的影响。后三个体系（I4、N4 和 M4）包含四个具有不同电荷状态的 HA 分子。这些体系用于定性评估 HA 浓度的影响，并研究 HA 的[[分子聚集|聚集]]，具体而言，即不同 [[腐殖酸聚集体|HA 聚集体]]的[[聚集体稳定性|稳定性]]。这些体系从 300 K 逐步升温至 350 K。

2.2.2. 模拟条件。首先在 B3LYP/def2-SV(P) 水平上优化了两种不同 [[腐殖酸|HA]] 模型的结构。<sup>25</sup> 随后将优化后的几何结构提交至自动拓扑构建器（Automated Topology Builder，[[自动化力场拓扑构建器|ATB]]），以获得与 GROMOS [[GROMOS 53A6 力场参数集|53A6]] 力场兼容的 Lennard-Jones 参数和成键参数。<sup>26,27</sup> 采用 CHELPG 算法，通过拟合静电势获得原子电荷。<sup>28</sup> 使用 [[Gaussian|Gaussian 09]] 29−31 程序，基于优化后的中性 HA 结构，在 B3LYP/6-31G(d) 水平上模拟了 [[红外光谱|IR 光谱]]。

采用 [[GROMACS]] 5.0.7 模拟软件包进行 [[分子动力学模拟|MD 模拟]]。<sup>32,33</sup> 在所有维度上均施加周期性边界条件（PBC）。在前三个体系（I1A、N1 和 I1B）中，将溶质置于边长为 5.0 nm 的立方水盒中进行[[溶剂化]]。采用扩展简单点电荷（SPC/E）水模型，<sup>34</sup> 并通过 ${ { \mathrm { N a } } ^ { + } }$ 离子中和过量负电荷。在最初采用最速下降法进行能量最小化后，体系在恒温下进行平衡：首先采用正则（NVT）系综，通过 v-rescale 恒温器平衡 100 ps，<sup>35</sup> 随后采用等温等压（NPT）系综，在 1 bar 下使用 Parrinello−Rahman 恒压器再平衡 100 ps。<sup>36</sup> 恒温器 $( \tau _ { \mathrm { T } } )$ 和恒压器 $\left( \tau _ { \mathrm { P } } \right)$ 的耦合时间分别为 0.1 和 2.0 ps。完成上述平衡过程后，对体系进行 25 ns 的采样。在前 20 ns 内每隔 10 ps 从[[分子动力学轨迹|轨迹]]中采集一次构型，在最后 5 ns 内每隔 0.01 ps 采集一次构型，用于分析。前 20 ns 用于探究 [[腐殖酸|HA]] 的[[分子折叠|自发折叠]]，最后 5 ns 用于分析模型体系的热力学性质。对于后三个体系（I4、N4 和 M4），在完成上述 300 K 下的 25 ns 采样后，将体系升温至 320 K 并保持 5 ns，随后将温度升至 350 K，再进行 25 ns 的采样（见 SI 第 S3 节）。模拟过程中，采用 LINCS 算法约束所有键的键长。<sup>37</sup> 采用 2 fs 的时间步长对运动方程进行积分。[[静电相互作用]]采用粒子网格 Ewald（PME）方法计算。<sup>38</sup> 范德华（[[范德华相互作用|vdW]]）相互作用采用 1.4 nm 的截断距离计算。使用 GROMACS 软件包中的程序进行轨迹分析。采用 [[VMD]] 1.9.1 进行可视化。<sup>39</sup> 使用 [[Multiwfn]] 3.3.9 程序定位并识别由 Johnson 等人提出的[[非共价相互作用]] $\left( \mathrm { N C I } \right) , ^ { 4 0 }$。<sup>41</sup>

## 3. 结果与讨论

3.1. [[腐殖酸|HA]] 模型的验证。通过实验测定了[[纯化]] HA 的化学组成，其中 C、H 和 N 元素的质量分数与 [[Stevenson 腐殖酸模型|Stevenson 模型]]中的相应值非常接近（见 SI 第 S1 节）。HA 的典型[[官能团]]，即[[羧基]]、[[酚羟基]]、[[羰基]]和[[醌基]]，在所用 HA 模型中也得到了良好体现。需要注意的是，HA 中 N 的含量（1.16 wt %）相当低。这表明，HA 的[[亲水性]]主要由 Lewis 酸位点决定，而非 Lewis 碱位点。这也是我们在[[中性腐殖酸模型|中性模型]]中将胺基视为不带电[[极性基团]]的另一个原因。

此外，如图 2 所示，实验测得的 [[腐殖酸|HA]] 的 [[傅里叶变换红外光谱|FTIR 光谱]]与基于 [[Stevenson 腐殖酸模型|Stevenson 模型]]在 B3LYP/6- 31G(d) 理论水平下计算并经适当校正的分子振动频率吻合良好。<sup>42</sup> 所有光谱特征的偏差均在 6% 以内。SI 第 S4 节中汇总的特征峰归属与既往研究一致。<sup>43−49</sup> [[极性基团]]的键伸缩振动模式，包括 O−H 和 N−H 伸缩振动 $( 3 4 7 0 { - } 3 5 \dot { 2 } 7 ~ \mathrm { c m } ^ { - 1 } ) ,$、参与[[氢键]]形成的 O−H 伸缩振动（3268 $\mathsf { c m } ^ { - 1 } ) _ { i }$，以及 [[羧基|COOH]] 的 CO 伸缩振动 $\left( 1 7 4 0 \ \mathrm { c m } ^ { - 1 } \right)$，以及[[非极性基团]]的键伸缩振动模式，如芳香族 C−H 伸缩振动 $( 3 0 9 5 ^ { ^ { \circ } } \ \mathrm { c m } ^ { - \mathrm { l } } )$ 和脂肪族 C−H 伸缩振动 $( 2 9 2 2 ~ \mathrm { c m } ^ { - 1 } )$，均与相应的实验谱带吻合良好。计算得到的位于约 $1 5 9 5 ~ \mathrm { { \ c m } ^ { - 1 } }$ 处的强峰对应于约 1600 $\mathrm { c m } ^ { - 1 } ,$ 处的实验谱带，通常归因于芳香族 $\mathrm { C } { = } \mathrm { C }$ 骨架振动与[[醌基]]、酰胺基及氢键[[缔合]]的共轭酮基的 $\mathrm { C } { = } \mathrm { O }$ 伸缩振动的组合。总体而言，计算结果与实验数据的一致性表明，[[Stevenson]] 提出的 HA 模型适用于本研究，因此采用该模型研究 HA 在水溶液中的动力学行为。

![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/19365caa9c352a5695ac688c10dae5cd7641436e22f3d087882b0f09ee6e200e.jpg>)  
图 2. HA 的实验与计算 FTIR 光谱。所有光谱特征的偏差均在 6% 以内。

3.2. [[腐殖酸|HA]] 在水溶液中的[[分子折叠|折叠]]。3.2.1. 折叠。为研究 HA 在水溶液中的折叠，在 300 和 350 K 下对其离子形式（I1A、I1B）和中性形式（N1）进行了 [[分子动力学模拟|MD 模拟]]。三个体系在模拟过程中的代表性快照见 SI 第 S5 节。在这三个体系中，HA 的两个翼部均相互靠拢，形成紧密接触。采用不同指标随时间的变化来表征 HA 的折叠，如图 3 所示。图 3a 展示了使用 gmx-[[溶剂可及表面积|sasa]] 程序<sup>50</sup> 确定的溶剂可及[[表面积]]（SASA）随模拟时间的变化。可以看出，HA 从[[伸展构象]]发生折叠的同时，其 SASA 减小。[[中性腐殖酸|NHA]]（N1）的行为与 HA 的两种离子形式（[[离子态腐殖酸模型|IHA]]）显著不同。[[中性腐殖酸模型|NHA]] 同样从伸展[[分子构象|构象]]出发，折叠速度较慢，但最终形成了更紧凑的构象，其 SASA 值更低（13.42 nm<sup>2</sup>）。图 3b 展示了由极性和非极性 SASA 推算得到的[[溶剂化自由能]] $( \Delta G _ { \mathrm { s o l v } , \mathrm { S A S A } } )$ 随模拟时间的变化。NHA 的 $\Delta G _ { \mathrm { s o l v , S A S A } }$（1.62 kJ/mol）明显比两种 IHA 的相应值（−4.77 和 −8.01 kJ/mol）更偏正。这表明，[[pH]]（[[电荷状态]]）显著影响 HA 在水中的[[溶解度]]。

![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/21a1dd97fe21cc289fcf66098caa2ae184cad0a50bfbe39164ec6bd9441d30a8.jpg>)

![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/b12a4e61c821a7a954f7c53e9c10f289d0d0c6b4176fb188fa931ea09b988176.jpg>)

通过 gmx-rms 程序确定的骨架原子（图 1 中结构单元 $\mathbf { A } ,$ $\begin{array} { r l } { \boldsymbol { \mathrm { B } } , } & { { } C , } \end{array}$ 和 D 的[[非氢原子]]）相对于初始结构的[[均方根偏差|位置均方根偏差]]（RMSD），是衡量模拟过程中结构变化和[[分子折叠|折叠]]动力学的另一项指标（图 3c）。N1 始终更接近初始结构，最终的 RMSD 值较低（0.56 nm），表明 [[中性腐殖酸|NHA]] 的折叠倾向小于 [[离子态腐殖酸模型|IHA]]。正如预期，350 K 下的 IHA（I1B）比低温 300 K 下的 IHA（I1A）表现出更大的结构波动。不同条件下 [[腐殖酸|HA]] 的紧凑程度和刚性也

![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/bb020be44b096043bd66f78b8b156467ab41ccb1cc0b29964c3dd24819d2dbfe.jpg>)

![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/55843a05701a3fd37424deefa179c3191869395a49316eafee2233ea66c7d6d0.jpg>)  
图 3. I1A、N1 和 I1B 体系中 HA 的 (a) 溶剂可及表面积（SASA）、(b) 溶剂化自由能 $( \Delta G _ { \mathrm { s o l v } , \mathrm { S A S A } } ) ,$、(c) 均方根偏差（RMSD）和 (d) 回转半径 $( R _ { \mathrm { g } } )$ 随时间的变化。选取结构单元 A、B、${ \bar { \mathsf { C } } } ,$ 和 D 的非氢原子进行 RMSD 和 $R _ { \mathrm { g } }$ 计算。计算 RMSD 时，以初始伸展构象（能量最小化后）作为参考坐标。数值取最后 3 ns 的平均值。

时间（ns）  
![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/6184df37ebfc324c904ae0b99ef13531f5dbff9f9fd57083a77db3f36f4a3051.jpg>)

![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/307e91505682b5ec9307727fededfb2a7684b1f1bc838d950963d76c4c35758a.jpg>)

![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/1096f5abd4ca0891e01904931b22a12427945869b4cefaa35da7e5268f74dfab.jpg>)

时间（ns）  
![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/18cf63e801daf729113eccf2abb0cd7c72dcb44e616dddb2995f9c51f0e38b9a.jpg>)

![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/0dcab9ee0dffa063f67206aa70a1523d4aab2fbcab1e95d54e552682d24abbe4.jpg>)  
时间（ns）

![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/1dbe7ba335b948fb85950889398c8be5d65401a348bb861b2bbac1e8d0bc112e.jpg>)  
时间（ns）  
图 4. I1A、N1 和 I1B 体系中 HA 各单元（A、B、C 和 D）之间的静电（左）和 vdW（右）相互作用随时间的变化：$( \mathsf { a } , \mathsf { b } )$ I1A、$( \mathbf { c } , \mathbf { d } )$ N1，以及 (e, f) I1B。曲线图例见图 4d，数值取最后 3 ns 的平均值。

通过 gmxgyrate 程序计算回转半径 $( R _ { \mathrm { g } } )$ 进行评估（图 3d）。较小的 $R _ { \mathrm { g } }$ 值表示[[分子构象|构象]]更紧凑，而 $R _ { \mathrm { g } }$ 随时间变化时的波动较小则表明状态相对稳定。随着 [[腐殖酸|HA]] 的[[分子折叠|折叠]]，三个体系中的 $R _ { \mathrm { g } }$ 值均有所下降，其中 [[中性腐殖酸|NHA]] 的值（0.62 nm）略小于两种 [[离子态腐殖酸模型|IHA]] 的值（0.66 和 0.68 nm）。在最初的 9 ns 内，[[中性腐殖酸模型|NHA]] 的 $R _ { \mathrm { g } }$ 比两种[[离子态]]（IHA）表现出更大的变化。这与芳香族[[羟基]]单元（HA 的 D 单元，见 SI 第 S6 节）的运动有关。总体而言，图 3 的结果表明，HA 在水溶液中具有自发折叠成[[紧凑构象]]的强烈倾向，而由 [[pH]] 决定的 HA [[电荷状态]]显著影响 HA 的折叠，进而影响其在水溶液中的构象。

此外，使用图 1 所示的三个描述符（V1、P1 和 D1）表征 [[腐殖酸|HA]] 的[[分子折叠|折叠]]状态，结果汇总于 SI 第 S7 节。I1A、N1 和 I1B 的 V1 分布图均在约 50° 处出现最大值，且峰形相似，表明两个翼部大致呈共线排列。然而，三个体系的 P1 存在显著差异，表明中性 HA 的柔性大于带电状态下的 HA，这与上述观察结果一致。D1 的分布也存在显著差异，尤其是 α2 和 $\alpha 3 ,$，这主要归因于连接 α2 和 α3 的 Tyr 残基，该残基能够自由旋转以适应 HA 的折叠。总体而言，这些发现表明，HA 具有很高的柔性，其折叠模式容易受到各种外部因素的影响，例如 [[pH]]（[[电荷状态]]）和温度。

3.2.2. 能量分析。为理解支配 I1A、N1 和 I1B 体系中 [[腐殖酸|HA]] [[分子折叠|自发折叠]]的驱动力，使用 gmx-energy 程序分析了构成本研究所用 HA 模型的不同结构单元（见图 1）之间的相互作用能，即芳香羧酸根（A）、连接区（B）、醌（C）和芳香[[羟基]]（D）之间的相互作用能（图 4）。对于电离态 HA（I1A，图 4a,b），随着两翼闭合，单元 B 与 D 之间的[[静电相互作用]]（−37.60 kJ/mol）以及 A 与 D 之间的 [[范德华相互作用|vdW 相互作用]]（−40.29 kJ/mol）变得显著更加有利，很可能驱动了[[分子构象|构象]]变化。对于中性 HA（N1，图 4c,d），A 与 D 之间（−49.74 kJ/mol）以及 A 与 C 之间（−18.24 kJ/mol）的 vdW 相互作用似乎决定了折叠。在较高温度下（I1B，图 4e,f）也观察到了类似结果，其中 vdW 相互作用同样占主导地位，并基本决定了 HA 的折叠。相比之下，静电相互作用的变化在 N1 和

![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/54a4936af020704da3bc9659e539fb1881ae4816781c7db8e32c0aaefac6381d.jpg>)  
图 5. I4（4 个 IHA）、N4（4 个 NHA）和 M4（2 个 NHA 和 2 个 IHA）体系在温度从 300 K 升至 350 K 过程中的代表性快照。快照标记为 X-yK-zns，表示模型体系 X（X = I4、N4 和 M4）在 y 开尔文、第 z ns 时的快照。四个 HA 分子以红色、青色、蓝色和黄色区分（具体而言，对于 M4，红色：NHA1；青色：NHA2；蓝色：IHA1；黄色：IHA2）。为清晰起见，未显示水分子。在高 pH 条件下（I4），电离态 HA 组装成线状结构，而在低 pH 条件下（N4），中性 HA 形成液滴状聚集体。由两种不同电荷状态的 HA 形成的聚集体似乎稳定性较低，并经历了温度诱导的从 Y 形到液滴状结构的转变（M4）。

I1B 体系中仍然有利，但并不那么显著。注意，N1 中[[静电相互作用]]随时间的演化（图 4c）比 I1A（图 4a）表现出更大的波动。这可能反映了 [[中性腐殖酸|NHA]] 中较弱的静电相互作用。在 I1B 中也可以发现类似情况。I1B 中静电相互作用和 [[范德华相互作用|vdW 相互作用]]的波动均大于 I1A，表明可访问的[[构象空间]]随温度升高而增大。这些结果与图 3 中的[[构象分析]]一致。

![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/95d351ecba531b7cf70da9a81f9f7305d0ee45a9d2d8ed7eb3ae174ac8443fc8.jpg>)

为进一步确定 [[腐殖酸|HA]] 结构单元之间的相互作用特征，基于[[电子密度]]和[[约化密度梯度]]进行了[[非共价相互作用]]（[[非共价相互作用分析|noncovalent interaction]]，NCI）分析。<sup>41,51</sup>分析得到的[[等值面|梯度等值面]]见 SI 第 S8 节。可以观察到，单元 A 与 D 之间的空间主要呈绿色（黑色椭圆），对应于 A 和 D 的[[芳香环]]之间的 [[π-π相互作用|π−π 相互作用]]。同时，HA 中也存在[[分子内氢键]]（由 SI 图 S6 中的一些蓝色点显示，并以粉色圆圈突出标示）。对 SI 第 S9 节所示的[[氢键]]进行仔细分析后发现，在模拟过程中，A 与 D 之间仅形成了极少量的氢键（0.04−0.22）。这些结果表明，在 HA [[分子折叠|折叠过程]]中，[[静电相互作用]]、[[范德华相互作用|vdW 力]]、π−π 相互作用和氢键共同存在，其中单元 A 与 D 之间的 vdW 相互作用是支配其自发折叠的主要驱动力。

3.3. 水溶液中 [[腐殖酸|HA]] 的[[分子聚集|聚集]]。3.3.1. [[聚集动力学]]：[[分子动力学模拟|MD]]、[[动态光散射|DLS]] 和 [[透射电子显微镜|TEM]]。为考察 HA 在不同条件下如何聚集，构建了三个含有四个 HA 分子的体系（I4、N4 和 M4），并进行了模拟。聚集模拟的代表性快照如图 5 所示。在 I4 和 N4 体系中，HA 分子迅速聚集，即使加热至 350 K 并持续 25 ns，聚集体仍保持稳定。然而，在 M4 体系中，300 K 下形成的聚集体在更高温度（350 K）下先[[解离]]，随后重新[[缔合]]。从图 $5 ,$ 可以看出，HA 的[[电荷状态]]（[[离子态]]与[[中性态]]）不同，形成的聚集体也不同。I4 形成了[[线状聚集体|线状结构]]，而 N4 聚集体则更接近液滴状。先前研究表明，在碱性溶液中，离子态 HA 形成线状和/或[[片状聚集体]]，而在 HA 呈中性态的酸性条件下，则形成[[球状聚集体|球状]]和[[环状结构]]。<sup>52,53</sup> 在含有两种不同电荷状态 HA 的 M4 体系中，聚集体表现出较低的[[聚集体稳定性|稳定性]]，并发生了温度诱导的由 [[Y形聚集体|Y 形聚集体]]向[[液滴状聚集体]]的转变。

为进一步阐明构成[[分子聚集|聚集]]体的结构特征，采用 [[Daura]] 等人<sup>54</sup>的方法，基于[[均方根偏差|位置均方根偏差]]（RMSD）的差异，对每条从所有 [[腐殖酸|HA]] 分子均处于[[伸展构象]]的时刻开始、持续 50 ns 的[[分子动力学轨迹|轨迹]]进行了[[聚类分析]]。此处计算 RMS 时考虑了所有[[非氢原子]]，[[聚类阈值]]为 0.1 nm。各次模拟中的主要[[构象簇]]见 SI 第 S10 节。在 I4 和 N4 体系中，各 HA 分子的[[分子构象|构象]]在模拟过程中变化很小。然而，在 M4 体系中，观察到了多个 HA 构象簇，随着模拟过程中温度升高，部分分子的构象发生了显著变化。例如，IHA1 从 300 K 下的伸展构象转变为 350 K 下的[[折叠构象]]。各 HA 分子的这些结构变化导致了温度诱导的由 [[Y形聚集体|Y 形结构]]向[[液滴状聚集体]]的转变，如图 5 所示。

通过 [[动态光散射|DLS 测量]]确定[[流体动力学直径|平均流体动力学直径]] $( \langle D _ { \mathrm { h } } \rangle )$，对 [[腐殖酸|HA]] 分子在酸性（[[pH]] 2.5）和近中性（pH 7.8）溶液中的[[分子聚集|聚集]]进行了[[实验表征]]。所得结果如图 6a 所示。在 pH $2 . 5 ,$ 时，正如预期，HA 的尺寸

![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/a6eab2b45a3b673a52e04694f74bd18fb177ff376c6f1058815f838e38ca4674.jpg>)

![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/a9ba0b93d62f2f0f9c612deeddb210cfa0183f8a32544669002bd894e7cf09fe.jpg>)  
图 6. (a) pH 2.5 和 7.8 下 HAs（50 mg/L）随时间变化的聚集动力学曲线，以及不同 pH 值下 t = 0（左）和 12 h（右）时 HA 聚集体的 TEM 图像：(b, c) pH 2.5；(d, e) pH 7.8。

[[分子聚集|聚集]]体在一小时内由 ∼460 nm 逐渐增大至 ∼1700 nm。在更长时间尺度上观察，24 h 内可见一些[[沉淀]]，4 天内形成[[絮状物]]（见 SI 第 S11 节）。相比之下，在 [[pH]] 7.8 条件下，聚集体的尺寸（∼160 nm）在最初一小时内变化很小，4 天后几乎未观察到沉淀。我们注意到，∼160 nm 的尺寸显著大于 [[分子动力学模拟|MD 模拟]]中观察到的聚集体尺寸。这是由于两者的时间和空间尺度不同：MD 模拟处于 50 ns 时间尺度和分子尺度，而实验研究处于小时至天的时间尺度和宏观尺度。图 6b−e 展示了酸性（pH 2.5）和近中性（pH 7.8）条件下，t = 0 和 12 h 时 [[腐殖酸聚集体|HA 聚集体]]的 [[透射电子显微镜|TEM]] 图像。初始时（t = 0 h，图 6b,d），[[腐殖酸|HA]] 聚集体分散良好，但 pH 2.5 条件下的 HA 聚集体明显大于 pH 7.8 条件下的聚集体，这与 [[动态光散射|DLS]] 测得的 $\left. D _ { \mathrm { h } } \right.$ 一致。先前的一项研究表明，在 pH $4 . 0 , ^ { 5 5 }$ 条件下 HA 聚集的初始状态中，通过[[原子力显微镜]]（AFM）可在[[云母]]表面发现一些小的单颗粒或聚集体，这与我们在初始时刻的 TEM 成像中观察到的形貌一致。

![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/975ad0b3a9687761dc2e6a311722c57f4233f52988670de778a0f543021421bd.jpg>)

![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/5255b7cb339079c8638e327a926a9257bde17b4fc2bccb445c850f077f44d054.jpg>)

![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/31f35472aac38b0cadac54ce5232b214ebfad1c132fb301d87f398fd1d2c1823.jpg>)

![](<../2.SCI_MD/Understanding the Effect of pH on the Solubility and Aggregation Extent of Humic Acid in Solution by Combining Simulation and the Experiment/images/025be8a049ef3aa754e94420b97d833beffa18bd837ad992cca2427d5a3f36b7.jpg>)  
图 7. I4、N4 和 M4 体系中以下各量随时间的演变：(a) 不同 HA 之间的平均 COG 距离，(b) 四个 $( \Delta G _ { \mathrm { s o l v } , \mathrm { S A S A } } )$ 的总溶剂化自由能 ${ \mathrm { H A s } } , ( { \mathrm { c } } )$ 平均静电相互作用和 vdW 相互作用，以及 (d) HA 分子之间的平均氢键数。各数值取最初或最后 3 ns 的平均值。

12 h 后，在 [[pH]] 2.5 条件下，[[球状聚集体]]形成了彼此相邻、边缘光滑的大型颗粒状结构（图 6c）。在 pH 7.8 条件下未观察到这些更高阶的集体结构 $( \mathrm { F i g u r e ~ } 6 \mathsf { e } ) . ^ { 5 6 }$ 这些结果表明，[[腐殖酸|HA]] 的[[分子聚集|聚集]]程度随 pH 升高而显著降低。显然，溶液 pH 不仅影响单个聚集体的尺寸和形状，还影响更大组装体的形成，这与我们在 [[分子动力学模拟|MD 模拟]]中的观察结果一致。我们注意到，[[透射电子显微镜|TEM]] 图像中未观察到液滴状和[[丝状结构]]，这些结构可能因[[时空分辨率]]的限制而被遗漏。这表明了本项 MD 研究如何对实验形成补充。

3.3.2. [[聚集机制]]。使用 [[gmx distance|gmx-distance]] 程序计算了三个体系中每对 [[腐殖酸|HA]] 的[[几何中心]]（COG）之间的平均距离，以分析 [[腐殖酸聚集体|HA 聚集体]]的紧密程度。如图 $^ { 7 } \mathbf { a } ,$ 所示，I4 中 HA 对的平均 COG 距离（1.53 nm）远大于 N4 中的距离（0.78 nm），表明中性[[分子聚集|聚集]]体更加紧密。此外，在 M4 体系的最后 25 ns 内，随着温度升高至 350 K，平均 COG 距离先增大后减小，支持了初始聚集体先部分[[解离]]、随后重新[[缔合]]成更紧密结构的发现。图 7b 展示了聚集模拟中[[溶剂化自由能]]随时间的变化。同样，[[溶剂化]][[自由能]]基于 [[溶剂可及表面积|SASA]] $( \Delta G _ { \mathrm { s o l v , S A S A } } )$ 进行估算。考察图 $^ { 7 \mathrm { b } , }$ 时需要注意，决定体系聚集倾向的关键性质并非单个 HA 分子的溶剂化自由能，而是体系在聚集态与非聚集态之间的[[自由能差]]。除了 $\Delta G _ { \mathrm { s o l v , S A S A } }$ 数值中所包含的单个 HA 分子的溶剂化贡献外，体系总自由能还涉及 $\mathrm { H A { - } H A } ,$ HA−水和水−水分子相互作用的[[焓|焓贡献]]。因此，尽管 $\Delta G _ { \mathrm { s o l v , S A S A } }$ 数值为溶剂化的主要贡献提供了有用的估算，但不应对这些数值作过度解读。对于 $\mathbf { N } 4 , \Delta G _ { \mathrm { s o l v , S A S A } }$，四个 [[中性腐殖酸|NHA]] 在聚集前的溶剂化自由能为正值（8.22 kJ/ mol），表明它们与水相互作用或分散于水中的倾向很小。形成[[液滴状聚集体]]后，总溶剂化自由能为负值（−2.11 kJ/mol）。对于 M4 和 ${ \bf I 4 } ,$，尽管聚集前的溶剂化自由能为负值（$\mathbf { M } 4 ; - 2 8 . 3 8$ 为 −9.71 kJ/mol，I4 为 kJ/mol），仍观察到了聚集。事实上，对于 I4，溶剂化自由能最初变得不那么负（−29.93 kJ/mol），表明至少从溶剂化贡献来看，聚集体的形成是不利的。在这种情况下，聚集很可能由 HA 分子之间的静电、[[范德华相互作用|vdW]] 和[[氢键|氢键相互作用]]驱动。

[[分子间相互作用能]]如图 $^ { 7 \mathrm { c } , }$ 所示，使用 [[gmx hbond|gmx-hbond]] 程序确定的[[氢键]]数量如图 7d 所示。在这三个体系中，[[范德华相互作用|vdW 相互作用]]均占主导地位，但其大小相近，因此无法解释所观察到的差异。然而，I4 中的[[静电相互作用]]显著大于 N4 中的静电相互作用。这可以解释为何尽管[[溶剂化自由能]]发生了不利变化，[[分子聚集|聚集]]体仍能形成。[[溶剂化]]与 [[腐殖酸|HA]] 分子间静电相互作用之间的平衡，可以解释 I4 体系为何能够膨胀和收缩。同样，这与图 $^ { 6 , }$ 所示的实验结果一致，表明 HA 在近中性溶液中的[[溶解性]]高于在酸性溶液中的溶解性。氢键相互作用分析表明，聚集后，I4（0.96）、N4（1.16）和 M4（0.97）中 HA 对之间的平均[[分子间氢键]]数量大致相同，表明氢键对 HA 聚集的贡献较小。

3.4. 环境意义。本研究充分展示了对 [[腐殖酸|HA]] 在水相中行为的一系列新认识，并从分子层面阐明了 [[pH]] 环境与 HA 的结构、[[溶解性]]及[[分子聚集|聚集行为]]之间的关系。已知溶液 pH 是决定 HA 聚集程度的因素，这一点得到了 [[分子动力学模拟|MD 模拟]]、[[动态光散射|DLS 测量]]和 [[透射电子显微镜|TEM]] 成像的证实。观察发现，离子化的 HA 分子（代表近中性 pH 条件）组装成[[丝状结构]]，而中性的 HA 分子（代表酸性 pH 条件）则形成[[液滴状聚集体]]。这种行为可以从[[原子间相互作用]]性质和[[溶剂化|溶剂化效应]]的差异来解释，具体而言，即广泛分布的[[羧酸根基团]][[质子化]]导致[[亲水性]]降低。

理解 [[腐殖酸|HA]] 随 [[pH]] 变化而发生[[分子聚集|聚集]]的分子细节，对[[重金属离子]]乃至[[放射性核素]][[污染场地修复|污染场地的修复]]具有直接意义。这些场地的修复需要去除[[金属离子]]。这些[[阳离子]]在水相中形成稳定的[[水合配合物]]。<sup>57,58</sup> 可使用[[螯合试剂]]将其捕获，这些试剂既可通过[[配体交换]]形成[[内层配位配合物]]，也可形成将[[水合金属离子]]配合物包裹在内的[[外层配位配合物]]。<sup>59,60</sup> 原则上，HA 能够通过这两种机制参与其中，因为它既含有多种能够直接与金属离子[[配位]]的[[官能团]]，也能形成包含多种[[孔隙]]的聚集体，从而将各种离子和其他配合物捕获在其中。<sup>14,61</sup>

事实上，在[[土壤]]中，[[腐殖酸聚集体|HA 聚集体]]预计会形成一种复杂的[[复合材料]]，其中包含小型[[无机离子]]，例如[[氯离子]]、[[碳酸根离子|碳酸根阴离子]]，以及[[富里酸]]等[[有机配体]]，这可能进一步增强其捕获[[重金属配合物]]的能力。相比之下，在高 [[pH]] 条件下，[[腐殖酸|HA]] 的[[亲水性]]增强，带电的[[羧酸根基团]]暴露出来，可直接与[[重金属离子]][[配位]]。然而，由于 HA 在近中性 pH 条件下的[[分子聚集|聚集]]倾向较低，尽管[[金属离子]]与 HA 的结合会更加紧密，离子在整个体系中[[污染物迁移|迁移]]的总体速率却很可能更高。<sup>62−64</sup> 人们认为，[[地下水]]中 HA 的存在形态会影响其结合和迁移重金属离子的能力，因此，地下水 pH 有望用于调控基于 HA 的[[污染场地修复|污染场地修复策略]]。

## ■ 相关内容

## \*sı 补充信息

补充信息可在 https://pubs.acs.org/doi/10.1021/acs.est.1c05938. 免费获取

[[腐殖酸|HA]] 的化学组成、模拟体系的组成及关键参数、温度、[[傅里叶变换红外光谱|FTIR 光谱]]中[[特征峰归属|特征峰的归属]]、代表性快照、[[均方根偏差|RMSD]]、[[折叠构象|折叠态]]的性质、[[非共价相互作用]]（[[非共价相互作用分析|NCI]]）分析、[[氢键]]、[[聚类分析]]、[[腐殖酸聚集体|HA 聚集体]]的照片、M4 体系、本工作的意义及其与其他已发表工作的差异，以及使用 [[Stevenson腐殖酸模型|Stevenson HA 模型]]的原因（PDF）

## ■ 作者信息

## 通讯作者

Al<sub>an</sub> E M<sub>ar</sub>k − [[昆士兰大学化学与分子生物科学学院|澳大利亚昆士兰大学化学与分子生物科学学院]]，St. Lucia，QLD 4072；orcid.org/0000-0001-5880-4798；电子邮件：a.e.mark@uq.edu.au

[[Ni Li]] − [[四川大学原子核科学技术研究所]]，[[教育部辐射物理及技术重点实验室]]，中国成都 610064；orcid.org/0000-0003-2835-8066；电子邮件：nliu720@scu.edu.cn

D<sub>ongq</sub>i W<sub>ang</sub> − [[大连理工大学化工学院]]，中国大连 116024；orcid.org/0000-0001-9415-1173；电子邮件：wangdq@ dlut.edu.cn

## 作者

T<sub>u</sub> L<sub>an</sub> − [[四川大学原子核科学技术研究所]]，[[教育部辐射物理及技术重点实验室]]，中国成都 610064；orcid.org/0000-0002-9877-2636

P<sub>eng</sub> W<sub>u</sub> − [[四川大学原子核科学技术研究所]]，[[教育部辐射物理及技术重点实验室]]，中国成都 610064

Zi<sub>y</sub>i [[锂|Li]]<sub>u</sub> − [[大连理工大学化工学院]]，中国大连 116024；orcid.org/ 0000-0003-1616-7537

M<sub>artin</sub> S<sub>troet</sub> − [[昆士兰大学化学与分子生物科学学院]]，澳大利亚昆士兰州圣卢西亚 4072

Ji<sub>a</sub>[[锂|li]] Li<sub>ao</sub> − [[四川大学原子核科学技术研究所]]，[[教育部辐射物理及技术重点实验室]]，中国成都 610064

Zhif<sub>ang</sub> Ch<sub>a</sub>i − [[苏州大学放射医学与辐射防护国家重点实验室]]及[[苏州大学放射医学与交叉学科学院|放射医学与交叉学科学院]]（RAD-X），中国苏州 215123

完整联系信息见：https://pubs.acs.org/10.1021/acs.est.1c05938

## 声明

作者声明不存在任何竞争性经济利益。

## ■ 致谢

本研究获得了国家自然科学基金（项目编号：22106111、21473206）、辽宁省“兴辽英才计划”（XLYC2002015）和中央高校基本科研业务费的资助。计算工作在国家超级计算天津中心（NSCC-TJ）的计算网格上完成。

## ■ 参考文献

(1) [[Stevenson]], F. J. [[腐殖质]]化学：形成、组成与反应；John [[Wiley]] & Sons：纽约，1994；第 1−56 页。

(2) Aiken, G. R.; McKnight, D. M.; Wershaw, R. L.; MacCarthy, P. [[土壤]]、[[沉积物]]和水中的[[腐殖质]]：地球化学、分离与表征；John [[Wiley]] & Sons：纽约，1985；第 493− 582 页。

(3) Trout, C. C.; Kubicki, J. D. Al<sup>3+</sup> 和苯与 Suwannee [[富里酸]]相互作用的[[分子建模]]。Geochim. Cosmochim. Acta 2007, 71, 3859−3871.

(4) Aristilde, L.; Sposito, G. [[腐殖质]]对环丙沙星的结合：[[分子动力学]]研究。Environ. Toxicol. Chem. 2010, 29, 90−98.

(5) Jebali, A.; Behzadi, A.; Rezapor, I.; Jasemizad, T.; Hekmatimoghaddam, S. H.; Halvani, G. H.; Sedighi, N. 胺改性[[纳米纤维素]]对[[腐殖酸]]的[[吸附]]：实验与模拟研究。Int. J. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2015, 12, 45−52.

(6) Sadhu, B.; Sundararajan, M.; Bandyopadhyay, T. 水介导的[[富里酸]]对锶和铯[[阳离子]]的差异性结合。J. Phys. Chem. B 2015, 119, 10989−10997.

(7) Wu, G.; [[Zhu]], X.; Ji, H.; Chen, D. 重质原油与[[土壤]]有机质包覆[[石英]]表面之间相互作用的[[分子建模]]。Chemosphere 2015, 119, 242−249.

(8) Zhou, X.; Wang, B.; Lan, T.; Chen, H.; Wang, H.; Tao, Y.; [[锂|Li]], Z.; Ibrahim, K.; Wang, D.; Feng, W. 扭曲的长程有序纳米结构诱导的[[氧化石墨烯]]–[[腐殖酸]]夹层复合物的手性。J. Phys. Chem. C 2016, 120, 25789−25795.

(9) Tan, L.; Tan, X.; Mei, H.; Ai, Y.; Sun, L.; Zhao, G.; Hayat, T.; Alsaedi, A.; Chen, C.; Wang, X. [[腐殖酸]]在含 Cs<sup>+</sup>、Sr<sup>2+</sup> 和 Eu<sup>3+</sup> 水溶液中的凝聚行为：[[动态光散射|DLS]]、EEM 和 [[分子动力学模拟|MD 模拟]]。Environ. Pollut. 2018, 236, 835−843.

(10) Tan, L.; Yu, Z.; Tan, X.; Fang, M.; Wang, X.; Wang, J.; Xing, J.; Ai, Y.; Wang, X. [[腐殖酸聚集体]]中[[金属离子]]结合的系统研究：[[聚集动力学]]、光谱分析和 [[分子动力学模拟|MD 模拟]]。Environ. Pollut. 2019, 246, 999−1007.

(11) Petrov, D.; Tunega, D.; Gerzabek, M. H.; [[Oostenbrink]], C. 多种不同小分子有机物在风化褐煤[[腐殖酸]]中[[吸附]]过程的[[分子建模]]。Eur. J. Soil Sci. 2020, 71, 831−844.

(12) Gotsmy, M.; Escalona, Y.; [[Oostenbrink]], C.; Petrov, D. 探索[[土壤]]有机质中蛋白质的结构与动力学。Proteins: Struct., Funct., Bioinf. 2021, 89, 925−936.

(13) Lan, T.; Wang, H.; Liao, J.; Yang, Y.; Chai, Z.; Liu, N.; Wang, D. [[分子动力学模拟]]揭示疏水表面存在时[[腐殖酸]]的动力学及其与[[铀酰]]的相互作用。[[Environmental Science & Technology|Environ. Sci. Technol.]] 2016, 50, 11121−11128.

(14) Lan, T.; Liao, J.; Yang, Y.; Chai, Z.; Liu, N.; Wang, D. [[分子动力学模拟]]揭示[[腐殖酸]]与[[氧化石墨烯]]在[[铀酰]][[吸附]]中的竞争/协同作用。[[Environmental Science & Technology|Environ. Sci. Technol.]] 2019, 53, 5102−5110.

(15) [[Zhu]], X.; Chen, D.; Wu, G. 溢油过程中[[沥青质]]与[[腐殖酸]][[共聚集]]的[[分子动力学模拟]]。Chemosphere 2015, 138, 412−421.

(16) Sündermann, A.; Solc, R.; Tunega, D.; Haberhauer, G.; Gerzabek, M. H.; [[Oostenbrink]], C. 维也纳[[土壤]]有机质建模器生成[[腐殖质]]的[[凝聚相]]模型。J. Mol. Graphics Modell. 2015, 62, 253−261.

(17) Escalona, Y.; Petrov, D.; [[Oostenbrink]], C. 维也纳[[土壤]]有机质建模器 2（VSOMM2）。J. Mol. Graphics Modell. 2021, 103, No. 107817.

(18) Petrov, D.; Tunega, D.; Gerzabek, M. H.; [[Oostenbrink]], C. 标准风化褐煤[[腐殖酸]]的[[分子动力学模拟]]：结构与动力学的微观分析。[[Environmental Science & Technology|Environ. Sci. Technol.]] 2017, 51, 5414−5424.

(19) Diallo, M. S.; Simpson, A.; Gassman, P.; Faulon, J. L.; Johnson, J. H.; Goddard, W. A.; Hatcher, P. G. 通过[[实验表征]]、[[计算机辅助结构解析]]和[[原子级模拟]]对[[腐殖酸]]进行[[三维结构建模]]。1. [[Chelsea 土壤腐殖酸]]。[[Environmental Science & Technology|Environ. Sci. Technol.]] 2003, 37, 1783−1793.

(20) Porquet, A.; Bianchi, L.; Stoll, S. 水中[[富里酸团簇]]的[[分子动力学模拟]]。Colloids Surf., A 2003, 217, 49−54.

(21) Sutton, R.; Sposito, G.; Diallo, M. S.; Schulten, H. R. [[溶解性有机质]]模型的[[分子模拟]]。Environ. Toxicol. Chem. 2005, 24, 1902−1911.

(22) Alvarez-Puebla, R. A.; Valenzuela-Calahorro, C.; Garrido, J. J. [[富里酸]]结构、[[分子构象|构象]]与[[分子聚集|聚集]]的理论研究：[[分子建模]]方法。Sci. Total Environ. 2006, 358, 243−254.

(23) Mobed, J. J.; Hemmingsen, S. L.; Autry, J. L.; McGown, L. B. [[国际腐殖质学会|IHSS]] [[腐殖质]]的[[荧光表征]]：经[[吸光度校正]]的[[总发光光谱]]。[[Environmental Science & Technology|Environ. Sci. Technol.]] 1996, 30, 3061−3065.

(24) Wei, M.; Liao, J.; Liu, N.; Zhang, D.; Kang, H.; Yang, Y.; Yang, Y.; Jin, J. 铀与[[腐殖酸]]的相互作用（I）：[[六价铀|U(VI)]] 在[[土壤腐殖酸]]中的[[吸附|吸附行为]]。Nucl. Sci. Tech. 2007, 18, 287−293.

(25) Schäfer, A.; Horn, H.; Ahlrichs, R. [[锂|Li]] 至 [[氪|Kr]] 原子的[[收缩高斯基组|全优化收缩高斯基组]]。J. Chem. Phys. 1992, 97, 2571− 2577.

(26) [[Oostenbrink]], C.; Villa, A.; Mark, A.; van Gunsteren, W. 基于[[水合]]与[[溶剂化自由焓]]的[[生物分子力场]]：[[GROMOS 力场]]参数集 [[GROMOS 53A5 力场参数集|53A5]] 和 [[GROMOS 53A6 力场参数集|53A6]]。J. Comput. Chem. 2004, 25, 1656−1676.

(27) Malde, A. K.; Zuo, L.; Breeze, M.; Stroet, M.; Poger, D.; Nair, P. C.; [[Oostenbrink]], C.; Mark, A. E. [[自动化力场拓扑构建器]]（ATB）及存储库：1.0 版。J. Chem. Theory Comput. 2011, 7, 4026−4037.

(28) Breneman, C.; Wiberg, K. 根据[[分子静电势]]确定[[原子中心单极电荷|以原子为中心的单极电荷]]。[[甲酰胺]][[构象分析]]中高采样密度的必要性。J. Comput. Chem. 1990, 11, 361−373.

(29) Hariharan, P. C.; Pople, J. A. [[极化函数]]对[[分子轨道]][[氢化能]]的影响。Theor. Chim. Acta 1973, 28, 213−222

(30) Becke, A. D. [[Hartree–Fock 理论|Hartree-Fock 理论]]与[[局域密度泛函理论]]的一种新混合方式。J. Chem. Phys. 1993, 98, 1372−1377.

(31) Frisch, M. J.; Trucks, G. W.; Schlegel, H. B.; Scuseria, G. E.; Robb, M. A.; Cheeseman, J. R.; Scalmani, G.; Barone, V.; Mennucci, B.; Petersson, G. A.; Nakatsuji, H.; Caricato, M.; [[锂|Li]], X.; Hratchian, H. P.; Lzmaylov, A. F.; Bloino, J.; Zheng, G.; Sonnenberg, J. L.; Hada, M.; Ehara, M.; Toyota, K.; Fukuda, R.; Hasegawa, J.; Ishida, M.; Nakajima, T.; Honda, Y.; Kitao, O.; Nakai, H.; Vreven, T.; Montgomery, J. A., Jr.; Peralta, J. E.; Ogliaro, F.; Bearpark, M.; Heyd, J. J.; Brothers, E.; Kudin, K. N.; Staroverov, V. N.; Kobayashi, R.; Normand, J.; Raghavachari, K.; Rendell, A.; Burant, J. C.; Lyengar, S. S.; Tomasi, J.; Cossi, M.; Rega, N.; Millam, J. M.; Klene, M.; Knox, J. E.; Cross, J. B.; Bakken, V.; Adamo, C.; Jaramillo, J.; Gomperts, R.; Stratmann, R. E.; Yazyev, O.; Austin, A. J.; Cammi, R.; Pomelli, C.; Ochterski, J. W.; Martin, R. L.; Morokuma, K.; Zakrzewski, V. G.; Voth, G. A.; Salvador, P.; Dannenberg, J. J.; Dapprich, S.; Daniels, A. D.; Farkas, O.; Foresman, J. B.; Ortiz, J. V.; Cioslowski, J.; Fox, D. J. [[Gaussian|Gaussian 09]]; [[Gaussian, Inc.]]: Wallingford, CT, 2009.

(32) Pronk, S.; Páll, S.; Schulz, R.; Larsson, P.; Bjelkmar, P.; Apostolov, R.; Shirts, M. R.; Smith, J. C.; Kasson, P. M.; van der Spoel, D.; Hess, B.; Lindahl, E. [[GROMACS|GROMACS 4.5]]：一种高通量、高度并行的开源[[分子模拟]]工具包。Bioinformatics 2013, 29, 845−854.

(33) Abraham, M. J.; Murtola, T.; Schulz, R.; Páll, S.; Smith, J. C.; Hess, B.; Lindahl, E. [[GROMACS]]：通过[[并行计算|多层次并行]]实现从笔记本电脑到[[超级计算机]]的高性能[[分子模拟]]。SoftwareX 2015, 1−2, 19−25.

(34) Berendsen, H. J. C.; Grigera, J. R.; Straatsma, T. P. [[有效对势]]中缺失的项。J. Phys. Chem. A 1987, 91, 6269− 6271.

(35) Bussi, G.; Donadio, D.; Parrinello, M. 通过[[速度重标度]]进行[[正则系综采样]]。J. Chem. Phys. 2007, 126, No. 014101.

(36) Parrinello, M.; Rahman, A. [[单晶]]中的[[多晶型转变]]：一种新的[[分子动力学模拟|分子动力学方法]]。J. Appl. Phys. 1981, 52, 7182−7190.

(37) Hess, B. [[P-LINCS 算法|P-LINCS]]：用于[[分子模拟]]的并行线性约束求解器。J. Chem. Theory Comput. 2008, 4, 116−122.

(38) Essmann, U.; Perera, L.; Berkowitz, M. L.; Darden, T.; Lee, H.; Pedersen, L. G. 一种[[平滑粒子网格 Ewald 方法]]。J. Chem. Phys. 1995, 103, 8577−8593.

(39) Humphrey, W.; Dalke, A.; Schulten, K. [[VMD]]：可视化[[分子动力学]]。J. Mol. Graphics 1996, 14, 33−38.

(40) Lu, T.; Chen, F. [[Multiwfn]]：一种多功能[[波函数分析]]程序。J. Comput. Chem. 2012, 33, 580−592.

(41) Johnson, E. R.; Keinan, S.; Mori-Sanchez, P.; Contreras-Garcia, J.; Cohen, A. J.; Yang, W. 揭示[[非共价相互作用]]。J. Am. Chem. Soc. 2010, 132, 6498−6506.

(42) Merrick, J. P.; Moran, D.; Radom, L. [[谐振动频率缩放因子]]的评估。J. Phys. Chem. A 2007, 111, 11683−11700.

(43) Schepetkin, I. A.; Khlebnikov, A. I.; Ah, S. Y.; Woo, S. B.; Jeong, C. S.; Klubachuk, O. N.; Kwon, B. S. [[木乃伊药]]（mumie）中[[腐殖质]]的表征及[[生物活性]]。J. Agric. Food Chem. 2003, 51, 5245−5254.

(44) [[锂|Li]], L.; Zhao, Z.; Huang, W.; Peng, P.; Sheng, G.; Fu, J. 经[[超滤分级]]的[[腐殖酸]]的表征。Org. Geochem. 2004, 35, 1025−1037.

(45) Trompowsky, P. M.; Benites, V. D.; Madari, B. E.; Pimenta, A. S.; Hockaday, W. C.; Hatcher, P. G. [[桉木炭]]经[[化学氧化]]所得[[类腐殖质]]的表征。Org. Geochem. 2005, 36, 1480−1489.

(46) Shirshova, L. T.; Ghabbour, E. A.; Davies, G. 采用不同提取方法从[[土壤]]中分离的[[腐殖酸]]组分的[[光谱表征]]。Geoderma 2006, 133, 204−216.

(47) Kim, H.-C.; Yu, M.-J. 常规处理水的[[水深度处理|深度处理]]过程中与 [[消毒副产物|DBPs]] 生成相关的[[水生腐殖质]]表征。J. Hazard. Mater. 2007, 143, 486−493.

(48) He, M. C.; Shi, Y. H.; Lin, C. Y. 从中国不同河流和湖泊[[沉积物]]中提取的[[腐殖酸]]的表征。J. Environ. Sci. 2008, 20, 1294−1299.

(49) Esteves, V. I.; Otero, M.; Duarte, A. C. 开放海洋、[[河口水]]和[[淡水]]中[[腐殖质]]的比较表征。Org. Geochem. 2009, 40, 942−950.

(50) Eisenhaber, F.; Lijnzaad, P.; Argos, P.; Sander, C.; Scharf, M. [[双立方晶格法]]：用于[[表面积]]和体积[[数值积分]]以及[[分子聚集体]]点表面轮廓构建的高效方法。J. Comput. Chem. 1995, 16, 273−284.

(51) Lan, T.; Zeng, H.; Tang, T. 利用[[分子动力学模拟]]理解作为模型[[沥青质]]化合物的[[紫蒽酮-79]] 在[[石英]]表面的[[吸附]]。J. Phys. Chem. C 2018, 122, 28787−28796.

(52) Myneni, S. C. B.; Brown, J. T.; Martinez, G. A.; Meyer-Ilse, W. 水和[[土壤]]中[[腐殖质]][[大分子结构]]的成像。Science 1999, 286, 1335−1337.

(53) Chen, Y.; Schnitzer, M. [[腐殖酸]]、[[富里酸]]及其金属和[[黏土复合物]]的[[SEM|扫描电子显微镜]]研究。Soil Sci. Soc. Am. J. 1976, 40, 682−686.

(54) [[Daura]], X.; van Gunsteren, W. F.; Mark, A. E. 基于[[平衡模拟]]的 [[β-七肽]][[折叠与解折叠热力学|折叠−解折叠热力学]]。Proteins: Struct., Funct., Bioinf. 1999, 34, 269−280.

(55) Plaschke, M.; Römer, J.; Klenze, R.; Kim, J. I. 不同 [[pH]] 下[[吸附]]态[[腐殖酸胶体]]的[[原位原子力显微镜|原位 AFM]] 研究。Colloids Surf., A 1999, 160, 269−279.

(56) Baalousha, M.; Motelica-Heino, M.; Galaup, S.; Le Coustumer, P. 采用改进的[[样品制备]]与[[染色方法]]通过 [[透射电子显微镜|TEM]] 研究[[腐殖酸]]的[[超分子结构]]。Microsc. Res. Tech. 2005, 66, 299− 306.

(57) Persson, I. 水溶液中的[[水合金属离子]]：其结构有多规则？Pure Appl. Chem. 2010, 82, 1901−1917.

(58) Jakubowska, A. [[水合金属离子]]的[[成键稳定性]]与[[脱水常数]]. J. Chem. Eng. Data 2010, 55, 1876−1881.

(59) Sverjensky, D. A.; Fukushi, K. 与光谱数据一致的[[氧化物表面]] [[三价砷|As(III)]] [[吸附]]与[[化学物种分布|物种分布]]预测模型（[[扩展三层模型|ETLM]]）. Geochim. Cosmochim. Acta 2006, 70, 3778−3802.

(60) Pankhurst, J. R.; Bell, N. L.; Zegke, M.; Platts, L. N.; Lamfsus, C. A.; Maron, L.; Natrajan, L. S.; Sproules, S.; Arnold, P. L.; Love, J. B. 由具有[[氧化还原活性]]、供体位点扩展的[[二吡咯亚甲基配体]]支撑的[[铀酰]]的[[内球还原|内球]]与[[外球还原]]. Chem. Sci. 2017, 8, 108−116.

(61) Lindoy, L. F. 天然[[离子载体]] [[拉沙洛菌素A|lasalocid A]] 对[[阳离子]]的外球与[[内球络合]]. Coord. Chem. Rev. 1996, 148, 349−368.

(62) Reiller, P.; Casanova, F.; Moulin, V. [[腐殖酸]]存在时添加顺序和接触时间对[[赤铁矿]]滞留钍(IV)的影响. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2005, 39, 1641−1648.

(63) Pan, D.; Fan, Q.; [[锂|Li]], P.; Liu, S.; Wu, W. Th(IV) 在钠基膨润土上的[[吸附]]：[[pH]]、离子强度、[[腐殖质]]和温度的影响. Chem. Eng. J. 2011, 172, 898−905.

(64) Yang, J.; Ge, M.; Jin, Q.; Chen, Z.; Guo, Z. [[六价铀|U(VI)]]、[[腐殖酸]]与胶体三水铝石在水饱和多孔介质中的共同[[污染物迁移|迁移]]. Chemosphere 2019, 231, 405−414.