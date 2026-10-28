---
title: "zh-General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions Wiki全文"
source_markdown: "2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions.md"
cn_markdown: "2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/zh-General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions.md"
type: translated_fulltext_wiki
---
<!-- PaperMDLab-NAV:START -->
> [!info] 论文四向互链（PaperMDLab 自动维护）
> [[2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions|英文原文]] · [[2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/zh-General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions|中文译文]] · **中文全文双链（当前）** · [[4.SCI_AI_Summary/summary-zh-General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions|AI中文总结]]
<!-- PaperMDLab-NAV:END -->


# 开发[[界面调控材料]]的通用适用性：一种基于[[非共价相互作用]]的[[人工智能|人工智能驱动]]方法

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/b6a05c81fabac547645f54b7b7bc81743f8f69246ba595fd4f5cb65c7cb9da9a.jpg>)

[[He Changqing|Changqing He]] <sup>a,b</sup>, [[Xue Yang|Yang Xue]] <sup>a,b</sup>, [[Zhou Huimin|Huimin Zhou]] <sup>a,b</sup>, [[Zhang Xincheng|Xincheng Zhang]] <sup>a,b</sup>, [[Liu Xueqian|Xueqian Liu]] <sup>a,b</sup>, [[He Lin|Lin He]] <sup>a,b,\*</sup>, [[Sui Hong|Hong Sui]] <sup>a,b</sup>, [[Xu Zhenghe|Zhenghe Xu]] <sup>d,\*\*</sup>, [[Han You|You Han]] <sup>a,c,\*</sup>

<sup>a</sup> 天津大学化工学院，天津，300072，中国

<sup>b</sup> 精馏技术国家工程研究中心，天津，300072，中国

<sup>c</sup> 化学工程与低碳技术国家重点实验室，天津，300072，中国

<sup>d</sup> 深圳市材料界面科学与工程重点实验室，南方科技大学材料科学与工程系，深圳，518055，中国

## 文 章 信 息

关键词：[[界面调控]] [[分子设计]] [[人工智能]] [[非共价相互作用]] [[机器学习]] [[AI驱动的研究范式]]

## 摘 要

[[人工智能]]（AI）正在变革[[界面调控材料]]的研究范式。然而，由于界面系统的极端多变性、缺乏共享数据库以及高昂的数据标注成本，瓶颈依然存在。本研究将可重复使用的溶剂化大数据（10<sup>6</sup> 个数据点）与多种应用场景联系起来，以[[非共价相互作用]]作为有机体系内统一的基础机制。自主开发的算法（[[PDI-DMPNN]] [[SME耦合算法|SME 耦合算法]]）能够识别与目标分子产生“吸引/排斥”相互作用的子结构。这些子结构为小分子或修饰基团的理性设计奠定了基础。值得注意的是，该方法不需要任何领域特定的标注数据，并且将 10,000 个相互作用的识别从 20 天（通过高通量模拟）加速至 9 分钟。此外，将非共价相互作用原理与 AI 方法相结合，极大地提高了物理化学体系中的准确性。两个典型案例被用于验证该方法的可靠性：[[油包水乳状液]]的[[破乳]]和[[硅晶片|硅片]]上[[光刻胶]]的去除。利用所识别的[[酚基]]和[[长链醇基团]]功能化的[[破乳剂|改性破乳剂]]，将[[脱水率]]从 75.2% 提高至 95.7%。所设计的环保型试剂（[[L-肉碱]]和[[愈创木酚]]）实现了 100% 的[[光刻胶去除]]率。从根本上说，所开发的材料能够有效调控静电和[[色散相互作用]]。总之，本研究建立了一种低门槛、通用适用的方法学，用于 AI 驱动的[[界面调控]]材料开发。

## 1. 引言

[[界面调控材料]]能够精确调节气-液-固化学环境，从而实现对界面行为的定向控制。常见类型包括[[采油助剂]][1]、[[破乳剂]]、[[浮选助剂]][2]、[[吸附材料]][3]等。这些化学品对于原料收集与预处理、工业分离与纯化、工业废物管理、碳排放控制以及高端新兴领域的成功至关重要。

[[人工智能|人工智能驱动]]的（AI-driven）材料开发已显著减少了高成本的试错过程以及对主观经验的依赖[4]。开发能够将材料结构映射到目标性能的[[机器学习]]模型，需要充足且高质量的数据集。然而，化学与材料领域面临严重的数据稀缺问题[5,6]。在缺乏此类数据的情况下，过拟合容易发生，泛化性能也会下降。与其他材料领域相比，数据稀缺对[[界面调控材料]]的人工智能驱动设计而言，是一个更为关键的挑战。这一挑战源于两个关键限制：

(i) 缺乏共享数据。界面系统具有显著的可变性，这阻碍了共享、可复用数据库的建立。缺乏标准化的系统环境和测试条件，是数据集成的最大障碍。因此，建立可与生物学或晶体学数据库（如 [[Materials Project]]）[8]相比拟的数据库[7]仍然困难，从而阻碍了[[迁移学习]]技术[9,10]的应用。

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/2ccf9b1c0aa748d2030d52dc5f67b9f4e95720bfcc2a4bbb20beede3ac59f263.jpg>)  
图 1. 本研究的策略与算法。(a) 基于非共价相互作用的人工智能驱动方法原理。其目标是通过共享的微观机制实现溶剂化数据的复用。(b) 名为 PDI-DMPNN+SME 耦合方法的算法。

(ii) 数据标注困难。针对特定领域的数据标注（通过实验或模拟获取数据）成本高昂。此类系统涉及多组分之间复杂的非线性热力学相互作用[11]。这使得高通量、高精度的数据采集成本过高。

因此，缺乏系统性的数据格局使大多数[[界面调控材料]]的[[人工智能|人工智能驱动]]开发不具备成本效益。如果没有共享数据库以及减少特定领域数据标注的方法，就仍然难以开发适用于这些材料的通用方法学[12]。

引入机理知识为解决[[人工智能|人工智能驱动]]材料开发中的数据稀缺问题提供了一种方案。与依赖事后[[可解释性]][13]不同，该策略强调机理在模型架构设计中的作用。通过用基本物理化学规律约束解空间，该策略降低了数据需求，并缓解了“[[黑箱模型]]”问题。当前方法包括将特定领域机理纳入[[预训练]][14,15]、将物理化学方程[16,17]作为约束条件[18]，以及利用[[大语言模型]]进行引导式探索[19,20]。然而，此类系统的高度可变性阻碍了在宏观尺度上建立统一的机理框架。因此，机理知识方法需要针对这些特定系统进行调整。

在分子层面，多样的界面行为最终源于一组共同的[[非共价相互作用]]。在这些有机体系中，这种共性建立了一个可推广的机理原则，其运作不受宏观的、系统特定限制的影响。在这一机理基础的指导下，本研究开发了一种可复用的数据架构和一套定制的领域专用方法。除初步验证外，该方法已通过油包水（W/O）乳液[[破乳]]和[[光刻胶去除]]得到验证。因此，全面的闭环验证证实了该方法学在不同界面系统中的有效性。

## 2. 方法

## 2.1. 基于[[非共价相互作用]]的[[人工智能|AI]]驱动方法

## 2.1.1. 策略

[[非共价相互作用]]从根本上支配着多种界面现象背后的热力学。它们可分为两类：[[静电相互作用|静电相关相互作用]]（如[[氢键]]、[[卤键]]、[[阳离子-π键]]等）和[[色散相互作用|色散相关相互作用]]（色散吸引与交换排斥等）。非共价相互作用的主导地位已得到广泛证实。这些验证涵盖从经典的[[DLVO理论|Derjaguin-Landau-Verwey-Overbeek（DLVO）理论]]到现代表征工具（如[[原子力显微镜]]和[[表面力仪]]等）[21,22]。

我们的方法基于大多数[[界面调控]]过程所遵循的基本原理：[[非共价相互作用]]的重构（图1a）。这包括破坏体系内既有的非共价相互作用，并建立有利于界面调控的新非共价相互作用，从而在分子尺度上增强目标过程的[[热力学自发性]]。

溶剂化是另一类本质上由[[非共价相互作用]]支配的过程，其微观机制与界面现象相似。这使得利用溶剂与[[界面调控材料]]之间的共同数据特征成为可能。作为常用化学品，溶剂拥有完善且全面的数据库。在此基础上，大规模的[[溶剂化自由能]]数据集$( \Delta G _ { \mathbf { s o l } } )$可作为共享、可复用、可迁移的初始[[预训练]]数据来源。可设计[[机器学习]]算法，以识别在目标场景中主导“吸引/排斥”非共价相互作用的亚结构。这些亚结构将为[[界面调控]]材料的开发提供重要指导，因为重要的热力学微观过程由此得到强化。

[[非共价相互作用]]构成了共同基础。然而，溶剂化与界面行为并非完全等价，原因包括[[空间位阻]]、[[大分子缠结]]、[[各向异性]]、非均匀[[介电环境]]以及[[局部浓度效应]]。因此，本方法是对广阔化学空间进行[[高通量预筛选]]的工具。它仅输出相互作用倾向的相对排序和宽泛的强度类别，而非精确的界面能。该方法的有效性由三个层面支撑（图S1）：(i) 在热力学层面，模型捕捉亚结构与目标分子之间的固有结合势。(ii) 所识别的亚结构（如[[羟基]]和[[芳环]]）天然编码了非共价相互作用的方向性。

(iii) 在给定的[[介电环境]]中，不同官能团之间的相对亲和力排序基本得以保留。第S1.2节对溶剂化-界面区别及本方法的合理性进行了详细讨论。尽管体系不同，该方法将所需的下游计算和实验数量降低了数个数量级。这为数据稀缺的界面体系建立了一条有效且低成本的研究路径。

利用这一策略，来自 [[Vermeire]] 等人 [23] 公开发布数据库的数据构成了本研究的可复用大数据基础。在去除神经网络无法识别的化学结构后，共得到 997,682（约 10<sup>6</sup>）个数据点。由于训练数据以有机分子为主，本研究特别考察有机界面体系。

## 2.1.2. 算法架构

为识别主导的“吸引/排斥”子结构，本研究提出了一种自主开发的算法，名为 [[PDI-DMPNN]] þ [[SME]]（[[先验数据引入-定向消息传递神经网络与子结构掩码解释]]）。如图 1b 所示，该框架由两个主要部分组成：

(i) 用于预测 $\Delta G _ { \mathrm { s o l } }$ 的 [[PDI-DMPNN]]。该模块是一种[[图神经网络]]，旨在基于配对的溶剂和溶质结构预测 $\Delta G _ { \mathrm { s o l } }$。在“相似相溶”经验原则的指导下，该模型将溶质-溶剂极性差异信息（式（1））整合到 [[DMPNN]] 架构中 [23]。分子极性通过三类指标进行量化：[[分子极性指数]]、[[静电势]]（ESP）区间分布的统计数据 [24]，以及不同 ESP 区间内的[[分子表面积]]数值（第 S1.1 节）。所有极性参数均通过[[归一化|最小-最大缩放]]进行归一化，以确保特征贡献均衡。

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/e402a9c9ec9546974ea81ef8eb9dc6a1903f76fd4e5114c1acfd75506ed43af2.jpg>)  
图 2. 案例研究的应用流程。（a）W/O 乳状液破乳案例研究的工作流程。（b）硅晶圆光刻胶去除案例研究的工作流程。

$$
\text { Prior\_data } = \left| \text { Polarity\_Parameter } _ {\text { solute }} - \text { Polarity\_Parameter } _ {\text { solvent }} \right|\tag{1}
$$

模型使用标准训练协议进行训练，学习率为 $1 0 ^ { - 4 }$，训练 200 个轮次。数据被随机划分为 60% 用于训练、20% 用于验证、20% 用于测试。所有结果均来自对测试集的单次最终预测。测试集在任何中间阶段均未被访问。[[PDI-DMPNN]] 模型从化学分子结构中提取信息（隐藏维度为 1000，10 次消息传递步骤），然后预测 $\Delta G _ { \mathrm { s o l } }$ 性质（10 层，修正线性单元激活）。我们通过式（2）和式（3）中定义的[[均方根误差]]（RMSE）和 $\mathrm { R } ^ { 2 } ,$ 来评估性能。本研究在 80% 的训练-验证集内进行了完整的超参数搜索（学习率、网络层数、先验数据类别等），采用 [[交叉验证|5 折交叉验证]]和 30 个训练轮次。确定最优超参数后，再进行最多 200 个轮次的模型训练。

$$
\mathrm{RMSE} = \sqrt {\frac {1}{n} \sum_ {i = 1} ^ {n} (y _ {i} - \hat {y} _ {i}) ^ {2}}\tag{2}
$$

$$
R ^ {2} = 1 - \frac {\sum_ {i = 1} ^ {n} (y _ {i} - \widehat {y _ {i}}) ^ {2}}{\sum_ {i = 1} ^ {n} (y _ {i} - \overline {{y _ {i}}}) ^ {2}}\tag{3}
$$

(ii) 用于识别“吸引/排斥”子结构的 [[SME]]。SME 通过子结构掩蔽来量化特定子结构对 $\Delta G _ { \mathrm { s o l } }$ 预测的贡献。子结构的定义将其描述为一组结构片段，这些片段可以自由重组以组装出全新的分子。为提取子结构，本研究采用了[[BRICS碎裂方法|断裂逆合成重要化学子结构（BRICS）碎裂方法]]。这些提取出的子结构信息以索引数据的形式存储在代码中。若任一子结构被掩蔽，[[图神经网络]]中对应的输入节点（原子）和边（化学键）将被置为零 [25]。在公式 $( 4 ) , D _ { \mathrm { s u b } }$ 中，是完整溶剂分子与部分子结构被掩蔽的溶剂分子之间 $\Delta G _ { \mathrm { s o l } }$ 的差值。$N D _ { \mathrm { s u b } }$ 表示 $D _ { \mathrm { { s u b } } } \left( { \mathrm { E q . ~ } } ( 5 ) \right)$ 的[[归一化]]形式。其数值范围被缩放到 $[ - 1 , 1 ]$，保持 $D _ { \mathrm { s u b } } .$ 的符号和相对大小。

$$
D _ {\text { sub }} = \Delta G _ {\text { sol\_whole }} - \Delta G _ {\text { sol\_masked }}\tag{4}
$$

$$
\mathrm{ND} _ {\text {sub}} = \frac {\mathrm{e} ^ {\mathrm{D} _ {\text {sub}}} - \mathrm{e} ^ {- \mathrm{D} _ {\text {sub}}}}{\mathrm{e} ^ {\mathrm{D} _ {\text {sub}}} + \mathrm{e} ^ {- \mathrm{D} _ {\text {sub}}}}\tag{5}
$$

$N D _ { \mathrm { s u b } }$ 是本研究最重要的度量指标。从物理化学角度看，$\Delta G _ { \mathrm { s o l } }$ 受[[非共价相互作用]]控制。因此，子结构对 $\Delta G _ { s o l }$ 的量化贡献可作为子结构-目标分子间吸引或排斥相互作用的度量。鉴于[[溶剂化自由能]]通常为负值，负的 $N D _ { \mathrm { s u b } }$ 值表示吸引相互作用，而正值表示排斥相互作用。绝对值接近 1 表明更强的相互作用倾向。

本研究在第 3.1 节展示了该方法的准确性。第 3.1.1 节评估了改进的[[图神经网络]] [[PDI-DMPNN]] 所带来的预测精度提升。第 3.1.2 节利用[[DFT|密度泛函理论]]（[[密度泛函理论|DFT]]）计算和[[非共价相互作用分析]]验证了该方法的物理化学可靠性 [26–28]。DFT 计算使用 [[Gaussian 09]] 软件进行，[[非共价相互作用]]分析使用 [[Multiwfn|Multiwfn 3.8]] 软件进行 [29]。计算细节见第 S1.4 节。

## 2.2. 案例研究

本研究建立了面向实际应用的工作流程。该工作流程从分析微观过程以确定关键目标开始，进而指导重要子结构的设计。随后工作流程推进到完整分子或配方设计，并以闭环实验验证结束。如图 2a 和 b 所示，我们将通过两个案例研究来演示这一工作流程：[[油包水乳状液|W/O 乳液]]的[[破乳]]和[[硅晶片|硅片]]上[[光刻胶]]的去除。

## 2.2.1. [[油包水乳状液|W/O 乳液]][[破乳]]的案例研究

[[破乳剂]]通常作为[[界面调控材料]]用于石油开采和石油预处理。其目的是减轻分散水相对石油产品、设备耐腐蚀性以及石油深加工的不利影响 [30]。值得注意的是，[[沥青质]]作为重油中的[[表面活性]]组分，通过形成薄膜来稳定油水界面，阻碍[[液滴聚并]]。商用[[聚醚破乳剂]]对这些薄膜的效力往往不足，因此需要有针对性的改性。

## (i) 微观过程分析。

[[Yen-Mullins模型]][31]描述了[[沥青质]]在界面处的[[自聚集]]行为，形成纳米聚集体、团簇和[[超分子结构]]。这些膜的稳定性来源于稠合芳香环、侧链和杂原子之间的强[[非共价相互作用]]。因此，高效[[破乳]]从根本上依赖于破坏沥青质聚集体内的这些相互作用。

## （ii）子结构识别与[[分子设计]]。

为了破坏[[沥青质]]膜的稳定性，本研究识别出与关键沥青质官能团存在强相互作用的子结构。定义了三个目标沥青质片段来代表关键的[[静电势|ESP]]特征：[[亚砜-芳香]]（负ESP）、[[吡咯-芳香]]（正ESP）和中性芳香。子结构亲和力采用[[PDI-DMPNN]]+[[SME耦合算法]]进行评估。在该模型中，$N D _ { \mathrm { s u b } }$值接近−1表示相互作用更强。对具有高亲和力$( N D _ { \mathrm { s u b } } < - 0 . 7 0 0 )$的子结构进行[[富集分析]]（第S1.5节）[32]。通过将高亲和力子集与背景库（10,522个子结构）进行比较，该分析识别出显著富集的结构特征。关键特征包括特定的杂原子和官能团。随后选择含有这些富集特征的子结构用于[[破乳剂]]合成。

（iii）实验验证。

这些选定的子结构作为单体侧链，通过[[自由基共聚]]接枝到聚醚上，以制备新型高效[[破乳剂]]。实验验证重点关注[[破乳]]剂在[[沥青质]]稳定的${ \sf W } / { \sf O }$乳液中的性能。破乳剂浓度设定为1000 ppm。[[脱水率]]$\left( R _ { \mathrm { D } } \right)$在$5 0 ~ ^ { \circ } \mathrm { C }$下经过1 h后根据$\operatorname { E q . }$（6）测定。$V _ { 0 }$是${ \sf W } / { \sf O }$乳液中水相的初始体积（mL），$V _ { \mathrm { t } }$是在特定脱水时间t时分离出的水的体积（mL）。[[光学显微镜]]和[[界面张力测量]]证明了破乳剂的界面效能。

$$
R _ {\mathrm{D}} = \frac {V _ {\mathrm{t}}}{V _ {0}} \times 100 \%\tag{6}
$$

接下来，我们将同一方法框架应用于另一项挑战。该挑战涉及从[[硅晶片]]表面去除[[交联光刻胶]][33–35]。前一案例涉及液-液界面和改性聚合物材料设计。而本案例则聚焦于固体界面膜的调控以及小分子材料的配方设计。尽管两种应用完全不同，但两项研究共享完全一致的分析逻辑。

## 2.2.2. [[硅晶片]][[光刻胶去除]]案例研究

[[光刻胶]]在刻蚀过程中保护[[硅晶片]]，但在光刻后需要去除。常规去除剂（例如[[四甲基氢氧化铵]]、[[N-甲基-2-吡咯烷酮]]）具有固有的健康和环境风险（例如急性毒性、水生毒性）[36]。这些风险迫切需要能够满足安全、健康和环境要求的高效替代品。

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/9d001fd455a75f474bf97f4394d15923d28baaa4e62e4844255b020ddb02dc63.jpg>)

（b）  
![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/6f9cbe5e668f33806093324934b7cce42d8312a53bbdf6eab7bed7d693030dbb.jpg>)

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/bd2b48a98bdfc059567fbf74dd9b8f5435f5134cb8cff53ae8670bde16a1a64b.jpg>)

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/cbb0ddfebe057aabbf04dd06180ac218a534007aff69a681e39d1de8c571715c.jpg>)  
图 3. PDI-DMPNN 的预测精度。（a）在 30 个 epoch 下评估的 PDI-DMPNN 预测精度随不同先验数据类型引入的变化。PD-1：分子极性指数。PD-2：ESP 统计数据。PD-3：不同 ESP 区间内的分子表面积（表 S1）。（b）三种不同模型预测精度的散点图。前馈神经网络（FFN）将先验数据作为输入信息。DMPNN 将分子结构作为输入信息。PDI-DMPNN 同时将先验数据和分子结构作为输入信息。

## （i）微观过程分析。

[[光刻胶|SU-8 光刻胶]]具有[[双酚A|双酚 A]] 环氧主链，在紫外曝光和随后烘烤后发生聚合与[[交联]]。链间[[非共价相互作用]]使固化后的 SU-8 层在大多数有机溶剂中不溶。

（ii）子结构识别与[[分子设计]]。

本研究提出[[深共熔溶剂]]（DESs）作为绿色替代品，以破坏[[交联]]聚合物网络中的[[非共价相互作用]]，实现高效去除。DESs 与传统溶剂保持结构相似性，通常由具有强极性基团的小分子组成。我们构建了一个包含 26,765 种双组分 DES 候选物的分子库 [37]。该设计策略为两种组分分配不同角色，以便于实际加工：

（a）功能组分降解固化[[光刻胶]]聚合物层。采用 [[PDI-DMPNN + SME 耦合算法]]识别靶向光刻胶分子的亲和子结构。

（b）协同组分促进共熔形成，同时满足[[绿色化学]]原则和低[[粘度]]要求。筛选涉及 [[先验数据引入-定向消息传递神经网络与子结构掩码解释|PDI-DMPNN + SME]] 算法、[[PubChem]] 检索和粘度约束 $( 4 . 0 0 0 \times 1 0 ^ { - 3 } \mathrm { t o } 8 . 3 4 1 \times 1 0 ^ { 5 } \mathrm { c P } )$ ）[38]。

（iii）实验验证。

基于 [[AI图像识别|AI 的图像识别]]（图 S10）技术利用暴露硅基底与剩余[[光刻胶]]之间的显著颜色对比来量化去除率。本研究采用[[贝叶斯优化]]方法确定最佳条件，包括温度、时间和功能组分浓度。训练 [[XGBoost]] [39] 作为[[代理模型]]，将实验因素与去除率相关联。该过程在贝叶斯优化指导下迭代，直至达到目标去除率。模型配置（第 S2.2.2 节）经过调优以减轻过拟合，尤其是在数据集体量有限的情况下。[[SEM|扫描电子显微镜]]和 [[X射线光电子能谱|X 射线光电子能谱]]在微观层面表征表面去除效率。

本文在第 3.2 节详述主要发现，包括[[分子设计]]、实验评估以及[[非共价相互作用]]的机理见解。第 S2 节详述实验步骤、试剂与仪器规格以及其他结果。

## 3. 结果与讨论

## 3.1. 方法的准确性

## 3.1.1. [[PDI-DMPNN]] 的预测精度

[[PDI-DMPNN]] 是本研究中的核心预测模型，其良好的预测精度验证了所提方法的有效性。图 3a 展示了使用 ${ 1 0 } ^ { 6 }$ 训练样本时，不同先验数据类别下的预测 [[均方根误差|RMSE]] 变化。加入三类先验数据后，预测 RMSE 显著下降。在 30 个 epoch 下，[[交叉验证|5 折交叉验证]]的验证 RMSE 为 $0 . 1 2 6 ~ \pm ~ 0 . 0 3 7$。与[[分子极性指数]]（PD-1）和 [[静电势|ESP]] 统计量（PD-2）相比，不同 ESP 区间上的[[分子表面积]]（PD-3）对精度提升的贡献最大。这表明分子表面积是 $\Delta G _ { s o l }$ 预测中的关键决定因素。

图 3b 定量比较了三个模型训练后的预测性能。早停基于验证 RMSE 实施。获得最优验证指标的模型在第 188 个 epoch 被保存为检查点，验证 RMSE 达到 0.086。训练完全结束后，本研究得到测试 RMSE 为 0.083，与最终验证 RMSE 高度一致。这些结果验证了较强的泛化能力且不存在过拟合。预测 RMSE 表示约 70.5% 的降低。此外，PDI-DMPNN 的 $\mathrm { R } ^ { 2 }$ 达到 0.999，优于仅依赖先验数据或分子结构的模型。这些结果表明，溶质–溶剂极性差异约束了物理化学性质，从而增强了泛化能力。

## 3.1.2. [[非共价相互作用]]的物理化学精度

为评估识别由静电和色散产生的相互作用的准确性，我们使用 [[β-丙氨酸两性离子]]（极性体系）和[[乙苯]]（非极性体系）作为代表性目标分子。$N D _ { \mathrm { s u b } }$（正值和负值）绝对值最大的二十个子结构如图 4a 和 b 所示。

图 4a 展示了原始 $D _ { \mathrm { s u b } }$ 分布的小提琴图。β-丙氨酸两性离子是一种两性离子物种，极性非常强。在原始 $D _ { \mathrm { s u b } }$ 数据中，$\left| N D _ { \mathrm { s u b } } \right| >$、$0 . 9 0 0 , > 0 . 9 9 0$ 和 $> 0 . 9 9 9$ 的子结构比例分别仅为 9.72%、3.88% 和 2.28%。相比之下，乙苯是非极性的。其 $D _ { \mathrm { s u b } }$ 值仅跨越区间 [−1.046, 1.464]。非共价体系中很少有 $D _ { \mathrm { s u b } }$ 值满足 $\left| N D _ { \mathrm { s u b } } \right| > 0 . 9 9 0$。因此，边界饱和对结果影响有限。

图 4a 与 b 的比较表明，显著子结构

(d)  
(e)  
![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/8b2e01d86183c4902c86c9388a9cba14d292c522c87783ec1d73e8fe13ae9a08.jpg>)

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/0a83644c7186141af0744f9e33fe5828ec4063e7ddb47284ac6d99181f7572d4.jpg>)

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/eb0fa5fb17139dfd017685d161c4619f7ad3f16eec0f0d9e49f9c1c4cca1f3f6.jpg>)

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/110870f3784cb5f69c2c61cb82320cb74f10dcd42b13af0ca7c9e8ae1f486498.jpg>)

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/f3f5bc71d43e860fa4c10de9254f41b35293c9625f9df1d638463684b50e868d.jpg>)

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/ef5e497e66317eec317c59d8b2e5ed26905d50956cf1fef08ef5b9b45daf32a4.jpg>)

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/8b7644d60ab92b30bb7242c2c458688fb127b2583d1caef0aa6b4180b8390e40.jpg>)  
图 4. 识别出的子结构与物理化学原理之间的一致性。(a) β-丙氨酸两性离子和乙苯的原始 $\mathrm { D } _ { \mathrm { { s u b } } }$ 分布小提琴图。(b) 针对 β-丙氨酸两性离子的显著子结构的正、负 $\mathrm { N D } _ { \mathrm { { s u b } } }$ 值。(c) 针对乙苯的显著子结构的正、负 $\mathrm { N D } _ { \mathrm { s u b } }$ 值。(d) 对 β-丙氨酸两性离子及其相应特征子结构进行的 ESP 分析。(e) 对乙苯及其相应特征子结构进行的相互作用能分解分析。

极性目标分子所对应的$N D _ { \mathrm { s u b } }$值远高于非极性分子。具体而言，[[β-丙氨酸两性离子]]的绝对$N D _ { \mathrm { s u b } }$值超过0.990，而[[乙苯]]的相应值一般低于0.750。这一现象与[[非共价相互作用]]的潜在机制一致。就[[长程相互作用]]而言，极性分子强烈依赖[[静电相互作用]]，而非极性分子则依赖较弱的[[色散相互作用]]。鉴于静电相互作用主导色散相互作用，极性分子对子结构表现出更高的选择性。

对于极性靶标 [[β-丙氨酸两性离子]]，具有吸引作用的子结构包括 $N D _ { \mathrm { s u b } } \in [ - 1 , 0 )$ 通常由[[氰基]]、[[羧基]]和[[磺酰基]]等极性基团组成。相比之下，具有排斥性的子结构则 $N D _ { \mathrm { s u b } } \in$ (0,1] 主要包含对称的含卤基团，如[[全氟烷烃]]和[[三氯化硼]]。在此，分子表面[[静电势]]分布决定了分子间相互作用的倾向。富电子（静电势为负）和缺电子（静电势为正）区域源自电负性原子的分布。如图 4c 所示，β-丙氨酸两性离子的静电势分布直方图跨越约 200 kcal mol<sup>−</sup> <sup>1</sup> 的范围。具体而言，解离的羧基产生了不同的静电势区域，形成一个约 22 的显著表面积峰。 $\mathring { \mathsf { A } } ^ { 2 }$ 在80至90千卡范围内 $\mathrm { m o l } ^ { - \bar { 1 } }$ 根据[[静电互补原理]]，这一独特的静电势特征解释了其对负静电势区域的强吸引相互作用。

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/477110131716cfbe1b3ec7f2754c1f6b5cb0f693331b9e7a64eab708b2625954.jpg>)

(a)  
(b)  
(c)  
![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/d55c60bc5baaabcdec5e63fdb2f149d3498d3c53fe4ef37d86d97beb779572b1.jpg>)  
图5. W/O乳液破乳的分子设计结果。(a) 散点图展示针对三种不同沥青质片段、具有不同元素组成的子结构的$\mathrm { N D } _ { \mathrm { s u b } }$分布；(b) 主要子结构中结构特征的富集分析；(c) 聚(PE-co-4VP-co-UOL)的合成反应。

对于非极性[[乙苯]]作为目标分子，具有负$N D _ { \mathrm { s u b } }$值的子结构主要包括含氯基团、[[烷基链]]、[[环烷烃]]和[[杂环]]。相反，正$N D _ { \mathrm { s u b } }$值表明存在强极性官能团。[[全氟烷烃]]始终表现出正$N D _ { \mathrm { s u b } }$值，这是由各原子微小绝对$N D _ { \mathrm { { s u b } } }$贡献的加和所致。我们利用[[能量分解分析]]将[[分子间相互作用能]]（ΔE）分解为各个物理组分（式S2）。能量被分解为[[静电相互作用|静电项]]$( \Delta E _ { \mathrm { e l s } } )$、[[交换排斥项]]$( \Delta E _ { \mathrm { x r e p } } )$、[[轨道相互作用项]]$( ( \Delta E _ { \mathrm { o r b } } )$和[[色散相互作用|色散项]]$( \Delta E _ { \mathrm { d i s p } } ) )$。图4d展示了[[四氢呋喃]]（吸引性）和[[全氟十二烷]]（排斥性）的分解相互作用能。四氢呋喃表现出更高的总吸引相互作用能（−4.45 kcal $\mathrm { m o l } ^ { - 1 } )$），高于全氟十二烷（−2.44 kcal $\mathrm { m o l ^ { - 1 } } )$）。对于非极性物种，吸引主要来源于 分散相互作用。然而，紧密的分子间接触通过[[泡利不相容原理]]引发电子排斥。在全氟十二烷体系中，$\Delta E _ { \mathrm { { x r e p } } }$（12.32 kcal $\mathrm { m o l } ^ { - 1 } )$ 超过了 $\Delta E _ { \mathrm { d i s p } } ~ ( - 9 . 6 9 ~ \mathrm { k c a l ~ m o l ^ { - 1 } } )$，从而减弱了对乙苯的整体吸引力。

总之，这些结果证实了该方法与物理化学原理在定性上高度一致。这种准确性来源于 [[PDI-DMPNN + SME 耦合算法]]：(i) [[PDI-DMPNN]] 建立分子结构与 $\Delta G _ { \mathrm { s o l } }$ 之间的经验关系。(ii) [[SME]] 将这些关系应用于特定界面体系。该方法之所以能与物理化学原理保持一致，是因为其底层相关性源自[[非共价相互作用]]。此外，这种方法显著提高了计算效率。例如，识别 10,000 个相互作用，将计算时间从 20 天（64 个 CPU 核心上的 [[DFT]]）缩短到 9 分钟（在[[华为云]] [[Ascend NPU]] 上，图 S5）。后续案例研究将展示这些底层原理所带来的有效性和准确性。

(d)  
![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/0f844a474d71f945cc0ca55aac3287b3d382e0c0f3d125d10585de9b84cb3c9c.jpg>)

(a)  
![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/41c20ade1831049d8f4076feb61c2320c3f06e42cd0009b205ae610dd82bbcde.jpg>)  
(b)

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/57d4224a575de961c11a29de44522a4a42592361c32c57c6041628255c01d198.jpg>)

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/61c52f99015f6c298315aaf02bf90cd29395ca0aeb79fd2ad255a0e6fd0becca.jpg>)

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/16f05ba08d5763f6444ca02e13af45add1f2a84eaac9f488009f552410a17f7f.jpg>)

(c)  
![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/2db1cf5ab35eef514d01e4166c56c690be6bd3806457ea46b44139573b9d0303.jpg>)

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/f647f3a2535caeaccb8d9a706f2396cf735dd93f11f39d8d9a13c7d5a347c4b8.jpg>)

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/b6859ac7aa1fb7d73af9847354ec658f7da23cdce6f9676454718fee2662bb31.jpg>)  
图 6. 实验评估结果以及 W/O 乳液破乳的非共价相互作用机制。(a) 聚（PE-co-4VP-co-UOL）与聚醚的破乳效率比较；(b) 聚（PE-co-4VP-co-UOL）破乳过程中液滴演变的显微可视化；(c) 聚醚与聚（PE-co-4VP-co-UOL）的油水界面张力比较；(d) ESP 极值点处的沥青质片段，以及沥青质聚集体内部最强的氢键；(e) 处于 ESP 最大点处的聚（PE-co-4VP-co-UOL），以及聚（PE-co-4VP-co-UOL）与沥青质形成的氢键；(f) 聚（PE-co-4VP-co-UOL）破坏沥青质 π-π 堆积时观察到的非共价相互作用区域。

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/c7ac911dd6a138c507ea4fe71025daf24af209562a19bb5984f695897dd82e7b.jpg>)  
[[氢键]]能：-4.747 kcal mol⁻¹

## 3.2. 案例研究结果

## 3.2.1. [[油包水乳状液|W/O 乳液]][[破乳]]案例研究

图 5a 展示了一个三维散点图，其坐标轴对应含有亚砜、吡咯和仅含芳环的沥青质片段的 $N D _ { \mathrm { s u b } }$ 值。含氧、含氮和含硫子结构主要集中在 [−1,0] 区间，构成了以 $N D _ { \mathrm { s u b } } <$ −0.700 为特征的大部分片段。

[[富集分析]]（图 5b）揭示了详细的结构特征。x 轴显示 log（富集分数），以涵盖跨越多个数量级的差异。针对[[沥青质|含亚砜沥青质片段]]的富集分析表明，[[酚基]]（1504.3）和[[羧基]]（1444.7）具有最高的分数。这些值显著高于典型含氧基团（134.7）的分数。[[酚羟基]]是关键目标，因为其分数与[[苯环]]（18.8）的分数差异显著。[[吡咯|含吡咯的沥青质片段]]显示[[吡啶基]]（366.2）和[[酮基]]（358.2）的分数最高。然而，这些值并未显著超过典型含氧基团（243.2）和含氮基团（232.5）的分数。含[[亚砜基团|亚砜]]或吡咯基团的片段可作为[[氢键]]受体和供体，从而增强对互补官能团的亲和力。中性沥青质片段显示[[环醚]]（2272.2）和[[长链醇]]（1986.9）的分数最高。由于其延长的[[烷基链]]增强了[[色散相互作用]]，这些醇表现出比常规[[羟基]]更高的 log 分数（13.5）。

基于原料可得性和合成可行性，选择 [[4-乙烯基苯酚]]和 [[10-十一碳烯-1-醇]]作为共聚单体，与[[烯丙基聚醚]]一起进行[[三元共聚]]（图 5c）。结构表征（第 S2.1.2 节）证实成功合成了 [[poly(PE-co-4VP-co-UOL)]]。与聚醚相比，poly(PE-co-4VP-co-UOL)

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/115e29b614cd0a8acac38c8ad8b19023b478ba2ce331f4a866b036d42d02b4a5.jpg>)  
图 7. 硅片光刻胶去除的分子设计结果。（a）功能组分富集分析。（b）所识别的功能组分展示出破坏光刻胶层的能力。（c）协同组分三级筛选。（d）筛选出的功能与协同组分：L-肉碱和愈创木酚的化学结构。

可在 50 °C 下 60 min 内将[[破乳效率|脱水效率]]从 75.2% 提高到 95.7%（图 6a）。水相清晰分离，从而克服了[[聚醚破乳剂|传统聚醚破乳剂]]存在的[[乳化稳定性]]问题。此外，[[酚基]]与[[长链醇]]基之间产生[[协同效应]]，其[[破乳]]效率优于任一单一官能团。液滴显微照片（图 6b）显示初始水滴分布均匀。加入 [[poly(PE-co-4VP-co-UOL)]] [[破乳剂]]后，可以观察到明显的[[液滴聚并]]。随着反应进行，液滴聚并成数百微米的大液滴。这些大液滴在重力作用下沉降，促进破乳。[[界面张力]]研究（图 6c）表明，poly(PE-co-4VP-co-UOL) 在 1000 ppm 时可将[[甲苯-水界面张力]]降至 15.55 mN/m。与传统聚醚（17.50 mN/m）相比，所选官能团显著提高了[[表面活性]]。因此，这使破乳剂具有更有效的[[液滴排水]]和增强的聚并性能。

[[富集分析]]表明，[[酚基]]与[[亚砜基团|亚砜]]相互作用，而[[长链醇]]与中性[[芳环]]相互作用。这些相互作用对应于[[氢键]]和 [[π-π 堆积]]的重建。亚砜基团（[[静电势|ESP]] min：−48.65 kcal mol<sup>−</sup> <sup>1</sup>）与[[吡咯氮]]（ESP max：+54.12 kcal $\mathrm { m o l ^ { - 1 } } )$ 构成[[沥青质]]中最强的氢键相互作用（图 6d），结合能为 −4.75 kcal mol<sup>−</sup> <sup>1</sup>。[[poly(PE-co-4VP-co-UOL)]] 含有[[酚羟基]]作为强氢键供体（ESP max：54.93 kcal mol<sup>−</sup> <sup>1</sup>，图 6f）。其与亚砜基团形成的氢键相互作用能低至 −7.69 kcal mol<sup>−</sup> <sup>1</sup>，较沥青质聚集体中最稳定的氢键在数值上强 62.0%。[[构象搜索]]表明，长链醇插入芳环之间（图 6f），从而破坏 π-π 堆积。这类相互作用重组了非共价网络，并产生[[破乳]]所需的[[热力学驱动力]]。这些结果验证了基于[[人工智能]]的亚结构识别与[[非共价相互作用]]基本规律相一致。

3.2.2. [[硅晶片|硅片]][[光刻胶去除]]案例研究

图 7a 展示了功能组分的富集分析结果。富集得到的分子结构以长链羧酸、酚羟基和苯环为特征，表明其具有破坏光刻胶固化层的潜力。图 7b 显示了由 PDI-DMPNN + SME 耦合算法识别出的排名靠前的功能组分。其中，L-肉碱表现最佳，其关键的 3-羟基丁酸基团达到了 −0.996 的 $N D _ { \mathrm { s u b } }$ 值。此外，作为一种人体内源性代谢物，L-肉碱具有固有的生物相容性和环境友好性。该方法有效缓解了传统光刻胶去除剂相关的毒性问题。

对 265 种化学候选物开展了三级筛选，以识别目标协同组分（图 7c）：

(i) 一级标准要求与 [[L-肉碱]]具有良好的分子亲和性，并避免在其活性位点产生[[空间位阻]]。针对 L-肉碱的[[三甲基铵基团]]，我们使用 [[PDI-DMPNN + SME 耦合算法|PDI-DMPNN+SME 算法]]筛选具有高特异性亲和力的组分 $( N D _ { \mathrm { s u b } } <$ < −0.900）。

(ii) 随后利用 [[PubChem 数据库]]和 [[GB 13690–2009]] 危害分类标准进行过滤，鉴定出 18 种环境友好物质（表 S6）。这些物质通常无毒，仅具有轻微刺激性，并带有[[羟基]]、[[羧基]]和酰胺基等[[低毒性官能团]]。

(iii) 除安全性外，[[流变性能]]也至关重要。数据表明，当 [[L-肉碱]]摩尔分数大于 0.25 时，[[黏度]]范围为 400 至 700 cP（表 S7）。因此，需要低黏度协同组分来改善流动性。图 S12 展示了对双组分 [[深共熔溶剂|DES]] 黏度数据的统计分析。具有单一[[氢键位点]]的 DES $( \boldsymbol { \mathrm { e . } } \boldsymbol { \mathrm { g . } } _ { }$、[[己醇]]、[[L-薄荷醇]]）的黏度显著低于具有多个位点的 DES（例如[[甘油]]、[[山梨醇]]）。这一趋势可归因于多位点 DES 中更强的分子间[[自聚集]]和更高的分子量。

因此，我们选择了具有低分子量和少量[[氢键位点]]的协同组分 $( \boldsymbol { \mathrm { e . } } \boldsymbol { \mathrm { g . } } ,$ [[正辛醇]]、[[愈创木酚]]）。预实验（图 S12）证实，由 [[L-肉碱]]和愈创木酚形成的 [[深共熔溶剂|DES]] 体系（图 6d）能够高效去除[[硅晶片|硅片]]上的[[光刻胶]]。

初始采样[[贝叶斯优化]]  
![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/567e011e4f0a0e2506762e43e53e2ad2f929774c34d3ab6e1f82ccc251d23307.jpg>)

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/ecf2b858404ed3f4042df08b2ed7f4b3327d1b064e4e9092ae359e8cde6a27a4.jpg>)

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/ffa018b819208f145c25459c89090b213ee846ea730410c72bda748fe81d7680.jpg>)

(b)  
![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/2f78f0cb195ed6313ab5d6900daf8b6b5950f69222e2bd5a1a497717801d6849.jpg>)

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/f6a2678c1dac735a7e18a633a0bad81aa6e1ab8338015bf26f0a8681e706f607.jpg>)

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/e3135b801d371fd271bdbc40cbe712f0c9ad613edfaf6458ba9f9031a3e9f2b2.jpg>)

(c)  
![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/46cec905b1fac632d3dd1911574923e4714f0724ce474a5bb0f949e7b861f47f.jpg>)

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/0ea773ef4ee45fc80d5d99928df4120fc4412a24d2feeb9b33e07b61a602ba4d.jpg>)

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/e284f2e6ba745385125fb6e4760b9e1c1a64d25adf50a95ae55b469a3304cd8e.jpg>)

(d)  
![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/a78f83b956ec818eb236c097a9a149f25421b03f1686a97b683c54ec7d70b3a7.jpg>)

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/6738b2ac34f2238107567e4f6ab321162a761ec4903d09608b49b4f85e5d8e8b.jpg>)

![](<../2.SCI_MD/General applicability for developing interfacial regulation materials An artificial-intelligence-driven approach based on non-covalent interactions/images/1871a386cffcec188f216e2d720bb6766df7e0a69c08a19e20eaf10e5bdbf1ac.jpg>)  
图 8. 硅片光刻胶去除的实验评价结果与非共价相互作用机制。(a) 贝叶斯优化对温度、时间和浓度参数进行精化。(b) 光刻胶完全去除前 Si 和 N 元素的扫描电子显微镜与 X 射线光电子能谱表征；(c) 光刻胶完全去除后 Si 和 N 元素的扫描电子显微镜与 X 射线光电子能谱表征。(d) 光刻胶与 L-肉碱的 ESP 分析。(e) 光刻胶自聚集体内以及 L-肉碱与光刻胶之间存在非共价相互作用区域。

图 8a 展示了对应于时间、温度和左旋肉碱浓度的贝叶斯优化结果。基于表 S8 所列实验数据集进行训练后，代理模型在训练集和验证集上分别获得了 $\mathtt { R } ^ { 2 }$ 值为 0.971 和 0.994。与初始随机采样点（灰色点）相比，贝叶斯优化条件（红色点）实现了显著提高的去除率。温度主要决定去除效率，且效率随每升高 ${ 2 0 ~ ^ { \circ } \mathrm { C } }$ 而显著增加。时间表现出明显的阈值效应：在 95 分钟以下时效率急剧上升，但超过该点后趋于平稳。此外，左旋肉碱浓度的影响高度依赖于温度和时间。该浓度仅在高温且持续时间充足的条件下才会显著改变去除效率。经过 15 次独立实验运行，最优工艺参数 $( 1 0 0 ~ ^ { \circ } \mathrm { C } ,$、120 分钟、20 mg mL<sup>−</sup> <sup>1</sup> 左旋肉碱）实现了 100% 的光刻胶去除率，硅片表面无可视残留物或明显颜色变化。

本研究采用[[SEM|扫描电子显微镜]]和 [[X射线光电子能谱|X 射线光电子能谱]]（图 8b 和 c）。这两种表征方法针对两种不同类型的区域：[[光刻胶]]未完全反应而残留的区域，以及光刻胶已被完全去除的区域。在微/纳米尺度上，空白[[硅晶片|硅片]]表面极其光滑，几乎没有沉积物。在[[光刻胶去除]]不完整的区域，表面覆盖着明显的固体沉积物，这些沉积物是[[交联聚合物|交联的光刻胶聚合物]]，直径通常为数十微米。相比之下，经所提出的去除剂处理后，硅片表面几乎无光刻胶固化层残留。这些结果证实，所提出的材料对固化光刻胶层具有很强的破坏作用。X 射线光电子能谱分析揭示了光刻胶去除后 Si 和 N 元素信号的显著变化。在表面被清除光刻胶后，Si $2 \mathsf { p } , \mathsf { s i - O } .$ 和 Si–N 的峰面积分别增加了 146%、103% 和 101%。这表明在光刻胶被去除后，硅片表面基团已暴露出来。在未完全清洁的区域中，Si–N 峰旁出现了一个明显的[[季铵峰]]，这归因于固化光刻胶中[[L-肉碱|左旋肉碱]]的存在。该季铵峰在处理后消失，进一步证明所提出的材料可以有效消除硅表面功能性残留组分。

[[光刻胶|SU-8光刻胶]]单体的[[静电势|ESP]]分析（图8d）表明，含氧基团（[[醚键]]、[[环氧基团]]）呈现负ESP（全局最小值：−31.39 kcal $\mathbf { m o l } ^ { - 1 } ) .$）。[[苯环]]等中性区域则呈现正ESP（全局最大值：20.55 kcal mol<sup>−</sup> <sup>1</sup>）。在[[L-肉碱]]中，[[三甲基铵基团|三甲基季铵基团]]呈现强正ESP（全局最大值：47.81 kcal mol<sup>−</sup> <sup>1</sup>），而[[3-羟基丁酰基]]则呈现负ESP（全局最小值：−68.72 kcal mol<sup>−</sup> <sup>1</sup>）。如${ \mathrm { F i g } } .$. 8e所示，与苯环相关的弱色散吸引（绿色等值面）提高了光刻胶的稳定性。相比之下，L-肉碱与光刻胶之间形成了两种特征[[静电相互作用]]（蓝色等值面）。具体而言，三甲基季铵基团的正ESP吸引光刻胶醚键的负ESP，而3-[[羟基]]丁酰基的负ESP则吸引光刻胶苯环的正ESP。重要的是，后者破坏了光刻胶中的弱[[色散相互作用]]，从而促进固化层的分解。相反，[[愈创木酚]]没有表现出明显的静电吸引，而是通过其[[邻甲氧基苯酚]]结构与光刻胶中苯环之间的π-π堆积实现[[吸附]]。总之，3-羟基丁酰基利用静电互补性靶向光刻胶位点，而愈创木酚则依靠π-π堆积实现以色散为主的相互作用。这种协同组合在不依赖有毒酸、碱或氧化剂的情况下，实现了完全（100%）的[[光刻胶去除]]。

## 4. 结论

从定性和热力学角度来看，本研究建立了一个主要适用于跨广阔化学空间筛选的方法学基准。它从微观机制视角建立了一个共享的、可重复使用的数据库，包含${ 1 0 } ^ { 6 }$个溶剂化条目。本研究作出以下贡献：

(i) 广泛适用性和高开发效率。新开发的[[先验数据引入-定向消息传递神经网络与子结构掩码解释|PDI-DMPNN + SME]]耦合算法促进了共享数据库在不同材料领域的应用。通过避免领域特定数据标注，它降低了[[人工智能|AI]]驱动方法的应用门槛，并显著提高了开发效率。在10,000次亚结构亲和力测试中，该耦合算法将计算时间从20天缩短至9分钟。

(ii) 物理化学预测和应用层面验证的准确性提升。[[非共价相互作用]]原理与[[人工智能|AI]]方法的结合显著提高了物理化学性质的预测准确性。结果验证了所识别亚结构与[[DFT]]计算之间的一致性。本研究建立了一个统一的应用工作流程：微观过程分析 → 亚结构识别与[[分子设计]] → 实验验证。应用层面的高准确性通过实验验证进一步得到确认，包括一种油水[[破乳剂]]（95.7%[[破乳效率|脱水效率]]）和一种绿色[[光刻胶去除]]剂（100%去除率）。

## [[CRediT作者贡献声明]]

[[常庆贺]]：初稿撰写、软件、方法学。[[杨雪]]：验证、调查。[[周慧敏]]：验证、调查。[[张新成]]：验证、调查。[[刘学谦]]：验证、调查。[[何林]]：撰写——审阅与编辑、项目管理、方法学。[[隋红]]：撰写——审阅与编辑、项目管理、方法学。[[徐政和]]：撰写——审阅与编辑、项目管理、方法学。[[韩优]]：撰写——审阅与编辑、项目管理、方法学。

## 利益冲突声明

作者声明存在以下可能被视为潜在利益冲突的财务利益/个人关系：

作者声明，本文所述源代码已申请软件著作权登记（2025SR0349859），且不存在其他潜在竞争性财务利益。

## 致谢

感谢[[国家自然科学基金]]（NSFC，批准号22178252和T2441001）的经费资助。此外，本研究中的实验与计算工作均在[[华为云]][[人工智能|AI]]计算服务上运行。我们感谢该平台提供的稳定算力支持。

## 附录A 缩略语

主要缩略语及其全称见表A1

表A1  
缩略语与全称对照表。

<table><tr><td>缩略语</td><td>全称</td><td>缩略语</td><td>全称</td></tr><tr><td>DFT</td><td>密度泛函理论</td><td>ESP</td><td>静电势</td></tr><tr><td>W/O</td><td>油包水</td><td>DMPNN</td><td>有向消息传递神经网络</td></tr><tr><td>BRICS</td><td>逆合成感兴趣的化学子结构断裂</td><td>PDI-DMPNN</td><td>引入先验数据的有向消息传递神经网络</td></tr><tr><td>SME</td><td>子结构掩码解释</td><td>MPNN</td><td>消息传递神经网络</td></tr><tr><td>FFN</td><td>前馈神经网络</td><td>RMSE</td><td>均方根误差</td></tr><tr><td> $R^2$ </td><td>决定系数</td><td>poly(PE-co-4VP-co-UOL)</td><td>聚（聚乙烯-co-4-乙烯基苯酚-co-10-十一碳烯-1-醇）</td></tr><tr><td>DES</td><td>深共熔溶剂</td><td></td><td></td></tr></table>

## 附录B 补充数据

本文的补充数据可在https://doi.org/10.1016/j.cej.2026.179552.在线获取。

## 数据可用性

支持本研究结果的数据可根据合理请求向通讯作者获取。本研究使用的自定义脚本已在[[Github|GitHub]]上公开，地址为https://github. com/hechangqing1997/[[PDI-DMPNN]]-[[SME]]。

## References

[1] L. He, F. Lin, X. Li, H. Sui, Z. Xu, Interfacial sciences in unconventional petroleum production: from fundamentals to applications, Chem. Soc. Rev. 44 (15) (2015) 5446 5494, https://doi.org/10.1039/C5CS00102A.

[2] Z. Wang, Q. Lu, J. Wang, J. Liu, G. Liu, W. Sun, L. Xie, Q. Liu, H. Zeng, Nanomechanical insights into hydrophobic interactions of mineral surfaces in interfacial adsorption, aggregation and flotation processes, Chem. Eng. J. 455 (2023) 140642, https://doi.org/10.1016/j.cej.2022.140642.

[3] L. Wang, H. Huang, X. Zhang, H. Zhao, F. Li, Y. Gu, Designed metal-organic frameworks with potential for multi-component hydrocarbon separation, Coord. Chem. Rev. 484 (2023) 215111, https://doi.org/10.1016/j.ccr.2023.215111.

[4] K.T. Butler, D.W. Davies, H. Cartwright, O. Isayev, A. Walsh, Machine learning for molecular and materials science, Nature 559 (7715) (2018) 547–555, https://doi. org/10.1016/j.eng.2019.02.011.

[5] P. Xu, X. Ji, M. Li, W. Lu, Small data machine learning in materials science, npj Comput. Mater. 9 (1) (2023) 42, https://doi.org/10.1038/s41524-023-01000-z.

[6] B. Dou, Z. Zhu, E. Merkurjev, L. Ke, L. Chen, J. Jiang, Y. Zhu, J. Liu, B. Zhang, G.- W. Wei, Machine learning methods for small data challenges in molecular science, Chem. Rev. 123 (13) (2023) 8736–8780, https://doi.org/10.1021/acs. chemrev.3c00189.

[7] H. Park, Y. Kang, J. Kim, Enhancing structure-property relationships in porous materials through transfer learning and cross-material few-shot learning, ACS Appl. Mater. Interfaces 15 (48) (2023) 56375–56385, https://doi.org/10.1021/ acsami.3c10323.

[8] The Materials Project. The Materials Project. https://next-gen.materialsproject. org/, 2026 (29 January 2026, date last accessed).

[9] N. Hoffmann, J. Schmidt, S. Botti, M.A. Marques, Transfer learning on large datasets for the accurate prediction of material properties, Digit. Discov. 2 (5) (2023) 1368–1379, https://doi.org/10.1039/D3DD00030C.

[10] A.P. Sarikas, K. Gkagkas, G.E. Froudakis, RetNeXt: a Pretrained model for transfer learning across the MOF adsorption space, J. Chem. Inf. Model. (2026), https:// doi.org/10.1021/acs.jcim.5c02698.

[11] S. Xu, J. Wu, Y. Guo, Q. Zhang, X. Zhong, J. Li, W. Ren, Applications of machine learning in surfaces and interfaces, Chem. Phys. Rev. 6 (1) (2025), https://doi.org 10.1063/5.0244175.

[12] C. Peng, B. Wang, L. Wu, H. Jin, Y. Li, W. Gao, J. Zhou, G. Jiang, C. Wang, J. Wang, AI-driven discovery and molecular engineering design for enhancing interface stability of black phosphorus, Angew. Chem. Int. Ed. 64 (38) (2025) e202508454, https://doi.org/10.1002/anie.202508454.

[13] C. Cakiroglu, F. Batool, K. Islam, M.L. Nehdi, Explainable ensemble learning predictive model for thermal conductivity of cement-based foam, Construct. Build. Mater. 421 (2024) 135663, https://doi.org/10.1016/j.conbuildmat.2024.135663.

[14] B. Xie, X. Yao, W. Mao, M.H. Rafiei, N. Hu, High-efficient low-cost characterization of composite material properties using domain-knowledge-guided self-supervised learning, Comput. Mater. Sci. 216 (2023) 111834, https://doi.org/10.1016/j. commatsci.2022.111834.

[15] Z. Rao, P.-Y. Tung, R. Xie, Y. Wei, H. Zhang, A. Ferrari, T. Klaver, F. Kormann, ¨ P. T. Sukumar, A. Kwiatkowski da Silva, Machine learning–enabled high-entropy

alloy discovery, Science 378 (6615) (2022) 78–85, https://doi.org/10.1126 science.abo4940.

[16] E. Zhang, M. Dao, G.E. Karniadakis, S. Suresh, Analyses of internal structures and defects in materials using physics-informed neural networks, Sci. Adv. 8 (7) (2022) eabk0644, https://doi.org/10.1126/sciadv.abk0644.

[17] H. Shimakawa, A. Kumada, M. Sato, Extrapolative prediction of small-data molecular property using quantum mechanics-assisted machine learning, npj Comput. Mater. 10 (1) (2024) 11, https://doi.org/10.1038/s41524-023-01194-2.

[18] R. Dey, M. Brocidiacono, K. Koirala, Extending machine learning model for implicit solvation to free energy calculations, arXiv (2025), https://doi.org/10.48550 arXiv.2510.20103 preprint arXiv:2510.20103.

[19] K. Hippalgaonkar, Q. Li, X. Wang, J.W. Fisher, J. Kirkpatrick, T. Buonassisi, Knowledge-integrated machine learning for materials: lessons from gameplaying and robotics, Nat. Rev. Mater. 8 (4) (2023) 241–260, https://doi.org/10.1038 s41578-022-00513-1.

[20] M. Cheng, C.-L. Fu, R. Okabe, A. Chotrattanapituk, A. Boonkird, N.T. Hung, M. Li, Artificial intelligence-driven approaches for materials design and discovery, Nat. Mater. (2026) 1–17, https://doi.org/10.1038/s41563-025-02403-7.

[21] J. Zhang, H. Zeng, Intermolecular and surface interactions in engineering processes, Engineering 7 (1) (2021) 63–83, https://doi.org/10.1016/j eng.2020.08.017.

[22] M.C. Storer, C.A. Hunter, The surface site interaction point approach to noncovalent interactions, Chem. Soc. Rev. 51 (24) (2022) 10064–10082, https://doi. org/10.1039/D2CS00701K.

[23] F.H. Vermeire, W.H. Green, Transfer learning for solvation free energies: from quantum chemistry to experiments, Chem. Eng. J. 418 (2021) 129307, https://doi. org/10.1016/j.cej.2021.129307.

[24] J.S. Murray, P. Politzer, The electrostatic potential: an overview, WIREs Comput. Mol. Sci. 1 (2) (2011) 153–163, https://doi.org/10.1002/wcms.19C.

[25] Z. Wu, J. Wang, H. Du, D. Jiang, Y. Kang, D. Li, P. Pan, Y. Deng, D. Cao, C.Y. Hsieh, T. Hou, Chemistry-intuitive explanation of graph neural networks for molecular property prediction with substructure masking, Nat. Commun. 14 (1) (2023) 2585, https://doi.org/10.1038/s41467-023-38192-3.

[26] T. Lu, Q. Chen, Simple, efficient, and universal energy decomposition analysi method based on dispersion-corrected density functional theory, J. Phys. Chem. A 127 (33) (2023) 7023 7035, https://doi.org/10.1021/acs.jpca.3c04374.

[27] S. Emamian, T. Lu, H. Kruse, H. Emamian, Exploring nature and predicting strength of hydrogen bonds: a correlation analysis between atoms-in-molecules descriptors, binding energies, and energy components of symmetry-adapted perturbation theory, J. Comput. Chem. 40 (32) (2019) 2868–2881, https://doi. org/10.1002/jcc.26068.

[28] C. Lefebvre, G. Rubez, H. Khartabil, J.-C. Boisson, J. Contreras-García, E. H´enon, Accurately extracting the signature of intermolecular interactions present in the NCI plot of the reduced density gradient versus electron density, Phys. Chem. Chem. Phys. 19 (27) (2017) 17928 17936, https://doi.org/10.1039/C7CP02110K.

[29] T. Lu, F. Chen, Multiwfn: a multifunctional wavefunction analyzer, J. Comput. Chem. 33 (5) (2012) 580 592, https://doi.org/10.1002/jcc.22885

[30] Y. Tian, C. He, X. Zhang, L. He, Z. Xu, H. Sui, X. Li, Doping Si/O to enhance interfacial occupancy of demulsifiers for low-carbon breaking of water-in-heavy oil emulsions, AIChE J. (2025) e18666, https://doi.org/10.1002/aic.18666.

[31] D. Langevin, J.-F. Argillier, Interfacial behavior of asphaltenes, Adv. Colloid Interface Sci. 233 (2016) 83–93, https://doi.org/10.1016/j.cis.2015.10.005.

[32] A. Garcia-Moreno, R. Lopez-Domínguez, ´ J.A. Villatoro-García, A. Ramirez-Mena, E. Aparicio-Puerta, M. Hackenberg, A. Pascual-Montano, P. Carmona-Saez, Functional enrichment analysis of regulatory elements, Biomedicines 10 (3) (2022) 590, https://doi.org/10.3390/biomedicines10030590.

[33] B. Zhong, X. Qin, H. Xu, F. Deng, H. Wang, L. Li, Z. Li, W. Zhang, Z. Lou, L. Wang, Monolithic cell-on-memristor architecture enables wafer-scale integration o

oscillatory chemoreceptors for bio-realistic gustatory chips, Nat. Mater. (2026) 1–10.

[34] Y. Zheng, H. Xu, H. Xu, Z. Li, L. Li, B. Zhong, L. Liu, F. Deng, K. Zhu, H. Xue, Twelve-inch electrically anisotropic boridene for optoelectronic computing, Nat. Nanotechnol. (2026) 1 8.

[35] Z. Li, H. Xu, Y. Zheng, L. Liu, L. Li, Z. Lou, L. Wang, A reconfigurable heterostructure transistor array for monocular 3D parallax reconstruction, Nat. Electron. 8 (1) (2025) 46 55.

[36] M. Harumoto, J.J. Santillan, T. Itani, T. Kozawa, Dependence of photoresist dissolution dynamics in alkaline developers on alkyl chain length of tetraalkylammonium hydroxide, Jpn. J. Appl. Phys. 61 (5) (2022) 056506, https:// doi.org/10.35848/1347-4065/ac61f2.

[37] K.A. Omar, R. Sadeghi, Database of deep eutectic solvents and their physical properties: a review, J. Mol. Liq. 384 (2023) 121899, https://doi.org/10.1016/j. molliq.2023.121899.

[38] V. Odegova, A. Lavrinenko, T. Rakhmanov, G. Sysuev, A. Dmitrenko, V. Vinogradov, DESignSolvents: an open platform for the search and prediction of the physicochemical properties of deep eutectic solvents, Green Chem. 26 (7) (2024) 3958–3967, https://doi.org/10.1039/D3GC04533A.

[39] T. Chen, C. Guestrin, XGBoost: a scalable tree boosting system, in: Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining, 2016, pp. 785–794, https://doi.org/10.1145/2939672.2939785.