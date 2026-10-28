---
title: "zh-The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations Wiki全文"
source_markdown: "2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations.md"
cn_markdown: "2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/zh-The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations.md"
type: translated_fulltext_wiki
---
<!-- PaperMDLab-NAV:START -->
> [!info] 论文四向互链（PaperMDLab 自动维护）
> [[2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations|英文原文]] · [[2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/zh-The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations|中文译文]] · **中文全文双链（当前）** · [[4.SCI_AI_Summary/summary-zh-The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations|AI中文总结]]
<!-- PaperMDLab-NAV:END -->


![](<../2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/images/ba6d475e3970836e43eae8a1b8514134a1981bed821837aafbf2ac282b43dc96.jpg>)

# [[6PPD-醌|6PPD-Q]] 在[[多孔介质]][[污染物运移|运移]]过程中的[[腐殖酸]]介导机制：来自[[柱实验]]与[[分子动力学模拟]]的认识☆

[[Qianhui Yu]] <sup>a</sup>, [[Shunan Dong]] <sup>a,\*</sup> , [[Jianyou Zhu]] <sup>b</sup>, [[Genhe He]] <sup>c</sup>, [[Jingjie Dong]] <sup>a</sup>, [[Yanan Sun]] <sup>a</sup>, [[Liting Sheng]] <sup>a</sup>, [[Yuanyuan Sun]] <sup>d</sup>, [[Jichun Wu]] <sup>d</sup>

<sup>a</sup> 河海大学农业科学与工程学院，中国南京，210098

<sup>b</sup> 浙江省水利水电勘测设计院，中国杭州，310002

<sup>c</sup> 井冈山大学生命科学学院，江西省功能生物与污染控制重点实验室，中国吉安，343009

<sup>d</sup> 南京大学环境学院，污染控制与资源化研究国家重点实验室，中国南京，210023

## 文 章 信 息

关键词：[[6PPD-醌|6PPD-Q]] [[腐殖酸]] [[污染物运移|运移]] [[分子动力学模拟]] [[多孔介质]]

## 摘 要

与 [[6PPD醌|N-(1,3-二甲基丁基)-N′-苯基对苯二胺醌]]（[[6PPD-醌|6PPD-Q]]）相关的[[环境风险]]与[[环境归趋|归趋]]日益受到关注。本研究通过[[柱实验]]和[[分子动力学模拟|分子动力学（MD）模拟]]，考察了不同[[水化学条件]]（包括 [[pH]] 和[[电解质]]条件）下 [[6PPD]]-Q 的[[污染物运移|运移]]及[[腐殖酸]]（HA）对其运移的影响。MD 模拟揭示了 6PPD-Q 与 HA 之间的[[相互作用机制]]，包括[[范德华力]]（[[范德华相互作用|vdWs]]）、[[静电相互作用]]和[[氢键]]。总体而言，6PPD-Q 的迁移能力随 [[pH值|pH]] 降低和[[离子强度]]升高而减弱。在无电解质条件下，HA 通过提供额外的[[沉积位点]]并增强 6PPD-Q 的[[疏水性]]，抑制了其迁移。在含有 $\mathrm { C a C l } _ { 2 } ,$ 的中性条件下，HA 促进了 6PPD-Q 的运移，而在含有 [[氯化钠|NaCl]] 的中性条件下，HA 对 6PPD-Q 运移的影响可忽略不计。尽管 HA 表现出更强的[[结合亲和力]]，但仍未能使先前滞留在[[石英砂]]上的 6PPD-Q [[污染物再迁移|重新迁移]]。本研究为理解 6PPD-Q 的[[污染物环境行为|环境行为]]提供了新的机制认识，并量化了[[天然有机质]]介导的 6PPD-Q [[共运移]]风险，有助于预测 6PPD-Q 在地下环境中的归趋。

## 1. 引言

[[6PPD醌|N-(1,3-二甲基丁基)-N′-苯基对苯二胺醌]]（[[6PPD-醌|6PPD-Q]]）是[[轮胎橡胶抗氧化剂]] [[6PPD]] 的[[臭氧化]]转化产物（Datta et al., 2007; Tian et al., 2021），近年来引发了广泛的生态关注。6PPD-Q 已成为各种[[环境介质]]中普遍存在的污染物，包括[[地表水]]（Challis et al., 2021; Johannessen et al., 2021; Rauert et al., 2022）、[[土壤]]（Cao et al., 2022）和[[空气尘埃]]（Hiki et al., 2021; Huang et al., 2021; Zhang et al., 2022）。6PPD-Q 对多种生物表现出[[物种特异性毒性]]，例如[[鱼类]]（Di et al., 2024; Greer et al., 2023; Hiki et al., 2021; Hiki and Yamamoto, 2022; Roberts et al., 2025a; Roberts et al., 2025b; Tian et al., 2021）、[[两栖动物]]（Liu et al., 2024）、[[哺乳动物]]（Yao et al., 2024）、[[植物]]（Castan et al., 2023）和[[微生物]]（Xu et al., 2023; Zhou et al., 2025）。值得注意的是，新近证据表明，6PPD-Q 暴露可能带来[[人体健康风险]]（Tang et al., 2025; Zhang et al., 2024b）。鉴于其[[环境持久性]]和[[生物毒性]]，探究不同[[水化学条件]]下 6PPD-Q 在[[饱和多孔介质]]中的[[污染物迁移|迁移行为]]，对于理解其[[环境归趋|归趋]]和分布至关重要。

作为[[天然有机质]]（NOM）的关键组分，[[腐殖酸|HA]] 广泛存在于[[土壤]]、[[沉积物]]和[[地下水]]中，含有丰富的[[官能团]]（如[[羧基]]、[[羟基]]和[[酚羟基]]）。HA 能够[[吸附]][[疏水性有机污染物]]（Gan et al., 2019; Wang et al., 2011; Zhang et al., 2023b）、[[抗生素]]（Guo et al., 2016）和[[重金属]]（Chen et al., 2018; Wang et al., 2020）。此外，HA 通过改变共存污染物的[[化学形态]]，影响其[[生物毒性]]、[[生物有效性]]和[[生物累积]]（Geng et al., 2024; Liu et al., 2016; Sanchez-Marin et al., 2007; Suzuki and Shoji, 2020; You et al., 2023）。HA 可通过竞争[[吸附位点]]和增强[[静电排斥]]，促进某些[[磺胺类抗生素]]和[[甾体雌激素]]的迁移（Dong et al., 2021a; Wang et al., 2022）。类似地，研究发现，[[腐殖酸-重金属络合物|HA-重金属络合物]]的形成可促进重金属迁移（Chen et al., 2018; Wang et al., 2020）。相反，高浓度的 HA（1 mg $\mathrm { L } ^ { - 1 } )$ 通过提供额外的吸附位点抑制了 [[全氟辛酸|PFOA]] 和 [[全氟辛烷磺酸|PFOS]] 的迁移（Xing et al., 2022）。先前研究报道，污染物迁移能力与土壤中 HA 含量的增加呈负相关，这一现象归因于更强的[[吸附亲和力]]和更多的吸附位点（Lyu et al., 2019; Shi et al., 2019; Wang et al., 2024）。

[[分子动力学模拟|MD 模拟]]是研究污染物在分子尺度上[[污染物环境行为|环境行为]]的有力方法。MD 阐明了[[有机污染物]]（Chen et al., 2023b; Liu et al., 2023; Loganathan and Wilson, 2022; Peng et al., 2024; Xing et al., 2023）、[[抗生素]]（Yuan et al., 2024; Zhao et al., 2024）和[[重金属]]（Lan et al., 2019; Lan et al., 2016; Zhang et al., 2024a; Tan et al., 2019）与 [[天然有机质|NOM]]、[[黏土颗粒]]及其他[[微米颗粒|微米和纳米颗粒]]之间的[[相互作用机制]]，包括[[范德华力]]（[[范德华相互作用|vdWs]]）、[[静电相互作用]]、[[π-π相互作用|π−π 相互作用]]和[[氢键]]。通过分析[[共聚集|共聚集过程]]和[[相互作用能]]发现，[[多氯联苯|PCB]] 更容易与 [[微塑料|MPs]] 而非 [[腐殖酸|HA]] 结合，这主要由 vdWs 驱动（Chen et al., 2023a）。由于[[吸附位点]]增加和[[阳离子桥联作用]]增强，MPs 在[[海水]]中与[[芳香烃]]的相互作用强于在[[淡水]]中的相互作用（Liu et al., 2023）。MD 揭示了[[聚集形态]]，例如 HA 的线状和液滴状结构，以及[[生物炭纳米颗粒]]的平行和 V 形结构（Lan et al., 2022; Xing et al., 2023）。在 HA 与 $\mathrm { M P s , }$ 的稳定[[异质聚集]]过程中，[[疏水性]] MPs 被[[两亲性]] HA 包裹，从而增强了 MPs 的[[亲水性]]（Chen et $\mathrm { a l . }$ 2023b）。

为增进对 [[腐殖酸|HA]] 影响 [[6PPD-醌|6PPD-Q]] 迁移能力的认识，本研究考察了不同 [[pH]] $( 4 , 6 , 1 0 )$ 和[[电解质]]（1 mM [[氯化钠|NaCl]]、1 mM $\mathrm { C a C l _ { 2 } ) }$ 条件下 [[6PPD醌|6PPD-Q]] 的[[污染物迁移|单独迁移]]及 [[腐殖酸介导的迁移|HA 介导的迁移]]。本研究的目标如下：（1）考察 [[pH值|pH]] 和电解质条件对 [[6PPD]]-Q 在[[饱和多孔介质]]中迁移的影响；（2）研究不同浓度 HA 对 6PPD-Q 迁移的影响；（3）阐明不同浓度 HA 诱导预先滞留的 6PPD-Q [[污染物再迁移|再迁移]]的过程；（4）通过 [[分子动力学模拟|MD]] 揭示 6PPD-Q 与 HA 之间的[[相互作用机制]]。

## 2. 材料与方法

## 2.1. 材料

[[6PPD-醌|6PPD-Q]]（SCAH-101001，>99 %，[[Scr Biology Technology]]，中国）[[储备液]]的浓度为 1000 mg $\mathrm { L } ^ { - 1 }$。迁移实验中使用的 [[6PPD醌|6PPD-Q]] 工作浓度为 $0 . 5 \mathrm { m g L } ^ { - 1 }$ 采用[[高效液相色谱]]（HPLC，[[岛津LC-20AT液相色谱仪|LC-20AT]]，[[岛津公司|Shimadzu]]，日本）测定 [[6PPD]]-Q 的浓度。具体采样程序遵循我们先前的研究（Yu et al., 2024），上述方法的[[标准曲线]]见图 S1。

[[腐殖酸|HA]]（53680，>99 %，[[Sigma-Aldrich]]，U.S.A.）[[储备液]]的配制浓度为 1000 mg $\mathrm { L } ^ { - 1 }$，具体方法为先将 50 mg HA 粉末溶解于少量 [[氢氧化钠|NaOH]]（1000 mM）中，再用[[去离子水|去离子（DI）水]]稀释至 50 ml。将 10 或 100 μl 储备液溶于背景溶液或 0.5 mg $\mathrm { L } ^ { - 1 }$ [[6PPD-醌|6PPD-Q]] 溶液中，分别得到单独的 HA [[悬浮液]]或 [[6PPD]]-$\mathsf Q$ 与 HA 的混合悬浮液，HA 浓度为 0.1 或 1 mg ${ \mathrm { L } } ^ { - 1 } .$ 使用[[元素分析仪]]（[[Elementar Unicube元素分析仪|Elementar Unicube]]，德国）进行[[元素分析]]，结果表明，HA 中 C、H、N 和 O 的含量分别为 40.59、3.57、0.52 和 26.98 $^ { \% , }$（表 S1）。采用 [[傅里叶变换红外光谱仪|FTIR 光谱仪]]（[[Thermo Scientific Nicolet iS20红外光谱仪|Thermo Scientific Nicolet iS20]]，U.S.A.）对 HA 的[[官能团]]进行表征，结果见图 S2。HA 的特征谱带包括 O-H/N-H 伸缩振动 $( \sim 3 4 2 3 \mathrm { c m } ^ { - 1 } )$、脂肪族 C-H 伸缩振动 $( \sim 2 9 2 4 ~ \mathrm { { c m } } ^ { - 1 } )$、C=O 伸缩振动 $( \sim 1 7 0 2 ~ \mathrm { c m } ^ { - 1 } )$、C-O 伸缩振动/O-H 变形振动（\~1220 $\mathrm { c m } ^ { - 1 } )$ 和 C-O 伸缩振动（\~1094 和 $1 0 3 3 ( \mathrm { c m } ^ { - 1 } )$（Duarte et al., 2003; Esteves et al., 2009; Lan et al., 2022），表明其具有与 [[天然有机质|NOM]] 相似的官能团（Kim and Yu, 2005; Lumsdon and Fraser, 2005; Rodrí- guez et al., 2016）。作为 NOM 的主要组分，HA 在以往研究中被广泛用作 NOM 的代表，并成功推动了对 NOM [[污染物环境行为|环境行为]]的认识（Dong et al., 2020; Dong et al., 2016; Liu et al., 2016; You et al., 2023）。

采用粒径范围为 0.75–0.85 mm 的[[石英砂]]（Unimin Corporation, Unimin-Le Sueur, MN, U.S.A.）作为[[多孔介质]]。先用自来水清洗石英砂，再将其浸泡于 10 %（v/v）的硝酸中 48 h，随后用[[去离子水]]（DI 水）冲洗（Sun et al., 2018），然后在 $6 0 ~ ^ { \circ } \mathrm { C } .$ 下干燥。清洗后的石英砂在室温干燥条件下储存。

## 2.2. [[柱实验]]

[[柱实验]]系统由[[多孔介质]]、蠕动泵（BT300–2J，Longer Pump，中国）和自动部分收集器（BS-100A，上海沪西分析仪器厂有限公司，中国）组成。多孔介质通过在 PTFE 柱（内径 2.5 cm，长度 20.0 cm）内填充[[石英砂]]构建，柱两端均配有不锈钢筛网。[[饱和多孔介质]]的[[孔隙率]]约为 0.36。使用蠕动泵维持恒定的向上流动 $( 1 . 0 \mathrm { m L } \mathrm { m i n } ^ { - 1 } )$，并通过自动部分收集器以 4 min 的间隔连续收集出水样品。柱实验在不同[[水化学条件]]下进行，包括不同的 [[pH 梯度]]（4.0、6.0 和 10.0）和两种[[电解质]]类型（1 mM [[氯化钠|NaCl]] 和 1 mM [[氯化钙|CaCl]]）。使用少量 HCl（1000 mM）或 [[氢氧化钠|NaOH]]（1000 mM）调节 [[pH]]，忽略由此引起的电解质条件变化（Dong et al., 2020）。

每次实验前，均用超过 20 个孔隙体积（PVs）的背景溶液冲洗填砂柱进行预处理，以去除杂质。随后，向预平衡的柱中注入 2 PVs 在不同背景溶液条件下配制的工作溶液（[[6PPD-醌|6PPD-Q]] [[污染物迁移|单独迁移]]实验中为 0.5 mg $\mathrm { L } ^ { - 1 }$ [[6PPD醌|6PPD-Q]]，[[腐殖酸|HA]] 介导的 [[6PPD]]-Q 迁移实验中为 0.5 mg $\mathrm { L } ^ { - 1 }$ 6PPD-Q 与 0.1 或 1 mg $\mathrm { L } ^ { - 1 }$ HA 的混合物），之后注入 2 PVs 的背景溶液，以洗脱未被滞留的组分。为研究 HA 激活的预先滞留 6PPD-Q 的[[污染物再迁移|再迁移]]过程，使用 2 PVs 的 HA [[悬浮液]]（0.1 或 1 mg L<sup>−</sup> <sup>1</sup>）冲洗单独迁移实验所用的柱，随后再用 2 PVs 的相应背景溶液冲洗。利用流出液样品中的 6PPD-Q 浓度构建穿透曲线（[[穿透曲线|BTs]]），以量化 6PPD-Q 单独迁移及 HA 介导迁移的动态过程。所有[[柱实验]]均进行两次平行实验。6PPD-Q 的浓度高于环境浓度 $( 0 . 0 8 { - } 0 . 6 \mu \mathrm { g } \mathrm { L } ^ { - 1 } )$ (Challis et al., 2021; Rauert et al., 2022)，这是为了通过实验方法更好地展示其[[污染物运移|迁移行为]]；这种做法已成功促进了对新兴[[有机污染物]]迁移的理解 (Rong et al., 2023; Shi et al., 2018; Wu et al., 2024; Xing et al., 2021; Xu et al., 2022)。有机污染物和其他[[纳米颗粒]]的迁移随 [[pH]] 和[[离子强度]]升高而呈现的变化趋势几乎不依赖于输入浓度 (Chowdhury et al., 2011; Han et al., 2024; Ibrahim et al., 2019; Rong et al., 2023; Xing et al., 2016; Xu et al., 2022; Lv et al., 2018; Zhang et al., 2025)。同样，已有研究表明，在共存化合物与 HA 的不同比例下，HA 对共存化合物迁移的影响大致一致 (Cheng et al., 2016; Dong et al., 2020; Dong et al., 2016; Dong et al., 2021b; Ghosh et al., 2022)。因此，本研究揭示的核心机制和结论是可靠的，可用于解释自然环境中 6PPD-Q 的行为。此外，HA 的浓度处于 0.1 至 100 mg $\mathrm { L } ^ { - 1 }$ 的环境浓度范围内 (Janot et al., 2010; Xing et al., 2022)。

## 2.3. [[分子动力学模拟]]

模拟体系通过将 50 个 [[6PPD-醌|6PPD-Q]] 分子和 10 个 [[腐殖酸|HA]] 分子随机置于尺寸为 10 nm × 10 nm $\times 1 0$ nm 的立方盒中构建，并使用约 30,000 个[[水分子]]进行溶剂化。使用 $\mathrm { N a ^ { + } }$ 和 $\mathrm { C l ^ { - } }$ 中和体系电荷。在中性条件（[[pH]] 6.0）下，对具有不同 [[6PPD醌|6PPD-Q]] 与 HA 比例的体系进行 [[分子动力学模拟|MD 模拟]]，包括比例为 $^ { 1 2 / 1 }$（对应于含 0.5 mg $\mathrm { L } ^ { - 1 }$ [[6PPD]]-Q 和 0.1 mg $\mathrm { L } ^ { - 1 } \mathrm { H A } )$ 的迁移实验）、5/1 和 12/10（对应于含 0.5 mg $\mathrm { L } ^ { - 1 }$ 6PPD-Q 和 1 mg $\mathrm { L } ^ { - 1 }$ HA 的迁移实验）。上述三个体系中观察到了相似的[[分子构型|稳定构型]]（图 S3–5），此前的研究也证实了这一点 (Lado-Tourino ˜ and Vinegla, ˜ 2020; Salari et al., 2022; Tang et al., 2018)。考虑到[[柱实验]]中使用的 HA 浓度不同，并为降低计算成本，我们选择 6PPD-Q 与 HA 的比例为 $5 / 1$ 作为代表性条件。这些体系的详细组成汇总于表 S2。

Temple-Northeres-Birmingham（TNB）模型的组成与天然 [[天然有机质|NOM]] 相似，因此被广泛用于表征 [[腐殖酸|HA]]，并成功促进了对 HA 与共存化合物相互作用行为的理解（Jansen et al., 1996; Sein et al., 1999; Zhang et al., 2024a; Zhou et al., 2023; Chen et al., 2023b）。TNB 模型由三个[[羧基]]、三个[[羰基]]、两个[[酚羟基]]、两个胺基和四个醇[[羟基]]组成，总化学式为 $\mathrm { C _ { 3 6 } H _ { 4 0 } O _ { 1 6 } N _ { 2 } }$（完全质子化状态下）。TNB 模型具有与[[柱实验]]中所用 HA 相近的元素质量分数，并包含其所有特征[[官能团]]（表 S1 和图 S2）。TNB 模型中羧基（-COOH）的 pKa 范围为 4 至 5，在酸性条件（[[pH]] 4.0）下保持质子化，而在中性条件（[[pH值|pH]] 6.0）下发生[[去质子化]]（Ai et al., 2020; Ritchie and Perdue, 2003）。预计酚羟基（pKa≈9）在酸性和中性条件下均完全质子化（Ai et al., 2020; Ritchie and Perdue, 2003）。采用 Gaussian 16，在 def-SV(P) 基组和 M06-2X 泛函的量子化学计算水平上，结合 [[DFT]]-D3 (BJ) 色散校正，对 HA 进行几何优化。[[6PPD-醌|6PPD-Q]] 的化学结构取自 Pubchem，并同样采用 Gaussian 16，在 def2-TZVP 基组和 B3LYP 泛函的量子化学计算水平上，结合 [[密度泛函理论|DFT]]-D3 (BJ) 色散校正，进行几何优化。[[6PPD醌|6PPD-Q]] 和 HA 的详细分子结构及静电势见图 S6。

采用 [[GROMACS|GROMACS-2024.3]] 程序和[[通用Amber力场|通用 Amber 力场]]（General Amber Force Field，GAFF）进行 [[分子动力学模拟|MD 模拟]]（Tan et al., 2019）。采用[[扩展简单点电荷模型]]（SPC/E）描述[[水分子]]（Lan et al., 2022）。三个方向均施加[[周期性边界条件]]。首先采用[[最速下降算法]]进行[[能量最小化]]，以消除非物理性的[[排斥相互作用]]。随后，采用 [[V-rescale恒温器|V-rescale 恒温器]]，在 298 K 下于[[正则系综|正则（NVT）系综]]中对体系进行 50 ps 的平衡，再采用 [[Berendsen恒压器|Berendsen 恒压器]]，在 1 bar 下于[[等温等压系综|等温等压（NPT）系综]]中继续平衡 50 ps（Feng et al., 2022）。平衡后，采用 V-rescale 恒温器将温度维持在 298 K，并采用 [[Parrinello-Rahman恒压器|Parrinello-Rahman 恒压器]]将压力维持在 1 bar，以 2 fs 的[[积分步长]]进行 100 ns 的 [[分子动力学生产模拟|MD 生产模拟]]。[[短程静电相互作用]]和 [[范德华相互作用|vdWs 相互作用]]的[[截断距离|截断值]]均为 1.0 nm。采用[[粒子网格Ewald方法|粒子网格 Ewald]]（PME）方法计算[[长程静电相互作用]]，采用[[库仑定律]]直接计算短程[[静电相互作用]]。采用 [[LINCS算法|LINCS 算法]]约束[[键长]]。采用 [[VMD|VMD 1.9.3]] 进行可视化。

## 3. 结果与讨论

## 3.1. [[6PPD-醌|6PPD-Q]] 的[[污染物迁移|单独迁移]]

不同 [[pH]] 和[[电解质]]条件下 [[6PPD-醌|6PPD-Q]] 迁移的 [[穿透曲线|BTs]] 如图 1 所示。在无电解质、[[pH值|pH]] 为 $4 , 6 ,$ 和 10 的条件下，[[6PPD醌|6PPD-Q]] 的[[质量回收率]]（MR）分别为 32.61 %、33.76 % 和 69.81 ${ \% } ,$（表 1），表明其迁移能力随 pH 升高而增强。根据 [[6PPD]]-Q 在[[石英砂]]上的稳定[[吸附]]结构（图 S7a），[[氢键]]和[[疏水相互作用]]被确定为 6PPD-Q 滞留的主要机制。随着 pH 升高，[[硅醇基]]（≡Si-O-H）的[[去质子化]]程度增加，使石英砂的[[亲水性]]增强，并削弱了 6PPD-Q 与石英砂之间的疏水相互作用（Nguyen et al., 2020）。此外，6PPD-Q 的[[醌基]]与石英砂硅醇基之间的氢键减少，从而促进了 6PPD-Q 迁移能力的增强。

在含 [[氯化钠|NaCl]] 和 [[氯化钙|CaCl]] 的中性条件（[[pH]] 6）下，[[6PPD-醌|6PPD-Q]] 的 [[质量回收率|MR]] 分别为 17.67 % 和 14.88 %（表 1），表明其迁移能力随[[离子强度]]增加而降低。[[阳离子]]通过压缩[[双电层]]并中和负电荷，降低[[静电排斥|静电排斥作用]]，从而增强了 [[6PPD醌|6PPD-Q]] 在[[石英砂]]上的滞留（Lyu et al., 2020; Wang and Shih, 2011）。此外，[[二价阳离子]] $( \mathsf { C a } ^ { 2 + } )$ 在 [[6PPD]]-Q 的[[醌基]]与石英砂的[[羟基]]之间形成[[阳离子桥联|阳离子桥]]，进而促进 6PPD-Q [[沉积]]（Xing et al., 2021）。与[[一价阳离子]]（Na<sup>+</sup>）相比，二价阳离子 $( \mathsf { C a } ^ { 2 + } )$ 对 6PPD-Q 迁移表现出更显著的抑制作用，这一发现与先前研究一致（Lv et al., 2018; Shi et al., 2018; Xing et al., 2021）。

## 3.2. [[腐殖酸|HA]] 介导的 [[6PPD-醌|6PPD-Q]] 迁移

[[腐殖酸|HA]] 介导的 [[6PPD-醌|6PPD-Q]] 迁移的 [[穿透曲线|BTs]] 如图 2 所示。在无[[电解质]]、[[pH值|pH 值]]为 4 至 10 的条件下，HA 阻碍了 [[6PPD醌|6PPD-Q]] 的迁移；而在含 [[氯化钠|NaCl]] 的中性条件（[[pH]] 6）下，HA 对 [[6PPD]]-Q 的迁移无明显影响，在含 $\mathrm { C a C l } _ { 2 } ,$ 的条件下，HA 则增强了 6PPD-Q 的迁移能力（表 1）。

在无[[电解质]]的酸性条件（[[pH]] 4）下，与不含 [[腐殖酸|HA]] 时相比，HA 浓度分别为 0.1 和 1 mg $\mathrm { L } ^ { - 1 }$ 时，[[6PPD-醌|6PPD-Q]] 的 [[质量回收率|MR]] 分别降低了 10.51 % 和 16.92 %（表 1）。[[分子动力学模拟|MD 模拟]]表明，几乎所有 HA 分子均与 [[6PPD醌|6PPD-Q]] 发生相互作用（图 3b 和 S8），且 [[6PPD]]-Q 与 HA 之间的相互作用增强了 6PPD-Q 的[[疏水性]]（表 S3），导致其迁移能力降低。随着 HA 浓度增加，其对 6PPD-Q 疏水性的增强作用更加显著，从而进一步降低了其迁移能力。

在无[[电解质]]的中性条件（[[pH]] 6）下，与不含 [[腐殖酸|HA]] 时相比，HA 浓度为 0.1 和 1 mg $\mathrm { L } ^ { - 1 }$ 时，[[6PPD-醌|6PPD-Q]] 的 [[质量回收率|MR]] 分别降低了 14.35 % 和 8.59 %（表 1）。由于 HA [[羧基]]的[[去质子化]]，[[相互作用能]]以及与 [[6PPD醌|6PPD-Q]] 相互作用的 HA 数量均有所降低（图 3c 和 S4）。部分 HA 未与 [[6PPD]]-Q 相互作用，而是直接滞留在[[石英砂]]上，从而提供了额外的[[滞留位点]]（Xing et al., 2022），并抑制了 6PPD-Q 的迁移；6PPD-Q 与 HA 之间的[[结合能]]强于 6PPD-Q 与砂之间的结合能，这一结果支持了上述结论（图 S7）。在不同 6PPD-Q 与 HA 比例下进行的 [[分子动力学模拟|MD]] 表明，随着该比例降低，更多 HA 分子保持孤立状态（图 S3–5）。由于 MD 体系中不存在石英砂，MD 结果无法直接呈现孤立的 6PPD-Q 和 HA 在注入[[多孔介质]]后重新结合的过程。0.5 mg $\mathrm { L } ^ { - 1 }$ 6PPD-Q 与 1 mg $\mathrm { L } ^ { - 1 }$ HA 混合物的 [[Zeta电位|zeta 电位]]可能比 0.5 mg $\mathrm { L } ^ { - 1 }$ 6PPD-Q 与 0.1 mg $\mathrm { L } ^ { - 1 }$ HA 混合物的 zeta 电位更负，这可能通过增强[[静电排斥]]而减弱 HA 对 6PPD-Q 迁移的抑制作用（Dong et al., 2020; Xing et al., 2024; Yang et al., 2016）。

在无[[电解质]]的碱性条件（[[pH]] 10）下，与不含 [[腐殖酸|HA]] 时相比，HA 浓度为 0.1 和 1 mg L<sup>−</sup> <sup>1</sup> 时，[[6PPD-醌|6PPD-Q]] 的 [[质量回收率|MR]] 分别降低了 3.85 % 和 19.58 %（表 1）。在碱性条件下，进一步[[去质子化]]增加了 HA 的负电荷（Christl and Kretzschmar, 2001），使 [[6PPD醌|6PPD-Q]] 与 HA 之间的相互作用弱于中性条件下的相互作用。HA 可提供额外的[[滞留位点]]（Xing et al., 2022），并抑制 [[6PPD]]-Q 的迁移，这与中性条件下的现象相似。在碱性条件下，[[石英砂]]更不利于 HA [[沉积]]，HA 表现出更强的迁移能力（Liu et al., 2017）。与中性条件相比，低浓度 HA（0.1 mg $\mathrm { L } ^ { - 1 } )$ 对 6PPD-Q 迁移能力的抑制作用较弱，这是由于其沉积量较低。随着 HA 浓度升高，更多 HA 发生沉积，提供了更多[[吸附位点]]，进一步降低了 6PPD-Q 的迁移能力。

![](<../2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/images/b742584209283c0fa25317774a7999f5ae537eb47a4054c3cfe3a5883e5658d5.jpg>)

![](<../2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/images/cf2a4b76c995bc02b8e3f9ebf52a81752dbb4f5b6116bce86241d11f7e27d876.jpg>)

![](<../2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/images/9a89de6b51d465612f9f48d601eeff928a4edd6118707b60872f13a61417a76e.jpg>)

![](<../2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/images/d8fa518085923d0d9b4f0a7e71fcaec13534ddcd3461dbf8daf243912b81381e.jpg>)

![](<../2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/images/06c81d678ab4cd65d885f3f7454cafaf3737851e3987d70a97a727d5cc925c65.jpg>)  
图 1. 不同 pH 和电解质条件下 6PPD-Q 的单独迁移（第 I 部分）以及不同浓度 HA 激活的 6PPD-Q 再迁移（第 II 部分）（a：无电解质的酸性条件（pH 4）；b：无电解质的中性条件（pH 6）；c：无电解质的碱性条件（pH 10）；d：含 NaCl 的中性条件（pH 6）；e：含 CaCl 的中性条件（pH 6））。

在含 [[氯化钠|NaCl]] 的中性条件（[[pH]] 6）下，[[腐殖酸|HA]] 浓度为 0.1 和 1 mg $\mathrm { L } ^ { - 1 }$ 时，[[6PPD-醌|6PPD-Q]] 的 [[质量回收率|MR]] 变化可忽略不计（表 1）。这一现象可能归因于提供额外[[沉积位点]]所产生的抑制作用与作为[[迁移载体]]所产生的促进作用相互抵消。

在含有 [[氯化钙|CaCl]] 的中性条件（[[pH]] 6）下，与不含 [[腐殖酸|HA]] 时相比，HA 浓度分别为 0.1 和 1 mg L<sup>−</sup> <sup>1</sup> 时，[[6PPD-醌|6PPD-Q]] 的 [[质量回收率|MR]] 分别增加了 14.27 % 和 8.48 %（表 1）。根据 [[分子动力学模拟|MD]] 的回转轨迹和[[径向分布函数]]（RDF）（图 S9 和 S10d），$\mathsf { C a } ^ { 2 + }$ 充当[[阳离子桥联|阳离子桥]]，促进了 [[6PPD醌|6PPD-Q]]-HA 聚集。HA 通过充当运输载体促进了 [[6PPD]]-Q 的迁移。此外，HA 的存在降低了[[石英砂]]的 [[Zeta电位|zeta 电位]]（Wu et al., 2024），最终增强了 6PPD-Q 与石英砂之间的[[静电排斥]]，促进了 6PPD-Q 的迁移。由于活性相互作用位点有限，HA 浓度升高导致更多 HA 直接滞留在[[砂粒]]上，从而削弱了 HA 对 6PPD-Q 迁移的促进作用。

## 3.3. [[6PPD-醌|6PPD-Q]] 的[[再迁移输运]]

在不同 [[pH]] 和[[电解质]]条件下注入 [[腐殖酸|HA]] 时，[[6PPD-醌|6PPD-Q]] [[再迁移输运]]的 [[穿透曲线|BTs]] 如图 1 所示。在所有背景条件下，注入 HA（0.1 或 1 mg $\mathrm { L } ^ { - 1 } )$ 后，均未观察到预先滞留的 [[6PPD醌|6PPD-Q]] 发生[[污染物再迁移|再迁移]]输运。尽管 [[6PPD]]-Q 与 HA 之间的[[结合能]]强于 6PPD-Q 与[[石英砂]]之间的结合能（图 S7），但由于石英砂界面存在较高的[[能垒]]，HA 未能使预先滞留的 6PPD-Q 释放。此外，HA 对 6PPD-Q 的置换和[[解吸]]需要较长时间（Zhang et al., 2023a），且在水动力条件下，HA 未能与滞留的 6PPD-Q 发生有效相互作用。此外，HA 的[[分子构象]]施加了[[几何约束]]，表明 6PPD-Q 和 HA 上的主要[[结合位点]]在空间上无法相互接近（Lan et al., 2022）。先前研究表明，预先滞留污染物的再迁移输运并非仅由结合能决定（Gao et al., 2022; Wu et al., 2019），还受到[[分子微观运动]]的关键影响（Yu et al., 2024）。

## 3.4. [[分子动力学模拟]]

为阐明 [[6PPD-醌|6PPD-Q]] 与 [[腐殖酸|HA]] 之间的相互作用模式及机制，开展了 [[分子动力学模拟|MD 模拟]]，三个体系的代表性构型如图 3 和图 S4&8&9 所示。在结合初期，[[6PPD醌|6PPD-Q]] 通过[[疏水相互作用]]发生聚集，部分 [[6PPD]]-Q 与 HA 直接相互作用，形成小型 6PPD-Q HA [[团簇]]（图 S8b）。

在无[[电解质]]的酸性条件下，随着模拟的进行，[[团簇]]逐渐结合，通过 [[6PPD-醌|6PPD-Q]] 的桥联形成更大的[[聚集体]]（图 S8c）。[[6PPD醌|6PPD-Q]] 通过[[表面吸附]]或包埋于大分子结构内部的方式与 [[腐殖酸|HA]] 结合。此外，[[6PPD]]-Q 优先通过预先[[吸附]]的 6PPD-Q 与 HA 结合，而非直接结合。在模拟约 60 ns 时形成了稳定结构，其中所有 HA 和 6PPD-Q 均紧密相互作用（图 3b）。能量分析表明，[[静电相互作用]]和 [[范德华力|vdWs]] 均促进了 6PPD-Q 与 HA 之间的相互作用，且两者的作用相当（图 4a）。为验证 HA 对 6PPD-Q [[疏水性]]的影响，开展了仅含 6PPD-Q 的模拟。与单一体系相比，水与 6PPD-Q 之间形成的[[氢键]]更少（表 S3），表明 HA 通过[[空间排斥]]和占据氢键位点遮蔽了[[亲水官能团|亲水性官能团]]，从而增强了 6PPD-Q 的疏水性（Tang et al., 2017）。

在无[[电解质]]的中性条件下，由于[[羧基]][[去质子化]]，[[腐殖酸|HA]] 不利于与 [[6PPD-醌|6PPD-Q]] 相互作用，且 HA 分子之间相互排斥。经过约 60 ns 的模拟后，[[6PPD醌|6PPD-Q]] 在内部聚集形成[[疏水核]]，HA 则通过弯曲自身结构包裹在外部（图 3c），这一现象与 HA 和[[微塑料]]之间的相互作用相似（Chen et al., 2023b）。[[分子构型|稳定构型]]由游离的 [[6PPD]]-Q、游离的 HA 和 [[6PPD醌与腐殖酸复合物|6PPD-Q-HA 复合物]]组成，具体而言，10 个 HA 分子中有 4 个未与 6PPD-Q 接触（图 S4f），这支持了 HA 对 6PPD-Q 迁移的抑制作用。与酸性条件相比，6PPD-Q 与 HA 之间的[[相互作用能]]显著减弱，且 [[范德华力|vdWs]] 比[[静电相互作用]]发挥了更突出的作用（图 4b）。此外，6PPD-Q、HA 和[[水分子]]之间形成了更多[[氢键]]（表 S3），表明[[聚集体]]较为疏松，较小的 [[回转半径|Rg]] 也说明了这一点（图 S11）。

表 1  
所有[[柱实验]]的实验条件与结果汇总。

<table><tr><td>背景溶液</td><td>类型</td><td> $C_{06PPD-Q}$  (mg  $L^{-1}$ )</td><td> $C_{0HA}$  (mg  $L^{-1}$ )</td><td>6PPD-Q 的 MR (%)</td><td>再迁移的 6PPD-Q 的 MR (%)</td></tr><tr><td rowspan="5">DI 水（酸性，pH = 4）</td><td>6PPD-Q 单独迁移</td><td>0.5</td><td>-</td><td>32.61</td><td>-</td></tr><tr><td>HA 介导的</td><td>0.5</td><td>0.1</td><td>22.10</td><td>-</td></tr><tr><td>6PPD-Q 迁移</td><td>0.5</td><td>1</td><td>15.69</td><td>-</td></tr><tr><td>HA 激活的</td><td>-</td><td>0.1</td><td>-</td><td>0</td></tr><tr><td>6PPD-Q 再迁移运输</td><td>-</td><td>1</td><td>-</td><td>0</td></tr><tr><td rowspan="5">DI 水（中性，pH = 6）</td><td>6PPD-Q 单独迁移</td><td>0.5</td><td>-</td><td>33.76</td><td>-</td></tr><tr><td>HA 介导的</td><td>0.5</td><td>0.1</td><td>19.41</td><td>-</td></tr><tr><td>6PPD-Q 迁移</td><td>0.5</td><td>1</td><td>25.17</td><td>-</td></tr><tr><td>HA 激活的</td><td>-</td><td>0.1</td><td>-</td><td>0</td></tr><tr><td>6PPD-Q 再迁移运输</td><td>-</td><td>1</td><td>-</td><td>0</td></tr><tr><td rowspan="5">DI 水（碱性，pH = 10）</td><td>6PPD-Q 单独迁移</td><td>0.5</td><td>-</td><td>69.81</td><td>-</td></tr><tr><td>HA 介导的</td><td>0.5</td><td>0.1</td><td>65.96</td><td>-</td></tr><tr><td>6PPD-Q 迁移</td><td>0.5</td><td>1</td><td>50.23</td><td>-</td></tr><tr><td>HA 激活的</td><td>-</td><td>0.1</td><td>-</td><td>0</td></tr><tr><td>6PPD-Q 再迁移运输</td><td>-</td><td>1</td><td>-</td><td>0</td></tr><tr><td rowspan="5">1 mM NaCl（中性，pH = 6）</td><td>6PPD-Q 单独迁移</td><td>0.5</td><td>-</td><td>17.67</td><td>-</td></tr><tr><td>HA 介导的</td><td>0.5</td><td>0.1</td><td>18.95</td><td>-</td></tr><tr><td>6PPD-Q 迁移</td><td>0.5</td><td>1</td><td>18.43</td><td>-</td></tr><tr><td>HA 激活的</td><td>-</td><td>0.1</td><td>-</td><td>0</td></tr><tr><td>6PPD-Q 再迁移运输</td><td>-</td><td>1</td><td>-</td><td>0</td></tr><tr><td rowspan="5">1 mM  $CaCl_2$ （中性，pH = 6）</td><td>6PPD-Q 单独迁移</td><td>0.5</td><td>-</td><td>14.88</td><td>-</td></tr><tr><td>HA 介导的</td><td>0.5</td><td>0.1</td><td>29.15</td><td>-</td></tr><tr><td>6PPD-Q 迁移</td><td>0.5</td><td>1</td><td>23.36</td><td>-</td></tr><tr><td>HA 激活的</td><td>-</td><td>0.1</td><td>-</td><td>0</td></tr><tr><td>6PPD-Q 再迁移运输</td><td>-</td><td>1</td><td>-</td><td>0</td></tr></table>

C 和 $\mathrm { C _ { 0 H A } }$ 分别指 [[6PPD-醌|6PPD-Q]] 和 [[腐殖酸|HA]] 的[[进水浓度]]；[[质量回收率|MR]] 指质量回收率，用于表征 [[6PPD醌|6PPD-Q]] 的迁移能力。短横线表示在该迁移实验中未向柱内注入 [[6PPD]]-Q 或 HA。数字 0 表示未观察到[[污染物再迁移|再迁移]]的 6PPD-Q 穿透。

在含有 $\mathrm { C a C l } _ { 2 } , \ \mathrm { C a } ^ { 2 + }$ 的中性条件下，[[腐殖酸|HA]] 的[[同质聚集]]得到促进，同时 [[6PPD-醌|6PPD-Q]] [[吸附]]于 HA [[聚集体]]表面（图 3d）。在 50 ns 过程中，HA 和 [[6PPD醌|6PPD-Q]] 聚集成一个大[[团簇]]，随后发生了聚集体的分散和构型调整（图 S9）。[[径向分布函数|RDF]] 证实了 [[6PPD]]-Q 的氧与 HA 的氧之间存在 $\mathsf { C a } ^ { 2 + }$ 桥联（图 S10d）。在第一层中，$\mathsf { C a } ^ { 2 + }$ 与 HA 的[[去质子化]][[羧基]]和[[羰基]]直接相互作用（[[内层相互作用]]，\~0.26 nm）；在第二层中，$\mathrm { { C a ^ { 2 + } } }$ 通过[[静电吸引]]与 HA 相互作用（[[外层相互作用]]，\~0.35 nm），并[[电荷屏蔽|屏蔽 HA 的电荷]]，从而促进 HA 聚集（Lan et al., 2019; Lan et al., 2016; Tan et al., 2019; Zhang et al., 2024a）。由于[[相互作用能]]更大、[[氢键]]更多且存在 $\mathrm { C a ^ { 2 + } }$ 桥联（图 4c&d），HA 与 6PPD-Q 的相互作用比不含[[电解质]]的中性条件下更为紧密。

除 [[范德华力|vdWs]] 和[[静电相互作用]]外，[[氢键]]在 [[6PPD-醌|6PPD-Q]] 与 [[腐殖酸|HA]] 的相互作用中也发挥了重要作用。图 4d 展示了上述三个模拟体系中 [[6PPD醌|6PPD-Q]] 与 HA 之间氢键的平均数量，表明酸性条件下 [[6PPD]]-Q 与 HA 之间形成的氢键多于中性条件下。此外，在酸性条件下，包括[[羟基]]、[[羧基]]和[[羰基]]在内的[[亲水官能团]]是主要的氢键形成位点，而在中性条件下，氢键主要形成于 6PPD-Q 的[[醌基]]与 HA 的羟基之间。$\mathsf { C a } ^ { 2 + }$ 促进了 6PPD-Q 的[[亚胺基]]与 HA 的羰基之间的氢键形成。[[径向分布函数|RDF]] 也支持上述结论（图 S10）。

通过[[轨迹分析]]以及 [[6PPD-醌|6PPD-Q]] 与 [[腐殖酸|HA]] 四个子区域之间的[[最小距离分析]]（图 S12&13）可知，在含有和不含 [[氯化钙|CaCl]] 的中性条件下，[[6PPD醌|6PPD-Q]] 倾向于靠近两条[[亲水支链]]，而非具有两个[[去质子化]][[羧基]]（COO-）的支链和[[疏水核|疏水核心]]。这一结论与 [[DFT]] 揭示的结果一致，即高能[[吸附位点]]为亲水支链上的[[羟基]]（图 S7c&d）。

[[6PPD-醌|6PPD-Q]] 与 [[腐殖酸|HA]] 的[[摩尔比]]几乎不影响定性的[[相互作用机制]]和[[吸附形态]]（图 S3–5），但无疑会影响 [[6PPD醌|6PPD-Q]] 与 HA 之间的[[相互作用能]]（表 S4）。在中性条件下，[[6PPD]]-Q 与 HA 摩尔比为 12–120/10 的模拟体系中，[[分子构型|稳定构型]]始终由孤立的 HA 和 6PPD-Q 分子以及被 HA 包裹的 [[分子聚集体|6PPD-Q 聚集体]]组成（图 S3–5）。在不同摩尔比的体系中，[[范德华力|vdWs]] 和[[静电相互作用]]均在 6PPD-Q 与 HA 的相互作用中发挥重要作用（表 S4）。随着 6PPD-Q/HA 比值降低，[[相互作用强度]]减弱，这与观察到更多孤立 HA 分子以及相互作用能相应降低的结果一致（表 S4）。

## 4. 结论

本研究考察了不同 [[pH 梯度]]和[[电解质]]条件下 [[6PPD-醌|6PPD-Q]] 的[[污染物迁移|单独迁移]]及 [[腐殖酸介导的迁移|HA 介导的迁移]]。由于[[氢键]]和[[疏水相互作用]]减弱，[[6PPD醌|6PPD-Q]] 的[[污染物迁移性|迁移性]]随 [[pH]] 升高而增强。[[阳离子]]（Na<sup>+</sup> 和 $\mathsf { C a } ^ { \bar { 2 } + } )$ 的存在会削弱 [[6PPD]]-Q 与[[砂粒]]之间的[[静电排斥]]，从而降低其迁移性。在不同背景条件下，[[腐殖酸|HA]] 对 6PPD-Q 迁移表现出不同的影响。具体而言，在酸性条件下，HA 与 6PPD-Q 紧密相互作用，并增强其[[疏水性]]，最终抑制了 6PPD-Q 的迁移。在中性和碱性条件下，HA 提供了额外的[[吸附位点]]，降低了 6PPD-Q 的迁移性。在含有 $\mathrm { C a C l _ { 2 } } ,$ 的中性条件下，HA 充当[[迁移载体]]，增强了 6PPD-Q 的迁移性。预先滞留的 6PPD-Q 无法被 HA 再次活化迁移，表明 HA 的[[界面运动]]对 6PPD-Q 的[[污染物再活化迁移|再活化迁移]]起着重要作用。本研究结果揭示，HA 显著影响自然环境中 6PPD-Q 的迁移和[[空间分布]]，提高了对其[[环境归趋]]的预测能力，并为制定缓解策略提供了依据。尽管本研究使用的 6PPD-Q 浓度相对高于环境水平，但在不同条件下观察到的 6PPD-Q 迁移性变化趋势及其

![](<../2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/images/e81b5f96d979c99ded754b17e3c5ce3ad8f9911c44b6414e8e57d2fd624c8bd6.jpg>)

![](<../2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/images/6ce07b73577666c96951876d6289e1855f4fa87c7e351c3870172ee0c00e86ab.jpg>)

![](<../2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/images/8ed25372824addcda2a3075e5f9d1fe98825e9fb97762dd39da4e5c78a7ada9c.jpg>)

![](<../2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/images/7253e0b85a5d7eaf559ba1fe57293baecf48c69302f0ccbed072b37d4373057a.jpg>)

![](<../2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/images/0798bd576b8a475dcc2c6734044eebfb6883ba0e3eb25c8f2125a4949da31219.jpg>)  
图 2. 不同 pH 和电解质条件下 HA 介导的 6PPD-Q 迁移（a：无电解质的酸性条件（pH 4）；b：无电解质的中性条件（pH 6）；c：无电解质的碱性条件（pH 10）；d：含 NaCl 的中性条件（pH 6）；e：含 CaCl 的中性条件（pH 6））。

![](<../2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/images/20d9070cfa83da34d070975810f1ebfbe6f33bc3815cc3e5c166f338b622dbb2.jpg>)

![](<../2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/images/0eb19e5a997964a7e2a83ec42e648f98d85d709706d0a809b92fa383132b9bbb.jpg>)

![](<../2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/images/0a5b53fc853be4b44da2b9ee033877c6f73558f21bac3b2daf90c5068ab98220.jpg>)

![](<../2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/images/7586ad00c6c2c687b39d5917cc1d081838666bf4380ada09ba04bd002fc6ef8e.jpg>)  
图 3. 无电解质的酸性条件（pH 4）下的初始结构（a），以及 6PPD-Q 与 HA 的比例为 5/1 时，无电解质的酸性条件（pH 4）（b）、无电解质的中性条件（pH 6）（c）和含 CaCl 的中性条件（pH 6）（d）下 6PPD-Q 与 HA 的代表性构型。

内在机制为理解 [[6PPD-醌|6PPD-Q]] 的[[污染物环境行为|环境行为]]提供了有价值的见解。未来研究应依托检测方法的进步，考察[[环境相关浓度]]及更接近实际的[[土壤]]条件（例如[[土壤矿物]]、[[非饱和多孔介质]]和[[非均质介质]]）下 [[6PPD醌|6PPD-Q]] 的[[污染物迁移|迁移行为]]。

![](<../2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/images/f5f542ad42eb2a59321997295809f33dc4031a3e79fe255752836e5e8a38fab1.jpg>)  
时间（ps）

![](<../2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/images/05889677e08274459de31a78c7b3c854b692689600273bde7c4ccffd6dea20f6.jpg>)

![](<../2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/images/c8405c5002c07cf2b9204f00aded2deb56fcb72e94c11531332688a200bd9889.jpg>)

时间（ps）  
![](<../2.SCI_MD/The humic acid-mediated mechanism of 6PPD-Q during transport process in porous media Insights from column experiments and molecular dynamics simulations/images/496b52b35159b93d4307b43bc3f78f9a4aadae35e8d95cee62e9c1e8cdcfdb36.jpg>)  
图 4. 6PPD-Q 与 HA 的比例为 5/1 时，三个模拟体系中 6PPD-Q-HA 相互作用能随时间的变化（a：无电解质的酸性条件（pH 4）；b：无电解质的中性条件（pH 6）；c：含 CaCl<sub>2</sub> 的中性条件（pH 6）），以及 6PPD-Q 与 HA 不同官能团之间的氢键 $( \mathsf { d } , \mathsf { Q } \mathsf { A } _ { \mathsf { a c i d } } .$ 无电解质的酸性条件（pH 4）；${ \mathrm { Q A } } _ { \mathrm { n e u t } } { \mathrm { : } }$ 无电解质的中性条件（pH 6）；$\mathbf { Q A _ { \mathrm { e l e c t } } } \mathrm { : }$ 含 CaCl 的中性条件（pH 6）；Q：6PPD-Q；A：HA）。

## [[CRediT 作者贡献分类法|CRediT]] 作者贡献声明

[[Qianhui Yu]]：写作——初稿撰写、可视化、方法学、研究实施。[[Shunan Dong]]：写作——审阅与编辑、监督指导、方法学、经费获取。[[Jianyou Zhu]]：监督指导。[[Genhe He]]：方法学、资源提供、监督指导。[[Jingjie Dong]]：可视化、数据整理。[[Yanan Sun]]：方法学、研究实施。[[Liting Sheng]]：研究实施、经费获取。[[Yuanyuan Sun]]：验证、方法学。[[Jichun Wu]]：监督指导。

## [[利益冲突]]声明

作者声明，不存在任何已知的、可能被认为会影响本文所报告工作的财务[[利益冲突]]或个人关系。

## 致谢

本研究得到了[[国家自然科学基金]]（42277001 & 52309047）和[[国家重点研发计划]]（2024YFC3211100）的资助。

## 附录 B. 补充数据

本文的补充数据可在线获取，网址为 https://doi. org/10.1016/j.envpol.2025.127587.

## [[数据可用性]]

数据可应要求提供。

## References

Ai, Y., Zhao, C., Sun, L., Wang, X., Liang, L., 2020. Coagulation mechanisms of humic acid in metal ions solution under different pH conditions: a molecular dynamic

simulation. Sci. Total Environ. 702, 135072. https://doi.org/10.1016/j scitotenv.2019.135072.

Cao, G., Wang, W., Zhang, J., Wu, P., Zhao, X., Yang, Z., Hu, D., Cai, Z., 2022. New evidence of rubber-derived quinones in water, air, and soil. Environ. Sci. Technol. 56 (7), 4142 4150. https://doi.org/10.1021/acs.est.1c07376.

Castan, S., Sherman, A., Peng, R.T., Zumstein, M.T., Wanek, W., Hüffer, T., Hofmann, T., 2023. Uptake, metabolism, and accumulation of tire wear particle-derived compounds in lettuce. Environ. Sci. Technol. 57 (1), 168–178. https://doi.org/ 10.1021/acs.est.2c05660.

Challis, J.K., Popick, H., Prajapati, S., Harder, P., Giesy, J.P., McPhedran, K., Brinkmann, M., 2021. Occurrences of tire rubber-derived contaminants in cold climate urban runoff. Environ. Sci. Technol. Lett. 8 (11), 961–967. https://doi.org/ 10.1021/acs.estlett.1c00682.

Chen, C., Zhao, K., Shang, J., Liu, C., Wang, J., Yan, Z., Liu, K., Wu, W., 2018. Uranium (VI) transport in saturated heterogeneous media: influence of kaolinite and humic acid. Environ. Pollut. 240, 219–226. https://doi.org/10.1016/j.envpol.2018.04.095.

Chen, Y., Li, H., Yin, Y., Shan, S., Huang, T., Tang, H., 2023a. Effect of microplastics on the adherence of coexisting background organic contaminants to natural organic matter in water. Sci. Total Environ. 905, 167175. https://doi.org/10.1016/j. scitotenv.2023.167175.

Chen, Y., Tang, H., Cheng, Y., Huang, T., Xing, B., 2023b. Interaction between microplastics and humic acid and its effect on their properties as revealed by molecular dynamics simulations. J. Hazard. Mater. 455, 131636. https://doi.org/ 10.1016/j.jhazmat.2023.131636.

Cheng, D., Liao, P., Yuan, S., 2016. Effects of ionic strength and cationic type on humic acid facilitated transport of tetracycline in porous media. Chem. Eng. J. 284, 389–394. https://doi.org/10.1016/j.cej.2015.08.159.

Chowdhury, I., Hong, Y., Honda, R.J., Walker, S.L., 2011. Mechanisms of TiO nanoparticle transport in porous media: role of solution chemistry, nanoparticle concentration, and flowrate. J. Colloid Interface Sci. 360 (2), 548 555. https://doi. org/10.1016/j.jcis.2011.04.111.

Christl, I., Kretzschmar, R., 2001. Relating ion binding by fulvic and humic acids to chemical composition and molecular size. 1. Proton binding. Environ. Sci. Technol. 35 (12), 2505–2511. https://doi.org/10.1021/es0002518.

Datta, R.N., Huntink, N.M., Datta, S., Talma, A.G., 2007. Rubber vulcanizates degradation and stabilization. Rubber Chem. Technol. 80 (3), 436–480. https://doi. org/10.5254/1.3548174.

Di, S., Xu, H., Yu, Y., Qi, P., Wang, Z., Liu, Z., Zhao, H., Jin, Y., Wang, X., 2024. Environmentally relevant concentrations of S-6PPD-Quinone caused more serious hepatotoxicity than R-Enantiomer and racemate in Oncorhynchus mykiss. Environ Sci. Technol. 58 (40), 17617 17628. https://doi.org/10.1021/acs.est.4c06357.

Dong, P., Qiu, W., He, X., Zhang, Y., Zheng, C., 2021. Analysis of physicochemical factors regulating transport behaviors of sulfonamide antibiotics in saturated porous media. J. Hydrol. 599, 126381. https://doi.org/10.1016/j.jhydrol.2021.126381.

Dong, S., Cai, W., Sheng, L., Wang, W., Liu, H., Xia, J., 2020. Combined effect of physicochemical factors on the retention and transport of g-C N in porous media. Chemosphere 256, 127100. https://doi.org/10.1016/j.chemosphere.2020.127100.

Dong, S., Gao, B., Sun, Y., Shi, X., Xu, H., Wu, J., Wu, J., 2016. Transport of sulfacetamide and levofloxacin in granular porous media under various conditions: experimental observations and model simulations. Sci. Total Environ. 573, 1630–1637. https://doi.org/10.1016/j.scitotenv.2016.09.164.

Dong, S., Xia, J., Sheng, L., Wang, W., Liu, H., Gao, B., 2021. Transport characteristics of fragmental polyethylene glycol terephthalate (PET) microplastics in porous media under various chemical conditions. Chemosphere 276, 130214. https://doi.org/ 10.1016/j.chemosphere.2021.130214.

Duarte, R., Santos, E.B.H., Duarte, A.C., 2003. Spectroscopic characteristics of ultrafiltration fractions of fulvic and humic acids isolated from an eucalyptus bleached Kraft pulp mill effluent. Water Res. 37 (17), 4073–4080. https://doi.org/ 10.1016/s0043-1354(03)00411-1.

Esteves, V.I., Otero, M., Duarte, A.C., 2009. Comparative characterization of humic substances from the open ocean, estuarine water and fresh water. Org. Geochem. 40 (9), 942–950. https://doi.org/10.1016/j.orggeochem.2009.06.006.

Feng, H., Liu, Y., Xu, Y., Li, S., Liu, X., Dai, Y., Zhao, J., Yue, T., 2022. Benzo[a] pyrene and heavy metal ion adsorption on nanoplastics regulated by humic acid: cooperation/competition mechanisms revealed by molecular dynamics simulations. J. Hazard. Mater. 424, 127431. https://doi.org/10.1016/j.jhazmat.2021.127431.

Gan, L., Yan, Z., Ma, Y., Zhu, Y., Li, X., Xu, J., Zhang, W., 2019. pH dependence of the binding interactions between humic acids and bisphenol A - a thermodynamic perspective. Environ. Pollut. 255, 113292. https://doi.org/10.1016/j. envpol.2019.113292

Gao, J., Wang, L., Ok, Y.S., Bank, M.S., Luo, J., Wu, W., Hou, D., 2022. Nanoplastic stimulates metalloid leaching from historically contaminated soil via indirect displacement. Water Res. 218, 118468. https://doi.org/10.1016/j. watres.2022.118468.

Geng, Q., Zou, L., Liu, H., Guo, M., Li, F., Liu, X., Qin, H., Wang, X., Tan, Z., 2024. Influence of humic acid on the bioaccumulation, elimination, and toxicity of PFOS and TBBPA co-exposure in Mytilus unguiculatus Valenciennes. Sci. Total Environ. 923, 171358. https://doi.org/10.1016/j.scitotenv.2024.171358.

Ghosh, D., Chakraborty, K., Bharti, Pulimi, M., Anand, S., Chandrasekaran, N., Rai, P.K., Rabha, S.S., Mukherjee, A., 2022. The effects of pH, ionic strength, and natural organics on the transport properties of carbon nanotubes in saturated porous medium. Colloids Surf., A 647. https://doi.org/10.1016/j.colsurfa.2022.129025

Greer, J.B., Dalsky, E.M., Lane, R.F., Hansen, J.D., 2023. Tire-derived transformation product 6PPD-Quinone induces mortality and transcriptionally disrupts vascular permeability pathways in developing coho salmon. Environ. Sci. Technol. 57 (30), 10940–10950. https://doi.org/10.1021/acs.est.3c01040.

Guo, X., Tu, B., Ge, J., Yang, C., Song, X., Dang, Z., 2016. Sorption of tylosin and sulfamethazine on solid humic acid. J. Environ. Sci. 43, 208–215. https://doi.org/ 10.1016/j.jes.2015.10.020.

Han, X., Li, Y., Luo, M., Zhen, H., Frei, S., Lu, T., 2024. Biosurfactant-mediated transport of tetracycline antibiotics in saturated porous media: combined effects of the chemical properties of contaminants and solution chemistry conditions. Sci. Total Environ. 954, 176681. https://doi.org/10.1016/j.scitotenv.2024.176681.

Hiki, K., Asahina, K., Kato, K., Yamagishi, T., Omagari, R., Iwasaki, Y., Watanabe, H., Yamamoto, H., 2021. Acute toxicity of a tire rubber-derived chemical, 6PPD quinone, to freshwater fish and crustacean species. Environ. Sci. Technol. Lett. 8 (9), 779–784. https://doi.org/10.1021/acs.estlett.1c00453.

Hiki, K., Yamamoto, H., 2022. The tire-derived chemical 6PPD-quinone is lethally toxic to the white-spotted char Salvelinus leucomaenis pluvius but not to two other salmonid species. Environ. Sci. Technol. Lett. 9 (12), 1050–1055. https://doi.org/10.1021 acs.estlett.2c00683.

Huang, W., Shi, Y., Huang, J., Deng, C., Tang, S., Liu, X., Chen, D., 2021. Occurrence of substituted p-Phenylenediamine antioxidants in dusts. Environ. Sci. Technol. Lett. 8 (5), 381–385. https://doi.org/10.1021/acs.estlett.1c00148.

Ibrahim, H.M., Awad, M., Al-Farraj, A.S., Al-Turki, A.M., 2019. Effect of flow rate and particle concentration on the transport and deposition of bare and stabilized zerovalent iron nanoparticles in sandy soil. Sustainability 11 (23), 6608. https://doi.org 10.3390/su11236608.

Janot, N., Reiller, P.E., Korshin, G.V., Benedetti, M.F., 2010. Using spectrophotometric titrations to characterize humic acid reactivity at environmental concentrations. Environ. Sci. Technol. 44 (17), 6782–6788. https://doi.org/10.1021/es1012142.

Jansen, S.A., Malaty, M., Nwabara, S., Johnson, E., Ghabbour, E., Davies, G., Varnum, J. M., 1996. Structural modeling in humic acids. Mater. Sci. Eng., C 4 (3), 175–179.

Johannessen, C., Helm, P., Metcalfe, C.D., 2021. Detection of selected tire wear compounds in urban receiving waters. Environ. Pollut. 287, 117659. https://doi. org/10.1016/j.envpol.2021.117659.

Kim, H., Yu, M., 2005. Characterization of natural organic matter in conventional water treatment processes for selection of treatment processes focused on DBPs control. Water Res. 39 (19), 4779 4789. https://doi.org/10.1016/j.watres.2005.09.021.

Lado-Tourino, ˜ I., Vinegla, ˜ P.R., 2020. Molecular dynamics simulations of surfactant adsorption on carbon nanotubes intended for biomedical applications. Adsorption 26 (1), 141–149. https://doi.org/10.1007/s10450-019-00184-5.

Lan, T., Liao, J., Yang, Y., Chai, Z., Liu, N., Wang, D., 2019. Competition/cooperation between humic acid and graphene oxide in uranyl adsorption implicated by molecular dynamics simulations. Environ. Sci. Technol. 53 (9), 5102–5110. https:// doi.org/10.1021/acs.est.9b00656.

Lan, T., Wang, H., Liao, J., Yang, Y., Chai, Z., Liu, N., Wang, D., 2016. Dynamics of humic acid and its interaction with uranyl in the presence of hydrophobic surface implicated by molecular dynamics simulations. Environ. Sci. Technol. 50 (20), 11121 11128. https://doi.org/10.1021/acs.est.6b03583.

Lan, T., Wu, P., Liu, Z., Stroet, M., Liao, J., Chai, Z., Mark, A.E., Liu, N., Wang, D., 2022. Understanding the effect of pH on the solubility and aggregation extent of humic

acid in solution by combining simulation and the experiment. Environ. Sci. Technol. 56 (2), 917–927. https://doi.org/10.1021/acs.est.1c05938.

Liu, D., Zhou, J., Zhang, W., Huan, Y., Yu, X., Li, F., Chen, X., 2017. Column experiments to investigate transport of colloidal humic acid through porous media during managed aquifer recharge. Hydrogeol. J. 25 (1), 79–89. https://doi.org/10.1007/ s10040-016-1465-0.

Liu, W., Tang, H., Yang, B., Li, C., Chen, Y., Huang, T., 2023. Molecular level insight into the different interaction intensity between microplastics and aromatic hydrocarbon in pure water and seawater. Sci. Total Environ. 862, 160786. https://doi.org/ 10.1016/j.scitotenv.2022.160786.

Liu, Y., Yang, C., Cheng, P., He, X., Zhu, Y., Zhang, Y., 2016. Influences of humic acid on the bioavailability of phenanthrene and alkyl phenanthrenes to early life stages of marine medaka (Oryzias melastigma). Environ. Pollut. 210, 211–216. https://doi. org/10.1016/j.envpol.2015.12.011.

Liu, Z., Feng, Y., Sun, W., Wang, B., Shi, C., Ran, R., Zhang, Y., Lu, L., Zhang, H., 2024. Environmental concentrations of 6PPD and 6PPD-quinone induce hepatic lipid metabolism disorders in male black-spotted frogs. J. Hazard. Mater. 480, 136400 https://doi.org/10.1016/j.jhazmat.2024.136400

Loganathan, N., Wilson, A.K., 2022. Adsorption, structure, and dynamics of Short- and long-chain PFAS molecules in kaolinite: molecular-level insights. Environ. Sci. Technol. 56 (12), 8043–8052. https://doi.org/10.1021/acs.est.2c01054.

Lumsdon, D.G., Fraser, A.R., 2005. Infrared spectroscopic evidence supporting heterogeneous site binding models for humic substances. Environ. Sci. Technol. 39 (17), 6624–6631. https://doi.org/10.1021/es050180i.

Lv, X., Sun, Y., Ji, R., Gao, B., Wu, J., Lu, Q., Jiang, H., 2018. Physicochemical factors controlling the retention and transport of perfluorooctanoic acid (PFOA) in saturated sand and limestone porous media. Water Res. 141, 251–258. https://doi.org/ 10.1016/j.watres.2018.05.020.

Lyu, X., Liu, X., Sun, Y., Ji, R., Gao, B., Wu, J., 2019. Transport and retention of perfluorooctanoic acid (PFOA) in natural soils: importance of soil organic matter and mineral contents, and solution ionic strength. J. Contam. Hydrol. 225, 103477. https://doi.org/10.1016/j.jconhyd.2019.03.009.

Lyu, X., Liu, X., Wu, X., Sun, Y., Gao, B., Wu, J., 2020. Importance of Al/Fe oxyhydroxide coating and ionic strength in perfluorooctanoic acid (PFOA) transport in saturated porous media. Water Res. 175, 115685. https://doi.org/10.1016/j. watres.2020.115685.

Nguyen, T.M.H., Br¨aunig, J., Thompson, K., Thompson, J., Kabiri, S., Navarro, D.A., Kookana, R.S., Grimison, C., Barnes, C.M., Higgins, C.P., McLaughlin, M.J., Mueller, J.F., 2020. Influences of chemical properties, soil properties, and solution pH on soil-water partitioning coefficients of Per- and polyfluoroalkyl substances (PFASs). Environ. Sci. Technol. 54 (24), 15883–15892. https://doi.org/10.1021/acs. est.0c05705.

Peng, S., Wang, Z., Li, L., Ai, J., Li, L., Liao, G., Wang, D., Peng, S., Zhang, W., 2024. Molecular dynamic modeling of EPS and inorganic/organic flocculants during sludge dual conditioning. Sci. Total Environ. 906, 167719. https://doi.org/10.1016/j. scitotenv.2023.167719.

Rauert, C., Charlton, N., Okoffo, E.D., Stanton, R.S., Agua, A.R., Pirrung, M.C., Thomas, K.V., 2022. Concentrations of tire additive chemicals and tire road wear particles in an Australian urban tributary. Environ. Sci. Technol. 56 (4), 2421 2431. https://doi.org/10.1021/acs.est.1c07451.

Ritchie, J.D., Perdue, E.M., 2003. Proton-binding study of standard and reference fulvic acids, humic acids, and natural organic matter. Geochem. Cosmochim. Acta 67 (1), 85–96. https://doi.org/10.1016/s0016-7037(02)01044-x.

Roberts, C., Kohlman, E., Jain, N., Amekor, M., Alcaraz, A.J., Hogan, N., Brinkmann, M., Hecker, M., 2025a. Subchronic and acute toxicity of 6PPD-Quinone to early life stage rainbow trout (Oncorhynchus mykiss). Environ. Sci. Technol. 59 (13), 6771–6777. https://doi.org/10.1021/acs.est.4c09090.

Roberts, C., Lin, J.Y., Kohlman, E., Jain, N., Amekor, M., Alcaraz, A.J., Hogan, N., Hecker, M., Brinkmann, M., 2025b. Acute and subchronic toxicity of 6PPD-Quinone to early life stage Lake trout (Salvelinus namaycush). Environ. Sci. Technol. 59 (1), 791–797. https://doi.org/10.1021/acs.est.4c09090.

Rodríguez, F.J., Schlenger, P., García-Valverde, M., 2016. Monitoring changes in the structure and properties of humic substances following ozonation using UV-Vis, FTIR and <sup>1</sup>H NMR techniques. Sci. Total Environ. 541, 623–637. https://doi.org/10.1016/ j.scitotenv.2015.09.127.

Rong, H., Qin, J., He, L., Tong, M., 2023. Cotransport of different electrically charged microplastics with PFOA in saturated porous media. Environ. Pollut. 331, 121862 https://doi.org/10.1016/j.envpol.2023.121862.

Salari, H., Erami, M., Dokoohaki, M.H., Zolghadr, A.R., 2022. New insights into adsorption equilibrium of organic pollutant on MnO nanorods: experimental and computational studies. J. Mol. Liq. 345, 117016. https://doi.org/10.1016/j. molliq.2021.117016.

Sanchez-Marin, P., Lorenzo, J.I., Blust, R., Beiras, R., 2007. Humic acids increase dissolved lead bioavailability for marine invertebrates. Environ. Sci. Technol. 41 (16), 5679–5684. https://doi.org/10.1021/es070088h.

Sein, L.T., Varnum, J.M., Jansen, S.A., 1999. Conformational modeling of a new building block of humic acid: approaches to the lowest energy conformer. Environ. Sci. Technol. 33 (4), 546–552. https://doi.org/10.1021/es9805324.

Shi, Y., Sun, Y., Gao, B., Xu, H., Shi, X., Wu, J., 2018. Retention and transport of bisphenol A and bisphenol S in saturated limestone porous media. Water Air Soil Pollut. 229 (8), 260. https://doi.org/10.1007/s11270-018-3911-1.

Shi, Y., Sun, Y., Gao, B., Xu, H., Wu, J., 2019. Importance of organic matter to the retention and transport of bisphenol A and bisphenol S in saturated soils. Water Air Soil Pollut. 230 (2), 43. https://doi.org/10.1007/s11270-019-4096-y

Sun, K., Dong, S., Sun, Y., Gao, B., Du, W., Xu, H., Wu, J., 2018. Graphene oxide facilitated transport of levofloxacin and ciprofloxacin in saturated and unsaturated

porous media. J. Hazard. Mater. 348, 92–99. https://doi.org/10.1016/j. jhazmat.2018.01.032.

Suzuki, D., Shoji, R., 2020. Toxicological effects of chlorophenols to green algae observed at various pH and concentration of humic acid. J. Hazard. Mater. 400, 123079. https://doi.org/10.1016/j.jhazmat.2020.123079.

Tan, L., Zhao, C., Tan, X., Wang, X., Feng, J., Fang, M., Ai, Y.J., Hayat, T., Sun, L., Wang, X., 2019. Effect of co-existing Co<sup>2+</sup> ions on the aggregation of humic acid in aquatic environment: aggregation kinetics, dynamic properties and fluorescence spectroscopic study. Sci. Total Environ. 674, 544–553. https://doi.org/10.1016/j. scitotenv.2019.04.119.

Tang, H., Zhao, Y., Shan, S., Yang, Y., Liu, D., Cui, F., Xing, B., 2018. Wrinkle- and edgeadsorption of aromatic compounds on graphene oxide as revealed by atomic force microscopy, molecular dynamics simulation, and density functional theory. Environ. Sci. Technol. 52 (14), 7689–7697. https://doi.org/10.1021/acs.est.8b00585.

Tang, H., Zhao, Y., Yang, X., Liu, D., Shao, P., Zhu, Z., Shan, S., Cui, F., Xing, B., 2017. New insight into the aggregation of graphene oxide using molecular dynamics simulations and extended derjaguin-landau-verwey-overbeek theory. Environ. Sci. Technol. 51 (17), 9674–9682. https://doi.org/10.1021/acs.est.7b01668.

Tang, L., Li, X., Zhu, S., Wan, Y., Zhang, S., Ma, J., Yang, Y., Chen, A., Luo, L., Cao, L., 2025. 6PPD and 6PPD quinone induce endometrial cell dysfunction via activating ERα and GPER at human-relevant levels. Environ. Sci. Technol. 59 (20), 9918–9929. https://doi.org/10.1021/acs.est.4c1396.

Tian, Z., Zhao, H., Peter, K., Gonzalez, M., Wetzel, J., Wu, C., Hu, X., Prat, J., Mudrock, E., Hettinger, R., Cortina, A.E., Biswas, R.G., Kock, F.V.C., Soong, R., Jenne, A., Du, B.W., Hou, F., He, H., Lundeen, R., Gilbreath, A., Sutton, R., Scholz, N. L., Davis, J.W., Dodd, M.C., Simpson, A., McIntyre, J.K., Kolodziej, E.P., 2021. A ubiquitous tire rubber-derived chemical induces acute mortality in coho salmon. Science 371 (6525), 185–189. https://doi.org/10.1126/science.abd6951.

Wang, F., Shang, J., Zhang, Q., Lu, T., Li, Y., Wang, X., Farooq, U., Qi, Z., 2024. Influence of surfactant molecular features on tetracycline transport in saturated porous media of varied surface heterogeneities. Water Res. 255, 121501. https://doi.org/10.1016 j.watres.2024.121501.

Wang, F., Shih, K.M., 2011. Adsorption of perfluorooctanesulfonate (PFOS) and perfluorooctanoate (PFOA) on alumina: influence of solution pH and cations. Water Res. 45 (9), 2925 2930. https://doi.org/10.1016/j.watres.2011.03.007.

Wang, H., Liu, J., Yao, J., He, Q., Ma, J., Chai, H., Liu, C., Hu, X., Chen, Y., Zou, Y., Xiong, J., Huangfu, X., 2020. Transport of Tl(I) in water-saturated porous media: role of carbonate, phosphate and macromolecular organic matter. Water Res. 186, 116325. https://doi.org/10.1016/j.watres.2020.116325.

Wang, X., Guo, X., Yang, Y., Tao, S., Xing, B., 2011. Sorption mechanisms of phenanthrene, lindane, and atrazine with various humic acid fractions from a single soil sample. Environ. Sci. Technol. 45 (6), 2124 2130. https://doi.org/10.1021 es102468z.

Wang, Y., Zhong, L., Song, X., Adeel, M., Yang, Y., 2022. Natural colloids facilitated transport of steroidal estrogens in saturated porous media: mechanism and processes. Environ. Pollut. 315, 120315. https://doi.org/10.1016/j. envpol.2022.120315.

Wu, H., Gonzalez-Pech, N.I., Grassian, V.H., 2019. Displacement reactions between environmentally and biologically relevant ligands on TiO nanoparticles: insights into the aging of nanoparticles in the environment. Environ. Sci. Nano 6 (2), 489–504. https://doi.org/10.1039/c8en00780b.

Wu, Z., Wu, S., Hou, Y., Cao, H., Cai, C., 2024. Facilitated transport of toluene and naphthalene with humic acid in high-and low-permeability systems: role of ionic strength and cationic type. J. Hazard. Mater. 465, 133487. https://doi.org/10.1016/ j.jhazmat.2024.133487.

Xing, J., Qi, Z., Dong, W., Chen, Q., Wu, M., Yi, P., Pan, B., Xing, B., 2023. Aggregation of biochar nanoparticles and the impact on bisphenol A sorption: experiments and molecular dynamics simulations. Sci. Total Environ. 875, 162724. https://doi.org/ 10.1016/j.scitotenv.2023.162724.

Xing, Y., Chen, X., Li, Q., Ji, L., Fu, X., Wang, J., 2024. Insights into the synergistic effects between deposited Fe oxides and dissolved organic matter in influencing perfluorooctanoic acid transport in saturated porous media. Environ. Technol. Innovat. 36, 103838. https://doi.org/10.1016/j.eti.2024.103838.

Xing, Y., Chen, X., Chen, X., Zhuang, J., 2016. Colloid-mediated transport of pharmaceutical and personal care products through porous media. Sci. Rep. 6, 35407. https://doi.org/10.1038/srep35407.

Xing, Y., Li, Q., Chen, X., Fu, X., Ji, L., Wang, J., Li, T., Zhang, Q., 2021. Different transport behaviors and mechanisms of perfluorooctanoate (PFOA) and perfluorooctane sulfonate (PFOS) in saturated porous media. J. Hazard. Mater. 402, 123435. https://doi.org/10.1016/j.jhazmat.2020.123435.

Xing, Y., Li, Q., Huang, B., Chen, X., Ji, L., Fu, X., Zhang, Q., Li, T., Wang, J., 2022. The complex effect of DOM on PFOA and PFOS transport: considering the interference of solution ionic strength and cation type. J. Environ. Chem. Eng. 10 (6), 108619. https://doi.org/10.1016/j.jece.2022.108619.

Xu, L., Liang, Y., Liao, C., Xie, T., Zhang, H., Liu, X., Lu, Z., Wang, D., 2022. Cotransport of micro- and nano-plastics with chlortetracycline hydrochloride in saturated porous media: effects of physicochemical heterogeneities and ionic strength. Water Res. 209, 117886. https://doi.org/10.1016/j.watres.2021.117886.

Xu, Q., Wu, W., Xiao, Z., Sun, X., Ma, J., Ding, J., Zhu, Z., Li, G., 2023. Responses of soil and collembolan (Folsomia candida) gut microbiomes to 6PPD-Q pollution. Sci. Total Environ. 900, 165810. https://doi.org/10.1016/j.scitotenv.2023.165810.

Yang, H., Ge, Z., Wu, D., Tong, M., Ni, J., 2016. Cotransport of bacteria with hematite in porous media: effects of ion valence and humic acid. Water Res. 88, 586–594. https://doi.org/10.1016/j.watres.2015.10.052.

Yao, K., Kang, Q., Liu, W., Chen, D., Wang, L., Li, S., 2024. Chronic exposure to tire rubber-derived contaminant 6PPD-quinone impairs sperm quality and induces the damage of reproductive capacity in male mice. J. Hazard. Mater. 470, 134165. https://doi.org/10.1016/j.jhazmat.2024.134165

You, M., You, X., Yang, X., Hu, J., Lyu, Y., Sun, W., 2023. Black carbon and humic acid alleviate the toxicity of antibiotics to a cyanobacterium Synechocystis sp. Environ. Pollut. 316, 120646. https://doi.org/10.1016/j.envpol.2022.120646.

Yu, Q., Dong, S., Sheng, L., Su, X., Wang, L., Fan, W., Yu, Y., 2024. Cotransport of 6PPD-Q and pristine/aged microplastics in porous media: an insight based on transport forms and mechanisms. Water Res. 265, 122254. https://doi.org/10.1016/j. watres.2024.122254.

Yuan, S., Wang, Z., Yuan, S., 2024. Insights into the pH-dependent interactions of sulfadiazine antibiotic with soil particle models. Sci. Total Environ. 917, 170537. https://doi.org/10.1016/j.scitotenv.2024.170537.

Zhang, T., Xing, Y., Zhang, J., Li, X., 2024a. The competition of humic acid aggregation and adsorption on clay particles and its role in retarding heavy metal ions. Sci. Total Environ. 954, 176459. https://doi.org/10.1016/j.scitotenv.2024.176459.

Zhang, X., Wu, L., Han, X., Shi, Y., Huang, J., Ding, B., Zhang, Y., Zhang, Z., Shi, Y., Li, F., 2025. Effects of ionic strength, cation type and pH on the cotransport of microplastics with PFOA in saturated porous media. Chemosphere 370, 143942. https://doi.org/10.1016/j.chemosphere.2024.143942.

Zhang, Y., Thomas, A., Apul, O., Venkatesan, A.K., 2023a. Coexisting ions and long-chain per- and polyfluoroalkyl substances (PFAS) inhibit the adsorption of short-chain PFAS by granular activated carbon. J. Hazard. Mater. 460, 132378. https://doi.org/ 10.1016/j.jhazmat.2023.132378.

Zhang, Y., Xu, C., Zhang, W., Qi, Z., Song, Y., Zhu, L., Dong, C., Chen, J., Cai, Z., 2022. p-Phenylenediamine antioxidants in PM : the underestimated urban air pollutants. Environ. Sci. Technol. 56 (11), 6914 6921

Zhang, Y., Huang, J., Liu, Y., Zhang, J., Huang, Z., Liu, Y., Zhao, J., Ying, G., 2024b. In vitro metabolism of the emerging contaminant 6PPD-quinone in human and rat liver microsomes: Kinetics, pathways, and mechanism. Environ. Pollut. 345, 123514. https://doi.org/10.1016/j.envpol.2024.123514.

Zhang, Z., Liu, S., Wang, X., Huang, S., Sun, K., Xia, X., 2023b. Differences in structure and composition of soil humic substances and their binding for polycyclic aromatic hydrocarbons in different climatic zones. Environ. Pollut. 322, 121121. https://doi. org/10.1016/j.envpol.2023.121121.

Zhao, G., Li, W., Xu, C., Qin, Q., Fan, W., Li, X., Zhao, D., 2024. Adsorption mechanism of cefradine on three microplastics: a combined molecular dynamics simulation and density functional theory calculation study. Sci. Total Environ. 951, 175690. https:// doi.org/10.1016/j.scitotenv.2024.175690.

Zhou, H., Wu, Z., Wang, X., Jiang, L., Sun, H., Li, H., Yan, Z., Wang, Y., Yao, X., Zhang, C., Tang, J., 2025. 6PPD-quinone exposure induces oxidative damage and physiological disruption in Eisenia fetida: an integrated analysis of phenotypes, multi omics, and intestinal microbiota. J. Hazard. Mater. 493, 138334. https://doi.org/ 10.1016/j.jhazmat.2025.138334.

Zhou, Z., Zhang, C., Xi, M., Ma, H., Jia, H., 2023. Multi-scale modeling of natural organic matter-heavy metal cations interactions: aggregation and stabilization mechanisms. Water Res. 238, 120007. https://doi.org/10.1016/j.watres.2023.120007.