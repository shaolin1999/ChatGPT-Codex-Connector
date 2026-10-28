---
title: "zh-Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations Wiki全文"
source_markdown: "2.SCI_MD/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations.md"
cn_markdown: "2.SCI_MD/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations/zh-Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations.md"
type: translated_fulltext_wiki
---
<!-- PaperMDLab-NAV:START -->
> [!info] 论文四向互链（PaperMDLab 自动维护）
> [[2.SCI_MD/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations|英文原文]] · [[2.SCI_MD/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations/zh-Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations|中文译文]] · **中文全文双链（当前）** · [[4.SCI_AI_Summary/summary-zh-Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations|AI中文总结]]
<!-- PaperMDLab-NAV:END -->


[[ACS Publications|pubs.acs.org]]/est

文章

# [[全氟辛酸]]在[[氧化铝]]表面的降解：[[从头算分子动力学]]模拟揭示的新机制

[[Sohag Biswas]] 和 [[Bryan M. Wong]]*

![](<../2.SCI_MD/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations/images/cd6ea323653e9bbb9e5e1fd2e11ef8c72e1cf2fab4e6de4c6058187d4afdaa01.jpg>)

引用本文：[[Environmental Science & Technology|Environ. Sci. Technol.]] 2023, 57, 6695−6702

![](<../2.SCI_MD/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations/images/bd842db9641d0f7d6193d1a43cce15022191ea87e82ce98708aa824b14a55421.jpg>)

指标及更多

在线阅读

访问

文章推荐

\*sı 支持信息

摘要：[[全氟辛酸]]（PFOA）是一大类人为的、持久性的、可生物累积的污染物——[[全氟和多氟烷基物质|全氟和多氟烷基物质（PFAS）]]——的一部分，可能对人体健康有害。在本工作中，我们首次开展了[[从头算分子动力学]]（AIMD）研究，考察PFOA在$\gamma { \mathrm { - } } { \mathrm { A l } } _ { 2 } { \mathrm { O } } _ { 3 } .$的(100)和(110)表面上随温度变化的降解动力学。我们的结果表明，即使在高温下进行，PFOA在原始(100)表面上也不会发生降解。然而，在(100)表面引入[[氧空位]]后，可促进PFOA中[[C−F键]]的超快（<100 [[飞秒|fs]]）[[脱氟]]。我们还考察了(110)表面上的降解动力学，发现PFOA与$\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 } ,$表面的[[Al(III)中心]]发生强相互作用，导致${ \bar { \mathrm { C - F } } } , { \mathrm { C - C } } ,$和[[碳-氧键|C−COO键]]逐步断裂。最重要的是，在降解过程结束时，[[矿化]]的$\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$表面上形成了强[[铝-氟键|Al−F键]]，从而阻止氟进一步解离进入周围环境。总体而言，我们的AIMD模拟在量子水平细节上提供了关键的反应机制，并强调了温度效应、缺陷和[[表面晶面]]对反应性表面上PFOA降解的重要性，而这些因素此前尚未被系统探索或分析。

![](<../2.SCI_MD/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations/images/98fe7e98de1e401fcde31182caf8c16bb5834b51dd69d493e049652d9729102b.jpg>)

关键词：[[PFAS]]，[[热降解]]，[[从头算分子动力学]]，[[DFT|密度泛函理论]]，[[脱氟]]

## ■ 引言

[[全氟和多氟烷基物质|全氟和多氟烷基物质（PFAS）]]是人为制造的污染物，由强[[C−F键]]组成，具有优异的化学和热稳定性。由于其固有的稳定性，[[PFAS]]自20世纪40年代以来已被用于多个行业，包括包装材料、<sup>1</sup>炊具、<sup>2</sup>消防泡沫、<sup>3</sup>表面活性剂、<sup>4</sup>和聚合物。<sup>5</sup>由于其广泛使用，PFAS污染物现已在全球范围内的饮用水源、地表水、牲畜和农产品中被检测到。<sup>6</sup>这些持久性环境污染物尤其令人担忧，因为即使是长期暴露于低浓度水平也与不良健康效应相关。<sup>7−10</sup>由于其环境持久性以及对人类和生态的负面影响，寻找高效消除这些污染物的方法至关重要。

在过去的几年中，多种氧化/还原方法已被用于 [[PFAS]] 修复，包括[[水合电子]]、<sup>11−15</sup> [[光催化]]、<sup>16,17</sup> [[声化学氧化]]、<sup>18</sup> [[电化学反应]]、<sup>19</sup> [[等离子体过程]]、<sup>20</sup> 以及 UV/亚硫酸盐。<sup>21</sup> 最近，钙基表面已被用于在中等低温（<1000 °C）下高效降解全氟辛酸（PFOA，PFAS 的一种），这与需要温度 >1000 °C 的传统危险废物热销毁过程不同 $^ { \circ } { \mathrm { C } } . ^ { 2 2 }$ 钙表面通过[[矿化]] F 原子减少了[[全氟化碳]]（一种[[温室气体]]）的生成，因此可以作为一种有前景的策略，用于控制热处理过程中全氟化碳排放。[[Wang 等|Wang 等人]]进一步表明，[[碳酸钙]] $\left( \mathbf { C a C O } _ { 3 } \right) _ { i }$ 、[[氧化钙]]（CaO）和[[氢氧化钙]] [Ca(OH)] 可以在低于 600 °C 的温度下促进 [[全氟和多氟烷基物质|PFAS]] 的销毁。<sup>22−24</sup> 尽管在 500 °C 以上焚烧可以是一种消除 PFAS 的实用方法，但这些高温过程可能产生温室气体和腐蚀性气体，如 $\mathrm { C F } _ { 4 } , \mathrm { C } _ { 2 } \mathrm { F } _ { 4 } ,$ 和 [[氟化氢|HF]]。<sup>24</sup>

尽管钙基表面在 [[PFAS]] 销毁方面已显示出一定效用，但使用“较重”的[[金属氧化物]]材料甚至更有前景，因为这些热稳定表面上的金属原子具有更高的异质性，具有不同的配位/键合模式，可以进一步增强 [[全氟和多氟烷基物质|PFAS]] 降解。然而，由于这些高温实验固有的复杂性，对这些材料表面上 PFAS 降解机制的详细理解仍然稀缺且处于起步阶段。<sup>25,26</sup> 在这项工作中，我们提出了首个[[从头算分子动力学]]（AIMD）研究，用于研究[[全氟辛酸]]（PFOA）在 $\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ 各种表面上随温度变化的降解动力学。我们选择研究 $\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ ，因为此前我们和我们的实验合作者 $\mathrm { r a t o r s } ^ { 2 7 , 2 8 }$ 的工作表明，$\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ 具有高度的表面异质性，Al 原子表现出三配位、四配位和五配位模式（取决于晶体学平面），这可以增强反应活性。为了在预测性量子力学水平上探究 PFOA 的降解动力学，我们在较宽的温度范围内，对 $\mathsf { \gamma } _ { \gamma - \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 } }$ 的（100）和（110）表面（考虑可能的[[表面缺陷]]）进行了大规模 AIMD 计算。我们详细描述了用于模拟这些复杂过程的计算方法，随后进行了多种实时动力学分析，以解释降解过程的基本机制。最后，我们以对结果的讨论和总结作为结尾，并对未来应用提出了更多展望，这些应用可能对材料表面上这些环境污染物的[[热降解]]方法产生广泛影响。

## ■ 材料与方法

[[分子动力学]]模拟与优化。我们使用 [[CP2K]] 软件包进行了基于[[DFT|密度泛函理论]]（[[密度泛函理论|DFT]]）的[[从头算分子动力学]]（AIMD）模拟。<sup>29</sup> 在所有计算中，均采用了 [[PBE泛函|PBE]]<sup>30</sup> 交换关联泛函以及 [[Grimme D3色散校正|Grimme 的 D3 色散校正]]。<sup>31</sup> 对于 Al 使用了 [[DZVP基组|DZVP 基组]]，对于 $\mathrm { C } , \mathrm { O } ,$ H 和 F 价电子则使用了 [[TZV2P基组|TZV2P 基组]]；[[Goedecker-Teter-Hutter赝势|Goedecker、Teter 和 Hutter（GTH）赝势]]被我们用于采用类似基组，以准确模拟[[甲基膦酸二异丙酯]]（一种[[化学战剂模拟物]]）在[[氧化铝]]表面的分解。<sup>27</sup> 采用[[轨道变换方法]]使 [[SCF循环|SCF 循环]]收敛，电子梯度容差值为 $1 \times 1 0 ^ { - 5 } \mathrm { a u }$ 。氧化铝表面使用 [[Broyden-Fletcher-Goldfarb-Shanno算法|Broyden−Fletcher−Goldfarb−Shanno（BFGS）极小化算法]]进行优化，直到力收敛至 $4 . 0 \times 1 0 ^ { - 4 }$ [[Bohr]]，SCF 收敛判据为 $\mathrm { 1 \times 1 0 ^ { - 5 } }$ au。时间步长为 0.5 [[飞秒|fs]]，动能截断为 400 Ry，用于 辅助[[平面波基组]]被用于积分量子力学运动方程。所有模拟均在[[正则系综]]（NVT）中进行，并使用 [[Nose-Hoover链热浴|Nose−Hoover 链热浴]]控温。$\mathbf { s t a t } , ^ { 3 4 , 3 5 }$ 并在 25 至 1200 °C 的温度范围内进行了若干分子动力学模拟，具体见下文描述。

表面制备。在我们的研究中，我们采用了块体的[[非尖晶石模型]] $\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ 由 [[Digne]] 等人根据晶体学数据构建 $\mathrm { a l . , } ^ { 3 \bar { 6 } , 3 7 }$ 其与实验结构参数相吻合（图1a）。我们优化后的晶胞参数 $\mathrm { ~  ~ { ~ ( } } a \mathrm { ~ = ~ } 7 . 9 0 \mathrm { ~ \AA ~ } , \mathrm { ~ } b \mathrm { ~ = ~ } 7 . 9 3 \mathrm { ~ \AA ~ }$ ，以及 $c \ { \overset { \mathbf { \bar { \rho } } } { = } } \ 8 . 0 7 \ { \overset { \mathbf { \bar { \mathbf { A } } } } { \mathbf { A } } } )$ 对于块状[[氧化铝]]，(与实验晶胞参数的) 偏差小于 2%，吻合极佳 $\left( a = b = 7 . 9 6 \mathring { \mathrm { A } } \right.$ 和 $c = 7 . 8 1 \mathrm { \AA } ) . ^ { 3 8 }$ 我们的研究计算考察了（100）和（110）这两个能量最低的晶面 $\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ 科学文献中已有报道。37

[[全氟辛酸|PFOA]] 在 100 表面的降解动力学。对于我们在 (100) 表面上的 [[正则系综|NVT]] 模拟，我们使用了单个

![](<../2.SCI_MD/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations/images/5da33f39e33f43c86e79fe9b209f14617e810059878dc4b99fa46088068885eb.jpg>)

(b)  
![](<../2.SCI_MD/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations/images/0f46039bfc679199180b3ff9a100e911425543be7a0b46b6969c932ccd355843.jpg>)

(c)  
(d)  
![](<../2.SCI_MD/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations/images/33f56eefb2844ad37ef44bc51c471279789d5992388af49a10831fb0262a8ec0.jpg>)

![](<../2.SCI_MD/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations/images/56fb2291775434d109e76942b1259b4a4a8ba7731e13656c28dfae4eb36735f4.jpg>)  
图1.（a）块体结构 $\gamma { \mathrm { - } } { \mathrm { A l } } _ { 2 } { \mathrm { O } } _ { 3 } .$ (b) 优化后的几何结构 $3 \times 1 \times 2 \ ( 1 0 0 )$ ) 表面 $\gamma { \mathrm { - } } { \mathrm { A l } } _ { 2 } { \mathrm { O } } _ { 3 } .$ (c) 优化几何结构 $3 \times 1 \times 2 \left( 1 0 0 \right)$ 表面 $\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ 具有氧缺陷（以黄色球体表示）。（d）优化后的几何结构 $2 \times 2 \times 1$ (110) 表面 $\gamma { \mathrm { - } } { \mathrm { A l } } _ { 2 } { \mathrm { O } } _ { 3 } { \mathrm { . } }$

[[全氟辛酸|PFOA]] 分子与一个 $3 \times 1 \times 2$ [[超胞|超大晶胞]] $\gamma { \mathrm { - } } { \mathrm { A l } } _ { 2 } { \mathrm { O } } _ { 3 } .$ . 本研究后续分析所使用的PFOA分子及原子编号方案如图 $^ { 2 , }$ 和

![](<../2.SCI_MD/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations/images/efa3ef4df3b7c1409a72de4dcc0c3e28bc6abe7bba449474adefc596dade4d5a.jpg>)  
图 2. 本工作中使用的全氟辛酸（PFOA）分子的化学结构及原子编号方案。

$\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ (100) 表面如图 1b 所示。为启动 [[从头算分子动力学|AIMD]] 模拟，我们在[[氧化铝]]平板中心上方沿 y 方向 4−5 Å 处引入了一个 [[全氟辛酸|PFOA]] 分子。在 x 和 z 方向施加[[周期性边界条件]]，并沿 y 轴在表面顶部引入 15 Å 的[[真空层]]。在上述初始条件下，分别在 800、1000 和 $1 2 0 0 \ ^ { \circ } \mathrm { C } .$ 下进行了 [[正则系综|NVT]] 模拟。为了理解[[表面缺陷]]对 PFOA 降解动力学的影响，我们还对带有缺陷的 $\gamma \mathrm { - }$ $\mathrm { A l } _ { 2 } \mathrm { O } _ { 3 } ,$ (100) 表面进行了 AIMD 模拟，该缺陷通过移除表面一个氧原子产生，如图 1c 所示。针对该表面缺陷的 PFOA 降解 NVT 模拟分别在 25、300、700、1000 和 $1 2 0 0 ~ ^ { \circ } \mathrm { C }$ 下进行

[[全氟辛酸|PFOA]] 在 110 表面上的降解动力学。对于 (110) 表面的 [[正则系综|NVT]] 模拟，我们使用了一个 PFOA 分子和一个 $2 \times 2 \times 1$ 的 $\gamma { \mathrm { - } } { \mathrm { A l } } _ { 2 } { \mathrm { O } } _ { 3 } .$ [[超胞]]。$\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ 的 (110) 表面如图 1d 所示。为启动 [[从头算分子动力学|AIMD]] 计算，我们在[[氧化铝]]平板中心上方沿 z 方向 3−4 Å 处引入了一个 PFOA 分子。在 x 和 y 方向施加[[周期性边界条件]]，并沿 z 方向在表面顶部引入 $1 5 \textup { \AA }$ 的[[真空层]]。在上述初始条件下，分别在 25、300、700、1000 和 $1 2 0 0 ~ ^ { \circ } \mathrm { C }$ 下进行了 NVT 模拟，总时长为 5 [[皮秒|ps]]。先前的实验和理论研究已表明，表面上的[[三配位铝|三配位 Al]]

![](<../2.SCI_MD/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations/images/6575be2f1c36becc082c07180001ba4c7a7633a898cbfb41c3eee3b72df0521a.jpg>)

![](<../2.SCI_MD/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations/images/b12a376423cb1d9ef2812c633b5d75b5cd39fe26dca02a461ef793ede5e22a7c.jpg>)

![](<../2.SCI_MD/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations/images/6a4332700229f4499b8431b1943fde1e20d0094b1fdb969d2be63aab081900f4.jpg>)

![](<../2.SCI_MD/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations/images/15c68ebd5b99d446efe56bb952e174482373e17902fb7d20e74a069b19d116c4.jpg>)

图 3. 在不同温度下，带有氧空位缺陷的 $\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ (100) 表面上 PFOA 脱氟过程中各 C−F 键距离随时间的变化。各面板中的插图显示直到 600 fs（0.60 ps）的 C—F 键距离波动。图例中的标签对应图 2 所示 PFOA 分子的原子编号。  
![](<../2.SCI_MD/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations/images/6170f673b18b9f87df65e1ee440d420d20b7a0eada1a4ca06a42f2b126a5078a.jpg>)  
图 4. 代表性轨迹的时间分辨快照，说明在带有氧空位缺陷的 $\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ (100) 表面上 PFOA 中各 C−F 键的解离。面板 (a) 和 (b) 分别展示 300 和 1000 ${ } ^ { \circ } C ,$ 下的 C−F 键解离。面板 (a) 中的虚线椭圆表示 F 原子从 C7 位置（0.37 ps）迁移到 C8 位置（0.40 ps），而面板 (b) 中的虚线椭圆表示 F 原子从 C7 位置（0.28 ps）迁移到 C6 位置。

催化中发挥重要作用。<sup>36,37,39,40</sup> 例如，先前关于 ${ \mathrm { A l } } _ { 2 } { \mathrm { O } } _ { 3 }$ 表面上甲烷活化的研究表明，[[三配位铝|三配位 Al]] 为 C−H 键断裂提供了低能量路径。<sup>39,40</sup> 必须指出，[[Al(III)中心|Al(III) 中心]]仅存在于 (110) 表面，并且其 [[Lewis酸性|Lewis 酸性]]高于 $\mathrm { A l } ( \mathrm { I V } ) . {  { 3 6 } } , {  { 3 7 } }$ 相比之下，(100) 表面仅含有 [[四配位铝|Al(IV)]] 和 [[五配位铝|Al(V)]] 中心。由于这是仅有的可能组合，我们在 [[全氟辛酸|PFOA]] 降解计算中只研究了原始 (110) 表面和[[氧空位]] (100) 表面。

## ■ 结果与讨论

我们首先研究了[[全氟辛酸|PFOA]]在原始$\gamma { \mathrm { - } } { \mathrm { A l } } _ { 2 } { \mathrm { O } } _ { 3 }$(100)表面上的降解机制，温度分别为800、1000和$1 2 0 0 \ ^ { \circ } \mathrm { C } .$在所有这些温度下，我们的[[从头算分子动力学|AIMD]]计算表明，PFOA分子基本保持完整，仅失去其酸性氢原子至$\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$表面，随后[[吸附]]到暴露表面的Al原子上。支持信息中的图S1和S2通过绘制各模拟温度下各种键长和几何构型随时间的变化，提供了该过程的更多细节。我们的AIMD计算表明，即使在$1 2 0 0 \ { } ^ { \circ } \mathrm { C } ,$这一相对较高的温度下，PFOA分子也会吸附在[[氧化铝]]表面上；然而，降解并未发生，且没有任何F原子从母体分子上解离。

![](<../2.SCI_MD/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations/images/1430310531947e7e0b75083adf5b54238ba8838c5a9803f113eb985ebfe2e7bb.jpg>)

![](<../2.SCI_MD/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations/images/6a6911142dcb86845522bb4740e9e5537709860975d1544db85b841aa57d1b40.jpg>)

![](<../2.SCI_MD/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations/images/90697001364a3c3df584c84426baef67c05c0d2575c1d2a1ddb3ca88cb4aa486.jpg>)

![](<../2.SCI_MD/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations/images/ecea695e8b33afa906df1a4c32484469f803e88ad7d7a1a7eda58b65eb0d404c.jpg>)  
图5. PFOA在不同温度下于$\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$(110)表面降解过程中各种键距随时间的变化。图例中的标签对应于图2所示PFOA分子的原子编号。

然而，当在$\gamma \mathrm { - }$${ \mathrm { A l } } _ { 2 } { \mathrm { O } } _ { 3 }$(100)表面引入氧空位时，PFOA的降解动力学明显不同。图3总结了PFOA在带氧空位的$\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$(100)表面上解离动力学随时间的变化，给出了几个代表性温度的结果。随着模拟的进行，一些[[C−F键]]从约1.35 Å（[[全氟辛酸|PFOA]]的平衡[[碳-氟键|C−F键]]距）伸长至3.00 Å甚至更长，标志着完全解离。我们首先观察到C6−F9键的解离，随后是C7−F11和C8−F13键的断裂。有趣的是，在所有这些模拟中，C6−F9键的解离均在100 [[飞秒|fs]]内发生（参见图3各面板中的各个插图），表明其超快降解，随后是C7−F11和C8−F13键的解离。

为进一步考察 $\mathrm { P F O A } ,$ 的降解机理，图 4 给出了 [[全氟辛酸|PFOA]] 在[[氧化铝]]表面分解过程中若干关键时刻的快照，并选取了 300 与 $1 0 0 0 ~ ^ { \circ } \mathrm { C }$ 下若干具有代表性的轨迹（700 与 $1 2 0 0 ~ ^ { \circ } \mathrm { C }$ 下的快照见支持信息中的图 S3）。如上一节所述，在所有温度下，PFOA 的初始分解均通过 C6−F9 键的断裂发生。在 $3 0 0 ~ ^ { \circ } \mathrm { C } ,$，图 4a 展示了一条降解路径，其中 C6−F9 键在约 0.06 [[皮秒|ps]]（60 [[飞秒|fs]]）后断裂，并与氧化铝表面形成 Al−F 键。在约 0.37 ps 时，末端 C8−F11 键断裂，F11 原子被氧化铝上的表面 Al(III) 原子夺取，并形成新的 Al−F 键。与此同时，F11 原子（为清晰起见用虚线椭圆标出）开始从 C7 迁移至 C8 原子。在 0.40 ps 时，该迁移过程完成，C6 与 C7 原子之间开始形成 $\mathrm { C } { = } \mathrm { C }$ 键。最后，在 [[从头算分子动力学|AIMD]] 模拟结束时，[[C−C键|C−C 键]]形成完毕，PFOA 分子化学结合到 $\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ 表面。我们在 $1 0 0 0 \ { } ^ { \circ } \mathrm { C }$ 下也观察到 PFOA 存在类似的降解机理（图 4b）。但在该情形中，F11 原子从 C7 迁移至 C6，且 ${ \mathrm { ~ a ~ } } \mathrm { C } { = } \mathrm { C }$ 键在 C7 与 C8 原子之间形成。PFOA 在 700 与 $1 2 0 0 ^ { \circ } \mathrm { C } ,$ 下也观察到类似的降解机理，随后 F11 原子迁移至 C8 位置（见支持信息中的图 S3）。值得注意的是，在 $\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ 表面形成 Al−F 键还可减少[[二次污染]]，因为它阻止 $\mathrm { F ^ { - } }$ 进一步解离进入水中，而水中存在该物质可能产生不良健康效应。<sup>25</sup> 我们的计算表明，表面[[氧空位]]通过 [[C−F键|C−F 键]]断裂促进了 PFOA 的[[解离吸附]]。这些结果与有关水在缺氧 $\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ 表面解离的相关研究高度一致。<sup>41</sup> 氧空位使四配位 $\mathrm { { A l } ( \mathrm { { I V } ) } }$ 中心还原为[[三配位铝|三配位 Al]](III) 中心，从而增强其 [[Lewis酸性|Lewis 酸性]]，并使 Al(III) 与 F 原子之间产生更强的吸引作用，进而促进 [[碳-氟键|C−F]] 解离。未包含热效应的静态 [[DFT]] 计算发现，位于 −COOH 基团相邻 α 位的 $\mathrm { C F } _ { 2 }$ 基团因端基的[[诱导效应]]而具有更高的反应活性。<sup>13</sup> 然而，我们课题组开展的、纳入热效应的更全面的从头算[[分子动力学]]计算表明，尽管 α C−F 键在热力学上更活泼，但在[[水合电子]]存在下，所有其他 C−F 键同样具有较高的解离概率。<sup>11</sup> 我们目前的从头算分子动力学模拟（同样包含热效应）表明，[[脱氟]]主要发生在 PFOA 链的末端附近（即 $\mathrm { C } 6 ,$ C7 和 C8 位），这是因为这些 F 原子更接近 $\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ (100) 表面上的 [[Al(III)中心|Al(III) 中心]]。

![](<../2.SCI_MD/Degradation of Perfluorooctanoic Acid on Aluminum Oxide Surfaces New Mechanisms from Ab Initio Molecular Dynamics Simulations/images/f61b2f0625e8e479fa102c95b71274b57554ac0ce6037cb26068b2ae3e1d8208.jpg>)  
图 6. 代表性轨迹的时间分辨快照，展示 PFOA 在 $\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ (110) 表面上的降解过程。图 (a)、(b) 和 (c) 分别展示 300、700 和 1000 ${ } ^ { \circ } C ,$ 下的降解机理。

如前所述，我们还研究了 [[全氟辛酸|PFOA]] 在 $\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ (110) 表面上的降解，图 5 展示了不同键距随时间的变化。与含[[氧空位]]的 (100) 表面相比，PFOA 在 (110) 表面上的降解机制明显不同。在所有温度 $\geq 3 0 0 \ ^ { \circ } \mathrm { C } ,$ 下，我们都观察到 C5−F7 键的超快解离，以及 PFOA 分子中 [[C−COO键|C−COO]] 和 [[C−C键|C−C 键]]的断裂。图 5a 描述了在 $3 0 0 ~ ^ { \circ } \mathrm { C } .$ 时，PFOA 中 [[碳-氟键|C−F]] 和 [[碳-碳键|C−C]] 键的解离，以及[[氧化铝]]表面与 PFOA 之间 Al1−O2 键的形成。在该温度下，C1−C2 和 C2−C3 键同时发生解离，并在 C4 中心伴随另一次[[脱氟]]。我们还观察到 PFOA 的 O2 原子与 $\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ 表面上的一个 Al(III) 原子之间形成键。有趣的是，我们的 [[从头算分子动力学|AIMD]] 模拟显示，Al1−O2 键形成、C4−F5 脱氟以及 C−C 键解离具有相似的时间尺度，这表明 $\mathrm { C O O ^ { - } { \cdots } A l }$ 和 Al···F 相互作用活化了 C−C 和 C−F。 键。在 $7 0 0 ~ ^ { \circ } \mathrm { C }$ 基于[[γ-氧化铝|γ-Al₂O₃]]载体。 $\bar { \bf A l _ { 2 } O _ { 3 } } \left( 1 1 0 \right)$ 表面，不同的是C1−C2和C3−C4键发生解离（C7−F11键也解离并重新形成）。在1000和1200 ${ } ^ { \circ } \mathrm { C } ,$ 我们仅观察到C3–C4键的断裂以及在C2中心发生的第二次脱氟（见图5c、d）。

图6描绘了PFOA在 $\scriptstyle \gamma - \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ (110) 表面在不同温度下的情况。在 300 ${ } ^ { \circ } C ,$ 连接在 C5 中心的 F7 原子被其上的一个 Al(III) 原子夺取 $\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ (110) 表面（图6a）。在约1.75 ps时，−COOH 基团失去其酸性质子给表面氧，且 PFOA 的 C3−C4 键从其平衡键长被拉伸。在约1.95 ps时，−COO 基团中的一个氧原子与一个

[[Al(III)中心]]，这触发了C1−C2键的断裂。同时，F5原子被另一个Al(III)原子从C4中心夺取，随后C2−C3键发生断裂。在模拟结束时，表面形成了带有[[铝-氟键|Al−F键]]的表面结合态$\mathrm { C O } _ { 2 } ,$ $\mathrm { C F } _ { 2 } ,$与$\mathrm { C F } _ { 3 } \mathrm { C F } _ { 2 } \mathrm { C F } _ { 2 } \mathrm { C F } { = } \mathrm { C F } { - } \mathrm { C F } _ { 2 }$碎片。图6b展示了[[全氟辛酸|PFOA]]在$7 0 0 ^ { \circ } \mathrm { C }$（110）表面上于$\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$下降解的关键步骤。在此温度下，我们也观察到类似的降解机制；然而，与$3 0 0 ~ ^ { \circ } \mathrm { C } .$下观察到的最终产物相比略有不同。随着α位的F原子与Al(III)中心相互作用，C5−F7键在约0.05 [[皮秒|ps]]（50 [[飞秒|fs]]）内发生超快断裂。这些协同作用使得C3−C4键得以断裂。此外，Al(III)中心从C7位置夺取氟原子，导致[[脱氟]]。随着模拟继续进行，发生完全[[脱羧]]，C1−C2键在约0.70 ps时断裂。反应结束时，C7−F11键 再生，产生以下反应产物： $\mathrm { C \bar { F } _ { 3 } C F _ { 2 } C F _ { 2 } C F = C F _ { 2 } ^ { - } , \ C F _ { 2 } = C F _ { 2 } , }$ 表面结合 $\mathrm { C O } _ { 2 } ,$ 和一条 Al−F 键。在 300 和 700 ${ } ^ { \circ } \mathrm { C } ,$ PFOA 分子与 $\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ (110)表面通过Al(III)···F和 $- \mathrm { \bar { C } O O } \mathrm { \cdots A l } ( \mathrm { I I I } )$ 相互作用，这些作用削弱了 [[碳-氟键|C−F]]、[[C−COO键|C−COO]] 和 [[C−C键|C−C 键]]。这些多重相互作用可进一步增强并引发后续降解过程，包括脱羧、[[碳-碳键|C−C]] 键断裂和脱氟 25,26 图 6c 描述了在 1000 时的 PFOA 降解机制 $^ \circ \mathrm { C }$ 其中 C5–F7 键在 0.05 ps 发生超快解离，随后 C3–C4 键在 0.1 ps 解离。在 0.75 ps 时，我们观察到表面 Al(III) 原子在 α 位发生脱氟，并形成新的 Al–F 键。反应在 5 ps 完成后，−COOH 基团与 Al(III) 中心成键，生成如下降解产物： $\mathrm { C F } _ { 3 } \mathrm { C F } _ { 2 } \mathrm { C F } _ { 2 } \mathrm { C F } { = } \mathrm { C F } _ { 2 }$ 和 $\mathrm { C F } _ { 2 } { = } \mathrm { C F } { \mathrm { - } } \mathrm { C O } { \mathrm { - } } { \cdot } { \cdot } \mathrm { A l }$ . 类似的降解机制也发生在 $1 2 0 0 \ ^ { \circ } \mathrm { C } ,$ 如支持信息中的图 S4 所示。在一种 相关研究中，[[Wang 等|Wang 等人]]采用了一种 ${ \mathrm { A l } } _ { 2 } { \mathrm { O } } _ { 3 }$ 在[[过硫酸钾]]球磨剂存在下作为催化剂降解 $\mathrm { P F O A } ^ { 2 5 }$ 本研究揭示，PFOA 起初通过 COO···Al 相互作用与 Al 形成强键，继而发生脱羧反应（借助研磨剂产生的[[硫酸根自由基]]），并生成不稳定的 $\mathrm { C } _ { 7 } \mathrm { F } _ { 1 5 }$ 阴离子。 $\mathrm { \dot { C } } _ { 7 } \mathrm { F } _ { 1 5 }$ 阴离子随后形成 $\mathrm { C } _ { 7 } \mathrm { F } _ { 1 5 } \mathrm { O H }$ 基于 ${ \mathrm { A l } } _ { 2 } { \mathrm { O } } _ { 3 }$ 表面并经历 $\mathrm { C - F }$ 脱氟和裂解 $\mathrm { C - C }$ 键。我们的 [[从头算分子动力学|AIMD]] 计算还表明，PFOA 的降解发生在 ${ \mathrm { A l } } _ { 2 } { \mathrm { O } } _ { 3 }$ 通过活化 C−COO、C−F 和 C−C 键作用于表面，这印证并支持了先前的实验研究。

最后，有必要提及温度效应对[[金属氧化物]]表面 [[全氟辛酸|PFOA]] 降解动力学的重要性。特别是，我们还在 $2 5 ~ ^ { \circ } \mathrm { C }$ 下对 $\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ 的（100）和（110）表面进行了 [[从头算分子动力学|AIMD]] 计算，发现在该温度下没有 PFOA 降解的迹象（见支持信息中的图 S5−S7）。换言之，材料晶面 $( \mathrm { i . e . , }$（100）/（110）或原始/缺陷）的性质以及温度在 PFOA 的降解动力学中都起着关键作用。传统的静态 [[DFT]] 计算无法捕捉描述这些降解动力学所需的热效应；然而，这些温度效应在我们的 PFOA AIMD 计算中被自然地考虑进去。因此，我们的量子动力学模拟提供了超越传统 [[密度泛函理论|DFT]] 研究的关键机理认识，揭示了高效降解这些 PFOA 污染物所需的特定温度和晶面/缺陷。

我们广泛研究的结果对材料表面 [[PFAS]] 污染物的环境修复工作具有若干重要意义。高温热处理可以破坏主要 [[全氟和多氟烷基物质|PFAS]] 污染物，但不完全燃烧可能会产生其他不希望出现的[[二次副产物]]。这些副产物往往比母体 PFAS 化合物更具挥发性，并且仍然会对环境和人类健康产生不利影响。正如本工作所证明的，我们的预测性 [[从头算分子动力学|AIMD]] 计算可用于预测这些二次副产物，并预筛选高效修复这些污染物所需的条件。此外，我们的 AIMD 计算表明，$\mathrm { { A l } } _ { 2 } \mathrm { { O } } _ { 3 }$ 为在中等低温 $( < 7 0 0 ~ ^ { \circ } \mathrm { C } )$ 下实现 PFAS 降解提供了一条新途径，而无需火焰策略的成本和复杂性。该技术的一个特别优势是[[晶面工程]]，正如我们的计算所示，晶面工程可以通过调节不同晶面/表面上的反应性（除温度效应外）来增强 PFAS 降解。晶面工程已经在新兴催化应用中得到使用，而我们的 AIMD 计算表明，这些效应也应当被用于 PFAS 修复工作。最后，我们研究的另一项重要成果可以从 PFAS 降解固有的统计性质中获得，正如我们的 AIMD 动力学计算所展示的那样。尽管特定的 [[C−F键|C−F 键]]在热力学上可能更具反应性，但我们的 AIMD 模拟表明，[[全氟辛酸|PFOA]] 中的其他 [[碳-氟键|C−F]] 键也具有一定的解离概率。因此，更多的研究工作应侧重于最小化 PFAS 分子与反应性材料表面之间的接触距离，而不仅仅是针对最弱的 C−F 键。

## ■ 环境影响

表面，即使反应在高温下进行也是如此。然而，在（100）表面引入[[氧空位]]能够使[[C−F键]]易于[[脱氟]]并形成烯烃型 $\mathrm { C } { = } \mathrm { C }$ 沿着 [[全氟辛酸|PFOA]] 主链的键。我们的模拟还发现 PFOA 在 (110) 表面上的降解机制明显不同：在带有缺陷的 (100) 表面上只发生 [[碳-氟键|C−F]] 键的断裂；然而， ${ \mathrm { C - C } } , { \mathrm { C - F } } ,$ ，以及 $\mathrm { C } -$ COO 键全部出现在（110）表面上 $\gamma { \mathrm { - } } { \mathrm { A l } } _ { 2 } { \mathrm { O } } _ { 3 } .$ . 最重要的是，PFOA 上的氟原子在 $\mathrm { { A l } } _ { 2 } \mathrm { { O } } _ { 3 }$ 表面，这可以防止氟进一步解离到周围环境中。通过明确考虑温度效应和表面的原子级细节，我们的 [[从头算分子动力学|AIMD]] 模拟揭示了超越传统静态 [[DFT]] 计算（这些计算未纳入温度）的关键机理见解，明确了高效降解这些 PFOA 污染物所需的具体条件。展望未来，我们的 AIMD 模拟（1）强调了 缺陷的重要性以及晶体学表面对PFOA降解的选择，并（2）突出这些“超越静态[[密度泛函理论|DFT]]”的动力学技术在预筛选候选表面/晶面和温度方面的实用性，以指导[[PFAS]]及其他环境污染物的修复实验工作。

总之，我们首次提出了[[全氟辛酸|PFOA]]在$\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$上降解的实时[[从头算分子动力学]]研究，以理解[[表面晶面]]和温度的影响。我们的大规模AIMD计算表明，PFOA在原始$\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$（100）面上不发生降解

## ■ 相关内容

## \*sı 支持信息

支持信息可在https://pubs.acs.org/doi/10.1021/acs.est.3c00948.免费获取。

关于[[全氟辛酸]]（PFOA）在原始材料上[[吸附]]的更多细节 $\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ (100)表面，吸附和降解机制在 $\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ (100) 表面含[[氧空位]]缺陷，温度分别为 700 和 1200 ${ } ^ { \circ } \mathrm { C } ,$ ，全氟辛酸（PFOA）在 $\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ （110）表面 $1 2 0 0 ^ { \circ } \mathrm { C } ,$ 并对 PFOA 在 $\gamma { \mathrm { - } } \mathrm { A l } _ { 2 } \mathrm { O } _ { 3 }$ (100)和(110)表面在 $2 5 ~ ^ { \circ } \mathrm { C }$ (PDF)

## ■ 作者信息

## 通讯作者

[[Bryan M. Wong]] − [[加州大学河滨分校]]，材料科学与工程计划、化学系、物理与天文学系，河滨市，加利福尼亚州 92521，美国；orcid.org/0000-0002-3477-8043；电子邮箱：bryan.wong@ucr.edu；http://www.bmwong-group.com

## 作者

[[Sohag Biswas]] − [[加州大学河滨分校]]，材料科学与工程计划、化学系、物理与天文学系，河滨市，加利福尼亚州 92521，美国

完整联系信息可在以下网址获取： https://pubs.acs.org/10.1021/acs.est.3c00948

## 备注

作者声明不存在竞争性财务利益。

## ■ 致谢

用于[[全氟辛酸]]（PFOA）降解动力学的[[从头算分子动力学]]计算得到了[[美国国家科学基金会]]（National Science Foundation）资助号 CHE-2028365 的支持。此前关于 ${ \mathrm { A l } } _ { 2 } { \mathrm { O } } _ { 3 }$ 的从头算[[分子动力学]]模拟工作得到了国防部[[国防威胁降低局]]（Defense Threat Reduction Agency）在[[极端环境材料科学大学研究联盟]]（Materials Science in Extreme Environments University Research Alliance）项目 HDTRA1-20-2-0001 下的支持。本信息内容并不必然反映联邦政府的立场或政策，亦不应推断存在任何官方背书。

## ■ 参考文献

(1) Schaider, L. A.; Balan, S. A.; Blum, A.; Andrews, D. Q.; Strynar, M. J.; Dickinson, M. E.; Lunderberg, D. M.; Lang, J. R.; Peaslee, G. F. 美国快餐包装中的含氟化合物. [[Environmental Science & Technology Letters|Environ. Sci. Technol. Lett.]] 2017, 4, 105−111.

(2) Sajid, M.; Ilyas, M. PTFE涂层不粘炊具及其毒性问题：一个视角. Environ. Sci. Pollut. Res. 2017, 24, 23436−23440.

(3) Guelfo, J. L.; Adamson, D. T. 对全国数据集的评估以深入了解美国饮用水中[[全氟和多氟烷基物质]]（[[PFAS|PFASs]]）的来源、组成和浓度. Environ. Pollut. 2018, 236, 505−513.

(4) Crone, B. C.; Speth, T. F.; Wahman, D. G.; Smith, S. J.; Abulikemu, G.; Kleiner, E. J.; Pressman, J. G. 水源水中[[全氟和多氟烷基物质|全氟和多氟烷基物质（PFAS）]]的出现及其在饮用水中的处理. Crit. Rev. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2019, 49, 2359−2396.

(5) Verma, S.; Varma, R. S.; Nadagouda, M. N. 水中[[全氟和多氟烷基物质|全氟和多氟烷基物质（PFAS）]]的修复与[[矿化]]过程：综述. Sci. Total Environ. 2021, 794, 148987.

(6) Lenka, S. P.; Kah, M.; Padhye, L. P. 污水处理厂中多氟和全氟烷基物质（[[PFAS]]）的出现、转化与去除综述. Water Res. 2021, 199, 117187.

(7) Lau, C.; Thibodeaux, J. R.; Hanson, R. G.; Narotsky, M. G.; Rogers, J. M.; Lindstrom, A. B.; Strynar, M. J. 小鼠孕期[[全氟辛酸]]暴露的影响. Toxicol. Sci. 2006, 90, 510−518.

(8) Brown, J. B.; Conder, J. M.; Arblaster, J. A.; Higgins, C. P. 评估受[[全氟和多氟烷基物质|全氟和多氟烷基物质（PFAS）]]影响蔬菜摄入的人体健康风险：一种分层建模方法. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2020, 54, 15202−15214.

(9) Sznajder-Katarzynska,́ K.; Surma, M.; Cieslik,́ I. [[全氟烷基酸]]（PFAAs）的来源、应用、人体暴露、膳食摄入、毒性、法律规制及测定方法综述. J. Chem. 2019, 2019, 1.

(10) Beach, S. A.; Newsted, J. L.; Coady, K.; Giesy, J. P. 环境污染与毒理学评论：残留物评述续编; [[Springer]]: New York, NY, 2006; pp 133−174.

(11) Biswas, S.; Yamijala, S. S. R. K. C.; Wong, B. M. [[水合电子]]降解[[全氟和多氟烷基物质]]：第一性原理计算揭示的新机制. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2022, 56, 8167−8175.

(12) Yamijala, S. S. R. K. C.; Shinde, R.; Wong, B. M. 过量电子存在下水合[[全氟和多氟烷基物质]]（[[PFAS|PFASs]]）的实时降解动力学. Phys. Chem. Chem. Phys. 2020, 22, 6804−6808.

(13) Bentel, M. J.; Yu, Y.; Xu, L.; Li, Z.; Wong, B. M.; Men, Y.; Liu, J. [[水合电子]]对[[全氟和多氟烷基物质]]（[[PFAS|PFASs]]）的[[脱氟]]：结构依赖性及其对PFAS修复与管理的启示. [[Environmental Science & Technology|Environ. Sci. Technol.]] 2019, 53, 3718−3728.

(14) Su, Y.; Rao, U.; Khor, C. M.; Jensen, M. G.; Teesch, L. M.; Wong, B. M.; Cwiertny, D. M.; Jassby, D. 电位驱动的电子转移降低[[C−F键解离能]]并促进[[全氟辛烷磺酸|全氟辛烷磺酸（PFOS）]]的[[还原脱氟]]. [[ACS Applied Materials & Interfaces|ACS Appl. Mater. Interfaces]] 2019, 11, 33913−33922.

(15) Maza, W. A.; Breslin, V. M.; Owrutsky, J. C.; Pate, B. B.; Epshteyn, A. [[水合电子]]的[[纳秒瞬态吸收]]及直链[[全氟烷基酸]]和[[磺酸盐]]的还原. [[Environmental Science & Technology Letters|Environ. Sci. Technol. Lett.]] 2021, 8, 525−530.

(16) Xu, T.; Zhu, Y.; Duan, J.; Xia, Y.; Tong, T.; Zhang, L.; Zhao, D. 使用碳改性[[磷酸铋]]复合材料增强[[全氟辛酸]]的[[光催化降解]]：有效性、材料协同作用及碳的作用。[[Chemical Engineering Journal|Chem. Eng. J.]] 2020, 395, 124991.

(17) Duan, L.; Wang, B.; Heck, K. N.; Clark, C. A.; Wei, J.; Wang, M.; Metz, J.; Wu, G.; Tsai, A.-L.; Guo, S.; Arredondo, J.; Mohite, A. D.; Senftle, T. P.; Westerhoff, P.; Alvarez, P.; Wen, X.; Song, Y.; Wong, M. S. [[氧化钛]]提升[[氮化硼]]对[[全氟辛酸]]的[[光催化降解]]性能。[[Chemical Engineering Journal|Chem. Eng. J.]] 2022, 448, 137735.

(18) James Wood, R.; Sidnell, T.; Ross, I.; McDonough, J.; Lee, J.; Bussemaker, M. J. [[全氟辛烷磺酸|全氟辛烷磺酸（PFOS）]]的[[超声降解]]与[[声化学]]及[[声致发光]]表征的相关性。[[Ultrasonics Sonochemistry|Ultrason. Sonochem.]] 2020, 68, 105196.

(19) Sharma, S.; Shetti, N. P.; Basu, S.; Nadagouda, M. N.; Aminabhavi, T. M. 通过[[电化学修复|电化学方法]]修复[[全氟和多氟烷基物质|全氟和多氟烷基物质（PFAS）]]。[[Chemical Engineering Journal|Chem. Eng. J.]] 2022, 430, 132895.

(20) Zhang, H.; Li, P.; Zhang, A.; Sun, Z.; Liu, J.; Héroux, P.; Liu, Y. 通过在[[等离子体处理]]过程中引入[[微气泡]]增强界面反应以实现[[全氟辛酸|PFOA]]的高效分解。[[Environmental Science & Technology|Environ. Sci. Technol.]] 2021, 55, 16067−16077.

(21) Gu, Y.; Liu, T.; Zhang, Q.; Dong, W. 高光子通量UV/亚硫酸盐工艺高效分解[[全氟辛酸]]：动力学及相关毒性。[[Chemical Engineering Journal|Chem. Eng. J.]] 2017, 326, 1125−1133.

(22) Wang, F.; Lu, X.; Shih, K.; Liu, C. [[氢氧化钙]]对热条件下[[全氟辛烷磺酸]]归趋的影响。[[Journal of Hazardous Materials|J. Hazard. Mater.]] 2011, 192, 1067−1071.

(23) Wang, F.; Shih, K.; Lu, X.; Liu, C. [[石灰调理污泥]]热处理过程中[[全氟辛烷磺酸|全氟辛烷磺酸（PFOS）]]中氟的[[矿化]]行为。[[Environmental Science & Technology|Environ. Sci. Technol.]] 2013, 47, 2621−2627.

(24) Wang, F.; Lu, X.; Li, X.-y.; Shih, K. 废物热处理过程中[[钙化合物]]对全氟烷基物质[[脱氟]]的有效性及机理。[[Environmental Science & Technology|Environ. Sci. Technol.]] 2015, 49, 5672−5680.

(25) Wang, N.; Lv, H.; Zhou, Y.; Zhu, L.; Hu, Y.; Majima, T.; Tang, H. 利用[[氧化铝]]和[[过硫酸盐]]通过[[机械化学]]方法实现[[全氟辛酸]]的完全[[脱氟]]与[[矿化]]。[[Environmental Science & Technology|Environ. Sci. Technol.]] 2019, 53, 8302−8313.

(26) Yuan, Y.; Feng, L.; He, X.; Liu, X.; Xie, N.; Ai, Z.; Zhang, L.; Gong, J. 在太阳光下通过[[表面自由基]]和[[光生空穴]]的联合过程，利用In O /[[过硫酸盐]]体系高效去除[[全氟辛酸|PFOA]]。[[Journal of Hazardous Materials|J. Hazard. Mater.]] 2022, 423, 127176.

(27) Biswas, S.; Wong, B. M. [[甲基膦酸二异丙酯]]在[[氧化铝]]上的高温分解：来自[[从头算分子动力学]]的机理预测。[[Journal of Physical Chemistry C|J. Phys. Chem. C]] 2021, 125, 21922-21932

(28) Vasudevan, A.; Senyurt, E. I.; Schoenitz, M.; Dreizin, E. L. 从加热的[[金属氧化物]]表面去除[[甲基膦酸二异丙酯]]（DIMP），I. Hazard. Mater, 2023. 443. 130154.

(29) VandeVondele, J.; Hutter, J. 一种用于[[电子结构计算]]的高效[[轨道变换方法]]。[[Journal of Chemical Physics|J. Chem. Phys.]] 2003, 118, 4365−4369.

(30) Perdew, J. P.; Burke, K.; Ernzerhof, M. 简化版[[广义梯度近似]]。[[Physical Review Letters|Phys. Rev. Lett.]] 1996, 77, 3865−3868.

(31) Grimme, S. 带[[长程色散校正]]的[[半经验GGA型密度泛函]]。[[Journal of Computational Chemistry|J. Comput. Chem.]] 2006, 27, 1787−1799.

(32) Goedecker, S.; Teter, M.; Hutter, J. 可分离双空间[[高斯赝势]]。[[Physical Review B|Phys. Rev. B]] 1996, 54, 1703−1710.

(33) Hartwigsen, C.; Goedecker, S.; Hutter, J. Relativistic separable dual-space Gaussian pseudopotentials from H to Rn. [[Physical Review B|Phys. Rev. B]] 1998, 58, 3641−3662.

(34) Nosé, S. A unified formulation of the [[恒定温度分子动力学|constant temperature molecular dynamics]] methods. [[Journal of Chemical Physics|J. Chem. Phys.]] 1984, 81, 511−519.

(35) Hoover, W. G. [[正则系综|Canonical dynamics]]: equilibrium phase-space distributions. [[Physical Review A|Phys. Rev. A]] 1985, 31, 1695−1697.

(36) [[Digne]], M.; Sautet, P.; Raybaud, P.; Euzen, P.; Toulhoat, H. [[羟基|Hydroxyl groups]] on [[氧化铝|γ-alumina]] surfaces: a [[DFT]] study. [[Journal of Catalysis|J. Catal.]] 2002, 211, 1−5.

(37) [[Digne]], M.; Sautet, P.; Raybaud, P.; Euzen, P.; Toulhoat, H. Use of [[DFT]] to achieve a rational understanding of [[酸碱性|acid−basic properties]] of [[氧化铝|γ-alumina]] surfaces. [[Journal of Catalysis|J. Catal.]] 2004, 226, 54−68.

(38) Wilson, S. The [[脱水|dehydration]] of [[勃姆石|boehmite]], γ-AlOOH, to $\gamma { \mathrm { - } } { \mathrm { A l } } _ { 2 } { \mathrm { O } } _ { 3 } .$ [[Journal of Solid State Chemistry|J. Solid State Chem.]] 1979, 30, 247−255.

(39) Wischert, R.; Copéret, C.; Delbecq, F.; Sautet, P. Optimal water coverage on alumina: a key to generate [[路易斯酸碱对|Lewis acid−base pairs]] that are reactive towards the [[C-H键活化|C-H bond activation]] of [[甲烷|methane]]. [[Angewandte Chemie International Edition|Angew. Chem., Int. Ed.]] 2011, 50, 3202−3205.

(40) Joubert, J.; Salameh, A.; Krakoviack, V.; Delbecq, F.; Sautet, P.; Copéret, C.; Basset, J. M. [[异裂|Heterolytic splitting]] of H and CH on γ- alumina as a structural probe for [[缺陷位点|defect sites]]. [[Journal of Physical Chemistry B|J. Phys. Chem. B]] 2006, 110, 23944−23950.

(41) Deng, X.; Herranz, T.; Weis, C.; Bluhm, H.; Salmeron, M. [[吸附|Adsorption]] of water on ${ \mathrm { C u } } _ { 2 } { \mathrm { O } }$ and $\mathrm { { A l } } _ { 2 } \mathrm { { O } } _ { 3 }$ [[薄膜|thin films]]. [[Journal of Physical Chemistry C|J. Phys. Chem. C]] 2008, 112, 9668−9672.