---
title: "zh-Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation Wiki全文"
source_markdown: "2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation.md"
cn_markdown: "2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/zh-Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation.md"
type: translated_fulltext_wiki
---

研究论文

# 基于[[可解释机器学习|可解释高通量机器学习]]的[[高导热复合材料]]筛选及[[实验验证]]

![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/72e152dfcd2ef74030c0162f3b87d61160ab0540d419977615b472c6a81bc1c4.jpg>)

[[Yu Zhang]]<sup>a</sup>, [[Bai Xue]]<sup>a,</sup>∗, [[Lingjun Zeng]]<sup>b</sup>, [[Xiaoke Bu]]<sup>a</sup>, [[Lan Xie]]<sup>a,c,</sup>∗, [[Quanwei Chen]]<sup>a,d</sup>, [[Junhua Zhang]]<sup>e,</sup>∗

<sup>a</sup> 贵州大学公共大数据国家重点实验室，中国贵阳 550025

<sup>b</sup> 贵州大学材料与冶金学院高分子材料与工程系，中国贵阳 550025

<sup>c</sup> 贵州民族大学数据科学与信息工程学院，中国贵阳 550025

<sup>d</sup> 贵州省自然资源技术信息中心，中国贵阳 550004

<sup>e</sup> 四川大学高分子研究所高分子材料工程国家重点实验室，中国成都 610065

## 文章信息

文章历史：2025 年 11 月 11 日收稿 2025 年 12 月 16 日修回 2025 年 12 月 27 日接受 2026 年 1 月 5 日在线发表

关键词：[[机器学习]] [[残差校正|残差校正策略]] [[高导热复合材料]] [[SHAP]] [[可解释性分析]] [[高通量材料设计|高通量设计]]

## 摘要

随着[[电子器件]]、[[储能系统]]和[[航空航天技术]]的快速发展，对高[[热导率]]（TC）[[聚合物基复合材料]]的需求日益迫切。然而，传统的[[试错法|试错研究方法]]高度依赖研究者的个人经验，大量[[实验验证]]往往仍无法揭示复合材料配方与[[导热性能]]之间的复杂关系。本研究提出了一种基于[[机器学习]]（ML）的高效框架，用于筛选[[高导热复合材料|高 TC 复合材料]]，旨在优化[[材料设计]]流程、降低实验成本并识别影响 TC 的关键因素。首先，从已发表的[[碳填充聚合物复合材料|导热碳填充聚合物复合材料]]文献中构建了一个包含 370 个有效样本的综合数据集。随后，通过[[残差校正|残差校正策略]]，将 [[逻辑回归|Logistic 回归]]与 [[XGBoost]] 或[[全连接神经网络]]（FCNN）相结合，开发了 [[Logistic XGBoost混合模型|Logistic XGBoost]] 和 [[Logistic全连接神经网络混合模型|Logistic 全连接神经网络]]（[[LFCNN]]）两种[[混合模型]]，以提高对线性和非线性特征的捕捉能力。值得注意的是，LFCNN 表现最佳，[[分类准确率]]达到 96.77%。采用 [[SHAP|SHapley Additive exPlanations]]（SHAP）进行的定量分析表明，[[数值型特征|数值特征]]的重要性显著高于[[类别型特征|类别特征]]，其中[[填料含量]]被确定为主导因素。在通过[[高通量材料设计|高通量设计]]构建的包含 32327 组样本的[[材料组成空间|组成空间]]中，利用 LFCNN 和实验验证筛选出三种有潜力的候选材料，其实测 TC 与模型预测完全一致。该 ML 框架展示了将 ML 与实验验证相结合以加速[[导热聚合物基复合材料|高导热聚合物基复合材料]]开发的巨大潜力，并为 ML 在[[材料科学]]中的可解释应用提供了新的见解。

© 2026 由 [[Elsevier|Elsevier Ltd]] 代表《[[Journal of Materials Science & Technology]]》编辑部出版。

## 1. 引言

随着电子设备[[功率密度]]的不断提高以及对[[能源效率]]需求的日益增长，高效耗散设备运行过程中产生的热量，已成为确保器件性能、稳定性和使用寿命的关键 [1–3]。因此，[[高导热复合材料]]因其在[[散热]]和[[热管理]]中的关键作用，已成为[[材料科学与工程]]领域的研究热点 [4–6]。金属或陶瓷等传统[[导热材料]]在提升[[热传输|热传输性能]]方面已取得一定进展。然而，这些材料通常存在[[密度]]高、[[轻量化|轻量化特性]]不足、[[加工成型]]困难以及设计灵活性有限等缺点，限制了其在[[柔性电子器件]]等高性能器件中的潜在应用 [7–11]。

值得关注的是，[[导热聚合物基复合材料]]因其[[密度]]低、[[柔性]]优异、易于加工，以及组成和结构具有广泛的可调性而受到越来越多的关注，这些特性使其成为极具前景的下一代[[热管理材料]] [12,13]。研究人员已通过多种加工技术将一系列[[导热填料]]引入[[聚合物基体]]，以提高[[热导率]]（TC）[14]。其中，[[石墨烯]]、[[碳纳米管]]（CNT）及其[[多尺度杂化体系]]等[[碳基填料]]，凭借其本征高热导率及与聚合物优异的[[界面相容性]]，在聚合物基体内构建高效[[导热网络]]方面展现出独特优势 [15,16]。

[[导热复合材料]]的传统开发通常依赖反复的实验测量和研究人员的个人经验，以优化配方和加工条件。这类[[试错法|试错策略]]往往耗时耗力，且受限于实验可探索的材料组成和加工参数范围较窄。为克服这些局限，[[分子动力学]]和[[DFT|密度泛函理论]]等[[数值模拟|数值模拟方法]]已被广泛用于计算[[热传输|热传输特性]] [17–20]。然而，这些数值模拟方法通常受到计算成本高和模拟体系规模有限的制约，难以捕捉实际复合材料中复杂的[[多尺度相互作用|多尺度相互作用关系]] [21,22]。更为关键的是，上述两种高度依赖实验和模拟的范式，无法有效探索由组成、[[界面工程]]和[[多尺度结构调控]]所界定的庞大设计空间。因此，高性能复合材料的筛选与优化效率受到严重制约，进而阻碍了材料开发的加速与突破。

在此背景下，数据驱动的[[机器学习]]（ML）方法为材料预测与设计提供了一种新范式 [23– 26]。通过高效分析大规模[[异构数据集]]，ML 能够快速预测材料性能并识别关键影响因素，从而显著降低研究成本并缩短研究时间 [27]。例如，[[Shi]] 等人 [28] 采用[[集成学习]]优化[[电磁屏蔽复合材料]]，实现了较高的预测精度，并识别出关键设计参数。此外，[[He]] 等人 [29] 利用[[全连接神经网络]]（FCNN）预测[[电磁屏蔽效能]]，显著减少了实验工作量。这些研究凸显了 ML 在加速材料开发方面的潜力。[[Barua]] 等人 [30] 基于其自身实验室生成的数据，采用加权的元素到化学性质特征构建了 [[XGBoost]] 模型，实现了对[[掺杂硒化亚锡块体材料|掺杂 SnSe 块体材料]][[热导率]]（TC）的高精度预测。尽管[[数据驱动材料设计|数据驱动方法]]在[[导热复合材料]]研究中已取得进展，但仍有若干关键挑战亟待解决。首先，针对[[碳填充聚合物复合材料|碳基填料/聚合物复合材料]]中高导热配方的系统分类与定向发现仍显不足。其次，现有的集成与[[堆叠集成|堆叠策略]]通常将多个高容量学习器组合起来，却未明确区分[[全局线性趋势]]与具有结构的[[非线性残差]]，这会导致对同一特征的重复建模，并使样本利用效率未能达到最优 [31,32]。同时，[[模型可解释性|可解释性]]的缺失进一步阻碍了对特征与性能之间关系的阐明，并限制了为[[材料合成]]和[[工艺优化]]提供实用指导的能力 [33,34]。

本研究开发了一种基于 [[机器学习|ML]] 模型的[[数据驱动材料设计|数据驱动框架]]，用于高效筛选具有高 [[热导率|TC]] 的[[碳填充聚合物复合材料|碳基填料/聚合物复合材料]]，从而相较于传统实验方法缩短时间并降低成本。随后，在 [[逻辑回归|Logistic 回归]]、[[XGBoost]] 和 [[全连接神经网络|FCNN]] [[基线模型]]的基础上，采用[[残差校正|残差校正策略]]设计了 [[Logistic XGBoost混合模型|LXGBT]] 和 [[Logistic全连接神经网络混合模型|Logistic FCNN]]（[[LFCNN]]）两种[[混合模型]]，以全面捕捉 TC 与复合材料配方数据中的线性和非线性信息。在该策略中，[[线性模型]]和[[非线性模型]]能够在特征捕捉方面发挥互补作用，使各自在最有效的领域充分发挥其优势。最终，LFCNN 模型取得了最高的[[分类准确率]]，达到 96.77%，表明该方法能够从[[异构数据集]]中高效识别具有高 TC 的新型复合材料。此外，采用 [[SHAP|SHapley Additive exPlanations]]（SHAP）值量化各特征对 TC 的贡献，为[[材料设计|复合材料设计]]提供可解释的指导 [35,36]。最终，对通过模型和[[材料组成空间|高通量组成空间]]识别出的高潜力组分进行了[[实验验证]]，形成了预测、验证与解释的闭环。

## 2. 方法

## 2.1. 数据集

本研究从已发表文献（补充材料）中收集并整理了 370 个[[导热复合材料]]的有效数据样本，以构建综合数据集。数据集特征包括基体类型、填料类型、[[填料含量]]、[[热导率|TC]]、[[薄膜厚度|厚度]]、加工方法和结构特征，分为数值型和类别型，如图 1(a) 所示。对于以图形形式呈现的数值数据，采用 [[Plot Digitizer]] 工具（http://plotdigitizer.sourceforge.net/）高精度提取数值。评估了平均绝对误差、均方根误差和平均相对偏差，所得值分别为 0.0084、0.0146 和约 0.8156%。考虑到本研究的建模目标侧重于捕捉整体分布趋势和[[多特征相关性]]，这种数值很小且可接受的[[图形数字化|图形数字化误差]]预计对数据集的可靠性或模型结论影响甚微。

数据集构建完成后，实施了系统的[[数据预处理]]流程，以确保数据质量和模型可靠性。首先，统一[[数值型特征|数值特征]]的单位：[[填料含量]]以[[质量百分比]]（wt.%）表示，[[薄膜厚度|厚度]]以毫米表示，[[热导率|TC]] 统一以 W/(m K) 表示。为处理[[异常值]]，采用[[四分位距法|四分位距（IQR）法]]，剔除低于[[第一四分位数]]减去 1.5 倍 [[四分位距|IQR]] 或高于[[第三四分位数]]加上 1.5 倍 IQR 的数值。对于[[缺失值]]，数值特征采用平均值填补，[[类别型特征|类别特征]]则标记为“unknown”。考虑到实验过程中人为或外部因素引起的测量误差，根据样本的 TC 值将其划分为三个 TC 类别：低 TC（TC < 1 W/(m K)）、中 TC（1 TC 10 W/(m K)）和高 TC（TC > 10 W/(m K)），分别记为类别 0、类别 1 和类别 2。采用独热编码（one-hot encoding），将类别变量转换为以 0 和 1 表示的二元数值特征。在这种形式下，数值 1 表示存在某个特定子类别，0 则表示不存在该子类别。为区分基体和填料，分别在基体和填料编码的子类别中使用前缀“M”和“F”（图 1(b)）。这种转换使 [[机器学习|ML]] 模型能够有效利用类别数据。最后，通过分层随机抽样，将整理后的数据集按 8:2 的比例随机划分为训练集和测试集，确保三个 TC 类别在两个子集中保持相近的比例。

## 2.2. 模型选择

本研究采用五种模型对[[碳填充复合材料]]的 [[热导率|TC]] 进行分类和预测，包括三种基础模型：[[逻辑回归|Logistic 回归]]、[[XGBoost]] 和 [[全连接神经网络|FCNN]]，以及两种基于[[残差校正|残差校正策略]]的[[混合模型]]：

![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/9cc112fde8487f9801bdd1cb68bfeb58b73d7f374adbe53801402f34e660864c.jpg>)  
图 1. (a) 数据集的组成；(b) 类别特征独热编码示意图。

[[Logistic XGBoost混合模型|Logistic XGBoost]]（[[LXGB]]）和 [[LFCNN]]。先验统计分析表明，[[热导率|TC]] 随[[填料含量]]呈现明显的[[全局线性趋势]]，显著的 Pearson 相关性 $( r = 0 . 4 4 4 0 , p < < 0 . 0 0 1 ) .$ 也证实了这一点。为显式建模这一占主导地位的线性分量，采用 [[逻辑回归|Logistic 回归]]作为线性骨干，提供稳定且可解释的全局线性映射 [37]。

为考虑 [[逻辑回归|Logistic 回归]]可能无法捕捉的潜在非线性相关性，本研究从两类广受认可的[[非线性模型]]族（分别为基于树的学习器和神经网络）中，选取 [[XGBoost]] 和 [[全连接神经网络|FCNN]] 作为代表性的非线性校正器。XGBoost 天然适合捕捉非线性特征，因为其集成树结构按顺序构建决策树，每棵树对前一棵树的残差进行建模。这种基于二阶泰勒展开的提升结构能够在每个叶节点上对损失函数进行精确的基于梯度的优化，从而促进对复杂特征交互作用的精细学习 [38]。此外，FCNN 能够学习连续且平滑的非线性流形。其多层结构（图 S1）和非线性激活函数使 FCNN 能够对特征之间的复杂映射进行建模，并逼近数据中连续且高度非线性的关系 [39,40]。有关这些模型的详细信息见补充材料。

## 2.3. [[残差校正|残差校正策略]]

[[XGBoost]] 和 [[全连接神经网络|FCNN]] 具有较强的非线性特征学习能力，但在推断[[全局线性趋势]]方面效能不足 [41,42]。相比之下，[[逻辑回归|Logistic 回归]]模型擅长捕捉数据中的全局线性趋势，但提取变量间复杂交互作用的能力有限 [43]。因此，本研究创新性地构建了将 Logistic 回归与 XGBoost 或 FCNN 相结合的[[残差校正]][[混合模型]]，利用二者的互补优势提高分类性能。具体而言，混合模型的结构设计如图 2 所示。Logistic 回归的输出维度为 (N, C)，其中 N 表示样本数量，C 表示类别数量。(N, C) 中位置 (i, j) 的值

表示样本 i 被分为类别 j 的预测概率。

残差矩阵 (R) 表示为：

$$
R = Y - (i, j)\tag{1}
$$

其中，Y 表示真实标签的独热编码。R 表示 [[逻辑回归|Logistic 回归]]无法有效捕捉的非线性部分和变量交互信息。以 [[LFCNN]] 为例，针对三个类别分别构建一个 [[全连接神经网络|FCNN]]，并输入相应的 R 进行独立训练。当[[混合模型]]进行预测时，每个训练完成的 FCNN 预测其对应类别的校正残差，随后将其加到 Logistic 回归得到的输出概率 (i, j) 上。随后，使用 Softmax 函数对所得校正概率进行归一化，以确保形成有效的概率分布。将概率最高的类别作为混合模型的最终预测结果。简而言之，混合模型能够通过 Logistic 回归捕捉整体趋势，并使用 FCNN 或 [[XGBoost]] 对残差进行精细校正，从而充分利用数据集中的非线性关系和交互关系。

## 3. 结果与讨论

## 3.1. 数据集的可视化分析

为提高后续分析的准确性，揭示数据中的潜在模式和趋势，并为本研究提供更深入的认识，采用探索性数据分析（Exploratory Data Analysis）对数据集进行可视化分析。数据集的特征总体上分为[[数值型特征]]和[[类别型特征]]，其中数值型特征包括[[薄膜厚度|厚度]]、[[填料含量]]和 [[热导率|TC]]。如图 3 所示，采用直方图展示这些数值型特征的取值范围和分布形态。此外，绘制相关性散点图，分析填料含量与厚度、填料含量与 TC 以及厚度与 TC 之间的关系，旨在探索潜在的线性或非线性关联。

图 3(a–c) 表明，大多数样品的填料含量相对较低，主要低于 20 wt.%；TC 和厚度值分别主要分布在 20 W/(m K) 和 3 mm 以下。数值型特征的相关性散点图（图 3(d–f)）显示，填料含量与 TC 总体呈正相关，且在填料含量超过 30 wt.% 时相关性更强。相比之下，填料含量与厚度之间以及厚度与 TC 之间均无明显相关性。

![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/b02bd3511bf92fc843ab46fc7825dc914e7e3b5ec7800fa91e17eeccc5a15b62.jpg>)

图 2. 残差校正策略示意图。  
![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/f99eb6c8ff1f77402d3877a36e29f54941ac8a5e470662f2ac98fffde013ffc8.jpg>)

![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/602139e7230f48e1048c705ac6097693c528833eaa360366c5dfda1d36082d1a.jpg>)

![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/158e02542ba48c89f66909e28f190ba6a111c79d0b7c49326c4439985868ab17.jpg>)

![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/910bc33cbca300845b843d9c611d08e6c6dc4bbe1bc80eab5b8d9fb2a74f601b.jpg>)

![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/9577bcc27cdf3655d8adc1708af7ba77645cc89c0479bf965a0e3627f917d4c3.jpg>)

![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/e74b2275338a815b48030851f27d247dc84835d8a5a4c3d64be1d8d49e574063.jpg>)  
图 3. (a–c) 数值型特征直方图；(d–f) 相关性散点图。

为研究[[类别型特征]]对 [[热导率|TC]] 的影响，采用箱线图展示不同类别型特征下 TC 的分布，如图 4 所示。这些箱线图清晰地展示了不同类别下 TC 的分布范围和集中趋势。MXene、[[石墨烯]]纳米片（[[石墨烯纳米片|GNP]]）和石墨填料的 TC 分布相似，平均值约为 3.5 W/(m K)（图 4(a)）。此外，MXene 和 GNP 的分布范围也相对较宽。相比之下，[[碳纳米管|CNT]] 填料的平均 TC 较低，约为 1.2 W/(m K)，而碳纤维（CF）和碳纳米纤维（[[纤维素纳米纤维|CNF]]）填料的 TC 值最低，平均值均低于 1 W/(m K)。还原氧化石墨烯（RGO）的 TC 最高，平均值接近 5 W/(m K)。这一优异性能可能归因于 RGO 出色的分散性和层状堆叠结构，这有利于在[[聚合物基体]]内构建有效的[[导热网络]] [44]。图 4(b) 表明，薄膜和多层结构的 TC 值最高，平均值相近，均约为 3 W/(m K)。这可归因于这些结构中填料的高度取向，其促进了连续面内导热通路的形成，从而显著提高了整体 TC [45]。隔离结构的 TC 值适中，平均值为 1.57 W/(m K)，而泡沫结构的 TC 最低，平均约为 0.3 W/(m K)，这可能是由于其固有的高[[孔隙率]]以及空气的[[隔热]]作用 [46]。

如图 4(c) 所示，不同基体材料的 [[热导率|TC]] 存在显著差异。某些基体，如氟化[[石墨烯]]纳米片-聚乙烯醇（FGN-PVA）、聚酰亚胺（PI）和木纤维（WF），表现出极高的 TC 值，其平均值分别接近 95、74 和 63 W/(m K)。其中，WF 的分布范围也最宽。相比之下，大多数其他基体材料的 TC 值相对较低，均值低于 10 W/(m K)，且分布相对集中。这些结果表明，基体材料的类型对复合材料的 TC 具有关键影响。图 4(d) 中加工方法的箱线图表明，[[溶液浇铸]]和[[真空辅助过滤]]可显著提高 TC。相比之下，大多数其他工艺，如熔融混合和水蒸气诱导相分离（WVIPS），在提高 TC 方面的效果有限。总体而言，加工工艺也是影响复合材料 TC 的关键因素，选择合适的工艺可有效优化材料性能。

需要注意的是，上述分析仅通过可视化对数据集提供探索性认识，而非得出确定性结论。可视化分析的目的是揭示变量的潜在分布模式及其相互之间可能存在的关系，从而为后续建模和特征选择奠定基础。

## 3.2. 模型训练与评估

为提高模型的[[模型泛化能力|泛化能力]]，每个模型均进行 20 次独立训练，并取算术平均值，每次训练均将数据集随机划分为训练集和测试集（8:2）。鉴于[[逻辑回归]]和 [[XGBoost]] 的超参数空间相对有限，采用 Optuna 高效确定最优设置。最优超参数组合见表 S1 和 S2。相比之下，[[全连接神经网络|FCNN]] 的超参数空间更大、更复杂，导致穷尽式自动调参的计算成本高昂，难以实施。

因此，转而采用基于经验的合理参数设置。[[LFCNN]] [[混合模型]]的参数设置相应地通过结合 Optuna 与经验进行确定。在 [[Logistic全连接神经网络混合模型|LFCNN]] 混合模型的训练过程中，三个类别对应的训练集损失（图 5(a)）均在约 175 个训练轮次时开始收敛至约 0.001。在测试集上（图 5(b)），类别 1 的损失始终比其他两个类别高约 0.2，这与其在受试者工作特征（Receiver Operating Characteristic，ROC）曲线（图 5(c)）中具有最小曲线下面积（Area Under the Curve，AUC）值的结果一致。尽管独立 [[全连接神经网络|FCNN]] 模型较早开始收敛，约在 120 个训练轮次时便开始收敛（图 S3(a)），但其最终稳定损失值为 0.004，仍略高于 LFCNN 模型。

[[LFCNN]] [[混合模型]]的[[分类准确率|准确率]]曲线（图 5(d)）表明，第一个 epoch 的高准确率源于预训练的 [[逻辑回归|Logistic 回归]]基线预测。随后，预测准确率的提高归因于 [[全连接神经网络|FCNN]] 阶段对残差的逐步拟合。具体而言，在前 50 个 epoch 内，训练集准确率随迭代次数增加而迅速提高，表明该模型能够充分拟合训练数据。在测试集上，准确率也在前 30 个 epoch 内快速上升，并在 87 个 epoch 后稳定在约 0.9677，仅有微小波动，表明其在该数据集上具有良好的[[模型泛化能力|泛化能力]]。此外，[[Logistic全连接神经网络混合模型|LFCNN]] 模型的训练集与测试集准确率之间约 3% 的差距处于合理范围内，未表现出明显的过拟合迹象。同时，模型在测试集上的表现保持稳定，未出现明显下降，进一步证实了 LFCNN 模型的[[模型稳健性|稳健性]]和有效性。

根据所采用模型在测试集上的预测结果，[[逻辑回归|Logistic 回归]]模型的[[分类准确率|准确率]]相对有限，为 0.8602，作为线性基线（图 5(e)）。相比之下，[[XGBoost]] 和 [[全连接神经网络|FCNN]] 模型凭借对复杂非线性关系的出色建模能力，将准确率分别显著提高至 0.9247 和 0.9462。值得注意的是，通过[[残差校正|残差校正策略]]构建的 [[LXGB]] 和 [[LFCNN]] [[混合模型]]进一步将准确率分别提高至 0.9570 和 0.9677，均优于其他三个模型。值得关注的是，[[Logistic全连接神经网络混合模型|LFCNN]] 模型在所有评价指标上均取得了最佳表现，准确率为 0.9677、精确率为 0.9701、召回率为 0.9677、[[F1分数|F1 分数]]为 0.9681，表明其能够有效捕捉复杂的线性和非线性关系。这些结果表明，[[残差校正策略]]能够显著提升模型性能，可作为一种有效的建模工具，帮助研究人员快速、精确地估算 [[热导率|TC]]，从而促进具有潜力的结构设计的识别，显著降低[[实验验证]]成本，并加速材料开发进程。

## 3.3. [[特征重要性分析]]

累积贡献率（图 6(a)）表明，排名前 12 的特征约占总重要性得分的 60%，而 47 个特征合计贡献高达 90%，这表明相对较小的特征子集主导了模型的预测能力。基于这一观察结果，将通过 [[SHAP]] 方法得到的排名前 12 的特征的重要性得分单独绘图，以突出最具影响力的因素（图 6(b)）。[[填料含量|填充量]]和[[薄膜厚度|厚度]]这两个[[数值型特征|数值特征]]的影响通常大于基体类型、填料类型、加工方法和结构等[[类别型特征|类别特征]]。此外，填充量特征的重要性最高，得分为 0.2696，而厚度的重要性明显较低，得分为 0.1732，表明填料填充量对 [[热导率|TC]] 的影响远大于材料厚度。此外，许多类别特征的重要性得分通常相对较低，例如 F-[[石墨烯纳米片|GNP]]（填料类型）的重要性得分为 0.0849，薄膜（结构）为 0.0698，F-[[碳纳米管|CNT]]（填料类型）为 0.0607，这表明特定填料类型和结构形式仍在模型中提供补充价值。总体而言，这些结果表明，模型预测既依赖数值特征提供的定量信息，也依赖反映材料类型、填料类型、结构和加工差异的类别特征，其中前者对决策过程的贡献更为显著。

![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/df5312075aa26e288ccd6eafa29236f4063a0ef59560d52884afb36c748a3981.jpg>)

![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/c70afdd906130238fdee8b815b25c271df5f228c7da56872b86294f51b51e50e.jpg>)

![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/5ee6d659a004785e0bcd3b9a9da15e5cfbe123b92a5cda910a68febf98d271c0.jpg>)

![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/dba353680b12472b7891f69a09f96e3384315e8c55c23a2adf7910a0a98b7430.jpg>)  
图 4. 类别特征的箱线图：TC 与 (a) 填料、(b) 结构、(c) 基体和 (d) 加工方法的关系

a  
![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/89b0bc2b911beaa7ddce86ac2df519b3b205d5b6d819fca9205d16f6d6f7a5cf.jpg>)

b  
![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/2abec8e0573ff7208c3e7bcabd8c377cf1edac85519f7aebd2666437dd3504de.jpg>)

C  
![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/50db0924d0e4a9a5e25bb8fbb9afe2004b07c8c181154186d094c5508b974bf4.jpg>)

d  
![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/b6bf44245df2e69b80653898f9555f30405ba0119bbab2c6684d591b8ee23428.jpg>)

e  
![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/4c1366b14b74458a925a8a2796e2723c3e82e600da31d2edc77c1fca977b4eef.jpg>)  
图 5. 训练 (a) 和测试 (b) 损失曲线；(c) LFCNN 针对三个类别的 ROC 曲线；(d) 训练和测试准确率曲线；(e) 各模型在测试集上的预测性能。

a  
![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/5e29ce63bf74654ebd9ac94c18ed52bcefddbe00c44da4b178a0a5f335887c6b.jpg>)

b  
![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/e258ba81192226d686e57649520422fcbd82a2ee17f164f01e9d342dc4ab6c21.jpg>)  
图 6. (a) 累积特征重要性曲线；(b) 总体特征重要性排名。

![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/b727fec94c8eef5a530e0241eec6241210a452ae53e56cbc4e79339a93823a32.jpg>)

![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/4d14d3752220728ca5c069b65b8352530db03357f937d25458e6e8ed7a49a2c9.jpg>)

![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/7a286e68252f9c3edf5971e2fdbc77d84aab579968007a932c4d74e60b71b61a.jpg>)

![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/737980fc6a92b0a0caaef79bb47f4dfdf23faa6520b8e96cf4459205a8a9b85a.jpg>)  
图 7. (a–c) 分别对应类别 0–2 的 SHAP 值关系；(d) LFCNN 模型决策过程。

图 7(a–c) 展示了各特征对三个类别的模型预测的重要性。图中的每一行表示一个特征，其中每个点代表一个样本在该特征上的 SHAP 值。如图 7(a)（类别 0）所示，较低的填料含量（蓝色）对应较高的 SHAP 值，表明填料含量较低的样本更有可能被归入类别 0，这与图 3(e) 中的可视化分析一致。此外，厚度增加似乎也会促进样本被归入类别 0。在类别 1 的图 7(b) 中，SHAP 值与填料含量和厚度特征之间未观察到明确的关系。然而，薄膜结构的 SHAP 分布表明，该特征对薄膜样本归入类别 1 具有正向贡献，由此推测薄膜样本更有可能表现出 1–10 W/(m K) 的中等 TC。类别 2 的图 7(c) 显示，填料含量与类别 2 的 SHAP 值之间存在更强的正相关关系，表明较高的填料含量在制备高 TC 样本（> 10 W/(m K)）中发挥着更显著的作用，这是因为随着功能填料含量的增加，所构建的连续导热通路日趋完善。

表 1  
基于数据集构建的新样本。

<table><tr><td>样本组</td><td>基体</td><td>填料</td><td>含量 (wt.%)</td><td>厚度</td><td>加工方法</td><td>结构</td></tr><tr><td>第 1 组</td><td>CNF</td><td>CNT</td><td>0–58</td><td>1.0</td><td>真空辅助过滤</td><td>薄膜</td></tr><tr><td>第 2 组</td><td>CNF</td><td>GNP</td><td>0–20</td><td>1.0</td><td>真空辅助过滤</td><td>薄膜</td></tr><tr><td>第 3 组</td><td>WPU</td><td>CNT</td><td>0–58</td><td>1.0</td><td>溶液浇铸</td><td>薄膜</td></tr></table>

图 7(d) 中的瀑布图展示了 LFCNN 模型对从测试集中随机选取的一个类别 2 样本的决策过程，呈现了各特征对最终预测的重要性。图中，E[f(x)] 0.182 表示在没有任何特征信息的情况下，LFCNN 预测该样本属于类别 2 的概率，而 $f ( x ) = 0 . 9 6$ 表示考虑所有特征贡献后的预测概率。图中特征贡献自下而上逐渐增大，尤其是填料含量和厚度仍然是影响模型预测的主导因素。值得注意的是，只有基体聚偏二氟乙烯的缺失对类别 2 的预测产生负向影响。所有其他特征均对预测产生正向贡献。因此，必须在材料设计空间中考虑特征之间的相互作用及其针对不同类别的敏感性，以实现更有针对性的模型优化和材料筛选策略。

## 3.4. [[高通量材料设计|高通量设计]]与[[材料筛选|候选样本筛选]]

完成模型训练与评估后，本研究基于原始数据库进一步构建了包含32327组新型复合材料的[[材料组成空间|组成空间]]，在初始[[高通量材料设计|高通量设计]]过程中未考虑[[填料含量]]和[[薄膜厚度|厚度]]的数值参数。随后，根据原始数据集中填料含量特征的分布，为每个候选样本的填料含量赋予三个具有代表性的离散值（10 [[质量百分比|wt.%]]、30 wt.%和60 wt.%），同时将厚度固定为1 mm，从而形成在填料含量方面更符合实际实验条件的设计。在此基础上，使用已建立的模型对所有新样本进行[[高通量预测]]。结果表明，新设计的样本空间中，类别0约占48%，类别1约占14%，类别2约占38%，反映出三个类别之间较为均衡的[[类别分布]]。最后，考虑到实验可行性和材料加工限制，从候选空间中选取了三组具有代表性的新样本：[[纤维素纳米纤维]]/[[碳纳米管|CNT]]（CNF/CNT）、CNF/[[石墨烯纳米片|GNP]]和[[水性聚氨酯]]/CNT（WPU/CNT）（表1），开展进一步的[[实验验证]]，以评估模型在实际场景中的[[模型泛化能力|泛化能力]]和适用性。将[[碳基填料]]引入[[聚合物基体]]已成为制备[[导热复合材料]]的主流方法，并在文献中得到广泛报道。这些复合材料组涉及导热复合材料中被广泛研究的组分：CNF可提供轻质且高度[[各向异性]]的[[纤维网络]][47]，CNT和GNP能够提供较高的[[本征热导率|本征TC]][48,49]，而WPU则赋予材料[[柔韧性]]和[[弹性]][50]。这种多样性确保了所选材料组具有不同的实际适用性，并涵盖不同的[[热导率|TC]]水平，从而在模型的候选空间与后续实验之间建立连贯的联系。[[特征重要性分析]]表明，填料含量特征对TC预测的贡献最大，凸显了其在调控目标性能方面的关键作用。因此，本研究选择填料含量作为进一步研究的主要变量。据此，在合理范围内系统调整每组新构建样本的填料含量，以生成具有不同填料比例的扩展数据集，最终每组样本包含30条数据（表S7）。

随后，采用表现最佳的[[LFCNN|残差校正混合模型LFCNN]]，对新构建数据集的[[热导率|TC]]进行预测。如图8所示，三种新设计试样的TC均随[[填料含量]]的升高呈阶梯式增长，表明填料含量对[[导热性能]]具有显著的调控作用。具体而言，[[纤维素纳米纤维|CNF]]/[[碳纳米管|CNT]]、CNF/[[石墨烯纳米片|GNP]]和[[水性聚氨酯|WPU]]/CNT的类别转变分别出现在约16 [[质量百分比|wt.%]]和46 wt.%、3 wt.%和9 wt.%以及26 wt.%和46 wt.%处。这些临界点揭示了TC对填料含量变化的[[非线性响应]]，并进一步验证了[[Logistic全连接神经网络混合模型|LFCNN]]在识别性能拐点和指导[[材料设计参数优化]]方面的有效性与实用价值。

为验证 [[LFCNN]] 模型在识别具有边界 [[热导率|TC]] 值（TC < 1 W/(m K) 和 $\mathrm { T C } ~ > ~ 1 0 ~ \mathrm { W / ( m ~ K ) } )$ 的样品时的可靠性和实用性，本研究优先对类别 0 和类别 2 的样品进行了[[实验验证]]。一方面，这两个类别之间的 TC 差异显著，便于开展清晰的实验比较与验证。另一方面，这两个类别的样品在[[材料筛选]]及[[隔热]]或[[散热|高效散热]]等应用中具有更大的实际意义，因此验证其预测性能尤为重要。据此，对于新设计的三组材料——[[纤维素纳米纤维|CNF]]/[[碳纳米管|CNT]]、CNF/[[石墨烯纳米片|GNP]] 和 [[水性聚氨酯|WPU]]/CNT——分别选取了对应于类别 0 的[[填料含量]]（8 [[质量百分比|wt.%]]、1 wt.% 和 6 wt.%）以及对应于类别 2 的填料含量（52 wt.%、18 wt.% 和 50 wt.%）。

## 4. [[实验验证]]

## 4.1. [[纤维素纳米纤维|CNF]]/[[碳纳米管|CNT]] 和 CNF/[[石墨烯纳米片|GNP]] [[复合薄膜]]的制备

如图 9(a) 所示，将共计 9.09 g 的 [[纤维素纳米纤维|CNF]] [[悬浮液]]分散于 36.6 [[机器学习|mL]] [[去离子水]]中，并[[磁力搅拌]] 1 h。随后加入一定量的 [[碳纳米管|CNT]]，接着进行[[超声处理]]和磁力搅拌，以确保 CNT 在稀释的 CNF 水悬浮液中均匀分散。采用[[真空辅助过滤|真空辅助过滤法]]对所得 CNF/CNT [[分散液]]进行过滤，随后在 45 °C 的[[真空烘箱]]中干燥。通过该过程制得 CNT 含量分别为 8 和 52 [[质量百分比|wt.%]] 的 CNF/CNT [[复合薄膜]]，分别标记为 CC8 和 CC52。制备 CNF/[[石墨烯纳米片|GNP]] 复合薄膜时，使用 7.27 g 的 CNF 悬浮液（图 9(b)）。其余步骤与 CNF/CNT 薄膜的制备过程相同。所得 GNP 含量分别为 1 wt.% 和 18 wt.% 的 CNF/GNP 薄膜分别标记为 CG1 和 CG18。

表 2  
![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/35d5091d502258a8b8edd664d7757556a80c29aecb0070247a33bbc2845f279f.jpg>)

![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/7d0515e7608472125b73177d415089a24fb0b452cbf639ee9a169354dd8fcd98.jpg>)

![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/813f08f4a6e7f9bbdecee7f350e67bdfa8384cc6a74eebf7524a79461f419c0d.jpg>)  
图 8. 三组新样品的预测结果：(a) CNF/CNT；(b) CNF/GNP；(c) WPU/CNT。

![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/239eaba892437f63f94c55e76ceb8a3ad8f033422ee0c7ce796dbffcd78f24f1.jpg>)  
图 9. (a) CNF/CNT、(b) CNF/GNP 和 (c) WPU/CNT 复合薄膜的制备过程示意图。

## 4.2. [[水性聚氨酯|WPU]]/[[碳纳米管|CNT]] [[复合薄膜]]的制备

将共计 2.86 g 的 [[水性聚氨酯|WPU]] 水溶液用 31.5 [[机器学习|mL]] [[去离子水]]稀释，并[[磁力搅拌]] 45 min，形成均匀的 WPU 溶液（图 9(c)）。通过[[超声处理]]和搅拌，将一定量的 [[碳纳米管|CNT]] 均匀分散于 WPU [[分散液]]中，形成稳定的 WPU/CNT [[悬浮液]]。随后将该悬浮液倒入[[培养皿]]中，静置后在 45 °C 的[[真空干燥器]]中干燥。由此获得 CNT 含量分别为 6 和 50 [[质量百分比|wt.%]] 的 WPU/CNT [[复合薄膜]]，分别标记为 WC6 和 WC50。

## 4.3. 结果

根据实测性能参数（表 2）计算得到的样品 [[热导率|TC]] 值如图 10 所示。具体而言，CC8、CG1 和 WC6 的 TC 值分别为 0.47、0.70 和 0.73 W/(m K)，均归入类别 0。相比之下，CC52、CG18 和 WC50 的 TC 值分别为 15.10、11.44 和

验证样品的实验测得[[热扩散率]]（ɑ）、[[比热容]] $( C _ { p } ) ,$ 和[[密度]]（ρ）。

<table><tr><td>样品</td><td>填充量 (wt.%)</td><td> $\rho$  (g/cm3)</td><td>a (mm2/s)</td><td> $C_p$  (J/(g °C))</td></tr><tr><td>CC8</td><td>8</td><td>1.20 ± 0.02</td><td>0.36 ± 0.04</td><td>1.08 ± 0.04</td></tr><tr><td>CC52</td><td>52</td><td>1.52 ± 0.02</td><td>5.43 ± 0.06</td><td>1.83 ± 0.05</td></tr><tr><td>CG1</td><td>1</td><td>1.10 ± 0.01</td><td>0.62 ± 0.04</td><td>1.02 ± 0.03</td></tr><tr><td>CG18</td><td>18</td><td>1.47 ± 0.02</td><td>3.93 ± 0.06</td><td>1.98 ± 0.04</td></tr><tr><td>WC6</td><td>6</td><td>0.79 ± 0.01</td><td>1.02 ± 0.05</td><td>0.91 ± 0.03</td></tr><tr><td>WC50</td><td>50</td><td>1.67 ± 0.03</td><td>3.89 ± 0.07</td><td>1.69 ± 0.05</td></tr></table>

分别为 10.98 W/(m K)，均属于第 2 类。实验结果均与模型预测的分类完全一致（图 8），证实了所提出模型对实际材料体系的较强适用性。随后，将这六个验证样品的特征值纳入原始数据集，从而建立[[数据驱动反馈闭环|数据驱动的反馈闭环]]。评估结果进一步表明，[[LFCNN]] 模型在预测复合材料边界 [[热导率|TC]] 性能方面具有准确性和可行性，凸显了其为新[[材料设计]]提供高效、可靠指导的潜力。

![](<../2.SCI_MD/Interpretable high-throughput machine learning-based screening of high-thermal-conductivity composites with experimental validation/images/6368261030a7d2b8d45ace64f46596d99a061615f019a6f36f706b122d513182.jpg>)  
图 10. 六个验证样品的 TC 实验值

## 5. 结论

本研究建立了一个用于筛选具有高 [[热导率|TC]] 的潜在[[碳填充聚合物复合材料|碳基填料/聚合物复合材料]]的系统框架，可为 [[机器学习|ML]] 方法在[[材料科学]]领域的应用提供重要启示。具体而言，该框架涵盖[[数据预处理|数据收集与预处理]]、[[模型优化|模型构建与优化]]、[[特征重要性分析]]以及[[模型可解释性分析]]。首先，通过整合已发表文献中的数据，构建了一个用于预测[[碳填充复合材料]] TC 的综合数据集。基于 [[逻辑回归|Logistic 回归]]、[[XGBoost]] 和 [[全连接神经网络|FCNN]]，采用[[残差校正|残差校正策略]]设计了 [[LXGB]] 和 [[LFCNN]] [[混合模型]]，以揭示输入特征中固有的[[高维相关性]]。评估结果表明，[[Logistic XGBoost混合模型|LXGB]] 和 [[Logistic全连接神经网络混合模型|LFCNN]] 均明显优于其他三个[[基线模型]]，其中 LFCNN 的预测表现最佳，[[分类准确率|准确率]]为 96.77%，[[F1分数|F1 分数]]为 0.9681。其内在机制在于，[[残差校正策略]]在捕捉[[异质数据]]中的线性和非线性关系方面具有优势。此外，采用 [[SHAP]] 方法量化特征重要性，并阐明各特征如何影响模型的决策过程。[[数值型特征]]的重要性得分总体上较高（> 0.15），而[[类别型特征]]的得分较低（< 0.10），其中[[填料含量]]的得分最高（0.2696），凸显了其在决定 TC 方面的主导作用。随后，将 LFCNN 模型应用于[[高通量材料设计|高通量设计]]的 32327 个样本的 TC 预测，并从中选出三组具有潜力的复合材料——[[纤维素纳米纤维|CNF]]/[[碳纳米管|CNT]]、CNF/[[石墨烯纳米片|GNP]] 和 [[水性聚氨酯|WPU]]/CNT——进行[[实验验证]]。实测 TC 与模型预测完全一致；例如，CG18 样本表现出最高的 TC，为 15.10 W/(m K)，被归为类别 2。这些结果证实，所提出的基于 LFCNN 的框架在实际材料体系中具有优异的[[模型稳健性|稳健性]]和[[模型泛化能力|泛化能力]]，可有效辅助研究人员快速识别高性能[[导热聚合物复合材料]]。

## 利益冲突声明

作者声明，不存在任何已知的、可能被认为会影响本文所报告工作的财务利益冲突或个人关系。

## [[CRediT贡献者角色分类法|CRediT]] 作者贡献声明

[[Yu Zhang]]：写作——初稿撰写、正式分析、数据整理、概念构思。[[Bai Xue]]：写作——审阅与编辑、监督指导、方法学、经费获取。[[Lingjun Zeng]]：可视化、资源提供。[[Xiaoke Bu]]：软件。[[Lan Xie]]：监督指导、项目管理、方法学。[[Quanwei Chen]]：监督指导、经费获取。[[Junhua Zhang]]：监督指导、方法学。

## 致谢

本研究获得[[贵州省科技计划项目]]（编号 ZK[2022]Maj019）、[[国家自然科学基金]]（编号 52363004）和[[公共大数据国家重点实验室]]（编号 PBD2023-22）的支持。

## 补充材料

与本文相关的补充材料可在在线版本中通过以下 DOI 获取：doi:10.1016/j.jmst.2025.12.045.

## References

[1] W. Lv, J. Li, M. Chen, Appl. Therm. Eng. 227 (2023) 120402.

[2] Y. Tu, B. Liu, G. Yao, H. Luo, X. Jia, J. Du, C. Xu, Electronics 13 (2024) 4287.

[3] J.M. Qi, C.B. Liang, K.P. Ruan, M.K. Li, H. Guo, M.K. He, H. Qiu, Y.Q. Guo, J.W. Gu, Natl. Sci. Rev. 12 (2025) nwaf394.

[4] B.J. Wei, W.M. Luo, J.Y. Du, Y.F. Ding, Y.J. Guo, G.M. Zhu, Y. Zhu, B.W. Li, Susmat 4 (2024) e239.

[5] Y.H. Meng, D.H. Yang, X.F. Jiang, Y. Bando, X.B. Wang, Nanomaterials 14 (2024) 331.

[6] M. Chen, Y. Hao, C. Zhu, S. Liu, S. Liu, X. Hu, X. Li, H. Wu, X. Lu, J. Qu, Polymer 297 (2024) 126854.

[7] R. Yamamoto, D. Kowalski, R. Zhu, K. Wada, Y. Sato, S. Kitano, C. Zhu, Y. Aoki, H. Habazaki, Appl. Surf. Sci. 537 (2021) 147854.

[8] H.-D. Guan, X.-B. He, Z.-J. Zhang, T. Zhang, X.-H. Qu, New Carbon Mater. 38 (2023) 804–824.

[9] H. Hong, J.U. Kim, T.I. Kim, Polymers 9 (2017) 413.

[10] Z. Zhao, C. Liu, B. Xu, J. Wang, Y. Yao, T. Yin, S. To, Y. Yang, Crit. Rev. Solid State Mat. Sci. 50 (2025) 419–465.

[11] H. Yoon, P. Matteini, B. Hwang, J. Non-Cryst. Solids 576 (2022) 121272.

[12] M.S. Jia, L. Tang, Y.H. Lin, X.X. Zeng, K.P. Ruan, M.K. Li, Y.Q. Guo, M.K. He, Y.S. Tang, J.W. Gu, J. Mater. Sci. Technol. 254 (2026) 126–134.

[13] Y.T. Wang, H. Jin, J.J. Shen, B.J. Wang, X.L. Feng, Z.P. Mao, Y.M. Zhang, X.F. Sui, J. Mater. Sci. Technol. 101 (2022) 146–154.

[14] X. Fan, Z. Liu, S. Wang, J. Gu, Susmat 3 (2023) 877–893.

[15] N. Wang, X. Li, W.J. Cao, X.H. Yang, X.Q. Zou, Y.T. Fang, X. Shen, Q. Li, N. Song, T.L. Xu, P. Ding. ACS Appl. Nano Mater. 8 (2025) 7347–7359.

[16] J. Li, Y. Wang, T.N. Yue, Y.N. Gao, Y.D. Shi, J.B. Shen, H. Wu, M. Wang, Compos. Sci. Technol. 206 (2021) 108681.

[17] D.W. Zhang, S.L. Ma, Y.W. Wu, W. Li, S.H. Ju, J. Chem. Phys. 162 (2025) 244707.

[18] Z.L. Luo, H.A. Yang, S. Wang, Y.Z. Tang, Y. He, B.Y. Cao, Surf. Interfaces 65 (2025) 106526.

[19] X.Y. Zhang, X.B. Dai, M.A. Habib, L.J. Gao, W.L. Chen, W.J. Wei, Z.Q. Tang, X.Y. Qi, X.J. Gong, L.X. Jiang, L.T. Yan, Nat. Commun. 15 (2024) 525.

[20] F. Torres-Herrador, J.B. Rico-Orero, B. Helber, T.E. Magin, A. Turchi, Aerosp. Sci. Technol 146 (2024) 108932

[21] C. Shen, Q. Sheng, H. Zhao, Mech. Mater. 186 (2023) 104804.

[22] W. Deng, L. Liu, X. Li, Y. Huang, M. Hu, Y. Zheng, Y. Yin, Y. Huan, S. Cui, Z. Sun, J. Jiang, X. Yang, D. Wang, Adv. Mater. 37 (2025) 2407763.

[23] F. Chen, Z. Guo, J. Wang, R. Ouyang, D. Ma, P. Gao, F. Pan, P. Ding, Comput. Mater. Sci. 230 (2023) 112479.

[24] L.B. Guo, Y.B. Liu, Z.K. Chen, H.G. Yang, D. Donadio, B.Y. Cao, npj Comput. Mater. 11 (2025).97

[25] Y. Zhang, T.L. Xu, L.L. He, W.B. Ma, X. Li, M.J. Li, G.R. Xu, W. Lv, P. Ding, ACS Appl, Mater, Interfaces, 17 (2025) 51220–51231

[26] H. Wang, S.L. Gao, B.T. Wang, Y.T. Ma, Z.J. Guo, K. Zhang, Y. Yang, X.Z. Yue, J. Hou, H.J. Huang, G.P. Xu, S.J. Li, A.H. Feng, C.Y. Teng, A.J. Huang, L.C. Zhang, D.L. Chen, J. Mater. Sci. Technol. 198 (2024) 111–136.

[27] M.X. Zhu, H.G. Song, Q.C. Yu, J.M. Chen, H.Y. Zhang, Int. J. Heat Mass Transf. 162 (2020) 120381.

[28] M. Shi, C.-P. Feng, J. Li, S.-Y. Guo, Compos. Sci. Technol. 223 (2022) 109414.

[29] C. He, L. Zeng, B. Xue, X. Zhang, L. Yu, L. Xie, Q. Zheng, Compos. Sci. Technol. 251 (2024) 110579.

[30] N.K. Barua, A. Golabek, A.O. Oliynyk, H. Kleinke, J. Mater. Chem. C 11 (2023) 11643–11652.

[31] X. Jiang, H. Sun, K. Choudhary, H. Zhuang, Q. Nian, npj Comput. Mater. 11 (2025) 319.

[32] C. Han, F. Yan, D. Yuan, K. Li, Y. Yang, J. Zhang, D. Wang, Front. Mech. Eng. 19 (2024)25

[33] F. Qayyum, M.A. Khan, D.-H. Kim, H. Ko, G.-A. Ryu, Materials 16 (2023) 7322.

[34] X. Zhong, B. Gallagher, S. Liu, B. Kailkhura, A. Hiszpanski, T.Y.-J. Han, npj Comput. Mater. 8 (2022) 204.

[35] S.L. Ma, Y.C. Rao, X. Huang, S.H. Ju, Mater. Today Phys. 45 (2024) 101457.

[36] N. Zhang, A.N. He, G. Zhang, P. Cai, B.J. Zhang, Y.F. Ling, Y.Q. Dong, J.W. Li, Q.K. Man, B.G. Shen, J. Mater. Sci. Technol. 188 (2024) 73–83.

[37] J. Liu, Z. Zhang, X. Li, M. Zong, Y. Wang, S. Wang, P. Chen, Z. Wan, L. Liu, Y. Liang, W. Wang, S. Wang, X. Guo, E.G. Saldanha, K.M. Rosso, X. Zhang, Chem. Eng. J. 473 (2023) 145216.

[38] M.C. Bayir, E. Mensur, Materials 18 (2025) 2682.

[39] S.W. Wu, J. Yang, G.M. Cao, Int. J. Miner. Metall. Mater. 28 (2021) 1309–1320.

[40] H. Miao, Y. Gao, X. Biao, F. Xuan, IEEE Sens. J. 23 (2023) 25724–25731.

[41] C. Peng, S. Yang, P. Zhang, S. Hu, Cities 158 (2025) 105728.

[42] A. De Caigny, K. Coussement, K.W. De Bock, Eur. J. Oper. Res. 269 (2018) 760–772.

[43] H. Jiang, X. Hu, H. Jia, Soft Comput. 27 (2023) 13677–13688

[44] Z. Yin, J. Chen, Z. Qin, Y. Wang, Z. Wu, J. Alloy. Compd. 918 (2022) 165634.

[45] L. Chen, C. Xiao, Y. Tang, X. Zhang, K. Zheng, X. Tian, Mater. Res. Express 6 (2019) 075314.

[46] S. Wang, Z. Zhang, J. Mao, J. Lin, F. Xiao, S. Chen, Y. Liu, H. Qian, D. Yan, J. Build. Eng. 105 (2025) 112487.

[47] X. Huang, Y. Mo, W. Wu, M. Ye, C. Hu, Processes 12 (2024) 1913

[48] H. Zou, Y. Feng, X. Tang, X. Zhang, L. Qiu, Compos. Sci. Technol. 245 (2024) 110346.

[49] L. Lv, W. Dai, A. Li, C.-T. Lin, Polymers 10 (2018) 1201.

[50] M. Wang, Y. Qin, W. Gao, S. Liang, RSC Adv. 11 (2021) 37194–37204.