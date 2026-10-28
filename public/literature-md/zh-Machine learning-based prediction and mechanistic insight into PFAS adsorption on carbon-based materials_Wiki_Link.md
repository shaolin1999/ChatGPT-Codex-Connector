---
title: "zh-Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials Wiki全文"
source_markdown: "2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials.md"
cn_markdown: "2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/zh-Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials.md"
type: translated_fulltext_wiki
---
<!-- PaperMDLab-NAV:START -->
> [!info] 论文四向互链（PaperMDLab 自动维护）
> [[2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials|英文原文]] · [[2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/zh-Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials|中文译文]] · **中文全文双链（当前）** · [[4.SCI_AI_Summary/summary-zh-Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials|AI中文总结]]
<!-- PaperMDLab-NAV:END -->


论文

2025 年 12 月 8 日发表

依据 [[CC-BY 4.0]] 许可

欢迎核查更新

# 基于[[机器学习]]的[[碳基材料]][[吸附]] [[PFAS]] 的预测与机理洞察

引用本文：[[RSC Advances|RSC Adv.]], 2025, 15, 48450

[[Yanliang Lu]],<sup>a</sup> [[Fangfang Ding]],<sup>a</sup> [[Guchun Wang]],<sup>a</sup> [[Yabin Li]],<sup>a</sup> [[Zhitao Guo]],<sup>a</sup> [[Peiyao Pang]],<sup>a</sup> [[Baojun Wang]]\*<sup>a</sup> and [[Jue Liu]]\*<sup>b</sup>

[[碳基材料]]在[[环境修复]]中具有重要潜力，因为它们能够通过[[吸附]]有效去除[[PFAS|全氟和多氟烷基物质]]（[[全氟和多氟烷基物质|PFAS]]），从而影响其环境行为及相关风险。然而，由于碳基材料[[物理化学性质]]的复杂性、PFAS 的分子多样性——包括链长、官能团和氟化程度的变化——以及环境条件的差异，仅依靠实验方法仍难以完全阐明其吸附机理。本研究开发并优化了一种[[梯度提升决策树]]（GBDT）模型，以系统预测碳基材料对 PFAS 的吸附性能。该 GBDT 模型在测试数据集上表现出优异的预测精度，$R ^ { 2 }$ 达到 0.96，[[均方根误差]]（RMSE）为 0.02。利用 [[Shapley加性解释|Shapley 加性解释]]（[[SHAP]]）和[[部分依赖图]]进行的模型解释表明，环境条件对吸附的贡献最大，其次是碳基材料的物理化学特性和 PFAS 的分子特征。具体而言，[[溶液pH|溶液 pH]]、PFAS 分子中的[[氟原子数]]、[[温度]]以及碳基材料的[[孔结构]]被确定为最具影响力的因素，[[静电相互作用]]和[[疏水-亲水特性|疏水—亲水特性]]可能是主要机理。本研究提供了一种将[[机器学习]]与环境化学相结合的新视角，以加深对 PFAS—碳相互作用的理解，为[[环境风险评估]]和功能材料的理性设计提供有价值的见解。

收稿日期：2025 年 10 月 15 日 接受日期：2025 年 11 月 24 日

DOI：10.1039/d5ra07898a

rsc.li/rsc-advances

## 1. 引言

[[PFAS|全氟和多氟烷基物质]]（[[全氟和多氟烷基物质|PFAS]]）是一类[[新兴污染物]]，其潜在危害尚未得到足够重视。由于其独特的化学性质，PFAS 一旦释放到环境中几乎无法降解，因此被[[美国化学学会]]称为“永久化学品”。目前，[[全氟辛酸]]（PFOA）和[[全氟辛烷磺酸]]（PFOS）被认定为新兴污染物。研究表明，在中国 66 个城市中，超过 40% 的饮用水源中 PFOA 和 PFOS 浓度超过了[[加利福尼亚州]]的通知水平，即 PFOA 为 5.1 ng L−<sup>1</sup>，PFOS 为 6.5 ng L−<sup>1</sup>，可能影响约 1.926 亿居民。<sup>1</sup> 碳–氟（C–F）键是自然界中最强的单键之一，其极高的稳定性使 PFAS 对化学和生物降解具有高度抗性。<sup>2</sup> 这种分子稳定性赋予 PFAS 优异的热稳定性、化学惰性和长期环境持久性，这也是其广泛工业应用的基础。这些应用包括[[表面涂层]]、防护材料、[[食品包装]]、[[灭火泡沫]]、[[金属电镀]]和[[电子制造]]。PFAS 还广泛用于[[纺织行业]]，用于生产拒水、防污和拒油织物及服装，例如户外服装、防水地毯、沙发和窗帘。<sup>3</sup> 由于其在日常生活中的普遍使用，<sup>4</sup> PFAS 可以通过多种途径进入生态系统并发生环境扩散。其对人类健康和生态系统的风险主要源于其持久性、[[生物累积]]潜力和固有毒性。<sup>5</sup>

当前应对 [[PFAS]] 污染的策略包括[[高级氧化]]、[[膜分离]]、[[离子交换]]和[[吸附]]。<sup>6</sup> 其中，吸附因其能耗低、可进行原位修复且不产生有害副产物，在实际应用中受到特别关注。[[碳基材料]]，如[[活性炭]]、[[石墨烯]]、[[生物炭]]和[[碳纳米管]]，由于其丰富的多[[孔结构]]和可调的表明官能团，表现出优异的 [[全氟和多氟烷基物质|PFAS]] 去除性能，成为 PFAS 吸附研究的核心焦点。<sup>7</sup> 鉴于吸附行为和机制可能因碳材料类型、具体 PFAS 种类以及复杂环境条件的不同而显著变化，仅依靠实验研究进行系统考察往往耗时且耗费资源。因此，利用已有数据集实现对碳基材料上 PFAS 吸附性能的快速预测，已成为提高[[环境风险评估]]效率和指导吸附材料设计与优化的关键挑战。然而，传统方法在提供高精度预测方面仍然面临局限。

近年来，随着数据科学与人工智能的快速发展，[[机器学习]]（machine learning，ML）逐渐成为[[环境修复]]和功能材料研究中的一种有力工具。<sup>8</sup> 通过对实验数据和文献来源数据集进行深度挖掘，机器学习模型能够捕捉变量之间的潜在关系，建立[[吸附]]性能的预测框架，并识别对吸附过程具有关键影响的因素。<sup>9</sup> 与传统统计方法相比，机器学习具有更高的预测精度，并能够揭示特征之间复杂的非线性效应和交互作用，从而为吸附机制提供新的方法学见解。尽管已有研究尝试利用机器学习预测污染物吸附，但专门针对[[碳基材料]]与[[PFAS]]之间相互作用的系统性研究仍然相对有限。近期基于机器学习的吸附研究主要集中于氨氮、染料和亚甲基蓝等污染物，对[[全氟和多氟烷基物质|PFAS]]的研究在很大程度上仍处于空白状态。<sup>56–59</sup> 文献计量分析也指出，目前仍缺乏面向PFAS的机器学习驱动吸附预测框架。<sup>60</sup> 然而，聚焦于碳基材料上PFAS吸附的机器学习研究仍然十分稀少。因此，需要一个专门且具有比较性的机器学习评估框架来弥补这一空白，并深化对PFAS–材料相互作用的理解。

围绕[[碳基材料]]对[[PFAS]]的[[吸附]]行为开展了系统研究，以突出其在[[环境修复]]中的潜力。<sup>10–14</sup> 为全面理解影响吸附过程的因素，从三个角度构建了变量体系：环境条件（[[溶液pH]]、[[反应时间]]、[[初始浓度比]]）、碳基材料的[[物理化学性质]]（[[BET|比表面积]]、[[孔体积]]）以及[[全氟和多氟烷基物质|PFAS]]的固有性质（[[碳链长度]]、[[氟原子数]]、[[辛醇-水分配系数|辛醇–水分配系数]]的对数，log $K _ { \mathrm { o w } } )$ 。基于这些变量，采用多种建模方法预测PFAS在碳基材料上的吸附性能。通过评估13种[[机器学习]]模型的性能——包括传统回归、[[集成学习]]和[[深度学习]]——本研究结合[[特征重要性]]分析，识别了不同因素对吸附行为的相对贡献。对模型预测结果的比较分析进一步阐明了它们在碳基材料–PFAS吸附体系中的适用性和相对优势。

## 2. 方法

图1展示了整体研究框架，涵盖数据获取、可视化与预处理、模型构建与验证，以及基于GBDT方法的结果解释。该框架旨在预测碳基材料对PFAS的吸附性能，并识别决定吸附行为的关键因素。这些因素涉及碳基材料的结构和物理化学性质、PFAS的分子描述符以及外部环境条件的影响。

## 2.1 [[碳基材料]][[吸附]][[PFAS]]的数据收集与预处理

高质量输入数据对[[模型训练]]至关重要，因为无效或异常数据可能导致[[过拟合]]，进而造成预测不准确。因此，本研究严格开展了数据收集与筛选，以确保模型的稳健性。利用多组关键词组合，从 [[Web of Science]] 数据库检索了近二十年的文献。本研究使用的主要关键词包括[[吸附剂]]（例如[[生物炭]]、[[活性炭]]）、[[吸附质]]（即[[PFAS|全氟和多氟烷基物质]]，[[全氟和多氟烷基物质|PFAS]]）以及相互作用过程（即[[吸附]]）。为避免不相关或不一致信息的负面影响，排除了数据相关性低、结果异常或缺乏明确[[吸附容量]]值的研究。

最终筛选出 37 篇文献，共提取 605 条有效数据（所纳入参考文献的详细信息见 Text S5）。本研究使用的所有[[吸附]]数据均来源于原始文献报道的实验结果。在某些情况下，[[吸附容量]]数据以表格形式直接提供；而在另一些情况下，数据以[[吸附动力学]]或[[等温线]]的图形形式呈现。对于后者，使用 [[Origin 2021 Pro]] 的 Screen Reader Tool 对吸附数据进行数字化处理。

经预处理后，提取了 10 个关键参数用于后续[[模型训练]]：初始[[吸附剂]]浓度（mg $\mathbf { L } ^ { - 1 } )$、[[PFAS]] 浓度 $( \mathrm { m g } \mathrm { L } ^ { - 1 } )$、[[碳基材料]][[BET|比表面积]] $( \mathbf { m } ^ { 2 } \textrm { g } ^ { - 1 } )$、碳材料[[孔体积|总孔容]]、[[溶液pH|溶液 pH]]、[[全氟和多氟烷基物质|PFAS]] [[碳链长度]]（C）、[[氟原子数]]（F）、[[分子量]]、反应[[温度]]（°C）以及[[吸附容量]] $( \mathrm { m g } \mathrm { g } ^ { - 1 } )$

## 2.2 数据结构探索与预处理策略

在收集原始数据后，对数据集进行了初步可视化和分布分析。手动去除明显离群值（极大或极小的数据点），以提高数据质量并减少噪声干扰。为确保[[模型训练]]的正常进行，使用 [[Scikit-learn|scikit-learn]] 中的 [[SimpleImputer]] 模块对缺失值进行填补。<sup>15</sup> 我们还评估了采用 [[IterativeImputer]] 的多元填补方法，但基于 SimpleImputer 的方案表现出略优的泛化性能，因此在最终模型中予以保留。本研究采用逐列均值填补，即将每个特征中的缺失值替换为相应列中非缺失值的均值。其次，为应对[[碳链长度]]与氟含量之间可能存在的[[多重共线性]]，采用[[主成分分析]]（PCA）进行降维。<sup>16,17</sup> 提取第一主成分以替代原始的 C 和 F 描述符，从而在保留关键信息的同时最大限度地减少冗余。随后，对所有特征变量进行 [[z分数标准化|z 分数标准化]]（均值 = 0，标准差 = 1），以消除量纲差异并增强各特征之间的可比性。<sup>18</sup> 在建模阶段，预处理后的数据集被随机划分为两个子集，其中 20% 保留作为测试数据集，其余 80% 作为[[训练数据]]集，同时固定随机种子以确保结果的可重复性。

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/199407710dd4eda21c6817a57f0cd6158ca94339c78c0159e906f476a389a0be.jpg>)  
图 1 用于评估 PFAS 在碳基材料上吸附的模型工作流程。

为评估每个输入特征与目标变量（[[吸附容量]]）之间的线性关系，引入[[皮尔逊相关系数]]（Pearson Correlation Coefficient, [[Pearson 相关系数|PCC]]）作为初步统计工具，这与[[吸附]]和材料研究中的常见做法一致。<sup>19,20</sup> PCC 是最常用的相关性度量之一，能够量化两个连续变量之间线性关系的强度和方向。通过计算每个特征与目标之间的 PCC，可以在建模前识别主导变量、潜在的[[多重共线性]]以及异常特征，为后续特征选择和模型构建提供依据。冗余输入变量可以被剔除，以降低计算成本、减轻[[过拟合]]，并提高模型兼容性和预测精度。PCC 的数学定义如下，见公式 (1)：<sup>21</sup>

$$
P _ {x y} = \frac {\sum_ {i = 1} ^ {n} (x _ {i} - \bar {x}) (y _ {i} - \bar {y})}{\sqrt {\sum_ {i = 1} ^ {n} (x _ {i} - \bar {x}) ^ {2}} \sqrt {\sum_ {i = 1} ^ {n} (y _ {i} - \bar {y}) ^ {2}}}\tag{1}
$$

在 [[Pearson 相关系数|PCC]] 公式中，$P _ { x y }$ 对应[[皮尔逊相关系数]]，而 $x _ { i }$ 和 y 表示第 i 个数据点上两个输入特征的真实值。n 表示数据点的总数，x 和 y 分别是两个输入特征 X 和 Y 的均值。$P _ { x y }$ 的取值范围为 1 到 1，其中 0 表示无相关性，1 或 1 分别表示强正相关或强负相关。最终，获得了一个归一化输入特征的八维矩阵以及相应的归一化输出向量，用于[[模型训练]]、测试和验证。

为评估输入变量与目标变量之间的[[非线性关联]]，采用了[[斯皮尔曼等级相关系数]]和[[肯德尔等级相关系数]]，其数学表达式见公式 (2)：<sup>22</sup>

$$
\rho = 1 - 6 \sum_ {i = 1} ^ {n} d _ {1} ^ {2} / n (n ^ {2} - 1)\tag{2}
$$

此处，$d _ { i }$ 表示第 i 个观测中两个变量之间的秩差，n 表示样本总数。

$$
\tau = C - D \sqrt {(C + D + T _ {x}) (C + D + T _ {y})}\tag{3}
$$

在此背景下，C 统计所有一致对，其中 $( x _ { i } - x _ { j } ) ( y _ { i } -$ $y _ { j } ) > 0 ,$，而 D 统计不一致对，其中 $( x _ { i } - x _ { j } ) ( y _ { i } - y _ { j } ) < 0$ $T _ { x }$ 和 $T _ { y }$ 分别表示 x 和 $y ,$ 中的结数。

## 2.3 模型开发与评估

在本研究中，采用了多种[[机器学习]]算法来开发预测模型并进行比较性能分析。所选算法包括[[梯度提升决策树]]（GBDT）、[[极端梯度提升]]（[[XGBoost]]）、[[多元线性回归]]（MLR）、[[贝叶斯岭回归]]（BRR）、[[随机森林]]（RF）、[[人工神经网络]]（ANN）、[[支持向量回归]]（SVR）、[[弹性网络回归]]（[[ElasticNet]]）、[[k最近邻|k 最近邻]]（[[K 近邻|KNN]]）、[[决策树]]（DT）、[[Lasso回归|Lasso 回归]]、[[卷积神经网络]]（CNN）和 [[Transformer模型|Transformer 模型]]。这些算法被用于预测目标输出变量，$i . e . ,$ 即 [[PFAS|PFASs]] 在[[碳基材料]]上的[[吸附容量]]。为确保最佳预测性能，采用[[网格搜索]]方法进行了[[超参数优化]]（文本 S1）。所有模型计算均在 [[PyCharm|PyCharm 2020.1.5]]（[[Python|Python 3.9]]）中完成，并利用了适当的机器学习库。

在模型评估中，采用[[均方根误差]]（RMSE）和[[决定系数]] $\left( R ^ { 2 } \right)$ 作为主要性能指标。RMSE 反映预测值与实际值之间的平均偏差，是评估回归误差的关键指标之一。<sup>23</sup> 相比之下，$R ^ { 2 }$ 量化模型能够在多大程度上解释目标变量的方差。理想情况下，较小的 RMSE 与接近 1 的 $R ^ { 2 }$ 值相结合，表明预测精度更高。这两个指标的数学表达式如下：

$$
R ^ {2} = 1 - \sum_ {i = 1} ^ {n} (y _ {i} - \hat {y}) ^ {2} / \sum_ {i = 1} ^ {n} (y _ {i} - \bar {y}) ^ {2}\tag{4}
$$

$$
\mathrm{RMSE} = \sqrt {1 / n \times \sum_ {i = 1} ^ {n} \left(y _ {i} - \hat {y}\right) ^ {2}}\tag{5}
$$

在上述公式中，$y _ { i }$ 表示观测（真实）值，$\hat { y }$ 表示预测值，y 是观测样本的均值，n 表示数据集中的数据点总数。

## 2.4 [[梯度提升决策树|GBDT]] 模型解释

[[梯度提升决策树]]（GBDT）模型的[[特征重要性]]通过 [[Scikit-learn]] 库中的模型特征重要性属性进行量化。该方法根据每个特征在决策过程中对[[节点纯度]]（例如[[基尼指数]]或熵）的平均贡献来评估其相对重要性，从而为模型的决策机制提供初步解释。<sup>24</sup> 值得注意的是，GBDT 模型对噪声特征和超参数设置相对敏感，尤其是在[[学习率]]（learning\_rate）较大、[[提升迭代次数]]（n\_estimators）较多或[[树深度]]（max\_depth）不受限制时。<sup>25</sup> 为确保稳定性并避免[[过拟合]]，模型超参数在限定范围内进行了调优（learning\_rate：0.05–0.40；n\_estimators：30–300；max\_depth：2–15），并在固定的 80/20 训练–测试划分上，使用 $R ^ { 2 }$ 和 [[均方根误差|RMSE]] 作为性能指标进行模型评估。

引入 [[SHAP]] 方法是为了增强模型可解释性，同时提供一个统一框架来量化每个输入特征在单个预测中的边际贡献。<sup>26</sup> 该方法为 [[梯度提升决策树|GBDT]] 等复杂[[机器学习]]模型带来了透明度，从而有助于理解其决策机制。[[Shapley加性解释|SHAP]] 的理论基础详见补充信息文本 S2。

此外，为探索输入变量与目标输出之间潜在的非线性关系和交互效应，采用了[[部分依赖图]]（PDP），这与近期[[吸附]]研究中的做法一致。<sup>27,28</sup> 该方法同样基于 [[Shapley值|Shapley 值]]理论，揭示模型预测对单个特征变化的响应趋势。[[SHAP]] 值和部分依赖图的计算与可视化通过 [[Shapley加性解释|SHAP]] 模块结合 [[Scikit-learn]] 工具包完成，详细的编程步骤和参数设置见补充信息文本 S3。

## 3. 结果与讨论

## 3.1 描述性统计

基于[[碳基材料|碳材料]]的[[物理化学性质]]、[[PFAS]] 的化学特性以及环境条件，选择了十个特征作为输入变量（图 2）。其中，考虑了[[吸附剂]]的[[BET|比表面积]]和[[孔体积|总孔容]]。在数据集中，[[比表面积]]主要分布在 33.6 至 $2 3 4 1 ~ \mathrm { m } ^ { 2 } \mathrm { g } ^ { - 1 }$ 之间（图 2a）。一般来说，比表面积的大小决定了[[吸附位点]]的数量，较大的比表面积对应着更好的[[吸附]]性能。碳材料的总孔容主要集中在 0.07–3.79 cm<sup>3</sup> g−<sup>1</sup> 范围内（图 2b）。孔容决定了材料内部可用于容纳分子的空间。较大的总孔容能够为 [[全氟和多氟烷基物质|PFAS]] 分子进入并停留在材料内部提供更多空间，从而提高[[吸附容量]]。<sup>29</sup>

数据集纳入了 [[PFAS]] 的若干分子描述符，包括 log $K _ { \mathrm { o w } } ,$、[[碳链长度]]、[[氟原子数]]和[[分子量]]。数据集中的 log $K _ { \mathrm { o w } }$ 值范围为 1.43 至 5.61（图 2c），通常用于表征化合物的亲水性与[[疏水性]]之间的平衡。[[疏水-亲水特性|疏水–亲水相互作用]]在 [[全氟和多氟烷基物质|PFAS]] 的[[吸附]]行为中起着关键作用。<sup>30</sup> 由于具有氟碳链，PFAS 分子表现出强疏水性，这促进了其与[[碳基材料]]疏水区域之间的疏水–[[疏水相互作用]]；该机制被认为是驱动 PFAS 吸附的主要途径之一。如图 2d 所示，碳链长度范围为 4 至 10。与短链 PFAS 相比，长链 PFAS 具有更强的疏水性，通常更容易被碳材料吸附。<sup>31</sup> 此外，通过调节碳[[吸附剂]]的表面疏水性（例如通过疏水改性），可以优化其对不同类型 PFAS 的吸附性能。如图 2e 所示，PFAS 中[[氟原子]]的数量范围为 7 至 21，不同氟原子数的 PFAS 分子表现出不同的疏水–亲水特性。<sup>32</sup>

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/2fa6edd7b34dbf145edd8c20d48eeb561fa20b21c3db54e4e514dd3d9955de1c.jpg>)

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/121a1942865d595065eecdfeb0b47f2bf2f14dbf3722625f48e99cf6504fe320.jpg>)

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/5b0510bbcb205e89575cd146dcdd4f957d4676354fce3481d244022d4c9db968.jpg>)

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/5efcd0e8ca3f4b8afc50e9bd10d48665f94716940602e1304b588be88386b2e9.jpg>)

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/c4b65de8480efe5660578b5ff1ef094fa2388368f82dd12fda2fd91f9179cb75.jpg>)

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/b569817050c5db526198392b1a4b160b72fc0e800fac7876da83f6065939230a.jpg>)

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/181b1e3ce4ee245270977772529976cffadb5dab7d3d24d9ddd96b5a998ba351.jpg>)

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/24736996e1aafd70310dc10bce7909cec3cce27dff4d543e2e7b42fca3847ebf.jpg>)

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/19a150f630b7373f328bfa656668198fc701c044dd98330dbb1125c3267933fc.jpg>)

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/bc85e0124b4bb735122d0aebc2bb1bd32f6eb7933681adf59eab1172ebba5b9e.jpg>)  
图 2 各特征的箱线图及数据分布。各缩写特征及其单位如下：（a）比表面积 BET $( \mathsf { m } ^ { 2 } \mathsf { g } ^ { - 1 }$ ）；（b）总孔容 ${ \mathsf { T P V } } ( { \mathsf { c m } } ^ { 3 } { \mathsf { g } } ^ { - 1 } )$ ；（c）log $K _ { \mathrm { o w } } ;$ （d）碳链长度；（e）氟原子数；（f）吸附剂与 PFAS 的初始浓度比；（g）反应时间（h）；（h）温度（°C）；（i）溶液 pH；（j）吸附容量 q（mg g−<sup>1</sup>）。

在[[吸附]]实验中，考虑了四个[[环境因素]]：碳与[[PFAS]]的初始溶液浓度比、接触[[时间]]、[[温度]]和[[溶液pH]]。浓度比 $( C _ { 1 } / C _ { 2 } ,$ 均以 mg −<sup>1</sup> 表示）是一个无量纲参数，表示碳[[吸附剂]]（C ）相对于[[全氟和多氟烷基物质|PFAS]]溶质（C ）的相对浓度。如图2f所示，该比例通过决定每个PFAS分子可用的[[吸附位点]]的相对数量来影响吸附效率。在数据集中，接触时间范围为0.25至238 h（图2g）；通常，[[吸附容量]]随时间的增加而增加，直至达到平衡。温度在20至40 °C之间变化（图2h）。由于[[全氟辛烷磺酸]]（PFOS）的吸附是[[吸热过程]]，<sup>55</sup> 温度对[[吸附动力学]]和总体吸附容量均产生正向影响，表明能量输入有利于吸附过程。在吸附实验中，[[pH]]范围的变化如图2i所示，并且发现pH对吸附效率有显著影响。通常，pH通过调节PFAS分子的[[疏水-亲水特性|亲水性–疏水性平衡]]以及改变PFAS与碳表面之间的[[静电相互作用]]来影响吸附。

从[[机器学习]]和化学的角度来看，[[pH]]可被视为一个影响[[PFAS]]–[[吸附剂]]相互作用的关键输入特征，从而影响[[吸附]]性能的预测建模。

由于[[碳链长度]]（C）与[[氟原子数]]（F）之间存在严重的[[多重共线性|共线性]]，直接将它们作为独立特征输入可能导致多重共线性，影响模型稳定性和可解释性。为解决这一问题，采用[[主成分分析]]（PCA）来降低这些相关特征的维度。PCA通过线性组合将原始相关变量转换为一组新的正交变量，尽可能保留原始数据中的方差。利用该方法，将C和F整合为单一复合变量，命名为[[CF-PCA]]，该变量与原始特征保持高度相关性，并有效代表[[PFAS]]链长和氟含量的综合特征。在随后的模型开发和分析中，使用该复合变量代替原始C和F不仅缓解了多重共线性，而且对预测性能的影响可以忽略不计。有关PCA的理论基础和实现，请参见SI Text S4。

## 3.2 [[皮尔逊相关系数|Pearson相关系数]]（[[Pearson 相关系数|PCC]]）

[[皮尔逊相关系数|Pearson相关系数]]（[[Pearson 相关系数|PCC]]）是多元统计分析中广泛使用的线性相关性度量，用于定量评估线性依赖程度

在近似正态分布条件下评估连续变量间的线性相关性。<sup>34</sup> 本研究首先采用 [[Pearson 相关系数|PCC]] 分析考察所有输入特征之间的线性关系。结果表明，[[碳基材料|碳材料]]的物理性质（如[[BET|比表面积]] [[比表面积|BET]] 和[[总孔体积]] TPV）与 [[PFAS]] 分子的[[分子量]]（MW）、[[辛醇-水分配系数]]（log $K _ { \mathrm { o w } } )$）及 [[CF-PCA]] 之间存在较强的正相关关系，[[皮尔逊相关系数|PCC]] 值分别为 0.8、0.84 和 0.92（图 S1）。这种高相关性表明 BET 与 TPV 之间具有紧密的相互联系，同时也反映出 MW、log $K _ { \mathrm { o w } } ,$ 与 CF-[[主成分分析|PCA]] 之间因 [[全氟和多氟烷基物质|PFAS]] 分子的固有属性而产生的内在关联。分析显示这些变量之间存在一定程度的[[多重共线性|共线性]]和[[信息冗余]]。为减少冗余特征对模型稳定性和可解释性的影响，在后续建模中排除了碳材料的总[[孔体积]]和 PFAS 的分子量，从而缓解多重共线性并提升模型的[[泛化能力]]。需要指出的是，PCC 本身并未直接用于识别异常特征，而是作为初步的线性筛选工具。PCC 适用于连续且近似线性相关的变量。对于 PCC 值偏高或偏低所标记的特征，进一步采用 [[Spearman 秩相关系数|Spearman]] 和 [[Kendall 秩相关系数|Kendall]] 秩相关分析来检测[[非线性关联]]，并通过[[方差膨胀因子]]（VIF）分析评估多重共线性。在删除或变换之前，还将明显异常与原始数据集及领域知识进行交叉核对，以确保[[特征筛选]]在统计和物理解释上均具有合理性。<sup>63</sup>

为进一步考察特征变量之间是否存在潜在的[[非线性关联]]，本研究采用 [[Spearman 秩相关系数]]和 [[Kendall 秩相关系数]]作为评估工具。这两种[[非参数统计方法]]被广泛应用于评估变量间的非线性依赖关系。<sup>35</sup> 分析结果表明，除 [[CF-PCA]] 与 log $K _ { \mathrm { o w } } ,$ 之间的关系外，所有保留特征的相关系数均落在 0.5 至 0.5 范围内（图 S2 和 S3），说明未发现显著的非线性耦合效应证据。

在 [[Pearson 相关系数]]（[[皮尔逊相关系数|PCC]]）分析中，[[环境因素]]（如[[碳与 PFAS 的初始浓度比]]、[[pH]]、[[时间]]和[[温度]]）与 [[PFAS]] 的固有[[物理化学性质]]表现出良好的独立性，表明它们适合作为模型预测的重要独立贡献因素。其中，[[CF-PCA]] 与 log $K _ { \mathrm { o w } }$ 之间的 PCC 为 0.67（图 3）。此外，如图 S2 和 S3 所示，CF-[[主成分分析|PCA]] 与 log $K _ { \mathrm { o w } }$ 之间的 [[Spearman 秩相关系数|Spearman]] 和 [[Kendall 秩相关系数]]分别为 0.86 和 0.69。尽管所有相关性指标均超过 0.5，表明存在一定程度的关联，但进一步使用[[方差膨胀因子]]（VIF）诊断发现其值低于 2（图 S4），远低于通常用于提示潜在问题性[[多重共线性]]的保守阈值 $( \mathrm { V I F } \ = \ 5 ) . ^ { 6 1 , 6 2 }$。因此，CF-PCA 与 log $K _ { \mathrm { o w } }$ 之间的相关性不足以对模型性能产生不利影响。保留 log $K _ { \mathrm { o w } }$ 特征是合适的，因为它提供了有价值的分子[[疏水性]]信息，同时不会引入多重共线性问题。

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/ec289b29ac706f6ebbe90d40957e1e2b841e05272994682ed2d4ccae3975cfee.jpg>)  
图 3 所选特征与吸附容量之间的 Pearson 相关矩阵。颜色标尺固定在 −1 与 1 之间，颜色强度表示线性相关的强度和方向（−1：强负相关，+1：强正相关，0：弱相关或无相关）。每个单元格中的数字表示 Pearson 相关系数（r），星号表示基于相应 p 值的统计显著性水平 $( ^ { * } p < 0 . 0 5 , ^ { * * } p < 0 . 0 1 , ^ { * * * } p < 0 . 0 0 1 )$

表 1 不同数据集 ML 模型性能的比较评价

<table><tr><td>模型</td><td>训练集  $R^2$ </td><td>测试集  $R^2$ </td><td>训练集 RMSE</td><td>测试集 RMSE</td><td>备注</td></tr><tr><td>MLR</td><td>0.38</td><td>0.30</td><td>0.31</td><td>0.35</td><td>低精度</td></tr><tr><td>BRR</td><td>0.34</td><td>0.30</td><td>0.33</td><td>0.36</td><td>低精度</td></tr><tr><td>ElasticNet</td><td>0.35</td><td>0.28</td><td>0.33</td><td>0.37</td><td>低精度</td></tr><tr><td>Lasso</td><td>0.39</td><td>0.27</td><td>0.31</td><td>0.37</td><td>低精度</td></tr><tr><td>SVR</td><td>0.85</td><td>0.33</td><td>0.08</td><td>0.32</td><td>过拟合</td></tr><tr><td>KNN</td><td>0.75</td><td>0.52</td><td>0.13</td><td>0.19</td><td>中等</td></tr><tr><td>XGBoost</td><td>0.96</td><td>0.96</td><td>0.02</td><td>0.02</td><td>高精度</td></tr><tr><td>GBDT</td><td>0.99</td><td>0.96</td><td>0.01</td><td>0.02</td><td>综合最优</td></tr><tr><td>DT</td><td>0.98</td><td>0.84</td><td>0.01</td><td>0.07</td><td>轻微过拟合</td></tr><tr><td>RF</td><td>0.98</td><td>0.87</td><td>0.01</td><td>0.06</td><td>轻微过拟合</td></tr><tr><td>ANN</td><td>0.95</td><td>0.87</td><td>0.03</td><td>0.06</td><td>中等</td></tr><tr><td>CNN</td><td>0.81</td><td>0.68</td><td>0.10</td><td>0.16</td><td>欠拟合</td></tr><tr><td>Transformer</td><td>0.78</td><td>0.6</td><td>0.12</td><td>0.11</td><td>欠拟合</td></tr></table>

对于其余特征，[[Pearson 相关系数|PCC]] 值均在 0.5 至 0.5 范围内（图 3），表明不存在显著的线性相关。为进一步确保[[多重共线性]]不会干扰[[模型训练]]与可解释性，系统性地将 [[方差膨胀因子|VIF]] 用作诊断工具。如图 $^ { 6 , }$ 所示，所有输入变量的 VIF 值介于 1.18 至 1.89 之间，证实特征间相关性较弱。因此，在[[机器学习]]框架中，每个特征均可被解释为对 [[PFAS]] [[吸附]]预测作出独立贡献，而不会损害模型性能或可解释性。

## 3.3 模型开发与评估

本研究基于优化后的训练流程，系统比较了多种回归和[[机器学习]]模型，以预测 [[PFAS]] 在[[碳基材料]]上的[[吸附]]行为。所涉模型包括传统回归方法，如 [[多元线性回归|MLR]]、[[贝叶斯岭回归|BRR]]、[[ElasticNet]] 和 [[Lasso]]，以及广泛使用的机器学习算法，包括 [[支持向量回归|SVR]]、[[人工神经网络|ANN]]、[[K 近邻|KNN]]、[[XGBoost]]、[[梯度提升决策树|GBDT]]、[[决策树|DT]] 和 [[随机森林|RF]]。此外，还应用了[[深度学习]]模型，包括 [[卷积神经网络|CNN]] 和 [[Transformer]] 架构。模型性能采用[[均方根误差]]（RMSE）和[[决定系数]] $\scriptstyle \left( R ^ { 2 } \right)$ 进行评估（见表 1 和图 4）。较低的 RMSE 值和更接近 1 的 $R ^ { 2 }$ 值表明模型[[拟合]]更优、[[预测准确性]]更高。<sup>36</sup>

实验结果表明，传统线性回归模型在预测 [[PFAS]] [[吸附]]方面普遍表现不佳。例如，[[多元线性回归|MLR]] 模型在[[测试集]]上仅获得 $R ^ { 2 } =$ 0.30 和 $\mathbf { R M S E } = 0 . 3 5$，表明其捕捉输入特征与响应变量之间复杂线性和非线性交互作用的能力有限。尽管 [[贝叶斯岭回归|BRR]] 在理论上适用于小样本建模，但其在测试集上的表现同样不理想，为 $R ^ { 2 } = 0 . 3 0 \mathrm { a n d } \mathrm { R M S E } = 0 . 3 6 ,$，这可能是由于先验设定的局限性。[[ElasticNet]] 模型原则上可在变量选择与[[多重共线性]]处理之间取得平衡，但当强特征与弱特征共存时，其难以兼顾稀疏性与稳定性，导致测试集 $R ^ { 2 } = 0 . 2 8$ 和 $\mathbf { R M S E } = 0 . 3 7 $。类似地，[[Lasso]] 模型的测试性能也不令人满意，为 $\left( R ^ { 2 } = 0 . 2 7 , { \mathrm { R M S E } } = 0 . 3 7 \right)$，这可能受限于其固有的线性回归框架，该框架限制了其充分捕捉输入变量间潜在非线性关系的能力。

不同类型的[[机器学习]]（ML）模型在预测性能上表现出显著差异。在所测试的模型中，[[支持向量回归|SVR]] 模型在本研究中表现欠佳。其在[[训练集]]和[[测试集]]上的 $R ^ { 2 }$ 值分别为 0.85 和 0.33，表明虽然该模型在训练集上表现良好，但在测试集上的[[预测准确性]]显著下降 $\left( R ^ { 2 } = 0 . 3 3 \right)$）。此外，在测试阶段，许多数据点落在 [[95% 置信区间]]之外，表明 SVR 模型的[[泛化能力]]较差。这种性能下降通常归因于[[过拟合]]，而[[训练数据]]集规模相对较小进一步限制了该模型。SVR 的局限性可能与小规模数据集上[[核函数]]选择和[[超参数调优]]的困难有关，这阻碍了其有效捕捉复杂数据中的非线性结构。<sup>37</sup>

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/cc1ef7128b02b2ce5db127858f6144f2f96038eebe2776e6446ced327dec7948.jpg>)  
图 4 不同模型在测试集上的性能评估。

在本研究中，[[K 近邻|KNN]] 算法表现出中等的预测性能。[[k最近邻|KNN]] 模型在[[训练集]]和[[测试集]]上的 $R ^ { 2 }$ 值分别为 0.75 和 0.53，表明其对[[训练数据]]具有良好的[[拟合]]，但在测试集上的预测精度明显下降。这一性能下降主要归因于 KNN 对样本局部分布的强烈依赖：训练集中数据密度较高的区域能够实现精确拟合，而位于稀疏区域的[[测试样本]]则更容易产生较大预测误差。<sup>38</sup> 此外，这种行为也可能源于[[数据分布]]不均衡以及模型对未见样本的[[泛化能力]]有限。相比之下，[[随机森林|RF]] 模型在训练集和测试集上的 $R ^ { 2 }$ 值分别为 0.98 和 0.87，反映了其对训练数据强大的拟合能力。然而，测试集上相对较低的性能表明，该模型的泛化能力可能受到数据分布变化、潜在[[过拟合]]以及对噪声敏感性的制约，说明随机森林模型的预测稳健性仍面临一定局限。<sup>39</sup>

[[人工神经网络]]（ANN）模型在[[训练集]]和[[测试集]]上的 $R ^ { 2 }$ 值分别为 0.95 和 0.87。尽管 ANN 具备一定的非线性建模能力，但其性能在很大程度上依赖于参数优化和样本量。因此，在中小规模数据集下，其学习能力受到限制，使模型无法充分发挥其潜力。相比之下，[[决策树|DT]] 模型在测试集上取得了 0.84 的 $R ^ { 2 }$，显示出一定的预测能力。然而，由于其对数据波动的高度敏感性，DT 容易[[过拟合]]训练集的局部特征，从而限制了其[[泛化能力]]和可重复性。<sup>40</sup>

值得注意的是，[[集成学习]]模型 [[XGBoost]] 和 [[梯度提升决策树|GBDT]] 在所有[[机器学习]]算法中表现最佳。两个模型在[[测试集]]上的 $R ^ { 2 }$ 均高达 0.96，[[均方根误差|RMSE]] 仅为 0.02。此外，绝大多数预测值落在 [[95% 置信区间]]内（图 5）。[[极端梯度提升|XGBoost]] 利用[[梯度提升框架]]并结合[[正则化策略]]实现高精度预测；然而，其模型结构复杂，[[超参数调优]]繁琐，且需要大量计算资源。相比之下，GBDT 模型在保持优异预测性能的同时，计算成本相对较低。

为评估 [[梯度提升决策树|GBDT]] 模型是否出现[[过拟合]]，对模型的关键超参数进行了系统调优并开展了[[敏感性分析]]。如图 8 所示，在不同超参数组合下，[[训练集]]和[[测试集]]的 $R ^ { 2 }$ 值仅出现轻微波动，且两者之间未观察到显著背离。这表明本研究构建的 GBDT 模型具有较强的[[泛化能力]]，且未出现明显过[[拟合]]。

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/7182aa1561c982704a65fc96b28692b393720460b94acd18891b6966b984a22f.jpg>)

本研究还探索了[[深度学习]]方法来预测[[碳基材料]]对 [[PFAS]] 的[[吸附]]；然而，其整体表现欠佳，[[测试集]] $R ^ { 2 }$ 值分别为 [[卷积神经网络|CNN]] 的 0.68 和 [[Transformer]] 的 0.60。具体而言，CNN 依赖[[卷积层]]提取局部特征，更适合网格结构数据，这限制了其在非网格输入上的有效性。相比之下，[[Transformer模型|Transformer 模型]]利用[[自注意力机制]]捕捉长程依赖关系，但其建模优势通常需要大规模数据集，因此在小到中等样本条件下性能受到制约。

(a)  
(c)  
(b)  
![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/b44b259f81031481f57fe32c59048b8d8abb9264adda40e811380a4224ac6840.jpg>)

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/12af1e94781141ac527512be75957904f93cddf72cf675d120923e3f789819bb.jpg>)

(d)  
![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/9b846cb59a4d92015f1ec9221fe6103eedb40b41f4cf7b49ca86bcc13a8669cd.jpg>)  
图 5 GBDT（a 和 b）与 XGBoost（c 和 d）预测碳基材料对 PFAS 吸附的结果。图（a）和（c）显示训练集结果，图（b）和（d）显示测试集结果。

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/6822f79d28bbd12017b6f334c44d825ecb115a8ff2c530a9b3044643dbb819f5.jpg>)

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/c424b1a8fddb59f48e5303f6e663b15d21bd4e9dc008cf6e02418218a4021607.jpg>)  
图 6 输入变量对 PFAS 碳吸附的特征重要性（a）和 SHAP 值（b）。右侧颜色条表示输入变量的值。

## 3.4 相关性分析

鉴于 [[梯度提升决策树|GBDT]] 模型在预测[[碳基材料]]对 [[PFAS]] [[吸附]]方面具有更优的预测性能，本研究进一步利用该模型量化吸附过程中各输入变量的相对重要性。分析旨在评估单个特征对整体吸附行为的贡献。结果表明，所有输入特征——包括碳材料的[[物理化学性质|理化性质]]、[[全氟和多氟烷基物质|PFAS]] 的分子属性以及环境相关因素——均对吸附产生不同程度的影响。其中，环境条件对吸附行为的驱动作用最为显著，其次是碳基材料的理化性质，而 PFAS 的化学特性对模型预测的贡献相对较小（图 6a）。

在[[吸附]]实验中，多种因素会影响[[吸附容量]]。下文分析本研究所考虑的每个因素对吸附性能的影响。在[[环境因素]]中，[[碳与 PFAS 的初始浓度比]]被确定为最重要的输入变量。[[SHAP]] 图（图 6b）显示，大多数数据点具有正的 [[Shapley加性解释|SHAP]] 值，表明对吸附有有利影响。如[[部分依赖图]]（图 7a）所示，碳对 [[PFAS]] 的吸附随碳与 [[全氟和多氟烷基物质|PFAS]] [[初始浓度比]]的增加而增加。然而，更高的碳与 PFAS 比并不一定带来更高的吸附效率，因为一旦该比例达到阈值，碳上对应于 PFAS 的[[吸附位点]]被完全占据，额外增加碳并不能增强吸附。随着[[时间]]推移，碳表面的大多数吸附位点被占据，从而限制了 PFAS 分子的吸附速率。<sup>41,42</sup> 根据[[吸附动力学]]研究，当 PFAS 浓度保持恒定时，增加碳浓度会提高吸附效率，直至达到饱和。

[[温度]]在[[碳基材料|碳材料]][[吸附]][[PFAS]]过程中起着重要作用。大多数实验在室温或略高于/略低于室温的条件下进行，因此所观测到的温度范围相对较窄。如[[部分依赖图]]（图7b）所示，在20–40 °C范围内，[[吸附容量]]随温度升高而增加。这表明温度对[[全氟和多氟烷基物质|PFAS]]的[[吸附动力学]]和吸附容量均具有正向影响，主要原因是PFAS的吸附过程为[[吸热过程]]。<sup>33</sup>在较高温度下，吸附容量的增强可能源于[[吸附质]]向碳[[吸附剂]]孔隙内部扩散的加快，<sup>43</sup>从而促进PFAS的摄取。因此，在适宜的温度范围内，升高温度可以促进碳材料对PFAS的吸附。<sup>44</sup>

[[时间]]因素在[[PFAS]][[吸附]]过程中对[[吸附容量]]具有关键作用。从[[部分依赖图]]（图7c）可以明显看出，在最初的0–45 h内，吸附容量逐渐趋于饱和。这一趋势可归因于吸附初期[[活性炭]]表面存在大量可用的[[吸附位点]]，[[全氟和多氟烷基物质|PFAS]]分子迅速占据表面以及[[大孔]]/[[中孔]]吸附位点，从而促进PFAS的摄取。<sup>41</sup>然而，随着吸附的进行，碳表面可及的吸附位点数量逐渐减少，导致吸附速率显著下降。最终，PFAS分子被缓慢吸附到碳表面，直至达到[[吸附平衡]]。值得注意的是，在部分依赖图（图7c）中，可以观察到超过45 h后吸附容量略有增加。超过45 h后吸附容量的逐渐增加归因于PFAS分子向[[微孔]]中的缓慢扩散，以及新吸附位点的逐步暴露或[[表面官能团]]的重排，从而引发二次摄取阶段。<sup>45</sup>

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/e0bdce259de67cd4f17d9a3790b9e5589ce4d23eb0081bd2cccf364928bdc40c.jpg>)

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/a8207e56544da70e40aa50675c2ccca845c00ed85f3327e2be25928a8d04bbf8.jpg>)

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/246b8e867789615ee1b03b13ae4020a394999a5058cabcfef606b59b8d7160f2.jpg>)

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/247dc7ac936f120259e21845f79f72e351bf272db92911db45ab9e0c26053153.jpg>)

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/e9f44d7ba56d9d95cc2dad1a2ac3f6ad973b672302c9879f3fe9763c1fc20621.jpg>)

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/2bc0bdc555c244a80a2f7d9162d9729a8ebb924fa3876476c91db5c8ae38366b.jpg>)

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/a5520aab99638bc2d1b70fe2a1fda57bd85ff7953231cc513757defdc7842195.jpg>)

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/e15e5be9eee527c0c939e2ccd718ef0fe0a8926c47bd7f930c743e64d9c24a4d.jpg>)

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/4e3072976bbd5b4fe7e488cfc8411db2d59a8c9d0d4ce3108c9749fc0ab25ef7.jpg>)  
图7 所选特征对预测吸附容量的部分依赖图，包括吸附剂与PFAS的初始浓度比（a）、温度（°C）（b）、反应时间（h）（c）、pH（d）、log $K _ { \mathrm { o w } }$（e）、BET（m<sup>2</sup> g−<sup>1</sup>）（f）、碳链长度（g）、氟原子序数（h）以及$\mathsf { C } _ { - } \mathsf { F } _ { - } \mathsf { P C }$（i）。x轴表示特征值及其相应的物理单位，y轴表示预测的$q _ { \mathrm { e } }$（mg g−<sup>1</sup>）。每条部分依赖曲线在一组网格点上进行计算，这些网格点以红色标记沿曲线明确显示。$\mathsf { C } _ { - } \mathsf { F } _ { - } \mathsf { P C }$表示由标准化C和F变量得到的第一主成分。

[[pH|pH 值]]对 [[PFAS]] 的去除效率有显著影响。如 [[SHAP]] 图（图 6b）所示，pH 升高会对[[吸附]]产生负面影响。这一趋势与[[部分依赖图]]（图 7d）一致，后者显示[[吸附容量]]随 pH 升高而逐渐降低。这种行为的原因在于，pH 会影响 [[全氟和多氟烷基物质|PFAS]] 分子的电离状态、[[活性炭]]的[[表面电荷]]以及溶液中其他组分的形态。PFAS 化合物含有带负电荷的[[羧基]]或[[磺酸官能团]]。在高 pH 条件（碱性）下，这些基团更可能以其离子化形式存在，带有负电荷，从而增加其在水中的溶解度，并降低其在碳表面的吸附。<sup>46</sup> 这是由于带负电荷的 PFAS 分子与通常带负电荷的活性炭表面之间存在[[静电排斥]]，导致吸附减弱。相反，在较低 pH 值（酸性）下，PFAS 分子倾向于保持其未离子化形式，减少与碳表面的静电排斥，从而增强吸附。研究报道，在较低 pH 下，大量质子结合在[[碳–水界面]]，使碳表面带正电荷，从而加强与 PFAS 阴离子的[[静电相互作用]]并促进吸附。<sup>47,48</sup> 随着 pH 升高，碳–水界面变为中性或带负电荷，<sup>49</sup> 导致碳表面与 PFAS 分子之间产生静电排斥，从而降低吸附容量。

在[[吸附]]过程中，log $K _ { \mathrm { o w } }$ 显著影响吸附性能。log $K _ { \mathrm { o w } } ,$ 即[[辛醇-水分配系数|辛醇–水分配系数]]，是表征化合物在水相和有机相（通常为辛醇）之间分布平衡的关键参数，被广泛用于评价[[疏水性]]和[[亲脂性]]。已有研究<sup>30</sup> 表明，log $K _ { \mathrm { o w } }$ 值越高，对应疏水性越强。多项研究报道，[[碳基材料|碳材料]]对 [[PFAS]] 的[[吸附容量]]随 [[全氟和多氟烷基物质|PFAS]] 疏水性的增加而增加。<sup>30,50</sup> 这表明，log $K _ { \mathrm { o w } }$ 值较高的 PFAS 反映更强的疏水性，更容易被[[活性炭]]等碳材料吸附，而 log $K _ { \mathrm { o w } }$ 值较低的 PFAS 更亲水，因此更难被有效吸附。如 [[SHAP]] 图（图 6b）所示，log $K _ { \mathrm { o w } }$ 增加对吸附产生正向影响，这与[[部分依赖图]]（图 7e）中观察到的趋势一致，即吸附容量随 log $K _ { \mathrm { o w } } .$ 增加而增加。这些结果表明，随着 log $K _ { \mathrm { o w } }$ 增大，PFAS 分子的疏水性增强，促进其与碳表面疏水区域的相互作用，从而提高吸附容量。[[Shapley加性解释|SHAP]] 值和部分依赖图均证实，log $K _ { \mathrm { o w } }$ 对吸附具有显著的正向影响，突出其是影响 PFAS 吸附的重要分子特征。

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/5593fd96e47c45a504bc7668c880a63d985b88feee43c86a2926b3274086be4d.jpg>)

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/6487ffd28a653aca633bb3f43df7268997ca81d13cfa3745aaac1cb90f85e0be.jpg>)

![](<../2.SCI_MD/Machine learning-based prediction and mechanistic insight into PFAS adsorption on carbon-based materials/images/db1723ef11005e35b6031373a6c3bf00f8ed3746d3a9a1dff780855d3ed442cb.jpg>)  
图 8 $R ^ { 2 }$ 得分来自动态调整 GBDT 的三个参数：learning\_rate（a）、$\mathsf { n \_ }$ estimators（b）和 max\_depth（c）。

讨论了[[BET]][[比表面积]]对[[吸附]]的影响。总体而言，BET比表面积在吸附中起着关键作用，因为较大的BET值通常提供更多的活性位点，从而导致更高的[[吸附容量]]。<sup>41</sup> 如[[部分依赖图]]（图7f）所示，整体趋势表明吸附容量随BET比表面积增大而增加，呈现正相关关系。尽管约1000 $\mathrm { m } ^ { 2 } \ \mathrm { g } ^ { - 1 }$附近的可用数据较为稀少，且相应的吸附容量仍相对较低，使得难以在这一特定范围内得出有意义的结论，但总体趋势是明确的：吸附容量通常随BET比表面积的增大而增加。

[[PFAS]]分子中的[[碳链长度]]和[[氟原子数|氟原子数量]]是影响[[吸附]]性能的关键因素。如[[部分依赖图]]（图7g和h）所示，碳链长度（C）和[[氟原子]]数（F）均与[[吸附容量]]呈正相关。本研究结果表明，这两个参数在吸附中都发挥着重要作用。随着碳链长度的增加，吸附容量呈上升趋势，这与以往报道[[全氟和多氟烷基物质|PFAS]][[疏水性]]随链长增加而增强的研究一致。<sup>51,52</sup>更长的碳链显著增强分子的疏水性，促进其从水相中分离并与碳基[[吸附剂]]发生相互作用。类似地，氟原子数量的增加进一步增强了分子的疏水性和化学稳定性，<sup>53</sup>促进了其在碳表面的富集。通常，氟原子数量越多，PFAS的疏水性越强。碳链长度和氟原子数量通过调节分子疏水性、分子体积以及与碳基吸附剂的相互作用，显著影响PFAS在吸附过程中的去除效率。然而，当碳链长度超过某一阈值后，氟含量的进一步增加并不会显著增强疏水性，导致吸附容量趋于平台。<sup>54</sup> 因此，可以推断在一定范围内，碳链长度和氟原子数对吸附具有正向影响，而超出该范围后，其对吸附的增强作用变得可以忽略。

## 4. 结论

所有模型在预测[[PFAS]]在[[碳基材料]]上[[吸附]]方面的性能总结于表1。如表所示，[[梯度提升决策树|GBDT]]取得了最高的测试$R ^ { 2 }$且误差最小，表明其在各模型中具有最佳的整体预测性能。结果表明，GBDT模型实现了最佳的数据[[拟合]]和预测性能。模型解释揭示，[[特征重要性]]顺序为：[[初始浓度比|碳基材料与PFAS的初始浓度比]] > [[溶液pH]] > [[反应时间]] > [[比表面积|碳比表面积]] > log $K _ { \mathrm { o w } } >$[[氟原子数]] > [[碳链长度]] > [[温度]]。

[[PFAS]] 的[[吸附]]主要受[[疏水性]]控制，表现为与 log $K _ { \mathrm { o w } } ,$ [[碳链长度]]和[[氟原子数]]呈正相关；但吸附在超过某一阈值后趋于平台。[[溶液pH|溶液 pH]] 影响[[静电相互作用]]，而[[碳基材料|碳材料]]的[[孔结构]]则决定 [[全氟和多氟烷基物质|PFAS]] 分子接近[[吸附位点]]的难易程度。[[梯度提升决策树|GBDT]] 模型能够准确预测不同条件下 PFAS 的吸附，并阐明关键影响因素。未来研究应纳入真实环境参数和多种 PFAS 共存体系，以探究[[竞争与协同效应]]，从而加深对碳基材料在实际应用中去除 PFAS 效率的理解。

## 作者贡献

[[Yanliang Lu]]：概念构思、方法设计、数据整理、形式分析、验证、可视化以及撰写——初稿。[[Fangfang Ding]]：调查、数据整理以及撰写——审阅与编辑。[[Guchun Wang]]：方法设计、资源获取以及形式分析。[[Yabin Li]]：数据整理与可视化。[[Zhitao Guo]]：验证与调查。[[Peiyao Pang]]：资源获取与调查。[[Baojun Wang]]：监督指导、项目管理、经费获取以及撰写——审阅与编辑。[[Jue Liu]]：监督指导、概念构思、项目管理、经费获取以及撰写——审阅与编辑。

## 利益冲突

作者声明不存在竞争性利益。

## 数据可获得性

本研究使用的数据以及编写的代码已在 [[GitHub]] 链接上公开。详细的计算和编程过程可通过以下 GitHub 链接获取（https://github.com/luyanliang-cat/ [[PFAS]]-data/blame/main/data.zip）。

补充信息（sI）：本研究使用的数据集以及用于[[数据预处理]]、[[模型训练]]和分析的 [[Python]] 代码。参见 DOI：https://doi.org/10.1039/ d5ra07898a。

## 致谢

本工作部分得到[[河北省自然科学基金]]（批准号：D2022201006）和[[高层次人才培育计划|河北大学高层次人才培育计划]]（批准号：521100221011）的资助。

## References

1 L. Liu, Y. Qu, J. Huang, et al., Environ. Sci. Eur., 2021, 33, 6.

2 D. Grgas, A. Petrina, T. <sup>ˇ</sup>Stefanac, et al., Toxics, 2023, 11, 446.

3 P. Jeriˇc, B. Likozar and U. Novak,J. Compos. Sci., 2025, 9, 81.

4 J. Zhang, H. Naveed, K. Chen, et al., Toxics, 2025, 13, 47.

5 Y. C. Li, D. L. Zhong, G. Y. Rao, et al., Mol. Phylogenet. Evol., 2018, 121, 110–120.

6 R. Amen, A. Ibrahim, W. Shafqat, et al., Sustainability, 2023, 15, 16173.

7 D. Dey, T. Sha<sup></sup>, S. Chowdhury, et al., Chemosphere, 2024, 351, 141164.

8 E. Karbassiyazdi, F. Fattahi, N. Youse<sup></sup>, et al., Environ. Res., 2022, 215, 114286.

9 K. T. Butler, D. W. Davies, H. Cartwright, et al., Nature, 2018, 559, 547–555.

10 D. Dey, T. Sha<sup></sup>, S. Chowdhury, et al., Chemosphere, 2024, 351, 141164.

11 A. Menezes, L. C. Goveas, R. Vinayagam, et al., J. Water Process Eng., 2025, 69, 106621.

12 J. Pala, T. Le, M. Kasula, et al., Sep. Purif. Technol., 2023, 309, 123025.

13 M. M. Mian, J. Zhu, X. Jiang, et al., Front. Environ. Sci. Eng., 2025, 19, 78.

14 P. N. Omo-Okoro, C. J. Curtis, A. M. Marco, et al., J. Environ Health Sci. Eng., 2021, 19, 217–236.

15 C. Nainika, P. Balamurugan and J. L. F. Daya, J. Appl. Res. Technol., 2024, 22, 351–361.

16 C. Wu, M. J. Klemes, B. Trang, et al., Water Res., 2020, 182, 115950.

17 P. Ramos, M. P. Schmidt, R. Xuan, et al., Biochar, 2025, 7, 56.

18 J. Patel, C. Amipara, T. A. Ahanger, et al., Comput. Intell. Neurosci., 2022, 2022, 9283293.

19 Y. Wang, J. Zhang, C. Du, et al., Sci. Total Environ., 2024, 908, 168375.

20 P. Mehrmohammadi and A. Ghaemi, Sci. Rep., 2023, 13, 21264.

21 A. Thakkar, D. Patel and P. Shah, Neural Comput. Appl., 2021, 33, 16985–17000.

22 G. British, BMJ, 2018, 362, k4131.

23 J. Wang, X. Guo and J. Xue, Environ. Sci. Technol., 2021, 55, 12780-12790

24 J. Fei, J. Cui, B. Wang, H. Xie, C. Wang, Y. Zhao, H. Sun and X. Yin, Environ. Pollut., 2023, 330, 12180.

25 M. Fan, K. Xiao, L. Sun, et al., Minerals, 2022, 12, 1621.

26 Y. Kim and Y. Kim, Sustain. Cities Soc., 2022, 79, 103677.

27 S. Wang, X. Song, J. Duan, et al., Water, 2025, 17, 2266.

28 H. Ullah, S. Khan, B. Chen, et al., Carbon Res., 2023, 2, 29.

29 T. C. Schutt, C. G. Bresnahan, T. C. Ricard, et al., Environ Sci.: Adv., 2025, 4, 1587–1593.

30 M. Park, S. Wu, I. J. Lopez, et al., Water Res., 2020, 170, 115364.

31 M. Riegel, B. Haist-Gulde and F. Sacher, Environ. Sci. Eur., 2023, 35, 12.

32 C. Miˇs<sup>ˇ</sup>lanov´a and M. Valachoviˇcov´a, Life, 2025, 15, 573.

33 M. Prani´c, K. Zhou, P. M. Biesheuvel, et al., ACS ES&T Water, 2025, 5, 5233–5242.

34 R. C. M. van Aert, Res. Synth. Methods, 2023, 14, 768–773.

35 M. T. Puth, M. Neuh¨auser and G. D. Ruxton, Anim. Behav., 2015, 102, 77–84.

36 O. M. Katipo˘glu, G. Aktürk, H. Ç. Kılınç, et al., Earth Sci. Inform., 2024, 17, 3623–3649.

37 S. Xie, H. Lin, Y. Chen, et al., Mater. Today Commun., 2023, 36, 106780.

38 Q. Chen, Conditional Clustering Method on KNNfor Big Data, University of Michigan, 2024.

39 L. Barreñada, P. Dhiman, D. Timmerman, et al., Diagn. Progn. Res., 2024, 8, 14.

40 E. Halabaku and E. Bytyçi, Intell. Autom. So Comput., 2024, 39, 987–1006.

41 M. Prani´c, L. Carlucci, A. van der Wal, et al., Chemosphere, 2025, 370, 143889.

42 S. G. Hakimabadi, A. Taylor and A. L. T. Pham, Water Res., 2023, 242, 120212.

43 M. Prani´c, K. Zhou, P. M. Biesheuvel, et al., ACS ES&T Water, 2025, 5, 5233–5242.

44 Y. Qu, C. Zhang, F. Li, et al.,J. Hazard. Mater., 2009, 169, 146– 152.

45 F. A. Hussain, S. E. Janisse, M. C. Hefern, et al., iScience, 2022, 25, 104138.

46 S. C. E. Leung, D. Wanninayake, D. Chen, et al., Sci. Total Environ., 2023, 905, 166764.

47 J. Xu, Z. Liu, D. Zhao, et al., Sci. Total Environ., 2020, 723, 137757.

48 N. Malouchi, S. Chatzimichailidou, A. K. Tolkou, et al., Separations, 2024, 11, 122.

49 S. Nasrollahpour, R. Pulicharla and S. K. Brar, iScience, 2025, 28, 112113.

50 B. Cantoni, A. Turolla, J. Wellmitz, et al., Sci. Total Environ., 2021, 795, 148821

51 S. Kabiri, D. A. Navarro, S. A. Hamad, et al., Sci. Total Environ., 2023, 875, 162653.

52 H. Lei, D. Qianyun and Q. I. Xiangkun, Environ. Chem., 2021, 40, 2193–2203.

53 J. Fang, S. Li, T. Gu, et al., J. Environ. Chem. Eng., 2024, 12, 111833.

54 G. Chen, S. Wasman and L. Qi, Fate and Transport ofPFASs in the Landll—Impact of the Peruoroalkyl Chain Length, Florida State University & Florida Agricultural and Mechanical University, 2024.

55 Y. Qu, C. Zhang, F. Li, et al.,J. Hazard. Mater., 2009, 169, 146– 152.

56 C. Liu, P. Balasubramanian, J. An, et al., npj Clean Water, 2025, 8, 13.

57 C. Liu, J. An, X. C. Nguyen, et al., Energy Environ. Sustainability, 2025, 1, 100043.

58 C. Liu, P. Balasubramanian, X. C. Nguyen, et al., Carbon Res., 2025, 4, 46.

59 C. Liu, P. Balasubramanian, F. Li, et al., J. Hazard. Mater., 2024, 480, 135853.

60 C. Liu, Z. Zhang, F. Li, et al., Water Ecol., 2025, 100017.

61 J. H. Kim, Korean J. Anesthesiol., 2019, 72, 558–569.

62 R. M. O’brien, Qual. Quantity, 2007, 41, 673–690.

63 C. F. Dormann, J. Elith, S. Bacher, et al, Ecography, 2013, 36, 27–46.