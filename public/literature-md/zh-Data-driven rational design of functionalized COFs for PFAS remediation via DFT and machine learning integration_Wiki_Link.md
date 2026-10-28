---
title: "zh-Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration Wiki全文"
source_markdown: "2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration.md"
cn_markdown: "2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/zh-Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration.md"
type: translated_fulltext_wiki
---
<!-- PaperMDLab-NAV:START -->
> [!info] 论文四向互链（PaperMDLab 自动维护）
> [[2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration|英文原文]] · [[2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/zh-Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration|中文译文]] · **中文全文双链（当前）** · [[4.SCI_AI_Summary/summary-zh-Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration|AI中文总结]]
<!-- PaperMDLab-NAV:END -->


# 通过 [[DFT]] 与[[机器学习]]集成实现用于 [[PFAS]] 修复的功能化 [[共价有机框架|COF]] 的数据驱动理性设计

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/55fd55afa960f7e6e73f012b4c2fa78ceca9a2f68dc561225034783ed879c71b.jpg>)

[[Ruaa Abakar]] <sup>a,1</sup>, [[Mutawakkil Isah]] <sup>a,1</sup>, [[Qazi Iqra Shafi]] <sup>a</sup>, [[Billel Salhi]] <sup>b</sup>, [[Niaz Ali Khan]] <sup>b</sup>, [[Ismail Abdulazeez]] <sup>b,\*</sup>

<sup>a</sup> 沙特阿拉伯宰赫兰 31261，法赫德国王石油矿产大学化学工程系

<sup>b</sup> 沙特阿拉伯宰赫兰 31261，法赫德国王石油矿产大学膜与水安全跨学科研究中心

## 文 章 信 息

关键词：[[PFAS]] [[共价有机框架|COF]] [[DFT]] [[机器学习]] 水修复

## 摘 要

[[全氟和多氟烷基物质]]（[[PFAS]]）是一类持久性污染物，能够抵抗传统水处理方法，引发严重的环境和健康问题。[[共价有机框架]]（COF）因其高[[孔隙率]]和可调化学性质，已成为 PFAS 修复中极具前景的材料。其中，[[AB-COF]] 尤其提供了一种稳健、合成易得且高度稳定的骨架，可用于设计面向靶向功能化和 PFAS 修复的理想 COF。然而，关于理性设计具有最优结合性能以实现高效、选择性 PFAS 去除的 COF 的研究仍然缺乏。本文提出一个集成框架，将[[DFT|密度泛函理论]]（[[密度泛函理论|DFT]]）与[[机器学习]]（ML）相结合，以加速发现用于 PFAS 去除的高性能 COF。我们系统地对功能化 AB-COF 进行了建模，并利用 DFT 导出的结构、电子和[[描述符|热力学描述符]]（包括孔拓扑、[[电离能]]、[[能隙]]和[[吸附焓]]）评估了它们与代表性 PFAS 分子的相互作用。这些特征被用于训练十四个机器学习算法，以同时进行[[回归]]和[[分类]]。为解决数据不足的问题，采用了合成[[数据增强]]，从而显著提升了预测准确性和泛化能力。结果表明，基于集成和提升的 ML 模型，尤其是 [[Extra Trees]]、[[CatBoost]] 和 [[XGBoost]]，在合成数据增强后取得了卓越的预测精度，R<sup>2</sup> 值超过 0.99，[[均方根误差|RMSE]] 低至 1.0 kJ mol<sup>−</sup> <sup>1</sup>。[[SHAP分析|SHAP 分析]]进一步揭示，[[吸附]]焓和[[吉布斯自由能]]是 PFAS 吸附量的主导预测因子，而[[孔径]]和表面积则发挥次要作用。值得注意的是，经亲水性和阴离子基团（–SO H、–PO H、–SiOH）功能化的 COF 实现了最高的 PFAS [[吸附能]]（高达约 710 kJ mol<sup>−</sup> <sup>1</sup>）。这些结果确立了一种数据驱动且物理可解释的方法，可用于设计和优化面向 PFAS 修复的高性能 COF [[吸附剂]]，并值得进一步探索。

## 1. 引言

[[PFAS]] 又称“永久化学品”，广泛用于消防泡沫、不粘涂层、纺织品和工业应用。其极高的稳定性、生物持久性和生物累积性使其普遍存在于地下水、地表水和食物链中，在全球范围内构成严重的生态和健康危害 [1,2]。仅在欧洲和英国，未来二十年的修复预计成本可能超过 1.6 万亿英镑，年均达 840 亿英镑 [3]。传统的 [[全氟和多氟烷基物质|PFAS]] 去除技术，如[[活性炭]]、[[离子交换树脂]]、[[生物炭]]、[[膜过滤]]、[[纳滤]]和[[高级氧化]]（e.

g. [[电化学氧化]]或[[低温矿化]]）所提供的解决方案不完整或成本高昂，通常受限于选择性低、运行成本高，或无法有效降解短链 [[PFAS]] [4–8]。将[[吸附]]与氧化破坏相结合的混合方法显示出前景，但大多仍处于中试或早期研究阶段 [9]。

[[共价有机框架]]（COFs）是通过[[网状化学]]合成的多孔结晶聚合物。它们具有有序的二维和三维结构、极高的[[BET|比表面积]]、可调的[[孔径]]以及在苛刻条件下的结构稳定性 [8, 10–12]。作为一类新兴的网状材料，COFs 在气体储存、催化、传感以及

表 1

水处理等多种应用中受到关注。近期综述强调，[[共价有机框架|COFs]] 因其分级[[孔隙率]]和丰富的活性位点，是高效的 [[PFAS]] [[吸附剂]] [11]。对 COFs 进行功能化，例如引入阳离子或疏水基团，可以显著增强其对 [[全氟和多氟烷基物质|PFAS]] 的亲和力。一项研究报告了一种基于紫精的 COF（[[VZ-COF]]），其具有带正电荷的基团和[[氢键]]接受基团，通过疏水、[[静电相互作用|静电]]和氢键相互作用的协同作用，显著提高了对[[全氟辛酸]]（PFOA）和[[全氟辛烷磺酸]]（[[PFOS]]）的[[吸附]]容量 [4]。此外，根据 PFAS 链长调节[[孔径]]会显著影响吸附选择性和性能 [12]。

包括[[DFT|密度泛函理论]]（[[密度泛函理论|DFT]]）和[[分子动力学]]在内的计算化学工具，对于在分子层面探究 [[PFAS]] 相互作用并指导[[吸附剂]]的理性设计具有重要价值 [13,14]。与此同时，从 [[XGBoost]] [[回归]]到[[图神经网络]]的[[机器学习]]模型已被证明能够预测[[吸附]]容量并优化材料特征空间，从而极大加快材料候选物的筛选 [15,16]。DFT 与 ML 的耦合已成为材料设计中的一种变革性方法，尤其是在基于吸附的 [[全氟和多氟烷基物质|PFAS]] 修复领域。近期综述确认，将机器学习（ML）与基于 DFT 的数据集相结合，可在 PFAS 材料发现中提供预测性能提升和机理认识 [15]。

[[Raza]] 等人报道了[[机器学习]]在 [[PFAS]] 上的首次应用，仅使用简单的化学连接性，就实现了对 C–F 键解离能的化学精度预测（≤0.70 kcal/mol）。他们的模型可在数分钟内完成训练、在数秒内完成预测，并揭示隐藏的结构趋势，为加速 [[全氟和多氟烷基物质|PFAS]] 污染物的定向脱氟和修复提供了有力框架 [17]。最近，[[Yin]] 等人引入了使用[[定量分子描述符]]（QMSA）的可解释机器学习模型，用于水中 PFAS 毒性的高通量筛选。虽然其重点在毒性而非[[吸附]]，但该工作展示了如何有效利用结构和量子衍生特征来训练稳健的预测模型，类似于面向吸附的构效关系建模 [18]。此外，[[Kumar]] 等人将 [[DFT]] 预测的拉曼光谱与无监督 ML（[[PCA]]、[[t-SNE]]）相结合，用于区分九种结构相似的 PFAS 化合物，如 [[全氟辛酸|PFOA]]、PFNA 和 PFHxS。他们获得的实验光谱与 [[密度泛函理论|DFT]] 光谱之间的 RMSD 值为 $3 . 4 { - } 8 . 6 ~ \mathrm { c m } ^ { - 1 }$，并通过 ML 聚类展示了详细的分子结构指纹识别，凸显了 DFT-ML 协同在 PFAS 识别中的作用 [13]。

基于这些认识，本研究旨在通过整合 [[DFT]] 与 [[机器学习|ML]] 框架，设计和筛选具有增强 [[PFAS]] [[吸附]]性能的功能化 [[共价有机框架|COFs]]。系统构建了十类功能化 COFs，并利用 [[密度泛函理论|DFT]] 计算了它们对六种代表性 [[全氟和多氟烷基物质|PFAS]] 分子的[[吸附能]]量。提取结构和化学[[描述符]]，训练了 14 个用于[[分类]]和[[回归]]任务的机器学习模型，从而能够准确预测吸附容量并识别最有前景的 COF 候选材料。这种数据驱动、DFT 引导的方法，为理性发现用于选择性 PFAS 修复的高性能 COF [[吸附剂]]提供了一条成本效益高且可扩展的途径。

## 2. 方法

## 2.1. 母体 [[共价有机框架|COF]] 的结构几何

本研究选用的基础结构为 [[AB-COF]]，这是一种已被充分表征的二维[[共价有机框架]]，由 1，3，5-三甲酰基苯（[[1,3,5-三甲酰基苯|TFB]]）和 1，4-苯二胺（[[1,4-苯二胺|PDA]]）单元通过[[亚胺]]（–C=N–）键交替连接而成。AB-COF 具有六边形孔道拓扑结构、高[[BET|比表面积]]以及在环境条件下良好的化学稳定性。与其他 COF 结构相比，AB-COF 因其成熟的亚胺缩合化学而具有优异的合成可控性，便于进行功能化和结构调控。此外，其二维框架在水环境中提供了足够的化学和热稳定性，使其适用于[[吸附]]应用。这些特性已在先前关于吸附和分离过程的研究中得到证实[19，20]，支持选择 AB-COF 作为本研究中系统功能化和比较分析的骨架。

## 2.2. 官能团概述

为增强 [[AB-COF]] 对[[全氟和多氟烷基物质]]（[[PFAS]]）的亲和力，在框架的反应位点引入了多种官能团。这些官能团的选择基于其与 PFAS 分子建立[[静电相互作用]]、[[氢键]]或亲氟相互作用的潜力。考虑了以下取代基：$\mathrm { - C F _ { 3 } , \ - N H _ { 2 } , \ - P O _ { 3 } H , \ - S i O H , }$ $\begin{array} { r } { - S 0 _ { 3 } \mathrm { H } , - \mathrm { B O H } , - \mathrm { C O O H } , - \mathrm { O H } } \end{array}$ 和 –SH。这些基团代表了广泛的化学特性，包括吸电子和给电子行为、酸性和碱性性质以及亲水性和亲氟倾向，并被选择用于捕捉与 PFAS 的多种相互作用机制，包括静电吸引、氢键和亲氟相互作用[21，22]。

每种功能化变体均通过将 [[AB-COF]] 连接体上的一个氢原子替换为所需基团进行建模，同时保持母体框架几何结构。随后使用所得的功能化 [[共价有机框架|AB-COFs]] 集合进行[[量子化学]]计算，以评估其物理化学性质以及对代表性 [[PFAS]] 分子的[[吸附]]行为。

## 2.3. 计算方法

所有[[量子化学]]计算均使用 [[Gaussian 16]] 软件完成 [23,24]。对所有功能化 [[AB-COF]] 单体及代表性 [[PFAS]] 分子（表 1）的几何优化均采用 [[M06]]、[[B3LYP]] 和 [[CAM-B3LYP]] 泛函，并结合 [[6-311G(d)]] 基组进行 [25–28]。为纳入溶剂效应并更好地描述水相相互作用，所有优化均采用以水为隐式溶剂的[[极化连续介质模型]]（PCM）[29]。优化使用 Gaussian 16 的标准收敛准则。[[自洽场]]（SCF）收敛阈值设定为 $1 0 ^ { - 6 }$

所选 [[PFAS]] 分子的物理化学性质。

<table><tr><td>PFAS</td><td>名称</td><td>分子量（g/mol）</td><td>25 °C 水溶性（mg/L）</td><td>pKa</td></tr><tr><td><img src="../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/bb61528a059c4041d35391eb9e4d4c6b643f07edba01946f562a2daad173b639.jpg"/></td><td>全氟辛酸（PFOA）</td><td>414.07</td><td>~9500</td><td>~0</td></tr><tr><td><img src="../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/e626eeef72899bddb10b49541ad8084d84562864bdc8a8633c487f12d47bceac.jpg"/></td><td>全氟辛烷磺酸盐（PFOS）</td><td>500.13</td><td>~680</td><td>&lt;0</td></tr><tr><td><img src="../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/66dc5d2b7be75f034f8e0366b35763aa5dcd8b7f2dc47c70045d78c0a6775f44.jpg"/></td><td>全氟辛烷磺酰胺（PFOSA）</td><td>499.14</td><td>~570</td><td>N.A.</td></tr><tr><td><img src="../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/b0a888a2d802820bbd75a837af2d9b2ea0efcc1caed17bd40b59148b79c32c46.jpg"/></td><td>全氟丁酸（PFBA）</td><td>214.04</td><td>~340</td><td>0.08</td></tr><tr><td><img src="../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/d68d1f0ba2fc48bad50cbe7251bf1e7726ee7901134b1217ce50a7993b0d12af.jpg"/></td><td>全氟丁烷磺酸盐（PFBS）</td><td>300.10</td><td>540 – 570</td><td> $\ll 0$ </td></tr><tr><td><img src="../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/736eed4d164e19b4aa1fc19b745d75464920ad5d2020e73db2ce954ec6faa13e.jpg"/></td><td>全氟乙基环己烷磺酸盐（PFECHS）</td><td>462.13</td><td>N.A.</td><td>N.A.</td></tr></table>

Hartree 用于能量，$1 0 ^ { - 8 }$ 用于均方根（RMS）密度矩阵，${ { 1 0 } ^ { - 6 } }$ 用于最大密度矩阵。使用默认的力和位移阈值实现收敛，同时进行频率计算以确认所有优化结构均对应于势能面上的真正极小值。[[共价有机框架|COF]] 结构在单体水平上进行表示，以便对多种功能化体系进行高效计算筛选。该方法着重捕捉官能团与 [[PFAS]] 分子之间的局部相互作用，而这些相互作用是[[吸附]]行为的主要贡献因素。尽管周期性模型可能更好地代表[[长程有序性]]和[[孔道限域]]效应，但本方法旨在识别不同官能团之间的相对趋势。几何优化完成后，在三种理论水平上计算了功能化变体 COF 的[[形成能]]。从优化结构中提取了关键[[描述符|电子描述符]]，包括[[电离能]]（IE）、[[电子亲和势]]（EA）、最高占据分子轨道–最低未占据分子轨道（[[HOMO-LUMO]]）[[能隙]]（ΔE）、[[偶极矩]]（DM）和[[全局硬度]]（η）。生成[[静电势]]（ESP）图以定性可视化电荷分布并预测相互作用热点。孔性质，包括[[可及表面积]]（ASA）、[[孔径]]（PS）和[[可及孔体积]]（[[孔体积|APV]]），使用 [[Materials Studio]] 的 [[Zeo++]] 插件以 1.82 Å 的氮气探针计算 [30]。

[[吸附]]配合物最初是通过将优化后的 [[PFAS]] 分子手动放置在 [[共价有机框架|COF]] 单体中相关官能团附近来构建的，以确保具有物理意义的起始取向。为了改善构象采样，通过改变 [[全氟和多氟烷基物质|PFAS]] 分子的位置和取向，包括不同的头基排列和相互作用位点，为每个 COF–PFAS 对生成了多个初始几何结构。随后，所有构型均使用相同的 [[DFT]] 协议进行优化，并选择能量最低的构型作为代表性吸附配合物用于进一步分析。

[[吸附能]] $\mathrm { ( E _ { a d s } ) }$ 按下式计算：

$$
E _ {a d s} = E _ {C O F + P F A S} - \left(E _ {C O F} + E _ {P F A S}\right)
$$

其中，$E _ { \mathrm { C O F + P F A S } }$ 是 [[共价有机框架|COF]]–[[PFAS]] 配合物的总能量，$E _ { \mathrm { C O F } }$ 和 $E _ { \mathrm { P F A S } }$ 分别是单独的 COF 和 [[全氟和多氟烷基物质|PFAS]] 分子的总能量。

同时，通过频率分析计算了包括[[吸附焓]]（ΔH）和[[吸附]][[吉布斯自由能]]（ΔG）在内的[[描述符|热力学描述符]]，其中纳入了零点能和 298 K 下的热校正。这些描述符随后被用作[[机器学习]]模型训练的特征。

代表性 [[共价有机框架|COF]] 和 [[PFAS]] 结构的 XYZ 坐标在补充信息中提供。此外，完整的优化结构集，包括所有 COF、[[全氟和多氟烷基物质|PFAS]] 分子和 COF–PFAS 配合物，可在开放获取仓库 http s://osf.io/w2pfq/files/osfstorage 中获取，以利于完全复现。

## 2.4. [[机器学习]]方法

## 2.4.1. 数据准备与[[描述符]]选择

本研究中使用的数据集包含 60 种独特的 [[共价有机框架|COF]] 与 [[PFAS]] 组合，其中每个条目代表一个不同的功能化 [[AB-COF]] 与六种代表性 [[全氟和多氟烷基物质|PFAS]] 化合物之一发生相互作用。对于每个 COF–PFAS 对，使用 [[DFT]] 计算了一系列物理化学[[描述符]]。这些描述符包括[[孔径]]（PS）、[[可及孔体积]]（[[孔体积|APV]]）、[[可及表面积]]（ASA）、[[能隙]]（ΔE）、[[电离能]]（IE）、电子亲和能（[[电子亲和能|EAF]]）、[[偶极矩]]（DM）和硬度（[[HOMO-LUMO 能隙|HNS]]），以及热力学相互作用能[[吸附焓]]（[[吸附能密度|EAD]]）、[[吉布斯自由能]]（GFE）和主要目标变量[[吸附能]]（AE）。表 2 提供了这些特征的详细信息，该表是通过对数据集进行统计分析获得的。描述性统计用于评估每个描述符的分布和变异性。例如，[[吸附]]能值范围为

−705.8 至 −405.8 kJ/mol，而[[偶极矩]]在 0.009 至 18.08 D 之间大幅变化，反映了不同官能团引入的多样化电子环境。这些统计结果为数据集的动态范围和集中趋势提供了见解，为稳健的模型训练奠定了基础。

## 2.4.2. 相关性见解

进行了相关性分析，以识别对 [[吸附能|AE]] 预测具有影响的输入特征，并评估变量之间的多重共线性。如相关矩阵（图 1）所示，AE 与 [[吸附能密度|EAD]] 和 [[吉布斯自由能|GFE]] 表现出极强的正相关 $( \mathbf { r } \approx 0 . 9 9 )$，表明这些变量相对于目标包含高度预测性的信息。[[孔径|PS]] 也表现出强相关 $( \mathbf { r } \approx 0 . 7 1 ) ,$，而 [[可及表面积|ASA]] 和 [[可及孔体积|APV]] 分别显示出中等关联 $( \mathbf { r } \approx 0 . 5 0$ 和 $\mathbf { r } \approx 0 . 4 5 ,$。相比之下，[[能隙|ΔE]]、[[电离能|IE]]、[[电子亲和能|EAF]]、[[HOMO-LUMO 能隙|HNS]] 和 [[偶极矩|DM]] 与 AE 的相关性较弱或可忽略不计 $( | \mathbf { r } | < 0 . 1 2 ) $，这意味着它们对预测的相关性有限。此外，该矩阵突出显示了 EAD–GFE–AE 组内以及 IE–EAF–DM 和 PS–[[孔体积|APV]]–ASA 聚类中明显的多重共线性，表明特征空间中存在冗余。

为了解决数据集规模有限（60 个样本）的问题并提高模型稳健性，采用了[[数据增强]]技术来扩展可用的训练实例。然而，仅靠数据增强并不能缓解多重共线性；因此，实施了基于正则化的算法。具体而言，采用 [[Lasso回归|Lasso 回归]]（L1 正则化）通过惩罚并收缩显著性较低和高度相关变量的系数来进行特征选择，而利用 [[Ridge回归|Ridge 回归]]（L2 正则化）来稳定模型系数，并在不直接消除变量的情况下降低对多重共线性的敏感性。此外，所有模型均采用[[五折交叉验证]]策略，以确保性能评估的可靠性、防止[[过拟合]]，并提供更具泛化性的预测精度评估。这种将基于相关性的特征评估、数据增强、[[Lasso 回归|Lasso]] 和 [[岭回归|Ridge]] 正则化以及[[交叉验证]]相结合的综合方法，同时提高了用于 [[吸附能|AE]] 估算的[[机器学习]]模型的稳定性和预测能力 [31,32]。

## 2.4.3. [[机器学习]]模型

[[吸附能]]（AE）基于一套包含十四种[[机器学习]][[回归]]模型的综合集合进行预测，这些模型涵盖不同的方法学家族，以确保稳健性和广泛的表征能力。这些模型包括线性算法、基于集成的方法、核驱动方法以及先进的[[梯度提升]]技术，能够同时捕捉线性和非线性的结构–性质关系，并在可解释性与预测精度之间保持平衡。本研究中使用的模型包括[[支持向量回归]]（[[支持向量机|SVR]] 和 Nu-SVR）[33]、[[随机森林回归器]]（[[随机森林|RFR]]）[34]、[[极端随机树回归器]]（[[极端随机树|ETR]]）[35]、[[XGBoost]] 回归器（[[XGBoost回归器|XGBR]]）[36]、[[CatBoost]] 回归器 [37]、[[LightGBM]] 回归器（[[LightGBM回归器|LightGBMR]]）[38]、[[基于直方图的梯度提升回归器]]（[[直方梯度提升回归器|HistGBR]]）[39]、K 近邻回归器（[[K近邻|KNN]]）[40]、[[Bayesian Ridge Regression|贝叶斯岭回归]] [41]、[[Lasso回归|Lasso 回归]] [42]、[[Ridge回归|Ridge 回归]] [43]、[[Huber回归器|Huber 回归器]] [44]、[[Theil-Sen回归器|Theil–Sen 回归器]] [45] 和 [[Passive-Aggressive回归器|Passive-Aggressive 回归器]] [46]。每种模型均使用[[五折交叉验证]]进行训练和评估，以增强泛化性能、防止[[过拟合]]，并确保在所有算法之间进行一致且可靠的比较。机器学习算法的详细信息在 S1 中列出并描述。

表 2  
用于 [[PFAS]] [[吸附]]预测的特征数据集的统计分析。

<table><tr><td></td><td>PS (nm)</td><td>APV (cm<sup>3</sup>/g)</td><td>ASA (m<sup>2</sup>/g)</td><td>ΔE (eV)</td><td>IE (eV)</td><td>EAF (eV)</td><td>DM (Debye)</td><td>HNS (eV)</td><td>EAD (kJ/mol)</td><td>GFE (kJ/mol)</td><td>AE (kJ/mol)</td></tr><tr><td>计数</td><td>60.00</td><td>60.00</td><td>60.00</td><td>60.00</td><td>60.00</td><td>60.00</td><td>60.00</td><td>60.00</td><td>60.00</td><td>60.00</td><td>60.00</td></tr><tr><td>μ</td><td>0.85</td><td>0.11</td><td>823.71</td><td>4.15</td><td>6.78</td><td>2.63</td><td>4.82</td><td>2.07</td><td>-587.18</td><td>-471.97</td><td>-485.96</td></tr><tr><td>σ</td><td>0.18</td><td>0.10</td><td>547.99</td><td>0.27</td><td>0.49</td><td>0.37</td><td>5.86</td><td>0.13</td><td>91.7944</td><td>78.22</td><td>79.93</td></tr><tr><td>Min</td><td>0.56</td><td>0.01</td><td>211.77</td><td>3.55</td><td>5.89</td><td>2.34</td><td>0.01</td><td>1.77</td><td>-836.68</td><td>-686.69</td><td>-705.81</td></tr><tr><td>Max</td><td>1.14</td><td>0.34</td><td>1982.70</td><td>4.54</td><td>7.80</td><td>3.49</td><td>18.08</td><td>2.27</td><td>-502.37</td><td>-399.88</td><td>-405.76</td></tr></table>

相关性热图  
![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/e27351ad585241f9228062a5104a8c14902a5c1fefc2ed99b028ff76369c4bef.jpg>)  
图 1. 输入特征的相关矩阵。

## 2.4.4. 用于模型可解释性的 [[SHAP分析|SHAP 分析]]

单个特征对模型预测的贡献通过 [[SHAP|Shapley 加性解释]]（[[SHAP分析|SHAP]]）进行预测。SHAP 以[[合作博弈论]]为基础，为将预测模型的输出归因于其输入特征提供了一个统一框架。它计算 [[Shapley 值]]，以量化每个特征在输入变量的所有可能子集中的边际贡献。SHAP 估计每个特征对最终模型预测的贡献和影响。这种可解释性技术能够详细理解[[能隙]]、[[孔体积]]或[[偶极矩]]等[[描述符]]如何影响[[吸附能]]预测。其解释力增强了[[机器学习]]模型的透明度，并支持基于信息的材料设计决策 [47]。

## 2.4.5. 模型选择、训练与评估

为解决 [[吸附能|AE]] 值中潜在的[[类别不平衡]]问题，训练数据集被分层划分为三个区间：低 AE（<−600）、中 AE（−600 至 −500）和高 AE（≥−500）。采用[[自助法重采样]]以平衡这些类别，生成一个结合原始样本与合成增广样本的平衡数据集 [48]。为保持数据完整性，结构标识符通过基于[[欧氏距离]]计算的[[最近邻匹配]]重新分配给合成数据。数据集被划分为三个基于 AE 的质量类别：较高质量、中等质量和较低质量，由分位数阈值（33% 和 67%）定义。训练了 [[随机森林|RF 分类器]]、[[XGBoost|XGBoost 分类器]]、[[LightGBM]]、[[梯度提升|Gradient Boosting]]、[[CatBoost]]、[[Extra Trees|Extra trees]]、[[K近邻|K-NN]] 和[[支持向量机]]，以使用 80-20 [[分层采样|分层抽样]]的训练-测试划分来预测 AE 质量类别，每个模型在训练集上通过分层 [[交叉验证|5 折交叉验证]]（CV）进行评估，然后在保留的 20% 上进行测试。模型性能通过交叉验证、[[准确率]]、[[精确率]]、[[召回率]]、[[F1 分数]]和[[混淆矩阵]]进行评估，并通过 [[PCA]] 和 K-NN 决策边界进行可视化，以实现直观的可解释性。

在完成[[分类]]之后，使用一组全面的[[回归]]模型对 [[吸附能|AE]] 进行连续预测，包括 [[支持向量回归|SVR]]、[[支持向量机|Nu SVR]]、[[极端随机树|Extra Trees Regressor]]（[[极端随机树回归器|ETR]]）、[[随机森林|RFR]]、[[XGBoost|XGBoost Regressor]]、[[基于直方图的梯度提升回归器|HistGBR]]、[[Huber 回归|Huber Regression]]、[[岭回归|Ridge Regression]]、[[Lasso 回归|Lasso Regression]]、[[贝叶斯岭回归|Bayesian Ridge Regression]]、[[被动攻击回归|Passive-Aggressive Regression]] 和 [[Theil-Sen 回归|Theil-Sen Regression]]。输入特征使用 [[StandardScaler]] 进行归一化。模型评估包括[[交叉验证]]指标：[[均方根误差]]（RMSE）、[[平均绝对误差]]（MAE）、[[决定系数]] $( \mathrm { R } ^ { 2 } ) _ { i }$ 和[[最大误差]]。

[[SHAP分析|SHAP 分析]]用于阐明[[描述符]]对基于树的[[回归]]器（[[Extra Trees]]、[[XGBoost]]、[[基于直方图的梯度提升回归器|HistGBR]]）模型预测的影响。[[SHAP]] 为描述符重要性提供了清晰、可解释的见解，提高了模型透明度，并为优化用于 [[PFAS]] [[吸附]]的 [[共价有机框架|COFs]] 提供了依据。利用先进的可视化和诊断工具，包括实际值与预测值散点图、[[学习曲线]]和 [[Taylor 图]]，全面评估模型可靠性和预测准确性。此外，基于 [[K近邻|KNN]] 的可视化技术展示了描述符特征空间内的[[吸附能]]区域，有助于直观理解描述符之间的相互作用。将[[分类]]、回归和可解释性分析相结合的综合方法，为优化专门针对 [[全氟和多氟烷基物质|PFAS]] 有效环境修复的 COFs 材料提供了一个稳健的、数据驱动的框架。

图 2 展示了数据驱动材料发现的总体工作流程，从材料设计开始，随后是数据准备和特征工程。然后开发、评估机器学习模型，并将其应用于性质预测，以加速材料筛选和优化。

## 3. 结果与讨论

## 3.1. 结构与电子性质

[[DFT|密度泛函理论]]优化证实，尽管被化学多样性的基团取代，所有功能化 [[共价有机框架|AB-COFs]] 都保持了母体 [[AB-COF]] 特有的[[六方晶格|平面六方晶格]]（图 3）。功能基团的引入调节了局部几何结构，但核心孔拓扑结构保持不变。在 [[M06]]、[[B3LYP]] 和 [[CAM-B3LYP]] 水平计算的[[形成能]]表明，带有[[酸性官能团]] $( - S { \mathrm { O } } _ { 3 } \mathrm { H } , \ - \mathrm { P O } _ { 3 } \mathrm { H } )$ 的 COFs 表现出显著更低的总能量，这表明内部[[氢键]]和[[离域 π 体系]]带来了增强的[[热力学稳定性]] [49,50]。

图 4 和表 S1 中呈现的基础电子描述符表明，功能化后电子性质发生了显著调节。对于 –NH<sub>2</sub>（3.55 eV）和 –SH（3.95 eV）等给电子基团，HOMO-LUMO 能隙（ΔE）显著减小，表明电子柔软度和潜在电荷转移能力提高。相比之下，吸电子基团 $( - \mathrm { C F } _ { 3 } , \ - \mathrm { P O } _ { 3 } \mathrm { H } _ { 2 } )$ 导致电负性 $( \chi )$ 增加和亲电指数（ω）升高，从而增强了框架的极化率。偶极矩范围很广（0.01–18.08 D），极性酸基团 $( - S { \mathrm { O } } _ { 3 } \mathrm { H } , - \mathrm { P O } _ { 3 } \mathrm { H } _ { 2 } )$ 赋予强局域场，可能驱动与 PFAS 等极性客体分子的静电相互作用（表 S2）。

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/92d4c312db3f157282872ca1be8d975fcb4b2a0cefb83ed212aa084ebd171b23.jpg>)  
图 2. 材料设计与基于机器学习的预测流程工作流。

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/dc6be20a16912a05c5b095528607b71edfe8c543b7debf0b45aa26e541f7d04c.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/d29c006d377e4daced8da9af19a6cc0ded6a1ce1f72b47ff64cb1b5120c264a0.jpg>)

图 3. 功能化 AB-COF 的示意图，标注了相应的官能团部分及在 M06/6-311g(d)、B3LYP/6-311g(d) 和 CAM-B3LYP/6-311g(d) 理论水平下计算的形成能。  
![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/0f7791385532e21743b5602b89bc9765ba4ec9172425c0e4114729b62f5ad03a.jpg>)  
图 4. (a) AB-COF 及其功能化类似物的优化几何结构，以及 (b) 在 M06/6-311g(d) 理论水平下计算的基础电子描述符分布。

[[HOMO-LUMO]] 等值面（图 S1–S2）揭示了官能团依赖的[[轨道局域化]]特征。在 [[AB-COF]] 中，[[前沿轨道]]沿共轭骨架离域分布，而[[给电子基团|强给电子基团]] $( - \mathrm { N H } _ { 2 } , - \mathrm { S H } )$ 或[[吸电子基团]] $\left( - S { \cal O } _ { 3 } \mathrm { H } , - { \cal C } \mathrm { F } _ { 3 } \right)$ 的取代则在官能团周围引入了轨道局域化。这种空间变化可能影响[[电荷转移|主客体电荷转移]]，尤其是对缺电子 [[PFAS]] 尾部由 [[π–π 作用|π–π]] 和[[氢键作用]]驱动的相互作用 [51,52]。[[静电势|ESP 表面]]（图 5）表明，官能团显著改变了 [[共价有机框架|AB-COF]] 的[[表面电势]]。酸性取代基（–SO H、–PO H、–COOH）在孔壁周围生成了高密度正电区域，据推测这有利于与阴离子型 [[全氟和多氟烷基物质|PFAS]] 头基形成强[[静电相互作用]] [52]。相比之下，带有中性基团 $( - \mathrm { O H } , - \mathrm { B O H } )$ 的 COF 表现出相对对称且较弱的 ESP 场，这与后续[[吸附]]研究中较弱的 PFAS 亲和力一致。

功能化 [[共价有机框架|COF]] 的模拟 [[X 射线衍射]]（[[XRD]]）图谱（图 6 和图 S3）证实，结构修饰后[[结晶性|长程结晶性]]得以保持。所有 COF 均保留了对应于二维六方骨架 (100)、(110) 和 (210) 晶面的显著[[衍射峰]]，这与先前[[亚胺]]连接 COF 的实验观察一致 [53]。对于高极性取代基 $( - S { \mathrm { O } } _ { 3 } \mathrm { H } , - \mathrm { P O } _ { 3 } \mathrm { H } )$，观察到峰强度和位置的微小变化，这归因于孔壁附近的局部畸变和质量效应。值得注意的是，衍射特征保持相同，表明[[孔道对称性]]和[[长程有序性]]未受破坏。

## 3.2. [[PFAS]] [[吸附]]的热力学认识

通过[[吸附能]] $\mathrm { ( E _ { a d s } ) } _ { \mathrm { : } }$、焓 $\mathrm { ( \Delta { H _ { a d s } } ) }$ 和[[吉布斯自由能]] $\left( \Delta \mathrm { G } _ { \mathrm { a d s } } \right)$ 计算，评估了六种代表性 [[PFAS]] 分子在功能化 [[AB-COF]] 上的[[吸附]]（图 7；表 S3）。最有利的相互作用出现在 AB-SiOH 和 AB-$S { \mathrm { O } } _ { 3 } \mathrm { H } ,$ 上，其 $\operatorname { E } _ { \operatorname { a d s } }$ 值低至 −684.5 kJ/mol（[[PFOSA]]@AB-SiOH），相应的放能 $\Delta G _ { \mathrm { a d s } }$ 为 −705.8 kJ/mol。这些数值超过了典型的物理吸附报道，表明存在以[[静电相互作用|静电]]和[[氢键]]贡献为主的强非共价结合 [54]。母体 [[共价有机框架|AB-COF]] 的结合显著较弱（−428.7 kJ/mol），凸显了定向功能化在驱动 [[全氟和多氟烷基物质|PFAS]] 吸附中的关键作用。

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/c896bea99a4272a7eb846ee39eb079cddcb7a3c3d8e3e22d8ef86afd48f539c0.jpg>)  
图 5. AB-COF 及其功能化衍生物的静电势（ESP）图，显示表面电荷分布并突出富电子/极性区域。

我们的结果表明，长链[[PFAS]]（[[PFOS]]、[[PFOSA]]）表现出比短链类似物（[[PFBA]]）更强的结合能力，这可归因于延长的氟化碳链带来的增强[[范德华相互作用]]，从而在[[共价有机框架|COF]]骨架内实现更大的表面接触和改善的[[孔道限域]]（图7d）。在功能上，具有极性酸性基团的COF记录了最高结合能力，这些基团能够同时进行[[氢键作用|双氢键]]和[[静电相互作用|静电吸引]] $\mathrm { ( - S i O H , - S O _ { 3 } H , - P O _ { 3 } H ) }$ 。相比之下，疏水性或弱极性基团如 $- \mathrm { C F } _ { 3 }$ 和–BOH在所有[[全氟和多氟烷基物质|PFAS]]分子中表现出降低的亲和力。对COF[[描述符]]和[[吸附]]数据的多变量比较表明，强吸附与具有更高[[偶极矩]]、更低[[能隙|ΔE]]和更多酸性表面官能团（SO H、SiOH）的COF相关。这些性质共同增强了静电相互作用、供体–受体轨道重叠以及限域诱导的PFAS客体稳定化。这些发现为针对[[新兴污染物]]高效去除而定制的COF提供了理性设计标准。

## 3.3. [[机器学习]]分析与预测

## 3.3.1. [[分类]]模型

表S4总结了所有八个模型的超参数网格、最优配置和[[分类]]性能指标（测试[[F1 分数|F1-macro]]和[[交叉验证|CV]] [[宏观F1分数|F1-macro]]）。基于集成和提升的方法实现了接近完美的宏F1（0.986–1.000），而[[K近邻|K-NN]]表现出相对较低的性能（0.912）。所有模型的[[混淆矩阵]]如图8和图S4所示。具体而言，图S4展示了[[梯度提升]]、K近邻、[[支持向量机|支持向量分类器]]和[[CatBoost]]的性能，而图8描绘了额外树、[[XGBoost]]、[[随机森林]]和[[LightGBM]]的性能。这些可视化结果佐证了定量结果，揭示了集成方法之间一致的准确性以及[[K近邻回归器|KNN]]预测中明显的偏差。基于树的集成分类器如随机森林、额外树和CatBoost产生了几乎相同的混淆矩阵，正确分类了Higher-[[吸附能|AE]]和Lower-AE类别的所有实例（分别为29/29和25/25），在Medium-AE类别中仅观察到一次误分类（21/22）。类似地，XGBoost、LightGBM、梯度提升和支持向量分类器（线性核）在全部三个类别中实现了完美分类（29/29、25/25和22/22），对应测试F1-macro分数为1.000。这些模型还表现出较高的交叉验证一致性性能，F1-macro分数范围为0.971至0.980。相比之下，K近邻分类器表现出相对较弱的泛化能力，特别是在Medium-AE类别中（14/22），导致测试F1-macro分数降至0.912，并在所有评估模型中获得最低的交叉验证F1-macro（0.941 ± 0.038）。总体而言，这些结果证实了集成和提升算法在[[吸附]]能类别建模中具有优越的预测能力和稳健性，支持将其选择用于后续可解释性分析。

这些发现意味着集成和提升方法具有稳健性、泛化性，并适用于后续可解释性分析，特别是在多[[分类]]和潜在不平衡场景中。这些结果与近期文献一致，表明将数据重采样与集成学习相结合可改善小样本、多分类和不平衡数据集中的预测性能 [55, 56]。

## 3.3.2. [[回归]]模型

评估了十四种[[回归]]算法，分别使用原始数据集和[[数据增强|增强数据集]]预测[[吸附能]]。原始数据集包含60个样本，而增强数据集的生成旨在提升模型泛化能力并缓解数据稀缺问题。在建模之前，所有输入特征均被标准化，除[[Bayesian Ridge Regression|贝叶斯岭回归]]和[[Theil-Sen 回归|TheilSen]]回归器外，所有算法均通过5折[[GridSearchCV]]进行了系统性超参数优化（表S5）。[[贝叶斯岭回归]]通过[[经验贝叶斯]]方法自动估计其正则化参数，而TheilSen则基于成对样本斜率的中位数计算稳健斜率估计，因此无需超参数调优。

图9及表S6–S7总结了14种算法在两个数据集上预测PFAS在COFs上吸附能的对比性能。模型在原始数据集上的表现总体较为有限。$\bar { \mathsf { R } } ^ { 2 }$值差异较大，最低为HistGradientBoosting记录的−0.17，最高为CatBoost达到的0.63。此外，所有模型的均方根误差（RMSE）均超过17 kJ/mol，表明预测存在显著偏差。基于核方法的模型（SVR、NuSVR）以及线性回归技术（Ridge、Lasso、Passive Aggressive）面临较大挑战，其$\mathrm { R } ^ { 2 }$值低于0.51。相比之下，基于树的集成方法（如Extra Trees和Random Forest）以及XGBoost和LightGBM等提升算法仅表现出略微更好的性能，其$\mathrm { R } ^ { 2 }$值大约在0.22至0.31之间。数据增强流程的应用显著提升了模型性能。

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/3cd24c1a86950733d208f937178ae20890c2afaf8eedee15b296555856f18fd2.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/f8d1a273f0d12d98176ec75fdb7725717d782c1e9e820ff334a4d87a29cf6c9a.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/25a6b792f7751bc34a98d8fe4053eba6607575f7361c8df793f5ae1f8f4a793c.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/81e9c19665c9e6ff738cc97be03709884e746bff846729e7b46b3020177d61c3.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/adc77b28905a95d5cc9b23c4aadd4ca9467af78b6ec2ea87b24450fac078ab0f.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/601ae65c63831216277fb3bd7c6a9c55240244e81478af0de399c6ab6f6de943.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/d50c6cc7e3d9521a706a8d4502d35c0f204d6b086e12ff03ee663a5e2a8c24e7.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/6aefdfaaa68365d86bf132b7e5ad3a7b133e7b219643a154909ecfccc3e4730c.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/6a8d6b78ae8a2504ce2a34298bae62dd448af7b95ce095f2b229d60145b58842.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/bfa8df0f1c365c4dc098330aae83b664949c00a42cd035b092607e87d84cc8d4.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/eee597209db9a669e6b4b3795f7bf5e103e902a889227ddefde1773915d9e6bd.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/eb2fa223a0f78acbe48f5d495bc501ad8fb1766b65d14db8996ae4ebd8d8264e.jpg>)  
图6.（a）AB-COF，（b）AB-CF<sub>3</sub>，（c）AB-NH<sub>2</sub>，（d）AB-SO<sub>3</sub>H，（e）$\mathbf { A B { \cdot } P O _ { 3 } H } ,$和（f）AB-SiOH COFs的模拟XRD图谱。

然而，经过[[数据增强]]后，模型性能显著提升。所有优化后的模型均达到$\bar { \mathrm { R } } ^ { 2 } > 0 . 9 8$，且[[均方根误差|RMSE]]值降低了近一个数量级。例如，[[Extra Trees]]和[[Huber 回归|Huber]][[回归]]器实现了接近完美的拟合$( \mathbb { R } ^ { 2 } \approx 0 . 9 9 9$，RMSE <1 kJ/mol），而[[XGBoost]]和[[CatBoost]]超过了$\ R ^ { 2 } = 0 . 9 9 3$。这一改进可归因于合成数据的生成扩大了特征空间，并通过使模型接触到更具代表性的数据分布而减少了[[过拟合]][57]。[[Bayesian Ridge Regression|贝叶斯岭回归]]同样受益于这一扩展，由于在[[经验贝叶斯]]框架下先验估计得到加强，其达到了$\boldsymbol { \mathrm { R } } ^ { 2 } \ = \ \boldsymbol { 0 . 9 9 9 }$。即便是[[Theil-Sen 回归|TheilSen]]——一种无参数的稳健估计器——也表现出明显改善$( \mathbf { R } ^ { 2 } = 0 . 3 2 9 )$。这些发现进一步支持了以下观点：在小样本场景中，对训练集进行增强可以带来比单纯进行穷举式超参数调优更可观的性能提升。因此，在有效训练于增强数据集时，无论是复杂的集成方法还是更简单的算法，都能展现出稳健且高保真的性能[58]。

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/9ffa13a996f98e2a4ea5e92fe3ac17f55114a5963964afa63c34daf586446fda.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/4cd9f478333ff26f3a4133872438b4be356725d711b0720ef04470de018eded9.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/05bbb6a12bad10da0706257a9c6d94e218f11fcd2caf3788234eb3f099f8ba6c.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/ff3d35d48fafda8726693ed11c85443ce0e7b15768abbc982feea585b97dd6dd.jpg>)  
图7. 在M06/6-311g(d)理论水平下计算的（a）吸附能$( { \mathrm { E } } _ { \mathrm { a d s } } ) ,$，（b）焓变$\left( \Delta \mathrm { H _ { a d s } } \right) ,$，（c）吉布斯自由能变化$( \Delta \mathrm { G } _ { \mathrm { a d s } } ) ,$，以及（d）AB-COF与AB-SiOH之间的吸附能对比。

图 9 通过预测值与实际 AE 值的散点图进一步展示了这一改进。基于原始数据训练的模型表现出过拟合，在训练集上取得了较高的 $\mathrm { R } ^ { 2 }$，但在测试集上的泛化能力较弱。相反，基于增强数据集训练的模型在训练和测试中均取得了较高的 $\mathrm { R } ^ { 2 }$ 值（约 1.00），反映出增强后的泛化能力提高和方差降低。这表明，增强过程通过提高训练样本的多样性和代表性，有效缓解了过拟合，这与最近关于合成数据生成在小样本回归任务中提升预测可靠性的研究结果一致[59]。

散点图描绘了 14 个[[回归]]模型的实际与预测[[吸附能]]。原始数据图显示出显著离散和较低的 $\mathrm { R } ^ { 2 }$ 值（通常≤0.5），表明预测精度较差且泛化能力有限。相反，增强数据图则呈现出显著改善，数据点紧密聚集在理想的 45 度线附近，大多数模型的 $\mathrm { R } ^ { 2 }$ 值接近完美（约 1.00）。这一明显差异凸显了[[数据增强]]在提升模型性能和泛化能力方面的有效性。[[Theil-Sen 回归|TheilSen]] 回归器的 $\mathrm { R } ^ { 2 }$ 显著较低（0.33），仍是这一趋势中的例外，需要进一步研究。

如 ${ \mathrm { F i g . } }$ 中详细说明。S5 和表 S6–S7 显示，[[随机森林]]的性能显著提升，$\mathrm { R } ^ { 2 }$ 从 0.0275 提高到 0.9945，[[均方根误差|RMSE]] 和 [[平均绝对误差|MAE]] 分别降低了 92.4% 和 92.1%。这一改进表明，集成方法能够有效利用[[数据增强|增强数据集]]来捕捉复杂的特征-响应模式。图 S5 直观地证实了这些发现：除 [[Theil-Sen 回归|TheilSen]] 对数据扩展响应较弱外，几乎所有模型的 MAE、RMSE、[[均方误差|MSE]] 和 [[最大误差|MaxErr]] 在增强后均显著下降。总体而言，这些结果证实，数据增强不仅提高了模型的鲁棒性和泛化能力，还使简单和复杂[[回归]]器在小规模和[[类别不平衡]]数据集中均能实现高保真预测性能，这些发现与近期强调增强和集成学习在回归及小样本领域中有效性的研究一致[57,59]。为进一步评估模型的鲁棒性和潜在[[过拟合]]，对所有回归模型进行了[[学习曲线]]分析，结果见图 S6。大多数模型在训练样本量增加时，训练和验证 $\mathtt { R } ^ { 2 }$ 分数逐渐收敛，表明表现最佳模型的泛化行为稳定，而较弱模型的验证性能仍明显较低或波动较大。为进一步考察[[吸附能]]（AE）与[[描述符|热力学描述符]]（[[吸附能密度|EAD]] 和 [[吉布斯自由能|GFE]]）之间强相关可能引起的潜在目标泄漏，进行了[[消融研究]]，将这些特征从输入空间中剔除。仅使用结构和电子描述符重新训练模型。如图 S8 和 S9 所示，尽管大多数模型的预测精度有所下降，但下降幅度适中，模型仍保持较强的预测能力。这表明所学关系并非仅由热力学冗余驱动，而是反映了其余描述符所捕捉的有意义的结构-性质相关性。

图10展示了两个泰勒图，用于比较在原始数据集（左）和增强数据集（右）上训练的十四种回归模型的预测行为。

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/d785cc836219a8bfe2824e5013b85c6a935cf1b0f37d4a45ba83c8305d931f6d.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/b4b03cd82ac463d2e4284ce9cde4dc9debd71cf9d8e3c60348d66f936689a7b8.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/1e48368edf2b31fcebad94a55a6f5b15118a9158c4d4bfb52e9b6d059eb21673.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/92cbe29a10e71b38f420ab37999664c35209c7ac16b23a7c02c565d7833ae625.jpg>)  
图8. 基于集成树的分类器混淆矩阵；Extra Trees、XGBoost、Random Forest和LightGBM。

在每个图中，红色星号表示观测数据的[[标准差]]和完全相关参考点。在原始数据集上，模型点广泛分散在较大的径向距离和较大的角度间隔上，表明预测方差高、相关性弱以及中心化[[均方根误差|RMSE]]升高。尽管线性模型如[[岭回归|Ridge]]、[[Lasso 回归|Lasso]]、[[贝叶斯岭回归|Bayesian Ridge]]和[[被动攻击回归|Passive Aggressive]]相对更接近参考点，但它们仍无法捕捉观测数据的完整变异性。相比之下，[[数据增强|增强数据集]]（右图）显示几乎所有模型都明显聚集在参考点附近，表明[[相关系数]]大幅提高、预测与观测标准差趋于一致以及RMSE显著降低。这一改进印证了表格中的指标，其中Random Forest的$\mathrm { R } ^ { \bar { 2 } }$从0.03提高到0.99，RMSE从27.7 kJ/mol降至2.09 kJ/mol，同时Lasso、Bayesian Ridge和[[Extra Trees]]也获得了类似提升。[[Theil-Sen 回归|Theil–Sen]]和NuSVR在两个图中仍为[[异常值|离群点]]，反映出它们对数据增强的响应有限——这与它们较为有限的$\mathrm { R } ^ { 2 }$提升一致。总体而言，这些图的比较印证了数值结果，表明数据增强在多种算法框架下一致地提升了模型保真度和泛化能力。这一发现与此前证明[[Taylor 图|泰勒图]]可用于评估模型技能的研究相一致[60]。

图11展示了四种回归模型的SHAP蜂群图。ExtraTrees、Bayesian Ridge、Huber和Theil–Sen在增强数据集上训练，以阐明每个描述符对AE预测的贡献。每个点代表一个单独预测，其中水平位置表示SHAP值（特征对AE影响的大小和方向），颜色标尺反映特征值（红色为高，蓝色为低）。在各模型中，EAD始终是最具影响力的预测因子，较高的EAD值（红色）驱动更负的AE预测，这与PFAS分子与COF表面之间更强的结合亲和力一致。在ExtraTrees模型中，EAD和GFE占据主导地位，其SHAP值始终为正，表明吸附行为受到强烈的热力学控制。几何参数包括PS、ASA和APV也产生了明显但方向不一的效应，表明其大小不同时既可能产生位阻增强作用，也可能产生位阻抵抗作用。

对于[[Bayesian Ridge Regression|贝叶斯岭回归]]和 [[Huber 回归|Huber]] 模型，[[吸附能密度|EAD]] 和 [[吉布斯自由能|GFE]] 仍然关键，但 [[SHAP]] 分布更宽，表明更线性模型对[[异常值]]和噪声更敏感。有趣的是，[[贝叶斯岭回归]]对 [[可及孔体积|APV]] 和 [[可及表面积|ASA]] 变化表现出更强的响应，反映出[[贝叶斯正则化]]如何利用先验信息减少[[过拟合]]，同时仍然强调[[几何描述符]]。在 [[Huber回归器|Huber 回归器]]中，两个[[描述符|电子描述符]]——[[电离能]]（IE）和[[能隙]]（ΔE）——贡献中等，意味着对异常值引起的特征重要性偏移具有稳健性。相反，[[Theil-Sen 回归|Theil–Sen]] 模型表现出最大的 [[SHAP分析|SHAP]] 值离散度，由 [[孔径|PS]] 和 [[孔体积|APV]] 主导，但极性不一致，揭示了不稳定的特征–目标相互作用。这种不一致性以及广泛的 SHAP 分布，与其较弱的预测指标和非线性依赖关系适应性有限相一致。在所有模型中，[[偶极矩|DM]] 和 [[HOMO-LUMO 能隙|HNS]] 的重要性仍然较低，表明它们对 [[吸附能|AE]] 的影响极小。

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/868440cf5eb3d94e86e65bb72229f48ee6834d1bc0fd2a108cf4bea71ce3c3a5.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/7980d7b63c48e0071440c8ca9e7d7073a2eaf87066d5b7c46dec6e9825f54ba2.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/a09388077ed5b01f44c8540b3c7254cc278203e1660975629caf1ab8df54317c.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/a2676379d89cc0bf1a07569f3b2243e61cf090f0c0743a9e84d0de006dc4f965.jpg>)  
图 9. 使用原始数据集和增强数据集的训练集和测试集的模型性能。

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/8f7cde97f20d65123b6d3aa56778d3333b094433769cbedbb09fa61e4637042b.jpg>)  
图 10. 模型在原始数据集和增强数据集上性能的泰勒图。

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/bdc07f20130ad6c3559b919200227443a50ce4a73ad50ce6e2a396129e401944.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/5a030e6fb43df7be713ab1ade2055441fec12a67cb7087a5bdbacc52e6050a3b.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/04780a57dc1f46f67ee6a54dab12abdfb66697f94791146dc14c397029ecc46b.jpg>)

![](<../2.SCI_MD/Data-driven rational design of functionalized COFs for PFAS remediation via DFT and machine learning integration/images/ae6767618c7408663c10f4dcccee3a9b1b621ec39c6ebe1f53bd22ff9136b489.jpg>)  
图 11. ExtraTrees、BayesianRidge、huber 和 TheilSen 模型中特征重要性的 Shap 值。

总体而言，这些 [[SHAP分析|SHAP 分析]]证实，[[描述符|热力学描述符]]（[[吸附能密度|EAD]]、[[吉布斯自由能|GFE]]）是[[吸附能]]的主要驱动因素，而结构参数（[[孔径|PS]]、[[可及孔体积|APV]]、[[可及表面积|ASA]]）在定义[[吸附]]可及性方面发挥次要但互补的作用。在 [[ExtraTrees]] 等基于树的模型中观察到的更紧密聚类和更清晰的特征分离，凸显了它们捕捉非线性相互作用的优越能力，尤其是在[[数据增强]]丰富了训练多样性之后。这些发现与近期[[可解释人工智能]]在吸附和[[材料信息学]]中的应用一致，其中 [[SHAP]] 分析揭示吸附能量主要受热力学和孔结构特征支配 [61–63]。

## 4. 结论

本研究建立了一个稳健的计算框架，将 [[DFT]] 衍生的分子层面洞见与[[机器学习]]智能相结合，以加速发现用于 [[PFAS]] 去除的高性能[[共价有机框架]]。[[量子化学]]分析证实，[[官能化]]深刻调控 COF 的电子与[[吸附]]特性，其中酸性和阳离子取代基（–SO<sub>3</sub>H、$\mathrm { - P O _ { 3 } H , - S i O H ) }$ 通过协同的[[静电相互作用|静电]]与[[氢键]]相互作用驱动更强的 [[全氟和多氟烷基物质|PFAS]] 亲和力。基于这些[[描述符]]训练并经[[数据增强]]强化的机器学习模型，实现了近乎完美的[[回归]]和[[分类]]性能 $\begin{array} { r } { ( \mathrm { R } ^ { 2 } > 0 . 9 8 , } \end{array}$ ，[[F1 分数|F1-macro]] ≈ 1.0），验证了该方法在数据有限条件下仍具有稳健性。集成与提升算法（[[ExtraTrees]]、[[XGBoost]]、[[CatBoost]]）优于线性和基于核的方法，表明其在捕捉非线性热力学–结构关系方面具有更优能力。[[SHAP分析|SHAP 分析]]突出[[吸附焓]]和[[吉布斯自由能]]为最主要预测因子，其次是[[孔径]]和[[可及体积]]等[[几何描述符]]，从而阐明了 PFAS 吸附的热力学与结构决定因素。综合来看，这些发现表明 [[DFT–ML耦合|DFT–ML 耦合]]不仅提高了预测可靠性，还为下一代[[吸附剂]]提供了可解释的设计规则。所建立的框架可扩展至其他[[新兴污染物]]和[[多孔材料]]，为环境及能源相关应用中的[[可持续材料发现]]提供了一个可推广的蓝图。

## [[CRediT作者贡献声明|CRediT 作者贡献声明]]

[[Ruaa Abakar]]：数据管理，调查研究，初稿撰写。[[Mutawakkil Isah]]：数据管理，调查研究，初稿撰写。[[Qazi Iqra Shafi]]：数据管理，审阅与编辑。[[Billel Salhi]]：资源提供，审阅与编辑。[[Niaz Ali Khan]]：资源提供，

审阅与编辑。[[Ismail Abdulazeez]]：概念构思，方法设计，监督指导，审阅与编辑。

## [[利益竞争声明]]

作者声明，不存在可能影响本文所报告工作的已知竞争性财务利益或个人关系。

## 致谢

作者感谢 [[法赫德国王石油矿产大学|KFUPM]] [[科研院]]（DR）以及[[膜与水安全跨学科研究中心]]（IRC-MWS）为项目完成所提供的支持。

## 附录 A. [[补充数据]]

本文的[[补充数据]]可在线获取于 https://doi. org/10.1016/j.micromeso.2026.114213.

## [[数据可用性]]

数据将根据请求提供。

## References

[1] E.L. Schymanski, J. Zhang, P.A. Thiessen, P. Chirsir, T. Kondic, E.E. Bolton, Per and Polyfluoroalkyl Substances (PFAS) in PubChem: 7 million and growing, Environ. Sci. Technol. 57 (2023) 16918–16928, https://doi.org/10.1021/acs. est.3c04855.

[2] H.N. Hussain, M.I. Jilani, F. Imtiaz, T. Ahmed, M.B. Arshad, M. Mudassar, et al., Advances in the removal of Polyfluoroalkyl Substances (PFAS) from water using destructive and non-destructive methods, Green Analytical Chemistry 12 (2025) 100225, https://doi.org/10.1016/j.greeac.2025.100225.

[3] Cost to clean up toxic PFAS pollution could top £1.6tn in UK and Europe | Pfas | Guardian n.d. https://www.theguardian.com/environment/2025/jan/14/cost-c lean-up-toxic-pfas-pollution-forever-chemicals (accessed August 18, 2025).

[4] R. Li, N.N. Adarsh, H. Lu, M. Wriedt, Metal-organic frameworks as platforms for the removal of per- and polyfluoroalkyl substances from contaminated waters, Matter 5 (2022) 3161–3193, https://doi.org/10.1016/j.matt.2022.07.028.

[5] Z. Liu, M. Liao, L. Wang, S. Zhuang, Recent advancements in PFAS adsorptive removal using MOFs and COFs: a review, Rev. Environ. Sci. Biotechnol. 24 (2025) 63–95, https://doi.org/10.1007/s11157-024-09715-1.

[6] A. Zarei, L. Khazdooz, A. Zadehnazari, S. Amirjalayer, M.A. Addicoat, A. Khosropour, et al., Mechanistic study of PFAS adsorption using a QPPTA linked viologen-modified covalent organic framework, J Mater Chem A Mater 13 (2025) 8180 8192, https://doi.org/10.1039/D4TA06827K.

[7] H. Li, A.L. Junker, J. Wen, L. Ahrens, M. Sillanpa¨a, ¨ J. Tian, et al., A recent overview of per- and polyfluoroalkyl substances (PFAS) removal by functional framework materials, Chem. Eng. J. 452 (2023) 139202, https://doi.org/10.1016/j. cej.2022.139202.

[8] V.K. Sharma, X. Ma, D. Shetty, M.N. Nadagouda, Recent advances in covalent organic frameworks for PFAS removal: a comparative review on 2D and 3D architectures, Chem. Eng. J. 519 (2025) 164298, https://doi.org/10.1016/j. cej.2025.164298.

[9] E. Issaka, M. Adams, J. Baffoe, E. Danso-Boateng, L. Melville, A. Fazal, Covalent organic frameworks: a review of synthesis methods, properties and applications for per- and poly-fluoroalkyl substances removal, Clean Technol. Environ. Policy 27 (2025) 833–860, https://doi.org/10.1007/s10098-024-03102-8.

[10] W. Wang, Z. Zhou, H. Shao, S. Zhou, G. Yu, S. Deng, Cationic covalent organic framework for efficient removal of PFOA substitutes from aqueous solution, Chem. Eng. J. 412 (2021) 127509, https://doi.org/10.1016/j.cej.2020.127509.

[11] R. Singh, U.T. Uthappa, Y.-H. Ahn, S.S. Ray, Emergence of covalent organic frameworks in forever chemicals remediation: a comprehensive and multifaceted review, Inorg. Chem. Commun. 178 (2025) 114614, https://doi.org/10.1016/j. inoche.2025.114614.

[12] W. Wang, Y. Jia, S. Zhou, S. Deng, Removal of typical PFAS from water by covalent organic frameworks with different pore sizes, J. Hazard. Mater. 460 (2023) 132522, https://doi.org/10.1016/j.jhazmat.2023.132522

[13] A. Kumar, J.C. Rothstein, Y. Chen, H. Zhang, Y. Zhao, Experimental raman spectra analysis of selected PFAS compounds: Comparison with DFT predictions, J. Hazard. Mater. 494 (2025) 138704, https://doi.org/10.1016/j.jhazmat.2025.138704.

[14] B.B. de Souza, J. Meegoda, Insights into PFAS environmental fate through computational chemistry: a review, Sci. Total Environ. 926 (2024) 171738, https://doi.org/10.1016/j.scitotenv.2024.171738.

[15] M.H.-U. Rahman, R. Sikder, T.A. Tonmoy, MdM. Hossain, T. Ye, N. Aich, et al., Transforming PFAS management: a critical review of machine learning

applications for enhanced monitoring and treatment, J. Water Proc. Eng. 70 (2025) 106941, https://doi.org/10.1016/j.jwpe.2025.106941.

[16] E. Karbassiyazdi, F. Fattahi, N. Yousefi, A. Tahmassebi, A.A. Taromi, J.Z. Manzari, et al., XGBoost model as an efficient machine learning approach for PFAS removal: effects of material characteristics and operation conditions, Environ. Res. 215 (2022) 114286, https://doi.org/10.1016/j.envres.2022.114286

[17] A. Raza, S. Bardhan, L. Xu, S.S.R.K.C. Yamijala, C. Lian, H. Kwon, et al., A machine learning approach for predicting defluorination of Per- and Polyfluoroalkyl Substances (PFAS) for their efficient treatment and removal, Environ. Sci. Technol. Lett. 6 (2019) 624 629, https://doi.org/10.1021/acs.estlett.9b00476.

[18] Z. Yin, M. Zhang, R. Liu, Y. Cai, Explainable machine learning models enhance prediction of PFAS bioactivity using quantitative molecular surface analysis derived representation, Water Res. 280 (2025) 123500, https://doi.org/10.1016/j. watres.2025.123500.

[19] A.P. Cotˆ ´e, A.I. Benin, N.W. Ockwig, M. O'Keeffe, A.J. Matzger, O.M. Yaghi, Porous, crystalline, covalent organic frameworks, Science 310 (1979) 1166–1170, https:/ doi.org/10.1126/SCIENCE.1120411, 2005.

[20] S.-Y. Ding, W. Wang, Covalent organic frameworks (COFs): from design to applications, Chem. Soc. Rev. 42 (2013) 548–568, https://doi.org/10.1039/ C2CS35072F.

[21] M.A. Gatou, I.A. Vagena, N. Lagopati, N. Pippa, M. Gazouli, E.A. Pavlatou, Functional MOF-Based materials for environmental and biomedical applications: a critical review, Nanomaterials 13 (2023) 2224, https://doi.org/10.3390 NANO13152224, 2224 2023;13.

[22] Y. Qi, H. Cao, W. Pan, C. Wang, Y. Liang, The role of dissolved organic matter during Per- and Polyfluorinated Substance (PFAS) adsorption, degradation, and plant uptake: a review, J. Hazard. Mater. 436 (2022) 129139, https://doi.org/ 10.1016/j.jhazmat.2022.129139

[23] M.J. Frisch, G.W. Trucks, H.B. Schlegel, G.E. Scuseria, M.A. Robb, J.R. Cheeseman, et al., Gaussian 16, Rev. C.01, 2016.

[24] M. Doust Mohammadi, P. Parkar, A. Chaudhari, Computational insights into L cluster–based gas sensors, J. Mol. Graph. Model. 140 (2025) 109128, https://doi. org/10.1016/j.jmgm.2025.109128.

[25] Y. Zhao, D.G. Truhlar, The M06 suite of density functionals for main group thermochemistry, thermochemical kinetics, noncovalent interactions, excited states, and transition elements: two new functionals and systematic testing of four M06-class functionals and 12 other functionals, Theor. Chem. Acc. 120 (2008) 215–241, https://doi.org/10.1007/s00214-007-0310-x.

[26] A.D. Becke, Density-functional thermochemistry. III. The role of exact exchange, J. Chem. Phys. 98 (1993) 5648–5652, https://doi.org/10.1063/1.464913.

[27] T. Yanai, D.P. Tew, N.C. Handy, A new hybrid exchange–correlation functional using the Coulomb-attenuating method (CAM-B3LYP), Chem. Phys. Lett. 393 (2004) 51 57, https://doi.org/10.1016/j.cplett.2004.06.011.

[28] M. Doust Mohammadi, F. Abbas, H. Louis, Z. Zeb, I. Benjamin, Exploring the binding characteristics of phosphomolybdic acid with CH3X (X= F, Cl, and Br) via DFT calculations, J. Cluster Sci. 35 (2024) 1743–1760, https://doi.org/10.1007 s10876-024-02617-w.

[29] J. Tomasi, B. Mennucci, R. Cammi, Quantum mechanical continuum solvation models, Chem. Rev. 105 (2005) 2999–3093, https://doi.org/10.1021/CR9904009.

[30] T.F. Willems, C.H. Rycroft, M. Kazi, J.C. Meza, M. Haranczyk, Algorithms and tools for high-throughput geometry-based analysis of crystalline porous materials, Microporous Mesoporous Mater. 149 (2012) 134–141, https://doi.org/10.1016/j. micromeso.2011.08.020.

[31] H.M. Nayem, S. Aziz, B.M.G. Kibria, Evaluating estimator performance under multicollinearity: a trade-off between MSE and accuracy in logistic, lasso, elastic net, and ridge regression with varying penalty parameters, Stats (Basel) 8 (2025) 45, https://doi.org/10.3390/stats8020045.

[32] A. Mumuni, F. Mumuni, Data augmentation with automated machine learning: approaches and performance comparison with classical data augmentation methods, Knowl. Inf. Syst. 67 (2025) 4035–4085, https://doi.org/10.1007/ s10115-025-02349-x.

[33] A.J. Smola, B. Scholkopf, ¨ A tutorial on support vector regression, Stat. Comput. 14 (2004) 199–222, https://doi.org/10.1023/B:STCO.0000035301.49549.88.

[34] K. Fawagreh, M.M. Gaber, E. Elyan, Random forests: from early developments to recent advancements, Systems Science & Control Engineering 2 (2014) 602–609, https://doi.org/10.1080/21642583.2014.956265.

[35] A.A. Mir, M. Patel, F. Albalawi, M. Bajaj, M.B. Tuka, A comparative ensemble approach to bedload prediction using metaheuristic machine learning, Sci. Rep. 14 (2024) 25725, https://doi.org/10.1038/s41598-024-75118-5.

[36] T. Chen, C. Guestrin, Xgboost. Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining, ACM, New York, NY, USA, 2016, pp. 785 794, https://doi.org/10.1145/2939672.2939785.

[37] Introduction to CatBoost - GeeksforGeeks n.d. https://www.geeksforgeeks.org /machine-learning/introduction-to-catboost/. (Accessed 23 August 2025).

[38] M.R. Machado, S. Karray, I.T. de Sousa, LightGBM: an effective decision tree gradient boosting method to predict customer loyalty in the finance industry, in: 2019 14th International Conference on Computer Science Education (ICCSE), IEEE, 2019, pp. 1111–1116, https://doi.org/10.1109/ICCSE.2019.8845529.

[39] A. Guryanov, Histogram-based algorithm for building gradient boosting ensembles of piecewise linear decision trees, 39 50, https://doi.org/10.1007/978-3-030- 37334-4\_4, 2019.

[40] N.S. Altman, An introduction to kernel and nearest-neighbor nonparametric regression, Am. Stat. 46 (1992) 175 185, https://doi.org/10.1080 00031305.1992.10475879

[41] D.J.C. MacKay, Bayesian interpolation, Neural Comput. 4 (1992) 415–447, https:/ doi.org/10.1162/neco.1992.4.3.415.

[42] F. Emmert-Streib, M. Dehmer, High-dimensional LASSO-based computational regression models: regularization, shrinkage, and selection, Mach Learn Knowl Extr 1 (2019) 359–383, https://doi.org/10.3390/make1010021.

[43] M.P. Rajan, An efficient ridge regression algorithm with parameter estimation for data analysis in machine learning, SN Comput. Sci. 3 (2022) 171, https://doi.org 10.1007/s42979-022-01051-x

[44] HuberRegressor — scikit-learn 1.7.1 documentation n.d. https://scikit-learn.org /stable/modules/generated/sklearn.linear\_model.HuberRegressor.html. (Accessed 22 August 2025).

[45] H. Theil, A rank-invariant method of linear and polynomial regression analysis, 345–381, https://doi.org/10.1007/978-94-011-2546-8\_20, 1992.

[46] J. Lu, P. Zhao, S.C.H. Hoi, Online passive-aggressive active learning, Mach. Learn. 103 (2016) 141–183, https://doi.org/10.1007/s10994-016-5555-y.

[47] A.V. Ponce-Bobadilla, V. Schmitt, C.S. Maier, S. Mensing, S. Stodtmann, Practical guide to <scp>SHAP</scp> analysis: explaining supervised machine learning model predictions in drug development, Clin. Transl. Sci. 17 (2024), https://doi. org/10.1111/cts.70056.

[48] M. Carvalho, A.J. Pinho, S. Br´as, Resampling approaches to handle class imbalance: a review from a data perspective, J. Big Data 12 (2025) 71, https://doi.org/ 10.1186/s40537-025-01119-4.

[49] E. Jaime-Ad´an, S. Hern´andez-Ortega, R.A. Toscano, J.M. German-Acacio, ´ A. D. Sanchez-Pacheco, ´ M. Hernandez-Vergara, ´ et al., Competition of hydrogen bonds, halogen bonds, and π–π interactions in crystal structures. Exploring the effect of one atom substitution, Cryst. Growth Des. 24 (2024) 1888–1897, https:/ doi.org/10.1021/ACS.CGD.3C00910.

[50] M. Doust Mohammadi, H.Y. Abdullah, K.W. Qadir, A. Suvitha, Understanding the adsorption behavior of C2H3Cl on pristine, Al-, and Ga-doped boron nitride nanosheets, Comput. Theor. Chem. 1229 (2023) 114318, https://doi.org/10.1016 j.comptc.2023.114318.

[51] X. Tan, M. Sawczyk, Y. Chang, Y. Wang, A. Usman, C. Fu, et al., Revealing the molecular-level interactions between cationic fluorinated polymer sorbents and the major PFAS pollutant PFOA, Macromolecules 55 (2022) 1077 1087, https://doi. org/10.1021/ACS.MACROMOL.1C02435.

[52] A.C. Lemay, I.C. Bourg, Interactions between Per- and Polyfluoroalkyl Substances (PFAS) at the water–air interface, Environ. Sci. Technol. 59 (2025), https://doi. org/10.1021/ACS.EST.4C08285.

[53] H.L. Nguyen, Reticular design and crystal structure determination of covalent organic frameworks, Chem. Sci. 12 (2021) 8632–8647, https://doi.org/10.1039 D1SC00738F.

[54] C.R. Girish, Determination of thermodynamic parameters in adsorption studies: a review, Chem. Pap. 79 (2025) 5687–5706, https://doi.org/10.1007/s11696-025- 04218-x.

[55] L. Dube, T. Verster, Enhancing classification performance in imbalanced datasets: a comparative analysis of machine learning models, Data Science in Finance and Economics 3 (2023) 354–379, https://doi.org/10.3934/DSFE.2023021.

[56] A. Salehi, M. Khedmati, Hybrid clustering strategies for effective oversampling and undersampling in multiclass classification, Sci. Rep. 15 (2025) 3460, https://doi. org/10.1038/s41598-024-84786-2.

[57] C. Guilhaumon, N. Hasco¨et, F. Chinesta, M. Lavarde, F. Daim, Data augmentation for regression machine learning problems in high dimensions, Computation 12 (2024) 24, https://doi.org/10.3390/computation12020024.

[58] A.A. Khan, O. Chaudhari, R. Chandra, A review of ensemble learning and dat augmentation models for class imbalanced problems: combination, implementation and evaluation, Expert Syst. Appl. 244 (2024) 122778, https:// doi.org/10.1016/j.eswa.2023.122778.

[59] A. Shmuel, O. Glickman, T. Lazebnik, Data Augmentation for Deep Learning Regression Tasks by Machine Learning Models, 2025.

[60] K.E. Taylor, Summarizing multiple aspects of model performance in a single diagram, J. Geophys. Res. Atmos. 106 (2001) 7183–7192, https://doi.org/ 10.1029/2000JD900719.

[61] N. Alkhatib, S.A. Alrhman, S. Kirmizialtin, Machine learning highlights chemistry as the key factor in metal–organic frameworks for atmospheric water harvesting Mol Syst Des Eng (2025), https://doi.org/10.1039/D5ME00101C.

[62] T. Vinchurkar, J. Ock, A.B. Farimani, Explainable data-driven Modeling of Adsorption Energy in Heterogeneous Catalysis, 2024.

[63] K. Ma, Integrated hybrid modeling and SHAP (SHapley Additive exPlanations) to predict and explain the adsorption properties of thermoplastic polyurethane (TPU) porous materials, RSC Adv. 14 (2024) 10348, https://doi.org/10.1039/ D4RA00010B.