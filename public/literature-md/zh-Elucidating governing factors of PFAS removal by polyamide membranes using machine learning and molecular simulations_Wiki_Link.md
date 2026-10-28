---
title: "zh-Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations Wiki全文"
source_markdown: "2.SCI_MD/Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations/Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations.md"
cn_markdown: "2.SCI_MD/Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations/zh-Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations.md"
type: translated_fulltext_wiki
---
<!-- PaperMDLab-NAV:START -->
> [!info] 论文四向互链（PaperMDLab 自动维护）
> [[2.SCI_MD/Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations/Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations|英文原文]] · [[2.SCI_MD/Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations/zh-Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations|中文译文]] · **中文全文双链（当前）** · [[4.SCI_AI_Summary/summary-zh-Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations|AI中文总结]]
<!-- PaperMDLab-NAV:END -->


# 利用[[机器学习]]和[[分子模拟]]阐明[[聚酰胺膜]]去除 [[PFAS]] 的调控因素

收稿日期：2024 年 3 月 19 日

录用日期：2024 年 12 月 9 日

在线发布日期：2024 年 12 月 30 日

检查更新

Nohyeong Jeong <sup>1,6</sup>、Shinyun Park<sup>2,3,6</sup>、Subhamoy Mahajan <sup>4</sup>、Ji Zhou<sup>4</sup>、Jens Blotevogel <sup>2,5</sup>、Ying Li <sup>4</sup>、Tiezheng Tong <sup>2,3</sup> 及 Yongsheng Chen <sup>1</sup>

[[全氟和多氟烷基物质]]（PFASs）近来因其对人类和生态健康的影响而引发了广泛关注。尽管[[聚酰胺膜]]在修复受 PFASs 污染的水体方面发挥着重要作用，但影响 [[PFAS]] 跨膜传输的调控因素仍不明确。在本研究中，我们使用两种[[机器学习]]（ML）模型，即 [[XGBoost]] 和[[Transformer|多模态 transformer 模型]]，研究了[[聚酰胺]]膜对 PFAS 的[[截留]]。利用 [[Shapley加性解释|Shapley 加性解释]]方法对 XGBoost 模型进行解释，揭示了 PFAS 特性与膜性质对模型预测的影响。对化学结构影响的考察涉及通过[[热图]]解释结合了[[简化分子输入线录入系统]]字符串的多模态 transformer 模型，从而直观呈现分配给 PFAS 分子每个原子的[[注意力分数]]。两种 ML 解释方法均突出表明，[[静电相互作用]]在调控 PFAS 跨聚酰胺膜传输中起主导作用。[[分子模拟]]进一步揭示了[[官能团]]在改变 PFAS 跨膜传输中的作用。将 ML 与计算机模拟相结合，不仅推进了我们对聚酰胺膜去除 PFAS 的认识，还提供了一种创新方法，以促进数据驱动的特征选择，从而开发具有更高 PFAS 去除效率的高性能膜。

[[全氟和多氟烷基物质]]（PFASs）是一类人造化合物，具有氟化碳骨架和不同的[[官能团|官能头基]]。[[碳氟键|强碳氟键]]以及将内部具有氧化还原活性的碳屏蔽起来的[[螺旋构象]]<sup>1</sup>，赋予了 PFASs 卓越的稳定性<sup>2,3</sup>，并使其对水、油和热具有高度耐受性<sup>4</sup>。这些独特的性质使 PFASs 适用于广泛的商业应用，如不粘炊具、防污产品和阻燃剂<sup>4–7</sup>，但 PFASs 的持久性、毒性和生物累积潜力已引发人们对其对人类和生态健康影响的重大关切<sup>8,9</sup>。对长链 PFASs（如[[全氟辛烷磺酸]]（PFOS）和[[全氟辛酸]]（PFOA））的健康关切，已促使北美和欧洲逐步淘汰长链 [[PFAS]] 的生产<sup>10</sup>，同时伴随向短链替代品更高产量生产的转变<sup>11–13</sup>。然而，近期研究也揭示了短链 PFAS 化合物的毒性，原因在于其与长链同类物相比具有相似的持久性和更高的迁移性<sup>11,12</sup>。

全球水资源中 [[PFAS]] 的普遍存在已引起大量研究报告的警示<sup>4,14–18</sup>。有研究指出，受 [[全氟和多氟烷基物质|PFAS]] 污染的[[饮用水]]是人类接触 PFAS 的主要途径之一<sup>19–21</sup>，其原因在于传统水处理工艺对 PFAS 的去除效果不佳<sup>19,22</sup>。最近，[[美国环境保护署]]（USEPA）提出了针对六种 PFAS 物质的最终国家初级饮用水法规，为 [[全氟辛酸|PFOA]] 和 [[全氟辛烷磺酸|PFOS]] 设定了极低的[[最大污染物水平]]（MCLs），为 4 ng L^-1，同时对[[全氟己烷磺酸]]（PFHxS）、[[全氟壬酸]]（PFNA）和 [[GenX]] 等其他 PFAS 物质设定为 10 ng L^-1<sup>23</sup>。如此严格的法规，以及具有监管意义的 PFAS 清单不断扩大的威胁，都表明需要开发有效的 PFAS 去除技术<sup>23</sup>。这些技术对于潜在的水处理设施升级以满足相应法规至关重要。

[[膜分离]]是处理 [[PFAS]] 污染水源的一种重要方法<sup>24–26</sup>。以往研究已评估了[[纳滤]]（NF）和[[反渗透]]（RO）去除 [[全氟和多氟烷基物质|PFAS]] 的效率，其中使用具有亚纳米孔道的致密[[聚酰胺膜]]，使水相对于 PFAS 能够更快且选择性地传输<sup>26–30</sup>。虽然已有若干研究应用[[计算化学]]技术预测 PFAS 的降解和[[吸附]]<sup>31–33</sup>，但据我们所知，文献中尚未报道能够有效预测膜分离在 PFAS 去除中性能的方法，而该方法对于合理的膜选择与设计至关重要。这一知识空白在很大程度上是由于缺乏对 PFAS 与[[聚酰胺]]膜在[[水-膜界面]]及分子层面相互作用的机理理解。尽管膜性质和 PFAS 性质在控制 PFAS 传输中十分重要，但针对聚酰胺 NF 和 RO 膜去除 PFAS 的基本性质-结构-性能关系尚未建立。各种各样的 PFAS 化合物远不止已得到充分研究的 [[全氟辛烷磺酸|PFOS]] 和 [[全氟辛酸|PFOA]]，它们在[[官能团]]取代、电离状态、链长及其他特征上可能存在差异<sup>34,35</sup>。PFAS 性质的多样性，加之具有不同渗透选择性的膜的存在，使得识别膜处理中控制 PFAS 去除的关键因素成为一项特别复杂且具有挑战性的任务。能够准确估计 PFAS 去除效率，同时揭示膜和分子性质对 PFAS 跨聚酰胺膜传输影响的预测模型至关重要。此类模型不仅有助于推动知识进步，也有助于促进聚酰胺 NF 和 RO 膜在 PFAS 污染水体修复中的广泛应用。

近年来，[[机器学习]]（machine learning, ML）算法被越来越多地应用于预测膜性能以及探究[[膜分离]]的控制机制<sup>36–40</sup>。凭借其利用大型数据集的强大能力，ML 能够揭示多个变量之间复杂的相互关系。虽然 ML 已被成功用于预测[[聚酰胺膜|聚酰胺纳滤]]（[[纳滤|NF]]）和[[反渗透]]（RO）膜去除有机微污染物的效率<sup>36,41,42</sup>，但其在 [[PFAS]] 去除方面的应用仍然非常有限<sup>40</sup>。此外，文献中预测膜性能的 ML 模型主要依赖于[[分子描述符]]，例如分子量和正辛醇/水分配系数的对数（log K ），而直接利用化学结构作为输入变量的研究则很少被探索。将化学结构纳入 ML 模型可以更深入地理解特定结构特征如何影响膜过滤过程中 [[全氟和多氟烷基物质|PFAS]] 的传输行为。然而，鉴于 PFAS 化合物分子构型的多样性，将化学结构信息整合到 ML 模型中仍然是一项重大挑战。

[[Transformer]] 神经网络最初是为[[自然语言处理]]（natural language processing, NLP）而开发的，现已成功应用于计算机视觉和材料设计<sup>43–45</sup>。与传统的神经网络不同，Transformer 采用了一种称为“[[注意力机制|注意力]]”（attention）的新机制，使其能够在模型训练过程中选择性地优先处理输入变量<sup>46</sup>。这种独特的机制使 Transformer 能够有效分析并识别变量之间的相互依赖关系，突出序列中各个元素的影响。通过利用简化分子输入行输入系统（[[简化分子输入线录入系统|simplified molecular input line entry system]], [[SMILES]]）字符串来表示 [[PFAS]] 化合物复杂的化学结构，Transformer 在分析序列数据方面的强大能力为探索化学结构对 [[全氟和多氟烷基物质|PFAS]] 跨[[聚酰胺膜]]传输的影响提供了一种有前景的方法。

在本研究中，我们采用 [[XGBoost]] 和[[Transformer|多模态 Transformer 模型]]来阐明[[聚酰胺膜|聚酰胺纳滤]]（[[纳滤|NF]]）和[[反渗透]]（RO）膜去除 [[PFAS]] 的性能及其潜在机制（图 1）。利用从现有文献来源收集的训练数据，[[机器学习|ML]] 模型的预测性能通过我们对含[[水性成膜泡沫]]（[[水成膜泡沫|AFFF]]）污染进水进行 NF 处理所获得的实验数据进行评估。鉴于 AFFF 含有多种 [[全氟和多氟烷基物质|PFAS]] 化合物，使用该 PFAS 混合物评估 ML 模型，是一种验证模型在预测膜去除 PFAS 性能方面准确性和泛化能力的稳健方法。为利用 XGBoost 模型探究 PFAS 传输机制，我们采用 [[Shapley加性解释|Shapley 加性解释]]（[[SHAP]]）——一种植根于[[合作博弈论]]的模型解释方法<sup>47</sup>——来分析影响[[聚酰胺]]膜去除 PFAS 的关键控制因素。随后，我们引入一种新方法，利用多模态 Transformer 模型通过[[热图]]研究化学结构在调控 PFAS 去除中的作用，这些热图可视化了各个化学元素对模型预测的贡献。将综合解释应用于 XGBoost 和多模态 Transformer 模型，既提供了与膜和 PFAS 性质相关的宏观见解，也提供了与化学结构相关的微观视角。该方法通过在两个层面提供全面分析，加深了我们对 PFAS 去除的理解。ML 模型揭示的聚酰胺 NF 和 RO 膜去除 PFAS 的分子机制，进一步通过[[分子动力学]]（MD）模拟进行了探究。最后，我们讨论了研究结果对将 NF 和 RO 作为具有竞争力且至关重要的技术以实现 PFAS 污染水体高效修复的意义。

## 结果与讨论

## [[机器学习|ML]] 模型的预测性能

[[XGBoost]] 和[[Transformer|多模态 transformer 模型]]使用从现有文献来源收集的 457 个数据点进行训练，这些数据涉及 21 种 [[PFAS]] 物种和 16 种[[聚酰胺膜|聚酰胺 NF]] 及 [[反渗透|RO]] 膜的 [[全氟和多氟烷基物质|PFAS]] 去除。随后，使用我们自身实验获得的 77 个数据点对模型性能进行评估。通过使用来自 [[水性成膜泡沫|AFFF]] 污染进水（补充数据 1）的复杂 PFAS 混合物评估模型精度，我们展示了 [[机器学习|ML]] 模型在（相比于使用单一 PFAS）更具挑战性条件下的表现。预测精度使用[[均方根误差]]（RMSE）和[[平均绝对误差]]（MAE）进行检验。如图 2 所示，XGBoost 模型的 RMSE 为 8.4%，MAE 为 6.4%，而多模态 transformer 模型的 RMSE 和 MAE 分别为 5.9% 和 4.5%（补充表 1）。尽管多模态 transformer 模型显示出略高的预测精度，但这种微小差异表明，这些模型在预测性能上具有可比性。与先前使用 ML 估算膜性能的研究（RMSE 为 4.6–17.5%；MAE 为 6.1–13.2%）<sup>36–38,41,48</sup> 相比，本研究中的 XGBoost 和多模态 transformer 模型展现出相当或更优的预测精度。扩展数据集以涵盖更广泛的 PFAS 去除率，并统一各研究间的实验方案，对于进一步提高模型精度和可靠性至关重要。此外，正如我们近期发表的研究<sup>36,37</sup> 所示，具有较强预测性能的 ML 模型能够充分捕捉溶质传输机制。因此，我们将在后续章节中评估我们的 ML 模型揭示[[聚酰胺]] [[纳滤|NF]] 和 RO 膜去除 PFAS 的关键控制因素的潜力。

通过 [[SHAP]] 方法识别 [[PFAS]] 去除的关键因素 尽管 [[机器学习|ML]] 技术在环境科学与工程领域中的应用日益增多<sup>36–40,49</sup>，但 ML 的黑箱特性使得理解其决策过程具有挑战性。[[可解释人工智能]]（XAI）已被用于探索输入变量的贡献和 ML 模型的潜在知识，从而增强模型预测的可信度和信心<sup>36,37,50–53</sup>。在本节中，我们采用 [[Shapley加性解释|SHAP]] 方法——一种基于[[合作博弈论]]的 XAI——来阐明 [[XGBoost]] 模型关于[[聚酰胺膜]]去除 [[全氟和多氟烷基物质|PFAS]] 控制机制的知识。

如图 3a 所示，[[SHAP]] 概要图展示了每个输入变量对模型预测的影响。y 轴

![](<../2.SCI_MD/Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations/images/8c96e3cc7c2cdf42a8f3c38791513c413f3bd1d26b09636ce7522e814014931a.jpg>)  
图 1 | XGBoost 和多模态 transformer 模型用于预测聚酰胺 NF 和 RO 膜去除 PFAS 率的工作流程。SHAP 方法用于解释 XGBoost 模型，同时提取多模态 transformer 模型各层的注意力分数，以展示每个 PFAS 原子对模型预测的重要性。

a) [[XGBoost]]  
![](<../2.SCI_MD/Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations/images/752d75cafc568582aac1a5bde3911f8c773edd848ad923655a2f4cd8cbc43983.jpg>)  
图 2 | XGBoost 和多模态 transformer 模型对 PFAS 去除的预测性能。对于 XGBoost 模型，使用表示 PFAS 特性、膜性质和操作条件的数值变量作为输入变量。多模态 transformer 模型使用相同的

b) [[Transformer]]  
![](<../2.SCI_MD/Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations/images/15dde43467ecfb9b2de40412420a8e34575d2699e092d399e73fd0a9850cf63a.jpg>)  
除了编码 [[PFAS]] 分子化学结构的 [[SMILES|SMILES 字符串]]之外，还包含数值变量。x 轴和 y 轴分别表示 [[全氟和多氟烷基物质|PFAS]] 的真实去除率与预测去除率。源数据以 Source Data 文件形式提供。

![](<../2.SCI_MD/Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations/images/cb44c67ef9c237869421d5cd14cf23e04b3861b3414dec74a4ddce0c987ef97b.jpg>)

![](<../2.SCI_MD/Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations/images/2c22999cc2540e3a5be37db5cabff73a1077a1f55a61a090836d9c240c769866.jpg>)

![](<../2.SCI_MD/Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations/images/9c67eb6960ab6d021b0e7583fcf890727d8cf29e5725bb53c63991afc9ae4aee.jpg>)  
图 3 | XGBoost 模型影响 PFAS 去除预测的关键变量 SHAP 分析。a SHAP 汇总图，b SHAP 重要性，以及 (c) 电荷乘积、(d) 截留分子量 (MWCO)、(e) log $\mathsf { K } _ { \mathsf { o w } } ,$ 和 (f) PFAS 初始浓度 $( \mathbf { C _ { \mathrm { { i n } } } } )$ 的 SHAP 依赖图（由 XGBoost 模型获得）。IS 和 WCA 分别指离子强度和膜的水接触角。

排列方式表示输入变量的层级重要性，重要性自顶部向底部递减。点的颜色与其 [[SHAP]] 值相结合，展示了输入变量与其 [[Shapley加性解释|SHAP]] 值之间的相关性。为进一步量化这些 SHAP 值，我们计算了所有数据点的绝对 SHAP 值平均值 $( \mathsf { i . e . } ,$（即 SHAP 重要性得分）。如图 3b 所示，对模型预测贡献最大的输入变量（即 SHAP 重要性得分最高者）为[[电荷乘积]]（其定义见方法部分）、[[截留分子量]] ([[分子量截留|MWCO]])、log $\mathsf { K } _ { \mathsf { o w } } ,$ 和 $\mathsf { P F A S } ( \mathbf { C } _ { \mathrm { i n } } ) .$ 的初始浓度。考虑到与这些输入变量相关的[[膜分离]]机制，由电荷乘积直接表示的[[静电相互作用]]是决定[[聚酰胺膜|聚酰胺纳滤]]和[[反渗透]]膜对 [[PFAS]] 去除模型预测的最重要分离机制，其次是由 MWCO 体现的[[尺寸排阻]]和由 log ${ \sf K } _ { \sf o w }$ 及 ${ \bf C } _ { \mathrm { i n } } )$ 体现的[[吸附]]作用。

尽管 [[SHAP]] 重要性得分揭示了在决定模型预测中具有最高权重的支配性因素，但每个输入变量与模型输出之间的相关性——这对于理解[[机器学习]]模型学到的知识是否与领域知识一致至关重要——仍不清楚。因此，我们利用 [[Shapley加性解释|SHAP]] 依赖图（图 3c–f）进一步探究了四个排名最高的输入变量 $( \mathsf { i . e . } )$、[[电荷乘积]]、[[分子量截留|MWCO]]、log $\mathsf { K } _ { \mathsf { o w } } ,$ 和 $\mathbf { C } _ { \mathrm { i n } } )$ 的影响，这些图阐明了 SHAP 值如何随每个变量的变化而变化。如图 3c 所示，SHAP 值随电荷乘积的增加而增加（即电荷乘积的增加导致 [[PFAS]] 去除率升高）。由于酸性[[官能团]]（例如羧基和[[磺酸基]]）以及氟的强电负性<sup>54</sup>，大多数 [[全氟和多氟烷基物质|PFAS]] 表现出较低的 [[pKa|pK]] 值（通常 $\mathsf { p K } _ { \mathsf { a } } < 1 ,$，补充表 2）。因此，在收集 PFAS 去除数据的大多数实验 pH 条件（pH 3.5–10.0）下，PFAS 几乎完全[[去质子化]]并带有负电荷。除[[全氟辛烷磺酰胺]] (FOSA) 外，由于[[聚酰胺膜]]表面因水解产生的羧基而带负电，PFAS 与膜表面之间存在[[静电相互作用|静电排斥]]（即电荷乘积 > 0）。

![](<../2.SCI_MD/Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations/images/fd5618ebad8003aab9f634c2220134a0af6e140eb9db1baa551d1d744e04d5d9.jpg>)

![](<../2.SCI_MD/Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations/images/a8e2c85ac9bc9113ad4a498ad7fd195e4131e2c262c866d372eb5a4a9ceceb33.jpg>)  
为便于比较，每个重要性得分均按图 3b 中重要性最高的输入变量的重要性得分进行了归一化。图 3e 中圈出的数据点表示异常值。源数据以 Source Data 文件形式提供。

![](<../2.SCI_MD/Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations/images/6118fa1107f08845fbdda6549b3121b393e1fe4bfd98b7fc575ee8db4ae99dbf.jpg>)

$$
C _ {\text { in }}
$$

未反应的酰氯 $( - \mathbf { C } ( = { \mathbf { O } } ) \mathbf { C } { \mathbf { l } } ) { \mathbf { \Psi } } \mathbf { g r o u p s } ^ { 5 5 }$ 的贡献。随着带负电的 [[PFAS]] 与膜表面之间的[[静电相互作用|静电排斥]]增强（[[电荷乘积]]增大），[[XGBoost]] 模型正确预测出更高的 [[全氟和多氟烷基物质|PFAS]] 去除率（更高的 [[SHAP]] 值）。

[[分子量截留|MWCO]] 对模型预测的贡献如图 3d 所示。[[截留分子量|MWCO]] 的降低导致 [[SHAP]] 值升高，表明对于 MWCO 值较高的膜（通常对应更大的膜孔径），[[机器学习|ML]] 模型预测出较低的 [[PFAS]] 去除率。这一结果与[[膜分离]]的[[尺寸排阻|尺寸排斥]]机制一致。例如，[[Shapley加性解释|SHAP]] 值较低的数据点 $( \mathrm { e . g . } ,$（小于 −4.2，表明 [[全氟和多氟烷基物质|PFAS]] 去除率低）与具有最高 MWCO 的膜（如 [[XN45膜|XN45 膜]]）相关，这类膜被认为是结构疏松的[[聚酰胺膜|聚酰胺纳滤膜]]，其[[截留]]溶质能力有限。

排名第三和第四的变量是 log ${ \sf K } _ { \sf o w }$ 和 [[PFAS]] 初始浓度 $( \mathbf { C _ { \mathrm { { i n } } } } )$，两者均与[[吸附]]相关（图 3e、f）。图 3e 显示了 log $\mathsf { K } _ { \mathsf { o w } }$ 对模型预测的影响。除少量异常值（1.8%）外，通常观察到 log $\mathsf { K } _ { \mathsf { o w } } ,$ 增大导致更高的 [[SHAP]] 值，这对应于更强的吸附倾向<sup>56,57</sup>。如文献报道<sup>56,58,59</sup>，[[全氟和多氟烷基物质|PFAS]] 在膜表面的吸附有助于其被[[纳滤]]膜去除，尤其是在膜过滤的早期阶段。此外，长链 PFAS 的结合动力学快于短链 PFAS，因为它们与膜之间的[[疏水相互作用]]更强<sup>24,56</sup>。虽然 log ${ \sf K } _ { \sf o w }$ 主要代表化合物的[[疏水性]]<sup>60,61</sup>，但它也是 PFAS 大小的间接指标，与基于[[尺寸排阻|尺寸排斥]]的 PFAS 去除率呈正相关。随着 PFAS 物种链长的增加，其疏水性通常会增强<sup>59,62</sup>，从而导致更高的 log $\mathsf { K } _ { \mathsf { o w } } .$。在解释 [[Shapley加性解释|SHAP]] 值与 log $\mathsf { K } _ { \mathsf { o w } } .$ 之间的相关性时，可以归因于分子大小与疏水性之间这种相互交织的关系。

尽管 $\bf { \dot { C } } _ { \mathrm { i n } }$ 对模型预测贡献很大，但我们未观察到 $\mathbf { C _ { \mathrm { { i n } } } }$ 与 [[SHAP]] 值之间存在明确的关系（图 3f）。

![](<../2.SCI_MD/Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations/images/4f9b32ec9f59cfa0b9b9f3f1ec845cf0051349a0ae46d9518c67082e9a564712.jpg>)  
图 4 | 突出显示 PFAS 原子注意力得分的热图。热图将 PFAS 分为 (a) PFCA（蓝色框）、(b) PFSA（绿色框）和 (c) 其他 PFAS（橙色框）。这些 PFAS 类别的详细信息见补充表 2。图中所示 PFAS 化合物的化学结构也见补充图 2。源数据以 Source Data 文件形式提供。

这种趋势的缺失可能源于我们数据集中文献所使用的$\mathbf { C _ { \mathrm { { i n } } } }$范围较为宽泛。尽管大多数（约 70%）数据点对应的 [[PFAS]] 浓度较低（低于 20 µM），但约 30% 的数据点涉及更高的$\mathbf { C _ { \mathrm { { i n } } } }$，甚至高于 9 mM（补充图 1）。鉴于这种偏态的数据分布，[[机器学习]]模型很难在整个范围内捕捉到$\mathsf { C } _ { \mathrm { i n } }$与 [[SHAP]] 值之间清晰、线性的相关性。即便如此，由于[[梯度提升树]]的特性，[[XGBoost]] 模型仍能够从数据范围的若干小部分中捕捉到$\mathbf { C _ { \mathrm { { i n } } } }$的影响，而不损害模型性能。

## 利用 [[Transformer|transformer]] 模型探究 [[PFAS]] 去除的关键因素

尽管 [[SHAP]] 方法为揭示[[聚酰胺膜|聚酰胺纳滤]]和[[反渗透]]膜去除 [[PFAS]] 的关键因素提供了重要见解，但 [[全氟和多氟烷基物质|PFAS]] 的化学特征如何影响其在[[聚酰胺]]膜中的传输仍不清楚。为弥合这一知识空白，我们采用了[[Transformer|多模态 transformer 模型]]，该模型以有效处理 [[SMILES|SMILES 字符串]]等序列数据而闻名。通过多模态 transformer 模型中每个原子[[注意力机制|注意力]]得分的[[热图]]可视化，我们能够识别在模型预测中具有最高重要性的特定原子（以及相应的[[官能团]]）。根据 PFAS 种类的官能团，热图被分为[[全氟烷基羧酸]]（[[全氟羧酸|PFCAs]]）、[[全氟烷基磺酸]]（[[全氟磺酸|PFSAs]]）和其他 PFAS（图 4），其中原子的颜色表示注意力得分的大小。

如 [[全氟烷基羧酸|PFCAs]] 的[[热图]]所示（图 4a），在所有 PFCA 化合物中，[[羰基]]（作为羧基的一部分）的氧原子表现出最高的[[注意力机制|注意力]]得分，且与链长无关。类似地，对于 PFSA 化合物，[[磺酸基]]中的硫原子表现出最高的注意力得分（图 4b）。与那些表现出最高注意力得分的原子相关的特定[[官能团]]在实验 pH 条件下[[去质子化]]并带负电荷，这在很大程度上决定了 [[PFAS]] 与膜表面之间的[[静电相互作用]]。相比之下，碳原子和氟原子往往表现出较低的注意力得分。因此，与 [[SHAP]] 方法揭示的见解一致（图 3），[[Transformer|多模态 transformer 模型]]同样将静电相互作用识别为影响[[聚酰胺膜|聚酰胺纳滤]]和[[反渗透]]膜性能模型预测的主要机制。

除[[全氟羧酸]]（[[全氟烷基羧酸|PFCAs]]）和[[全氟磺酸]]（[[全氟烷基磺酸|PFSAs]]）以外的其他[[PFAS]]化合物的[[热图]]，包括[[全氟-3-甲氧基丙酸]]（PFMOPrA）、[[全氟-4-甲氧基丁酸]]（PFMOBA）、[[六氟环氧丙烷二聚酸|2,3,3,3-四氟-2-（七氟丙氧基）丙酸]]（[[GenX]]）、[[1H,1H,2H,2H-全氟己磺酸]]（4:2 FTS）、[[1H,1H,2H,2H-全氟辛磺酸]]（6:2 FTS）和[[全氟辛烷磺酰胺|FOSA]]，如图4c所示。对于PFMOPrA、PFMOBA和GenX，与[[羰基]]相关的氧原子表现出最高的[[注意力分数]]，表明[[静电相互作用]]在调控[[全氟和多氟烷基物质|PFAS]]去除中的主导作用同样适用于这些含羧基的PFAS物种。有趣的是，代表醚（[[醚基|−O−]]）基团的氧原子在这些PFAS物种中也表现出较高的[[注意力机制|注意力]]分数。醚基团的存在增加了PFAS的[[亲水性]]，从而改变了它们与膜之间的相互作用（醚基团在PFAS−膜相互作用中的作用将在下一节进一步讨论）。此外，4:2 FTS和6:2 FTS的热图均含有[[磺酸基|磺酸基团]]，表现出与PFSAs相似的趋势。在这些情况下，硫原子对模型预测的影响最强。然而，FOSA的最高注意力分数归属于化合物中心的氟原子。与本研究考察的其他PFAS化合物不同，由于磺酰胺基团的存在，FOSA的[[pKa|pK值]]接近中性pH（补充表2）。这导致其[[去质子化]]程度降低，因此FOSA与膜表面之间的静电相互作用明显更弱。因此，[[多模态transformer模型]]能够熟练识别FOSA与其他PFAS化合物之间的[[官能团]]差异，并独特地将化合物尺寸的估计置于优先地位。该估计通过化合物中心与头基之间的距离来体现，成为预测FOSA去除效果的关键化学特征。

我们进一步通过计算每个[[官能团]]的[[注意力分数]]相对百分比（占所有原子[[注意力机制|注意力]]分数总和的百分比）来量化化学结构对[[PFAS]]去除的影响（补充图3）。与相同链长的[[全氟烷基羧酸|PFCAs]]的羧基相比（不包括官能团中的碳），[[全氟烷基磺酸|PFSAs]]的[[磺酸基]]通常具有更高的注意力分数百分比。尽管[[全氟磺酸|PFSAs]]和[[全氟羧酸|PFCAs]]都容易[[去质子化]]，但PFSAs的[[pKa|pK值]]低于PFCAs（补充表2），表明PFSAs具有更负的分子电荷，因此与膜表面之间的[[静电相互作用]]更强。这一效应进一步得到PFCAs和PFSAs的[[原子电荷]]（即分子中单个原子间电子密度分布<sup>63</sup>）的支持（补充图4和5）。与羧基的氧原子相比，磺酸基的氧原子表现出更负的原子电荷，表明与膜表面之间的静电相互作用更强。因此，[[多模态transformer模型]]在预测[[聚酰胺膜|聚酰胺纳滤]]和[[反渗透]]膜对[[全氟和多氟烷基物质|PFAS]]的去除效果时，能够辨别PFAS−膜相互作用中的这些差异。此外，对于除PFCAs和PFSAs以外的其他PFAS物种，原子电荷最负的原子所对应的官能团通常与多模态[[Transformer|transformer]]模型给出的最高注意力分数官能团相一致（[[全氟辛烷磺酰胺|FOSA]]除外），如图4和补充图6所示。

a)  
![](<../2.SCI_MD/Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations/images/11aaabb69361ad4ab33b230effec69f20e4cbe38ea28059c6ffecb5c81818226.jpg>)

![](<../2.SCI_MD/Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations/images/5e2ab8b2ab7df560353442c55bbb7733d0b31bef79a4527ecaee166e11006b50.jpg>)

![](<../2.SCI_MD/Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations/images/98c02b674fc2cda70205afe961b273c619459cf02e885f5d39744d3fe3f5140c.jpg>)

![](<../2.SCI_MD/Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations/images/15acfd9d3cca2190e9f65bc5516b2fa5b909ce47e7f60ac936a090f950c989c7.jpg>)

![](<../2.SCI_MD/Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations/images/ab027ece1b361a06e5e741c6e91ddbcbf630fb010af2e9c69f246ce3c6a55e39.jpg>)  
f)  
图 5 | 带电 PIP-TMC 膜中 PFAS 截留机制的分子动力学模拟。a PFAS（青色：碳，黄色：氢，红色：氧）、聚酰胺膜（红色；黄色：去质子化位点）和中和钠离子（绿色）的初始体系构型。水分子未显示。b PFAS 穿过聚酰胺膜的均力势。虚线标记参考自由能。点线标记聚酰胺膜致密层的边界，c 对比

![](<../2.SCI_MD/Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations/images/b083a09cb6e21c66acfa1c17a9149699aa90404370d0968bec0e36f609a2cf35.jpg>)  
[[平均力势|PMF]] 曲线中的有效自由能垒（灰色）与 [[PFAS]] 在[[聚酰胺膜]]致密层失去的[[氢键]]数量（红色）。(d) PFHxA、(e) [[GenX]] 和 (f) PFPeS 在本体水（上）和[[聚酰胺]]膜致密层（下）中的氢键（黑色虚线）示例。青色：碳，粉色：氟，白色：氢，红色：氧，黄色：硫。源数据以 Source Data 文件形式提供

因此，两种 [[机器学习|ML]] 模型（即 [[XGBoost]] 模型和[[Transformer|多模态 transformer 模型]]）都明确揭示，与[[静电相互作用]]相关的[[官能团]]是决定[[聚酰胺膜|聚酰胺 NF]] 和 [[反渗透|RO]] 膜去除大多数 [[PFAS]] 的主要结构特征。官能团在调节 [[全氟和多氟烷基物质|PFAS]] 穿过[[聚酰胺]]膜传输中的作用将在下一节通过计算机模拟进一步探讨。

[[分子动力学模拟]]揭示的[[PFAS]]传输机制 通过[[分子动力学]]（MD）模拟探究了[[全氟和多氟烷基物质|PFAS]]跨带电且[[交联]]的[[哌嗪]]（PIP）–[[均苯三甲酰氯]]（TMC）[[聚酰胺膜]]的分子传输机制（图5a）。我们选择了三种PFAS，包括PFHxA、[[GenX]]和PFPeS，它们具有不同的[[官能团]]（羧基、羧基+[[醚基]]和[[磺酸基]]），且碳链长度相同。由于它们的[[pKa|pK值]]较低（补充表2），模拟中使用了离子化的PFAS分子。[[平均力势]]（PMF）曲线（图5b）通过[[伞形采样]]模拟及[[加权直方图分析法]]（WHAM）<sup>64</sup>获得，以探究不同PFAS传输行为的差异。此外，还计算了水分子传输的PMF用于对比。最初，随着PFAS从本体水相向[[聚酰胺]]膜移动（|z|从5 nm到3.5 nm），PMF下降，表明其疏水特性导致了自发[[吸附]]（例如[[Liu]]等<sup>65</sup>）。观察到的[[吸附自由能]]为−12至−9 kJ mol^-1。当PFAS进入聚酰胺膜的致密层（图5b中$( | z | < 3 . 5 \mathsf { n m } ;$虚线所示）并向膜中心移动时，PMF升高，表明由尺寸、电荷和介电排斥效应引起的[[排斥自由能]]。排斥自由能定义为PMF最大值与最小值之差，范围为55–65 kJ mol^-1。吸附自由能和排斥自由能共同作用于[[截留|PFAS截留]]。吸附自由能构成了PFAS从聚酰胺膜向渗透侧本体水相移动的能量势垒，而排斥自由能则阻止PFAS进入膜内。与PFAS相比，水没有表现出任何吸附，其排斥自由能为5.7 kJ mol^-1。PFAS分子较水分子更高的能量势垒表明，PFAS的传输受到显著阻碍，而水分子可以容易地透过膜。由于PFAS的排斥自由能远高于其吸附自由能，前者对PFAS截留更为重要。这些结果与[[机器学习]]结果一致，即[[电荷乘积]]和[[分子量截留|MWCO]]对PFAS截留的影响比log $\mathsf { K } _ { \mathsf { o w } } .$更为显著。

[[PFAS]] 的渗透与[[截留]]趋势取决于反映 [[全氟和多氟烷基物质|PFAS]] 到达[[聚酰胺膜]]中心相关能垒的最大 [[平均力势|PMF]] $\Delta G ^ { \ddagger }$。PFAS 的 $\Delta G ^ { \ddagger }$ 远高于水，且遵循 [[GenX]] ≤ PFPeS < PFHxA 的顺序（图 5c）。为解释 $\Delta G ^ { \ddagger }$ 的顺序，沿反应坐标计算了范德华能和静电能（补充图 7）、氢键总数（补充图 8）、PFAS 的平均取向（补充图 9）以及 PFAS 的均方根偏差（构象变化的量度；补充图 10）。当 PFAS 从本体水向膜中心移动时，静电能增加（补充图 7），其顺序与 $\Delta G ^ { \ddagger }$ 的顺序相同（GenX < PFPeS < PFHxA）。沿反应坐标的范德华能（使用 Lennard-Jones 相互作用建模）和静电能（使用库仑相互作用建模）的变化（补充图 7）表明，静电相互作用的变化比范德华相互作用更占主导。由于 PFAS 分子具有相同的净电荷，静电能的差异表明 PFAS 与聚酰胺膜之间偶极-偶极和偶极-电荷相互作用的影响。这意味着 PFAS 与聚酰胺膜之间的偶极-偶极和偶极-电荷静电吸引降低了由静电排斥产生的能垒。虽然 ML 模型的输入变量并不包含 PFAS 的偶极性质，但羧基、磺酸基和醚基中较高的注意力分数表明，模型在一定程度上捕捉到了在偶极相互作用中起重要作用的电负性原子的重要性。范德华相互作用能的大小顺序与 $\Delta G ^ { \ddagger }$ 的顺序相反，且其量级远低于静电能。PFAS 沿反应坐标 z 的氢键数目波动与 PMF 的波动呈负相关（补充图 8），表明 PFAS 脱水可能在调控 PFAS 截留中发挥作用。当 PFAS 从本体水 $( | z | > 5 \mathsf { n m } )$ 移动到膜中心 $( | z | < 3 . 5 \mathsf { n m } )$ 时，其损失的总氢键数目如图 5c–f 所示。损失的氢键数目指示 PFAS 脱水程度，并遵循 PFHxA < GenX < PFPeS 的顺序。该顺序并不遵循 $\Delta G ^ { \ddagger }$ 的顺序，但与 PFAS 的 log ${ \sf K } _ { \sf o w }$（补充表 2）相匹配，因为较高的亲脂性会导致 PFAS 更高的脱水倾向。因此，虽然 PFAS 脱水可能影响膜的截留性能，但其影响不如静电和尺寸排阻效应显著。这一结果也与 ML 结果一致，即 log ${ \sf K } _ { \sf o w }$ 的影响小于与静电和[[尺寸排阻]]相关的参数（如[[电荷乘积]]和 [[分子量截留|MWCO]]）。PEAS 分子在膜中心附近表现出显著的取向和构象变化，但这些变化并不对应 PMF 的波动（补充图 9）。我们将这些变化归因于[[聚酰胺]]膜中孔道的曲折性质。

## 环境意义

本研究采用 [[XGBoost]] 和[[Transformer|多模态 transformer 模型]]，以阐明[[聚酰胺膜|聚酰胺纳滤]]（[[纳滤|NF]]）和[[反渗透]]（RO）膜去除 [[PFAS]] 的主导因素。XGBoost 和多模态 transformer 模型均表现出较高的预测精度（[[均方根误差|RMSE]] 和 [[平均绝对误差|MAE]] 值分别为 6–8% 和 5–6%），可有效将多个变量（包括膜和 [[全氟和多氟烷基物质|PFAS]] 性质以及操作条件）与 PFAS [[截留]]的膜效率相关联。经 [[SHAP]] 方法解释的 XGBoost 模型，以及整合 [[SMILES|SMILES 字符串]]的多模态 transformer 模型，一致强调[[静电相互作用]]在 NF 和 RO 过程中对 PFAS 去除的主导作用。[[分子动力学模拟|MD 模拟]]结果与 [[机器学习|ML]] 结果高度一致，均认定静电相互作用是[[聚酰胺]]膜去除 PFAS 的主要控制因素。同时，[[分子动力学|MD]] 模拟证实[[官能团]]在调控 PFAS 传输中具有重要作用。具体而言，MD 模拟表明偶极相互作用产生的静电吸引会削弱静电排斥效应。此外，PFAS [[脱水|去水合]]（[[氢键]]损失）被确定为 PFAS 截留的重要影响因素之一。

[[机器学习|ML]] 模型解释在揭示预测分析背后的复杂机制中发挥着关键作用。本研究采用 ML 模型解释方法，包括针对 [[XGBoost]] 模型的 [[SHAP]] 方法以及突出[[Transformer|多模态 transformer 模型]][[注意力分数]]的[[热图]]，揭示了 [[PFAS]] 传输的潜在机制，而 ML 模型的性能预测正是基于这些机制确定的。一方面，用于解释 XGBoost 模型的 [[Shapley加性解释|SHAP]] 方法揭示了关于代表材料性质和操作条件的数值如何控制 [[纳滤|NF]] 和 [[反渗透|RO]] 去除 [[全氟和多氟烷基物质|PFAS]] 效率的一般性和宏观见解。另一方面，利用 [[SMILES|SMILES 字符串]]整合分子结构的多模态 transformer 模型，提供了对 PFAS 化学特征所产生具体影响的微观、分子层面理解。这种双重方法不仅增强了 ML 模型的可信度，还促进了对 PFAS 跨[[聚酰胺膜]]传输的机理性认识。如当前研究所展示的，ML 模型解释方法的应用可以将 ML 算法从单纯的预测模型转变为理解和发现[[膜分离]]性能背后复杂控制因素的有力工具。

此外，本研究的结果识别了控制[[PFAS]]传输的关键化学特征，有望为膜制备与优化中的理性特征选择提供依据。例如，分别通过[[XGBoost]]和[[多模态transformer模型|transformer模型]]解释发现的[[电荷乘积]]与带电[[官能团]]的最高重要性表明，调控[[全氟和多氟烷基物质|PFAS]]与膜之间的[[静电相互作用]]应作为提升膜对带电PFAS选择性的优先策略。此类由[[机器学习]]模型获得的认识与[[分子动力学模拟]]结果一致，后者表明碳数相同但官能团不同的PFAS分子在穿越[[聚酰胺膜]]时会经历不同的能垒。通过[[表面改性]]或在[[界面聚合]]中使用新单体来增强静电相互作用，是制备具有更高PFAS去除效率的新型膜材料的一个有前景的方向。例如，接枝具有强负电荷的材料<sup>66</sup>，或在界面聚合中使用带有负电荷基团的单体<sup>67</sup>，有可能增加PFAS与膜表面之间的静电排斥。此外，使用具有较低偶极矩的单体（如[[三聚氰胺]]和[[季戊四醇]]）可能降低偶极相互作用带来的静电吸引影响。我们承认，数据库中大多数PFAS在本质上为阴离子型。这主要是由于缺乏阳离子型、两性离子型以及大多数非离子型PFAS的商业标准品，因此当前基于质谱的PFAS定量方法在大多数情况下只能针对阴离子型PFAS。尽管如此，如果未来能够获得这些PFAS的定量结果及其在[[聚酰胺]][[纳滤]]和[[反渗透]]膜中的相应去除效率，本研究所提出的机器学习方法亦可应用于阴离子型PFAS以外的物种。此外，[[醚基]]在决定模型预测中的高[[注意力分数]]表明，官能团取代在PFAS穿过聚酰胺纳滤和反渗透膜传输过程中的重要性，这一点也得到了[[分子动力学]]模拟结果的支持。这凸显了评估膜去除[[全氟羧酸]]和[[全氟磺酸]]以外多种PFAS物种性能的研究需求。此外，通过适当的特征工程以捕捉不同的物理和化学性质，本研究开发的方法有潜力预测其他材料的性能并获得机理认识，例如由二维材料和纳米通道制成的新型膜，以及用于开发新型[[吸附]]剂和催化剂。此类应用通过加深对功能材料结构细节与性能之间复杂关系的理解，可助力材料设计。

## 方法

## 数据收集

关于[[聚酰胺膜|聚酰胺纳滤]]（[[纳滤|NF]]）和[[反渗透]]（RO）膜对 [[PFAS]] [[截留]]效率的数据，既来自文献，也来自我们自己的实验。对于来自文献并用于[[机器学习]]模型训练的数据（补充数据 1），我们通过直接提取列出 [[全氟和多氟烷基物质|PFAS]] 去除率的表格，或使用 [[Engauge Digitizer]] 软件从图中提取数据，共获得 457 个数据点。我们还开展了实验，使用三种商用 NF 膜和两种改性 NF 膜，评估其对受 [[水性成膜泡沫|AFFF]] 污染进水中各种 PFAS 的截留效果（补充表 3）。从这些实验中获得 77 个数据点，用于评估机器学习模型的准确性（补充数据 1）。膜的详细改性方法和实验步骤将在以下章节中说明。

## 材料

[[水性成膜泡沫|AFFF]] 样品来自 3 M 公司（美国明尼苏达州圣保罗），用于 [[PFAS]] 定量的标准溶液（质量标记 [[全氟和多氟烷基物质|PFAS]] 萃取液，MPFAC-24ES）购自 [[Wellington Laboratories Inc.]]（加拿大安大略省）。[[甲醇]]（>99.9%，HPLC 级）购自 [[Honeywell]]（美国密歇根州马斯基根）。[[氯化钠]]（NaCl，≥99.0%）、[[异丙醇|2-丙醇]]（IPA，≥99.5%）、乙醇（≥99%）、[[盐酸]]（HCl，36%）、[[氢氧化钠]]（NaOH，≥97.0%）、[[氢氧化铵]]（NH OH，28.0–30.0%）、[[丙烯酸]]（CH CHCOOH，≥99.0%）、[[过硫酸钾]] $( \mathsf { K } _ { 2 } \mathsf { S } _ { 2 } \mathsf { O } _ { 8 } ,$，99.0%）、[[亚硫酸氢钠]] $( \mathsf { N a } _ { 2 } \mathsf { S } _ { 2 } \mathsf { O } _ { 5 } ,$ ≥58.5%）、[[盐酸多巴胺]]、[[Tris|三（羟甲基）氨基甲烷]]（Tris，≥99.8%）和[[聚乙烯亚胺|聚（乙烯亚胺）]]（PEI，MW 800）均购自 [[Sigma-Aldrich]]（美国密苏里州圣路易斯）。[[去离子水|去离子（DI）水]]（>18 MΩ∙cm）由净水系统（[[Millipore]]，美国马萨诸塞州伯灵顿）提供。商用平板 [[纳滤|NF]] 膜（[[NF90膜|NF90]]、[[NF270膜|NF270]] 和 NF）购自 [[DuPont FILMTEC]]（美国特拉华州威尔明顿）。

## 膜[[表面改性]]

对[[NF270膜]]进行了膜[[表面改性]]，以获得不同的膜表面性质。我们选择NF270膜进行表面改性，是因为其结构较为疏松，且预期[[PFAS]]去除效率较低（因此改变膜表面性质最有可能改变[[全氟和多氟烷基物质|PFAS]]去除率）。在进行膜表面改性之前，NF270膜首先浸入25 v/v%[[异丙醇]]水溶液中30 min，然后用[[去离子水]]充分清洗以去除杂质，随后在$4 ^ { \circ } \mathrm { C }$条件下储存于去离子水中备用。采用两种改性方法将[[聚丙烯酸]]（PAA，一种[[亲水性]]且带负电的聚合物）和[[聚乙烯亚胺]]（PEI，一种亲水性且带正电的聚合物）接枝到膜表面。对于PAA改性，采用[[氧化还原自由基引发反应]]，参考Belfer等人报道的方法<sup>68</sup>。简言之，配制1 M[[丙烯酸]]、0.01 M ${ \sf K } _ { 2 } { \sf S } _ { 2 } { \sf O } _ { 8 }$和0.01 M ${ \sf N a } _ { 2 } { \sf S } _ { 2 } { \sf O } _ { 5 }$溶液，并将其倾倒在膜表面以引发聚合，聚合在室温下进行1 h。所得PAA改性膜随后用去离子水冲洗。对于PEI改性，采用[[多巴胺辅助接枝]]方法<sup>69</sup>。简言之，将0.16 mM[[盐酸多巴胺]]加入[[Tris]]缓冲溶液（10 mM，pH 8.5）中，然后倾倒在膜表面。多巴胺聚合反应1 h后，将沉积了[[聚多巴胺]]（PDA）的膜用去离子水冲洗，随后在室温下浸入10 g L^-1的PEI水溶液中4 h。最后，PEI改性膜用去离子水冲洗。改性步骤完成后，PAA和PEI改性膜在$4 ~ ^ { \circ } \mathbb { C }$条件下储存直至使用。

## 膜表征

采用多种技术对商业膜和改性膜的表面性质进行表征。使用[[接触角测量仪]]（[[Krüss DSA 10]]，德国汉堡）通过[[座滴法]]测量膜的[[水接触角]]。使用配备可调间隙池的电动分析仪（[[SurPASS]]，[[Anton-Paar]]，奥地利格拉茨）测量膜表面的[[zeta电位]]。[[ζ电位|zeta电位]]测量以1 mM KCl为背景电解质，在pH 2至10范围内进行，pH通过滴定0.1 M [[盐酸|HCl]]和0.1 M [[氢氧化钠|NaOH]]溶液调节。膜的详细特性见补充表3和补充图11。

## [[纳滤|NF]]膜对[[截留|PFAS截留]]率的评价

商业改性[[纳滤]]膜与改性纳滤膜对[[截留|PFAS截留]]性能的评价在实验室规模的[[错流过滤系统]]中进行，有效膜面积为26.2 cm<sup>2</sup>。错流流速为21.3 cm s^-1，操作温度控制在$2 5 { \pm } 1 ~ ^ { \circ } \mathrm { C } .$。测试前，过滤系统采用1% $\mathrm { N H _ { 4 } O H }$ 的[[去离子水]]与乙醇（1:1）溶液彻底清洗。膜在去离子水中过夜压实，随后使用数字流量计（[[FlowCal 5000]]，[[Tovatech]]，Plano，TX）测定纯水渗透通量，以确定膜的水渗透系数。随后，向进水中加入[[氯化钠|NaCl]]，使[[离子强度]]达到10 mM，用于测定NaCl截留率；接着向进水储罐中加入[[水性成膜泡沫|AFFF]]（检测到的[[PFAS]]总浓度约为\~157 µg L^-1），操作时注意避免产生气泡。进水的pH使用1 M [[盐酸|HCl]]和1 M [[氢氧化钠|NaOH]]溶液调节（至pH 5、7或9）。运行1 h后，用15 [[机器学习|mL]]聚丙烯管（[[Corning Inc.]]，Corning，NY）收集进水和透过液样品，并在$4 ^ { \circ } \mathrm { C }$条件下储存，直至进行[[全氟和多氟烷基物质|PFAS]]定量分析。

## [[PFAS]]定量分析

样品前处理时，取100 µL收集的进水或透过液样品，与100 µL内标溶液（20 µg L^-1，MPFAC-24ES，溶于[[甲醇]]）在聚丙烯样品瓶（[[VWR]]，Radnor，PA）中混合。制备好的样品采用[[Agilent 1290]]液相色谱与[[Agilent 6460]]三重四极杆质谱联用系统（[[液相色谱-三重四极杆质谱|LC-QQQ-MS]]，[[Agilent Technologies]]，Santa Clara，CA）进行分析。所得浓度用于计算[[截留|PFAS截留]]率，并据此评价[[机器学习]]模型的预测性能。

## [[PFAS]]的分子性质

使用我们数据集中所包含[[PFAS]]的[[SMILES]]字符串，在[[Avogadro]]软件（版本1.2.0）中构建分子结构。将这些结构导入[[Marvin View]]（版本22.22.0，[[Chemaxon]]，Budapest，Hungary），用于计算$\mathsf { p K } _ { \mathsf { a } } ,$最大/最小投影半径以及log $\mathsf { K } _ { \mathsf { o w } } .$ 的数值。计算所得分子性质数值列于补充表2和补充数据1中，并作为[[机器学习]]模型的输入变量。此外，[[全氟和多氟烷基物质|PFAS]]分子的[[原子电荷]]由[[ORCA]]（版本5.0.3）软件确定<sup>70</sup>，在计算各原子的原子电荷时考虑了PFAS的解离。原子电荷计算采用[[DFT|密度泛函理论]]方法[[B3LYP]]（一种[[密度泛函理论]]中的杂化泛函，结合了Becke三参数交换项与Lee-Yang-Parr相关项），并使用[[def2-TZVPP]]基组<sup>71</sup>。溶剂（即水）的影响通过[[类导体极化连续介质模型]]（CPCM）计算，水的静态介电常数和折射率分别为80.4和1.3<sup>72</sup>。最后，使用开源JAVA软件[[JANPA]]进行[[自然布居分析]]，以获得原子电荷值<sup>73</sup>。随后，利用Python库[[RDKit]]在补充图4–6中可视化各原子的原子电荷。

## [[机器学习]]模型的变量选择

我们通过考虑[[膜分离]]机制（如[[尺寸排阻]]、[[Donnan 排阻]]和[[吸附]]）<sup>36</sup>，选取了一组与膜及 [[PFAS]] 性质相关的变量。最终选取了八个变量，包括化合物尺寸、log $\mathsf { K } _ { \mathsf { o w } } ,$ [[电荷乘积]]（膜电荷指数与化合物电荷的乘积）、膜的[[水接触角]]（WCA）和[[截留分子量]]（[[分子量截留|MWCO]]）、水力压力、$\mathbf { C _ { \mathrm { { i n } } } } ,$ 以及进水的[[离子强度]]（IS）。特别是，化合物尺寸和电荷乘积使用以下公式计算<sup>36</sup>。

$$
\begin{array}{r l} \text { Compound   size } & = (\text { maximum   projection   radius } \\ & \times \text { minimum   projection   radius }) ^ {0. 5} \end{array}\tag{1}
$$

$$
\text { Charge   product } = \text { membrane   charge   index } \times \text { compound   charge }\tag{2}
$$

$$
\text {   Membrane   charge   index   } = \text {   isoelectric   point   } - \text {   pH   }\tag{3}
$$

其中，化合物电荷通过在实验 pH 条件下按各自比例加权 [[PFAS]] 的带电形式和中性形式计算<sup>36</sup>；膜的[[等电点]]通过确定[[zeta 电位|膜 zeta 电位]]变为零时的 pH 来确定。对于[[Transformer|多模态 transformer 模型]]，[[SMILES|SMILES 字符串]]被标记化，即字符串被转换为数值，并将这些数值作为额外的输入变量纳入。

## [[机器学习|ML]] 模型及其解释

我们实现了两种 [[机器学习|ML]] 模型，即 [[XGBoost]] 和[[Transformer|多模态 transformer 模型]]，用于预测[[聚酰胺膜|聚酰胺纳滤]]（[[纳滤|NF]]）和[[反渗透]]（RO）膜对 [[PFAS]] 的去除效果。选择 XGBoost 模型是因为它在许多数据科学竞赛以及我们之前的发表中表现出色<sup>36,37,74</sup>。XGBoost 通过[[决策树]]集成对结构化数据和表格数据表现出很高的预测性能<sup>74</sup>，而多模态 transformer 模型则利用[[注意力机制]]，能够高效捕捉相互依存关系，尤其是像 [[SMILES|SMILES 字符串]]这样的序列中的相互依存关系<sup>46</sup>。考虑到化学结构可能对 [[全氟和多氟烷基物质|PFAS]] 跨膜传输具有重要作用，纳入表示结构信息的 [[简化分子输入线录入系统|SMILES]] 字符串的多模态 transformer 模型，有潜力揭示化学特征对[[聚酰胺]] NF 和 RO 膜去除 PFAS 的影响。为训练 XGBoost 和多模态 transformer 模型，我们使用了 [[5 折交叉验证]]和[[贝叶斯优化]]进行超参数调优，以避免[[数据泄漏]]。数据根据实验设置进行分组，并与相应的 PFAS 名称结合以创建唯一标签。共享相同标签的数据被分配到同一折中。该方法确保了具有相似实验条件的数据（例如，膜类型和 PFAS 相同，仅某一个变量不同）被保留在同一折内，从而有效降低了数据泄漏的风险<sup>36,37</sup>。在优化超参数之后，使用具有最优超参数的整个训练数据集对 ML 模型进行训练。随后，使用我们自己的 PFAS [[截留]]实验数据评估模型的预测能力。模型性能通过 [[均方根误差|RMSE]] 和 [[平均绝对误差|MAE]] 进行评估。这些指标的数学表达如下：

$$
\mathrm{RMSE} = \sqrt {\frac {1}{n} \sum_ {i = 1} ^ {n} (y - \hat {y}) ^ {2}}\tag{4}
$$

$$
\mathrm{MAE} = \frac {1}{n} \sum_ {i = 1} ^ {n} | y - \hat {y} |\tag{5}
$$

其中，n 为样本数量，y 表示真实值（即数据集的目标标签），^y 表示模型估计值。

在模型训练完成后，我们采用 [[SHAP]]——一种常用的 [[可解释人工智能|XAI]] 技术<sup>36–38,51</sup>——来解释 [[XGBoost]] 模型。在 [[Shapley加性解释|SHAP]] 方法中，通过考虑变量所有可能的组合及其相应的贡献，计算每个变量对模型预测的贡献<sup>51</sup>。因此，使用 SHAP 使我们能够揭示决定[[聚酰胺膜|聚酰胺纳滤膜]]和[[反渗透]]膜去除 [[PFAS]] 的关键因素。对于[[Transformer|多模态 transformer 模型]]，在模型训练过程中使用 [[SMILES|SMILES 字符串]]作为额外输入。[[简化分子输入线录入系统|SMILES]] 字符串被标记化为数值，每个数值代表一个特定的化学元素，以方便将其纳入模型。为确保一致性，根据数据集中 [[全氟和多氟烷基物质|PFAS]] 化合物所观察到的最长标记集对标记长度进行了标准化。如果标记长度短于最大长度，则用零填充以达到所需长度。在多模态 transformer 模型训练期间，从多个[[注意力机制|注意力]]头不同层中的每个输入变量提取[[注意力分数]]。然后，对 PFAS 化合物结构中的每个原子对这些分数进行平均，以生成[[热图]]，从而直观地表示每个原子在决定[[聚酰胺]][[纳滤]]膜和反渗透膜去除 PFAS 中的重要性。

[[PFAS]] 跨[[聚酰胺膜]]传输的 [[分子动力学模拟|MD 模拟]] 膜制备。制备了由 [[哌嗪|PIP]] 和 [[均苯三甲酰氯|TMC]] 组成的[[聚酰胺]]膜，其尺寸为 $4 . 7 \times 4 . 7 \times 9 \ : \mathrm { n m } ^ { 3 } .$。选择 PIP-TMC 聚酰胺膜作为实验中通常使用的代表性[[纳滤]]膜。与使用[[间苯二胺]]（MPD）和 TMC 制备的聚酰胺膜相比，更疏松的 PIP-TMC 聚酰胺膜也更有可能揭示[[官能团]]与 $\mathsf { P F A S } ^ { 2 5 , 7 5 - 7 7 }$ [[截留]]之间的关系。[[交联]]膜按照我们之前的工作<sup>78</sup>制备。将单体 PIP 和 TMC 随机放置在模拟盒子中，PIP:TMC 摩尔比为 1.5，目标密度为 $1 . 3 { \bf g } \ { \bf c } { \bf c } ^ { \cdot } { \bf 1 } .$。对单体体系进行能量最小化，并在 300 K 的[[正则系综]]下开始模拟交联。在每个交联步骤中，识别 PIP 和 TMC 的反应位点，并使用[[引导分子动力学模拟|引导 MD 模拟]]（借助虚拟弹性弹簧）将位于 0.45 nm 指定截断距离内的位点拉向彼此。一旦反应位点到达 0.15 nm 以内，就赋予物理[[酰胺键]]，移除相应的 H 和 Cl 原子，并更新分子拓扑。交联持续进行，直到达到 90% 的交联度，这（排除单体后）产生的 O/N 比为 1.14。在任何中间交联步骤中，如果在 0.45 nm 截断范围内未发现反应基团，则将截断距离增加 0.05 nm。移除单体 TMC 和 PIP，并将 TMC 中任何残留的氯原子替换为羟基。最后，将 TMC 中恰好含有一个酰胺键的一个羧基[[去质子化]]（图 5a）。我们的聚酰胺膜电荷密度与 [[Liu]] 等人<sup>79</sup> 研究的 pH 7.3 下膜的电荷密度一致。

[[平均力势]]。将[[交联]][[聚酰胺膜]]置于尺寸为 4.7 × 4.7 × 19 nm<sup>3</sup> 的盒子中心，随后在位置 (2.35, 2.35, 0 nm) 处加入 [[PFAS]]，并用 [[TIP3P 水模型|TIP3P 水]]进行溶剂化。对[[聚酰胺]]膜和 [[全氟和多氟烷基物质|PFAS]] 采用 [[Swissparam 力场|Swissparam]]<sup>80</sup> 力场。体系先通过[[最速下降法]]进行能量最小化，随后在正则（NVT）系综下运行 50 ps，并在[[等温-等压系综|等温-等压]]（NPT）系综下运行 20 ns。模拟的温度和压力分别维持在 300 K 和 1 bar，温度控制采用时间常数为 0.1 ps 的[[随机速度重标度恒温器]]，压力控制采用 [[Berendsen 恒压器]]，其在 z 方向（垂直于聚酰胺膜）的压缩系数为 4.5 × 10<sup>−5</sup>，在 x 和 y 方向为 0，时间常数为 10 ps。[[伞形采样]]的初始构型通过以 100 kJ mol^-1 nm^-2 的力常数和 0.001 nm ps^-1 的拉动速率引导 PFAS 分子穿过聚酰胺膜来生成。伞形采样的[[反应坐标]]定义为 PFAS 质心与聚酰胺膜之间沿 z 轴的位移矢量。对于 [[哌嗪|PIP]]-[[均苯三甲酰氯|TMC]]，共在 ±6 nm 范围内为反应坐标选取了 120 个窗口。在每个窗口中对 PFAS 施加力常数为 500 kJ mol^-1 nm^-2 的伞形势，并通过 8 轮 2.5 ns 的 300 至 600 K [[模拟退火]]以及 5 ns 的 NPT 平衡（使用相同的恒温器和恒压器）进行平衡。最后，使用 [[Nose-Hoover 恒温器]]<sup>81</sup> 和 [[Perrinello-Rahman 恒压器]]<sup>82</sup>，以 200 kJ mol^-1 nm^-2 的力常数进行 80 ns 的伞形采样模拟，直至 PMF 达到收敛。所有方向均采用[[周期性边界条件]]。PMF 曲线采用[[加权直方图分析法]]（WHAM<sup>64</sup>）计算，使用 300 个区间、容差 10^-8 以及周期性假设。对每个窗口确定积分自相关时间，以赋予各窗口相对权重<sup>83</sup>。所有 PMF 计算和分析均使用 [[GROMACS|GROMACS 2022]]<sup>84</sup> 完成。

[[氢键]]分析。使用 [[MDAnalysis]] Python 包<sup>85</sup> 计算 [[PFAS]]-[[聚酰胺膜]]和 [[全氟和多氟烷基物质|PFAS]]-水之间形成的氢键。氧、硫和氟原子被视为受体，至少结合一个氢的氧和氮原子被视为氢键供体。氢键的供体-受体原子间截断距离以及供体-氢-受体夹角分别设置为 0.35 nm 和 150°。根据所有[[伞形采样]]窗口，确定氢键总数随[[反应坐标]]的变化。反应坐标按 0.05 nm 的宽度分箱，并使用一个箱内的所有数据点确定平均值和标准差。

## 报告摘要

有关研究设计的更多信息，可参见与本文链接的[[Nature Portfolio|《自然》组合报告摘要]]。

## 数据可用性

本研究使用的所有数据均可从补充数据 1、源数据和补充信息中获得。源数据随本文提供。

## 代码可用性

本研究生成的 [[机器学习|ML]] 模型和 [[分子动力学模拟|MD 模拟]]数据已存入 [[Zenodo]] 数据库，登录号为 https:// zenodo.org/records/13924418 和 https://zenodo.org/records/ 13978801。本研究中使用的 ML 和 [[分子动力学|MD]] 模拟数据可通过所提供的登录号在 Zenodo 数据库中获得<sup>86,87</sup>。本研究生成的 ML 和 MD 模拟数据见补充信息/源数据文件。

## References

1. Mifkovic, M., Van Hoomissen, D. J. & Vyas, S. Conformational distributions of helical perfluoroalkyl substances and impacts on sta bility. J. Comput. Chem. 43, 1656–1661 (2022).

2. Dombrowski, P. M. et al. Technology review and evaluation of different chemical oxidation conditions on treatability of PFAS. Remediation J. 28, 135–150 (2018).

3. Buck, R. C. et al. Perfluoroalkyl and polyfluoroalkyl substances in the environment: Terminology, classification, and origins. Integr. Environ. Assess. Manag. 7, 513–541 (2011).

4. Glüge, J. et al. An overview of the uses of per-and polyfluoroalkyl substances (PFAS). Environ. Sci.: Process. Impacts 22, 2345–2373 (2020).

5. Xiao, F. Emerging poly- and perfluoroalkyl substances in the aquatic environment: A review of current literature. Water Res. 124, 482–495 (2017).

6. Prevedouros, K., Cousins, I. T., Buck, R. C. & Korzeniowski, S. H. Sources, fate and transport of perfluorocarboxylates. Environ. Sci. Technol. 40, 32–44 (2006).

7. Gaines, L. G. Historical and current usage of per‐and polyfluoroalkyl substances (PFAS): A literature review. Am. J. Ind. Med. 66, 353–378 (2023).

8. Anderko, L. & Pennea, E. Exposures to per-and polyfluoroalkyl substances (PFAS): Potential risks to reproductive and children’s health. Curr. Probl. Pediatr. Adolesc. Health Care 50, 100760 (2020).

9. Ehsan, M. N. et al. Environmental and health impacts of PFAS: Sources, distribution and sustainable management in North Car olina (USA). Sci. Total Environ. 878, 163123 (2023).

10. Bock, A. R. & Laird, B. E. in Perfluoroalkyl Substances (ed Bruno Améduri) 15 (The Royal Society of Chemistry, 2022).

11. Barzen-Hanson, K. A. & Field, J. A. Discovery and implications of C2 and C3 perfluoroalkyl sulfonates in aqueous film-forming foams and groundwater. Environ. Sci. Technol. Lett. 2, 95–99 (2015).

12. Munoz, G., Liu, J., Vo Duy, S. & Sauvé, S. Analysis of F-53B, Gen-X, ADONA, and emerging fluoroalkylether substances in environmental and biomonitoring samples: A review. Trends Environ. Anal. Chem. 23, e00066 (2019).

13. Liu, S., Yang, R., Yin, N. & Faiola, F. The short-chain perfluorinated compounds PFBS, PFHxS, PFBA and PFHxA, disrupt human mesenchymal stem cell self-renewal and adipogenic differentiation. J. Environ. Sci. 88, 187–199 (2020).

14. Liang, M. et al. High throughput analysis of 21 perfluorinated compounds in drinking water, tap water, river water and plant effluent from southern China by supramolecular solvents-based micro extraction coupled with HPLC-Orbitrap HRMS. Environ. Pollut. 263, 114389 (2020).

15. Lenka, S. P., Kah, M. & Padhye, L. P. A review of the occurrence, transformation, and removal of poly- and perfluoroalkyl substances (PFAS) in wastewater treatment plants. Water Res. 199, 117187 (2021).

16. Wang, Y. et al. A review of sources, multimedia distribution and health risks of novel fluorinated alternatives. Ecotoxicol. Environ. Saf. 182, 109402 (2019).

17. Cui, D., Li, X. & Quinete, N. Occurrence, fate, sources and toxicity of PFAS: What we know so far in Florida and major gaps. TrAC Trends Anal. Chem. 130, 115976 (2020).

18. Kaboré, H. A. et al. Worldwide drinking water occurrence and levels of newly-identified perfluoroalkyl and polyfluoroalkyl substances. Sci. Total Environ. 616-617, 1089–1100 (2018).

19. Vestergren, R. & Cousins, I. T. Tracking the pathways of human exposure to perfluorocarboxylates. Environ. Sci. Technol. 43, 5565–5575 (2009).

20. Hoffman, K. et al. Private drinking water wells as a source of exposure to perfluorooctanoic acid (PFOA) in communities surrounding a fluoropolymer production facility. Environ. Health Perspect. 119, 92–97 (2011).

21. Domingo, J. L. & Nadal, M. Human exposure to per-and poly fluoroalkyl substances (PFAS) through drinking water: A review of the recent scientific literature. Environ. Res. 177, 108648 (2019).

22. Boiteux, V. et al. Concentrations and patterns of perfluoroalkyl and polyfluoroalkyl substances in a river and three drinking water treatment plants near and far from a major production source. Sci. Total Environ. 583, 393–400 (2017).

23. USEPA. Per-and polyfluoroalkyl substances (PFAS), https://www. epa.gov/sdwa/and-polyfluoroalkyl-substances-pfas

24. Jin, T., Peydayesh, M. & Mezzenga, R. Membrane-based technologies for per-and poly-fluoroalkyl substances (PFASs) removal from water: Removal mechanisms, applications, challenges and perspectives. Environ. Int. 157, 106876 (2021).

25. McCleaf, P., Stefansson, W. & Ahrens, L. Drinking water nanofiltration with concentrate foam fractionation—A novel approach for removal of per-and polyfluoroalkyl substances (PFAS). Water Res. 232, 119688 (2023).

26. Zeng, C., Tanaka, S., Suzuki, Y. & Fujii, S. Impact of feed water pH and membrane material on nanofiltration of perfluorohexanoic acid in aqueous solution. Chemosphere 183, 599–604 (2017).

27. Aher, A. et al. Ion and organic transport in graphene oxide membranes: Model development to difficult water remediation applications. J. Membr. Sci. 604, 118024 (2020).

28. Steinle-Darling, E. & Reinhard, M. Nanofiltration for trace organic contaminant removal: Structure, solution, and membrane fouling effects on the rejection of perfluorochemicals. Environ. Sci. Technol. 42, 5292–5297 (2008).

29. Wang, J. et al. Perfluorooctane sulfonate and perfluorobutane sulfonate removal from water by nanofiltration membrane: The roles of solute concentration, ionic strength, and macromolecular organic foulants. Chem. Eng. J. 332, 787–797 (2018).

30. Zeng, C., Tanaka, S., Suzuki, Y., Yukioka, S. & Fujii, S. Rejection of trace level perfluorohexanoic acid (PFHxA) in pure water by loose nanofiltration membrane. J. Water Environ. Technol. 15, 120–127 (2017).

31. Sandoval-Pauker, C. et al. Computational Chemistry as Applied in Environmental Research: Opportunities and Challenges. ACS EST Eng. 4, 66–95 (2023).

32. Biswas, S. & Wong, B. M. Beyond Conventional Density Functional Theory: Advanced Quantum Dynamical Methods for Understanding Degradation of Per-and Polyfluoroalkyl Substances. ACS Est. Eng. 4, 96–104 (2023).

33. Liang, J. et al. DFT Calculation of Nonperiodic Small Molecular Systems to Predict the Reaction Mechanism of Advanced Oxidation Processes: Challenges and Perspectives. ACS EST Eng. 4, 4–18 (2024).

34. Rayne, S. & Forest, K. Perfluoroalkyl sulfonic and carboxylic acids: A critical review of physicochemical properties, levels and patterns in

waters and wastewaters, and treatment methods. J. Environ. Sci. Health Part A 44, 1145–1199 (2009).

35. Rahman, M. F., Peldszus, S. & Anderson, W. B. Behaviour and fate of perfluoroalkyl and polyfluoroalkyl substances (PFASs) in drinking water treatment: A review. Water Res. 50, 318–340 (2014).

36. Jeong, N., Chung, T.-h & Tong, T. Predicting micropollutant removal by reverse osmosis and nanofiltration membranes: Is machine learning viable? Environ. Sci. Technol. 55, 11348–11359 (2021).

37. Jeong, N. et al. Exploring the knowledge attained by machine learning on ion transport across polyamide membranes using explainable artificial intelligence. Environ. Sci. Technol. 57, 17851–17862 (2023).

38. Gao, H. et al. Revolutionizing membrane design using machine learning-bayesian optimization. Environ. Sci. Technol. 56, 2572–2581 (2022).

39. Yang, J., Tao, L., He, J., McCutcheon, J. R. & Li, Y. Machine learning enables interpretable discovery of innovative polymers for gas separation membranes. Sci. Adv. 8, eabn9545 (2022).

40. Hosseinzadeh, A. et al. Machine learning-based modeling and analysis of PFOS removal from contaminated water by nanofiltration process. Sep. Purif. Technol. 289, 120775 (2022).

41. Ammi, Y., Khaouane, L. & Hanini, S. Prediction of the rejection of organic compounds (neutral and ionic) by nanofiltration and reverse osmosis membranes using neural networks. Korean J. Chem. Eng. 32, 2300–2310 (2015).

42. Khaouane, L., Ammi, Y. & Hanini, S. Modeling the retention of organic compounds by nanofiltration and reverse osmosis membranes using bootstrap aggregated neural networks. Arab. J. Sci. Eng. 42, 1443–1453 (2017).

43. Han, K. et al. A survey on vision transformer. IEEE Trans. Pattern Anal. Mach. Intell. 45, 87–110 (2022).

44. Bi, J., Zhu, Z. & Meng, Q. in 2021 IEEE International Conference on Computer Science, Electronic Information Engineering and Intelli gent Control Technology (CEI). 178-188 (IEEE).

45. Fu, N. et al. Material transformers: deep learning language models for generative materials design. Mach. Learn.: Sci. Technol. 4, 015001 (2023).

46. Vaswani, A. et al. Attention is all you need. Adv. Neural Inform. Process. Systems 30, 6–8 (2017).

47. Lundberg, S. M. & Lee, S.-I. A unified approach to interpreting model predictions. Adv. Neural Inform. Process. Sys. 30, 3–9 (2017)

48. Yangali-Quintanilla, V. et al. Artificial neural network models based on QSAR for predicting rejection of neutral organic compounds by polyamide nanofiltration and reverse osmosis membranes. J. Membr. Sci. 342, 251–262 (2009).

49. Ritt, C. L. et al. Machine learning reveals key ion selectivity mechanisms in polymeric membranes with subnanometer pores. Sci. Adv. 8, eabl5771 (2022).

50. Lauritsen, S. M. et al. Explainable artificial intelligence model to predict acute critical illness from electronic health records. Nat. Commun. 11, 1–11 (2020).

51. Lundberg, S. M. et al. From local explanations to global under standing with explainable AI for trees. Nat. Mach. Intell. 2, 56–67 (2020).

52. Ribeiro, M. T., Singh, S. & Guestrin, C. in Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discoveryand Data Mining. 1135-1144.

53. Simini, F., Barlacchi, G., Luca, M. & Pappalardo, L. A Deep Gravity model for mobility flows generation. Nat. Commun. 12, 1–13 (2021).

54. Evangelou, M. W. H. & Robinson, B. H. The phytomanagement of PFAS-contaminated land. Int. J. Environ. Res. Public Health 19, 6817 (2022).

55. Al-Zoubi, H. & Omar, W. Rejection of salt mixtures from high saline by nanofiltration membranes. Korean J. Chem. Eng. 26, 799–805 (2009).

56. Zhi, Y. et al. Removing emerging perfluoroalkyl ether acids and fluorotelomer sulfonates from water by nanofiltration membranes: Insights into performance and underlying mechanisms. Sep. Purif. Technol. 298, 121648 (2022).

57. Fu, L., Li, J., Wang, G., Luan, Y. & Dai, W. Adsorption behavior of organic pollutants on microplastics. Ecotoxicol. Environ. Saf. 217, 112207 (2021).

58. Léniz-Pizarro, F. et al. Dual-functional nanofiltration and adsorptive membranes for PFAS and organics separation from water. ACS EST Water 2, 863–872 (2022).

59. Abbasian Chaleshtari, Z. & Foudazi, R. A review on per-and poly fluoroalkyl substances (PFAS) remediation: separation mechanisms and molecular interactions. ACS EST Water 2, 2258–2272 (2022).

60. Galaon, T., Medvedovici, A. & David, V. Hydrophobicity parameter (log Kow) estimation for some phenolic compounds of pharmaceutical interest from retention studies with mobile phase composition in reversed‐phase liquid chromatography. Sep. Sci. Technol. 43, 147–163 (2008).

61. Doucette, W. & Andren, A. Estimation of octanol/water partition coefficients: Evaluation of six methods for highly hydrophobic aromatic hydrocarbons. Chemosphere 17, 345–359 (1988).

62. Gagliano, E., Sgroi, M., Falciglia, P. P., Vagliasindi, F. G. & Roccaro, P. Removal of poly-and perfluoroalkyl substances (PFAS) from water by adsorption: Role of PFAS chain length, effect of organic matter and challenges in adsorbent regeneration. Water Res. 171, 115381 (2020).

63. Hall, G. G. In Advances In Atomic and Molecular Physics Vol. 20 (eds David Bates & Benjamin Bederson) 41-63 (Academic Press, 1985).

64. Kumar, S., Rosenberg, J. M., Bouzida, D., Swendsen, R. H. & Koll man, P. A. The weighted histogram analysis method for free‐energy calculations on biomolecules. I. The method. J. Comput. Chem. 13, 1011–1021 (1992).

65. Liu, C. et al. Removal of per-and polyfluoroalkyl substances by nanofiltration: Effect of molecular structure and coexisting natural organic matter. J. Hazard. Mater. 454, 131438 (2023).

66. Qi, Y. et al. Reverse osmosis membrane with simultaneous fouling and scaling-resistance based on multilayered metal-phytic acid assembly. J. Membr. Sci. 601, 117888 (2020).

67. Hao, Z. et al. Sulfonated Reverse Osmosis Membrane with Simultaneous Mitigation of Silica Scaling and Organic Fouling. Ind. Eng. Chem. Res. 62, 11646–11655 (2023).

68. Belfer, S., Purinson, Y. & Kedem, O. Surface modification of commercial polyamide reverse osmosis membranes by radical grafting: an ATR‐FTIR study. Acta Polymerica 49, 574–582 (1998).

69. Tong, T., Zhao, S., Boo, C., Hashmi, S. M. & Elimelech, M. Relating silica scaling in reverse osmosis to membrane surface properties. Environ. Sci. Technol. 51, 4396–4406 (2017).

70. Neese, F. Software update: The ORCA program system—Version 5.0. Wiley Interdiscip. Rev. Comput. Mol. Sci. 12, e1606 (2022).

71. Park, M., Daniels, K. D., Wu, S., Ziska, A. D. & Snyder, S. A. Magnetic ion-exchange (MIEX) resin for perfluorinated alkylsubstance (PFAS) removal in groundwater: Roles of atomic charges for adsorption. Water Res. 181, 115897 (2020).

72. Lide, D. R. CRC handbook of chemistry and physics. Vol. 85 (CRC press, 2004).

73. Nikolaienko, T. Y., Bulavin, L. A. & Hovorun, D. M. JANPA: An open source cross-platform implementation of the natural population analysis on the Java platform. Comput.Theor. Chem. 1050, 15–22 (2014).

74. Chen, T. & Guestrin, C. In Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining. 785-794.

75. Steinle-Darling, E., Litwiller, E. & Reinhard, M. Effects of sorption on the rejection of trace organic contaminants during nanofiltration. Environ. Sci. Technol. 44, 2592–2598 (2010).

76. Franke, V. et al. The price of really clean water: Combining nanofiltration with granular activated carbon and anion exchange resins for the removal of per-and polyfluoralkyl substances (PFASs) in drinking water production. ACS EST Water 1, 782–795 (2021).

77. Tang, C. Y., Fu, Q. S., Criddle, C. S. & Leckie, J. O. Effect of flux (transmembrane pressure) and membrane properties on fouling and rejection of reverse osmosis and nanofiltration membranes treating perfluorooctane sulfonate containing wastewater. Environ. Sci. Technol. 41, 2008–2014 (2007).

78. He, J., Yang, J., McCutcheon, J. R. & Li, Y. Molecular insights into the structure-property relationships of 3D printed polyamide reverseosmosis membrane for desalination. J. Membr. Sci. 658, 120731 (2022).

79. Liu, S., Ganti-Agrawal, S., Keten, S. & Lueptow, R. M. Molecular insights into charged nanofiltration membranes: Structure, water transport, and water diffusion. J. Membr. Sci. 644, 120057 (2022).

80. Bugnon, M. et al. SwissParam 2023: a modern web-based tool for efficient small molecule parametrization. J. Chem. Inf. Modeling 63, 6469–6475 (2023).

81. Posch, H. A., Hoover, W. G. & Vesely, F. J. Canonical dynamics of the Nosé oscillator: Stability, order, and chaos. Phys. Rev. A 33, 4253 (1986).

82. Parrinello, M. & Rahman, A. Strain fluctuations and elastic constants. J. Chem. Phys. 76, 2662–2666 (1982).

83. Hub, J. S., De Groot, B. L. & Van Der Spoel, D. g\_wham—A Free Weighted Histogram Analysis Implementation Including Robust Error and Autocorrelation Estimates. J. Chem. Theory Comput. 6, 3713–3720 (2010).

84. Abraham, M. J. et al. GROMACS: High performance molecular simulations through multi-level parallelism from laptops to supercomputers. SoftwareX 1, 19–25 (2015).

85. Gowers, R. J. et al. in Proceedings of the 15th python in science conference. 105 (SciPy Austin, TX).

86. Jeong, N. Elucidating governing factors of PFAS removal by poly amide membranes using machine learning and molecular simulations. https://doi.org/10.5281/zenodo.13978801 (2024).

87. Mahajan, S. Elucidating governing factors of PFAS removal by polyamide membranes using machine learning and molecular simulations. https://doi.org/10.5281/zenodo. 13924418 (2024).

## Acknowledgements

This work is partially supported by National Science Foundation (Award numbers 2112533, 2427299, 2345543, Y.C., 2448130, T.T., and 2345542, Y.L.). Y.C. acknowledges the financial support by U.S. Department of Agriculture (Award No.2018−68011-28371), National Science Foundation-U.S. Department of Agriculture (Award No. 2020-67021- 31526), and U.S. Environmental Protection Agency (Award No. 840080010). T.T. acknowledges the support by U.S. Department of Agriculture National Institute of Food and Agriculture (Hatch Project COL00799, accession 1022591). Y.L. acknowledges the financial support by the National Alliance for Water Innovation (NAWI), funded by the U.S. Department of Energy, Office of Energy Efficiency and Renewable Energy (EERE), Advanced Manufacturing Office, under Funding Opportunity Announcement Number DE-FOA-0001905 through a subcontract to the University of Wisconsin-Madison.

## Author contributions

Experiment design: T.T. and Y.C., data collection and membrane experiments: S.P., performed ML modeling: N.J., T.T., and Y.C., per formed MD simulation: S.M., J.Z., and Y.L., writing and editing: N.J., S.P., S.M., J.Z., J.B., Y.L., T.T., and Y.C.

## Competing interests

The authors declare no competing interest.

## Additional information

Supplementary information The online version contains supplementary material available at https://doi.org/10.1038/s41467-024-55320-9.

Correspondence and requests for materials should be addressed to Ying Li, Tiezheng Tong or Yongsheng Chen.

Peer review information Nature Communications thanks Shiling Yuan and the other, anonymous, reviewers for their contribution to the peer review of this work. A peer review file is available.

Reprints and permissions information is available at http://www.nature.com/reprints

Publisher’s note Springer Nature remains neutral with regard to jurisdictional claims in published maps and institutional affiliations.

Open Access This article is licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License, which permits any non-commercial use, sharing, distribution and reproduction in any medium or format, as long as you give appropriate credit to the original author(s) and the source, provide a link to the Creative Commons licence, and indicate if you modified the licensed material. You do not have permission under this licence to share adapted material derived from this article or parts of it. The images or other third party material in this article are included in the article’s Creative Commons licence, unless indicated otherwise in a credit line to the material. If material is not included in the article’s Creative Commons licence and your intended use is not permitted by statutory regulation or exceeds the permitted use, you will need to obtain permission directly from the copyright holder. To view a copy of this licence, visit http:// creativecommons.org/licenses/by-nc-nd/4.0/.

© The Author(s) 2024