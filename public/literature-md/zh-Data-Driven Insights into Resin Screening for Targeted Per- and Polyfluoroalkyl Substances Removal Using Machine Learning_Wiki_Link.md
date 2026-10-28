---
title: "zh-Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning Wiki全文"
source_markdown: "2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning.md"
cn_markdown: "2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/zh-Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning.md"
type: translated_fulltext_wiki
---
<!-- PaperMDLab-NAV:START -->
> [!info] 论文四向互链（PaperMDLab 自动维护）
> [[2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning|英文原文]] · [[2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/zh-Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning|中文译文]] · **中文全文双链（当前）** · [[4.SCI_AI_Summary/summary-zh-Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning|AI中文总结]]
<!-- PaperMDLab-NAV:END -->


pubs.acs.org/est

文章

# 基于[[机器学习]]的靶向[[全氟和多氟烷基物质]]去除[[离子交换树脂|树脂]]筛选的数据驱动见解

[[Jing Zhang]], [[Kaixing Fu]], [[Shifa Zhong]],\* 和 [[Jinming Luo]]\*

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/9d4159c234fd955b247551874f3b57b64ca5ce5bf54c7c4ac0ed82fae9352775.jpg>)

引用本文：[[Environmental Science & Technology|Environ. Sci. Technol.]] 2025, 59, 3603−3612

在线阅读

访问

指标及更多

文章推荐

\*sı 支持信息

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/00d7be453c09f49c04698c858fa48917284b095e972056f3b48a2e04ccb1d4f3.jpg>)

摘要：在本研究中，我们利用[[机器学习]]（ML）模型，应对在不同水基质中去除43种全氟烷基和[[多氟烷基物质]]（[[全氟和多氟烷基物质|PFASs]]）的[[离子交换树脂|树脂]]筛选和操作条件优化挑战，这些物质涵盖长链和短链氟碳变体。我们首先开发了能够基于树脂性质、操作条件和水基质准确预测PFASs[[去除率|去除效率]]的ML模型。模型性能通过测试集和我们自己的实验测试进行了验证。我们全面研究了树脂性质、操作条件和水基质中影响PFAS去除的关键特征及其交互效应。最后，我们利用所开发的ML模型，针对长链（如[[PFOS]]、[[PFOA]]）和短链PFASs（如[[PFBS]]、[[GenX]]），在特定水基质下逆向筛选树脂并确定最佳操作条件。实验测试表明，我们的ML引导方法对这些PFASs实现了期望的去除效率（RE），其中[[全氟丁基磺酸|PFBS]]的RE值达到86.56%，GenX达到83.73%，优于许多已报道的树脂。这项工作强调了ML方法在跨不同水基质的树脂筛选和操作优化中的潜力，能够高效去除结构多样的PFAS化合物。

关键词：[[全氟和多氟烷基物质|PFAS]]、[[离子交换树脂]]、[[机器学习]]、优化、材料筛选

## 1. 引言

[[全氟和多氟烷基物质|全氟和多氟烷基物质（PFASs）]]是一大类人为来源的脂肪族化合物，由于其极强的持久性和高度稳定性，在水环境中普遍检出。<sup>1,2</sup> 人类通过饮用受PFAS污染的水而暴露于这些物质，因其生物毒性和生物累积性，可能与潜在的不良健康效应相关。<sup>3,4</sup> 为此，[[美国环境保护署]]于2024年将饮用水中[[全氟辛酸]]（[[PFOA]]）和[[全氟辛烷磺酸]]（[[PFOS]]）的健康建议水平设定为4 ng/L。<sup>7</sup> 因此，从水源中去除PFASs已引起广泛关注。<sup>8</sup> 迄今为止，用于有效处理PFAS污染水的最广泛采用的技术之一是利用[[活性炭]]（AC）和[[离子交换]]（IX）[[离子交换树脂|树脂]]进行物理[[吸附]]。<sup>7,9,10</sup> 值得注意的是，IX树脂因其对PFASs的高选择性和易于再生循环使用而受到特别关注。<sup>11</sup>

[[离子交换树脂]]的性质，如聚合物组成（例如苯乙烯系与丙烯酸系）和官能团（例如[[季胺]]、[[叔胺]]），会显著影响其对不同氟碳链长度 [[全氟和多氟烷基物质|PFASs]] 的[[吸附]]效率。<sup>12,13</sup> 例如，已有研究报道，在呈现相同树脂官能团的情况下，[[聚苯乙烯基树脂]]（[[A520E]]）通常比[[聚丙烯酸树脂]]（A860）表现出更高的 PFAS [[去除率]]，这归因于其更强的[[疏水性]]。<sup>14</sup> 然而，Gao 等人发现，[[聚苯乙烯]] [[R-CAC]] 在去除特定 PFASs（如[[氯代多氟烷基醚磺酸]]，[[F-53B]]）方面的效果不如[[聚丙烯酸]]树脂 [[IRA67]]。<sup>15</sup> 类似地，含有季胺基团的 A520E 对[[全氟烷基酸]]（PFAAs）的亲和力强于含有叔胺基团的 [[IRA96]]。<sup>16</sup> 有趣的是，同样负载季胺的 [[IRA400]] 在去除[[全氟己烷磺酸盐]]（PFHxS）时效果不如 IRA67（含叔胺）。<sup>17</sup> 除树脂性质外，水基质$( \mathrm { e . g . } ,$ pH、[[天然有机质]]浓度）和操作条件$( \mathrm { e . g . } ,$ [[接触时间]]、[[树脂投加量]]）也会显著影响 PFAS 去除效率。<sup>11,18</sup> 当针对特定 PFASs 水基质设计[[离子交换]]树脂时，优化树脂性质和操作条件至关重要。然而，由于树脂性质、水化学和操作条件之间存在复杂的相互作用，通过传统试错法确定最优方案颇具挑战性。

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/b9a330d4e3e3339de4f449c251966a729769841c1b53e222cfe95e61fe5fc837.jpg>)

为应对这一挑战，[[机器学习]]（ML）为分析复杂的多变量关系提供了有力工具（文本 S1），并已越来越多地应用于研究水环境中的多参数[[吸附]]过程。<sup>19,20</sup> 例如，Li 等人使用 [[极限梯度提升|XGBoost]] 模型，基于 MOF 特征、污染物特性和吸附条件，预测了 28 种[[金属-有机框架|金属−有机框架]]（[[金属有机框架|MOFs]]）对 30 种污染物的[[去除率]]。<sup>21</sup> 该模型识别出显著影响去除率的关键参数，如污染物浓度、pH、固液比和温度，从而有助于 MOF 结构设计和最优吸附条件选择。此外，ML 模型已被用于评估聚合物对$\mathrm { R e O _ { 4 } } ^ { - }$的吸附效率，筛选了 2450 种虚拟吡啶聚合物，并确定卤素官能化可同时提高吸附效率和选择性。<sup>22</sup> 近期，ML 已被用于利用[[前馈神经网络]]（FNN）算法准确预测碳−氟（C−F）键解离能<sup>23</sup>，以及基于半监督模型预测 [[全氟和多氟烷基物质|PFASs]] 化合物的生物活性<sup>24</sup>，这些都促进了这些物质的高效处理与去除。这些方法已为这些物质的高效处理和去除做出了贡献。据我们所知，ML 在设计用于 PFAS 去除的高效功能性[[离子交换树脂|树脂]]方面的应用仍处于早期阶段。尽管如此，在这一背景下利用 ML，不仅加深了我们对吸附复杂动态过程的理解，还为定制化解决方案的开发铺平了道路，从而提高处理各种水基质中 PFAS 问题的效率和效果。

在本研究中，我们旨在利用[[机器学习]]阐明[[离子交换树脂]]性能、水体基质与操作条件之间的复杂关系。我们的目标是开发一种系统化策略，用于筛选与各种[[全氟和多氟烷基物质|PFASs]]特性相匹配的最优[[离子交换]]树脂，同时确定不同水体基质下相应的最优操作条件，以实现最大程度的PFAS去除。研究首先整合了一个涵盖2107个[[吸附]]数据点的综合数据集，这些数据来源于已发表的研究。基于该数据集，我们构建了与PFAS[[去除率|去除效率]]相关的特征空间，其中包含六项树脂性能、两项PFAS特性及十项吸附条件。随后，我们开发了机器学习模型，将该特征空间与PFAS去除效率相关联。这些模型通过未参与训练的测试集和实验结果进行验证，使我们能够准确识别有效影响PFAS去除的关键特征。最后，基于我们的机器学习模型，我们对离子交换树脂进行了[[逆向设计]]，并提出了针对特定PFASs及不同水体基质的最优吸附条件。我们通过实验验证了该方法的效果，证明其能够系统化筛选离子交换树脂，以最大化PFAS去除效率。这一创新方法不仅加深了我们对PFAS与离子交换树脂相互作用的理解，还为开发针对性解决方案以应对这一紧迫的环境挑战提供了可靠框架。

## 2. 材料与方法

2.1. 数据集构建。数据通过[[Web of Science]]和[[Google Scholar]]从23项研究（2009−2023年）中提取。我们从经过筛选的研究列表中选取了提供稳健可靠实验结果的文献，相关文献见支持数据。在确定模型输入特征时，我们纳入了所有可能影响[[吸附]]性能的变量，因为[[机器学习]]模型必须能够识别这些变量与吸附效果之间的相关性。数据集包括[[离子交换树脂|树脂]]性能（聚合物基体、[[平均粒径]]、官能团、孔结构、[[总交换容量]]、[[保水性]]、树脂类型）、[[全氟和多氟烷基物质|PFAS]]特性（氟碳链长：$N _ { \mathrm { C F } } ,$ PFAS类型）、水体基质类型（[[去离子水]]、[[湖水]]、[[地下水]]和废水）以及天然有机物$\left( C _ { \mathrm { N O M } } \right)$、[[溶解性有机碳]]$( C _ { \mathrm { D O C } } ) _ { \mathrm { . } }$和[[硫酸盐]]$( C _ { \mathrm { { S O } _ { 4 } } } )$的浓度。数据集还包含操作条件，如溶液pH、[[接触时间]]（C_Time）、温度（Tem）、[[搅拌速率]]（Stirring）、[[树脂投加量]]$\left( M _ { \mathrm { r e s i n } } \right) _ { \mathrm { : } }$和PFAS初始浓度$\left( C _ { 0 } \right)$。然而，并非所有研究均报告了这些特征值，因此存在缺失数据，我们将其赋为空值，以便在预处理阶段进行可能的插补。我们的数据集包含2107条记录，反映了43种PFAS化合物在37种不同树脂及一系列吸附条件下的[[去除率|去除效率]]（REs）（表S1和S2）。PFASs根据其氟碳链长进行分类：长链$\left( N _ { \mathrm { C F } } \ 7 { - } 1 2 \right)$和短链$\left( N _ { \mathrm { C F } } 3  – 6 \right)$。树脂包括[[阴离子交换树脂]]（AER，如C100和C150）、[[阳离子交换树脂]]（CER，如[[PFA694E]]和[[A520E]]）以及[[非离子交换树脂]]（NER，如[[XAD7HP]]、[[XAD-2]]）。

2.2. 数据预处理。鉴于[[机器学习]]模型所需的数值输入，类别变量（聚合物基体、官能团和水相基质）采用 OneHotEncoder 方法进行转换，赋值为 1 或 0 以表示特征的存在或缺失。为解决多重共线性问题，计算了所有输入变量之间的 [[Spearman 相关系数]]。<sup>25</sup> 若两个变量具有较高的相关性 $\left( \left| R \right| \ > \ 0 . 7 \right)$ ，则删除与 [[去除率|RE]] 相关性较弱的那一个（详见文本 S2），最终留下 23 个输入特征（表 S3）。鉴于环境数据集固有的不完整性，均值插补被认为是处理缺失值的有效策略，可在稳健的模型训练和预测中保持数据完整性。<sup>26−28</sup> 诸如 pH、[[搅拌速率]]和[[树脂投加量]]等特征的缺失值，利用现有数据的均值进行填补。对于缺失更为显著的变量，如 $C _ { 0 }$ 和 $C _ { \mathrm { D O C } } ,$ ，则使用 [[极限梯度提升|XGBoost]] 模型基于数据中的模式估计并填补缺失值。<sup>29</sup> 鉴于 [[全氟和多氟烷基物质|PFAS]] 种类繁多，以往的机器学习研究侧重于将这些物质编码为分子指纹。<sup>24,29</sup> PFAS 化合物的分子结构通过 [[Python]] 中的 [[RDKit]] 包生成二进制 [[摩根指纹|Morgan 指纹]]（[[二进制摩根指纹|BMF]]）和基于计数的 Morgan 指纹（[[基于计数的摩根指纹|CMF]]）进行编码。详细的编码过程见文本 S2。总体而言，最终使用 1159 个样本用于机器学习模型开发。<sup>30</sup>

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/1107d6241bd5bdfd80e0c013b9c3e3761074ad77b70701ab265e952f22d57d7a.jpg>)

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/6e9e88cab773b7bac3a7c728f3c0da88b27f5f1db1a436a2c9fba68eed8f8b5d.jpg>)

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/116d3a25bc4acb7239631a3490a2984e3d51f2631b53d54501c5bdf2c321186b.jpg>)

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/5aa958bce8bed4f3d6fc26e7cce25542583c041bffffd586f4e4863d34fa36e9.jpg>)  
图 1. 箱线正态图，表示全氟和多氟烷基物质以及各类全氟羧酸（PFCA）和全氟磺酸（PFSA）化合物去除效率（RE）的描述性统计（A）；PFCA、PFSA、e-PFAS 的样本量，包括 GenX、F-53B 和其他 e-PFAS。e-PFAS：新兴 PFAS（B）；氟碳链长从 3 到 9 的 PFAS 去除效率变化趋势（C）。具有不同聚合物组成、官能团和孔结构的树脂的 RE（D）。

2.3. 模型开发、实验验证与解释。数据集被随机划分为训练集（80%）和测试集（20%）。43 种 [[全氟和多氟烷基物质|PFAS]] 可能同时存在于训练集和测试集中，存在[[数据泄漏]]的风险。因此，我们专注于针对这 43 种 PFAS 的[[离子交换树脂|树脂]]筛选，以在实际应用中减轻数据泄漏的影响。我们选择了四种[[机器学习]]模型，[[随机森林]]（RF）、[[梯度提升回归]]（GBR）、极端梯度提升（[[极限梯度提升|XGBoost]]）和 [[CatBoost]]，进行训练并识别性能最佳的模型（文本 S3）。采用[[Bayesian优化|贝叶斯优化]]和 [[交叉验证|5 折交叉验证]]来微调模型超参数，以控制[[过拟合]]（表 S4）。模型性能使用[[决定系数]]（R<sup>2</sup>）、[[平均绝对误差]]（MAE）和[[均方根误差]]（RMSE）进行评估。较高的 $R ^ { 2 }$ 和较低的 MAE/RMSE 值表示性能更佳（文本 S4）。在模型开发过程中仅使用训练集，测试集则保留用于评估。

此外，我们通过选取具有不同[[离子交换树脂|树脂]]性质、[[全氟和多氟烷基物质|PFAS]] 类型（[[PFOA]] 和 [[PFOS]]）及[[吸附]]条件的 6 组样本（[[全氟辛酸|PFOA]] 组：OA-1、OA-2、OA-3；[[全氟辛烷磺酸|PFOS]] 组：OS-1、OS-2、OS-3）进行实验验证，并测定相应的 [[去除率|RE]] 值。这些结果与模型预测进行了对比，实验细节见第 2.5 节。[[SHAP|SHapley Additive Explanations]]（SHAP）包可在模型训练后定量分析输入特征与去除效率之间的相关性。Shapley 值可以解释每个输入变量如何影响 [[机器学习|ML]] 模型的输出。基于 SHAP 进行模型解释，以分析各特征对 PFAS 去除的贡献。特征交互效应通过 [[Python]] [[scikit-learn]] 库中的部分依赖函数生成的三维（3D）交互图进行可视化。

2.4. 模型引导的[[离子交换树脂|树脂]]筛选及不同氟碳链长 [[全氟和多氟烷基物质|PFASs]] 最优条件的确定。我们选择长链 PFASs（[[PFOS]]、[[PFOA]]）和短链 PFASs（[[PFBS]]、[[GenX]]）作为目标 PFASs，并据此在所开发的 [[机器学习|ML]] 模型中反向筛选合适树脂，并给出特定水体基质下的最优操作条件。在优化过程中，一旦选定 PFAS 类型和水体基质，PFAS 的特性及水体基质类型即被自动确定并在此后保持不变。其他输入特征包括 $M _ { \mathrm { r e s i n } } , C _ { 0 } ,$ Tem、C\_time、pH、Stirring、树脂[[平均粒径]]（MD）、聚合物基质和官能团。$M _ { \mathrm { r e s i n } } , \ C _ { 0 } ,$ pH、温度、[[接触时间]]和[[搅拌速率]]的参数依据各自输入特征范围的极值设定。采用[[Bayesian优化|贝叶斯优化]]对这些特征进行精化，以确定 PFAS 去除的最佳树脂性质和[[吸附]]条件。

2.5. 实验验证。用于模型验证的输入特征基于图 S1 中训练数据的样本量随机选取。在模型验证中，随机选择输入特征，包括 $M _ { \mathrm { { r e s i n } } } ( 1 0 0 , 2 0 0 , 4 0 0 ~ \mathrm { { m g / L } } ) , C _ { 0 } ( 5 0 _ { \mathrm { { m } } }$ 100、200 $\mu \mathbf { g } / \mathrm { L } )$、pH（7、5）、[[吸附]]温度（22、27 ${ } ^ { \circ } \mathrm { C } ) _ { i }$、[[接触时间]]（12、48 h）和[[搅拌速率]]（150、100 rpm），并结合[[离子交换树脂|树脂]]（[[D201]]、[[IRA67]]、[[A111S]]）在 30 [[机器学习|mL]] [[全氟和多氟烷基物质|PFAS]] 溶液中吸附 [[PFOA]] 和 [[PFOS]]。随后，混合溶液通过 0.22 μm [[尼龙滤膜]]过滤。

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/9b4ef89a3ef13503c5fb9c96fcc07437387512462ccf5e0cc884b0a356776531.jpg>)

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/eb01393789f5b73819e7b12cc0b4860e43c64aeba73b50fd4c6c2be5ef086e63.jpg>)

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/4c53ed6740271f00fe358c315874d07e3636d86112d0d0de050e10221f769808.jpg>)  
图 2. 使用二元 Morgan 指纹（BMF）和计数型 Morgan 指纹（CMF）时，四种不同 ML 算法在测试集中的 MAE 值（A）；基于四种 ML 算法的训练集与测试集 MAE 和 RMSE 拟合误差比较（B）；以及 BMF-CatBoost 模型对测试数据的性能（C）。

[[全氟和多氟烷基物质|PFASs]] 的[[去除率|去除效率]]（RE）通过公式 1 计算

$$
\text { removal efficiency } = \frac {C _ {0} - C _ {\mathrm{e}}}{C _ {0}} \times 100 \%\tag{1}
$$

其中 $C _ { 0 }$ 和 $C _ { \mathrm { e } }$ 分别为 [[全氟和多氟烷基物质|PFASs]] 的初始和平衡溶液浓度。

对于[[离子交换树脂|树脂]]筛选，参数值$( \mathrm { e . g . } ,$、树脂类型、操作条件均由[[机器学习]]模型获得，[[吸附]]实验的具体设置见补充文本 S5。根据[[Bayesian优化|贝叶斯优化]]所得关键输入特征的最优组合，实验中去除 [[PFBS]]、[[GenX]]、[[PFOA]] 和 [[PFOS]]，以验证 [[BMF-CatBoost模型|BMF-CatBoost 模型]]的预测准确性。表${ \mathrm { S } } 5 ,$中，不同剂量的树脂与 30 mL [[全氟和多氟烷基物质|PFAS]] 溶液混合，并在 22−28 °C 下搅拌。混合溶液随后经 0.22 μm [[尼龙滤膜]]过滤。所有实验均重复 3 次，取平均值。

[[全氟和多氟烷基物质|PFAS]] 浓度通过 [[Sciex Quadrupole 5500]] [[超高效液相色谱-三重四极杆质谱]]（UPLC-3Q-MS，[[WATERS]] 公司）联用 [[ACQUITY UPLC HSS T3 色谱柱|ACQUITY·UPLC·HSS·T3 色谱柱]]（2.1 mm × 100 mm，1.8 μm），在$4 5 ~ ^ { \circ } C . ^ { 3 1 - 3 4 }$下进行定量。PFAS 定量采用 UPLC-MS/MS，并在负离子模式下使用[[电喷雾电离]]。校准标准品经基质匹配制备，设置六个浓度水平，范围分别为 0 至 10 ng/L 和 0 至 1000 ng/L，以匹配样品中预期的 PFAS 浓度。水样检测中加入了同位素标记内标，以确保准确性。分析过程首先建立校准曲线。为验证系统性能并最大程度减少残留效应，在校准前后分别分析仪器空白和质量控制样品，质量控制接受容许偏差为 ±30%。通过加标对照评估分析过程中 PFAS 的回收率，可靠数据解析的回收率阈值为 50% 或更高。进样体积为 1 $\mu \mathrm { L }$。分离采用梯度洗脱，流动相由含 2 mM 乙酸铵的水（溶剂 A）和 100% 乙腈（溶剂 B）组成。梯度洗脱程序为：前 2 min 内 B 由 5% 升至 55%，随后 3 min 内升至 100% B 并保持 2 min，然后在 2 min 内回到 5% B 进行色谱柱再平衡。

## 3. 结果与讨论

3.1. [[离子交换树脂|树脂]]特性与 [[全氟和多氟烷基物质|PFAS]] 类别对 [[去除率|RE]] 的统计分析。为了初步了解树脂介导的 PFAS 去除过程，我们系统描述并分析了从 23 篇文献中提取的原始数据。图 1 以箱线图形式展示了 PFAS 类型（如 [[PFOA]]、[[PFBS]] 和 [[GenX]]）及树脂特性（聚合物基质和官能团）对 RE 的分布情况。[[全氟羧酸|PFCA]] 和 [[全氟磺酸|PFSA]] 化合物的 RE 值显著高于新兴 PFAS（[[新兴全氟和多氟烷基物质|e-PFAS]]），如 10:2 氟调聚物磺酰胺甜菜碱（10:2 FTAB）、GenX、[[F-53B]] 和[[全氟丁磺酸]]（FBSA）（图 1A），这凸显了与传统 PFAS 相比，去除 e-PFAS 的难度。e-PFAS 的 RE 数据有限（图 1B）以及实验条件各异，均强调了获取更可靠数据和标准化测试方法的必要性。PFSA 较高的 RE 可能归因于其更强的负诱导效应，这与额外的氧原子有关，从而使其[[疏水性]]高于 $\check { \mathrm { P F C A } } ^ { 3 5 }$。随着 $N _ { \mathrm { C F } }$ 的降低，PFSA 和 PFCA 的 RE 通常均呈下降趋势（图 1C），而长链 PFAS 因更强的[[疏水相互作用]]表现出更好的去除效果。<sup>36</sup> 然而，[[全氟丁酸|PFBA]] 和[[全氟戊酸]]（PFPeA）等短链 PFCA 的 RE 值低于 20%，对水处理构成挑战。<sup>37</sup>

图 1D 表明，大孔树脂在 RE 方面优于凝胶树脂，这可能是由于孔径更大，在天然水中不易堵塞。<sup>38,39</sup> 聚苯乙烯树脂的平均 RE 低于聚丙烯酸树脂，这与先前偏向疏水性聚苯乙烯用于 PFAS 去除的研究相矛盾。<sup>40</sup> 鉴于与 PA 树脂相比，PS 树脂中观察到的性能范围更广，我们假设 PS 树脂比 PA 树脂更容易受到实验条件变化的影响。具有复杂胺基的树脂与具有季胺基团的树脂相比，RE 较低，并且选择性随官能团中烷基链长度的增加而提高。<sup>41</sup> 然而，由于初始 PFAS 浓度和竞争离子等其他因素的影响，这些趋势尚不确定。这些结果凸显了树脂特性、PFAS 结构和水体组成在决定 RE 时存在的复杂相互作用。

3.2. [[机器学习|ML]] 模型性能与实验验证。两种 [[摩根指纹|Morgan 指纹]]（MF）的最佳指纹长度和半径值，以及四种 ML 算法的性能指标，列于表 S6。图 2A 显示，基于 [[二进制摩根指纹|BMF]] 的模型在 ${ R _ { \mathrm { t e s t } } } ^ { 2 }$（图 S2 和 S3）和 ${ \bf M A E } _ { \mathrm { t e s t } } { \bf \Psi } _ { \mathrm { t e s t } } ,$ 方面优于基于 [[基于计数的摩根指纹|CMF]] 的模型，详细分析见文本 S6。在这些基于 BMF 的模型中，图 2B 中 [[CatBoost]] 模型的最低拟合误差 $\left( \mathrm { R M S E } _ { \mathrm { t e s t } } = 8 . 3 2 , \mathrm { R M S E } _ { \mathrm { t r a i n } } = 4 . 4 5 \right)$ 表现出最优的稳定性。因此，CatBoost 模型展现出最佳的预测性能，${ R _ { \mathrm { t e s t } } } ^ { 2 } =$ $0 . 9 2 , \mathrm { M A E } _ { \mathrm { t e s t } } = 2 . 7 3 ,$ 和 $\mathsf { \bar { R M S E } } _ { \mathrm { t e s t } } \overset { - } { = } 3 . 8 7$

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/772ac5286eab45d2a5ae076c4c34ae1a8dd2988dbcab9faa96eac5cbe26d539e.jpg>)

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/a9f5b94fbd902c06eadbb8c1b7f3f7aac40d74ef27e36e598fcfca8dc5909846.jpg>)

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/16a794411363b9e8edceccc2068b392b31660444c1c965f00b03ce3aca2263f1.jpg>)

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/b2bbf452e18fa7fba399dcf30f17c7d9b12b7f19094b813ad5ce20f79e17cdeb.jpg>)

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/39989ed50f1653c1de3bdd348e8346d3c43096cfffa74f564cc1fabc0a0ba77a.jpg>)  
图3. 基于BMF的CatBoost模型在吸附条件（A）、树脂性质（B）和PFAS结构（C）去除方面的SHAP图；短链与长链PFAS之间$N _ { \mathrm { C F } } \left( \mathrm { D } \right)$、M-PS（E）、Stirring（F）、M-PA（G）的SHAP值比较；长链（H）和短链PFAS（I）去除的SHAP图。对长链（J）和短链PFAS（K）去除起重要作用的原子基团。M-PS：聚苯乙烯基体；M-PA：聚丙烯酸基体；M-PMA-DVB：聚甲基丙烯酸酯-DVB基体；M-PMA：聚甲基丙烯酸酯基体；MD：平均直径；F Quarter：季胺；F-Complex：复合胺；F-Tertiary：叔胺；F-Polyamine：多胺；F-Sulfonic：磺酸；C\_time：接触时间；Tem：温度；Ground：地下水；DI：去离子水

六组输入条件下实验[[去除率]]的变化如下：$\mathrm { O A - 1 } < \mathrm { O A - 2 } < \mathrm { O A - 3 } ,$和$\mathrm { O S - 1 } < \mathrm { O S - 2 } < \mathrm { O S - 3 }$（图S4）。这一观察到的模式与模型预测响应值的预期趋势一致。此外，图2C揭示了预测去除率与实验去除率之间[[PFOA]]和[[PFOS]]的平均标准差仅存在0.043的微小差异，这表明模型具有优异的拟合效果。在下一节中，利用所建立的[[CatBoost]]模型识别影响[[全氟和多氟烷基物质|PFAS]]去除的主要特征。

3.3. [[离子交换树脂|树脂]]性质、[[全氟和多氟烷基物质|PFAS]]结构和操作条件对[[去除率]]的重要性及其相互作用的[[机器学习]]模型分析。3.3.1. 关键特征对树脂去除PFAS的影响。图S5确定了影响PFAS去除的前20个最重要特征，其中包括五个与PFAS结构相关的特征$( N _ { \mathrm { C F } } ,$和四个[[Morgan指纹]]：fp\_772、fp\_39、fp\_706、fp\_281），五个树脂性质特征（M\_PS：[[聚苯乙烯]]基体、$\overline { { \mathrm { F } } } _ { - }$\_Quater：[[季胺]]、MD：平均直径、M\_PA：[[聚丙烯酸]]基体、F\_Complex：[[复合胺]]），以及十个[[吸附]]条件特征$( M _ { \mathrm { r e s i n } } , \bar { \mathrm { ~ C ~ } } _ { - }$\_time、$C _ { 0 } ,$ Stirring、pH、$C _ { \mathrm { D O C } } ,$ Tem、Ground：[[地下水]]、[[去离子水|DI]]：去离子水和[[湖水|Lake]]：湖水）。这凸显了PFAS去除中相互作用的复杂性。

在主要[[吸附]]条件中（图3A），$M _ { \mathrm { r e s i n } }$和C\_time（[[平均绝对Shapley值]][MAS]分别为10.7和8.3）与[[去除率]]呈正相关，因为增加[[树脂投加量]]和[[接触时间]]可提供更多吸附位点，从而提高去除率。然而，增加$C _ { 0 }$（MAS 4.8）和Stirring（MAS 3.3）会降低去除率。随着$C _ { 0 }$的增加，[[全氟和多氟烷基物质|PFAS]]在[[离子交换树脂|树脂]]上的吸附从[[液膜扩散]]控制转变为[[颗粒内孔扩散]]控制。<sup>42</sup>当$C _ { 0 }$处于[[临界胶束浓度]]的0.001至0.01倍之间时，吸附剂表面的多层结构（例如[[半胶束]]、[[吸附胶束]]）会阻碍向内部孔隙的扩散，从而降低吸附容量。<sup>43</sup>过度搅拌也可能通过引起吸附剂运动和堵塞而阻碍去除。$C _ { \mathrm { D O C } }$（MAS 2.0）与PFAS竞争[[离子交换]]位点，<sup>44</sup>从而降低去除率，而较低的pH（MAS 1.8）则通过减少[[静电相互作用]]来提高去除率。<sup>45</sup>

[[离子交换树脂|树脂]]上胺官能团的取代，从[[伯胺]]到[[季铵]]，决定了去除过程的 pH 依赖性。<sup>46,47</sup> 图 3B 表明，具有[[季胺]]基团的树脂（[[平均绝对Shapley值|MAS]] 1.9）表现出最高的 [[去除率|RE]]，因为它们不依赖[[质子化]]来携带正电荷，且与 $\mathrm { p H . } ^ { 4 7 }$ 无关。相比之下，含有复合氨基的树脂可能随 pH 升高而发生[[去质子化]]，从而影响[[吸附]]行为。<sup>48</sup> [[聚苯乙烯]]树脂（MAS 2.6）的[[疏水效应]]使其 RE 高于[[聚丙烯酸树脂]]（MAS 1.7），因为[[聚苯乙烯基树脂|聚苯乙烯]]的结构促进了与 [[全氟和多氟烷基物质|PFAS]] 更好的[[疏水相互作用]]。<sup>49</sup>

[[离子交换树脂|树脂]]颗粒直径（[[平均绝对Shapley值|MAS]] 1.8）也影响 [[全氟和多氟烷基物质|PFAS]] [[吸附]]，较大颗粒与较慢的[[吸附动力学]]相关。<sup>50</sup> 图 3C 说明，$N _ { \mathrm { C F } }$（MAS 5.1）代表 PFAS 的[[氟化尾链]]，在 [[去除率|RE]] 中起关键作用，因为更长的[[全氟烷基链]]增强了[[疏水性]]和 PFAS-树脂相互作用。<sup>51,52</sup>

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/bfdee45be94b0a79a4e492a03257824255ecc6a742132f911b35ccf782363148.jpg>)  
C

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/f7dea3c5b35c10738ced3e0cbf9ff52d3df77803b177a66fc11c6ab5c6f44125.jpg>)

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/393d7953de19e188a7ae39125805bba5099f5d6fdaeda2669063674453f9011c.jpg>)

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/6cd4d1029f0cab6659d5df3b2e88287cb706d489a03bb94d0ce79ed867dc6952.jpg>)

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/c48f705b8158b82ce9f9d5fd6c9aae58f445cb3eb5c4ac1fa03888aeae689ef9.jpg>)  
图 4. 基于 BMF 的 CatBoost 模型对 PFAS $N _ { \mathrm { C F } }$（A）和树脂性质（B）的单因素 SHAP 图。特征交互对 RE 的同时影响：$N _ { \mathrm { C F } }$ 与聚苯乙烯（C）、季胺（D）以及树脂平均直径（E）

3.3.2. [[全氟和多氟烷基物质|PFAS]] $N _ { C F }$ 与[[离子交换树脂|树脂]]性质之间的交互作用。树脂对 PFAS 的去除涉及带电 PFAS 头基与树脂之间的[[静电相互作用]]，以及树脂聚合物骨架与 PFAS $N _ { \mathrm { C F } } . ^ { 5 3 }$ 之间的[[疏水相互作用]]。PFAS 中更长的 C−F 链 $\left( N _ { \mathrm { C F } } > 6 \right)$ 表现出更低的溶解度和更高的[[疏水性]]，因此与短链 $\mathrm { P F A S . } ^ { 4 6 }$ 相比，长链 PFAS 的去除更为有效。[[SHAP]] 值的比较（图 3D−G 和 S6）显示，长链和短链 PFAS 去除中特征重要性的趋势相似，但幅度不同。

对于短链 [[全氟和多氟烷基物质|PFAS]]，[[聚丙烯酸树脂]]的重要性（[[平均绝对Shapley值|MAS]] = 1.9）高于其对长链 PFAS 的重要性（MAS = 1.4），这可能是由于其亲水性及对短链 PFAS 的亲和力（图 3H,I）。[[聚苯乙烯]][[离子交换树脂|树脂]]对长链 PFAS 更有效，但受到[[尺寸排阻效应]]的限制，该效应阻碍较大的 PFAS 分子接近交换位点。<sup>10</sup> 在[[竞争吸附]]中，具有更强疏水特性的长链 PFAS 更容易受到 [[溶解性有机碳|DOC]] 的竞争，因为[[疏水相互作用]]有助于树脂去除 DOC。<sup>37</sup> 对于结构较小的短链 PFAS，其面临的 DOC 竞争较少。

[[全氟和多氟烷基物质|PFAS]] 的结构变化显著影响[[吸附]]行为。关键 [[摩根指纹|MF]] 特征，包括 fp\_772（[[磺酸基]]）、fp\_39（[[羧基]]）、fp\_706（[[亚甲基]]）和 fp\_281（[[羟基]]），强烈影响 [[去除率|RE]]（图 3J,K）。磺酸基和羧基因其强负电荷而增强 PFAS-[[离子交换树脂|树脂]]相互作用。<sup>54</sup> 而特定 PFAS 分子（如 [[N-AP-FHxSA]]、8:2FTS）中亚甲基 $\left( - \mathrm { C H } _ { 2 } - \right)$ 基团的独特位置可能产生[[空间位阻]]，阻碍其与树脂的相互作用，从而降低亲和力。羟基可与树脂上的氢原子结合，从而改善 PFAS 吸附。

值得注意的是，特征 $\mathrm { f p \_ 7 1 2 \left( - R _ { 4 } N ^ { + } \right) }$ 在长链 [[全氟和多氟烷基物质|PFAS]] 去除中发挥了显著作用，而特征 fp\_591（−COO<sup>−</sup>）对短链 PFAS 更为重要。氨基对较大且[[疏水性]]更强的长链 PFAS 去除产生负面影响，而短链 PFAS 中[[羧基]]的紧凑结构会导致羧基碳原子与[[离子交换树脂|树脂]]结构之间的[[空间位阻]]，从而限制有效[[吸附]]。该分析强调，在优化短链和长链化合物的 PFAS 去除时，必须综合考虑树脂性质、PFAS 结构以及环境因素。

然而，[[离子交换树脂|树脂]]在实际场景中去除 [[全氟和多氟烷基物质|PFAS]] 的效果受多种因素影响，并非由单一因素决定。为探究树脂性质与 PFAS $N _ { \mathrm { C F } }$ 对 ${ \mathrm { R E s } } ,$ 的具体影响，我们生成了单变量特征依赖图。随着 $N _ { \mathrm { C F } }$ 从 3 增加到 12，[[SHAP]] 值起初上升，在 $N _ { \mathrm { C F } } = 9$ 处达到峰值，随后下降（图 4A）。这表明树脂对 PFAS 的选择性在 $N _ { \mathrm { C F } } =$ 9 时达到最佳，此时分子尺寸与化学性质达到平衡。树脂直径对 PFAS 去除的影响可能与[[BET|比表面积]]和孔结构有关，其变化呈不规则趋势（图 S7），说明其他因素（例如树脂粒径与 PFAS 尺寸之间的相互作用）也可能发挥作用。

图 4B 显示，树脂的聚苯乙烯基体和季胺基团可显著增强 PFAS 去除效果。这一效果可归因于季胺基团提供的更强亲和力<sup>55</sup> 以及聚苯乙烯基体更高的疏水性。<sup>56</sup> 为更好地理解这些特征之间的相互作用，我们针对相关特征对构建了三维交互图（图 4C−E），并在不同俯角下绘制了投影图（图 S8）。结果表明，当 $N _ { \mathrm { C F } } ~ < ~ 7 _ { \mathrm { i } }$ 时，短链 PFAS 的 RE 明显下降，其中聚苯乙烯基体对其去除的影响最大。$N _ { \mathrm { C F } }$ 为 8 至 10 的 PFAS 具有较高的 RE 值，与图 4A 一致。

尽管揭示了这些相互作用，三维图预测的最大 [[去除率|RE]] 仅为 55%，远低于理想水平。这强调了其他因素（如水基质参数和[[吸附]]条件）的重要性。鉴于 [[全氟和多氟烷基物质|PFAS]] 化合物和[[离子交换树脂|树脂]]的多样性以及吸附条件的复杂性，通过传统实验实现最佳 RE 具有挑战性。因此，[[机器学习]]模型在基于多维特征组合预测 RE 方面具有巨大潜力，可推动 PFAS 去除领域的发展。

3.4. [[机器学习]]引导的[[离子交换树脂|树脂]]筛选与 [[全氟和多氟烷基物质|PFAS]] 去除优化。我们将代表性 PFAS 化合物（如 [[PFBS]]、[[PFOA]]、[[PFOS]]、[[GenX]]）纳入 [[BMF-CatBoost模型|BMF-CatBoost 模型]]以优化 [[去除率|RE]]。利用[[Bayesian优化|贝叶斯优化]]和关键特征的预定义范围（表 S5、S7 和文本 S7），[[Best-PFAS模型|Best-PFAS 模型]]预测了长链（[[全氟辛酸|PFOA]]、[[全氟辛烷磺酸|PFOS]]）和短链（[[全氟丁基磺酸|PFBS]]、GenX）PFAS 的最优 RE 值（图 5A）。观测到的最高 RE 分别为：PFBS 86.56%、GenX 83.73%、PFOA 96.06%、PFOS 97.16%。与 [[SHAP]] 分析一致，短链 PFAS 的 RE 通常低于长链 PFAS。[[季胺]]基团官能化的树脂表现最佳，其中[[聚丙烯酸树脂]]（[[IRA958]]）对 GenX、PFOA 和 PFOS 最优，[[聚苯乙烯]]树脂（[[D201]]）对 PFBS 最优。

实验结果验证了模型预测，所有 [[全氟和多氟烷基物质|PFAS]] 均显示出 1−10 个百分点的轻微偏差（图 5B），进一步验证了训练良好模型的准确性。然而，实际水体条件（如较低的 PFAS 浓度、竞争离子和[[天然有机质]]）可能降低 [[去除率|RE]]。利用 [[Best-PFAS模型|Best-PFAS 模型]]识别的最佳特征组合，我们在[[湖水]]中进行了实验验证，发现 [[PFBS]]、[[GenX]]、[[PFOA]] 和 [[PFOS]] 的 RE 分别为 88.32、86.76、98.77 和 98.66%（图 5C）。在湖水和[[去离子水]]中，大多数 PFAS 化合物的 RE 在实验值与模型预测值之间仅表现出极小差异。本研究的一个有趣观察是，[[全氟丁基磺酸|PFBS]] 在 [[溶解性有机碳|DOC]] 含量高达 7.6 mg/L 的湖水中 RE 显著较高，达到 88.32%，令人意外地超过了去离子水中的 72.00%。这一性能提升可归因于优化条件可能抵消了 DOC 对 PFAS 去除的抑制作用。因此，我们得出结论：由 Best-PFAS 模型推导出的用于实际水体处理的最佳特征组合具有较高的可行性和实用性。尽管如表 S2 所示，具有长链[[季胺]]基团（例如三丁胺）的[[离子交换树脂|树脂]]（如 [[PFA694E]]、[[CalRes2301]] 和 [[CalRes2304]]）在实际水体中具有最佳的 PFAS [[吸附]]性能，并广泛用于 PFAS 去除，但在本研究中将其排除的详细理由已在 Text S8 中详细说明。

为进一步优化预测，我们使用 [[Best-Resin模型|Best-Resin 模型]]对六种不同[[离子交换树脂|树脂]]（[[WA10]]、[[A111S]]、[[IRA400]]、[[IRA910]]、[[IRA958]] 和 [[D201]]）预测了短链 [[全氟和多氟烷基物质|PFAS]] 的最佳 [[去除率|RE]]。与 [[Best-PFAS模型|Best-PFAS 模型]]相比，Best-Resin 模型预测 [[PFBS]]（88.77%）和 [[GenX]]（95.30%）的 RE 有所提高。值得注意的是，一旦确定了树脂的[[平均粒径]]，[[全氟丁基磺酸|PFBS]] 和 GenX 的最优预测 RE 从 Best-PFAS 模型中的 86.56% 和 83.73% 分别提高到 Best-Resin 模型中的 88.77 和 95.30%。实验结果证实了这些预测，PFBS 的 RE 为 89.38%，GenX 为 97.87%（图 5D），证明了模型的稳健性和准确性。

A  
E  
B  
![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/77c9f248fc6be4436ed4a929539aee5267aadf49017f3b6dfa70a51be03261ba.jpg>)  
C

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/3e47599048590e89fdee75ec60bf6e2d7759cb3dcd2cc9a5b36280b2e802791a.jpg>)

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/5b63de429fd54653f5a86c24f0bb178cd28d91498a41e119c1d3984f8ce58bd7.jpg>)

D  
![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/c4a5cd6cda0a00d83a79e9f644a3d99c556458f207eb301309ada8346e356fd0.jpg>)

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/c97ab6f7b27ae921b3d781f2482bb66d1a9bc8b649de1e99a596eafb9abf62e9.jpg>)

![](<../2.SCI_MD/Data-Driven Insights into Resin Screening for Targeted Per- and Polyfluoroalkyl Substances Removal Using Machine Learning/images/bdfd1fc0ab1d17fa4126f13080a478a615139bc2c25fb368dcb3b81952acb648.jpg>)  
图 5. 基于不同模型的实验值与预测值。基于 Best-PFAS 模型对应不同 C−F 链长 PFAS 的最佳 RE 和树脂（A）；基于 Best-PFAS 模型在去离子水中的实验结果与模型预测（B）；基于 Best-PFAS 模型在湖水中的实验结果与模型预测（C）；基于 Best-Resin 模型从 WA10、A111S、IRA400、IRA910、IRA958 和 D201 中为短链 PFAS 选择的最优树脂（D）；Compared-Resin 模型中树脂性质（第 1 组：BS-1、OA-1、OS-1 和 GenX-1）与实验条件（第 2 组：BS-2、OA-2、OS-2 和 GenX-2）的重要性比较（E）；用于去除 PFBS 和 GenX 的最佳吸附剂。PS：聚苯乙烯基体；PA：聚丙烯酸基体（F）；BS-1、GenX-1、OA-1 和 OS-1 表示树脂性质与实验条件最佳组合下的 RE（第 1 组）。相比之下，BS-2、GenX-2、OA-$^ { 2 , }$ 和 OS-2 表示在最佳实验条件下 IRA67 对 PFAS 的 RE（第 2 组）。不同优化策略中实验验证的操作条件列于表 S7。

使用对比的[[离子交换树脂|树脂]]模型，我们进一步证实了树脂特性对 [[全氟和多氟烷基物质|PFAS]] 去除具有显著影响（图 5E）。经[[季铵]]基团官能化的树脂，特别是[[聚苯乙烯]]型和[[聚丙烯酸]]型，表现出更优的性能，其中第 2 组中的 BS-1、[[GenX]]-1、OA-1 和 OS-1 的[[去除率]]分别达到 88.28%、84.43%、99.96% 和 94.5%。与第 1 组相比，当强调树脂特性时，第 2 组对 [[PFBS]]、GenX、[[PFOA]] 和 [[PFOS]] 的去除率提高了 8.28−14.57 个百分点（图 5F）。这些结果突出了树脂特性在改善 PFAS 去除中的关键作用，尤其是对于短链 PFAS。引入季铵官能团可能增加了树脂的活性表面，增强了其对 PFAS 分子的亲和力，从而提高去除率。

## 4. 环境意义

传统方法（如使用[[离子交换树脂]]）由于 [[全氟和多氟烷基物质|PFAS]] 分子性质复杂且其在不同水基质中的行为多变，在优化处理过程方面面临挑战。通过采用[[机器学习]]技术来指导树脂选择与操作条件，本研究提供了一个系统且高效的框架，以强化对 PFAS 污染水的处理。

[[机器学习]]模型的使用不仅简化了原本劳动密集型的[[离子交换树脂|树脂]]筛选过程，还通过在不同环境情景下识别最佳操作条件来最大化[[去除率]]。这种方法在处理长链和短链 [[全氟和多氟烷基物质|PFAS]] 时尤其有益，因为这些化合物与不同类型的[[离子交换]]树脂表现出不同的相互作用。针对 [[PFBS]] 和 [[GenX]] 所实现的更高去除率表明，该策略具有应对新兴 PFAS 的潜力，而传统树脂处理往往难以去除这些物质。该机器学习引导方法在[[去离子水]]和天然水基质中的表现进一步验证了其实际适用性，去除率的微小变化表明其在不同环境条件下具有稳健性。在实际应用中，这种适应性对于从受控实验室实验扩展到现场实施至关重要。通过识别关键树脂特性——如官能团和聚合物基质，本研究为树脂制造商和水处理设施提供了有价值的见解。含有[[季铵]]基团和特定聚合物组成的树脂表现出增强的性能，为设计和开发更有效的处理方案提供了有针对性的路径。重要的是，本研究强调需要专门针对短链 PFAS 优化这些特征，因为短链 PFAS 在环境中的持久性及潜在健康风险正日益受到关注。

总体而言，将[[机器学习]]整合到 [[全氟和多氟烷基物质|PFAS]] 修复中，不仅推进了对[[离子交换树脂|树脂]]−PFAS 相互作用的科学理解，也为更可靠、可扩展的水处理方案铺平了道路。本研究强调了机器学习在[[环境工程]]中的变革性作用，为应对 PFAS 污染提供了通往更高效、数据驱动且具有成本效益的技术路径。

## ■ 相关内容

数据可用性声明

数据将应要求提供。

## \*sı 支持信息

支持信息可在 https://pubs.acs.org/doi/10.1021/acs.est.4c14223. 免费获取。

源数据（XLSX）

数据集的收集与构建、特征选择、模型构建数据预处理的详细描述；[[离子交换树脂|树脂]]性质；四种[[机器学习]]算法和指纹类型的性能；各机器学习算法候选超参数的范围；短链与长链[[全氟和多氟烷基物质|PFAS]]的[[SHAP]]图；$N _ { \mathrm { C F } }$与树脂性质之间的二维相互作用图、输入特征间的相关性分析、不同PFAS间的Dice相似度；预测模型的优化策略与实验验证；模型预测与实验结果的比较；基于真实水体的[[IRA958]]和[[PFA694E]]对[[PFBS]]的[[吸附]]结果（PDF）

## ■ 作者信息

## 通讯作者

[[Shifa Zhong]] − [[华东师范大学]]生态与环境科学学院，生态岛研究所，环境科学系，上海 200241，中国；orcid.org/0000-0002-5822-0837；

Email: sfzhong@des.ecnu.edu.cn

[[Jinming Luo]] − [[上海交通大学]]环境科学与工程学院，[[国家重点环境保护重点实验室|新兴污染物环境健康影响评价国家重点环境保护重点实验室]]，上海 200240，中国；orcid.org/0000-0001-8698-7624；Email: jinming.luo@sjtu.edu.cn

## 作者

[[Jing Zhang]] − [[上海交通大学]]环境科学与工程学院，[[国家重点环境保护重点实验室|新兴污染物环境健康影响评价国家重点环境保护重点实验室]]，上海 200240，中国

[[Kaixing Fu]] − [[上海交通大学]]环境科学与工程学院，[[国家重点环境保护重点实验室|新兴污染物环境健康影响评价国家重点环境保护重点实验室]]，上海 200240，中国；orcid.org/0000-0002-1649-9745

完整联系信息见：https://pubs.acs.org/10.1021/acs.est.4c14223

## 作者贡献

J.Z.：初稿撰写、方法学、调查与形式分析。K.F.：形式分析与审阅。S.Z.：形式分析、审阅、方法学与监督。J.L.：形式分析、方法学、审阅与编辑、监督。

## 注释

作者声明不存在竞争性财务利益。

## ■ 致谢

本工作得到[[国家重点研发计划]]（2022YFC3205300）和[[中国博士后科学基金]]（2023M742246）的资助。

## ■ 参考文献

(1) Post, G. B.; Louis, J. B.; Lippincott, R. L.; Procopio, N. A. Occurrence of [[全氟化合物|Perfluorinated Compounds]] in Raw Water from New Jersey Public Drinking Water Systems. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2013, 47 (23), 13266−13275.

(2) Gagliano, E.; Sgroi, M.; Falciglia, P. P.; Vagliasindi, F. G. A.; Roccaro, P. Removal of poly- and perfluoroalkyl substances ([[全氟和多氟烷基物质|PFAS]]) from water by [[吸附|adsorption]]: Role of PFAS chain length, effect of organic matter and challenges in adsorbent regeneration. [[Water Research|Water Res.]] 2020, 171, No. 115381.

(3) Zhao, Y.; Min, X.; Xu, S.; Wang, Y. [[吸附|Adsorption]] of [[全氟和多氟烷基物质|Per- and Polyfluoroalkyl Substances]] (PFAS) by Aquifer Materials: The Important Role of Dolomite. [[Environmental Science & Technology Letters|Environ. Sci. Technol. Lett.]] 2023, 10 (10), 931−936.

(4) Evich, M. $\mathrm { G } . { \mathrm { ; } }$ Davis, M. J. B.; McCord, J. P.; Acrey, B.; Awkerman, J. $\mathbf { A . } _ { \mathrm { j } }$ Knappe, D. R. U.; Lindstrom, A. B.; Speth, T. F.; Tebes-Stevens, $\mathrm { C . j }$ Strynar, M. J.; Wang, $\mathrm { Z . j }$ Weber, E. J.; Henderson, W. M.; Washington, J. W. [[全氟和多氟烷基物质|Per- and polyfluoroalkyl substances]] in the environment. [[Science]] 2022, 375 (6580), No. eabg9065.

(5) Jiang, X.; Wang, W.; Yu, G.; Deng, S. 纳米气泡对[[全氟和多氟烷基物质|PFAS]]在石墨烯及OH-和NH2-功能化石墨烯上[[吸附]]的贡献：模拟与实验结果的比较. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2021, 55 (19), 13254−13263.

(6) Wang, Z.; DeWitt, J. C.; Higgins, C. P.; Cousins, I. T. [[全氟和多氟烷基物质|全氟和多氟烷基物质（PFASs）]]的永无止境的故事？ [[Environmental Science & Technology|Environ. Sci. Technol.]] 2017, 51 (5), 2508−2518.

(7) Li, R.; Isowamwen, O. F.; Ross, K. C.; Holsen, T. M.; Thagard, S. M. [[全氟和多氟烷基物质|PFAS]]−CTAB络合作用及其在使用等离子体反应器从实验室制备水和反渗透浓水中去除PFAS中的作用. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2023, 57 (34), 12901−12910.

(8) Merino, N.; Qu, Y.; Deeb, R. A.; Hawley, E. L.; Hoffmann, M. R.; Mahendra, S. 水中全氟烷基和[[多氟烷基物质]]的降解与去除方法. [[Environmental Engineering Science|Environ. Eng. Sci.]] 2016, 33 (9), 615−649.

(9) Crone, B. C.; Speth, T. F.; Wahman, D. G.; Smith, S. J.; Abulikemu, G.; Kleiner, E. J.; Pressman, J. G. 水源水中[[全氟和多氟烷基物质]]（PFAS）的存在及其在饮用水中的处理. [[Critical Reviews in Environmental Science and Technology|Crit. Rev. Environ. Sci. Technol.]] 2019, 49 (24), 2359−2396.

(10) Boyer, T. H.; Singer, P. C. [[离子交换]]去除天然有机物的化学计量学. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2008, 42 (2), 608−613.

(11) Fang, Y.; Ellis, A.; Choi, Y. J.; Boyer, T. H.; Higgins, C. P.; Schaefer, C. E.; Strathmann, T. J. 使用[[离子交换]]和[[非离子树脂]]去除[[水成膜泡沫|水成膜泡沫（AFFF）]]中的[[全氟和多氟烷基物质|全氟和多氟烷基物质（PFASs）]]. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2021, 55 (8), 5001−5011.

(12) McCleaf, P.; Englund, S.; O<sup>̈</sup> stlund, A.; Lindegren, K.; Wiberg, K.; Ahrens, L. 使用[[颗粒活性炭|颗粒活性炭（GAC）]]和[[阴离子交换|阴离子交换（AE）]]柱试验去除饮用水中多种[[全氟和多氟烷基物质|多氟和全氟烷基物质]]（PFASs）的效率. [[Water Research|Water Res.]] 2017, 120, 77−87.

(13) Rahman, M. F.; Peldszus, S.; Anderson, W. B. 全氟烷基和[[多氟烷基物质]]（[[全氟和多氟烷基物质|PFASs]]）在[[饮用水处理]]中的行为与归趋：综述. [[Water Research|Water Res.]] 2014, 50, 318−340.

(14) Ellis, A. C.; Liu, C. J.; Fang, Y.; Boyer, T. H.; Schaefer, C. E.; Higgins, C. P.; Strathmann, T. J. 再生型与新兴[[一次性阴离子交换树脂]]处理受[[全氟和多氟烷基物质|全氟和多氟烷基物质（PFASs）]]污染[[地下水]]的先导研究比较. [[Water Research|Water Res.]] 2022. 223. No. 119019.

(15) Gao, Y.; Deng, S.; Du, Z.; Liu, K.; Yu, G. [[阴离子交换树脂]]对新兴[[多氟烷基物质]][[F-53B]]和[[PFOS]]的[[吸附去除]]：比较研究. [[Journal of Hazardous Materials|J. Hazard. Mater.]] 2017, 323, 550−557.

(16) Conte, L.; Falletti, L.; Zaggia, A.; Milan, M. 通过[[离子交换]]和[[吸附去除]]水中的[[多氟有机微污染物]]. [[Chemical Engineering Transactions|Chem. Eng. Trans.]] 2015, 43, 2257−2262.

(17) Maimaiti, A.; Deng, S.; Meng, P.; Wang, W.; Wang, B.; Huang, J.; Wang, Y.; Yu, G. 模拟[[水成膜泡沫|AFFF]]污染[[地下水]]中[[全氟烷基物质]]在[[阴离子交换树脂]]上的[[竞争吸附]]. [[Chemical Engineering Journal|Chem. Eng. J.]] 2018, 348, 494−502.

(18) Dastgheib, S. A.; Mock, J.; Ilangovan, T.; Patterson, C. 含羧酸或[[磺酸官能团]]的短链或长链[[全氟和多氟烷基物质|PFAS]]化合物负载[[阴离子交换树脂]]在有无[[氧化钙]]条件下焚烧的[[热重分析|热重研究]]. [[Industrial & Engineering Chemistry Research|Ind. Eng. Chem. Res.]] 2021, 60 (47), 16961−16968.

(19) Yuan, X.; Li, J.; Lim, J. Y.; Zolfaghari, A.; Alessi, D. S.; Wang, Y.; Wang, X.; Ok, Y. S. [[机器学习|Machine Learning]] for [[重金属去除|Heavy Metal Removal from Water]]: Recent Advances and Challenges. [[ACS ES&T Water]] 2024, 4 (3), 820−836.

(20) Yu, S. I.; Jeon, J.; Shin, Y.-U.; Bae, H. Optimal Management Strategy for Salt [[吸附|Adsorption]] Capacity in [[机器学习|Machine Learning]]-Based [[流动电极电容去离子|Flow-Electrode Capacitive Deionization]] Process. [[ACS ES&T Engineering|ACS ES&T Eng.]] 2024, 4 (8), 1937−1947.

(21) Li, J.; Wang, J.; Mu, H.; Hu, H.; Wang, J.; Ren, H.; Wu, B. Prediction of [[吸附活性|Adsorptive Activities]] of [[金属-有机框架|MOFs]] for Pollutants in Aqueous Phase Based on [[机器学习|Machine Learning]]. [[ACS ES&T Engineering|ACS ES&T Eng.]] 2023, 3 (9), 1258−1266.

(22) Yuan, L.; Guo, H.; Li, Q.; Zhang, H.; Xu, M.; Zhang, W.; Zhang, Y.; Hua, M.; Lv, L.; Pan, B. Machine-Learning-Assisted Material Discovery of [[吡啶基聚合物|Pyridine-Based Polymers]] for Efficient Remova of [[ReO4-]]. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2024, 58 (34), 15298−15310.

(23) Raza, A.; Bardhan, S.; Xu, L.; Yamijala, S. S. R. K. C.; Lian, C.; Kwon, H.; Wong, B. M. A [[机器学习|Machine Learning]] Approach for Predicting [[脱氟|Defluorination]] of [[全氟和多氟烷基物质|Per- and Polyfluoroalkyl Substances]] (PFAS) for Their Efficient Treatment and Removal. [[Environmental Science & Technology Letters|Environ. Sci. Technol. Lett.]] 2019, 6 (10), 624−629.

(24) Kwon, H.; Ali, Z. A.; Wong, B. M. Harnessing [[半监督机器学习|Semi-Supervised Machine Learning]] to Automatically Predict [[生物活性|Bioactivities]] of [[全氟和多氟烷基物质|Per- and Polyfluoroalkyl Substances]] (PFASs). [[Environmental Science & Technology Letters|Environ. Sci. Technol. Lett.]] 2023, 10 (11), 1017−1022.

(25) Maeda, K.; Hirano, M.; Hayashi, T.; Iida, M.; Kurata, H.; Ishibashi, H. Elucidating Key Characteristics of [[全氟和多氟烷基物质|PFAS]] Binding to Human [[过氧化物酶体增殖物激活受体α|Peroxisome Proliferator-Activated Receptor Alpha]]: An [[可解释机器学习|Explainable Machine Learning]] Approach. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2024, 58 (1), 488−497.

(26) Lu, M.; Gao, F.; Tan, Y.; Yi, H.; Gui, Y.; Xu, Y.; Wang, Y.; Zhou, Y.; Tang, X.; Chen, L. Knowledge-Driven Experimental Discovery of [[Ce基复合金属氧化物|Ce-Based Metal Oxide Composites]] for [[选择性催化还原|Selective Catalytic Reduction]] of NO with NH through Interpretable [[机器学习|Machine Learning]]. [[ACS Applied Materials & Interfaces|ACS Appl. Mater. Interfaces]] 2024, 16 (3), 3593−3604.

(27) Zhu, J.-J.; Yang, M.; Ren, Z. J. [[机器学习|Machine Learning]] in Environmental Research: Common Pitfalls and Best Practices. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2023, 57 (46), 17671−17689.

(28) Zhang, S.-Z.; Jiang, H. New Perspective for the Prediction of Pollutant Removal Efficiency in [[人工湿地|Constructed Wetlands]]: Using a [[遗传算法|Genetic Algorithm]]-Assisted [[机器学习|Machine Learning]] Model. [[ACS ES&T Water]] 2024, 4 (11), 5053−5064.

(29) Zhang, J.; Fu, K.; Wang, D.; Zhou, S.; Luo, J. Refining [[水凝胶吸附剂|hydrogel-based sorbent]] design for efficient toxic metal removal using [[机器学习|machine learning]]-[[贝叶斯优化|Bayesian optimization]]. [[Journal of Hazardous Materials|J. Hazard. Mater.]] 2024, 479, No. 135688.

(30) Cao, H.; Peng, J.; Zhou, Z.; Yang, Z.; Wang, L.; Sun, Y.; Wang, Y.; Liang, Y. Investigation of the Binding Fracture of [[全氟和多氟烷基物质|PFAS]] in [[人血浆|Human Plasma]] and Underlying Mechanisms Based on [[机器学习|Machine Learning]] and [[分子动力学模拟|Molecular Dynamics Simulation]]. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2023, 57 (46), 17762−17773.

(31) Koelmel, J. P.; Kummer, M.; Chevallier, O.; Hindle, R.; Hunt, K.; Camacho, C. G.; Abril, N.; Gill, E. L.; Beecher, C. W. W.; Garrett, T. J.; Yost, R. A.; Townsend, T. G.; Klein, C.; Rennie, E. E.; Bowden, J. A.; Godri Pollitt, K. J. Expanding [[全氟和多氟烷基物质|Per- and Polyfluoroalkyl Substances]] Coverage in [[非靶向分析|Nontargeted Analysis]] Using Data-Independ ent Analysis and [[IonDecon]]. [[Journal of the American Society for Mass Spectrometry|J. Am. Soc. Mass Spectrom.]] 2023, 34 (11), 2525−2537.

(32) Jiao, E.; Larsson, P.; Wang, Q.; Zhu, Z.; Yin, D.; Kärrman, A.; van Hees, P.; Karlsson, P.; Qiu, Y.; Yeung, L. W. Y. Further Insigh into Extractable [[氟质量平衡分析|(Organo)fluorine Mass Balance Analysis]] of [[自来水|Tap Water]] from Shanghai, China. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2023, 57 (38), 14330−14339.

(33) Gauthier, J. R.; Mabury, S. A. Noise-Reduced [[定量氟核磁共振波谱|Quantitative Fluorine NMR Spectroscopy]] Reveals the Presence of Additional Per and Polyfluorinated Alkyl Substances in Environmental and Biological Samples When Compared with Routine Mass Spectrometry Methods. [[Analytical Chemistry|Anal. Chem.]] 2022, 94 (7), 3278−3286.

(34) Smeltz, M.; Wambaugh, J. F.; Wetmore, B. A. [[血浆蛋白结合|Plasma Protein Binding]] Evaluations of [[全氟和多氟烷基物质|Per- and Polyfluoroalkyl Substances]] for Category-Based [[毒代动力学评估|Toxicokinetic Assessment]]. [[Chemical Research in Toxicology|Chem. Res. Toxicol.]] 2023, 36 (6), 870−881.

(35) Park, M.; Daniels, K. D.; Wu, S.; Ziska, A. D.; Snyder, S. A. [[磁离子交换树脂|Magnetic ion-exchange (MIEX) resin]] for perfluorinated alkylsubstance ([[全氟和多氟烷基物质|PFAS]]) removal in groundwater: Roles of [[原子电荷|atomic charges]] for [[吸附|adsorption]]. [[Water Research|Water Res.]] 2020, 181, No. 115897.

(36) Chow, S. J.; Croll, H. C.; Ojeda, N.; Klamerus, J.; Capelle, R.; Oppenheimer, J.; Jacangelo, J. G.; Schwab, K. J.; Prasse, C. Comparative investigation of [[全氟和多氟烷基物质|PFAS]] [[吸附|adsorption]] onto [[活性炭|activated carbon]] and anion exchange resins during long-term operation of a [[中试处理厂|pilot treatment plant]]. [[Water Research|Water Res.]] 2022, 226, No. 119198.

(37) Boyer, T. H.; Fang, Y.; Ellis, A.; Dietz, R.; Choi, Y. J.; Schaefer, C. E.; Higgins, C. P.; Strathmann, T. J. [[阴离子交换树脂|Anion exchange resin]] removal of [[全氟和多氟烷基物质|per- and polyfluoroalkyl substances]] (PFAS) from impacted water: A critical review. [[Water Research|Water Res.]] 2021, 200, No. 117244.

(38) Zaggia, A.; Conte, L.; Falletti, L.; Fant, M.; Chiorboli, A. Use of [[强碱性阴离子交换树脂|strong anion exchange resins]] for the removal of perfluoroalkylated substances from contaminated drinking water in batch and [[连续中试设备|continuous pilot plants]]. [[Water Research|Water Res.]] 2016, 91, 137−146.

(39) Huang, W.; He, H.; Dong, B.; Chu, H.; Xu, G.; Yan, Z. Effects of macro-porous anion exchange and [[混凝处理|coagulation treatment]] on organic removal and [[膜污染|membrane fouling]] reduction in water treatment. [[脱盐|Desalination]] 2015, 355, 204−216.

(40) del Moral, L. L.; Choi, Y. J.; Boyer, T. H. Comparative removal of [[Suwannee River 天然有机质|Suwannee River natural organic matter]] and [[全氟烷基酸|perfluoroalkyl acids]] by anion exchange: Impact of [[聚合物组成|polymer composition]] and [[反离子|mobile counterion]]. [[Water Research|Water Res.]] 2020, 178, No. 115846.

(41) Gu, B.; Brown, G. M.; Bonnesen, P. V.; Liang, L.; Moyer, B. A.; Ober, R. E.; Alexandratos, S. D. Development of Novel [[双功能阴离子交换树脂|Bifunctional Anion-Exchange Resins]] with Improved Selectivity for [[高锝酸盐|Pertechnetate]] [[吸附|Sorption]] from [[污染地下水|Contaminated Groundwater]]. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2000, 34, 1075−1080.

(42) Dixit, F.; Barbeau, B.; Mostafavi, S. G.; Mohseni, M. [[PFOA]] and [[PFOS]] removal by ion exchange for [[水回用|water reuse]] and drinking applications: role of [[有机质特性|organic matter characteristics]]. Environ. Sci.: [[Water Research|Water Res.]] Technol. 2019, 5 (10), 1782−1795.

(43) Du, Z.; Deng, S.; Bei, Y.; Huang, Q.; Wang, B.; Huang, J.; Yu, G. [[吸附|Adsorption]] behavior and mechanism of [[全氟化合物|perfluorinated compounds]] on various adsorbents�A review. [[Journal of Hazardous Materials|J. Hazard. Mater.]] 2014, 274, 443− 454.

(44) Kothawala, D. N.; Köhler, S. J.; O<sup>̈</sup> stlund, A.; Wiberg, K.; Ahrens, L. Influence of [[溶解性有机质|dissolved organic matter]] concentration and composition on the removal efficiency of perfluoroalkyl substances ([[全氟和多氟烷基物质|PFASs]]) during drinking water treatment. [[Water Research|Water Res.]] 2017, 121, 320−328.

(45) Ching, C.; Klemes, M. J.; Trang, B.; Dichtel, W. R.; Helbling, D. E. [[β-环糊精聚合物|β-Cyclodextrin Polymers]] with Different [[交联剂|Cross-Linkers]] and Ion-Exchange Resins Exhibit Variable [[吸附|Adsorption]] of Anionic, Zwitterionic, and [[非离子型PFAS|Nonionic PFASs]]. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2020, 54 (19), 12693−12702.

(46) Ateia, M.; Maroli, A.; Tharayil, N.; Karanfil, T. The overlooked [[短链全氟与多氟物质|short- and ultrashort-chain poly- and perfluorinated substances]]: A review. [[Chemosphere]] 2019, 220, 866−882.

(47) Liu, K.; Zhang, S.; Hu, X.; Zhang, K.; Roy, A.; Yu, G. Understanding the [[吸附|Adsorption]] of [[PFOA]] on [[MIL-101(Cr)]]-Based [[阴离子交换金属有机框架|Anionic-Exchange Metal−Organic Frameworks]]: Comparing [[DFT]] Calculations with Aqueous Sorption Experiments. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2015, 49 (14), 8657−8665.

(48) Wang, W.; Mi, X.; Zhou, Z.; Zhou, S.; Li, C.; Hu, X.; Qi, D.; Deng, S. Novel insights into the [[竞争吸附|competitive adsorption]] behavior and mechanism of [[全氟和多氟烷基物质|per- and polyfluoroalkyl substances]] on the [[阴离子交换树脂|anionexchange resin]]. [[Journal of Colloid and Interface Science|J. Colloid Interface Sci.]] 2019, 557, 655−663.

(49) Du, Z.; Deng, S.; Chen, Y.; Wang, B.; Huang, J.; Wang, Y.; Yu, G. Removal of [[全氟羧酸|perfluorinated carboxylates]] from washing wastewater of [[全氟辛烷磺酰氟|perfluorooctanesulfonyl fluoride]] using [[活性炭|activated carbons]] and resins. [[Journal of Hazardous Materials|J. Hazard. Mater.]] 2015, 286, 136−143.

(50) Schaefer, C. E.; Nguyen, D.; Ho, P.; Im, J.; LeBlanc, A. Assessing [[快速小型柱试验|Rapid Small-Scale Column Tests]] for Treatment of [[全氟烷基酸|Perfluoroalkyl Acids]] by [[阴离子交换树脂|Anion Exchange Resin]]. [[Industrial & Engineering Chemistry Research|Ind. Eng. Chem. Res.]] 2019, 58 (22), 9701−9706.

(51) Parker, B. A.; Knappe, D. R. U.; Titaley, I. A.; Wanzek, T. A.; Field, J. A. Tools for Understanding and Predicting the Affinity of Per and Polyfluoroalkyl Substances for Anion-Exchange Sorbents. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2022, 56 (22), 15470−15477.

(52) Higgins, C. P.; Luthy, R. G. [[吸附|Sorption]] of [[全氟表面活性剂|Perfluorinated Surfactants]] on [[沉积物|Sediments]]. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2006, 40 (23), 7251− 7256.

(53) Rahman, M. F.; Anderson, W. B.; Peldszus, S.; Huck, P. M. Ion-Exchange Treatment of [[全氟羧酸|Perfluorinated Carboxylic Acids]] in Water: Comparison of [[聚苯乙烯树脂|Polystyrenic]] and [[聚丙烯酸树脂|Polyacrylic Resin]] Structures and

Impact of [[硫酸盐|Sulfate]] on Their Performance. [[ACS ES&T Water]] 2022, 2 (7), 1195−1205.

(54) Ji, W.; Xiao, L.; Ling, Y.; Ching, C.; Matsumoto, M.; Bisbey, R. P.; Helbling, D. E.; Dichtel, W. R. Removal of [[GenX]] and Perfluorinated Alkyl Substances from Water by [[胺官能化共价有机框架|Amine-Functionalized Covalent Organic Frameworks]]. [[Journal of the American Chemical Society|J. Am. Chem. Soc.]] 2018, 140 (40), 12677−12681.

(55) Ray, J. R.; Shabtai, I. A.; Teixidó, M.; Mishael, Y. G.; Sedlak, D. L. [[聚合物-粘土复合介质|Polymer-clay composite geomedia]] for [[吸附|sorptive removal]] of [[微量有机化合物|trace organic compounds]] and [[金属|metals]] in [[城市雨水径流|urban stormwater]]. [[Water Research|Water Res.]] 2019, 157, 454−462.

(56) Wang, R.; Ching, C.; Dichtel, W. R.; Helbling, D. E. Evaluating the Removal of [[全氟和多氟烷基物质|Per- and Polyfluoroalkyl Substances]] from [[污染地下水|Contaminated Groundwater]] with Different Adsorbents Using a [[可疑筛查|Suspect Screening]] Approach. [[Environmental Science & Technology Letters|Environ. Sci. Technol. Lett.]] 2020, 7 (12), 954− 960.