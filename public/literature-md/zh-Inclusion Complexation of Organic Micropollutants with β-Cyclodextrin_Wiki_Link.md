---
title: "zh-Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin Wiki全文"
source_markdown: "2.SCI_MD/Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin/Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin.md"
cn_markdown: "2.SCI_MD/Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin/zh-Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin.md"
type: translated_fulltext_wiki
---
<!-- PaperMDLab-NAV:START -->
> [!info] 论文四向互链（PaperMDLab 自动维护）
> [[2.SCI_MD/Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin/Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin|英文原文]] · [[2.SCI_MD/Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin/zh-Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin|中文译文]] · **中文全文双链（当前）** · [[4.SCI_AI_Summary/summary-zh-Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin|AI中文总结]]
<!-- PaperMDLab-NAV:END -->


pubs.acs.org/JPCB

Article

# [[β-环糊精]]与[[有机微污染物]]的[[包合物|包合络合]]作用

[[Máté Erdős]], [[Remco Hartkamp]], [[Thijs J. H. Vlugt]], and [[Othonas A. Moultos]]*

![](<../2.SCI_MD/Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin/images/823828e61fb0ed0b06d05ceb4b11b6e9bc0dec92cfcff630d4a05d50714b3eb5.jpg>)

Cite This: [[J. Phys. Chem. B]] 2020, 124, 1218−1228

![](<../2.SCI_MD/Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin/images/81a2d6f3a239edd493c06898b999de818d49630d5e6d8770e290484d964f0bed.jpg>)

Read Online

## ACCESS

Metrics & More

Article Recommendations

*sı Supporting Information

摘要：近年来，基于[[β-环糊精]]（βCD）的聚合物因其增强的[[吸附动力学]]、对[[有机微污染物]]（OMPs）的高去除容量和摄取速率，已被合成并进行了实验测试。尽管这些聚合物捕获各类OMPs的确切物理化学机制尚未完全阐明，但已有研究提示OMPs与βCD形成[[包合络合物]]非常重要。本研究采用成熟的[[附着-拉动-释放方法|附着−拉动−释放方法]]，在基于[[力场]]的[[分子动力学模拟]]中，考察了水溶液中OMPs与βCD的[[包合物|包合络合]]物形成。根据OMPs在地表水和地下水中的实测出现情况以及[[欧盟]]发布的指令，选取了一组具有代表性的OMPs。

![](<../2.SCI_MD/Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin/images/9ad96bea9f5c6f119a239b7d4761264c7be605d6cb9cd70d334d1092db1b4465.jpg>)  
[[有机微污染物]][[β-环糊精]]

为表征[[包合络合物]]的形成，计算了[[结合自由能]]、焓和熵，并与实验值进行了比较。结果表明，采用[[q4md-CD 力场|q4md-CD]]/[[GAFF 力场|GAFF]]/[[Bind3P 水模型|Bind3P]][[力场]]组合进行计算，所得结合自由能与本研究所涉全部[[有机微污染物|OMPs]]的实验结果具有合理的一致性。将[[结合焓]]分解为主要贡献的相互作用类型。结果表明，对于所研究的全部OMPs，[[范德华相互作用]]有利于[[包合物|包合络合]]物的形成，客体与溶剂及[[β-环糊精|βCD]]之间的[[氢键]]形成在结合机制中起着关键作用。我们的研究结果表明，[[分子动力学模拟|MD模拟]]可以充分描述βCD与OMPs的包合络合物形成，这是理解基于βCD的聚合物捕获OMPs的潜在机制的第一步。

## ■ 引言

工业、农业和生活活动会直接或间接地导致水体受到多种有害[[有机化合物]]的污染。<sup>1</sup> 数千种来源和类型各异的[[有机微污染物]]（OMPs），例如工业化学品、农药、[[药物]]、个人护理用品、人体激素、洗涤剂及其转化产物，在地表水和地下水中被普遍检出。<sup>2−8</sup> 尽管其浓度相对较低，通常在每升几皮克到几微克之间，但其中许多 OMPs 仍引发显著的环境和毒理学担忧。<sup>9,10</sup> 由于 OMPs 具有极大的物理化学多样性且浓度很低，常规的水和废水处理工艺（例如混凝、絮凝、沉淀和砂滤）去除效率较差，基本上使许多有害 OMPs 得以存留并进入城市水循环。<sup>11−15</sup> 目前已开发出若干种高效去除 OMPs 的技术，包括氧化、催化降解、膜过滤和[[吸附]]。<sup>16−21</sup> 基于吸附的技术因其简单、运行成本低以及可通过[[吸附剂]]选择实现多功能性而被认为具有前景。为此，可进行定制设计的新型多孔材料已成为水处理领域有潜力的候选材料。<sup>22,23</sup>

在各类多孔材料（例如[[沸石]]、[[二氧化硅]]和[[活性炭]]）中，[[多孔聚合物|多孔聚合物吸附剂]]表现出显著优势，例如高[[BET|比表面积]]、在水中具有长期物理化学稳定性、质量轻、机械柔性好、成本效益高、选择性良好、[[吸附动力学]]快、容量大以及易于制备和再生。<sup>24−29</sup> 多孔聚合物可用的众多分子构建单元<sup>27</sup> 使得合成结构和功能多样的各种[[吸附剂]]成为可能。

一种有前景的构建单元是 [[β-环糊精]]（βCD），它是一种廉价、无毒、来源于淀粉的天然环状低聚糖。<sup>30,31</sup> 七个共价连接的葡萄糖分子形成一个截锥形中空分子，具有极性外表面和相对非极性的内部空腔。由于这种结构，βCD 能够与众多尺寸、形状和极性合适的化合物形成稳定的[[包合物]]。<sup>32−37</sup> 近年来，已合成了具有增强[[吸附动力学]]、高 [[有机微污染物|OMPs]] 去除容量和高[[吸附]]速率的 βCD 基聚合物。<sup>38−42</sup> 这些聚合物可以通过多种机制捕获多种 OMPs，甚至在痕量浓度下也是如此，这些机制包括包合络合、[[氢键]]以及静电和[[疏水相互作用]]。<sup>42,43</sup> 由于仅根据实验测量来确定每种机制的贡献远非易事，因此聚合物捕获不同类型 OMPs（例如极性和非极性）所涉及的精确物理化学过程仍未完全阐明。<sup>43</sup> 已有研究表明，OMPs 与聚合物中 βCD 构建单元形成[[包合络合物|包合物]]是捕获 OMP 的主要机制之一。<sup>43</sup>

[[分子模拟]]技术可以提供必要的原子级分辨率，以确定各类机制对捕获 [[有机微污染物|OMPs]] 的贡献。<sup>44−46</sup> 在分子模拟中，原子与分子间相互作用的准确表示由[[力场]]和聚合物的精确结构描述提供。<sup>47,48</sup> 目前，尚无现成的力场能够描述基于 [[β-环糊精|βCD]] 的聚合物及其与水溶剂和有机组分之间的相互作用。推导这样一个力场需要大量实验结果和计算密集型的优化方案。作为理解捕获机制的第一步，也是在计算上更易实现的一步，可以利用文献中的力场模拟该聚合物的主要构筑单元 βCD 在水溶液中与离子和客体分子的相互作用。这些模拟可以通过已报道的关于不同客体分子与 βCD [[包合物|包合络合]]作用的实验研究加以验证。

最近已有计算研究报道了针对此类体系测试各种[[力场]]组合的工作。<sup>49−51</sup> [[Henriksen]] 和 [[Gilson]]<sup>49</sup> 使用四种不同的水模型和两种[[电荷推导方法]]，计算了 21 个客体分子与 [[β-环糊精|βCD]] 的[[结合自由能]]和[[结合焓]]，并与已有实验结果进行比较。研究考察了连接在线性脂肪族骨架和苯基上的三类官能团（即铵基、醇和羧酸根）分子。结果表明，主体采用 [[AM1-BCC]]/[[q4md-CD 力场]]，客体采用 AM1-BCC/[[GAFF 力场]]，水采用 [[TIP3P 水模型|TIP3P]] 模型，这一组合与实验结合自由能的偏差最小，[[均方根误差]]（RMSE）为 3.35 kJ mol<sup>−1</sup>。然而，该力场组合对结合焓的预测较差，与实验测量值相差约 2 倍。在同一研究中，使用 q4md-CD（主体）、[[RESP电荷|RESP]]/GAFF（客体）以及不同水分子力场（即 [[TIP3P水模型|TIP3P]]、[[TIP4Pew 水模型|TIP4Pew]] 和 [[SPC 水模型|SPC]]）时，计算得到的自由能和焓出现显著变化。

[[Tang]] 和 [[Chang]]<sup>50</sup> 报道了三种脂肪醇、丁酸甲酯、阿司匹林、1-萘乙醇和 2-萘乙醇与 [[β-环糊精|βCD]] 的[[结合自由能]]、[[结合焓]]和[[结合熵]]的计算。对主体（βCD）使用了两种不同的[[力场]]，即 [[GAFF 力场|GAFF]] 和 [[q4md-CD 力场|q4md-CD]]，而客体使用 [[RESP电荷|RESP]]/GAFF 力场，水使用 [[TIP3P 水模型|TIP3P]]。结果表明，计算得到的结合自由能与相应实验在合理的定量一致性范围内，[[均方根误差|RMSE]] = 1.5−1.6 kcal mol<sup>−1</sup>。基于这些结果，显而易见，没有任何可用的力场组合能够在实验测量误差范围内同时再现多种分子类型的实验结合自由能和结合焓。关于 CD 与客体分子在食品、制药和分离技术应用中的[[包合物|包合络合]]的更多讨论，可在相关文献中找到，例如客体分子：蒽、<sup>52</sup> [[异黄酮]]、<sup>53−55</sup> [[辛基糖苷]]、<sup>56</sup> [[离子液体]]、<sup>57</sup> [[查尔酮]]、<sup>58</sup> 和[[甘草酸]]。<sup>59</sup> 一些研究集中于广泛使用的[[药物]]分子（例如[[酮洛芬]]、<sup>60,61</sup> [[布洛芬]]、<sup>60,62,63</sup> [[利多卡因]]、<sup>64</sup> 和[[萘普生]]<sup>60</sup>）与 βCD 的[[包合络合物]]形成研究。据我们所知，目前还没有关于 [[有机微污染物|OMP]] 与 βCD 包合络合物形成的全面研究，尽管这一机制是 βCD 聚合物捕获能力最重要的机制之一。<sup>39,43</sup>

在本研究中，基于已测定的化合物在地表水和地下水中的出现情况<sup>6,8</sup> 以及[[欧盟]]（EU）的指令，<sup>65,66</sup> 选择了一组具有代表性的 [[有机微污染物|OMP]]。考虑了[[优先物质清单]]，即指令 2000/60/EC 和 2008/105/EC，其中包含对环境构成重大风险的物质，<sup>65</sup> 以及[[表面水观察清单|地表水观察清单]]，其中包含可能构成健康风险的物质。所选化合物列于图 1a。[[双酚A|双酚 A]]（BPA）是一种

![](<../2.SCI_MD/Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin/images/16111dd2e201c561e1f31b4900c1ced3e77f32b09bb430432be7782cbf8a1b14.jpg>)  
图 1. （a）本工作中研究的有机微污染物（OMP）和（b）不同结合取向的示意图。每个分子的主要官能团用绿色矩形标出。取向根据主要官能团的位置定义。取向 1 指分子的主要官能团靠近环糊精伯羟基的结合取向。取向 2 指分子的主要官能团靠近环糊精仲羟基的结合取向。

[[内分泌干扰物]]，在水体中频繁检出。由于 [[双酚A|BPA]] 对公共健康的潜在风险，它也出现在[[欧盟]]发布的[[优先物质清单]]上。<sup>66</sup> [[双氯芬酸]]是一种[[非甾体抗炎药]]，被欧盟观察清单列为新兴污染物。<sup>66</sup> [[4-壬基酚]]（[[对壬基酚|NP]]）是一种内分泌干扰物，在水生环境中以高浓度检出，并被列入欧盟发布的优先物质清单。<sup>66</sup> [[2,4,6-三氯苯酚]]（[[三氯苯酚|TCP]]）是一种用作农药和木材防腐剂的化合物。TCP 在水生环境中频繁检出，并被列为致癌物。<sup>67</sup> [[布洛芬]]和[[酮洛芬]]是非甾体抗炎药，由于其广泛使用，在地表水和地下水中频繁检出。<sup>6,8</sup>

本工作的目的是通过使用 [[Henriksen]] 等人建立的 [[attach-pull-release方法|attach−pull−release 方法]]进行[[分子动力学模拟]]，为 [[β-环糊精|βCD]] 与 [[有机微污染物|OMPs]] 的[[包合物|包合络合]]提供必要的物理认识。<sup>68</sup> 为表征[[包合络合物|包合物]]的形成，计算了[[结合自由能]]、[[结合焓]]以及 βCD、OMPs 与水之间的平均[[氢键]]数。结合焓进一步分解为若干贡献，即分子内、[[Lennard-Jones 参数|Lennard-Jones]] 和静电贡献。本研究中所选[[力场]]基于 Henriksen 和 [[Gilson]]<sup>49</sup> 以及 [[Yin]] 等人<sup>51</sup> 的工作，这些工作研究了 βCD 与广泛且多样的客体分子的包合络合。所有研究 OMPs 获得的结合自由能与实验结果合理一致。讨论了图 1b 所示的两种不同结合取向。结果表明，基于所得结果，可以确定不同相互作用的贡献，并解释结合强度的差异。本文其余部分结构如下。在模拟方法与计算细节部分，解释了结合自由能和焓计算的细节。在结果与讨论部分，呈现并讨论了所有 OMPs 的结合自由能、焓和熵计算结果。

![](<../2.SCI_MD/Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin/images/849b587cb17841beda7d37c7072fb1d25f88831b2fbf554e28d2919929bb5498.jpg>)  
图 2. 双酚 A、布洛芬、4-壬基酚、酮洛芬、双氯芬酸和 2,4,6-三氯苯酚（TCP）分子与 βCD 的计算结合自由能和实验测定结合自由能。红色和蓝色柱分别表示使用 q4md-CD/GAFF/TIP3P<sup>70,71,73</sup> 和 q4md-CD/GAFF/Bind3P<sup>50,70,71</sup> 力场组合计算的结合自由能。黑白图案柱表示实验数据，数据来源如下：Pellegrino Vidal 等人，<sup>88</sup> Mironov 等人，<sup>89</sup> Waters 等人，<sup>83</sup> Felton 等人，<sup>60</sup> Rozou 等人，<sup>84</sup> 和 Hanna 等人。<sup>93</sup>

## ■ 模拟方法与计算细节

所有模拟均使用 [[GROMACS|GROMACS2018.2]] 软件包进行。<sup>69</sup> [[β-环糊精|βCD]]、[[有机微污染物|OMPs]] 以及钠离子和氯离子的成键与非成键[[力场]]参数分别取自 [[q4md-CD 力场|q4md-CD]]、<sup>70</sup> [[General AMBER 力场|General AMBER]]（[[GAFF 力场|GAFF]]）<sup>71</sup> 和 [[Joung-Cheatham 力场]]。<sup>72</sup> 对于水的描述，使用了两种模型：$\mathrm { T I P } 3 \mathrm { P } ^ { 7 3 }$ 和 [[Bind3P 水模型|Bind3P]]。<sup>51</sup> [[Bind3P水模型|Bind3P]] 是 [[Yin]] 等人最近开发的一种水分子力场，他们重新拟合了 [[TIP3P 水模型|TIP3P]] 力场的 [[Lennard-Jones 参数|Lennard-Jones]] 尺寸和能量参数，以更好地匹配实验测得的[[主客体结合]]数据。<sup>51</sup> 在本研究中，使用 Bind3P 水模型是因为它专门针对重现实验[[主客体相互作用|主客体]]数据进行了拟合。同时也开展了使用 [[TIP3P水模型|TIP3P]] 水模型的模拟，因为该模型与 GAFF 一起被广泛使用。βCD、水、钠离子和氯离子的部分电荷取自原始文献。<sup>51,70,72,73</sup> 所有 OMPs 的部分电荷均在 $6 { \cdot } 3 1 \mathrm { G } ^ { \ast }$ 理论水平下，使用 [[R.E.D. III.52]] 脚本<sup>74</sup> 和 [[Gaussian09|Gaussian09 RevB.01]] 软件包<sup>75</sup> 通过[[受限静电势方法|受限静电势]]（[[RESP电荷|RESP]]）方法计算得到。包含全部力场参数的 GROMACS 参数文件提供于 Supporting Information 中。非成键相互作用在 9.0 Å 处截断，并在能量和压力计算中应用解析尾部校正。长程[[静电相互作用]]通过 [[particle-mesh Ewald 方法|particle-mesh Ewald]]（PME）方法予以考虑。<sup>76</sup> 采用随机蛙跳算法积分运动方程，时间步长为 2 fs。所有模拟遵循如下流程：首先，使用最速下降法对体系能量进行最小化。随后，进行以下平衡模拟：（i）在 50 K 温度下于 [[NVT 系综]]中运行 50 ps，（ii）在 NVT 系综中将温度从 50 K 升至 300 K，运行 1 ns，以及（iii）在 300 K 和 1 bar 下于 [[NPT 系综]]中运行 2 ns。生产运行在相同温度和压力下的 NPT 系综中进行，温度与压力分别通过 [[Langevin 恒温器]]<sup>77</sup> 和 [[Berendsen 恒压器]]<sup>78</sup> 调控。

为计算所选 [[有机微污染物|OMPs]] 与 [[β-环糊精|βCD]] 的[[结合自由能]]，采用了 [[附着-拉动-释放方法|attach−pull−release]]（APR）方法。<sup>68</sup> APR 方法的详细描述可参见 [[Henriksen]] 等人报道的研究。<sup>68</sup> OMPs 与 βCD 的[[结合焓]]通过溶剂平衡方法计算。<sup>79</sup> 结合自由能的误差使用 [[GROMACS]] 内置工具计算。<sup>69</sup> 结合焓的误差使用块平均方法计算。<sup>80</sup> APR 和溶剂平衡方法的具体实现细节见 Supporting Information。

需要注意的是，[[有机微污染物|OMP]] 的多种取向都可能对[[结合自由能]]和[[结合焓]]有贡献，见 $\beta \mathrm { C D } . ^ { 4 9 , 6 8 }$ 在实验中，这些结合取向是自然出现的，因此结合自由能和结合焓的测量并不会明确区分它们。在本研究中，对所有 OMP 计算了两种不同结合取向的综合结合自由能和结合焓。这些取向如图 1b 所示。计算综合结合自由能和结合焓的方法见 Supporting Information。在实验研究中，通常报道[[主客体复合物]]的[[结合常数]] $K _ { \mathrm { a } } ,$ 或[[解离常数]] $K _ { \mathrm { d } } = 1 / K _ { \mathrm { a } }$ 结合常数是一类特殊的[[平衡常数]]，它与溶液中复合物、游离主体和游离客体的浓度有关。<sup>81</sup> 为了比较实验与模拟结果，客体的结合自由能可由结合/解离常数按下式计算：<sup>82</sup>

![](<../2.SCI_MD/Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin/images/bac812e159648694bb8762ee26ed6b217d12bc367f2a6dc42cc2cd388ab767df.jpg>)  
图 3. 双酚 A、布洛芬、4-壬基酚、酮洛芬、双氯芬酸和 2,4,6-三氯苯酚（TCP）分子与 βCD 的计算结合焓与实验测得结合焓。红色和蓝色柱分别表示使用 q4md-CD/GAFF/TIP3P<sup>70,71,73</sup> 和 q4md-CD/GAFF/Bind $3 \mathrm { P } ^ { 5 1 , 7 0 , 7 1 }$ 力场组合计算的结合焓。黑白图案柱表示实验数据，数据来源如下：Chelli 等，<sup>90</sup> di Cagno 等，<sup>91</sup> Chadha 等，<sup>92</sup> Waters 等，<sup>83</sup> 以及 Rozou 等。<sup>84</sup>

$$
\Delta G _ {\mathrm{combined}} = R T \ln \frac {K _ {\mathrm{d}}}{C ^ {\circ}}\tag{1}
$$

其中 $\Delta G _ { \mathrm { c o m b i n e d } }$ 是不同取向的综合自由能，R 是[[通用气体常数]]，T 是温度，$C ^ { \circ }$ 是[[标准参考浓度]] $\left( C ^ { \circ ^ { \star } } = 1 \mathbf { \Lambda } \mathbf { M } \right)$

## ■ 结果与讨论

[[结合自由能]]。图 2 展示了使用 [[q4md-CD 力场|q4md-CD]]/[[GAFF 力场|GAFF]]/[[TIP3P 水模型|TIP3P]] 和 q4md-CD/GAFF/[[Bind3P 水模型|Bind3P]] [[力场]]组合得到的 [[有机微污染物|OMPs]] 与 [[β-环糊精|βCD]] 的实验测定和计算结合自由能。可以看出，特定 OMPs 的实验测定结合自由能在不同研究之间存在差异。这可能是因为各研究采用的实验条件或测量技术不同。图 2 中给出了[[酮洛芬]]与 βCD 结合自由能的三组实验结果。在 [[Waters]] 等 ${ \mathrm { a l . , } } ^ { 8 3 }$ 报道的研究中，结合自由能通过[[等温滴定量热法]]（ITC）测定。在 Felton 等<sup>60</sup> 和 Rozou 等<sup>84</sup> 的研究中，则进行了[[相溶解度测量]]。可以看到，尽管使用了相同的测量技术，Felton 等<sup>60</sup> 和 Rozou 等<sup>84</sup> 报道的结合自由能仍相差 ${ \sim } 2 . 5 \ \mathrm { k J \ m o l ^ { - 1 } }$ <sup>1</sup>。造成这一差异最可能的原因是，在 Felton 等<sup>60</sup> 的测量中未使用缓冲液来保持溶液 pH 恒定，而在 Rozou 等 $\mathrm { a l . , } ^ { 8 \frac { 1 } { 4 } }$ 的研究中使用了[[磷酸盐缓冲液]]。已有研究表明，由于离子与客体分子对空腔的竞争，所用缓冲液的类型和浓度会影响客体分子与 $\boldsymbol { \beta } \mathrm { C D } ^ { 8 5 , 8 6 }$ 及其他主体分子（例如葫芦[7]脲和八酸）的结合亲和力。<sup>87</sup> Waters 等 $\mathrm { a l . } ^ { 6 \dot { 0 } }$ 与 Rozou 等<sup>84</sup> 的测量条件相同（例如缓冲液类型和温度），但使用了不同的测量技术。因此，已报道实验研究之间的差异可归因于技术不同。为了定量比较不同客体分子与 βCD 的结合亲和力，应在相同条件下并使用相同技术进行实验。据我们所知，目前尚缺乏一项系统研究，报告所有选定 OMPs 与 βCD 的实验测定结合自由能。

Pellegrino Vidal 等人<sup>88</sup>的[[结合自由能]]测量结果如图 2 所示。可以看出，[[双酚A|BPA]] 与 [[β-环糊精|βCD]] 形成的复合物比与 [[4-壬基酚|NP]] 形成的复合物更稳定 $( \Delta G _ { \mathrm { b i n d i n g } }$ 分别等于 −27.68 和 −22.13 kJ mol<sup>−1</sup>）。我们对结合自由能的计算预测了这些分子相同的结合亲和力趋势。有趣的是，Alsbaiee 等人报道的 BPA 与基于 βCD 的聚合物的实验测得结合自由能 $^ { 3 9 } \Delta G _ { \mathrm { b i n d i n g } } =$ −27.26 kJ mol<sup>−1</sup>，与使用 [[Bind3P 水模型]]计算的 BPA 仅与 βCD 的结合自由能非常接近，$\Delta G _ { \mathrm { b i n d i n g } } = - 2 8 . 6 3 ~ \mathrm { k J ~ m o l ^ { - 1 } }$ 。此外，计算值与实验报道的 BPA 与 βCD 的结合自由能几乎相同 $( \Delta G _ { \mathrm { b i n d i n g } } = - 2 \bar { 7 } . 6 8$ kJ mol<sup>−1</sup>）。<sup>88</sup> Mironov 等人<sup>89</sup>报道了[[双氯芬酸]]和[[布洛芬]]的结合自由能，分别通过[[毛细管电泳-质谱联用|亲和毛细管电泳-质谱联用]]（CE-MS）和紫外检测（[[毛细管电泳-紫外检测|CE-UV]]）技术测定。两种实验技术都预测布洛芬比双氯芬酸具有更负的结合自由能。这表明布洛芬与 βCD 形成的包合复合物比双氯芬酸形成的更稳定。使用两种水分子[[力场]]的 [[分子动力学模拟|MD]] 计算也观察到相同趋势。Felton 等人<sup>60</sup>和 [[Waters]] 等人 $\mathrm { a l } . ^ { \frac { \mathbf { r } } { 8 3 } }$ 对[[酮洛芬]]和布洛芬的实验测量也显示在图 2 中。在这两项研究中，均发现布洛芬与 βCD 的结合自由能比酮洛芬更负，表明布洛芬比酮洛芬形成更稳定的包合复合物。我们的 MD 模拟与这些实验结果一致。这里需要特别指出的是，由于实验是在不同条件下并使用不同技术进行的，因此无法对所选的 [[有机微污染物|OMPs]] 进行计算结果与实验测得结合自由能的精确定量比较。从定性角度看，使用 [[TIP3P 水模型|TIP3P]] 和 [[Bind3P水模型|Bind3P]] 水分子力场计算的结合自由能都遵循实验趋势，也就是说，MD 模拟可以预测哪些 OMPs 与 βCD 形成更稳定的包合复合物。使用 Bind3P 水分子力场计算的所有 OMPs 的结合自由能相较于相应实验值显示出轻微高估，但仍处于合理一致范围，[[均方根误差|RMSE]] = 3.5 kJ mol<sup>−1</sup>，对应 24% 的偏差。与 [[Henriksen]] 和 [[Gilson]] 的发现一致，<sup>49</sup> 我们使用 [[TIP3P水模型|TIP3P]] 水分子力场得到的结合自由能 MD 结果明显高估实验测量值约 59%。

[[结合焓]]。所计算的 [[有机微污染物|OMP]] 与 [[β-环糊精|βCD]] 的结合焓如图 3 所示，同时给出了从文献中获得的相应实验结果。<sup>83,84,90−93</sup> 与[[结合自由能]]相比，所选化合物可获得的实验结合焓更为稀少。文献中没有可用于 [[4-壬基酚|NP]] 和 [[2,4,6-三氯苯酚|TCP]] 与 βCD 的实验测定结合焓。唯一可获得的[[酮洛芬]]和[[布洛芬]]结合焓来自 [[Waters]] 等$\mathrm { a l } . ^ { 8 3 }$的研究，他们使用$\mathrm { \stackrel { \prime } { I T C . } } ^ { 8 3 }$进行了测定。在图$^ { 3 , }$中，实验和 [[分子动力学模拟|MD]] 结果都表明，酮洛芬的结合$( \Delta H _ { \mathrm { B i n d 3 P } } ^ { \mathrm { k e t o p r o f e n } } = - \ 2 7 . 2 2 \ \mathrm { k J \ m o l ^ { - 1 } } , \ \Delta H _ { \mathrm { T I P 3 P } } ^ { \mathrm { k e t o p r o f e n } } = - \ 3 \hat { 2 } . 9 8 \ \mathrm { k }$ J $\mathrm { m o l ^ { - 1 } }$，以及$\Delta H _ { \mathrm { E x p e r i m e n t } } ^ { \mathrm { k e t o p r o f e n } } = - 1 6 . 0 0 ~ \mathrm { k J ~ \ m o l ^ { - 1 } _ { \cdot } ) }$比布洛芬的结合$( \Delta H _ { \mathrm { B i n d 3 P } } ^ { \mathrm { i b u p r o f e n } } = -$ $2 5 . 2 8 \mathrm { k J m o l ^ { - 1 } } , \Delta H _ { \mathrm { T I P 3 P } } ^ { \mathrm { i b u p r o f e n } } = - 3 0 . 1 0 \mathrm { \hat { k } J m o l ^ { - 1 } } ,$和$\Delta H _ { \mathrm { E x p e r i m e n } } ^ { \mathrm { i b u p r o f e n } }$ $= - 1 4 . 6 0 \ \mathrm { k J \ m o l ^ { - 1 } } )$放热更多。与结合自由能结果类似，所计算的结合焓遵循实验测定趋势，即$\Delta H ^ { \mathrm { B i s p h e n o l A } } ~ <$ $\Delta \dot { H } ^ { \mathrm { K e t o p r o f e n } } < \Delta H ^ { \mathrm { D i c l o f e n a c } } \approx \Delta H ^ { \mathrm { l b u p r o f e n } } < \Delta H ^ { 4 - \mathrm { N o n y l p h e n o l } } <$ $\Delta H ^ { 2 , 4 , 6 \mathrm { ~ - ~ } \mathrm { T r i c h l o r o p h e n o l } }$。从图 3 中可以看出，与使用 [[TIP3P 水模型|TIP3P]] 的模拟相比，使用 [[Bind3P 水模型|Bind3P]] 水分子[[力场]]计算的结合焓系统地更接近实验值。这一发现与 [[Yin]] 等$\mathsf { a l . } ^ { s 1 }$的研究一致，他们对 21 个 βCD−客体对使用 [[TIP3P水模型|TIP3P]] 和 [[Bind3P水模型|Bind3P]] 力场进行了结合自由能和焓计算。基于我们对实验和计算的结合自由能及焓的比较，可以得出结论：MD 模拟技术有潜力预测 OMP 与 βCD 的结合亲和力。随着改进力场的发展，该方法的定量预测能力预计将进一步提高，而改进力场也可以考虑结合热力学数据来开发。<sup>49</sup>

为了更好地理解结合机理，研究了不同相互作用的贡献。[[结合焓]]被分解为三个贡献：（1）分子内（成键、1-4 [[Lennard-Jones势|LJ]] 和 1-4 静电项），（2）[[Lennard-Jones 参数|Lennard-Jones]]，以及（3）[[静电相互作用]]。在图 4 中，展示了使用 [[Bind3P 水模型|Bind3P]] 水分子[[力场]]对所有研究的 [[有机微污染物|OMP]] 所计算焓的分解。还显示了考虑两种结合取向的计算（两种取向的表示如图 1b 所示）。从图 4 中可以看出，对于所有研究的 OMP 和两种结合取向，Lennard-Jones 和静电贡献均为负值，这意味着这些相互作用有利于[[包合物|包合物形成]]。除[[酮洛芬]]外，几乎所有 OMP 的结合都受到[[分子内相互作用]]（正能量）的阻碍。分子内贡献中的主要对抗项是 1-4 相互作用，其主要来源于结合时主体的构象变化（表 S1）。对于酮洛芬的取向 1，1-4 静电项变得有利，并导致对结合的分子内贡献为负（表 S1）。

为进一步探究不同分子内贡献的作用，作者针对[[布洛芬]]和[[酮洛芬]]的两种取向，考察了羧基氧相对 [[β-环糊精|βCD]] 主环缘与仲环缘的位置（图 5）。在图 ${ \mathrm { 5 c - f } } ,$ 中，展示了布洛芬和酮洛芬两种取向下的羧基氧与 βCD 主环缘氧或仲环缘氧质心之间的距离。在取向 1 中，酮洛芬的羧基与 βCD 主环缘的结合比布洛芬更紧密（图 5c）。羧基氧在较窄环缘处的更紧密结合，使氧代基有可能与 βCD 较宽环缘上的氧原子形成[[氢键]]（见图 5c、d）。在取向 $^ { 2 , }$ 中，与布洛芬相比，酮洛芬的羧基氧略偏向溶剂，这使氧代基更接近 βCD 较宽环缘的氧原子（图 5e、f）。酮洛芬的结合构型导致了有利的主体构型，这很可能得益于[[主客体相互作用|主客体]]分子间氢键的稳定作用。酮洛芬与 βCD 之间形成的氢键的稳定效应也在 [[Guzzo]] 等人报道的研究中有所讨论 $\cdot ^ { 6 \dot { 1 } }$ 在该研究中，他们通过[[核磁共振]]（NMR）测量和 [[分子动力学模拟|MD 模拟]]研究了酮洛芬与 βCD 的[[包合物|包合物形成]]。

![](<../2.SCI_MD/Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin/images/1976d838405cf6fde4e6faa69d9489bac122028536020e7e88640176aacfda28.jpg>)  
图 4. 双酚 $\mathbf { A } ,$ 布洛芬、4-壬基酚、酮洛芬、双氯芬酸和 2，4，6-三氯苯酚（TCP）分子与 βCD 的结合取向的计算焓分解。O1 和 O2 标签分别表示取向 1 和 $^ { 2 , }$。分子内（成键、1-4 LJ 和 1-4 库仑项）贡献以青色显示，Lennard-Jones 贡献以灰色显示，静电贡献以橙色显示。代表不同相互作用类型贡献的条形图彼此堆叠。

尽管 [[Lennard-Jones 参数|Lennard-Jones]] 和[[静电相互作用]]的贡献对所有研究的客体分子的结合都是有利的，但这两项贡献的相对大小可能不同，而与 [[有机微污染物|OMP]] 的极性或质子化状态无关。[[结合焓]]可以分解为两项，即[[主客体相互作用|主体−客体项]]和[[去溶剂化|去溶剂化项]]。主体−客体项描述主体−客体分子间相互作用，以及结合时主体和客体因构象变化而产生的焓变。去溶剂化项表示客体分子结合所带来的效应。该项包括结合时主体与水、客体与水以及水与水之间相互作用的变化。在图 $^ { 6 , }$ 中，展示了所有研究的 OMP 在取向 1 和取向 2 下分解为主客体项和去溶剂化项的焓。由于所有去溶剂化项均为正值（即[[包合物|包合络合]]受到阻碍），而所有主客体项均为负值（包合络合受到促进），图 6 中显示的是去溶剂化项的负值 $\left( - \Delta H _ { \mathrm { d e s o l v a t i o n } } \right)$，以使与主客体项的比较更具代表性。对于取向 1，[[Lennard-Jones势|LJ]] 相互作用是所有 OMP 主客体项的主要贡献，[[酮洛芬]]除外。$\mathrm { L J }$ 贡献随参与[[包合络合物|包合物]]形成的原子数而变化。通过比较两种取向的 LJ 贡献，可以看出取向 1 的 LJ 项略大。这种差异可归因于 OMP 与 [[β-环糊精|βCD]] 窄口边缘原子的更强相互作用。在图 $6 , \mathrm { i t }$ 中可以观察到，静电相互作用在酮洛芬的两种取向以及[[双氯芬酸]]和[[布洛芬]]的取向 2 的主客体项中成为主要贡献。静电相互作用在主客体项中的主要作用源于 OMP 与 βCD 之间[[氢键]]的形成，这将在下一段中讨论。

(a)  
![](<../2.SCI_MD/Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin/images/3c658838deff470de152ffd8631f03137a1bfa63f3012ef120f6d045a0955899.jpg>)  
(c)  
(b)

![](<../2.SCI_MD/Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin/images/8e513cc120237cf2f203d66d2937ce7e1ef05f665bd45fd989f53b12f630b7bc.jpg>)

![](<../2.SCI_MD/Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin/images/c97a0604289761df1d616dad7f5b394cdb3fdca17e37552180685c89b5ce29e5.jpg>)

(d)  
![](<../2.SCI_MD/Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin/images/687a28586a97811632bc18c88b38a2bfb941298b85d8b67004bd7b9969eaf4e4.jpg>)

![](<../2.SCI_MD/Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin/images/169fd155f45db30314de68a5986ccc78f69e4edbe9eccadbc642b05825320fbd.jpg>)

(f)  
![](<../2.SCI_MD/Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin/images/bfe86edfaa9622b06f1018bd4ef4f2fa614eba3c2490f5e28f6f62007b7fdc18.jpg>)  
图 5. 酮洛芬和布洛芬两种取向中羧基氧到 βCD 伯羟基或仲羟基基团质心的距离。（a, b）分别显示羧基氧到伯羟基和仲羟基基团质心距离的示意图。（c, d）分别显示取向 1 中羧基氧与伯羟基和仲羟基基团质心之间的距离。（e, f）分别显示取向 2 中羧基氧与伯羟基和仲羟基基团质心之间的距离。

在图 6 中可以观察到，[[去溶剂化|去溶剂化项]]的 [[Lennard-Jones势|LJ]] 和静电贡献与[[主客体相互作用|主客体项]]表现出相同趋势。取向 1 对去溶剂化项的 LJ 贡献大于取向 2。这意味着在取向 1 中，有更多原子参与复合物形成，并在结合时失去与水的相互作用。

[[氢键]]作用。图$^ { 7 , }$展示了溶剂−客体分子与主体−客体分子之间的氢键数目。从图7可以观察到，客体在结合[[β-环糊精|βCD]]时会失去与溶剂之间的氢键。例如，[[布洛芬]]（取向2）在结合βCD时失去约2个与溶剂之间的氢键。客体分子结合后，主体也会失去与溶剂之间的相互作用。游离主体与溶剂形成约33个氢键。主体与[[有机微污染物|OMP]]形成[[包合物]]时，可能会失去其中部分氢键。例如，βCD在与[[酮洛芬]]以取向1结合时，大约失去其中3个氢键。所有氢键数据列于支持信息中的表S3。这些氢键的失去在决定[[去溶剂化|去溶剂化项]]中静电贡献的大小方面起主导作用。主体、客体与溶剂之间失去的氢键越多，去溶剂化项中的静电贡献越大。OMP结合时氢键数目的净变化列于支持信息中的表S3。从图7可以看出，[[双酚A|BPA]]、[[4-壬基酚|NP]]和[[2,4,6-三氯苯酚|TCP]]分子实际上几乎不与βCD形成氢键（柱状图的橙色部分）。氢键的缺失导致对[[主客体相互作用|主体−客体项]]和去溶剂化项的静电贡献显著降低，如前所述，并可在图6中明确看到。布洛芬和[[双氯芬酸]]在取向1中形成的氢键少于取向2。在取向$^ { 2 , }$中，由于OH基团更易接近且空间位阻较小，OMPs可以与βCD形成更多的氢键，这可能带来更稳定的[[包合络合物|包合物]]。由于酮洛芬分子中氧代基和羧基的位置，它们可以在两种结合取向中形成几乎相同数量的氢键。这表明主体−客体项中的主要静电贡献（见图6）是由客体与主体分子之间形成氢键引起的。

(a)  
![](<../2.SCI_MD/Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin/images/9db251cbf25fafd38869c37043af412d5b1550846e56c5be498a84b23aade585.jpg>)  
图6. 所有研究的OMPs在（a）取向1和（b）取向2中，主体−客体相互作用与去溶剂化效应对结合焓的贡献。由于主体−客体项与去溶剂化项符号相反，图中显示去溶剂化项的负值$( - \Delta H _ { \mathrm { d e s o l v a t i o n } } )$。分子内（成键、1-4 $\mathrm { L J } ,$和1-4库仑项）贡献以青色表示，Lennard-Jones贡献以灰色表示，静电贡献以橙色表示。表示不同相互作用类型贡献的柱状条彼此叠加。−DSOL和HG标签分别表示去溶剂化项和主体−客体项。

在[[Brown]]等人${ \mathrm { a l . , } } ^ { 9 4 }$报道的研究中，给出了[[布洛芬]]与全甲基化[[β-环糊精|βCD]]（[[全甲基化β-环糊精|PMβCD]]）形成[[包合物]]的实验测量结果。研究发现，在稳定[[包合络合物|包合物]]中，布洛芬的异丁基位于空腔内部。羧基与较宽边缘的甲氧基形成[[氢键]]（取向2），这显然有助于包合物的稳定性。这一发现与我们的模拟结果一致，模拟显示布洛芬以取向2结合比取向1更稳定（见支持信息中的表S2）。Brown等人$\mathrm { a l . } ^ { 9 4 }$还报道了布洛芬−PMβCD包合物的详细结构性质，其中一些可与我们的模拟结果相比较。七边形半径，即O4氧原子到CD中七个O4原子质心的距离（见支持信息中的图S1a），在PMβCD中为4.99 Å，而在我们的模拟中平均为$4 . 9 3 \pm 0 . { \overset { . } { 3 } }$ Å。这表明在计算不确定度范围内，实验和模拟中CD的空腔尺寸相等。糖苷氧角，即CD残基O4氧原子之间的夹角（见支持信息中的图S1b），

![](<../2.SCI_MD/Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin/images/425dca4557b6356f0c6261df40dd58d0afb97a4f3b19c77c799a558dca3f1b22.jpg>)  
图7. 溶剂与游离客体（青色）、主体与客体（橙色）以及包合物中溶剂与客体（灰色）之间形成的平均氢键数。表示不同分子类型之间氢键数目的条形图相互堆叠。O1和O2标签分别表示取向1和取向2。

在[[全甲基化β-环糊精|PMβCD]]中为$1 2 7 . 4 ^ { \circ }$，而在我们的模拟中为$1 2 7 . 1 5 \pm$ $1 . 6 4 ^ { \circ }$。糖苷氧角的一致性表明，主体空腔的形状不受[[β-环糊精|βCD]]官能化的影响。PMβCD实验中分子内[[氢键]]的数目为七个。在我们的模拟中，βCD形成约六个分子内氢键。这些发现表明，在与[[布洛芬]]形成的[[包合物]]中，βCD和PMβCD的构型相似。

[[Braga]]等人<sup>95</sup>进行了测量，以研究1:2[[布洛芬]]−[[β-环糊精|βCD]][[包合物]]。复合物中的两个$\beta \mathrm { { C D s } }$通过较宽边缘的仲羟基之间形成[[氢键]]而连接。Braga等人$\mathrm { a l . } ^ { 9 5 }$发现，在稳定的1:2[[包合络合物|包合物]]中，布洛芬的羧基从$\beta { \mathrm { C D } }$的较小边缘伸出。在我们对1:1包合物的研究中，布洛芬的这种构型可以识别为取向1，而我们的结果表明该取向相比取向2稳定性较低。与实验的这一差异最可能归因于，在1:2复合物中，布洛芬无法与βCD的较宽边缘形成氢键。这清楚表明，βCD的二聚化对包合物的构型具有显著影响。

[[结合熵]]。结合熵可通过从[[结合焓]]中减去计算得到的[[结合自由能]]获得：$\Delta G = \Delta H - { \cal T } \Delta S .$ 。所有研究[[有机微污染物|OMPs]]及两种取向的计算结合熵如图8所示。由于涉及非常大数之间的相减，误差传递导致结合熵的误差相当大$( \breve { \sigma } = 1 . 9 \mathrm { - } 3 . 4 \mathrm { k J ~ m o l ^ { - 1 } } )$ )。从图8可以观察到，取向2的结合熵小于取向1，表明取向2在熵上更有利于结合。这一差异可能可以解释为OMPs在取向$^ { 1 , }$中的结合更紧密，从而导致[[β-环糊精|βCD]]柔性降低。OMPs更紧密的结合也体现在取向1中[[主客体相互作用|主−客体项]]的[[Lennard-Jones 参数|Lennard-Jones]]贡献比取向2更有利（即更负），如

![](<../2.SCI_MD/Inclusion Complexation of Organic Micropollutants with β-Cyclodextrin/images/9a850a54f897d64ffd1861e7ec4bb4bbbc32622f13b4440f26f104d291e08e39.jpg>)  
图8. 所有研究OMPs在取向1（红色）和取向2（蓝色）下的计算结合熵

图6所示。这是因为参与包合物形成的原子更少。

## ■ 结论

本工作通过基于[[力场]]的[[分子动力学模拟|MD模拟]]，计算了[[双酚A]]、[[布洛芬]]、[[酮洛芬]]、[[双氯芬酸]]、[[4-壬基酚]]和[[2,4,6-三氯苯酚]]与[[β-环糊精|βCD]]的[[结合自由能]]和[[结合焓]]。使用[[Bind3P 水模型|Bind3P]]水分子力场计算得到的结合自由能与已有实验结果具有合理的一致性。计算结合焓与实验测定值之间的偏差较大，这与[[Henriksen]]和[[Gilson]]的发现一致。<sup>49</sup> 计算结合焓遵循实验测量的趋势。为更好地理解结合机理，通过结合焓分解研究了分子内、范德华和[[静电相互作用]]对[[包合物|包合物形成]]的影响。结果表明，对所有研究的[[有机微污染物|OMPs]]而言，范德华和静电相互作用均有利于[[包合络合物|包合物]]形成，但两者的相对大小可能不同，与OMP的极性或质子化状态无关。为揭示不同相互作用的效应，将结合焓分解为[[主客体相互作用|主−客体项]]和[[去溶剂化|去溶剂化项]]。观察到[[范德华相互作用]]贡献的大小取决于参与复合物形成的原子数目。结果表明，客体与溶剂及βCD之间[[氢键]]的形成在结合机理中起着关键作用。我们的发现表明，使用[[attach-pull-release方法|APR方法]]<sup>68</sup>进行的MD模拟可为βCD与OMPs的包合物形成提供重要的物理见解。包合络合被认为是基于βCD的聚合物捕获OMPs的主要机制之一；因此，我们的发现可用于这些材料的设计与优化。

## ■ 相关内容

## \*sı 支持信息

支持信息可在https://pubs.acs.org/doi/10.1021/acs.jpcb.9b10122.免费获取。

关于[[结合自由能]]和[[结合焓]]计算的计算细节（PDF）

所有[[有机微污染物|OMPs]]和[[β-环糊精|βCD]]的[[GROMACS]]格式参数文件（ZIP）

表 S1-S3：所有 [[有机微污染物|OMP]] 在取向 1 和取向 2 下的焓分解，所有 OMP 在取向 1 和取向 2 下使用 [[TIP3P 水模型|TIP3P]] 和 [[Bind3P 水模型]]计算的[[结合自由能]]、焓和熵汇总，以及结合态和非结合态下主−客体、客体−溶剂和主−溶剂之间形成的[[氢键]]数目（XLS）

## ■ 作者信息

## 通讯作者

[[Othonas A. Moultos]] − [[代尔夫特理工大学]]机械、海事与材料工程学院过程与能源系工程热力学教研室，荷兰代尔夫特 2628CB；orcid.org/0000-0001-7477-9684；Email: o.moultos@tudelft.nl

## 作者

Máté Erdős − [[代尔夫特理工大学]]机械、海事与材料工程学院过程与能源系工程热力学教研室，荷兰代尔夫特 2628CB

[[Remco Hartkamp]] − [[代尔夫特理工大学]]机械、海事与材料工程学院过程与能源系工程热力学教研室，荷兰代尔夫特 2628CB；orcid.org/0000-0001-8746-8244

[[Thijs J. H. Vlugt]] − [[代尔夫特理工大学]]机械、海事与材料工程学院过程与能源系工程热力学教研室，荷兰代尔夫特 2628CB；orcid.org/0000-0003-3059-8712

完整联系信息见：https://pubs.acs.org/10.1021/acs.jpcb.9b10122

## 注释

作者声明不存在竞争性财务利益。

## ■ 致谢

作者非常感谢 Michael K. [[Gilson]]、Niel [[Henriksen]] 和 David Slochower 在 [[attach-pull-release方法|attach−pull−release 方法]]正确实现方面给予的帮助。本研究由 [[荷兰科学研究组织|NWO]] 精密科学（物理科学）资助，用于使用超级计算机设施，并获得荷兰科学研究组织（Nederlandse Organisatie voor Wetenschappelijk Onderzoek，NWO）的财政支持。T.J.H.V. 感谢 [[NWO-CW]]（化学科学）提供的 [[VICI资助|VICI]] 资助。O.A.M. 衷心感谢 [[NVIDIA]] 公司捐赠用于本研究的 Titan V GPU。

## ■ 参考文献

(1) Schwarzenbach, R. P.; Escher, B. I.; Fenner, K.; Hofstetter, T. B.; Johnson, C. A.; von Gunten, U.; Wehrli, B. The Challenge of Micropollutants in Aquatic Systems. Science 2006, 313, 1072−1077.

(2) Verliefde, A.; Cornelissen, E.; Amy, G.; Van der Bruggen, B.; van Dijk, H. Priority organic micropollutants in water sources in Flanders and the Netherlands and assessment of removal possibilities with nanofiltration. Environ. Pollut. 2007, 146, 281−289.

(3) Loos, R.; Locoro, G.; Comero, S.; Contini, S.; Schwesig, D.; Werres, F.; Balsaa, P.; Gans, O.; Weiss, S.; Blaha, L.; et al. Pan European survey on the occurrence of selected polar organic

persistent pollutants in ground water. Water Res. 2010, 44, 4115− 4126.

(4) Hut, R.; van de Giesen, N.; Houtman, C. J. Medicinal footprint of the population of the Rhine basin. Environ. Res. Lett. 2013, 8, No. 044057.

(5) Vulliet, E.; Cren-Olive, C. Screening of pharmaceuticals and́ hormones at the regional scale, in surface and groundwaters intended to human consumption. Environ. Pollut. 2011, 159, 2929−2934.

(6) Luo, Y.; Guo, W.; Ngo, H. H.; Nghiem, L. D.; Hai, F. I.; Zhang, J.; Liang, S.; Wang, X. C. A review on the occurrence of micropollutants in the aquatic environment and their fate and removal during wastewater treatment. Sci. Total Environ. 2014, 473- 474, 619−641.

(7) Yang, Y.; Ok, Y. S.; Kim, K.-H.; Kwon, E. E.; Tsang, Y. F. [[药物和个人护理产品]]（PPCPs）在饮用水及水/[[污水处理厂]]中的存在与去除：综述。Sci. Total Environ. 2017, 596-597, 303−320。

(8) Sousa, J. C. G.; Ribeiro, A. R.; Barbosa, M. O.; Pereira, M. F. R.; Silva, A. M. T. 关于[[欧盟]]指南所识别的水体[[有机污染物]][[环境监测]]的综述。[[J. Hazard. Mater.]] 2018, 344, 146−162。

(9) Macova, M.; Toze, S.; Hodgers, L.; Mueller, J. F.; Bartkow, M.; Escher, B. I. 用于评估[[污水处理]]、[[水回用]]和[[饮用水生产]]过程中[[有机微污染物]]的[[生物分析工具]]。Water Res. 2011, 45, 4238−4247。

(10) Stamm, C.; Räsänen, K.; Burdon, F.; Altermatt, F.; Jokela, J.; Joss, A.; Ackermann, M.; Eggen, R. 载于《[[大尺度生态学]]：从模型系统到全球视角》；Dumbrell, A. J., Kordas, R. L., Woodward, G., 编；[[生态学研究进展]]；[[Academic Press]], 2016；第 55 卷；第 183−223 页，DOI: 10.1016/ bs.aecr.2016.07.002。

(11) Stackelberg, P. E.; Gibs, J.; Furlong, E. T.; Meyer, M. T.; Zaugg, S. D.; Lippincott, R. L. [[常规饮用水处理工艺]]去除[[药物]]及其他[[有机化合物]]的效率。Sci. Total Environ. 2007, 377, 255−272。

(12) Loos, R.; Carvalho, R.; Antonio, D. C.; Comero, S.; Locoro, G.; Tavazzi, S.; Paracchini, B.; Ghiani, M.; Lettieri, T.; Blaha, L.; 等. [[欧盟]]范围内[[污水处理厂]]出水中[[新兴极性有机污染物]]的监测调查。Water Res. 2013, 47, 6475−6487。

(13) Margot, J.; Rossi, L.; Barry, D. A.; Holliger, C. [[污水处理厂]]中[[微污染物]]归宿的综述。[[Wiley]] Interdiscip. Rev.: Water 2015, 2, 457−487。

(14) Oulton, R. L.; Kohn, T.; Cwiertny, D. M. 出水基质中的[[药物和个人护理产品]]：[[污水处理]]过程中转化与去除的考察及其对[[污水管理]]的启示。J. Environ. Monit. 2010, 12, 1956−1978。

(15) Schwarzenbach, R. P.; Egli, T.; Hofstetter, T. B.; von Gunten, U.; Wehrli, B. [[全球水污染]]与[[人类健康]]。Annu. Rev. Environ. Resour. 2010, 35, 109−136。

(16) Crini, G.; Lichtfouse, E. [[废水处理技术]]的优缺点。Environ. Chem. Lett. 2019, 17, 145−155。

(17) Luan, M.; Jing, G.; Xu, X.; Hou, B.; Wang, Y.; Meng, D. 综述：[[工业废水]]的[[湿式氧化]]与[[催化湿式氧化]]。Recent Pat. Chem. Eng. 2013, 6, 79−86。

(18) Shannon, M. A.; Bohn, P. W.; Elimelech, M.; Georgiadis, J. G.; Mariñas, B. J.; Mayes, A. M. 未来数十年[[水净化]]科学与技术。Nature 2008, 452, 301−310。

(19) Gaya, U. I.; Abdullah, A. H. 二氧化钛上[[有机污染物]][[多相光催化降解]]：原理、进展与问题综述。J. Photochem. Photobiol., C 2008, 9, 1−12。

(20) Cath, T.; Childress, A.; Elimelech, M. [[正渗透]]：原理、应用与近期进展。J. Membr. Sci. 2006, 281, 70−87。

(21) Sun, P.; Meng, T.; Wang, Z.; Zhang, R.; Yao, H.; Yang, Y.; Zhao, L. UV/NH₂Cl 高级氧化过程中[[有机微污染物]]的降解。Environ. Sci. Technol. 2019, 53, 9024−9033。

(22) Ali, I.; Gupta, V. K. [[吸附技术]]水处理进展。Nat. Protoc. 2006, 1, 2661−2667。

(23) Chen, D.; Wang, L.; Ma, Y.; Yang, W. 基于具有[[多级孔结构]]的[[功能性聚合物颗粒]]的[[超吸附材料]]。NPG Asia Mater. 2016, 8, e301。

(24) Trewin, A.; Cooper, A. I. [[多孔有机聚合物|Porous Organic Polymers]]: Distinction from Disorder? Angew. Chem., Int. Ed. 2010, 49, 1533−1535.

(25) Thomas, A. Functional Materials: From Hard to Soft [[多孔框架|Porous Frameworks]]. Angew. Chem., Int. Ed. 2010, 49, 8328−8344.

(26) Zhang, W.; Aguila, B.; Ma, S. Retraction: Potential applications of [[功能性多孔有机聚合物材料|functional porous organic polymer materials]]. J. Mater. Chem. A 2017, 5, 18896−18896.

(27) Tan, L.; Tan, B. [[超交联多孔聚合物材料|Hypercrosslinked porous polymer materials]]: design, synthesis, and applications. Chem. Soc. Rev. 2017, 46, 3322−3356.

(28) Sawicki, R.; Mercier, L. Evaluation of [[介孔环糊精-二氧化硅纳米复合材料|Mesoporous Cyclodextrin-Silica Nanocomposites]] for the Removal of Pesticides from Aqueous Media. Environ. Sci. Technol. 2006, 40, 1978−1983.

(29) Zhao, F.; Repo, E.; [[Yin]], D.; Meng, Y.; Jafari, S.; Sillanpää, M. [[EDTA交联β-环糊精|EDTA-Cross-Linked β-Cyclodextrin]]: An Environmentally Friendly [[双功能吸附剂|Bifunctional Adsorbent]] for Simultaneous [[吸附|Adsorption]] of Metals and Cationic Dyes. Environ. Sci. Technol. 2015, 49, 10570−10580.

(30) Biwer, A.; Antranikian, G.; Heinzle, E. Enzymatic production of [[环糊精|cyclodextrins]]. Appl. Microbiol. Biotechnol. 2002, 59, 609−617.

(31) Crini, G. Review: A History of [[环糊精|Cyclodextrins]]. [[Chem. Rev.]] 2014, 114, 10940−10975.

(32) Connors, K. A. The Stability of [[环糊精包合物|Cyclodextrin Complexes]] in Solution. [[Chem. Rev.]] 1997, 97, 1325−1358.

(33) Marques, H. M. C. A review on [[环糊精包合物|cyclodextrin encapsulation]] of essential oils and volatiles. Flavour Fragrance J. 2010, 25, 313−326.

(34) Balabai, N.; Linton, B.; Napper, A.; Priyadarshy, S.; Sukharevsky, A. P.; Waldeck, D. H. Orientational Dynamics of [[β-环糊精包合物|β-Cyclodextrin Inclusion Complexes]]. [[J. Phys. Chem. B]] 1998, 102, 9617−9624.

(35) Carrazana, J.; Jover, A.; Meijide, F.; Soto, V. H.; Vazquez Tato, J. Complexation of Adamantyl Compounds by [[β-环糊精|β-Cyclodextrin]] and Monoaminoderivatives. [[J. Phys. Chem. B]] 2005, 109, 9719−9726.

(36) Hollas, M.; Chung, M.-A.; Adams, J. Complexation of [[芘|Pyrene]] by [[聚烯丙胺|Poly(allylamine)]] with Pendant [[β-环糊精|β-Cyclodextrin]] Side Groups. [[J. Phys. Chem. B]] 1998, 102, 2947−2953.

(37) Naughton, H. R.; Abelt, C. J. Local Solvent Acidities in [[β-环糊精|β-Cyclodextrin]] Complexes with [[PRODAN衍生物|PRODAN Derivatives]]. [[J. Phys. Chem. B]] 2013, 117, 3323−3327.

(38) Alzate-Sanchez, D. M.; Ling, Y.; Li, C.; Frank, B. P.; Bleher, R.; Fairbrother, D. H.; Helbling, D. E.; Dichtel, W. R. [[β-环糊精聚合物|β-Cyclodextrin Polymers]] on [[微晶纤维素|Microcrystalline Cellulose]] as a [[颗粒介质|Granular Media]] for Organic Micropollutant Removal from Water. ACS Appl. Mater. Interfaces 2019, 11, 8089−8096.

(39) Alsbaiee, A.; Smith, B. J.; Xiao, L.; Ling, Y.; Helbling, D. E.; Dichtel, W. R. Rapid removal of organic micropollutants from wate by a [[β-环糊精聚合物|porous β-cyclodextrin polymer]]. Nature 2016, 529, 190−194.

(40) Wang, J.; Wang, X.; Zhang, X. [[环状分子气凝胶|Cyclic molecule aerogels]]: a robust cyclodextrin [[整体材料|monolith]] with hierarchically porous structures for removal of micropollutants from water. J. Mater. Chem. A 2017, 5, 4308−4313.

(41) Ling, Y.; Klemes, M. J.; Xiao, L.; Alsbaiee, A.; Dichtel, W. R.; Helbling, D. E. Benchmarking Micropollutant Removal by [[活性炭|Activated Carbon]] and Porous [[β-环糊精聚合物|β-Cyclodextrin Polymers]] under Environmentally Relevant Scenarios. Environ. Sci. Technol. 2017, 51, 7590−7598.

(42) Wang, Z.; Zhang, P.; Hu, F.; Zhao, Y.; Zhu, L. A crosslinked [[β-环糊精|β cyclodextrin]] polymer used for rapid removal of a broad-spectrum of organic micropollutants from water. [[Carbohydr. Polym.]] 2017, 177, 224−231.

(43) Morin-Crini, N.; Winterton, P.; Fourmentin, S.; Wilson, L. D.; Fenyvesi, É.; Crini, G. Water-insoluble [[β-环糊精-环氧氯丙烷聚合物|β-cyclodextrin−epichlorohydrin polymers]] for removal of pollutants from aqueous solutions by

使用批量研究进行[[吸附]]过程：[[包合机理]]综述。Prog. Polym. Sci. 2018, 78, 1−23.

(44) Geitner, N. K.; Zhao, W.; Ding, F.; Chen, W.; Wiesner, M. R. [[农药-纳米颗粒相互作用]]的[[离散分子动力学模拟]]提供的机理见解。Environ. Sci. Technol. 2017, 51, 8396−8404.

(45) Lan, T.; Liao, J.; Yang, Y.; Chai, Z.; Liu, N.; Wang, D. 通过[[分子动力学模拟]]揭示的[[腐殖酸]]与[[氧化石墨烯]]在[[铀酰吸附]]中的竞争/协同作用。Environ. Sci. Technol. 2019, 53, 5102−5110.

(46) Sellner, B.; Zifferer, G.; Kornherr, A.; Krois, D.; Brinker, U. H. 水中[[β-环糊精-氮杂金刚烷复合物]]的[[分子动力学模拟]]。[[J. Phys. Chem. B]] 2008, 112, 710−714.

(47) Sun, H. [[COMPASS力场|COMPASS]]：一种针对凝聚相应用优化的从头算[[力场]]概览，并详细说明烷烃和苯化合物。[[J. Phys. Chem. B]] 1998, 102, 7338−7364.

(48) Mayo, S. L.; Olafson, B. D.; Goddard, W. A. [[DREIDING力场|DREIDING]]：一种用于[[分子模拟]]的通用[[力场]]。J. Phys. Chem. 1990, 94, 8897−8909.

(49) [[Henriksen]], N. M.; [[Gilson]], M. K. 评估[[环糊精]][[主客体结合热力学]]计算中的[[力场]]性能：水模型、部分电荷和主体力场参数。[[J. Chem. Theory Comput.]] 2017, 13, 4253−4269.

(50) [[Tang]], Z.; [[Chang]], C.-E. A. 使用化学主体和客体的结合热力学与动力学计算：[[分子识别]]的全面图景。[[J. Chem. Theory Comput.]] 2017, 14, 303−318.

(51) [[Yin]], J.; [[Henriksen]], N. M.; Muddana, H. S.; [[Gilson]], M. K. [[Bind3P 水模型|Bind3P]]：基于[[主客体结合]]数据优化水模型。[[J. Chem. Theory Comput.]] 2018, 14, 3621−3632.

(52) Zhu, X.; Wu, G.; Chen, D. [[环糊精聚集]]及从[[非水液相]]中萃取蒽的[[分子动力学模拟]]。[[J. Hazard. Mater.]] 2016, 320, 169−175.

(53) Zhang, H.; Ge, C.; van der Spoel, D.; Feng, W.; Tan, T. 醇类共溶剂和客体分子引起的[[β-环糊精]]结构变形的深入认识。[[J. Phys. Chem. B]] 2012, 116, 3880−3889.

(54) Zhang, H.; Tan, T.; Hetenyi, C.; Lv, Y.; van der Spoel, D. 通过[[自由能计算]]阐明的[[环糊精]]二聚体与[[异黄酮]]类似物的协同结合。J. Phys. Chem. C 2014, 118, 7163−7173.

(55) Zhang, H.; Tan, T.; Hetenyi, C.; van der Spoel, D. 溶剂对非共价复合物稳定性贡献的量化。[[J. Chem. Theory Comput.]] 2013, 9, 4542−4551.

(56) Piñeiro, Á.; Banquy, X.; Perez-Casas, S.; Tovar, E.; García, A.; Villa, A.; Amigo, A.; Mark, A. E.; Costas, M. 关于[[主客体复合物]]的表征：[[环糊精]]与[[非离子表面活性剂]]的表面张力、量热法和[[分子动力学]]。[[J. Phys. Chem. B]] 2007, 111, 4383−4392.

(57) Semino, R.; Rodríguez, J. [[β-环糊精]]内[[离子液体]]复合的[[分子动力学]]研究。[[J. Phys. Chem. B]] 2015, 119, 4865–4872.

(58) Sancho, M. I.; Andujar, S.; Porasso, R. D.; Enriz, R. D. [[β-环糊精]]与[[查尔酮]]及[[2,4-二羟基查尔酮]][[包合物]]的理论与实验研究。[[J. Phys. Chem. B]] 2016, 120, 3000−3011.

(59) Oda, M.; Kuroda, M. [[甘草酸]]与[[环糊精]]（1:1）在水中[[包合物|包合络合]]的[[分子动力学模拟]]。J. Inclusion Phenom. Macrocyclic Chem. 2016, 85, 271−279.

(60) Felton, L. A.; Popescu, C.; [[Wiley]], C.; Esposito, E. X.; Lefevre, P.; Hopfinger, A. J. 理化性质影响[[NSAID]][[环糊精]]包合作用的实验与计算研究。AAPS PharmSciTech 2014, 15, 872−881。

(61) [[Guzzo]], T.; Mandaliti, W.; Nepravishta, R.; Aramini, A.; Bodo, E.; Daidone, I.; Allegretti, M.; Topai, A.; Paci, M. [[酮洛芬]]在[[β-环糊精]]中[[包合机理]]的构象变化：[[NMR波谱]]、[[从头计算]]、[[分子动力学模拟]]及[[光反应性]]。[[J. Phys. Chem. B]] 2016, 120, 10668−10678。

(<sub>62</sub>) <sub>S</sub>̌<sub>kvara, J.; Nezbeda, I. 外消旋</sub>́混合物：[[布洛芬]]与[[β-环糊精]]在[[甲醇]]中溶液的[[分子动力学]]研究。J. Mol. Liq. 2018, 265, 791−796。

(63) Wang, R.; Zhou, H.; Siu, S. W. I.; Gan, Y.; Wang, Y.; Ouyang, D. [[环糊精]]-[[布洛芬]]包合作用三种[[分子模拟]]方法的比较。J. Nanomater. 2015, 2015, 193049。

(64) Pinto, L. M. A.; de Jesus, M. B.; de Paula, E.; Lino, A. C. S.; Alderete, J. B.; Duarte, H. A.; Takahata, Y. [[β-环糊精]]/[[局部麻醉药]][[结构包合物]]的解析：[[差示扫描量热法]]与[[分子力学]]的理论与实验研究。J. Mol. Struct.: THEOCHEM 2004, 678, 63−66。

(65) [[European Comission]] 根据《[[环境质量标准指令]]》制定首份观察清单。可访问 http://publications.jrc.ec.europa.eu/repository/bitstream JRC95018/lbna27142enn.pdf (2019.09.22)。

(66) [[European Comission]] 欧洲议会与理事会关于[[水政策领域优先物质修订指令]]2000/60/EC和2008/105/EC的指令。可访问 https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri= CELEX:52011PC0876&from=EN (2019.09.22)。

(67) Huff, J. [[2,4,6-三氯苯酚]]的长期毒理学与致癌性。[[Chemosphere]] 2012, 89, 521−525。

(68) [[Henriksen]], N. M.; Fenley, A. T.; [[Gilson]], M. K. [[计算量热法]]：[[主客体结合热力学]]的高精度计算。[[J. Chem. Theory Comput.]] 2015, 11, 4377−4394。

(69) Abraham, M. J.; Murtola, T.; Schulz, R.; Pall, S.; Smith, J. C.;́ Hess, B.; Lindahl, E. [[GROMACS]]：通过从笔记本电脑到超级计算机的多级并行实现高性能[[分子模拟]]。[[SoftwareX]] 2015, 1-2, 19−25。

(70) Cezard, C.; Trivelli, X.; Aubry, F.; Djedaïni-Pilard, F.; ́ Dupradeau, F.-Y. 不同介质中天然及取代[[环糊精]]的[[分子动力学]]研究：1. [[电荷推导]]与[[力场]]性能。[[Phys. Chem. Chem. Phys.]] 2011, 13, 15103−15121。

(71) Wang, J.; Wolf, R. M.; Caldwell, J. W.; Kollman, P. A.; Case, D. A. [[Amber力场|通用Amber力场]]的开发与测试。[[J. Comput. Chem.]] 2004, 25, 1157−1174。

(72) Joung, I. S.; Cheatham, T. E., III 用于显式溶剂化生物[[分子模拟]]的[[碱金属与卤素单价离子参数]]的确定。[[J. Phys. Chem. B]] 2008, 112, 9020−9041。

(73) Jorgensen, W. L.; Chandrasekhar, J.; Madura, J. D.; Impey, R. W.; Klein, M. L. [[Jorgensen水模型|模拟液态水的简单势函数]]的比较。[[J. Chem. Phys.]] 1983, 79, 926−935。

(74) Dupradeau, F.-Y.; Pigache, A.; Zaffran, T.; Savineau, C.; Lelong, R.; Grivel, N.; Lelong, D.; Rosanski, W.; Cieplak, P. [[R.E.D. 工具]]：[[RESP电荷|RESP]]与[[ESP电荷]]推导及[[力场]]库构建的进展。[[Phys. Chem. Chem. Phys.]] 2010, 12, 7821−7839。

(75) Frisch, M. J.; Trucks, G. W.; Schlegel, H. B.; Scuseria, G. E.; Robb, M. A.; Cheeseman, J. R.; Montgomery, J. A., Jr.; Vreven, T.; Kudin, K. N.; Burant, J. C. et al. [[Gaussian 09]], Revision B.01. [[Gaussian Inc.|Gaussian, Inc.]]: Wallingford, CT, 2016.

(76) Darden, T.; York, D.; Pedersen, L. [[Particle mesh Ewald]]: An Nlog(N) method for Ewald sums in large systems. [[J. Chem. Phys.]] 1993, 98, 10089-10092

(77) Goga, N.; Rzepiela, A. J.; de Vries, A. H.; Marrink, S. J.; Berendsen, H. J. C. Efficient algorithms for [[Langevin dynamics|Langevin]] and [[DPD dynamics]]. [[J. Chem. Theory Comput.]] 2012, 8, 3637−3649.

(78) Berendsen, H. J. C.; Postma, J. P. M.; van Gunsteren, W. F.; DiNola, A.; Haak, J. R. [[Berendsen恒温器|Molecular dynamics with coupling to an external bath]]. [[J. Chem. Phys.]] 1984, 81, 3684−3690.

(79) Fenley, A. T.; [[Henriksen]], N. M.; Muddana, H. S.; [[Gilson]], M. K. Bridging Calorimetry and Simulation through Precise Calculations of Cucurbituril−[[结合焓|Guest Binding Enthalpies]]. [[J. Chem. Theory Comput.]] 2014, 10, 4069−4078.

(80) Flyvbjerg, H.; Petersen, H. G. Error estimates on averages of correlated data. [[J. Chem. Phys.]] 1989, 91, 461−466.

(81) Del Valle, E. M. M. [[环糊精|Cyclodextrins]] and their uses: a review. [[Process Biochem.]] 2004, 39, 1033−1046.

(82) Zhou, H.-X.; [[Gilson]], M. K. Theory of Free Energy and Entropy in [[非共价结合|Noncovalent Binding]]. [[Chem. Rev.]] 2009, 109, 4092−4107.

(83) [[Waters]], L. J.; Bedford, S.; Parkes, G. M. B.; Mitchell, J. C. Influence of [[亲脂性|lipophilicity]] on drug−cyclodextrin interactions: A calorimetric study. [[Thermochim. Acta]] 2010, 511, 102−106.

(84) Rozou, S.; Michaleas, S.; Antoniadou-Vyza, E. Study of structural features and [[热力学参数|thermodynamic parameters]], determining the chromatographic behaviour of [[药物-环糊精复合物|drug-cyclodextrin complexes]]. [[J. Chromatogr. A]] 2005, 1087, 86−94.

(85) Mochida, K.; Kagita, A.; Matsui, Y.; Date, Y. Effects of Inorganic Salts on the Dissociation of a Complex of [[β-环糊精|β-Cyclodextrin]] with an [[偶氮染料|Azo Dye]] in an Aqueous Solution. [[Bull. Chem. Soc. Jpn.]] 1973, 46, 3703−3707.

(86) Terekhova, I. V.; Chibunova, E. S.; Kumeev, R. S.; Alper, G. A. Cyclodextrin−[[苯甲酸|benzoic acid]] binding in salt solutions: Effects of biologically relevant anions. [[Carbohydr. Polym.]] 2014, 110, 472−479.

(87) Mobley, D. L.; [[Gilson]], M. K. Predicting [[结合自由能|Binding Free Energies]]: Frontiers and Benchmarks. [[Annu. Rev. Biophys.]] 2017, 46, 531−558.

(88) Vidal, R. B. P.; Ibañez, G. A.; Escandar, G. M. Spectrofluorimetric study of [[酚类内分泌干扰物|phenolic endocrine disruptors]] in cyclodextrin media. [[RSC Adv.]] 2015, 5, 20914−20923.

(89) Mironov, G. G.; Logie, J.; Okhonin, V.; Renaud, J. B.; Mayer, P. M.; Berezovski, M. V. Comparative Study of Three Methods for [[亲和力测量|Affinity Measurements]]: [[毛细管电泳|Capillary Electrophoresis]] Coupled with UV Detection and Mass Spectrometry, and [[直接进样质谱|Direct Infusion Mass Spectrometry]]. [[J. Am. Soc. Mass Spectrom.]] 2012, 23, 1232−1240.

(90) Chelli, S.; Majdoub, M.; Jouini, M.; Aeiyach, S.; Maurel, F.; Chane-Ching, K. I.; Lacaze, P.-C. Host−guest complexes of [[苯酚衍生物|phenol derivatives]] with [[β-环糊精|β-cyclodextrin]]: an experimental and theoretical investigation. [[J. Phys. Org. Chem.]] 2007, 20, 30−43.

(91) di Cagno, M.; Stein, P. C.; Skalko-Basnet, N.; Brandl, M.; Bauer-Brandl, A. Solubilization of [[布洛芬|ibuprofen]] with [[β-环糊精|β-cyclodextrin]] derivatives: Energetic and structural studies. [[J. Pharm. Biomed. Anal.]] 2011, 55, 446−451.

(92) Chadha, R.; Kashid, N.; Kumar, A.; Jain, D. V. S. Calorimetric studies of [[双氯芬酸钠|diclofenac sodium]] in aqueous solution of cyclodextrin and water-ethanol mixtures. [[J. Pharm. Pharmacol.]] 2002, 54, 481−486.

(93) Hanna, K.; de Brauer, C.; Germain, P. 水中[[β-环糊精]]、[[甲基-β-环糊精]]和[[羟丙基-β-环糊精]]对[[2,4,6-三氯苯酚]]中性与带电形态的增溶作用。[[J. Hazard. Mater.]] 2003, 100, 109−116.

(94) [[Brown]], G. R.; Caira, M. R.; Nassimbeni, L. R.; Oudtshoorn, B. [[七(2,3,6-三-O-甲基)-β-环糊精]]包合[[布洛芬]]：[[XRD|X射线衍射]]与[[热分析]]研究。[[J. Inclusion Phenom. Mol. Recognit. Chem.]] 1996, 26, 281−294.

(95) [[Braga]], S. S.; Goncalves, I. S.; Herdtweck, E.; Teixeira-Dias, J. J.̧ C. S-[[布洛芬]]在[[β-环糊精]]中的[[固态包合物]]：结构与表征。[[New J. Chem.]] 2003, 27, 597−601.