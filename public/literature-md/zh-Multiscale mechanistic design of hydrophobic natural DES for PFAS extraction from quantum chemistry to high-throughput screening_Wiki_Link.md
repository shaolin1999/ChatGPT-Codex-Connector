---
title: "zh-Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening Wiki全文"
source_markdown: "2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening.md"
cn_markdown: "2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/zh-Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening.md"
type: translated_fulltext_wiki
---
<!-- PaperMDLab-NAV:START -->
> [!info] 论文四向互链（PaperMDLab 自动维护）
> [[2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening|英文原文]] · [[2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/zh-Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening|中文译文]] · **中文全文双链（当前）** · [[4.SCI_AI_Summary/summary-zh-Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening|AI中文总结]]
<!-- PaperMDLab-NAV:END -->


# 用于[[PFAS]]萃取的[[疏水性天然低共熔溶剂]]的多尺度机理设计：从[[量子化学]]到高通量筛选

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/3962b2fea123c083feb64c930ee36fa620a7e62dae6d043a284e31013724b35e.jpg>)

Alba P´erez-Cort´es <sup>a</sup>, [[Sergio de-la-Huerta-Sainz]] <sup>a</sup>, [[Sara Santamaría-Herrera]] <sup>a</sup>, [[Santiago Aparicio]] <sup>a,b</sup>, [[Alberto Gutiérrez|Alberto Guti´errez]] a,b,\*

<sup>a</sup> 布尔戈斯大学化学系，09001 布尔戈斯，西班牙

<sup>b</sup> 布尔戈斯大学先进工业技术关键原材料国际研究中心（ICCRAM），09001 布尔戈斯，西班牙

## 文 章 信 息

关键词：水中的[[全氟和多氟烷基物质|全氟和多氟烷基物质（PFAS）]] [[疏水性天然低共熔溶剂|疏水性天然低共熔溶剂（HNADES）]] [[密度泛函理论|密度泛函理论（DFT）]] [[真实溶剂类导体屏蔽模型|真实溶剂类导体屏蔽模型（COSMO-RS）]] [[经典分子动力学模拟|经典分子动力学（MD）模拟]] [[机器学习]]

## 摘 要

[[全氟和多氟烷基物质|全氟和多氟烷基物质（PFAS）]]是持久性、有毒的污染物，由于其难以降解以及现有处理技术的局限性，给水修复带来了严峻挑战。在本研究中，我们探索了一种受自然启发的策略，利用[[疏水性天然低共熔溶剂|疏水性天然低共熔溶剂（HNADES）]]从水中萃取[[PFAS]]，并采用多尺度计算机模拟方法。通过基于[[密度泛函理论|密度泛函理论（DFT）]]的[[量子化学]]方法、[[真实溶剂类导体屏蔽模型|真实溶剂类导体屏蔽模型（COSMO-RS）]][[热力学建模]]以及[[经典分子动力学模拟|经典分子动力学（MD）模拟]]，我们证明所选[[HNADES]]对三种代表性PFAS（[[PFOA]]、[[PFOS]]和[[HFPO-DA]]）表现出强亲和力。这种亲和力来源于PFAS末端官能团酸性质子与[[癸酸]]羰基之间的[[氢键|强氢键]]作用，并得到有利的[[范德华相互作用]]支持。萃取过程进一步由[[低共熔溶剂|HNADES]]内部的氢键作用稳定，从而保持其结构完整性。这些分子层面的相互作用转化为高PFAS[[溶解度]]和趋近于零的[[活度系数]]，有效破坏PFAS水合壳层并促进其跨（HNADES）-（PFAS + 水）界面迁移至有机相。[[分子描述符]]与混合物行为之间观察到强相关性，为萃取效率的预测模型奠定了基础。基于这些认识，我们对1746种PFAS与2589种HNADES组合进行了扩展虚拟筛选，识别出有前景的候选体系，用于选择性、可扩展且环境友好的修复技术，其中[[疏水性]]最强的HNADES——主要是含有[[芳樟醇]]、[[马鞭草烯酮]]和桉叶油素的体系——能够溶解最广泛范围的PFAS。

## 1. 引言

[[PFAS]]是一大类合成有机氟化合物，其特征为[[疏水性|疏水]]且疏油的含全氟碳主链以及一个末端亲水基团，最常见的为羧酸或磺酸基团[1]。由于其卓越的化学稳定性和热稳定性、表面活性剂性质以及介电特性[2]，[[全氟和多氟烷基物质|PFAS]]自20世纪中叶以来已被广泛应用于工业产品和消费品中。应用范围涵盖不粘炊具、食品包装、防水纺织品、防污家具、洗涤剂和化妆品；以及涂料、涂层、农药和消防泡沫[3,4]。使PFAS如此有用的特性，即碳氟键——有机化学中最强的键——非凡的热力学稳定性，同样也决定了其环境归趋[5,6]。这种结构上的坚固性使PFAS本质上对生物降解、化学降解和光解降解呈惰性，使其得以在全球范围内的水体、土壤、沉积物和生物相中持续存在并积累。PFAS现已在饮用水、废水和雨水中被普遍检出[7]，其沿食物链生物放大的能力意味着顶级捕食者（包括人类）体内组织负荷最高。这种持久性带来的毒理学后果十分严重。PFAS优先在肝组织和血浆蛋白中[[生物积累]]，抵抗消除，即使外部接触停止后仍可维持慢性内暴露。流行病学和实验证据将PFAS暴露与一系列广泛且严重的健康结局联系起来：血脂异常、生殖和发育毒性、免疫毒性以及对内分泌系统的严重干扰，尤其是对甲状腺激素稳态的干扰，进而对代谢、神经发育和生育能力产生级联效应[8,9]。尤其令人担忧的是其[[致癌性]]。几种长链PFAS化合物已被列为可能或很可能的人类致癌物，流行病学研究持续将暴露与肾癌和睾丸癌风险升高相关联。关键的是，作为表面上更安全的替代品而开发的短链PFAS，正日益被认为会引发类似的环境持久性和毒理学问题，从而削弱了替代作为一种可行的长期策略[10]。总体而言，普遍的环境分布、对修复治理的抵抗性、逐步的生物积累以及有据可查的致癌和[[内分泌干扰]]潜力，共同使PFAS成为新兴污染物中最具后果性的类别之一，并凸显了在环境基质中开发有效分析和修复策略的迫切需要。

孤立[[HNADES]]中与[[氢键]]相关的[[电子密度|电子密度（ρ）]]和键距。

<table><tr><td rowspan="2">萃取剂摩尔比</td><td colspan="3"> BCP的 $\rho$ （a.u.）/键距（ $\AA$ ）</td></tr><tr><td>（癸酸 1）H···O（薄荷醇 1）</td><td>（癸酸 2）H···O（癸酸 1）</td><td>（薄荷醇 1）H···O（薄荷醇 2）</td></tr><tr><td>1:1</td><td>0.05165/1.65</td><td></td><td></td></tr><tr><td>1:2</td><td>0.05607/1.61</td><td>0.04096/1.71</td><td></td></tr><tr><td>2:1</td><td>0.06226/1.58</td><td></td><td>0.04023/1.76</td></tr></table>

为此，监管机构已开始对水中 [[PFAS]] 浓度施加严格限值。[[美国环境保护局|美国环境保护局（EPA）]]最近在[[国家初级饮用水条例|《国家初级饮用水条例》]]下引入了最高污染物水平，规定[[全氟辛酸|全氟辛酸（PFOA）]]和[[全氟辛烷磺酸|全氟辛烷磺酸（PFOS）]]为 4 ng/L，[[六氟环氧丙烷二聚酸|六氟环氧丙烷二聚酸（HFPO-DA 或 GenX）]]为 10 ng/L [11]。[[欧盟委员会]]根据第 2020/2184/EU 号指令 [12]，对 [[全氟和多氟烷基物质|PFAS]] 总负荷采用了范围更广但较为宽松的阈值。此外，[[PFOA]] 和 [[PFOS]] 已被[[斯德哥尔摩公约|《斯德哥尔摩公约》]]列为[[持久性有机污染物|持久性有机污染物（POPs）]][13]。尽管 GenX 被作为更安全的替代品引入，但其毒性现已得到充分证实 [14]。尽管已有大量研究，从水中去除 PFAS 仍是一项挑战。常规处理技术，如混凝、沉淀和活性污泥系统，在很大程度上无效 [15]。替代策略——包括[[反渗透]]、[[电化学氧化]]以及使用活性炭、离子交换树脂、[[碳纳米管]]、[[金属有机框架|金属有机框架（MOFs）]]或[[共价有机框架|共价有机框架（COFs）]]的[[吸附]] [16]——已显示出前景，但存在重大缺陷，包括选择性低、能耗高、平衡时间长、材料不稳定以及产生二次废物。近期成本分析表明，PFAS 处理仍然非常昂贵，典型成本约为每立方米 1.50 美元，根据技术不同，数值最高可达每立方米 2.71 美元，凸显了大规模实施所面临的巨大经济负担 [17]。

在新兴策略中，[[液液萃取]]因其潜在效率而受到关注。然而，传统溶剂往往涉及挥发性、毒性和不可再生的化合物。相比之下，[[离子液体|离子液体（ILs）]]和[[深共晶溶剂|深共晶溶剂（DESs）]]已成为有前景的绿色替代品 [18]。ILs 具有独特的物理化学性质，如低挥发性、高热稳定性和可调极性，但往往因生物降解性、粘度和合成复杂性方面的顾虑而受到制约。[[HNADES]] 通常由[[氢键受体|氢键受体化合物（HBA）]]和[[氢键供体|氢键供体化合物（HBD）]]组成，为萃取过程提供了一个更具生物降解性、无毒且可持续的平台 [19,20]。通过精心选择天然来源的组分，如糖类、氨基酸、[[单萜]]或[[脂肪酸]]，其物理化学性质——包括粘度（通常为 10–200 mPa·s）、极性和微观结构——可以得到精确调控。这种可调性，加上其因[[氢键]]网络组织而产生的固有[[疏水性]]，使水溶性最小化，并增强了对 [[PFAS]] 等疏水性污染物的选择性 [21]。它们在其他分离技术中的成功应用——包括 CO₂ 捕集 [22]、生物活性化合物回收 [23] 和重金属去除 [24]——进一步支持了其相关性。在 [[全氟和多氟烷基物质|PFAS]] 的具体情形中，多项初步研究已证明它们在水介质中的萃取能力，使其成为替代传统方法的有前景方案 [25,26]。

本工作研究了一个由[[薄荷醇]]（一种用作[[氢键受体]]的环状[[单萜]]类化合物）和[[癸酸]]（一种用作[[氢键供体]]的饱和[[脂肪酸]]）组成的典型体系，其选择依据是天然来源、商业可得性以及已被充分表征的行为。该二元体系的[[固液相图]]显示，薄荷醇的熔点为315.70 K，癸酸的熔点为304.95 K，理想情况下在约283 K处观察到[[低共熔温度]]。[[低共熔组成]]出现在薄荷醇与癸酸的[[摩尔分数]]约为0.57:0.43附近，而计算预测表明，低共熔组成略有移动，薄荷醇约为0.59、癸酸约为0.41，低共熔温度接近272 K。为研究该体系作为萃取介质的适用性，我们考虑了薄荷醇与癸酸的三种摩尔比（1:1、1:2和2:1）。尽管这些组成不一定对应于低共熔点，但它们可作为[[低熔点混合物|低熔点混合物（LoMMs）]]，这是一个由熔融行为降低所定义的更广泛类别。我们针对三种代表性[[PFAS]]——[[PFOA]]、[[PFOS]]和

## 表3

与[[PFAS]]和[[HNADES]]之间[[氢键]]相关的[[电子密度|电子密度（ρ）]]和键距。

<table><tr><td rowspan="2">分析物</td><td colspan="3"> $\rho$  （a.u.）BCP/键距（ $\text{\AA}$ ）</td></tr><tr><td>1:1 → (PFAS)H⋯O（癸酸1）</td><td>1:2 → (PFAS)H⋯O（癸酸2）</td><td>2:1 → (PFAS)H⋯O（癸酸1）</td></tr><tr><td>PFOA</td><td>0.06302/1.54</td><td>0.06231/1.55</td><td>0.06217/1.56</td></tr><tr><td>PFOS</td><td>0.08653/1.43</td><td>0.07087/1.50</td><td>0.0796/1.46</td></tr><tr><td>HFPO-DA</td><td>0.06359/1.55</td><td>0.06593/1.53</td><td>0.0848/1.46</td></tr></table>

[[HNADES]] + [[PFAS]]簇中与[[氢键]]相关的[[电子密度|电子密度（ρ）]]和键距。

<table><tr><td rowspan="3">萃取剂摩尔比</td><td colspan="9">ρ (a.u.) BCP/键距 (Å)</td></tr><tr><td colspan="3">(癸酸1)H···O(薄荷醇1)</td><td colspan="3">(癸酸2)H···O(癸酸1)</td><td colspan="3">(癸酸1)H···O(薄荷醇1)</td></tr><tr><td>PFOA</td><td>PFOS</td><td>HFPO-DA</td><td>PFOA</td><td>PFOS</td><td>HFPO-DA</td><td>PFOA</td><td>PFOS</td><td>HFPO-DA</td></tr><tr><td>1:1</td><td>0.05890/1.59</td><td>0.06249/1.57</td><td>0.06108/1.58</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>1:2</td><td>0.05532/1.62</td><td>0.05748/1.60</td><td>0.05479/1.62</td><td>0.04949/1.64</td><td>0.04752/1.65</td><td>0.05039/1.64</td><td></td><td></td><td></td></tr><tr><td>2:1</td><td>0.07168/1.52</td><td>0.07476/1.51</td><td>0.07563/1.50</td><td></td><td></td><td></td><td>0.04306/1.73</td><td>0.04255/1.73</td><td>0.04295/1.72</td></tr></table>

电荷分布  
![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/d2704cbf07a53513d1490a5d88d867e0150b428c37c81b1fd0905e97e672555e.jpg>)  
图1. 不同HNADES + PFAS簇中每个分子的Mulliken电荷分布。电荷转移主要发生在癸酸（在1:1和2:1摩尔比中为分子1，在1:2比例中为分子2）与PFAS化合物之间。

不同[[HNADES]] + [[PFAS]]簇中每个分子的[[Mulliken电荷]]分布。

<table><tr><td></td><td>Mulliken 电荷 PFAS</td><td>Mulliken 电荷 薄荷醇 1</td><td>Mulliken 电荷 癸酸 1</td><td>Mulliken 电荷 薄荷醇 2</td><td>Mulliken 电荷 癸酸 2</td></tr><tr><td>DES 1:1</td><td></td><td>0.05215</td><td>-0.05210</td><td></td><td></td></tr><tr><td>DES 1:1 + PFOA</td><td>-0.10826</td><td>0.07418</td><td>0.03407</td><td></td><td></td></tr><tr><td>DES 1:1 + PFOS</td><td>-0.14480</td><td>0.07958</td><td>0.06524</td><td></td><td></td></tr><tr><td>DES 1:1 + HFPO-DA</td><td>-0.11156</td><td>0.07447</td><td>0.03710</td><td></td><td></td></tr><tr><td>DES 1:2</td><td></td><td>0.05946</td><td>-0.00771</td><td></td><td>-0.05174</td></tr><tr><td>DES 1:2 + PFOA</td><td>-0.09995</td><td>0.07813</td><td>0.00502</td><td></td><td>0.01682</td></tr><tr><td>DES 1:2 + PFOS</td><td>-0.11393</td><td>0.06508</td><td>0.00482</td><td></td><td>0.04400</td></tr><tr><td>DES 1:2 + HFPO-DA</td><td>-0.12720</td><td>0.08049</td><td>0.01117</td><td></td><td>0.03559</td></tr><tr><td>DES 2:1</td><td></td><td>0.04951</td><td>-0.10342</td><td>0.05389</td><td></td></tr><tr><td>DES 2:1 + PFOA</td><td>-0.11792</td><td>0.07970</td><td>-0.00208</td><td>0.04028</td><td></td></tr><tr><td>DES 2:1 + PFOS</td><td>-0.13401</td><td>0.07433</td><td>0.00120</td><td>0.05848</td><td></td></tr><tr><td>DES 2:1 + HFPO-DA</td><td>-0.17275</td><td>0.07516</td><td>0.05261</td><td>0.04498</td><td></td></tr></table>

[[HFPO-DA]]——各自代表一个关键的结构子类。采用多尺度计算方法阐明支撑萃取过程的相转移机制和物理化学相互作用。这包括基于 [[DFT]] 的[[量子化学]]计算，以优化分子簇并通过[[分子中原子量子理论|分子中原子量子理论（QTAIM）]]和[[非共价相互作用|非共价相互作用（NCI）]]分析来解析短程分子间相互作用。利用 [[COSMO-RS]] 预测 [[PFAS]] 在溶剂体系中的[[溶解度]]和热力学相容性，而经典 [[分子动力学|MD]] 模拟则提供了对跨 [[HNADES]]-水界面传质动力学的深入认识。为将研究拓展至这一典型体系之外，采用[[机器学习]]技术来提高预测精度并加速溶剂-[[全氟和多氟烷基物质|PFAS]] 相互作用的筛选。

因此，本研究被构思为一个计算驱动的分子筛选与机理研究框架，旨在实验实施之前识别有前景的用于 [[PFAS]] 萃取的 [[HNADES]] 候选体系。所提出的方法并非依赖单一预测方法学，而是通过 [[DFT]] 计算、[[COSMO-RS]] [[热力学建模]]和经典 [[分子动力学|MD]] 模拟，结合互补层次的分子描述。这些独立方法在 [[全氟和多氟烷基物质|PFAS]] 亲和性、界面行为和分子间相互作用模式方面向一致趋势的收敛，为所提出的萃取机制以及后续实验验证中候选 [[低共熔溶剂|HNADES]] 体系的合理优先排序提供了连贯的物理化学基础。

## 2. 计算方法

## 2.1. [[DFT|密度泛函理论]]计算

为了模拟 [[PFAS]] 萃取中涉及的关键分子间[[氢键]]，使用 [[Avogadro]] [27] 创建了最小分子簇。这些簇的设计旨在使潜在的[[氢键供体]]和受体在空间中紧密接近。对于三种 [[氢键受体|HBA]]:HBD 摩尔比（1:1、1:2 和 2:1）中的每一种，均生成了九个初始簇构型。从最稳定的几何构型

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/32b2cd56d4b994d7a06a20e613060a8982b4735b0d29e818fb729d02d84e2883.jpg>)  
图2. 优化的1:1薄荷醇-癸酸簇（分离态及含PFAS态）的结构表征及相关分析。

在每个比例下鉴定的结构基础上，通过向[[HNADES]]簇中添加一个[[PFAS]]分子（[[PFOA]]、[[PFOS]]或[[HFPO-DA]]）来构建额外的结构。对于每个[[全氟和多氟烷基物质|PFAS]]-溶剂体系，优化了六种不同的构型。几何优化使用[[TurbomoleX]] [28]进行，采用[[B3LYP交换关联泛函]] [29–31]、[[Grimme的D4色散校正]] [32] 和[[def-TZVP基组]] [33]。这一选择的合理性在于PFAS-[[低共熔溶剂|HNADES]]配合物中的[[非共价相互作用]]，包括色散、[[疏水性|疏水]]和CH-π接触，这些需要长程关联效应，而标准杂化泛函对这些效应的描述不足。实际上，先前对类似体系的研究表明，色散校正泛函（D3/D4）对于获得可靠的相互作用能至关重要。计算从[[电子密度]]的初始估计开始，迭代精修直至达到[[自洽场|自洽收敛]]。收敛阈值设定为$\Delta \mathrm { E } < 1 0 ^ { - 6 } \ \mathrm { a . u . }$，RMS密度$< 1 0 ^ { - 7 }$ a.u.，最大梯度$< 1 0 ^ { - 4 } \mathrm { a . u . / B o h r } ,$，SCF迭代收敛至$\overline { { 1 0 ^ { - 7 } } } - 1 0 ^ { - 8 } \mathrm { a . u }$以下，并使用精细积分网格。相互作用能（ΔE）计算为优化复合物的总电子能量与孤立单体电子能量之和的差值，所有计算均在同一理论水平下进行。

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/77699e81c55adcf25d9166ab2559409248015a742dc334ad39628e9fe35db059.jpg>)  
图2.（续）。

纯化合物的[[熔化温度]]$\mathrm { ( T _ { m } ) , }$、[[沸点]]（T<sub>b</sub>）和[[熔化焓]]$\left( \Delta \mathrm { H } _ { \mathrm { m } } \right)$。

<table><tr><td></td><td>薄荷醇</td><td>癸酸</td><td>PFOA</td><td>PFOS</td><td>HFPO-DA</td></tr><tr><td> $T_m$  (K)</td><td>315.7</td><td>305.0</td><td>327.3</td><td>363.0</td><td>358.8</td></tr><tr><td> $T_b$  (K)</td><td>489.6</td><td>530.0</td><td>465.0</td><td>522.0</td><td>469.7</td></tr><tr><td> $\Delta H_m$  (kJ/mol)</td><td>12.89</td><td>28.00</td><td>26.90</td><td>24.99</td><td>19.48</td></tr></table>

为了进一步深入理解分子间相互作用的本质，基于[[分子中的原子量子理论]]（QTAIM）[34]，使用[[Multiwfn]] [35]对最低能量几何结构进行了拓扑分析。该分析确定了[[键临界点]]（BCPs）和[[环临界点]]（RCPs），在这些点上[[电子密度]]的梯度为零。[[氢键|强氢键]]定义为BCP电子密度（ρ）在0.002至0.0035 a.u.之间、[[拉普拉斯量]]$( \nabla ^ { 2 } \rho )$在$0 . 0 2 4 - 0 . 1 3 9 \mathrm { a . u } [ 3 6 ] . ,$范围内、键距为$1 . 2 { - } 2 . 0 \mathring \mathrm { A }$、供体-受体角在$1 3 0 ^ { \circ }$至180°之间[37]。此外，采用[[约化密度梯度]]（RDG）方法[38]进行了[[非共价相互作用|非共价相互作用（NCI）]]分析。在所得的等值面图中，相互作用以颜色编码：氢键呈蓝色$( \rho >$ 0、$\nabla ^ { 2 } \rho < 0 )$，[[范德华相互作用]]呈绿色$\begin{array} { r } { ( \rho \approx 0 , \nabla ^ { 2 } \rho \approx 0 ) } \end{array}$，[[排斥相互作用]]呈红色$( \rho > 0 , \nabla ^ { 2 } \rho > 0 )$。所有分子可视化图像均使用[[Visual Molecular Dynamics]]（VMD）[39]生成。

## 2.2. COSMO热力学性质预测

所有物种的分子结构最初均由其[[SMILES]]（Simplified Molecular Input Line Entry System）表示生成，并随后利用[[TurbomoleX]]通过[[密度泛函理论|密度泛函理论（DFT）]]进行优化。几何优化和表面电荷密度计算采用[[BP86交换相关泛函]][29]与[[def-TZVP基组]]$s \mathrm { e t , }$相结合进行，该组合在精度与计算效率之间实现了良好平衡，同时确保与原始[[COSMO-RS]][40]参数化方案兼容。所得.cosmo文件包含分子表面极化电荷密度的关键信息，并使用[[COSMOconf]]软件[41]进行处理。该步骤系统性地探索每种化合物（[[薄荷醇]]、[[癸酸]]、[[PFOA]]、[[PFOS]]和[[HFPO-DA]]）的构象空间，生成多个构象异构体并选择最低能量结构用于后续计算。随后使用[[COSMOtherm]][42]计算[[PFAS]]分析物在三种摩尔比下的薄荷醇-癸酸二元混合物中的[[无限稀释活度系数]]（γ∞）和[[溶解度]]。这些计算作为温度的函数进行，并依赖于纯组分的热力学数据，包括熔点、[[沸点]]和[[熔化焓]]。这些信息通过可靠数据库纳入。在实验

[[PFOA]]、[[PFOS]]和[[HFPO-DA]]在三种萃取剂混合物中于298 K下的[[无限稀释活度系数]]（ln(γ∞)）和[[溶解度]]。

<table><tr><td rowspan="2">萃取剂摩尔比</td><td colspan="3"> $\ln(y^{\infty})$  于298 K</td><td colspan="3">溶解度（ $g_{soluto}/g_{disolución}$ ）于298 K</td></tr><tr><td>PFOA</td><td>PFOS</td><td>HFPO-DA</td><td>PFOA</td><td>PFOS</td><td>HFPO-DA</td></tr><tr><td>1:1</td><td>-1.57</td><td>-1.83</td><td>-2.28</td><td rowspan="3">完全溶解</td><td rowspan="3">0.78</td><td rowspan="3">完全溶解</td></tr><tr><td>1:2</td><td>-0.97</td><td>-1.18</td><td>-1.68</td></tr><tr><td>2:1</td><td>-2.24</td><td>-2.52</td><td>-2.94</td></tr></table>

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/2229668166735d4d8a239254504bd77e433aa69082959ad1119e907522141c61.jpg>)  
图3. PFOA、PFOS和HFPO-DA在三种萃取剂混合物中于283–353 K温度范围内的溶解度热图。

初始[[分子动力学模拟|MD模拟]]盒子  
![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/e8176f10fe6a9996baa055ae901f34489edc463c01cc25fe4f5ed7d472db4c99.jpg>)  
图4. 含5% PFOA（黄色）在水（蓝色）中、以薄荷醇（红色）和癸酸（绿色）为萃取剂的体系的初始和最终MD模拟盒子。观察到两步萃取过程：首先形成界面，随后PFOA扩散进入HNADES相。（有关本图颜色标注的解释，请读者参阅本文网络版。）

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/1a3892cd0a99c3ef31295d0ad71358657c56e6ff5a3e04e9ae98c475429ffe44.jpg>)  
图5. 本工作所研究组分的最相关相互作用位点（原子）的分子结构及编号（从左至右：癸酸、薄荷醇、PFOA、PFOS和HFPO-DA）。

热物理性质不可用的情况下，缺失值采用[[Joback基团贡献法]][43]进行估算，该方法将性质推断为分子官能团的加和函数。

## 2.3. [[分子动力学模拟|经典分子动力学模拟]]

采用[[分子动力学模拟|MD模拟]]研究相转移

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/57d0519047bedb9d3ea8bd37a3c95225644dcc89af7372fefcac87c418ea68d6.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/c0db726958837061e7ce543b67b745553b8949a6843fd5600cb415f3499acb77.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/a42e65b049455fb9e8c6e01b2e95aad3f575cd053ae1f533572134a9a9648f24.jpg>)  
图 6. 在 298 K、1 bar 条件下，0.05%、0.1%、1%、2.5% 和 5% PFAS 在水与 HNADES 界面处的行为，报告了 PFAS 分子中 $\mathrm { C _ { 1 } }$ 原子沿垂直于界面方向的归一化密度分布（ρ）。蓝色曲线表示第一个纳秒内的平均行为，而横向更宽的橙色曲线对应最终分布。（关于本图图例中颜色的解释，读者可参考本文网络版本。）

[[PFAS]]在[[HNADES|HNADES-水体系]]中的行为与界面动力学。需要指出的是，本研究中考虑的[[全氟和多氟烷基物质|PFAS]]物种对应于其中性酸形式。尽管[[PFOA]]、[[PFOS]]及相关PFAS由于pKa值较低，在环境相关的水相条件下主要以阴离子形式存在[9,10]，这会强烈影响[[logP]]/[[logD]]、[[水合自由能]]、[[静电相互作用]]和扩散行为等性质，但此处采用中性态近似，是为了建立一个一致的分子级框架，以评价PFAS与[[低共熔溶剂|HNADES]]之间的本征相互作用。未来工作将明确引入离子化PFAS物种、抗衡离子和[[pH]]依赖性形态效应，以评估它们对萃取热力学和界面传输行为的影响。所有组分均使用[[Merck分子力场]]（MMFF），参数采用[[SwissParam]]生成[44]，但原子电荷除外，原子电荷通过[[Mulliken布居分析]]获得，该分析基于[[TurbomoleX]]中实现的[[B3LYP-D4]]/def-TZVP理论水平的[[DFT]]优化几何结构。选择MMFF是因为它经过专门参数化，可描述与本研究体系相关的广泛有机官能团，包括羧酸、氟代脂肪链以及环状/脂环族萜类结构。因此，本工作研究的主要分子族——PFAS氟代烷基链、[[癸酸]]和[[薄荷醇]]，均处于该力场所记录适用范围内。此外，先前研究已在低共熔溶剂体系的[[分子动力学模拟]]中成功使用MMFF。值得注意的是，[[Mainberger]]等人[45]报道了MMFF与[[GAFF]]在DES模拟中的比较评价，结论是两种力场均能对这些复杂流体提供令人满意的结构和热力学描述。模拟在周期性立方盒子中进行。每个体系由一个中心水相组成，其中含有2000个水分子以及不同数量的PFAS，PFAS摩尔浓度为0.05–5%，周围是由500个薄荷醇分子和500个癸酸分子按1:1摩尔比组成的溶剂区域。盒子尺寸随组成在$4 2 \times 4 2 \times 4 2 \mathring { \mathbb { A } } ^ { 3 } \mathrm { t o } 5 4 \times 5 4 \times 2 5 0 \mathring { \mathbb { A } } ^ { 3 }$范围内变化。所有[[分子动力学|MD]]模拟均遵循三步流程。首先使用[[Packmol]]构建和堆积体系[46]，随后在298 K下进行1 ns的[[NVT平衡]]。此后，在298 K和1 bar下进行10 ns的[[NPT平衡]]，并在相同条件下进行后续40 ns的生产运行，用于数据收集和分析。温度和压力分别使用[[Nosé-Hoover恒温器]]和恒压器[47]控制，耦合常数分别为30 ps和1000 ps。长程静电相互作用采用[[Ewald求和法]][48]处理，截断半径为15 Å，[[Lennard-Jones]]交叉相互作用使用[[Lorentz-Berthelot混合规则]]计算。采用[[Tuckerman-Berne多时间步长算法]][49]，时间步长分别为1 fs（长）和0.1 fs（短）。模拟使用[[MDynaMix|MDynaMix v.5.2]]运行[50]。可视化、轨迹后处理和分析使用[[Visual Molecular Dynamics|VMD]]完成。

## 2.4. 其他[[PFAS]]与[[HNADES]]中的全对全分析

本节的目标是进行一种计算机模拟设计和大规模计算筛选，旨在确定最优的 [[HNADES]]。为了将范围扩展到以[[薄荷醇]]-[[癸酸]]混合物对 [[PFOA]]、[[PFOS]] 和 [[HFPO-DA]] 的代表性提取之外，开展了一项涵盖 1746 种 [[PFAS]] 和 2589 种 [[低共熔溶剂|HNADES]] 的广泛分析（表 S1）。根据广义结构定义（与 [[OECD]] 型标准一致）所界定的 [[全氟和多氟烷基物质|PFAS]] 大类中，考虑了一个可能包含数万种化合物的库，其中包括 [[ECHA]] 数据库中所列的化合物（21,566 种潜在 PFAS）。从这一库中，我们选取了 2000 种 PFAS 子集用于计算筛选，优先选择分子量较低的结构，这些结构也对应于最常见的代表物。经过几何优化后，保留了 1746 种结构，排除了含有不相容元素、自由基特征或冗余的结构。2589 种 [[疏水性天然低共熔溶剂|HNADES]] 由 76 种 [[氢键受体|HBA]] 和 [[氢键供体|HBD]] 候选物的二元组合形成，这些候选物是根据低挥发性、合适的摩尔比、处于 $1 8 0 ~ ^ { \circ } \mathrm { C }$ 至 $4 7 0 ~ ^ { \circ } \mathrm { C }$ 范围内的适中[[沸点]]以及低于 25 °C 的熔点进行选择的 [51]。基于 COSMO 的工作流程使用 [[Scilab]] 和 Python 进行了规模化和自动化处理，以计算每个 PFAS-HNADES 对的[[活度系数]]和[[溶解度]]，并省略构象采样以降低计算成本。涵盖电子、拓扑和空间性质的[[分子描述符]]使用 [[Materials Studio]] [52] 计算，预测模型在 [[MATLAB]] 中开发。构建了四个模型：一个用于[[无限稀释活度系数]]，三个用于溶解度（[[摩尔分数]]、[[质量分数]]和摩尔溶解度）。[[机器学习]]模型在 75% 的数据上进行训练并进行[[交叉验证]]，并在其余 25% 的数据上进行测试。

## 3. 结果与讨论

## 3.1. 短程相互作用的表征

从九个精心设计的初始构型出发，旨在优化酸官能团与醇官能团之间的取向，确定了三个体系的最小能量几何结构（即能量值最负的结构）：(i) 一个[[薄荷醇]]分子和一个[[癸酸]]分子，(ii) 一个薄荷醇分子

(a.2) [[薄荷醇]]:[[癸酸]] (1:1) + [[PFOA]] 0.1%  
![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/6bf148988969239af062994193de0ba183881a061c72e6d38a09b4907efe2c7a.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/664f4a79dccbe751d4f0abdab3e2cfd067f61081314236b76186d4b7637b82f6.jpg>)  
(a.3) [[薄荷醇]]:[[癸酸]] (1:1) + [[PFOA]] 1%

(c.2) [[薄荷醇]]:[[癸酸]] (1:1) + [[HFPO-DA]] 0.1%  
![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/c97b6c6aadb9fc01d82c7d521cde456404dc55b106ffc80d6deb65857d23f904.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/e3040415a5475ee0cd48fdc7750cc5f1bc8357ed70fa18ff09d2b322f14db23e.jpg>)  
(a.4) [[薄荷醇]]:[[癸酸]] (1:1) + [[PFOA]] 2.5%

(b.3) [[薄荷醇]]:[[癸酸]] (1:1) + [[PFOS]] 1%  
(c.3) 薄荷醇:癸酸 (1:1) + [[HFPO-DA]] 1%  
![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/53e5f17de135ec6a49bea5afbb598514ccc05de5e529c8c92b6f620a56b1f1ad.jpg>)  
(b.4) 薄荷醇:癸酸 (1:1) + [[全氟辛烷磺酸|PFOS]] 2.5%

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/481b6fec3182bf2c2ecd6c699218c447e4ec0610c0a1b876b8fa5eef5b579bb7.jpg>)  
(c.4) [[薄荷醇]]:[[癸酸]] (1:1) + [[HFPO-DA]] 2.5%

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/f642334d01e060a0d5345c6f7b577f3e7de599d00c41580057d6d24c7b7f1a22.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/9c8872ed1b530e98c11edd8d7686204a342bf99ed3285f1d9ebf4fd84200ddcb.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/4cd85857011832d46edc6d06ec06981b68ffa8e7184878234b62782c344d5103.jpg>)

(a.5) [[薄荷醇]]:[[癸酸]] (1:1) + [[PFOA]] 5%  
![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/eb60254b443a07c4f2dfa1e3be8990a4f6a07db1fe6144c5da85e4b7f0045ecc.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/8ead8fa61274602d92c02082c50b9e7e77bd2579ebf86c170775d59888726f18.jpg>)  
图 6.（续）

(c.5) [[薄荷醇]]:[[癸酸]] (1:1) + [[HFPO-DA]] 5%  
![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/052b8e4d7adde5149d9e06246de304cafe99436d10f42ec02d6f782e464e9710.jpg>)

和两个[[癸酸]]分子，以及 (iii) 两个[[薄荷醇]]分子和一个癸酸分子。基于这些热力学上最稳定的结构，通过额外加入每种分析物的一个分子构建了六个附加构型，随后按照先前确立的方法学标准进行了优化。

(a.1) [[薄荷醇]]:[[癸酸]] (1:1) + [[PFOA]] 0.05%  
![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/1f2ee8bb70fa40e21f1d0f6cfbd5e24f803da7113b54460054bbd8618af61f31.jpg>)  
(a.2) 薄荷醇:癸酸 (1:1) + [[全氟辛酸|PFOA]] 0.1%

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/cb5349dde581b3d96a553072406e7cddc1aa09979ad09ddcee85df12eaf8578d.jpg>)  
(b.2) [[薄荷醇]]:[[癸酸]] (1:1) + [[PFOS]] 0.1%

(c.1) [[薄荷醇]]：[[癸酸]]（1:1）+ [[HFPO-DA]] 0.05%  
![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/1c59ff12e2008f371dc82bbbef6f92f2a4330bdabffb2d5660b0ca0f39f78ad0.jpg>)  
(c.2) 薄荷醇：癸酸（1:1）+ [[六氟环氧丙烷二聚酸|HFPO-DA]] 0.1%

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/42b214d3b63c354a2e059d2353edc6bf287eaec1ddb97695dfd40e2ee9598589.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/8bfe36c56f28ff8fbf1072cde6c32bf1264303230044e4d2f2902a713e4294bd.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/d9da206bab8df472df4d957eb0d5cd0911a50797ce0dd0d6b7ba384e19cd11f7.jpg>)  
图 7. 原子对的径向分布函数（Radial distribution functions, RDFs），g(r)：${ \mathrm { O } } _ { 3 ^ { - } } { \mathrm { O } } _ { 4 }$（粉色，次要相关）、${ \mathrm { O } } _ { 3 } – { \mathrm { O } } _ { 5 }$（红色，PFAS–薄荷醇相互作用）、$\mathrm { O _ { 1 } . O _ { 4 } }$（浅绿色，次要相关）、${ \bf O } _ { 2 } – { \bf O } _ { 4 }$（橙色，次要相关）、${ \bf O } _ { 1 } – { \bf O } _ { 5 }$（深绿色，PFAS–癸酸相互作用）、$O _ { 2 } { - } O _ { 5 }$（黑色，次要相关）、$\mathrm { O _ { 1 ^ { - } } O _ { 3 } }$（浅蓝色，薄荷醇–癸酸相互作用）以及 ${ \bf O } _ { 2 } { \bf - O } _ { 3 }$（深蓝色，薄荷醇–癸酸相互作用），位于不同界面。标签见图 7。（本图图例中颜色引用的解释，请读者参阅本文网络版。）

[[HNADES]] 的相互作用能（ΔE）在 1:1 比例下为 −34 kJ/mol，1:2 比例下为 −68 kJ/mol，2:1 比例下为 −47 kJ/mol。与 [[PFAS]] 形成完整团簇后，相互作用能变得更加有利，最低可达 −125 kJ/mol。在所研究的 [[全氟和多氟烷基物质|PFAS]] 中，相互作用的有利程度未观察到显著差异，其变化过小，无法得出确定性结论。尽管如此，所有情况下均一致存在高度有利的相互作用。这一行为与氟化程度、电荷分布以及形成定向接触（包括[[氢键]]和氟—氢相互作用）的能力等因素相关。为支持对这些相互作用机制的解释，分析了 [[σ-谱]]（σ-profiles）和 [[σ-矩]]（σ-moments）。基于这些细化的结构和能量描述符——连同 Mulliken 电荷、键距、临界点以及相互作用类型的表征——得出以下结果。

当萃取剂摩尔比为 1:1 时，在[[癸酸]]的羧基氢与[[薄荷醇]]的羟基氧之间观察到[[氢键|强氢键]]，表 1 中所报告的高[[电子密度|电子密度（ρ）]]和短键距证实了这一点。在 1:2 比例下，该相互作用由第二个癸酸分子的羧基氢与第一个分子的羰基氧之间建立的第二个氢键加以补充。在 2:1 [[HNADES]] 中，除酸—薄荷醇相互作用外，还在第一个薄荷醇的羟基与第二个薄荷醇的氧之间检测到额外的氢键。所有体系中还识别出[[范德华相互作用]]。

将孤立萃取剂在 [[键临界点|BCP]] 处的 ρ 值和键距（表 1）与完整团簇对应值（表 2）进行比较，可以推断，原始 [[HNADES]] 的相互作用在引入 [[PFAS]] 分子后得到增强。[[氢键]]强度的这种增加表明存在结构协同效应，有利于稳定与分析物摄取相关的构型。

在所有 [[HNADES]] + [[PFAS]] 团簇中，[[全氟和多氟烷基物质|PFAS]] 官能团上的氢与不参与 [[低共熔溶剂|HNADES]] 固有相互作用的[[癸酸]]分子羰基氧之间均识别出特别强的[[氢键]]（对应于 1:1 和 2:1 比例中存在的单个分子，以及 1:2 比例中的第二个分子；见表 3）。此外，还检测到由范德华力稳定的广泛区域，主要为 F⋯H 和 F⋯O。尽管氟—氢（F⋯H）相互作用本质上较弱，但其方向性特征有助于 PFAS-[[疏水性天然低共熔溶剂|HNADES]] 团簇的取向和额外稳定。

图 1 和表 4 提供了补充证据，表明这种亲和力由部分电荷转移介导。PFAS 作为电子密度受体，从 HNADES 中获取电子密度，主要来自参与氢键的癸酸（PFAS）H⋯O（癸酸）。

迄今所呈现的数据，以及最相关[[键临界点]]的位置和相应的 [[非共价相互作用|NCI]] 分析图（[[氢键]]以蓝色表示，[[范德华相互作用]]以绿色表示），汇总展示于图 2（1:1 摩尔比）、图 S.1（1:2）和图 S.2（2:1）中。

## 3.1. 热力学评估：[[活度系数]]与[[溶解度]]

基于最稳定构象的电荷密度及其

（c.3）[[薄荷醇]]：[[癸酸]]（1:1）+ [[HFPO-DA]] 1%

（c.5）[[薄荷醇]]：[[癸酸]]（1:1）+ [[HFPO-DA]] 5%  
![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/13e15b70c6f3ce599b3a230d4aadd339ccca0539f61802d9134f4c01729d4a9a.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/b966aca63fd79a5bc2a10782c1f3db68cccea2e4cd9b98ed701fcd28310e1df8.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/49756fc807aa002c4f02eec0a036a5b0e4a4afd9d7624dd9888ebf2db9727977.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/59181867da33682ab4733040a80283ca741f76004abd41cb5317ae1d0fc8d864.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/1f0b3040cd7fb5d38c56188fffb4ae1ab9b6d9681b144dd97bb2369cc84c40c8.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/e5ecc0ddf5e0e725ad0baa335aa4ca0a9e6eb5ad8ecf8f6198697173780b947f.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/a28f587d73b6250fe5a7f81d9c6370c5e31d9238ea865dc41808e89fdd74a674.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/4420744fd4560b644873ce60959a44f6ac6f65ce7d89bba75ec75f4806198a2a.jpg>)  
图 7.（续）。

热力学性质（表 5），使用 [[COSMO-RS]] 在 298 K 下计算了 [[PFOA]]、[[PFOS]] 和 [[HFPO-DA]] 在[[薄荷醇]]—[[癸酸]]混合物中的[[无限稀释活度系数]]和[[溶解度]]（表 6）。所有 ln(γ∞) 值均为负，表明存在强溶质—溶剂相互作用，这与先前通过 [[DFT]] 和 [[分子中的原子量子理论|QTAIM]] 分析识别的[[氢键]]模式一致。

2:1 [[HNADES]] 组成表现出最负的 ln([[无限稀释活度系数|γ∞]]) 值，表明其具有最高的萃取潜力，而 1:2 体系则显得效率较低。在各分析物中，[[HFPO-DA]] 在所有体系中均表现出最高的亲和力和[[溶解度]]，其次为 [[PFOS]] 和 [[PFOA]]。值得注意的是，[[全氟辛酸|PFOA]] 和 [[六氟环氧丙烷二聚酸|HFPO-DA]] 在所有测试混合物中均表现出完全溶解，而 [[全氟辛烷磺酸|PFOS]] 在 1:2 配方中溶解度出现特异性下降。需要强调的是，当前 [[COSMO-RS]] 分析中“完全可溶”一词专指在无限稀释条件下 [[PFAS]] 在 [[低共熔溶剂|HNADES]] 相中的预测热力学溶解度，并不意味着 [[疏水性天然低共熔溶剂|HNADES]] 与水相之间存在宏观混溶性。在液—液萃取背景下，[[全氟和多氟烷基物质|PFAS]] 化合物被视为在两种不互溶的主体溶剂之间分配的痕量溶质。因此，所预测的 PFAS 在 HNADES 相中的高溶解度与强萃取亲和力一致，而非形成单一均相。[[薄荷醇]]—酸 HNADES/水体系的双相特征仍由两种主体液体固有的不混溶性决定，并且在整个 [[分子动力学|MD]] 模拟过程中，通过保持清晰界定的液—液界面得以维持。因此，[[真实溶剂类导体屏蔽模型|COSMO-RS]] 结果应被解释为 PFAS 有利于向 HNADES 相分配的指示，而非主体溶剂混溶性的证据。

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/75501d9b472d934a8c00520506ad75b57d50b1c6f2a14a98fea65b0d40c4ca4b.jpg>)

此外，还评估了[[PFAS]]在283–353 K温度范围内的[[溶解度]]。如热图（图3）所示，溶解度在整个区间内保持较高水平，这有利于萃取过程。

(c.2) [[薄荷醇]]：[[癸酸]]（1:1）+ [[HFPO-DA]] 0.1%  
![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/eaed503cbeb7ff935e228321187aa9d5f2fa8d9f013d1529a482604b6ebb7e1c.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/a77554b7fd5021c77143c7c90354b202637318b63ea218080816b7951c75da58.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/963047be0f6ed9209954c36836522e3232ff9883f39989e35b9a861119576114.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/9baee54c5d27fabb4a3ae23bb7b04da6ce07a7c7491ad7a1a123cd6e70d92dc0.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/1e79bd267e104c99f9ad8e4eecfb23cb6b37b12de70ac9b9b552ea2a53cb613f.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/d62f74a9073416ef2860798145361690a5d50695737fb3c61465db95f01749bd.jpg>)  
图8. 在不同界面处，各原子对的每个HBA分子的平均氢键数$( \mathrm { N _ { H } } )$：$\mathrm { O } _ { 3 } – \mathrm { O } _ { 4 }$ O -O（粉色，次要相关性）、${ \mathrm { O } } _ { 3 } – { \mathrm { O } } _ { 5 }$（红色，PFAS-薄荷醇相互作用）、${ \bf O } _ { 1 } – { \bf O } _ { 4 }$（浅绿色，无相关性）、$O _ { 2 } { \cdot } O _ { 4 }$（橙色，次要相关性）、${ \mathrm { O } } _ { 1 } { - } { \mathrm { O } } _ { 5 }$（深绿色，PFAS-癸酸相互作用）、${ \bf O } _ { 2 } { \bf - O } _ { 5 }$（黑色，次要相关性）、$\mathrm { O _ { 1 } \mathrm { - } O _ { 3 } }$（浅蓝色，薄荷醇-癸酸相互作用）和${ \bf O } _ { 2 } { \bf - O } _ { 3 }$（深蓝色，薄荷醇-癸酸相互作用）。标签依据$\mathrm { F i g . } \ 7 .$。（有关本图例中颜色引用的解释，读者可参阅本文网络版本。）

## 3.2. [[薄荷醇]]：[[癸酸]] [[HNADES]] 捕获 [[PFOA]]、[[PFOS]] 和 [[HFPO-DA]] 的界面动力学

[[分子动力学模拟|MD模拟]]所得结果对流体介质中存在的物种集体行为提供了详细的微观结构表征。这一信息对于深入理解（[[HNADES]]）-（[[PFAS]] + 水）界面处的扩散机制至关重要，克服了基于[[DFT]]建模方法固有的空间尺度局限。模拟在298 K恒温和1 bar压力下进行。

模拟盒的边缘区域最初仅由[[HNADES]]组成，不含[[PFAS]]，[[全氟和多氟烷基物质|PFAS]]均匀分布在中心水相中。随着模拟进行，体系从这种两相排布演变为形成非均相界面区：PFAS分子逐渐从水相向界面迁移，并在界面处与[[低共熔溶剂|HNADES]]组分（[[薄荷醇]]和[[癸酸]]）建立相互作用，从而削弱其与水之间的[[氢键]]作用和溶剂化。随后，[[吸附]]在界面上的PFAS扩散进入萃取剂的[[疏水性|疏水]]核心。

图4所示快照对应于含5% PFOA的体系构型（作为示例），分别为1 ns（初始构型）和生产模拟的最终构型。需要指出的是，该浓度远高于环境相关水平，仅出于建模目的而采用。在视图（i）中，可以观察到PFAS优先积聚在HNADES与水相之间的界面区域。在视图（ii）中，其逐渐浸入有机相变得明显，表明存在向萃取剂核心的自发转移过程。尽管HNADES具有疏水性，仍可观察到少量水分子进入其内部通道，这提示萃取剂使用后宜进行干燥处理，以防止残余累积。另一方面，受限的水相区域保持不含有机溶剂，从而将交叉污染风险降至最低，即使考虑到HNADES的低毒性也是如此。

为进行后续分析，有必要根据图 5 所示的命名方式识别某些关键原子。[[PFAS]] 的渐进迁移通过图 6 中所示的归一化密度（ρ）曲线得到证实，这些曲线表示这些分子的 $\mathrm { C _ { 1 } }$ 原子沿垂直于模拟盒子界面方向（z 轴）的平均空间分布。可以观察到这些中心在中央水相区域出现耗尽（蓝色曲线呈双谷形状，反映了第一纳秒内的平均行为），并系统性地向萃取剂所占据的周边区域迁移（橙色曲线对应最终分布）。

所研究的所有 [[PFAS]] 均表现出同样快速的[[吸附]]和扩散行为，没有任何单一化合物表现出明显更快的迁移。到达界面的速度极快，发生在不到 0.5 ns 内。尽管 [[PFOS]] 显示出略快的动力学，但 [[全氟和多氟烷基物质|PFAS]] 之间的差异极小，并未表明存在显著不同的迁移机制。

（a.4）[[薄荷醇]]：[[癸酸]]（1:1）+ [[PFOA]] 2.5%  
（c.4）薄荷醇：癸酸（1:1）+ [[HFPO-DA]] 2.5%  
![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/e4cb25260db6da0024505f1bea9ebf97a413961f64cacbfcb3ff0b1c7cab2218.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/fd4e2cfc12a3114dca443f7ef968c74e87b9ac9665528c5141e5944adccaec24.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/422160ab68bc9ba6ec51faab6eace2a2a760ab79ed8ad18170ab8f4231dcc980.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/fa3d759cff9f089df982c3419bad4973dfd8cfc292ab7c8ebf9aae01ba5c556e.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/ff4e5e3a457f428fbb416a23a662b685ecf107f03d6f32c994c7418d2f6e985f.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/6e049d3588546fce57facef5770022b2181931a1e3d9058f0f639ff41ef975ab.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/8a3c5569c04b4ee04603a32548058d880a3b7426f3578c04e64a78d9f2d417cc.jpg>)

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/a9731d2de92fdda3ec8fdfbf8869f72d6b21e6d47339c43ae35e51af05a6d44b.jpg>)  
图 8.（续）。

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/0fe3829f5922e155f5f23ffe2314112bd417a70184a0d32c9a7ebeabc252260d.jpg>)

对从 [[分子动力学|MD]] 模拟获得的轨迹进行结构分析的一个关键工具是[[径向分布函数]]（RDF）。图 7 显示，原子对 $\mathrm { O _ { 1 ^ { - } } O _ { 5 } }$（深绿色）在非常短的距离处达到最大 g(r) 值。这突出了[[癸酸]]的羰基氧与 [[PFAS]] 分子中存在的羟基氧之间的强相互作用，这可归因于 ([[全氟和多氟烷基物质|PFAS]])H⋯O(癸酸) 型[[氢键]]的形成，与先前 [[DFT]] 计算预测的最稳定构型一致。在稍长的距离处，尽管强度较低，仍可观察到 ${ \mathrm { O } } _ { 3 } – { \mathrm { O } } _ { 5 }$ 对（红色），表明[[薄荷醇]]在与分析物的相互作用中具有次要参与作用。涉及 PFAS 羰基氧或磺酰基氧的原子对表现出显著较低的 g(r) 值和/或向较长距离偏移的峰，表明其对萃取机制的贡献微乎其微。最后，在 ${ \mathrm { O } } _ { 1 ^ { - } } { \mathrm { O } } _ { 3 }$（浅蓝色）和 ${ \bf O } _ { 2 } { \bf - O } _ { 3 }$（深蓝色）原子对中检测到短距离峰，这源于 [[HNADES]] 组分之间固有的结构邻近性。

图 8 通过柱状图呈现了在不同界面处最相关原子对中每个 HBA 分子的平均氢键总数，总体上证实了前述相互作用模式。在该分析中，采用了较为宽泛的氢键定义标准，将任何 O⋯H 距离 $\underline { { < } } 3 . 5 \mathring { \mathrm { A } }$ 的相互作用均视为氢键。最频繁出现的氢键，由于其相对浓度较高，发生在 HNADES 组分 $\left( \mathbf { O } _ { 1 } – \mathbf { O } _ { 3 } \right.$ 和 $O _ { 2 } { \cdot } O _ { 3 } ,$（蓝色）之间，其中两种化合物的羟基之间形成的氢键略占主导地位。按频率递减顺序，其后依次为 $\mathrm { O _ { 1 ^ { - } } O _ { 5 } }$（PFAS-癸酸，深绿色）和 ${ \mathrm { O } } _ { 3 } – { \mathrm { O } } _ { 5 }$（PFAS-薄荷醇，红色）相互作用。其他相互作用，如 $\mathrm { O _ { 3 ^ { - } } O _ { 4 } , \ O _ { 2 ^ { - } } O _ { 4 } , \ O _ { 2 ^ { - } } O _ { 5 } , }$ 和 $_ { \mathrm { O _ { 1 } - O _ { 5 } , } }$，表现出显著更低的频率，表明其在分子稳定机制中起次要作用。

表 7  
所报道分子对：[[PFAS]]–水、[[全氟和多氟烷基物质|PFAS]]–[[薄荷醇]]、PFAS–[[癸酸]]、薄荷醇–癸酸、薄荷醇–水以及癸酸–水，在不同体系（水 + [[HNADES]] 中 0.05%、0.1%、1%、2.5% 和 5% PFAS）中的分子间相互作用能（[[Lennard-Jones]] 与静电贡献之和）。更有利的相互作用对应更负的相互作用能值。

<table><tr><td></td><td> $E_{int} (kJ/mol) PFAS-water$ </td><td> $E_{int} (kJ/mol) PFAS-menthol$ </td><td> $E_{int} (kJ/mol) PFAS-decanoic acid$ </td><td> $E_{int} (kJ/mol) menthol-decanoic acid$ </td><td> $E_{int} (kJ/mol) menthol-water$ </td><td> $E_{int} (kJ/mol) decanoic acid-water$ </td></tr><tr><td>0.05% PFOA</td><td>-37.71</td><td>-45.57</td><td>-86.59</td><td>-52.09</td><td>-6.87</td><td>-13.44</td></tr><tr><td>0.1% PFOA</td><td>-33.56</td><td>-40.32</td><td>-84.49</td><td>-50.25</td><td>-5.79</td><td>-13.13</td></tr><tr><td>1% PFOA</td><td>-27.09</td><td>-52.13</td><td>-96.14</td><td>-49.64</td><td>-6.31</td><td>-13.89</td></tr><tr><td>2.5% PFOA</td><td>-23.21</td><td>-54.41</td><td>-72.14</td><td>-46.96</td><td>-5.57</td><td>-11.42</td></tr><tr><td>5% PFOA</td><td>-25.20</td><td>-35.40</td><td>-66.52</td><td>-44.77</td><td>-4.84</td><td>-10.06</td></tr><tr><td>0.05% PFOS</td><td>-57.91</td><td>-54.36</td><td>-41.85</td><td>-49.98</td><td>-6.89</td><td>-13.32</td></tr><tr><td>0.1% PFOS</td><td>-44.20</td><td>-96.92</td><td>-43.59</td><td>-50.67</td><td>-5.77</td><td>-13.48</td></tr><tr><td>1% PFOS</td><td>-29.96</td><td>-65.03</td><td>-71.11</td><td>-51.24</td><td>-5.38</td><td>-12.04</td></tr><tr><td>2.5% PFOS</td><td>-27.50</td><td>-49.31</td><td>-70.30</td><td>-48.22</td><td>-5.50</td><td>-9.82</td></tr><tr><td>5% PFOS</td><td>-29.11</td><td>-45.75</td><td>-65.27</td><td>-47.53</td><td>-5.40</td><td>-11.63</td></tr><tr><td>0.05% HFPO-DA</td><td>-46.75</td><td>-40.07</td><td>-33.05</td><td>-50.08</td><td>-6.38</td><td>-13.65</td></tr><tr><td>0.1% HFPO-DA</td><td>-25.10</td><td>-89.00</td><td>-70.13</td><td>-52.92</td><td>-6.33</td><td>-12.63</td></tr><tr><td>1% HFPO-DA</td><td>-18.76</td><td>-53.65</td><td>-58.91</td><td>-49.65</td><td>-6.04</td><td>-11.78</td></tr><tr><td>2.5% HFPO-DA</td><td>-19.87</td><td>-46.80</td><td>-64.42</td><td>-48.75</td><td>-5.63</td><td>-10.59</td></tr><tr><td>5% HFPO-DA</td><td>-20.70</td><td>-45.24</td><td>-59.23</td><td>-49.38</td><td>-4.78</td><td>-10.64</td></tr></table>

表 8

根据对含有 2.5% 和 5% [[PFAS]] 的体系构型进行的 [[分子动力学|MD]] 模拟计算，[[全氟和多氟烷基物质|PFAS]] 在 [[HNADES]] 相内（[[低共熔溶剂|HNADES]]）以及跨 [[疏水性天然低共熔溶剂|HNADES]]–水界面（界面）的[[质心自扩散系数]]，$D ,$。

<table><tr><td rowspan="2" colspan="2"></td><td colspan="2"> $10^{-10} D/m^{2} \cdot s^{-1}$ </td></tr><tr><td>PFAS（HNADES）</td><td>PFAS（界面）</td></tr><tr><td rowspan="2">DES 1:1 + PFOA</td><td>2.5% PFOA in water</td><td>4.381</td><td>6.962</td></tr><tr><td>5% PFOA in water</td><td>5.338</td><td>8.194</td></tr><tr><td rowspan="2">DES 1:1 + PFOS</td><td>2.5% PFOS in water</td><td>1.099</td><td>2.486</td></tr><tr><td>5% PFOS in water</td><td>1.386</td><td>2.834</td></tr><tr><td rowspan="2">DES 1:1 + HFPO-DA</td><td>2.5% HFPO-DA in water</td><td>8.767</td><td>10.645</td></tr><tr><td>5% HFPO-DA in water</td><td>10.328</td><td>12.602</td></tr></table>

[[径向分布函数]]与[[氢键]]布居分析表明，[[PFAS]] 萃取过程中[[薄荷醇]]-[[癸酸]]固有的氢键网络在结构上得以保持，这与先前关于 [[低共熔溶剂|DES]] 超分子组织和氢键动力学的分子层面研究一致 [53]。与 O1-O3 和 O2-O3 相互作用相关的持续短程峰及高氢键布居证实，[[全氟和多氟烷基物质|PFAS]] 的摄取并未破坏 [[HNADES]] 的超分子组织，而是在既有溶剂网络上叠加了额外的 PFAS-癸酸相互作用。

为进一步在分子层面探究 [[PFAS]]-[[HNADES]] 相互作用的本质，我们对整个 [[分子动力学|MD]] 轨迹中的 F⋯O=C 接触进行了系统分析，其动机在于全氟化合物中的[[氟原子]]作为[[卤键]]供体朝向富电子受体的能力已有充分文献记载。尽管氟因其高电负性通常被认为是较弱的卤键供体，但在强吸电子环境中——例如[[全氟烷基磺酸盐|全氟烷基磺酸根]]和[[全氟羧酸盐|羧酸根部分]]——氟原子上显著的正 [[静电势|σ 空穴电势]]使 F⋯O=C 相互作用在几何和能量上均具有合理性 [54]。接触的识别采用与卤键文献中确立的几何判据一致的条件：F⋯O 距离 ≤3.5 $\mathring \mathrm { A }$ 且 C–F⋯O 角 ≥150°。该分析揭示 [[全氟和多氟烷基物质|PFAS]]-[[低共熔溶剂|HNADES]] 复合物中此类接触的出现频率不可忽视，其中 [[PFOS]] 相对于 [[PFOA]] 表现出更高的出现率，这与其更高的氟含量以及磺酸根头基所伴随的更广泛电荷离域相一致。这证实了卤键

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/d462a3738ab458906c72d5b366190c2bcf945338f7379a04b56721e9a56d2afa.jpg>)  
图 9. 基于分子描述符的混合物描述符机器学习建模中输入变量及数据集规模示意图。

预测模型在验证和测试阶段获得的[[决定系数]]（R<sup>2</sup>）、[[均方误差]]（MSE）、[[均方根误差]]（RMSE）和[[平均绝对误差]]（MAE）。

<table><tr><td rowspan="2">响应</td><td colspan="2"> $R^2$ </td><td colspan="2">MSE</td><td colspan="2">RMSE</td><td colspan="2">MAE</td></tr><tr><td>验证</td><td>测试</td><td>验证</td><td>测试</td><td>验证</td><td>测试</td><td>验证</td><td>测试</td></tr><tr><td>ln( $\gamma^\infty$ ) at 298 K</td><td>0.98</td><td>0.98</td><td>0.0719</td><td>0.0680</td><td>0.2682</td><td>0.2608</td><td>0.1565</td><td>0.1527</td></tr><tr><td>log10(x) at 298 K</td><td>0.98</td><td>0.98</td><td>0.0109</td><td>0.0099</td><td>0.1046</td><td>0.0995</td><td>0.0582</td><td>0.0553</td></tr><tr><td>w%/% at 298 K</td><td>0.95</td><td>0.95</td><td>0.0013</td><td>0.0012</td><td>0.0361</td><td>0.0340</td><td>0.0137</td><td>0.0128</td></tr><tr><td>log10(S) at 298 K</td><td>0.98</td><td>0.98</td><td>0.0104</td><td>0.0091</td><td>0.1017</td><td>0.0953</td><td>0.0570</td><td>0.0538</td></tr></table>

![](<../2.SCI_MD/Multiscale mechanistic design of hydrophobic natural DES for PFAS extraction from quantum chemistry to high-throughput screening/images/f49904501e18efb13be79267f3859656906e0df88870309196f6a7145c88c2a0.jpg>)  
图 10. 从左至右：实际值（蓝色）与模型预测值（黄色）的对比；显示测试集中预测值与实际值相关性的散点图；以及同一集合中残差随预测值变化的残差图。（有关本图颜色引用的解释，读者可参阅本文网络版。）

这为[[PFAS]]–[[HNADES]]整体结合提供了一种补充性的稳定贡献。这些发现通过识别一种额外的[[非共价相互作用]]模式，丰富了机理图景，该模式可能影响[[低共熔溶剂|HNADES]]对氟化污染物的选择性和亲和力。

下面的表7给出了分子间相互作用能，计算为[[Lennard-Jones]]贡献与静电贡献之和。可以观察到[[PFAS]]–水相互作用逐步减弱，同时[[全氟和多氟烷基物质|PFAS]]–[[薄荷醇]]相互作用增强，且更显著的是PFAS–[[癸酸]]相互作用增强。后者行为突出表明，癸酸在与分析物形成[[氢键]]方面起主导作用，这与之前的[[DFT]]结果一致。薄荷醇–癸酸相互作用随时间几乎保持不变，保证了[[HNADES]]的结构完整性。相比之下，薄荷醇–水和癸酸–水相互作用极小，进一步强化了萃取介质的[[疏水性|疏水]]特性。

最后，通过由[[分子动力学|MD]]轨迹计算[[质心自扩散系数]]（D）（表8），进一步量化了萃取过程中[[PFAS]]的平动迁移率。扩散系数根据[[均方位移]]（MSD）的斜率（图S3），利用[[爱因斯坦方程]]确定。对含2.5%和5% [[全氟和多氟烷基物质|PFAS]]的体系，分别在[[HNADES]]相内以及[[低共熔溶剂|HNADES]]与水的界面区域中评估了扩散系数。在所有情况下，PFAS在界面处均表现出比[[疏水性天然低共熔溶剂|HNADES]]体相内更高的扩散率，反映了[[非均质边界]]处较低的局部堆积约束和增强的分子迁移率。与界面区域相比，HNADES相内部系统性地更低的扩散率表明，传质在一定程度上受到溶剂高度结构化[[氢键]]网络的限制。尽管如此，所得扩散系数仍处于中等黏度超分子液体的特征范围内，支持PFAS向萃取剂相足够快速的迁移。同样，在2.5%和5%浓度下，[[HFPO-DA]]在界面处和HNADES体相内均表现出最高的扩散系数，其次是[[PFOA]]，而[[PFOS]]始终表现出最低的迁移率。这一趋势可以从PFAS分子的分子尺寸和结构复杂性角度加以解释。[[六氟环氧丙烷二聚酸|HFPO-DA]]具有更短且更多支化的全氟主链，导致其有效分子体积更小，在通过界面区域和HNADES网络进行平动运动时空间位阻更弱。相比之下，[[全氟辛烷磺酸|PFOS]]含有更长的全氟链以及更庞大的磺酸头基，在结构化溶剂环境中经历更强的分子间相互作用和更大的摩擦阻力，从而降低其扩散率。[[全氟辛酸|PFOA]]表现出中间行为，这与其分子尺寸以及相对于[[全氟辛磺酸|PFOS]]更低、但高于HFPO-DA的空间需求一致。总体而言，这些结果表明，尽管界面[[吸附]]发生在亚纳秒时间尺度上，但随后通过HNADES体相的扩散可能构成决定整体萃取动力学的限速步骤。

最佳[[HNADES]]组成（[[氢键受体|HBA]]/[[氢键供体|HBD]]比例）以及被完全增溶的[[PFAS]]数量。

<table><tr><td>HBA</td><td> $x_{HBA}$ </td><td>HBD</td><td> $x_{HBD}$ </td><td>完全溶解的PFAS数量</td></tr><tr><td>尿素</td><td>0.010</td><td>马鞭草烯酮</td><td>0.990</td><td>295</td></tr><tr><td>桉叶素</td><td>0.999</td><td>尿素</td><td>0.001</td><td>292</td></tr><tr><td>丁卡因</td><td>0.134</td><td>马鞭草烯酮</td><td>0.866</td><td>288</td></tr><tr><td>桉叶素</td><td>0.937</td><td>丁卡因</td><td>0.063</td><td>286</td></tr><tr><td>桉叶素</td><td>0.821</td><td>扁柏酚</td><td>0.179</td><td>275</td></tr><tr><td>桉叶素</td><td>0.811</td><td>大牻牛儿内酯</td><td>0.189</td><td>274</td></tr><tr><td>桉叶素</td><td>0.154</td><td>芳樟醇</td><td>0.846</td><td>270</td></tr><tr><td>芳樟醇</td><td>0.877</td><td>马鞭草烯酮</td><td>0.123</td><td>270</td></tr><tr><td>土木香内酯</td><td>0.002</td><td>芳樟醇</td><td>0.998</td><td>267</td></tr><tr><td>香茅醛</td><td>0.002</td><td>芳樟醇</td><td>0.998</td><td>267</td></tr></table>

## 3.3. PFASs–[[HNADES]]组合的大规模筛选

如前所述，该方法框架围绕四个预测模型构建：一个用于估算[[活度系数]]（作为因变量），另外三个专注于预测[[PFAS]]在[[HNADES]]中的[[溶解度]]。这些溶解度分别以[[摩尔分数]]的十进制对数（log₁₀(x)）、[[质量分数]]（w%/%）以及对数标度下的体积溶解度（log₁₀(S)，mol/L）表示。

共采用339个变量作为预测因子，对应113个[[分子描述符]]，这些描述符通过[[定量构效关系|QSPR]]模型（[[Forcite]]、[[Dmol3]]）为[[氢键受体|HBA]] + [[氢键供体|HBD]] + [[PFAS]]组合中三种组分分别计算（图9）。对于HBA和HBD，描述符值根据各[[HNADES]]体系的特定摩尔组成进行加权。这些描述符涵盖电子性质（能量、轨道、多极矩等）、拓扑指数（连接性、形状等）以及几何特征（表面积、体积、惯性矩等）。

[[COSMOtherm]]生成的数据输出达到数百万条数据记录的量级。为了从这一高维数据集中得出有意义的结论，应用了[[机器学习]]算法。然而，由于当前计算资源和存储容量的限制，建模过程（[[活度系数]]估算除外）仅限在总数据集的10%上进行，对应315,237条记录。

所得模型属于[[Bagged Trees]]家族，这类模型不产生显式函数形式或易于解释的方程。相反，最终预测通过对多个独立训练的决策树输出取平均获得，每棵树通过自助聚合（有放回随机抽样）生成。选择Bagged Trees方法是因为其对过拟合具有鲁棒性、预测精度高，并且能够处理数据中复杂的非线性关系。测试了替代算法，但在[[交叉验证]]中一致表现出较差的性能。所选模型的预测性能被认为是令人满意的，表9和图10所示结果即为佐证。

除了模型之外，还能够识别出可溶解更多 [[PFAS]] 的 [[HNADES]] 与能在更多 [[低共熔溶剂|HNADES]] 中溶解的 [[全氟和多氟烷基物质|PFAS]] 之间的具体相关性。首先关注 [[疏水性天然低共熔溶剂|HNADES]]（表 10），排名前 49 的配方能够完全溶解超过 250 种 PFAS。在其成分中，最常出现的化合物是[[芳樟醇]]（linalool，在排名靠前的配方中出现 30 次）、[[马鞭草烯酮]]（verbenone，出现 12 次）和桉叶油素（[[桉叶素|cineole]]，出现 9 次）。正如预期，这些化合物都具有极强的[[疏水性]]。相比之下，由多元醇、醛或酸配制的 HNADES 往往表现出较差的提取性能。

关于 [[PFAS]]，在所分析的 1746 种化合物中，有 386 种在至少一种所评估的 [[HNADES]] 中完全可溶。在最易被提取的 [[全氟和多氟烷基物质|PFAS]] 中——即能在 2000 种以上 [[低共熔溶剂|HNADES]] 中完全溶解的那些——大多数为直链磺酸，其次是醇和多元醇。相反，溶解性最差的 PFAS 是分子量较高的那些——由于其较低的分布丰度而相关性较小——它们通常含有额外的杂原子，如氯或硅，并表现出更复杂的支链结构和环状结构。

## 4. 结论

本研究首次对使用[[薄荷醇]]基 [[HNADES]] 提取三种具有工业相关性的 [[PFAS]]（[[PFOA]]、[[PFOS]] 和 [[HFPO-DA]]）进行了系统性多尺度评估，并结合了迄今为止报道的首次大规模 [[全氟和多氟烷基物质|PFAS]]-[[低共熔溶剂|DES]] 筛选。通过整合[[量子化学]]计算、[[分子动力学模拟|经典分子动力学模拟]]和[[机器学习]]方法，该研究在分子层面提供了对潜在提取机制的深入认识。在考察原型薄荷醇-[[癸酸]] [[疏水性天然低共熔溶剂|HNADES]] 的研究部分中，结果表明，PFAS 的摄取主要由癸酸的羧基与 PFAS 的羟基之间的[[氢键|强氢键]]驱动，并伴随显著的[[范德华相互作用]]。薄荷醇通过内部氢键网络有助于维持低共熔溶剂的结构完整性。这些相互作用在一系列 PFAS 浓度下保持一致，导致[[溶解度]]提高，[[活度系数]]趋近于零，这进而促进了一种逐步机制，该机制破坏了 PFAS 在水中的原有溶剂化壳层。PFAS 分子最初分散在本体水相中，随后向[[液-液界面]]迁移。在界面[[吸附]]后，它们逐渐扩散进入 HNADES 相的内部。

本研究的第二部分专注于[[机器学习]]设计框架，识别出实验得到的混合物描述符（[[溶解度]]和[[活度系数]]）与[[分子描述符]]之间的强相关性，为预测模型的开发奠定了基础。在整个数据集上，初步结果显示出较高的预测性能和稳健性。未来工作将集中于实验验证和工艺优化。目前正在采用[[中心复合设计]]来确定 [[PFOA]] 的最佳提取条件，考察接触时间、温度和溶剂-水比等变量。同时，计划开展全面的[[毒理学评价]]，重点关注其与[[人蛋白]]和[[模型膜]]的相互作用。

当前计算框架的一个重要局限在于使用中性 [[PFAS]] 物种作为代表性的萃取活性态。尽管环境相关的水相 [[全氟和多氟烷基物质|PFAS]] 主要以阴离子形式存在，但本研究旨在探究在[[可转移兼容条件]]下 PFAS 与[[疏水性]] [[HNADES]] 相之间的固有分子亲和力。未来的工作应明确纳入带电 PFAS 物种、抗衡离子、界面[[质子化平衡]]以及 [[pH]] 依赖性分配现象，以建立对真实环境条件下 PFAS 萃取更为全面的描述。

## CRediT 作者贡献声明

[[Alba Perez-Cortes|Alba Perez-Cort´ es:´]] 写作 – 审阅与编辑，写作 – 初稿，可视化，验证，方法学，调查，形式分析，数据整理。 [[Sergio de-la-Huerta-Sainz]]：写作 – 审阅与编辑，可视化，验证，调查，形式分析，数据整理。 [[Sara Santamaría-Herrera]]：可视化，调查，形式分析，数据整理。 [[Santiago Aparicio]]：写作 – 审阅与编辑，可视化，验证，监督，软件，资源，项目管理，方法学，调查，经费获取，概念化。 [[Alberto Gutierrez|Alberto Gutierrez:´]] 写作 – 审阅与编辑，写作 – 初稿，可视化，验证，监督，软件，资源，项目管理，方法学，调查，经费获取，形式分析，数据整理，概念化。

## 利益冲突声明

作者声明，他们不存在可能对本文所报告工作产生影响的已知竞争性经济利益或个人关系。

## 致谢

本工作由[[欧盟]]（[[地平线2020计划|地平线 2020 计划]]，项目 WORLD：[[H2020-MSCA-RISE-2019-WORLD-GA-873005]]）和[[西班牙国家研究署]]（项目 [[NADESforPFAS]]：[[PID2022-142405OB-I00]]）资助。作者 [[Alberto Gutiérrez|Alberto Guti´errez]] 获得由[[西班牙大学部]]资助的 BG22/00089 基金。我们同时感谢 [[SCAYLE]]（[[卡斯蒂利亚-莱昂超级计算中心|西班牙卡斯蒂利亚-莱昂超级计算中心]]）提供[[超级计算]]设施。本文中的陈述仅由作者承担责任。

## 附录 A. 补充数据

本文的补充数据可在线获取于 https://doi. org/10.1016/j.rechem.2026.103473.

## [[数据可用性]]

数据可应要求提供。

## References

[1] U.S. Environmental Protection Agency, Drinking water contaminant candidate list 5 – final, Fed. Reg. 87 (2022) 68060–68087. https://www.federalregister.gov/do cuments/2022/11/14/2022-23963/drinking-water-contaminant-candidate-lis t-5-final.

[2] J. Han, L. Kiss, H. Mei, A.M. Remete, M. Ponikvar-Svet, D.M. Sedgwick, R. Roman, S. Fustero, H. Moriwaki, V.A. Soloshonok, Chemical aspects of human and environmental overload with fluorine, Chem. Rev. 121 (2021) 4678–4742, https:// doi.org/10.1021/acs.chemrev.0c01263.

[3] J. Glüge, M. Scheringer, I.T. Cousins, J.C. DeWitt, G. Goldenman, D. Herzke, R. Lohmann, C.A. Ng, X. Trier, Z. Wang, An overview of the uses of per- and polyfluoroalkyl substances (PFAS), Environ. Sci.: Processes Impacts 22 (2020) 2345 2373, https://doi.org/10.1039/D0EM00291G.

[4] M. Lendewig, R. Marquez, J. Franco, R.E. Vera, K.A. Vivas, N. Forfora, R. A. Venditti, R. Gonzalez, PFAS regulations and economic impact: a review of U.S. pulp & paper and textiles industries, Chemosphere 377 (2025) 144301, https:// doi.org/10.1016/j.chemosphere.2025.144301.

[5] L.P. Wackett, Evolutionary obstacles and not C–F bond strength make PFAS persistent, Microb. Biotechnol. 17 (4) (2024) e14463, https://doi.org/10.1111/ 1751-7915.14463.

[6] N.P. Cheremisinoff, Perfluorinated Chemicals (PFCs): Contaminants of Concern 5, Scrivener Publishing, 2017, pp. 91–108, https://doi.org/10.1002/ 9781119363828.ch5.

[7] L. Fortunato, L. Al Fuhaid, S. Murgolo, C. De Ceglie, G. Mascolo, L. Falivene, J. S. Vrouwenvelder, G.J. Witkamp, A. Farinha, Removal of polyfluoroalkyl substances from water using hydrophobic natural deep eutectic solvents (NADES): a proof-of-concept study, J. Water Process Eng. 56 (2023) 104401, https://doi.org 10.1016/j.jwpe.2023.104401

[8] E.M. Sunderland, X.C. Hu, C. Dassuncao, A.K. Tokranov, C.C. Wagner, J.G. Allen, A review of the pathways of human exposure to poly- and perfluoroalkyl substances (PFASs) and present understanding of health effects, J. Expo. Sci. Environ. Epidemiol. 29 (2) (2019) 131–147, https://doi.org/10.1038/s41370-018- 0094-1.

[9] J. Hu, X. Yang, X. Song, Y. Miao, Y. Yu, W. Xiang, M. Huang, W. Wu, K. Liang, S. Zhao, H. Liu, Bioaccumulation mechanisms of perfluoroalkyl substances (PFASs) in aquatic environments: theoretical and experimental insights, J. Hazard. Mater. 480 (2024) 136283, https://doi.org/10.1016/j.jhazmat.2024.136283

[10] J. Hu, X. Yang, X. Song, K. Liang, M. Huang, S. Zhao, H. Liu, Elucidating environmental fate and toxicological mechanisms of ultrashort- and short-chain PFAS: integrating machine learning, molecular modeling, and experimental validation, J. Environ. Manag. 390 (2025) 126277, https://doi.org/10.1016/j. jenvman.2025.126277.

[11] U.S. Environmental Protection Agency, Final PFAS National Primary Drinking Water Regulation. https://www.epa.gov/sdwa/and-polyfluoroalkyl-substances -pfas, 2024.

[12] European Union, Directive (EU), 2020/2184 of the European Parliament and of the Council of 16 December 2020 on the quality of water intended for human consumption, Off. J. Eur. Union L 444 (2020) 1 62, https://www.boe.es/bus car/doc.php?id DOUE-L-2020-81947.

[13] Stockholm Convention Secretariat, All Persistent Organic Pollutants (POPs) listed in the Stockholm Convention. https://www.pops.int/TheConvention/ThePOPs/All POPs/tabid/2509/Default.aspx, 2022.

[14] N. Gaber, L. Bero, T.J. Woodruff, The devil they knew: chemical documents analysis of industry influence on PFAS science, Ann. Glob. Health 89 (1) (2023) 37, https://doi.org/10.5334/aogh.4013.

[15] S. Lenka, M. Kah, L.P. Padhye, A review of the occurrence, transformation, and removal of poly- and perfluoroalkyl substances (PFAS) in wastewater treatment plants, Sep. Purif. Technol. 199 (126072) (2021) 117187, https://doi.org 10.1016/j.watres.2021.117187

[16] Z. Zahra, M. Song, Z. Habib, S. Ikram, Advances in per- and polyfluoroalky substances (PFAS) detection and removal techniques from drinking water, their limitations, and future outlooks, Emerg. Contam. 11 (1) (2025) 100434, https:/ doi.org/10.1016/j.emcon.2024.100434.

[17] S.A. Mendes, R. Aggarwal, M. Svanstrom,¨ G. Peters, Review of water treatment technologies for PFAS from a life cycle perspective, with meta-analysis of financial costs and climate impacts, Resour. Conserv. Recycl. 223 (2025) 108524, https:// doi.org/10.1016/j.resconrec.2025.108524.

[18] M.K. Al Hassan, A. Alfarsi, M.S. Nasser, I.A. Hussein, I. Khan, Ionic liquids and NADES for removal of organic pollutants and heavy metals in wastewater: a comprehensive review, J. Mol. Liq. 391 (2023) 123163, https://doi.org/10.1016/j. molliq.2023.123163.

[19] B. Chenthamara, M. Shaibuna, R.L. Gardas, Chapter 1 – Navigating neoteric solvents: an overview for sustainable chemistry, Deep Eutectic Solvents (2025) 1–26, https://doi.org/10.1016/B978-0-443-21962-7.00003-1.

[20] Z. Usmani, M. Sharma, M. Tripathi, T. Lukk, Y. Karpichev, N. Gathergood, B. N. Singh, V.K. Thakur, M. Tabatabaei, V.K. Gupta, Biobased natural deep eutectic system as versatile solvents: structure, interaction and advanced applications, Sci. Total Environ. 881 (2023) 163002, https://doi.org/10.1016/j. scitotenv.2023.163002.

[21] D.J.G.P. Van Osch, L.F. Zubeir, A. van den Bruinhorst, M.A.A. Rocha, M.C. Kroon, Hydrophobic deep eutectic solvents as water-immiscible extractants, Green Chem. 17 (9) (2015) 4518 4521, https://doi.org/10.1039/C5GC01451D.

[22] K. Xin, F. Gallucci, M.S. Annaland, Development of natural hydrophobic deep eutectic solvents for precombustion CO₂ capture, Sustainable Chem. Eng. 10 (2022) 15284–15296, https://doi.org/10.1021/acssuschemeng.2c05090.

[23] N.P.E. Hikmawanti, D. Ramadon, I. Jantan, A. Mun’im, NADES: phytochemical extraction performance enhancer for pharmaceutical and nutraceutical product development, Plants 10 (10) (2021) 2091, https://doi.org/10.3390 plants10102091.

[24] I. Wazeer, H.F. Hizaddin, M.A. Hashim, M.K. Hadj-Kali, An overview about the extraction of heavy metals and other critical pollutants from contaminated water via hydrophobic deep eutectic solvents, J. Environ. Chem. Eng. 10 (6) (2022) 108574, https://doi.org/10.1016/j.jece.2022.108574.

[25] A. Guti´errez, A. Maletta, S. Aparicio, M. Atilhan, A theoretical study of low concentration per- and polyfluoroalkyl substances (PFAS) remediation from wastewater by novel hydrophobic deep eutectic solvents (HDES) extraction agents, J. Mol. Liq. 383 (2023) 122101, https://doi.org/10.1016/j.molliq.2023.122101.

[26] N. Alomari, A. Maletta, S. Aparicio, A. Guti´errez, M. Atilhan, Elucidating the dynamics behavior of PFASs at the water and hydrophobic low-melting mixture solvents interphase, J. Mol. Liq. 407 (2024) 125170, https://doi.org/10.1016/j. molliq.2024.125170.

[27] M.D. Hanwell, D.E. Curtis, D.C. Lonie, T. Vandermeersch, E. Zurek, G.R. Hutchison, Avogadro: an advanced semantic chemical editor, visualization, and analysis platform, J. Cheminf. 4 (1) (2012) 17. http://avogadro.openmolecules.net/.

[28] S.G. Balasubramani, G.P. Chen, S. Coriani, M. Diedenhofen, M.S. Frank, Y. J. Franzke, F. Furche, R. Grotjahn, M.E. Harding, C. Hattig,¨ A. Hellweg, B. Helmich-Paris, C. Holzer, U. Huniar, M. Kaupp, A.M. Khah, S.K. Khani, T. Müller, F. Mack, B. D. Nguyen, S.M. Parker, E. Perlt, D. Rappoport, K. Reiter, S. Roy, M. Rückert, G. Schmitz, M. Sierka, E. Tapavicza, D.P. Tew, C. van Wüllen, V.K. Voora, F. Weigend, A. Wodynski,´ J.M. Yu, Modular program suite for ab initio quantumchemical and condensed-matter simulations, J. Chem. Phys. 152 (2020) 184107, https://doi.org/10.1063/5.0004635.

[29] A.D. Becke, Density-functional exchange-energy approximation with correct asymptotic behavior, Phys. Rev. A 38 (6) (1988) 3098–3100, https://doi.org/ 10.1103/PhysRevA.38.3098.

[30] C. Lee, W. Yang, R.G. Parr, Development of the Colle–Salvetti correlation-energy formula into a functional of the electron density, Phys. Rev. B 37 (2) (1988) 785–789, https://doi.org/10.1103/PhysRevB.37.785.

[31] A.D. Becke, Density-functional thermochemistry. III. The role of exact exchange, J. Chem. Phys. 98 (7) (1993) 5648–5652, https://doi.org/10.1063/1.464913.

[32] S. Grimme, J. Antony, S. Ehrlich, H. Krieg, A consistent and accurate ab initio parametrization of density functional dispersion correction (DFT-D) for the 94 elements H–Pu, J. Chem. Phys. 132 (15) (2010) 154104, https://doi.org/10.1063 1.3382344.

[33] A. Schafer,¨ C. Huber, R. Ahlrichs, Fully optimized contracted Gaussian basis sets of triple zeta valence quality for atoms Li to Kr, J. Chem. Phys. 100 (8) (1994) 5829–5835, https://doi.org/10.1063/1.467146.

[34] R.F.W. Bader, Atoms in molecules, Acc. Chem. Res. 18 (1) (1985) 9–15, https:// doi.org/10.1021/ar00109a003.

[35] T. Lu, F. Chen, Multiwfn: a multifunctional wavefunction analyzer, J. Comput. Chem. 33 (2012) 580–592, https://doi.org/10.1002/jcc.22885.

[36] P.L.A. Popelier, Non-covalent interactions from a Quantum Chemical Topology perspective, J. Mol. Model. 28 (2022) 276, https://doi.org/10.1007/s00894-022- 05188-7.

[37] R. Alcalde, M. Atilhan, S. Aparicio, Intermolecular forces in 1-butyl-3-methylimi dazolium bis(trifluoromethylsulfonyl)imide + ethanol mixtures, J. Mol. Liq. 258 (2018) 1–9, https://doi.org/10.1016/j.molliq.2018.02.064.

[38] E.R. Johnson, S. Keinan, P. Mori-S´anchez, J. Contreras-García, A.J. Cohen, W. Yang, Revealing noncovalent interactions, J. Am. Chem. Soc. 132 (18) (2010) 6498 6506, https://doi.org/10.1021/ja100936w.

[39] W. Humphrey, A. Dalke, K. Schulten, VMD: Visual molecular dynamics, J. Mol. Graph. 14 (1) (1996) 33–38, https://doi.org/10.1016/0263-7855(96)00018-5.

[40] A. Klamt, Conductor-like screening model for real solvents: a new approach to the quantitative calculation of solvation phenomena, J. Phys. Chem. 99 (1995) 2224 2235, https://doi.org/10.1021/j100007a062.

[41] A. Klamt, F. Eckert, M. Diedenhofen, Prediction of the free energy of hydration of a challenging set of pesticide-like compounds, J. Phys. Chem. B 113 (14) (2009) 4508–4510, https://doi.org/10.1021/jp805853y.

[42] A. Klamt, COSMO-RS for aqueous solvation and interfaces, Fluid Phase Equilib. 407 (2016) 152–158, https://doi.org/10.1016/j.fluid.2015.05.027.

[43] K.G. Joback, R.C. Reid, Estimation of pure-component properties from groupcontributions, Chem. Eng. Commun. 57 (1987) 233–243, https://doi.org/10.1080 00986448708960487.

[44] V. Zoete, M.A. Cuendet, A. Grosdidier, O. Michielin, SwissParam: a fast force field generation tool for small organic molecules, J. Comput. Chem. 32 (11) (2011) 2359–2368, https://doi.org/10.1002/jcc.21816.

[45] S. Mainberger, M. Kindlein, F. Bezold, E. Elts, M. Minceva, H. Briesen, Deep eutectic solvent formation: a structural view using molecular dynamics simulations with classical force fields, Mol. Phys. 115 (2017) 1309–1321, https://doi.org/ 10.1080/00268976.2017.1288936.

[46] L. Martínez, R. Andrade, E.G. Birgin, J.M. Martínez, Packmol: a package for packing molecules into a box, J. Comput. Chem. 30 (2009) 2157–2164, https:// doi.org/10.1002/jcc.21224.

[47] W.G. Hoover, Canonical dynamics: equilibrium phase-space distributions, Phys. Rev. A 31 (3) (1985) 1695–1697, https://doi.org/10.1103/PhysRevA.31.1695.

[48] U. Essmann, L. Perera, M.L. Berkowitz, T. Darden, H. Lee, L.G. Pedersen, A smooth particle mesh Ewald method, J. Chem. Phys. 103 (19) (1995) 8577–8593, https:/ doi.org/10.1063/1.470117.

[49] M. Tuckerman, B.J. Berne, G.J. Martyna, Reversible multiple time scale molecular dynamics, J. Chem. Phys. 97 (3) (1992) 1990–2001, https://doi.org/10.1063 1.463137.

[50] A.P. Lyubartsev, A. Laaksonen, MDynaMix – a scalable portable parallel MD simulation package for arbitrary molecular mixtures, Comput. Phys. Commun. 128 (3) (2000) 565–589, https://doi.org/10.1016/S0010-4655(99)00529-9

[51] S. de-la-Huerta-Sainz, M.A. Escobedo-Monge, P.A. Marcos, J.A. Esteban-Ollo, L. Montejo-Gil, M. Conde-Rioll, M. Atilhan, A. Bol, S. Aparicio, Nature’s tool kit: designing biocompatible and affordable NADES for sustainable extraction of plant bioactives, Sustain. Chem. One World 5 (2025) 100043, https://doi.org/10.1016/j. scowo.2024.100043

[52] BIOVIA (Dassault Syst\`emes), 3DS BIOVIA software platform. https://www.3ds. com/products-services/biovia/.

[53] Y. Yu, X. Song, Y. Wang, R. Lai, Y. Nie, W. Xiang, C. Zhou, S. Zhao, H. Liu, Defect mediated permeation of deep eutectic solvents in cellulose crystals: a combined experimental and molecular dynamics study, Carbohydr. Polym. 369 (2025) 124331, https://doi.org/10.1016/j.carbpol.2025.124331.

[54] X. Song, X. Duan, W. Xiang, S. Zhao, Noncovalent interaction thresholds control translocation and cytotoxicity: a combined computational-experimental study, J. Med. Chem. 68 (2025) 15015 15025, https://doi.org/10.1021/acs. jmedchem.5c01196.