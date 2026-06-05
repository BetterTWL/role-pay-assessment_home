window.JOBS_DATA = [
  {
    "job_name": "SMT",
    "raw_job_name": "SMT",
    "filename": "騏宏科技_SMT職能薪資結構表_v2_0 (1).xlsx",
    "competencies": [
      {
        "category": "[A] 9工站操作 SMT 9-Station Operations",
        "code": "A1",
        "dimension": "9工站全流程操作",
        "ability": "SMT產線9工站全流程操作熟練度（自動上板→錫膏印刷→SPI→貼片→目視→回焊→卸板→AOI→NG修補）",
        "levels": {
          "0": "完全不會",
          "1": "可操作3站以下（需指導）",
          "2": "獨立完成全9站操作、自主品檢合格",
          "3": "熟練全站並可指導他人、建立標準作業"
        },
        "importance": 5,
        "weight": "15",
        "target_level": "L1B起認知 | L2A必備(5站以上) | L2B熟練(全9站獨立操作)",
        "questions": "說明最熟悉的3個工站要點；遇品質異常如何處理？"
      },
      {
        "category": "[A] 9工站操作 SMT 9-Station Operations",
        "code": "A2",
        "dimension": "錫膏印刷操作",
        "ability": "工站2 錫膏印刷機操作（鋼板對位/印刷參數設定/錫膏回溫管控/開封時限/清洗作業）",
        "levels": {
          "0": "無",
          "1": "基礎操作需指導",
          "2": "獨立設定印刷參數+鋼板對位+品質判斷，連續10片合格率100%",
          "3": "建立印刷SOP+鋼板管理制度+拋料改善案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(錫膏管控+印刷操作) | L2B熟練(SOP+品質判斷) | L3A主導(印刷SOP建立)",
        "questions": "錫膏回溫時間如何確認？印刷後PCB超過多少分鐘須清洗重印？"
      },
      {
        "category": "[A] 9工站操作 SMT 9-Station Operations",
        "code": "A3",
        "dimension": "SPI錫膏檢測",
        "ability": "工站3 SPI錫膏厚度檢測操作（高度60-200μm/體積偏差≤±25%/偏移≤25%/NG板處理）",
        "levels": {
          "0": "無",
          "1": "了解SPI判定標準",
          "2": "獨立執行SPI判定+NG板隔離+通報",
          "3": "建立SPI管制基準+趨勢分析+改善印刷品質"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(SPI判定操作) | L2B熟練(NG板隔離處理) | L3A主導(SPI趨勢分析)",
        "questions": "SPI高度超規如何判定？NG板如何處置，何時可重新印刷？"
      },
      {
        "category": "[A] 9工站操作 SMT 9-Station Operations",
        "code": "A4",
        "dimension": "貼片機操作",
        "ability": "工站4 多功能貼片機操作（程式版本確認/料站核對/Nozzle Center/拋料監控≤0.3%/換料作業）",
        "levels": {
          "0": "無",
          "1": "基礎操作了解程式載入",
          "2": "獨立完成程式載入+料站核對+拋料監控，拋料率≤0.3%",
          "3": "建立貼片換線SOP+拋料原因分析+Nozzle保養制度"
        },
        "importance": 5,
        "weight": "15",
        "target_level": "L2A必備(程式載入+料站核對) | L2B熟練(拋料監控+換料) | L3A主導(換線SOP+拋料分析)",
        "questions": "貼片機拋料率超過0.3%時如何查原因？Nozzle Center測試何時執行？"
      },
      {
        "category": "[A] 9工站操作 SMT 9-Station Operations",
        "code": "A5",
        "dimension": "目視檢查",
        "ability": "工站5 目視檢查（貼片偏移/缺件/極性/方向判斷，連續3片不良即停線）",
        "levels": {
          "0": "無",
          "1": "了解目視檢查項目",
          "2": "獨立執行目視判斷+連續3片不良立即停線+通報",
          "3": "建立目視判定標準+指導新人+不良分類統計"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B必備(目視判定基礎) | L2A必備(獨立判斷+停線通報) | L2B主導(判定標準+指導新人)",
        "questions": "貼片偏移多少算不良？連續3片不良後第一步動作是什麼？"
      },
      {
        "category": "[A] 9工站操作 SMT 9-Station Operations",
        "code": "A6",
        "dimension": "回焊爐操作",
        "ability": "工站6 10~12溫區氮氣回焊爐操作（爐溫Profile確認/四段溫度曲線/氮氣流量管控）",
        "levels": {
          "0": "無",
          "1": "了解四段爐溫區段意義",
          "2": "獨立確認爐溫Profile+溫度曲線判讀+氮氣流量確認",
          "3": "設定爐溫Profile+異常溫度分析+有改善焊接不良案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(Profile確認+溫度曲線判讀) | L2B熟練(異常判定) | L3A主導(Profile設定+焊接改善)",
        "questions": "回焊爐四段溫度曲線各段目的？溫度偏離標準時如何處理？"
      },
      {
        "category": "[A] 9工站操作 SMT 9-Station Operations",
        "code": "A7",
        "dimension": "AOI自動光學檢測",
        "ability": "工站8 AOI自動光學檢測操作（程式載入/標準件比對/不良判定:虛焊/立碑/偏移/短路/空焊）",
        "levels": {
          "0": "無",
          "1": "了解AOI判定項目",
          "2": "獨立執行AOI操作+標準件比對+正確判定真實不良",
          "3": "建立AOI程式管理+誤判率控管≤20點+不良分類統計"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(AOI操作+標準件比對) | L2B熟練(不良判定+誤判管控) | L3A主導(程式管理+誤判改善)",
        "questions": "AOI誤判超過20點時如何處理？立碑和空焊如何在AOI影像中區分？"
      },
      {
        "category": "[A] 9工站操作 SMT 9-Station Operations",
        "code": "A8",
        "dimension": "NG修補作業",
        "ability": "工站9 NG修補站操作（烙鐵溫度控制/虛焊補焊/IC拆焊/焊點判定IPC-A-610）",
        "levels": {
          "0": "無",
          "1": "了解修補安全規範",
          "2": "獨立完成修補，連續5件合格率100%，正確填寫維修記錄表",
          "3": "建立修補SOP+IC拆焊技術+同PCBA修補達2次強制移交品保"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(基礎修補操作) | L2B熟練(連續5件合格率100%) | L3A主導(修補SOP+2次移交規則執行)",
        "questions": "同一PCBA修補幾次須強制移交品保？烙鐵溫度如何設定不同焊點？"
      },
      {
        "category": "[B] 錫膏與物料管理 Solder Paste & Material Management",
        "code": "B1",
        "dimension": "錫膏管理",
        "ability": "錫膏全生命週期管理（冷藏2~10℃/回溫≥4H/攪拌≤1min/開封時限≤24H/先進先出/廢棄記錄）",
        "levels": {
          "0": "無",
          "1": "了解錫膏管理要點",
          "2": "確實執行錫膏回溫+時限管控+FIFO+廢棄記錄，無逾期使用",
          "3": "建立錫膏管理SOP+月消耗統計+有改善錫膏浪費案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(回溫+時限管控) | L2B必備(廢棄記錄+FIFO) | L3A主導(管理SOP+月統計)",
        "questions": "錫膏開封超過多少小時不得使用？回溫不足會造成什麼焊接問題？"
      },
      {
        "category": "[B] 錫膏與物料管理 Solder Paste & Material Management",
        "code": "B2",
        "dimension": "鋼板管理",
        "ability": "鋼板（鋼網）領用/張力確認≥30N/清洗歸還/版本管理",
        "levels": {
          "0": "無",
          "1": "了解鋼板管理流程",
          "2": "正確領用/確認張力/生產後清洗歸還，記錄完整",
          "3": "建立鋼板壽命管理+張力不足處理SOP+有改善印刷品質案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(領用+清洗歸還) | L2B必備(張力確認+記錄) | L3A主導(壽命管理+版本管理)",
        "questions": "鋼板張力低於30N會影響什麼？鋼板每班清洗流程？"
      },
      {
        "category": "[B] 錫膏與物料管理 Solder Paste & Material Management",
        "code": "B3",
        "dimension": "MSD元件管理",
        "ability": "濕度敏感元件(MSD)管理（濕度等級識別/乾燥箱管控/暴露時限追蹤/烘烤處理）",
        "levels": {
          "0": "無",
          "1": "了解MSD等級概念",
          "2": "正確識別MSD等級+控管暴露時限+超時執行烘烤",
          "3": "建立MSD管控SOP+乾燥箱記錄維護+有防止MSD不良案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B必備(MSD等級識別+暴露時限) | L3A主導(MSD管控SOP建立)",
        "questions": "MSD等級如何分類？暴露時間超標時如何烘烤處理？"
      },
      {
        "category": "[B] 錫膏與物料管理 Solder Paste & Material Management",
        "code": "B4",
        "dimension": "SMT備料作業",
        "ability": "SMT備料七步驟（確認工單→BOM展開→領料核對→錫膏鋼板準備→依工站分配→缺料回報→退補料），07:30前開始",
        "levels": {
          "0": "不了解備料流程",
          "1": "了解七步驟流程",
          "2": "獨立完成七步驟+BOM核對無誤+料件正確分配至9工站",
          "3": "建立備料SOP+備料齊套率≥98%+缺料0次斷線"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(七步驟備料) | L2B必備(備料齊套率≥98%) | L3A主導(備料SOP+齊套率追蹤)",
        "questions": "備料時PCB如何確認型號版本正確？發現缺料需在幾分鐘內通報？"
      },
      {
        "category": "[C] 品質自主管理 Quality Self-Management",
        "code": "C1",
        "dimension": "首件確認管理",
        "ability": "換線/換料後首件確認（送IPQC/FAI確認/SMT生產流程記錄表FMMD0202/換線時間計算起點-終點）",
        "levels": {
          "0": "無",
          "1": "了解首件確認目的",
          "2": "獨立執行首件送IPQC+正確記錄FMMD0202+計時換線",
          "3": "建立首件確認SOP+有首件不合格處理完整案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(首件送IPQC+FMMD0202記錄) | L2B熟練(換線計時+異常處理) | L3A主導(首件SOP建立)",
        "questions": "換線時間計算起點和終點各是什麼？首件不合格如何決定是否停線？"
      },
      {
        "category": "[C] 品質自主管理 Quality Self-Management",
        "code": "C2",
        "dimension": "自主品質檢查執行",
        "ability": "每2小時自主品質確認（拋料率/SPI結果/AOI結果/目視結果），不良品隔離標示通報",
        "levels": {
          "0": "無",
          "1": "了解自主檢查項目",
          "2": "每2小時確實執行四項自主確認+不良品正確隔離+開單通報",
          "3": "建立自主檢查SOP+有改善品質異常及時攔截案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(每2H四項確認) | L2B熟練(不良隔離+通報) | L3A主導(自主檢查SOP)",
        "questions": "自主確認發現拋料率超0.3%時第一步做什麼？目視不良品如何標示？"
      },
      {
        "category": "[C] 品質自主管理 Quality Self-Management",
        "code": "C3",
        "dimension": "不良品處理(三不原則)",
        "ability": "不良品三不原則執行（不流入下工站/不混入良品/不自判），藍色待檢/紅色不合格標籤使用",
        "levels": {
          "0": "無概念",
          "1": "了解三不原則",
          "2": "每次不良品確實執行三不，標籤使用正確，等待IPQC判定",
          "3": "建立三不原則視覺化+定期稽核三不執行率+有三不防止流出案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B必備(三不原則認知) | L2A必備(確實執行+標籤正確) | L3A主導(三不執行率稽核)",
        "questions": "NG修補站同一PCBA修補達2次須移交，這屬於哪一個「不」的執行？"
      },
      {
        "category": "[C] 品質自主管理 Quality Self-Management",
        "code": "C4",
        "dimension": "SMT品質KPI追蹤",
        "ability": "SMT品質KPI計算追蹤（DPPM≤5000/SPI合格率≥99%/AOI真實不良率≤1.5%/首件合格率≥98%/印刷良品率≥99.5%）",
        "levels": {
          "0": "無",
          "1": "了解各KPI定義",
          "2": "可計算各KPI+識別警戒值觸發項目+及時通報",
          "3": "建立KPI看板+趨勢分析+有KPI改善至目標值完整案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(KPI定義+計算) | L3A必備(KPI追蹤+警戒識別) | L3B主導(看板建立+趨勢分析)",
        "questions": "DPPM如何計算？SMT製程DPPM警戒值是多少？"
      },
      {
        "category": "[D] 設備保養點檢 Equipment Maintenance  ★含騏宏設備：JUKI RS-1 / LS-16R / VP-01G / PowerPlace / AT3-310A4★",
        "code": "D1",
        "dimension": "SMT設備日常點檢",
        "ability": "SMT設備日常點檢（FMMD0303/每日開工前/印刷機+貼片機+回焊爐+AOI/Nozzle Center測試）",
        "levels": {
          "0": "無",
          "1": "了解點檢項目",
          "2": "確實執行日常點檢全項目+異常開維修單，無遺漏",
          "3": "建立保養SOP+點檢有效性分析+有MTBF提升案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B必備(日常點檢) | L2A熟練(異常開維修單) | L3A主導(保養SOP+MTBF追蹤)",
        "questions": "Nozzle Center測試在什麼時間點執行？點檢時發現貼片機異常如何記錄通報？"
      },
      {
        "category": "[D] 設備保養點檢 Equipment Maintenance  ★含騏宏設備：JUKI RS-1 / LS-16R / VP-01G / PowerPlace / AT3-310A4★",
        "code": "D2",
        "dimension": "貼片機Nozzle管理",
        "ability": "貼片機吸嘴(Nozzle)日常管理（清潔週期/磨損檢查/更換時機/Nozzle Center校正）",
        "levels": {
          "0": "無",
          "1": "了解Nozzle功能",
          "2": "正確執行Nozzle清潔+磨損判定+更換作業",
          "3": "建立Nozzle壽命管理+更換記錄+有拋料率改善案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B必備(Nozzle清潔+更換) | L3A熟練(壽命管理+記錄) | L3B主導(拋料改善+壽命分析)",
        "questions": "Nozzle磨損如何目視判定？Nozzle更換後需執行哪些確認？"
      },
      {
        "category": "[D] 設備保養點檢 Equipment Maintenance  ★含騏宏設備：JUKI RS-1 / LS-16R / VP-01G / PowerPlace / AT3-310A4★",
        "code": "D3",
        "dimension": "回焊爐爐溫管理",
        "ability": "回焊爐溫度曲線管理（四段Profile/量測頻率/溫度偏差處理/WIMD0205爐溫設定辦法）",
        "levels": {
          "0": "無",
          "1": "了解四段爐溫意義",
          "2": "確認爐溫Profile正確+溫度偏差識別+通報",
          "3": "設定爐溫Profile+有溫度異常追蹤+改善焊接不良案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B必備(Profile確認+偏差識別) | L3A熟練(爐溫設定) | L3B主導(Profile優化+改善案例)",
        "questions": "新機種首次生產前如何確認爐溫Profile？溫度偏差超出範圍如何處置？"
      },
      {
        "category": "[D] 設備保養點檢 Equipment Maintenance  ★含騏宏設備：JUKI RS-1 / LS-16R / VP-01G / PowerPlace / AT3-310A4★",
        "code": "D4",
        "dimension": "設備故障六步驟",
        "ability": "設備故障緊急處置六步驟（按安燈→通報→評估→快速修復or備援→首件確認→故障報告），關鍵設備MTTR≤2H",
        "levels": {
          "0": "不知如何處置",
          "1": "了解六步驟",
          "2": "正確執行前三步驟(按燈+通報+評估)+配合維修",
          "3": "主導備援啟動+故障報告+有MTTR縮短案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B必備(按燈通報) | L2A必備(六步驟配合) | L3A主導(備援+故障報告)",
        "questions": "貼片機故障維修超過30分鐘如何啟動備援？MTTR計算公式？"
      },
      {
        "category": "[D] 設備保養點檢 Equipment Maintenance  ★含騏宏設備：JUKI RS-1 / LS-16R / VP-01G / PowerPlace / AT3-310A4★",
        "code": "D5",
        "dimension": "JUKI RS-1貼片機操作",
        "ability": "JUKI RS-1高速智能模塊式貼片機操作（程式切換/Feeder換料RF08AS-16AS/Nozzle Center/拋料監控≤0.3%/PowerPlace座標確認）",
        "levels": {
          "0": "無",
          "1": "了解RS-1基本操作與Feeder分類",
          "2": "獨立執行RS-1程式切換+Feeder換料+拋料率≤0.3%持續2H+填寫換料記錄",
          "3": "建立RS-1換線SOP+Feeder壽命管理+有拋料異常根因分析改善案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(RS-1獨立操作+Feeder換料) | L2B熟練(拋料≤0.3%+換線達標) | L3A主導(RS-1換線SOP建立)",
        "questions": "RS-1 Feeder RF08AS/12AS/16AS各適用哪類元件？Nozzle Center測試步驟？PowerPlace座標如何核對PCB版本？"
      },
      {
        "category": "[D] 設備保養點檢 Equipment Maintenance  ★含騏宏設備：JUKI RS-1 / LS-16R / VP-01G / PowerPlace / AT3-310A4★",
        "code": "D6",
        "dimension": "LS-16R回焊爐爐溫設定",
        "ability": "熱風回焊爐LS-16R（上8+下8溫區/氮氣）爐溫Profile設定（KIC START2 6CH量測/松下PLC溫控/四段溫度曲線/WIMD0205爐溫設定辦法）",
        "levels": {
          "0": "無",
          "1": "了解LS-16R四段爐溫與KIC START2 6通道量測儀基本操作",
          "2": "獨立確認LS-16R爐溫Profile+執行KIC START2量測並記錄+氮氣流量管控正常",
          "3": "主導設定LS-16R新機種Profile+建立KIC量測布點基準+有爐溫異常追蹤並改善焊接不良案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(LS-16R Profile確認+KIC量測操作) | L3A熟練(爐溫設定+偏差分析) | L3B主導(新機種Profile建立+KIC基準)",
        "questions": "LS-16R氮氣回焊vs一般空氣回焊焊接品質差異？KIC START2 6CH如何布點量測最差點？爐溫偏差≥5℃時如何追蹤根因？"
      },
      {
        "category": "[D] 設備保養點檢 Equipment Maintenance  ★含騏宏設備：JUKI RS-1 / LS-16R / VP-01G / PowerPlace / AT3-310A4★",
        "code": "D7",
        "dimension": "SPI VP-01G錫膏檢測機操作",
        "ability": "CKD 3D錫膏印刷檢查機VP-01G操作（體積/突起/掠過/面積/偏位/平均高度/橋接/無焊錫/VPDS回查系統/SPC資料庫）",
        "levels": {
          "0": "無",
          "1": "了解VP-01G檢查原理(相位偏移法/3D條紋光)與各判定項目",
          "2": "獨立操作VP-01G執行SPI檢測+判定NG板+執行VPDS回查系統查詢趨勢",
          "3": "建立VP-01G SPI管制基準+VPDS趨勢分析改善印刷品質+有SPC數據應用改善案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(VP-01G操作+NG判定) | L2B必備(VPDS回查系統) | L3A主導(SPI管制基準+SPC趨勢分析)",
        "questions": "VP-01G高度量測分辨率15/7.5μm各適用何種元件精度？VPDS系統如何查詢特定工站印刷趨勢？橋接判定與掠過判定如何區分？"
      },
      {
        "category": "[E] 5S與現場管理 5S & Workplace Management",
        "code": "E1",
        "dimension": "SMT工站5S執行",
        "ability": "SMT工站5S執行（整理/整頓/清掃/清潔/素養），5S稽核評分≥85分（合格下限80分）",
        "levels": {
          "0": "不主動執行5S",
          "1": "了解5S標準",
          "2": "確實執行工站5S+配合稽核，評分≥85分",
          "3": "建立5S標準書+照片對比+月稽核計畫，評分≥90分"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L1A必備(5S執行) | L1B必備(評分≥80分) | L2A主導(評分≥85分維持)",
        "questions": "5S稽核評分低於80分如何追蹤改善？SMT工站主要5S難點是什麼？"
      },
      {
        "category": "[E] 5S與現場管理 5S & Workplace Management",
        "code": "E2",
        "dimension": "鋼板清洗與工站清潔",
        "ability": "每班下班前鋼板清洗歸還/工站清潔/錫膏回收密封/廢料處理/設備關機確認",
        "levels": {
          "0": "不執行下班清潔",
          "1": "了解清潔項目",
          "2": "每班確實完成鋼板清洗+工站清潔+錫膏密封+設備關機，無遺漏",
          "3": "建立清潔SOP+稽核有效性+有鋼板清潔壽命延長案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L1A必備(下班清潔執行) | L1B必備(全項無遺漏) | L2A主導(清潔SOP+有效性稽核)",
        "questions": "下班前錫膏如何回收密封？鋼板清洗後需確認哪些事項才算完成？"
      },
      {
        "category": "[E] 5S與現場管理 5S & Workplace Management",
        "code": "E3",
        "dimension": "SMT區域五色標示",
        "ability": "SMT區域五色標示（黃/綠/藍/紅/虎紋線）與靜電防護區管理（靜電環+靜電地墊+ESD包裝）",
        "levels": {
          "0": "不了解標示",
          "1": "了解五色標示意義",
          "2": "正確依五色標示放置物料+靜電防護確實配戴",
          "3": "規劃SMT靜電防護區標示+有ESD異常防止案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L1A必備(五色標示+靜電防護意義) | L1B必備(正確依標示放置) | L2A主導(靜電防護標示優化)",
        "questions": "SMT藍色待檢區放置什麼？靜電環的目的？PCB上線前靜電防護如何確認？"
      },
      {
        "category": "[F] 生產排程與換線 Production Scheduling & Changeover",
        "code": "F1",
        "dimension": "SMT排程執行",
        "ability": "SMT生產排程確認與執行（確認工單號/機種/PCB版本/BOM/釘釘掃碼/生產日報填寫）",
        "levels": {
          "0": "無",
          "1": "了解排程確認流程",
          "2": "獨立確認並執行日排程+異常及時回報+日報數據準確",
          "3": "協助制定排程+達成率分析+有調整排程能力"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(獨立確認+執行排程) | L2B熟練(異常回報+達成率) | L3A主導(排程分析+調整)",
        "questions": "PCB版本如何確認與工單BOM一致？排程異常如何向項目負責人/巴長回報？"
      },
      {
        "category": "[F] 生產排程與換線 Production Scheduling & Changeover",
        "code": "F2",
        "dimension": "SMT換線管理",
        "ability": "SMT換線管理（同規格≤30分/異規格≤60分，計算起點:末片入爐，終點:首件FAI PASS）",
        "levels": {
          "0": "無",
          "1": "了解換線流程",
          "2": "獨立執行換線+達成時間目標+換線記錄填寫完整",
          "3": "分析換線瓶頸+SMED改善+有換線時間縮短案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(獨立換線+時間目標) | L3A熟練(瓶頸分析) | L3B主導(SMED改善)",
        "questions": "SMT換線時間計算起點和終點？同規格換線與異規格換線主要差異？"
      },
      {
        "category": "[F] 生產排程與換線 Production Scheduling & Changeover",
        "code": "F3",
        "dimension": "每小時產量管理",
        "ability": "每小時目標產量管理（淨工時計算/每2小時拋料率查看/連續2H低於80%達成率須通報）",
        "levels": {
          "0": "不了解",
          "1": "了解淨工時概念",
          "2": "正確計算每小時目標產量+每2H產量追蹤+異常立即通報",
          "3": "建立每小時看板+達成率趨勢+有改善低達成率案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L1B必備(淨工時概念) | L2A必備(每2H追蹤+通報) | L2B主導(看板建立+趨勢分析)",
        "questions": "為何拋料率每2小時查一次？連續2H低於80%達成率應通報誰？"
      },
      {
        "category": "[G] ERP系統與釘釘 ERP & DingTalk System",
        "code": "G1",
        "dimension": "鼎新ERP報工操作",
        "ability": "鼎新ERP生產報工（工時/產量/不良數/製損/材損/部門領料/轉撥單，報工正確率≥98%）；PowerPlace座標軟體確認工單機種版本一致性",
        "levels": {
          "0": "從未使用",
          "1": "了解ERP報工流程",
          "2": "每日正確完成ERP報工+各單據正確開立，報工正確率≥98%",
          "3": "建立報工SOP+報工正確率追蹤+有異常修正案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L2A必備(ERP基礎操作) | L2B必備(報工正確率≥98%) | L3A主導(報工SOP+準確率追蹤)",
        "questions": "製損單和材損單各在什麼情況下開立？緊急領料後幾小時內須補ERP單？"
      },
      {
        "category": "[G] ERP系統與釘釘 ERP & DingTalk System",
        "code": "G2",
        "dimension": "SMT程式管制表",
        "ability": "SMT程式管制表維護（程式版本/ECN變更確認/4H內現場更新/舊版回收）",
        "levels": {
          "0": "無",
          "1": "了解程式管制目的",
          "2": "接收ECN後正確更新程式管制表+4H內確認現場執行",
          "3": "建立程式版本管控SOP+ECN零錯漏案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L2B必備(程式管制表維護) | L3A熟練(ECN更新執行) | L3B主導(程式版本SOP)",
        "questions": "接到ECN後第一步？如何確認現場全員已按新版程式生產？"
      },
      {
        "category": "[G] ERP系統與釘釘 ERP & DingTalk System",
        "code": "G3",
        "dimension": "釘釘系統全功能應用",
        "ability": "釘釘報工/異常回饋/提案/審批/看板功能在SMT課的應用（工單掃碼/拋料異常即時拍照上傳/提案每月≥1件）",
        "levels": {
          "0": "從未使用",
          "1": "了解釘釘基礎功能",
          "2": "每日確實完成工單掃碼+異常即時上傳+每月提案≥1件",
          "3": "建立SMT釘釘應用規範+有異常關閉≤24H管理記錄"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L1B必備(工單掃碼+基礎操作) | L2A熟練(異常回饋+提案) | L3A主導(SMT釘釘規範建立)",
        "questions": "釘釘異常回饋需填哪些資訊？每月提案≥1件如何在釘釘系統提交？"
      },
      {
        "category": "[H] QCC品質圈與提案改善 QCC & Kaizen",
        "code": "H1",
        "dimension": "提案改善制度",
        "ability": "提案改善制度執行（問題識別/改善提案填寫/效益估算/追蹤實施），每人每月≥1件有效提案",
        "levels": {
          "0": "從不提案",
          "1": "了解提案流程",
          "2": "每月≥1件有效提案+有量化效益（拋料/品質/效率）",
          "3": "年度≥12件+多件採用+有SMT系統性改善提案"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L1B必備(每月1件提案) | L2A熟練(有效提案+效益量化) | L2B主導(年≥12件+指導他人)",
        "questions": "說明一個SMT工站的改善提案：發現什麼問題？如何改善？效益？"
      },
      {
        "category": "[H] QCC品質圈與提案改善 QCC & Kaizen",
        "code": "H2",
        "dimension": "QCC啟動與執行",
        "ability": "SMT QCC啟動條件（月DPPM連續2月未達標/同不良模式週TOP3重複/拋料率持續超標）與九步驟PDCA",
        "levels": {
          "0": "不了解QCC",
          "1": "了解SMT QCC啟動條件與PDCA",
          "2": "識別啟動條件+積極參與QCC活動",
          "3": "擔任QCC圈長+主導PDCA+有SMT品質改善發表記錄"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(QCC參與) | L2B熟練(積極貢獻) | L3A主導(QCC圈長+PDCA主導)",
        "questions": "SMT拋料率持續超標如何啟動QCC？柏拉圖如何找出拋料主要原因？"
      },
      {
        "category": "[I] IATF品質系統與特殊製程 IATF & Special Process",
        "code": "I1",
        "dimension": "SC/CC特殊製程資格",
        "ability": "SMT五大SC/CC工站資格管理（工站2印刷/4貼片/6回焊爐/8AOI/9修補），筆試+實作≥80分+每年複檢",
        "levels": {
          "0": "不了解SC/CC",
          "1": "了解哪5站需資格鑑定+各合格標準",
          "2": "已通過本工站SC/CC資格鑑定+配合年複檢+記錄登錄",
          "3": "主導SC/CC資格管理+提報受檢+人員異動立即更新"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B必備(本工站SC/CC資格通過) | L2B必備(配合複檢+記錄) | L3A主導(SC/CC資格管理)",
        "questions": "回焊爐SC/CC資格鑑定需通過筆試+實作各幾分？資格每幾年需複檢？"
      },
      {
        "category": "[I] IATF品質系統與特殊製程 IATF & Special Process",
        "code": "I2",
        "dimension": "IATF16949配合執行",
        "ability": "IATF16949/AS9100D稽核配合（程序書遵循/現場稽核配合/不符合項改善/製程文件維護）",
        "levels": {
          "0": "無",
          "1": "了解IATF16949基本要求",
          "2": "配合品質稽核+依IATF程序執行SMT作業",
          "3": "主導SMT內部稽核準備+有稽核改善案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L2A必備(配合稽核+依程序執行) | L3A必備(稽核準備) | L3B主導(稽核主責)",
        "questions": "IATF稽核時SMT現場常被查哪些項目？如何準備？"
      },
      {
        "category": "[I] IATF品質系統與特殊製程 IATF & Special Process",
        "code": "I3",
        "dimension": "IPC-A-610焊點標準",
        "ability": "IPC-A-610電子組件可接受性標準應用（SMT焊點判定/爬錫高度/元件偏移/立碑/空焊/冷焊判定）",
        "levels": {
          "0": "無",
          "1": "了解IPC-A-610基本判定項目",
          "2": "正確依IPC-A-610判定SMT焊點合格/不合格+判定書填寫",
          "3": "建立SMT焊點判定SOP+指導新人+有IPC-A-610訓練記錄"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L2A必備(IPC-A-610基礎判定) | L2B熟練(正確判定+判定書) | L3A主導(焊點SOP+培訓)",
        "questions": "IPC-A-610中立碑(Tombstone)與空焊(Open)各如何判定？"
      },
      {
        "category": "[J] 人員培育管理 Personnel Development",
        "code": "J1",
        "dimension": "SMT新人OJT帶領",
        "ability": "SMT新人OJT四階段帶訓（示範→協同→觀察修正→獨立作業），每人目標≥3工站達◎以上",
        "levels": {
          "0": "無OJT帶訓概念",
          "1": "了解OJT四階段法",
          "2": "可執行新人OJT+按時程完成技能培育+技能矩陣達標",
          "3": "建立SMT OJT計畫+帶訓師認定+有培育成功案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B必備(OJT帶訓執行) | L3A必備(OJT計畫設計) | L3B主導(SMT OJT體系建立)",
        "questions": "SMT新人第一週訓練重點？如何確認新人已達獨立操作水準？"
      },
      {
        "category": "[J] 人員培育管理 Personnel Development",
        "code": "J2",
        "dimension": "技能矩陣管理",
        "ability": "SMT技能矩陣管理（○△◎★四級/每工站≥2人達◎/月度更新/季度盤點代理機制）",
        "levels": {
          "0": "無",
          "1": "了解技能矩陣目的",
          "2": "維護SMT技能矩陣+推動多能工輪訓計畫+月更新",
          "3": "建立技能矩陣制度+代理機制確保+有多能工提升案例"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L2B必備(技能矩陣維護) | L3A主導(輪訓計畫+月更新) | L3B主導(代理機制確保)",
        "questions": "SMT每工站為何需≥2人達◎以上？技能矩陣○△◎★各代表什麼？"
      },
      {
        "category": "[K] 阿米巴損益管理 Amoeba P&L Management",
        "code": "K1",
        "dimension": "SMT阿米巴損益核算",
        "ability": "SMT課阿米巴損益核算（時間附加值計算/每日損益表填寫/SMT製造費用分攤/目標追蹤）",
        "levels": {
          "0": "無",
          "1": "了解時間附加值公式",
          "2": "正確計算SMT時間附加值+填寫每日損益表+異常分析",
          "3": "主持SMT月度阿米巴會議+帶領小巴達成目標"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(時間附加值計算) | L3A必備(每日損益表+異常分析) | L4A主導(月度會議主持)",
        "questions": "SMT課阿米巴時間附加值如何計算？拋料率升高對時間附加值有何影響？"
      },
      {
        "category": "[K] 阿米巴損益管理 Amoeba P&L Management",
        "code": "K2",
        "dimension": "SMT成本管控",
        "ability": "SMT生產成本管控（錫膏消耗/元件拋料損耗/工時效率/COST DOWN目標達成）",
        "levels": {
          "0": "無",
          "1": "了解SMT成本構成項目",
          "2": "計算錫膏耗用+拋料損耗+工時效率，識別異常",
          "3": "建立SMT成本資料庫+有COST DOWN案例（拋料/錫膏/工時）"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L3A必備(成本計算+異常識別) | L3B熟練(成本報告) | L4A主導(成本資料庫+COST DOWN)",
        "questions": "拋料率從0.5%降至0.3%，對月元件成本節省有何影響？如何計算？"
      },
      {
        "category": "[L] AI工具應用 AI Tools",
        "code": "L1",
        "dimension": "Claude AI應用",
        "ability": "Claude AI工具應用（SMT SOP撰寫輔助/KPI報表/拋料趨勢分析/故障報告生成）",
        "levels": {
          "0": "無",
          "1": "基礎使用Claude生成報表/SOP草稿",
          "2": "熟練應用AI生成SMT KPI報告/異常分析/拋料統計",
          "3": "建立SMT AI應用規範+有效率提升案例"
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L2B建議(基礎AI使用) | L3A必備(熟練報表/SOP輔助) | L3B主導(SMT AI規範建立)",
        "questions": "如何用Claude AI快速生成SMT拋料異常分析報告？"
      }
    ],
    "salary_structure": [
      {
        "grade": "L1A",
        "title_zh": "SMT初級操機員",
        "title_en": "SMT Operator I",
        "salary_min": "30000",
        "salary_mid": "32000",
        "salary_max": "35000",
        "requirements": "基礎作業執行，跟班學習，靜電防護配戴",
        "promotion": "完全新人，需完整帶領",
        "amoeba": "執行者/學習者"
      },
      {
        "grade": "L1B",
        "title_zh": "SMT操機員",
        "title_en": "SMT Operator II",
        "salary_min": "32000",
        "salary_mid": "34000",
        "salary_max": "37000",
        "requirements": "可獨立操作3工站，自主品質檢查，釘釘基礎",
        "promotion": "≥3工站獨立，自主檢查合格率≥95%，錫膏基礎管理",
        "amoeba": "執行者"
      },
      {
        "grade": "L2A",
        "title_zh": "SMT資深操機員",
        "title_en": "SMT Senior Operator",
        "salary_min": "34000",
        "salary_mid": "37000",
        "salary_max": "40000",
        "requirements": "6站熟練，錫膏鋼板管理，QCC參與，可帶新人OJT",
        "promotion": "≥6工站獨立，拋料率監控，錫膏管控，可帶1名新人",
        "amoeba": "執行者/帶領者"
      },
      {
        "grade": "L2B",
        "title_zh": "SMT資深操機員(熟)/班長",
        "title_en": "SMT Lead Operator",
        "salary_min": "36000",
        "salary_mid": "39000",
        "salary_max": "43000",
        "requirements": "全9站熟練，班長職務，ERP報工，換線達標，錫膏月統計",
        "promotion": "全9站獨立，換線達標(同≤30/異≤60分)，ERP報工熟練，釘釘知識庫管理",
        "amoeba": "班長/帶領者"
      },
      {
        "grade": "L3A",
        "title_zh": "SMT助理製造工程師",
        "title_en": "SMT Asst. Mfg. Engineer",
        "salary_min": "38000",
        "salary_mid": "41000",
        "salary_max": "45000",
        "requirements": "製程分析、KPI追蹤、拋料分析、QCC圈長、釘釘專案管理",
        "promotion": "獨立KPI追蹤，8D分析，QCC圈長，DPPM趨勢分析，釘釘專案熟練",
        "amoeba": "技術支援者"
      },
      {
        "grade": "L3B",
        "title_zh": "SMT助理製造工程師(熟)",
        "title_en": "SMT Mfg. Engineer",
        "salary_min": "41000",
        "salary_mid": "44000",
        "salary_max": "48000",
        "requirements": "製程改善、爐溫Profile設定、PPAP協助、釘釘看板建立",
        "promotion": "KPI改善有成果，爐溫Profile設定，PPAP協助，釘釘看板建立",
        "amoeba": "技術推動者"
      },
      {
        "grade": "L4A",
        "title_zh": "SMT製造工程師",
        "title_en": "SMT Mfg. Engineer II",
        "salary_min": "45000",
        "salary_mid": "50000",
        "salary_max": "58000",
        "requirements": "IE改善量化、PFMEA主導、NPI量產移轉、釘釘全功能應用、阿米巴核算",
        "promotion": "獨立IE改善量化成果，PFMEA主導，NPI量產移轉，釘釘流程優化",
        "amoeba": "資深技術者"
      },
      {
        "grade": "L4B",
        "title_zh": "SMT製造工程師(資)",
        "title_en": "SMT Senior Mfg. Engineer",
        "salary_min": "50000",
        "salary_mid": "56000",
        "salary_max": "65000",
        "requirements": "精實生產、SPC體系建立、NPI多件主導、阿米巴P&L深度分析",
        "promotion": "精實改善顯著成果，SPC建立，NPI多件主導，PPAP主導",
        "amoeba": "資深技術者"
      },
      {
        "grade": "L5A",
        "title_zh": "SMT資深製造工程師/巴長",
        "title_en": "SMT Principal Engineer/BA",
        "salary_min": "58000",
        "salary_mid": "67000",
        "salary_max": "78000",
        "requirements": "SMT製程標準化、IATF稽核主責、NPI體系建立、阿米巴巴長、釘釘平台治理",
        "promotion": "製程標準化建立，NPI導入體系，IATF稽核主導，巴長損益達標",
        "amoeba": "L1 Amoeba巴長"
      }
    ]
  },
  {
    "job_name": "人資專員 (HR)",
    "raw_job_name": "人資",
    "filename": "騏宏科技_人資職能薪資結構表_v1_3_4.xlsx",
    "competencies": [
      {
        "category": "[A]  職能管理與策略管理  Competency & Strategy Management",
        "code": "A1",
        "dimension": "職能管理",
        "ability": "職能模型建立與職能管理 (核心價值/經營理念連結)",
        "levels": {
          "0": "不了解",
          "1": "知道職能模型架構",
          "2": "獨立建立職能辭典+職能評估工具+串接招募/訓練/績效",
          "3": "主導全公司職能模型迭代更新+應用至各HR流程"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4B認知｜L5A必備(職能辭典+三流程串接)｜L6A主導(全公司職能模型)",
        "questions": "如何建立騏宏研發/生產/業務三類職能辭典？"
      },
      {
        "category": "[A]  職能管理與策略管理  Competency & Strategy Management",
        "code": "A2",
        "dimension": "策略管理",
        "ability": "平衡計分卡BSC設計與HR策略地圖連結",
        "levels": {
          "0": "無",
          "1": "了解BSC四構面",
          "2": "能協助設計HR BSC指標+連結HR策略地圖",
          "3": "主導HR BSC設計+管理層報告+年度HR策略規劃"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L5A認知｜L5B必備(HR BSC設計)｜L6A主導(年度HR策略規劃)",
        "questions": "HR策略如何連結公司業務策略？騏宏IATF16949下HR的BSC關鍵指標？"
      },
      {
        "category": "[A]  職能管理與策略管理  Competency & Strategy Management",
        "code": "A3",
        "dimension": "策略管理",
        "ability": "HRBP運作模式與業務夥伴角色",
        "levels": {
          "0": "無",
          "1": "了解HRBP概念",
          "2": "能擔任部門HRBP+主動了解業務需求+提供HR解決方案",
          "3": "建立HRBP運作機制+量化業務支持成效"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L5A建議｜L5B必備(部門HRBP運作)｜L6A主導(HRBP機制建立)",
        "questions": "如何作為生產部門的HRBP？如何整合招募/訓練/績效為部門解決方案？"
      },
      {
        "category": "[A]  職能管理與策略管理  Competency & Strategy Management",
        "code": "A4★",
        "dimension": "職能管理",
        "ability": "人力資本ROI分析與HR儀表板設計",
        "levels": {
          "0": "0=無；1=了解HR指標；2=設計HR KPI儀表板+計算人力成本ROI；3=建立HR Analytics平台+決策支持案例",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L5A加分(HR KPI)｜L6A建議(ROI分析)｜L6B主導(HR Analytics平台)",
        "questions": "騏宏HR如何量化訓練ROI？人均產值如何計算並與業界比較？"
      },
      {
        "category": "[A]  職能管理與策略管理  Competency & Strategy Management",
        "code": "A5",
        "dimension": "策略管理",
        "ability": "【新】使命/價值/願景→營運策略→HR政策轉化",
        "levels": {
          "0": "無",
          "1": "了解使命/願景到HR策略轉化邏輯",
          "2": "能將公司使命/營運策略轉化為任用政策+發展政策文件",
          "3": "主導年度HR策略規劃+任用+發展雙政策制定+管理層報告"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L5B必備(任用+發展政策轉化)｜L6A主導(年度雙政策制定)｜L6B主導(HR策略規劃主持)",
        "questions": "騏宏『IATF16949精實製造』使命如何轉化為具體人力資源任用政策和發展政策？"
      },
      {
        "category": "[B]  組織設計  Organization Design",
        "code": "B1",
        "dimension": "組織設計",
        "ability": "組織分析與組織架構設計 (部門職掌/層級設計)",
        "levels": {
          "0": "無",
          "1": "了解組織設計基本原理",
          "2": "能執行組織診斷+提出調整建議+設計部門職掌書",
          "3": "主導組織重設計+跨部門職掌重新分工+效能提升案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L5A必備(組織診斷+職掌設計)｜L5B主導(組織重設計)｜L6A主導(跨部門職掌分工)",
        "questions": "騏宏從60人→100人組織架構如何因應調整？研發+生技維修如何設計最佳職掌？"
      },
      {
        "category": "[B]  組織設計  Organization Design",
        "code": "B2",
        "dimension": "組織設計",
        "ability": "組織架構圖繪製與部門職掌書撰寫",
        "levels": {
          "0": "無",
          "1": "能繪製組織架構圖",
          "2": "能設計完整組織架構+撰寫部門職掌書+各職位職責",
          "3": "建立組織架構維護SOP+主導組織優化案例"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4A必備(組織架構圖)｜L5A熟練(部門職掌書)｜L5B主導(維護SOP)",
        "questions": "如何撰寫騏宏品管部門職掌書？如何與IATF16949文件對接？"
      },
      {
        "category": "[B]  組織設計  Organization Design",
        "code": "B3★",
        "dimension": "組織設計",
        "ability": "人員配置效率分析 (人均產值/稼動率)",
        "levels": {
          "0": "0=無；1=了解人力效率指標；2=分析各部門人力配置效率+調整建議；3=建立人力效率分析體系+優化成效案例",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L5A建議｜L5B必備(人力配置優化)｜L6A主導(效率分析體系)",
        "questions": "SMT 9站如何計算人均稼動率？組裝22站人力配置如何優化？"
      },
      {
        "category": "[C]  工作設計  Job Design",
        "code": "C1",
        "dimension": "工作設計",
        "ability": "工作分析技術 (問卷法/訪談法/觀察法/工作日誌法)",
        "levels": {
          "0": "無",
          "1": "了解工作分析四種方法",
          "2": "能獨立執行工作分析+整理工作說明書+工作規範",
          "3": "建立全公司工作分析SOP+JD更新機制"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A必備(工作分析方法)｜L5A必備(獨立執行+JD撰寫)｜L6A主導(JD維護機制)",
        "questions": "如何為SMT線作業員做工作分析？生技維修工程師JD需涵蓋哪些要素？"
      },
      {
        "category": "[C]  工作設計  Job Design",
        "code": "C2",
        "dimension": "工作設計",
        "ability": "工作說明書(JD)與工作規範(JS)撰寫",
        "levels": {
          "0": "無",
          "1": "了解JD格式結構",
          "2": "能獨立撰寫各職類JD含職責/資格/KPI/IATF要求",
          "3": "建立JD撰寫規範+全公司JD系統化更新"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A必備(JD格式)｜L5A熟練(各職類JD)｜L6A主導(JD體系建立)",
        "questions": "LED警示燈研發工程師JD如何撰寫？如何連結IATF16949人員能力要求？"
      },
      {
        "category": "[C]  工作設計  Job Design",
        "code": "C3★",
        "dimension": "工作設計",
        "ability": "工作評價 (Hay/職位分類法/因素比較法)",
        "levels": {
          "0": "0=無；1=了解工作評價方法；2=用工作評價工具為各職位評分；3=主導全公司工作評價+職位評分標準建立",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L5B建議(工作評價)｜L6A必備(主導工作評價)｜L6B主導(職位評分體系)",
        "questions": "如何設計騏宏製造業的工作評價因素？評點法如何應用到研發vs生產？"
      },
      {
        "category": "[C]  工作設計  Job Design",
        "code": "C4",
        "dimension": "工作設計",
        "ability": "職務代理制度設計與執行（CMP-001-109）",
        "levels": {
          "0": "無",
          "1": "了解職務代理制度概念(代理範圍/代理期限/代理責任)",
          "2": "能設計職務代理辦法+建立各職位代理清單+確保IATF文件代理簽核合規",
          "3": "建立全公司職務代理管理SOP+代理矩陣+有效避免業務斷點"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4A必備(職務代理辦法認識)｜L5A必備(代理清單設計+IATF簽核合規)｜L6A主導(全公司職務代理SOP)",
        "questions": "騏宏各關鍵職位(研發主管/品管主管/生產主管)職務代理人如何指定？IATF16949文件簽核的職務代理如何設計確保合規？"
      },
      {
        "category": "[D]  人力資源規劃  HR Planning",
        "code": "D1",
        "dimension": "人力資源規劃",
        "ability": "人力需求預測與人力規劃 (業務成長/產能計算)",
        "levels": {
          "0": "無",
          "1": "了解人力預測方法",
          "2": "執行人力盤點+預測缺口+制定規劃",
          "3": "建立人力規劃模型+年度人力計畫主導"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4B認知｜L5A必備(人力盤點+年度計畫)｜L6A主導(人力規劃模型)",
        "questions": "騏宏SMT+組裝雙線如何計算年度人力需求？新客戶訂單成長20%人力如何規劃？"
      },
      {
        "category": "[D]  人力資源規劃  HR Planning",
        "code": "D2",
        "dimension": "人力資源規劃",
        "ability": "人力盤點 (現有能力/潛力評估/繼任計畫)",
        "levels": {
          "0": "無",
          "1": "了解人力盤點架構(工作盤點+員工能力盤點)",
          "2": "執行年度人力盤點+能力評估+人才缺口識別(含104人力盤點工具應用：工作重要性再評估+員工能力與工作匹配分析)",
          "3": "建立繼任計畫+人才梯隊管理+人力盤點效益報告"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L5A必備(年度盤點+缺口識別)｜L5B主導(繼任計畫)｜L6A主導(人才梯隊)",
        "questions": "如何識別騏宏關鍵職位(Key Position)？繼任者候選人如何評估和培育？"
      },
      {
        "category": "[D]  人力資源規劃  HR Planning",
        "code": "D3",
        "dimension": "人力資源規劃",
        "ability": "人力成本預算規劃與人員編制管控",
        "levels": {
          "0": "無",
          "1": "了解人力成本構成",
          "2": "制定年度人力成本預算+人員編制管控",
          "3": "建立人力成本分析報告+降本/效率提升案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L4B認知｜L5A必備(年度人力成本預算)｜L6A主導(人力成本優化策略)",
        "questions": "騏宏100人年度人力成本如何分類預算？如何在不降低品質下優化人力成本？"
      },
      {
        "category": "[D]  人力資源規劃  HR Planning",
        "code": "D4★",
        "dimension": "人力資源規劃",
        "ability": "多元勞動力規劃 (正職/外包/越南移工管理)",
        "levels": {
          "0": "0=無；1=了解多元用工模式；2=管理外包/派遣/移工方案；3=建立多元用工政策+合規",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L5A加分(多元用工)｜L5B建議(移工管理)｜L6A主導(多元用工政策)",
        "questions": "騏宏引進越南移工需處理哪些申請作業？外包和派遣的法律責任差異？"
      },
      {
        "category": "[D]  人力資源規劃  HR Planning",
        "code": "D5",
        "dimension": "人力資源規劃",
        "ability": "【新】人才庫規劃與人才管線建立",
        "levels": {
          "0": "無",
          "1": "了解人才庫(Talent Pool)概念",
          "2": "能規劃各職類人才管線+建立候選人資料庫+定期維護",
          "3": "建立全公司人才庫體系+有效縮短招募lead time案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L5A必備(人才庫規劃+建立)｜L5B主導(各職類人才管線)｜L6A主導(全公司人才庫體系)",
        "questions": "如何為騏宏研發工程師建立人才庫？人才庫如何定期維護確保候選人意願新鮮度？"
      },
      {
        "category": "[E]  招募甄選與任用管理  Recruitment, Selection & Onboarding",
        "code": "E1",
        "dimension": "招募管理",
        "ability": "招募渠道開發與求才策略 (104/LinkedIn/校園/內推)",
        "levels": {
          "0": "無",
          "1": "了解常用渠道",
          "2": "熟練操作多種渠道+設計有效JD廣告+追蹤招募數據",
          "3": "建立招募品牌+校企合作+渠道成效分析機制"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A必備(多渠道招募)｜L5A熟練(渠道成效分析+品牌)｜L6A主導(招募策略)",
        "questions": "如何為騏宏研發工程師設計吸引人的104廣告？如何建立校企合作管道？"
      },
      {
        "category": "[E]  招募甄選與任用管理  Recruitment, Selection & Onboarding",
        "code": "E2",
        "dimension": "甄選技術",
        "ability": "面試設計與選才技術 (行為面試/結構化面試/職能面試)",
        "levels": {
          "0": "無",
          "1": "了解面試方法",
          "2": "設計結構化面試+執行職能面試+撰寫面試評分報告",
          "3": "建立全公司面試SOP+內部面試官培訓"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A必備(結構化面試)｜L5A熟練(職能面試設計)｜L6A主導(面試SOP+面試官培訓)",
        "questions": "如何為SMT操作員設計行為面試題？研發工程師面試如何評估技術能力+職能適配？"
      },
      {
        "category": "[E]  招募甄選與任用管理  Recruitment, Selection & Onboarding",
        "code": "E3",
        "dimension": "任用管理",
        "ability": "雇用程序與新人導入管理 (Onboarding/試用期管理)",
        "levels": {
          "0": "無",
          "1": "了解雇用程序",
          "2": "執行完整雇用程序+設計Onboarding計畫+管理試用期考核",
          "3": "建立Onboarding SOP+試用期KPI追蹤"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4A必備(雇用程序)｜L5A熟練(Onboarding計畫)｜L6A主導(新人留任率追蹤)",
        "questions": "新進研發工程師30-60-90天Onboarding計畫如何設計？"
      },
      {
        "category": "[E]  招募甄選與任用管理  Recruitment, Selection & Onboarding",
        "code": "E4",
        "dimension": "任用管理",
        "ability": "向外安置與離職面談管理",
        "levels": {
          "0": "無",
          "1": "了解向外安置",
          "2": "執行離職面談+分析離職原因+改善建議",
          "3": "建立離職分析報告+降低離職率具體措施"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4B認知｜L5A必備(離職面談+原因分析)｜L6A主導(離職率改善機制)",
        "questions": "研發工程師離職面談如何進行？離職數據如何回饋改善？"
      },
      {
        "category": "[E]  招募甄選與任用管理  Recruitment, Selection & Onboarding",
        "code": "E5★",
        "dimension": "甄選技術",
        "ability": "心理測驗/測評工具應用 (DISC/MBTI)",
        "levels": {
          "0": "0=無；1=了解測評工具；2=解讀測評報告+應用於選才；3=建立職位測評標準+效度驗證",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L5A加分(測評工具)｜L5B建議(職位測評標準)｜L6A主導(測評效度驗證)",
        "questions": "如何選擇適合騏宏業務人員的心理測驗工具？DISC如何應用到團隊組建？"
      },
      {
        "category": "[E]  招募甄選與任用管理  Recruitment, Selection & Onboarding",
        "code": "E6",
        "dimension": "任用管理",
        "ability": "【新】任用限制政策設計與內部任用管理",
        "levels": {
          "0": "無",
          "1": "了解任用限制法規(親屬迴避/競業禁止)",
          "2": "能設計任用限制政策+建立內部任用優先機制+管理內部調動",
          "3": "建立任用政策文件體系+內部人才市場+有內部任用成功案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L5A必備(任用限制政策+內部任用機制)｜L5B主導(內部人才市場)｜L6A主導(任用政策文件體系)",
        "questions": "騏宏哪些職位需設定任用限制(親屬迴避/競業禁止)？內部任用優先原則如何設計？"
      },
      {
        "category": "[E]  招募甄選與任用管理  Recruitment, Selection & Onboarding",
        "code": "E7★",
        "dimension": "甄選技術",
        "ability": "【新】背景資料查驗(Background Check)程序管理",
        "levels": {
          "0": "0=無；1=了解背景查驗種類；2=能設計背景查驗流程+執行學歷/工作/刑事查驗；3=建立資料查驗SOP+個資法合規+有效攔截不實資料",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L4B認知(背景查驗項目)｜L5A必備(背景查驗流程執行)｜L6A主導(查驗SOP+個資法合規)",
        "questions": "研發工程師進用前需做哪些背景查驗？外籍人員背景查驗有哪些特殊要求？"
      },
      {
        "category": "[F]  績效管理  Performance Management",
        "code": "F1",
        "dimension": "績效管理",
        "ability": "目標管理(MBO)制度設計與推動",
        "levels": {
          "0": "無",
          "1": "了解MBO原理",
          "2": "設計各層級MBO+推動目標分解+追蹤進度",
          "3": "建立全公司MBO+SMART訓練+目標達成率改善案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L5A必備(MBO制度+推動)｜L5B主導(全公司MBO)｜L6A主導(MBO與薪酬連結)",
        "questions": "如何為騏宏SMT生產線設計MBO目標？如何處理目標難易度不均？"
      },
      {
        "category": "[F]  績效管理  Performance Management",
        "code": "F2",
        "dimension": "績效管理",
        "ability": "績效評核制度設計與執行 (評分表/評核流程/等第分布)",
        "levels": {
          "0": "無",
          "1": "了解績效評核基本流程",
          "2": "設計績效評核表+管理評核流程+等第公平分布",
          "3": "建立績效評核SOP+校準會議主持"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4B必備(評核表設計)｜L5A熟練(等第分布+校準)｜L6A主導(評核制度改善)",
        "questions": "績效評核等第強制分配如何設計？校準會議(Calibration)如何確保公平？"
      },
      {
        "category": "[F]  績效管理  Performance Management",
        "code": "F3",
        "dimension": "績效管理",
        "ability": "績效面談技術與輔導教練 (給予回饋/改善計畫/PIP)",
        "levels": {
          "0": "無",
          "1": "了解績效面談技術",
          "2": "執行高品質面談+建立PIP+追蹤執行",
          "3": "建立績效面談SOP+主管績效教練訓練"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4A必備(績效面談)｜L5A熟練(PIP設計+追蹤)｜L6A主導(主管績效教練訓練)",
        "questions": "員工績效連續不佳如何進行PIP？如何訓練主管給予有效績效回饋？"
      },
      {
        "category": "[F]  績效管理  Performance Management",
        "code": "F4",
        "dimension": "績效管理",
        "ability": "KPI體系設計與OKR應用",
        "levels": {
          "0": "無",
          "1": "了解KPI/OKR差異",
          "2": "設計各部門KPI+連結公司戰略",
          "3": "建立KPI-OKR整合管理體系+數據追蹤儀表板"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L5A必備(各部門KPI設計)｜L5B主導(KPI體系)｜L6A主導(KPI-OKR整合)",
        "questions": "如何設計研發部門的KPI？KPI如何與阿米巴時間附加值對齊？"
      },
      {
        "category": "[F]  績效管理  Performance Management",
        "code": "F5★",
        "dimension": "績效管理",
        "ability": "360度回饋設計與應用",
        "levels": {
          "0": "0=無；1=了解360度回饋架構；2=設計360問卷+管理執行+解讀報告；3=建立360度回饋制度+主管發展規劃整合",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L5B建議(360設計)｜L6A必備(360制度)｜L6B主導(360整合發展)",
        "questions": "360度回饋如何避免評分通膨？如何讓受評者真正接受並行動？"
      },
      {
        "category": "[F]  績效管理  Performance Management",
        "code": "F6",
        "dimension": "績效管理",
        "ability": "【新】績效指標推移管理與各類獎金指標設計",
        "levels": {
          "0": "無",
          "1": "了解績效指標推移(KPI Trend)概念",
          "2": "能設計各類獎金指標(個人/部門/公司)連結績效評核+追蹤指標推移趨勢",
          "3": "建立績效指標推移儀表板+獎金指標優化機制+有指標改善帶動績效案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L5A必備(獎金指標設計+指標推移分析)｜L5B主導(獎金指標體系)｜L6A主導(績效指標推移儀表板)",
        "questions": "騏宏各類獎金(月獎/季獎/年終)的績效指標如何設計？如何追蹤季度KPI推移趨勢？"
      },
      {
        "category": "[F]  績效管理  Performance Management",
        "code": "F7",
        "dimension": "績效管理",
        "ability": "【新】自評制度設計與主管面談標準化執行",
        "levels": {
          "0": "無",
          "1": "了解自評制度設計要點",
          "2": "能設計員工自評表格+建立主管面談提問指引+管理面談時程",
          "3": "建立自評/主管面談SOP+面談品質評核機制+有主管面談能力提升案例"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4B必備(自評表格設計)｜L5A必備(面談提問指引+時程管理)｜L6A主導(面談SOP+主管能力提升)",
        "questions": "騏宏員工自評表如何設計才能促進自我發展思維？主管面談如何確保每位主管都做到位？"
      },
      {
        "category": "[G]  薪酬管理  Compensation Management",
        "code": "G1",
        "dimension": "薪酬管理",
        "ability": "工作評價(Job Evaluation)方法執行",
        "levels": {
          "0": "無",
          "1": "了解工作評價方法",
          "2": "執行工作評價+建立職等架構+內部公平性分析",
          "3": "建立全公司工作評價體系+定期更新"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L5A必備(工作評價執行)｜L5B主導(職等架構)｜L6A主導(工作評價體系)",
        "questions": "騏宏職能薪資如何設計確保研發/生產/管理各職系內部公平？"
      },
      {
        "category": "[G]  薪酬管理  Compensation Management",
        "code": "G2",
        "dimension": "薪酬管理",
        "ability": "薪資調查與市場對標 (104薪資報告/業界比較)",
        "levels": {
          "0": "無",
          "1": "了解薪資調查方法",
          "2": "執行年度薪資調查+分析市場競爭力+調薪建議",
          "3": "建立薪資競爭力分析機制+成功招募/留才案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4B認知(薪資調查)｜L5A必備(年度調查+市場分析)｜L6A主導(薪酬策略)",
        "questions": "如何用104薪資報告對標電子工程師市場薪酬？P25/P50/P75如何解讀？"
      },
      {
        "category": "[G]  薪酬管理  Compensation Management",
        "code": "G3",
        "dimension": "薪酬管理",
        "ability": "薪資架構設計與職等管理 (薪距/重疊/寬帶)",
        "levels": {
          "0": "無",
          "1": "了解薪資架構概念",
          "2": "設計職等薪資架構+維護各職等薪距",
          "3": "建立薪資架構SOP+定期更新+薪資健康度分析"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L5A必備(薪資架構設計)｜L5B主導(薪距管理)｜L6A主導(薪酬架構SOP)",
        "questions": "如何設計L3A~L7薪距寬幅(Grade Width)？薪資紅線如何處理？"
      },
      {
        "category": "[G]  薪酬管理  Compensation Management",
        "code": "G4",
        "dimension": "薪酬管理",
        "ability": "績效調薪設計與執行 (Merit Matrix/調薪矩陣)",
        "levels": {
          "0": "無",
          "1": "了解績效調薪邏輯",
          "2": "設計Merit Matrix+執行年度調薪+薪資公平性分析",
          "3": "建立薪酬政策+調薪SOP"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L5A必備(Merit Matrix+調薪執行)｜L5B主導(薪酬政策)｜L6A主導(調薪SOP)",
        "questions": "績效A/B/C如何設計調薪幅度？如何避免績效好但薪資已高位者的調薪兩難？"
      },
      {
        "category": "[G]  薪酬管理  Compensation Management",
        "code": "G5",
        "dimension": "薪酬管理",
        "ability": "獎工制度與激勵方案設計 (年終/季獎/目標獎金)",
        "levels": {
          "0": "無",
          "1": "了解獎金種類",
          "2": "設計年終/季獎/目標達成獎金計算公式",
          "3": "建立激勵薪酬政策+激勵效果量化驗證"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L5A必備(獎金計算公式)｜L5B主導(激勵薪酬政策)｜L6A主導(激勵效果評估)",
        "questions": "騏宏阿米巴獎金池如何設計分配規則？目標達成獎金如何避免短視行為？"
      },
      {
        "category": "[G]  薪酬管理  Compensation Management",
        "code": "G6★",
        "dimension": "薪酬管理",
        "ability": "紅利股票/員工持股/長期激勵方案",
        "levels": {
          "0": "0=無；1=了解員工持股概念；2=了解紅利轉增資制度；3=規劃長期激勵+制度設計案例",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L6A加分(員工持股)｜L6B必備(LTI規劃)｜L7主導(長期激勵策略)",
        "questions": "員工分紅與股票選擇權差異？如何設計留才型長期激勵方案？"
      },
      {
        "category": "[G]  薪酬管理  Compensation Management",
        "code": "G7",
        "dimension": "薪酬管理",
        "ability": "【新】職位分類體系與本薪/加給/津貼架構設計",
        "levels": {
          "0": "無",
          "1": "了解職位分類體系概念(職系/職組/職等)",
          "2": "能設計職位分類體系+規劃本薪/加給/各類津貼架構+確保制度公平",
          "3": "建立完整薪酬結構文件+有職位分類更新機制+客戶薪酬稽核通過案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L5B必備(職位分類體系設計+本薪/加給/津貼架構)｜L6A主導(薪酬結構文件建立)｜L6B主導(職位分類更新機制)",
        "questions": "騏宏如何設計職位分類體系？加給津貼有哪些種類(技術津貼/夜班津貼/通訊津貼)？"
      },
      {
        "category": "[G]  薪酬管理  Compensation Management",
        "code": "G8",
        "dimension": "薪酬管理",
        "ability": "【新】調薪/獎金/獎懲決策流程整合設計",
        "levels": {
          "0": "無",
          "1": "了解調薪/獎金/獎懲三者連結邏輯",
          "2": "能設計三者決策流程連結(績效評核→調薪建議→獎金計算→獎懲記錄)",
          "3": "建立薪酬獎懲整合政策+決策流程SOP+管理層報告模板"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L5A必備(三者連結邏輯+決策流程設計)｜L5B主導(薪酬獎懲整合政策)｜L6A主導(決策流程SOP建立)",
        "questions": "騏宏績效評核結果如何同時驅動調薪+年終獎金+獎懲記錄？三者決策時程如何安排？"
      },
      {
        "category": "[H]  福利管理  Benefits Management",
        "code": "H1",
        "dimension": "福利管理",
        "ability": "法定福利管理 (勞保/健保/勞退/職災)",
        "levels": {
          "0": "無",
          "1": "了解法定福利",
          "2": "執行勞保/健保/勞退申報+確保合規",
          "3": "建立法定福利管理SOP+勞動檢查應對"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A必備(法定福利申報)｜L5A熟練(合規+勞動檢查)｜L6A主導(福利管理SOP)",
        "questions": "勞退6%雇主提撥如何計算？勞動檢查時HR需準備哪些文件？"
      },
      {
        "category": "[H]  福利管理  Benefits Management",
        "code": "H2",
        "dimension": "福利管理",
        "ability": "彈性福利設計與員工服務方案",
        "levels": {
          "0": "無",
          "1": "了解彈性福利概念",
          "2": "設計彈性福利+員工關懷活動+EAP",
          "3": "建立福利制度+員工滿意度提升案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L4B認知(彈性福利)｜L5A必備(福利設計+滿意度追蹤)｜L6A主導(福利政策)",
        "questions": "如何設計符合騏宏製造業員工需求的彈性福利？員工滿意度調查如何設計？"
      },
      {
        "category": "[H]  福利管理  Benefits Management",
        "code": "H3",
        "dimension": "福利管理",
        "ability": "職工福利委員會運作與節慶福利",
        "levels": {
          "0": "無",
          "1": "了解職福會設立規範",
          "2": "協助職福會運作+節慶福利申請+支出管控",
          "3": "主導職福會章程+法令遵循+職福金管理"
        },
        "importance": 3,
        "weight": "6",
        "target_level": "L4A必備(職福會基礎)｜L5A熟練(職福金管理)｜L6A主導(職福會章程)",
        "questions": "職福會提撥比例如何計算？職福金可用於哪些用途？"
      },
      {
        "category": "[H]  福利管理  Benefits Management",
        "code": "H4★",
        "dimension": "福利管理",
        "ability": "安全衛生與職業健康管理",
        "levels": {
          "0": "0=無；1=了解職安法要求；2=執行工廠安全衛生+危害識別+安衛教育訓練；3=建立職安管理體系+無職災案例",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4A認知｜L5A必備(安衛管理+教育訓練)｜L6A主導(職安管理體系)",
        "questions": "SMT站使用錫膏/焊料的職業健康管理如何設計？職安自主管理如何推動？"
      },
      {
        "category": "[H]  福利管理  Benefits Management",
        "code": "H5",
        "dimension": "福利管理",
        "ability": "員工出差及旅費報支管理（CMP-001-105）",
        "levels": {
          "0": "無",
          "1": "了解出差旅費報支規範(出差申請/日支費率/交通補助)",
          "2": "能執行出差管理作業+審核旅費報支憑證+確保財務合規",
          "3": "建立出差及旅費管理辦法+數位化電子簽核流程+差旅成本分析"
        },
        "importance": 3,
        "weight": "6",
        "target_level": "L4A必備(出差旅費報支作業)｜L4B必備(差旅管理辦法設計)｜L5A主導(電子簽核流程+差旅成本分析)",
        "questions": "騏宏業務/研發人員出差美國客戶拜訪的旅費報支標準如何設計？釘釘OA審批流如何設定出差申請與費用報銷流程？"
      },
      {
        "category": "[H]  福利管理  Benefits Management",
        "code": "H6★",
        "dimension": "福利管理",
        "ability": "員工住(退)宿管理辦法設計（CMP-001-114）",
        "levels": {
          "0": "0=無；1=了解員工宿舍管理規範(入住資格/管理規則/退宿程序)；2=能設計員工住宿管理辦法+執行入退宿管理+維護宿舍環境安全；3=建立住宿管理SOP+宿舍費用核算+外籍移工住宿合規管理",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L4A認知(住宿管理基礎)｜L4B必備(住宿管理辦法設計)｜L5A主導(外籍移工住宿合規+費用核算)",
        "questions": "騏宏越南移工住宿管理需符合哪些法令要求？員工宿舍費用如何在薪資扣抵並確保合法合規？退宿程序如何與離職作業整合？"
      },
      {
        "category": "[I]  訓練發展  Training & Development",
        "code": "I1",
        "dimension": "訓練發展",
        "ability": "訓練需求分析(TNA)與年度訓練計畫制定",
        "levels": {
          "0": "無",
          "1": "了解TNA方法",
          "2": "執行完整TNA(三層次)+制定年度計畫",
          "3": "建立TNA機制+訓練計畫與績效改善連結"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A必備(TNA基礎)｜L5A熟練(三層次TNA)｜L6A主導(TNA機制建立)",
        "questions": "如何為騏宏SMT作業員執行訓練需求分析？如何確保訓練投資方向正確？"
      },
      {
        "category": "[I]  訓練發展  Training & Development",
        "code": "I2",
        "dimension": "訓練發展",
        "ability": "訓練體系設計 (OJT/Off-JT/SD三系統)",
        "levels": {
          "0": "無",
          "1": "了解OJT/Off-JT/SD差異",
          "2": "設計完整訓練體系含三系統+階層別/功能別課程",
          "3": "建立公司訓練地圖+學習時數管理+IATF訓練體系認可"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L4B必備(訓練體系架構)｜L5A必備(訓練體系+IATF配合)｜L6A主導(訓練地圖建立)",
        "questions": "如何設計騏宏研發/生產/管理三職系訓練體系？IATF如何稽核訓練有效性？"
      },
      {
        "category": "[I]  訓練發展  Training & Development",
        "code": "I3",
        "dimension": "訓練發展",
        "ability": "內部講師培訓與OJT帶師資格認定",
        "levels": {
          "0": "無",
          "1": "了解內部講師培訓概念",
          "2": "設計OJT帶師訓練+認定資格+管理內部講師庫",
          "3": "建立內部講師制度SOP+課程品質提升案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L4B認知(OJT帶師認定)｜L5A必備(帶師訓練+內部講師管理)｜L6A主導(內部講師制度)",
        "questions": "SMT作業員OJT帶師資格如何認定？內部課程教材如何確保品質一致性？"
      },
      {
        "category": "[I]  訓練發展  Training & Development",
        "code": "I4",
        "dimension": "訓練發展",
        "ability": "員工發展計畫與潛力人才培育",
        "levels": {
          "0": "無",
          "1": "了解IDP概念",
          "2": "協助員工設計IDP+追蹤發展+連結訓練資源",
          "3": "建立人才發展機制+High-Po培育計畫"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L5A必備(IDP設計+追蹤)｜L5B主導(High-Po計畫)｜L6A主導(人才發展機制)",
        "questions": "如何識別騏宏的高潛力人才？IDP如何與訓練計畫和繼任計畫連結？"
      },
      {
        "category": "[I]  訓練發展  Training & Development",
        "code": "I5",
        "dimension": "訓練發展",
        "ability": "前程路徑設計與升遷制度管理",
        "levels": {
          "0": "無",
          "1": "了解職涯路徑概念",
          "2": "設計職涯晉升路徑+升遷標準+晉升委員會管理",
          "3": "建立升遷制度SOP+前程路徑地圖"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L5A必備(職涯路徑+升遷標準)｜L5B主導(晉升委員會)｜L6A主導(升遷制度SOP)",
        "questions": "如何設計研發工程師L3A→L7的職涯路徑地圖？晉升委員會如何確保公平性？"
      },
      {
        "category": "[I]  訓練發展  Training & Development",
        "code": "I6★",
        "dimension": "訓練發展",
        "ability": "訓練效果評估 (Kirkpatrick四層次)",
        "levels": {
          "0": "0=無；1=了解Kirkpatrick四層次；2=設計訓練評估問卷+行為改變追蹤；3=建立訓練ROI計算機制+IATF有效性驗證",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L5A建議(訓練評估)｜L5B必備(訓練ROI計算)｜L6A主導(IATF有效性認可)",
        "questions": "Kirkpatrick Level 3如何評估SMT訓練行為改變？訓練ROI如何計算？"
      },
      {
        "category": "[I]  訓練發展  Training & Development",
        "code": "I7",
        "dimension": "訓練發展",
        "ability": "【新】領導與管理發展訓練(LMDP)設計與執行",
        "levels": {
          "0": "無",
          "1": "了解領導力發展訓練(LMDP)架構",
          "2": "能設計主管領導力課程+執行管理發展計畫+追蹤主管能力提升",
          "3": "建立騏宏主管學院(LMDP)完整體系+有主管能力提升量化案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L5A必備(主管領導力課程設計)｜L5B主導(LMDP計畫執行)｜L6A主導(主管學院體系建立)",
        "questions": "如何為騏宏一線主管設計領導力發展課程？LMDP如何連結職能評估結果進行個性化發展？"
      },
      {
        "category": "[I]  訓練發展  Training & Development",
        "code": "I8",
        "dimension": "訓練發展",
        "ability": "【新】特定技能認證制度規劃與管理",
        "levels": {
          "0": "無",
          "1": "了解特定技能認證(特定崗位資格認定)概念",
          "2": "能規劃各職類技能認證標準+建立認證考核機制+連結晉升路徑",
          "3": "建立全公司特定技能認證體系+有技能認證提升產品品質案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L5A必備(技能認證標準+考核機制)｜L5B主導(技能認證體系建立)｜L6A主導(與晉升連結+品質連結)",
        "questions": "騏宏SMT作業員哪些技能需要認證？技能認證等級如何設計並連結到薪酬晉升？"
      },
      {
        "category": "[J]  員工關係  Employee Relations",
        "code": "J1",
        "dimension": "員工關係",
        "ability": "勞動法令遵循管理 (勞基法/性騷擾防治/個資法)",
        "levels": {
          "0": "無",
          "1": "了解主要勞動法令",
          "2": "應用勞基法/性騷擾/個資法處理HR事務",
          "3": "建立法令遵循清單+稽查應對"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A必備(勞動法令應用)｜L5A熟練(法令遵循清單)｜L6A主導(法令遵循機制)",
        "questions": "勞基法對工時/加班如何適用於研發工程師？性騷擾申訴程序如何設計？"
      },
      {
        "category": "[J]  員工關係  Employee Relations",
        "code": "J2",
        "dimension": "員工關係",
        "ability": "勞資關係管理與勞資會議運作",
        "levels": {
          "0": "無",
          "1": "了解勞資關係管理",
          "2": "主持勞資會議+處理員工申訴+溝通勞資議題",
          "3": "建立勞資會議SOP+預防勞資爭議機制"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L4B認知(勞資會議)｜L5A必備(勞資會議主持)｜L6A主導(勞資關係管理)",
        "questions": "騏宏勞資會議議程如何設計？員工申訴如何處理確保程序公平？"
      },
      {
        "category": "[J]  員工關係  Employee Relations",
        "code": "J3",
        "dimension": "員工關係",
        "ability": "工作環境管理與5S/員工溝通",
        "levels": {
          "0": "無",
          "1": "了解工作環境管理",
          "2": "執行工廠5S查核+員工意見調查+員工溝通活動",
          "3": "建立員工溝通機制+員工滿意度改善案例"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4A必備(5S+員工溝通)｜L5A熟練(意見調查+滿意度追蹤)｜L6A主導(員工溝通機制)",
        "questions": "如何設計騏宏年度員工意見調查？調查結果如何轉化為具體改善？"
      },
      {
        "category": "[J]  員工關係  Employee Relations",
        "code": "J4",
        "dimension": "員工關係",
        "ability": "勞資爭議預防與調解",
        "levels": {
          "0": "無",
          "1": "了解勞資爭議處理",
          "2": "處理員工申訴+預防升級+協助調解",
          "3": "建立勞資爭議預防SOP+成功調解案例"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L5A必備(勞資爭議處理)｜L5B主導(調解+預防SOP)｜L6A主導(零爭議機制)",
        "questions": "員工不服績效評核如何處理才不引發爭議？勞動局調解前如何準備？"
      },
      {
        "category": "[J]  員工關係  Employee Relations",
        "code": "J5★",
        "dimension": "員工關係",
        "ability": "員工協助方案(EAP)設計與心理健康管理",
        "levels": {
          "0": "0=無；1=了解EAP概念；2=規劃EAP+推廣員工使用；3=建立EAP制度+心理健康指標改善",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L5A加分(EAP方案)｜L5B建議(EAP制度)｜L6A主導(心理健康管理)",
        "questions": "製造業員工常見壓力有哪些？如何推動員工主動使用EAP？"
      },
      {
        "category": "[J]  員工關係  Employee Relations",
        "code": "J6",
        "dimension": "員工關係",
        "ability": "員工出勤及給假制度管理（CMP-001-103/104）",
        "levels": {
          "0": "無",
          "1": "了解勞基法出勤/假別規定(特休/病假/事假/婚假/喪假/產假/陪產假)",
          "2": "熟練出勤制度設計+各類假別申請作業+連結鼎新ERP/釘釘考勤系統確保合規",
          "3": "建立出勤管理辦法+給假管理辦法+異常考勤處理SOP+勞動檢查應對"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4A必備(假別規定+出勤作業)｜L5A必備(出勤/給假辦法設計+考勤系統整合)｜L6A主導(出勤SOP+勞動檢查應對)",
        "questions": "騏宏SMT雙班制如何設計彈性出勤管理辦法？越南移工特休假如何依勞基法計算？釘釘考勤系統如何設定各類假別申請審批流確保帳務一致？"
      },
      {
        "category": "[K]  離職管理與留才對策  Separation & Retention",
        "code": "K1",
        "dimension": "離職管理",
        "ability": "離職管理流程 (辦理程序/資產繳回/交接管理)",
        "levels": {
          "0": "無",
          "1": "了解離職程序",
          "2": "執行完整離職程序+工作交接+離職面談",
          "3": "建立離職管理SOP+知識保留機制"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L4A必備(離職程序)｜L5A熟練(離職數據+知識保留)｜L6A主導(離職管理SOP)",
        "questions": "研發工程師離職時技術知識如何保留？離職交接如何確保品質不受影響？"
      },
      {
        "category": "[K]  離職管理與留才對策  Separation & Retention",
        "code": "K2",
        "dimension": "留才對策",
        "ability": "留才分析與留才方案設計 (薪酬/非薪酬留才)",
        "levels": {
          "0": "無",
          "1": "了解留才工具",
          "2": "分析離職原因+設計針對性留才方案+追蹤效果",
          "3": "建立留才儀表板+關鍵人才留任率提升案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L5A必備(離職原因+留才方案)｜L5B主導(留才儀表板)｜L6A主導(留才策略)",
        "questions": "騏宏研發工程師流失風險最高的原因是什麼？如何設計有效的非薪酬留才措施？"
      },
      {
        "category": "[K]  離職管理與留才對策  Separation & Retention",
        "code": "K3★",
        "dimension": "留才對策",
        "ability": "關鍵人才識別與高潛力保留計畫",
        "levels": {
          "0": "0=無；1=了解關鍵人才定義；2=識別高價值/高風險員工+制定個性化留才計畫；3=建立Key Talent管理體系",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L5B建議(Key Talent識別)｜L6A必備(留才計畫)｜L6B主導(Key Talent管理)",
        "questions": "如何識別騏宏的不可或缺人才(Critical Talent)？個性化留才計畫如何設計？"
      },
      {
        "category": "[K]  離職管理與留才對策  Separation & Retention",
        "code": "K4",
        "dimension": "離職管理",
        "ability": "財務/特殊職位任免交接管理（CMP-001-108）",
        "levels": {
          "0": "無",
          "1": "了解特殊職位交接規範(財務/會計/出納/倉管)的嚴謹要求",
          "2": "能設計財務人員任免交接管理辦法+執行帳目盤點移交+連署確認流程",
          "3": "建立全職類交接管理SOP+財務/資管/高風險職位特別交接程序+有效降低交接糾紛"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4A必備(交接程序)｜L5A必備(財務特殊職位交接辦法設計)｜L6A主導(全職類交接SOP)",
        "questions": "騏宏財務人員離職時帳目移交需哪些確認步驟？倉管人員離職盤點如何與鼎新ERP帳物核對確保不漏？哪些職位需要雙人交接見證？"
      },
      {
        "category": "[L]  🆕 人資系統與數位工具  HRIS & HR Digital Tools（鼎新ERP / 釘釘 / 104 eHRMS / 104 eRecruitor）",
        "code": "L1",
        "dimension": "鼎新ERP人資",
        "ability": "鼎新ERP人資模組操作 (人事/考勤/薪資模組)",
        "levels": {
          "0": "未用",
          "1": "基礎操作",
          "2": "熟練人事/考勤/薪資模組+HR報表",
          "3": "設定ERP人資參數+指導他人"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L3B起認知(ERP基礎)｜L4A必備(三模組熟練)｜L5A主導(參數設定+指導)",
        "questions": "鼎新ERP如何執行月底薪資計算？考勤異常如何連結薪資？"
      },
      {
        "category": "[L]  🆕 人資系統與數位工具  HRIS & HR Digital Tools（鼎新ERP / 釘釘 / 104 eHRMS / 104 eRecruitor）",
        "code": "L2",
        "dimension": "釘釘HR系統",
        "ability": "釘釘(DingTalk)人資功能操作 (考勤/審批/Smart HR)",
        "levels": {
          "0": "未用",
          "1": "基礎操作",
          "2": "熟練釘釘Smart HR+審批流設定+HR表單",
          "3": "建立釘釘HR流程SOP+AI表單+自動化審批優化"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L3B起必備(釘釘考勤)｜L4A必備(釘釘Smart HR全模組)｜L5A主導(審批流+AI表單)",
        "questions": "如何在釘釘設定SMT雙班制彈性考勤？假別申請審批流如何設計？"
      },
      {
        "category": "[L]  🆕 人資系統與數位工具  HRIS & HR Digital Tools（鼎新ERP / 釘釘 / 104 eHRMS / 104 eRecruitor）",
        "code": "L3",
        "dimension": "HRIS分析",
        "ability": "HR數據分析與人力儀表板設計",
        "levels": {
          "0": "無",
          "1": "基礎Excel人事報表",
          "2": "熟練Excel PIVOT製作人力儀表板+離職率/薪資分析",
          "3": "建立自動化HR報表系統+AI輔助HR分析"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L4A必備(Excel人力報表)｜L5A必備(人力儀表板)｜L6A主導(自動化HR報表)",
        "questions": "如何設計騏宏月度人力儀表板？哪些HR KPI應納入管理層報告？"
      },
      {
        "category": "[L]  🆕 人資系統與數位工具  HRIS & HR Digital Tools（鼎新ERP / 釘釘 / 104 eHRMS / 104 eRecruitor）",
        "code": "L4★",
        "dimension": "AI人資工具",
        "ability": "AI人資工具應用 (Claude/n8n/釘釘Agent OS)",
        "levels": {
          "0": "0=無；1=基礎使用AI生成HR文件；2=熟練Claude生成JD/教材+釘釘Agent自動化HR流程；3=建立AI-HR工作流程+效率量化提升",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4A建議(AI工具)｜L5A必備(Claude+釘釘Agent)｜L6A主導(AI-HR流程)",
        "questions": "如何用Claude自動生成騏宏JD初稿？n8n如何串接釘釘+鼎新ERP實現入職自動化？"
      },
      {
        "category": "[L]  🆕 人資系統與數位工具  HRIS & HR Digital Tools（鼎新ERP / 釘釘 / 104 eHRMS / 104 eRecruitor）",
        "code": "L5",
        "dimension": "104 eHRMS",
        "ability": "104 eHRMS人力資源管理系統操作（人事管理/薪資管理/Work Flow電子簽核/教育訓練系統/績效管理系統）",
        "levels": {
          "0": "0=未用；1=基礎操作人事+薪資基本模組；2=熟練3大模組(基本模組+人資自助服務Portal員工入口+Work Flow電子表單簽核+加值模組教育訓練/績效系統)；3=主導104 eHRMS系統建置設定+訓練記錄IATF16949合規管理+系統推廣教育訓練",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4A認知(基本模組)｜L4B必備(3大模組熟練+Work Flow設定)｜L5A主導(系統建置+IATF訓練記錄合規)",
        "questions": "104 eHRMS教育訓練模組如何管理IATF16949訓練記錄7年保存要求？Work Flow電子表單如何設定請假/加班/採購審批流？"
      },
      {
        "category": "[L]  🆕 人資系統與數位工具  HRIS & HR Digital Tools（鼎新ERP / 釘釘 / 104 eHRMS / 104 eRecruitor）",
        "code": "L6",
        "dimension": "104招募系統",
        "ability": "104 eRecruitor招募管理系統操作（職務管理/甄選流程/面試管理/測評銀行/統計報表/企業人才庫）",
        "levels": {
          "0": "0=未用；1=基礎操作招募廣告發佈+應徵者追蹤；2=熟練全模組含職務管理/甄選流程/面試管理/測評銀行+7張招募數據報表分析；3=建立企業招募品牌專頁+多渠道整合(104/校園/內推)+招募效率KPI儀表板+人才庫定期維護機制",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4A必備(基礎招募操作)｜L5A熟練(全模組+渠道成效分析)｜L6A主導(招募品牌+效率KPI+人才庫體系)",
        "questions": "如何用104 eRecruitor管理騏宏全年招募數據分析？測評銀行如何應用到研發工程師甄選+職能面試整合？"
      },
      {
        "category": "[L]  🆕 人資系統與數位工具  HRIS & HR Digital Tools（鼎新ERP / 釘釘 / 104 eHRMS / 104 eRecruitor）",
        "code": "L7★",
        "dimension": "104職能測評",
        "ability": "104職能模型工具應用（Q competency多元測評/CBIM職能行為面試/360系統評鑑/人力盤點工具）",
        "levels": {
          "0": "0=未用；1=了解Q competency測評工具種類及冰山模型(外顯:技能/知識；內隱:自我概念/特質/動機)；2=解讀Q competency職能報告+應用於招募甄選+設計360評鑑問卷+執行工作盤點+員工能力盤點；3=主導騏宏職能常模建置+測評效度驗證+人力盤點整合落地+各職位人才Profile建立",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L5A建議(Q competency解讀)｜L5B必備(Q competency+360評鑑設計)｜L6A主導(職能常模建置+人力盤點整合落地)",
        "questions": "104 Q competency如何建立騏宏研發工程師職能常模？冰山模型外顯/內隱特質如何在面試中評鑑？360系統評鑑如何避免評分通膨？"
      },
      {
        "category": "[M]  IATF16949/AS9100人資要求  Quality System HR Requirements",
        "code": "M1",
        "dimension": "IATF人資",
        "ability": "IATF16949:2016 §7.1.2~§7.2人員能力要求",
        "levels": {
          "0": "無",
          "1": "了解IATF人員能力條款",
          "2": "設計訓練體系+人員資格鑑定+維護訓練記錄",
          "3": "主導IATF人資稽核準備+零不符合案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A必備(IATF條款)｜L5A必備(訓練體系+資格鑑定)｜L6A主導(IATF人資稽核)",
        "questions": "IATF16949 §7.2能力要求需要哪些記錄文件？人員資格鑑定SOP如何設計？"
      },
      {
        "category": "[M]  IATF16949/AS9100人資要求  Quality System HR Requirements",
        "code": "M2",
        "dimension": "IATF人資",
        "ability": "人員資格鑑定程序與教育訓練記錄管理",
        "levels": {
          "0": "無",
          "1": "了解資格鑑定概念",
          "2": "建立各職位資格鑑定標準+管理訓練記錄+IATF要求",
          "3": "數位化訓練記錄系統+客戶稽核通過"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4B必備(資格鑑定標準)｜L5A必備(訓練記錄管理)｜L6A主導(數位化訓練記錄)",
        "questions": "SMT關鍵站點作業員資格鑑定標準如何設計？訓練記錄在釘釘如何數位化管理？"
      },
      {
        "category": "[M]  IATF16949/AS9100人資要求  Quality System HR Requirements",
        "code": "M3★",
        "dimension": "IATF人資",
        "ability": "AS9100航太品質系統人資要求",
        "levels": {
          "0": "0=無；1=了解AS9100 §7.1.2~§7.3要求；2=確保AS9100人資面合規；3=主導AS9100人資稽核準備",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L5A加分(AS9100人資)｜L6A建議(AS9100稽核準備)｜主導(航太人資合規)",
        "questions": "AS9100 §7.3關於人員認知(Awareness)如何落實？與IATF16949有何差異？"
      },
      {
        "category": "[N]  阿米巴損益核算  Amoeba P&L Literacy",
        "code": "N1",
        "dimension": "阿米巴核算",
        "ability": "阿米巴時間附加值認識與計算",
        "levels": {
          "0": "不知道",
          "1": "知道公式=(銷售額-外部費用)÷工時",
          "2": "計算HR部門日/月時間附加值+分析趨勢",
          "3": "協助建立全公司HR人力成本核算規則"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4A起認知(時間附加值公式)｜L5A必備(HR部門時間附加值計算)｜L6A主導(全公司HR核算規則)",
        "questions": "HR部門時間附加值如何定義「銷售額分攤」？外部費用包含哪些？"
      },
      {
        "category": "[N]  阿米巴損益核算  Amoeba P&L Literacy",
        "code": "N2",
        "dimension": "阿米巴核算",
        "ability": "HR每日損益表填寫與異常分析",
        "levels": {
          "0": "無",
          "1": "可填寫損益表格",
          "2": "分析HR部門損益異常+提出改善行動",
          "3": "建立HR阿米巴核算體系+損益改善實績"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B必備(損益表填寫)｜L5A必備(異常分析+改善行動)｜L6A主導(HR核算體系)",
        "questions": "招募效率如何反映在阿米巴損益？訓練成本如何計入外部費用？"
      },
      {
        "category": "[N]  阿米巴損益核算  Amoeba P&L Literacy",
        "code": "N3★",
        "dimension": "阿米巴核算",
        "ability": "HR長(L6A+)阿米巴巴長責任",
        "levels": {
          "0": "0=無；1=知道巴長角色；2=主持阿米巴月度會議；3=帶領HR部門達成月度時間附加值",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "6",
        "target_level": "L6A必備(巴長角色)｜L6B主導(帶領HR部達成目標)｜L7整合多巴",
        "questions": "HR部門阿米巴月度目標如何設定？如何激勵HR團隊提升時間附加值？"
      },
      {
        "category": "[O]  【新】晉升管理  Promotion Management",
        "code": "O1",
        "dimension": "晉升管理",
        "ability": "晉升標準設計與晉升委員會管理",
        "levels": {
          "0": "無",
          "1": "了解晉升標準設計要素",
          "2": "能設計各職等晉升標準+建立晉升委員會+管理晉升申請審核流程",
          "3": "建立全公司晉升管理制度SOP+晉升委員會章程+有晉升公平性改善案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L5A必備(晉升標準設計+委員會管理)｜L5B主導(晉升制度SOP)｜L6A主導(晉升委員會章程建立)",
        "questions": "如何設計騏宏L4→L5的晉升標準？晉升委員會成員如何組成確保公平性？"
      },
      {
        "category": "[O]  【新】晉升管理  Promotion Management",
        "code": "O2",
        "dimension": "晉升管理",
        "ability": "特定技能認證與晉升路徑設計整合",
        "levels": {
          "0": "無",
          "1": "了解技能認證與晉升連結概念",
          "2": "能將特定技能認證結果連結職等晉升路徑+設計技能認證晉升加分制度",
          "3": "建立技能認證-晉升連結SOP+有技能認證促進晉升品質案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L5A必備(技能認證與晉升連結設計)｜L5B主導(技能認證晉升加分制度)｜L6A主導(技能認證-晉升SOP)",
        "questions": "騏宏SMT作業員特定技能認證如何連結到薪資晉升？焊接技能認定如何標準化？"
      },
      {
        "category": "[O]  【新】晉升管理  Promotion Management",
        "code": "O3",
        "dimension": "晉升管理",
        "ability": "職位輪調(調係)制度設計與執行",
        "levels": {
          "0": "無",
          "1": "了解職位輪調(Job Rotation)制度設計概念",
          "2": "能設計各職類輪調計畫+建立輪調標準+管理輪調過渡期績效",
          "3": "建立職位輪調制度SOP+有輪調促進人才發展+跨部門協作改善案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L5A必備(輪調計畫設計+標準建立)｜L5B主導(輪調制度SOP)｜L6A主導(輪調人才發展機制)",
        "questions": "如何設計騏宏研發→生技維修→品管的輪調計畫？輪調期間績效如何評估？"
      },
      {
        "category": "[O]  【新】晉升管理  Promotion Management",
        "code": "O4★",
        "dimension": "晉升管理",
        "ability": "儲備幹部培育計畫設計 (Management Trainee/分公司儲備)",
        "levels": {
          "0": "0=無；1=了解MT儲備幹部計畫概念；2=能設計MT招募/訓練/輪調/畢業認定計畫；3=建立MT培育SOP+有MT成功晉升主管案例",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L5B建議(MT計畫設計)｜L6A必備(MT培育SOP)｜L6B主導(MT計畫主導+儲備成效追蹤)",
        "questions": "騏宏如何設計儲備主管(MT)培育計畫？MT輪調結束後如何評估並正式任用？"
      },
      {
        "category": "[P]  【新】組織溝通與知識管理  Org Communication & Knowledge Mgmt",
        "code": "P1",
        "dimension": "組織溝通",
        "ability": "內部溝通平台管理 (釘釘/Google Workspace/訓練資訊平台)",
        "levels": {
          "0": "無",
          "1": "了解內部溝通平台種類",
          "2": "能設計並管理公司內部溝通平台+訓練資訊揭露機制+確保訊息到達率",
          "3": "建立組織溝通管道體系SOP+有溝通效率改善量化案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4B必備(溝通平台管理)｜L5A必備(訓練資訊揭露+訊息到達率管控)｜L6A主導(溝通管道體系SOP)",
        "questions": "如何在釘釘建立騏宏各部門訊息揭露機制？訓練資訊如何確保所有員工都能查閱？"
      },
      {
        "category": "[P]  【新】組織溝通與知識管理  Org Communication & Knowledge Mgmt",
        "code": "P2",
        "dimension": "知識管理",
        "ability": "訓練資訊平台架構設計與管理",
        "levels": {
          "0": "無",
          "1": "了解訓練資訊平台架構(課程庫/訓練紀錄/證照管理)",
          "2": "能設計訓練資訊平台架構+建立課程庫+管理訓練學習紀錄",
          "3": "建立全公司訓練知識平台+IATF訓練記錄數位化+有知識平台促進訓練效果案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4B必備(訓練資訊平台操作)｜L5A必備(平台架構設計+課程庫建立)｜L6A主導(全公司訓練知識平台)",
        "questions": "騏宏訓練資訊平台需包含哪些功能模組？如何確保訓練記錄符合IATF7年保存要求？"
      },
      {
        "category": "[P]  【新】組織溝通與知識管理  Org Communication & Knowledge Mgmt",
        "code": "P3",
        "dimension": "知識管理",
        "ability": "知識管理(KM)體系設計與推動",
        "levels": {
          "0": "無",
          "1": "了解知識管理(KM)基本概念(顯性/隱性知識)",
          "2": "能設計KM體系+建立知識庫+推動關鍵人員知識文件化",
          "3": "建立全公司KM制度+有知識保留避免人員離職知識流失案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L5A必備(KM體系設計+知識庫建立)｜L5B主導(關鍵知識文件化推動)｜L6A主導(全公司KM制度)",
        "questions": "如何讓騏宏資深工程師的隱性知識轉化為可傳承的顯性文件？KM體系如何連結IATF要求？"
      },
      {
        "category": "[P]  【新】組織溝通與知識管理  Org Communication & Knowledge Mgmt",
        "code": "P4★",
        "dimension": "組織溝通",
        "ability": "單位資訊揭露與組織透明化機制",
        "levels": {
          "0": "0=無；1=了解組織透明化重要性；2=能設計各部門資訊揭露標準+建立透明化溝通機制；3=建立組織資訊揭露制度+有員工信任度改善案例",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L5A加分(資訊揭露設計)｜L5B建議(透明化機制)｜L6A主導(組織資訊揭露制度)",
        "questions": "騏宏各部門KPI應如何揭露給員工？組織透明化如何提升員工主人翁意識？"
      },
      {
        "category": "[Q]  【新】人員管理  Personnel Management",
        "code": "Q1",
        "dimension": "人員管理",
        "ability": "獎懲制度設計與合理化追蹤",
        "levels": {
          "0": "無",
          "1": "了解獎懲制度基本要素",
          "2": "能設計獎懲辦法+建立獎懲記錄追蹤系統+確保獎懲合理化",
          "3": "建立獎懲制度SOP+有獎懲合理化提升組織紀律案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4B必備(獎懲辦法設計+記錄追蹤)｜L5A必備(獎懲合理化機制建立)｜L6A主導(獎懲制度SOP)",
        "questions": "騏宏獎懲辦法應包含哪些條款？獎懲委員會如何設計確保公平一致？"
      },
      {
        "category": "[Q]  【新】人員管理  Personnel Management",
        "code": "Q2",
        "dimension": "人員管理",
        "ability": "主管教導/輔導體系設計 (Coaching/Mentoring)",
        "levels": {
          "0": "無",
          "1": "了解主管教導/輔導(Coaching/Mentoring)差異",
          "2": "能設計主管教導技巧訓練+建立輔導體系+追蹤教導成效",
          "3": "建立全公司主管教導文化+有教導轉化員工績效改善案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L5A必備(主管教導訓練設計+輔導體系)｜L5B主導(全公司教導文化建立)｜L6A主導(教導SOP+成效追蹤)",
        "questions": "如何訓練騏宏一線主管掌握OJT教導技巧？Coaching和Mentoring如何在製造業落地？"
      },
      {
        "category": "[Q]  【新】人員管理  Personnel Management",
        "code": "Q3",
        "dimension": "人員管理",
        "ability": "員工申訴制度設計與獨立調查執行",
        "levels": {
          "0": "無",
          "1": "了解員工申訴制度設計要點",
          "2": "能設計申訴管道+建立獨立調查程序+確保申訴人保護",
          "3": "建立申訴制度SOP+有成功調解申訴+提升員工信任度案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L5A必備(申訴管道設計+調查程序)｜L5B主導(申訴制度SOP)｜L6A主導(申訴獨立調查機制)",
        "questions": "騏宏員工申訴管道應如何設計(匿名/公開)？HR在申訴調查中的中立角色如何維持？"
      },
      {
        "category": "[Q]  【新】人員管理  Personnel Management",
        "code": "Q4★",
        "dimension": "人員管理",
        "ability": "人員紀律管理與組織規範執行",
        "levels": {
          "0": "0=無；1=了解人員紀律管理概念；2=能處理違紀事件+執行紀律程序+確保法律合規；3=建立紀律管理SOP+有紀律管理強化組織文化案例",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L4B認知(紀律管理)｜L5A必備(違紀事件處理)｜L6A主導(紀律管理SOP)",
        "questions": "員工違反工廠5S規定如何進行紀律處分？解雇前需完成哪些法定程序？"
      },
      {
        "category": "[R]  【新】組織發展與人才庫  Organization Development & Talent Pool",
        "code": "R1",
        "dimension": "組織發展",
        "ability": "OD組織發展介入方法論 (文化診斷/變革管理)",
        "levels": {
          "0": "無",
          "1": "了解OD組織發展方法論(文化診斷/團隊發展/變革管理)",
          "2": "能執行組織文化診斷+設計OD介入方案+推動組織變革",
          "3": "主導全公司OD計畫+有組織效能量化提升案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L5B必備(OD介入方案設計)｜L6A必備(組織文化診斷+變革管理)｜L6B主導(全公司OD計畫)",
        "questions": "騏宏如何診斷組織文化現狀？如何運用104 Vmatch組織文化價值觀管理工具(社會化-核心文化-組織設計-績效HR四維度)提升員工與騏宏核心價值匹配度？如何設計符合IATF16949品質文化的OD介入方案？"
      },
      {
        "category": "[R]  【新】組織發展與人才庫  Organization Development & Talent Pool",
        "code": "R2",
        "dimension": "組織發展",
        "ability": "人才庫建立/維護與儲備主管培育 (含業務/保全主管儲備)",
        "levels": {
          "0": "無",
          "1": "了解人才庫建立與維護概念",
          "2": "能分職類建立人才庫+定期維護候選人資料+規劃儲備主管培育路徑",
          "3": "建立全公司人才庫管理制度+有儲備幹部成功接班案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L5A必備(分職類人才庫+候選人維護)｜L5B主導(儲備主管培育路徑)｜L6A主導(人才庫管理制度)",
        "questions": "如何分別建立研發/生產/業務三類人才庫？儲備主管(分公司經理儲備)培育計畫如何設計？"
      },
      {
        "category": "[R]  【新】組織發展與人才庫  Organization Development & Talent Pool",
        "code": "R3",
        "dimension": "組織發展",
        "ability": "員工教育獎助學金/社團補助/員工成長基金管理",
        "levels": {
          "0": "無",
          "1": "了解員工教育獎助學金制度概念",
          "2": "能設計獎助學金申請辦法+社團補助辦法+追蹤學習成效",
          "3": "建立員工成長基金制度SOP+有獎助學金促進員工成長量化案例"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4B必備(獎助學金申請辦法設計)｜L5A必備(社團補助+學習成效追蹤)｜L6A主導(員工成長基金制度)",
        "questions": "騏宏教育獎助學金辦法應包含哪些申請資格？如何確保受獎員工有效學習並回饋組織？"
      },
      {
        "category": "[R]  【新】組織發展與人才庫  Organization Development & Talent Pool",
        "code": "R4★",
        "dimension": "組織發展",
        "ability": "安全衛生管理整合與組織文化建構",
        "levels": {
          "0": "0=無；1=了解安全衛生管理與HR的協同關係；2=能協調廠務部門推動安全文化+整合安衛培訓到訓練體系；3=建立安衛文化指標+有安衛事故零達成案例",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4B認知(安衛與HR協同)｜L5A必備(安全文化推動+安衛培訓整合)｜L6A主導(安衛文化指標建立)",
        "questions": "如何將騏宏工廠安全衛生要求整合到新人入職訓練？安衛文化KPI如何設計追蹤？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z1",
        "dimension": "企業基本能力",
        "ability": "ISO/IATF文件讀寫能力 (程序書/HR SOP撰寫)",
        "levels": {
          "0": "無",
          "1": "可閱讀程序書",
          "2": "獨立撰寫HR SOP/WI",
          "3": "建立HR文件體系架構"
        },
        "importance": 5,
        "weight": "5",
        "target_level": "L4A必備(HR SOP)｜L5A主導(文件體系)｜L6A主導(跨部門HR文件)",
        "questions": "IATF下HR需建立哪些程序文件？人員資格鑑定程序書如何撰寫？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z2",
        "dimension": "企業基本能力",
        "ability": "跨部門協作溝通 (生產/研發/財務/業務HR整合)",
        "levels": {
          "0": "無",
          "1": "被動配合",
          "2": "主動協調推進跨部門HR決策",
          "3": "推動跨部門HR整合有量化成效"
        },
        "importance": 4,
        "weight": "4",
        "target_level": "L5A建議(主動協調)｜L6A必備(跨部門HR整合)｜L6B主導(機制建立)",
        "questions": "說明一次你協調解決生產部門人力需求與HR招募資源衝突的案例"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z3",
        "dimension": "企業基本能力",
        "ability": "英語HR文件能力 (IATF/客戶稽核英語應對)",
        "levels": {
          "0": "無",
          "1": "基礎英語閱讀",
          "2": "讀英語IATF條款+客戶稽核基礎英語",
          "3": "撰寫英語HR報告+流利應對外商稽核"
        },
        "importance": 3,
        "weight": "3",
        "target_level": "L5A建議(英語IATF)｜L6A必備(客戶稽核英語)｜L6B主導(英語HR報告)",
        "questions": "外商客戶稽核時HR如何用英語說明訓練體系？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z4",
        "dimension": "企業基本能力",
        "ability": "簡報製作與管理層報告 (HR Report/PowerPoint)",
        "levels": {
          "0": "無",
          "1": "基礎PowerPoint",
          "2": "製作HR月報/年報給管理層+數據視覺化",
          "3": "建立HR Report模板+董事會HR簡報案例"
        },
        "importance": 3,
        "weight": "3",
        "target_level": "L4B必備(HR月報)｜L5A熟練(管理層報告)｜L6A主導(董事會HR簡報)",
        "questions": "如何設計每月人力資源管理報告(HRMD)？哪些數據必須呈現給管理層？"
      }
    ],
    "salary_structure": [
      {
        "grade": "L3A",
        "title_zh": "助理人資專員",
        "title_en": "Asst. HR Specialist",
        "salary_min": "30000",
        "salary_mid": "33000",
        "salary_max": "37000",
        "requirements": "勞基法基礎、Excel操作、HR行政作業、鼎新ERP查詢、釘釘考勤基礎",
        "promotion": "HR行政執行、Excel操作、勞基法認識、OJT帶領",
        "amoeba": "執行者/學習者"
      },
      {
        "grade": "L3B",
        "title_zh": "助理人資專員(熟)",
        "title_en": "Asst. HR Specialist Sr.",
        "salary_min": "33000",
        "salary_mid": "36000",
        "salary_max": "41000",
        "requirements": "考勤管理、薪資計算基礎、招募協助、訓練行政、釘釘Smart HR熟練、獎懲記錄基礎",
        "promotion": "考勤/薪資/訓練行政、釘釘操作、獎懲記錄",
        "amoeba": "執行者/學習者"
      },
      {
        "grade": "L4A",
        "title_zh": "人資專員",
        "title_en": "HR Specialist",
        "salary_min": "38000",
        "salary_mid": "43000",
        "salary_max": "49000",
        "requirements": "招募完整作業(104 eRecruitor基礎操作)、薪資完整計算、TNA訓練需求分析、績效評核執行、鼎新ERP熟練、104 eHRMS基本模組認知、自評/面談制度執行",
        "promotion": "招募/薪資/訓練三模組、IATF人資條款、員工申訴基礎",
        "amoeba": "獨立執行者"
      },
      {
        "grade": "L4B",
        "title_zh": "人資專員(資)",
        "title_en": "Senior HR Specialist",
        "salary_min": "43000",
        "salary_mid": "49000",
        "salary_max": "57000",
        "requirements": "薪酬管理基礎、訓練體系設計、績效管理執行、任用限制政策、背景查驗程序、組織溝通平台管理、104 eHRMS三大模組熟練(含Work Flow)、104 eRecruitor全模組操作",
        "promotion": "薪酬基礎/訓練體系/績效評核主導/任用政策/溝通平台管理",
        "amoeba": "獨立執行者"
      },
      {
        "grade": "L5A",
        "title_zh": "資深人資專員",
        "title_en": "Senior HR Specialist II",
        "salary_min": "50000",
        "salary_mid": "58000",
        "salary_max": "68000",
        "requirements": "職能模型建立(Q competency常模建置)、組織設計、IATF訓練體系(104 eHRMS訓練記錄)、MBO設計、人力盤點(工作盤點+員工能力盤點)、績效指標推移分析、LMDP領導力訓練、技能認證制度、晉升標準設計、KM知識管理",
        "promotion": "職能+組織+IATF+MBO+人力盤點+晉升標準+KM體系",
        "amoeba": "Reserve Amoeba Leader"
      },
      {
        "grade": "L5B",
        "title_zh": "人資主任",
        "title_en": "HR Supervisor / Team Lead",
        "salary_min": "58000",
        "salary_mid": "66000",
        "salary_max": "76000",
        "requirements": "薪酬架構設計、留才方案、訓練ROI、HRBP運作、績效校準、職位分類體系、內部任用機制、調薪/獎懲整合、MT儲備幹部計畫、主管教導體系、104 Q competency+360評鑑設計",
        "promotion": "薪酬架構+留才+HRBP+1-2人管理+MT計畫+教導體系",
        "amoeba": "Reserve Amoeba Leader"
      },
      {
        "grade": "L6A",
        "title_zh": "人資課長",
        "title_en": "HR Manager / HRBP",
        "salary_min": "65000",
        "salary_mid": "76000",
        "salary_max": "92000",
        "requirements": "年度HR策略(使命/願景→HR政策轉化)、工作評價、勞動稽查代表、Amoeba巴長、IATF人資稽核主導、OD組織發展(Vmatch價值觀管理)、人才庫管理、申訴獨立調查、104 HR三層架構推動",
        "promotion": "HR策略主導+工作評價+稽查應對+Amoeba+5人以下HR團隊+OD介入",
        "amoeba": "L1 Amoeba巴長"
      },
      {
        "grade": "L6B",
        "title_zh": "資深人資主管",
        "title_en": "Senior HR Manager / HR Director",
        "salary_min": "76000",
        "salary_mid": "88000",
        "salary_max": "106000",
        "requirements": "集團HR整合、CHRO策略執行、高階獵才、HR數位化轉型、長期激勵設計、職位分類體系主導、組織文化建構",
        "promotion": "集團HR整合+CHRO策略+高階人才+HR數位化+LTI",
        "amoeba": "L1~L2 Amoeba Leader"
      },
      {
        "grade": "L7",
        "title_zh": "人資長(CHRO)",
        "title_en": "Chief Human Resources Officer",
        "salary_min": "90000",
        "salary_mid": "104000",
        "salary_max": "130000",
        "requirements": "公司人才戰略、董事會人資報告、薪酬委員會、上市前人資準備、組織文化建構、多事業群HR整合",
        "promotion": "人才戰略+董事會報告+薪酬委員會+文化建構",
        "amoeba": "L2 Amoeba Leader"
      }
    ]
  },
  {
    "job_name": "倉管職務",
    "raw_job_name": "倉管職務",
    "filename": "騏宏科技_倉管職務職能薪資結構表_v5_0_0.xlsx",
    "competencies": [],
    "salary_structure": [
      {
        "grade": "WH3A",
        "title_zh": "助理倉管員",
        "title_en": "Junior Warehouse Associate",
        "salary_min": "30000",
        "salary_mid": "33000",
        "salary_max": "36000",
        "requirements": "ERP基礎操作確認/OJT計畫制訂/釘釘掃碼測試",
        "promotion": "ERP基礎操作確認/OJT計畫制訂/釘釘掃碼測試",
        "amoeba": "執行者/學習者"
      },
      {
        "grade": "WH3B",
        "title_zh": "倉管員",
        "title_en": "Warehouse Associate",
        "salary_min": "33000",
        "salary_mid": "36500",
        "salary_max": "40000",
        "requirements": "收發料全流程操作測驗/FIFO執行情境題",
        "promotion": "收發料全流程操作測驗/FIFO執行情境題",
        "amoeba": "執行者/學習者"
      },
      {
        "grade": "WH4A",
        "title_zh": "倉管工程師",
        "title_en": "Warehouse Engineer",
        "salary_min": "37000",
        "salary_mid": "41500",
        "salary_max": "46000",
        "requirements": "批號追溯情境模擬/IQC配合/ERP帳務測試",
        "promotion": "批號追溯情境模擬/IQC配合/ERP帳務測試",
        "amoeba": "獨立執行者"
      },
      {
        "grade": "WH4B",
        "title_zh": "倉管工程師(資)",
        "title_en": "Warehouse Engineer II",
        "salary_min": "41000",
        "salary_mid": "46500",
        "salary_max": "52000",
        "requirements": "盤點作業實際演練/特採管理/出貨核對情境",
        "promotion": "盤點作業實際演練/特採管理/出貨核對情境",
        "amoeba": "獨立執行者"
      },
      {
        "grade": "WH5A",
        "title_zh": "資深倉管工程師",
        "title_en": "Senior Warehouse Engineer",
        "salary_min": "47000",
        "salary_mid": "53500",
        "salary_max": "60000",
        "requirements": "庫存準確率分析/呆料處置案例/KPI分析",
        "promotion": "庫存準確率分析/呆料處置案例/KPI分析",
        "amoeba": "Reserve Amoeba Leader"
      },
      {
        "grade": "WH5B",
        "title_zh": "倉管主任/Leader",
        "title_en": "Warehouse Leader",
        "salary_min": "55000",
        "salary_mid": "62500",
        "salary_max": "70000",
        "requirements": "Leader角色情境題/團隊KPI分解演練",
        "promotion": "Leader角色情境題/團隊KPI分解演練",
        "amoeba": "Reserve Amoeba Leader"
      },
      {
        "grade": "WH6A",
        "title_zh": "倉管主管/課長",
        "title_en": "Warehouse Manager",
        "salary_min": "62000",
        "salary_mid": "71000",
        "salary_max": "80000",
        "requirements": "IATF稽核應對/阿米巴成本計算/倉庫策略案例",
        "promotion": "IATF稽核應對/阿米巴成本計算/倉庫策略案例",
        "amoeba": "L1~L2 Amoeba Leader"
      },
      {
        "grade": "WH6B",
        "title_zh": "資深倉管主管",
        "title_en": "Senior Warehouse Manager",
        "salary_min": "68000",
        "salary_mid": "78000",
        "salary_max": "88000",
        "requirements": "BSC績效管理/數位化推動案例/跨部門協調",
        "promotion": "BSC績效管理/數位化推動案例/跨部門協調",
        "amoeba": "L1~L2 Amoeba Leader"
      },
      {
        "grade": "WH7",
        "title_zh": "倉管協理/副理",
        "title_en": "Warehouse Director",
        "salary_min": "78000",
        "salary_mid": "91500",
        "salary_max": "105000",
        "requirements": "董事會物流策略簡報演示",
        "promotion": "董事會物流策略簡報演示",
        "amoeba": "L1~L2 Amoeba Leader"
      }
    ]
  },
  {
    "job_name": "品管工程師",
    "raw_job_name": "品管工程師",
    "filename": "騏宏科技_品管工程師職能薪資結構表_v1_0.xlsx",
    "competencies": [
      {
        "category": "[A]  IQC進料檢驗  Incoming Quality Control",
        "code": "A1",
        "dimension": "IQC進料",
        "ability": "LED進料檢驗  (光電規格/外觀/包裝/批號/RoHS聲明)",
        "levels": {
          "0": "無",
          "1": "知道LED基本電氣規格(Vf/If/光通量)",
          "2": "獨立執行LED進料AQL抽樣+電氣量測+判讀報告",
          "3": "建立LED IQC允收標準SOP+培訓他人+主導供應商改善"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A必備(LED IQC獨立執行)｜L5A主導(允收標準SOP建立)｜L6A(供應商改善主導)",
        "questions": "LED進料Vf規格±0.1V如何設定AQL抽樣？Vf偏高批次如何處理？批號追溯如何操作？"
      },
      {
        "category": "[A]  IQC進料檢驗  Incoming Quality Control",
        "code": "A2",
        "dimension": "IQC進料",
        "ability": "PCB進料檢驗  (板厚/銅厚/阻抗/外觀/SolderMask/焊墊)",
        "levels": {
          "0": "無",
          "1": "知道PCB基本規格項目",
          "2": "獨立執行PCB IQC含厚度量測+外觀AQL+供應商CoC確認",
          "3": "建立PCB IQC規範+供應商CPK要求+不合格追蹤"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4A必備(PCB IQC獨立執行)｜L5A(規範建立)｜L6A(供應商CPK管控)",
        "questions": "PCB厚度1.6mm ±0.15mm如何設定量測點？阻抗測試報告如何判讀？"
      },
      {
        "category": "[A]  IQC進料檢驗  Incoming Quality Control",
        "code": "A3",
        "dimension": "IQC進料",
        "ability": "金屬/塑膠機構件進料檢驗  (尺寸/外觀/材質/陽極處理/噴塗)",
        "levels": {
          "0": "無",
          "1": "了解機構件基本外觀檢驗項目",
          "2": "獨立執行機構件AQL抽樣+關鍵尺寸量測+外觀判定",
          "3": "建立機構件IQC允收規範+制定量測計畫+供應商缺陷改善追蹤"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4A必備(機構件IQC獨立執行)｜L5A(IQC規範建立+量測計畫)｜L6A(供應商品質改善主導)",
        "questions": "鋁壓鑄燈殼外觀缺陷AQL如何設定？陽極氧化膜厚如何量測？縮孔/縮水如何判定允收？"
      },
      {
        "category": "[A]  IQC進料檢驗  Incoming Quality Control",
        "code": "A4",
        "dimension": "IQC進料",
        "ability": "矽橡膠/密封件進料檢驗  (硬度/外觀/壓縮永久變形)",
        "levels": {
          "0": "無",
          "1": "知道矽橡膠基本規格",
          "2": "獨立執行O-ring/gasket進料外觀+Shore A硬度量測+批次管理",
          "3": "建立密封件IQC規範+壓縮永久變形驗證計畫+失效模式知識庫"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4A必備(密封件IQC執行)｜L5A(驗證計畫建立)｜L6A(失效模式知識庫)",
        "questions": "O-ring進料Shore A硬度允收±5度合理嗎？壓縮永久變形超標如何評估影響防水性？"
      },
      {
        "category": "[A]  IQC進料檢驗  Incoming Quality Control",
        "code": "A5",
        "dimension": "IQC進料",
        "ability": "線材/連接器進料檢驗  (線徑/絕緣/端子電鍍/導通)",
        "levels": {
          "0": "無",
          "1": "知道線材基本規格(AWG/截面積/耐壓)",
          "2": "獨立執行線材進料外觀+導通測試+端子電鍍確認",
          "3": "建立線材連接器IQC規範+AQL計畫+供應商改善追蹤"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4A必備(線材IQC執行)｜L5A(規範建立)｜L6A(供應商品質管控)",
        "questions": "線材AWG20如何換算截面積？端子接觸電阻如何量測允收？鍍金vs鍍錫適用場景？"
      },
      {
        "category": "[A]  IQC進料檢驗  Incoming Quality Control",
        "code": "A6",
        "dimension": "IQC進料",
        "ability": "包裝材/標籤進料檢驗  (紙箱/泡棉/壓縮強度/尺寸/印刷)",
        "levels": {
          "0": "無",
          "1": "了解包材基本規格",
          "2": "獨立執行包材進料AQL抽樣+尺寸/強度確認+印刷清晰度",
          "3": "建立包材IQC規範+ISTA驗證需求+包材廠稽核計畫"
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L4A認知(包材基本IQC)｜L4B必備(獨立執行包材AQL)｜L5A(規範建立)",
        "questions": "警示燈出口包裝紙箱抗壓強度如何測試允收？泡棉厚度偏薄會影響ISTA振動跌落嗎？"
      },
      {
        "category": "[A]  IQC進料檢驗  Incoming Quality Control",
        "code": "A7",
        "dimension": "IQC進料",
        "ability": "螺絲螺帽/五金件進料檢驗  (規格/硬度/鍍層/扭力驗證)",
        "levels": {
          "0": "無",
          "1": "了解螺絲基本規格(M規格/強度等級)",
          "2": "獨立執行螺絲進料AQL+硬度/扭力驗證+鍍層外觀",
          "3": "建立五金件IQC規範+扭力允收標準制定"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4A必備(螺絲IQC執行)｜L5A(允收標準制定)｜L6A(供應商稽核+改善)",
        "questions": "M4×0.7螺絲B等級進料如何驗收？扭力計校正頻率如何設定？鍍層厚度如何量測？"
      },
      {
        "category": "[A]  IQC進料檢驗  Incoming Quality Control",
        "code": "A8",
        "dimension": "IQC進料",
        "ability": "PCBA/電子料進料檢驗  (AQL/焊點外觀/SMT進料確認)",
        "levels": {
          "0": "無",
          "1": "了解PCBA進料基本檢驗概念",
          "2": "獨立執行PCBA外包進料外觀AQL+功能確認+WIQA0602執行",
          "3": "建立PCBA進料IQC SOP+電氣快速驗收方法+供應商改善追蹤"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4A必備(PCBA IQC執行+WIQA0602)｜L5A(電氣驗收方法建立)｜L6A(供應商品質改善主導)",
        "questions": "外包PCBA進料AOI不良如何判定免驗/加嚴？焊點外觀IPC-A-610等級如何選用？"
      },
      {
        "category": "[B]  PQC製程檢驗  Process Quality Control",
        "code": "B1",
        "dimension": "SMT製程",
        "ability": "SMT製程巡檢  (錫膏印刷/SPI判讀/AOI結果/回焊後外觀)",
        "levels": {
          "0": "無",
          "1": "知道SMT基本流程",
          "2": "獨立執行SMT各站巡檢+SPI/AOI不良判讀+異常升報",
          "3": "建立SMT製程巡檢SOP+製程異常統計分析+改善追蹤WIQA0702"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A必備(SMT巡檢獨立執行+WIQA0702)｜L5A(製程異常統計分析)｜L6A(改善體系建立)",
        "questions": "SPI錫膏體積不足75%時應採取何種行動？AOI假警報過高如何改善程式？回焊後立碑常見原因？"
      },
      {
        "category": "[B]  PQC製程檢驗  Process Quality Control",
        "code": "B2",
        "dimension": "製程檢驗",
        "ability": "組裝製程巡檢  (工站SOP符合性/扭力確認/防呆驗證/目視外觀)",
        "levels": {
          "0": "無",
          "1": "了解組裝製程基本檢驗項目",
          "2": "獨立執行22工站組裝製程巡檢+工單核對+扭力抽查+FMQA記錄",
          "3": "建立組裝製程巡檢SOP+製程能力分析+持續改善推動WIQA0701"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A必備(組裝製程巡檢+WIQA0701)｜L5A(製程能力分析)｜L6A(改善體系推動)",
        "questions": "組裝工站巡檢頻率如何設定（每小時/每批）？發現扭力不足批次如何遏制？灌膠重量偏差如何處理？"
      },
      {
        "category": "[B]  PQC製程檢驗  Process Quality Control",
        "code": "B3",
        "dimension": "製程不良",
        "ability": "製程不良判讀與分類  (IPC-A-610/IPC-A-620/外觀缺陷代碼)",
        "levels": {
          "0": "無",
          "1": "知道IPC-A-610基本不良分類",
          "2": "熟練應用IPC-A-610/A-620判讀焊接/組裝缺陷+正確分類",
          "3": "建立公司內部缺陷圖解庫+訓練品檢員+主導IPC認證"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4A必備(IPC-A-610判讀)｜L5A(缺陷圖解庫建立)｜L6A(IPC認證主導+品檢員訓練)",
        "questions": "短路vs假焊在IPC-A-610如何分級（Defect/Process Indicator/Acceptability）？拒絕與重工的決策點？"
      },
      {
        "category": "[B]  PQC製程檢驗  Process Quality Control",
        "code": "B4",
        "dimension": "製程管制",
        "ability": "首件確認 FAI  (First Article Inspection/換線首件/批次首件)",
        "levels": {
          "0": "無",
          "1": "了解首件確認概念",
          "2": "獨立執行SMT/組裝換線首件確認+記錄表填寫+簽核",
          "3": "建立首件確認SOP+電子化紀錄+異常快速升報機制"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4A必備(FAI獨立執行)｜L5A(電子化+異常升報機制)｜L6A(FAI體系標準化)",
        "questions": "換機種首件確認需確認哪些項目（≥8項）？FAI失敗時批量生產如何遏制？何時需重新FAI？"
      },
      {
        "category": "[B]  PQC製程檢驗  Process Quality Control",
        "code": "B5",
        "dimension": "製程異常",
        "ability": "製程異常處理與升報  (停線判斷/遏制/8D初步/FMQA0303)",
        "levels": {
          "0": "無",
          "1": "了解製程異常升報流程",
          "2": "獨立判斷停線時機+實施遏制措施+填寫FMQA0303+追蹤改善",
          "3": "建立製程異常快速響應SOP+異常分級機制+有複雜製程問題解決案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4A必備(異常處理升報)｜L5A(快速響應SOP建立)｜L6A(異常分級機制制定)",
        "questions": "SMT AOI不良率突增3%應立即停線嗎？判斷依據？遏制措施如何記錄於FMQA0303？"
      },
      {
        "category": "[C]  FQC成品與出貨檢驗  Final Quality Control",
        "code": "C1",
        "dimension": "成品檢驗",
        "ability": "成品外觀功能檢驗  (WIQA0802/AQL/功能測試/配光確認)",
        "levels": {
          "0": "無",
          "1": "了解成品外觀檢驗基本項目",
          "2": "獨立執行成品AQL抽樣+功能全項測試+配光初步確認+WIQA0802填寫",
          "3": "建立成品FQC SOP+允收標準圖解庫+電子化記錄+品檢員訓練"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A必備(成品FQC執行+WIQA0802)｜L5A(允收標準圖解庫建立)｜L6A(FQC體系電子化)",
        "questions": "成品AQL II level使用1.0還是2.5？發現批次外觀不良如何決定退批vs重工？功能測試清單需包含哪些項目？"
      },
      {
        "category": "[C]  FQC成品與出貨檢驗  Final Quality Control",
        "code": "C2",
        "dimension": "出貨檢驗",
        "ability": "出貨抽檢  (WIQA0803/出貨批量AQL/標籤確認/包裝確認)",
        "levels": {
          "0": "無",
          "1": "了解出貨檢驗基本概念",
          "2": "獨立執行出貨AQL抽樣+標籤/包裝/說明書/配件全確認+WIQA0803填寫",
          "3": "建立出貨品質門控機制+出貨錯誤率KPI管理+客訴預防體系"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4A必備(出貨檢驗執行+WIQA0803)｜L5A(出貨品質門控機制)｜L6A(客訴預防體系建立)",
        "questions": "出貨前發現標籤印錯如何處理（全批攔截/全數重貼）？出貨檢驗員未確認配件如何防再發？"
      },
      {
        "category": "[C]  FQC成品與出貨檢驗  Final Quality Control",
        "code": "C3",
        "dimension": "成品量測",
        "ability": "成品電氣功能量測  (電壓/電流/Pattern/配光/積分球量測)",
        "levels": {
          "0": "無",
          "1": "了解成品電氣量測基本項目",
          "2": "獨立執行成品電壓電流量測+Pattern確認+簡易配光機操作+積分球基礎量測",
          "3": "建立成品電氣量測SOP+測試治具管理+量測不確定度評估"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4A必備(電氣量測+Pattern確認)｜L5A(測試SOP建立+治具管理)｜L6A(量測不確定度評估)",
        "questions": "成品電流量測超出規格±5%如何判定允收/退批？Pattern切換測試如何確認閃頻符合ECE R65？"
      },
      {
        "category": "[C]  FQC成品與出貨檢驗  Final Quality Control",
        "code": "C4",
        "dimension": "成品包裝",
        "ability": "成品包裝完整性確認  (包裝標準/說明書/配件/出貨標籤/客戶要求)",
        "levels": {
          "0": "無",
          "1": "了解包裝確認基本項目",
          "2": "獨立執行包裝完整性全項確認+客戶特殊要求對照",
          "3": "建立包裝確認SOP+不同客戶包裝要求知識庫+錯誤防呆機制"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4A必備(包裝確認執行)｜L5A(客戶包裝要求知識庫)｜L6A(防呆機制建立)",
        "questions": "不同客戶(Whelen/Code3)對包裝標示有何差異？如何建立客戶特殊要求清單並防呆？"
      },
      {
        "category": "[D]  量測設備操作  Measurement Equipment",
        "code": "D1",
        "dimension": "量測",
        "ability": "卡尺/外徑分厘卡操作與校驗  (WIQA0204/WIQA0202)",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道讀值",
          "2": "熟練操作卡尺/分厘卡+數位卡尺+定期校驗SOP執行",
          "3": "建立量測SOP+校驗計畫管理+指導他人WIQA0204"
        },
        "importance": 5,
        "weight": "WIQA0204",
        "target_level": "L3B必備(基礎操作)｜L4A熟練(含校驗執行)｜L5A主導(校驗計畫管理)",
        "questions": "卡尺歸零後量測0.05mm差異如何判讀？校驗週期如何設定？校驗標準怎麼追溯？"
      },
      {
        "category": "[D]  量測設備操作  Measurement Equipment",
        "code": "D2",
        "dimension": "量測",
        "ability": "2.5D量測儀操作與校驗  (WIQA0203)",
        "levels": {
          "0": "從未使用",
          "1": "知道2.5D量測原理",
          "2": "獨立操作量測燈殼關鍵尺寸+撰寫量測報告",
          "3": "建立2.5D量測SOP+程式建立+指導他人"
        },
        "importance": 5,
        "weight": "WIQA0203",
        "target_level": "L4B必備(獨立操作)｜L5A熟練(程式建立+報告撰寫)｜L6A主導(SOP建立)",
        "questions": "2.5D量測儀如何設定量測O-ring溝槽深度？量測結果如何記錄於量測報告？"
      },
      {
        "category": "[D]  量測設備操作  Measurement Equipment",
        "code": "D3",
        "dimension": "量測",
        "ability": "塊規操作與校驗  (WIQA0201)",
        "levels": {
          "0": "從未使用",
          "1": "知道塊規用途",
          "2": "熟練使用塊規驗證量具",
          "3": "建立塊規管理SOP+保養計畫"
        },
        "importance": 3,
        "weight": "WIQA0201",
        "target_level": "L4A必備(基礎使用)｜L5A熟練(含量具驗證)",
        "questions": "塊規選用26mm如何組合？表面保養如何避免鏽蝕？"
      },
      {
        "category": "[D]  量測設備操作  Measurement Equipment",
        "code": "D4",
        "dimension": "量測",
        "ability": "塞規操作與校驗  (WIQA0205)",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作",
          "2": "熟練操作含校驗",
          "3": "建立塞規管理SOP"
        },
        "importance": 3,
        "weight": "WIQA0205",
        "target_level": "L4A必備(基礎操作)｜L4B熟練(含校驗)｜L5A(SOP建立)",
        "questions": "塞規GO/NOGO判定方式？定期校驗如何追溯至CNLA實驗室？"
      },
      {
        "category": "[D]  量測設備操作  Measurement Equipment",
        "code": "D5",
        "dimension": "量測",
        "ability": "扭力校正器操作與校驗  (WIQA0206)",
        "levels": {
          "0": "從未使用",
          "1": "知道扭力校正器用途",
          "2": "熟練操作扭力計量測+校正器校驗",
          "3": "建立扭力管理SOP+鎖附扭力標準制定"
        },
        "importance": 4,
        "weight": "WIQA0206",
        "target_level": "L4B必備(獨立操作)｜L5A(SOP建立+扭力標準)",
        "questions": "扭力計校驗頻率如何設定？量測不確定度如何評估？"
      },
      {
        "category": "[D]  量測設備操作  Measurement Equipment",
        "code": "D6",
        "dimension": "量測",
        "ability": "磅秤操作與校驗  (WIQA0210)",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作",
          "2": "熟練操作含校驗",
          "3": "建立管理SOP"
        },
        "importance": 2,
        "weight": "WIQA0210",
        "target_level": "L4A必備(基礎操作)｜L4B(含校驗)",
        "questions": "磅秤靈敏度如何確認？灌膠重量管制圖如何建立？"
      },
      {
        "category": "[D]  量測設備操作  Measurement Equipment",
        "code": "D7",
        "dimension": "量測",
        "ability": "電源供應器操作與校驗  (WIQA0211)",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作",
          "2": "熟練操作含電氣量測功能",
          "3": "建立量測SOP"
        },
        "importance": 4,
        "weight": "WIQA0211",
        "target_level": "L4A必備(基礎操作)｜L5A(電氣量測SOP建立)",
        "questions": "DC10~30V範圍如何設定電源供應器驗測成品？過流保護如何確認？"
      },
      {
        "category": "[D]  量測設備操作  Measurement Equipment",
        "code": "D8",
        "dimension": "量測",
        "ability": "三用電表操作與校驗  (WIQA0213)",
        "levels": {
          "0": "從未使用",
          "1": "基礎使用",
          "2": "熟練量測AC/DC/電阻",
          "3": "建立量測SOP+指導他人"
        },
        "importance": 3,
        "weight": "WIQA0213",
        "target_level": "L3B必備(基礎)｜L4A熟練(含交流量測)",
        "questions": "量測PCB線路電阻時如何避免干擾？"
      },
      {
        "category": "[D]  量測設備操作  Measurement Equipment",
        "code": "D9",
        "dimension": "量測",
        "ability": "LCR meter操作與校驗  (WIQA0214)",
        "levels": {
          "0": "從未使用",
          "1": "了解LCR量測原理",
          "2": "熟練量測電感/電容/電阻元件",
          "3": "建立量測SOP+IQC電子料量測應用"
        },
        "importance": 4,
        "weight": "WIQA0214",
        "target_level": "L4B必備(獨立操作)｜L5A(IQC應用+SOP建立)",
        "questions": "進料電感值偏差±10%對LED驅動電路有何影響？LCR量測頻率如何選擇？"
      },
      {
        "category": "[D]  量測設備操作  Measurement Equipment",
        "code": "D10",
        "dimension": "量測",
        "ability": "積分球操作與校驗  (WIQA0212/WIQA0243)",
        "levels": {
          "0": "從未使用",
          "1": "了解積分球量測原理",
          "2": "熟練操作積分球量測總光通量/色座標",
          "3": "建立積分球量測SOP+ECE R65色度判讀+指導他人"
        },
        "importance": 5,
        "weight": "WIQA0212/0243",
        "target_level": "L4B必備(獨立操作)｜L5A(ECE色度判讀+SOP)｜L6A(量測規範建立)",
        "questions": "積分球量測前如何校準？ECE R65琥珀光色座標允收範圍？色座標偏移如何回饋設計？"
      },
      {
        "category": "[D]  量測設備操作  Measurement Equipment",
        "code": "D11",
        "dimension": "量測",
        "ability": "CL-200照度計操作與校驗  (WIQA0229)",
        "levels": {
          "0": "從未使用",
          "1": "了解照度量測原理",
          "2": "熟練量測光強度+比較ECE R65要求",
          "3": "建立照度量測SOP"
        },
        "importance": 3,
        "weight": "WIQA0229",
        "target_level": "L4B必備(獨立操作)｜L5A(ECE比對+SOP建立)",
        "questions": "如何用CL-200量測警示燈1m處照度並比對ECE R65法規要求？"
      },
      {
        "category": "[E]  實驗室環境試驗設備操作  Lab & Environmental Test Equipment",
        "code": "E1",
        "dimension": "環境試驗",
        "ability": "IPX9K試驗機操作  (WIQA0217/WIQA0246/ISO 20653)",
        "levels": {
          "0": "從未使用",
          "1": "知道IP9K試驗條件(80°C/80bar)",
          "2": "獨立設定4角度水溫壓力+執行試驗+判讀失效",
          "3": "建立IPX9K測試SOP+IP系列失效分析+改善設計建議"
        },
        "importance": 5,
        "weight": "WIQA0217/0246",
        "target_level": "L4A認知｜L5A必備(獨立操作+失效判讀)｜L6A(SOP建立)",
        "questions": "設定4角度各15秒參數？如何判斷密封失效位置？漏水後8D如何分析？"
      },
      {
        "category": "[E]  實驗室環境試驗設備操作  Lab & Environmental Test Equipment",
        "code": "E2",
        "dimension": "環境試驗",
        "ability": "鹽霧試驗機操作  (WIQA0234/ISO 9227)",
        "levels": {
          "0": "從未使用",
          "1": "了解中性鹽霧試驗原理",
          "2": "獨立設定240h鹽霧試驗+判讀腐蝕等級+記錄",
          "3": "建立鹽霧試驗SOP+腐蝕評估標準+改善建議回饋設計"
        },
        "importance": 5,
        "weight": "WIQA0234",
        "target_level": "L4B必備(獨立操作)｜L5A(腐蝕評估+SOP)｜L6A(改善設計回饋)",
        "questions": "中性鹽霧240h後鋁殼腐蝕評級依據？陽極膜厚與耐鹽霧能力的關係？"
      },
      {
        "category": "[E]  實驗室環境試驗設備操作  Lab & Environmental Test Equipment",
        "code": "E3",
        "dimension": "環境試驗",
        "ability": "振動機EV220操作  (WIQA0220/ISO 16750-3)",
        "levels": {
          "0": "從未使用",
          "1": "了解振動試驗原理(隨機/掃頻)",
          "2": "獨立設定振動參數+執行試驗+失效判讀",
          "3": "建立振動試驗SOP+失效分析+改善建議"
        },
        "importance": 5,
        "weight": "WIQA0220",
        "target_level": "L4B必備(獨立操作)｜L5A(SOP建立+失效分析)｜L6A(改善建議回饋)",
        "questions": "SAE J575隨機振動6h設定Grms如何設定？振動後螺絲鬆動如何分析根因？"
      },
      {
        "category": "[E]  實驗室環境試驗設備操作  Lab & Environmental Test Equipment",
        "code": "E4",
        "dimension": "環境試驗",
        "ability": "落下試驗機操作  (WIQA0216/IEC 60068-2-27)",
        "levels": {
          "0": "從未使用",
          "1": "了解衝擊試驗原理",
          "2": "獨立設定衝擊波形+執行+判讀結果",
          "3": "建立衝擊試驗SOP+失效分析+設計改善建議"
        },
        "importance": 4,
        "weight": "WIQA0216",
        "target_level": "L4B必備(獨立操作)｜L5A(SOP+失效分析)",
        "questions": "半正弦波/梯形波各適用什麼場景？衝擊後破裂如何判定是設計還是製程問題？"
      },
      {
        "category": "[E]  實驗室環境試驗設備操作  Lab & Environmental Test Equipment",
        "code": "E5",
        "dimension": "環境試驗",
        "ability": "QUV試驗機操作  (WIQA0218/ISO 4892)",
        "levels": {
          "0": "從未使用",
          "1": "了解UV老化試驗原理",
          "2": "獨立設定UV試驗參數+執行+外觀判讀",
          "3": "建立UV試驗SOP+老化評估標準"
        },
        "importance": 4,
        "weight": "WIQA0218",
        "target_level": "L4B必備(獨立操作)｜L5A(SOP建立+評估標準)",
        "questions": "UVA-340燈管500h後PC燈罩泛黃如何評級？色差儀ΔE如何計算允收？"
      },
      {
        "category": "[E]  實驗室環境試驗設備操作  Lab & Environmental Test Equipment",
        "code": "E6",
        "dimension": "環境試驗",
        "ability": "冷熱衝擊試驗機操作  (WIQA0245)",
        "levels": {
          "0": "從未使用",
          "1": "了解冷熱衝擊試驗原理",
          "2": "獨立設定-40/+85°C循環+執行+判讀",
          "3": "建立冷熱衝擊SOP+失效分析"
        },
        "importance": 4,
        "weight": "WIQA0245",
        "target_level": "L4B必備(獨立操作)｜L5A(SOP建立+失效分析)",
        "questions": "冷熱衝擊100循環後密封失效如何判斷根因（材料vs設計vs製程）？"
      },
      {
        "category": "[E]  實驗室環境試驗設備操作  Lab & Environmental Test Equipment",
        "code": "E7",
        "dimension": "環境試驗",
        "ability": "烘箱操作與校驗  (WIQA0207)",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作",
          "2": "熟練設定溫度+執行老化測試",
          "3": "建立烘箱SOP+校驗計畫"
        },
        "importance": 3,
        "weight": "WIQA0207",
        "target_level": "L4A必備(基礎操作)｜L4B(老化測試執行)｜L5A(SOP+校驗計畫)",
        "questions": "成品85°C/168h高溫老化測試如何設計？烘箱均溫性如何驗證？"
      },
      {
        "category": "[E]  實驗室環境試驗設備操作  Lab & Environmental Test Equipment",
        "code": "E8",
        "dimension": "環境試驗",
        "ability": "ESD靜電放電模擬器操作  (WIQA0241/ISO 10605)",
        "levels": {
          "0": "從未使用",
          "1": "了解ESD測試原理",
          "2": "獨立執行接觸放電/空氣放電+判讀結果",
          "3": "建立ESD測試SOP+失效分析+改善電路建議"
        },
        "importance": 4,
        "weight": "WIQA0241",
        "target_level": "L4B必備(獨立操作)｜L5A(SOP建立+失效分析)｜L6A(改善電路建議)",
        "questions": "ISO 10605 Level 3接觸放電8kV如何執行？ESD後功能異常如何分析電路保護是否足夠？"
      },
      {
        "category": "[E]  實驗室環境試驗設備操作  Lab & Environmental Test Equipment",
        "code": "E9",
        "dimension": "環境試驗",
        "ability": "BCI測試機操作  (WIQA0224/ISO 11452-4)",
        "levels": {
          "0": "從未使用",
          "1": "了解BCI測試原理",
          "2": "獨立操作BCI設備+執行測試+判讀功能失效",
          "3": "建立BCI測試SOP+失效分析+改善回饋"
        },
        "importance": 4,
        "weight": "WIQA0224",
        "target_level": "L5A必備(獨立操作)｜L6A(SOP建立+改善回饋)",
        "questions": "ISO 11452-4 Level 1~5如何對應車輛類型？BCI頻率範圍掃頻如何設定？"
      },
      {
        "category": "[E]  實驗室環境試驗設備操作  Lab & Environmental Test Equipment",
        "code": "E10",
        "dimension": "環境試驗",
        "ability": "防塵試驗機操作  (WIQA0215/IEC 60529)",
        "levels": {
          "0": "從未使用",
          "1": "了解IP6X防塵試驗原理",
          "2": "獨立執行防塵試驗+判讀結果",
          "3": "建立防塵試驗SOP+失效分析"
        },
        "importance": 3,
        "weight": "WIQA0215",
        "target_level": "L4B必備(獨立操作)｜L5A(SOP建立)",
        "questions": "IP6X防塵試驗8h後如何確認無粉塵滲入？與IP67靜水壓試驗順序如何安排？"
      },
      {
        "category": "[E]  實驗室環境試驗設備操作  Lab & Environmental Test Equipment",
        "code": "E11",
        "dimension": "環境試驗",
        "ability": "X-ray操作  (WIQA0223/WIQA0249)",
        "levels": {
          "0": "從未使用",
          "1": "了解X-ray原理",
          "2": "獨立操作X-ray確認灌膠氣泡/焊接空洞",
          "3": "建立X-ray判讀SOP+Void率標準制定"
        },
        "importance": 5,
        "weight": "WIQA0223/0249",
        "target_level": "L4B必備(獨立操作)｜L5A(Void率標準+SOP)｜L6A(RoHS分析整合)",
        "questions": "灌膠X-ray Void率如何量化允收（面積%/最大直徑）？BGA焊球空洞如何判讀？"
      },
      {
        "category": "[E]  實驗室環境試驗設備操作  Lab & Environmental Test Equipment",
        "code": "E12",
        "dimension": "環境試驗",
        "ability": "碎石試驗機操作  (WIQA0221)",
        "levels": {
          "0": "從未使用",
          "1": "了解碎石試驗原理",
          "2": "獨立執行測試+外觀判讀",
          "3": "建立試驗SOP"
        },
        "importance": 3,
        "weight": "WIQA0221",
        "target_level": "L4B必備(獨立操作)｜L5A(SOP建立)",
        "questions": "SAE J400碎石試驗條件如何設定？燈罩表面損傷如何評級允收？"
      },
      {
        "category": "[E]  實驗室環境試驗設備操作  Lab & Environmental Test Equipment",
        "code": "E13",
        "dimension": "環境試驗",
        "ability": "耐水/大型IPX9K試驗機操作  (WIQA0235/WIQA0246)",
        "levels": {
          "0": "從未使用",
          "1": "了解耐水試驗原理",
          "2": "獨立操作含大型整燈IPX9K測試",
          "3": "建立整燈IPX9K測試SOP"
        },
        "importance": 5,
        "weight": "WIQA0235/0246",
        "target_level": "L5A必備(大型IPX9K獨立操作)｜L6A(整燈測試SOP建立)",
        "questions": "大型整燈IPX9K如何確認密封結構在80bar下不失效？漏水位置如何定位？"
      },
      {
        "category": "[E]  實驗室環境試驗設備操作  Lab & Environmental Test Equipment",
        "code": "E14",
        "dimension": "環境試驗",
        "ability": "SMT AOI操作與校驗  (WIQA0251)",
        "levels": {
          "0": "從未使用",
          "1": "了解AOI工作原理",
          "2": "熟練操作AOI確認不良+調整程式",
          "3": "建立AOI判讀SOP+程式優化"
        },
        "importance": 5,
        "weight": "WIQA0251",
        "target_level": "L4A必備(AOI操作確認)｜L5A(程式調整+SOP)｜L6A(程式優化+誤判率管控)",
        "questions": "AOI假警報率超過30%如何優化程式？虛焊vs立碑AOI如何設定檢測靈敏度？"
      },
      {
        "category": "[F]  SPC 統計製程管制  Statistical Process Control",
        "code": "F1",
        "dimension": "SPC基礎",
        "ability": "SPC統計製程管制基礎  (變異來源/管制圖選擇/Cp/Cpk)",
        "levels": {
          "0": "不了解",
          "1": "了解SPC目的與管制圖基本概念",
          "2": "能選擇適當管制圖+建立管制界限+解讀製程異常信號",
          "3": "建立SPC監控系統+有SPC改善製程穩定性成功案例 QPQA10"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4B必備(SPC基礎+管制圖概念)｜L5A獨立建立(管制圖+異常解讀)｜L6A主導(SPC系統建立)",
        "questions": "X-bar R管制圖 vs I-MR管制圖各適用何種情境？管制圖8種異常判讀準則是什麼？"
      },
      {
        "category": "[F]  SPC 統計製程管制  Statistical Process Control",
        "code": "F2",
        "dimension": "管制圖",
        "ability": "管制圖實務應用  (計量型/計數型/特殊管制圖)",
        "levels": {
          "0": "無",
          "1": "了解常用管制圖類型",
          "2": "能建立管制圖+設定管制界限+識別異常+啟動8D",
          "3": "有SPC應用於量產改善+Cpk提升成功案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L5A必備(建立管制圖+識別異常)｜L5B主導(Cpk提升有成果)｜L6A主導(SPC體系)",
        "questions": "如何為灌膠重量設定管制圖（管制界限計算）？超出管制界限時如何處理？p圖vs c圖如何選擇？"
      },
      {
        "category": "[F]  SPC 統計製程管制  Statistical Process Control",
        "code": "F3",
        "dimension": "製程能力",
        "ability": "製程能力分析  (Cp/Cpk/Pp/Ppk計算與改善)",
        "levels": {
          "0": "無",
          "1": "了解Cp/Cpk定義與計算",
          "2": "能計算分析製程能力並識別改善機會",
          "3": "有系統性製程能力改善(Cpk提升)成功案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4B必備(Cp/Cpk定義計算)｜L5A獨立分析(識別改善機會)｜L6A主導(Cpk提升機制建立)",
        "questions": "Cp vs Cpk差異？Cpk=1.33代表什麼？灌膠重量Cpk=0.8如何改善到1.33？"
      },
      {
        "category": "[F]  SPC 統計製程管制  Statistical Process Control",
        "code": "F4★",
        "dimension": "SPC導入",
        "ability": "SPC系統導入與維護  (量測系統/數據收集/自動化SPC)",
        "levels": {
          "0": "無",
          "1": "了解SPC系統的組成",
          "2": "能規劃SPC監控計畫+確保數據收集品質",
          "3": "有SPC系統導入+自動化數據收集案例"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L5A加分(SPC監控計畫)｜L5B建議(自動化數據收集)｜L6A主導(SPC系統導入+維護體系)",
        "questions": "如何規劃量產線的SPC監控計畫？哪些關鍵特性(SC/CC)需納入SPC管控？"
      },
      {
        "category": "[G]  MSA 量測系統分析  Measurement System Analysis",
        "code": "G1",
        "dimension": "MSA基礎",
        "ability": "MSA量測系統分析基礎  (GR&R/偏倚/線性/穩定性/解析力)",
        "levels": {
          "0": "不了解",
          "1": "了解MSA目的與主要評估指標",
          "2": "能執行基本GR&R分析並解讀結果",
          "3": "建立MSA標準程序+有多種量測系統評估案例 QPQA11"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B必備(GR&R基礎概念)｜L5A獨立執行GR&R(品質符合)｜L6A主導(MSA標準程序建立)",
        "questions": "GR&R %R&R<10%/10~30%/≥30%各代表什麼結論？DR<5如何解讀？"
      },
      {
        "category": "[G]  MSA 量測系統分析  Measurement System Analysis",
        "code": "G2",
        "dimension": "計量型MSA",
        "ability": "計量型MSA執行  (Gauge R&R/ANOVA法/X-bar R法)",
        "levels": {
          "0": "無",
          "1": "了解計量型MSA執行步驟",
          "2": "能主導計量型MSA執行+分析報告準備",
          "3": "有MSA不合格的改善+重新驗證成功案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L5A必備(主導計量型MSA執行+報告)｜L5B主導(MSA不合格改善驗證)｜L6A(量測體系建立)",
        "questions": "計量型GR&R需幾個操作者/樣品/重複幾次？ANOVA法 vs X-bar R法各適用何時？"
      },
      {
        "category": "[G]  MSA 量測系統分析  Measurement System Analysis",
        "code": "G3",
        "dimension": "計數型MSA",
        "ability": "計數型MSA執行  (屬性一致性分析/Kappa值)",
        "levels": {
          "0": "無",
          "1": "了解計數型MSA概念",
          "2": "能執行計數型MSA+計算Kappa值",
          "3": "有改善視覺檢查系統MSA成功案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L5A加分(計數型MSA概念)｜L5B建議(Kappa值計算)｜L6A主導(視覺檢查MSA改善)",
        "questions": "Kappa值0.75允收嗎？如何改善品檢員外觀判定一致性？"
      },
      {
        "category": "[G]  MSA 量測系統分析  Measurement System Analysis",
        "code": "G4★",
        "dimension": "量測不確定度",
        "ability": "量測不確定度評估  (GUM方法/不確定度來源識別)",
        "levels": {
          "0": "無",
          "1": "了解量測不確定度概念",
          "2": "能識別主要不確定度來源並估算",
          "3": "建立量測不確定度評估報告+有實驗室認證相關經驗"
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L5B加分(量測不確定度概念)｜L6A建議(評估報告制定)｜L6B主導(實驗室認證)",
        "questions": "卡尺量測的主要不確定度來源有哪些？Type A/B各如何估算合成不確定度？"
      },
      {
        "category": "[H]  FMEA 失效模式與效應分析  Failure Mode & Effects Analysis",
        "code": "H1",
        "dimension": "DFMEA",
        "ability": "設計FMEA(DFMEA)執行  (功能/失效模式/嚴重度/RPN/AIAG-VDA AP)",
        "levels": {
          "0": "不了解",
          "1": "了解DFMEA基本格式與評分方法",
          "2": "能獨立執行DFMEA+識別高RPN項目+制定改善措施",
          "3": "建立DFMEA標準模板+有多件DFMEA提前識別設計風險案例 QPRD05"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4B必備(DFMEA格式評分)｜L5A獨立執行(識別高RPN)｜L6A主導(DFMEA模板體系建立)",
        "questions": "如何為LED警示燈防水密封建立DFMEA？新版AIAG-VDA FMEA AP(H/M/L)如何取代RPN判定？"
      },
      {
        "category": "[H]  FMEA 失效模式與效應分析  Failure Mode & Effects Analysis",
        "code": "H2",
        "dimension": "PFMEA",
        "ability": "製程FMEA(PFMEA)執行  (製程步驟/製程失效/PFMEA與CP連結)",
        "levels": {
          "0": "不了解",
          "1": "了解PFMEA基本格式",
          "2": "能獨立執行PFMEA+與Control Plan連結",
          "3": "有完整PFMEA→CP→SOP連結管理案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4B必備(PFMEA格式)｜L5A獨立執行(PFMEA+CP連結)｜L6A主導(PFMEA-CP-SOP連結體系)",
        "questions": "灌膠製程PFMEA需識別哪些關鍵失效模式（≥5項）？如何確保PFMEA與控制計畫一致？"
      },
      {
        "category": "[H]  FMEA 失效模式與效應分析  Failure Mode & Effects Analysis",
        "code": "H3",
        "dimension": "FMEA追蹤",
        "ability": "FMEA改善措施追蹤  (高風險項目改善/再評估/效果驗證)",
        "levels": {
          "0": "無",
          "1": "了解FMEA改善追蹤重要性",
          "2": "能系統性追蹤FMEA改善措施完成情況",
          "3": "建立FMEA動態管理機制+有改善後AP/RPN顯著降低案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L5A加分(FMEA改善追蹤)｜L5B建議(系統性追蹤)｜L6A主導(FMEA動態管理機制建立)",
        "questions": "如何確保FMEA不是一次性文件？FMEA新版5T/7步驟中品管工程師負責哪些步驟？"
      },
      {
        "category": "[I]  8D問題解決與不良品管制  8D Problem Solving & NCM",
        "code": "I1",
        "dimension": "8D問題解決",
        "ability": "8D問題解決法執行  (D0~D8/緊急遏制/根因分析/防再發)",
        "levels": {
          "0": "不了解",
          "1": "知道8D步驟",
          "2": "能獨立完成8D報告+5Why根因分析+防再發措施有效性確認",
          "3": "指導他人+建立問題案例庫+有複雜問題根因找出成功案例 QPAD12"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A必備(8D步驟認知)｜L5A獨立完成8D報告(含5Why根因)｜L6A主導(案例庫建立+指導他人)",
        "questions": "以一次客戶投訴案件說明8D D4根因分析如何執行？D5/D6永久對策vs預防措施的差異？"
      },
      {
        "category": "[I]  8D問題解決與不良品管制  8D Problem Solving & NCM",
        "code": "I2",
        "dimension": "不良品管制",
        "ability": "不合格品管制程序  (QPQA03/標識/隔離/特採/報廢決策)",
        "levels": {
          "0": "無",
          "1": "了解不合格品管制基本流程",
          "2": "獨立執行不良品標識/隔離/MRB會判/特採申請+QPQA03執行",
          "3": "建立MRB機制+特採決策流程+有案例庫"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A必備(不良品管制執行+QPQA03)｜L5A(MRB機制建立)｜L6A(特採決策流程制定)",
        "questions": "MRB(材料審查委員會)特採條件如何判定？特採產品如何追溯管控？報廢vs返工決策依據？"
      },
      {
        "category": "[I]  8D問題解決與不良品管制  8D Problem Solving & NCM",
        "code": "I3",
        "dimension": "客訴處理",
        "ability": "客訴處理與RMA管理  (WISA0103/8D回覆/客戶溝通/CAPA追蹤)",
        "levels": {
          "0": "無",
          "1": "了解客訴處理基本流程",
          "2": "獨立執行客訴接收/分析/8D回覆/RMA管理+WISA0103執行",
          "3": "建立客訴快速響應SOP+有客戶認可的複雜客訴成功解決案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L5A必備(客訴8D回覆+RMA執行+WISA0103)｜L6A(快速響應SOP建立+客戶關係維護)",
        "questions": "客訴收到48小時內需提交什麼給客戶？8D報告如何讓Whelen/Code3等美國客戶接受？"
      },
      {
        "category": "[I]  8D問題解決與不良品管制  8D Problem Solving & NCM",
        "code": "I4",
        "dimension": "根因分析",
        "ability": "根因分析工具應用  (魚骨圖/5Why/故障樹/Is/Is-Not分析)",
        "levels": {
          "0": "無",
          "1": "了解根因分析工具",
          "2": "能獨立應用5Why/魚骨圖找出品質問題根因",
          "3": "建立根因分析SOP+有複雜問題(跨部門/多根因)解決案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B必備(5Why/魚骨圖應用)｜L5A(Is/Is-Not分析+跨部門問題)｜L6A(根因分析SOP建立)",
        "questions": "同一問題5Why分析到第幾Why才算找到根本原因的判定標準？如何區分根因vs症狀？"
      },
      {
        "category": "[J]  APQP / PPAP  先期品質策劃與生產件批准",
        "code": "J1",
        "dimension": "APQP",
        "ability": "APQP五個階段規劃執行  (概念→計畫→設計→製程→確認→回饋)",
        "levels": {
          "0": "不了解",
          "1": "了解APQP五階段內容",
          "2": "能主導APQP計畫制定+階段門審查+文件管理",
          "3": "有多件完整APQP執行+客戶Gate Review通過案例 QPRD04"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4B必備(APQP五階段)｜L5A主導計畫制定(準時率100%)｜L6A主導(Gate Review,方向設定者)",
        "questions": "APQP第三階段(產品設計開發驗證)品管工程師需完成哪些輸出？DFMEA/CP/PFMEA如何連結確保一致性？"
      },
      {
        "category": "[J]  APQP / PPAP  先期品質策劃與生產件批准",
        "code": "J2",
        "dimension": "PPAP",
        "ability": "PPAP五個等級理解  (Level 1~5送交要求差異)",
        "levels": {
          "0": "不了解",
          "1": "知道PPAP Level 1~5差異",
          "2": "能依客戶要求選擇適當Level並準備文件",
          "3": "有多件完整PPAP文件準備+客戶核准成功案例 QPSA07"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4A必備(PPAP Level差異認知)｜L5A獨立準備文件(品質符合)｜L6A主導(客戶核准溝通)",
        "questions": "PPAP Level 3需要提交哪些文件？18項要素中對品管工程師最重要的5項？"
      },
      {
        "category": "[J]  APQP / PPAP  先期品質策劃與生產件批准",
        "code": "J3",
        "dimension": "PPAP文件",
        "ability": "PPAP 18項要素文件準備  (全尺寸/DFMEA/PFMEA/SPC/MSA/控制計畫等)",
        "levels": {
          "0": "無",
          "1": "了解PPAP 18項要素",
          "2": "能獨立準備完整18項PPAP文件",
          "3": "建立PPAP文件標準模板+有多件客戶核准成功案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4B必備(18項要素了解)｜L5A獨立準備完整18項(準時率100%)｜L6A主導(PPAP文件模板建立)",
        "questions": "PPAP 18項中哪些最容易被美國客戶退件？Cmk≥1.67門檻用於哪個PPAP項目？"
      },
      {
        "category": "[J]  APQP / PPAP  先期品質策劃與生產件批准",
        "code": "J4",
        "dimension": "控制計畫",
        "ability": "控制計畫(Control Plan)制定  (關鍵特性SC/CC/管制方法/量測系統)",
        "levels": {
          "0": "無",
          "1": "了解控制計畫格式與用途",
          "2": "能獨立制定完整控制計畫+識別關鍵特性+與PFMEA連結",
          "3": "建立控制計畫標準流程+有配合客戶要求修訂案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L5A必備(獨立制定CP+關鍵特性識別+PFMEA連結)｜L6A主導(CP策略體系+客戶修訂)",
        "questions": "如何識別SC(特殊特性)與CC(關鍵特性)的差別？CP原型/試產/量產三版各有何不同重點？"
      },
      {
        "category": "[K]  供應商品質管理  Supplier Quality Management",
        "code": "K1",
        "dimension": "供應商稽核",
        "ability": "供應商品質稽核  (製程能力/品質系統/稽核報告/IATF16949要求)",
        "levels": {
          "0": "無",
          "1": "了解供應商稽核基本項目",
          "2": "能獨立執行供應商品質稽核+出具稽核報告+追蹤改善",
          "3": "建立稽核SOP+IATF高風險供應商管理+有稽核不合格成功改善案例 QPLM02"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L5A必備(獨立執行供應商稽核+報告)｜L6A主導(稽核SOP+IATF高風險管理體系)",
        "questions": "稽核LED供應商時關注哪些製程能力指標？稽核不合格如何分級（Major/Minor）？追蹤CAPA有效性如何確認？"
      },
      {
        "category": "[K]  供應商品質管理  Supplier Quality Management",
        "code": "K2",
        "dimension": "SQM",
        "ability": "供應商品質改善  (SCAR/8D回覆要求/Cpk改善追蹤/供應商評鑑)",
        "levels": {
          "0": "無",
          "1": "了解SCAR(供應商糾正措施)基本流程",
          "2": "能發出SCAR+追蹤8D回覆有效性+執行供應商定期評鑑",
          "3": "建立供應商評鑑制度+有供應商升降級案例+品質協定簽訂"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L5A必備(SCAR發出+8D追蹤+供應商評鑑)｜L6A主導(評鑑制度+品質協定)",
        "questions": "SCAR發出後供應商48h臨時遏制/8D全報各需多久？供應商評鑑A/B/C如何分級？"
      },
      {
        "category": "[K]  供應商品質管理  Supplier Quality Management",
        "code": "K3",
        "dimension": "物料承認",
        "ability": "物料承認流程管理  (IQC進料/首件/小批量/量產承認 WIRD0210)",
        "levels": {
          "0": "無",
          "1": "了解物料承認流程步驟",
          "2": "能主導完整物料承認流程含IQC標準建立+首件確認",
          "3": "建立物料承認SOP+供應商初樣評估制度+有多種物料承認成功案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(物料承認流程)｜L5A必備(主導完整物料承認+IQC標準建立)｜L6A主導(SOP體系)",
        "questions": "新物料首次進料承認需哪些步驟（≥6項）？如何設定IQC電氣/尺寸抽樣計畫？"
      },
      {
        "category": "[L]  品質系統管理  Quality System Management",
        "code": "L1",
        "dimension": "IATF系統",
        "ability": "IATF16949品質系統維護  (程序書/WI/文件受控/矯正預防措施)",
        "levels": {
          "0": "無",
          "1": "了解IATF16949基本要求",
          "2": "能獨立維護IATF系統文件+執行矯正預防措施(CAPA)+準備稽核",
          "3": "主導IATF外部稽核準備+有稽核零不符合通過案例+持續改善推動"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A必備(IATF基本要求認知)｜L5A(CAPA執行+稽核準備)｜L6A主導(稽核零不符合通過)",
        "questions": "IATF16949 10.2矯正措施程序如何設計CAPA有效性驗證？遇到不符合項如何30天內完成根因分析與改善？"
      },
      {
        "category": "[L]  品質系統管理  Quality System Management",
        "code": "L2",
        "dimension": "AS9100",
        "ability": "AS9100航太品質要求  (構型管理/可追溯性/首件FAI/航太仿冒件)",
        "levels": {
          "0": "無",
          "1": "了解AS9100與IATF16949主要差異",
          "2": "能維護AS9100相關程序+執行航太特殊要求(仿冒件QPMD08/航太安全QPMD10)",
          "3": "主導AS9100外部稽核+航太客戶特殊要求整合"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4B認知(AS9100主要差異)｜L5A(AS9100程序維護+仿冒件管制)｜L6A主導(AS9100稽核)",
        "questions": "AS9100對仿冒件(Counterfeit Part)管控要求？首件檢驗FAI在AS9100中的要求？"
      },
      {
        "category": "[L]  品質系統管理  Quality System Management",
        "code": "L3",
        "dimension": "內部稽核",
        "ability": "內部稽核執行  (COP流程/MP流程/SP流程稽核辦法)",
        "levels": {
          "0": "無",
          "1": "了解內部稽核基本概念",
          "2": "能主導執行內部稽核+撰寫稽核報告+追蹤不符合改善",
          "3": "建立稽核計畫管理機制+有培訓內部稽核員成功案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L5A必備(主導內部稽核執行+報告)｜L6A主導(稽核計畫管理+稽核員培訓體系)",
        "questions": "依WIAD1001~1003 COP/MP/SP流程稽核辦法，如何規劃年度稽核計畫？稽核發現Major不符合如何處理？"
      },
      {
        "category": "[L]  品質系統管理  Quality System Management",
        "code": "L4",
        "dimension": "文件管理",
        "ability": "品質文件管理  (文件受控/版本管理/廢止/電子簽核鼎新)",
        "levels": {
          "0": "無",
          "1": "了解文件管理基本概念",
          "2": "能執行品質文件建立/發布/版本受控/廢止全流程",
          "3": "建立電子化品質文件管理系統+釘釘品質SOP受控推行"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4A必備(文件管理基本執行)｜L5A(電子化版本受控推行)｜L6A主導(品質文件管理系統)",
        "questions": "品質文件版本更新後如何確認所有相關人員閱讀最新版？廢止文件如何防止被誤用？"
      },
      {
        "category": "[M]  產品開發測試驗證  Product Development Verification",
        "code": "M1",
        "dimension": "DVP",
        "ability": "DVP驗證計畫制定  (Design Verification Plan/測試矩陣/D表)",
        "levels": {
          "0": "無",
          "1": "了解DVP文件作用",
          "2": "能獨立制定完整DVP+管理執行進度+彙整測試結果報告",
          "3": "建立DVP標準模板+有多件產品DVP完整執行記錄+APQP D表整合"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L5A必備(獨立制定DVP+追蹤+D表彙整)｜L6A主導(DVP標準模板建立+APQP整合策略)",
        "questions": "新款警示燈DVP應涵蓋哪些測試類別（≥8類）？DVP如何與DFMEA連結確保所有失效模式都被測試覆蓋？"
      },
      {
        "category": "[M]  產品開發測試驗證  Product Development Verification",
        "code": "M2",
        "dimension": "信賴性測試",
        "ability": "信賴性測試規劃執行  (WIRD0213/ORT量產品測試WIQA1203)",
        "levels": {
          "0": "無",
          "1": "了解信賴性測試基本概念(老化/高低溫/振動)",
          "2": "能規劃完整信賴性測試計畫+執行+失效分析+追蹤改善",
          "3": "建立信賴性測試規範+有從試驗結果到設計改善完整案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L5A必備(信賴性測試規劃執行+WIQA1203)｜L6A主導(信賴性規範建立+策略制定)",
        "questions": "LED警示燈信賴性測試矩陣應包含哪些試驗項目？如何計算加速因子確認85°C/500h等效壽命？"
      },
      {
        "category": "[M]  產品開發測試驗證  Product Development Verification",
        "code": "M3",
        "dimension": "ORT/HALT",
        "ability": "ORT/HALT/HASS量產可靠度測試  (WIQA1203/抽樣計畫/失效判讀)",
        "levels": {
          "0": "無",
          "1": "了解ORT/HALT/HASS基本概念",
          "2": "能規劃ORT量產可靠度測試+執行+失效判讀+改善追蹤",
          "3": "建立ORT/HALT測試SOP+有發現批量潛在缺陷+設計改善成功案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L5A必備(ORT規劃執行+WIQA1203)｜L6A主導(HALT/HASS SOP建立+量產品質改善)",
        "questions": "ORT抽樣計畫如何設定（每批抽幾件/測試幾小時）？HALT找到Operating Limit後如何決定ORT條件？"
      },
      {
        "category": "[M]  產品開發測試驗證  Product Development Verification",
        "code": "M4",
        "dimension": "化學/材料驗證",
        "ability": "耐化學/泡棉雙面膠/高壓洗車驗證  (WIQA1201/1202/1204)",
        "levels": {
          "0": "無",
          "1": "了解化學相容性測試基本概念",
          "2": "能執行耐化學浸泡測試+泡棉雙面膠剝離強度驗證+高壓洗車衝擊測試",
          "3": "建立化學材料驗證SOP+有材料替換驗證成功案例"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4B認知(化學驗證基本概念)｜L5A必備(獨立執行WIQA1201/1202/1204)｜L6A主導(SOP建立)",
        "questions": "車用清潔劑耐化學測試濃度/時間/溫度如何設定？泡棉雙面膠剝離強度90°如何量測允收？"
      },
      {
        "category": "[N]  法規品質驗收  Regulatory Quality Acceptance",
        "code": "N1",
        "dimension": "ECE R65",
        "ability": "ECE R65品質管制程序  (WIQA0608/品質一致性COP/型式認證維護)",
        "levels": {
          "0": "無",
          "1": "了解ECE R65基本光強度/閃頻要求",
          "2": "能依ECE品質一致性要求執行量產品例行測試+撰寫COP報告",
          "3": "主導ECE R65型式認證維護+年度COP稽核準備+與NB機構溝通"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4A必備(ECE R65基本要求認知)｜L5A(COP例行測試執行+報告)｜L6A主導(型式認證維護)",
        "questions": "ECE R65品質一致性(COP)每批需測試幾件？量產品光強度衰退超過型式認證值20%如何處理？"
      },
      {
        "category": "[N]  法規品質驗收  Regulatory Quality Acceptance",
        "code": "N2",
        "dimension": "SAE/NFPA",
        "ability": "SAE J595/NFPA 1901量產品質驗收  (光強度/閃頻/特殊功能)",
        "levels": {
          "0": "無",
          "1": "了解SAE/NFPA基本要求",
          "2": "能依SAE/NFPA要求執行量產品品質驗收+撰寫檢驗報告",
          "3": "主導SAE/NFPA品質驗收體系建立+有量產品持續符合法規的管控案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(SAE/NFPA基本要求)｜L5A(量產品質驗收執行)｜L6A主導(驗收體系建立)",
        "questions": "SAE J595 Class 1 Steady Burn光強度量測角度？NFPA 1901對警車頂燈的特殊覆蓋角度要求？"
      },
      {
        "category": "[N]  法規品質驗收  Regulatory Quality Acceptance",
        "code": "N3",
        "dimension": "RoHS/REACH",
        "ability": "RoHS/REACH環保合規品質管制  (物料成分確認/供應商聲明/VENTA X-ray)",
        "levels": {
          "0": "無",
          "1": "了解RoHS/REACH基本限制要求",
          "2": "能主導物料RoHS合規審查+VENTA X-ray檢測執行+供應商聲明管理",
          "3": "建立RoHS/REACH合規管理體系+供應鏈追蹤系統+WIQA0249操作"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4A基礎認知(RoHS/REACH要求)｜L5A(合規審查+VENTA操作+WIQA0249)｜L6A主導(合規體系)",
        "questions": "RoHS 3.0新增哪些限制物質？VENTA X-ray可確認哪些元素成分？REACH SVHC如何追蹤？"
      },
      {
        "category": "[O]  品質成本與KPI管理  Quality Cost & KPI",
        "code": "O1",
        "dimension": "品質KPI",
        "ability": "品質KPI設定與追蹤  (FPY/PPM/客訴率/IQC退貨率/ORT不良率)",
        "levels": {
          "0": "無",
          "1": "了解品質KPI基本指標",
          "2": "能設定品質KPI+月度追蹤差異分析+提出改善行動",
          "3": "建立品質KPI體系+與阿米巴指標整合+有量化品質提升成果"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4B必備(品質KPI月度追蹤)｜L5A(差異分析+改善行動)｜L6A主導(KPI體系+阿米巴整合)",
        "questions": "SMT FPY目標如何設定（以騏宏現況）？客訴PPM計算方式？FPY連續下降3個月如何系統性分析？"
      },
      {
        "category": "[O]  品質成本與KPI管理  Quality Cost & KPI",
        "code": "O2",
        "dimension": "品質成本",
        "ability": "品質成本分析  (COQ/COPQ/預防成本/鑑定成本/失敗成本)",
        "levels": {
          "0": "無",
          "1": "了解COQ基本概念(預防/鑑定/失敗成本)",
          "2": "能計算分析部門品質成本+識別COPQ最高的改善機會",
          "3": "建立品質成本管理機制+有系統性品質成本降低成功案例"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L5A必備(品質成本分析+COPQ識別)｜L6A主導(品質成本管理機制建立)",
        "questions": "返工成本如何計入COPQ？品質成本占銷售額理想比例？如何說服管理層投資預防成本？"
      },
      {
        "category": "[O]  品質成本與KPI管理  Quality Cost & KPI",
        "code": "O3",
        "dimension": "持續改善",
        "ability": "持續改善推動  (PDCA/QCC/防錯/QPAD13/QPAD19)",
        "levels": {
          "0": "無",
          "1": "了解PDCA基本概念",
          "2": "能主導QCC活動+推行防錯措施+PDCA完整執行有成效",
          "3": "建立持續改善文化+有量化改善成果(FPY/PPM/成本)+IATF13持續改善符合"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L5A必備(QCC主導+PDCA有成效)｜L6A主導(持續改善文化建立+IATF13符合)",
        "questions": "QCC小組如何設定改善目標確保量化可追蹤？防錯措施QPAD19如何設計確保Mistake-Proof效果？"
      },
      {
        "category": "[W]  阿米巴損益核算能力  Amoeba Daily P&L Literacy",
        "code": "W1",
        "dimension": "阿米巴核算",
        "ability": "阿米巴時間附加值（時間當量）認識",
        "levels": {
          "0": "不知道時間附加值",
          "1": "知道公式=(銷售額-外部費用)÷工時",
          "2": "可計算日/月時間附加值並分析趨勢",
          "3": "可協助建立阿米巴核算規則+帶領小巴達成目標"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4A起認知(時間附加值公式)｜L5A必備(計算日/月時間附加值+分析趨勢)｜L6A主導(核算規則建立)",
        "questions": "時間附加值=(銷售額-外部費用)÷總工時；品管部門如何定義「外部費用」？你上月時間附加值為何？如何改善？"
      },
      {
        "category": "[W]  阿米巴損益核算能力  Amoeba Daily P&L Literacy",
        "code": "W2",
        "dimension": "每日損益",
        "ability": "每日損益表填寫與異常分析",
        "levels": {
          "0": "無",
          "1": "可填寫每日損益表格",
          "2": "可分析損益異常並提出改善行動",
          "3": "可協助建立部門阿米巴核算SOP+有損益改善實績"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B必備(每日損益表填寫)｜L5A必備(分析損益異常+提出改善行動)｜L6A主導(阿米巴核算SOP建立)",
        "questions": "品管部每日損益表中「製造費用」如何分攤？品保課如何定義外部費用（試驗費/外包檢測）？"
      },
      {
        "category": "[W]  阿米巴損益核算能力  Amoeba Daily P&L Literacy",
        "code": "W3★",
        "dimension": "巴長責任",
        "ability": "阿米巴巴長（L6A+）基礎責任",
        "levels": {
          "0": "無",
          "1": "知道巴長角色與責任",
          "2": "可主持阿米巴月度會議與目標檢討",
          "3": "可帶領小巴持續達成月度時間附加值目標"
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L6A必備(巴長角色+月度會議)｜L6B主導(帶領小巴達成目標)｜L7整合多巴管理",
        "questions": "如何設定品保阿米巴的月度目標？如何激勵成員達成？L6A+必備"
      },
      {
        "category": "[X]  敏捷專案管理  Agile Project Management",
        "code": "X1",
        "dimension": "Scrum",
        "ability": "Scrum/Sprint週期應用",
        "levels": {
          "0": "無",
          "1": "知道Sprint/Backlog/Daily Standup概念",
          "2": "可在品質改善專案中運用2週Sprint管理任務",
          "3": "可擔任Scrum Master主導Sprint"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4B認知(Sprint/Backlog/Standup概念)｜L5A必備(2週Sprint管理品質改善專案)｜L6A主導Scrum Master",
        "questions": "如何用2週Sprint管理一個客訴改善8D關閉的品質專案？"
      },
      {
        "category": "[X]  敏捷專案管理  Agile Project Management",
        "code": "X2",
        "dimension": "看板",
        "ability": "Kanban看板任務管理",
        "levels": {
          "0": "無",
          "1": "知道看板欄位(待辦/進行/完成)",
          "2": "可建立品質任務看板並控制WIP上限",
          "3": "可優化流動效率+建立團隊Kanban規範"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L4A認知(看板欄位概念)｜L5A必備(建立品質任務看板+WIP上限控制)｜L6A主導(Kanban規範優化)",
        "questions": "如何用Kanban追蹤IQC待驗/驗中/完成進度？供應商SCAR開立/追蹤/關閉如何看板化？"
      },
      {
        "category": "[X]  敏捷專案管理  Agile Project Management",
        "code": "X3",
        "dimension": "敏捷回顧",
        "ability": "Sprint回顧會議（Retrospective）",
        "levels": {
          "0": "無",
          "1": "知道回顧會議目的",
          "2": "可主持回顧並產出具體行動事項",
          "3": "可持續推動流程改善+有量化改善成果"
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L5A建議(回顧會議概念)｜L5B必備(主持回顧+產出行動事項)｜L6A主導(持續改善+量化成果)",
        "questions": "上一個品質Sprint哪件事做得好？哪件可改進？如何記錄並跟進行動？"
      },
      {
        "category": "[Y]  警示燈產品認識與物料編碼  Product & Material Coding Knowledge",
        "code": "Y1",
        "dimension": "警示燈認識",
        "ability": "警示燈產品類型認識  (頂燈/側閃/警示燈/警示桿/交通棒)",
        "levels": {
          "0": "無",
          "1": "能區分頂燈/側閃/警告燈",
          "2": "可說明ECE R65/SAE各類型差異",
          "3": "可協助新人建立產品知識體系"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L3A起建立(產品類型區分)｜L4A必備(ECE R65/SAE各類型差異)｜L5A主導(產品知識體系建立)",
        "questions": "Class 1/Class 2光強度差異？Whelen/SoundOff/Federal Signal各代表產品？"
      },
      {
        "category": "[Y]  警示燈產品認識與物料編碼  Product & Material Coding Knowledge",
        "code": "Y2",
        "dimension": "產品編碼",
        "ability": "騏宏產品編碼規則  (品號規則/OEM-ODM-OBM區分/料號申請)",
        "levels": {
          "0": "不知道",
          "1": "知道料號規則",
          "2": "可正確識別/申請新品料號",
          "3": "可維護/更新編碼規則"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L3B必備(料號規則認知)｜L4A熟練(正確識別料號)｜L5A主導(維護/更新編碼規則體系)",
        "questions": "IQC進料如何確認料號與採購單一致？OEM/ODM/OBM機種如何區分追溯？"
      },
      {
        "category": "[Y]  警示燈產品認識與物料編碼  Product & Material Coding Knowledge",
        "code": "Y3",
        "dimension": "物料認識",
        "ability": "LED物料認識  (Cree/Nichia/Osram/Seoul主要廠商規格)",
        "levels": {
          "0": "無",
          "1": "知道主要LED廠(Cree/Nichia/Osram)",
          "2": "可依光學/熱/法規需求確認進料規格",
          "3": "建立LED物料評選與IQC允收規範"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4A基礎認知(主要LED廠)｜L5A熟練(依需求確認進料規格)｜L6A主導(LED IQC允收規範建立)",
        "questions": "進料LED Vf偏移如何判斷是工廠正常批間差異還是品質問題？Tj超溫對LED壽命影響？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z1",
        "dimension": "文件能力",
        "ability": "ISO/IATF文件讀寫能力  (程序書/工作指導書WI/SOP撰寫)",
        "levels": {
          "0": "無",
          "1": "可閱讀程序書",
          "2": "可獨立撰寫WI/SOP/程序書",
          "3": "可建立文件體系架構"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L3B建立認知(程序書閱讀)｜L4A必備(獨立撰寫WI/SOP)｜L5A主導(文件體系架構建立)",
        "questions": "工作指導書(WI)與程序書(Procedure)差異？品保WI如何確保現場可操作性？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z2",
        "dimension": "問題解決",
        "ability": "8D問題解決法(D1~D8)  (客訴回覆/根因分析/防再發)",
        "levels": {
          "0": "不了解",
          "1": "知道8D步驟",
          "2": "可獨立完成8D報告",
          "3": "可指導他人並建立問題案例庫"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4A必備(8D步驟認知)｜L5A獨立完成8D報告(含有效性驗證)｜L6A主導(指導他人+案例庫建立)",
        "questions": "以一次客訴案件說明8D D4如何區分根本原因vs逃脫原因？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z3",
        "dimension": "跨部門",
        "ability": "跨部門溝通與會議主持  (技術協調/品質改善/衝突解決)",
        "levels": {
          "0": "無",
          "1": "可參與跨部門會議",
          "2": "可主持品質協調會議",
          "3": "可建立跨部門品質協作機制"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L4B建議(跨部門會議參與)｜L5A必備(主持品質協調會議)｜L6A主導(跨部門協作機制建立)",
        "questions": "說明一次你主動協調解決生產/品質/研發跨部門衝突的具體案例（5W1H說明你的角色）"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z4",
        "dimension": "Excel分析",
        "ability": "Excel/報表分析能力  (VLOOKUP/樞紐/品質報表分析/SPC圖表)",
        "levels": {
          "0": "無",
          "1": "基礎Excel",
          "2": "可建立品質分析報表/VLOOKUP/SPC管制圖",
          "3": "Power Query+自動化品質報表"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L4A建議(基礎Excel)｜L4B必備(品質分析報表/VLOOKUP建立)｜L5A主導(自動化報表)",
        "questions": "如何用Excel建立品質KPI月報看板？樞紐分析如何快速統計不良類別分佈？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z5",
        "dimension": "ERP系統",
        "ability": "ERP系統操作（鼎新）  (品管相關模組/進料/異常/出貨記錄)",
        "levels": {
          "0": "無",
          "1": "基礎查詢",
          "2": "可操作品管相關模組(IQC/PQC/FQC記錄)",
          "3": "可協助部門ERP品管模組教育訓練"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L4A建議(ERP基礎查詢)｜L4B必備(品管模組操作)｜L5A主導(協助ERP品管模組訓練)",
        "questions": "鼎新ERP如何建立IQC進料檢驗記錄？如何查詢特定批號的品質歷程追溯？"
      },
      {
        "category": "[V]  鼎新ERP系統操作  Kingdee ERP System",
        "code": "V1",
        "dimension": "ERP基礎",
        "ability": "鼎新ERP基礎操作  (系統登入/模組導覽/查詢報表/電子簽核)",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作了解系統介面",
          "2": "能熟練使用品管相關模組查詢+產出報表+電子簽核",
          "3": "能設定ERP品管參數+有多模組熟練操作+有指導他人使用經驗"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L3B起認知(ERP基礎操作)｜L4A必備(品管模組查詢+報表產出)｜L5A主導(ERP參數設定+指導)",
        "questions": "鼎新ERP哪些模組與品管工程師工作最相關？如何查詢特定品號的IQC歷史記錄？"
      },
      {
        "category": "[V]  鼎新ERP系統操作  Kingdee ERP System",
        "code": "V2",
        "dimension": "IQC記錄",
        "ability": "鼎新ERP IQC進料檢驗記錄作業  (進料/抽樣/判定/入庫核准)",
        "levels": {
          "0": "無",
          "1": "了解IQC記錄流程",
          "2": "能獨立在ERP完成IQC進料檢驗記錄+判定合格/退貨/特採",
          "3": "建立ERP IQC記錄SOP+批次可追溯性管理"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4A必備(ERP IQC記錄執行)｜L5A(IQC記錄SOP建立+追溯管理)｜L6A主導(ERP IQC體系優化)",
        "questions": "在鼎新ERP如何建立IQC進料記錄？特採申請如何在ERP中流程化？批號如何追溯到供應商？"
      },
      {
        "category": "[V]  鼎新ERP系統操作  Kingdee ERP System",
        "code": "V3",
        "dimension": "品質報表",
        "ability": "ERP品質報表產出與分析  (IQC/PQC/FQC報表/不良統計)",
        "levels": {
          "0": "無",
          "1": "了解ERP報表功能",
          "2": "能從ERP產出品質相關報表+基本數據分析",
          "3": "能自定義ERP品質查詢報表+從ERP數據做品質決策分析"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4A認知(ERP報表功能)｜L4B必備(品質報表產出)｜L5A主導(品質決策數據分析)",
        "questions": "如何從鼎新ERP展算品號的IQC歷史不良率？如何產出供應商品質月度報表？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full Function Platform",
        "code": "Q1",
        "dimension": "日常通訊",
        "ability": "釘釘日常群組溝通/任務指派追蹤  (工作日誌/週報/釘釘AI助理)",
        "levels": {
          "0": "無",
          "1": "能使用釘釘基礎通訊、填寫工作日誌",
          "2": "能建立/管理品質群組、使用AI助理分析品質數據、追蹤閱讀回執",
          "3": "建立品質群組管理規範+有效推行日誌制度+作為組內釘釘使用標準人"
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L4A認知(工作日誌/基礎通訊)｜L4B必備(群組管理+品質任務追蹤+AI助理)｜L5A推行(品質日誌制度建立)",
        "questions": "如何在釘釘設定品質異常群組確保異常第一時間通知所有相關人員？AI助理如何協助品質數據分析整理？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full Function Platform",
        "code": "Q2",
        "dimension": "AI表單",
        "ability": "釘釘AI表單設計與資料整合  (IQC表單/異常通知/客訴表單/SPC記錄)",
        "levels": {
          "0": "無",
          "1": "了解釘釘AI表單功能，能填寫已有表單",
          "2": "能獨立設計AI表單含欄位規劃/條件觸發/自動統計報表+與審批工作流整合",
          "3": "建立跨部門品質AI表單系統+有完整資料流設計（填寫→統計→推送→歸檔）"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4A認知(表單填寫+基本設計)｜L5A必備(獨立設計AI表單+工作流整合)｜L6A主導(跨部門品質AI表單系統)",
        "questions": "如何設計IQC進料檢驗AI表單（品號/批號/AQL/量測值/判定/照片上傳）？如何設定條件觸發當判定為NG時自動發出異常通知？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full Function Platform",
        "code": "Q3",
        "dimension": "品質SOP",
        "ability": "釘釘品質系統與SOP發布管理  (品質程序書/WI發布/版本受控/執行記錄/稽核追蹤)",
        "levels": {
          "0": "無",
          "1": "了解釘釘品質系統模組功能，能查閱SOP",
          "2": "能主導SOP文件在釘釘發布/版本控制/執行記錄/未執行追蹤",
          "3": "建立品質文件全生命週期管理系統（起草→審批→發布→受控→廢止）+IATF16949稽核符合案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(SOP查閱+執行記錄填寫)｜L5A必備(SOP發布+版本受控+執行記錄追蹤)｜L6A主導(品質文件全生命週期+IATF16949符合)",
        "questions": "釘釘品質系統如何設定SOP文件「版本受控」？如何在IATF16949稽核時快速提供品質記錄證據？"
      }
    ],
    "salary_structure": [
      {
        "grade": "L3A",
        "title_zh": "助理品管員",
        "title_en": "QC Inspector Jr.",
        "salary_min": "34000",
        "salary_mid": "37000",
        "salary_max": "41000",
        "requirements": "P45~P50",
        "promotion": "IQC基礎操作、量具基礎使用、AQL概念、OJT帶領下執行",
        "amoeba": "執行者/學習者"
      },
      {
        "grade": "L3B",
        "title_zh": "助理品管工程師",
        "title_en": "Asst. QC Engineer",
        "salary_min": "36000",
        "salary_mid": "39000",
        "salary_max": "43000",
        "requirements": "P50",
        "promotion": "獨立執行IQC/FQC抽樣、基礎儀器操作、SOP閱讀理解",
        "amoeba": "執行者/學習者"
      },
      {
        "grade": "L4A",
        "title_zh": "品管工程師",
        "title_en": "QC Engineer",
        "salary_min": "41000",
        "salary_mid": "46000",
        "salary_max": "52000",
        "requirements": "P55",
        "promotion": "獨立執行IQC/PQC/FQC、ECE R65基礎認知、8D基礎、IATF基礎認知",
        "amoeba": "獨立執行者"
      },
      {
        "grade": "L4B",
        "title_zh": "品管工程師(資)",
        "title_en": "QC Engineer II",
        "salary_min": "46000",
        "salary_mid": "52000",
        "salary_max": "58000",
        "requirements": "P60~P65",
        "promotion": "熟練IQC/FQC、SPC基礎、FMEA初步、PPAP文件了解、量測設備獨立操作",
        "amoeba": "獨立執行者"
      },
      {
        "grade": "L5A",
        "title_zh": "資深品管工程師",
        "title_en": "Senior QC Engineer",
        "salary_min": "54000",
        "salary_mid": "62000",
        "salary_max": "70000",
        "requirements": "P65~P75",
        "promotion": "熟練SPC/MSA/FMEA、PPAP18項獨立準備、信賴性測試規劃、DVP制定",
        "amoeba": "Reserve Amoeba Leader"
      },
      {
        "grade": "L5B",
        "title_zh": "資深品管工程師(主)",
        "title_en": "Senior QE/QA Engr",
        "salary_min": "60000",
        "salary_mid": "67000",
        "salary_max": "76000",
        "requirements": "P70~P80",
        "promotion": "主導APQP、供應商稽核、客訴8D主導、ECE COP品質管制、信賴性規範建立",
        "amoeba": "Reserve Amoeba Leader"
      },
      {
        "grade": "L6A",
        "title_zh": "主任品管工程師",
        "title_en": "Lead QA/QE Engineer",
        "salary_min": "66000",
        "salary_mid": "75000",
        "salary_max": "85000",
        "requirements": "P75~P85",
        "promotion": "品質系統主導(IATF/AS9100)、內部稽核、品質KPI體系、帶領後進、阿米巴巴長",
        "amoeba": "L1 Amoeba巴長"
      },
      {
        "grade": "L6B",
        "title_zh": "資深主任/品保課長",
        "title_en": "Principal QA Engr / QA Mgr",
        "salary_min": "73000",
        "salary_mid": "82000",
        "salary_max": "95000",
        "requirements": "P80~P90",
        "promotion": "對外技術代表、外部稽核主導、品質成本管理、ECE/SAE型式認證維護、戰略規劃",
        "amoeba": "L1~L2 Amoeba Leader"
      },
      {
        "grade": "L7",
        "title_zh": "首席品管工程師/品保副理",
        "title_en": "Chief QA Engineer / QA Deputy Mgr",
        "salary_min": "86000",
        "salary_mid": "96000",
        "salary_max": "110000",
        "requirements": "P85~P95",
        "promotion": "公司品質最高代言、年度品質策略、跨部門品質體系整合、客戶對口最高層級",
        "amoeba": "L2 Amoeba Leader"
      }
    ]
  },
  {
    "job_name": "採購職務",
    "raw_job_name": "採購職務",
    "filename": "騏宏科技_採購職務職能薪資結構表_v5_0_6.xlsx",
    "competencies": [
      {
        "category": "[A]  請採購核心五大流程  Core Procurement Process",
        "code": "A1",
        "dimension": "請購單\n作業",
        "ability": "請購單作業（全類別）\n依QPLM01/請採購管理程序執行",
        "levels": {
          "0": "從未操作",
          "1": "知道請購類別(原物料/研發/雜項/資產/費用)與審核權限",
          "2": "熟練開立請購單：品號/規格/數量/需求日期/注意事項填寫正確率≥99%",
          "3": "建立請購SOP+訓練新人+異常0件"
        },
        "importance": 5,
        "weight": "QPLM01(H)\nFMLM0101",
        "target_level": "P3B認知(5大類別/審核權限)｜P4A必備(開單正確率≥99%)｜P5A主導(SOP建立+教學)",
        "questions": "品號84開頭免核價是什麼意思？請購單遺漏需求日期如何影響交期？5大請購類別各需哪層主管核准？"
      },
      {
        "category": "[A]  請採購核心五大流程  Core Procurement Process",
        "code": "A2",
        "dimension": "詢比議價\n核價作業",
        "ability": "詢比議價/核價單操作\n(PURI03核價單/免議比條件判斷)",
        "levels": {
          "0": "從未操作",
          "1": "了解詢比議價原則（至少2家/免議比7種情形）",
          "2": "熟練填寫核價單PURI03/依授權核決規定送簽/比價分析",
          "3": "主導價格談判策略+建立物料市場行情資料庫+COST DOWN>3%"
        },
        "importance": 5,
        "weight": "QPLM01(H)\nPURI03",
        "target_level": "P4A必備(詢比議價基本操作+核價單)｜P5A熟練(談判+COST DOWN)｜P6A主導(策略+資料庫建立)",
        "questions": "哪7種情形免議比價？核價單PURI03授權金額分幾級？同一供應商連續2次報價最低可否免比價？"
      },
      {
        "category": "[A]  請採購核心五大流程  Core Procurement Process",
        "code": "A3",
        "dimension": "採購單\n作業",
        "ability": "採購單開立/發出/車用SC-CC標註\n(FMLM0102採購單)",
        "levels": {
          "0": "從未操作",
          "1": "知道採購單核准流程與發出方式（傳真/EMAIL）",
          "2": "熟練開立採購單：含車用SC/CC法令要求標註/特殊條件備注",
          "3": "建立採購單範本庫+異常0件+跨部門審核機制"
        },
        "importance": 5,
        "weight": "QPLM01(H)\nFMLM0102",
        "target_level": "P3B認知(採購單結構/發出方式)｜P4A必備(SC/CC標註+全流程操作)｜P5B主導(範本庫建立)",
        "questions": "車用材料SC/CC在採購單上如何標注？採購單核准金額分幾級？EMAIL發出後供應商未回確認如何處理？"
      },
      {
        "category": "[A]  請採購核心五大流程  Core Procurement Process",
        "code": "A4",
        "dimension": "跟催作業\n(催料)",
        "ability": "P/O跟催作業\n(廠商預計進貨表/交期異常上報)",
        "levels": {
          "0": "從未跟催",
          "1": "知道跟催頻率原則（進料前/異常即時回報）",
          "2": "熟練維護廠商預計進貨表+每日跟催+供應商OTD≥90%",
          "3": "建立跟催系統機制+異常預警SOP+供應商OTD持續≥95%"
        },
        "importance": 5,
        "weight": "QPLM01(H)\n廠商進貨表",
        "target_level": "P3B必備(跟催基本操作/進貨表維護)｜P4A熟練(OTD≥90%/異常上報)｜P5A主導(跟催機制建立)",
        "questions": "供應商延誤3天如何處理？跟催頻率如何設定（長交期料vs近期交貨料差異）？異常上報的標準是什麼？"
      },
      {
        "category": "[A]  請採購核心五大流程  Core Procurement Process",
        "code": "A5",
        "dimension": "收料\n入庫作業",
        "ability": "收料入庫作業\n(智物流APP/鼎新ERP/品保協調)",
        "levels": {
          "0": "從未操作",
          "1": "了解收料5步驟（核對→智物流→拍照→IQC→入庫）",
          "2": "熟練智物流APP掃碼入庫+備品計價修改+進貨單PDF存檔",
          "3": "建立收料SOP+倉管/品保協調機制+異常0件"
        },
        "importance": 4,
        "weight": "WILM0610\n智物流APP",
        "target_level": "P3B認知(收料流程/APP操作)｜P4A熟練(備品計價修改+全流程操作)｜P5A主導(SOP建立)",
        "questions": "備品物料為何無法直接用智物流APP入庫？進貨單存檔路徑為何？品保IQC不合格收料如何處理？"
      },
      {
        "category": "[B]  供應商管理  Supplier Management  (QPLM02供應商管理程序)",
        "code": "B1",
        "dimension": "新供應商\n開發S1-S7",
        "ability": "新供應商開發全流程\n(S1需求確認→S7合格登錄)",
        "levels": {
          "0": "從未開發",
          "1": "了解S1-S7七步驟架構與各階段交付物",
          "2": "熟練執行：市場調查3家→書面初審→打樣承認FAI→QPA稽核（≥70分）→試量產",
          "3": "每季主導≥2家新供應商開發完成+建立開發進度追蹤系統"
        },
        "importance": 5,
        "weight": "QPLM02(D)\nS1-S7流程",
        "target_level": "P4A認知(S1-S7架構)｜P5A熟練(獨立執行完整開發流程+FAI/QPA)｜P5B主導(每季≥2家+系統建立)",
        "questions": "S4打樣承認FAI需哪些文件？QPA評核70分合格但有缺失如何處理？高風險供應商定義有哪些條件？"
      },
      {
        "category": "[B]  供應商管理  Supplier Management  (QPLM02供應商管理程序)",
        "code": "B2",
        "dimension": "供應商\n評核/考核",
        "ability": "供應商月度/季度考核\n(品質60+交期15+價格5+配合度10+技術10)",
        "levels": {
          "0": "從未執行",
          "1": "知道評分5大構面與配分(品質60/交期15/價格5/配合度10/技術10)",
          "2": "熟練每月採集數據+填寫考核表+評等A~E處理（D等輔導/E等淘汰）",
          "3": "建立供應商評核自動化報表+主導季度供應商績效回饋會議"
        },
        "importance": 5,
        "weight": "QPLM02(D)\n供應商評核表",
        "target_level": "P4B認知(評分構面/評等處理)｜P5A熟練(每月考核/數據採集)｜P5B主導(季度回饋會議/自動化報表)",
        "questions": "C等合格廠商如何輔導？OTD延誤3天扣幾分？評分達D等三個月內未改善如何處置？"
      },
      {
        "category": "[B]  供應商管理  Supplier Management  (QPLM02供應商管理程序)",
        "code": "B3",
        "dimension": "現場稽核\nQPA",
        "ability": "供應商現場品質製程稽核\n(QPA Qualification Process Audit)",
        "levels": {
          "0": "從未執行",
          "1": "了解QPA目的與稽核構面（製程/品質/設備/文件）",
          "2": "熟練參與QPA稽核：填寫稽核表/提出缺失/跟追改善",
          "3": "主導獨立執行QPA稽核+稽核報告撰寫+改善驗證"
        },
        "importance": 4,
        "weight": "QPLM02(D)",
        "target_level": "P4B認知(QPA稽核流程)｜P5A熟練(參與執行+缺失追蹤)｜P6A主導(獨立稽核+報告)",
        "questions": "QPA稽核哪4大構面？現場稽核發現SC/CC管控不足如何處理？高風險供應商稽核頻率如何決定？"
      },
      {
        "category": "[B]  供應商管理  Supplier Management  (QPLM02供應商管理程序)",
        "code": "B4",
        "dimension": "合格供應商\n名冊管理",
        "ability": "合格供應商名冊(AVL替代供應商)\n維護/更新/公告",
        "levels": {
          "0": "從未操作",
          "1": "了解名冊架構與維護頻率",
          "2": "熟練：新增/移除供應商/更新認證狀態/通知文管中心發行",
          "3": "建立名冊動態維護機制+第二供應商覆蓋率追蹤≥關鍵料80%"
        },
        "importance": 3,
        "weight": "QPLM02(D)\nAVL名冊",
        "target_level": "P4A必備(名冊維護基本操作)｜P5A熟練(第二供應商覆蓋率管理)｜P5B主導(策略性供應鏈布局)",
        "questions": "合格供應商名冊何時需要更新？第二供應商覆蓋率KPI目標是多少？供應商被淘汰後名冊如何處理？"
      },
      {
        "category": "[B]  供應商管理  Supplier Management  (QPLM02供應商管理程序)",
        "code": "B5★",
        "dimension": "對帳\n付款作業",
        "ability": "供應商對帳/應付憑單製作\n(每月25號對帳→28號前交財務)",
        "levels": {
          "0": "從未操作",
          "1": "了解每月25號對帳流程與應付憑單製作",
          "2": "熟練：與供應商核對進貨單/採購單→應付憑單製作→28號前交財務",
          "3": "建立對帳自動化核對機制+對帳差異率<0.1%"
        },
        "importance": 4,
        "weight": "QPLM02\nERP對帳",
        "target_level": "P4A必備(對帳操作/應付憑單)｜P5A熟練(差異追蹤/財務介面)｜P5B主導(自動化機制建立)",
        "questions": "供應商進貨數量與採購單不符如何處理？預付款採購如何在ERP上操作？對帳差異超過容許值如何升級處理？"
      },
      {
        "category": "[C]  NPI新產品採購導入  NPI Procurement  (APQP五階段採購介入)",
        "code": "C1",
        "dimension": "APQP\n採購介入",
        "ability": "APQP五階段採購角色\n(Phase1計畫→Phase6回饋)",
        "levels": {
          "0": "從未參與",
          "1": "了解採購在APQP各階段的角色與交付物",
          "2": "熟練：Phase1識別關鍵料/長交期料+Phase2追蹤研登BOM進度+Phase4試產備料",
          "3": "主導NPI採購全程+每季NPI結案報告+採購評估表標準化"
        },
        "importance": 5,
        "weight": "QPRD04 APQP\nNPI採購評估表",
        "target_level": "P4B認知(APQP採購介入時機)｜P5A熟練(Phase1-6執行/關鍵料識別)｜P5B主導(NPI全程/結案報告)",
        "questions": "APQP第一階段採購需提交什麼？長交期料如何定義（騏宏標準）？NPI時LED分BIN原則如何影響物料規格鎖定？"
      },
      {
        "category": "[C]  NPI新產品採購導入  NPI Procurement  (APQP五階段採購介入)",
        "code": "C2",
        "dimension": "打樣承認\n作業",
        "ability": "新料打樣承認全流程\n(送樣→FAI→承認書/一般料≤30天/模具光學≤60天)",
        "levels": {
          "0": "從未執行",
          "1": "了解打樣承認流程與時效要求",
          "2": "熟練：提供圖面/規格→催促供應商送樣→研發/品保FAI確認→承認書簽發",
          "3": "打樣承認時效達成率≥90%+建立打樣跟催SOP"
        },
        "importance": 4,
        "weight": "QPLM02(D)\n送樣承認書",
        "target_level": "P4A必備(打樣基本流程/時效追蹤)｜P5A熟練(FAI協調+承認書管理)｜P5B主導(SOP建立+達成率管理)",
        "questions": "FAI首件確認需哪些文件？光學件打樣時間為何比一般料長？打樣承認超時如何處理與紀錄？"
      },
      {
        "category": "[C]  NPI新產品採購導入  NPI Procurement  (APQP五階段採購介入)",
        "code": "C3",
        "dimension": "新料交接\n管理",
        "ability": "新料量產導入交接\n(S6→S7/新料交接確認表/雙簽名)",
        "levels": {
          "0": "從未執行",
          "1": "了解新料從開發→量產交接的必要性",
          "2": "熟練執行新料交接：供應商資訊/價格/交期/品質重點→寫入新料交接確認表雙簽",
          "3": "建立新料交接標準流程+知識庫移轉零遺漏"
        },
        "importance": 3,
        "weight": "新料交接\n確認表",
        "target_level": "P4B認知(交接流程概念)｜P5A必備(獨立執行交接確認+知識移轉)｜P5B主導(流程標準化建立)",
        "questions": "新料交接會議需確認哪些事項？交接後採購員若發現數據有誤如何回溯？如何確保交接完整不遺漏？"
      },
      {
        "category": "[C]  NPI新產品採購導入  NPI Procurement  (APQP五階段採購介入)",
        "code": "C4",
        "dimension": "BOM/ECN\n設變整合",
        "ability": "BOM建立/ECN設計變更整合\n(影響採購的設變時效管理)",
        "levels": {
          "0": "從未處理",
          "1": "了解ECN設變對採購的影響（舊料消化/新料備料時程）",
          "2": "熟練：收到ECN→評估影響BOM品項→舊料消化方案→新料備料時程確認",
          "3": "主導ECN採購整合管理+零設變遺漏+庫存衝擊最小化"
        },
        "importance": 3,
        "weight": "設變整合\n管理紀錄\nECN表",
        "target_level": "P4B認知(ECN對採購影響)｜P5A熟練(舊料消化+新料備料協調)｜P5B主導(ECN採購整合主席)",
        "questions": "ECN發生後採購需在多少時間內回應？舊料庫存如何評估是否可消化？LED改BIN對BOM如何更新？"
      },
      {
        "category": "[D]  物料分類專業知識  Material Category Knowledge  (騏宏料號體系)",
        "code": "D1",
        "dimension": "電子料\n(IC/LED/PCB)",
        "ability": "電子料採購專業知識\n(IC/LED/PCB/被動元件-料號20/31/71/81系列)",
        "levels": {
          "0": "無相關知識",
          "1": "知道電子料主要品項與料號前綴(20/31/71/81)",
          "2": "熟練：IC長交期備料策略/LED分BIN管控/PCB Gerber交管/被動元件規格替代",
          "3": "電子料COST DOWN>3%/第二供應商覆蓋率≥80%/停產預警機制建立"
        },
        "importance": 5,
        "weight": "物料分類表\n料號體系",
        "target_level": "P4A必備(電子料主要品項/長交期概念)｜P5A熟練(分BIN/替代/Gerber交管)｜P5B主導(策略/COST DOWN)",
        "questions": "LED分BIN的P/N（品號）通常如何標示？IC停產預警通常提前多久需要因應？PCB Gerber檔移交採購需注意什麼？"
      },
      {
        "category": "[D]  物料分類專業知識  Material Category Knowledge  (騏宏料號體系)",
        "code": "D2",
        "dimension": "機構件\n(鋁底/燈蓋)",
        "ability": "機構件採購專業知識\n(鋁底/外殼/燈蓋/鋁擠/壓鑄-料號50/51系列)",
        "levels": {
          "0": "無相關知識",
          "1": "知道機構件主要品項與料號前綴(50/51)",
          "2": "熟練：模具開發配合/表面處理(陽極/噴漆)品質重點/長交期提前下單策略",
          "3": "機構件COST DOWN>2%/模具供應商管理/表面處理稽核能力"
        },
        "importance": 5,
        "weight": "物料分類表\n料號體系",
        "target_level": "P4B認知(機構件品項/模具概念)｜P5A熟練(模具開發跟催/表面處理品質)｜P5B主導(策略/COST DOWN)",
        "questions": "鋁底鑄造與鋁擠型採購週期差異？模具開發採購流程與一般物料有何不同？陽極氧化品質驗收標準如何設定？"
      },
      {
        "category": "[D]  物料分類專業知識  Material Category Knowledge  (騏宏料號體系)",
        "code": "D3",
        "dimension": "線材/連接器\n(料號37系列)",
        "ability": "線材/連接器採購專業知識\n(客製線材組/端子/接頭-料號61系列)",
        "levels": {
          "0": "無相關知識",
          "1": "知道線材類特性（客製交期較長/AWG線徑/耐溫等級）",
          "2": "熟練：客製線材規格確認/交期預排/接頭選型建議",
          "3": "線材供應商第二源建立/線材COST DOWN策略"
        },
        "importance": 3,
        "weight": "物料分類表\n料號61系列",
        "target_level": "P4A認知(線材基本規格概念)｜P5A熟練(客製線材跟催/交期策略)｜P5B主導(第二源/COST DOWN)",
        "questions": "客製線材通常比標準線材多多少前置時間？AWG線徑選型錯誤如何影響安規認證？客製連接器如何避免斷料？"
      },
      {
        "category": "[D]  物料分類專業知識  Material Category Knowledge  (騏宏料號體系)",
        "code": "D4",
        "dimension": "包輔材/\n消耗品",
        "ability": "包輔材/消耗品採購\n(料號74/80系列/包材打樣承認/回收制度)",
        "levels": {
          "0": "無相關知識",
          "1": "知道包輔材類別(泡棉/紙托/包材/輔耗材)與料號前綴",
          "2": "熟練：包材打樣承認/回收再利用機制/安全庫存設定/定期補貨機制",
          "3": "建立包材管理SOP+回收率目標≥90%+包材COST DOWN策略"
        },
        "importance": 3,
        "weight": "物料分類表\n料號74/80",
        "target_level": "P4A必備(包輔材基本管理)｜P5A熟練(打樣承認+回收機制)｜P5B主導(SOP+COST DOWN)",
        "questions": "包材回收率KPI如何計算？泡棉類包材如何確保防靜電要求？包材儲存期限如何管控？"
      },
      {
        "category": "[D]  物料分類專業知識  Material Category Knowledge  (騏宏料號體系)",
        "code": "D5★",
        "dimension": "模具採購\n管理",
        "ability": "模具採購專業管理\n(射出/沖壓/鋁擠/壓鑄模具-開模→試模→承認)",
        "levels": {
          "0": "從未接觸",
          "1": "了解模具採購4大類別（射出/沖壓/鋁擠/壓鑄）流程差異",
          "2": "熟練：報價評估/開模跟催/試模記錄確認/量產承認/設變費估算",
          "3": "主導模具供應商管理+建立模具履歷資料庫+模具COST DOWN策略"
        },
        "importance": 4,
        "weight": "模具採購\n管理規範",
        "target_level": "P4B認知(4大模具類別基本概念)｜P5A熟練(開模流程+試模跟催)｜P6A主導(模具策略+資料庫建立)",
        "questions": "射出模具T1/T2/T3試模各確認什麼？模具設變費如何估算？模具壽命如何追蹤與預防性修繕？"
      },
      {
        "category": "[E]  法規/品質/IATF知識  Regulatory & Quality Knowledge",
        "code": "E1",
        "dimension": "IATF16949\n採購相關條文",
        "ability": "IATF16949/AS9100\n採購章節條文(8.4供應商管理)",
        "levels": {
          "0": "無了解",
          "1": "知道IATF16949 8.4條款採購要求重點",
          "2": "熟練：控制外部提供過程/供應商的選擇/監控/績效評鑑 條文執行",
          "3": "代表採購接受IATF稽核/稽核零缺失/撰寫回應"
        },
        "importance": 4,
        "weight": "IATF16949\n8.4條款\nAS9100D",
        "target_level": "P4B認知(8.4條款重點)｜P5A熟練(條文執行/稽核應對)｜P5B主導(代表採購接受稽核)",
        "questions": "IATF16949 8.4.2對SC/CC材料的特別要求是什麼？二方稽核頻率如何規定？外部提供過程如何管控？"
      },
      {
        "category": "[E]  法規/品質/IATF知識  Regulatory & Quality Knowledge",
        "code": "E2",
        "dimension": "車用法規\n基礎知識",
        "ability": "車用採購法規基礎\n(SAE/ECE規範對物料採購的影響)",
        "levels": {
          "0": "無了解",
          "1": "知道SAE/ECE法規對車用物料的要求（SC/CC概念/認證批次管控）",
          "2": "熟練：採購單SC/CC標注/安規批次管控（確保生產批次與認證一致）",
          "3": "主導安規物料採購策略+建立批次管控SOP"
        },
        "importance": 3,
        "weight": "SAE/ECE\n法規基礎",
        "target_level": "P4A認知(SC/CC概念/採購標注)｜P5A熟練(批次管控/安規策略)｜P5B主導(批次管控SOP建立)",
        "questions": "SAE SC/CC材料採購時需要什麼特別文件？安規認證更新時已採購的舊批料如何處理？ECE R65法規對LED料有何要求？"
      },
      {
        "category": "[E]  法規/品質/IATF知識  Regulatory & Quality Knowledge",
        "code": "E3",
        "dimension": "進出口/\n國際採購",
        "ability": "國際採購/進出口法規\n(Incoterms/報關/匯率/信用狀L/C)",
        "levels": {
          "0": "從未接觸",
          "1": "了解主要Incoterms條件差異(FOB/CIF/EXW)與進口報關流程",
          "2": "熟練：外幣採購匯率風險管控/報關文件準備/清關時效≥3工作天",
          "3": "主導國際採購策略+信用狀操作+匯損控制≤1%"
        },
        "importance": 4,
        "weight": "Incoterms2020\n關稅法規",
        "target_level": "P5A認知(Incoterms基本概念)｜P5B熟練(外幣/報關/匯率管控)｜P6A主導(國際採購策略)",
        "questions": "FOB與CIF在風險轉移點有何差異？匯損控制目標是採購金額多少%以內？信用狀L/C需準備哪些文件？"
      },
      {
        "category": "[E]  法規/品質/IATF知識  Regulatory & Quality Knowledge",
        "code": "E4",
        "dimension": "IQC來料\n品質管理",
        "ability": "IQC進料品質異常處理\n(通知供應商/退貨/SCAR執行)",
        "levels": {
          "0": "從未處理",
          "1": "了解IQC異常處理流程（通知→協議→退貨/讓步）",
          "2": "熟練：接收IQC異常→通知供應商→SCAR要求→退貨執行→品質改善追蹤",
          "3": "IQC直通率≥95%+建立供應商品質改善SOP+高風險供應商主動預防"
        },
        "importance": 4,
        "weight": "QPQC IQC\nSCAR表格",
        "target_level": "P4A必備(IQC異常通知/退貨操作)｜P5A熟練(SCAR追蹤/改善驗證)｜P5B主導(預防性品質管理)",
        "questions": "IQC不合格後採購需在多少小時內聯絡供應商？SCAR需要供應商幾天內回覆？如何處理緊急生產需要讓步使用？"
      },
      {
        "category": "[F]  ERP系統/工具操作  ERP & Tools Operation  (鼎新ERP/智物流/釘釘)",
        "code": "F1",
        "dimension": "鼎新ERP\n採購模組",
        "ability": "鼎新ERP採購模組\n(請購/採購/跟催/對帳/報表全流程)",
        "levels": {
          "0": "從未操作",
          "1": "知道ERP採購模組主要功能（請購→採購→入庫→對帳）",
          "2": "熟練：全流程ERP操作/單據0錯誤/報表匯出分析",
          "3": "建立ERP採購作業SOP+教導新人+提出系統優化建議"
        },
        "importance": 5,
        "weight": "鼎新ERP\n採購模組",
        "target_level": "P3B必備(ERP基本操作/請採購單)｜P4A熟練(全流程/報表操作)｜P5A主導(SOP建立+教導)",
        "questions": "如何在ERP中查詢某料號的採購歷史單價？ERP未到貨明細表如何匯出？採購單轉入庫的操作步驟是什麼？"
      },
      {
        "category": "[F]  ERP系統/工具操作  ERP & Tools Operation  (鼎新ERP/智物流/釘釘)",
        "code": "F2",
        "dimension": "LRP\n缺料管理",
        "ability": "LRP物料需求預估/缺料表\n(中長期雷達/短期作戰圖)",
        "levels": {
          "0": "從未使用",
          "1": "了解LRP（中長期3-6個月物料需求預估）vs缺料表（短期1-4週）的差異",
          "2": "熟練：每月跑LRP報表識別關鍵料缺口/每週缺料表三分類處理（立即/即將/假缺）",
          "3": "LRP+缺料表雙軌管理優化→缺料事件發生率↓50%"
        },
        "importance": 5,
        "weight": "LRP報表\n缺料表Excel",
        "target_level": "P4A必備(LRP vs缺料表概念區分)｜P5A熟練(雙軌操作/缺料三分類處理)｜P5B主導(機制優化)",
        "questions": "「假缺料」如何辨識與處理？LRP報表中長交期料的定義是多少天？缺料表中「即將缺料黃燈」的觸發條件？"
      },
      {
        "category": "[F]  ERP系統/工具操作  ERP & Tools Operation  (鼎新ERP/智物流/釘釘)",
        "code": "F3",
        "dimension": "FCST備料\n計畫操作",
        "ability": "FCST備料計畫更新/發送\n(業務FCST→採購備料策略→供應商發送)",
        "levels": {
          "0": "從未操作",
          "1": "了解FCST備料計畫的作用與更新頻率",
          "2": "熟練：收到業務FCST→更新備料計畫→發送關鍵供應商→確認產能承諾",
          "3": "FCST準確率追蹤+建立FCST備料SOP+供應商產能預訂機制"
        },
        "importance": 4,
        "weight": "FCST備料\n計畫表Excel",
        "target_level": "P4A必備(FCST基本操作/發送)｜P5A熟練(準確率追蹤/供應商產能協議)｜P5B主導(SOP+機制建立)",
        "questions": "FCST與實際訂單的差異超過多少%需要重新協商供應商交期？如何向供應商發送FCST同時取得產能承諾？"
      },
      {
        "category": "[F]  ERP系統/工具操作  ERP & Tools Operation  (鼎新ERP/智物流/釘釘)",
        "code": "F4★",
        "dimension": "採購報表\n製作分析",
        "ability": "採購報表製作\n(KPI儀表板/供應商考核表/COST DOWN報告)",
        "levels": {
          "0": "從未製作",
          "1": "知道採購主要報表名稱與用途",
          "2": "熟練：KPI四大構面(成本/品質/交期/效率)報表製作+月度分析",
          "3": "建立自動化採購KPI儀表板+月度報告標準格式"
        },
        "importance": 3,
        "weight": "Excel/ERP\nKPI報表",
        "target_level": "P4B認知(主要報表名稱)｜P5A熟練(KPI四構面製作)｜P5B主導(自動化儀表板建立)",
        "questions": "採購COST DOWN如何計算公式？供應商OTD的計算分母是採購批次數還是品項數？KPI月報需包含哪幾個指標？"
      },
      {
        "category": "[G]  跨部門協調溝通  Cross-Department Coordination  (7大例行會議)",
        "code": "G1",
        "dimension": "生管\n料況協調",
        "ability": "與生管協調料況\n(缺料週會/生產早會/料況快報)",
        "levels": {
          "0": "從未協調",
          "1": "知道缺料週會（每週三）與生產早會採購應報告的內容",
          "2": "熟練：每日快報缺料/異常→週三缺料表三分類→週五產銷會提料況預警",
          "3": "建立料況預警機制→因料況造成停線事件≤2件/年"
        },
        "importance": 5,
        "weight": "各會議記錄\nSOP",
        "target_level": "P4A必備(早會/缺料週會內容準備)｜P5A熟練(預警機制/三分類快報)｜P5B主導(料況預警SOP建立)",
        "questions": "生產早會採購需彙報哪三項數據？缺料三分類（立即/即將/假缺）各自的處理時效是什麼？"
      },
      {
        "category": "[G]  跨部門協調溝通  Cross-Department Coordination  (7大例行會議)",
        "code": "G2",
        "dimension": "品保\nIQC協調",
        "ability": "與品保IQC協調\n(來料異常→退貨→改善追蹤)",
        "levels": {
          "0": "從未協調",
          "1": "了解採購與品保在IQC異常的協調機制",
          "2": "熟練：IQC不合格→採購通知供應商24h內→協調退貨或讓步使用→SCAR追蹤",
          "3": "IQC直通率≥95%+建立採購品保協調SOP"
        },
        "importance": 4,
        "weight": "IQC程序\n異常單",
        "target_level": "P4A必備(IQC通知流程/24h規定)｜P5A熟練(讓步使用評估/SCAR追蹤)｜P5B主導(協調SOP建立)",
        "questions": "讓步使用需要哪些人簽核？IQC連續三批不合格如何升級處理？採購在SCAR中的責任是什麼？"
      },
      {
        "category": "[G]  跨部門協調溝通  Cross-Department Coordination  (7大例行會議)",
        "code": "G3",
        "dimension": "研發\nNPI溝通",
        "ability": "與研發協調NPI新物料\n(新料規格確認/BOM移交/技術問題解決)",
        "levels": {
          "0": "從未協調",
          "1": "了解採購與研發在NPI各階段的溝通節點",
          "2": "熟練：新料規格確認→BOM品項技術問題協調→替代料技術評審配合",
          "3": "NPI採購介入率100%/採購節點不漏接/新料導入時效達成率≥90%"
        },
        "importance": 4,
        "weight": "NPI流程\nBOM表",
        "target_level": "P4B認知(NPI採購溝通節點)｜P5A熟練(BOM技術協調/替代料評審)｜P5B主導(NPI介入機制建立)",
        "questions": "研發新提BOM後採購需多少時間內完成首次評估？替代料採購如何確認技術可行性不越權？"
      },
      {
        "category": "[G]  跨部門協調溝通  Cross-Department Coordination  (7大例行會議)",
        "code": "G4★",
        "dimension": "財務\n對帳付款",
        "ability": "與財務協調應付帳款\n(應付憑單→付款申請→帳期管理)",
        "levels": {
          "0": "從未協調",
          "1": "了解應付憑單製作與財務交付時間（28號前）",
          "2": "熟練：月底對帳→應付憑單28號前交財務→帳期管理/提前付款折扣確認",
          "3": "建立採購財務介面SOP+應付帳款差異率<0.1%"
        },
        "importance": 3,
        "weight": "財務會計\n流程",
        "target_level": "P4B認知(應付憑單/時間節點)｜P5A熟練(帳期管理/折扣確認)｜P5B主導(介面SOP建立)",
        "questions": "應付憑單需要附哪些附件？帳期30天vs60天的供應商如何在ERP中區分設定？提前付款折扣如何向主管申請？"
      },
      {
        "category": "[H]  戰略採購與管理能力  Strategic Procurement  (Leader核心職責)",
        "code": "H1",
        "dimension": "COST DOWN\n談判策略",
        "ability": "採購成本降低談判\n(年度COST DOWN目標≥3%/談判策略/長約框架)",
        "levels": {
          "0": "從未執行",
          "1": "了解COST DOWN計算公式與目標(≥3%/年)",
          "2": "熟練：市場行情分析→供應商成本結構拆解→談判策略→簽訂降價協議",
          "3": "主導年度COST DOWN計畫+達成≥3%+建立供應商成本資料庫"
        },
        "importance": 5,
        "weight": "採購手冊\nCOST DOWN報告",
        "target_level": "P5A認知(COST DOWN計算/目標)｜P5B熟練(談判策略/長約框架)｜P6A主導(年度策略/資料庫建立)",
        "questions": "採購COST DOWN公式如何計算？談判中如何拆解供應商成本結構（原料/人工/製費/利潤）？框架合約如何談判？"
      },
      {
        "category": "[H]  戰略採購與管理能力  Strategic Procurement  (Leader核心職責)",
        "code": "H2",
        "dimension": "國際採購\n管理",
        "ability": "國際採購全程管理\n(詢報價/合約/清關/匯率/L-C/Incoterms)",
        "levels": {
          "0": "從未執行",
          "1": "了解國際採購Incoterms主要條件(FOB/CIF/EXW)差異",
          "2": "熟練：外幣報價確認/合約管理/進口報關文件/清關時效≤3工作天",
          "3": "主導國際採購策略+匯損控制≤1%+信用狀L/C操作"
        },
        "importance": 4,
        "weight": "Incoterms2020\n國際採購",
        "target_level": "P5B認知(Incoterms基礎)｜P6A熟練(全程管理/匯率/L/C)｜P6B主導(策略/匯損控制)",
        "questions": "如何評估是否需要使用信用狀L/C？匯損如何計算並在報告中呈現？進口報關需準備哪些文件清單？"
      },
      {
        "category": "[H]  戰略採購與管理能力  Strategic Procurement  (Leader核心職責)",
        "code": "H3",
        "dimension": "工作分解\n授權管理",
        "ability": "採購Leader工作規劃/分解/授權\n(KPI拆解→A/B分配→監控→培育)",
        "levels": {
          "0": "從未擔任主管",
          "1": "了解採購Leader五大核心職責（規劃/分配/監控/協調/培育）",
          "2": "熟練：KPI目標分解至個人/每日看板監控/異常浮現機制/OJT計畫執行",
          "3": "主導3人團隊KPI全面達標+建立異常管理機制+技能矩陣更新"
        },
        "importance": 4,
        "weight": "採購手冊\nLeader章節",
        "target_level": "P5B認知(Leader職責架構)｜P6A熟練(KPI分解/授權監控/OJT)｜P6B主導(團隊KPI全面達標)",
        "questions": "如何將公司COST DOWN 3%目標分解到採購A和採購B？每日看板監控哪三個關鍵數據？OJT計畫如何制訂？"
      },
      {
        "category": "[H]  戰略採購與管理能力  Strategic Procurement  (Leader核心職責)",
        "code": "H4★",
        "dimension": "採購BSC\n績效管理",
        "ability": "採購平衡計分卡/KPI儀表板\n(成本/品質/交期/效率四大構面)",
        "levels": {
          "0": "從未執行",
          "1": "了解採購KPI四大構面（成本/品質/交期/效率）",
          "2": "熟練：月度KPI數據採集/圖表製作/TOP3問題/PDCA進度報告",
          "3": "建立採購KPI自動化儀表板+主導月度績效Review+驅動持續改善"
        },
        "importance": 4,
        "weight": "採購KPI\nBSC",
        "target_level": "P5A認知(KPI四構面定義)｜P5B熟練(月度Review/PDCA)｜P6A主導(自動化儀表板/績效驅動)",
        "questions": "OTD計算公式是什麼？IQC直通率目標值是多少？COST DOWN達成率如何與獎金制度結合？"
      },
      {
        "category": "[I]  AI工具應用能力  AI-Augmented Procurement  (採購自動化提效)",
        "code": "I1",
        "dimension": "Claude\nArtifacts/Chart",
        "ability": "Claude Artifacts/Chart\n(採購數據視覺化/KPI Dashboard/比價分析圖)",
        "levels": {
          "0": "從未使用",
          "1": "能用Claude Artifacts產出基礎採購圖表(供應商OTD柱狀圖/COST DOWN趨勢線)",
          "2": "熟練：自動生成月度採購KPI Dashboard/供應商評核雷達圖/FCST vs實際對比圖",
          "3": "建立採購部門AI圖表標準模板+節省報告製作時間≥50%"
        },
        "importance": 5,
        "weight": "claude.ai",
        "target_level": "P4A起建立(基礎圖表)｜P5A必備(KPI Dashboard+供應商評核圖)｜P5B主導(部門模板+效率提升)",
        "questions": "如何用Claude生成12個供應商OTD的雷達圖比較？月度COST DOWN累計達成率進度圖如何設計？"
      },
      {
        "category": "[I]  AI工具應用能力  AI-Augmented Procurement  (採購自動化提效)",
        "code": "I2",
        "dimension": "Cowork\n桌面自動化",
        "ability": "Claude Cowork\n(採購報表自動生成/ERP匯出/供應商通知自動化)",
        "levels": {
          "0": "從未使用",
          "1": "了解Cowork能自動化哪些採購工作（ERP匯出/進貨表更新/郵件通知）",
          "2": "熟練設定：ERP未到貨表→Cowork自動整理→釘釘通知生管/採購A/B",
          "3": "建立部門Cowork自動化SOP+節省重複作業≥30%/月"
        },
        "importance": 4,
        "weight": "claude.ai\nCowork",
        "target_level": "P4B認知(Cowork採購工作流)｜P5A必備(未到貨/缺料通知自動化)｜P5B主導(部門自動化SOP)",
        "questions": "哪些採購日常作業最適合先用Cowork自動化（優先順序）？Cowork如何與鼎新ERP連接匯出報表？"
      },
      {
        "category": "[I]  AI工具應用能力  AI-Augmented Procurement  (採購自動化提效)",
        "code": "I3",
        "dimension": "Claude Code\nAI採購分析",
        "ability": "Claude Code\n(比價分析腳本/供應商評核自動化/BOM成本試算)",
        "levels": {
          "0": "從未使用",
          "1": "了解Claude Code能協助非程式背景採購員進行Excel自動化分析",
          "2": "能用Claude Code生成：歷史採購單價分析腳本/供應商月度評核自動計算/BOM成本展算",
          "3": "主導建立採購數據分析自動化工具+節省工時≥5h/週"
        },
        "importance": 3,
        "weight": "claude.ai\nClaude Code",
        "target_level": "P4B認知(AI採購分析概念)｜P5A能用(單價分析/評核自動化)｜P5B主導(數據工具建立+分享)",
        "questions": "如何用Claude Code自動分析過去12個月某料號的價格趨勢？供應商月度OTD評核表如何自動計算評分？"
      },
      {
        "category": "[I]  AI工具應用能力  AI-Augmented Procurement  (採購自動化提效)",
        "code": "I4",
        "dimension": "NotebookLM\nAI知識管理",
        "ability": "Google NotebookLM\n(採購SOP知識庫/供應商資料庫/法規問答庫)",
        "levels": {
          "0": "從未使用",
          "1": "了解NotebookLM能將SOP/供應商資料/法規轉為可問答AI知識庫",
          "2": "熟練建立：QPLM01/QPLM02/Incoterms/SC-CC法規問答庫/供應商評核SOP庫",
          "3": "建立部門採購知識管理體系+縮短新人OJT查詢時間≥40%"
        },
        "importance": 5,
        "weight": "NotebookLM\n(Google)",
        "target_level": "P3B起建立(基礎問答使用)｜P4A必備(SOP/法規知識庫建立)｜P5A主導(部門知識管理+OJT整合)",
        "questions": "如何將採購實務手冊上傳NotebookLM讓全員可即時查詢？如何建立供應商歷史品質問題查詢庫？"
      },
      {
        "category": "[J]  鼎新ERP採購作業流程  (QPLM01 / GP3.1採購職能別引導課程)",
        "code": "J1",
        "dimension": "品號廠商管理\n核價作業",
        "ability": "鼎新ERP 品號廠商建立/核價單流程\n(標準單價制/現行單價制/核價單PURI03建立)",
        "levels": {
          "0": "從未操作",
          "1": "了解品號廠商檔兩種單價制差異（標準/現行），能查詢品號廠商單價",
          "2": "熟練建立品號廠商資料、開立核價單PURI03、執行簽核流程至紅色「核」",
          "3": "建立單價管制機制(單價上限率設定)，核價單與品號廠商檔回寫自動化"
        },
        "importance": 5,
        "weight": "ERP採購模組\nGP3.1 §一~二",
        "target_level": "P3B認知(品號廠商檔查詢/單價制差異)｜P4A必備(核價單PURI03建立+簽核)｜P5A主導(單價管制機制建立)",
        "questions": "標準單價制與現行單價制的差異？採購前置天數如何計算(固定+變動)？核價單確認後如何回寫品號廠商資料？品號84開頭為何免核價？"
      },
      {
        "category": "[J]  鼎新ERP採購作業流程  (QPLM01 / GP3.1採購職能別引導課程)",
        "code": "J2",
        "dimension": "請購單\n詢價/審核流程",
        "ability": "鼎新ERP 請購單/分批請購/詢價審核\n(FMLM0101請購單→詢價單→請購資料更新→採購單)",
        "levels": {
          "0": "從未操作",
          "1": "了解請購→詢比議價→詢價審核→請購資料更新的完整流程",
          "2": "熟練：請購(分批)資料維護→詢價單建立→詢價單審核→請購資料更新拋轉採購單",
          "3": "建立分批請購SOP+詢比議價紀錄管理制度+零漏單機制"
        },
        "importance": 5,
        "weight": "ERP採購模組\nGP3.1 §三~四",
        "target_level": "P4A必備(分批請購維護+詢價單建立)｜P5A熟練(詢比議價紀錄+審核+拋轉)｜P5B主導(SOP+漏單管控)",
        "questions": "分批請購的廠商採購比率vs自訂分批差異？詢價審核的「整張確認」vs「單筆確認」何時使用？分批請購品號可以走詢價流程嗎？"
      },
      {
        "category": "[J]  鼎新ERP採購作業流程  (QPLM01 / GP3.1採購職能別引導課程)",
        "code": "J3",
        "dimension": "採購單\n採購變更流程",
        "ability": "鼎新ERP 採購單建立/採購變更單\n(FMLM0102採購單→採購變更→進貨跟催報表)",
        "levels": {
          "0": "從未操作",
          "1": "了解採購單建立要點(SC/CC標注/料件承認管制)及採購變更版次概念",
          "2": "熟練：採購單建立→核准傳廠商→採購變更單(取消/追加/改期/改價)→廠商進貨預計表列印",
          "3": "建立採購單變更SOP+廠商預計進貨表自動週報機制+逾期未交異常追蹤"
        },
        "importance": 5,
        "weight": "ERP採購模組\nGP3.1 §五~七",
        "target_level": "P4A必備(採購單建立+採購變更操作)｜P5A熟練(廠商預計進貨表跟催)｜P5B主導(異常追蹤機制)",
        "questions": "採購變更版次最多變更幾次？廠商預計進貨表有幾種角度報表？料件承認碼打勾後採購時有何限制？採購單逾期未交如何在ERP中標記追蹤？"
      },
      {
        "category": "[J]  鼎新ERP採購作業流程  (QPLM01 / GP3.1採購職能別引導課程)",
        "code": "J4",
        "dimension": "進貨/退貨\n折讓流程",
        "ability": "鼎新ERP 進貨單/驗收/退貨折讓\n(進貨單→進貨單驗收作業→退貨單/折讓)",
        "levels": {
          "0": "從未操作",
          "1": "了解進貨單建立方式(複製前置採購單)及驗收抽檢/免檢差異，退貨vs驗退差異",
          "2": "熟練：進貨單建立→驗收數量確認→庫存增加確認→退貨單(退貨/折讓類型)",
          "3": "建立進退貨SOP+「直接結帳」設定+進貨異常追蹤自動報表"
        },
        "importance": 5,
        "weight": "ERP採購模組\nGP3.1 §八~九\nWILM0610",
        "target_level": "P3B必備(進貨單建立+驗收基本操作)｜P4A熟練(退貨/折讓+庫存確認)｜P5A主導(SOP+直接結帳設定)",
        "questions": "進貨單建立的「複製前置單」功能如何操作？退貨與驗退在庫存影響上的差異？「直接結帳=Y.整張」vs「y.逐筆」的差異？進貨後IQC抽檢品號如何在ERP設定免/抽/全檢？"
      },
      {
        "category": "[J]  鼎新ERP採購作業流程  (QPLM01 / GP3.1採購職能別引導課程)",
        "code": "J5",
        "dimension": "應付結帳\n付款流程",
        "ability": "鼎新ERP 應付憑單/結帳/付款\n(月結/自動結帳/手動結帳/付款單/預付溢付)",
        "levels": {
          "0": "從未操作",
          "1": "了解應付憑單3種產生方式(直接/手動/自動結帳)及統一vs依廠商結帳日差異",
          "2": "熟練：自動結帳作業執行(依廠商結帳日篩選)→補入發票資料→付款單建立",
          "3": "熟練預付/溢付流程+應付帳款明細表追蹤+月底對帳25號作業標準化"
        },
        "importance": 4,
        "weight": "ERP應付模組\nGP3.1 §十~十四",
        "target_level": "P4A認知(應付憑單3種產生方式+結帳日概念)｜P5A熟練(自動結帳+發票補入+付款)｜P5B主導(預付/溢付+月結SOP)",
        "questions": "統一結帳日vs依廠商結帳日產生的應付憑單差異？預付流程(單次/多次)如何操作？溢付待抵憑單如何在ERP中查詢追蹤？付款單「權責分離」vs「不分離」流程差異？"
      },
      {
        "category": "[J]  鼎新ERP採購作業流程  (QPLM01 / GP3.1採購職能別引導課程)",
        "code": "J6★",
        "dimension": "料件承認管理\n&ERP報表應用",
        "ability": "鼎新ERP 料件承認/採購報表應用\n(料件承認建立/廠商進貨統計表/採購樹狀查詢)",
        "levels": {
          "0": "從未操作",
          "1": "了解料件承認碼的用途(特定廠商才能採購)及主要採購報表名稱",
          "2": "熟練：料件承認資料建立+料件承認異動作業+廠商進貨統計表分析+採購樹狀查詢",
          "3": "建立料件承認定期審查機制+廠商進貨統計表自動週報+ABC分析報表應用"
        },
        "importance": 3,
        "weight": "ERP採購模組\nGP3.1 §五\n報表應用",
        "target_level": "P4B認知(料件承認概念/報表查詢)｜P5A熟練(料件承認建立+廠商進貨統計分析)｜P5B主導(報表自動化+ABC分析)",
        "questions": "料件承認碼勾選後對採購單開立有何限制？廠商進貨統計表如何配合廠商評核使用？採購樹狀資訊查詢可展開哪些層級的單據？"
      },
      {
        "category": "[K]  鼎新ERP盤點作業流程  (庫存管理系統盤點模組 / GP3.1盤點職能別引導課程)",
        "code": "K1",
        "dimension": "抽盤底稿產生\n盤點卡列印",
        "ability": "鼎新ERP 抽盤品號產生作業/庫存盤點卡/品號盤點清單\n(大盤/循環盤點底稿產生+盤點卡列印)",
        "levels": {
          "0": "從未操作",
          "1": "了解抽盤品號產生作業的排序方式(品號/庫別/儲位)及循環盤點碼概念",
          "2": "熟練：輸入盤點底稿編號/日期/品號範圍→產生底稿→列印盤點卡(不列印/盤點/帳面數量選擇)",
          "3": "建立循環盤點SOP(M1/M2/M3循環碼)+盤點卡版型設計+盤點時程規劃"
        },
        "importance": 4,
        "weight": "ERP庫存模組\nGP3.1盤點§2-1\n§2-2",
        "target_level": "P4A認知(抽盤底稿產生基本操作)｜P5A熟練(循環盤點SOP+底稿產生+盤點卡設計)｜P5B主導(盤點制度建立)",
        "questions": "「依品號/庫別/儲位」排序底稿各適用什麼場景？盤點卡「不列印數量」的目的是什麼？循環盤點碼(M1/M2)如何在品號資料中設定？年中大盤點與循環小盤點的底稿設定差異？"
      },
      {
        "category": "[K]  鼎新ERP盤點作業流程  (庫存管理系統盤點模組 / GP3.1盤點職能別引導課程)",
        "code": "K2",
        "dimension": "盤點數量輸入\n(單人/多人)",
        "ability": "鼎新ERP 盤點資料建立作業/實盤資料補入作業\n(單人輸入/多人分批補入/多儲位輸入技巧)",
        "levels": {
          "0": "從未操作",
          "1": "了解盤點資料建立(單人)vs實盤資料補入(多人)的差異及適用時機",
          "2": "熟練：查詢底稿→修改輸入實際盤點數量→多儲位品號分號(;)輸入技巧",
          "3": "建立盤點作業分工SOP+多人補入底稿分配機制+批號品號盤點特殊注意事項"
        },
        "importance": 4,
        "weight": "ERP庫存模組\nGP3.1盤點§2-4",
        "target_level": "P3B認知(盤點資料輸入基本操作)｜P4A熟練(單人/多人模式選擇+多儲位輸入)｜P5A主導(分工SOP+批號管制盤點)",
        "questions": "盤點資料建立作業與實盤資料補入作業在系統上的主要差異？同一品號有多個儲位時如何用分號(;)輸入？批號管制品號在盤點時需特別注意什麼？"
      },
      {
        "category": "[K]  鼎新ERP盤點作業流程  (庫存管理系統盤點模組 / GP3.1盤點職能別引導課程)",
        "code": "K3",
        "dimension": "盤點彙總確認\n盤盈虧明細表",
        "ability": "鼎新ERP 盤點數量重新賦予/盤點資料彙總/盤盈虧明細表\n(盤前數量更新+彙總確認+差異分析)",
        "levels": {
          "0": "從未操作",
          "1": "了解「盤點數量重新賦予作業」的執行時機及彙總確認的目的",
          "2": "熟練：實盤前執行盤點數量重新賦予→輸入實盤數據→工具列「彙總」確認→列印盤盈虧明細表",
          "3": "建立盤點差異分析SOP+差異閾值設定+盤差追蹤庫存狀況查詢作業"
        },
        "importance": 4,
        "weight": "ERP庫存模組\nGP3.1盤點§2-3\n§2-5~2-6",
        "target_level": "P4A認知(盤點彙總確認流程)｜P5A熟練(重新賦予作業+彙總+盤盈虧明細表分析)｜P5B主導(差異分析SOP建立)",
        "questions": "盤點數量重新賦予後為何絕對不能再輸入實盤資料？「帳面與實際相符者」勾選的管理意義？盤點數量-帳面數量>0代表盤盈還是盤虧？如何用庫存狀況查詢作業追查差異原因？"
      },
      {
        "category": "[K]  鼎新ERP盤點作業流程  (庫存管理系統盤點模組 / GP3.1盤點職能別引導課程)",
        "code": "K4★",
        "dimension": "盤盈虧調整\n調整單產生",
        "ability": "鼎新ERP 盤點資料更新作業\n(調整單/成本開帳單產生+庫存調整+盤點成本計算)",
        "levels": {
          "0": "從未操作",
          "1": "了解盤盈虧調整的2種單據(調整單vs成本開帳單)差異及「已更新者重複更新」注意事項",
          "2": "熟練：選底稿→選調整單類型→確認產生→至庫存異動單確認簽核→檢查庫存是否更新",
          "3": "主導盤點成本計算(月底成本計價作業+更新盤點檔單位成本)+盤點結果財務交接SOP"
        },
        "importance": 3,
        "weight": "ERP庫存模組\nGP3.1盤點§2-7",
        "target_level": "P4B認知(調整單vs成本開帳單差異)｜P5A熟練(調整單產生+庫存確認+簽核)｜P5B主導(盤點成本計算+財務交接)",
        "questions": "調整單(一般異動)與成本開帳單(料工費分離)何時各自使用？已更新者要重複更新需勾選什麼？盤盈虧成本如何計算（月底成本計價作業執行步驟）？"
      },
      {
        "category": "[L]  物料管理 / LRP中長期需求規劃  (鼎新ERP LRP / 缺料表雙軌管理)",
        "code": "L1",
        "dimension": "LRP\n物料需求規劃",
        "ability": "LRP中長期物料需求規劃\n(依訂單預估物料需求 / 鼎新LRP模組運作)",
        "levels": {
          "0": "從未接觸",
          "1": "了解LRP定義——依訂單預估物料需求，知道LRP vs MRP差異，了解騏宏LRP=中長期3~6個月物料雷達",
          "2": "熟練：每月/每季跑LRP報表→識別關鍵料缺口(IC/LED/PCB/鋁擠/膠料)→輸出關鍵料需求清單→採購策略制定",
          "3": "主導月度LRP+採購策略連動(長約/備料合約)+與生管/業務三方FCST對齊"
        },
        "importance": 5,
        "weight": "鼎新ERP LRP\n採購手冊",
        "target_level": "P4A必備(LRP概念+報表查詢)｜P5A熟練(每月跑LRP+關鍵料識別+策略連動)｜P5B主導(三方FCST對齊+長約決策)",
        "questions": "LRP與MRP的根本差異？騏宏定義LRP的中長期是幾個月？LRP識別出關鍵料缺口後，採購下一步的決策流程是什麼？長交期料的LRP觸發採購時間節點如何設定？"
      },
      {
        "category": "[L]  物料管理 / LRP中長期需求規劃  (鼎新ERP LRP / 缺料表雙軌管理)",
        "code": "L2",
        "dimension": "缺料表\n三分類管理",
        "ability": "缺料表三分類管理\n(立即缺/即將缺/假缺 短期1~4週作戰圖)",
        "levels": {
          "0": "從未使用",
          "1": "了解缺料表三分類定義：立即缺(立刻請購/催料)、即將缺(黃燈提前通知供應商)、假缺(帳上不準→倉庫盤點)",
          "2": "熟練：每週≥2次產出缺料表→三分類分派處理→與生管/倉庫/採購週三缺料協調會數據對焦",
          "3": "建立缺料表自動化產出機制+缺料事件發生率↓50%+停線事件≤2件/年"
        },
        "importance": 5,
        "weight": "缺料表Excel\n採購手冊",
        "target_level": "P4A必備(缺料三分類概念+每週缺料表操作)｜P5A熟練(自動產出+三方對焦會議主持)｜P5B主導(缺料機制建立+KPI)",
        "questions": "「假缺料」最常見的原因是什麼？如何識別並快速解決？缺料表更新頻率如何決定（接近瓶頸時如何調整）？週三缺料協調會採購需帶哪三項數據進場？"
      },
      {
        "category": "[L]  物料管理 / LRP中長期需求規劃  (鼎新ERP LRP / 缺料表雙軌管理)",
        "code": "L3",
        "dimension": "BOM物料清單\n管理",
        "ability": "BOM管理與物料展算\n(E-BOM/M-BOM /料號體系/簡易BOM展Cost)",
        "levels": {
          "0": "從未接觸BOM",
          "1": "了解BOM層次結構(E-BOM設計/M-BOM製造)、騏宏料號前綴體系(20/31/50/51/61/71/74/80系列)",
          "2": "熟練：BOM品項採購關聯查詢→新機種BOM首次採購評估→BOM Cost試算(材料成本展算)→ECN設變採購影響評估",
          "3": "主導BOM採購標準建立+料號編碼審查+替代料BOM更新管理"
        },
        "importance": 4,
        "weight": "BOM系統\n料號體系表",
        "target_level": "P4A必備(BOM結構理解+料號前綴識別)｜P5A熟練(BOM Cost展算+ECN評估)｜P5B主導(BOM採購標準+替代料管理)",
        "questions": "E-BOM與M-BOM的差異？騏宏料號71開頭代表什麼物料？ECN設變後採購需要在多少時間內完成影響評估？如何用BOM快速估算一款新機種的材料採購成本？"
      },
      {
        "category": "[L]  物料管理 / LRP中長期需求規劃  (鼎新ERP LRP / 缺料表雙軌管理)",
        "code": "L4★",
        "dimension": "安全庫存\n前置天數設定",
        "ability": "安全庫存(SS)/補貨點(ROP)/前置天數設定\n(鼎新ERP品號採購資料/安全存量/補貨倍量)",
        "levels": {
          "0": "從未設定",
          "1": "了解安全庫存三原則(不停產/最小庫存/確認庫存周轉率)及鼎新ERP品號採購資料中固定/變動前置天數設定",
          "2": "熟練：依Lead Time計算SS→設定鼎新ERP安全存量/補貨倍量/前置天數→建立各物料類別標準安全庫存水位",
          "3": "主導年度安全庫存複審(每季)+Lead Time縮短時主動下修SS+呆料風險預警(有SS料件的庫存周轉率監控)"
        },
        "importance": 4,
        "weight": "鼎新ERP\n品號採購資料\n庫存管理",
        "target_level": "P4B認知(SS/ROP/前置天數概念)｜P5A熟練(SS計算+鼎新ERP設定+周轉率監控)｜P5B主導(年度複審+呆料預警)",
        "questions": "安全庫存的計算公式（Lead Time×日均耗用量×安全係數）？鼎新ERP品號採購資料中「固定前置天數+變動前置天數×批量」如何設定？安全庫存設太高的副作用是什麼？如何用庫存周轉率診斷？"
      },
      {
        "category": "[M]  庫存補貨政策  (ABC分類 / 備料策略 / MOQ / 呆滯料管理)",
        "code": "M1",
        "dimension": "物料ABC分類\n備料策略",
        "ability": "物料ABC分類與備料策略設計\n(銷量×穩定性四象限 / 計劃性vs接單後備料)",
        "levels": {
          "0": "從未接觸",
          "1": "了解物料ABC/四象限分類邏輯：以銷售量×需求穩定性區分四象限，第四象限(量大/不穩定)備最多庫存",
          "2": "熟練：對騏宏LED警示燈主力物料進行ABC分類→區分計劃性備料(關鍵料/長交期料)vs接單後備料(通用料/短交期料)→製定各類別備料策略",
          "3": "主導年度物料備料策略制定+FCST準確率提升+備料策略定期滾動更新"
        },
        "importance": 5,
        "weight": "存貨備料策略\n採購手冊",
        "target_level": "P4B認知(ABC四象限分類概念)｜P5A熟練(騏宏物料分類+策略制定)｜P5B主導(年度策略+FCST連動更新)",
        "questions": "物料四象限中哪個象限需要備最多庫存？原因是什麼？LED分BIN料件應屬哪個象限？對應備料策略是什麼？計劃性備料與接單後備料的決策依據(Lead Time/穩定性門檻)如何設定？"
      },
      {
        "category": "[M]  庫存補貨政策  (ABC分類 / 備料策略 / MOQ / 呆滯料管理)",
        "code": "M2",
        "dimension": "MOQ最小批量\n策略管理",
        "ability": "MOQ最小批量管理\n(生產批量限制/採購MOQ談判/合併採購策略)",
        "levels": {
          "0": "從未接觸",
          "1": "了解MOQ來源(設備限制/生產規模/確保獲利/賣方市場)及對庫存積壓的影響",
          "2": "熟練：識別騏宏各物料類別的MOQ特性→採取合併採購/聯合採購/尋找不同規模供應商等策略降低MOQ門檻→MOQ評估表格製作",
          "3": "主導MOQ談判策略(集中採購降門檻)+研發標準化設計導入+第二源MOQ重談"
        },
        "importance": 4,
        "weight": "存貨備料策略\nMOQ管理",
        "target_level": "P4A認知(MOQ成因+5種應對策略)｜P5A熟練(合併採購+MOQ評估表+供應商談判)｜P5B主導(MOQ策略+標準化導入)",
        "questions": "模具一模30穴限制造成的MOQ如何在BOM Cost中計入？採購合併採購策略時如何說服供應商降低MOQ門檻？研發設計標準化如何從根本解決MOQ過高問題？"
      },
      {
        "category": "[M]  庫存補貨政策  (ABC分類 / 備料策略 / MOQ / 呆滯料管理)",
        "code": "M3",
        "dimension": "呆滯料管理\n庫存周轉率",
        "ability": "呆滯料預警/處理/庫存周轉率管理\n(鼎新ERP庫齡分析/呆料處置SOP)",
        "levels": {
          "0": "從未處理",
          "1": "了解呆滯料定義(超過X個月無異動)及庫存周轉率計算公式，了解呆料4大成因(ECN設變/訂單取消/過量備料/品質問題)",
          "2": "熟練：每月從鼎新ERP匯出庫齡分析→識別呆料清單→提交生管/業務評估(消化至其他機種/報廢/退供應商)→庫存周轉率月度追蹤",
          "3": "建立呆料預警機制(庫齡>90天自動標紅)+月度呆料處置會議主持+呆料金額佔庫存比率KPI目標≤5%"
        },
        "importance": 5,
        "weight": "鼎新ERP庫齡\n分析報表\n採購手冊",
        "target_level": "P4B認知(呆料定義/庫存周轉率公式)｜P5A熟練(月度庫齡分析+呆料處置評估)｜P5B主導(預警機制+KPI目標設定)",
        "questions": "庫存周轉率計算公式是什麼(騏宏定義標準)？呆料最常見的4大成因在騏宏各是什麼情境？供應商同意回收呆料的談判策略有哪些？退貨vs折讓vs換料如何評估？"
      },
      {
        "category": "[M]  庫存補貨政策  (ABC分類 / 備料策略 / MOQ / 呆滯料管理)",
        "code": "M4★",
        "dimension": "產品交期塑模\n備料瓶頸分析",
        "ability": "產品交期塑模與備料瓶頸分析\n(BOM展開+各階Lead Time+製程最大作業天數)",
        "levels": {
          "0": "從未接觸",
          "1": "了解產品交期塑模的三要素：製程最大作業天數(生產瓶頸)+零件採購天數(關鍵料/常規料/專用料分類)+分階段領料規劃",
          "2": "熟練：選取騏宏主力機種→展開BOM所有料件Lead Time→找出採購/生產瓶頸料件→制定計劃性備料vs接單後備料分界點",
          "3": "主導新機種APQP Phase1採購評估(交期塑模)+關鍵料識別標準化+Lead Time縮短改善提案(每季≥1件)"
        },
        "importance": 3,
        "weight": "存貨備料策略\nAPQP Phase1\n採購評估表",
        "target_level": "P5A認知(交期塑模三要素概念)｜P5B熟練(主力機種交期塑模執行)｜P6A主導(APQP Phase1整合+Lead Time改善提案)",
        "questions": "製程最大作業天數vs零件採購天數，哪個是備料策略的決定性因素？騏宏LED警示燈哪些料件屬於「關鍵料(計劃性備料)」vs「通用料(接單後備料)」？如何用交期塑模結果說服研發做標準化設計以縮短採購Lead Time？"
      },
      {
        "category": "[N]  NPI新料/替代料原物料開發  (原材料/電子料/光學料/矽膠/膠料/線材 海內外新料開發)",
        "code": "N1",
        "dimension": "NPI原物料\n需求分析",
        "ability": "NPI新機種原物料需求分析\n(BOM首次評估/關鍵料/長交期料識別/新料開發必要性判斷)",
        "levels": {
          "0": "從未執行",
          "1": "了解NPI Phase1採購介入時機：接收研發BOM→識別新料/長交期料/特殊規格料→評估現有供應商可承接性",
          "2": "熟練：BOM拆解→料件分類(延用料/新規格料/全新料)→新料開發時程估算→採購評估表完成(≤5工作天)",
          "3": "主導NPI採購評估標準化+每季NPI物料開發節點達成率≥90%+關鍵料超前佈局(比量產前置6個月識別)"
        },
        "importance": 5,
        "weight": "QPRD04 APQP\nNPI採購評估表\n採購手冊",
        "target_level": "P4B認知(BOM首次評估+料件分類邏輯)｜P5A熟練(採購評估表≤5天完成+開發時程)｜P5B主導(NPI採購標準化+節點KPI)",
        "questions": "接收研發新BOM後採購的第一動作是什麼？如何區分「延用料/新規格料/全新料」三類？各類分別需要多少開發時程？LED分BIN如何在NPI Phase1就鎖定規格？"
      },
      {
        "category": "[N]  NPI新料/替代料原物料開發  (原材料/電子料/光學料/矽膠/膠料/線材 海內外新料開發)",
        "code": "N2",
        "dimension": "電子料/LED\n新料開發",
        "ability": "電子料/LED/IC/PCB 新料開發\n(料號20/31/71/81系列 / BIN規格確認 / 認證批次管控)",
        "levels": {
          "0": "從未開發",
          "1": "了解電子料新料開發重點：IC規格書(Datasheet)閱讀基礎/LED分BIN規格鎖定/PCB Gerber檔交管",
          "2": "熟練：IC替代料3要素評估(Pin相容/電氣特性/封裝)+LED同BIN原則驗證+PCB布線評審配合(Gerber→Netlist→BOM連動)+首批IQC直通率≥95%達標",
          "3": "主導電子料第二供應商覆蓋率≥80%+IC停產預警機制+LED BIN管控SOP建立"
        },
        "importance": 5,
        "weight": "料號20/31/71\n電子料體系\nAPQP Phase2",
        "target_level": "P4A認知(電子料規格書基礎/BIN概念)｜P5A熟練(替代料3要素評估+BIN驗證+Gerber交管)｜P5B主導(第二源+停產預警)",
        "questions": "IC替代料評估「Pin相容/電氣特性/封裝」三要素如何確認？哪一項最容易踩坑？LED換BIN供應商時，光學測試需要重新做哪些驗證（配光/色座標/閃頻）？PCB改版時Gerber檔移交採購需要附哪些文件？"
      },
      {
        "category": "[N]  NPI新料/替代料原物料開發  (原材料/電子料/光學料/矽膠/膠料/線材 海內外新料開發)",
        "code": "N3",
        "dimension": "光學/機構料\n新料開發",
        "ability": "光學件/機構件原物料新料開發\n(料號50/51系列 / 燈蓋/反射罩/鋁底/矽膠密封件/灌封膠)",
        "levels": {
          "0": "從未開發",
          "1": "了解光學/機構料的關鍵規格：透光率/霧度(燈蓋)/硬度Shore A(矽膠密封件)/黏度&固化後硬度(灌封膠)/陽極等級(鋁底)",
          "2": "熟練：光學件打樣承認全流程(圖面→廠商送樣→光學量測→IP測試配合)+矽膠密封件壓縮比/溝槽設計與供應商技術溝通+PU/矽膠雙液灌封膠選型(A/B劑配比/適用溫度範圍驗證)",
          "3": "主導光學件/矽膠件/膠料供應商技術稽核+材料性能資料庫建立+耐候/耐化/耐溫驗證規格標準化"
        },
        "importance": 5,
        "weight": "料號50/51系列\nFMRD0240\nWIQA光學規範",
        "target_level": "P4B認知(光學/矽膠/膠料關鍵規格)｜P5A熟練(打樣承認全流程+技術溝通)｜P5B主導(技術稽核+材料資料庫建立)",
        "questions": "燈蓋PC料透光率與霧度規格如何設定？換供應商後需重做哪些光學驗證？矽膠密封件Shore A硬度高/低對IP密封性能的影響？PU灌封膠vs矽膠灌封膠的選材決策依據是什麼？"
      },
      {
        "category": "[N]  NPI新料/替代料原物料開發  (原材料/電子料/光學料/矽膠/膠料/線材 海內外新料開發)",
        "code": "N4",
        "dimension": "替代料開發\n導入管理",
        "ability": "替代料開發全流程管理\n(替代原因分類/評估/打樣/驗證/BOM更新/庫存交替)",
        "levels": {
          "0": "從未執行",
          "1": "了解替代料5大觸發場景：①成本COST DOWN ②原供應商停產/斷貨 ③品質不穩定 ④Lead Time過長 ⑤新法規要求",
          "2": "熟練：替代料評估表製作(3家比對/規格對照/首樣測試)→通知研發/品保同步確認→小批試用→BOM更新→舊料消化與新料切入時程管理",
          "3": "替代料導入成功率≥80%/季+替代料導入KPI月度追蹤+建立替代料資料庫+每年主動識別高風險單源料→啟動替代料開發"
        },
        "importance": 5,
        "weight": "替代料評估表\nBOM更新流程\nAPQP手冊",
        "target_level": "P5A必備(替代料評估表+5觸發場景判斷)｜P5A熟練(全流程執行+BOM切入管理)｜P5B主導(KPI追蹤+高風險單源識別)",
        "questions": "替代料評估的3家比對需要哪些標準比較維度？原料停產時「庫存消化+替代料切入」的最短操作週期是多少？如何向研發說明替代料評估的必要性並取得快速認可？"
      },
      {
        "category": "[N]  NPI新料/替代料原物料開發  (原材料/電子料/光學料/矽膠/膠料/線材 海內外新料開發)",
        "code": "N5★",
        "dimension": "線材/連接器\n特規新料開發",
        "ability": "客製線材/連接器/端子特規新料開發\n(料號61系列 / 車規耐溫/耐振/防水要求 / 海外線材廠)",
        "levels": {
          "0": "從未開發",
          "1": "了解車用線材關鍵規格：AWG線徑/耐溫等級(85°C/105°C/125°C)/護套材質(PVC/TPE/矽膠)/防水等級(IP67/IP69K)",
          "2": "熟練：客製線材圖面(接頭型號/線徑/長度/顏色/剝線尺寸)交管→至少開發2家合格線材廠→首樣導線阻抗/耐電壓/拉力測試確認",
          "3": "主導海外低成本線材廠開發(越南/中國)+車規連接器替代料(AMP/JST/Molex標準化)+客製線材Lead Time縮短≥20%提案"
        },
        "importance": 4,
        "weight": "料號61系列\n車用線材規格\nSAE/ECE線束",
        "target_level": "P4B認知(車規線材關鍵規格)｜P5A熟練(客製圖面交管+2家合格廠開發)｜P5B主導(海外廠開發+連接器標準化)",
        "questions": "AWG線徑與電流承載的對應關係？車用線材耐溫為何通常選105°C而非85°C？客製線材首樣需要做哪些測試才能通過IQC？海外線材廠開發時，如何管控品質一致性（批次管控/認證文件）？"
      },
      {
        "category": "[O]  海內外供應商開發  (模具/射出成形/鋁擠/壓鑄/沖壓/板金 Taiwan+China+Vietnam)",
        "code": "O1",
        "dimension": "台灣模具\n供應商開發",
        "ability": "台灣模具廠開發全流程\n(射出模/壓鑄模/沖壓模/矽膠模 — T1→T2→T3試模→量產承認)",
        "levels": {
          "0": "從未執行",
          "1": "了解4大模具類別差異(射出/壓鑄/沖壓/矽膠)及台灣模具廠評估重點:設備噸數/鋼材規格/加工精度(±0.01mm)/表面拋光能力",
          "2": "熟練：模具詢價評估(廠商選定→報價分析→合約簽訂)→開模進度跟催(DFM審查→鋼材→加工→T1試模紀錄→T2修模→T3承認)→模具履歷資料建立",
          "3": "主導模具廠分級管理(A/B/C等級)+T1試模一次通過率目標≥70%+模具設計DFM提前審查介入"
        },
        "importance": 5,
        "weight": "模具採購管理\nQPLM02\nDFM審查規範",
        "target_level": "P4B認知(4大模具類別+T1/T2/T3試模意義)｜P5A熟練(開模全流程跟催+模具履歷)｜P5B主導(廠商分級+DFM介入)",
        "questions": "T1/T2/T3試模各自驗收什麼？T1不合格的最常見3個原因是什麼？模具合約中「模具保養週期、修模費用分攤、模具所有權歸屬」如何談判？如何評估一家模具廠的加工能力（設備清單審查重點）？"
      },
      {
        "category": "[O]  海內外供應商開發  (模具/射出成形/鋁擠/壓鑄/沖壓/板金 Taiwan+China+Vietnam)",
        "code": "O2",
        "dimension": "台灣射出/壓鑄\n成形廠開發",
        "ability": "台灣射出成形/鋁壓鑄廠商開發\n(PC/ABS燈蓋/鋁底ADC12 — 製程稽核/首件FAI/量產品質)",
        "levels": {
          "0": "從未執行",
          "1": "了解射出成形廠評估重點(射出機噸數/烘料設備/計量精度/量測儀器)及鋁壓鑄廠評估重點(壓鑄機噸數/熔鋁溫控/後處理能力)",
          "2": "熟練：製程稽核(QPA評分≥70分)→首件FAI確認(尺寸/外觀/材料認証)→試量產(Cpk≥1.33關鍵尺寸)→量產IQC進料管控",
          "3": "主導射出/壓鑄廠製程改善輔導(縮水/翹曲/縮孔根因分析)+材料認證書管控(材質報告COA/RoHS/REACH)+關鍵製程能力(Cpk)定期稽核"
        },
        "importance": 5,
        "weight": "QPLM02\nS1-S7開發流程\nFAI規範",
        "target_level": "P5A必備(射出/壓鑄廠QPA稽核+FAI確認)｜P5A熟練(Cpk追蹤+量產管控)｜P5B主導(製程改善+Cpk定期稽核)",
        "questions": "射出廠QPA稽核中「烘料溫度管控」為何是LED燈具廠的關鍵要求？鋁壓鑄ADC12的RoHS有哪些必須確認的管制物質？Cpk<1.33時採購應如何與供應商協商改善計畫？"
      },
      {
        "category": "[O]  海內外供應商開發  (模具/射出成形/鋁擠/壓鑄/沖壓/板金 Taiwan+China+Vietnam)",
        "code": "O3",
        "dimension": "台灣沖壓/板金\n鋁擠廠開發",
        "ability": "台灣沖壓件/板金/鋁擠型廠商開發\n(料號50系列 — 折彎精度/陽極氧化/表面處理 品質管控)",
        "levels": {
          "0": "從未執行",
          "1": "了解沖壓廠評估重點(沖床噸數/送料精度/折彎回彈管控)+鋁擠廠評估重點(押出模精度/壁厚公差±0.1mm/截面設計配合)+表面處理廠評估(陽極氧化膜厚T6061-T10μm/噴漆附著力)",
          "2": "熟練：沖壓件折彎係數/回彈補償→鋁擠截面圖審查+表面處理承認(鹽霧480h/硬度HV100)→首件FAI+量產IQC",
          "3": "主導鋁擠型截面標準化設計(減少模具數量)+陽極氧化供應商定期品質稽核+表面處理批次管控SOP"
        },
        "importance": 4,
        "weight": "料號50系列\n鋁擠/沖壓規範\nFMRD0240表面",
        "target_level": "P4B認知(沖壓/鋁擠/表面處理評估重點)｜P5A熟練(FAI+品質稽核+批次管控)｜P5B主導(截面標準化+稽核機制)",
        "questions": "鋁擠型截面設計「肋厚比」如何影響押出良率與供應商報價？沖壓件折彎回彈如何在圖面上補償（角度補償法vs材料係數法）？陽極氧化「電解著色」vs「噴漆」在騏宏警示燈應用上的選材依據？"
      },
      {
        "category": "[O]  海內外供應商開發  (模具/射出成形/鋁擠/壓鑄/沖壓/板金 Taiwan+China+Vietnam)",
        "code": "O4",
        "dimension": "中國大陸\n供應商開發",
        "ability": "中國大陸供應商開發與管理\n(電子料/機構件/模具/射出/沖壓 — 品質管控/交期/進出口)",
        "levels": {
          "0": "從未接觸",
          "1": "了解台灣→中國大陸採購的進出口流程(進口報關/關稅/Incoterms)及中國大陸供應商開發挑戰(品質波動/交期不穩/語言溝通)",
          "2": "熟練：中國大陸供應商S1-S7開發全流程→進出口報關文件管理(發票/裝箱單/原產地證明CO)→FCST備料計畫提前3個月發送→IQC進料管控+SCAR追蹤",
          "3": "主導中國大陸供應商策略性佈局(哪些料適合從中國採購)+匯率/關稅成本分析+供應鏈風險評估(單一國家風險分散)"
        },
        "importance": 4,
        "weight": "國際採購\nIncoterms2020\n進出口流程",
        "target_level": "P5A認知(中國大陸採購進出口基礎)｜P5B熟練(S1-S7全流程+報關文件)｜P6A主導(策略佈局+匯率/關稅分析)",
        "questions": "從中國大陸採購LED/IC類電子料，在關稅和交期上有哪些優劣勢？原產地證明CO(Certificate of Origin)在哪些情況下是必要文件？如何評估中國大陸供應商「品質波動風險」並制定管控措施？"
      },
      {
        "category": "[O]  海內外供應商開發  (模具/射出成形/鋁擠/壓鑄/沖壓/板金 Taiwan+China+Vietnam)",
        "code": "O5★",
        "dimension": "越南/東南亞\n供應商開發",
        "ability": "越南/東南亞供應商開發\n(Taiwan+1戰略 / 線材廠/射出廠/板金廠 — 品質認證/語言/物流管理)",
        "levels": {
          "0": "從未接觸",
          "1": "了解Taiwan+1供應鏈分散戰略背景(地緣政治/關稅戰/產業移轉)及越南/東南亞主要適合外移的品項(線材/簡單射出件/板金/包材)",
          "2": "熟練：越南供應商S1-S7開發(含實地廠訪/語言障礙克服/品質稽核)→進出口文件管理(越南原產地GSP/CPTPP關稅優惠確認)→DHL/海運物流時間管控(越南→台灣7~14天)",
          "3": "主導Taiwan+1物料風險分散計畫(年度識別≥3件適合外移品項)+越南廠商品質體系輔導+CPTPP關稅優惠策略性應用"
        },
        "importance": 3,
        "weight": "Taiwan+1戰略\n越南GSP/CPTPP\n國際採購",
        "target_level": "P5B認知(Taiwan+1戰略概念+適合外移品項識別)｜P6A熟練(越南廠開發+GSP/CPTPP應用)｜P6B主導(年度分散計畫)",
        "questions": "騏宏哪些物料品項最適合從越南廠採購（Lead Time可接受+品質要求相對低）？CPTPP關稅優惠如何申請？越南原產地GSP需要哪些文件？越南工廠稽核時語言障礙如何克服（翻譯/稽核清單設計）？"
      },
      {
        "category": "[O]  海內外供應商開發  (模具/射出成形/鋁擠/壓鑄/沖壓/板金 Taiwan+China+Vietnam)",
        "code": "O6★",
        "dimension": "模具海外廠\n開發管理",
        "ability": "模具海外廠商開發管理\n(中國大陸/越南模具廠 — 遠距跟催/試模品質/智財保護)",
        "levels": {
          "0": "從未執行",
          "1": "了解海外模具廠開發的特殊挑戰：遠距試模管控/鋼材真偽驗證/智慧財產(圖面保密/模具所有權)保護",
          "2": "熟練：海外模具廠報價比較(台灣vs中國vs越南Cost對比)→遠距試模管控(視訊驗模/FAI報告要求/樣品快遞確認)→模具合約保密條款+模具所有權歸屬明確",
          "3": "主導海外模具廠分類策略(哪類模具適合海外製作)+模具費COST DOWN目標≥15%+模具品質一致性驗收SOP建立"
        },
        "importance": 3,
        "weight": "海外模具開發\n模具合約範本\nCOST DOWN策略",
        "target_level": "P5B認知(海外模具廠特殊挑戰+圖面保密)｜P6A熟練(遠距跟催+合約保密條款)｜P6B主導(海外模具策略+COST DOWN)",
        "questions": "海外模具廠報價比台灣低30%，品質風險如何量化評估再決定是否外發？遠距試模時「視訊驗模」的標準流程和確認清單是什麼？模具圖面洩漏的法律保護：NDA+模具合約中的智財條款如何撰寫？"
      },
      {
        "category": "[P]  設備採購評估  Equipment Procurement Assessment  (新設備採購檢核表/IATF16949/AS9100設備評估)",
        "code": "P1",
        "dimension": "設備採購\n需求分析",
        "ability": "設備採購需求分析\n(用途/規格規劃/10萬元以上設備適用)",
        "levels": {
          "0": "從未執行",
          "1": "了解設備採購觸發條件(新增/替換/升級)及適用門檻(單價≥10萬或對生產有重大影響)，能填寫設備採購申請",
          "2": "熟練：確認儀器具體用途/功能需求→評估現有與未來測試需求→確認測量範圍與精度要求→考慮與現有設備相容性→完成需求分析表",
          "3": "主導設備需求規格書撰寫+跨部門需求確認會議主持+採購規格凍結管理"
        },
        "importance": 5,
        "weight": "設備採購檢核表\nQP-XXX-XXX",
        "target_level": "P4A必備(需求分析表填寫+觸發條件判斷)｜P5A熟練(規格書撰寫+跨部門確認)｜P5B主導(規格凍結管理)",
        "questions": "如何判斷一台設備是否需要完整走設備採購評估流程？填寫設備需求分析時，哪些「功能需求」項目最容易被遺漏？設備與現有22工站生產線的相容性如何提前確認？"
      },
      {
        "category": "[P]  設備採購評估  Equipment Procurement Assessment  (新設備採購檢核表/IATF16949/AS9100設備評估)",
        "code": "P2",
        "dimension": "技術規格\n評估驗証",
        "ability": "設備技術規格評估與IQ/OQ/PQ驗証\n(技術規格確認/IQ安裝確認/OQ運轉確認/PQ性能確認)",
        "levels": {
          "0": "從未執行",
          "1": "了解技術規格評估面向(加工範圍/精度/速度/穩定性)及IQ/OQ/PQ三階段概念",
          "2": "熟練：確認技術規格→主導IQ設備規格符合性+隨機文件完整→OQ各功能正常+空運轉8h→PQ精度重複性≥30次+試產≥300pcs+Cpk≥1.67",
          "3": "建立設備驗証標準SOP+Cpk/GR&R資料庫+驗証歷史記錄管理"
        },
        "importance": 5,
        "weight": "設備採購檢核表\n技術規格與測試\nIATF16949",
        "target_level": "P4B認知(IQ/OQ/PQ三階段)｜P5A熟練(執行+Cpk計算)｜P5B主導(驗証SOP+資料庫)",
        "questions": "IQ/OQ/PQ三階段各自確認什麼？Cpk≥1.67標準適用哪類設備？OQ空運轉8h主要觀察哪些異常指標？"
      },
      {
        "category": "[P]  設備採購評估  Equipment Procurement Assessment  (新設備採購檢核表/IATF16949/AS9100設備評估)",
        "code": "P3",
        "dimension": "IATF/AS9100\n設備要求",
        "ability": "IATF16949/AS9100設備採購特定要求\n(MSA/GR&R/PPAP/防錯Poka-Yoke/追溯/SC/CC特殊特性)",
        "levels": {
          "0": "無了解",
          "1": "了解IATF16949/AS9100對設備的特定要求：MSA量測系統分析、PPAP設備驗証、防錯、批次追溯、SC/CC特殊特性控制",
          "2": "熟練：評估設備是否需GR&R→Cpk(≥1.67)→防錯功能確認→設備編號+追溯系統整合→SC/CC關鍵特性SPC監控能力確認",
          "3": "主導設備IATF稽核應對+設備變更管理(ECN整合)+MSA完整執行+設備FMEA主持"
        },
        "importance": 5,
        "weight": "IATF16949 8.5.1\nAS9100D 8.5.1\n設備採購檢核表",
        "target_level": "P4B認知(IATF設備要求/防錯概念)｜P5A熟練(GR&R+Cpk+追溯)｜P5B主導(設備FMEA+MSA)",
        "questions": "IATF16949對設備需哪些文件(GR&R/PPAP/FMEA)？Poka-Yoke如何驗証有效性？設備ECN時騏宏客戶批准流程？"
      },
      {
        "category": "[P]  設備採購評估  Equipment Procurement Assessment  (新設備採購檢核表/IATF16949/AS9100設備評估)",
        "code": "P4",
        "dimension": "生產線整合\n評估",
        "ability": "生產線整合與產能評估\n(22工站整合/Takt Time匹配/換線SMED/OEE≥85%)",
        "levels": {
          "0": "從未評估",
          "1": "了解設備與生產線整合評估面向：工站適用性/Takt Time匹配/空間動線/公用設施需求/換線時間",
          "2": "熟練：確認適用工站(SMT9站/組裝22站)→評估設備產能vs Takt Time→空間規劃→水電氣需求確認→OEE目標(稼動率≥85%)→換線SMED評估",
          "3": "建立設備生產整合評估SOP+線平衡分析模型+OEE追蹤系統整合"
        },
        "importance": 5,
        "weight": "設備採購檢核表\n生產整合評估\nSMT/組裝22工站",
        "target_level": "P4A必備(工站適用性確認/公用設施)｜P5A熟練(Takt Time+OEE評估)｜P5B主導(生產整合SOP)",
        "questions": "新設備Takt Time如何與現有產線匹配評估？OEE≥85%的計算公式(可用率×性能率×良率)？380V三相vs220V單相廠務評估要確認哪些事項？"
      },
      {
        "category": "[P]  設備採購評估  Equipment Procurement Assessment  (新設備採購檢核表/IATF16949/AS9100設備評估)",
        "code": "P5",
        "dimension": "設備供應商\n評估",
        "ability": "設備供應商評估\n(技術能力/售後服務/ISO9001認證/AVL管理)",
        "levels": {
          "0": "從未執行",
          "1": "了解設備供應商評估主要面向：技術支援能力/售後服務網絡/市場聲譽/配件供應/財務穩定性",
          "2": "熟練：比較至少3家供應商→確認是否列入AVL(合格供應商名冊)→確認ISO9001/IATF16949認證→實地考察或樣機測試→供應商財務穩定性評估→關鍵零組件來源確認",
          "3": "主導設備供應商分級管理+設備供應商QPA稽核+關鍵設備第二源供應商開發"
        },
        "importance": 4,
        "weight": "設備採購檢核表\n供應商評估\nQPLM02(D) AVL",
        "target_level": "P4B認知(設備廠商評估面向)｜P5A熟練(3廠比較+AVL確認+實地考察)｜P5B主導(供應商分級+QPA稽核)",
        "questions": "設備廠商不在騏宏AVL名冊時，採購流程應如何處理？供應商財務不穩定(倒閉風險)對設備備品供應有何影響？如何評估設備廠「本地技術支援能力」是否足夠(響應時間/工程師數量)？"
      },
      {
        "category": "[P]  設備採購評估  Equipment Procurement Assessment  (新設備採購檢核表/IATF16949/AS9100設備評估)",
        "code": "P6",
        "dimension": "設備財務\n分析",
        "ability": "設備財務分析\n(TCO總擁有成本/ROI/NPV/回收期目標<3年)",
        "levels": {
          "0": "從未執行",
          "1": "了解設備財務評估項目：初始購買成本/安裝費/維護校準費/耗材費/折舊年限/ROI計算公式",
          "2": "熟練：完成TCO試算(設備本體+運費+安裝+保養+耗材+軟體維護)→ROI計算→回收期計算(目標<3年)→NPV/IRR分析→付款條件確認(30%訂金/40%交機/30%驗收)",
          "3": "主導設備投資決策財務報告+敏感度分析+融資租賃評估+投資抵減稅務優化"
        },
        "importance": 4,
        "weight": "設備採購檢核表\n財務分析\n採購實務手冊",
        "target_level": "P4B認知(TCO項目/ROI公式)｜P5A熟練(TCO+ROI+NPV試算)｜P5B主導(投資決策報告+敏感度)",
        "questions": "TCO總擁有成本包含哪些項目？ROI和回收期公式各是什麼？付款30%/40%/30%如何在合約寫入保護條款？"
      },
      {
        "category": "[P]  設備採購評估  Equipment Procurement Assessment  (新設備採購檢核表/IATF16949/AS9100設備評估)",
        "code": "P7★",
        "dimension": "TPM維護\n管理規劃",
        "ability": "TPM全面生產保養計畫規劃\n(PM保養計劃/備品管理/MTBF/MTTR/自主保養)",
        "levels": {
          "0": "從未執行",
          "1": "了解TPM四大面向：預防保養(PM)/自主保養/備品管理/故障預防，及MTBF/MTTR的定義",
          "2": "熟練：確認PM保養手冊完整性+日/週/月/季保養週期→建立設備備品清單+最低庫存量+採購交期→確認MTBF目標值→設計自主保養點檢表→停產備品風險評估",
          "3": "建立騏宏設備TPM管理制度+設備OEE自動追蹤系統+備品採購聯動採購流程+預兆診斷SOP"
        },
        "importance": 3,
        "weight": "設備採購檢核表\nTPM與維護管理\nIATF16949 8.5.1",
        "target_level": "P4B認知(TPM概念/MTBF-MTTR定義)｜P5A熟練(PM計畫+備品清單+自主保養設計)｜P5B主導(TPM制度建立+OEE追蹤)",
        "questions": "MTBF和MTTR如何影響設備採購決策？備品停產風險評估如何在採購合約中納入保護條款？日常自主保養點檢表設計的5個必要欄位是什麼？"
      },
      {
        "category": "[P]  設備採購評估  Equipment Procurement Assessment  (新設備採購檢核表/IATF16949/AS9100設備評估)",
        "code": "P8",
        "dimension": "設備驗收\n量產導入",
        "ability": "設備驗收標準制定與量產導入\n(外觀/功能/試生產/SOP/管制計劃/PFMEA更新)",
        "levels": {
          "0": "從未執行",
          "1": "了解設備驗收四大流程：外觀驗收→功能驗收→試生產驗證→驗收文件簽核",
          "2": "熟練：制定驗收標準及流程→小批量試產(≥300pcs)→首件檢驗通過→Cpk≥1.67確認→驗收報告編寫→量產導入SOP/作業指導書/點檢表建立→管制計劃與PFMEA更新→ERP設備建檔",
          "3": "建立騏宏設備驗收標準SOP+量產導入爬坡計劃模板+驗收不通過升級處理機制"
        },
        "importance": 4,
        "weight": "設備採購檢核表\n驗收與導入\nIATF16949 PPAP",
        "target_level": "P4A必備(驗收基本流程/文件確認)｜P5A熟練(試生產驗證+Cpk+SOP建立)｜P5B主導(驗收SOP+PFMEA更新)",
        "questions": "驗收試產300pcs的標準是如何設定的？首件檢驗通過後還需要做哪些確認才算驗收合格？設備導入後管制計劃(Control Plan)更新的時限與責任單位是誰？"
      },
      {
        "category": "[P]  設備採購評估  Equipment Procurement Assessment  (新設備採購檢核表/IATF16949/AS9100設備評估)",
        "code": "P9★",
        "dimension": "設備風險\n評估管控",
        "ability": "設備採購風險評估與對策管理\n(技術/供應商/品質/交期/成本/安全/維護 七大風險矩陣)",
        "levels": {
          "0": "從未執行",
          "1": "了解設備採購七大風險類別(技術/供應商/品質/交期/成本/安全/維護)及風險等級計算(發生機率×影響程度：L=1-6/M=8-12/H=15-25)",
          "2": "熟練：完成設備採購風險評估矩陣→識別高風險項目(H級)→制定對策→高風險>3項建議暫緩→配合最終決策簽核流程(需求/品質/生產/財務/採購部門主管+總經理)",
          "3": "建立騏宏設備採購風險評估標準+高風險設備強制評估機制+風險對策跟追閉環SOP"
        },
        "importance": 3,
        "weight": "設備採購檢核表\n風險評估\n最終決策簽核",
        "target_level": "P4B認知(七大風險類別+風險等級計算)｜P5A熟練(風險矩陣+對策制定+簽核流程)｜P5B主導(風險評估標準建立)",
        "questions": "設備採購風險矩陣中哪類風險最常被忽略？如何說服總經理「高風險設備建議暫緩」？高風險供應商設備(無ISO認證/財務不穩)採購時，合約必須加入哪些保護條款？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full-Feature Application  (騏宏數位化管理平台/OA流程/ERP整合/智能硬體)",
        "code": "Q1",
        "dimension": "釘釘基礎\nOA應用",
        "ability": "釘釘OA基礎應用操作\n(考勤打卡/請假審批/通訊/公告/雲端文件)",
        "levels": {
          "0": "未使用釘釘",
          "1": "能獨立使用釘釘基本功能：考勤打卡/查看公告/即時通訊/發起請假審批單，能使用釘釘雲端盤上傳下載文件",
          "2": "熟練：主動維護個人工作日曆+待辦事項→審批流程全線上操作(採購申請/費用報銷)→釘釘視訊會議主持/參與→雲端文件協同編輯",
          "3": "擔任部門釘釘管理員→建立部門群組規範→訓練新進人員→異常報修追蹤閉環"
        },
        "importance": 5,
        "weight": "釘釘操作手冊\n騏宏OA流程",
        "target_level": "P3A必備(全功能操作)｜P4A熟練(審批+協同)｜P4B主導(部門管理+新人訓練)",
        "questions": "請假審批流程在釘釘哪個位置發起？雲端盤文件設定「僅自己可見」後如何共享給特定人員？視訊會議最多幾人同時上線（騏宏版本）？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full-Feature Application  (騏宏數位化管理平台/OA流程/ERP整合/智能硬體)",
        "code": "Q2",
        "dimension": "釘釘工單\n製令掃碼",
        "ability": "釘釘工單製令掃碼系統應用\n(組裝產線工站1製令掃碼/工單追蹤/生產看板)",
        "levels": {
          "0": "未使用",
          "1": "了解騏宏工站1「製令工單釘釘掃碼」目的：工單唯一識別/生產批次追溯/作業指示確認，能操作掃碼",
          "2": "熟練：製令工單建立→釘釘掃碼綁定→工單進度追蹤→異常工單回報→工單結案，能從釘釘查詢特定批號生產進度",
          "3": "主導釘釘工單與鼎新ERP勾稽確認→建立工單異常SOP→追溯資料匯出分析→優化掃碼流程效率"
        },
        "importance": 5,
        "weight": "釘釘工單模組\n鼎新ERP整合\n組裝工站1",
        "target_level": "P4A必備(工單掃碼+進度查詢)｜P5A熟練(工單建立+結案+ERP勾稽)｜P5B主導(SOP建立+流程優化)",
        "questions": "工站1掃碼後系統顯示「料號不符」正確處理步驟？釘釘工單與ERP工單號如何對應？如何查出特定製令各工站即時WIP數量？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full-Feature Application  (騏宏數位化管理平台/OA流程/ERP整合/智能硬體)",
        "code": "Q3",
        "dimension": "釘釘採購\n審批流程",
        "ability": "釘釘採購審批流程操作\n(請購→詢比議價→採購單→收料→付款 全線上閉環)",
        "levels": {
          "0": "未使用",
          "1": "了解騏宏採購審批釘釘完整流程：請購→主管審批→採購詢價→核價單上傳→採購單發出→收料確認→付款申請，能填寫請購單發起審批",
          "2": "熟練：全流程獨立操作→附件上傳(報價/合約/PURI03核價單)→多層審批節點追蹤→超時提醒處理→採購單PDF生成→整合鼎新ERP採購模組核對",
          "3": "建立騏宏釘釘採購審批SOP+審批節點優化建議+採購流程KPI追蹤報表(審批時效/逾期率)"
        },
        "importance": 5,
        "weight": "釘釘採購模組\nPURI03核價單\n騏宏採購SOP",
        "target_level": "P4A必備(請購→審批完整操作)｜P5A熟練(全流程+附件+ERP核對)｜P5B主導(SOP建立+KPI追蹤)",
        "questions": "採購單審批到「財務主管」節點退回，如何查看原因並修正？核價單PURI03如何上傳至審批對應節點？審批逾期24小時催辦操作步驟？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full-Feature Application  (騏宏數位化管理平台/OA流程/ERP整合/智能硬體)",
        "code": "Q4",
        "dimension": "釘釘包裝\n出貨掃碼",
        "ability": "釘釘包裝出貨掃碼應用\n(組裝工站22包裝掃碼/出貨核對/序號追溯)",
        "levels": {
          "0": "未使用",
          "1": "了解工站22「包裝釘釘掃碼」目的：出貨品號/數量與銷貨單核對、序號追溯建立，能操作包裝掃碼",
          "2": "熟練：包裝掃碼→數量自動核對→出貨標籤生成→與業務銷貨單勾稽→異常(超量/欠量/品號不符)處理→出貨確認簽核",
          "3": "建立包裝掃碼異常處理SOP+批次掃碼效率優化+出貨追溯資料與CRM整合"
        },
        "importance": 4,
        "weight": "釘釘出貨模組\n組裝工站22\n騏宏出貨規範",
        "target_level": "P4A必備(包裝掃碼+異常處理)｜P5A熟練(出貨核對+追溯+銷貨單勾稽)｜P5B主導(SOP+效率優化)",
        "questions": "掃碼顯示「已超出訂單數量」正確處理SOP？同一訂單分兩次出貨如何設定分批確認？客戶反映收到品項錯誤如何從掃碼記錄追溯責任？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full-Feature Application  (騏宏數位化管理平台/OA流程/ERP整合/智能硬體)",
        "code": "Q5",
        "dimension": "釘釘報表\n數據分析",
        "ability": "釘釘報表與數據分析應用\n(採購KPI/逾期追蹤/供應商排行/費用報表)",
        "levels": {
          "0": "未使用",
          "1": "了解釘釘可產出的採購報表：採購單狀態匯總/審批逾期報告/費用統計，能查看現有報表",
          "2": "熟練：設定篩選條件(日期/供應商/料品類別)→匯出Excel→整合鼎新ERP交叉分析→製作採購月報(交期達成率/COST DOWN/供應商異常件數)",
          "3": "建立釘釘採購KPI自動報表模板+每週績效看板+BI工具整合數據展示(Power BI/釘釘數據工廠)"
        },
        "importance": 4,
        "weight": "釘釘報表模組\n採購KPI\n鼎新ERP報表",
        "target_level": "P4A必備(基本報表查詢+匯出)｜P5A熟練(KPI月報+ERP交叉分析)｜P5B主導(自動報表+BI整合)",
        "questions": "從釘釘查詢過去3個月特定供應商交期達成率操作路徑？採購月報6個核心KPI指標（騏宏標準）？如何將釘釘報表與鼎新ERP缺料表交叉分析？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full-Feature Application  (騏宏數位化管理平台/OA流程/ERP整合/智能硬體)",
        "code": "Q6",
        "dimension": "釘釘品質\n異常管理",
        "ability": "釘釘品質異常回報與追蹤應用\n(IQC不合格通知/供應商回覆/8D追蹤/結案)",
        "levels": {
          "0": "未使用",
          "1": "了解騏宏品質異常釘釘處理流程：IQC不合格→釘釘通知採購→採購通知供應商→供應商回覆改善→品保確認結案，能接收並轉發異常通知",
          "2": "熟練：釘釘異常單填寫→照片/數據附件上傳→催辦供應商回覆(8D報告)→回覆內容初審→轉品保確認→結案存檔，追蹤14天結案目標",
          "3": "建立供應商釘釘品質回覆SOP+逾期自動提醒機制+品質異常資料庫(按供應商/料品統計)"
        },
        "importance": 5,
        "weight": "釘釘品質模組\nFMQA0301\n8D程序",
        "target_level": "P4A必備(異常通知+供應商催辦)｜P5A熟練(異常單+8D追蹤+結案)｜P5B主導(供應商SOP+異常資料庫)",
        "questions": "供應商8D逾期超過5天，釘釘催辦標準操作步驟？釘釘異常單「臨時對策」和「永久對策」填寫要求有何不同？如何匯出特定供應商過去12個月品質異常統計？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full-Feature Application  (騏宏數位化管理平台/OA流程/ERP整合/智能硬體)",
        "code": "Q7★",
        "dimension": "釘釘ERP\n整合操作",
        "ability": "釘釘與鼎新ERP整合操作知識\n(LRP物料需求/缺料表/工單/庫存查詢整合)",
        "levels": {
          "0": "不了解整合",
          "1": "了解騏宏釘釘與鼎新ERP整合架構：釘釘OA審批→觸發ERP工單/採購單→ERP庫存資料推送釘釘報表，了解LRP在騏宏定義（訂單導向中長期物料需求預估）",
          "2": "熟練：從釘釘查詢鼎新ERP缺料表→確認LRP物料預估與採購單勾稽→ERP工單狀態釘釘對應查詢→庫存異動通知接收處理",
          "3": "主導釘釘-ERP整合異常排錯+提出整合優化需求(API/釘釘低代碼)→建立雙向同步採購作業標準"
        },
        "importance": 3,
        "weight": "鼎新ERP\n釘釘整合\nLRP/缺料表",
        "target_level": "P5A認知(ERP整合架構+LRP定義)｜P5B熟練(缺料表查詢+工單勾稽)｜P6A主導(整合異常排錯+優化)",
        "questions": "LRP在騏宏鼎新ERP的正式名稱？釘釘採購審批完成後ERP採購單狀態如何同步確認？鼎新ERP缺料表有料號但釘釘庫存顯示有料，如何判斷哪個正確？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full-Feature Application  (騏宏數位化管理平台/OA流程/ERP整合/智能硬體)",
        "code": "Q8",
        "dimension": "釘釘智能\n硬體應用",
        "ability": "釘釘智能硬體應用\n(人臉辨識考勤/門禁/工業標籤機/掃碼槍)",
        "levels": {
          "0": "未接觸",
          "1": "了解騏宏釘釘智能硬體：人臉辨識考勤機/門禁/工業標籤機(工站18)/掃碼槍(工站1、22)，能正常操作各設備基本功能",
          "2": "熟練：考勤異常登錄→標籤機釘釘模板設定(品號/批號/生產日期/QR Code)→掃碼槍與釘釘藍牙配對/連線異常排除→智能設備日常保養點檢",
          "3": "建立騏宏釘釘智能硬體維護SOP+異常快速排除指引+標籤模板版本管理(各工站格式)"
        },
        "importance": 4,
        "weight": "釘釘硬體手冊\n組裝工站18\n工業標籤機規範",
        "target_level": "P4A必備(各硬體操作+基本異常處理)｜P5A熟練(標籤模板設定+考勤異常申請)｜P5B主導(SOP建立+版本管理)",
        "questions": "工站18標籤機QR Code掃碼資訊不正確，排查步驟？考勤機人臉辨識失敗員工如何確保出勤記錄正確？掃碼槍工站22突然與釘釘斷線現場緊急SOP？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full-Feature Application  (騏宏數位化管理平台/OA流程/ERP整合/智能硬體)",
        "code": "Q9★",
        "dimension": "釘釘低代碼\n流程客製",
        "ability": "釘釘低代碼平台流程客製化\n(宜搭/流程設計/表單自訂/自動化規則)",
        "levels": {
          "0": "未接觸",
          "1": "了解釘釘低代碼「宜搭」定義：無需寫程式即可客製表單和審批流程，了解騏宏已客製的流程（採購申請/品質異常/設備報修）",
          "2": "熟練：使用宜搭修改現有表單欄位→建立新的簡單審批流程→設定自動化規則(審批通過後自動通知/逾期自動提醒)→測試新流程並上線",
          "3": "主導採購部門釘釘宜搭流程規劃+需求訪談+流程設計+測試上線+用戶訓練→建立採購模組流程標準庫"
        },
        "importance": 3,
        "weight": "釘釘宜搭\n低代碼平台\n騏宏OA規範",
        "target_level": "P5B認知(宜搭概念+已有流程)｜P6A熟練(表單修改+自動化規則)｜P6B主導(流程規劃+訓練上線)",
        "questions": "宜搭建立「設備採購申請」表單哪些欄位是必填設定關鍵？審批逾期48小時自動升級提醒在宜搭如何設定？釘釘流程需要與ERP整合，宜搭的資料傳遞限制是什麼？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full-Feature Application  (騏宏數位化管理平台/OA流程/ERP整合/智能硬體)",
        "code": "P3A",
        "dimension": "助理採購員",
        "ability": "30,000~36,000",
        "levels": {
          "0": "≥12分",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "≥0.8",
        "target_level": "",
        "questions": ""
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full-Feature Application  (騏宏數位化管理平台/OA流程/ERP整合/智能硬體)",
        "code": "P3B",
        "dimension": "採購員",
        "ability": "34,000~42,000",
        "levels": {
          "0": "≥24分",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "≥1.0",
        "target_level": "",
        "questions": ""
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full-Feature Application  (騏宏數位化管理平台/OA流程/ERP整合/智能硬體)",
        "code": "P4A",
        "dimension": "採購工程師",
        "ability": "42,000~48,000",
        "levels": {
          "0": "≥38分",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "≥1.2",
        "target_level": "",
        "questions": ""
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full-Feature Application  (騏宏數位化管理平台/OA流程/ERP整合/智能硬體)",
        "code": "P4B",
        "dimension": "採購工程師(資)",
        "ability": "46,000~55,000",
        "levels": {
          "0": "≥52分",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "≥1.5",
        "target_level": "",
        "questions": ""
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full-Feature Application  (騏宏數位化管理平台/OA流程/ERP整合/智能硬體)",
        "code": "P5A",
        "dimension": "資深採購工程師",
        "ability": "55,000~65,000",
        "levels": {
          "0": "≥68分",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "≥1.8",
        "target_level": "",
        "questions": ""
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full-Feature Application  (騏宏數位化管理平台/OA流程/ERP整合/智能硬體)",
        "code": "P5B",
        "dimension": "採購主任/Leader",
        "ability": "62,000~75,000",
        "levels": {
          "0": "≥82分",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "≥2.0",
        "target_level": "",
        "questions": ""
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full-Feature Application  (騏宏數位化管理平台/OA流程/ERP整合/智能硬體)",
        "code": "P6A",
        "dimension": "採購主管/課長",
        "ability": "70,000~85,000",
        "levels": {
          "0": "≥95分",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "≥2.2",
        "target_level": "",
        "questions": ""
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full-Feature Application  (騏宏數位化管理平台/OA流程/ERP整合/智能硬體)",
        "code": "P6B",
        "dimension": "資深採購主管",
        "ability": "78,000~95,000",
        "levels": {
          "0": "≥108分",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "≥2.5",
        "target_level": "",
        "questions": ""
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full-Feature Application  (騏宏數位化管理平台/OA流程/ERP整合/智能硬體)",
        "code": "P7",
        "dimension": "採購協理/副理",
        "ability": "88,000~120,000",
        "levels": {
          "0": "≥120分",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "≥2.7",
        "target_level": "",
        "questions": ""
      }
    ],
    "salary_structure": [
      {
        "grade": "P3A",
        "title_zh": "助理採購員",
        "title_en": "Junior Buyer",
        "salary_min": "35,000",
        "salary_mid": "37,500",
        "salary_max": "40,000",
        "requirements": "支援請採購基本操作，需完整OJT培訓計畫，設3/6/12月里程碑",
        "promotion": "考核B以上",
        "amoeba": ""
      },
      {
        "grade": "P3B",
        "title_zh": "採購員",
        "title_en": "Buyer",
        "salary_min": "38,000",
        "salary_mid": "41,000",
        "salary_max": "44,000",
        "requirements": "獨立操作請採購5大流程，可跟催，需補強供應商管理能力",
        "promotion": "核心分≥25/考核B以上",
        "amoeba": ""
      },
      {
        "grade": "P4A",
        "title_zh": "採購工程師",
        "title_en": "Procurement Engineer",
        "salary_min": "42,000",
        "salary_mid": "45,000",
        "salary_max": "50,000",
        "requirements": "熟練全流程/NPI介入/IQC協調，具備電子料或機構件專業知識之一",
        "promotion": "核心分≥38/考核A",
        "amoeba": ""
      },
      {
        "grade": "P4B",
        "title_zh": "採購工程師(資)",
        "title_en": "Procurement Engineer II",
        "salary_min": "46,000",
        "salary_mid": "51,000",
        "salary_max": "57,000",
        "requirements": "供應商管理主責/可獨立執行NPI採購全程/IATF稽核配合",
        "promotion": "核心分≥52/考核A",
        "amoeba": ""
      },
      {
        "grade": "P5A",
        "title_zh": "資深採購工程師",
        "title_en": "Senior Procurement Engineer",
        "salary_min": "55,000",
        "salary_mid": "60,000",
        "salary_max": "67,000",
        "requirements": "戰略採購認知/可指導P4層級/COST DOWN實績≥3%",
        "promotion": "核心分≥68/考核A+",
        "amoeba": ""
      },
      {
        "grade": "P5B",
        "title_zh": "採購主任/Leader",
        "title_en": "Procurement Leader",
        "salary_min": "62,000",
        "salary_mid": "68,000",
        "salary_max": "77,000",
        "requirements": "3人採購組領導，KPI全面達標，建立SOP/技能矩陣/OJT計畫",
        "promotion": "核心分≥82/考核A+",
        "amoeba": ""
      },
      {
        "grade": "P6A",
        "title_zh": "採購主管/課長",
        "title_en": "Procurement Manager",
        "salary_min": "70,000",
        "salary_mid": "78,000",
        "salary_max": "87,000",
        "requirements": "採購策略制定，IATF稽核代表，供應鏈風險管控，國際採購主導",
        "promotion": "核心分≥95/考核A+",
        "amoeba": ""
      },
      {
        "grade": "P6B",
        "title_zh": "資深採購主管",
        "title_en": "Senior Procurement Manager",
        "salary_min": "78,000",
        "salary_mid": "86,000",
        "salary_max": "97,000",
        "requirements": "跨部門採購協調決策，BSC績效管理，供應商戰略夥伴關係建立",
        "promotion": "核心分≥108/考核A+",
        "amoeba": ""
      },
      {
        "grade": "P7",
        "title_zh": "採購協理/副理",
        "title_en": "Procurement Director",
        "salary_min": "88,000",
        "salary_mid": "100,000",
        "salary_max": "120,000",
        "requirements": "全公司採購策略/ESG永續採購/供應鏈數位轉型主導/董事會報告",
        "promotion": "核心分≥120",
        "amoeba": ""
      }
    ]
  },
  {
    "job_name": "業務專員 (Sales)",
    "raw_job_name": "業務專員",
    "filename": "騏宏科技_業務專員職能薪資結構表_v1_3_7.xlsx",
    "competencies": [
      {
        "category": "[A]  客戶開發與徵信  Customer Development & Credit",
        "code": "A1",
        "dimension": "客戶分類",
        "ability": "客戶分類與來源識別\n(OEM/ODM/OBM/Tier1/Tier2/政府標案/通路商)",
        "levels": {
          "0": "無概念",
          "1": "知道OEM/ODM/OBM差異",
          "2": "能正確分類客戶並評估開發優先順序",
          "3": "建立客戶分類策略+有多國不同類型成功案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "說明OEM/ODM/OBM在騏宏業務中各自的合作模式與收益差異",
        "questions": "L3A起必備｜得2分→L4A獨立分類評估｜得3分→L5A主導策略"
      },
      {
        "category": "[A]  客戶開發與徵信  Customer Development & Credit",
        "code": "A2",
        "dimension": "客戶徵信",
        "ability": "新客戶徵信作業\n(Panjiva/D&B/工商登記/信用評等/信用額度核決)",
        "levels": {
          "0": "無",
          "1": "知道徵信管道(Panjiva/D&B等)",
          "2": "獨立完成徵信報告+建議信用額度+呈核",
          "3": "建立徵信SOP+有複雜案例信用風險識別+防呆機制"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "如何用Panjiva查詢客戶進出口記錄？信用額度如何與財務部協同核決？",
        "questions": "L3B必備認知｜L4A獨立執行(FMSA0201)｜L5A主導(徵信SOP建立)"
      },
      {
        "category": "[A]  客戶開發與徵信  Customer Development & Credit",
        "code": "A3",
        "dimension": "客戶開發",
        "ability": "新客戶開發方法\n(冷開發/展覽/社群/老客戶推薦/代理商開發)",
        "levels": {
          "0": "無",
          "1": "知道開發管道",
          "2": "能獨立執行冷開發Email+展覽客戶接洽+有成交實績",
          "3": "建立系統性開發流程+有代理商/通路體系建立案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "描述你用什麼方法開發到一個新客戶？從第一封Email到成交，整個過程是什麼？",
        "questions": "L3B認知｜L4A必備(有成交實績)｜L5A主導(開發策略+代理商體系)"
      },
      {
        "category": "[A]  客戶開發與徵信  Customer Development & Credit",
        "code": "A4",
        "dimension": "競爭分析",
        "ability": "競爭情報蒐集與分析\n(Whelen/SoundOff/ECCO/Federal Signal/競品比較)",
        "levels": {
          "0": "無",
          "1": "知道主要競爭對手品牌",
          "2": "能系統性收集競品價格/規格/認證資訊並分析",
          "3": "建立競品情報資料庫+有競品分析輔助策略決策案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "請比較Whelen與騏宏在同類警示燈產品上的主要差異點與競爭策略",
        "questions": "L4A必備(競品基礎認知)｜L4B熟練(系統性分析)｜L5A主導(策略輸出)"
      },
      {
        "category": "[A]  客戶開發與徵信  Customer Development & Credit",
        "code": "A5★",
        "dimension": "CRM管理",
        "ability": "CRM客戶關係管理\n(ERP CRM模組/客戶資料建立/維護/分析)",
        "levels": {
          "0": "無",
          "1": "知道CRM概念",
          "2": "能獨立維護ERP CRM客戶資料庫",
          "3": "建立CRM使用規範+有客戶資料分析產出業務決策案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "如何用鼎新ERP CRM模組追蹤潛在客戶進度？如何設定定期跟進提醒？",
        "questions": "L3B認知｜L4B建議(ERP CRM操作)｜L5A主導(CRM分析策略)"
      },
      {
        "category": "[B]  報價議價能力  Quotation & Negotiation",
        "code": "B1",
        "dimension": "成本估算",
        "ability": "產品成本估算能力\n(BOM Cost/製程費/模具費/認證費/目標成本)",
        "levels": {
          "0": "無概念",
          "1": "知道成本構成項目",
          "2": "能閱讀BOM Cost表並理解各項費用構成",
          "3": "能獨立估算完整產品成本+有Cost Down談判成功案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "一個LED警示燈的成本結構中，通常哪幾項佔比最高？如何從成本反推合理報價？",
        "questions": "L3B認知｜L4A必備(讀懂BOM Cost)｜L4B主導(獨立估算+議價)"
      },
      {
        "category": "[B]  報價議價能力  Quotation & Negotiation",
        "code": "B2",
        "dimension": "報價作業",
        "ability": "報價單製作與ERP操作\n(Quotation格式/Incoterms/MOQ/Lead Time/ERP報價單)",
        "levels": {
          "0": "無",
          "1": "知道報價單基本格式(WISA0101)",
          "2": "能獨立製作完整國外報價單含所有必要欄位",
          "3": "建立報價SOP+有多幣別/多Incoterms報價案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "國外報價單必須包含哪12項資訊？FOB vs CIF vs DDP各在什麼情況下使用？",
        "questions": "L3A必備(基礎格式)｜L4A獨立完整報價(WISA0101)｜L5A主導(報價策略)"
      },
      {
        "category": "[B]  報價議價能力  Quotation & Negotiation",
        "code": "B3",
        "dimension": "定價策略",
        "ability": "報價三大方法應用\n(成本加成/競爭定價/市場定價策略)",
        "levels": {
          "0": "無",
          "1": "知道三種報價方法",
          "2": "能依客戶類型選擇適當報價方法並提出合理報價",
          "3": "建立報價策略矩陣+有高毛利談判成功案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "面對Tier 1客戶壓價30%，你如何應對？說明你曾用過的議價策略",
        "questions": "L4A認知｜L4B必備(策略選擇)｜L5A主導(定價策略制度)"
      },
      {
        "category": "[B]  報價議價能力  Quotation & Negotiation",
        "code": "B4",
        "dimension": "核決流程",
        "ability": "報價核決權限執行\n(業務主管核價/財務核准/最高主管核決流程)",
        "levels": {
          "0": "無",
          "1": "了解核決流程",
          "2": "能獨立執行報價核決流程+追蹤核准時效",
          "3": "建立報價核決追蹤機制+有緊急報價快速核決案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "報價超出業務授權範圍時，如何快速取得主管核准？騏宏的核決分級是什麼？",
        "questions": "L3B必備(核決流程)｜L4A獨立執行｜L4B主導(改善核決效率)"
      },
      {
        "category": "[B]  報價議價能力  Quotation & Negotiation",
        "code": "B5★",
        "dimension": "價格談判",
        "ability": "業務談判技巧\n(錨點定價/讓步策略/附加價值包裝/Win-Win)",
        "levels": {
          "0": "無",
          "1": "了解基本談判概念",
          "2": "有多次成功談判實績(維持毛利/成交)",
          "3": "建立談判策略培訓材料+有複雜多回合談判成功案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "描述你最成功的一次報價談判：對方如何施壓？你如何守住底線同時成交？",
        "questions": "L4B建議｜L5A必備(談判實績)｜L5B主導(談判培訓體系)"
      },
      {
        "category": "[C]  訂單管理  Order Management",
        "code": "C1",
        "dimension": "訂單審查",
        "ability": "訂單審查作業\n(QPSA02合約審查/交期/規格/認證確認/ERP鍵入)",
        "levels": {
          "0": "無",
          "1": "了解訂單審查重點(QPSA02)",
          "2": "獨立執行訂單審查+24h內ERP鍵入(即時率≥95%)",
          "3": "建立訂單審查SOP+有客製化訂單複雜審查案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "訂單審查需要確認哪些關鍵點？訂單鍵入ERP的即時率KPI目標是多少？",
        "questions": "L3B必備(基礎審查)｜L4A獨立執行(24h/正確率98%)｜L5A主導(SOP建立)"
      },
      {
        "category": "[C]  訂單管理  Order Management",
        "code": "C2",
        "dimension": "訂單變更",
        "ability": "訂單變更管理\n(數量/交期/規格變更/ERP訂單變更單/多角貿易拋轉)",
        "levels": {
          "0": "無",
          "1": "了解變更管理流程",
          "2": "獨立處理訂單變更+24h評估+通知相關部門",
          "3": "建立變更管理SOP+有複雜多角貿易訂單變更案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "客戶臨時要求提前2週出貨，如何在ERP處理訂單變更並協調生管？",
        "questions": "L3B必備(流程)｜L4A獨立執行｜L4B主導(多角貿易拋轉)"
      },
      {
        "category": "[C]  訂單管理  Order Management",
        "code": "C3",
        "dimension": "產銷協調",
        "ability": "產銷會議與交期協調\n(與生管/生產部協調/交期承諾/催單)",
        "levels": {
          "0": "無",
          "1": "了解產銷協調機制",
          "2": "能主動參與產銷週會+正確傳達客戶需求+管理交期承諾",
          "3": "建立產銷協調SOP+有緊急訂單成功交貨案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "客戶訂單急單但生產排程已滿，你如何與生管協商？如何向客戶說明交期？",
        "questions": "L4A必備(參與協調)｜L4B主導(交期談判)｜L5A主導(產銷機制優化)"
      },
      {
        "category": "[C]  訂單管理  Order Management",
        "code": "C4★",
        "dimension": "備貨策略",
        "ability": "庫存與備貨策略管理\n(Forecast預測/安全庫存/呆滯庫存管理)",
        "levels": {
          "0": "無",
          "1": "了解備貨概念",
          "2": "能提供客戶Forecast給生管+追蹤庫存水位",
          "3": "建立Forecast管理機制+有降低呆滯庫存成功案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "如何從客戶的下單模式預測未來3個月需求？如何減少呆滯庫存？",
        "questions": "L4A認知｜L4B必備(Forecast管理)｜L5A主導(備貨策略機制)"
      },
      {
        "category": "[D]  出貨收款管理  Shipment & Payment",
        "code": "D1",
        "dimension": "出貨文件",
        "ability": "出口文件製作與管理\n(Packing List/Invoice/B/L/CO/Form A/HS Code)",
        "levels": {
          "0": "無",
          "1": "知道基本出口文件種類",
          "2": "能獨立準備完整出口文件套組+確認各市場別要求",
          "3": "建立各市場文件SOP+有複雜多市場出口文件管理案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "出口到美國的文件套組與出口到歐盟有何不同？FCC認證與CE認證如何體現在文件中？",
        "questions": "L3A必備(基礎認知)｜L4A獨立執行｜L4B主導(各市場文件規範)"
      },
      {
        "category": "[D]  出貨收款管理  Shipment & Payment",
        "code": "D2",
        "dimension": "物流安排",
        "ability": "國際物流與出貨作業全流程管理\n(出貨標籤/正嘜側嘜製作/海運/空運/貨代協調/\n國際快遞(FedEx/DHL/UPS)/棧板規格/加長-特材申報/HS Code申報)",
        "levels": {
          "0": "無",
          "1": "了解基本Incoterms+知道出貨標籤/正嘜側嘜/海空運概念",
          "2": "能獨立完成出貨標籤製作、正嘜/側嘜確認、協調貨代安排海空運、\n  選擇國際快遞(FedEx/DHL/UPS)、棧板規格確認、特材申報、HS Code核對",
          "3": "建立物流SOP+有複雜特材/超長棧板/多式聯運+貨代評鑑制度建立案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "出貨到美國：出貨標籤需包含哪些欄位？正嘜vs側嘜差異？\n海運vs空運vs國際快遞各在什麼情況下選用？\n超長/加長特材如何申報？HS Code錯誤會有什麼風險？",
        "questions": "L3A必備(出貨標籤+正嘜側嘜+HS Code認知)｜L4A獨立執行(海空運/貨代協調)｜L4B主導(特材/棧板/物流優化)"
      },
      {
        "category": "[D]  出貨收款管理  Shipment & Payment",
        "code": "D3",
        "dimension": "應收帳款",
        "ability": "應收帳款管理\n(帳齡分析/催款/信用超額警示/壞帳預防)",
        "levels": {
          "0": "無",
          "1": "了解帳齡管理概念",
          "2": "能獨立追蹤應收帳款+執行催款(Net 30/60/90)",
          "3": "建立催款SOP+有複雜帳款糾紛解決+壞帳預防案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "客戶Net 60付款到期未付，你如何處置？如何評估是否繼續出貨？",
        "questions": "L4A必備(帳齡追蹤)｜L4B主導(催款執行)｜L5A主導(信用管理體系)"
      },
      {
        "category": "[D]  出貨收款管理  Shipment & Payment",
        "code": "D4★",
        "dimension": "多角貿易",
        "ability": "多角貿易作業\n(ERP多角貿易系統/拋轉流程/匯率/稅務)",
        "levels": {
          "0": "無",
          "1": "了解多角貿易概念",
          "2": "能在ERP操作多角貿易訂單+銷貨單拋轉",
          "3": "建立多角貿易SOP+有多地多幣別複雜案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "騏宏ERP多角貿易系統如何操作？拋轉後系統自動產生哪些單據？",
        "questions": "L4B必備(ERP操作)｜L5A主導(複雜多角貿易)｜L5B主導(制度建立)"
      },
      {
        "category": "[D]  出貨收款管理  Shipment & Payment",
        "code": "D5★",
        "dimension": "外匯管理",
        "ability": "外匯風險管理\n(匯率避險/遠期外匯/付款條件設計/幣別策略)",
        "levels": {
          "0": "無",
          "1": "了解匯率風險概念",
          "2": "能在報價和合約中納入匯率風險考量",
          "3": "建立外匯風險管理策略+有成功避險案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "當美元兌台幣匯率大幅波動時，如何保護公司的報價毛利？有哪些工具可用？",
        "questions": "L4B認知｜L5A必備(風險考量)｜L5B主導(避險策略)"
      },
      {
        "category": "[E]  RMA客訴管理  RMA & Customer Complaint",
        "code": "E1",
        "dimension": "客訴處理",
        "ability": "客戶投訴處理\n(客訴受理/8D回覆/48h初報/根因分析/防再發)",
        "levels": {
          "0": "無",
          "1": "了解客訴處理流程",
          "2": "能獨立處理客訴+48h內給初步回覆+完成8D報告",
          "3": "建立客訴SOP+有複雜客訴0再發成功案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "客戶投訴收到100pcs燈具有20%不亮，你接到通知後48小時內的處理步驟是什麼？",
        "questions": "L4A必備(48h初報)｜L4B獨立8D報告｜L5A主導(客訴防再發體系)"
      },
      {
        "category": "[E]  RMA客訴管理  RMA & Customer Complaint",
        "code": "E2",
        "dimension": "RMA流程",
        "ability": "RMA退換貨作業\n(WISA0103 RMA流程/良不良品確認/報告/換貨安排)",
        "levels": {
          "0": "無",
          "1": "了解RMA流程(WISA0103)",
          "2": "能獨立執行RMA全流程含ERP操作+換貨安排",
          "3": "建立RMA SOP+有國際RMA複雜案例+零客訴升級記錄"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "國外客戶申請RMA，從客戶通知到完成換貨，完整流程是什麼？ERP如何操作？",
        "questions": "L3B必備(流程)｜L4A獨立執行｜L4B主導(跨部門協調)"
      },
      {
        "category": "[E]  RMA客訴管理  RMA & Customer Complaint",
        "code": "E3",
        "dimension": "客戶滿意度",
        "ability": "客戶滿意度調查\n(QCSA06/QDCS調查構面/分析/改善追蹤)",
        "levels": {
          "0": "無",
          "1": "了解滿意度調查目的",
          "2": "能執行滿意度調查+彙整報告+追蹤改善",
          "3": "建立滿意度管理體系+有滿意度提升成功案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "騏宏客戶滿意度調查的六大構面是什麼？調查結果不佳如何啟動改善？",
        "questions": "L4A必備(執行調查)｜L4B主導(分析改善)｜L5A主導(管理體系)"
      },
      {
        "category": "[E]  RMA客訴管理  RMA & Customer Complaint",
        "code": "E4★",
        "dimension": "保固管理",
        "ability": "保固條款與服務\n(24個月保固/保固除外條款/FAE技術支援)",
        "levels": {
          "0": "無",
          "1": "了解保固條款(24個月)",
          "2": "能清楚向客戶說明保固範圍與除外條款",
          "3": "建立保固FAQ+有複雜保固爭議成功解決案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "客戶說燈具使用6個月後失效要求保固，你如何判斷是否在保固範圍內？",
        "questions": "L3B必備(保固知識)｜L4B主導(保固爭議)｜L5A主導(服務規範建立)"
      },
      {
        "category": "[F]  產品與技術知識  Product & Technical Knowledge",
        "code": "F1",
        "dimension": "產品認識",
        "ability": "LED警示燈產品系列認識\n(頂燈/側閃/警示桿/交通棒/豆莢燈/前後警閃)",
        "levels": {
          "0": "無",
          "1": "能區分騏宏主要產品類型",
          "2": "能依客戶車型/市場/用途推薦適合產品",
          "3": "建立產品知識培訓教材+有複雜客製需求成功轉化案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "警車、救護車、工程車在警示燈選用上有哪些不同考量？請推薦適合警車頂燈的產品",
        "questions": "L3A起必備｜L4A必備(推薦能力)｜L5A主導(產品知識體系建立)"
      },
      {
        "category": "[F]  產品與技術知識  Product & Technical Knowledge",
        "code": "F2",
        "dimension": "技術規格",
        "ability": "技術規格說明能力\n(IP67/IP69K/ECE R65/SAE J595/光型/閃頻/配線說明)",
        "levels": {
          "0": "無",
          "1": "知道主要技術規格縮寫含義",
          "2": "能向客戶清楚說明技術規格差異並解答技術問題",
          "3": "獨立處理技術FAE問題+有複雜技術澄清成功案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "客戶詢問ECE R65與SAE J595有什麼差別？IP67和IP69K各適用什麼使用場景？",
        "questions": "L3B認知｜L4A必備(向客戶說明)｜L4B主導(技術FAE支援)"
      },
      {
        "category": "[F]  產品與技術知識  Product & Technical Knowledge",
        "code": "F3",
        "dimension": "認證知識",
        "ability": "產品認證知識\n(CE/ECE R65/R10/SAE/FCC/CA Title13/AS/E-Mark)",
        "levels": {
          "0": "無",
          "1": "知道主要認證種類與市場對應",
          "2": "能向客戶說明各認證意義並確認市場需求",
          "3": "主導認證資料準備+有協助客戶通關認證問題案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "客戶要銷售到加州，需要哪些認證？CA Title 13的特殊要求是什麼？",
        "questions": "L3B必備(認證對應市場)｜L4B必備(認證說明)｜L5A主導(認證策略)"
      },
      {
        "category": "[F]  產品與技術知識  Product & Technical Knowledge",
        "code": "F4",
        "dimension": "控制系統",
        "ability": "客戶控制系統整合知識\n(Whelen CenCom/SoundOff bluePRINT/ECCO Matrix/Federal Pathfinder)",
        "levels": {
          "0": "無",
          "1": "知道主要客戶控制系統品牌",
          "2": "能說明騏宏產品如何與各控制系統整合",
          "3": "有協助客戶完成控制系統整合測試成功案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "Whelen CenCom Core客戶詢問騏宏燈具是否相容，你如何確認並回覆？",
        "questions": "L4B必備(整合知識)｜L5A主導(整合測試協調)｜L5B主導(規格協議)"
      },
      {
        "category": "[F]  產品與技術知識  Product & Technical Knowledge",
        "code": "F5★",
        "dimension": "競品知識",
        "ability": "競品技術規格比較\n(Whelen/SoundOff/ECCO/Feniex/Code3詳細比較)",
        "levels": {
          "0": "無",
          "1": "知道主要競品",
          "2": "能系統比較騏宏vs競品技術規格優劣勢",
          "3": "建立競品技術比較資料庫+有用比較優勢成功取代競品案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "客戶說在用SoundOff的產品，你如何分析騏宏的替代優勢？",
        "questions": "L4B建議｜L5A必備(競品比較)｜L5B主導(競品資料庫建立)"
      },
      {
        "category": "[G]  國際業務能力  International Sales",
        "code": "G1",
        "dimension": "英語商務",
        "ability": "英語商務溝通能力\n(Email撰寫/電話/視訊/商務簡報/合約英文)",
        "levels": {
          "0": "無",
          "1": "基礎英語溝通(可閱讀/簡單回覆)",
          "2": "能獨立以英語進行商務Email/電話/視訊會議",
          "3": "能以英語主持商務簡報/談判/合約討論"
        },
        "importance": 5,
        "weight": "15",
        "target_level": "請用英文描述騏宏的主要產品特色與市場定位（現場英語測試）",
        "questions": "L3A建議｜L3B必備(Email)｜L4A必備(電話/視訊)｜L4B主導(談判)"
      },
      {
        "category": "[G]  國際業務能力  International Sales",
        "code": "G2★",
        "dimension": "第二外語",
        "ability": "第二外語能力\n(西班牙語/德語/法語/日語/阿拉伯語等)",
        "levels": {
          "0": "無",
          "1": "基礎問候",
          "2": "能以第二外語進行基本商務溝通",
          "3": "能以第二外語獨立開發特定市場客戶"
        },
        "importance": 3,
        "weight": "8",
        "target_level": "你掌握哪些第二外語？曾用第二外語開發或維護哪個市場的客戶？",
        "questions": "L5A加分｜L5B建議(主要市場語言)｜L6A主導(多語言市場策略)"
      },
      {
        "category": "[G]  國際業務能力  International Sales",
        "code": "G3",
        "dimension": "市場知識",
        "ability": "國際市場知識\n(北美/歐洲/澳洲/中東/東南亞各市場特性與法規)",
        "levels": {
          "0": "無",
          "1": "了解主要市場概況",
          "2": "能說明各主要市場的法規/認證/採購習慣差異",
          "3": "建立市場知識資料庫+有特定市場深耕成功案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "北美市場vs歐洲市場在警示燈採購決策上有哪些關鍵差異？",
        "questions": "L3B認知｜L4A必備(主要市場)｜L4B主導(多市場策略)"
      },
      {
        "category": "[G]  國際業務能力  International Sales",
        "code": "G4",
        "dimension": "展覽參展",
        "ability": "國際展覽規劃與參展\n(IACP/FDIC/Interschutz展前開發/現場接洽/追蹤)",
        "levels": {
          "0": "無",
          "1": "了解展覽參展流程",
          "2": "能獨立規劃參展+現場接洽客戶+展後追蹤",
          "3": "建立展覽SOP+有展覽開發出大客戶成功案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "參加IACP警察展前、展中、展後各需要做哪些工作？如何最大化展覽投資回報？",
        "questions": "L4A必備(展覽參與)｜L4B主導(規劃執行)｜L5A主導(展覽策略)"
      },
      {
        "category": "[G]  國際業務能力  International Sales",
        "code": "G5★",
        "dimension": "文化差異",
        "ability": "國際商務文化差異\n(美/歐/中東/亞洲商務禮儀與談判文化)",
        "levels": {
          "0": "無",
          "1": "了解主要市場文化差異",
          "2": "能依客戶文化背景調整溝通方式",
          "3": "有跨文化溝通培訓經驗+有複雜跨文化談判成功案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "與中東客戶談判和與北美客戶談判，你在溝通方式上如何調整？",
        "questions": "L4A認知｜L4B必備(文化調整)｜L5A主導(文化培訓)"
      },
      {
        "category": "[H]  APQP/PPAP業務端  APQP/PPAP (Sales Side)",
        "code": "H1",
        "dimension": "APQP業務角色",
        "ability": "APQP業務角色執行\n(啟動/客戶窗口/送樣協調/A表管控/Gate Review)",
        "levels": {
          "0": "無",
          "1": "了解APQP業務定位",
          "2": "能獨立執行APQP業務端工作(A表達成率≥90%)",
          "3": "建立APQP業務SOP+有車廠Tier1 APQP成功完成案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "APQP五個階段中，業務負責哪些輸入/輸出？A表里程碑延遲10%時業務如何處理？",
        "questions": "L4B必備(認知執行)｜L5A主導(A表管控)｜L5B主導(複雜車廠APQP)"
      },
      {
        "category": "[H]  APQP/PPAP業務端  APQP/PPAP (Sales Side)",
        "code": "H2",
        "dimension": "PPAP文件",
        "ability": "PPAP文件業務端協調\n(19項要素/提交等級/客戶PPAP核准追蹤)",
        "levels": {
          "0": "無",
          "1": "了解PPAP 19項要素",
          "2": "能協調各部門完成PPAP文件準備+追蹤客戶核准",
          "3": "建立PPAP業務SOP+有Tier1 PPAP成功核准案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "PPAP提交Level 3時，業務主責的文件是哪些？客戶PPAP核准後業務的後續動作是什麼？",
        "questions": "L4A認知｜L4B必備(協調執行)｜L5A主導(PPAP策略)"
      },
      {
        "category": "[H]  APQP/PPAP業務端  APQP/PPAP (Sales Side)",
        "code": "H3",
        "dimension": "新品業務",
        "ability": "新品開發業務窗口\n(客戶需求轉換/技術可行性評估/送樣追蹤)",
        "levels": {
          "0": "無",
          "1": "了解新品開發流程",
          "2": "能獨立收集客戶需求+轉達研發+追蹤樣品進度",
          "3": "建立新品業務SOP+有複雜OEM客製新品成功量產案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "客戶提出新產品需求，你如何評估技術可行性並轉換成研發可執行的規格文件？",
        "questions": "L4A必備(需求收集)｜L4B主導(追蹤管理)｜L5A主導(開發策略)"
      },
      {
        "category": "[H]  APQP/PPAP業務端  APQP/PPAP (Sales Side)",
        "code": "H4★",
        "dimension": "OEM/ODM/OBM",
        "ability": "三種營運模式業務策略\n(OEM合約/ODM智財保護/OBM品牌授權/模具費談判)",
        "levels": {
          "0": "無",
          "1": "了解三種模式差異",
          "2": "能依客戶需求判斷適合模式並說明條件",
          "3": "建立三模式業務策略框架+有各模式成功案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "客戶詢問是否可以貼自己品牌，OBM合作條件是什麼？模具費如何談判？",
        "questions": "L4A必備(模式說明)｜L4B主導(策略選擇)｜L5A主導(模式策略)"
      },
      {
        "category": "[I]  數位行銷與品牌  Digital Marketing & Branding",
        "code": "I1",
        "dimension": "行銷素材",
        "ability": "行銷素材製作與管理\n(產品目錄/DM/報價簡報/展覽材料/官網內容)",
        "levels": {
          "0": "無",
          "1": "知道行銷素材種類",
          "2": "能製作或協調製作完整行銷素材+確保品牌一致",
          "3": "建立行銷素材管理系統+有提升客戶轉換率成功案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "如何設計一份能有效吸引北美警察採購官的產品目錄？需包含哪些關鍵資訊？",
        "questions": "L3B必備(製作能力)｜L4A主導(素材策略)｜L4B主導(品牌管理)"
      },
      {
        "category": "[I]  數位行銷與品牌  Digital Marketing & Branding",
        "code": "I2",
        "dimension": "社群媒體",
        "ability": "社群媒體行銷\n(LinkedIn/Facebook/YouTube/Instagram/警察論壇)",
        "levels": {
          "0": "無",
          "1": "了解主要社群平台",
          "2": "能獨立管理B2B社群內容+追蹤成效",
          "3": "建立社群行銷策略+有社群帶來新客詢問成功案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "LinkedIn對B2B警示燈業務的重要性？如何用LinkedIn開發警察設備採購官？",
        "questions": "L3B認知｜L4A必備(B2B社群)｜L4B主導(內容策略)"
      },
      {
        "category": "[I]  數位行銷與品牌  Digital Marketing & Branding",
        "code": "I3★",
        "dimension": "網站管理",
        "ability": "官網內容管理\n(SEO/產品頁/新聞/Landing Page/多語言)",
        "levels": {
          "0": "無",
          "1": "了解網站管理概念",
          "2": "能維護官網產品頁內容+協調設計",
          "3": "建立網站SEO策略+有自然流量提升成功案例"
        },
        "importance": 3,
        "weight": "6",
        "target_level": "如何優化警示燈相關關鍵字的Google搜尋排名？topwarninglight.com的SEO現狀如何改善？",
        "questions": "L4A認知｜L4B建議(SEO基礎)｜L5A主導(數位策略)"
      },
      {
        "category": "[I]  數位行銷與品牌  Digital Marketing & Branding",
        "code": "I4★",
        "dimension": "品牌保護",
        "ability": "品牌保護與紅線守則\n(商標禁用/客戶IP保護/保密義務/業務紅線)",
        "levels": {
          "0": "無",
          "1": "了解業務紅線守則",
          "2": "能嚴格遵守並向新同仁說明紅線",
          "3": "建立品牌保護SOP+有成功阻止紅線違規案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "業務紅線守則中，哪9項行為是最嚴重絕對禁止的？如何向新業務說明？",
        "questions": "L3A起必備(紅線守則)｜L4A必備(說明指導)｜L5A主導(制度建立)"
      },
      {
        "category": "[J]  ERP與資料管理  ERP & Data Management",
        "code": "J1",
        "dimension": "ERP業務操作",
        "ability": "鼎新ERP業務模組操作\n(COPI21客戶建立/報價單/訂單/出貨單/應收)",
        "levels": {
          "0": "無",
          "1": "基礎查詢",
          "2": "能獨立操作ERP業務全流程(報價→訂單→出貨→收款)",
          "3": "建立ERP操作SOP+有指導新人+ERP異常處理案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "在鼎新ERP如何建立新客戶？報價單如何轉訂單？如何查詢某客戶的未出貨訂單？",
        "questions": "L3B必備(基礎操作)｜L4A必備(完整流程)｜L4B主導(培訓他人)"
      },
      {
        "category": "[J]  ERP與資料管理  ERP & Data Management",
        "code": "J2",
        "dimension": "業務報表",
        "ability": "業務三大核心報表\n(銷售達成率/帳齡分析/出貨預測/ERP分析報表)",
        "levels": {
          "0": "無",
          "1": "了解報表用途",
          "2": "能從ERP產出所需報表並基本分析",
          "3": "建立業務報表dashboard+有從報表發現問題主動改善案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "每月月底前業務需要提交哪些ERP報表？如何從帳齡分析報表找到高風險客戶？",
        "questions": "L4A必備(報表閱讀)｜L4B主導(分析應用)｜L5A主導(報表體系)"
      },
      {
        "category": "[J]  ERP與資料管理  ERP & Data Management",
        "code": "J3",
        "dimension": "資料品質",
        "ability": "客戶資料與文件管理\n(FMSA0201客戶資料完整性/合約歸檔/往來信件保存)",
        "levels": {
          "0": "無",
          "1": "了解文件管理要求",
          "2": "能維護完整客戶資料+合約歸檔+釘釘文件管理",
          "3": "建立文件管理SOP+通過IATF16949稽核0缺失"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "FMSA0201客戶基本資料需要填寫哪些欄位？如何確保客戶資料的即時準確性？",
        "questions": "L3A必備(資料完整)｜L4A主導(文件管理)｜L4B主導(稽核準備)"
      },
      {
        "category": "[K]  績效管理與阿米巴  KPI & Amoeba Management",
        "code": "K1",
        "dimension": "業務KPI",
        "ability": "業務個人KPI管理\n(銷售額/新客數/報價轉訂單率/交期達成率/帳款回收率)",
        "levels": {
          "0": "無",
          "1": "了解業務KPI指標",
          "2": "能自主追蹤個人KPI+分析落差+提出改善行動",
          "3": "建立業務KPI看板+有KPI持續超標成功案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "你上一份工作的業務KPI是什麼？實際達成率如何？如何分析未達原因並改善？",
        "questions": "L3B必備(KPI認知)｜L4A必備(自主追蹤)｜L4B主導(KPI分析)"
      },
      {
        "category": "[K]  績效管理與阿米巴  KPI & Amoeba Management",
        "code": "K2",
        "dimension": "阿米巴核算",
        "ability": "阿米巴損益核算能力\n(業務部時間附加值/銷售額-外部費用/每月損益報告)",
        "levels": {
          "0": "無",
          "1": "了解阿米巴時間附加值公式",
          "2": "能計算業務部時間附加值+分析趨勢",
          "3": "建立業務阿米巴核算SOP+有核算優化業務效率案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "業務部的時間附加值如何計算？哪些費用算外部費用？如何用時間附加值判斷業務效率？",
        "questions": "L4B必備(核算能力)｜L5A主導(損益分析)｜L6A主導(業務部阿米巴設計)"
      },
      {
        "category": "[K]  績效管理與阿米巴  KPI & Amoeba Management",
        "code": "K3",
        "dimension": "業務報告",
        "ability": "業務進度彙報\n(主動同步/週報/月報/進度落後預警/一分鐘彙報)",
        "levels": {
          "0": "無",
          "1": "被動等待詢問",
          "2": "主動每週彙報進度含異常+使用釘釘即時同步",
          "3": "建立彙報範本+有效資訊傳遞零意外記錄"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "業務週報應包含哪些內容？主動同步的重點是什麼？遇到客訴何時應主動上報？",
        "questions": "L3A起必備｜L4A必備(主動彙報)｜L5A主導(彙報機制建立)"
      },
      {
        "category": "[K]  績效管理與阿米巴  KPI & Amoeba Management",
        "code": "K4★",
        "dimension": "120%修復",
        "ability": "業務120%修復法則\n(犯錯後立即行動/超額成果/信任重建)",
        "levels": {
          "0": "無",
          "1": "了解120%修復概念",
          "2": "有犯錯後主動提出解決方案+用超額成果修復信任的實績",
          "3": "有複雜客訴信任危機成功修復案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "你在業務工作中犯過哪個讓客戶不滿意的錯誤？你如何處理以超過客戶期待修復信任？",
        "questions": "L3A起必備(態度)｜L4A必備(行動能力)｜L5A主導(方法論輸出)"
      },
      {
        "category": "[L]  敏捷業務管理  Agile Sales Management",
        "code": "L1",
        "dimension": "Sprint管理",
        "ability": "業務工作Sprint管理\n(2週Sprint/Backlog優先排序/每日Standup/回顧會議)",
        "levels": {
          "0": "無",
          "1": "了解Scrum/Sprint基本概念",
          "2": "能用Sprint管理個人業務任務+每日Standup報告",
          "3": "主導業務團隊Sprint管理+有敏捷業務改善成效案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "如何用2週Sprint管理你的新客開發任務？Business Backlog如何排優先順序？",
        "questions": "L4B認知｜L5A必備(Sprint執行)｜L5B主導(Scrum Master)"
      },
      {
        "category": "[L]  敏捷業務管理  Agile Sales Management",
        "code": "L2",
        "dimension": "看板管理",
        "ability": "業務Kanban管理\n(客戶開發/跟進/提案/談判/成交各階段管理)",
        "levels": {
          "0": "無",
          "1": "了解Kanban概念",
          "2": "能建立並維護業務Kanban+WIP上限控制",
          "3": "主導業務Pipeline Kanban+有Pipeline管理改善成效"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "如何用Kanban管理20個同時進行的客戶開發Pipeline？WIP上限如何設定？",
        "questions": "L4A認知｜L4B必備(Kanban維護)｜L5A主導(Pipeline管理)"
      },
      {
        "category": "[L]  敏捷業務管理  Agile Sales Management",
        "code": "L3★",
        "dimension": "業務數據分析",
        "ability": "業務數據分析能力\n(Excel/Power BI/ERP報表/銷售趨勢分析)",
        "levels": {
          "0": "無",
          "1": "基礎Excel",
          "2": "能用Excel/ERP分析銷售趨勢+找出規律",
          "3": "建立業務Dashboard+有數據驅動決策成功案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "你如何用數據分析找出高潛力客戶？上季度哪個市場的表現最好？用數據說明",
        "questions": "L4A認知｜L4B必備(分析能力)｜L5A主導(BI建立)"
      },
      {
        "category": "[M]  出差參展/拜訪客戶與改裝車廠  Business Travel & Upfitter Visits",
        "code": "M1",
        "dimension": "出差與客戶拜訪",
        "ability": "出差規劃與客戶拜訪執行\n(行程規劃/拜訪預約/費用申報/拜訪報告釘釘回報)",
        "levels": {
          "0": "無",
          "1": "了解出差基本流程",
          "2": "能獨立規劃行程+預約客戶+完成拜訪報告+費用申報",
          "3": "建立出差拜訪SOP+有多國出差開發大客戶成功案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A必備(獨立出差)｜L4B主導(多國出差)｜L5A主導(出差策略)",
        "questions": "你規劃一次美國客戶拜訪的完整流程是什麼？出差前中後各要做哪些工作？如何確保每次出差的投資回報？"
      },
      {
        "category": "[M]  出差參展/拜訪客戶與改裝車廠  Business Travel & Upfitter Visits",
        "code": "M2",
        "dimension": "改裝車廠合作",
        "ability": "改裝車廠(Upfitter)拜訪與技術協作\n(Upfitter需求識別/安裝兼容性確認/合車測試協調/改裝廠關係維護)",
        "levels": {
          "0": "無",
          "1": "知道Upfitter在警示燈供應鏈中的角色",
          "2": "能拜訪改裝車廠+識別安裝需求+回饋技術問題+建立合作關係",
          "3": "主導Upfitter合作體系+有改裝廠認可騏宏產品並進入常備料成功案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L4B必備(拜訪認識)｜L5A主導(合作開發)｜L5B主導(體系建立)",
        "questions": "美國警車Upfitter在購買決策中扮演什麼角色？如何說服Upfitter將騏宏燈具列入常備推薦清單？安裝兼容性問題如何協調研發解決？"
      },
      {
        "category": "[M]  出差參展/拜訪客戶與改裝車廠  Business Travel & Upfitter Visits",
        "code": "M3★",
        "dimension": "展會深度接洽",
        "ability": "展覽現場深度接洽與展後追蹤\n(展前邀約/現場DEMO/名片收集/展後72h跟進/CRM錄入)",
        "levels": {
          "0": "無",
          "1": "能協助展覽現場接洽與資料發送",
          "2": "能獨立做產品DEMO+深度接洽+展後72h內完成跟進且CRM完整錄入",
          "3": "建立展覽接洽追蹤SOP+有展覽開發到年度合約大客戶案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4A必備(展覽接洽)｜L4B主導(DEMO+追蹤)｜L5A主導(展覽策略)",
        "questions": "IACP展覽現場你如何在5分鐘內判斷來訪者購買潛力？如何設計有效的展後跟進Email序列確保轉化？"
      },
      {
        "category": "[N]  行銷.通路  Marketing & Channel Management",
        "code": "N1",
        "dimension": "代理商通路開發",
        "ability": "代理商/通路商開發與管理\n(代理商評估/授權條件談判/通路政策制定/代理商培訓/業績管理)",
        "levels": {
          "0": "無",
          "1": "了解代理商通路概念",
          "2": "能獨立接洽代理商+完成基本授權談判+追蹤代理商業績",
          "3": "建立多國代理商體系+有代理商帶動年銷售顯著提升成功案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L4B必備(代理商接洽)｜L5A主導(體系建立)｜L6A主導(多國通路策略)",
        "questions": "如何評估潛在代理商是否值得授權？代理商授權合約需包含哪些關鍵條款？代理商管理中最容易出現哪些問題？如何預防？"
      },
      {
        "category": "[N]  行銷.通路  Marketing & Channel Management",
        "code": "N2",
        "dimension": "行銷活動規劃",
        "ability": "行銷活動規劃與執行\n(促銷活動設計/EDM發送/LinkedIn內容行銷/展覽行銷/品牌推廣)",
        "levels": {
          "0": "無",
          "1": "了解基本行銷活動概念",
          "2": "能獨立規劃執行行銷活動+追蹤成效指標(開信率/詢問數/轉化率)",
          "3": "建立行銷活動管理體系+有行銷活動帶動可量化業績提升成功案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L4A認知｜L4B必備(執行能力)｜L5A主導(行銷策略)",
        "questions": "如何為騏宏設計針對北美警察採購官的EDM行銷序列？如何衡量行銷活動投資回報？你有哪些行銷活動帶來具體業績的案例？"
      },
      {
        "category": "[N]  行銷.通路  Marketing & Channel Management",
        "code": "N3★",
        "dimension": "網路電商通路",
        "ability": "網路通路/電商平台開發管理\n(Amazon Business/Made-in-China/Alibaba B2B/官網詢問轉化/SEO)",
        "levels": {
          "0": "無",
          "1": "了解B2B電商平台概念",
          "2": "能管理B2B電商平台產品上架+詢單處理+轉化追蹤",
          "3": "建立電商通路策略+有電商帶動新客詢問且成交可量化成功案例"
        },
        "importance": 3,
        "weight": "6",
        "target_level": "L4B認知｜L5A建議(電商管理)｜L5B主導(電商通路策略)",
        "questions": "騏宏如何利用Alibaba B2B或Made-in-China開發新客？如何區分高潛力詢單與低質詢單？電商平台的ROI如何衡量？"
      },
      {
        "category": "[O]  AI工具業務應用  AI Tools for Sales",
        "code": "O1",
        "dimension": "AI業務工具應用",
        "ability": "AI輔助業務工具應用能力\n(ChatGPT/Claude/Copilot/Perplexity等AI工具融入業務日常流程)",
        "levels": {
          "0": "無",
          "1": "知道AI工具存在且偶爾使用",
          "2": "能將AI工具整合到業務日常流程（Email撰寫/競品調研/客戶分析/簡報製作）且顯著提升效率",
          "3": "建立業務AI工具使用指南+輔導團隊應用+有AI驅動效率提升可量化成效案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L3B認知｜L4A必備(日常應用)｜L4B主導(流程整合)",
        "questions": "你目前在業務工作中使用哪些AI工具？請舉例說明AI如何幫你完成一項具體業務任務（如開發信/競品分析/報價簡報）並節省多少時間？"
      },
      {
        "category": "[O]  AI工具業務應用  AI Tools for Sales",
        "code": "O2★",
        "dimension": "AI文件自動化",
        "ability": "AI驅動業務文件自動化生成\n(AI輔助Cold Email序列/產品提案/技術FAQ/客戶報告自動化)",
        "levels": {
          "0": "無",
          "1": "能用AI生成基礎文案並手動修改",
          "2": "能用AI建立多語言Email序列+產品提案樣板+客戶簡報並能品質把關",
          "3": "建立AI業務文件自動化流程+有AI生成內容直接促成成交或縮短銷售周期成功案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4B建議(AI文案)｜L5A必備(自動化流程)｜L5B主導(AI策略體系)",
        "questions": "如何用Claude/ChatGPT生成一封針對美國警車Upfitter的冷開發Email並確保個人化和說服力？AI生成內容如何品管避免錯誤？"
      },
      {
        "category": "[O]  AI工具業務應用  AI Tools for Sales",
        "code": "O3★",
        "dimension": "AI市場情報分析",
        "ability": "AI驅動客戶情報與市場分析\n(AI競品調研/客戶公司深度分析/市場趨勢/購買信號識別)",
        "levels": {
          "0": "無",
          "1": "能用AI搜集基礎競品或客戶資訊",
          "2": "能系統性用AI進行客戶公司深度分析+市場趨勢報告+識別高潛力購買信號",
          "3": "建立AI情報分析SOP+有情報分析直接驅動策略決策且成效可量化案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L5A建議(情報分析)｜L5B必備(策略輸出)｜L6A主導(情報體系)",
        "questions": "你如何用AI工具在30分鐘內完成一家潛在客戶的深度背景調查？包含哪些分析維度？如何將情報轉化為業務策略？"
      },
      {
        "category": "[P]  標案.特殊通路  Government Bids & Special Channels",
        "code": "P1",
        "dimension": "政府採購標案",
        "ability": "政府/公共機構採購標案作業\n(台灣政府電子採購網/美國GSA Schedule/歐洲政府採購/投標文件製作)",
        "levels": {
          "0": "無",
          "1": "了解政府採購標案基本流程",
          "2": "能獨立追蹤標案資訊+準備投標文件+配合品保完成規格符合性確認",
          "3": "建立標案管理SOP+有成功得標政府採購案並完成交付成功案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L4B認知｜L5A必備(獨立投標)｜L5B主導(標案策略)",
        "questions": "台灣政府電子採購網與美國GSA Schedule投標流程有什麼主要差異？如何準備合格的政府採購投標文件？規格符合性矩陣如何製作？"
      },
      {
        "category": "[P]  標案.特殊通路  Government Bids & Special Channels",
        "code": "P2",
        "dimension": "特殊通路管理",
        "ability": "特殊通路關係建立與維護\n(警察消防協會/公會關係/軍警特殊採購/OEM一階供應商通路建立)",
        "levels": {
          "0": "無",
          "1": "了解特殊通路的定義與特性",
          "2": "能主動接觸並建立警察公會/消防協會/OEM一階等特殊通路關係",
          "3": "有特殊通路帶動穩定年度採購合約或成為OEM Tier1核准供應商成功案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L5A認知｜L5B主導(關係建立)｜L6A主導(特殊通路策略)",
        "questions": "如何接觸並建立與美國/台灣警察公會或消防協會的合作關係？成為OEM Tier1核准供應商需要滿足哪些條件？如何維護長期關係？"
      },
      {
        "category": "[P]  標案.特殊通路  Government Bids & Special Channels",
        "code": "P3★",
        "dimension": "標案追蹤與文件",
        "ability": "標案追蹤系統應用與招標文件管理\n(政府採購網/GovWin/BidSync/招標文件解析/規格符合性矩陣)",
        "levels": {
          "0": "無",
          "1": "了解標案追蹤系統",
          "2": "能操作標案追蹤平台+解析招標技術規格+製作規格符合性矩陣",
          "3": "建立標案管理資料庫+有用規格符合性矩陣成功取得高技術分成功案例"
        },
        "importance": 3,
        "weight": "6",
        "target_level": "L5A建議(追蹤能力)｜L5B必備(文件管理)｜L6A主導(標案體系)",
        "questions": "你如何有系統地追蹤多個同時進行的政府標案？規格符合性矩陣如何製作？投標失敗後如何分析原因並改善？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full-Function Application",
        "code": "Q1",
        "dimension": "釘釘日常溝通",
        "ability": "釘釘即時通訊與通知管理\n(群組管理/DING消息/已讀回執/釘釘電話/視訊會議)",
        "levels": {
          "0": "無",
          "1": "知道釘釘基本訊息功能，能發送文字/圖片",
          "2": "能建立群組、使用DING發送重要通知、查看已讀狀態、發起視訊會議",
          "3": "建立釘釘溝通規範SOP+指導新人使用+有訊息分層管理成功案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "業務如何用釘釘DING通知客戶回覆急單？\n群組已讀回執如何確認訊息傳達？\n出差期間如何用釘釘視訊替代現場會議？",
        "questions": "L3A起必備(日常通訊)｜L4A必備(DING/群組管理)｜L5A主導(通訊規範建立)"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full-Function Application",
        "code": "Q2",
        "dimension": "釘釘審批OA流程",
        "ability": "釘釘工作台審批與OA流程操作\n(出差申請/費用報銷/請假/樣品申請/合約審批/簽核追蹤)",
        "levels": {
          "0": "無",
          "1": "知道釘釘有OA審批功能，能提交基本申請單",
          "2": "能獨立發起出差/費用/請假/樣品申請，追蹤簽核狀態，催辦超時審批",
          "3": "建立業務部OA流程SOP+能設計新審批表單+有OA流程優化成功案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "業務出差美國前需要在釘釘走哪些審批？\n樣品申請如何透過釘釘追蹤研發/品保進度？\n簽核超時如何在釘釘催辦並通知主管？",
        "questions": "L3B必備(基礎OA申請)｜L4A必備(全流程追蹤)｜L4B主導(OA流程優化)"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full-Function Application",
        "code": "Q3★",
        "dimension": "釘釘進階功能",
        "ability": "釘釘進階應用：日誌/掃碼/報表/釘釘文件\n(工作日誌/掃碼製令工單/智能報表/雲端文件協作/釘釘AI助理)",
        "levels": {
          "0": "無",
          "1": "知道釘釘有日誌和文件功能",
          "2": "能撰寫業務工作日誌、用掃碼追蹤訂單進度、建立業務智能報表、\n  協作編輯客戶提案文件、使用釘釘AI助理生成週報草稿",
          "3": "建立業務部釘釘應用SOP+有數位化報表改善業務效率可量化案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "你如何用釘釘日誌記錄每日業務拜訪重點並同步主管？\n掃碼如何追蹤組裝產線工單出貨進度？\n如何用釘釘智能報表呈現本月訂單達成率給主管？",
        "questions": "L4A建議(日誌/文件)｜L4B必備(智能報表)｜L5A主導(釘釘數位化策略)"
      },
      {
        "category": "[R]  NPI新產品試產與業務收尾  New Product Trial Run & Sales Closure Management",
        "code": "R9",
        "dimension": "完整測試驗證追蹤",
        "ability": "NPI試產品完整測試與驗證協調\n(電氣功能/光學/環境/安規/IP防護等級逐項確認)",
        "levels": {
          "0": "無",
          "1": "知道試產品需要哪些測試，能列出5項以上",
          "2": "能根據客戶規格（SAE/ECE/FCC/IP等級）建立測試驗證清單→協調品保/研發/生技安排各項測試→追蹤測試結果→彙整測試報告確認全部PASS→取得品保試產品質確認簽核",
          "3": "建立NPI測試驗證矩陣SOP+主導測試排程+有複雜多認證產品一次PASS的成功案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "試產品出廠前至少需完成哪8項測試驗證？\nIP67與IP69K的測試方法差異是什麼？\n若某項測試不合格，你如何協調研發改善並決定是否重新試產？",
        "questions": "L3B了解測試清單｜L4A獨立追蹤+彙整報告｜L5A建立驗證矩陣+主導決策"
      },
      {
        "category": "[R]  NPI新產品試產與業務收尾  New Product Trial Run & Sales Closure Management",
        "code": "R10",
        "dimension": "客戶樣品送認",
        "ability": "樣品寄送客戶認可與客戶認證進度追蹤\n(樣品清單/出口文件/客戶收樣確認/認可時程追蹤)",
        "levels": {
          "0": "無",
          "1": "知道試產後需送樣品給客戶確認，能說出送樣流程",
          "2": "能準備樣品寄送清單（規格/數量/送樣目的）→協調倉庫/生技包裝與標示→安排國際快遞或貨代出口→提供tracking number→收到後跟進客戶確認收樣→追蹤客戶內部認可時程→催辦超時未回覆",
          "3": "建立樣品管理SOP+有多地區同步送樣並全數取得認可的成功案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "送樣前需要準備哪些文件？（至少包含：送樣單/Packing List/Invoice/形式發票）\n客戶收樣後10天無回覆，你如何跟進？\n若客戶認可報告提出外觀修改意見，你如何協調研發並決定是否需要再次送樣？",
        "questions": "L3B執行(送樣+追蹤)｜L4A主導(文件+時程管理)｜L5A建立(送樣SOP+多地區管理)"
      },
      {
        "category": "[R]  NPI新產品試產與業務收尾  New Product Trial Run & Sales Closure Management",
        "code": "R11",
        "dimension": "客戶確認書取得",
        "ability": "客戶正式書面確認與認可文件歸檔\n(客戶簽核/FAI報告確認/Approved Supplier List掛名)",
        "levels": {
          "0": "無",
          "1": "知道需要取得客戶書面確認，能說出常見確認文件類型",
          "2": "能追蹤客戶完成樣品評估→請客戶出具正式認可函或簽核FAI報告→確認客戶內部系統完成供應商掛名（Approved Supplier List）→文件歸檔至騏宏文管中心→更新CRM狀態",
          "3": "建立客戶確認書追蹤SOP+有主動推動客戶掛名並取得正式合作資格的完整案例"
        },
        "importance": 4,
        "weight": "10",
        "target_level": "FAI（首件檢驗報告）中業務需要確認哪些客戶簽核欄位？\n客戶說「沒問題但不想出書面」，你如何處理？\nApproved Supplier List掛名對後續訂單有什麼實際意義？",
        "questions": "L4A取得確認書+歸檔｜L4B追蹤ASL掛名｜L5A建立客戶確認管理SOP"
      },
      {
        "category": "[R]  NPI新產品試產與業務收尾  New Product Trial Run & Sales Closure Management",
        "code": "R12★",
        "dimension": "認證申請與追蹤",
        "ability": "NPI產品送第三方實驗室申請認證\n(SAE/FCC/CE/ECE R65/E-Mark/UN38.3/RoHS選用/申請文件/追蹤)",
        "levels": {
          "0": "無",
          "1": "知道哪些認證需要送第三方實驗室，能說出2種以上認證類型",
          "2": "能依據目標市場決定認證組合→選擇合格實驗室（UL/TÜV/SGS等）→準備申請文件（技術文件/電路圖/BOM）→提交申請→追蹤測試進度→處理實驗室補件要求→取得認證報告→協助品保更新產品認證清單",
          "3": "主導多市場認證規劃+建立認證追蹤看板+有複雜多認證（SAE+FCC+ECE R65+E-Mark）一次通過的成功案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "出口美國的警示燈至少需要哪些認證？出口歐盟呢？\n認證申請文件包含哪些？若實驗室要求補件，通常補哪些最常見？\nFCC與CE認證的有效期間是多久？何時需要重新申請？",
        "questions": "L4A了解認證組合+能準備文件｜L4B主導申請流程+追蹤｜L5A規劃多市場認證策略"
      },
      {
        "category": "[R]  NPI新產品試產與業務收尾  New Product Trial Run & Sales Closure Management",
        "code": "R13",
        "dimension": "產品收尾文件",
        "ability": "NPI後續產品收尾文件完整性確認\n(測試報告/DVT報告/BOM Freeze/圖面版本確認/說明書/包裝規範)",
        "levels": {
          "0": "無",
          "1": "知道NPI後需要整理收尾文件，能列出5項以上文件類型",
          "2": "能建立NPI收尾文件清單→逐項確認各部門文件完整性（測試報告/DVT報告/BOM Freeze版本/圖面最終版/說明書多語版/包裝規範）→確認所有文件均已完成簽核→歸檔至文管中心→建立產品文件索引",
          "3": "建立NPI收尾文件SOP+主導跨部門文件收齊+有量產前零文件缺漏的完整案例"
        },
        "importance": 3,
        "weight": "8",
        "target_level": "NPI收尾必備文件清單至少包含哪10項？\nBOM Freeze代表什麼？Freeze後若需要變更，流程是什麼？\n說明書需要準備哪些語言版本，如何確認翻譯品質？",
        "questions": "L4A確認清單+催收文件｜L4B主導歸檔+索引建立｜L5A建立文件管控SOP"
      },
      {
        "category": "[R]  NPI新產品試產與業務收尾  New Product Trial Run & Sales Closure Management",
        "code": "R14",
        "dimension": "料件模具承認付款",
        "ability": "各料件、模具承認流程與模具費付款管理\n(料件承認矩陣/模具驗收/T1-T2試模/模具費請款與付款)",
        "levels": {
          "0": "無",
          "1": "知道模具需要承認流程，能說出模具費付款的基本概念",
          "2": "能建立料件承認矩陣（關鍵料件逐項確認）→協調品保執行IQC初樣承認→追蹤模具廠T1/T2試模進度→確認模具尺寸/外觀/功能全數OK→協調財務依合約分期付模具費（通常50%-30%-20%或類似）→確認模具費發票收取及付款完成",
          "3": "建立模具管理SOP+主導料件承認矩陣+有多副模具同步管理並如期量產的案例"
        },
        "importance": 4,
        "weight": "10",
        "target_level": "關鍵料件承認需要哪些文件？（初樣報告/檢驗標準/尺寸報告）\n模具費一般分幾期付款？各期觸發條件是什麼？\nT2試模後尺寸Cpk<1.33，模具廠說需要再修，你如何處理時程與費用爭議？",
        "questions": "L4A追蹤承認矩陣｜L4B管理模具費付款流程｜L5A主導模具+料件+財務三線協調"
      },
      {
        "category": "[R]  NPI新產品試產與業務收尾  New Product Trial Run & Sales Closure Management",
        "code": "R15",
        "dimension": "EDP資料移轉管理",
        "ability": "客戶EDP資料提供與技術文件移轉管中心\n(EDP/EDI格式/產品規格檔案/圖面/BOM移轉/客戶專屬文件夾管理)",
        "levels": {
          "0": "無",
          "1": "知道需要提供EDP資料給客戶，能說出EDP的基本定義",
          "2": "能確認客戶需要哪些EDP/EDI格式資料（電子數據交換/產品規格/3D圖面/2D圖/BOM）→協調研發/品保確認提供版本→整理成客戶要求格式（PDF/STEP/DXF/Excel）→上傳至客戶指定平台或透過安全郵件傳送→同步歸檔至騏宏文管中心→確認客戶收到並簽收",
          "3": "建立EDP資料移轉SOP+主導機密文件保護機制+有大型OEM客戶完整資料移轉成功案例"
        },
        "importance": 3,
        "weight": "8",
        "target_level": "EDP（Engineering Data Package）通常包含哪些檔案類型？\n傳送技術文件給客戶有哪些安全注意事項？（NDA/浮水印/版本控制）\n若客戶要求3D STEP檔，但研發說含有騏宏核心機密，你如何處理？",
        "questions": "L4A準備EDP清單+傳送｜L4B安全傳送+文管歸檔｜L5A建立EDP移轉SOP+機密保護機制"
      },
      {
        "category": "[R]  NPI新產品試產與業務收尾  New Product Trial Run & Sales Closure Management",
        "code": "R16★",
        "dimension": "客戶NPI請款完成",
        "ability": "完成向客戶NPI階段全項請款\n(開發費NRE/樣品費/模具費/認證費/收款確認/ERP登錄)",
        "levels": {
          "0": "無",
          "1": "知道NPI有哪些費用項目可向客戶請款，能說出2種以上費用類型",
          "2": "能整理NPI各項費用明細（NRE開發費/樣品費/模具費/認證代墊費/特殊材料費）→依合約約定時程開立發票（PI→Invoice）→追蹤客戶付款狀態→確認款項收到後通知財務登錄→更新ERP應收帳款狀態→歸檔完整請款記錄",
          "3": "建立NPI請款SOP+主導多客戶NPI費用追蹤+有全額收回率100%的成功案例+異常呆帳預防機制"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "NPI階段可向客戶請款的費用類型有哪些？PI與正式Invoice的差別是什麼？\n客戶認可了但遲遲不付模具費，你的催款步驟是什麼？\n若客戶要求模具費打折或免費，你如何評估並回覆（商務邏輯）？",
        "questions": "L4A開立Invoice+追蹤｜L4B主導全項NPI請款+ERP登錄｜L5A建立NPI費用SOP+呆帳防護"
      },
      {
        "category": "[S]  APQP新產品開發與專案執行  Advanced Product Quality Planning & Project Execution",
        "code": "S1",
        "dimension": "APQP五階段架構",
        "ability": "APQP五階段名稱、核心輸出與業務端輸入職責\n(VOC→設計目標→DFMEA→PFMEA→PPAP→顧客回饋)",
        "levels": {
          "0": "無",
          "1": "知道APQP是五階段流程，能說出2個以上階段名稱",
          "2": "能說出全部五階段名稱+各階段核心輸出+業務在每階段的輸入職責",
          "3": "建立APQP業務端SOP+主導跨部門啟動會議+有完整ABCD表管控成功案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "APQP第一階段業務需要提供哪些客戶需求輸入？\n若客戶在第三階段突然更改規格，業務應如何啟動變更管理？\nA表里程碑落後10%，你的處置步驟是什麼？",
        "questions": "L3B了解5階段｜L4A能說出業務職責｜L5A主導APQP啟動會議+管控A表"
      },
      {
        "category": "[S]  APQP新產品開發與專案執行  Advanced Product Quality Planning & Project Execution",
        "code": "S2",
        "dimension": "VOC顧客需求轉化",
        "ability": "VOC顧客聲音收集→設計目標轉化\n(QFD概念/顧客需求清單/可量化規格/顧客特殊要求CSR)",
        "levels": {
          "0": "無",
          "1": "知道VOC是顧客聲音，能說出2種以上收集方法",
          "2": "能主導VOC訪談/問卷→整理顧客需求清單→轉化為可量化規格（如光度/IP等級/溫度）→確認CSR",
          "3": "建立VOC→設計目標的標準化轉換流程+有轉化為研發可執行規格的跨部門成功案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "VOC收集有哪些常用方法？你如何把「客戶要很亮」轉化為研發可執行的規格？\n顧客特殊要求(CSR)與一般規格有什麼差別？遺漏CSR會有什麼後果？\n請舉一個你主導或參與過的VOC→規格轉化的真實案例。",
        "questions": "L3B能收集VOC｜L4A獨立轉化規格+識別CSR｜L5A建立轉化流程+跨部門協調"
      },
      {
        "category": "[S]  APQP新產品開發與專案執行  Advanced Product Quality Planning & Project Execution",
        "code": "S3",
        "dimension": "DFMEA協調與設計驗證",
        "ability": "DFMEA業務端協調與設計驗證追蹤\n(DFMEA閱讀/嚴重度S≥8識別/DVT測試安排/客戶確認)",
        "levels": {
          "0": "無",
          "1": "知道DFMEA是設計失效模式分析，能說出RPN計算公式",
          "2": "能閱讀DFMEA報告→識別S≥8的高風險失效項目→協調研發追蹤改善行動→安排DVT測試時程→向客戶更新狀態",
          "3": "主導DFMEA評審會議+建立業務追蹤機制+有DFMEA發現關鍵設計風險並成功推動改善的案例"
        },
        "importance": 4,
        "weight": "10",
        "target_level": "DFMEA中RPN=S×O×D，S=9/O=3/D=4時RPN=？這個值是否需要立即行動？\n客戶要求DVT環境測試報告，你如何協調內部資源安排測試並追蹤進度？\n若DFMEA評審後有2項S≥8的失效模式尚未關閉，是否可以進入第三階段？",
        "questions": "L4A能讀DFMEA+識別S≥8｜L4B協調DVT追蹤｜L5A主導DFMEA評審+建立追蹤SOP"
      },
      {
        "category": "[S]  APQP新產品開發與專案執行  Advanced Product Quality Planning & Project Execution",
        "code": "S4",
        "dimension": "PFMEA與控制計畫",
        "ability": "PFMEA製程失效分析與控制計畫業務端理解\n(PFMEA vs DFMEA差異/CP三個版本/業務在PFMEA的角色)",
        "levels": {
          "0": "無",
          "1": "知道PFMEA是製程失效模式分析，能說出與DFMEA的差別",
          "2": "能說明PFMEA的核心要素（特性/失效模式/後果/預防控制/偵測控制）+控制計畫三個版本（原型/試生產/生產）+業務在PFMEA評審的確認職責",
          "3": "主導業務端PFMEA評審+建立CP更新追蹤機制+有協助客戶理解CP內容並取得核准的成功案例"
        },
        "importance": 3,
        "weight": "8",
        "target_level": "PFMEA和DFMEA有什麼差異？分別在哪個APQP階段完成？\n控制計畫（CP）的三個版本各在什麼時間點啟用？業務在CP核准流程中的職責是什麼？\n客戶要求審查PFMEA，你如何準備會議並說明關鍵製程管制點？",
        "questions": "L4A了解PFMEA/CP概念｜L4B能說明業務角色｜L5A主導評審+建立追蹤"
      },
      {
        "category": "[S]  APQP新產品開發與專案執行  Advanced Product Quality Planning & Project Execution",
        "code": "S5",
        "dimension": "Gate Review專案節點",
        "ability": "Gate Review節點管理與A/B/C/D表追蹤\n(里程碑判定/條件放行標準/B表設計驗收/C表試產驗收/D表量產移轉)",
        "levels": {
          "0": "無",
          "1": "知道APQP有Gate Review節點，能說出A表的用途",
          "2": "能管理A表（專案進度）/B表（設計驗收項目）/C表（試產驗收條件）/D表（量產移轉確認）→識別哪些里程碑為關鍵節點→判定是否達標或需條件放行→記錄並更新表單",
          "3": "建立ABCD表管控SOP+主導Gate Review會議+有推動條件放行並持續追蹤關閉的成功案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "A/B/C/D表各代表什麼？哪一個表是在PPAP提交前必須完成的？\nGate Review中「條件放行」需要滿足哪三個條件才可批准？\n若B表（設計驗收）有3個未關閉問題，你如何評估是否可以進入試產階段？",
        "questions": "L4A了解ABCD表｜L4B能管控里程碑+條件放行判定｜L5A主導Gate Review"
      },
      {
        "category": "[S]  APQP新產品開發與專案執行  Advanced Product Quality Planning & Project Execution",
        "code": "S6★",
        "dimension": "PPAP Level判定",
        "ability": "PPAP提交等級判定與文件套件管理\n(Level 1~5說明/PSW/AAR/量測系統MSA/Cpk/外觀批准)",
        "levels": {
          "0": "無",
          "1": "知道PPAP有5個等級，能說出Level 3是最常見的",
          "2": "能依客戶要求判斷適用的PPAP等級→協調各部門準備完整文件套件→追蹤零件提交保證書PSW簽核→管理PPAP提交時程→處理客戶PPAP問題→取得正式核准",
          "3": "建立PPAP提交SOP+有跨多個客戶不同Level的完整提交成功案例+能輔導供應商PPAP"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "PPAP Level 1/2/3/4/5各需要提交哪些文件（或保存在廠）？什麼情況下客戶會要求Level 4？\nPSW（零件提交保證書）的關鍵欄位有哪些？客戶退件時如何重新提交？\nMSA（量測系統分析）的目的是什麼？Gage R&R結果>30%代表什麼問題？",
        "questions": "L4A能說出Level 1-3差異｜L4B獨立管理PPAP提交流程｜L5A主導+多客戶PPAP經驗"
      },
      {
        "category": "[S]  APQP新產品開發與專案執行  Advanced Product Quality Planning & Project Execution",
        "code": "S7",
        "dimension": "顧客特殊要求CSR",
        "ability": "顧客特殊要求(CSR)識別與管理\n(CSR來源/合約審查矩陣/傳遞研發品保/偏差核准DAR)",
        "levels": {
          "0": "無",
          "1": "知道CSR是顧客特殊要求，能說出2種以上常見CSR類型",
          "2": "能在合約審查時識別所有CSR→建立CSR清單並傳遞至研發/品保→追蹤CSR在APQP各階段的落實狀況→若無法達成時提出偏差核准申請(DAR)",
          "3": "建立CSR管理矩陣+主導合約審查會議+有識別關鍵CSR並防止漏失的成功案例"
        },
        "importance": 4,
        "weight": "10",
        "target_level": "CSR最常見的來源有哪些？（IATF/AIAG/客戶特定要求）\n合約審查時發現客戶要求的認證週期與騏宏現有能力不符，你如何處理？\n偏差核准(DAR)需要哪些核准條件？批准後如何持續追蹤？",
        "questions": "L4A識別CSR並傳遞｜L4B建立CSR清單+DAR管理｜L5A主導CSR矩陣建立"
      },
      {
        "category": "[S]  APQP新產品開發與專案執行  Advanced Product Quality Planning & Project Execution",
        "code": "S8★",
        "dimension": "APQP專案風險管理",
        "ability": "APQP專案風險識別、上報與快速升級機制\n(高風險識別/風險矩陣/升級閾值/資源協調/客戶溝通)",
        "levels": {
          "0": "無",
          "1": "知道APQP需要風險管理，能說出2種以上高風險情況",
          "2": "能建立APQP風險矩陣（識別/評估/緩解策略）→設定升級閾值（如里程碑連續落後2週觸發升級）→準備風險緩解計畫→主動通知客戶含替代方案→協調內部資源投入",
          "3": "建立APQP風險管理SOP+有主動識別風險並在客戶察覺前提出緩解方案的成功案例+高風險供應商管理經驗"
        },
        "importance": 4,
        "weight": "10",
        "target_level": "你如何定義APQP中的「高風險項目」？觸發快速升級的條件是什麼？\n若關鍵供應商在試產前2週通知交期延誤，你的緊急處置步驟是什麼？\n如何向客戶主動溝通APQP風險而不損失信任？",
        "questions": "L4B建立風險矩陣｜L5A主導風險管理+升級機制｜L5B對外代表風險溝通"
      }
    ],
    "salary_structure": [
      {
        "grade": "L3A",
        "title_zh": "業務助理",
        "title_en": "Sales Admin.",
        "salary_min": "30000",
        "salary_mid": "33000",
        "salary_max": "36000",
        "requirements": "ERP操作/文件管理/訂單輔助/報價協助",
        "promotion": "ERP操作/文件管理/訂單輔助/報價協助",
        "amoeba": "執行者/學習者"
      },
      {
        "grade": "L3B",
        "title_zh": "業務助理(熟)",
        "title_en": "Sales Admin. Senior",
        "salary_min": "33000",
        "salary_mid": "36000",
        "salary_max": "40000",
        "requirements": "獨立處理業務助理工作/基本客服/英文Email",
        "promotion": "獨立處理業務助理工作/基本客服/英文Email",
        "amoeba": "執行者/學習者"
      },
      {
        "grade": "L4A",
        "title_zh": "業務專員",
        "title_en": "Sales Specialist",
        "salary_min": "38000",
        "salary_mid": "43000",
        "salary_max": "48000",
        "requirements": "獨立跑單/訂單管理/展覽接洽/有成交實績",
        "promotion": "獨立跑單/訂單管理/展覽接洽/有成交實績",
        "amoeba": "獨立執行者"
      },
      {
        "grade": "L4B",
        "title_zh": "業務專員(資)",
        "title_en": "Sales Specialist II",
        "salary_min": "45000",
        "salary_mid": "51000",
        "salary_max": "58000",
        "requirements": "新客戶開發/議價能力/技術說明/PPAP協調",
        "promotion": "新客戶開發/議價能力/技術說明/PPAP協調",
        "amoeba": "獨立執行者"
      },
      {
        "grade": "L5A",
        "title_zh": "資深業務專員",
        "title_en": "Senior Sales Specialist",
        "salary_min": "55000",
        "salary_mid": "63000",
        "salary_max": "72000",
        "requirements": "英語談判/重點市場策略/APQP業務主導/有$100K+大單",
        "promotion": "英語談判/重點市場策略/APQP業務主導/有$100K+大單",
        "amoeba": "Reserve Amoeba Leader"
      },
      {
        "grade": "L5B",
        "title_zh": "資深業務專員(主)",
        "title_en": "Senior Sales Specialist II",
        "salary_min": "65000",
        "salary_mid": "73000",
        "salary_max": "82000",
        "requirements": "多市場負責/業務阿米巴核算/敏捷業務管理",
        "promotion": "多市場負責/業務阿米巴核算/敏捷業務管理",
        "amoeba": "Reserve Amoeba Leader"
      },
      {
        "grade": "L6A",
        "title_zh": "業務課長/主任",
        "title_en": "Sales Lead / Manager",
        "salary_min": "75000",
        "salary_mid": "84000",
        "salary_max": "95000",
        "requirements": "方向設定/主導業務策略/代理商體系/L1 Amoeba巴長",
        "promotion": "方向設定/主導業務策略/代理商體系/L1 Amoeba巴長",
        "amoeba": "L1 Amoeba巴長"
      },
      {
        "grade": "L6B",
        "title_zh": "資深業務課長",
        "title_en": "Senior Sales Manager",
        "salary_min": "85000",
        "salary_mid": "96000",
        "salary_max": "108000",
        "requirements": "對外代表/多市場負責人/代理商管理/業務系統優化",
        "promotion": "對外代表/多市場負責人/代理商管理/業務系統優化",
        "amoeba": "L1~L2 Amoeba Leader"
      },
      {
        "grade": "L7",
        "title_zh": "業務副理/總監",
        "title_en": "Sales Director / VP",
        "salary_min": "100000",
        "salary_mid": "114000",
        "salary_max": "130000",
        "requirements": "整體業務策略/年度銷售目標設定/市場佈局/L2 Amoeba",
        "promotion": "整體業務策略/年度銷售目標設定/市場佈局/L2 Amoeba",
        "amoeba": "L2 Amoeba Leader"
      }
    ]
  },
  {
    "job_name": "機構工程師",
    "raw_job_name": "機構工程師",
    "filename": "騏宏科技_機構工程師職能薪資結構表_v6_6_0.xlsx",
    "competencies": [
      {
        "category": "[A]  核心3D設計  Core Structural Design",
        "code": "A1",
        "dimension": "核心3D",
        "ability": "SolidWorks建模熟練度\n(零件/組件/工程圖/模擬)",
        "levels": {
          "0": "完全不會",
          "1": "基礎操作須指導",
          "2": "獨立完成量產工程圖含公差標注",
          "3": "組件爆炸圖+DFM優化建議可審圖指導"
        },
        "importance": 5,
        "weight": "15",
        "target_level": "L3A起必備｜得2分→L4A獨立出圖(缺失率≤5%)｜得3分→L5B審圖+DFM主導",
        "questions": "展示作品集;說明最複雜組件零件數與公差鏈計算方式"
      },
      {
        "category": "[A]  核心3D設計  Core Structural Design",
        "code": "A2",
        "dimension": "量產件數",
        "ability": "LED警示燈量產設計\n(完整主導到量產上市件數)",
        "levels": {
          "0": "無",
          "1": "量產<10件",
          "2": "量產10~30件",
          "3": "量產50件以上"
        },
        "importance": 5,
        "weight": "15",
        "target_level": "L4A≥10件(品質符合)｜L5A≥30件(準時率100%)｜L6A≥50件(主導方向設定)",
        "questions": "確認是否有設計責任(非單純繪圖);描述一件完整主導案例"
      },
      {
        "category": "[A]  核心3D設計  Core Structural Design",
        "code": "A3★",
        "dimension": "核心3D設計",
        "ability": "外觀工業設計（ID整合）",
        "levels": {
          "0": "0=無；1=基礎美感；2=完整ID+量產；3=建立品牌外型語言",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L5A加分(影響力展現)｜L6A建議(方向設定者外型主導)｜得3分→L6B+品牌策略",
        "questions": "展示外型設計稿；說明如何平衡IP防水與美觀"
      },
      {
        "category": "[A]  核心3D設計  Core Structural Design",
        "code": "A4★",
        "dimension": "核心3D設計",
        "ability": "包裝結構設計",
        "levels": {
          "0": "0=無；1=配合；2=獨立設計量產；3=建立包材規範+驗證",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L4B加分｜L5A建議(返工率≦5%)｜得3分→L6A必備(主導包材規範體系)",
        "questions": "出口包裝如何通過振動跌落？緩衝材如何選擇？"
      },
      {
        "category": "[A]  核心3D設計  Core Structural Design",
        "code": "A5★",
        "dimension": "核心3D設計",
        "ability": "產品裝車/合車測設計\n(安裝干涉分析/線材走向/腳架底座/控制器機構匹配)",
        "levels": {
          "0": "0=無；1=了解裝車設計考量(干涉/走線/安裝孔位/鎖付扭力)；2=裝車設計完整考量量產+有FMRD0252合車驗證記錄；3=建立裝車機構設計規範+多車型合車驗證成功案例",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L4B建議(裝車設計考量認知)｜L5A必備(完整裝車設計+FMRD0252合車驗證,品質符合)｜L6A主導(裝車設計規範建立+多車型整合)",
        "questions": "警示燈安裝於警車車頂時如何設計避免與線材干涉？腳架設計如何確保安裝穩固不晃動？如何驗證與CODE3 Matrix/Whelen Core控制器的機構安裝匹配？"
      },
      {
        "category": "[B]  材料製程設計  Process & Material Design",
        "code": "B1",
        "dimension": "鋁壓鑄ADC12",
        "ability": "鋁壓鑄件設計\n(脫模角/縮水/熱節/後處理)",
        "levels": {
          "0": "無",
          "1": "知道縮水概念基礎圖面理解",
          "2": "獨立設計含脫模角量產",
          "3": "模流模擬+良率改善SOP可指導供應商"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A認知,L4B至少1材料必備｜L5A需2+材料獨立量產｜L5B-L6A模流+供應商主導",
        "questions": "ADC12縮水率?壁厚建議?如何避免熱節縮孔?"
      },
      {
        "category": "[B]  材料製程設計  Process & Material Design",
        "code": "B2",
        "dimension": "鋁擠型AL6063",
        "ability": "鋁擠型件截面設計\n(肋厚比/拼接/後加工規劃)",
        "levels": {
          "0": "無",
          "1": "知道押出極限最小壁厚",
          "2": "完整截面設計+量產含二次加工圖面",
          "3": "後加工公差鏈分析+能與模廠協作優化"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4B認知建議｜L5A必備(獨立截面設計量產,返工率≦5%)｜L5B-L6A規範主導",
        "questions": "截面肋厚比控制?折彎段模具費如何評估?鋁擠型長度公差如何標注?"
      },
      {
        "category": "[B]  材料製程設計  Process & Material Design",
        "code": "B3",
        "dimension": "塑膠射出PC/ABS",
        "ability": "塑膠射出件設計\n(縮水/頂針/澆口/離模角)",
        "levels": {
          "0": "無",
          "1": "基礎理解縮水離模角概念",
          "2": "完整量產件設計含澆口位置規劃",
          "3": "模流分析整合+翹曲改善可主導DFM審查"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4B建議｜L5A必備(獨立澆口規劃量產)｜L5B-L6A模流分析整合+DFM主導",
        "questions": "PC料為何要除濕?頂針位置如何避免頂白?PA66GF吸水膨脹如何補償?"
      },
      {
        "category": "[B]  材料製程設計  Process & Material Design",
        "code": "B4",
        "dimension": "矽膠LSR射出",
        "ability": "矽膠LSR液態射出\n(密封gasket/O-ring整合件)",
        "levels": {
          "0": "無",
          "1": "了解LSR與固態矽膠差異",
          "2": "完整密封件設計+量產含壓縮比設定",
          "3": "密封壽命驗證+失效分析+建立LSR設計規範"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L5A認知建議｜L5B必備(密封件獨立設計)｜L6A主導(LSR設計規範建立)",
        "questions": "LSR模具為何需高溫固化?壓縮比建議多少?"
      },
      {
        "category": "[B]  材料製程設計  Process & Material Design",
        "code": "B5",
        "dimension": "灌膠/灌封",
        "ability": "灌膠封膠設計\nPU/環氧/矽膠雙液灌封",
        "levels": {
          "0": "無",
          "1": "知道A/B劑配比概念",
          "2": "灌膠槽/流道設計+量產含氣泡控制",
          "3": "X-ray氣泡驗證+ORT長期可靠度+建立灌膠SOP"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4B建議｜L5A必備(灌膠槽設計量產,品質符合)｜L5B-L6A主導(X-ray驗證SOP建立)",
        "questions": "PCB灌膠如何避免氣泡?灌膠高度如何確保IP67?PU vs矽膠各適用何種場景?"
      },
      {
        "category": "[B]  材料製程設計  Process & Material Design",
        "code": "B6",
        "dimension": "塑膠押出PC燈罩",
        "ability": "塑膠擠出押出成形\nPC燈罩/導光條截面設計",
        "levels": {
          "0": "無",
          "1": "知道押出流程了解收縮概念",
          "2": "截面設計+量產含透光均勻度控制",
          "3": "公差補償計算+透光均勻度量化驗證"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4B建議｜L5A必備(截面設計量產獨立完成)｜L5B-L6A主導(公差標準規範建立)",
        "questions": "PC燈罩壁厚公差如何設定?如何控制透光均勻?"
      },
      {
        "category": "[C]  防水氣密設計  IP Protection Design",
        "code": "C1",
        "dimension": "IP67靜水壓",
        "ability": "IP67靜水壓防水結構\nO-ring溝槽/壓縮比/密封力計算",
        "levels": {
          "0": "無",
          "1": "知道IEC 60529概念基礎壓縮比",
          "2": "完整密封結構設計+量產含密封溝槽計算",
          "3": "密封壽命分析+客訴失效根因+建立防水設計規範"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A必備(基礎防水認知)｜L5A獨立量產(品質符合)｜L5B-L6A主導(密封規範建立)",
        "questions": "O-ring壓縮比建議多少?溝槽深度如何計算?為何IP67通過後IP69K卻失效?"
      },
      {
        "category": "[C]  防水氣密設計  IP Protection Design",
        "code": "C2",
        "dimension": "IP69K高壓",
        "ability": "IP69K高壓蒸氣防水\n80bar/80°C複合衝擊",
        "levels": {
          "0": "無",
          "1": "了解IP69K與IP67差異",
          "2": "完整量產設計含高壓密封結構",
          "3": "超高壓密封設計+驗證SOP+失效分析能力"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L5A建議(IP69K設計認知)｜L5B必備(獨立量產高壓防水)｜L6A主導(驗證SOP建立)",
        "questions": "IP69K 80bar密封結構如何設計?角度0/30/60/90度各測幾次?"
      },
      {
        "category": "[C]  防水氣密設計  IP Protection Design",
        "code": "C4",
        "dimension": "灌膠防水整合",
        "ability": "PCB灌膠防水設計整合\n氣泡控制/X-ray驗證",
        "levels": {
          "0": "無",
          "1": "知道灌膠防水概念",
          "2": "完整量產含X-ray氣泡驗證",
          "3": "ORT長期可靠度+灌膠深度與散熱平衡分析"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L4B建議｜L5A必備(X-ray驗證量產)｜L5B-L6A主導(ORT長期可靠度規範建立)",
        "questions": "灌膠後X-ray如何確認無氣泡?灌膠深度如何影響散熱?"
      },
      {
        "category": "[D]  光學整合設計  Optical Integration",
        "code": "D1",
        "dimension": "配光機量測",
        "ability": "光學配光機操作\nECE R65/SAE配光曲線量測",
        "levels": {
          "0": "無",
          "1": "基礎操作需指導設定",
          "2": "熟練量測+解讀配光曲線+比對法規要求",
          "3": "建立配光量測SOP+允收判斷標準指導他人"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L4B建議(配光機基礎)｜L5A必備(熟練量測回饋設計)｜L5B-L6A主導(量測SOP+允收標準)",
        "questions": "配光結果左右不對稱時機構設計哪些因素可能造成?如何改善?"
      },
      {
        "category": "[D]  光學整合設計  Optical Integration",
        "code": "D2",
        "dimension": "光學模擬軟體",
        "ability": "光學模擬軟體\nLuciShape/TracePro反射杯/透鏡",
        "levels": {
          "0": "無",
          "1": "基礎操作能建立基本光源模型",
          "2": "完整模擬反射杯/二次光學與量測結果比對",
          "3": "建立公司光學設計標準流程可主導光學優化"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L5A加分(LuciShape基礎)｜L5B必備(完整模擬)｜L6A主導(光學設計標準流程建立)",
        "questions": "如何用光學模擬確定反射杯曲面達到ECE R65配光要求?"
      },
      {
        "category": "[D]  光學整合設計  Optical Integration",
        "code": "D3",
        "dimension": "LED散熱設計",
        "ability": "LED散熱結構設計\n熱阻計算/散熱鰭片/熱仿真",
        "levels": {
          "0": "無",
          "1": "了解熱阻Rth路徑概念(LED到鋁殼到空氣)",
          "2": "完整散熱設計+驗證(Tj計算+溫度量測)",
          "3": "熱仿真軟體整合(Ansys/SolidWorks Flow)"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B建議(散熱概念認知)｜L5A必備(完整散熱設計+Tj驗證)｜L5B-L6A主導(熱仿真規範)",
        "questions": "如何計算Tj確保LED壽命大於50000h?鋁擠 vs壓鑄散熱片選用?"
      },
      {
        "category": "[E]  法規驗證能力  Regulation & Certification",
        "code": "E1",
        "dimension": "ECE R65",
        "ability": "ECE R65警示燈法規\n光強度/閃頻/配光/顏色座標",
        "levels": {
          "0": "無",
          "1": "看過規範知道閃頻/光強度基本要求",
          "2": "設計符合法規+協助送測可解讀報告",
          "3": "主導認證申請+與NB機構溝通+答覆技術問題"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4A基礎認知｜L5A完整設計符合送測｜L6A主導認證申請(方向設定者,對外代表)",
        "questions": "ECE R65 Class 1閃頻率範圍?有效發光面積如何量測?色座標要求?"
      },
      {
        "category": "[E]  法規驗證能力  Regulation & Certification",
        "code": "E2",
        "dimension": "SAE J595/J845",
        "ability": "SAE J595/J845美國警示燈標準\nSteady Burn/Flashing配光",
        "levels": {
          "0": "無",
          "1": "基礎了解SAE與ECE架構差異",
          "2": "設計符合+協助送測",
          "3": "主導認證申請熟悉SAE各類別差異"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L4B認知建議｜L5A設計符合送測｜L6A主導SAE認證申請(跨部門影響力)",
        "questions": "SAE J595 Steady Burn vs ECE R65閃頻光強度要求差異?Class A/B/C差別?"
      },
      {
        "category": "[E]  法規驗證能力  Regulation & Certification",
        "code": "E3",
        "dimension": "環境試驗操作",
        "ability": "環境試驗操作與失效判讀\n鹽霧/振動/衝擊/UV/溫濕/防塵",
        "levels": {
          "0": "無",
          "1": "操作1~2種設備需指導",
          "2": "獨立操作3~5種+判讀失效模式",
          "3": "制定測試規範+失效根因分析+改善設計建議"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B建議(3-5種操作)｜L5A必備(獨立操作+失效判讀,準時率100%)｜L6A主導(規範建立+根因分析)",
        "questions": "振動試驗後裂紋如何分析根因?鹽霧後密封失效如何改善機構設計?"
      },
      {
        "category": "[F]  結構力學可靠度  Structural Mechanics",
        "code": "F2",
        "dimension": "車載振動設計",
        "ability": "車載振動設計\nISO 16750/SAE J1211振動規範",
        "levels": {
          "0": "無",
          "1": "理解規範知道頻率範圍10~2000Hz",
          "2": "設計符合+振動試驗通過有改善案例",
          "3": "建立振動設計checklist+共振避讓設計方法"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L4B建議(規範理解)｜L5A必備(設計符合+振動試驗通過)｜L5B-L6A主導(振動設計checklist)",
        "questions": "車頂警示燈安裝位置在哪個頻段最嚴苛?如何設計減振結構?共振點如何找?"
      },
      {
        "category": "[F]  結構力學可靠度  Structural Mechanics",
        "code": "F3",
        "dimension": "車載衝擊設計",
        "ability": "車載衝擊設計\n(SAE J575/IEC 60068-2-27衝擊規範)",
        "levels": {
          "0": "無",
          "1": "理解衝擊規範要求，知道半正弦波/梯形波衝擊條件",
          "2": "設計符合SAE J575衝擊要求+衝擊試驗通過有改善案例",
          "3": "建立衝擊設計checklist+有跌落/衝擊失效根因分析+設計強化案例"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L4B建議(衝擊規範認知)｜L5A必備(設計符合+衝擊試驗通過)｜L5B-L6A主導(衝擊設計規範)",
        "questions": "SAE J575定義何種衝擊加速度條件？車頂警示燈安裝座如何設計承受衝擊？衝擊試驗後燈具哪些位置最易失效？如何改善？"
      },
      {
        "category": "[G]  技術文件管理  Documentation",
        "code": "G1",
        "dimension": "規範SOP撰寫",
        "ability": "設計規範/SOP撰寫\n機構設計規範/DFM checklist",
        "levels": {
          "0": "無",
          "1": "配合填寫現有表單",
          "2": "獨立撰寫完整規範文件",
          "3": "建立部門標準文件體系主導文件審查"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L5A建議(獨立撰寫SOP)｜L6A必備(建立部門文件體系,方向設定者)｜L6B主導(跨部門文件架構)",
        "questions": "請提供曾撰寫的規範樣本;說明最難建立的SOP是哪一份?"
      },
      {
        "category": "[G]  技術文件管理  Documentation",
        "code": "G2",
        "dimension": "跨部門協調",
        "ability": "跨部門技術協調\n品管/硬體/軟體/業務/生產",
        "levels": {
          "0": "無",
          "1": "被動配合等待指示",
          "2": "主動協調推進跨部門決策",
          "3": "推動跨部門改善流程有可量化成效"
        },
        "importance": 4,
        "weight": "4",
        "target_level": "L5A建議(主動協調)｜L6A必備(推動改善,Amoeba核心,Behavior Evidence)｜L6B主導(跨組織協作機制)",
        "questions": "說明一次跨部門解決設計問題的具體案例(5W1H說明你的角色)"
      },
      {
        "category": "[H]  開模管理  Tooling & Mold Management",
        "code": "H1",
        "dimension": "開模前評估",
        "ability": "開模前可行性評估\n(DFM審查/結構可製造性/拔模分析)",
        "levels": {
          "0": "無",
          "1": "基礎了解開模流程",
          "2": "完整主導DFM審查+供應商選定+模具規格確認",
          "3": "建立開模評估SOP+有案例多件模具設計改善紀錄"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4A認知｜L5A必備(主導DFM審查,返工率≦5%)｜L5B-L6A主導(開模評估SOP體系建立)",
        "questions": "開模前DFM審查哪些是不可妥協的?如何確認供應商模具鋼材等級?"
      },
      {
        "category": "[H]  開模管理  Tooling & Mold Management",
        "code": "H2",
        "dimension": "模具規格制定",
        "ability": "模具規格制定與合約管理\n(模具材料/穴數/壽命/Tpye A/B/C)",
        "levels": {
          "0": "無",
          "1": "知道模具基本規格",
          "2": "能獨立撰寫模具採購規格書含材質/穴數/壽命要求",
          "3": "有完整模具合約管理+變更管理+修模追蹤記錄"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知｜L5A必備(獨立撰寫模具採購規格書)｜L5B-L6A主導(合約管理+壽命規劃體系)",
        "questions": "P20 vs H13鋼材各適用何種材料?模具壽命如何與生命週期匹配?"
      },
      {
        "category": "[H]  開模管理  Tooling & Mold Management",
        "code": "H3",
        "dimension": "試模流程管理",
        "ability": "試模(T1/T2/T3...)流程管理\n(首件確認/量產移轉/驗收標準)",
        "levels": {
          "0": "無",
          "1": "參與過試模但無主導經驗",
          "2": "主導T1~T3試模+尺寸確認+缺陷改善指導",
          "3": "建立試模驗收標準SOP+有量產移轉記錄"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4A參與過｜L5A必備(主導T1~T3試模+尺寸確認)｜L5B-L6A主導(試模驗收標準SOP建立)",
        "questions": "T1試模後常見哪些缺陷?如何判斷是設計問題還是製程問題?"
      },
      {
        "category": "[H]  開模管理  Tooling & Mold Management",
        "code": "H4",
        "dimension": "修模管理",
        "ability": "修模作業管理\n(ECN變更/修模記錄/影響評估)",
        "levels": {
          "0": "無",
          "1": "基礎了解修模作業",
          "2": "主導修模ECN流程+影響評估+記錄管理",
          "3": "建立修模管理制度+修模費用控制有案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4B認知｜L5A必備(主導修模ECN流程)｜L5B-L6A主導(修模管理制度+費用控制體系)",
        "questions": "設計變更需要修模時如何評估影響範圍?修模後需要哪些重新驗證項目?"
      },
      {
        "category": "[H]  開模管理  Tooling & Mold Management",
        "code": "H7",
        "dimension": "模具承認驗收",
        "ability": "模具試模首件確認/模具承認驗收\n(IATF16949模具承認書/首件量測報告/正式承認流程)",
        "levels": {
          "0": "無",
          "1": "了解模具承認書格式與IATF16949模具承認流程",
          "2": "能主導模具承認全流程含首件量測/外觀確認/功能驗收+承認書簽核",
          "3": "建立模具承認SOP+有多套模具完整承認記錄+IATF16949第三方審核符合"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B必備(模具承認書格式認知)｜L5A必備(主導模具承認全流程含首件量測,準時率100%)｜L5B-L6A主導(模具承認SOP建立+IATF16949審核符合)",
        "questions": "模具承認書(Mold Approval Form)需包含哪些要素？T1~T3首件確認後如何判斷可正式承認？模具承認後若ECN設計變更需哪些重新驗收流程？"
      },
      {
        "category": "[I]  新物料開發驗證  New Material Qualification",
        "code": "I1",
        "dimension": "物料規格制定",
        "ability": "新物料規格書制定\n(材料規格/測試條件/允收標準)",
        "levels": {
          "0": "無",
          "1": "基礎了解物料規格書內容",
          "2": "能獨立制定完整物料規格書含測試條件",
          "3": "建立物料規格書標準模板+有多種物料規格書案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4A認知｜L5A必備(獨立制定物料規格書,品質符合)｜L5B-L6A主導(規格書標準模板建立)",
        "questions": "新塑膠料規格書需包含哪些測試項目?如何設定允收標準?"
      },
      {
        "category": "[I]  新物料開發驗證  New Material Qualification",
        "code": "I2",
        "dimension": "替代料評估",
        "ability": "替代物料評估與驗證\n(等效性分析/雙向認證/PPAP)",
        "levels": {
          "0": "無",
          "1": "了解替代料評估重要性",
          "2": "主導替代料評估+完整驗證測試+客戶認證",
          "3": "建立替代料評估SOP+有多件成功替代案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B認知(替代料概念)｜L5A必備(主導替代料評估+驗證)｜L6A主導(建立替代料評估SOP體系)",
        "questions": "替代料評估需要哪些等效性測試?如何向客戶提交替代料認證文件?"
      },
      {
        "category": "[I]  新物料開發驗證  New Material Qualification",
        "code": "I3",
        "dimension": "環保法規物料",
        "ability": "RoHS/REACH/無鹵素物料合規\n(物料成分申報/供應商聲明)",
        "levels": {
          "0": "無",
          "1": "知道RoHS/REACH基本要求",
          "2": "能主導物料合規審查+供應商聲明管理",
          "3": "建立物料合規管理系統+有完整供應鏈合規追蹤"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4A基礎認知(RoHS/REACH要求)｜L5A必備(主導物料合規審查)｜L6A主導(合規管理系統建立)",
        "questions": "RoHS 3.0新增哪些限制物質?REACH SVHC如何追蹤新增清單?"
      },
      {
        "category": "[I]  新物料開發驗證  New Material Qualification",
        "code": "I4",
        "dimension": "物料可靠度驗證",
        "ability": "新物料可靠度驗證測試\n(老化/耐候/機械/化學相容性)",
        "levels": {
          "0": "無",
          "1": "了解物料驗證測試項目",
          "2": "能規劃完整物料可靠度測試計畫並執行",
          "3": "建立物料驗證標準流程+有物料失效分析能力"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4B認知｜L5A必備(規劃物料可靠度測試計畫)｜L5B-L6A主導(物料驗證標準流程建立)",
        "questions": "新PC料選用時需要進行哪些老化驗證測試?如何評估與現有製程的化學相容性?"
      },
      {
        "category": "[I]  新物料開發驗證  New Material Qualification",
        "code": "I5",
        "dimension": "物料承認",
        "ability": "物料承認流程管理\n(IQC進料/首件/小批量/量產承認)",
        "levels": {
          "0": "無",
          "1": "了解物料承認流程",
          "2": "能主導完整物料承認流程含IQC標準建立",
          "3": "建立物料承認SOP+供應商初樣評估制度"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4A認知(物料承認流程)｜L5A必備(主導完整物料承認)｜L5B-L6A主導(承認SOP+IQC標準)",
        "questions": "新物料首次進料承認需要哪些步驟?如何設定IQC抽樣計畫?"
      },
      {
        "category": "[J]  包裝設計  Packaging Design",
        "code": "J1",
        "dimension": "產品包裝結構",
        "ability": "產品包裝結構設計\n(緩衝設計/壓縮強度/出口規格)",
        "levels": {
          "0": "無",
          "1": "配合執行",
          "2": "獨立設計量產含緩衝材計算",
          "3": "建立包材設計規範+跌落振動驗證整合"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4A認知｜L4B-L5A必備(獨立設計量產含緩衝計算)｜L5B-L6A主導(包材設計規範建立)",
        "questions": "出口包裝如何設計通過振動跌落?緩衝材如何選型?PE泡棉 vs EPE vs EPP各適用?"
      },
      {
        "category": "[J]  包裝設計  Packaging Design",
        "code": "J2",
        "dimension": "包裝材料選型",
        "ability": "包裝材料選型\n(紙箱/木箱/塑膠箱/緩衝材料)",
        "levels": {
          "0": "無",
          "1": "基礎了解常用包材種類",
          "2": "能依產品重量/形狀選定最適包材+計算成本",
          "3": "建立包材選型標準+有多種包材案例+成本優化記錄"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4A認知(常用包材)｜L4B-L5A必備(選定最適包材含成本計算)｜L5B-L6A主導(包材選型標準建立)",
        "questions": "重型警示燈(>5kg)如何設計防震包裝?如何計算紙箱承重堆疊要求?"
      },
      {
        "category": "[J]  包裝設計  Packaging Design",
        "code": "J3",
        "dimension": "包裝驗證測試",
        "ability": "包裝驗證測試\n(ISTA/ASTM D4169跌落/振動/壓縮)",
        "levels": {
          "0": "無",
          "1": "了解包裝驗證測試標準",
          "2": "能規劃完整包裝測試計畫並執行",
          "3": "建立包裝驗證SOP+有改善記錄+測試報告能力"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B認知(測試標準)｜L5A必備(規劃完整包裝測試計畫,品質符合)｜L6A主導(包裝驗證SOP建立)",
        "questions": "ISTA 2A vs ASTM D4169差異?如何規劃跌落測試角度與高度?"
      },
      {
        "category": "[J]  包裝設計  Packaging Design",
        "code": "J4",
        "dimension": "包裝標示法規",
        "ability": "包裝標示法規\n(出口標示/UN危規/環保標示/原產地)",
        "levels": {
          "0": "無",
          "1": "了解基本包裝標示要求",
          "2": "能主導出口包裝標示審查確保合規",
          "3": "建立包裝標示管理SOP+有多國出口標示案例"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L4A基礎認知(出口標示)｜L5A必備(主導出口標示審查,合規)｜L6A主導(標示管理SOP+多國出口)",
        "questions": "出口美國警示燈包裝需要哪些必要標示?FCC/DOT標示如何設計?"
      },
      {
        "category": "[K]  新供應商找尋評估  Supplier Development",
        "code": "K1",
        "dimension": "供應商搜尋方法",
        "ability": "新供應商搜尋與篩選\n(1688/展覽/介紹/審廠前評估)",
        "levels": {
          "0": "無",
          "1": "了解搜尋供應商的基本方法",
          "2": "能獨立搜尋+初步篩選+規劃稽核計畫",
          "3": "建立供應商開發SOP+有多家新供應商成功導入案例"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L4A認知(搜尋方法)｜L5A必備(獨立搜尋+稽核計畫)｜L5B-L6A主導(供應商開發SOP建立)",
        "questions": "如何在台灣/中國找特定製程(如鋁壓鑄)的合適供應商?初步篩選條件有哪些?"
      },
      {
        "category": "[K]  新供應商找尋評估  Supplier Development",
        "code": "K2",
        "dimension": "供應商實地稽核",
        "ability": "供應商實地稽核\n(製程能力/品質系統/產能/財務穩定)",
        "levels": {
          "0": "無",
          "1": "了解稽核項目",
          "2": "能獨立執行供應商實地稽核並出具稽核報告",
          "3": "建立稽核SOP+有稽核不合格改善追蹤案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B認知(稽核項目)｜L5A必備(獨立執行稽核+報告)｜L6A主導(稽核SOP+不合格改善追蹤體系)",
        "questions": "稽核鋁壓鑄供應商時關注哪些製程能力指標?如何評估供應商的品質系統成熟度?"
      },
      {
        "category": "[K]  新供應商找尋評估  Supplier Development",
        "code": "K3",
        "dimension": "製程能力評估",
        "ability": "供應商製程能力評估\n(Cpk/製程能力/設備精度/量測系統)",
        "levels": {
          "0": "無",
          "1": "了解Cpk概念",
          "2": "能要求供應商提交製程能力報告並評估",
          "3": "建立供應商製程能力評估標準+有多家評估案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B認知(Cpk概念)｜L5A必備(評估供應商製程能力報告)｜L6A主導(製程能力評估標準建立)",
        "questions": "要求鋁壓鑄供應商提交哪些製程能力數據?Cpk門檻如何設定?"
      },
      {
        "category": "[K]  新供應商找尋評估  Supplier Development",
        "code": "K4",
        "dimension": "樣品確認流程",
        "ability": "新供應商樣品確認流程\n(初樣/小批量/首件/PPAP)",
        "levels": {
          "0": "無",
          "1": "了解樣品確認流程步驟",
          "2": "能主導完整樣品確認流程",
          "3": "建立樣品確認SOP+有多家供應商成功導入記錄"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B認知(樣品確認步驟)｜L5A必備(主導完整樣品確認)｜L6A主導(樣品確認SOP+多家導入記錄)",
        "questions": "新模具供應商T1樣品確認清單需要包含哪些項目?如何判斷可以進入T2?"
      },
      {
        "category": "[K]  新供應商找尋評估  Supplier Development",
        "code": "K5",
        "dimension": "供應商分類管理",
        "ability": "合格供應商分類與管理\n(A/B/C分級/定期評鑑/改善追蹤)",
        "levels": {
          "0": "無",
          "1": "了解供應商分類管理概念",
          "2": "能執行供應商定期評鑑並追蹤改善",
          "3": "建立供應商管理制度+有供應商升降級案例"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L5A必備(ABC分級評鑑)｜L6A主導(供應商管理制度+升降級機制)｜L7主導(供應鏈策略管理)",
        "questions": "供應商如何分ABC等級?評鑑項目包含哪些維度?如何追蹤不合格供應商的改善?"
      },
      {
        "category": "[K]  新供應商找尋評估  Supplier Development",
        "code": "K6",
        "dimension": "高風險供應商",
        "ability": "高風險供應商管理\n(IATF16949 APQP要求/風險緩解計畫)",
        "levels": {
          "0": "無",
          "1": "了解高風險供應商定義",
          "2": "能識別高風險供應商並制定緩解計畫",
          "3": "建立高風險供應商管理程序+有完整風險緩解案例"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L5A必備(高風險供應商識別)｜L6A主導(緩解計畫制定,IATF16949要求)｜L7主導(供應鏈風險體系)",
        "questions": "IATF16949如何定義高風險供應商?高風險供應商需要哪些額外管控措施?"
      },
      {
        "category": "[L]  成本計算能力  Cost Engineering",
        "code": "L1",
        "dimension": "原物料估價",
        "ability": "原物料成本估算\n(材料單價/損耗率/匯率/市場行情)",
        "levels": {
          "0": "無",
          "1": "了解原物料成本構成",
          "2": "能獨立估算主要原物料成本含損耗率",
          "3": "建立原物料成本資料庫+有系統性詢價比價能力"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4A認知(原物料成本構成)｜L5A必備(獨立估算含損耗率)｜L6A主導(原物料成本資料庫建立)",
        "questions": "ADC12鋁壓鑄件如何估算材料成本?損耗率如何設定?如何判斷報價合理性?"
      },
      {
        "category": "[L]  成本計算能力  Cost Engineering",
        "code": "L2",
        "dimension": "加工外包成本",
        "ability": "加工/外包工序成本計算\n(工時/設備折舊/管銷利潤)",
        "levels": {
          "0": "無",
          "1": "了解加工成本構成",
          "2": "能分解供應商報價結構並評估合理性",
          "3": "建立加工成本標準工時資料庫+有議價成功案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4A認知(加工成本構成)｜L5A必備(分解供應商報價結構評估)｜L6A主導(成本標準工時資料庫)",
        "questions": "鋁壓鑄件加工費如何分解(材料+模具分攤+加工工時+管銷利潤)?如何判斷報價是否合理?"
      },
      {
        "category": "[L]  成本計算能力  Cost Engineering",
        "code": "L3",
        "dimension": "模具費估算",
        "ability": "模具費估算與談判\n(模具鋼材/穴數/精度等級/周期)",
        "levels": {
          "0": "無",
          "1": "了解模具費用構成",
          "2": "能估算模具費用合理範圍並進行談判",
          "3": "建立模具費用估算資料庫+有模具費談判降低案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B認知(模具費構成)｜L5A必備(估算模具費合理範圍+談判)｜L6A主導(模具費估算資料庫建立)",
        "questions": "PC料射出模具費用如何估算?單穴 vs 雙穴模具的費用差異?如何判斷模廠報價的合理性?"
      },
      {
        "category": "[L]  成本計算能力  Cost Engineering",
        "code": "L4",
        "dimension": "開發成本預算",
        "ability": "產品開發成本預算管理\n(開發費/測試費/認證費/樣品費)",
        "levels": {
          "0": "無",
          "1": "了解開發成本構成項目",
          "2": "能制定完整開發成本預算並追蹤執行",
          "3": "建立開發成本管理機制+有多件產品開發成本控制案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L5A必備(制定完整開發成本預算)｜L6A主導(開發成本管理機制建立,方向設定)｜L7策略規劃",
        "questions": "一個新警示燈產品開發預算需要包含哪些費用項目?如何估算認證測試費用?"
      },
      {
        "category": "[L]  成本計算能力  Cost Engineering",
        "code": "L5",
        "dimension": "BOM成本計算",
        "ability": "BOM Cost計算\n(完整BOM展開/物料+加工+管銷/目標成本)",
        "levels": {
          "0": "無",
          "1": "了解BOM成本計算基本概念",
          "2": "能獨立建立完整BOM Cost表格含各層級物料與加工成本",
          "3": "建立BOM Cost標準模板+有多件產品BOM成本分析案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(BOM成本概念)｜L5A必備(獨立建立完整BOM Cost,品質符合)｜L6A主導(BOM Cost模板建立)",
        "questions": "如何建立一個包含PCBA+機構件+包材的完整BOM Cost?如何拆解達成目標成本?"
      },
      {
        "category": "[L]  成本計算能力  Cost Engineering",
        "code": "L6",
        "dimension": "報價能力",
        "ability": "產品對外報價能力\n(成本加成/市場定價/價格區間判斷)",
        "levels": {
          "0": "無",
          "1": "了解基本報價概念",
          "2": "能獨立完成產品報價含合理利潤設定",
          "3": "建立報價標準程序+有多件成功報價案例+競爭對手價格分析"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L5A必備(獨立完成產品報價含利潤設定)｜L6A主導(報價標準程序建立+競爭分析)｜L7策略定價",
        "questions": "如何從BOM Cost計算出對客戶的報價?如何判斷競爭對手的報價策略?"
      },
      {
        "category": "[M]  模型試作開發驗證  Prototype & Verification",
        "code": "M1",
        "dimension": "快速成形打樣",
        "ability": "快速成形/3D列印/CNC打樣\n(概念模型/功能驗證樣件)",
        "levels": {
          "0": "無",
          "1": "了解各種快速成形方式的特性",
          "2": "能獨立規劃打樣方式+確認樣件評估",
          "3": "建立打樣評估SOP+有多種製程打樣比較能力"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4A認知(快速成形方式特性)｜L5A必備(獨立規劃打樣方式+評估)｜L6A主導(打樣評估SOP建立)",
        "questions": "FDM vs SLA vs SLS vs CNC打樣各適用什麼驗證目的?如何選擇打樣方式?"
      },
      {
        "category": "[M]  模型試作開發驗證  Prototype & Verification",
        "code": "M2",
        "dimension": "光學驗證樣件",
        "ability": "光學配光驗證樣件\n(反射杯/透鏡/導光條光學實物驗證)",
        "levels": {
          "0": "無",
          "1": "了解光學樣件驗證流程",
          "2": "能主導光學驗證樣件製作+配光量測確認",
          "3": "建立光學樣件驗證SOP+有從模擬到實物驗證的完整案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(光學樣件驗證流程)｜L5A必備(主導光學驗證樣件+配光確認)｜L6A主導(光學樣件驗證SOP)",
        "questions": "如何確認光學模擬結果與實物配光機量測結果的差異?如何調整反射杯設計?"
      },
      {
        "category": "[M]  模型試作開發驗證  Prototype & Verification",
        "code": "M3",
        "dimension": "防水密封驗證",
        "ability": "防水密封結構驗證\n(O-ring壓縮/灌膠/氣密實測)",
        "levels": {
          "0": "無",
          "1": "了解防水驗證流程",
          "2": "能主導完整防水結構驗證計畫",
          "3": "建立防水驗證SOP+有IP67/IP69K驗證成功案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(防水驗證流程)｜L5A必備(主導完整防水驗證計畫)｜L6A主導(IP67/IP69K驗證SOP建立)",
        "questions": "如何設計防水結構驗證計畫?第一次試模後防水失效如何系統性分析?"
      },
      {
        "category": "[M]  模型試作開發驗證  Prototype & Verification",
        "code": "M4",
        "dimension": "各材料製程樣件",
        "ability": "各材料製程開發樣件確認\n(鋁壓鑄/鋁擠/塑射/矽膠/灌膠各製程首件確認)",
        "levels": {
          "0": "無",
          "1": "了解各製程首件確認項目",
          "2": "能主導各製程首件確認+缺陷改善記錄",
          "3": "建立各製程首件確認SOP+有多種製程成功驗證案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4A認知(首件確認項目)｜L5A必備(主導各製程首件+缺陷改善)｜L6A主導(首件確認SOP體系建立)",
        "questions": "鋁壓鑄首件確認需要量測哪些關鍵尺寸?如何判斷縮孔是否在允收範圍?"
      },
      {
        "category": "[M]  模型試作開發驗證  Prototype & Verification",
        "code": "M5",
        "dimension": "EMC初步驗證",
        "ability": "EMC電磁相容性初步驗證\n(傳導/輻射預符合性測試)",
        "levels": {
          "0": "無",
          "1": "了解EMC預符合性測試概念",
          "2": "能配合硬體工程師進行EMC預測試+問題改善",
          "3": "建立EMC機構設計規範+有機構調整改善EMC結果的案例"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L5A建議(EMC預測試配合)｜L5B加分(配合硬體預測試改善)｜L6A主導(EMC機構設計規範建立)",
        "questions": "機構設計哪些因素會影響EMC測試結果?如何在試作階段提前發現EMC問題?"
      },
      {
        "category": "[M]  模型試作開發驗證  Prototype & Verification",
        "code": "M6",
        "dimension": "開發驗證計畫",
        "ability": "開發驗證計畫DVP制定\n(Design Verification Plan)",
        "levels": {
          "0": "無",
          "1": "了解DVP文件的作用",
          "2": "能獨立制定完整DVP+管理執行進度",
          "3": "建立DVP標準模板+有多件產品DVP完整執行記錄"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L5A必備(獨立制定DVP+追蹤)｜L6A主導(DVP標準模板建立,方向設定)｜L7主導(DVP策略規劃)",
        "questions": "一個新警示燈產品的DVP需要包含哪些測試項目?如何決定測試的優先順序?"
      },
      {
        "category": "[M]  模型試作開發驗證  Prototype & Verification",
        "code": "M7",
        "dimension": "失效分析能力",
        "ability": "試作階段失效分析\n(8D/5Why/魚骨圖應用)",
        "levels": {
          "0": "無",
          "1": "了解失效分析工具",
          "2": "能獨立應用8D/5Why進行失效分析",
          "3": "建立失效分析SOP+有多件複雜失效根因找出案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B認知(8D/5Why工具)｜L5A必備(獨立應用8D失效分析)｜L6A主導(失效分析SOP+案例庫建立)",
        "questions": "描述一件你主導的試作失效分析案例:使用什麼分析方法?找到什麼根本原因?"
      },
      {
        "category": "[M]  模型試作開發驗證  Prototype & Verification",
        "code": "M8",
        "dimension": "壓力測試",
        "ability": "零件/半成品壓力測試規劃與執行\n(高低溫應力/電氣過載/機械應力/加速老化 Stress Testing)",
        "levels": {
          "0": "無",
          "1": "了解壓力測試目的與常見測試項目(高低溫/電壓過載/機械應力/加速老化)",
          "2": "能獨立規劃零件/半成品壓力測試計畫+執行+失效位置判讀+改善追蹤",
          "3": "建立壓力測試矩陣SOP+有系統性壓力測試發現潛在缺陷+設計改善量化壽命預測案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(壓力測試項目認知)｜L5A必備(獨立規劃零件/半成品壓力測試+執行+失效判讀,準時率100%)｜L6A主導(壓力測試矩陣SOP建立+壽命預測)",
        "questions": "如何設計LED警示燈PCBA半成品的電氣過載壓力測試？高低溫加速老化壓力測試如何設定加速因子確保相關性？壓力測試失效後如何分析根因並回饋零件設計改善？"
      },
      {
        "category": "[M]  模型試作開發驗證  Prototype & Verification",
        "code": "M9",
        "dimension": "破壞性測試",
        "ability": "零件/半成品破壞性測試規劃與執行\n(拉力/扭力/彎曲/壓縮/衝擊破壞強度確認 Destructive Testing)",
        "levels": {
          "0": "無",
          "1": "了解零件/半成品破壞性測試目的與測試項目(拉力/扭力/彎曲/壓縮/衝擊)",
          "2": "能規劃零件/半成品破壞測試計畫+執行+分析失效位置+回饋設計安全係數建立",
          "3": "建立破壞性測試矩陣SOP+有從破壞分析決定安全係數+量化設計改善成功案例資料庫"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(破壞性測試項目認知)｜L5A必備(規劃零件/半成品破壞測試計畫+執行+安全係數建立)｜L6A主導(破壞測試矩陣SOP+安全係數量化資料庫)",
        "questions": "鋁壓鑄燈殼零件的拉力破壞測試如何設計確認安全係數？O-ring密封件壓縮永久變形破壞測試如何執行？半成品灌膠破壞測試如何確認灌膠附著強度與界面破壞模式？"
      },
      {
        "category": "[N]  產品試作試產量產  Pilot & Mass Production",
        "code": "N1",
        "dimension": "試作管理",
        "ability": "產品試作(Proto/EVT/DVT)管理\n(計畫制定/問題追蹤/里程碑管理)",
        "levels": {
          "0": "無",
          "1": "了解試作階段管理概念",
          "2": "能主導完整試作流程+問題追蹤系統管理",
          "3": "建立試作管理SOP+有多件產品試作到量產成功案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(試作階段概念)｜L5A必備(主導完整試作流程+問題追蹤)｜L6A主導(試作管理SOP建立)",
        "questions": "EVT/DVT/PVT各階段的目標有何不同?如何判斷可以進入下一個試作階段?"
      },
      {
        "category": "[N]  產品試作試產量產  Pilot & Mass Production",
        "code": "N2",
        "dimension": "試產管理",
        "ability": "試產(Pilot Run/PVT)管理\n(SOP確認/產線驗證/良率目標/問題歸零)",
        "levels": {
          "0": "無",
          "1": "了解試產目標",
          "2": "能主導試產計畫+產線問題識別改善",
          "3": "建立試產管理SOP+有試產良率達標轉量產成功案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L5A必備(主導試產計畫+問題識別)｜L6A主導(試產管理SOP建立,Behavior Evidence)｜L7策略",
        "questions": "試產階段良率目標如何設定?如何系統性管理試產期間的問題並確保問題歸零?"
      },
      {
        "category": "[N]  產品試作試產量產  Pilot & Mass Production",
        "code": "N3",
        "dimension": "量產移轉",
        "ability": "量產移轉(MP Transfer)管理\n(控制計畫/SOP/品質文件/人員培訓)",
        "levels": {
          "0": "無",
          "1": "了解量產移轉所需文件",
          "2": "能主導量產移轉含完整文件+人員訓練+生產驗收",
          "3": "建立量產移轉SOP+有多件順利移轉量產案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L5A必備(主導量產移轉含文件訓練)｜L6A主導(量產移轉SOP建立,方向設定)｜L7多產品線整合",
        "questions": "量產移轉檢查清單需要包含哪些項目?如何確認生產線人員已充分訓練?"
      },
      {
        "category": "[N]  產品試作試產量產  Pilot & Mass Production",
        "code": "N4",
        "dimension": "控制計畫制定",
        "ability": "控制計畫(Control Plan)制定\n(關鍵特性/管制方法/量測系統)",
        "levels": {
          "0": "無",
          "1": "了解控制計畫的作用與格式",
          "2": "能獨立制定完整控制計畫含關鍵特性識別",
          "3": "建立控制計畫標準流程+有配合客戶要求修訂案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L5A必備(獨立制定控制計畫+關鍵特性識別)｜L6A主導(客戶要求修訂)｜L7主導(CP策略體系)",
        "questions": "如何識別產品的關鍵特性(SC/CC)?控制計畫如何與FMEA連結?"
      },
      {
        "category": "[N]  產品試作試產量產  Pilot & Mass Production",
        "code": "N5",
        "dimension": "量產問題處理",
        "ability": "量產問題快速處理\n(不良分析/緊急遏制/客訴處理)",
        "levels": {
          "0": "無",
          "1": "了解量產問題處理流程",
          "2": "能主導量產問題分析+緊急遏制+改善措施",
          "3": "建立量產問題快速響應SOP+有複雜客訴成功解決案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L5A必備(主導量產問題分析+緊急遏制)｜L6A主導(快速響應SOP建立,跨部門影響力)｜L7策略",
        "questions": "量產出現批次不良品時如何實施緊急遏制?如何在48小時內給客戶初步回覆?"
      },
      {
        "category": "[N]  產品試作試產量產  Pilot & Mass Production",
        "code": "N6",
        "dimension": "良率管理",
        "ability": "量產良率管理\n(直通率FPY/報廢率/返工率追蹤改善)",
        "levels": {
          "0": "無",
          "1": "了解良率計算與追蹤方法",
          "2": "能分析良率問題並主導改善",
          "3": "建立良率改善機制+有量化的良率提升成果"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4B認知(FPY計算)｜L5A必備(分析良率問題主導改善)｜L6A主導(良率改善機制建立,KPI管理)",
        "questions": "直通率(FPY)計算方法?發現某站點良率下降時如何系統性分析根因?"
      },
      {
        "category": "[N]  產品試作試產量產  Pilot & Mass Production",
        "code": "N7",
        "dimension": "成品壓力測試",
        "ability": "成品壓力測試規劃與執行\n(整燈 ORT/HALT/HASS 高低溫/電氣/振動複合壓力測試)",
        "levels": {
          "0": "無",
          "1": "了解成品壓力測試目的與ORT/HALT/HASS測試概念",
          "2": "能獨立規劃成品ORT/HALT/HASS壓力測試計畫+執行+失效判讀+改善追蹤",
          "3": "建立成品壓力測試SOP+有ORT/HALT發現潛在缺陷改善量產品質的成功案例+量化壽命確認"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(ORT/HALT/HASS成品壓力測試概念)｜L5A必備(獨立規劃成品壓力測試計畫+執行,準時率100%)｜L6A主導(壓力測試SOP建立+量產品質改善)",
        "questions": "整燈ORT量產可靠度測試如何設計測試條件與抽樣計畫？HALT測試如何找出警示燈的Operating Limit與Destruct Limit？壓力測試後發現批次性失效如何系統性追查根因？"
      },
      {
        "category": "[N]  產品試作試產量產  Pilot & Mass Production",
        "code": "N8",
        "dimension": "成品破壞性測試",
        "ability": "成品破壞性測試規劃與執行\n(整燈拉力/扭力/跌落破壞/衝擊破壞/壓壞/安全係數確認 Destructive Testing)",
        "levels": {
          "0": "無",
          "1": "了解成品破壞性測試目的與常見測試項目(拉力/扭力/跌落/衝擊/壓壞)",
          "2": "能規劃成品破壞測試計畫+執行測試+分析失效模式+建立安全係數基準值",
          "3": "建立成品破壞測試SOP+有從破壞分析到設計強化的完整案例+設計安全係數量化資料庫"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(成品破壞性測試項目認知)｜L5A必備(規劃成品破壞測試計畫+執行+安全係數基準)｜L6A主導(破壞測試SOP+安全係數量化資料庫建立)",
        "questions": "整燈安裝螺絲扭力破壞測試如何設計確保安全係數≥2？跌落破壞測試與IK衝擊等級測試的差異？如何用成品破壞性測試決定警示燈機構設計安全係數並回饋BOM材料選型？"
      },
      {
        "category": "[O]  產品裝車/合車測試驗證  Vehicle Fitting & Integration Test",
        "code": "O1",
        "dimension": "合車規劃",
        "ability": "合車前規劃準備\n(車款確認/控制器選擇/配件包/腳架/安裝照片/FMRD0252表格準備)",
        "levels": {
          "0": "無",
          "1": "了解FMRD0252合車驗證表內容與填寫方式",
          "2": "能獨立規劃合車前準備含車款/控制器/配件包確認+安裝照片計畫",
          "3": "建立合車前規劃SOP+有多車型多控制器整合準備+跨車型知識庫建立案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4A認知(FMRD0252合車表格式)｜L5A必備(獨立規劃合車前準備+文件確認,準時率100%)｜L6A主導(合車規劃SOP建立+多車型知識庫)",
        "questions": "FMRD0252合車驗證表中需確認哪些車款與控制器組合？合車前配件包與腳架如何逐項確認？安裝照片需拍攝哪些角度確保完整記錄？"
      },
      {
        "category": "[O]  產品裝車/合車測試驗證  Vehicle Fitting & Integration Test",
        "code": "O2",
        "dimension": "機構組配",
        "ability": "機構安裝組配驗證\n(燈座/腳架/螺絲鎖付/線材/遮光罩安裝品質確認)",
        "levels": {
          "0": "無",
          "1": "了解合車機構組配檢查項目(晃動/鬆緊度/干涉/螺絲)",
          "2": "能獨立執行機構安裝全項驗證含晃動/鬆緊度/拆裝順暢/螺絲歪斜確認",
          "3": "建立機構安裝驗收標準SOP+有多車型安裝問題根因分析+機構設計改善案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4A認知(合車機構組配檢查項目)｜L5A必備(獨立執行機構安裝全項驗證,返工率≦5%)｜L5B-L6A主導(安裝驗收標準SOP建立+設計改善)",
        "questions": "燈具鎖附後如何確認不晃動？線材端子卡腳不可脫落如何驗證？螺絲鎖付歪斜浮起時如何從機構設計根本改善？"
      },
      {
        "category": "[O]  產品裝車/合車測試驗證  Vehicle Fitting & Integration Test",
        "code": "O3",
        "dimension": "功能整合",
        "ability": "警示燈全功能整合驗證\n(Warning/Pattern切換/Synchronize/DIM/TAKEDOWN/ALLEY/方向燈/煞車燈/雙控)",
        "levels": {
          "0": "無",
          "1": "了解FMRD0252功能驗證項目清單(Warning/Pattern/Sync等)",
          "2": "能獨立執行全功能驗證含PH1&PH2 Synchronize同步/雙控/方向燈/剎車燈確認",
          "3": "建立功能驗證SOP+有多功能異常根因分析(機構/電氣/控制器)+設計改善案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4B認知(功能驗證項目清單)｜L5A必備(獨立執行全功能驗證,準時率100%)｜L6A主導(功能驗證SOP建立+跨部門異常分析)",
        "questions": "PH1&PH1、PH1&PH2、PH2&PH2三種Synchronize同步模式如何驗證？TAKEDOWN與ALLEY LIGHT異常時如何判斷是機構/電氣/控制器問題？Pattern切換不正常時排查步驟？"
      },
      {
        "category": "[O]  產品裝車/合車測試驗證  Vehicle Fitting & Integration Test",
        "code": "O4",
        "dimension": "控制器整合",
        "ability": "四大控制器系統整合驗證\n(CODE3 Matrix Z3S / Whelen Core WeCanX® / Federal Signal Pathfinder / SoundOff bluePRINT®)",
        "levels": {
          "0": "無",
          "1": "了解四大控制器基本架構差異(CAN/WeCanX/Z3S CAT5/VDI)",
          "2": "能配合各控制器系統完成整燈功能整合驗證+基礎設定操作",
          "3": "主導多控制器整合驗證規範建立+有各系統相容性問題根因分析+設計改善案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4A認知(四大控制器架構差異)｜L5A必備(配合各控制器完成整合驗證)｜L6A主導(多控制器整合規範+相容性解決+對客戶技術溝通)",
        "questions": "Whelen CenCom Core WeCanX® CAN-based與SoundOff bluePRINT® VDI架構差異如何影響機構接口設計？CODE3 Matrix Z3S CAT5節點與Federal Signal Pathfinder OBD/CAN各需確認哪些機構安裝接口？"
      },
      {
        "category": "[O]  產品裝車/合車測試驗證  Vehicle Fitting & Integration Test",
        "code": "O5",
        "dimension": "電器量測",
        "ability": "電器規格量測驗證\n(電壓/電流/功率量測+PATTERN波形/PWM確認+EMI AM/FM測試)",
        "levels": {
          "0": "無",
          "1": "了解合車電器量測項目(V/A/W量測/PATTERN波形/EMI)",
          "2": "能獨立執行電器規格量測+示波器PATTERN波形確認+AM/FM EMI測試判定",
          "3": "建立電器量測規格書+有EMI不合格根因分析+屏蔽改善設計+規格書標準建立"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4B認知(電器量測項目V/A/W/EMI)｜L5A必備(獨立執行電器規格量測+EMI確認,品質符合)｜L6A主導(電器量測規格書建立+EMI改善設計)",
        "questions": "12V與24V車載環境電器規格量測差異？PATTERN波形如何用示波器確認PWM工作比？AM/FM收音機EMI測試如何判斷合格？機構設計哪些因素影響EMI結果？"
      },
      {
        "category": "[O]  產品裝車/合車測試驗證  Vehicle Fitting & Integration Test",
        "code": "O6",
        "dimension": "光學目視",
        "ability": "目視光學合車評估\n(光型/顏色/亮度/安裝位置/角度確認/夜間監看/競品對比)",
        "levels": {
          "0": "無",
          "1": "了解合車目視光學評估項目(光型/顏色/亮度/位置)",
          "2": "能獨立執行目視光學全項評估含夜間監看+競爭對手比較+問題記錄",
          "3": "建立合車光學評估SOP+有系統性競品比較分析+改善設計建議+量化指標案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4B認知(目視光學評估項目)｜L5A必備(獨立執行目視光學評估+競品比較記錄)｜L6A主導(合車光學評估SOP+競品分析體系建立)",
        "questions": "警示燈裝車後如何目視評估光型/顏色符合ECE R65/SAE要求？夜間監看需確認哪些光學問題？如何系統性比較Whelen/SoundOff/Federal Signal競爭對手合車表現？"
      },
      {
        "category": "[O]  產品裝車/合車測試驗證  Vehicle Fitting & Integration Test",
        "code": "O7★",
        "dimension": "合車文件",
        "ability": "合車報告與跨車型知識管理\n(FMRD0252完整記錄/照片管理/跨車型知識庫/設計改善回饋)",
        "levels": {
          "0": "0=無；1=能完整填寫FMRD0252合車驗證表+整理合車照片；2=能整理合車報告建立可追溯記錄+提出設計改善建議；3=建立跨車型合車知識庫+有多車型案例系統化管理+新品設計參考機制",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L4A認知(FMRD0252完整填寫)｜L5A建議(合車報告整理+追溯記錄+設計改善建議)｜L6A主導(跨車型合車知識庫建立+新品設計回饋機制)",
        "questions": "FMRD0252合車表哪些欄位最容易漏填？合車照片需管理哪些角度確保完整記錄？如何建立跨車型/跨控制器合車知識庫供後續新品設計參考？"
      },
      {
        "category": "[P]  PPAP  Production Part Approval Process",
        "code": "P1",
        "dimension": "PPAP基礎知識",
        "ability": "PPAP五個等級理解\n(Level 1~5送交要求差異)",
        "levels": {
          "0": "不了解",
          "1": "知道PPAP Level 1~5的差異",
          "2": "能依客戶要求選擇適當Level並準備文件",
          "3": "有多件完整PPAP文件準備+客戶核准成功案例"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L4A必備(PPAP Level差異認知)｜L5A獨立準備文件(品質符合)｜L6A主導(客戶核准溝通)",
        "questions": "PPAP Level 3需要提交哪些文件?Level 1與Level 3的差異在哪?"
      },
      {
        "category": "[P]  PPAP  Production Part Approval Process",
        "code": "P2",
        "dimension": "PPAP文件準備",
        "ability": "PPAP 18項要素文件準備\n(設計記錄/DFMEA/流程圖/PFMEA/SPC/MSA等)",
        "levels": {
          "0": "無",
          "1": "了解PPAP 18項要素",
          "2": "能獨立準備完整18項PPAP文件",
          "3": "建立PPAP文件標準模板+有多件客戶核准成功案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B必備(18項要素了解)｜L5A獨立準備完整18項(準時率100%)｜L6A主導(PPAP文件模板建立)",
        "questions": "PPAP的18項要素分別是什麼?哪些項目最容易被客戶退件?如何避免?"
      },
      {
        "category": "[P]  PPAP  Production Part Approval Process",
        "code": "P3",
        "dimension": "尺寸量測報告",
        "ability": "PPAP尺寸量測報告\n(全尺寸量測/CMK/Cpk)",
        "levels": {
          "0": "無",
          "1": "了解尺寸量測報告格式",
          "2": "能主導全尺寸量測+Cpk分析+報告準備",
          "3": "建立量測報告SOP+有Cpk不足改善案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B必備(量測報告格式)｜L5A主導(全尺寸量測+Cpk分析)｜L6A主導(量測報告SOP+Cpk改善)",
        "questions": "PPAP尺寸量測需要量測多少樣品?Cpk門檻通常設定多少?Cpk不足時如何改善?"
      },
      {
        "category": "[P]  PPAP  Production Part Approval Process",
        "code": "Q1",
        "dimension": "APQP階段管理",
        "ability": "APQP五個階段規劃執行\n(概念→計畫→設計→製程→確認→回饋)",
        "levels": {
          "0": "不了解",
          "1": "了解APQP五階段內容",
          "2": "能主導APQP計畫制定+階段門審查",
          "3": "有多件完整APQP執行+客戶Gate Review通過案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B必備認知(APQP五階段)｜L5A主導計畫制定(準時率100%)｜L6A主導(Gate Review,方向設定者)",
        "questions": "APQP第三階段(產品設計開發驗證)需要完成哪些輸出?如何管理階段門評審?"
      },
      {
        "category": "[P]  PPAP  Production Part Approval Process",
        "code": "Q3",
        "dimension": "APQP輸入輸出",
        "ability": "APQP各階段輸入輸出管理\n(設計FMEA/PFMEA/CP關聯性)",
        "levels": {
          "0": "無",
          "1": "了解各階段主要輸入輸出",
          "2": "能管理APQP各階段文件的連結性與一致性",
          "3": "建立APQP文件管理系統+有多件完整追溯案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B必備(各階段輸入輸出)｜L5A主導(DFMEA/PFMEA/CP連結管理)｜L6A主導(APQP文件管理體系)",
        "questions": "APQP中DFMEA/PFMEA/Control Plan三者如何互相連結?如何確保一致性?"
      },
      {
        "category": "[P]  PPAP  Production Part Approval Process",
        "code": "Q4",
        "dimension": "進度監控管理",
        "ability": "APQP進度監控與風險管理\n(甘特圖/里程碑/風險矩陣)",
        "levels": {
          "0": "無",
          "1": "了解APQP進度管理工具",
          "2": "能使用工具管理APQP進度+識別風險+制定對策",
          "3": "有在緊急時程下完成APQP+有效風險管理案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L5A必備(APQP進度監控+風險管理)｜L6A主導(甘特圖/里程碑追蹤體系,方向設定)｜L7策略管理",
        "questions": "如何建立APQP里程碑追蹤系統?發現進度落後時如何評估風險並決定對策?"
      },
      {
        "category": "[R]  MSA  Measurement System Analysis",
        "code": "R1",
        "dimension": "MSA基礎概念",
        "ability": "MSA量測系統分析基礎\n(GR&R/偏倚/線性/穩定性/解析力)",
        "levels": {
          "0": "不了解",
          "1": "了解MSA的目的與主要評估指標",
          "2": "能執行基本GR&R分析並解讀結果",
          "3": "建立MSA標準程序+有多種量測系統評估案例"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L4B必備認知(GR&R基礎)｜L5A獨立執行GR&R(品質符合)｜L6A主導(MSA標準程序建立)",
        "questions": "GR&R分析的%Contribution和%Tolerance分別代表什麼?各自的允收標準是多少?"
      },
      {
        "category": "[R]  MSA  Measurement System Analysis",
        "code": "R2",
        "dimension": "計量型MSA",
        "ability": "計量型MSA執行\n(Gauge R&R/ANOVA法/X-bar R法)",
        "levels": {
          "0": "無",
          "1": "了解計量型MSA的執行步驟",
          "2": "能主導計量型MSA執行+分析報告準備",
          "3": "有MSA不合格的改善+重新驗證成功案例"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L5A必備(主導計量型MSA執行+報告)｜L5B主導(MSA不合格改善驗證)｜L6A主導(量測體系建立)",
        "questions": "計量型GR&R實驗需要幾個操作者/幾個樣品/重複幾次?ANOVA法 vs Xbar-R法差異?"
      },
      {
        "category": "[S]  FMEA  Failure Mode & Effects Analysis",
        "code": "S1",
        "dimension": "DFMEA基礎",
        "ability": "設計FMEA(DFMEA)執行\n(功能/失效模式/失效影響/嚴重度/探測度/RPN)",
        "levels": {
          "0": "不了解",
          "1": "了解DFMEA的基本格式與評分方法",
          "2": "能獨立執行DFMEA+識別高RPN項目+制定改善措施",
          "3": "建立DFMEA標準模板+有多件DFMEA提前識別設計風險案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B必備認知(DFMEA格式評分)｜L5A獨立執行(識別高RPN,品質符合)｜L6A主導(DFMEA模板體系建立)",
        "questions": "如何為LED警示燈的防水密封功能建立DFMEA?嚴重度/發生率/探測度各如何評分?"
      },
      {
        "category": "[S]  FMEA  Failure Mode & Effects Analysis",
        "code": "S2",
        "dimension": "PFMEA基礎",
        "ability": "製程FMEA(PFMEA)執行\n(製程步驟/製程失效/影響/PFMEA與CP連結)",
        "levels": {
          "0": "不了解",
          "1": "了解PFMEA的基本格式",
          "2": "能獨立執行PFMEA+與Control Plan連結",
          "3": "有完整PFMEA到Control Plan到SOP的連結管理案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B必備認知(PFMEA格式)｜L5A獨立執行(PFMEA+CP連結)｜L6A主導(PFMEA-CP-SOP連結體系)",
        "questions": "灌膠製程的PFMEA需要識別哪些關鍵失效模式?如何確保PFMEA與控制計畫一致?"
      },
      {
        "category": "[S]  FMEA  Failure Mode & Effects Analysis",
        "code": "S3",
        "dimension": "AIAG-VDA FMEA",
        "ability": "新版AIAG-VDA FMEA方法\n(AP取代RPN/7步驟/5T)",
        "levels": {
          "0": "無",
          "1": "了解AIAG-VDA新版FMEA與舊版的主要差異",
          "2": "能應用新版FMEA格式進行分析",
          "3": "有完整新版FMEA執行+獲客戶接受案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L5A必備(新版AIAG-VDA差異認知)｜L5B主導(新版格式執行)｜L6A主導(新版FMEA客戶核准體系)",
        "questions": "新版AIAG-VDA FMEA中AP(Action Priority)如何取代RPN?H/M/L如何判定?"
      },
      {
        "category": "[T]  SPC  Statistical Process Control",
        "code": "T1",
        "dimension": "SPC基礎概念",
        "ability": "SPC統計製程管制基礎\n(變異來源/管制圖選擇/Cp/Cpk)",
        "levels": {
          "0": "不了解",
          "1": "了解SPC的目的與基本概念",
          "2": "能選擇適當管制圖+解讀製程異常信號",
          "3": "建立SPC系統+有SPC改善製程穩定性成功案例"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L4B必備認知(SPC基礎+管制圖概念)｜L5A獨立應用(解讀異常信號)｜L6A主導(SPC系統建立)",
        "questions": "X-bar R管制圖 vs I-MR管制圖各適用何種情境?管制圖8種異常判讀準則是什麼?"
      },
      {
        "category": "[T]  SPC  Statistical Process Control",
        "code": "T2",
        "dimension": "管制圖應用",
        "ability": "管制圖實務應用\n(計量型/計數型管制圖選擇與建立)",
        "levels": {
          "0": "無",
          "1": "了解常用管制圖的類型",
          "2": "能建立管制圖+設定管制界限+識別異常",
          "3": "有SPC應用於量產改善+Cpk提升成功案例"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L5A必備(建立管制圖+識別異常)｜L5B主導(SPC改善Cpk提升)｜L6A主導(量產線SPC監控體系)",
        "questions": "如何為灌膠重量設定管制圖?管制界限如何計算?發現超出管制界限時如何處理?"
      },
      {
        "category": "[T]  SPC  Statistical Process Control",
        "code": "T3",
        "dimension": "製程能力分析",
        "ability": "製程能力分析\n(Cp/Cpk/Pp/Ppk計算與改善)",
        "levels": {
          "0": "無",
          "1": "了解Cp/Cpk的定義與計算",
          "2": "能計算分析製程能力並識別改善機會",
          "3": "有系統性製程能力改善(Cpk提升)成功案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B必備認知(Cp/Cpk定義計算)｜L5A獨立分析(識別改善機會)｜L6A主導(系統性Cpk提升機制建立)",
        "questions": "Cp vs Cpk差異?Cpk=1.33代表什麼?如何提升製程能力從Cpk=0.8到Cpk=1.33?"
      },
      {
        "category": "[U]  專案執行管理  Project Execution Management",
        "code": "U1",
        "dimension": "A表-開發進度計畫",
        "ability": "產品開發進度計畫表(A表)\n(整體里程碑/Gate Review/交付物管理)",
        "levels": {
          "0": "無",
          "1": "了解A表格式與用途",
          "2": "能獨立建立A表+追蹤進度+管理里程碑",
          "3": "建立A表標準模板+有多件產品完整A表執行+客戶Gate Review通過案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(A表格式用途)｜L5A必備(獨立建立A表+追蹤里程碑,準時率100%)｜L6A主導(Gate Review主持)",
        "questions": "A表里程碑如何設定?發現進度落後時如何評估影響並決定對策?如何向客戶報告進度?"
      },
      {
        "category": "[U]  專案執行管理  Project Execution Management",
        "code": "U2",
        "dimension": "B表-零件製作進度",
        "ability": "構成零件製作計劃及進度管制表(B表)\n(各零件樣品時程/試模/首件確認進度)",
        "levels": {
          "0": "無",
          "1": "了解B表格式與用途",
          "2": "能獨立建立B表+追蹤各零件開模/試模進度+識別瓶頸",
          "3": "建立B表標準模板+有多件產品完整B表執行+有零件進度落後補救案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(B表格式用途)｜L5A必備(獨立建立B表+識別關鍵路徑)｜L6A主導(零件進度落後補救策略)",
        "questions": "B表如何拆解各零件的製作里程碑?如何識別關鍵路徑?哪個零件最可能成為瓶頸?"
      },
      {
        "category": "[U]  專案執行管理  Project Execution Management",
        "code": "U3",
        "dimension": "C表-模治量具規劃",
        "ability": "模具/治具/量具需求規劃及製作進度表(C表)\n(模具/治具/量具需求識別/製作追蹤)",
        "levels": {
          "0": "無",
          "1": "了解C表格式與用途",
          "2": "能獨立識別開發所需模具治具量具+建立C表追蹤",
          "3": "建立C表標準模板+有完整模治量具需求預測+有提前識別缺口案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(C表格式用途)｜L5A必備(獨立識別模治量具需求建立C表)｜L6A主導(缺口提前預警策略)",
        "questions": "如何在開發初期識別所有需要的模具/治具/量具?C表如何與B表零件製作進度連動?"
      },
      {
        "category": "[U]  專案執行管理  Project Execution Management",
        "code": "U4",
        "dimension": "D表-試驗規劃報告",
        "ability": "產品材質工程試驗規劃進度管制及綜合報告表(D表)\n(DVP試驗矩陣/執行進度/結果彙整報告)",
        "levels": {
          "0": "無",
          "1": "了解D表格式與DVP概念",
          "2": "能獨立建立D表試驗計畫+追蹤執行進度+彙整測試結果報告",
          "3": "建立D表標準模板+有完整DVP執行到量產移轉的完整記錄案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(D表DVP概念)｜L5A必備(獨立建立D表+追蹤進度+彙整測試報告)｜L6A主導(DVP策略)",
        "questions": "D表試驗矩陣如何與DFMEA/法規要求連結?如何管理多個試驗同時進行的進度?測試不合格時如何更新D表?"
      },
      {
        "category": "[U]  專案執行管理  Project Execution Management",
        "code": "U5",
        "dimension": "BOM建立與結構",
        "ability": "BOM建立與BOM結構設計\n(BOM分層架構/半成品BOM/ERP BOM建立)",
        "levels": {
          "0": "無",
          "1": "了解BOM的基本架構與用途",
          "2": "能獨立建立完整多層BOM+設計合理BOM結構",
          "3": "建立BOM設計規範+有複雜產品多層BOM架構設計+有BOM變更管理案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B必備認知(BOM架構)｜L5A獨立建立(完整多層BOM結構設計)｜L6A主導(BOM設計規範+ECN管理)",
        "questions": "如何為LED警示燈設計多層BOM結構?哪些層級需要設半成品品號?如何處理共用件的BOM管理?"
      },
      {
        "category": "[U]  專案執行管理  Project Execution Management",
        "code": "U6",
        "dimension": "ERP BOM建立",
        "ability": "ERP系統BOM建立與維護\n(鼎新ERP BOM建立/品號申請/物料主檔建立)",
        "levels": {
          "0": "無",
          "1": "了解ERP BOM建立的流程",
          "2": "能獨立在鼎新ERP建立完整BOM+申請品號+建立物料主檔",
          "3": "建立ERP BOM建立SOP+有多件產品完整ERP BOM建立+有BOM變更ECN執行案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B必備(ERP BOM建立步驟)｜L5A獨立在ERP建立BOM+申請品號｜L6A主導(BOM建立SOP+ECN執行)",
        "questions": "在鼎新ERP如何申請新品號?BOM建立時需要填寫哪些關鍵欄位?如何處理BOM版本變更?"
      },
      {
        "category": "[U]  專案執行管理  Project Execution Management",
        "code": "U7",
        "dimension": "ABCD四表整合管理",
        "ability": "ABCD四表整合管理\n(A/B/C/D表橫向整合+跨部門溝通+進度會議主持)",
        "levels": {
          "0": "無",
          "1": "了解四表之間的關聯性",
          "2": "能有效整合四表進行跨部門進度溝通",
          "3": "建立四表整合管理SOP+有主持多部門開發週會+有效推動專案完成案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L5A必備(有效整合四表跨部門進度溝通)｜L6A主導(開發週會主持,方向設定)｜L7跨產品線策略",
        "questions": "A/B/C/D四表如何在開發週會中整合呈現?如何快速識別整體專案的關鍵瓶頸?"
      },
      {
        "category": "[V]  鼎新ERP系統操作  Kingdee ERP System",
        "code": "V1",
        "dimension": "ERP系統基礎操作",
        "ability": "鼎新ERP基礎操作\n(系統登入/模組導覽/查詢功能/報表產出)",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作了解系統介面",
          "2": "能熟練使用各模組查詢+產出報表",
          "3": "能設定ERP參數+有多個模組熟練操作+有指導他人使用經驗"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L3B起認知(系統基礎操作)｜L4A必備(各模組查詢+報表產出)｜L5A主導(ERP參數設定+指導他人)",
        "questions": "鼎新ERP哪些模組與機構工程師工作最相關?如何快速查詢一個品號的庫存與BOM?"
      },
      {
        "category": "[V]  鼎新ERP系統操作  Kingdee ERP System",
        "code": "V2",
        "dimension": "品號申請建立",
        "ability": "品號申請與物料主檔建立\n(品號規則/物料主檔欄位/分類設定)",
        "levels": {
          "0": "無",
          "1": "了解品號申請流程",
          "2": "能獨立完成品號申請+物料主檔建立+設定正確分類",
          "3": "建立品號申請SOP+有多件品號申請+有品號管理規範建立案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4A必備(品號申請流程認知)｜L4B獨立完成(品號申請+物料主檔建立)｜L5A主導(品號管理規範建立)",
        "questions": "鼎新ERP品號申請需要填寫哪些必要欄位?如何設定物料的存貨分類與計量單位?"
      },
      {
        "category": "[V]  鼎新ERP系統操作  Kingdee ERP System",
        "code": "V3",
        "dimension": "BOM建立與維護",
        "ability": "ERP BOM建立與變更管理\n(BOM建立/版本管理/ECN變更執行)",
        "levels": {
          "0": "無",
          "1": "了解ERP BOM建立步驟",
          "2": "能獨立在ERP建立多層BOM+執行版本變更",
          "3": "建立BOM維護SOP+有多件BOM建立+有ECN設計變更ERP執行案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B必備(ERP BOM建立步驟)｜L5A獨立建立多層BOM+執行版本變更｜L6A主導(BOM維護SOP建立)",
        "questions": "在鼎新ERP如何建立多層BOM?如何執行設計變更(ECN)並更新ERP BOM?"
      },
      {
        "category": "[V]  鼎新ERP系統操作  Kingdee ERP System",
        "code": "V4",
        "dimension": "工單領料與發料",
        "ability": "生產工單領料/發料作業\n(工單開立/領料申請/倉庫確認/實際消耗扣帳)",
        "levels": {
          "0": "無",
          "1": "了解工單領料流程",
          "2": "能執行工單開立+領料單填寫+追蹤實際領料",
          "3": "熟練操作生產工單全流程+有領料異常處理案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4A認知(工單領料流程)｜L4B必備(工單開立+領料單填寫追蹤)｜L5A主導(生產工單全流程熟練)",
        "questions": "生產工單發料流程如何操作?領料超出標準用量時如何在ERP處理?實際耗料如何回沖扣帳?"
      },
      {
        "category": "[V]  鼎新ERP系統操作  Kingdee ERP System",
        "code": "V5",
        "dimension": "請購採購作業",
        "ability": "請購單與採購申請作業\n(請購申請/核准流程/採購單建立/跟催到貨)",
        "levels": {
          "0": "無",
          "1": "了解請購採購流程",
          "2": "能獨立完成請購申請+追蹤採購進度+確認到貨",
          "3": "熟練請購採購全流程+有緊急採購處理+有採購異常解決案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4A認知(請購採購流程)｜L4B必備(獨立完成請購申請+到貨確認)｜L5A主導(緊急採購+異常解決)",
        "questions": "鼎新ERP如何發起請購單?請購核准後採購部如何建立採購單?如何追蹤採購進度?"
      },
      {
        "category": "[V]  鼎新ERP系統操作  Kingdee ERP System",
        "code": "V6",
        "dimension": "庫存與倉管作業",
        "ability": "庫存查詢與倉管作業\n(庫存查詢/調撥/盤點/呆料查詢)",
        "levels": {
          "0": "無",
          "1": "了解庫存查詢操作",
          "2": "能執行庫存查詢+調撥申請+支援盤點作業",
          "3": "熟練倉管全流程+有呆料分析+有庫存異常調查案例"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L4A認知(庫存查詢操作)｜L4B必備(庫存查詢+調撥申請+盤點)｜L5A主導(呆料分析+庫存異常調查)",
        "questions": "如何在鼎新ERP查詢特定品號的即時庫存?如何辦理部門間物料調撥?如何查詢呆料清單?"
      },
      {
        "category": "[V]  鼎新ERP系統操作  Kingdee ERP System",
        "code": "V7",
        "dimension": "電子簽核流程",
        "ability": "鼎新電子簽核(e-Approval)操作\n(簽核表單發起/審核/追蹤/歸檔)",
        "levels": {
          "0": "無",
          "1": "了解電子簽核流程",
          "2": "能獨立發起各類電子簽核表單+追蹤審核狀態",
          "3": "熟練電子簽核全流程+有協助設定簽核流程+有指導他人使用案例"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L3B起認知(電子簽核流程)｜L4A必備(獨立發起簽核表單+追蹤)｜L5A主導(協助設定簽核流程)",
        "questions": "鼎新電子簽核有哪些常用表單類型?如何發起一個設計變更的電子簽核?如何查詢簽核歷程?"
      },
      {
        "category": "[V]  鼎新ERP系統操作  Kingdee ERP System",
        "code": "V8",
        "dimension": "ERP報表與分析",
        "ability": "ERP報表產出與數據分析\n(生產進度報表/庫存報表/BOM成本展算)",
        "levels": {
          "0": "無",
          "1": "了解ERP報表功能",
          "2": "能從ERP產出所需報表+基本數據分析",
          "3": "能自定義ERP查詢報表+有BOM成本展算+有從ERP數據做決策分析案例"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L4A認知(ERP報表功能)｜L4B必備(從ERP產出所需報表)｜L5A主導(BOM成本展算+數據決策分析)",
        "questions": "如何從鼎新ERP展算一個產品的BOM成本?如何產出當前生產進度報表?"
      },
      {
        "category": "[W]  阿米巴損益核算能力  Amoeba Daily P&L Literacy",
        "code": "W1",
        "dimension": "阿米巴核算",
        "ability": "阿米巴時間附加值\n（時間當量）認識",
        "levels": {
          "0": "不知道時間附加值",
          "1": "知道公式=(銷售額-外部費用)÷工時",
          "2": "可計算日/月時間附加值並分析趨勢",
          "3": "可協助建立阿米巴核算規則+帶領小巴達成目標"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4A起認知(時間附加值公式)｜L5A必備(計算日/月時間附加值+分析趨勢)｜L6A主導(核算規則建立)",
        "questions": "時間附加值=(銷售額-外部費用)÷總工時；你上月時間附加值為何？如何改善？"
      },
      {
        "category": "[W]  阿米巴損益核算能力  Amoeba Daily P&L Literacy",
        "code": "W2",
        "dimension": "每日損益",
        "ability": "每日損益表填寫\n與異常分析",
        "levels": {
          "0": "無",
          "1": "可填寫每日損益表格",
          "2": "可分析損益異常並提出改善行動",
          "3": "可協助建立部門阿米巴核算SOP+有損益改善實績"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B必備(每日損益表填寫)｜L5A必備(分析損益異常+提出改善行動)｜L6A主導(阿米巴核算SOP建立)",
        "questions": "每日損益表中「製造費用」如何分攤？機構部門如何定義外部費用？"
      },
      {
        "category": "[W]  阿米巴損益核算能力  Amoeba Daily P&L Literacy",
        "code": "KPI1",
        "dimension": "績效管理",
        "ability": "個人月度KPI目標設定與追蹤\n(SMART原則/量化指標/評分週期/達成判定/釘釘追蹤)",
        "levels": {
          "0": "不知何為KPI",
          "1": "了解KPI概念，能填寫他人設定的KPI表單",
          "2": "能用SMART獨立設定≥3個量化KPI+每月追蹤差異分析+改善行動",
          "3": "為部門建立KPI體系+考核制度+釘釘自動追蹤的成功記錄"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4B必備(個人KPI填寫+月追蹤)｜L5A必備(獨立設定SMART量化KPI+差異分析+改善閉環)｜L6A主導(部門KPI體系+釘釘自動化追蹤)",
        "questions": "如何為機構工程師L4B設定月度KPI（請舉3個量化指標+目標值）？KPI週期如何設計（日追蹤/週Review/月考核）？差異分析後如何制定改善行動並在下月追蹤效果？"
      },
      {
        "category": "[W]  阿米巴損益核算能力  Amoeba Daily P&L Literacy",
        "code": "KPI2",
        "dimension": "績效管理",
        "ability": "月度KPI差異分析與改善行動\n(差異識別/五Why根因/改善計畫制定/效果追蹤/PDCA閉環)",
        "levels": {
          "0": "無",
          "1": "能識別KPI未達成，但無法分析根因",
          "2": "能進行五Why根因分析+制定SMART改善計畫+執行追蹤+下月效果確認",
          "3": "建立系統性差異分析框架（根因庫/改善知識庫）+有連續3個月KPI改善成功案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L5A必備(月度差異分析+PDCA改善閉環,≥2個改善案例)｜L6A主導(建立部門績效改善機制+改善知識庫+有效追蹤)",
        "questions": "月度KPI追蹤「設計變更ECN處理時效」平均5天（目標3天），差異2天。請進行五Why根因分析？制定改善行動計畫？如何在下月追蹤效果並確認關閉？"
      },
      {
        "category": "[W]  阿米巴損益核算能力  Amoeba Daily P&L Literacy",
        "code": "KPI3",
        "dimension": "績效管理",
        "ability": "季度績效考核制度執行\n(自評→主管評→績效面談→下季目標設定/建設性回饋/薪酬連動)",
        "levels": {
          "0": "無",
          "1": "能完成自評表填寫",
          "2": "能主持考核面談+建設性回饋+共同制定下季KPI目標+完整面談記錄",
          "3": "設計考核制度+有效推行+與季度獎金/薪酬調整掛鉤的成功案例+IATF16949符合"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L5A必備(主持季度面談+建設性回饋+下季目標共識)｜L6A主導(考核制度設計+推行+薪酬掛鉤+IATF16949符合)",
        "questions": "如何主持一場季度績效考核面談？員工自評4分（滿5），主管評3分，有分歧時如何引導讓員工認同並制定改善計畫？面談記錄需包含哪些要素？"
      },
      {
        "category": "[X]  敏捷專案管理  Agile Project Management",
        "code": "X1",
        "dimension": "Scrum應用",
        "ability": "Scrum/Sprint\n週期應用",
        "levels": {
          "0": "無",
          "1": "知道Sprint/Backlog/Daily Standup概念",
          "2": "可在設計專案中運用2週Sprint管理任務",
          "3": "可擔任Scrum Master或Product Owner主導Sprint"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4B認知(Sprint/Backlog/Standup概念)｜L5A必備(2週Sprint管理設計專案)｜L6A主導Scrum Master",
        "questions": "請說明如何用2週Sprint管理一個新品燈具的機構設計階段"
      },
      {
        "category": "[X]  敏捷專案管理  Agile Project Management",
        "code": "X2",
        "dimension": "看板管理",
        "ability": "Kanban看板\n任務管理",
        "levels": {
          "0": "無",
          "1": "知道看板欄位(待辦/進行/完成)",
          "2": "可建立設計任務看板並控制WIP上限",
          "3": "可優化流動效率+建立團隊Kanban規範"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L4A認知(看板欄位概念)｜L5A必備(建立設計任務看板+WIP上限控制)｜L6A主導(Kanban規範優化)",
        "questions": "如何用Kanban追蹤10件同時進行的機構工程圖進度？WIP上限如何設定？"
      },
      {
        "category": "[X]  敏捷專案管理  Agile Project Management",
        "code": "X3",
        "dimension": "敏捷回顧",
        "ability": "Sprint回顧會議\n(Retrospective)",
        "levels": {
          "0": "無",
          "1": "知道回顧會議目的",
          "2": "可主持回顧並產出具體行動事項",
          "3": "可持續推動流程改善+有可量化改善成果"
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L5A建議(回顧會議概念)｜L5B必備(主持回顧+產出行動事項)｜L6A主導(持續流程改善+量化成果)",
        "questions": "上一個Sprint哪件事做得好？哪件可改進？如何記錄並跟進行動？"
      },
      {
        "category": "[X]  敏捷專案管理  Agile Project Management",
        "code": "X4",
        "dimension": "風險整合",
        "ability": "敏捷風險管理\n與FMEA整合",
        "levels": {
          "0": "無",
          "1": "了解專案風險登錄概念",
          "2": "可建立風險矩陣+追蹤高風險項目",
          "3": "可整合FMEA風險與Sprint Backlog+有風險緩解成功案例"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L5A建議(專案風險登錄)｜L5B必備(風險矩陣+追蹤高風險)｜L6A主導(FMEA與敏捷風險整合)",
        "questions": "新品開發機構風險最高的3個議題是什麼？如何放入Sprint Backlog緩解？"
      },
      {
        "category": "[Y]  警示燈產品認識與物料編碼  Product & Material Coding Knowledge",
        "code": "Y1",
        "dimension": "警示燈認識",
        "ability": "警示燈產品類型認識\n(頂燈/側閃/警示燈/警示桿/交通棒)",
        "levels": {
          "0": "無",
          "1": "能區分頂燈/側閃/警告燈",
          "2": "可說明ECE R65/SAE各類型差異",
          "3": "可協助新人建立產品知識體系\n► 對應職等: L3A起建立，L4A必備"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L3A起建立(產品類型區分)｜L4A必備(ECE R65/SAE各類型差異說明)｜L5A主導(產品知識體系建立)",
        "questions": "請說明Class 1/Class 2在光強度上的差異；Whelen/SoundOff/Federal Signal各代表產品為何？"
      },
      {
        "category": "[Y]  警示燈產品認識與物料編碼  Product & Material Coding Knowledge",
        "code": "Y2",
        "dimension": "產品編碼",
        "ability": "騏宏產品編碼規則\n(品號規則/OEM-ODM-OBM區分/料號申請)",
        "levels": {
          "0": "不知道",
          "1": "知道料號規則",
          "2": "可正確建立新品料號",
          "3": "可維護/更新編碼規則\n► 對應職等: L3B必備，L4A熟練"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L3B必備(料號規則認知)｜L4A熟練(正確建立新品料號)｜L5A主導(維護/更新編碼規則體系)",
        "questions": "新開發產品如何申請料號？OEM/ODM/OBM機種料號如何區分？"
      },
      {
        "category": "[Y]  警示燈產品認識與物料編碼  Product & Material Coding Knowledge",
        "code": "Y3",
        "dimension": "物料認識",
        "ability": "LED物料選型與認識\n(Cree/Nichia/Osram/Seoul選型)",
        "levels": {
          "0": "無",
          "1": "知道主要LED廠(Cree/Nichia/Osram)",
          "2": "可依光學/熱/法規需求選型",
          "3": "建立LED物料評選規範\n► 對應職等: L4A基礎，L5A熟練"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4A基礎認知(主要LED廠)｜L5A熟練(依光學/熱/法規需求選型)｜L6A主導(LED物料評選規範建立)",
        "questions": "如何選擇符合ECE R65琥珀光色座標的LED？Tj與壽命關係？"
      },
      {
        "category": "[Y]  警示燈產品認識與物料編碼  Product & Material Coding Knowledge",
        "code": "Y4",
        "dimension": "物料認識",
        "ability": "PCB物料與PCBA認識\n(SMT流程/BOM確認/PCBA機構整合)",
        "levels": {
          "0": "無",
          "1": "知道SMT流程",
          "2": "可讀懂BOM並確認機構相關料件",
          "3": "可與硬體工程師協同優化佈局\n► 對應職等: L4A建議"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4A建議(SMT流程認知)｜L4B必備(讀懂BOM確認機構相關料件)｜L5A主導(與硬體協同優化佈局)",
        "questions": "PCBA灌膠前需進行哪些清潔處理？燈具防潮烤板條件？"
      },
      {
        "category": "[Y]  警示燈產品認識與物料編碼  Product & Material Coding Knowledge",
        "code": "Y5",
        "dimension": "物料認識",
        "ability": "膠料與密封材料認識\n(PU/環氧/矽膠/丁基膠/密封膠帶選型)",
        "levels": {
          "0": "無",
          "1": "知道PU/環氧/矽膠差異",
          "2": "可依使用溫度/硬度/防水需求選型",
          "3": "建立膠料評選SOP\n► 對應職等: L4B必備"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4B必備(PU/環氧/矽膠差異)｜L5A熟練(依溫度/硬度/防水需求選型)｜L6A主導(膠料評選SOP建立)",
        "questions": "軟膠/硬膠各適用哪些場景？A/B劑配比偏差對固化的影響？如何選擇適合工作溫度的密封膠？"
      },
      {
        "category": "[Y]  警示燈產品認識與物料編碼  Product & Material Coding Knowledge",
        "code": "Y6",
        "dimension": "物料認識",
        "ability": "鋁材與結構材料認識\n(AL6063 vs ADC12/陽極/鋁擠選型)",
        "levels": {
          "0": "無",
          "1": "知道AL6063/ADC12差異",
          "2": "可依機械性能/製程需求選型",
          "3": "建立材料認識培訓教材\n► 對應職等: L4A建議"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4A建議(AL6063/ADC12差異)｜L4B熟練(依機械性能/製程需求選型)｜L5B主導(材料認識培訓教材建立)",
        "questions": "鋁擠型AL6063-T5與ADC12壓鑄鋁強度差異？陽極處理厚度如何影響防腐性？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z1",
        "dimension": "企業基本能力",
        "ability": "ISO/IATF文件讀寫能力\n(程序書/工作指導書WI/SOP撰寫)",
        "levels": {
          "0": "無",
          "1": "可閱讀程序書",
          "2": "可獨立撰寫WI/SOP",
          "3": "可建立文件體系架構\n► 對應職等: L3B建立，L4A必備"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L3B建立認知(程序書閱讀)｜L4A必備(獨立撰寫WI/SOP,品質符合)｜L5A主導(文件體系架構建立)",
        "questions": "請說明工作指導書(WI)與程序書(Procedure)的差異"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z2",
        "dimension": "企業基本能力",
        "ability": "8D問題解決法(D1~D8)\n(客訴回覆/根因分析/防再發)",
        "levels": {
          "0": "不了解",
          "1": "知道8D步驟",
          "2": "可獨立完成8D報告",
          "3": "可指導他人並建立問題案例庫\n► 對應職等: L4A必備"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L4A必備(8D步驟認知)｜L5A獨立完成8D報告(返工率≦5%)｜L6A主導(指導他人+問題案例庫建立)",
        "questions": "以一次客訴案件說明8D各步驟如何執行"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z3",
        "dimension": "企業基本能力",
        "ability": "跨部門溝通與會議主持\n(技術協調會議/衝突解決/決策推進)",
        "levels": {
          "0": "無",
          "1": "可參與跨部門會議",
          "2": "可主持技術協調會議",
          "3": "可建立跨部門協作機制\n► 對應職等: L4B建議，L5A必備"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L4B建議(跨部門會議參與)｜L5A必備(主持技術協調會議,Amoeba協作)｜L6A主導(跨部門協作機制建立)",
        "questions": "說明一次你主動協調解決跨部門衝突的案例"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z4",
        "dimension": "企業基本能力",
        "ability": "Excel/報表分析能力\n(VLOOKUP/樞紐/Power Query/工程分析表)",
        "levels": {
          "0": "無",
          "1": "基礎Excel",
          "2": "可建立工程分析表單/VLOOKUP",
          "3": "Power Query/樞紐/自動化報表\n► 對應職等: L4A建議"
        },
        "importance": 4,
        "weight": "4",
        "target_level": "L4A建議(基礎Excel)｜L4B必備(工程分析表單/VLOOKUP建立)｜L5A主導(Power Query+自動化報表)",
        "questions": "如何用Excel追蹤量產問題改善進度？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z5",
        "dimension": "企業基本能力",
        "ability": "ERP系統操作（鼎新）\n(查詢/工單/BOM/請購基礎)",
        "levels": {
          "0": "無",
          "1": "基礎查詢",
          "2": "可操作工單/BOM/請購",
          "3": "可協助部門ERP教育訓練\n► 對應職等: L4A建議"
        },
        "importance": 4,
        "weight": "4",
        "target_level": "L4A建議(ERP基礎查詢)｜L4B必備(工單/BOM/請購操作)｜L5A主導(協助部門ERP教育訓練)",
        "questions": "如何在ERP建立新品BOM？如何查詢LRP缺料狀況？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "a1",
        "dimension": "IPX9K試驗機",
        "ability": "IPX9K高壓蒸氣試驗機\n(ISO 20653 / IEC 60529)",
        "levels": {
          "0": "從未使用",
          "1": "知道80°C/80bar但未操作",
          "2": "獨立設定4角度水溫壓力",
          "3": "熟練操作+失效判讀+建立測試SOP"
        },
        "importance": 5,
        "weight": "WIQA0217/0246",
        "target_level": "L4A認知(IPX9K條件知識)｜L5A必備(獨立操作4角度設定,返工率≦5%)｜L5B-L6A主導(測試SOP建立)",
        "questions": "設定4角度各15秒;如何判斷密封失效位置?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "a2",
        "dimension": "IP67測試槽",
        "ability": "IP67靜水壓防水測試槽\n(IEC 60529 1m/30min)",
        "levels": {
          "0": "從未使用",
          "1": "知道1m/30min測試條件",
          "2": "獨立操作含水深精度控制",
          "3": "熟練操作+複合失效分析"
        },
        "importance": 5,
        "weight": "WIQA0217",
        "target_level": "L4A認知(IP67測試條件)｜L5A必備(獨立操作含水深精度控制)｜L5B-L6A主導(複合失效分析規範)",
        "questions": "確認水深精度?測試後如何快速定位滲水位置?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "a3",
        "dimension": "差壓式氣密機",
        "ability": "差壓式氣密機(量產線)\n洩漏量/測試壓力/節拍設定",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道充填/穩壓步驟",
          "2": "設定洩漏量上下限建立量產規範",
          "3": "MSA分析整合+誤報率<0.1%"
        },
        "importance": 5,
        "weight": "騏宏量產線",
        "target_level": "L4B必備(差壓氣密機基礎操作)｜L5A主導(設定洩漏量上下限建立量產規範)｜L6A主導(MSA整合)",
        "questions": "洩漏量cc/min vs Pa/s如何換算?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "a4",
        "dimension": "壓力桶抽真空",
        "ability": "壓力桶(灌膠前抽真空/加壓)",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道抽真空目的",
          "2": "設定真空度/加壓壓力/保壓時間",
          "3": "結合灌膠製程優化建立SOP"
        },
        "importance": 4,
        "weight": "騏宏生產設備",
        "target_level": "L4A認知(壓力桶操作)｜L5A必備(設定真空度加壓保壓)｜L5B-L6A主導(灌膠製程整合SOP建立)",
        "questions": "灌膠前抽真空目的?真空度-0.08MPa設定依據?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "a5",
        "dimension": "耐水試驗機",
        "ability": "耐水試驗機(IPX1~IPX8)\n各等級防水噴淋/浸水",
        "levels": {
          "0": "從未使用",
          "1": "知道IPX1~8各等級差異",
          "2": "獨立操作設定各等級條件",
          "3": "建立防水等級測試矩陣"
        },
        "importance": 4,
        "weight": "WIQA0235",
        "target_level": "L4A認知(IPX1~8等級差異)｜L5A必備(獨立操作各等級條件)｜L5B-L6A主導(防水測試矩陣建立)",
        "questions": "IPX4(濺水) vs IPX6(強力噴水)設備設定差異?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "b1",
        "dimension": "光學配光機",
        "ability": "光學配光機(Goniophotometer)\nECE R65/SAE配光曲線量測",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作需指導",
          "2": "熟練量測+解讀配光曲線+比對法規",
          "3": "建立配光量測SOP+允收標準"
        },
        "importance": 5,
        "weight": "騏宏實驗室",
        "target_level": "L4B必備(配光機基礎操作)｜L5A熟練(量測+解讀+比對法規)｜L5B-L6A主導(配光量測SOP+允收標準建立)",
        "questions": "如何設定水平/垂直角度掃描範圍?配光不符ECE R65如何改善?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "b2",
        "dimension": "積分球SLM-40T",
        "ability": "積分球(大/小型)\n光通量/色溫/演色性量測",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道原理",
          "2": "熟練量測光通量/色座標撰寫報告",
          "3": "建立積分球量測SOP+LED封裝驗收標準"
        },
        "importance": 5,
        "weight": "WIQA0212/0243",
        "target_level": "L4B必備(積分球量測原理)｜L5A熟練(光通量/色座標量測撰寫報告)｜L6A主導(積分球量測SOP建立)",
        "questions": "積分球量測光通量工作原理?自吸收修正如何處理?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "b3",
        "dimension": "CL-200照度計",
        "ability": "CL-200照度計\n照度/色座標/相關色溫",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作",
          "2": "熟練量測+法規座標比對",
          "3": "建立現場快速量測規範"
        },
        "importance": 4,
        "weight": "WIQA0229",
        "target_level": "L4A認知(CL-200照度計)｜L5A熟練(量測+法規座標比對)｜L5B-L6A主導(現場快速量測規範建立)",
        "questions": "amber色座標CIE 1931 x/y要求範圍?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "b4",
        "dimension": "閃頻特性量測\n(Flash Rate)",
        "ability": "閃頻特性量測\nSAE J595/ECE R65閃頻率+ON時間%\n耐久閃頻衰退測試200h",
        "levels": {
          "0": "從未操作",
          "1": "了解閃頻Hz範圍及ON time%要求（ECE/SAE差異）",
          "2": "熟練操作閃頻計量測+比對法規允收範圍+撰寫報告",
          "3": "建立閃頻量測SOP+200h耐久閃頻衰退允收標準"
        },
        "importance": 5,
        "weight": "FMRD0240\nWIQA0229",
        "target_level": "L4A必備(閃頻Hz/ON-time法規要求)｜L5A熟練(量測+比對法規+報告)｜L6A主導(耐久閃頻SOP建立)",
        "questions": "ECE R65 Class1閃頻範圍？SAE J595 1~4Hz ON-time如何量測？200h耐久後閃頻變異≤20%如何驗證？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c1",
        "dimension": "鹽霧試驗機",
        "ability": "鹽霧試驗機(NSS/ACSS)\nASTM B117/ISO 9227",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道NaCl濃度/溫度/pH設定",
          "2": "獨立操作+腐蝕等級評估Rating",
          "3": "建立測試規範+失效根因分析+材料改善建議"
        },
        "importance": 5,
        "weight": "WIQA0234",
        "target_level": "L4B必備(NSS試驗基礎操作)｜L5A熟練(腐蝕等級評估Rating)｜L5B-L6A主導(鹽霧測試規範建立)",
        "questions": "NSS試驗NaCl濃度?腐蝕後如何評估等級?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c2",
        "dimension": "振動機EV220",
        "ability": "振動試驗機(EV220)\nISO 16750/SAE J1211",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道掃頻範圍",
          "2": "獨立操作正弦掃頻+隨機振動找共振點",
          "3": "建立測試規範+共振避讓設計建議+疲勞根因分析"
        },
        "importance": 5,
        "weight": "WIQA0220",
        "target_level": "L4B必備(振動機基礎操作+掃頻)｜L5A熟練(正弦/隨機振動+共振點識別)｜L6A主導(振動規範建立)",
        "questions": "如何設定掃頻速率?找到共振點後如何評估結構風險?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c3",
        "dimension": "機械衝擊試驗機",
        "ability": "機械衝擊試驗機\nIEC 60068-2-27半正弦波",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道半正弦波設定",
          "2": "獨立操作設定峰值加速度/脈衝寬度",
          "3": "建立衝擊測試規範+結構破壞根因分析"
        },
        "importance": 5,
        "weight": "WIQA0216",
        "target_level": "L4B必備(衝擊試驗基礎操作)｜L5A熟練(設定峰值加速度/脈衝寬度)｜L6A主導(衝擊測試規範建立)",
        "questions": "半正弦波設定原理?衝擊後如何評估結構完整性?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c4",
        "dimension": "QUV UV老化",
        "ability": "QUV試驗機(UV加速老化)\nSAE J2020/ISO 4892",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道UVA/UVB燈管差異",
          "2": "獨立操作設定輻照度/溫度/濕潤循環",
          "3": "老化後塑膠件劣化評估+建立允收標準"
        },
        "importance": 4,
        "weight": "WIQA0218",
        "target_level": "L4A認知(QUV燈管差異)｜L5A熟練(設定輻照度/溫度/濕潤循環)｜L5B-L6A主導(UV老化驗證規範)",
        "questions": "UVA-340 vs UVB-313選用差異?老化後如何評估PC燈罩劣化?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c5",
        "dimension": "冷熱衝擊試驗機",
        "ability": "冷熱衝擊試驗機\nIEC 60068-2-14(-40~+85°C)",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道轉換時間設定",
          "2": "獨立操作設定溫度/循環次數",
          "3": "與溫濕循環差異分析+PCB焊點疲勞預測"
        },
        "importance": 4,
        "weight": "WIQA0245",
        "target_level": "L4A認知(冷熱衝擊條件)｜L5A熟練(設定溫度/循環次數/轉換時間)｜L5B-L6A主導(冷熱衝擊規範)",
        "questions": "轉換時間≤30s的目的?冷熱衝擊後如何判斷密封件劣化?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c6",
        "dimension": "防塵試驗機",
        "ability": "防塵試驗機(IP6X)\nIEC 60529滑石粉塵",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道滑石粉粒徑要求",
          "2": "獨立操作設定旋轉/靜止循環",
          "3": "建立防塵測試SOP+改善機構密封設計"
        },
        "importance": 4,
        "weight": "WIQA0215",
        "target_level": "L4A認知(IP6X防塵條件)｜L5A熟練(設定旋轉/靜止循環)｜L5B-L6A主導(防塵測試SOP建立)",
        "questions": "IP6X滑石粉粒徑要求?如何判斷粉塵侵入位置?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c7",
        "dimension": "碎石試驗機",
        "ability": "碎石試驗機(SAE J400)\n道路碎石衝擊外觀",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作",
          "2": "獨立操作設定衝擊角度/次數",
          "3": "塗層/材料改善建議+建立允收標準"
        },
        "importance": 4,
        "weight": "WIQA0221",
        "target_level": "L4A認知(碎石試驗基礎)｜L5A熟練(設定衝擊角度/次數)｜L5B-L6A主導(碎石允收標準建立)",
        "questions": "碎石粒徑規格?PC燈罩碎石後如何評估裂紋等級?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c8",
        "dimension": "Q-SUN試驗機",
        "ability": "Q-SUN Xe-3試驗機\n(全光譜氙燈老化/ISO 4892-2/SAE J2527)",
        "levels": {
          "0": "從未使用",
          "1": "了解Q-SUN與QUV的差異(氙燈 vs UV燈)",
          "2": "能操作Q-SUN設定光照強度/溫度/噴水循環",
          "3": "建立Q-SUN測試規範+有塑膠件/塗裝老化完整驗證案例"
        },
        "importance": 5,
        "weight": "WIQA0218關聯",
        "target_level": "L4B認知(Q-SUN與QUV差異)｜L5A熟練(操作設定光照強度/溫度/噴水)｜L6A主導(Q-SUN規範建立)",
        "questions": "Q-SUN vs QUV各適用何種老化驗證情境?氙燈過濾片(窗玻璃型 vs 日光型)如何選擇?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c9",
        "dimension": "高溫試驗箱",
        "ability": "高低溫試驗箱/高溫老化試驗\n(IEC 60068-2-2/SAE J1455高溫耐久)",
        "levels": {
          "0": "從未使用",
          "1": "了解高溫試驗目的與條件設定",
          "2": "能操作設定高溫試驗條件+判讀老化失效",
          "3": "建立高溫耐久試驗SOP+有高溫失效根因分析+材料改善案例"
        },
        "importance": 5,
        "weight": "騏宏選配",
        "target_level": "L4B認知(高溫試驗條件)｜L5A熟練(操作設定+老化失效判讀)｜L5B-L6A主導(高溫耐久規範建立)",
        "questions": "LED警示燈高溫試驗條件如何設定?+85°C/1000h試驗後如何評估密封件與塑膠件劣化?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c10",
        "dimension": "耐化學測試",
        "ability": "耐化學腐蝕測試\n(IEC 60068-2-43/WIQA1202耐化學試驗)",
        "levels": {
          "0": "從未使用",
          "1": "了解耐化學測試目的與常用化學品清單",
          "2": "能規劃耐化學測試計畫+執行浸泡/塗抹+外觀功能評估",
          "3": "建立耐化學測試SOP+有多種化學品驗證+有材料選型改善案例"
        },
        "importance": 5,
        "weight": "WIQA1202",
        "target_level": "L4B認知(耐化學品清單)｜L5A熟練(規劃測試計畫+執行+評估)｜L6A主導(耐化學測試SOP建立)",
        "questions": "警示燈常接觸的化學品有哪些(清潔劑/油脂/蓄電池酸液)?PC材料耐化學性弱點在哪?如何評估?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c11",
        "dimension": "防水膠腐蝕測試",
        "ability": "防水膠/密封膠類相容性與腐蝕測試\n(PU灌膠/矽膠/丁基膠/密封膠帶相容性驗證)",
        "levels": {
          "0": "從未使用",
          "1": "了解密封膠與基材的相容性概念",
          "2": "能規劃密封膠相容性測試+腐蝕評估+老化後黏著力測試",
          "3": "建立防水膠驗證SOP+有多種密封膠系統完整驗證案例"
        },
        "importance": 5,
        "weight": "騏宏實驗室",
        "target_level": "L5A必備(密封膠相容性認知)｜L5B熟練(相容性測試+腐蝕評估)｜L6A主導(防水膠驗證SOP建立)",
        "questions": "PU灌膠與鋁合金/PC/FR4的相容性如何驗證?老化後剝離強度如何測試?如何判斷是否合格?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c12",
        "dimension": "原物料破壞測試",
        "ability": "原物料破壞性測試\n(拉力/硬度/衝擊/彎曲強度/熱變形溫度)",
        "levels": {
          "0": "從未使用",
          "1": "了解常見原物料機械性質測試方法",
          "2": "能規劃原物料破壞測試計畫+執行測試+評估選材",
          "3": "建立原物料驗證測試矩陣+有多種原物料比較選型案例"
        },
        "importance": 5,
        "weight": "WIQA0231關聯",
        "target_level": "L4B認知(原物料機械測試方法)｜L5A熟練(規劃執行破壞測試+選材評估)｜L6A主導(驗證矩陣建立)",
        "questions": "如何測試新塑膠料的拉伸強度/彎曲模量/缺口衝擊強度?熱變形溫度(HDT)測試目的?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c13",
        "dimension": "半成品破壞測試",
        "ability": "半成品破壞性測試\n(PCBA拉力/燈板抗拉/密封件壓縮永久變形)",
        "levels": {
          "0": "從未使用",
          "1": "了解半成品破壞測試的目的",
          "2": "能規劃半成品破壞測試計畫+執行測試+分析失效位置",
          "3": "建立半成品測試SOP+有從失效位置回饋設計改善案例"
        },
        "importance": 5,
        "weight": "騏宏實驗室",
        "target_level": "L5A必備(半成品破壞測試認知)｜L5B熟練(規劃執行+分析失效位置)｜L6A主導(半成品測試SOP)",
        "questions": "LED燈板焊點拉力測試如何設定?密封條壓縮永久變形試驗目的?如何從破壞位置判斷是設計還是製程問題?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c14",
        "dimension": "成品破壞測試",
        "ability": "成品最終破壞性測試\n(整燈拉力/扭力/跌落破壞/衝擊破壞/壓壞)",
        "levels": {
          "0": "從未使用",
          "1": "了解成品破壞測試的目的",
          "2": "能規劃成品破壞測試計畫+執行測試+分析失效模式",
          "3": "建立成品破壞測試SOP+有從破壞分析到設計強化的完整案例"
        },
        "importance": 5,
        "weight": "騏宏實驗室",
        "target_level": "L5A必備(成品破壞測試認知)｜L5B熟練(規劃執行+分析失效模式)｜L6A主導(成品破壞測試SOP)",
        "questions": "整燈安裝螺絲扭力破壞測試如何設計?跌落破壞測試與IK衝擊等級測試的差異?如何用破壞測試決定安全係數?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c15",
        "dimension": "霧氣消散試驗\n(Fog Dispersion)",
        "ability": "霧氣消散試驗\n(三菱車燈驗證法 / FMRD0240)\n溫濕箱23°C/80%RH + 熱風槍70°C",
        "levels": {
          "0": "從未操作",
          "1": "了解試驗兩步驟程序（熱風槍法+冷水驟冷法）",
          "2": "獨立操作設定溫濕箱條件+判讀霧氣消散結果（對照表）",
          "3": "從霧氣結果回饋密封結構/排氣孔設計改善+建立SOP"
        },
        "importance": 4,
        "weight": "FMRD0240\n三菱法",
        "target_level": "L4B認知(霧氣試驗目的)｜L5A必備(獨立操作兩步驟+結果判讀)｜L5B-L6A主導(密封排氣設計改善SOP)",
        "questions": "霧氣試驗Step1與Step2差異？如何從試驗結果判斷密封設計問題？排氣孔(breather)設計如何影響霧氣？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c16",
        "dimension": "氣壓過壓試驗\n(Air Overpressure)",
        "ability": "氣壓過壓密封試驗\n(200mbar/5sec水下氣泡法)\n(FMRD0240 TWL規範)",
        "levels": {
          "0": "從未操作",
          "1": "了解200mbar過壓水下氣泡判斷原理",
          "2": "獨立操作：施加200mbar→水下觀察5秒無氣泡",
          "3": "從氣泡位置定位密封失效點+改善密封設計+建立SOP"
        },
        "importance": 4,
        "weight": "FMRD0240\nTWL規範",
        "target_level": "L4B認知(氣壓過壓原理)｜L5A必備(獨立操作+失效定位,品質符合)｜L6A主導(氣泡失效分析SOP建立)",
        "questions": "氣壓過壓試驗與差壓氣密機的差異？200mbar如何設定？水下冒泡位置如何指引密封結構改善？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "d1",
        "dimension": "EMI CISPR25",
        "ability": "EMI CISPR 25實驗室\n傳導/輻射 機構屏蔽設計輔助",
        "levels": {
          "0": "從未使用",
          "1": "見過測試環境知道傳導/輻射概念",
          "2": "可配合硬體設計機構屏蔽方案",
          "3": "獨立分析機構屏蔽路徑主導EMC設計改善"
        },
        "importance": 4,
        "weight": "WIQA0219",
        "target_level": "L5A認知(EMI傳導/輻射概念)｜L5B熟練(配合硬體設計機構屏蔽方案)｜L6A主導(EMC路徑分析)",
        "questions": "機構接縫位置對EMI輻射有何影響?如何設計屏蔽結構?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "d2",
        "dimension": "BCI大電流注入",
        "ability": "BCI大電流注入試驗機\nISO 11452-4",
        "levels": {
          "0": "從未使用",
          "1": "基礎了解BCI測試原理",
          "2": "可操作設定測試等級",
          "3": "可分析機構接地路徑對BCI結果的影響"
        },
        "importance": 3,
        "weight": "WIQA0224",
        "target_level": "L5A認知(BCI測試原理)｜L5B加分(操作設定測試等級)｜L6A主導(機構接地路徑影響分析)",
        "questions": "BCI Level 1~5各對應何種車型?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "d3",
        "dimension": "ESD靜電模擬器",
        "ability": "ESD靜電放電模擬器\nIEC 61000-4-2/ISO 10605",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道接觸/空氣放電差異",
          "2": "獨立操作可評估外殼設計對ESD路徑影響",
          "3": "機構接地路徑設計優化建立ESD防護設計指引"
        },
        "importance": 4,
        "weight": "WIQA0241",
        "target_level": "L4B認知(ESD接觸/空氣放電差異)｜L5A熟練(操作評估外殼設計路徑)｜L6A主導(ESD防護設計指引)",
        "questions": "接觸放電 vs空氣放電差異?機構外殼如何設計確保ESD洩放?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "d4",
        "dimension": "ISO 7637-2\n瞬態傳導試驗",
        "ability": "ISO 7637-2 車載瞬態傳導免疫試驗\nPulse 1/2a/2b/3a/3b認知\n(機構設計介面支援)",
        "levels": {
          "0": "從未接觸",
          "1": "知道ISO 7637-2 Pulse類型與FSC等級意義",
          "2": "了解各Pulse對機構連接器/線材走向的設計影響",
          "3": "主導機構設計修改以通過Pulse試驗+有改善案例"
        },
        "importance": 3,
        "weight": "FMRD0240\nWIQA0219",
        "target_level": "L5A認知(Pulse類型與FSC概念)｜L5B了解(機構設計介面影響)｜L6A主導(機構線材走向改善)",
        "questions": "Pulse 1/2a/3a分別模擬什麼車輛情境？連接器位置如何影響傳導免疫？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "e1",
        "dimension": "2.5D影像測量儀",
        "ability": "2.5D影像測量儀\n非接觸二維輪廓/位置量測",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作需指導設定放大倍率",
          "2": "熟練量測LED位置度/孔距/輪廓公差輸出報告",
          "3": "建立量測規範+指導品管人員操作"
        },
        "importance": 5,
        "weight": "WIQA0203",
        "target_level": "L4B必備(2.5D影像測量基礎)｜L5A熟練(量測LED位置度/孔距+報告)｜L6A主導(量測規範建立)",
        "questions": "如何量測LED晶片位置公差確保光軸準確?數據如何回饋機構設計?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "e2",
        "dimension": "3D掃描量測儀",
        "ability": "3D光學掃描量測儀\n(GOM/Creaform全尺寸GD&T量測)",
        "levels": {
          "0": "從未使用",
          "1": "了解3D掃描原理看過結果報告",
          "2": "能操作3D掃描+與CAD模型比對+分析偏差",
          "3": "建立3D掃描量測SOP+有複雜曲面尺寸全檢案例"
        },
        "importance": 5,
        "weight": "騏宏選配",
        "target_level": "L5A認知(3D掃描原理)｜L5B熟練(操作3D掃描+CAD比對分析)｜L6A主導(3D掃描量測SOP建立)",
        "questions": "如何用3D掃描量測鋁壓鑄件全尺寸偏差?點雲數據如何與SolidWorks比對?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "e3",
        "dimension": "翹曲量測",
        "ability": "翹曲/平面度量測\n(CMM/光學掃描/翹曲專用治具)",
        "levels": {
          "0": "從未使用",
          "1": "了解翹曲量測方法",
          "2": "能使用工具量測塑膠件/PCB翹曲量",
          "3": "建立翹曲量測SOP+有翹曲改善設計案例"
        },
        "importance": 5,
        "weight": "騏宏選配",
        "target_level": "L5A認知(翹曲量測方法)｜L5B熟練(量測塑膠件/PCB翹曲量)｜L6A主導(翹曲量測SOP+改善指引)",
        "questions": "如何量測PA66GF射出件的翹曲量?翹曲超標時如何從設計/材料/製程三方面改善?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "e4",
        "dimension": "CMM三次元量測機",
        "ability": "CMM三次元量測機\n(精密尺寸/GD&T全項量測)",
        "levels": {
          "0": "從未使用",
          "1": "了解CMM量測原理",
          "2": "能編寫CMM量測程式+執行量測+報告分析",
          "3": "建立CMM量測SOP+有複雜件CMM量測程式案例"
        },
        "importance": 5,
        "weight": "騏宏選配",
        "target_level": "L5A認知(CMM量測原理)｜L5B熟練(CMM量測程式+執行+報告)｜L6A主導(CMM量測SOP建立)",
        "questions": "CMM量測鋁壓鑄件時如何設定基準(Datum)?GD&T位置度如何量測與判斷?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "e5",
        "dimension": "游標卡尺+分厘卡",
        "ability": "游標卡尺+外徑分厘卡\n基礎精密量具",
        "levels": {
          "0": "不熟悉",
          "1": "基礎使用",
          "2": "熟練+了解誤差來源(讀值差/溫差/力量)",
          "3": "量具校驗SOP制定+指導量產人員"
        },
        "importance": 5,
        "weight": "WIQA0204/0202",
        "target_level": "L3B必備(卡尺基礎使用)｜L4A熟練(誤差來源了解,品質符合)｜L5A主導(量具校驗SOP+指導他人)",
        "questions": "數字卡尺 vs指針卡尺誤差差異?如何避免力量誤差?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "e6",
        "dimension": "扭力計+起子校驗",
        "ability": "扭力計+扭力起子校驗器\n螺絲扭力驗證",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作",
          "2": "設定量產扭力規格+監控偏差",
          "3": "扭力與密封力關係分析+建立扭力管制規範"
        },
        "importance": 5,
        "weight": "WIQA0206",
        "target_level": "L4B必備(扭力計基礎操作)｜L5A熟練(設定量產扭力規格+監控)｜L6A主導(扭力管制規範建立)",
        "questions": "IP67防水螺絲扭力規格如何設定確保密封不破壞?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "e7",
        "dimension": "塊規+塞規",
        "ability": "塊規+塞規(Go/No-Go)\n孔徑/間隙基準量測",
        "levels": {
          "0": "從未使用",
          "1": "基礎使用",
          "2": "熟練Go/No-Go判斷了解公差帶對應",
          "3": "量具選用計算+校驗週期管理"
        },
        "importance": 4,
        "weight": "WIQA0201/0205",
        "target_level": "L4A認知(塊規/塞規基礎使用)｜L5A熟練(Go/No-Go判斷公差帶)｜L6A主導(量具選用+校驗週期管理)",
        "questions": "Go/No-Go塞規如何選用?公差帶H7/h6如何對應量具精度?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "f1",
        "dimension": "X-ray SMT/灌膠",
        "ability": "X-ray SMT/灌膠氣泡檢測\n焊點品質/Void率分析",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作可判讀X-ray影像",
          "2": "熟練操作建立氣泡Void率允收標準",
          "3": "X-ray+失效分析整合+改善設計回饋"
        },
        "importance": 4,
        "weight": "WIQA0223",
        "target_level": "L4B認知(X-ray影像判讀)｜L5A熟練(操作建立氣泡Void率允收標準)｜L6A主導(X-ray+失效分析整合)",
        "questions": "灌膠後X-ray如何確認無氣泡?Void率多少以下算合格(IPC-7711)?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "f2",
        "dimension": "黏度計RION VT-06",
        "ability": "黏度計(RION VT-06)\n灌膠用PU/環氧/矽膠黏度管制",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道量測黏度目的",
          "2": "熟練操作建立灌膠前黏度管制規範",
          "3": "黏度偏差根因分析+製程改善建議"
        },
        "importance": 5,
        "weight": "WIQA0233",
        "target_level": "L4B必備(黏度計操作+目的)｜L5A熟練(建立灌膠前黏度管制規範)｜L6A主導(黏度偏差根因分析規範)",
        "questions": "PU灌膠黏度建議範圍(cP)?黏度偏高/偏低對灌膠品質影響?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "f3",
        "dimension": "FLIR熱像儀E86",
        "ability": "FLIR E86熱像儀\nLED散熱/密封失效熱成像",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作可拍攝熱像圖",
          "2": "熟練操作分析LED模組散熱分布",
          "3": "熱像分析+設計改善建議建立熱測試規範"
        },
        "importance": 4,
        "weight": "騏宏設備",
        "target_level": "L4B認知(熱像儀操作)｜L5A熟練(分析LED模組散熱分布)｜L6A主導(熱測試規範+設計改善指引建立)",
        "questions": "如何用熱像儀確認LED模組散熱均勻性?熱點溫度上限設定依據?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "f4",
        "dimension": "應力偏光儀",
        "ability": "應力偏光儀\n透明塑膠件殘留應力量測",
        "levels": {
          "0": "從未使用",
          "1": "了解殘留應力對塑膠件的影響",
          "2": "能操作應力偏光儀判斷殘留應力等級",
          "3": "有殘留應力超標改善(模具溫度/保壓條件/退火)案例"
        },
        "importance": 3,
        "weight": "騏宏選配",
        "target_level": "L5A認知(殘留應力對塑膠影響)｜L5B熟練(應力偏光儀操作判斷)｜L6A主導(殘留應力改善規範建立)",
        "questions": "PC燈罩殘留應力如何影響外觀及強度?如何改善?調整模溫vs保壓哪個效果好?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "f5",
        "dimension": "閃爍/均勻性/\n對稱性目視評估",
        "ability": "閃爍(Flicker)/均勻性(Uniformity)/\n對稱性(Symmetry) 目視功能驗證\n(FMRD0240 TWL規範)",
        "levels": {
          "0": "從未操作",
          "1": "了解閃爍/均勻性/對稱性的判斷標準",
          "2": "能依規範執行6分鐘ON/1分鐘OFF 10循環測試並判讀",
          "3": "建立目視驗收SOP+訓練量產人員+與法規閃頻要求連結"
        },
        "importance": 4,
        "weight": "FMRD0240\n(TWL規範)",
        "target_level": "L4A認知(閃爍/均勻性定義)｜L5A必備(執行10循環目視判讀,準時率100%)｜L6A主導(目視驗收SOP建立)",
        "questions": "何謂「noticeable flicker」？如何用目視判斷均勻性不合格？對稱性左右偏差多少須改善？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "g1",
        "dimension": "回焊爐+爐溫曲線",
        "ability": "回焊爐(氮氣Reflow Oven)\n機構耐熱設計限制了解",
        "levels": {
          "0": "不了解",
          "1": "知道回焊爐各溫區概念了解峰溫",
          "2": "了解爐溫曲線與燈具機構耐熱設計的關係",
          "3": "可協助確認機構件耐熱性建立設計限制"
        },
        "importance": 3,
        "weight": "騏宏SMT",
        "target_level": "L4B認知(回焊爐溫區+峰溫)｜L5A必備(爐溫曲線與燈具耐熱設計關係)｜L5B主導(機構件耐熱性確認規範)",
        "questions": "PCB設計高度限制如何影響回焊爐clearance?燈具內部耐熱設計考量?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "g2",
        "dimension": "錫膏印刷機+SPI",
        "ability": "錫膏印刷機+SPI\n鋼板開口設計對機構尺寸影響",
        "levels": {
          "0": "不了解",
          "1": "基礎了解",
          "2": "了解PCBA設計規範對機構設計的限制",
          "3": "可協助制定PCBA機構整合設計規範"
        },
        "importance": 2,
        "weight": "騏宏SMT",
        "target_level": "L4A認知(PCBA設計對機構限制)｜L4B必備(了解PCBA設計規範)｜L5A主導(PCBA機構整合設計規範制定)",
        "questions": "PCB邊距Keepout zone如何影響燈具底座設計?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "h1",
        "dimension": "Claude\nArtifacts/Chart",
        "ability": "Claude Artifacts / Chart\n(claude.ai 圖表視覺化與互動工具)",
        "levels": {
          "0": "從未使用",
          "1": "能用claude.ai Artifacts產出基礎圖表(折線/柱狀/甘特圖)",
          "2": "熟練生成互動Dashboard/DVP進度表/BOM Cost分析圖/FMEA熱度圖",
          "3": "建立部門AI圖表標準模板+指導團隊節省報告製作時間≥50%"
        },
        "importance": 5,
        "weight": "claude.ai",
        "target_level": "L3B起建立(基礎圖表)｜L4A必備(DVP/BOM/品質趨勢圖輸出)｜L5A主導(部門Dashboard標準+效率提升)",
        "questions": "如何用Claude Artifacts生成APQP甘特圖？如何建立IP67批次測試統計折線圖？月度良率Dashboard如何設計？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "h2",
        "dimension": "Cowork\n(桌面自動化)",
        "ability": "Claude Cowork\n(桌面任務與檔案管理自動化)\n(非開發人員工作流自動化)",
        "levels": {
          "0": "從未使用",
          "1": "了解Cowork能自動化哪些工作流程（檔案整理/表單填寫/ERP匯出）",
          "2": "熟練設定：BOM匯出→格式轉換→自動發送通知/郵件",
          "3": "建立部門Cowork自動化SOP+節省重複性作業≥30%/月"
        },
        "importance": 4,
        "weight": "claude.ai\nCowork",
        "target_level": "L4A認知(Cowork基礎工作流)｜L5A必備(BOM/報告自動化設定)｜L6A主導(部門自動化SOP建立+KPI量化)",
        "questions": "如何用Cowork自動匯出鼎新ERP的BOM並轉換成APQP B表格式？哪些重複性任務最適合先導入Cowork？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "h3",
        "dimension": "Claude Code\n(AI輔助編程)",
        "ability": "Claude Code\n(命令列AI編程代理 / 工程數據處理)\n(非程式背景工程師AI程式輔助)",
        "levels": {
          "0": "從未使用，不懂程式碼",
          "1": "了解Claude Code能協助非程式背景工程師進行Excel/Python自動化",
          "2": "能用Claude Code生成：BOM版本差比對/測試數據統計/圖面變更清單腳本",
          "3": "主導建立工程數據分析自動化工具+有節省工時案例(≥5h/週)"
        },
        "importance": 4,
        "weight": "claude.ai\nClaude Code",
        "target_level": "L4B認知(AI編程輔助概念)｜L5A能用(BOM/測試數據腳本生成)｜L6A主導(工程自動化工具建立+分享)",
        "questions": "如何用Claude Code自動比對兩版BOM差異並輸出變更清單？振動試驗CSV數據如何用AI自動統計Cpk？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "h4",
        "dimension": "NotebookLM\n(AI知識管理)",
        "ability": "Google NotebookLM\n(AI知識庫/技術文件問答/法規研究助理)\n(將文件轉為可問答AI知識庫)",
        "levels": {
          "0": "從未使用",
          "1": "了解NotebookLM能將PDF/SOP/法規文件轉為可問答的AI知識庫",
          "2": "熟練建立：ECE R65/SAE J595法規庫/DFMEA案例庫/供應商稽核資料庫",
          "3": "建立部門NotebookLM知識管理體系+縮短新人OJT查詢時間≥40%"
        },
        "importance": 5,
        "weight": "NotebookLM\n(Google)",
        "target_level": "L3B起建立(基礎問答使用)｜L4A必備(法規/SOP知識庫建立)｜L5A主導(部門知識管理體系+新人OJT整合)",
        "questions": "如何將FMRD0240測試報告上傳NotebookLM讓全員可查詢？如何建立ECE R65+SAE J595雙規法規問答庫？"
      }
    ],
    "salary_structure": [
      {
        "grade": "L3A",
        "title_zh": "助理機構工程師",
        "title_en": "Asst. ME",
        "salary_min": "36000",
        "salary_mid": "39000",
        "salary_max": "43000",
        "requirements": "P50",
        "promotion": "SolidWorks基礎、量產<10件、導師帶領",
        "amoeba": "執行者/學習者"
      },
      {
        "grade": "L3B",
        "title_zh": "助理機構工程師(熟)",
        "title_en": "Asst. ME Senior",
        "salary_min": "38000",
        "salary_mid": "41000",
        "salary_max": "45000",
        "requirements": "P50~P60",
        "promotion": "量產10件以下、IP防水基礎、學習IATF",
        "amoeba": "執行者/學習者"
      },
      {
        "grade": "L4A",
        "title_zh": "機構工程師",
        "title_en": "Mechanical Engineer",
        "salary_min": "43000",
        "salary_mid": "47000",
        "salary_max": "52000",
        "requirements": "P55",
        "promotion": "獨立設計、量產10+件、IP67、ECE/SAE基礎",
        "amoeba": "獨立執行者"
      },
      {
        "grade": "L4B",
        "title_zh": "機構工程師(資)",
        "title_en": "Mechanical Engineer II",
        "salary_min": "47000",
        "salary_mid": "52000",
        "salary_max": "58000",
        "requirements": "P60~P65",
        "promotion": "量產30件以下、熟1種製程、FMEA初步",
        "amoeba": "獨立執行者"
      },
      {
        "grade": "L5A",
        "title_zh": "資深機構工程師",
        "title_en": "Senior ME",
        "salary_min": "55000",
        "salary_mid": "62000",
        "salary_max": "70000",
        "requirements": "P65~P75",
        "promotion": "量產30+件、熟2+製程（鋁擠/LSR/灌膠）、IP69K、IATF3+",
        "amoeba": "Reserve Amoeba Leader"
      },
      {
        "grade": "L5B",
        "title_zh": "資深機構工程師(主)",
        "title_en": "Senior ME II",
        "salary_min": "62000",
        "salary_mid": "68000",
        "salary_max": "76000",
        "requirements": "P70~P80",
        "promotion": "量產50+件、IATF五大完整、光學模擬、環測全熟",
        "amoeba": "Reserve Amoeba Leader"
      },
      {
        "grade": "L6A",
        "title_zh": "主任機構工程師",
        "title_en": "Lead ME",
        "salary_min": "68000",
        "salary_mid": "76000",
        "salary_max": "86000",
        "requirements": "P75~P85",
        "promotion": "領域帶頭人、法規認證主導(ECE/SAE)、建立SOP、帶領後進",
        "amoeba": "L1 Amoeba巴長"
      },
      {
        "grade": "L6B",
        "title_zh": "資深主任機構工程師",
        "title_en": "Principal ME",
        "salary_min": "76000",
        "salary_mid": "84000",
        "salary_max": "95000",
        "requirements": "P80~P90",
        "promotion": "對外技術代表、ISO26262、專利佈局",
        "amoeba": "L1~L2 Amoeba Leader"
      },
      {
        "grade": "L7",
        "title_zh": "首席機構工程師",
        "title_en": "Chief Engineer",
        "salary_min": "88000",
        "salary_mid": "96000",
        "salary_max": "110000",
        "requirements": "P85~P95",
        "promotion": "公司機構最高技術代言、年度策略、跨產品線整合",
        "amoeba": "L2 Amoeba Leader"
      }
    ]
  },
  {
    "job_name": "生技維修技術員/工程師",
    "raw_job_name": "生技維修",
    "filename": "騏宏科技_生技維修職能薪資結構表_v1_0.xlsx",
    "competencies": [
      {
        "category": "[A]  新品導入NPI全流程  New Product Introduction (PE工程師主導)",
        "code": "A1",
        "dimension": "NPI試作籌備",
        "ability": "試作籌備會議主導（研發新品通知接收→籌備會議召開→BOM/物料/設備/SOP確認清單逐項確認）",
        "levels": {
          "0": "未執行過試作籌備",
          "1": "了解籌備流程，可協助確認",
          "2": "獨立主導試作籌備會議，確認清單100%完備",
          "3": "建立NPI籌備SOP+與研發協同制定試作評審標準+有多件NPI試作零遺漏紀錄"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A認知│L3A必備(獨立主導)│L3B熟練(SOP建立+研發協同)",
        "questions": "試作籌備清單需涵蓋哪些必備項目？如有BOM未確認，試作是否可以啟動？"
      },
      {
        "category": "[A]  新品導入NPI全流程  New Product Introduction (PE工程師主導)",
        "code": "A2",
        "dimension": "APQP品質策劃",
        "ability": "先期產品品質策劃APQP執行（跨職能團隊/時序圖制定/五大階段推進/里程碑管控）",
        "levels": {
          "0": "不了解APQP",
          "1": "了解APQP五大階段與跨職能團隊組成",
          "2": "可依APQP時序圖推進新品開發，管控里程碑達成率",
          "3": "主導APQP跨職能協調，建立時序圖模板+有多件產品APQP成功交付紀錄"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2B認知│L3A必備(時序圖推進+里程碑管控)│L4A主導(APQP跨職能協調)",
        "questions": "APQP週期前四分之三的重點是什麼？試作、試生產、生產三階段控制計畫有何差異？"
      },
      {
        "category": "[A]  新品導入NPI全流程  New Product Introduction (PE工程師主導)",
        "code": "A3",
        "dimension": "SOP試行版製作",
        "ability": "試作SOP試行版製作（工站WI/WIMD0103格式/圖文並茂/試作驗證可行性確認）",
        "levels": {
          "0": "無SOP製作能力",
          "1": "了解FMRD0231格式，可閱讀並執行SOP",
          "2": "可依格式製作完整工站WI，試作驗證可行性",
          "3": "建立SOP制定規範+試作→量產SOP迭代管理+有多件SOP一次試作通過案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2B必備(獨立製作WI)│L3A熟練(試作驗證)│L3B主導(SOP制定規範建立)",
        "questions": "試作SOP與量產SOP如何管理版本差異？SOP中哪些步驟必須有圖示說明？"
      },
      {
        "category": "[A]  新品導入NPI全流程  New Product Introduction (PE工程師主導)",
        "code": "A4",
        "dimension": "ST值首次測定",
        "ability": "新品標準工時首次測定（CT量測方法/10次以上取平均/寬放率加計/各工站ST建議值輸出）",
        "levels": {
          "0": "無ST量測概念",
          "1": "了解CT量測方法與ST計算公式",
          "2": "可執行新品各工站CT量測，計算ST建議值，識別瓶頸工站",
          "3": "建立ST量測SOP+首次ST準確率≥90%驗證+有多件新品ST首測到量產偏差≤5%案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L3A必備(CT量測+ST建議值)│L3B熟練(首測準確率追蹤)│L4A主導(ST量測SOP建立)",
        "questions": "為何要量測10次以上取平均？寬放率如何計算（騏宏內部基準）？"
      },
      {
        "category": "[A]  新品導入NPI全流程  New Product Introduction (PE工程師主導)",
        "code": "A5",
        "dimension": "產前教育訓練",
        "ability": "新品量產前產線人員教育訓練主導（訓練計畫制定/作業員技能確認/認證考核）",
        "levels": {
          "0": "未執行產前訓練",
          "1": "了解產前訓練的目的與項目",
          "2": "可制定並執行產前訓練計畫，確認作業員通過技能認證",
          "3": "建立產前訓練SOP+SC/CC工站技能認證標準+有多件新品量產導入前100%認證完成紀錄"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B必備(訓練計畫執行)│L3A熟練(技能認證確認)│L3B主導(產前訓練SOP建立)",
        "questions": "產前訓練計畫需包含哪些必備科目？SC/CC工站認證標準如何設定？"
      },
      {
        "category": "[A]  新品導入NPI全流程  New Product Introduction (PE工程師主導)",
        "code": "A6",
        "dimension": "試作問題點管理",
        "ability": "試作問題點收集/分類/追蹤關閉（問題追蹤表建立/分類統計/研發生技回饋/問題關閉驗證）",
        "levels": {
          "0": "無試作問題管理概念",
          "1": "了解試作問題追蹤表的用途",
          "2": "可主動收集試作問題，正確分類並追蹤至關閉",
          "3": "建立試作問題追蹤SOP+問題分類模板+有推動NPI良率由試作到量產提升≥20%案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(問題收集+追蹤)│L3A熟練(分類統計+關閉確認)│L3B主導(追蹤SOP建立)",
        "questions": "試作中發現電氣不良與機構不良，各應歸類給哪個部門？問題關閉如何確認有效性？"
      },
      {
        "category": "[A]  新品導入NPI全流程  New Product Introduction (PE工程師主導)",
        "code": "A7",
        "dimension": "量產移轉確認",
        "ability": "量產移轉條件確認（試作FPY達標/問題點關閉/SOP完整發布/Control Plan建立/作業員認證通過/PPAP配合）",
        "levels": {
          "0": "不了解量產移轉條件",
          "1": "了解移轉確認清單各項目",
          "2": "可執行移轉確認清單全項目，確認各條件達標，會簽授權",
          "3": "主導量產移轉全流程，建立移轉確認SOP，有多件NPI順利量產移轉記錄"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L3A必備(移轉確認清單)│L3B熟練(全項目達標確認)│L4A主導(移轉SOP建立)",
        "questions": "量產移轉需哪三方會簽才能放行？試作FPY低於目標時是否可進入量產？"
      },
      {
        "category": "[B]  製程管制與ECN工程變更  Process Control & Engineering Change",
        "code": "B1",
        "dimension": "量產前準備確認",
        "ability": "量產前製程準備確認（依QPMD02程序：SOP版本/Control Plan/設備點檢/物料確認/人員訓練/首件確認）",
        "levels": {
          "0": "無量產前確認概念",
          "1": "了解量產前確認清單項目",
          "2": "獨立完成量產前所有準備確認，無遺漏",
          "3": "建立量產前確認SOP+異常快速通報機制+有多件量產前確認零遺漏紀錄"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(獨立確認+無遺漏)│L3A熟練(異常快速通報)│L3B主導(量產前確認SOP建立)",
        "questions": "量產前確認清單需包含哪六大類項目？如有任一項未達標，生技應如何決策？"
      },
      {
        "category": "[B]  製程管制與ECN工程變更  Process Control & Engineering Change",
        "code": "B2",
        "dimension": "異常處理8D根因",
        "ability": "產品製程異常處理（依WIQA0302：8D方法/5Why根因分析/D3緊急遏制/D4根本原因/D5永久對策）",
        "levels": {
          "0": "無8D分析概念",
          "1": "了解8D八個步驟定義",
          "2": "可獨立應用8D前5D分析製程異常，提出可驗證的根本原因與永久對策",
          "3": "主導複雜跨部門8D案例，建立問題案例庫，指導他人，有8D再發率≤5%量化成果"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2B認知(8D概念)│L3A必備(獨立8D前5D執行)│L3B主導(案例庫建立+指導)",
        "questions": "5Why根因分析的邏輯判斷標準是什麼（答案要可逆推）？D3緊急遏制vs D5永久對策的差別？"
      },
      {
        "category": "[B]  製程管制與ECN工程變更  Process Control & Engineering Change",
        "code": "B3",
        "dimension": "ECN工程變更管制",
        "ability": "工程變更通知ECN管制執行（4H內知會現場/舊版SOP回收/新版SOP更新/換線首件確認/IATF8H記錄）",
        "levels": {
          "0": "不了解ECN流程",
          "1": "了解ECN下達後現場需執行的步驟",
          "2": "可在4H內完成ECN全流程現場執行（通知→SOP更新→舊版回收→首件確認）3:建立ECN現場執行SOP+追蹤ECN達標率100%+指導他人，有多件無遺漏ECN執行紀錄",
          "3": ""
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(4H內執行)│L3A熟練(全流程+首件確認)│L3B主導(ECN執行SOP建立)",
        "questions": "ECN下達後哪些步驟必須在4H內完成？如何確認所有作業員都已按新版SOP執行？"
      },
      {
        "category": "[B]  製程管制與ECN工程變更  Process Control & Engineering Change",
        "code": "B4",
        "dimension": "Control Plan維護",
        "ability": "控制計畫(CP/QC工程表)維護與更新（FMRD0224格式/CP更新觸發條件/SC/CC特性更新/版次管理）",
        "levels": {
          "0": "不了解Control Plan",
          "1": "了解CP格式與主要欄位",
          "2": "可依觸發條件更新CP，正確填寫SC/CC特性欄位，版次記錄規範",
          "3": "主導CP審查+PFMEA與CP整合管理+有CP精準度提升（控制點減少同時品質提升）案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B認知(CP格式)│L3A必備(CP更新+版次管理)│L4A主導(PFMEA-CP整合審查)",
        "questions": "CP的六大更新觸發條件是什麼？SC特性與CC特性在現場管控有何不同？"
      },
      {
        "category": "[B]  製程管制與ECN工程變更  Process Control & Engineering Change",
        "code": "B5",
        "dimension": "SC/CC特性管控",
        "ability": "SC/CC特殊特性現場管控（特殊工站作業員資格鑑定/監控方式/管制圖應用/異常反應計畫執行）",
        "levels": {
          "0": "不了解SC/CC概念",
          "1": "了解SC/CC定義與騏宏哪些工站為SC/CC",
          "2": "確認SC/CC工站人員持有有效資格+依CP監控要求執行+異常反應計畫知悉",
          "3": "建立SC/CC資格管理制度+每季技能矩陣交叉比對+有SC/CC稽核零缺失維持案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(SC/CC執行確認)│L3A熟練(資格管理+監控)│L3B主導(SC/CC管理制度建立)",
        "questions": "騏宏組裝線哪6個工站被定義為SC/CC特殊製程？SC工站作業員資格如何鑑定，多久複檢？"
      },
      {
        "category": "[C]  設備保養三級體系  Equipment Maintenance 3-Level System",
        "code": "C1",
        "dimension": "一級保養計畫",
        "ability": "一級保養計畫制定與監督（製造課日常點檢計畫/FMMD0303點檢表制定/執行率追蹤/異常上報機制）",
        "levels": {
          "0": "無一級保養計畫概念",
          "1": "了解一級保養的項目與責任分工",
          "2": "可制定一級保養計畫+FMMD0303點檢表項目設計+執行率追蹤（目標≥98%）",
          "3": "建立一級保養管理SOP+有點檢執行率從<80%→≥98%改善案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(計畫制定+執行率追蹤)│L3A熟練(點檢表設計)│L3B主導(一級保養管理SOP)",
        "questions": "FMMD0303日常點檢表需包含哪些必查項目？作業員點檢發現異常後的標準作業流程？"
      },
      {
        "category": "[C]  設備保養三級體系  Equipment Maintenance 3-Level System",
        "code": "C2",
        "dimension": "二級保養執行",
        "ability": "二級保養執行（生技定期保養：週保養/月保養計畫排程/保養SOP執行/保養紀錄登錄/設備性能確認）",
        "levels": {
          "0": "無二級保養執行能力",
          "1": "了解二級保養範圍與週月頻率",
          "2": "可依計畫執行週/月保養，完整填寫保養紀錄，設備性能恢復確認",
          "3": "建立週月保養排程系統+有MTBF提升量化案例（MTBF≥200H維持紀錄）"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A認知│L3A必備(週月保養執行+記錄)│L3B主導(保養排程系統建立)",
        "questions": "週保養與月保養的主要差異在哪些項目？設備性能恢復後如何確認可正常投入生產？"
      },
      {
        "category": "[C]  設備保養三級體系  Equipment Maintenance 3-Level System",
        "code": "C3",
        "dimension": "三級保養委外",
        "ability": "三級保養/委外維修協調（廠外年大保養安排/委外廠商選擇/維修驗收/回廠首件確認）",
        "levels": {
          "0": "無委外維修概念",
          "1": "了解三級保養適用範圍與委外流程",
          "2": "可協調廠外保養作業，完整追蹤驗收，回廠首件確認",
          "3": "建立委外維修廠商評鑑制度+有委外品質控管改善（回廠首件通過率≥99%）案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B認知│L3A必備(委外協調+驗收確認)│L4A主導(廠商評鑑制度)",
        "questions": "設備需要三級委外保養的判斷條件是什麼？回廠後如何確認維修品質達標？"
      },
      {
        "category": "[C]  設備保養三級體系  Equipment Maintenance 3-Level System",
        "code": "C4",
        "dimension": "維修單全流程",
        "ability": "維修單全流程操作（MD-30-18001：開立/轉交生技/檢測判定/修復/功能驗證/結案/維修日報登錄）",
        "levels": {
          "0": "不了解維修單流程",
          "1": "了解維修單格式與開立時機",
          "2": "可完整執行維修單開立→修復→功能驗證→結案全流程，記錄規範",
          "3": "建立維修單管理SOP+統計維修完成率≥95%/平均MTTR追蹤+有維修履歷案例庫建立"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B認知(維修單格式)│L2A必備(開立+追蹤)│L3A主導(維修日報+MTTR追蹤)",
        "questions": "維修單(MD-30-18001)必填哪些欄位？維修完成後功能驗證的標準是什麼？"
      },
      {
        "category": "[C]  設備保養三級體系  Equipment Maintenance 3-Level System",
        "code": "C5",
        "dimension": "MTBF/MTTR分析",
        "ability": "設備MTBF/MTTR追蹤與改善（計算公式/趨勢分析/預防保養頻率優化/備品備件計畫）",
        "levels": {
          "0": "不了解MTBF/MTTR定義",
          "1": "了解MTBF/MTTR計算公式與目標值",
          "2": "可建立設備MTBF/MTTR追蹤表+依趨勢調整預防保養頻率",
          "3": "建立設備可靠性改善計畫+有MTBF↑且MTTR↓的量化改善案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B認知│L3A必備(追蹤分析)│L3B主導(可靠性改善計畫)",
        "questions": "MTBF/MTTR計算公式？當MTBF持續下降時應如何調整預防保養策略？"
      },
      {
        "category": "[C]  設備保養三級體系  Equipment Maintenance 3-Level System",
        "code": "C6",
        "dimension": "故障緊急處置",
        "ability": "設備故障緊急處置六步驟（按安燈→通報→評估→快速修復或備援→首件確認→故障報告，MTTR目標精密≤2H/組裝≤1H）",
        "levels": {
          "0": "不知如何緊急處置",
          "1": "了解六步驟流程與MTTR目標",
          "2": "能正確執行六步驟含備援計畫啟動，MTTR達標率≥90%",
          "3": "主導備援計畫改善+故障根因分析深度+有MTTR從>2H→<1H量化改善案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B必備(按燈通報)│L2A必備(六步驟執行)│L3A主導(備援計畫+故障報告)",
        "questions": "設備故障超過30分鐘未修復如何啟動備援？故障報告需分析哪些根因維度（5M1E）？"
      },
      {
        "category": "[C]  設備保養三級體系  Equipment Maintenance 3-Level System",
        "code": "C7",
        "dimension": "保養計畫曆管理",
        "ability": "設備保養計畫曆管理（月度保養計畫排程/PM日曆建立/保養提前通知機制/保養完成確認看板）",
        "levels": {
          "0": "無保養計畫管理概念",
          "1": "了解保養計畫曆的用途與格式",
          "2": "可建立月度PM日曆，提前通知相關人員，完成確認看板更新",
          "3": "建立年度保養計畫+保養延誤預警機制+有保養計畫達成率≥98%維持案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B必備(月度PM計畫+看板更新)│L3A熟練(年度計畫)│L3B主導(延誤預警機制)",
        "questions": "月度保養計畫如何安排不影響生產排程？保養延誤時如何更新看板並通報相關人員？"
      },
      {
        "category": "[D]  產品電氣維修實務  Product Electrical Repair Practice (維修主導)",
        "code": "D1",
        "dimension": "電路圖判讀",
        "ability": "PCBA電路圖判讀與電性功能檢測（電路圖符號識別/量測點確認/正常電壓電流範圍判讀）",
        "levels": {
          "0": "無法判讀電路圖",
          "1": "可辨識基本電路符號與元件，了解電路圖用途",
          "2": "可依電路圖找到量測點，用三用電表/示波器確認電性，判斷正常/異常",
          "3": "深度判讀複雜電路+建立LED警示燈各機種電路量測點標準手冊+指導他人"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A認知│L2B必備(量測點判讀+異常判斷)│L3A主導(量測點手冊建立)",
        "questions": "LED警示燈PCBA中，如何確認驅動IC輸出電壓正常？量測時哪些工站需特別注意靜電防護？"
      },
      {
        "category": "[D]  產品電氣維修實務  Product Electrical Repair Practice (維修主導)",
        "code": "D2",
        "dimension": "焊接修復技術",
        "ability": "焊接修復技術（SMT表面貼裝返修/THT通孔焊接/BGA返修概念/焊錫缺陷類型判定）",
        "levels": {
          "0": "無焊接修復能力",
          "1": "基礎手工焊接，知道虛焊/橋接判定標準",
          "2": "可執行SMT組件更換（0402以上），THT重新焊接，焊點品質符合IPC-A-610",
          "3": "BGA返修設備操作+細小封裝維修+有焊接不良改善(FPY提升)案例+指導他人焊接標準"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(SMT/THT焊接修復)│L2B熟練(IPC-A-610標準)│L3A主導(BGA+指導)",
        "questions": "虛焊(cold solder)如何目視與電性判定？SMT組件更換後如何確認焊點品質符合IPC-A-610標準？"
      },
      {
        "category": "[D]  產品電氣維修實務  Product Electrical Repair Practice (維修主導)",
        "code": "D3",
        "dimension": "線材連接器維修",
        "ability": "線材/連接器異常判斷與處理（線材斷路/短路/接觸不良/連接器腳位確認/絕緣套管修復）",
        "levels": {
          "0": "無線材維修能力",
          "1": "了解常見線材異常類型與判斷方法",
          "2": "可獨立判斷線材斷路/短路/接觸不良並執行修復，導通測試合格",
          "3": "建立線材維修SOP+常見線材故障案例庫+有線材不良率降低的改善案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A認知│L2B必備(獨立判斷+修復)│L3A主導(SOP建立+案例庫)",
        "questions": "線材接觸不良如何區分是壓接不足還是氧化導致？自動出線機出線長度偏差如何排查？"
      },
      {
        "category": "[D]  產品電氣維修實務  Product Electrical Repair Practice (維修主導)",
        "code": "D4",
        "dimension": "維修儀器操作",
        "ability": "維修測試儀器操作（三用電表/示波器/DC POWER SUPPLY/LCR電橋/耐壓測試機）",
        "levels": {
          "0": "無儀器操作能力",
          "1": "了解各儀器用途，可基礎操作三用電表",
          "2": "熟練操作三用電表+示波器（觸發/游標），DC POWER正確設定電壓電流，LCR量測電容電感",
          "3": "熟練全部儀器+建立儀器操作SOP+儀器校準週期管理+指導他人操作"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(三用電表+DC POWER熟練)│L2B熟練(示波器+LCR)│L3A主導(儀器SOP+校準管理)",
        "questions": "DC POWER 28V/10A輸出時如何設定過流保護？示波器如何量測PWM訊號頻率與工作週期？"
      },
      {
        "category": "[D]  產品電氣維修實務  Product Electrical Repair Practice (維修主導)",
        "code": "D5",
        "dimension": "不良品分類判定",
        "ability": "不良品分類判定（維修/重工/特採/報廢/退廠/客訴品處理，判定權限確認，不良品標示與隔離規範）",
        "levels": {
          "0": "無不良品判定概念",
          "1": "了解不良品四種判定結果定義",
          "2": "可依品保標準正確分類不良品，正確標示隔離，開立相應單據",
          "3": "建立不良品判定SOP+統計各類型比例+有特採案例資料庫+指導他人判定標準"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B認知│L2A必備(正確分類+標示)│L3A主導(判定SOP+案例資料庫)",
        "questions": "維修判定與特採判定的主要差異？客訴退回品如何隔離並進行原因分析？"
      },
      {
        "category": "[D]  產品電氣維修實務  Product Electrical Repair Practice (維修主導)",
        "code": "D6",
        "dimension": "維修日報履歷",
        "ability": "維修日報與維修履歷登錄（每日維修件數/不良類型統計/MTTR記錄/維修履歷手冊建立/趨勢分析）",
        "levels": {
          "0": "不了解維修記錄管理",
          "1": "了解維修日報格式與填寫規範",
          "2": "每日確實填寫維修日報，統計不良類型，MTTR記錄準確",
          "3": "建立維修履歷手冊+統計TOP3不良類型+有維修履歷驅動製程改善的案例"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L1B認知│L2A必備(日報+MTTR記錄)│L3A主導(履歷手冊+趨勢分析)",
        "questions": "維修日報與維修履歷的區別？維修履歷手冊如何協助新人快速掌握常見故障排查？"
      },
      {
        "category": "[D]  產品電氣維修實務  Product Electrical Repair Practice (維修主導)",
        "code": "D7",
        "dimension": "電子料件辨識",
        "ability": "電子料件辨識與替代料確認（LED/驅動IC/電容/電阻/MOSFET料件識別/規格確認/替代料申請流程）",
        "levels": {
          "0": "無料件辨識能力",
          "1": "可辨識常見電子料件類別，了解基本規格參數",
          "2": "可確認料件規格（耐壓/容量/封裝），識別料件損壞特徵，了解替代料申請流程",
          "3": "建立常用料件規格庫+主導替代料評估測試+有替代料成功降低成本的案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A認知│L2B必備(規格確認+損壞識別)│L3A主導(料件規格庫+替代料評估)",
        "questions": "LED失效分為哪幾種模式（短路/開路/光衰）？如何確認替代LED的電性規格與原料件相容？"
      },
      {
        "category": "[E]  治具管理全流程  Fixture Management Full Cycle (治具主導)",
        "code": "E1",
        "dimension": "治具需求分析",
        "ability": "治具需求分析與規格提出（識別生產瓶頸需求/治具功能規格描述/精度要求/使用壽命估算）",
        "levels": {
          "0": "無治具需求分析能力",
          "1": "了解治具的用途與基本需求提出流程",
          "2": "可獨立分析瓶頸工站治具需求，撰寫完整規格書（功能/精度/材料/壽命）",
          "3": "建立治具需求分析SOP+有多件治具提案成功縮短CT或提升良率的量化案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A認知│L3A必備(獨立規格書撰寫)│L3B主導(需求分析SOP)",
        "questions": "治具規格書需涵蓋哪些必要項目（功能/精度/材料/使用環境/壽命）？如何估算治具投資回報ROI？"
      },
      {
        "category": "[E]  治具管理全流程  Fixture Management Full Cycle (治具主導)",
        "code": "E2",
        "dimension": "治具設計跟催",
        "ability": "治具設計圖面審查與外包製作跟催（設計圖面可製造性審查/外包廠商進度跟催/圖面ECN管理）",
        "levels": {
          "0": "無治具設計審查能力",
          "1": "可閱讀基本治具圖面，了解外包跟催流程",
          "2": "可審查治具設計圖面的可製造性，追蹤外包廠商進度，處理設計變更",
          "3": "深度審查設計合理性（材料/公差/裝配性）+建立治具設計審查checklist+有多件治具按時交付紀錄"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(圖面審查+進度跟催)│L3A熟練(設計合理性審查)│L3B主導(審查checklist建立)",
        "questions": "治具圖面審查哪些關鍵公差影響定位精度？外包治具製作的常見延誤原因如何預防？"
      },
      {
        "category": "[E]  治具管理全流程  Fixture Management Full Cycle (治具主導)",
        "code": "E3",
        "dimension": "治具驗收確認",
        "ability": "治具驗收確認（功能測試/安全性確認/首件品質確認/驗收報告填寫/移交生產線操作SOP確認）",
        "levels": {
          "0": "不了解治具驗收流程",
          "1": "了解治具驗收項目與標準",
          "2": "可執行治具完整驗收（功能+安全+首件），驗收報告規範填寫",
          "3": "建立治具驗收SOP+一次驗收通過率追蹤≥90%+有驗收發現設計問題退回改善的案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(完整驗收+報告填寫)│L3A熟練(一次通過率追蹤)│L3B主導(驗收SOP建立)",
        "questions": "治具驗收時必確認的安全項目有哪些（限位/防夾/電氣安全）？首件確認不合格時如何處理？"
      },
      {
        "category": "[E]  治具管理全流程  Fixture Management Full Cycle (治具主導)",
        "code": "E4",
        "dimension": "治具調試首件",
        "ability": "治具上線調試與首件確認（安裝調整/試產首件品質確認/CT量測/作業員操作訓練）",
        "levels": {
          "0": "無治具調試能力",
          "1": "了解治具調試流程",
          "2": "可執行治具上線安裝調試，首件品質確認，作業員操作說明",
          "3": "主導新治具上線全流程+建立上線調試SOP+有治具上線CT達標率≥95%案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B必備(上線安裝調試+首件確認)│L3A熟練(CT量測)│L3B主導(上線調試SOP)",
        "questions": "治具調試時如何確認定位精度符合要求？新治具首件確認不合格時退修還是現場調整如何判斷？"
      },
      {
        "category": "[E]  治具管理全流程  Fixture Management Full Cycle (治具主導)",
        "code": "E5",
        "dimension": "治具庫存保養",
        "ability": "治具庫存管理/保養維修/異常管理（治具卡建立/庫存盤點/定期保養/損壞申報/報廢流程）",
        "levels": {
          "0": "無治具庫管概念",
          "1": "了解治具卡格式與庫存管理流程",
          "2": "可建立治具卡，執行定期保養，損壞即時申報，維護庫存準確率≥99%",
          "3": "建立治具庫管SOP+治具完好率KPI追蹤≥98%+有治具壽命延長改善案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B必備(治具卡+定期保養)│L3A熟練(庫存準確率追蹤)│L3B主導(庫管SOP+完好率KPI)",
        "questions": "治具卡需記錄哪些關鍵資訊（製作日期/使用次數/保養記錄/損壞紀錄）？治具完好率如何計算？"
      },
      {
        "category": "[F]  標準工時/IE工程改善  Standard Time & IE Engineering",
        "code": "F1",
        "dimension": "ST值量測",
        "ability": "標準工時ST值量測與計算（CT量測≥10次/寬放率計算/騏宏內部基準480分→380分淨工時/ST建議值輸出）",
        "levels": {
          "0": "不了解ST量測方法",
          "1": "了解CT量測與ST計算公式，知道寬放率概念",
          "2": "可執行標準工時量測（量測≥10次+寬放率加計）並輸出ST建議值，正確計算淨工時",
          "3": "建立ST量測管理制度+定期更新ST值+有ST值準確率≥95%追蹤案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2B必備(CT量測+ST輸出)│L3A熟練(寬放率計算)│L3B主導(ST管理制度建立)",
        "questions": "騏宏淨工時380分鐘如何計算（480分鐘-哪些寬放項目）？如何確認量測對象是熟練工而非新手？"
      },
      {
        "category": "[F]  標準工時/IE工程改善  Standard Time & IE Engineering",
        "code": "F2",
        "dimension": "線平衡效率分析",
        "ability": "生產線平衡效率分析（平衡效率公式/各工站CT統計/瓶頸工站識別/人力配置優化建議）",
        "levels": {
          "0": "不了解線平衡分析",
          "1": "了解平衡效率公式與瓶頸定義",
          "2": "可計算22工站平衡效率，識別瓶頸工站，提出初步人力優化建議",
          "3": "建立週平衡效率追蹤表+有平衡效率從<80%→≥85%改善案例+水平展開其他機種"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2B認知│L3A必備(平衡效率計算+瓶頸識別)│L3B主導(週追蹤表+改善案例)",
        "questions": "22工站平衡效率計算公式？當瓶頸CT是45秒，其他工站均≤35秒，平衡效率為多少？"
      },
      {
        "category": "[F]  標準工時/IE工程改善  Standard Time & IE Engineering",
        "code": "F3",
        "dimension": "五構面瓶頸分析",
        "ability": "五構面瓶頸分析法（人/機/訓/法/治具設備五維度分析瓶頸真因/《五構面瓶頸分析表》填寫/對策方案）",
        "levels": {
          "0": "不了解五構面分析",
          "1": "了解五構面定義（人:技能/機:設備稼動/訓:訓練不足/法:SOP複雜/治具:效率低）",
          "2": "可正確填寫五構面瓶頸分析表，識別瓶頸主因，提出針對性改善方案",
          "3": "主導多工站五構面分析+有跨構面整合改善（如設備+訓練同時改善）量化案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2B認知│L3A必備(五構面分析表填寫)│L3B主導(跨構面整合改善)",
        "questions": "灌膠工站CT偏長，如何拆解五構面逐一排查真因？人員技能不足VS治具效率低如何區分？"
      },
      {
        "category": "[F]  標準工時/IE工程改善  Standard Time & IE Engineering",
        "code": "F4",
        "dimension": "ECRS流程優化",
        "ability": "生產製程ECRS優化原則應用（消除/合併/重排/簡化，動作分析，精實生產七大浪費識別）",
        "levels": {
          "0": "不了解ECRS概念",
          "1": "了解ECRS四步驟定義與精實七大浪費",
          "2": "可識別現場動作浪費，提出ECRS改善方案，有量化改善成果",
          "3": "主導精實生產改善項目+建立改善案例庫+有ECRS改善縮短CT/提升平衡效率的系統案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B認知│L3A必備(浪費識別+ECRS方案)│L3B主導(改善案例庫建立)",
        "questions": "ECRS四個步驟優先順序為何（消除>合併>重排>簡化）？組裝線中最常見的哪種動作浪費？"
      },
      {
        "category": "[F]  標準工時/IE工程改善  Standard Time & IE Engineering",
        "code": "F5",
        "dimension": "SMED換線改善",
        "ability": "SMED換線時間改善（內外換線區分/換線動作並行化/標準化換線步驟/換線目標同類型≤10分鐘/跨類型≤15分鐘）",
        "levels": {
          "0": "不了解SMED概念",
          "1": "了解內換線/外換線定義，知道換線目標時間",
          "2": "可分析換線動作，將內換線轉為外換線，有換線時間縮短量化成果",
          "3": "主導SMED改善項目+建立標準換線SOP+有換線時間從>20分→<10分的案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B認知│L3A必備(內外換線分析+並行化)│L3B主導(SMED改善項目主導)",
        "questions": "哪些換線動作可在停線前提前準備（外換線化）？換線時間記錄如何與釘釘系統整合追蹤？"
      },
      {
        "category": "[F]  標準工時/IE工程改善  Standard Time & IE Engineering",
        "code": "F6",
        "dimension": "排程優化運用",
        "ability": "生產排程優化運用（基於平衡效率分析結果提供生管排程依據/人力與工時匹配/急單插單評估）",
        "levels": {
          "0": "不了解排程優化概念",
          "1": "了解平衡分析結果如何影響排程",
          "2": "可依平衡效率分析結果，提供生管人力配置建議，協助評估急單可行性",
          "3": "建立生技與生管協同排程機制+有急單評估標準流程+量化排程準確率提升案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B認知│L3A必備(人力配置建議)│L3B主導(生技生管協同排程機制)",
        "questions": "急單插單評估需考量哪些因素（平衡效率/人力/物料/設備）？生技如何在30分鐘內提供排程建議？"
      },
      {
        "category": "[G]  防呆設計與品質工具  Poka-Yoke & Quality Tools",
        "code": "G1",
        "dimension": "Poka-Yoke防呆",
        "ability": "防呆裝置(Poka-Yoke)設計與管理（防呆三層次：不可能發生/立即偵測/減少影響，有效性確認/定期驗證）",
        "levels": {
          "0": "不了解防呆概念",
          "1": "了解防呆三層次定義，知道騏宏哪些工站有防呆裝置",
          "2": "可識別現場防呆需求，提出防呆設計方案（機構/感測/軟體防呆），有效性確認",
          "3": "主導防呆設計+建立防呆清單+有防呆提升FPY量化案例（不良率由X→0的防呆設計）"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B認知│L3A必備(識別需求+設計方案)│L3B主導(防呆清單+案例)",
        "questions": "燒錄站如何設計三層防呆確保版本正確（機構/軟體/人工確認）？防呆有效性如何定期驗證？"
      },
      {
        "category": "[G]  防呆設計與品質工具  Poka-Yoke & Quality Tools",
        "code": "G2",
        "dimension": "SPC/Cpk管制",
        "ability": "SPC統計製程管制（Cpk計算/管制圖選擇/Nelson 8大異常規則判讀/超出管制界限反應計畫）",
        "levels": {
          "0": "不了解SPC概念",
          "1": "了解SPC管制圖基本概念與Cpk定義",
          "2": "可建立X-bar R管制圖+計算Cpk+識別8大異常規則+啟動反應計畫",
          "3": "主導製程能力提升+有Cpk從<1.0→≥1.33改善案例+SPC導入KPI追蹤"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B認知│L3A必備(管制圖建立+Cpk計算)│L4A主導(製程能力提升)",
        "questions": "灌膠重量Cpk計算（規格100±5g，平均101g，σ=1.5g）？Cpk<1.0時優先改善均值還是變異？"
      },
      {
        "category": "[G]  防呆設計與品質工具  Poka-Yoke & Quality Tools",
        "code": "G3",
        "dimension": "QC七手法VSM",
        "ability": "QC七手法應用（柏拉圖/特性要因圖/管制圖/直方圖/散佈圖/查檢表/層別法）與VSM價值流分析",
        "levels": {
          "0": "不了解QC七手法",
          "1": "了解QC七手法定義與各自用途",
          "2": "可正確選用並應用QC七手法分析製程問題，製作圖表，VSM繪製基礎",
          "3": "熟練應用全部七手法+有完整VSM分析+QCC改善報告多件+指導他人選用正確工具"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L2B認知│L3A必備(七手法正確選用+圖表製作)│L3B主導(VSM+QCC報告)",
        "questions": "針對燒機後不良率偏高，應先使用哪兩種QC手法？如何用魚骨圖展開4M找根因？"
      },
      {
        "category": "[H]  教育訓練執行  Education & Training (生技主導)",
        "code": "H1",
        "dimension": "OJT四階段帶訓",
        "ability": "OJT在職訓練四階段帶訓法（示範→協同作業→觀察修正→獨立作業/OJT帶訓師認定/帶訓KPI設計）",
        "levels": {
          "0": "無OJT帶訓概念",
          "1": "了解OJT四階段定義，知道帶訓師認定條件",
          "2": "可獨立執行一名新人OJT帶訓（含四階段+技能矩陣達標確認+帶訓記錄）",
          "3": "建立部門OJT標準體系（教材/考核/帶訓師培育/成效KPI）+多名學員培育成功記錄"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(OJT四階段執行)│L3A必備(帶訓體系建立)│L3B主導(帶訓師KPI設計)",
        "questions": "OJT四階段中「觀察修正」階段如何判斷學員是否需要返回「示範」階段？帶訓師KPI如何設計？"
      },
      {
        "category": "[H]  教育訓練執行  Education & Training (生技主導)",
        "code": "H2",
        "dimension": "技能矩陣管理",
        "ability": "技能矩陣建立與管理（○△◎★四級評等/每月更新/多能工培育計畫/SC/CC工站代理機制確保）",
        "levels": {
          "0": "無技能矩陣管理概念",
          "1": "了解○△◎★四級評等定義與更新頻率",
          "2": "可建立並月度更新技能矩陣，識別缺口工站，制定多能工培育計畫",
          "3": "建立技能矩陣管理制度+SC/CC代理機制確保每工站≥2人◎+有多能工比例提升案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B認知│L3A必備(月度更新+缺口識別)│L3B主導(多能工制度+SC/CC代理機制)",
        "questions": "○△◎★各代表什麼（未受訓/受訓中需協助/可獨立/可指導）？SC/CC工站每工站為何需≥2人達◎？"
      },
      {
        "category": "[H]  教育訓練執行  Education & Training (生技主導)",
        "code": "H3",
        "dimension": "TOP3訓練計畫",
        "ability": "依TOP3不良針對性訓練計畫制定（不良統計→教材設計→訓練執行→效果評估/Kirkpatrick四層評估）",
        "levels": {
          "0": "無針對性訓練計畫概念",
          "1": "了解Kirkpatrick四層評估定義（反應/學習/行為/結果）",
          "2": "可依TOP3不良統計，設計針對性訓練教材，執行訓練，追蹤不良率改善",
          "3": "建立TOP3訓練→KPI連結機制+有訓練後不良率降低量化案例（含ROI估算）"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L2B認知│L3A必備(TOP3訓練計畫設計+執行)│L3B主導(訓練→KPI連結+ROI)",
        "questions": "如何從月度不良統計中識別TOP3可透過訓練改善的不良項目？L4結果層評估如何追蹤訓練ROI？"
      },
      {
        "category": "[I]  委外/外包加工管理  Outsourcing Management (生技角色)",
        "code": "I1",
        "dimension": "委外加工全流程",
        "ability": "委外加工全流程執行（依QPLM03：生管開立託外製令→生技製程評估/SOP提供→物料發料→執行→驗收→入庫→結案）",
        "levels": {
          "0": "無委外加工概念",
          "1": "了解委外加工流程與生技的角色定位",
          "2": "可執行委外加工全流程（製程評估/SOP提供/交貨驗收），鼎新ERP託外製令操作熟練",
          "3": "建立委外加工管理SOP+有委外品質提升（一次交貨合格率提升）量化案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B認知│L3A必備(全流程執行+ERP操作)│L3B主導(委外SOP建立)",
        "questions": "生技在委外加工中的核心角色是什麼（製程評估/SOP提供/驗收）？如何向委外廠商說明SOP？"
      },
      {
        "category": "[I]  委外/外包加工管理  Outsourcing Management (生技角色)",
        "code": "I2",
        "dimension": "委外廠稽核輔導",
        "ability": "委外廠商品質稽核與輔導（依QPLM02：廠商評鑑/製程稽核/品質問題協助解決/改善輔導）",
        "levels": {
          "0": "無廠商稽核概念",
          "1": "了解廠商稽核流程與評鑑標準",
          "2": "可執行委外廠商現場稽核，識別製程問題，提出改善要求並追蹤改善",
          "3": "建立廠商稽核評鑑制度+有廠商品質改善（如一次交貨合格率≥99%）量化案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B認知│L3A必備(稽核執行+改善追蹤)│L4A主導(廠商評鑑制度)",
        "questions": "委外廠稽核的重點查核項目有哪些（製程/品質/環境）？如何追蹤委外廠改善進度？"
      },
      {
        "category": "[I]  委外/外包加工管理  Outsourcing Management (生技角色)",
        "code": "I3",
        "dimension": "委外耗損管控",
        "ability": "委外加工耗損管控與扣款（耗損率計算/合理耗損vs異常耗損判定/扣款計算/改善督促）",
        "levels": {
          "0": "無委外耗損管控概念",
          "1": "了解委外耗損率計算方法與合理標準",
          "2": "可計算委外耗損率，識別異常耗損，執行扣款計算，督促改善",
          "3": "建立委外耗損管控SOP+有委外耗損率從>X%→<目標值改善案例"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L2B認知│L3A必備(耗損率計算+異常識別)│L3B主導(耗損管控SOP)",
        "questions": "委外耗損率如何計算（發料→交貨良品/發料數）？異常耗損如何向委外廠扣款？"
      },
      {
        "category": "[J]  5S現場管理  5S Workplace Management",
        "code": "J1",
        "dimension": "5S稽核管理",
        "ability": "5S稽核計畫制定/執行評分/不合格追蹤/月度5S報告（照片標準對比/稽核表建立）",
        "levels": {
          "0": "無5S稽核概念",
          "1": "了解5S稽核流程與評分標準",
          "2": "可執行5S稽核+填寫評分表+追蹤不合格項目改善+月度5S趨勢報告",
          "3": "建立5S稽核計畫+評分從<90→≥95持續提升案例+指導他人執行5S稽核"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L2B必備(稽核執行+不合格追蹤)│L3A主導(月度報告+稽核計畫)│L3B主導(趨勢分析+文化推動)",
        "questions": "5S稽核評分表主要查核哪些項目？如何設計讓5S評分從90分持續提升到95分以上的機制？"
      },
      {
        "category": "[J]  5S現場管理  5S Workplace Management",
        "code": "J2",
        "dimension": "視覺化管理",
        "ability": "視覺化管理推動（五色標示系統/看板管理/安燈運用/工站標準狀態照片/目視管理指標）",
        "levels": {
          "0": "不了解視覺化管理",
          "1": "了解五色標示意義與看板管理用途",
          "2": "可推動工站視覺化管理建置（標示/看板/照片標準），維持視覺管理正確率≥99%",
          "3": "建立廠內視覺化管理標準+有視覺化管理提升異常發現速度的量化案例"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L2B必備(標示推動+看板維持)│L3A主導(視覺化標準建立)│L3B主導(異常發現效率提升)",
        "questions": "生技工站區域五色標示如何規劃（良品/待檢/不良/設備/通道）？工站標準狀態照片如何建立？"
      },
      {
        "category": "[J]  5S現場管理  5S Workplace Management",
        "code": "J3",
        "dimension": "異常分級管理",
        "ability": "異常分級管理執行（P1整線停機/P2工站停機/P3減速/P4輕微預防，三大觸發閾值，響應SLA追蹤）",
        "levels": {
          "0": "不了解異常分級",
          "1": "了解P1~P4定義與三大觸發閾值（不良率>3%/連續3件相同問題/批量10%不良）",
          "2": "可正確判定異常等級，在閾值觸發時立即執行對應動作，響應SLA達標率≥95%",
          "3": "建立異常分級SOP+響應達標率追蹤+有P1/P2響應時間縮短至目標的改善案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L1B必備(三大閾值認知)│L2A必備(異常等級判定+閾值執行)│L3A主導(SLA追蹤+改善)",
        "questions": "連續幾件相同問題必須通報生技/品保？批量多少比例不良須強制停線？生技響應到場SLA是多少？"
      },
      {
        "category": "[K]  KPI績效管理與報表  KPI Management & Reporting",
        "code": "K1",
        "dimension": "PE工程師KPI",
        "ability": "PE工程師KPI設定與追蹤（NPI試作FPY/SOP準時發行率/標準工時更新率/平衡效率達成率/ECN執行達標率）",
        "levels": {
          "0": "不了解PE KPI體系",
          "1": "了解PE KPI各項指標定義",
          "2": "可設定並追蹤PE KPI，識別KPI異常，提出改善對策",
          "3": "建立PE KPI看板+季度KPI檢討機制+有PE KPI全面達標季度紀錄"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B認知│L3A必備(KPI設定+追蹤)│L3B主導(KPI看板+季度檢討)",
        "questions": "PE工程師最關鍵的三項KPI是什麼？NPI試作FPY未達標時如何追蹤根因並改善？"
      },
      {
        "category": "[K]  KPI績效管理與報表  KPI Management & Reporting",
        "code": "K2",
        "dimension": "維修KPI管理",
        "ability": "維修KPI管理（MTBF/MTTR/維修完成率≥95%/重複故障率≤5%/緊急維修響應時間）",
        "levels": {
          "0": "不了解維修KPI",
          "1": "了解維修KPI各項指標計算方法",
          "2": "可設定維修KPI目標，日常追蹤，識別KPI警戒，啟動改善行動",
          "3": "建立維修KPI看板+有MTBF提升+MTTR縮短的系統改善案例+季度維修報告"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B認知│L3A必備(KPI追蹤+警戒識別)│L3B主導(維修KPI看板+改善案例)",
        "questions": "維修完成率如何計算？重複故障率>5%時如何識別根本原因並防止再發？"
      },
      {
        "category": "[K]  KPI績效管理與報表  KPI Management & Reporting",
        "code": "K3",
        "dimension": "治具KPI管理",
        "ability": "治具工程師KPI管理（治具完好率≥98%/治具按時交付率≥90%/治具一次驗收通過率/入庫準確率）",
        "levels": {
          "0": "不了解治具KPI",
          "1": "了解治具KPI各項指標定義與目標值",
          "2": "可追蹤治具KPI，識別低完好率治具，安排保養或修改",
          "3": "建立治具KPI看板+有治具完好率從<95%→≥98%改善案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B認知│L3A必備(KPI追蹤+低完好率識別)│L3B主導(治具KPI看板+改善)",
        "questions": "治具完好率計算方法（可用治具數/總治具數）？治具按時交付率低於目標時如何分析原因？"
      },
      {
        "category": "[K]  KPI績效管理與報表  KPI Management & Reporting",
        "code": "K4",
        "dimension": "工作時間軸管理",
        "ability": "工作時間軸管理（日/週/月工作重點管控：日常現場巡查+問題記錄/週平衡效率報告/月KPI彙整+阿米巴報告）",
        "levels": {
          "0": "無工作時間軸管理概念",
          "1": "了解日/週/月工作重點分配",
          "2": "可依時間軸完成各週期工作，週/月報告規範輸出",
          "3": "建立生技工作時間軸SOP+有時間軸管理提升工作效率的案例+指導新人"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L2B必備(時間軸工作完成)│L3A熟練(週月報告規範)│L3B主導(時間軸SOP建立)",
        "questions": "生技工程師「每日」最重要的工作項目有哪些（早會/現場巡查/問題點跟催）？月5日前需完成哪些月度任務？"
      },
      {
        "category": "[K]  KPI績效管理與報表  KPI Management & Reporting",
        "code": "K5",
        "dimension": "阿米巴損益核算",
        "ability": "阿米巴時間附加值核算（生技課損益計算/時間附加值公式/每日損益表填寫/月度KPI績效與獎金連結）",
        "levels": {
          "0": "不了解阿米巴概念",
          "1": "了解時間附加值計算公式（銷售額-製造費用）",
          "2": "可填寫每日損益表，分析異常，計算時間附加值率",
          "3": "主持阿米巴月度會議，帶領生技課達成附加值目標，有改善提升附加值率案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(時間附加值計算+日報填寫)│L3A必備(異常分析)│L4A主導(月度會議主持)",
        "questions": "生技課時間附加值計算包含哪些製造費用項目？附加值率低於目標時如何分析並改善？"
      },
      {
        "category": "[K]  KPI績效管理與報表  KPI Management & Reporting",
        "code": "K6",
        "dimension": "月度任務達成",
        "ability": "月度固定任務達成（月5日前：月KPI統計/阿米巴績效核算/輔耗材盤點/治具庫存盤點/月報提交）",
        "levels": {
          "0": "不了解月度固定任務",
          "1": "了解月5日前需完成的各項月度任務清單",
          "2": "每月按時完成全部月度固定任務，資料準確無誤差，按時提交月報",
          "3": "建立月度任務checklist+有月5日前100%達成連續季度紀錄+指導他人"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B必備(月度任務按時完成)│L3A熟練(資料準確+月報提交)│L3B主導(月度任務checklist)",
        "questions": "月5日前需完成的月度任務有哪五項？阿米巴績效核算數據有誤差如何追查並更正？"
      },
      {
        "category": "[L]  ERP/釘釘系統應用  ERP & DingTalk System",
        "code": "L1",
        "dimension": "ERP維修/製造模組",
        "ability": "鼎新ERP維修單/託外製令/BOM操作（系統登入/維修單開立結案/託外製令管理/BOM展開/庫存查詢）",
        "levels": {
          "0": "從未使用鼎新ERP",
          "1": "了解ERP基本模組與維修相關功能",
          "2": "熟練操作維修單全流程+託外製令開立追蹤+BOM展開查詢+庫存確認",
          "3": "多模組熟練（維修/採購/生產）+建立ERP操作SOP+指導他人+有ERP操作效率提升案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(ERP基礎操作)│L2B熟練(維修單+託外製令全流程)│L3A主導(多模組熟練+SOP建立)",
        "questions": "在鼎新ERP如何開立維修單並追蹤維修進度？託外製令結案需確認哪些清核條件？"
      },
      {
        "category": "[L]  ERP/釘釘系統應用  ERP & DingTalk System",
        "code": "L2",
        "dimension": "釘釘異常/專案",
        "ability": "釘釘異常回饋系統與專案管理（異常即時拍照上傳/指派責任人/追蹤關閉/NPI試產專案建立/里程碑管理）",
        "levels": {
          "0": "從未使用釘釘",
          "1": "了解釘釘異常回饋與專案功能基本操作",
          "2": "可正確發起異常回饋（照片+描述+指派）並追蹤至關閉，建立NPI試產專案並管控里程碑",
          "3": "建立異常回饋SOP+異常關閉時效≤24H管理+NPI專案按時達標率≥90%量化紀錄"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B必備(異常即時記錄)│L2A熟練(指派+追蹤)│L3A主導(SOP+關閉時效管理)",
        "questions": "釘釘異常記錄必填哪些欄位（工站/時間/照片/異常描述/責任人）？超過24H未關閉如何升級通知？"
      },
      {
        "category": "[L]  ERP/釘釘系統應用  ERP & DingTalk System",
        "code": "L3",
        "dimension": "釘釘文檔SOP管理",
        "ability": "釘釘文檔知識庫SOP版本管理（SOP上傳分類/版本控制/舊版歸檔/作業員確認已讀/有效性定期審查）",
        "levels": {
          "0": "從未使用釘釘文檔",
          "1": "了解釘釘文檔知識庫的基本功能",
          "2": "可上傳管理SOP到知識庫+正確分類+設定版本號+確認舊版回收+作業員已讀確認",
          "3": "建立知識庫管理規範+文件版本控制SOP+定期有效性審查+有知識庫SOP查詢使用率提升案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B必備(SOP上傳+版本控制)│L3A熟練(有效性審查)│L3B主導(知識庫管理規範)",
        "questions": "SOP新版發布後如何確認所有相關作業員已讀取最新版？舊版如何歸檔避免誤用？"
      },
      {
        "category": "[L]  ERP/釘釘系統應用  ERP & DingTalk System",
        "code": "L4",
        "dimension": "釘釘審批流程",
        "ability": "釘釘審批流程應用（ECN工程變更/治具需求/委外申請/設備維修/各類審批發起與追蹤/逾期催辦）",
        "levels": {
          "0": "從未使用釘釘審批",
          "1": "了解釘釘審批發起步驟",
          "2": "可正確發起各類審批+追蹤審批狀態+逾期催辦+審批完成後執行後續作業",
          "3": "熟練全類型審批+有審批效率優化案例（平均審批時效縮短）+指導他人"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L1B必備(基本審批發起)│L2A熟練(各類審批+催辦)│L2B主導(審批模板協助設定)",
        "questions": "ECN工程變更在釘釘需哪些人審核（生技→品保→相關主管）？審批被退回時如何修改重送？"
      },
      {
        "category": "[M]  IATF16949 / AS9100 品質體系  Quality Management System",
        "code": "M1",
        "dimension": "IATF16949製程條款",
        "ability": "IATF16949製程相關條款現場執行（8.5.1製程管制/8.5.2標識追溯/8.7不符合品/CP/SOP一致性）",
        "levels": {
          "0": "不了解IATF16949要求",
          "1": "了解IATF16949基本要求與製程相關條款",
          "2": "可依IATF16949程序書執行生產作業，配合稽核準備，識別不符合項",
          "3": "主導內部稽核準備+製程條款稽核培訓+有IATF稽核零缺失維持案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A認知│L2B必備(程序書執行+稽核配合)│L3A主導(稽核準備+改善)",
        "questions": "IATF16949稽核生技現場常被查核哪些項目（CP一致性/首件記錄/SC/CC資格）？如何快速準備稽核？"
      },
      {
        "category": "[M]  IATF16949 / AS9100 品質體系  Quality Management System",
        "code": "M2",
        "dimension": "PPAP文件配合",
        "ability": "PPAP量產移轉文件配合準備（製程流程圖PFD/PFMEA/Control Plan/工站SOP/人員訓練記錄/量測系統MSA）",
        "levels": {
          "0": "不了解PPAP文件",
          "1": "了解PPAP九大要素定義，知道生技負責哪幾項",
          "2": "可配合準備PPAP製程文件（PFD/PFMEA/CP/SOP），確認文件完整性",
          "3": "主導PPAP製程文件準備全流程+有客戶PPAP首次審核通過記錄"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B認知│L3A必備(PPAP文件準備)│L4A主導(PPAP全流程準備)",
        "questions": "PPAP中生技主要負責哪些文件（PFD/PFMEA/CP/SOP/人員訓練記錄）？首次審核未通過如何快速補件？"
      },
      {
        "category": "[M]  IATF16949 / AS9100 品質體系  Quality Management System",
        "code": "M3",
        "dimension": "AS9100D航太要求",
        "ability": "AS9100D航太品質管制特殊要求（零件可追溯性/首件批准制度/特殊製程認可/外部供應商稽核強化）",
        "levels": {
          "0": "不了解AS9100D要求",
          "1": "了解AS9100D與IATF16949的主要差異（追溯性/特殊製程認可）",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "6",
        "target_level": "L3B認知│L4A必備(AS9100D特殊要求執行)│L4B主導(AS9100D稽核準備)",
        "questions": "AS9100D對零件追溯性有哪些比IATF16949更嚴格的要求？特殊製程認可需要哪些額外文件？"
      }
    ],
    "salary_structure": [
      {
        "grade": "L1A",
        "title_zh": "初級維修人員",
        "title_en": "Technician",
        "salary_min": "30000",
        "salary_mid": "32500",
        "salary_max": "35000",
        "requirements": "完整OJT培訓計畫",
        "promotion": "建議試用期錄用",
        "amoeba": "執行者/學習者"
      },
      {
        "grade": "L1B",
        "title_zh": "維修人員",
        "title_en": "Technician",
        "salary_min": "32000",
        "salary_mid": "35000",
        "salary_max": "38000",
        "requirements": "3站以上獨立操作+基礎電性量測",
        "promotion": "建議錄用L1B",
        "amoeba": "執行者/學習者"
      },
      {
        "grade": "L2A",
        "title_zh": "資深維修人員",
        "title_en": "Technician",
        "salary_min": "35000",
        "salary_mid": "38500",
        "salary_max": "42000",
        "requirements": "電路圖判讀+維修單全流程+設備保養執行",
        "promotion": "建議L2A，確認維修實作",
        "amoeba": "執行者/學習者"
      },
      {
        "grade": "L2B",
        "title_zh": "資深維修人員(熟)/生技助理",
        "title_en": "Technician",
        "salary_min": "38000",
        "salary_mid": "42000",
        "salary_max": "46000",
        "requirements": "焊接修復IPC標準+ERP/釘釘操作",
        "promotion": "建議L2B，全程實作觀察",
        "amoeba": "執行者/學習者"
      },
      {
        "grade": "L3A",
        "title_zh": "助理生技工程師/助理治具工程師",
        "title_en": "Asst. PE",
        "salary_min": "43000",
        "salary_mid": "48000",
        "salary_max": "53000",
        "requirements": "NPI試作參與+SOP製作+8D分析+ST量測",
        "promotion": "建議L3A，改善案例審查",
        "amoeba": "執行者/學習者"
      },
      {
        "grade": "L3B",
        "title_zh": "助理生技工程師(熟)",
        "title_en": "Asst. PE",
        "salary_min": "47000",
        "salary_mid": "52000",
        "salary_max": "57000",
        "requirements": "五構面瓶頸分析+委外管理+PPAP配合",
        "promotion": "建議L3B，主導改善案例確認",
        "amoeba": "執行者/學習者"
      },
      {
        "grade": "L4A",
        "title_zh": "生技工程師/治具工程師",
        "title_en": "Process Engineer",
        "salary_min": "53000",
        "salary_mid": "59000",
        "salary_max": "65000",
        "requirements": "APQP主導+平衡效率改善+SPC/Cpk管制",
        "promotion": "建議L4A，跨部門協調能力確認",
        "amoeba": "獨立執行者"
      },
      {
        "grade": "L4B",
        "title_zh": "生技工程師(資)/治具工程師(資)",
        "title_en": "Process Engineer",
        "salary_min": "58000",
        "salary_mid": "65000",
        "salary_max": "72000",
        "requirements": "多件NPI量產移轉+MTBF提升量化案例",
        "promotion": "建議L4B，資深案例深度審查",
        "amoeba": "獨立執行者"
      },
      {
        "grade": "L5A",
        "title_zh": "資深生技工程師",
        "title_en": "Senior PE",
        "salary_min": "65000",
        "salary_mid": "73500",
        "salary_max": "82000",
        "requirements": "系統性IE改善+阿米巴主導+IATF稽核準備",
        "promotion": "建議L5A，管理能力評估",
        "amoeba": "Reserve Amoeba Leader"
      },
      {
        "grade": "L5B",
        "title_zh": "資深生技工程師(主)",
        "title_en": "Senior PE",
        "salary_min": "73000",
        "salary_mid": "82500",
        "salary_max": "92000",
        "requirements": "部門KPI全面達標+OJT體系建立",
        "promotion": "建議L5B，帶人育人能力確認",
        "amoeba": "Reserve Amoeba Leader"
      },
      {
        "grade": "L6A",
        "title_zh": "主任生技工程師/生技主管",
        "title_en": "Technician",
        "salary_min": "82000",
        "salary_mid": "96000",
        "salary_max": "110000",
        "requirements": "跨部門整合領導+顧問輔導能力",
        "promotion": "建議L6A，管理層評估",
        "amoeba": "L1 Amoeba巴長"
      }
    ]
  },
  {
    "job_name": "生產製造技術員/組長",
    "raw_job_name": "生產製造",
    "filename": "騏宏科技_生產製造職能薪資結構表_v1_6 (1).xlsx",
    "competencies": [
      {
        "category": "[A]  22工站組裝操作  Assembly 22-Station Operations",
        "code": "A1",
        "dimension": "22工站操作",
        "ability": "組裝生產線22工站全流程操作熟練度（製令工單→成品包裝）",
        "levels": {
          "0": "完全不會",
          "1": "可操作5站以下（需指導）",
          "2": "獨立完成全22站操作、自主品檢合格",
          "3": "熟練全站並可指導他人、建立標準作業"
        },
        "importance": 5,
        "weight": "15",
        "target_level": "L1B起認知 | L2A必備(10站以上) | L2B熟練(全22站獨立操作)",
        "questions": "說明最熟悉的3個工站作業要點；遇到品質異常如何處理？"
      },
      {
        "category": "[A]  22工站組裝操作  Assembly 22-Station Operations",
        "code": "A2",
        "dimension": "PIC燒錄操作",
        "ability": "工站3 IC PIC燒錄機操作（確認IC型號/程式版本/防呆）",
        "levels": {
          "0": "無",
          "1": "基礎操作須指導",
          "2": "獨立操作並確認燒錄版本正確",
          "3": "建立燒錄SOP＋防錯機制＋可指導他人"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(基礎操作) | L2B熟練(版本確認+防錯) | L3A主導(燒錄SOP建立)",
        "questions": "量產燒錄前如何確認IC型號與程式版本正確？防呆如何設計？"
      },
      {
        "category": "[A]  22工站組裝操作  Assembly 22-Station Operations",
        "code": "A3",
        "dimension": "線材焊接品質",
        "ability": "工站4 線材焊接品質管控（溫控烙鐵/焊點飽滿度/外觀檢查）",
        "levels": {
          "0": "無",
          "1": "基礎焊接須指導",
          "2": "獨立完成符合品質標準焊點、達一次合格率≥98%",
          "3": "建立焊接品質SOP+指導他人+有改善不良案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B認知 | L2A必備(一次合格率≥98%) | L2B熟練(SOP建立+指導)",
        "questions": "焊點虛焊如何目視判斷？溫控烙鐵溫度如何設定不同線材？"
      },
      {
        "category": "[A]  22工站組裝操作  Assembly 22-Station Operations",
        "code": "A4",
        "dimension": "半成品測試",
        "ability": "工站7 半成品測試操作（DC POWER 10-30V/10A電性功能測試）",
        "levels": {
          "0": "無",
          "1": "基礎操作知道電壓電流設定",
          "2": "獨立執行全功能測試並正確判定合格/不合格",
          "3": "建立測試SOP+異常分析+指導他人"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(獨立執行全功能測試) | L2B熟練(異常分析) | L3A主導(測試SOP建立)",
        "questions": "半成品測試不合格時如何開維修單？如何區分電路問題vs組裝問題？"
      },
      {
        "category": "[A]  22工站組裝操作  Assembly 22-Station Operations",
        "code": "A5",
        "dimension": "燒機作業",
        "ability": "工站11 燒機作業（架設/DC POWER 3000W/28V/全載1~4H/首件確認）",
        "levels": {
          "0": "無",
          "1": "基礎操作知道燒機時間",
          "2": "獨立架設燒機+30分鐘內首件確認+完畢敲擊確認",
          "3": "建立燒機SOP+異常處理+良品率監控≥99.5%"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(獨立架設燒機) | L2B熟練(首件確認+異常處理) | L3A主導(燒機SOP建立)",
        "questions": "燒機時發現產品異常如何處理？全載燒機電流如何確認避免過載？"
      },
      {
        "category": "[A]  22工站組裝操作  Assembly 22-Station Operations",
        "code": "A6",
        "dimension": "灌膠作業",
        "ability": "工站12-14 灌膠作業（硬膠A/B劑/軟膠/燈蓋可程式灌膠機）",
        "levels": {
          "0": "無",
          "1": "基礎操作知道A/B劑比例概念",
          "2": "獨立操作三種灌膠設備（硬膠/軟膠/可程式）正確排氣泡",
          "3": "建立灌膠SOP+比例驗證+氣泡改善案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A認知(A/B劑比例) | L2B必備(三種灌膠獨立操作) | L3A主導(灌膠SOP建立)",
        "questions": "灌膠後出現氣泡如何處理？硬膠A/B劑比例偏差對固化有何影響？"
      },
      {
        "category": "[A]  22工站組裝操作  Assembly 22-Station Operations",
        "code": "A7",
        "dimension": "氣密檢測",
        "ability": "工站15 氣密檢測（抽真空機/壓力桶/IP防水等級判定）",
        "levels": {
          "0": "無",
          "1": "基礎操作知道壓力設定",
          "2": "獨立執行氣密測試並正確判定洩漏率",
          "3": "建立氣密測試SOP+失效根因分析+密封改善建議"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(獨立執行+洩漏率判定) | L3A熟練(失效分析) | L3B主導(氣密SOP建立)",
        "questions": "IP67氣密測試壓力如何設定？洩漏判定標準為何？失敗後如何補救？"
      },
      {
        "category": "[A]  22工站組裝操作  Assembly 22-Station Operations",
        "code": "A8",
        "dimension": "成品測試",
        "ability": "工站20 成品測試（簡易配光機光學/電性全項測試）",
        "levels": {
          "0": "無",
          "1": "基礎操作知道測試項目",
          "2": "獨立執行光學+電性全項測試並正確判定",
          "3": "建立成品測試SOP+不良分類統計+改善建議"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(獨立執行全項測試) | L3A熟練(不良分類統計) | L3B主導(測試SOP建立)",
        "questions": "配光機測試如何判斷光型合格？電性測試不合格項目如何分類記錄？"
      },
      {
        "category": "[B]  品質自主管理  Quality Self-Management",
        "code": "B1",
        "dimension": "自主檢查執行",
        "ability": "作業員自主品質管理（依自主檢查表執行/不良品隔離通報/首件確認配合）",
        "levels": {
          "0": "無",
          "1": "了解自主檢查重要性",
          "2": "確實執行自主檢查+不良品正確隔離+首件配合品保確認",
          "3": "建立自主檢查SOP+指導新人+有改善品質案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L1B必備(自主檢查執行) | L2A熟練(不良品隔離+首件配合) | L2B主導(指導新人+改善案例)",
        "questions": "如何判斷自主檢查時發現的不良品應隔離還是可繼續生產？首件如何配合品保確認？"
      },
      {
        "category": "[B]  品質自主管理  Quality Self-Management",
        "code": "B2",
        "dimension": "不良品處理",
        "ability": "不良品識別/隔離/標示/追蹤處理流程（開維修單/通報/記錄）",
        "levels": {
          "0": "無",
          "1": "知道不良品識別標示方法",
          "2": "獨立完成不良品全流程處理含開維修單+記錄統計",
          "3": "分析不良趨勢+8D根因分析+有持續改善案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(全流程處理) | L2B熟練(記錄統計) | L3A主導(趨勢分析+8D根因分析)",
        "questions": "維修單(MD-30-18001)如何正確開立？不良品如何標示避免與良品混淆？"
      },
      {
        "category": "[B]  品質自主管理  Quality Self-Management",
        "code": "B3",
        "dimension": "換線首件管理",
        "ability": "換線/換料後首件確認管理（首件填寫/提交品保/不合格處理）",
        "levels": {
          "0": "無",
          "1": "了解首件確認的目的",
          "2": "可獨立完成首件確認作業並正確記錄",
          "3": "建立首件確認SOP+有異常處理完整案例+指導他人"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B必備(獨立首件確認) | L3A熟練(異常處理) | L3B主導(首件SOP建立+指導)",
        "questions": "首件確認哪些項目最重要？首件不合格時如何處理生產線？"
      },
      {
        "category": "[B]  品質自主管理  Quality Self-Management",
        "code": "B4",
        "dimension": "品質KPI追蹤",
        "ability": "生產品質KPI管理（一次合格率FPY/燒機良品率≥99.5%/首件合格率≥99%）",
        "levels": {
          "0": "無",
          "1": "了解FPY計算方法",
          "2": "可計算各工站品質KPI並追蹤異常",
          "3": "建立品質KPI看板+分析趨勢+有改善成果"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B認知 | L3A必備(KPI計算追蹤) | L3B主導(KPI看板建立+趨勢分析)",
        "questions": "FPY(一次合格率)計算公式？燒機良品率降低時如何追蹤根因？"
      },
      {
        "category": "[B]  品質自主管理  Quality Self-Management",
        "code": "B5",
        "dimension": "安燈(Andon)操作",
        "ability": "安燈(Andon)四色燈操作規範（綠/黃/紅/藍燈意義）與響應SLA（90秒到場/5分鐘決定/15分鐘啟動對策）",
        "levels": {
          "0": "不了解安燈",
          "1": "知道四色燈意義",
          "2": "發現異常立即正確按燈+通報，90秒內通知項目負責人",
          "3": "建立安燈響應SLA+記錄響應時效+有改善響應速度案例（響應率≥95%）"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1A必備(安燈意義認知) | L1B必備(正確按燈+通報) | L2A主導(響應SLA建立+時效追蹤)",
        "questions": "紅燈亮起後項目負責人應在幾秒內到場？黃燈與紅燈的差異？藍燈代表什麼狀態？"
      },
      {
        "category": "[B]  品質自主管理  Quality Self-Management",
        "code": "B6",
        "dimension": "異常分級響應管理",
        "ability": "生產異常P1~P4分級管理（P1整線停機/P2工站停機/P3減速/P4輕微預防），三大異常處置閾值：①自主檢查不良率>3%→10分鐘排除或停線；②連續相同問題3個→10分鐘通報生技/品保；③批量10%不良→強制停線",
        "levels": {
          "0": "不了解異常分級",
          "1": "了解P1~P4定義+三大閾值（>3%/連續3件/批量10%）",
          "2": "能正確判定異常等級並在閾值觸發時立即執行對應動作（10分鐘排除或停線通報）",
          "3": "建立異常分級SOP+閾值達標率追蹤+有改善P1/P2響應速度至100%案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B必備(三大閾值認知) | L2A必備(閾值觸發正確執行) | L2B主導(響應SLA追蹤+閾值SOP建立)",
        "questions": "自主檢查不良率達到多少必須在10分鐘內排除否則停線？連續幾件相同問題必須通報生技/品保？達批量多少比例須強制停線？"
      },
      {
        "category": "[C]  設備保養點檢  Equipment Maintenance",
        "code": "C1",
        "dimension": "一級保養執行",
        "ability": "設備日常點檢（FMMD0303日常點檢表/清潔/加油/目視檢查）",
        "levels": {
          "0": "無",
          "1": "了解一級保養項目",
          "2": "確實執行日常點檢+發現異常開維修單",
          "3": "建立保養SOP+指導新人+有設備壽命延長記錄"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B必備(日常點檢) | L2A熟練(異常開維修單) | L2B主導(指導新人+保養記錄)",
        "questions": "FMMD0303點檢表需確認哪些項目？發現設備異常如何開立維修單？"
      },
      {
        "category": "[C]  設備保養點檢  Equipment Maintenance",
        "code": "C2",
        "dimension": "維修單開立",
        "ability": "設備異常通報與維修單(MD-30-18001)開立作業",
        "levels": {
          "0": "無",
          "1": "了解維修單格式",
          "2": "正確開立維修單+追蹤維修進度+協助生技測試",
          "3": "分析設備異常趨勢+MTBF/MTTR追蹤+預防保養建議"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(正確開立維修單) | L2B熟練(追蹤+協助測試) | L3A主導(趨勢分析+預防保養)",
        "questions": "維修單需填寫哪些必要資訊？如何追蹤維修完成狀態？"
      },
      {
        "category": "[C]  設備保養點檢  Equipment Maintenance",
        "code": "C3",
        "dimension": "關鍵設備操作",
        "ability": "組裝產線關鍵設備操作規範（自動出線溫控烙鐵機/灌膠機/抽真空機/無碳刷電動起子）",
        "levels": {
          "0": "無",
          "1": "基礎操作知道安全規範",
          "2": "熟練操作≥3種關鍵設備+品質管控",
          "3": "全部關鍵設備熟練+建立操作規範+指導他人"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(≥3種設備熟練) | L2B必備(全部設備熟練) | L3A主導(操作規範建立)",
        "questions": "無碳刷電動起子扭力如何設定驗證？灌膠機A/B劑比例如何校準？"
      },
      {
        "category": "[C]  設備保養點檢  Equipment Maintenance",
        "code": "C4",
        "dimension": "設備保養四級分類",
        "ability": "設備保養四級分類管理（日常點檢/週保養/月保養/年大保養）各級頻率/執行人/主要項目/記錄表單",
        "levels": {
          "0": "不了解保養分級",
          "1": "了解四級保養分類與執行人",
          "2": "確實執行日常點檢+配合週月保養+記錄完整無漏項",
          "3": "建立保養計畫排程+異常趨勢追蹤+有MTBF≥200小時維持案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1A必備(日常點檢執行) | L2A必備(週保養配合) | L3A主導(月保養+保養計畫排程)",
        "questions": "日常點檢每班確認哪些項目？週保養由誰執行？年大保養需要廠商協助的原因？"
      },
      {
        "category": "[C]  設備保養點檢  Equipment Maintenance",
        "code": "C5",
        "dimension": "設備故障緊急處置六步驟",
        "ability": "設備故障緊急處置六步驟（按安燈→通報→評估→快速修復or備援→首件確認→填寫故障報告），MTTR目標：精密≤2H/組裝≤1H",
        "levels": {
          "0": "不知如何處置",
          "1": "了解六步驟流程",
          "2": "能正確執行前三步驟（按燈+通報+評估）+配合維修",
          "3": "主導備援計畫啟動+填寫故障報告+根因分析+有MTTR縮短至目標案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B必備(按燈通報) | L2A必備(六步驟配合執行) | L3A主導(備援計畫+故障報告)",
        "questions": "設備故障維修超過30分鐘如何啟動備援？MTTR計算公式？設備故障報告需分析哪些根因項目？"
      },
      {
        "category": "[D]  5S現場管理  5S Workplace Management",
        "code": "D1",
        "dimension": "整理 (Seiri)",
        "ability": "整理：區分必要/非必要物品，清除現場不需要的物品（紅牌作戰/定期盤點）",
        "levels": {
          "0": "無法區分必要與非必要物品",
          "1": "了解整理原則，可識別非必要物品",
          "2": "主動執行紅牌作戰+定期盤點清除非必要品，維持區域整潔",
          "3": "建立整理標準清單+定期執行+有清除非必要品量化記錄+指導他人"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L1A必備(整理認知) | L1B必備(主動執行整理) | L2A主導(紅牌作戰執行+標準清單)",
        "questions": "如何判斷工站上哪些物品是非必要品？紅牌作戰如何執行？工站整理後如何維持？"
      },
      {
        "category": "[D]  5S現場管理  5S Workplace Management",
        "code": "D2",
        "dimension": "整頓 (Seiton)",
        "ability": "整頓：6定規則（定品/定位/定量/定標識/定責任/定方法）應用，30秒內找到任何工具，物品回歸定位率≥98%",
        "levels": {
          "0": "無法做到定位放置",
          "1": "了解6定規則(定品定位定量定標識定責任定方法)",
          "2": "確實執行工站6定規則+30秒內找到任何工具+物品回歸定位率≥98%",
          "3": "規劃最佳6定配置+建立視覺化定位標準（影像標示板）+有效率提升案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L1B必備(6定規則執行) | L2A熟練(30秒找到工具+回歸率≥98%) | L2B主導(6定配置優化+視覺化標準)",
        "questions": "6定規則與三定原則的差異？30秒內找到工具如何驗證？影像標示板如何應用於工具定位管理？"
      },
      {
        "category": "[D]  5S現場管理  5S Workplace Management",
        "code": "D3",
        "dimension": "清掃 (Seiso)",
        "ability": "清掃：工站/設備日常清潔（清掃計畫/汙染源識別/清掃點檢表執行）",
        "levels": {
          "0": "不主動清掃",
          "1": "了解清掃範圍與清掃點檢表",
          "2": "確實執行清掃計畫+發現汙染源並消除+設備清掃點檢完整",
          "3": "制定清掃標準+識別設備潛在問題+有清掃改善防止再汙染案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L1A必備(清掃執行) | L1B熟練(清掃點檢完整) | L2A主導(汙染源消除+清掃標準制定)",
        "questions": "灌膠站如何清掃確保殘膠不影響次日作業？清掃中發現設備異狀如何處理？"
      },
      {
        "category": "[D]  5S現場管理  5S Workplace Management",
        "code": "D4",
        "dimension": "清潔 (Seiketsu)",
        "ability": "清潔：標準化維持三S成果（目視管理/看板/標準書/定期稽核/照片標準對比）",
        "levels": {
          "0": "無法維持三S成果",
          "1": "了解清潔維持機制",
          "2": "依清潔標準維持工站整潔+主動配合5S稽核+達標評分≥90分",
          "3": "建立清潔標準書（含照片對比）+制定5S稽核表+持續維持評分≥95分"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L1B必備(配合5S稽核) | L2A熟練(評分≥90分維持) | L2B主導(清潔標準書建立+評分≥95分)",
        "questions": "5S稽核評分表有哪些關鍵項目？照片標準如何用於培訓新人？評分低於90分如何追蹤改善？"
      },
      {
        "category": "[D]  5S現場管理  5S Workplace Management",
        "code": "D5",
        "dimension": "素養 (Shitsuke)",
        "ability": "素養：養成遵守規則的習慣（著裝規範/安全作業/SOP自律執行/5S習慣化）",
        "levels": {
          "0": "不遵守規定",
          "1": "了解素養的重要性",
          "2": "自律遵守所有現場規範+SOP執行無偏差+協助提醒同仁",
          "3": "以身作則帶領團隊5S素養+有素養量化指標（如SOP偏差率=0）+培育5S文化"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L1A必備(遵守規範) | L1B熟練(SOP執行無偏差) | L2A主導(提醒同仁+5S文化培育)",
        "questions": "如何評估一個人的5S素養？SOP偏差率如何追蹤？如何在團隊中建立5S習慣？"
      },
      {
        "category": "[D]  5S現場管理  5S Workplace Management",
        "code": "D6",
        "dimension": "5S稽核管理",
        "ability": "5S稽核管理（稽核計畫制定/執行評分/不合格追蹤/月度5S報告）",
        "levels": {
          "0": "無",
          "1": "了解5S稽核流程",
          "2": "可執行5S稽核+填寫評分表+追蹤不合格項目改善",
          "3": "建立5S稽核計畫+月度5S趨勢報告+有5S評分持續提升案例（≥90→≥95）"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L2B必備(稽核執行+不合格追蹤) | L3A主導(稽核計畫+月度報告) | L3B主導(趨勢分析+文化推動)",
        "questions": "5S稽核頻率如何設定？稽核不合格項目如何設定改善時限並追蹤？如何讓5S評分從90分提升至95分以上？"
      },
      {
        "category": "[D]  5S現場管理  5S Workplace Management",
        "code": "D7",
        "dimension": "區域標示與視覺化管理",
        "ability": "生產區域五色標示系統（黃色=劃分通道/綠色=良品待入庫/藍色=待檢入料/紅色=不良品報廢危險/虎紋線=電氣箱階梯警戒）與視覺化管理看板",
        "levels": {
          "0": "不了解五色標示意義",
          "1": "了解五色標示用途（黃/綠/藍/紅/虎紋線各代表什麼）",
          "2": "正確依五色標示分區放置所有物料+通道保持暢通+不良品確實放紅色區",
          "3": "規劃合理五色標示配置+建立視覺化管理看板+有標示改善提案案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L1A必備(五色標示意義) | L1B必備(依五色標示正確放置) | L2A主導(五色標示配置優化)",
        "questions": "藍色標示區是什麼區？紅色區域的物品應如何管理？虎紋線標示區域代表什麼注意事項？工站作業員應站在哪個顏色的區域內？"
      },
      {
        "category": "[D]  5S現場管理  5S Workplace Management",
        "code": "D8",
        "dimension": "防護具配戴規範",
        "ability": "各工站防護具強制配戴規範：全員靜電環+制服識別證；一般站=手指套/PU手套；焊接站=護目鏡+專用手套；半測/成測=墨鏡或反射板；燒機站=護目鏡+燒機室內配戴墨鏡；下班關閉總開關/冷氣/烙鐵/風槍",
        "levels": {
          "0": "不了解防護具配戴規定",
          "1": "了解自己工站應配戴哪些防護具",
          "2": "每日自動正確配戴規定防護具+提醒違規同仁+下班確認關閉設備清單",
          "3": "建立防護具配戴稽核+追蹤未配戴違規率至0%+有安全事故0件/月維持案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L1A必備(自己工站防護具配戴) | L1B必備(提醒違規+下班關機確認) | L2A主導(防護具稽核+違規追蹤)",
        "questions": "焊接站（工站4）必須配戴哪些防護具？燒機室內為何需要墨鏡？下班時需確認哪些設備已關閉？靜電環配戴的原因是什麼？"
      },
      {
        "category": "[E]  QCC品質圈與提案改善  QCC & Kaizen Proposal",
        "code": "E1",
        "dimension": "提案改善制度",
        "ability": "提案改善制度執行（問題識別/改善提案填寫/效益估算/追蹤實施）",
        "levels": {
          "0": "從不提案",
          "1": "了解提案改善制度流程",
          "2": "每月至少1件有效提案+有量化改善效益（品質/效率/安全/成本）",
          "3": "年度提案≥12件且多件採用+有跨工站系統性改善提案+指導他人提案"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B必備(每月1件提案) | L2A熟練(有效提案+效益量化) | L2B主導(≥12件/年+指導他人)",
        "questions": "請說明一個你提出的改善提案：發現了什麼問題？如何改善？效益是什麼？提案表如何填寫效益估算？"
      },
      {
        "category": "[E]  QCC品質圈與提案改善  QCC & Kaizen Proposal",
        "code": "E2",
        "dimension": "QCC品質圈組建",
        "ability": "QCC品質圈組建與主題選定（圈名/圈員/主題選定/目標設定/活動計畫）",
        "levels": {
          "0": "從未參與QCC",
          "1": "了解QCC的目的與組成要素",
          "2": "可參與QCC圈活動+積極貢獻改善意見+配合執行改善步驟",
          "3": "擔任QCC圈長+主導主題選定+制定活動計畫+有發表成果案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(參與QCC活動) | L2B熟練(積極貢獻改善) | L3A主導(QCC圈長+主題選定+計畫制定)",
        "questions": "QCC主題如何選定？選題評分矩陣如何使用？目標值如何設定有挑戰性又可達成？"
      },
      {
        "category": "[E]  QCC品質圈與提案改善  QCC & Kaizen Proposal",
        "code": "E3",
        "dimension": "QCC問題分析工具",
        "ability": "QCC問題分析工具應用（QC七手法：柏拉圖/特性要因圖/管制圖/直方圖/散佈圖/查檢表/層別法）",
        "levels": {
          "0": "不了解QC七手法",
          "1": "了解QC七手法定義與用途",
          "2": "可正確選用並應用QC七手法分析製程問題+製作圖表",
          "3": "熟練應用全部七手法+有多件QCC分析報告+指導他人選用正確工具"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(了解七手法) | L3A必備(正確選用應用+圖表製作) | L3B主導(熟練全部+指導他人)",
        "questions": "針對「灌膠氣泡不良」問題，你會選用哪些QC手法分析？如何用柏拉圖找出前三大不良原因？特性要因圖如何展開4M？"
      },
      {
        "category": "[E]  QCC品質圈與提案改善  QCC & Kaizen Proposal",
        "code": "E4",
        "dimension": "QCC改善對策實施",
        "ability": "QCC改善對策擬定與實施（對策矩陣/試行/效果確認/標準化/水平展開）",
        "levels": {
          "0": "無",
          "1": "了解改善對策實施步驟",
          "2": "可依對策矩陣執行改善措施+確認效果+更新SOP",
          "3": "主導改善對策全流程+有效果顯著改善並標準化+水平展開至其他工站"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L3A必備(依對策矩陣執行+效果確認) | L3B熟練(標準化更新SOP) | L4A主導(水平展開+多工站改善)",
        "questions": "改善後效果如何確認是否達目標值？若效果不佳如何修正對策再試行？標準化如何確保改善成果不回退？"
      },
      {
        "category": "[E]  QCC品質圈與提案改善  QCC & Kaizen Proposal",
        "code": "E5",
        "dimension": "QCC成果發表",
        "ability": "QCC成果發表（報告撰寫/PPT製作/口頭發表/Q&A應對/評審評分）",
        "levels": {
          "0": "從未發表",
          "1": "了解QCC發表流程與格式",
          "2": "可協助製作QCC發表PPT+配合上台說明負責章節",
          "3": "獨立主導全報告撰寫+口頭發表+Q&A應對+有公司/外部競賽發表紀錄"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B必備(協助製作PPT) | L3A必備(負責章節說明) | L3B主導(獨立全程發表+競賽參與)",
        "questions": "QCC發表報告結構包含哪些必要章節？如何在3分鐘內說明改善主題與成果？評審最常問哪類問題？"
      },
      {
        "category": "[E]  QCC品質圈與提案改善  QCC & Kaizen Proposal",
        "code": "E6",
        "dimension": "改善成果量化追蹤",
        "ability": "改善成果量化追蹤與水平展開（Before/After數據/節省金額估算/效益維持確認）",
        "levels": {
          "0": "無",
          "1": "了解改善成果量化方法",
          "2": "可計算改善前後差異+估算節省成本+製作效益報告",
          "3": "建立改善成果追蹤系統+水平展開至相關工站+有年度改善效益匯總報告"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L3A必備(Before/After計算+成本估算) | L3B熟練(效益報告製作) | L4A主導(追蹤系統建立+水平展開)",
        "questions": "一件改善提案如何估算年度節省金額？改善效果如何確認持續有效而不回退？水平展開前需確認哪些條件？"
      },
      {
        "category": "[F]  生產計畫執行  Production Planning Execution",
        "code": "F1",
        "dimension": "排程確認執行",
        "ability": "生產排程確認與執行（確認工單號/機種/數量/核對排程/釘釘掃碼）",
        "levels": {
          "0": "無",
          "1": "了解排程確認流程",
          "2": "獨立確認並執行日生產排程+異常及時回報",
          "3": "協助制定生產計畫+分析達成率+有調整排程能力"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(獨立確認+執行排程) | L2B熟練(異常回報) | L3A主導(協助計畫+達成率分析)",
        "questions": "生產排程如何與備料計畫連動確認？排程異常如何向生管回報？"
      },
      {
        "category": "[F]  生產計畫執行  Production Planning Execution",
        "code": "F2",
        "dimension": "換線管理",
        "ability": "生產換線管理（換線通知/換線時間管控 ≤10分鐘(同類型)/≤15分鐘(跨類型)/換線記錄）",
        "levels": {
          "0": "無",
          "1": "了解換線流程概念",
          "2": "獨立完成換線並達成換線時間目標",
          "3": "分析換線時間瓶頸+SMED改善+有換線效率提升案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L2B必備(獨立換線+時間目標達成) | L3A熟練(瓶頸分析) | L3B主導(SMED改善)",
        "questions": "同類型換線如何控制在10分鐘內？換線確認清單需確認哪些項目？"
      },
      {
        "category": "[F]  生產計畫執行  Production Planning Execution",
        "code": "F3",
        "dimension": "生產日報表",
        "ability": "生產日報表填寫（產量/工時/不良數/設備稼動率記錄統計）",
        "levels": {
          "0": "無",
          "1": "了解日報表格式",
          "2": "正確填寫日報表+數據準確及時",
          "3": "分析日報數據趨勢+識別生產異常+KPI達標追蹤"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L2A必備(正確填寫) | L2B熟練(數據準確及時) | L3A主導(趨勢分析+異常識別)",
        "questions": "生產日報表中稼動率如何計算？不良數統計如何分類追蹤？"
      },
      {
        "category": "[F]  生產計畫執行  Production Planning Execution",
        "code": "F4",
        "dimension": "生產異常處理",
        "ability": "生產異常識別與快速處理（品質/設備/物料/人員異常的初判與通報）",
        "levels": {
          "0": "無",
          "1": "了解異常分類方法",
          "2": "能獨立初判異常類型+及時通報+配合處理",
          "3": "主導異常根因分析+制定預防措施+有可量化改善案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(初判異常+及時通報) | L3A熟練(配合根因分析) | L3B主導(預防措施制定)",
        "questions": "遇到批次性品質異常如何判斷是製程問題還是物料問題？異常通報時效要求為何？"
      },
      {
        "category": "[F]  生產計畫執行  Production Planning Execution",
        "code": "F5",
        "dimension": "班前點檢作業",
        "ability": "班前點檢六項確認（製令工單/物料備料/作業指導書版本/設備治具/人力配置/安全確認），項目負責人開班前30分鐘完成",
        "levels": {
          "0": "未執行班前點檢",
          "1": "了解班前點檢六項內容",
          "2": "獨立完成班前點檢全六項，無遺漏，記錄簽核規範",
          "3": "建立班前點檢SOP+異常快速通報機制+有因點檢避免重大問題案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L1B必備(配合班前點檢) | L2A必備(獨立完成六項點檢) | L2B主導(班前點檢SOP建立)",
        "questions": "班前點檢作業指導書版本確認如何執行（新版到位/舊版回收）？設備治具點檢中DC POWER如何校準？人力配置中代班人員需確認什麼資格？"
      },
      {
        "category": "[F]  生產計畫執行  Production Planning Execution",
        "code": "F6",
        "dimension": "可視化管理執行",
        "ability": "生產可視化管理五項（生產計畫白板每小時更新/WIP看板/安燈/品質警示牌/換線倒計時）",
        "levels": {
          "0": "無可視化管理概念",
          "1": "了解五項可視化工具用途",
          "2": "每小時確實更新生產計畫白板+WIP看板準確+品質警示牌即時",
          "3": "建立可視化管理標準+看板異常0漏更新+有看板驅動快速決策改善案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B必備(看板更新配合) | L2A必備(每小時準確更新五項) | L2B主導(可視化管理標準建立)",
        "questions": "生產計畫白板每小時必須更新哪些數據？WIP看板瓶頸工站如何標示紅燈？品質警示牌超標自動觸發什麼動作？"
      },
      {
        "category": "[F]  生產計畫執行  Production Planning Execution",
        "code": "F7",
        "dimension": "每小時目標產量管理",
        "ability": "每小時目標產量管理（淨工時380分鐘/班，有效工時6.33H，每小時達成率，連續2H低於80%須報告並提對策）",
        "levels": {
          "0": "不了解每小時目標計算",
          "1": "了解淨工時380分鐘計算基礎（480-100寬放=380分鐘）",
          "2": "正確計算每小時目標產量+每小時追蹤達成率+連續2H低於80%立即通報",
          "3": "建立每小時產量看板+達成率趨勢分析+有改善低達成率至目標案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B必備(淨工時概念) | L2A必備(每小時目標計算+追蹤) | L2B主導(連續異常報告+對策)",
        "questions": "為什麼每小時目標產量要用淨工時380分鐘而非480分鐘計算？連續2小時低於80%達成率應通報誰並提供哪些對策？"
      },
      {
        "category": "[G]  備料/物料管理  Material & Supply Management",
        "code": "G1",
        "dimension": "備料領料作業",
        "ability": "依工單BOM備料領料（核對品號/規格/數量/批號）先進先出原則",
        "levels": {
          "0": "無",
          "1": "了解備料流程",
          "2": "獨立完成備料領料+核對BOM正確+先進先出執行",
          "3": "建立備料SOP+二次補發料管理+有缺料預警機制"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(獨立備料領料) | L2B熟練(BOM核對+FIFO) | L3A主導(備料SOP+缺料預警)",
        "questions": "備料時如何核對BOM確認品號規格正確？先進先出如何確保在備料中執行？"
      },
      {
        "category": "[G]  備料/物料管理  Material & Supply Management",
        "code": "G2",
        "dimension": "缺料回報",
        "ability": "缺料識別與回報流程（及時回報生管/採購/倉管/調整排程）",
        "levels": {
          "0": "無",
          "1": "了解缺料回報流程",
          "2": "及時識別缺料+正確回報相關單位+配合排程調整",
          "3": "預先預測缺料風險+建立缺料預警SOP+有改善缺料頻率案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B必備(及時回報) | L3A熟練(排程調整配合) | L3B主導(缺料預警+改善)",
        "questions": "缺料回報應通知哪些單位？缺料影響排程時如何評估替代方案？"
      },
      {
        "category": "[G]  備料/物料管理  Material & Supply Management",
        "code": "G3",
        "dimension": "輔耗材管理",
        "ability": "輔耗材管理（請領/庫存管控/用量統計/膠類管理）",
        "levels": {
          "0": "無",
          "1": "了解輔耗材請領流程",
          "2": "執行輔耗材庫存管控+用量統計+及時補請",
          "3": "分析用量趨勢+成本控制+有呆料預防案例"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L2B必備(庫存管控+及時補請) | L3A熟練(用量統計) | L3B主導(趨勢分析+成本控制)",
        "questions": "灌膠用膠類如何管控有效期限？輔耗材用量如何與生產計畫連動預測？"
      },
      {
        "category": "[G]  備料/物料管理  Material & Supply Management",
        "code": "G4",
        "dimension": "退補料作業",
        "ability": "退料/補料作業（超領退倉/二次補發料/製損/材損單開立）",
        "levels": {
          "0": "無",
          "1": "了解退補料流程",
          "2": "獨立完成退補料作業+ERP單據正確開立",
          "3": "分析退補料原因+減少損耗+建立管控SOP"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L2B必備(獨立退補料作業) | L3A熟練(ERP單據開立) | L3B主導(損耗分析+管控SOP)",
        "questions": "超領料件如何辦理退倉？製損與材損的ERP單據差異？"
      },
      {
        "category": "[G]  備料/物料管理  Material & Supply Management",
        "code": "G5",
        "dimension": "緊急發料管理",
        "ability": "緊急發料（插單/急單）管理流程（生管通知巴長確認→物管30分鐘完成緊急備料→開ERP緊急領料單→不得以口頭替代）",
        "levels": {
          "0": "不了解緊急發料流程",
          "1": "了解緊急發料需巴長確認+ERP開立緊急領料單",
          "2": "在規定時間內完成緊急備料齊套確認+ERP單據正確開立",
          "3": "建立緊急發料SOP+追蹤緊急備料完成時效（目標30分鐘內）+有改善緊急缺料響應速度案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(緊急備料執行) | L2B必備(ERP緊急領料單+30分鐘達標) | L3A主導(緊急發料SOP建立)",
        "questions": "緊急插單需要哪兩個層級確認才能開始備料？ERP緊急領料單與一般領料單的差異？30分鐘內緊急備料齊套如何確認？"
      },
      {
        "category": "[G]  備料/物料管理  Material & Supply Management",
        "code": "G6",
        "dimension": "ERP單據開立判斷基準",
        "ability": "鼎新ERP四種生產相關單據判斷基準（製損單/材損單/部門領料單/轉撥單）各適用情境與開立流程",
        "levels": {
          "0": "不了解四種單據差異",
          "1": "了解四種單據名稱與定義",
          "2": "能依情境正確判斷開立哪種單據+填寫必要資訊+主管簽核",
          "3": "建立ERP單據判斷SOP+零開立錯誤+指導新人+有庫存帳務差異減少案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(四種單據判斷) | L2B必備(正確開立+零錯誤) | L3A主導(ERP單據判斷SOP建立)",
        "questions": "灌膠比例設定錯誤造成的物料損耗應開哪種單？來料不良造成的損耗應開哪種單？SMT產出PCBA轉組裝線要開哪種單？"
      },
      {
        "category": "[H]  技術文件與SOP  Technical Documentation",
        "code": "H1",
        "dimension": "SOP閱讀執行",
        "ability": "依SOP標準作業程序執行（工站SOP/WIMD0103/WIQA規範）",
        "levels": {
          "0": "無",
          "1": "基礎閱讀SOP須指導",
          "2": "獨立依SOP執行所有工站作業無偏差",
          "3": "發現SOP問題主動回報+協助修訂+可教導新人"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L1A必備(SOP閱讀) | L1B必備(無偏差執行) | L2A主導(問題回報+協助修訂)",
        "questions": "作業與SOP不符時如何處理？SOP版本更新後如何確認執行正確版本？"
      },
      {
        "category": "[H]  技術文件與SOP  Technical Documentation",
        "code": "H2",
        "dimension": "SOP撰寫修訂",
        "ability": "工站SOP撰寫與修訂能力（WI作業指導書/FMRD0231格式）",
        "levels": {
          "0": "無",
          "1": "可閱讀並理解現有SOP",
          "2": "可依FMRD0231格式撰寫工站WI/SOP",
          "3": "建立SOP體系+主導SOP審查+有SOP改善降低錯誤案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L2B認知 | L3A必備(獨立撰寫WI) | L3B主導(SOP體系建立+審查)",
        "questions": "工站WI如何確保步驟完整？圖示如何讓作業員容易理解？"
      },
      {
        "category": "[H]  技術文件與SOP  Technical Documentation",
        "code": "H3",
        "dimension": "ECN工程變更",
        "ability": "工程變更通知(ECN)接收執行（4H內知會現場/更新SOP/換料確認）",
        "levels": {
          "0": "無",
          "1": "了解ECN的目的與流程",
          "2": "及時接收ECN+在規定時間內完成現場更新",
          "3": "ECN影響評估+主導現場變更執行+確認首件合格"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L2B必備(及時接收ECN) | L3A熟練(現場更新執行) | L3B主導(影響評估+首件確認)",
        "questions": "接到ECN後第一步要做什麼？如何確認現場所有作業員已按新版SOP執行？"
      },
      {
        "category": "[I]  生產數據與KPI  Production Data & KPI",
        "code": "I1",
        "dimension": "生產KPI管理",
        "ability": "生產KPI管理（稼動率/OEE/產量達成率/換線效率/FPY）",
        "levels": {
          "0": "無",
          "1": "了解生產KPI定義",
          "2": "可計算並追蹤各項KPI+識別異常",
          "3": "建立KPI看板+分析趨勢+有KPI提升改善案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B認知(KPI定義) | L3A必備(計算追蹤+異常識別) | L3B主導(看板建立+趨勢分析)",
        "questions": "OEE三大要素（可用率/效率/品質率）如何計算？KPI異常時如何快速找原因？"
      },
      {
        "category": "[I]  生產數據與KPI  Production Data & KPI",
        "code": "I2",
        "dimension": "生產效率分析",
        "ability": "生產效率分析（UPH/CT/平衡效率≥85%/瓶頸站識別）",
        "levels": {
          "0": "無",
          "1": "了解UPH/CT計算公式",
          "2": "可計算生產平衡效率+識別瓶頸工站+提出改善方向",
          "3": "執行IE改善+有平衡效率提升量化案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L3A必備(UPH/CT計算) | L3B熟練(瓶頸識別+改善方向) | L4A主導(IE改善執行)",
        "questions": "22工站中如何識別瓶頸站？平衡效率低於85%時如何改善？"
      },
      {
        "category": "[I]  生產數據與KPI  Production Data & KPI",
        "code": "I3",
        "dimension": "標準工時管理",
        "ability": "標準工時(ST值)管理（量測/制定/更新/WIMD-STD-01標準工時辦法）",
        "levels": {
          "0": "無",
          "1": "了解標準工時定義與計算",
          "2": "可執行ST值量測並制定合理標準工時",
          "3": "建立ST管理制度+定期更新+有標準工時優化案例"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L3A必備(ST值量測) | L3B熟練(制定合理ST) | L4A主導(ST管理制度建立)",
        "questions": "標準工時包含哪些寬放率項目？如何確認量測的ST值代表熟練工水準？"
      },
      {
        "category": "[I]  生產數據與KPI  Production Data & KPI",
        "code": "I4",
        "dimension": "報工統整",
        "ability": "ERP生產報工統整（工時報工/領料扣帳/製損材損統計/超領入庫）",
        "levels": {
          "0": "無",
          "1": "了解報工流程",
          "2": "正確完成ERP報工+各單據開立無誤",
          "3": "建立報工SOP+有誤報工異常改善案例+指導他人"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L2B必備(ERP報工) | L3A熟練(各單據開立) | L3B主導(報工SOP建立)",
        "questions": "工時報工如何確保準確性？報工異常如何修正？"
      },
      {
        "category": "[J]  生技製程改善  Process Engineering & Improvement",
        "code": "J1",
        "dimension": "製程問題分析",
        "ability": "製程問題分析（8D/5Why/QC七手法/根因分析）",
        "levels": {
          "0": "無",
          "1": "了解8D/5Why工具",
          "2": "可應用8D/5Why分析製程問題+制定改善措施",
          "3": "主導複雜製程問題解決+建立問題案例庫+指導他人"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B認知(8D/5Why工具) | L3A必備(獨立應用8D分析) | L3B主導(案例庫建立+指導)",
        "questions": "說明一個你主導解決的製程問題：如何用5Why找到根本原因？"
      },
      {
        "category": "[J]  生技製程改善  Process Engineering & Improvement",
        "code": "J2",
        "dimension": "製程改善ECRS",
        "ability": "生產製程改善（ECRS/消除浪費/動作分析/精實生產）",
        "levels": {
          "0": "無",
          "1": "了解ECRS改善概念",
          "2": "可識別浪費並提出改善方案+有量化改善成果",
          "3": "主導精實生產改善+建立改善機制+有多件成果"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L3B必備(ECRS識別+改善方案) | L4A熟練(量化成果) | L4B主導(精實生產改善機制)",
        "questions": "22工站中有哪些動作浪費？如何用ECRS方法消除？"
      },
      {
        "category": "[J]  生技製程改善  Process Engineering & Improvement",
        "code": "J3",
        "dimension": "治具設計管理",
        "ability": "生產治具需求/設計/管理（治具需求提出/驗收確認/點檢保養）",
        "levels": {
          "0": "無",
          "1": "了解治具作用",
          "2": "可提出治具需求規格+驗收確認功能正確",
          "3": "主導治具設計改善+有治具優化提升生產效率案例"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L3A認知 | L3B必備(需求提出+驗收確認) | L4A主導(設計改善+效率提升)",
        "questions": "如何描述一個治具的功能需求？治具驗收需確認哪些項目？"
      },
      {
        "category": "[J]  生技製程改善  Process Engineering & Improvement",
        "code": "J4",
        "dimension": "PFMEA/Control Plan",
        "ability": "製程FMEA(PFMEA)與控制計畫(CP)執行（失效模式識別/管制點設定）",
        "levels": {
          "0": "無",
          "1": "了解PFMEA格式與CP概念",
          "2": "可參與PFMEA分析+依CP執行製程管制",
          "3": "主導PFMEA制定+CP與SOP整合建立+有高RPN改善案例"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L2B認知(PFMEA/CP概念) | L3B必備(PFMEA參與+CP執行) | L4A主導(PFMEA制定+整合)",
        "questions": "灌膠製程PFMEA需識別哪些關鍵失效模式？CP的特殊特性如何在現場管控？"
      },
      {
        "category": "[J]  生技製程改善  Process Engineering & Improvement",
        "code": "J5",
        "dimension": "PPAP量產移轉",
        "ability": "PPAP量產移轉管理（製程流程圖/PFMEA/Control Plan/SOP/人員訓練）",
        "levels": {
          "0": "無",
          "1": "了解PPAP量產移轉概念",
          "2": "可協助PPAP文件準備+人員訓練配合",
          "3": "主導量產移轉執行+PPAP文件建立+有多件成功案例"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L3A認知(PPAP概念) | L3B必備(PPAP協助) | L4A主導(量產移轉執行+文件建立)",
        "questions": "新機種量產移轉需確認哪些製程文件？如何確認人員已達生產技能標準？"
      },
      {
        "category": "[K]  人員培育管理  Personnel Development",
        "code": "K1",
        "dimension": "新人OJT帶領",
        "ability": "新人OJT在職訓練帶領（8週每日時程計畫/技能矩陣達標確認）",
        "levels": {
          "0": "無",
          "1": "了解OJT流程",
          "2": "可執行新人OJT帶領+按時程完成技能培育",
          "3": "建立OJT培育計畫+技能矩陣+有培育成功案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B認知 | L3A必備(執行OJT帶領+技能矩陣達標) | L3B主導(OJT計畫建立+培育體系)",
        "questions": "新人8週OJT如何規劃工站學習順序？如何確認新人達到獨立作業標準？"
      },
      {
        "category": "[K]  人員培育管理  Personnel Development",
        "code": "K2",
        "dimension": "技能矩陣管理",
        "ability": "作業員技能矩陣管理（多能工培育/技能評估/資格鑑定）",
        "levels": {
          "0": "無",
          "1": "了解技能矩陣的目的",
          "2": "可維護技能矩陣並推動多能工培育計畫",
          "3": "建立技能矩陣制度+資格鑑定SOP+有多能工比例提升成果"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L3A認知 | L3B必備(技能矩陣維護) | L4A主導(多能工計畫+資格鑑定)",
        "questions": "多能工培育如何平衡生產需求與訓練時間？技能矩陣如何配合人力彈性調度？"
      },
      {
        "category": "[K]  人員培育管理  Personnel Development",
        "code": "K3",
        "dimension": "績效考核管理",
        "ability": "人員績效考核管理（KPI目標設定/評核/回饋/改善計畫）",
        "levels": {
          "0": "無",
          "1": "了解績效考核制度",
          "2": "可執行人員KPI設定與評核",
          "3": "建立績效管理機制+有效激勵改善+有績效提升案例"
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L3B認知 | L4A必備(KPI設定+評核) | L4B主導(績效管理機制建立)",
        "questions": "作業員績效KPI應包含哪些指標？績效回饋如何促進員工成長？"
      },
      {
        "category": "[K]  人員培育管理  Personnel Development",
        "code": "K4",
        "dimension": "工站技能認證四級制度與OJT最低時數",
        "ability": "工站技能認證四級制度（初級/中級/高級/師傅）+OJT最低時數強制規定：初級≥4小時實作/中級≥8小時實作/師傅=帶出1名初級學員；四階段OJT法：示範→協同作業→觀察修正→獨立作業；檢定流程：提報→筆試→現場實作→品保確認→FMAD0401登錄→發上崗證→每年複檢",
        "levels": {
          "0": "不了解技能認證制度",
          "1": "了解四級認證+OJT最低時數（初級≥4H/中級≥8H不得縮短）+四階段OJT法",
          "2": "已通過初級認證（≥4H實作），按四階段法帶訓新人，知道自己負責工站SC/CC要求",
          "3": "達高級或師傅認證+完整帶訓紀錄+學員品質達標率納入師傅KPI+有多人培育成功記錄"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1A必備(初級認證通過≥4H) | L2A必備(中級≥8H+四階段帶訓) | L2B必備(高級全線) | L3A主導(師傅認證+學員品質KPI)",
        "questions": "OJT四階段法各階段的作法（示範/協同/觀察修正/獨立）？初級認證最低實作時數不得低於幾小時？師傅帶訓師的認定條件是什麼（帶出1名初級學員+學員品質達標）？"
      },
      {
        "category": "[K]  人員培育管理  Personnel Development",
        "code": "K5",
        "dimension": "多能工培訓計畫執行",
        "ability": "多能工培訓計畫（每人目標≥4工站達◎以上/月度輪訓不影響當月產量/技能矩陣四級標示○△◎★/每工站至少2人達◎以上/季度總盤點代理機制）",
        "levels": {
          "0": "不了解多能工培訓計畫",
          "1": "了解技能矩陣○△◎★四級定義與每工站≥2人達◎目標",
          "2": "依月度輪訓計畫完成跨站輪訓+技能矩陣及時更新（每月）+本人達到中級認證≥4站",
          "3": "制定月度輪訓計畫（不影響當月產量）+每工站≥2人◎以上確保代理機制+季度總盤點執行"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L1B必備(輪訓參與) | L2A必備(≥4站◎以上+矩陣月更新) | L2B主導(月度輪訓計畫+代理機制)",
        "questions": "技能矩陣○△◎★各代表什麼（○未受訓/△受訓中需協助/◎可獨立/★可指導）？每工站為何需要至少2人達◎以上？SC/CC工站人員異動時需立即更新什麼記錄？"
      },
      {
        "category": "[K]  人員培育管理  Personnel Development",
        "code": "K6",
        "dimension": "SC/CC特殊製程資格管理",
        "ability": "特殊製程(SC/CC)關鍵6工站資格管理（工站4焊接/7半測/11燒機/12-14灌膠/15氣密/20成測），資格鑑定流程：筆試+現場實作≥80分+每年複檢，未通過不得獨立操作，每季技能矩陣交叉比對",
        "levels": {
          "0": "不了解SC/CC概念",
          "1": "了解哪6個工站需要資格鑑定及各工站合格標準（焊接連續10件100%/燒機筆試+實作≥80分/灌膠連續5批良品率≥98%）",
          "2": "已通過自己負責工站的SC/CC資格鑑定+配合每年複檢+FMAD0401記錄登錄",
          "3": "主導SC/CC資格管理（提報受檢人員/安排鑑定/結果登錄/人員異動立即更新）"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B必備(本工站SC/CC資格鑑定通過) | L2B必備(配合複檢+記錄登錄) | L3A主導(SC/CC資格管理+人員異動更新)",
        "questions": "SC/CC工站資格鑑定流程有哪幾個步驟（提報→筆試→現場實作→品保確認→登錄→發上崗證）？燒機站筆試+實作需達到幾分才合格？資格鑑定表由誰保管每幾季與技能矩陣交叉比對？"
      },
      {
        "category": "[L]  成本與效率管理  Cost & Efficiency Management",
        "code": "L1",
        "dimension": "加工成本計算",
        "ability": "生產加工成本計算（直接人工/設備折舊/輔耗材/製損率計算）",
        "levels": {
          "0": "無",
          "1": "了解生產成本構成項目",
          "2": "可計算加工成本並識別成本異常",
          "3": "建立加工成本資料庫+有COST DOWN改善案例"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L3A認知 | L3B必備(成本計算+異常識別) | L4A主導(成本資料庫+COST DOWN)",
        "questions": "組裝生產線直接人工成本如何計算？製損率超標時如何分析改善？"
      },
      {
        "category": "[L]  成本與效率管理  Cost & Efficiency Management",
        "code": "L2",
        "dimension": "工時效率分析",
        "ability": "工時效率分析（實際工時vs標準工時差異/效率達成率/Loss分析）",
        "levels": {
          "0": "無",
          "1": "了解工時效率概念",
          "2": "可分析實際工時偏差+識別Loss項目",
          "3": "主導工時效率改善+有效率提升量化案例"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L3A必備(偏差分析) | L3B熟練(Loss識別) | L4A主導(效率改善+量化成果)",
        "questions": "工時效率達成率低於目標時如何分析Loss來源？如何設定合理的效率目標？"
      },
      {
        "category": "[L]  成本與效率管理  Cost & Efficiency Management",
        "code": "L3",
        "dimension": "阿米巴損益核算",
        "ability": "阿米巴損益核算（時間附加值計算/每日損益表填寫/目標追蹤）",
        "levels": {
          "0": "無",
          "1": "了解時間附加值計算公式",
          "2": "可填寫每日損益表+分析異常+提出改善行動",
          "3": "主持阿米巴月度會議+帶領小巴達成目標"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(時間附加值計算) | L3A必備(每日損益表+異常分析) | L4A主導(月度會議主持)",
        "questions": "生產課阿米巴時間附加值如何計算？每日損益表「製造費用」如何分攤？"
      },
      {
        "category": "[M]  鼎新ERP系統  Kingdee ERP System",
        "code": "M1",
        "dimension": "ERP基礎操作",
        "ability": "鼎新ERP基礎操作（系統登入/生產模組/查詢功能/報表產出）",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作了解生產相關模組",
          "2": "熟練使用生產模組查詢+工單/領料單操作",
          "3": "設定ERP生產參數+有多模組熟練操作+指導他人"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L2A必備(ERP基礎操作) | L2B熟練(工單/領料操作) | L3A主導(生產模組深度應用)",
        "questions": "如何在鼎新ERP查詢工單狀態？如何開立領料單？"
      },
      {
        "category": "[M]  鼎新ERP系統  Kingdee ERP System",
        "code": "M2",
        "dimension": "工單作業",
        "ability": "生產工單開立/領料/報工/結案（工單全流程ERP操作）",
        "levels": {
          "0": "無",
          "1": "了解工單流程",
          "2": "獨立完成工單開立+領料+報工+結案全流程",
          "3": "工單異常處理+有工單管理SOP建立案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L2B必備(工單全流程操作) | L3A熟練(異常處理) | L3B主導(工單管理SOP建立)",
        "questions": "工單開立前需確認哪些前提？工單結案需完成哪些清核？"
      },
      {
        "category": "[M]  鼎新ERP系統  Kingdee ERP System",
        "code": "M3",
        "dimension": "LRP/缺料表",
        "ability": "鼎新ERP LRP(依訂單預估物料需求)與缺料表操作",
        "levels": {
          "0": "無",
          "1": "了解LRP與缺料表的用途差異",
          "2": "可操作LRP查詢+缺料表追蹤+配合生管/採購",
          "3": "建立LRP+缺料表運用SOP+有提前缺料預警案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L2B認知 | L3A必備(LRP查詢+缺料表追蹤) | L3B主導(運用SOP+預警機制)",
        "questions": "LRP用途與缺料表差異？如何用缺料表提前識別近期缺料風險？"
      },
      {
        "category": "[N]  IATF/品質系統  IATF Quality System",
        "code": "N1",
        "dimension": "IATF16949基礎",
        "ability": "IATF16949/AS9100品質系統基礎（程序書/稽核配合/IATF要求執行）",
        "levels": {
          "0": "無",
          "1": "了解IATF16949基本要求",
          "2": "可配合品質稽核+依IATF程序執行生產作業",
          "3": "主導內部稽核準備+有IATF稽核改善案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L2A認知 | L2B必備(配合稽核+依程序執行) | L3A主導(稽核準備+改善)",
        "questions": "IATF16949稽核時生產現場常被查哪些項目？如何準備稽核？"
      },
      {
        "category": "[N]  IATF/品質系統  IATF Quality System",
        "code": "N2",
        "dimension": "防錯裝置",
        "ability": "防錯裝置(Poka-Yoke)應用與管理（防錯機制設計/有效性確認/維護）",
        "levels": {
          "0": "無",
          "1": "了解防錯概念",
          "2": "可識別現場防錯需求+配合執行防錯設置",
          "3": "主導防錯設計+有防錯提升良率案例+建立防錯清單"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L2B認知 | L3A必備(識別需求+配合執行) | L3B主導(防錯設計+案例)",
        "questions": "燒錄站如何設計防錯機制確認燒錄版本正確？灌膠站防錯如何避免A/B劑接反？"
      },
      {
        "category": "[N]  IATF/品質系統  IATF Quality System",
        "code": "N3",
        "dimension": "SPC統計製程管制",
        "ability": "SPC統計製程管制（管制圖選擇/Cpk計算/異常判讀/改善）",
        "levels": {
          "0": "無",
          "1": "了解SPC基礎概念",
          "2": "可建立管制圖+監控關鍵製程特性+識別異常",
          "3": "主導製程能力提升+有Cpk改善至≥1.33案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L3A認知 | L3B必備(建立管制圖+異常識別) | L4A主導(製程能力提升)",
        "questions": "灌膠重量如何建立管制圖？Cpk<1.0時如何分析並改善？"
      },
      {
        "category": "[O]  AI工具應用  AI Tools Application",
        "code": "O1",
        "dimension": "Claude AI應用",
        "ability": "Claude AI工具應用（Artifacts圖表/製造SOP撰寫輔助/KPI報表製作）",
        "levels": {
          "0": "無",
          "1": "基礎使用Claude生成報表/SOP草稿",
          "2": "熟練應用AI生成生產KPI報表/異常分析報告/改善提案",
          "3": "建立部門AI應用規範+指導他人+有效率提升案例"
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L2B建議(基礎AI使用) | L3A必備(熟練KPI報表/SOP輔助) | L3B主導(部門規範建立)",
        "questions": "如何用Claude AI快速生成工站SOP草稿？如何用AI分析生產不良趨勢？"
      },
      {
        "category": "[P]  NPI新產品試產  New Product Introduction",
        "code": "P1",
        "dimension": "NPI試產計畫確認",
        "ability": "NPI新產品試產計畫確認（試產通知接收/機種BOM核對/物料確認/治具/SOP到位確認）",
        "levels": {
          "0": "無",
          "1": "了解NPI試產流程與試產前確認項目",
          "2": "可獨立確認試產前所有準備項目（BOM/物料/治具/SOP/設備）到位，無遺漏",
          "3": "主導試產計畫確認清單制定+跨部門協調確認+有多件NPI試產準備零遺漏記錄"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(試產前確認) | L3A熟練(全項目無遺漏確認) | L3B主導(計畫確認清單制定+跨部門協調)",
        "questions": "NPI試產前確認清單需包含哪些項目？BOM與實際物料不符時如何處理？SOP未到位時試產應如何決策？"
      },
      {
        "category": "[P]  NPI新產品試產  New Product Introduction",
        "code": "P2",
        "dimension": "首件試產執行",
        "ability": "NPI首件試產執行（首件製作/尺寸/功能/外觀確認/首件報告填寫）",
        "levels": {
          "0": "無",
          "1": "了解首件試產目的與確認項目",
          "2": "可獨立執行NPI首件試產並完整填寫首件報告，發現問題即時回報",
          "3": "主導NPI首件試產全流程+問題分類追蹤+有推動NPI首件一次通過率提升案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(首件執行+報告填寫) | L3A熟練(問題即時回報) | L3B主導(首件全流程+一次通過率提升)",
        "questions": "NPI首件報告需記錄哪些確認項目？首件尺寸/功能不符時如何通報研發/生技？首件一次通過率如何追蹤提升？"
      },
      {
        "category": "[P]  NPI新產品試產  New Product Introduction",
        "code": "P3",
        "dimension": "試產問題收集與回饋",
        "ability": "試產問題收集與回饋（製程問題點識別/記錄分類/回饋研發生技/問題追蹤關閉）",
        "levels": {
          "0": "無",
          "1": "了解試產問題回饋的重要性",
          "2": "可主動識別並記錄試產問題點（機構/電氣/組裝/品質各類），及時回饋相關單位",
          "3": "建立試產問題追蹤表+分類統計+推動問題快速關閉+有問題回饋改善NPI良率案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(問題記錄+及時回饋) | L3A熟練(分類統計+追蹤關閉) | L3B主導(問題追蹤表建立+良率提升)",
        "questions": "試產中發現灌膠氣泡問題如何分類記錄並回饋？問題追蹤表應包含哪些欄位？如何確認問題已被研發/生技接收並關閉？"
      },
      {
        "category": "[P]  NPI新產品試產  New Product Introduction",
        "code": "P4",
        "dimension": "試產工時與效率評估",
        "ability": "試產工時與效率評估（各工站CT量測/瓶頸站識別/標準工時建議/人力需求估算）",
        "levels": {
          "0": "無",
          "1": "了解試產工時評估目的",
          "2": "可執行各工站CT量測並識別瓶頸站，提供初步標準工時建議",
          "3": "建立試產工時評估SOP+完整CT量測+ST建議+人力需求報告+有量產標準工時準確度≥90%案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L3A必備(CT量測+瓶頸識別) | L3B熟練(ST建議+人力需求估算) | L4A主導(工時評估SOP建立+準確度追蹤)",
        "questions": "NPI試產時如何量測各工站CT值？瓶頸站如何識別並評估改善方向？試產ST值與量產後實際ST的誤差如何追蹤？"
      },
      {
        "category": "[P]  NPI新產品試產  New Product Introduction",
        "code": "P5",
        "dimension": "試產物料耗損分析",
        "ability": "試產物料耗損分析（試產用料清點/耗損率計算/異常耗損原因分析/BOM修正建議）",
        "levels": {
          "0": "無",
          "1": "了解試產物料耗損追蹤目的",
          "2": "可執行試產後物料清點+計算耗損率+識別異常耗損並回報",
          "3": "建立試產物料耗損分析SOP+異常耗損根因分析+推動BOM修正+有耗損率降低案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L3A必備(物料清點+耗損率計算) | L3B熟練(異常耗損分析) | L4A主導(耗損SOP+BOM修正推動)",
        "questions": "試產後如何清點實際用料？耗損率如何計算？發現BOM用量與實際不符時如何回報推動修正？"
      },
      {
        "category": "[P]  NPI新產品試產  New Product Introduction",
        "code": "P6",
        "dimension": "試產品質確認",
        "ability": "試產品質確認（試產FPY統計/不良模式分類/品質風險評估/量產可行性判斷）",
        "levels": {
          "0": "無",
          "1": "了解試產品質確認流程",
          "2": "可統計試產FPY+分類不良模式+完成品質確認報告",
          "3": "主導試產品質風險評估+量產可行性判斷報告+推動問題解決後再試產+有NPI品質提升至量產達標案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L3A必備(FPY統計+不良分類) | L3B熟練(品質確認報告) | L4A主導(品質風險評估+量產可行性判斷)",
        "questions": "試產FPY低於目標時是否可進入量產？品質風險評估需考量哪些維度？如何向管理層呈現試產品質結論？"
      },
      {
        "category": "[P]  NPI新產品試產  New Product Introduction",
        "code": "P7",
        "dimension": "試產SOP驗證與更新",
        "ability": "試產SOP驗證與更新（依試產結果驗證SOP正確性/發現SOP缺失補充/確認作業員可依SOP執行）",
        "levels": {
          "0": "無",
          "1": "了解試產SOP驗證目的",
          "2": "可驗證試產各工站SOP執行可行性+發現缺失即時記錄回報",
          "3": "主導試產SOP驗證全流程+SOP補充完善+確認作業員訓練通過+有NPI試產後SOP一次完備案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L3A必備(SOP驗證+缺失記錄) | L3B熟練(SOP補充完善) | L4A主導(SOP驗證全流程+訓練確認)",
        "questions": "試產中發現SOP步驟不合理如何處理？SOP更新後如何確認所有作業員都已培訓到位？試產SOP與量產SOP的差異如何管理？"
      },
      {
        "category": "[P]  NPI新產品試產  New Product Introduction",
        "code": "P8",
        "dimension": "NPI量產移轉確認",
        "ability": "NPI量產移轉確認（移轉條件確認/Control Plan審查/作業員資格鑑定/PPAP文件配合）",
        "levels": {
          "0": "無",
          "1": "了解NPI量產移轉條件確認項目",
          "2": "可執行量產移轉確認清單全項目+確認作業員資格達標+Control Plan到位",
          "3": "主導NPI量產移轉全流程+PPAP文件配合完成+有NPI順利量產移轉多件案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L3B必備(移轉確認清單執行) | L4A熟練(PPAP文件配合) | L4B主導(量產移轉全流程+多件NPI管理)",
        "questions": "量產移轉確認清單需包含哪些必備項目？作業員資格鑑定如何確認達標？PPAP文件現場部分如何配合準備？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full Platform",
        "code": "Q1",
        "dimension": "釘釘專案管理",
        "ability": "釘釘專案管理功能應用（新品試產專案/改善專案建立/里程碑設定/任務指派/進度追蹤）",
        "levels": {
          "0": "從未使用",
          "1": "了解釘釘專案功能基本操作",
          "2": "可建立生產相關專案+設定里程碑+指派任務給成員+追蹤任務完成狀態並催辦逾期任務",
          "3": "主導建立標準化專案模板+管理多個並行專案+有專案按時完成率≥90%量化記錄"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(專案建立+任務追蹤) | L3A熟練(里程碑設定+催辦逾期) | L3B主導(標準化專案模板+多專案管理)",
        "questions": "NPI試產如何在釘釘建立專案並指派任務？里程碑如何設定讓進度透明化？逾期任務如何在釘釘催辦通知相關人員？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full Platform",
        "code": "Q2",
        "dimension": "釘釘群組管理",
        "ability": "釘釘群組管理（生產/異常/NPI專用群組建立/群公告/群檔案管理/群成員管理）",
        "levels": {
          "0": "從未使用",
          "1": "了解釘釘群組基本功能",
          "2": "可建立管理生產相關群組+發布群公告+上傳群檔案+管理群成員權限",
          "3": "建立群組管理規範+各群組分工明確+群訊息回應SLA制定（如異常群1小時內回應）"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(群組基本使用) | L2B熟練(群公告+群檔案管理) | L3A主導(群組管理規範+SLA制定)",
        "questions": "生產異常通報群與一般製造群如何分工管理？群公告如何確認所有成員已讀？異常群的回應時效如何設定與追蹤？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full Platform",
        "code": "Q3",
        "dimension": "釘釘報工作業",
        "ability": "釘釘報工系統操作（工單掃碼/工時填報/產量/不良數即時填報/報工資料審核）",
        "levels": {
          "0": "從未使用",
          "1": "了解釘釘報工流程",
          "2": "每日確實完成工單掃碼+工時工量填報+不良數記錄，資料準確及時",
          "3": "指導他人報工+設計報工確認機制+有報工資料準確率≥99%追蹤記錄"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B必備(工單掃碼+工時填報) | L2A熟練(不良數記錄+資料準確) | L2B主導(指導他人+報工確認機制)",
        "questions": "每日報工需在何時前完成？報工資料填錯時如何修正？如何確認報工數據與實際產量一致？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full Platform",
        "code": "Q4",
        "dimension": "釘釘異常回饋",
        "ability": "釘釘異常回饋系統（異常發生即時拍照上傳/填寫異常描述/指派責任人/追蹤關閉/異常統計）",
        "levels": {
          "0": "從未使用",
          "1": "了解釘釘異常回饋流程",
          "2": "發現異常立即在釘釘記錄（照片+描述+工站+時間）+指派責任人+追蹤至關閉",
          "3": "建立異常回饋SOP+定期異常統計分析報告+有異常關閉時效≤24H管理記錄"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B必備(異常即時記錄+照片上傳) | L2A熟練(指派責任人+追蹤關閉) | L3A主導(異常SOP+統計分析報告)",
        "questions": "釘釘異常記錄需包含哪些必要資訊？如何確認異常已被指派人員接收？異常超過24H未關閉如何在釘釘升級通知？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full Platform",
        "code": "Q5",
        "dimension": "釘釘提案改善",
        "ability": "釘釘提案改善系統（提案建立/效益估算填報/審核流程/實施追蹤/改善成果記錄）",
        "levels": {
          "0": "從未使用",
          "1": "了解釘釘提案改善功能",
          "2": "可在釘釘提交提案並完整填寫（問題描述/改善方案/效益估算）+配合審核流程+追蹤實施",
          "3": "每月≥1件提案提交+指導他人使用提案系統+有提案採用率統計分析"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B必備(每月≥1件提案) | L2A熟練(完整填寫+配合審核) | L2B主導(指導他人+採用率統計)",
        "questions": "釘釘提案必填哪些欄位？改善效益如何在提案中量化估算？提案被退回時如何修改重新提交？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full Platform",
        "code": "Q6",
        "dimension": "釘釘文檔知識庫",
        "ability": "釘釘文檔知識庫管理（SOP文件上傳/版本管理/知識庫分類/文件查詢應用/文件有效性確認）",
        "levels": {
          "0": "從未使用",
          "1": "了解釘釘文檔知識庫基本功能",
          "2": "可上傳管理SOP/作業指導書到知識庫+正確分類+設定權限+確認作業員從知識庫調閱正確版本SOP",
          "3": "建立知識庫管理規範+文件版本控制SOP+定期審查有效性+有知識庫SOP查詢使用率提升案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(SOP上傳+分類管理) | L3A熟練(版本控制+權限設定) | L3B主導(知識庫管理規範+有效性審查)",
        "questions": "如何確認作業員查閱的SOP是最新有效版本？知識庫分類架構如何規劃讓查詢方便？文件版本更新後如何通知相關人員確認已讀？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full Platform",
        "code": "Q7",
        "dimension": "釘釘SOP線上編輯",
        "ability": "釘釘線上SOP文件編輯與協作（多人協作編輯/評論留言/修訂追蹤/SOP草稿→發布流程）",
        "levels": {
          "0": "從未使用",
          "1": "了解釘釘線上編輯協作功能",
          "2": "可使用釘釘線上編輯功能撰寫/修改SOP+留言討論+配合審核修訂",
          "3": "主導釘釘線上SOP協作撰寫流程+建立SOP草稿到發布的完整釘釘作業流程規範"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B必備(線上編輯+評論留言) | L3A熟練(修訂追蹤+配合審核) | L3B主導(協作撰寫流程規範建立)",
        "questions": "如何用釘釘多人協作編輯新工站SOP？評論留言如何追蹤討論結果？SOP從草稿到正式發布的釘釘審核步驟為何？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full Platform",
        "code": "Q8",
        "dimension": "釘釘審批流程",
        "ability": "釘釘審批流程應用（請假/加班/採購申請/工程變更ECN/異常8D/提案改善 各類審批發起與追蹤）",
        "levels": {
          "0": "從未使用",
          "1": "了解釘釘審批流程發起步驟",
          "2": "可正確發起各類釘釘審批+追蹤審批狀態+逾期催辦+審批完成後執行後續作業",
          "3": "熟練全類型審批流程+協助設定審批模板+指導他人+有審批效率優化案例（平均審批時效縮短）"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B必備(基本審批發起) | L2A熟練(各類審批+逾期催辦) | L2B主導(審批模板協助設定+指導他人)",
        "questions": "工程變更ECN如何在釘釘發起審批並確認所有核准人簽署？審批被退回時如何修改重送？如何查詢歷史審批記錄？"
      },
      {
        "category": "[Q]  釘釘系統全功能應用  DingTalk Full Platform",
        "code": "Q9",
        "dimension": "釘釘數據看板",
        "ability": "釘釘數據看板與統計報表（生產日報/KPI看板/異常統計/提案改善成果看板 建立與應用）",
        "levels": {
          "0": "從未使用",
          "1": "了解釘釘數據看板功能",
          "2": "可建立生產日報/KPI看板並定期更新數據+與團隊共享",
          "3": "主導部門數據看板架構設計+自動化數據匯入+有數據看板提升管理效率量化案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B必備(看板建立+定期更新) | L3A熟練(KPI看板+異常統計) | L3B主導(看板架構設計+自動化匯入)",
        "questions": "如何在釘釘建立每日生產KPI看板？數據看板如何確保每日數據準確及時更新？如何設定看板自動統計本月提案改善件數與採用率？"
      },
      {
        "category": "[U]  生產通才培育教育訓練  Production Generalist Training",
        "code": "U1",
        "dimension": "OJT在職訓練系統設計",
        "ability": "OJT在職訓練系統設計與執行（8週新人帶領計畫/四階段帶訓法/技能矩陣達標確認/OJT帶訓師認定/帶訓成效KPI），目標：每人達到多能工◎4站以上",
        "levels": {
          "0": "無OJT設計概念",
          "1": "了解OJT四階段法與8週計畫架構（每週目標/每日時程）",
          "2": "可獨立設計並執行一名新人完整8週OJT計畫+技能矩陣達標+帶訓記錄完整",
          "3": "建立部門OJT標準體系（教材/考核/帶訓師培育/成效追蹤）+有多名學員培育成功記錄+帶訓師KPI設計"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2B必備(8週OJT計畫執行) | L3A必備(獨立設計+帶訓成效) | L3B主導(OJT體系建立+帶訓師培育)",
        "questions": "8週OJT計畫前兩週與後四週的重點分別是什麼？帶訓師KPI如何設計（被帶學員的品質達標率+多能工達成時間）？如何確認新人已達獨立作業水準而非只是「看起來會」？"
      },
      {
        "category": "[U]  生產通才培育教育訓練  Production Generalist Training",
        "code": "U2",
        "dimension": "Off-JT職外訓練規劃",
        "ability": "Off-JT職外訓練規劃（年度訓練計畫/課程設計/講師資格/受訓確認/訓練成效評估），OJT:Off-JT:SD=50~90%:10~35%:10~35%，依職等與情境動態調整",
        "levels": {
          "0": "無Off-JT概念",
          "1": "了解Off-JT與OJT/SD的差異及最佳時間配比",
          "2": "可規劃並執行月度/季度Off-JT課程（主題選定/講師安排/教材準備/出席管理/測驗評核）",
          "3": "建立年度Off-JT訓練計畫+依職等設計不同課程+有訓練成效量化追蹤（測驗前後成績+KPI改善連結）"
        },
        "importance": 4,
        "weight": "10",
        "target_level": "L3A必備(月度Off-JT課程執行) | L3B必備(年度訓練計畫) | L4A主導(訓練成效量化+課程體系)",
        "questions": "導入新產品時Off-JT佔比為何要提高至45%？QC七手法Off-JT課程如何設計讓現場人員學以致用？Off-JT訓練成效如何連結到KPI改善數據？"
      },
      {
        "category": "[U]  生產通才培育教育訓練  Production Generalist Training",
        "code": "U3",
        "dimension": "SD自我發展引導",
        "ability": "SD自我發展引導（個人IDP計畫/證照訓練/線上課程/讀書會/研討會/外部標竿參訪），企業提供資源與誘因，推動「發現→學習→應用→分享」循環",
        "levels": {
          "0": "無自我發展規劃",
          "1": "了解SD類型（證照/線上/讀書會/研討會）及公司SD資源",
          "2": "有明確IDP計畫（目標/方法/期限）+每季至少1件SD+有應用至工作的成果分享",
          "3": "建立部門SD激勵機制+SD學習成果分享制度（月讀書心得/外部參訪報告）+SD帶動KPI提升案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B必備(個人IDP+每季1件SD) | L3A必備(SD應用工作改善) | L3B主導(部門SD激勵+分享制度)",
        "questions": "個人IDP應包含哪五個要素（目標/現況差距/學習方法/期限/成果衡量）？如何讓現場作業員養成SD習慣（非強制型）？SD學習如何轉化為提案改善？"
      },
      {
        "category": "[U]  生產通才培育教育訓練  Production Generalist Training",
        "code": "U4",
        "dimension": "生產通才六大領域培育",
        "ability": "生產通才六大領域全覆蓋培育：①製造操作22工站 ②品質管理IATF/SPC/8D ③設備維護保養IE ④IE工業工程 ⑤物料供應鏈ERP ⑥人員管理OJT/績效，目標：每領域至少L2B，通才目標L3A",
        "levels": {
          "0": "只有單一領域知識",
          "1": "了解六大領域核心知識框架",
          "2": "六大領域均達L2A+，可獨立處理各領域日常問題+跨領域問題整合分析",
          "3": "六大領域均達L3A+，有跨領域整合改善案例+可對外完整說明騏宏生產系統"
        },
        "importance": 5,
        "weight": "15",
        "target_level": "L3B必備(六大領域L2B以上) | L4A必備(六大領域L3A以上) | L4B主導(跨領域整合+對外說明)",
        "questions": "成品測試通過率下降，如何跨六大領域系統排查（製造操作→SPC管制圖→設備點檢記錄→物料批號→SOP版本→人員技能矩陣）？什麼能力組合可稱為「生產通才」？"
      },
      {
        "category": "[U]  生產通才培育教育訓練  Production Generalist Training",
        "code": "U5",
        "dimension": "訓練成效追蹤與ROI",
        "ability": "訓練成效追蹤與投資報酬率評估（Kirkpatrick四層：L1反應/L2學習/L3行為/L4結果），訓練前後KPI連結，ROI計算：（訓練帶來節省成本/KPI改善效益）÷訓練成本×100%",
        "levels": {
          "0": "無訓練成效評估概念",
          "1": "了解Kirkpatrick四層模型（反應→學習→行為→結果）定義",
          "2": "可設計前後測驗+追蹤受訓者KPI改善+彙整訓練成效報告",
          "3": "建立訓練成效追蹤系統+計算訓練ROI+管理層認可的訓練成效報告案例"
        },
        "importance": 4,
        "weight": "10",
        "target_level": "L3A必備(前後測+KPI追蹤) | L3B必備(訓練成效報告) | L4A主導(ROI計算+系統建立)",
        "questions": "如何用Kirkpatrick L4連結QCC訓練與不良率下降的因果關係？訓練ROI：Off-JT成本5萬→不良率降低節省15萬→ROI=200%，如何向總經理報告？"
      },
      {
        "category": "[U]  生產通才培育教育訓練  Production Generalist Training",
        "code": "U6",
        "dimension": "TOP3不良月訓練機制",
        "ability": "TOP3不良月訓練機制（每月依不良TOP3工站挑選對應人員→設計針對性教材→執行訓練+考核→追蹤改善成果），配合每日異常→數據→主題→QCC→標準化持續改善循環",
        "levels": {
          "0": "無TOP3訓練機制概念",
          "1": "了解TOP3不良訓練觸發機制（月不良數據→識別對應工站→挑人→教材）",
          "2": "依當月TOP3數據設計針對性教材+執行訓練+考核+訓練後不良率追蹤",
          "3": "建立TOP3不良月訓練自動觸發機制+教材庫+有訓練使不良率下降量化案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L3A必備(TOP3識別+教材設計) | L3B必備(訓練執行+考核) | L4A主導(自動觸發機制+教材庫)",
        "questions": "本月TOP3不良：灌膠氣泡/焊接虛焊/成品測試一次不通過，如何各自設計針對性訓練教材（含實作練習+評分標準）？訓練後如何確認是人員改善還是其他因素使不良率下降？"
      },
      {
        "category": "[V]  外部稽核與顧問職能  External Auditor & Consultant",
        "code": "V1",
        "dimension": "稽核員資格與能力",
        "ability": "稽核員資格能力（IATF16949/AS9100D/ISO9001內部稽核員資格，稽核計畫/執行/不符合項開立/矯正預防追蹤/稽核報告撰寫），目標：取得內部稽核員資格",
        "levels": {
          "0": "無稽核概念",
          "1": "了解稽核四階段（計畫/執行/報告/追蹤）與IATF16949核心要求",
          "2": "取得內部稽核員資格+獨立執行完整稽核+規範格式稽核報告",
          "3": "主導年度內部稽核計畫+培育稽核員+外部稽核配合零缺失記錄"
        },
        "importance": 5,
        "weight": "15",
        "target_level": "L4A必備(內部稽核員資格+獨立執行) | L4B必備(稽核報告+不符合追蹤) | L5A主導(年度稽核計畫+外部稽核配合)",
        "questions": "IATF16949條款8.5.1.1如何與SOP/PFMEA交叉查核？稽核員如何在不觸怒被稽核方的前提下取得真實現場資訊？不符合項與改進機會的差異？"
      },
      {
        "category": "[V]  外部稽核與顧問職能  External Auditor & Consultant",
        "code": "V2",
        "dimension": "製程稽核技術",
        "ability": "製程稽核技術（VDA6.3製程稽核P1~P7七模組/IATF製程走廊稽核，22工站現場稽核重點，SC/CC特性現場驗核，防錯裝置有效性確認，量測系統評估）",
        "levels": {
          "0": "無製程稽核技術",
          "1": "了解VDA6.3與IATF製程稽核核心查核點",
          "2": "可執行製程走廊稽核（BOM→SOP→首件→SC/CC→量測→記錄追溯）+識別隱患",
          "3": "主導客戶製程稽核接待+建立製程稽核自評表+有製程稽核合格率至100%案例"
        },
        "importance": 5,
        "weight": "15",
        "target_level": "L4B必備(製程走廊稽核執行) | L5A必備(客戶稽核接待) | L5B主導(製程自評表+合格率追蹤)",
        "questions": "VDA6.3製程稽核P1~P7七個過程模組各對應什麼？如何逆向追溯（成品→PCBA→線材→IC→BOM）？防錯裝置如何現場驗核（故意放入不良品確認防錯攔截）？"
      },
      {
        "category": "[V]  外部稽核與顧問職能  External Auditor & Consultant",
        "code": "V3",
        "dimension": "顧問診斷技術",
        "ability": "顧問現場診斷技術（8大浪費識別/價值流圖VSM/OEE深度分析/瓶頸工站改善/阿米巴損益健診/KPI異常根因診斷），48H快速診斷+報告撰寫",
        "levels": {
          "0": "無顧問診斷技術",
          "1": "了解8大浪費（過量生產/等待/搬運/過度加工/庫存/動作/不良/未利用才能）與VSM繪製",
          "2": "可執行現場診斷（走動觀察+數據分析+人員訪談）+識別≥5項改善機會+診斷報告初稿",
          "3": "獨立完成48H快速診斷+完整報告（現況→問題→根因→建議→ROI）+有客戶採納記錄"
        },
        "importance": 5,
        "weight": "15",
        "target_level": "L5A必備(診斷框架+診斷報告) | L5B必備(完整48H診斷) | L6A主導(客戶接案+持續改善輔導)",
        "questions": "進入未知LED燈廠前30分鐘應觀察哪些指標（5S/WIP水位/不良品桶/看板更新/人員狀態）？VSM中生產前置時間vs增值時間差距如何指出改善空間？"
      },
      {
        "category": "[V]  外部稽核與顧問職能  External Auditor & Consultant",
        "code": "V4",
        "dimension": "改善報告與簡報技術",
        "ability": "改善報告與顧問簡報技術（A3報告/客戶診斷報告/高管簡報，MECE結構化思維，數據視覺化，顧問簡報風格：問題→分析→建議→行動計畫→ROI）",
        "levels": {
          "0": "無結構化報告能力",
          "1": "了解A3報告格式與MECE思維（相互獨立/完全窮舉）",
          "2": "可撰寫規範A3報告+製作改善提案書（現況數據/根因/對策/效益）+30分鐘初稿",
          "3": "獨立撰寫客戶診斷報告+高管簡報（30分鐘管理層版/15分鐘執行摘要版）+客戶正面回饋"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L4B必備(A3報告撰寫) | L5A必備(客戶診斷報告) | L5B主導(高管簡報+客戶關係)",
        "questions": "客戶診斷報告必要章節（執行摘要/現況診斷/問題清單/根因/改善建議/ROI/實施計畫）？如何用一張投影片說明OEE從72%→85%的改善路徑？"
      },
      {
        "category": "[V]  外部稽核與顧問職能  External Auditor & Consultant",
        "code": "V5",
        "dimension": "IATF/AS9100客戶稽核應對",
        "ability": "IATF16949/AS9100D客戶或認證稽核應對（稽核前自評清單/現場引導技術/不符合項即時澄清/矯正措施8D追蹤），目標：稽核零Major不符合",
        "levels": {
          "0": "無稽核應對能力",
          "1": "了解客戶稽核與認證稽核的差異及常見查核點",
          "2": "可執行稽核前全廠自評+潛在不符合提前改善+稽核現場引導得當",
          "3": "主導客戶稽核全程（文件準備→現場引導→即時澄清→矯正追蹤）+連續3年零Major"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L4B必備(稽核前自評) | L5A必備(現場引導+即時澄清) | L5B主導(客戶稽核主責+零Major)",
        "questions": "稽核前72H應完成哪些準備（5S/文件版本/記錄齊全/人員演練/問答準備）？發現潛在不符合如何在不承認違規的前提下說明改善計畫？"
      },
      {
        "category": "[V]  外部稽核與顧問職能  External Auditor & Consultant",
        "code": "V6",
        "dimension": "外包駐廠服務能力",
        "ability": "外包/駐廠顧問服務能力（服務合約/里程碑計畫/客戶關係管理/跨部門溝通/定期報告/知識移轉計畫/退出策略），騏宏生產系統完整對外輸出能力",
        "levels": {
          "0": "無駐廠服務概念",
          "1": "了解駐廠顧問角色定位、服務範疇與客戶期望管理",
          "2": "可作為駐廠助理執行改善專案+定期進度報告+維持客戶關係",
          "3": "獨立接案（合約談判→診斷→改善→知識移轉→退出）+完整服務案例+客戶續約或推薦"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L5B必備(駐廠助理執行) | L6A必備(獨立專案管理) | L6B主導(獨立接案+服務案例)",
        "questions": "駐廠第一週優先建立哪些關係（廠長/生產/品管）和收集哪些數據（KPI歷史/不良TOP5/OEE/離職率）？如何設計知識移轉計畫確保顧問離開後客戶可自立？"
      },
      {
        "category": "[V]  外部稽核與顧問職能  External Auditor & Consultant",
        "code": "V7",
        "dimension": "騏宏生產系統標準化輸出",
        "ability": "騏宏生產系統標準化輸出（IATF16949/AS9100D合規框架/22工站SOP/阿米巴損益/KPI體系/OJT訓練體系，完整打包可複製導入客戶工廠），有導入成果量化報告",
        "levels": {
          "0": "無系統輸出概念",
          "1": "了解「騏宏生產系統」核心模組與輸出邏輯",
          "2": "可整理並更新系統手冊+對新員工或客戶說明系統架構",
          "3": "主導系統完整打包+成功導入至少1家客戶+有可量化導入成果報告"
        },
        "importance": 5,
        "weight": "15",
        "target_level": "L5A必備(系統手冊整理+說明) | L5B必備(系統打包協助) | L6A主導(客戶導入+成果報告)",
        "questions": "騏宏生產系統的核心競爭力是什麼？如何向未接觸IATF的客戶廠長說明導入合規框架的商業價值？系統導入最常遇到的抗拒如何化解？"
      },
      {
        "category": "[T]  備料負責人職能  Material Controller",
        "code": "T1",
        "dimension": "備料作業全流程",
        "ability": "備料作業七步驟全流程（確認排程→確認工單BOM→領料核對品號規格數量→物料點收外觀確認→料件分站22工站→缺料即時通報項目負責人/生管→退補料），07:30前開始，開工前1小時完成領料",
        "levels": {
          "0": "不了解備料流程",
          "1": "了解七步驟全流程與時程（07:30-07:50備料，開工前1H完成領料）",
          "2": "獨立完成七步驟備料+BOM核對無誤+22工站料件正確分配+缺料立即通報",
          "3": "建立備料標準流程SOP+備料齊套率≥98%+缺料0次斷線+有備料流程優化案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(七步驟備料流程) | L2B必備(備料齊套率≥98%) | L3A主導(備料SOP建立+齊套率追蹤)",
        "questions": "備料七步驟第一步是確認什麼？料件分站如何確保22個工站都分到正確的料？發現缺料時必須在幾分鐘內通報？缺料登記表需記錄哪些資訊？"
      },
      {
        "category": "[T]  備料負責人職能  Material Controller",
        "code": "T2",
        "dimension": "備料三類異常處理",
        "ability": "備料與生產中三類物料異常處理流程：①對點異常（數量短少/品號不符/外觀異常/批號效期）：發現後立即停止+隔離+拍照+通報；②生產中發料差異（零件差異/IC不動作/數量用完/混料）：停線+隔離+追溯；共通原則：第一動作=停+隔離+通報",
        "levels": {
          "0": "不了解異常處理程序",
          "1": "了解三類異常的共通原則（停+隔離+通報）與藍色待檢標籤/紅色不合格標籤使用",
          "2": "在對點時能獨立執行各類異常的完整處理步驟（含拍照記錄/開不良品標示單/通報IQC）",
          "3": "建立物料異常處理SOP+異常登錄生產日報+QCC候選主題識別（反覆發生的料件異常）"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(異常共通三步驟+標籤使用) | L2B必備(各類異常完整處理) | L3A主導(異常SOP+QCC識別)",
        "questions": "發現品號不符應貼什麼顏色標籤並如何處理（藍色待檢+隔離+通報倉庫）？混料（不同批號規格混在一起）應採取的第一個動作是什麼？生產中IC不動作如何區分燒錄版本問題vs IC不良？"
      },
      {
        "category": "[T]  備料負責人職能  Material Controller",
        "code": "T3",
        "dimension": "ERP七類單據開立",
        "ability": "ERP七類生產單據開立判斷基準與操作：正常領料單/製損單(製程操作失誤)/材損單(來料不良附IQC記錄)/二次領料單(超BOM用量，>5%須巴長加簽)/部門領料單(輔耗材非BOM用料)/轉撥單(跨庫跨部門)/緊急領料單(紅色，24H內補ERP單)；原則：當日事當日畢不可隔日補單（緊急除外）",
        "levels": {
          "0": "不了解七類單據差異",
          "1": "了解七類單據名稱定義與各自適用情境",
          "2": "依情境正確判斷並開立對應單據+填寫必要欄位（工站/原因/數量）+主管簽核",
          "3": "建立ERP單據判斷SOP+開立錯誤率=0%+超領率≤3%+有帳務異常追查改善案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(七類單據判斷) | L2B必備(正確開立+0錯誤) | L3A主導(ERP單據SOP+超領率追蹤)",
        "questions": "生產中因焊接手誤燒斷線材，應開哪種單（製損單）？來料IC批次不良由IQC判定，應開哪種單（材損單並附IQC判定記錄）？緊急領料後多久內必須補ERP正式單（24小時）？超出BOM用量多少比例需巴長加簽（>5%）？"
      },
      {
        "category": "[T]  備料負責人職能  Material Controller",
        "code": "T4",
        "dimension": "生產報工統整",
        "ability": "生產報工統整六項作業（各工站產量統計每2H/不良數分類材損製損/工時統計含加班停線/換線次數時間記錄/燒機批次記錄/每日下班前彙總交項目負責人確認後登錄ERP），報工正確率目標≥98%",
        "levels": {
          "0": "不了解報工統整流程",
          "1": "了解六項報工作業與報工正確率≥98%目標",
          "2": "每日下班前完成六項報工統整+ERP/釘釘登錄準確及時+超領明細每日彙報",
          "3": "建立報工統整SOP+報工正確率追蹤+有超領異常分析改善超領率至≤3%案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(六項報工作業) | L2B必備(報工正確率≥98%) | L3A主導(報工SOP+超領率分析)",
        "questions": "每2小時進行產量統計的目的是什麼？報工資料與實際生產記錄不一致時如何追查（ERP vs 釘釘報工 vs 實體生產記錄三方勾稽）？超領明細須在每日幾點前匯報給項目負責人/巴長？"
      },
      {
        "category": "[T]  備料負責人職能  Material Controller",
        "code": "T5",
        "dimension": "輔耗材管理六品項",
        "ability": "輔耗材六類品項管理（焊接類/防護類/膠料輔材/包裝類/清潔5S/工具類），各類安全庫存設定，管控流程（盤點→比對安全庫存→請領→簽核→領取→登錄→發放→月統計），異常用量（超出月均30%）須查明原因，月底輔耗材月報",
        "levels": {
          "0": "不了解輔耗材管理",
          "1": "了解六類品項與安全庫存概念+輔耗材斷供0次/月目標",
          "2": "每日確認膠類/焊接類庫存+低於安全庫存即請領+月底提交輔耗材月報（用量/費用/異常分析）",
          "3": "建立輔耗材管控SOP+斷供0次維持+異常用量（>月均30%）自動預警機制建立"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(六類品項盤點+安全庫存請領) | L2B必備(月報提交+斷供0次) | L3A主導(管控SOP+異常用量預警)",
        "questions": "膠料（硬膠A/B劑/軟膠/防潮膠）的庫存為何需每日確認（過期或斷供影響灌膠工站）？輔耗材用量超出月均30%需查明什麼原因？月報需提交給誰幾號前提交？"
      },
      {
        "category": "[T]  備料負責人職能  Material Controller",
        "code": "T6",
        "dimension": "備料負責人匯報時程管理",
        "ability": "備料負責人全套匯報時程：【每日】08:10前出缺勤→下班前報工+超領+入庫+膠類庫存+缺料；【每週五】超領週彙總+原因分析+與倉庫對點+輔耗材週用量統計；【每月底】備料齊套率月報+輔耗材月報（用量費用）+月報工正確率；ERP單據當日事當日畢原則",
        "levels": {
          "0": "不了解匯報時程",
          "1": "了解各週期匯報項目與截止時間",
          "2": "所有匯報項目準時完成零遺漏（08:10出缺勤/下班前報工/週五週彙總/月底月報）",
          "3": "建立匯報時程自動提醒機制+連續3個月零逾期+指導備料新人匯報流程"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(日匯報項目準時完成) | L2B必備(週/月匯報零逾期) | L3A主導(匯報時程SOP+指導新人)",
        "questions": "每日出缺勤匯報截止時間是08:10，晚了會影響什麼（人資/薪資計算）？每週五超領明細週彙總需分析哪些原因（製損/材損/設變/計算誤差）？月底備料齊套率如何計算（開工前齊套工單數/總工單數）？"
      },
      {
        "category": "[T]  備料負責人職能  Material Controller",
        "code": "T7",
        "dimension": "日常事務與行政協作",
        "ability": "備料負責人日常事務七項（早會記錄整理歸檔/文件傳遞維修單異常單/出缺勤協助巴長彙整/訪客稽核引導/環境巡檢5S/會議安排/公告張貼）與七大協作單位（生管/倉庫/採購/品保IQC/生技/總務/人資）協作內容",
        "levels": {
          "0": "不了解日常事務職責範圍",
          "1": "了解七項日常事務內容與七大協作單位的聯繫事項",
          "2": "獨立完成所有日常事務（早會記錄/出缺勤匯報/文件傳遞）+各單位協作溝通順暢",
          "3": "建立日常事務SOP+行政協作效率提升+有跨單位協調問題解決案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(七項日常事務執行) | L2B必備(七大單位協作) | L3A主導(日常事務SOP+效率提升)",
        "questions": "早會記錄需在何時整理歸檔？發現環境溫濕度/照明/通道異常應通報哪個單位？缺料通報採購時需提供哪些信息（品號/缺少數量/預計影響排程）？"
      },
      {
        "category": "[R]  KPI績效管理系統  KPI Performance Management",
        "code": "R1",
        "dimension": "生產線核心17項KPI管理",
        "ability": "生產線核心17項KPI管理：生產達成率≥95%/稼動率≥85%/製程不良率≤1.5%/換線達成率≥90%/MTBF≥200H/MTTR≤1H/燒機良品率≥99.5%/【灌膠良品率≥98%】/【成品測試一次通過率≥97%】/交期達成率≥98%/平衡效率≥85%/工時降低率≥3%季/【季度效率提升≥5%季】/首件合格率≥99%/備料齊套率≥98%/提案≥1件人月/【QCC結案≥1件季】/【報工正確率≥98%】/【輔耗材斷供0次月】/【安全事故0件月】/【超領率≤3%】",
        "levels": {
          "0": "不了解KPI定義",
          "1": "了解所有KPI定義、計算公式及目標值/警戒值（特別含灌膠良品率/成品測試通過率/QCC結案/報工正確率/輔耗材斷供/安全事故/超領率）",
          "2": "每日正確統計並更新全部KPI，識別警戒值觸發項目並立即通報",
          "3": "建立KPI看板+趨勢分析+有所有KPI從警戒值改善至目標值完整案例"
        },
        "importance": 5,
        "weight": "15",
        "target_level": "L2A必備(全部KPI定義與公式) | L2B必備(每日統計+警戒值識別) | L3A主導(KPI看板+趨勢分析+改善)",
        "questions": "灌膠良品率與燒機良品率的計算差異？成品測試一次通過率如何計算（工站20）？超領率≤3%目標的意義？報工正確率如何驗證（ERP/釘釘vs實際生產記錄）？"
      },
      {
        "category": "[R]  KPI績效管理系統  KPI Performance Management",
        "code": "R2",
        "dimension": "KPI日/週/月三層檢討機制",
        "ability": "KPI三層檢討機制（日檢討08:00早會15分鐘/週一單位級生產會議/月度管理審查阿米巴績效核算）",
        "levels": {
          "0": "未執行KPI檢討",
          "1": "了解三層檢討機制的目的與頻率",
          "2": "每日參與早會KPI報告+週會前完成週KPI彙整（週一12:00前提交週報）+月報向巴長報告",
          "3": "主持週生產會議+月度管理審查KPI演示+阿米巴績效核算準確"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L1B必備(早會參與) | L2A必備(KPI週報提交) | L2B主導(週會主持) | L3A主導(月度管理審查)",
        "questions": "日檢討早會08:00應報告前一班哪些KPI數據？週報需在週一幾點前提交？月度管理審查阿米巴績效核算如何進行？"
      },
      {
        "category": "[R]  KPI績效管理系統  KPI Performance Management",
        "code": "R3",
        "dimension": "人員績效激勵制度",
        "ability": "五項人員績效激勵制度（改善提案獎金/品質零缺陷獎/生產績效獎/5S月冠軍獎/換線達標獎）管理與執行",
        "levels": {
          "0": "不了解績效激勵制度",
          "1": "了解五項激勵項目內容與發放條件",
          "2": "能依照激勵規則正確記錄績效數據+符合條件的獎項及時申報",
          "3": "建立激勵制度執行SOP+績效數據準確度100%+有激勵制度推動員工KPI提升量化案例"
        },
        "importance": 4,
        "weight": "10",
        "target_level": "L1B必備(激勵制度認知) | L2A必備(績效數據記錄+獎項申報) | L3A主導(激勵制度SOP建立)",
        "questions": "換線達標獎的觸發條件是什麼（連續10次全數在標準時間內）？品質零缺陷獎的計算基準？生產績效獎包含哪些考核項目？"
      },
      {
        "category": "[R]  KPI績效管理系統  KPI Performance Management",
        "code": "R4",
        "dimension": "QCC啟動條件與PDCA管理",
        "ability": "QCC啟動六條件（KPI連續2週未達標/同一不良模式重複≥3次/換線超標連續3次/提案連續2月未達標/客訴複發/巴長指定）與九步驟PDCA時間軸管理",
        "levels": {
          "0": "不了解QCC啟動條件",
          "1": "了解六條件與九步驟PDCA",
          "2": "能識別符合啟動條件的情況+啟動QCC並配合執行PDCA步驟",
          "3": "主動識別啟動條件+主導QCC全程+P/D/C/A各步驟按時間軸完成+有季度QCC成果發表"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2B必備(啟動條件識別+PDCA配合) | L3A必備(QCC主導) | L3B主導(季度成果發表+橫向展開)",
        "questions": "同一不良模式重複幾次必須啟動QCC？換線超標需連續幾次才啟動？QCC九步驟中A1標準化需在D6對策實施後多久完成？"
      },
      {
        "category": "[R]  KPI績效管理系統  KPI Performance Management",
        "code": "R5",
        "dimension": "工作時間軸管理（日/週/月/季）",
        "ability": "完整工作時間軸管理：【日】07:30備料開工→07:50早會→08:00釘釘掃碼開工+首件→16:30統計產量/不良+日報+ERP報工；【週】週一週早會+週排程確認→週五15:00稼動率彙總→週五15:30出貨達成+交期預警→週五16:00工單結案；【月】次月1-3號月報彙總→次月5號前KPI/品質月報→次月10號前產能評估；【季】季末效率提升≥5%結算+季報→管理審查",
        "levels": {
          "0": "不了解工作時間軸",
          "1": "了解日/週/月/季各節點任務（含具體時間如07:30/07:50/08:00/16:30）",
          "2": "每個節點任務準時完成零遺漏（週五週報/月5日月報/季末季報）",
          "3": "建立工作時間軸檢查清單+追蹤執行準時率≥98%+指導備料負責人/作業員各自時程"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B必備(日時程: 07:30備料/07:50早會/08:00開工/16:30報工) | L2A必備(週時程週五五項統計) | L2B主導(月/季時程管理)",
        "questions": "備料負責人每日07:30-07:50必須完成哪些任務？每週五需要完成哪五項週統計（效率/稼動率/不良/出貨/維修）？次月5號前巴長需提交哪些月報且未達標項必須附什麼？"
      },
      {
        "category": "[S]  生產管理原則與制度  Production Management Principles",
        "code": "S1",
        "dimension": "制度化三原則執行",
        "ability": "制度化三原則（法/術/勢）：法=SOP制度防呆、術=治具條碼MES物理防錯、勢=KPI即時可視賞罰公平，讓錯誤做不出來",
        "levels": {
          "0": "不了解三原則",
          "1": "了解法/術/勢三原則定義",
          "2": "在日常作業中確實依三原則執行（SOP遵守/防呆機制執行/KPI即時可視）",
          "3": "推動三原則落地改善+有具體防錯設計案例+KPI可視化主導建立+賞罰機制設計建議"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1A必備(三原則認知) | L1B必備(日常作業三原則遵守) | L2B主導(三原則落地改善推動)",
        "questions": "制度化三原則中「術」（防呆設計）在燒錄站如何應用？「勢」（賞罰公平）如何確保KPI即時可視？如果發現SOP有問題，應按三原則哪個環節處理？"
      },
      {
        "category": "[S]  生產管理原則與制度  Production Management Principles",
        "code": "S2",
        "dimension": "120%修復文化",
        "ability": "120%修復文化（問題發生後修復標準必須超過原始標準，嚴禁隱瞞異常，即時通報機制：作業員→項目負責人90秒→5分鐘決定處置→15分鐘啟動對策）",
        "levels": {
          "0": "有隱瞞異常行為",
          "1": "了解120%修復文化定義與即時通報SLA",
          "2": "發現任何異常立即通報，無隱瞞，配合90秒/5分鐘/15分鐘響應SLA",
          "3": "以身作則推動120%修復文化+建立異常即時通報機制+有發現隱瞞異常並改善文化案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1A必備(無隱瞞異常) | L1B必備(立即通報+90秒SLA配合) | L2B主導(120%修復文化推動)",
        "questions": "120%修復的含義是什麼？為什麼修復標準要超過原始標準？從作業員按燈到啟動對策最長允許幾分鐘？如果你看到同事隱瞞異常你應如何處理？"
      },
      {
        "category": "[S]  生產管理原則與制度  Production Management Principles",
        "code": "S3",
        "dimension": "不合格品三不原則執行",
        "ability": "不合格品三不原則（不流入下一工站/不混入良品區/不自行判斷處置）實際執行，紅色不合格品桶/區使用，品管判定授權",
        "levels": {
          "0": "無三不原則概念",
          "1": "了解三不原則定義與不合格品桶使用",
          "2": "每次發現不合格品確實執行三不原則（隔離/標識/等待品管判定）",
          "3": "建立三不原則視覺化提示+定期稽核三不執行率+有三不原則防止客訴流出案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1A必備(三不原則認知) | L1B必備(確實執行三不原則) | L2A主導(三不執行率稽核)",
        "questions": "不合格品「不自判」的原因是什麼？紅色不合格品桶放滿後如何處理？若發現前工站流入的不合格品應如何處置？"
      },
      {
        "category": "[S]  生產管理原則與制度  Production Management Principles",
        "code": "S4",
        "dimension": "換線標準流程執行",
        "ability": "換線標準三段流程（換線前30分鐘備料/換線中清台6S/換線後首件確認），同系列≤10分鐘/不同機種≤15分鐘，超標填異常報告",
        "levels": {
          "0": "不了解換線三段流程",
          "1": "了解三段流程內容（前/中/後）與時間目標",
          "2": "獨立執行換線三段流程+達成時間目標+換線記錄表完整填寫",
          "3": "建立換線標準流程SOP+換線時間達成率≥90%+有SMED改善換線效率案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B必備(三段流程認知) | L2A必備(獨立執行+達成時間目標) | L2B主導(換線SOP+達成率追蹤)",
        "questions": "換線前30分鐘需完成哪4項準備工作？換線中「清台」的6S確認包含哪些？換線後首件超標時必須填哪份表單並採取什麼行動？"
      }
    ],
    "salary_structure": [
      {
        "grade": "L1A",
        "title_zh": "初級作業員",
        "title_en": "Operator I",
        "salary_min": "30000",
        "salary_mid": "32000",
        "salary_max": "35000",
        "requirements": "基礎作業執行，跟班學習",
        "promotion": "完全新人，需完整帶領",
        "amoeba": "執行者/學習者"
      },
      {
        "grade": "L1B",
        "title_zh": "作業員",
        "title_en": "Operator II",
        "salary_min": "32000",
        "salary_mid": "34000",
        "salary_max": "37000",
        "requirements": "可獨立操作指定工站，品質自主檢查",
        "promotion": "≥3個工站獨立操作，自主檢查合格率≥95%",
        "amoeba": "執行者"
      },
      {
        "grade": "L2A",
        "title_zh": "資深作業員",
        "title_en": "Senior Operator",
        "salary_min": "34000",
        "salary_mid": "37000",
        "salary_max": "40000",
        "requirements": "10站以上熟練，可帶新人OJT",
        "promotion": "≥10工站獨立，一次合格率≥98%，可帶1名新人",
        "amoeba": "執行者/帶領者"
      },
      {
        "grade": "L2B",
        "title_zh": "資深作業員(熟)/班長",
        "title_en": "Lead Operator",
        "salary_min": "36000",
        "salary_mid": "39000",
        "salary_max": "43000",
        "requirements": "全22站熟練，班長職務，ERP報工，NPI首件，釘釘知識庫/審批",
        "promotion": "全22站獨立，換線達標，ERP報工熟練，NPI首件可執行，釘釘知識庫管理",
        "amoeba": "班長/帶領者"
      },
      {
        "grade": "L3A",
        "title_zh": "助理製造工程師",
        "title_en": "Asst. Mfg. Engineer",
        "salary_min": "38000",
        "salary_mid": "41000",
        "salary_max": "45000",
        "requirements": "製程分析、KPI追蹤、QCC圈長、NPI問題追蹤、釘釘專案管理",
        "promotion": "獨立KPI追蹤，8D分析，QCC圈長，NPI試產問題回饋，釘釘專案管理熟練",
        "amoeba": "技術支援者"
      },
      {
        "grade": "L3B",
        "title_zh": "助理製造工程師(熟)",
        "title_en": "Mfg. Engineer",
        "salary_min": "41000",
        "salary_mid": "44000",
        "salary_max": "48000",
        "requirements": "製程改善、PPAP協助、NPI試產SOP驗證、釘釘看板建立",
        "promotion": "KPI改善有成果，PPAP協助，NPI SOP驗證，釘釘數據看板建立",
        "amoeba": "技術推動者"
      },
      {
        "grade": "L4A",
        "title_zh": "製造工程師",
        "title_en": "Mfg. Engineer II",
        "salary_min": "45000",
        "salary_mid": "50000",
        "salary_max": "58000",
        "requirements": "IE改善、PFMEA主導、NPI量產移轉主導、釘釘全功能深度應用",
        "promotion": "獨立IE改善量化成果，PFMEA主導，NPI量產移轉，釘釘流程優化",
        "amoeba": "資深技術者"
      },
      {
        "grade": "L4B",
        "title_zh": "製造工程師(資)",
        "title_en": "Senior Mfg. Engineer",
        "salary_min": "50000",
        "salary_mid": "56000",
        "salary_max": "65000",
        "requirements": "精實生產、SPC體系、NPI多件主導、釘釘流程規範制定",
        "promotion": "精實改善顯著成果，SPC建立，NPI多件主導，PPAP主導",
        "amoeba": "資深技術者"
      },
      {
        "grade": "L5A",
        "title_zh": "資深製造工程師",
        "title_en": "Senior Mfg. Engineer II",
        "salary_min": "58000",
        "salary_mid": "65000",
        "salary_max": "75000",
        "requirements": "製程技術標準化、NPI導入體系建立、IATF生產稽核、釘釘平台治理",
        "promotion": "製程標準化建立，NPI導入體系，IATF稽核主導，Reserve巴長",
        "amoeba": "巴長候選人"
      },
      {
        "grade": "L5B",
        "title_zh": "資深製造工程師(主)",
        "title_en": "Lead Mfg. Engineer",
        "salary_min": "65000",
        "salary_mid": "72000",
        "salary_max": "82000",
        "requirements": "產線整合優化、NPI跨部門主導、跨部門協調、年度KPI策略",
        "promotion": "多產線整合改善，NPI導入跨部門協調，Senior Leader",
        "amoeba": "Senior Leader"
      },
      {
        "grade": "L6A",
        "title_zh": "主任製造工程師/巴長",
        "title_en": "Principal Mfg. Engineer",
        "salary_min": "70000",
        "salary_mid": "80000",
        "salary_max": "92000",
        "requirements": "製造策略、阿米巴P&L、IATF代表人、NPI全流程策略主導",
        "promotion": "生產策略制定，巴長損益達標，IATF對外代表，NPI全流程主導",
        "amoeba": "L1 Amoeba巴長"
      }
    ]
  },
  {
    "job_name": "生管職務",
    "raw_job_name": "生管職務",
    "filename": "騏宏科技_生管職務職能薪資結構表_v5_0_4.xlsx",
    "competencies": [
      {
        "category": "[A]  生管四表（塔台管制）核心能力  Production Control Four Key Reports",
        "code": "A1",
        "dimension": "生產計畫表\n(投產計畫)",
        "ability": "生產計畫表邏輯制定與生成 (工廠塔台/確保生產線依計畫生產)",
        "levels": {
          "0": "從未制定",
          "1": "知道生產計畫表的結構(機種/數量/排程週次/開工日/完工日)",
          "2": "熟練：依訂單+安全庫存+交期+產能制定週計畫，達成率≥90%",
          "3": "建立計畫SOP+異常處理機制+教導新人"
        },
        "importance": 5,
        "weight": "QPLM04(D)\n生管手冊",
        "target_level": "P3B認知(表格結構)｜P4A必備(獨立制定+達成率≥90%)｜P5A主導(SOP建立+教學)",
        "questions": "生產計畫表需涵蓋哪些欄位？計畫達成率如何計算？計畫排程與實際產出差異超過10%如何處理？"
      },
      {
        "category": "[A]  生管四表（塔台管制）核心能力  Production Control Four Key Reports",
        "code": "A2",
        "dimension": "出貨計畫表\n(Shipping Schedule)",
        "ability": "出貨計畫表制定 (與訂單勾稽/確保訂單不漏單)",
        "levels": {
          "0": "從未制定",
          "1": "了解出貨計畫表結構(客戶/品號/數量/出貨日/庫存狀況)",
          "2": "熟練：與銷貨單勾稽+每週更新+提前預警缺貨風險",
          "3": "建立出貨預警機制+漏單率=0+業務/倉庫協調SOP"
        },
        "importance": 5,
        "weight": "QPLM04(D)\n出貨排程",
        "target_level": "P3B認知(表格結構/訂單勾稽)｜P4A必備(每週更新+預警)｜P5A主導(預警SOP建立)",
        "questions": "出貨計畫表如何與ERP銷貨單勾稽？訂單交期已到但庫存不足如何處理？如何確保不漏單？"
      },
      {
        "category": "[A]  生管四表（塔台管制）核心能力  Production Control Four Key Reports",
        "code": "A3",
        "dimension": "WIP工作進度表",
        "ability": "WIP (Work In Progress) 管理  (生管眼睛/各站在製狀況追蹤)",
        "levels": {
          "0": "從未使用",
          "1": "了解WIP定義及各站在製品涵義",
          "2": "熟練：每日更新WIP各站數量+識別瓶頸站+異常推動協調",
          "3": "建立WIP自動化報表+瓶頸預警機制+各站標準在製量基準"
        },
        "importance": 5,
        "weight": "QPLM04(D)\nWIP管理",
        "target_level": "P4A必備(每日WIP更新+瓶頸識別)｜P5A熟練(自動化報表)｜P5B主導(系統化WIP管理)",
        "questions": "WIP各工站數量如何收集？在製量超過標準值如何判斷是否為瓶頸？WIP數量不更新對排程有何影響？"
      },
      {
        "category": "[A]  生管四表（塔台管制）核心能力  Production Control Four Key Reports",
        "code": "A4",
        "dimension": "缺料/備料計畫表",
        "ability": "缺料/備料計畫表邏輯制定  (配合安庫/與生產計畫勾稽/採購眼睛)",
        "levels": {
          "0": "從未制定",
          "1": "知道缺料表的作用(採購備料依據)及與生產計畫的關係",
          "2": "熟練：每週產出缺料表+三分類處理(立即/即將/假缺)+與採購週三協調會數據對焦",
          "3": "建立缺料自動化報出機制+因缺料停線事件≤2件/年"
        },
        "importance": 5,
        "weight": "QPLM04(D)\n缺料表",
        "target_level": "P4A必備(缺料表三分類+每週更新)｜P5A熟練(自動化+採購對焦)｜P5B主導(機制建立+KPI)",
        "questions": "缺料表三分類如何定義？如何判斷「假缺料」？缺料停線事件的根本預防措施是什麼？"
      },
      {
        "category": "[B]  排程計畫作業  Production Scheduling",
        "code": "B1",
        "dimension": "週排程制定",
        "ability": "組裝線週排程制定  (依訂單交期+產能+安全庫存/週計畫排程)",
        "levels": {
          "0": "從未排程",
          "1": "知道週排程制定的基本元素(機種/數量/日期/換線順序)",
          "2": "熟練：依交期優先+產能評估+換線損失最小化，制定週排程，達成率≥90%",
          "3": "建立週排程SOP+排程衝突處理原則+自動化排程模板"
        },
        "importance": 5,
        "weight": "QPLM04(D)\n組裝排程",
        "target_level": "P3B認知(基本元素/排程邏輯)｜P4A必備(獨立排程+達成率≥90%)｜P5A主導(SOP+衝突處理)",
        "questions": "換線順序如何安排才能最小化損耗？排程衝突（兩訂單同日交期但產能不足）如何決策？週排程更新頻率如何設定？"
      },
      {
        "category": "[B]  排程計畫作業  Production Scheduling",
        "code": "B2",
        "dimension": "日計畫看板管理",
        "ability": "生管日計畫看板管理  (每日更新/修正/隔日計畫制定)",
        "levels": {
          "0": "從未管理",
          "1": "知道日計畫看板的作用及應包含的內容",
          "2": "熟練：每日在早會前更新看板+依換線/異常即時修正+隔日計畫確認",
          "3": "建立看板管理標準+異常即時更新SOP+跨班次移交機制"
        },
        "importance": 5,
        "weight": "QPLM04(D)",
        "target_level": "P3B必備(看板更新基本操作)｜P4A熟練(即時修正+隔日計畫)｜P5A主導(SOP建立)",
        "questions": "日計畫看板需涵蓋哪些核心資訊？生產異常時日計畫如何即時修正？看板上的數據如何與ERP工單核對？"
      },
      {
        "category": "[B]  排程計畫作業  Production Scheduling",
        "code": "B3",
        "dimension": "換線管理",
        "ability": "換線通知單/換線記錄  (換線計畫/換線時間管控/SMED)",
        "levels": {
          "0": "從未接觸",
          "1": "了解換線的定義及換線通知單的填寫要點",
          "2": "熟練：換線計畫提前通知→換線記錄登記→換線時間計算→SMED改善追蹤",
          "3": "建立換線SOP+換線時間標準基準+SMED改善提案每季≥1件"
        },
        "importance": 4,
        "weight": "QPLM04(D)\n換線記錄",
        "target_level": "P4A必備(換線通知+記錄登記)｜P5A熟練(換線時間管控+SMED)｜P5B主導(標準建立+改善)",
        "questions": "換線通知單需提前多久發出？換線時間如何計算與登錄？SMED快速換線的4大步驟是什麼？"
      },
      {
        "category": "[B]  排程計畫作業  Production Scheduling",
        "code": "B4",
        "dimension": "月度預排單",
        "ability": "月度生產預排單制定  (量產客戶提前佈局/預排vs訂單雙軌)",
        "levels": {
          "0": "從未執行",
          "1": "了解預排單定義：量產客戶依過往出貨統計提前制定的月度排程計畫",
          "2": "熟練：組裝預排單制定(機種/預估量/建議開工週/SMT預留)→每月20-25日發出→每週依訂單微調",
          "3": "主導預排 vs LRP雙軌管理+預排準確率≥85%+超排/短排預警機制"
        },
        "importance": 5,
        "weight": "生管手冊\n預排單雙軌制",
        "target_level": "P4B必備(預排單邏輯+制定)｜P5A熟練(雙軌管理+準確率KPI)｜P5B主導(機制建立+客戶分級)",
        "questions": "預排單與LRP作業的根本差異？ECCO/COD3等量產客戶為何用預排單而非LRP？預排超出實際訂單15%如何處理？"
      },
      {
        "category": "[C]  工單管理作業  Work Order Management",
        "code": "C1",
        "dimension": "工單制定/重工單",
        "ability": "工單制定作業  (製令工單/重工工單/改制工單)",
        "levels": {
          "0": "從未開立",
          "1": "知道工單三種類型(製令/重工/改制)及基本欄位",
          "2": "熟練：依生產計畫開立工單→重工單制定流程→改制工單條件確認",
          "3": "建立工單制定SOP+零漏工單機制+ERP工單與釘釘掃碼勾稽確認"
        },
        "importance": 5,
        "weight": "QPLM04(D)\n鼎新ERP",
        "target_level": "P3B必備(基本工單開立)｜P4A熟練(重工/改制工單+ERP勾稽)｜P5A主導(SOP建立+零漏單)",
        "questions": "重工工單與製令工單的差異？改制工單的觸發條件是什麼？工單號與釘釘掃碼如何對應確認？"
      },
      {
        "category": "[C]  工單管理作業  Work Order Management",
        "code": "C2",
        "dimension": "工單進度追蹤",
        "ability": "WIP工單進度追蹤  (各站點在製狀況/異常浮現機制)",
        "levels": {
          "0": "從未追蹤",
          "1": "了解工單追蹤的目的及追蹤頻率",
          "2": "熟練：每日查詢工單各站在製數量+異常即時回報+工單延誤預警",
          "3": "建立異常浮現機制+工單延誤率≤5%+ERP工單看板自動化"
        },
        "importance": 5,
        "weight": "QPLM04(D)",
        "target_level": "P4A必備(每日追蹤+異常回報)｜P5A熟練(延誤預警+自動化)｜P5B主導(異常機制建立)",
        "questions": "工單延誤的主要原因有哪些？工單延誤超過2天如何升級處理？如何設定工單異常自動浮現條件？"
      },
      {
        "category": "[C]  工單管理作業  Work Order Management",
        "code": "C3",
        "dimension": "工單結案管理",
        "ability": "工單結案作業  (週/月工單結案/繳庫確認/帳務核對)",
        "levels": {
          "0": "從未結案",
          "1": "了解工單結案的條件及流程",
          "2": "熟練：確認實際產出vs計畫量差異→品保PASS後繳庫→ERP結案→月底統計未結工單",
          "3": "建立工單結案SOP+未結工單月底清0機制+工單繳庫差異率<2%"
        },
        "importance": 4,
        "weight": "QPLM04(D)\nERP結案",
        "target_level": "P4A必備(工單結案基本流程)｜P5A熟練(差異分析+月底清0)｜P5B主導(SOP建立)",
        "questions": "工單結案前需確認哪些事項？實際產出少於工單量5%是否需要開重工工單？月底未結工單如何清查？"
      },
      {
        "category": "[C]  工單管理作業  Work Order Management",
        "code": "C4",
        "dimension": "ECN設變整合",
        "ability": "ECN設計變更對生管的影響整合  (工單調整/庫存評估/切換時機)",
        "levels": {
          "0": "從未處理",
          "1": "了解ECN對生管的影響(舊料消化/新工單開立/排程調整)",
          "2": "熟練：收到ECN→評估在製品影響→舊料消化工單→新BOM工單開立→排程切換時機確認",
          "3": "主導ECN生管整合SOP+零設變遺漏+庫存衝擊最小化"
        },
        "importance": 3,
        "weight": "QPLM04(D)\nECN程序",
        "target_level": "P4B認知(ECN對工單/排程影響)｜P5A熟練(消化工單+切換管理)｜P5B主導(ECN整合SOP)",
        "questions": "ECN發生後生管需在多少時間內回應？在製品未完工時ECN如何決定切換時點？ECN對生產成本的影響如何計算？"
      },
      {
        "category": "[D]  產銷協調作業  Production-Sales Coordination",
        "code": "D1",
        "dimension": "產銷會議主持",
        "ability": "產銷協調會議主持/數據準備  (週四產銷會議/6項輸出)",
        "levels": {
          "0": "從未主持",
          "1": "知道產銷會議目的及生管應準備的數據(排程/產能/出貨/缺料)",
          "2": "熟練：產銷會議6項輸出數據準備→主持報告→決議追蹤→週四前準備完成",
          "3": "主導產銷會議標準化SOP+決議追蹤閉環機制+會議效率≤60分鐘"
        },
        "importance": 5,
        "weight": "QPLM04(D)\n產銷協調",
        "target_level": "P4A必備(數據準備+報告)｜P5A熟練(主持+決議追蹤)｜P5B主導(SOP標準化)",
        "questions": "產銷會議生管應報告哪6項數據？決議追蹤如何確保閉環？會議報告如何在15分鐘內高效呈現？"
      },
      {
        "category": "[D]  產銷協調作業  Production-Sales Coordination",
        "code": "D2",
        "dimension": "生產早會主持",
        "ability": "生產早會主持/當日計畫發布  (08:30每日早會)",
        "levels": {
          "0": "從未主持",
          "1": "了解早會目的(當日計畫確認/昨日達成/異常通報)及基本內容",
          "2": "熟練：早會主持15分鐘內完成/當日3件優先任務確認/異常回報追蹤",
          "3": "建立早會SOP+每日看板連動+15分鐘效率目標"
        },
        "importance": 4,
        "weight": "QPLM04(D)",
        "target_level": "P4A必備(早會數據準備+報告)｜P5A熟練(主持+異常追蹤)｜P5B主導(SOP建立)",
        "questions": "早會中生管需提供哪三項核心數據？昨日達成率低於90%早會如何處理？早會時間控制在15分鐘的技巧？"
      },
      {
        "category": "[D]  產銷協調作業  Production-Sales Coordination",
        "code": "D3",
        "dimension": "交期承諾管理",
        "ability": "業務交期承諾管理  (訂單可行性評估/交期確認/預警回報)",
        "levels": {
          "0": "從未評估",
          "1": "了解交期評估所需要素(產能/庫存/料況/在製)",
          "2": "熟練：接到業務詢問→24h內回覆交期評估→可行→確認/不可行→協商替代方案",
          "3": "建立交期評估SOP+交期承諾準確率≥95%+業務滿意度"
        },
        "importance": 5,
        "weight": "QPLM04(D)\nQPSA02",
        "target_level": "P4A必備(交期評估基本邏輯)｜P5A熟練(24h回覆+替代方案)｜P5B主導(SOP+承諾準確率KPI)",
        "questions": "交期評估需確認哪4個要素？緊急插單對現有排程的影響如何評估？交期承諾後發現無法達成如何處理？"
      },
      {
        "category": "[D]  產銷協調作業  Production-Sales Coordination",
        "code": "D4",
        "dimension": "成品庫存分析",
        "ability": "成品庫存分析/呆滯預警  (月度分析/庫存平衡)",
        "levels": {
          "0": "從未分析",
          "1": "知道成品庫存分析的目的及KPI指標",
          "2": "熟練：月度成品庫存分析→呆滯品清單→提交業務/生管評估處置方案",
          "3": "建立成品庫存平衡機制+庫存週轉率目標+呆滯率<5%"
        },
        "importance": 3,
        "weight": "QPLM04(D)\n庫存分析",
        "target_level": "P4B認知(庫存分析基本指標)｜P5A熟練(月度分析+呆滯預警)｜P5B主導(庫存平衡機制)",
        "questions": "成品庫存週轉率計算公式？呆滯品定義(超過幾個月無移動)？呆滯成品如何與業務協調消化？"
      },
      {
        "category": "[E]  SMT機時管理  SMT Machine Time Management",
        "code": "E1",
        "dimension": "SMT機時排程",
        "ability": "SMT機時排程制定  (依機時預估/半成品計畫/稼動率管控)",
        "levels": {
          "0": "從未排程",
          "1": "了解SMT機時排程的邏輯(機種切換/機時計算/PCBA計畫量)",
          "2": "熟練：依組裝工單需求反推SMT投料量→機時計算→排入SMT週計畫→稼動率≥80%",
          "3": "建立SMT機時排程SOP+稼動率自動追蹤+SMT vs 組裝時序對齊機制"
        },
        "importance": 5,
        "weight": "QPLM04(D)\nSMT手冊",
        "target_level": "P4A認知(SMT機時邏輯+基本排程)｜P5A熟練(機時計算+稼動率管控)｜P5B主導(SOP+自動追蹤)",
        "questions": "SMT機時如何計算(takt time法)？SMT排程如何與組裝線時序對齊以避免斷料？稼動率<70%時的改善切入點？"
      },
      {
        "category": "[E]  SMT機時管理  SMT Machine Time Management",
        "code": "E2",
        "dimension": "SMT半成品\n工單管理",
        "ability": "SMT半成品工單管理  (PCBA工單/物料備齊確認/優先順序)",
        "levels": {
          "0": "從未管理",
          "1": "了解SMT半成品工單的特性(PCBA獨立工單/需與組裝工單連動)",
          "2": "熟練：SMT工單開立→備料狀態確認→生產優先排序→完工入庫通知組裝",
          "3": "建立SMT工單與組裝工單連動機制+半成品在製標準量基準+超額在製預警"
        },
        "importance": 4,
        "weight": "SMT手冊\nQPLM04",
        "target_level": "P4A必備(SMT工單開立+備料確認)｜P5A熟練(工單連動+在製管控)｜P5B主導(連動機制建立)",
        "questions": "SMT工單需提前幾天開立才能確保組裝不斷料？PCBA半成品超額在製的危害是什麼？SMT工單緊急插入如何調整排程？"
      },
      {
        "category": "[E]  SMT機時管理  SMT Machine Time Management",
        "code": "E3",
        "dimension": "SMT稼動率\n分析",
        "ability": "SMT稼動率分析/改善  (OEE/換線損失/料缺停機分析)",
        "levels": {
          "0": "從未分析",
          "1": "知道稼動率計算公式及騏宏SMT稼動率目標(≥80%)",
          "2": "熟練：每週稼動率統計→TOP3損失原因分析(換線/料缺/設備停機)→提出改善建議",
          "3": "建立SMT稼動率自動報表+月度OEE分析+每月改善提案≥1件"
        },
        "importance": 4,
        "weight": "SMT手冊\nQPMD03",
        "target_level": "P4B認知(稼動率計算/目標值)｜P5A熟練(損失分析+改善提案)｜P5B主導(自動報表+OEE)",
        "questions": "SMT稼動率計算公式(可用率×性能率×良率)？稼動率低於目標時優先排查哪三項？換線損失如何量化計算？"
      },
      {
        "category": "[F]  託外管理  Outsourcing Management",
        "code": "F1",
        "dimension": "託外工單管理",
        "ability": "託外製令管理  (A/B/C類分級/進度跟催/交期管控)",
        "levels": {
          "0": "從未接觸",
          "1": "了解騏宏託外三分類(A:主要/B:輔助/C:試作)及基本跟催方式",
          "2": "熟練：依類別設定跟催頻率→每日快報進度→延誤即時上報→QPLM03程序執行",
          "3": "建立託外進度追蹤看板+託外準時率≥90%+延誤供應商升級處理SOP"
        },
        "importance": 5,
        "weight": "QPLM03(D)\n生管手冊",
        "target_level": "P4A必備(三分類+基本跟催)｜P5A熟練(準時率管控+延誤處理)｜P5B主導(追蹤機制建立)",
        "questions": "A/B/C類託外的跟催頻率各為何？託外延誤3天如何升級處理？技術移轉型託外與一般代工型託外管理有何不同？"
      },
      {
        "category": "[F]  託外管理  Outsourcing Management",
        "code": "F2",
        "dimension": "託外進貨\n入庫協調",
        "ability": "託外進貨入庫協調  (品保驗收/帳務勾稽/生管確認)",
        "levels": {
          "0": "從未協調",
          "1": "了解託外進貨入庫流程(驗收→入庫→帳務)及生管的角色",
          "2": "熟練：提前通知倉庫/品保→進貨入庫確認→ERP帳務勾稽→工單數量核對",
          "3": "建立託外入庫SOP+24h內完成帳務→入庫差異<0.5%"
        },
        "importance": 3,
        "weight": "QPLM03(D)\nWILM0612",
        "target_level": "P4A必備(入庫確認+帳務勾稽)｜P5A熟練(SOP執行+差異管控)｜P5B主導(SOP建立)",
        "questions": "託外進貨數量與工單不符如何處理？託外產品IQC不合格的後續生管動作是什麼？帳務勾稽的時效要求？"
      },
      {
        "category": "[F]  託外管理  Outsourcing Management",
        "code": "F3★",
        "dimension": "技轉準備\n作業",
        "ability": "技術移轉型託外準備作業  (圖面/SOP/首件確認/技術輸出管控)",
        "levels": {
          "0": "從未接觸",
          "1": "了解技轉型託外特點(需提供工程資料)及騏宏管控要求",
          "2": "熟練：技轉文件清單準備→首件確認→供應商量產能力評估→品質水準追蹤",
          "3": "建立技轉託外標準程序+首件通過率≥80%+技轉文件管制"
        },
        "importance": 3,
        "weight": "QPLM03(D)",
        "target_level": "P4B認知(技轉型託外概念)｜P5A熟練(文件準備+首件確認)｜P5B主導(技轉SOP建立)",
        "questions": "技轉型託外需要提供哪些技術文件？首件確認失敗的處理SOP是什麼？技轉後如何確保品質一致性？"
      },
      {
        "category": "[G]  NPI新品排程  NPI Scheduling",
        "code": "G1",
        "dimension": "NPI排程評估",
        "ability": "NPI新品試作排程評估  (APQP Phase4/試作排程/產能衝突評估)",
        "levels": {
          "0": "從未參與",
          "1": "了解NPI排程介入時機(APQP Phase4試作)及生管評估項目",
          "2": "熟練：接收研發NPI需求→評估試作產能衝突→排入試作排程→試作數量確認→試作後量產排程規劃",
          "3": "主導NPI排程介入標準化+NPI試作準時率≥90%+量產排程提前布局"
        },
        "importance": 5,
        "weight": "QPRD04(APQP)\n生管手冊",
        "target_level": "P4B認知(NPI排程介入時機)｜P5A熟練(試作排程+產能評估)｜P5B主導(NPI排程標準化)",
        "questions": "NPI試作排程如何避免衝擊正式量產線？生管在APQP哪個階段必須介入？NPI試作完成後量產排程如何提前布局？"
      },
      {
        "category": "[G]  NPI新品排程  NPI Scheduling",
        "code": "G2",
        "dimension": "試作工單管理",
        "ability": "試作製令工單管理  (試作料管理/試作報工/試作vs量產區分)",
        "levels": {
          "0": "從未管理",
          "1": "了解試作工單與量產工單的差異及識別方式",
          "2": "熟練：試作工單獨立開立→試作料(研發庫)管理→試作報工記錄→試作結案",
          "3": "建立試作工單管理SOP+試作vs量產料品隔離機制+試作成本追蹤"
        },
        "importance": 3,
        "weight": "QPRD04\nQPLM04",
        "target_level": "P4A必備(試作工單基本操作)｜P5A熟練(試作料管理+成本追蹤)｜P5B主導(SOP建立)",
        "questions": "試作工單如何與量產工單區隔？試作料從研發庫領料的流程是什麼？試作失敗後物料如何處理？"
      },
      {
        "category": "[H]  LRP/缺料管理  Material Planning & Shortage Management",
        "code": "H1",
        "dimension": "LRP物料需求\n規劃",
        "ability": "LRP中長期物料需求規劃  (依訂單預估物料需求/3-6個月中長期雷達)",
        "levels": {
          "0": "從未接觸",
          "1": "了解LRP定義：鼎新ERP中「依訂單預估物料需求」，騏宏定義=訂單導向中長期(3-6個月)物料雷達",
          "2": "熟練：每月/每季與採購一起跑LRP報表→識別關鍵料需求量→輸出採購策略清單→長交期料提前觸發請購",
          "3": "主導月度LRP+生管/採購/業務三方FCST對齊+長約決策連動"
        },
        "importance": 5,
        "weight": "鼎新ERP LRP\n生管手冊",
        "target_level": "P4A必備(LRP概念+報表查詢)｜P5A熟練(每月LRP+關鍵料識別)｜P5B主導(三方FCST對齊+長約決策)",
        "questions": "LRP在鼎新ERP的正式定義？LRP與缺料表雙軌管理的分工邏輯？LRP識別出關鍵料缺口後生管的下一步決策？"
      },
      {
        "category": "[H]  LRP/缺料管理  Material Planning & Shortage Management",
        "code": "H2",
        "dimension": "缺料表三分類\n管理",
        "ability": "缺料表三分類管理  (立即缺/即將缺/假缺 短期1-4週作戰圖)",
        "levels": {
          "0": "從未使用",
          "1": "了解缺料表三分類定義及騏宏操作方式",
          "2": "熟練：每週≥2次產出缺料表→三分類分派→週三缺料協調會與採購/倉庫數據對焦",
          "3": "建立缺料自動化報出+缺料事件≤2件/年+停線事件=0"
        },
        "importance": 5,
        "weight": "缺料表Excel\n生管手冊",
        "target_level": "P4A必備(三分類+每週缺料表)｜P5A熟練(自動化+三方對焦)｜P5B主導(停線KPI建立)",
        "questions": "假缺料如何快速識別？缺料表更新頻率如何根據生產緊急度調整？週三缺料協調會生管需帶哪三項數據？"
      },
      {
        "category": "[H]  LRP/缺料管理  Material Planning & Shortage Management",
        "code": "H3",
        "dimension": "FCST備料計畫",
        "ability": "業務FCST備料計畫整合  (業務預測→生管評估→採購備料)",
        "levels": {
          "0": "從未整合",
          "1": "了解FCST備料計畫的作用及各部門角色",
          "2": "熟練：收到業務FCST→生管評估可行性→更新生產預排→發採購備料需求→確認產能承諾",
          "3": "建立FCST生管評估SOP+FCST準確率追蹤+超差預警(>15%需重新協商)"
        },
        "importance": 4,
        "weight": "FCST備料計畫\n生管手冊",
        "target_level": "P4A必備(FCST評估基本邏輯)｜P5A熟練(整合評估+採購連動)｜P5B主導(SOP+準確率KPI)",
        "questions": "FCST與實際訂單差異超過多少%需要重新協商排程？FCST備料計畫與生產預排單如何雙向對齊？FCST更新頻率如何設定？"
      },
      {
        "category": "[H]  LRP/缺料管理  Material Planning & Shortage Management",
        "code": "H4★",
        "dimension": "安全庫存\n基準設定",
        "ability": "安全庫存(SS)/補貨點(ROP)設定  (半成品/成品安全庫存基準)",
        "levels": {
          "0": "從未設定",
          "1": "了解安全庫存三原則及半成品安全庫存基準設定邏輯",
          "2": "熟練：依Lead Time+需求波動計算SS→設定鼎新ERP安全庫存→定期檢討更新",
          "3": "建立各機種SS/ROP基準+每季複審+呆滯風險預警"
        },
        "importance": 3,
        "weight": "QPLM04\n鼎新ERP",
        "target_level": "P4B認知(SS/ROP概念)｜P5A熟練(SS計算+ERP設定)｜P5B主導(年度複審機制)",
        "questions": "半成品安全庫存計算公式？SS設太高的副作用？如何判斷安全庫存水位是否合理？"
      },
      {
        "category": "[I]  鼎新ERP系統操作  ERP System Operations",
        "code": "I1",
        "dimension": "鼎新ERP\n工單模組",
        "ability": "鼎新ERP工單模組全流程  (工單開立/報工/結案/報表)",
        "levels": {
          "0": "從未操作",
          "1": "知道ERP工單模組主要功能",
          "2": "熟練：工單開立→釘釘掃碼綁定→報工輸入→完工入庫→工單結案→報表匯出",
          "3": "建立ERP工單SOP+訓練新人+系統優化建議"
        },
        "importance": 5,
        "weight": "鼎新ERP\n工單模組",
        "target_level": "P3B必備(工單基本操作)｜P4A熟練(全流程+報表)｜P5A主導(SOP建立+教學)",
        "questions": "如何從ERP查詢特定工單的各站在製數量？ERP工單報工數與實際產出不符如何處理？工單結案前需確認哪些ERP欄位？"
      },
      {
        "category": "[I]  鼎新ERP系統操作  ERP System Operations",
        "code": "I2",
        "dimension": "鼎新ERP\n排程模組",
        "ability": "鼎新ERP生產排程/LRP模組操作  (LRP展算/生產計畫表/排程拋轉)",
        "levels": {
          "0": "從未操作",
          "1": "了解ERP排程模組架構及LRP在ERP的操作方式",
          "2": "熟練：依訂單跑LRP→批次生產計畫展算→生管計畫維護→拋轉採購計畫",
          "3": "建立LRP運行SOP+異常數據清理機制+報表自動化"
        },
        "importance": 5,
        "weight": "鼎新ERP LRP\n生管手冊",
        "target_level": "P4A必備(LRP報表查詢+生產計畫)｜P5A熟練(LRP全流程+拋轉)｜P5B主導(SOP+資料品質管控)",
        "questions": "LRP展算前需確認哪些基礎資料的正確性？生產計畫拋轉採購計畫的觸發條件？ERP生產計畫表與生管四表如何對應？"
      },
      {
        "category": "[I]  鼎新ERP系統操作  ERP System Operations",
        "code": "I3",
        "dimension": "鼎新ERP\n生管報表",
        "ability": "鼎新ERP生管報表應用  (在製品報表/出貨預計表/WIP進度/缺料報表)",
        "levels": {
          "0": "從未使用",
          "1": "了解ERP生管主要報表名稱及用途",
          "2": "熟練：各報表篩選條件設定+匯出Excel分析+生管四表整合產出",
          "3": "建立自動化報表機制+每日報表標準化+報表結果異常識別"
        },
        "importance": 4,
        "weight": "鼎新ERP",
        "target_level": "P4A必備(報表查詢+匯出)｜P5A熟練(整合分析+四表產出)｜P5B主導(自動化機制)",
        "questions": "如何用ERP一次查詢所有未結工單？缺料報表如何設定篩選條件精準找出缺料？ERP報表與釘釘系統如何連動？"
      },
      {
        "category": "[I]  鼎新ERP系統操作  ERP System Operations",
        "code": "I4",
        "dimension": "釘釘系統\n生管應用",
        "ability": "釘釘工單掃碼/生管報告/審批流程  (組裝工站1+22掃碼/生管日報)",
        "levels": {
          "0": "從未使用",
          "1": "了解釘釘在生管的應用範圍(工單掃碼/排程通知/審批)",
          "2": "熟練：工站1製令掃碼→工單進度追蹤→工站22出貨掃碼→生管日報填寫送審",
          "3": "建立釘釘生管SOP+工單異常自動通報+生管日報標準化"
        },
        "importance": 5,
        "weight": "釘釘系統\n組裝工站1/22",
        "target_level": "P3B必備(基本掃碼+日報)｜P4A熟練(全流程+異常回報)｜P5A主導(SOP建立+自動通報)",
        "questions": "工站1掃碼顯示「工單不存在」的處理步驟？如何從釘釘查詢特定批號的即時WIP狀況？生管日報需包含哪六項核心數據？"
      },
      {
        "category": "[J]  跨部門協調溝通  Cross-Department Coordination",
        "code": "J1",
        "dimension": "生管/採購\n料況協調",
        "ability": "與採購協調料況  (週三缺料協調會/生管四表數據對焦)",
        "levels": {
          "0": "從未協調",
          "1": "知道生管與採購的料況協調機制及週三缺料協調會的內容",
          "2": "熟練：每日快報缺料/異常→週三缺料三分類提供採購→週五產銷會料況預警",
          "3": "建立料況預警SOP+因料況停線事件≤2件/年+採購介面SOP"
        },
        "importance": 5,
        "weight": "各會議紀錄",
        "target_level": "P4A必備(週三協調會準備)｜P5A熟練(預警機制/三分類快報)｜P5B主導(料況SOP建立)",
        "questions": "週三缺料協調會生管應提供哪三項數據？缺料三分類（立即/即將/假缺）各自的處理時效？如何識別由帳務不準造成的假缺料？"
      },
      {
        "category": "[J]  跨部門協調溝通  Cross-Department Coordination",
        "code": "J2",
        "dimension": "生管/業務\n訂單協調",
        "ability": "與業務協調訂單交期  (交期評估/緊急插單/交期預警)",
        "levels": {
          "0": "從未協調",
          "1": "了解生管與業務在訂單交期的協調機制",
          "2": "熟練：交期評估24h回覆→緊急插單影響評估→提前預警不可達交期",
          "3": "建立交期承諾SOP+承諾準確率≥95%+緊急插單標準評估流程"
        },
        "importance": 5,
        "weight": "QPSA02\n產銷協調",
        "target_level": "P4A必備(交期評估+24h回覆)｜P5A熟練(緊急插單評估+預警)｜P5B主導(承諾SOP建立)",
        "questions": "緊急插單的評估維度有哪些？交期已承諾後發現無法達成如何升級處理？如何向業務說明排程衝突影響？"
      },
      {
        "category": "[J]  跨部門協調溝通  Cross-Department Coordination",
        "code": "J3",
        "dimension": "生管/品保\n品質異常協調",
        "ability": "與品保協調品質異常  (停線/重工評估/排程調整)",
        "levels": {
          "0": "從未協調",
          "1": "了解品質異常對排程的影響及生管的應對機制",
          "2": "熟練：品保通報異常→生管評估停線影響→重工工單開立→排程即時調整→業務交期重確認",
          "3": "建立品質異常生管應對SOP+停線影響快速評估模板+重工排程標準化"
        },
        "importance": 4,
        "weight": "QPQA03\n異常程序",
        "target_level": "P4A必備(品質異常排程調整)｜P5A熟練(停線評估+重工工單)｜P5B主導(應對SOP建立)",
        "questions": "品質停線後生管的第一動作是什麼？重工工單如何不影響正常生產線排程？品質異常頻繁發生如何從排程角度介入改善？"
      },
      {
        "category": "[J]  跨部門協調溝通  Cross-Department Coordination",
        "code": "J4",
        "dimension": "生管/倉庫\n備料協調",
        "ability": "與倉庫備料協調  (提前發料通知/缺料確認/在製品移轉)",
        "levels": {
          "0": "從未協調",
          "1": "了解生管與倉庫備料協調的時機及方式",
          "2": "熟練：依生產計畫提前24h通知倉庫備料→缺料確認→在製品移轉指示→工單料品數量核對",
          "3": "建立備料通知SOP+24h提前通知率=100%+備料差異率<1%"
        },
        "importance": 4,
        "weight": "QPLM04\n倉管手冊",
        "target_level": "P4A必備(備料通知基本操作)｜P5A熟練(備料SOP+差異管控)｜P5B主導(流程標準化)",
        "questions": "備料通知單需提前多少時間發出？倉庫反映物料不足時生管如何應急處理？在製品移轉如何在ERP中記錄？"
      },
      {
        "category": "[K]  戰略生管能力  Strategic Production Control  (Leader核心職責)",
        "code": "K1",
        "dimension": "工作規劃分解\n授權管理",
        "ability": "Leader工作規劃/分解/授權  (KPI拆解→A/B分配→監控→培育)",
        "levels": {
          "0": "從未擔任主管",
          "1": "了解Leader五大核心職責(規劃/分配/監控/協調/培育)",
          "2": "熟練：KPI目標分解至個人/每日看板監控/異常浮現機制/OJT計畫執行",
          "3": "主導3人團隊KPI全面達標+異常管理機制+技能矩陣更新"
        },
        "importance": 4,
        "weight": "生管手冊\nLeader角色",
        "target_level": "P5B認知(Leader職責架構)｜P6A熟練(KPI分解/授權監控/OJT)｜P6B主導(團隊KPI全面達標)",
        "questions": "如何將OTD 95%目標分解到生管A和生管B？每日看板監控哪三項核心指標？OJT計畫如何確保A/B代理能力？"
      },
      {
        "category": "[K]  戰略生管能力  Strategic Production Control  (Leader核心職責)",
        "code": "K2",
        "dimension": "產能評估\n分析",
        "ability": "產能評估制定  (標準工時/人力負荷/線平衡/產能計算)",
        "levels": {
          "0": "從未評估",
          "1": "了解產能評估的基本要素(工站數/人力/標準工時/稼動率)",
          "2": "熟練：月度產能評估→人力負荷計算→線平衡分析→與生產計畫對比識別瓶頸",
          "3": "建立產能評估標準模板+每月產能預測準確率≥85%+瓶頸改善提案"
        },
        "importance": 5,
        "weight": "生管手冊\n標工管理",
        "target_level": "P4B認知(產能評估要素)｜P5A熟練(月度產能評估+線平衡)｜P5B主導(模板建立+預測準確率)",
        "questions": "標準工時如何更新與驗證？線平衡率計算公式？產能不足時託外比例如何決策？"
      },
      {
        "category": "[K]  戰略生管能力  Strategic Production Control  (Leader核心職責)",
        "code": "K3★",
        "dimension": "KPI目標設定\n績效管理",
        "ability": "生管KPI目標設定/績效管理  (14項KPI/月度PDCA/BSC)",
        "levels": {
          "0": "從未執行",
          "1": "了解生管主要KPI指標名稱與目標值",
          "2": "熟練：月度KPI數據採集+圖表製作+TOP3問題+PDCA進度報告",
          "3": "建立生管KPI自動化儀表板+月度績效Review+驅動持續改善"
        },
        "importance": 4,
        "weight": "生管手冊\nKPI儀表板",
        "target_level": "P5A認知(KPI指標定義)｜P5B熟練(月度Review/PDCA)｜P6A主導(自動化儀表板建立)",
        "questions": "生管14項KPI中最核心的5項是哪些？計畫達成率與OTD的差異？KPI未達標的PDCA改善如何結案？"
      },
      {
        "category": "[K]  戰略生管能力  Strategic Production Control  (Leader核心職責)",
        "code": "K4",
        "dimension": "阿米巴\n利潤思維",
        "ability": "阿米巴利潤思維應用  (單位時間附加價值/每個排程決策算一次帳)",
        "levels": {
          "0": "無概念",
          "1": "了解阿米巴公式：(收入－費用)÷總工時＝單位時間附加價值，知道排程決策影響成本",
          "2": "熟練：換線次數→效率損失計算/預排準確率→庫存積壓計算/停線成本量化/託外比例→加工成本",
          "3": "建立生管成本意識+排程決策前成本評估習慣+每月生管貢獻利潤分析"
        },
        "importance": 4,
        "weight": "稻盛和夫\n阿米巴管理",
        "target_level": "P5B認知(阿米巴公式+排程成本關係)｜P6A熟練(停線成本量化+排程ROI)｜P6B主導(生管貢獻利潤分析)",
        "questions": "一次換線損耗的成本如何計算？缺料停線30分鐘的機會成本是多少？阿米巴精神如何改變生管的排程決策邏輯？"
      },
      {
        "category": "[L]  AI工具應用能力  AI-Augmented Production Control",
        "code": "L1",
        "dimension": "Claude AI\n生管應用",
        "ability": "Claude Artifacts/Chart  (生管KPI Dashboard/排程分析/WIP視覺化)",
        "levels": {
          "0": "從未使用",
          "1": "能用Claude生成基礎生管圖表(OTD趨勢/計畫達成率柱狀圖)",
          "2": "熟練：生成月度生管KPI Dashboard/WIP各站熱力圖/產能負荷甘特圖",
          "3": "建立生管AI圖表標準模板+節省報告製作時間≥50%"
        },
        "importance": 5,
        "weight": "claude.ai",
        "target_level": "P4A起建立(基礎圖表)｜P5A必備(KPI Dashboard+WIP圖)｜P5B主導(部門模板+效率提升)",
        "questions": "如何用Claude生成12週OTD達成率的趨勢圖？WIP各站在製量熱力圖如何設計？月度生管KPI報告用AI減少製作時間的最佳做法？"
      },
      {
        "category": "[L]  AI工具應用能力  AI-Augmented Production Control",
        "code": "L2",
        "dimension": "Cowork\n桌面自動化",
        "ability": "Claude Cowork  (生管報表自動生成/ERP匯出/缺料通知自動化)",
        "levels": {
          "0": "從未使用",
          "1": "了解Cowork能自動化哪些生管工作(ERP報表/工單進度/缺料通知)",
          "2": "熟練設定：ERP缺料表→Cowork整理→釘釘通知採購/倉庫",
          "3": "建立生管Cowork自動化SOP+節省重複作業≥30%/月"
        },
        "importance": 4,
        "weight": "claude.ai\nCowork",
        "target_level": "P4B認知(Cowork生管工作流)｜P5A必備(缺料/WIP通知自動化)｜P5B主導(部門自動化SOP)",
        "questions": "哪些生管日常作業最適合先用Cowork自動化？Cowork如何定時抓取ERP工單進度並推送釘釘？"
      },
      {
        "category": "[L]  AI工具應用能力  AI-Augmented Production Control",
        "code": "L3★",
        "dimension": "NotebookLM\nAI知識管理",
        "ability": "Google NotebookLM  (生管SOP知識庫/排程案例庫/問答系統)",
        "levels": {
          "0": "從未使用",
          "1": "了解NotebookLM能將SOP/排程案例/法規轉為可問答AI知識庫",
          "2": "熟練建立：QPLM04/生管四表/排程SOP問答庫/異常案例庫",
          "3": "建立生管知識管理體系+縮短新人OJT查詢時間≥40%"
        },
        "importance": 3,
        "weight": "NotebookLM\n(Google)",
        "target_level": "P3B起建立(基礎問答使用)｜P4A必備(SOP/四表知識庫)｜P5A主導(部門知識管理+OJT整合)",
        "questions": "如何將生管手冊上傳NotebookLM讓全員即時查詢？排程異常案例庫如何設計才能被高效搜尋？"
      },
      {
        "category": "[L]  AI工具應用能力  AI-Augmented Production Control",
        "code": "PC3A",
        "dimension": "助理生管員",
        "ability": "33,000~38,000",
        "levels": {
          "0": "≥15分",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "≥0.8",
        "target_level": "",
        "questions": ""
      },
      {
        "category": "[L]  AI工具應用能力  AI-Augmented Production Control",
        "code": "PC3B",
        "dimension": "生管員",
        "ability": "36,000~42,000",
        "levels": {
          "0": "≥25分",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "≥1.0",
        "target_level": "",
        "questions": ""
      },
      {
        "category": "[L]  AI工具應用能力  AI-Augmented Production Control",
        "code": "PC4A",
        "dimension": "生管工程師",
        "ability": "40,000~48,000",
        "levels": {
          "0": "≥38分",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "≥1.2",
        "target_level": "",
        "questions": ""
      },
      {
        "category": "[L]  AI工具應用能力  AI-Augmented Production Control",
        "code": "PC4B",
        "dimension": "生管工程師(資)",
        "ability": "44,000~53,000",
        "levels": {
          "0": "≥52分",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "≥1.5",
        "target_level": "",
        "questions": ""
      },
      {
        "category": "[L]  AI工具應用能力  AI-Augmented Production Control",
        "code": "PC5A",
        "dimension": "資深生管工程師",
        "ability": "52,000~62,000",
        "levels": {
          "0": "≥68分",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "≥1.8",
        "target_level": "",
        "questions": ""
      },
      {
        "category": "[L]  AI工具應用能力  AI-Augmented Production Control",
        "code": "PC5B",
        "dimension": "生管主任/Leader",
        "ability": "60,000~73,000",
        "levels": {
          "0": "≥82分",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "≥2.0",
        "target_level": "",
        "questions": ""
      },
      {
        "category": "[L]  AI工具應用能力  AI-Augmented Production Control",
        "code": "PC6A",
        "dimension": "生管主管/課長",
        "ability": "68,000~83,000",
        "levels": {
          "0": "≥95分",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "≥2.2",
        "target_level": "",
        "questions": ""
      },
      {
        "category": "[L]  AI工具應用能力  AI-Augmented Production Control",
        "code": "PC6B",
        "dimension": "資深生管主管",
        "ability": "75,000~90,000",
        "levels": {
          "0": "≥108分",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "≥2.5",
        "target_level": "",
        "questions": ""
      },
      {
        "category": "[L]  AI工具應用能力  AI-Augmented Production Control",
        "code": "PC7",
        "dimension": "生管協理/副理",
        "ability": "85,000~115,000",
        "levels": {
          "0": "≥120分",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "≥2.7",
        "target_level": "",
        "questions": ""
      }
    ],
    "salary_structure": [
      {
        "grade": "PC3A",
        "title_zh": "助理生管員",
        "title_en": "Junior Production Planner",
        "salary_min": "33000",
        "salary_mid": "36000",
        "salary_max": "39000",
        "requirements": "協助生管四表基本操作，需完整OJT培訓，設3/6/12月里程碑",
        "promotion": "考核B以上",
        "amoeba": ""
      },
      {
        "grade": "PC3B",
        "title_zh": "生管員",
        "title_en": "Production Planner",
        "salary_min": "36000",
        "salary_mid": "39000",
        "salary_max": "43000",
        "requirements": "獨立操作生管四表/工單管理，可獨立跟催，需補強排程能力",
        "promotion": "核心分≥25/考核B以上",
        "amoeba": ""
      },
      {
        "grade": "PC4A",
        "title_zh": "生管工程師",
        "title_en": "Production Control Engineer",
        "salary_min": "40000",
        "salary_mid": "44000",
        "salary_max": "49000",
        "requirements": "熟練生管四表+週排程制定+WIP追蹤+產銷協調，具備鼎新ERP生管模組能力",
        "promotion": "核心分≥38/考核A",
        "amoeba": ""
      },
      {
        "grade": "PC4B",
        "title_zh": "生管工程師(資)",
        "title_en": "Production Control Engineer II",
        "salary_min": "44000",
        "salary_mid": "49000",
        "salary_max": "55000",
        "requirements": "預排單制定/SMT機時管理/NPI排程介入/IATF稽核配合",
        "promotion": "核心分≥52/考核A",
        "amoeba": ""
      },
      {
        "grade": "PC5A",
        "title_zh": "資深生管工程師",
        "title_en": "Senior Production Control Engineer",
        "salary_min": "52000",
        "salary_mid": "57000",
        "salary_max": "64000",
        "requirements": "策略排程認知/LRP分析/可指導PC4層級/產能評估實績",
        "promotion": "核心分≥68/考核A+",
        "amoeba": ""
      },
      {
        "grade": "PC5B",
        "title_zh": "生管主任/Leader",
        "title_en": "Production Control Leader",
        "salary_min": "60000",
        "salary_mid": "66000",
        "salary_max": "75000",
        "requirements": "3人生管組領導，KPI全面達標，建立SOP/技能矩陣/OJT計畫",
        "promotion": "核心分≥82/考核A+",
        "amoeba": ""
      },
      {
        "grade": "PC6A",
        "title_zh": "生管主管/課長",
        "title_en": "Production Control Manager",
        "salary_min": "68000",
        "salary_mid": "76000",
        "salary_max": "85000",
        "requirements": "生管策略制定，IATF稽核代表，跨部門協調決策，阿米巴利潤管理",
        "promotion": "核心分≥95/考核A+",
        "amoeba": ""
      },
      {
        "grade": "PC6B",
        "title_zh": "資深生管主管",
        "title_en": "Senior Production Control Manager",
        "salary_min": "75000",
        "salary_mid": "83000",
        "salary_max": "93000",
        "requirements": "全廠產銷策略，BSC績效管理，生管數位化推動，KPI系統建立",
        "promotion": "核心分≥108/考核A+",
        "amoeba": ""
      },
      {
        "grade": "PC7",
        "title_zh": "生管協理/副理",
        "title_en": "Production Control Director",
        "salary_min": "85000",
        "salary_mid": "98000",
        "salary_max": "115000",
        "requirements": "全公司生產策略/供應鏈整合/生管系統數位轉型主導/董事會報告",
        "promotion": "核心分≥120",
        "amoeba": ""
      }
    ]
  },
  {
    "job_name": "總務廠務專員",
    "raw_job_name": "總務廠務",
    "filename": "騏宏科技_總務廠務職能薪資結構表_v1_2.xlsx",
    "competencies": [
      {
        "category": "[A]  廠房設施維護管理  Facility Maintenance Management",
        "code": "A1",
        "dimension": "廠房水電維護",
        "ability": "廠房照明/插座/配電盤/漏電斷路器/接地日常維護及異常處理",
        "levels": {
          "0": "不了解",
          "1": "了解水電基礎概念，可輔助作業",
          "2": "獨立處理廠房一般水電維修，熟悉配電盤操作，可閱讀單線圖",
          "3": "規劃廠房電力改善，撰寫維護SOP，可指導他人"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L1B認知|L2A必備(獨立維修)|L3A主導(改善規劃)",
        "questions": "廠房漏電保護如何測試？停電搶修時要通知哪些部門？配電盤標示如何管理？"
      },
      {
        "category": "[A]  廠房設施維護管理  Facility Maintenance Management",
        "code": "A2",
        "dimension": "空調暖通維護",
        "ability": "冷氣/工業用空調/排風系統日常點檢、過濾網清洗、異常判定及外包維護協調",
        "levels": {
          "0": "不了解",
          "1": "了解空調點檢項目，可執行過濾網更換",
          "2": "獨立執行點檢+發現異常開立維修單+協調廠商維修，確保廠區溫濕度符合IATF規範(≤45°C/≤80%RH)",
          "3": "建立空調年度保養計畫，評估廠商績效，有節能改善案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B必備(過濾網清洗)|L2A必備(溫濕度符規+廠商協調)|L3A主導(年度計畫+節能案例)",
        "questions": "廠區溫濕度如何每日記錄與管控？超標時第一時間應採取哪些措施？SMT生產區對溫濕度有何特殊要求？"
      },
      {
        "category": "[A]  廠房設施維護管理  Facility Maintenance Management",
        "code": "A3",
        "dimension": "消防系統維護",
        "ability": "消防設備點檢（滅火器/灑水器/偵煙器/消防栓/緊急逃生燈），法定消防申報，疏散演練",
        "levels": {
          "0": "不了解",
          "1": "了解消防設備種類及使用方式",
          "2": "執行消防月點檢+配合消防申報+組織年度疏散演練+滅火器在效期管理",
          "3": "規劃消防設備改善，完成消防主管訓練取得證書，零消防缺失"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(月點檢+演練)|L3A必備(消防主管訓練)|L4A主導(零缺失+改善規劃)",
        "questions": "滅火器有效期限如何管理？消防設備年度申報流程為何？疏散演練如何規劃確保全員參與？"
      },
      {
        "category": "[A]  廠房設施維護管理  Facility Maintenance Management",
        "code": "A4",
        "dimension": "給排水系統管理",
        "ability": "廠區給排水管路日常維護，廁所/洗手台/飲水機維修協調，廢水排放合規",
        "levels": {
          "0": "不了解",
          "1": "了解廠區給排水系統",
          "2": "處理一般管路漏水+廁所設施維修+每月廢水水質記錄",
          "3": "管路老化改善規劃，廢水處理合規達標，維修費用管控"
        },
        "importance": 3,
        "weight": "6",
        "target_level": "L2A必備(漏水處理+廢水記錄)|L3B主導(廢水合規+改善規劃)",
        "questions": "廠區廢水排放標準為何？違規排放的法律風險？飲水機清洗頻率規範？"
      },
      {
        "category": "[A]  廠房設施維護管理  Facility Maintenance Management",
        "code": "A5",
        "dimension": "廠房建築修繕管理",
        "ability": "廠房牆體/地板/屋頂/門窗/倉庫貨架維護，改裝/新建工程監工，工程廠商管理",
        "levels": {
          "0": "不了解",
          "1": "了解廠房修繕基本流程",
          "2": "處理日常修繕需求，發包廠商，確認施工品質，維護固定資產帳務",
          "3": "年度廠房維護計畫，工程驗收管理，成本控制"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(發包+品質確認)|L3A必備(年度計畫+驗收)|L4A主導(成本控制)",
        "questions": "廠房修繕如何評估廠商並控制品質？施工期間如何確保生產不中斷？大型修繕如何取得採購授權？"
      },
      {
        "category": "[B]  環境安全衛生管理  Safety, Health & Environment",
        "code": "B1",
        "dimension": "職業安全衛生法規",
        "ability": "職安法/工廠法/勞動基準法中廠務相關條文，危害告知，作業場所安全規範",
        "levels": {
          "0": "不了解",
          "1": "了解職安法基本要求",
          "2": "熟悉職安法廠務相關條文，執行危害評估，確保法規合規",
          "3": "規劃年度職安計畫，完成職安訓練時數，代表公司接受勞動局稽查"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(危害評估+合規執行)|L3A必備(年度職安計畫)|L4A主導(稽查接待)",
        "questions": "職安法哪些事項廠務必須負責？未依規定設置安全防護的法律責任？勞動局稽查如何準備應對？"
      },
      {
        "category": "[B]  環境安全衛生管理  Safety, Health & Environment",
        "code": "B2",
        "dimension": "危害物質管理",
        "ability": "化學品/危險物料清單管理，SDS安全資料表建立，容器標示，儲存管控，廢棄物處理",
        "levels": {
          "0": "不了解",
          "1": "了解危害物質管理基本概念",
          "2": "維護化學品清單+SDS管理+容器標示合規+廢棄物委外處理合法",
          "3": "建立危化品管理SOP+廢棄物聯單追蹤零缺失+有改善儲存環境案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(SDS+標示+廢棄物)|L3A必備(SOP建立+廢棄物合規)|L4A主導(零缺失管理)",
        "questions": "廠內灌膠用A/B劑的SDS如何管理？危化品儲存需符合哪些規範？廢棄物聯單如何追蹤確保合法處理？"
      },
      {
        "category": "[B]  環境安全衛生管理  Safety, Health & Environment",
        "code": "B3",
        "dimension": "工安事故管理",
        "ability": "意外事故初步急救、通報流程、事故調查分析、矯正預防、勞動部申報",
        "levels": {
          "0": "不了解",
          "1": "了解急救與事故通報程序",
          "2": "執行事故初步急救+完成事故調查報告+矯正措施追蹤",
          "3": "建立工安事故預防機制，年度工安事故0件維持，勞動部申報零遲延"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2B必備(急救+事故調查)|L3A必備(預防機制)|L4A主導(年度0件維持)",
        "questions": "發生工安事故時，廠務的通報程序為何？幾小時內須向勞動局申報？事故調查報告需包含哪些要素？"
      },
      {
        "category": "[B]  環境安全衛生管理  Safety, Health & Environment",
        "code": "B4",
        "dimension": "安全巡檢管理",
        "ability": "廠區安全月巡檢（通道暢通/設備防護/電氣安全/高處作業/鍛壓危險源），巡檢記錄與異常追蹤",
        "levels": {
          "0": "不了解",
          "1": "了解安全巡檢項目",
          "2": "每月完成安全巡檢+記錄填寫+異常通報追蹤改善",
          "3": "建立安全巡檢SOP+稽核不合格率趨勢改善+有事先預防重大隱患案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(月巡檢+記錄)|L3A必備(不合格追蹤)|L3B主導(SOP建立+趨勢分析)",
        "questions": "廠區安全月巡檢的重點項目有哪些？SMT生產線電氣安全巡檢重點？通道違規占用如何處理？"
      },
      {
        "category": "[C]  5S環境整潔與環保管理  5S & Environmental Management",
        "code": "C1",
        "dimension": "公共區域5S管理",
        "ability": "廠區公共區域5S推行（走廊/停車場/廁所/茶水間/會議室/門禁口/外圍），稽核與改善追蹤",
        "levels": {
          "0": "不了解5S在公共區域的應用",
          "1": "了解5S在公共區域的應用方式",
          "2": "依5S計畫執行公共區域整理整頓清掃，月度稽核評分≥90，不合格項24H改善",
          "3": "建立公共區域5S標準化文件，稽核評分從90→95，有改善案例可量化說明"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L1B必備(執行5S)|L2A必備(稽核≥90)|L3A主導(標準化文件+≥95)",
        "questions": "廠區停車場與外圍環境5S如何納入管理？廁所清潔如何制定查核標準？公共區域5S稽核如何評分並追蹤？"
      },
      {
        "category": "[C]  5S環境整潔與環保管理  5S & Environmental Management",
        "code": "C2",
        "dimension": "廢棄物分類管理",
        "ability": "廢棄物分類（可回收/一般/有害）收集點設置，清除頻率管理，清運合規記錄",
        "levels": {
          "0": "不了解",
          "1": "了解廢棄物分類與收集",
          "2": "設置分類收集點+按頻率清運+廢棄物聯單完整+環保局稽查合規",
          "3": "推動廢棄物減量指標，建立廢棄物月報，有減少廢棄物量化案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(分類+清運合規)|L3A必備(月報+稽查合規)|L3B主導(減量指標)",
        "questions": "有害廢棄物（如廢機油/廢電池）如何合法清除？清運廠商如何確認其具備合法資格？環保局稽查時需準備哪些文件？"
      },
      {
        "category": "[C]  5S環境整潔與環保管理  5S & Environmental Management",
        "code": "C3",
        "dimension": "節能減碳管理",
        "ability": "電力/水/天然氣/LPG用量追蹤，能耗KPI設定，節能措施推行，碳排放基礎管理",
        "levels": {
          "0": "不了解",
          "1": "了解能源管理基本概念",
          "2": "每月統計廠區水電氣用量+建立能耗趨勢圖+執行照明/空調節能措施",
          "3": "建立年度節能計畫+能耗KPI達標+有節能改善量化案例（如電費降低≥5%）"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(每月統計+趨勢圖)|L3A必備(節能措施執行)|L3B主導(年度節能計畫+KPI)",
        "questions": "廠區哪些設備是主要電耗來源？壓縮空氣洩漏如何排查節能？節能措施ROI如何向管理層報告？"
      },
      {
        "category": "[D]  行政庶務作業  Administrative & General Affairs",
        "code": "D1",
        "dimension": "辦公設備管理",
        "ability": "影印機/印表機/投影機/電話/傳真設備採購/保養/故障處理，耗材庫存管控",
        "levels": {
          "0": "不了解",
          "1": "了解辦公設備基本操作與耗材補充",
          "2": "執行辦公設備保養排程+故障報修廠商協調+耗材安全庫存管控+月耗材成本統計",
          "3": "設備汰換評估，TCO分析，建立辦公設備管理SOP，耗材成本COST DOWN"
        },
        "importance": 3,
        "weight": "6",
        "target_level": "L1B必備(耗材補充)|L2A必備(保養+報修)|L3A主導(SOP+成本COST DOWN)",
        "questions": "影印機故障維修SLA如何設定？耗材安全庫存如何計算？辦公設備汰換需申請哪些流程？"
      },
      {
        "category": "[D]  行政庶務作業  Administrative & General Affairs",
        "code": "D2",
        "dimension": "公務車輛管理",
        "ability": "公務車輛保養排程管理，出車記錄，牌照稅/保險/保養費用管控，駕駛人資格確認",
        "levels": {
          "0": "不了解",
          "1": "了解車輛管理基本流程",
          "2": "建立車輛保養排程+出車記錄+保險到期提醒+年度使用成本統計",
          "3": "車輛汰換規劃，油耗異常追蹤，建立車輛管理SOP"
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L2A必備(保養排程+記錄)|L3A必備(成本統計+SOP建立)|L3B主導(汰換規劃)",
        "questions": "公務車保養週期如何設定？油耗異常如何發現並追查？駕駛人行車安全如何確保？"
      },
      {
        "category": "[D]  行政庶務作業  Administrative & General Affairs",
        "code": "D3",
        "dimension": "清潔外包管理",
        "ability": "廠區清潔承包商管理（合約/驗收/績效評核），清潔計畫制定，清潔品質監督",
        "levels": {
          "0": "不了解",
          "1": "了解清潔外包作業流程",
          "2": "執行清潔廠商日常監督+月度驗收評核+不合格扣款追蹤",
          "3": "清潔廠商比詢議價，合約條款擬訂，清潔績效KPI建立，有廠商改善案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(日常監督+月度驗收)|L3A必備(KPI建立+不合格追蹤)|L3B主導(比詢議價+合約)",
        "questions": "清潔廠商績效KPI應包含哪些指標？發現清潔不合格如何處理？年度清潔費用如何控制？"
      },
      {
        "category": "[D]  行政庶務作業  Administrative & General Affairs",
        "code": "D4",
        "dimension": "用餐與膳食管理",
        "ability": "員工餐廳/便當供應管理，供應商合約，食品衛生監督，用餐人數統計，費用管控",
        "levels": {
          "0": "不了解",
          "1": "了解膳食管理基本流程",
          "2": "統計每日用餐人數+確認食品衛生標準+配合供應商月結帳務",
          "3": "膳食廠商評核，費用COST DOWN，建立食品安全查核SOP"
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L2A必備(統計+食品衛生確認)|L3A必備(廠商評核+費用管控)|L3B主導(食安SOP+COST DOWN)",
        "questions": "員工餐廳食品衛生如何監督？餐費補助如何與人資系統連動？膳食廠商如何評核並換廠？"
      },
      {
        "category": "[D]  行政庶務作業  Administrative & General Affairs",
        "code": "D5",
        "dimension": "文具與消耗品管理",
        "ability": "辦公室文具/清潔用品/勞保防護用品採購管理，申請審核，庫存管控，費用月報",
        "levels": {
          "0": "不了解",
          "1": "了解文具申請與庫存流程",
          "2": "執行文具庫存管控+月度採購申請+費用月報",
          "3": "推動文具電子化申請，費用COST DOWN，建立標準品項清單"
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L2A必備(庫存管控+月採購)|L3A必備(費用月報)|L3B主導(電子化+COST DOWN)",
        "questions": "文具庫存如何設定安全庫存量？勞保用品（安全帽/安全帶/護目鏡）如何管理？如何防止浪費浮報？"
      },
      {
        "category": "[E]  固定資產管理  Fixed Asset Management",
        "code": "E1",
        "dimension": "資產盤點管理",
        "ability": "年度固定資產盤點（設備/家具/電腦/工具），資產卡更新，帳物一致確認，報廢申請",
        "levels": {
          "0": "不了解",
          "1": "了解固定資產盤點流程",
          "2": "執行年度資產盤點+資產卡更新+盤盈盤虧調查+配合財務報廢申請",
          "3": "建立資產盤點SOP+帳物一致率≥99%+有呆滯資產處理案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(年度盤點+資產卡更新)|L3A必備(盤盈虧調查)|L3B主導(帳物一致率≥99%)",
        "questions": "固定資產盤點如何確保帳物一致？發現資產遺失或損毀時如何處理？資產報廢申請需走哪些流程？"
      },
      {
        "category": "[E]  固定資產管理  Fixed Asset Management",
        "code": "E2",
        "dimension": "資產標籤追蹤",
        "ability": "固定資產條碼/RFID標籤管理，設備編號規則制定，異動追蹤（移倉/借出/外修）",
        "levels": {
          "0": "不了解",
          "1": "了解資產標籤管理",
          "2": "執行資產條碼貼附+異動單開立+系統更新",
          "3": "建立資產標籤管理規則，RFID導入評估，設備位置追蹤準確率100%"
        },
        "importance": 3,
        "weight": "6",
        "target_level": "L2A必備(條碼+異動單)|L3A必備(系統更新+追蹤準確)|L3B主導(RFID評估+規則建立)",
        "questions": "設備從A廠移至B廠需辦理哪些手續？借出設備如何追蹤歸還？RFID資產追蹤系統如何評估導入效益？"
      },
      {
        "category": "[F]  廠務外包廠商管理  Facility Vendor Management",
        "code": "F1",
        "dimension": "廠務廠商評核",
        "ability": "廠務外包廠商（保全/清潔/保養/電梯/空調）年度績效評核，合格廠商清單維護",
        "levels": {
          "0": "不了解",
          "1": "了解廠商評核基本流程",
          "2": "完成廠務廠商年度評核+評核記錄建立+不合格廠商改善追蹤",
          "3": "建立廠務廠商評核標準SOP+評核結果連動合約更新/廠商替換+有廠商改善降本案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(年度評核+記錄)|L3A必備(改善追蹤)|L3B主導(SOP建立+合約連動)",
        "questions": "廠務廠商年度評核哪些指標最重要？評核不合格廠商如何設定改善期限？評核結果如何影響合約更新決策？"
      },
      {
        "category": "[F]  廠務外包廠商管理  Facility Vendor Management",
        "code": "F2",
        "dimension": "工程發包管理",
        "ability": "廠房工程發包（詢比議價/合約簽訂/施工監督/驗收/付款）全流程，安全施工管理",
        "levels": {
          "0": "不了解",
          "1": "了解工程發包基本流程",
          "2": "執行詢比議價+合約簽訂+施工監督+驗收確認",
          "3": "建立工程發包SOP+施工安全管控+有成本節省量化案例（COST DOWN≥5%）"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(詢比+合約+監督)|L3A必備(驗收+SOP)|L3B主導(成本節省+施工安全管控)",
        "questions": "工程發包如何確保至少3家比詢？施工期間如何管控承包商人員安全（如高空作業/熱工）？驗收時需確認哪些項目？"
      },
      {
        "category": "[G]  法規合規管理  Regulatory Compliance",
        "code": "G1",
        "dimension": "環保法規合規",
        "ability": "廢水/廢氣/廢棄物/噪音等環保法規合規，環保申報（公廠申報），稽查應對",
        "levels": {
          "0": "不了解",
          "1": "了解環保法規基本要求",
          "2": "執行環保自主管理，完成年度環保申報，保存合規記錄",
          "3": "建立環保合規管理SOP，零環保違規，接受環保局稽查零缺失"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(申報+自主管理)|L3A必備(SOP建立+零違規)|L4A主導(稽查接待+零缺失)",
        "questions": "廠區噪音超標如何處理？廢氣排放申報頻率與申報方式？環保局突擊稽查時第一步應做什麼？"
      },
      {
        "category": "[G]  法規合規管理  Regulatory Compliance",
        "code": "G2",
        "dimension": "消防安全合規",
        "ability": "消防設備申報（消防設備定期申報書），消防安全管理人訓練，改善計畫執行",
        "levels": {
          "0": "不了解",
          "1": "了解消防申報基本流程",
          "2": "完成消防設備定期申報+消防安全管理人取得資格+改善計畫執行",
          "3": "建立消防合規追蹤機制，應對消防隊稽查，零消防違規"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(申報+管理人資格)|L3A必備(追蹤機制+零違規)|L4A主導(稽查接待)",
        "questions": "消防設備定期申報週期為何？消防安全管理人任職條件？消防隊稽查後的改善期限如何管理？"
      },
      {
        "category": "[G]  法規合規管理  Regulatory Compliance",
        "code": "G3",
        "dimension": "建管及工廠登記",
        "ability": "工廠登記証維護，建築物公安申報，電梯定期檢查，壓力容器檢查，用電設備申請",
        "levels": {
          "0": "不了解",
          "1": "了解廠務相關法定檢查項目",
          "2": "管理各項法定檢查時程+確保到期前完成複驗+記錄保存完整",
          "3": "建立法定檢查期程管理系統，零逾期，應對主管機關稽查"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(期程管理+記錄)|L3A必備(複驗確保+零逾期)|L4A主導(稽查接待+主動管理)",
        "questions": "工廠登記証需每幾年更新？電梯定期檢查週期與申請流程？建築物公安申報哪些項目？"
      },
      {
        "category": "[H]  緊急應變管理  Emergency Response Management",
        "code": "H1",
        "dimension": "緊急應變計畫執行",
        "ability": "廠務在緊急應變計畫(QPAD15)中的角色執行：火災/斷電/地震/水災/設備重大故障應變",
        "levels": {
          "0": "不了解應變計畫",
          "1": "了解QPAD15應變計畫廠務章節",
          "2": "執行廠務應變角色（疏散引導/斷電/備用電源啟動），應變演練參與率100%",
          "3": "主導廠務應變SOP更新，演練後檢討改善，應變反應時間≤5分鐘"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(應變角色執行+演練100%)|L3A必備(SOP更新+演練檢討)|L4A主導(反應時間≤5分鐘)",
        "questions": "廠房發生火災時廠務第一時間應做哪三件事？備用發電機如何啟動？斷電後SMT生產線如何應變保護設備？"
      },
      {
        "category": "[H]  緊急應變管理  Emergency Response Management",
        "code": "H2",
        "dimension": "備用系統管理",
        "ability": "UPS/備用發電機定期保養測試，緊急照明測試，備品備料管控（備用零件庫存）",
        "levels": {
          "0": "不了解",
          "1": "了解備用系統類別",
          "2": "執行UPS/發電機月點檢+年度負載測試+緊急照明季度測試",
          "3": "建立備用系統保養計畫，備品庫存管控，有大停電應變成功案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(月點檢+測試執行)|L3A必備(年度負載測試)|L3B主導(保養計畫+備品管控)",
        "questions": "發電機月點檢項目有哪些？UPS電池更換週期如何評估？緊急照明測試標準為何？"
      },
      {
        "category": "[I]  資訊系統應用  ERP & DingTalk Application",
        "code": "I1",
        "dimension": "鼎新ERP廠務模組",
        "ability": "固定資產模組操作（資產新增/異動/折舊查詢），採購申請開立，費用核銷作業",
        "levels": {
          "0": "未使用過ERP",
          "1": "了解ERP廠務相關功能",
          "2": "獨立操作固定資產模組+開立採購申請+費用核銷ERP流程",
          "3": "ERP資產模組深度應用+異常處理+指導新人操作"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(資產模組+採購申請)|L2B熟練(費用核銷)|L3A主導(深度應用)",
        "questions": "ERP固定資產新增需填哪些必要欄位？廠務採購申請如何在ERP開立？費用核銷憑證如何上傳？"
      },
      {
        "category": "[I]  資訊系統應用  ERP & DingTalk Application",
        "code": "I2",
        "dimension": "釘釘廠務應用",
        "ability": "釘釘廠務工作流應用（維修申請/工單追蹤/安全巡檢表單/廠商評核），釘釘群組管理",
        "levels": {
          "0": "未使用",
          "1": "了解釘釘基本功能",
          "2": "熟練使用釘釘廠務工作流（維修申請/追蹤/關閉），安全巡檢電子化記錄",
          "3": "建立釘釘廠務標準流程模板，工單零逾期，指導他人操作"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(維修工單+安全巡檢)|L2B熟練(電子化記錄)|L3A主導(流程模板建立)",
        "questions": "釘釘維修申請如何設定提醒確保廠商及時回應？安全巡檢如何電子化並自動彙整月報？廠務工作流如何追蹤工單完成率？"
      },
      {
        "category": "[J]  IATF/AS9100 品質系統廠務配合  Quality System Support",
        "code": "J1",
        "dimension": "廠務相關IATF要求",
        "ability": "IATF16949/AS9100D中廠務相關要求（工作環境/基礎設施/設備維護/5S），稽查配合",
        "levels": {
          "0": "不了解IATF廠務相關要求",
          "1": "了解IATF廠務基本要求（7.1.4工作環境/7.1.3基礎設施）",
          "2": "確保廠務文件符合IATF要求，配合內外部稽查，稽查無Major不符合",
          "3": "主導廠務IATF稽查準備，廠務文件體系建立，零不符合記錄"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(文件符規+配合稽查)|L3A必備(稽查準備主導)|L4A主導(文件體系+零不符合)",
        "questions": "IATF16949條款7.1.4對工作環境有哪些具體要求？廠務相關程序文件（設備保養/5S/環境管理）如何符合IATF規範？稽查員最常查哪些廠務文件？"
      },
      {
        "category": "[J]  IATF/AS9100 品質系統廠務配合  Quality System Support",
        "code": "J2",
        "dimension": "廠務設備保養程序",
        "ability": "符合IATF要求的設備保養程序管理（QPMD03），設備台帳，保養計畫，保養記錄完整性",
        "levels": {
          "0": "不了解QPMD03",
          "1": "了解QPMD03設備保養程序要求",
          "2": "依QPMD03執行廠務設備保養+記錄完整+異常開立維修單",
          "3": "建立廠務設備保養計畫年度排程，MTBF/MTTR追蹤，記錄零缺失"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(QPMD03執行+記錄)|L3A必備(MTBF/MTTR追蹤)|L3B主導(年度排程+零缺失)",
        "questions": "QPMD03設備保養程序廠務設備如何適用？設備台帳必填哪些欄位？MTBF如何計算並用於改善保養頻率？"
      },
      {
        "category": "[K]  KPI績效管理  KPI Performance Management",
        "code": "K1",
        "dimension": "廠務KPI管理",
        "ability": "廠務核心KPI管理：設備妥善率≥98%/安全事故0件/環保違規0件/消防缺失0件/能耗月月同比降低/法定檢查逾期0件",
        "levels": {
          "0": "不了解廠務KPI",
          "1": "了解廠務KPI定義和計算",
          "2": "每月正確統計廠務KPI，警戒值觸發立即通報",
          "3": "建立廠務KPI看板，趨勢分析，有KPI從警戒值改善至目標值案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(月統計+警戒通報)|L3A必備(KPI看板+趨勢)|L3B主導(改善案例+看板優化)",
        "questions": "設備妥善率如何計算？工安0件KPI如何維持（預防性巡檢）？能耗KPI如何設定合理目標值？"
      },
      {
        "category": "[K]  KPI績效管理  KPI Performance Management",
        "code": "K2",
        "dimension": "廠務成本管控",
        "ability": "廠務年度預算管控，費用月報，差異分析，COST DOWN計畫",
        "levels": {
          "0": "不了解廠務費用管控",
          "1": "了解廠務費用分類",
          "2": "每月填寫費用月報+差異分析+提出COST DOWN方案",
          "3": "年度預算編制，費用達成率≥95%，有COST DOWN年省≥5%案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(費用月報+差異分析)|L3A必備(COST DOWN方案)|L3B主導(年度預算+≥5%案例)",
        "questions": "廠務費用如何分類（水電/維修/清潔/保全）？費用超預算時如何分析原因？COST DOWN方案如何量化效益向管理層報告？"
      },
      {
        "category": "[L]  人員培育管理  Personnel Development",
        "code": "L1",
        "dimension": "OJT廠務帶領",
        "ability": "廠務新人OJT帶領（設施認識/法規認知/緊急應變），技能矩陣建立與更新",
        "levels": {
          "0": "無OJT帶領概念",
          "1": "了解廠務OJT內容架構",
          "2": "執行廠務新人OJT帶領，技能矩陣更新",
          "3": "建立廠務OJT標準計畫，帶訓成效追蹤，有多名學員培育案例"
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L3A必備(OJT執行+矩陣更新)|L3B主導(計畫建立+成效追蹤)",
        "questions": "廠務新人OJT前兩週應涵蓋哪些核心內容（廠區認識/緊急應變/安全規範）？如何確認新人已達獨立作業標準？"
      },
      {
        "category": "[M]  AI工具應用  AI Tools Application",
        "code": "M1",
        "dimension": "Claude AI廠務應用",
        "ability": "Claude AI工具應用（廠務報告撰寫/法規查詢/保養SOP生成/KPI月報分析輔助）",
        "levels": {
          "0": "未使用AI工具",
          "1": "基礎使用AI生成廠務報告草稿",
          "2": "熟練應用AI生成廠務SOP/KPI月報/法規合規摘要",
          "3": "建立廠務AI應用規範，指導他人，有效率提升量化案例"
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L2B建議(基礎AI使用)|L3A必備(SOP/月報輔助)|L3B主導(部門規範建立)",
        "questions": "如何用Claude AI快速生成廠務安全巡檢SOP草稿？如何用AI彙整廠務法規合規清單？"
      },
      {
        "category": "[N]  廠內宿舍管理  In-Factory Dormitory Management",
        "code": "N1",
        "dimension": "宿舍入退住管理",
        "ability": "廠內宿舍入退住流程管理，住宿申請審核，押金帳務收付，宿舍分配與住房率統計管理，住宿合約簽署",
        "levels": {
          "0": "不了解宿舍管理流程",
          "1": "了解宿舍入退住基本流程與申請文件",
          "2": "執行入退住作業+押金帳務管控(ERP押金台帳)+住宿合約簽署+住房率月統計",
          "3": "建立入退住SOP+帳務零誤差+住房率最佳化+異常退宿快速處理機制"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(入退住+押金帳務)|L3A必備(SOP建立+帳務零誤差)|L3B主導(住房率最佳化)",
        "questions": "宿舍入住申請需哪些單位審核？押金如何管控不被挪用？員工離職時退房押金如何退還？"
      },
      {
        "category": "[N]  廠內宿舍管理  In-Factory Dormitory Management",
        "code": "N2",
        "dimension": "宿舍設施維護管理",
        "ability": "廠內宿舍設施設備定期點檢（冷氣/熱水器/照明/門鎖/廚房設備），釘釘報修流程執行，公共區域廚房衛生監管，耗材補充管理",
        "levels": {
          "0": "不了解宿舍設施管理",
          "1": "了解宿舍設施點檢項目與報修流程",
          "2": "執行宿舍設施月點檢+釘釘報修申請+廚房衛生週查+設施異常維修廠商協調",
          "3": "建立宿舍設施保養計畫+設備台帳+廠商評核KPI+有改善降本量化案例"
        },
        "importance": 3,
        "weight": "6",
        "target_level": "L2A必備(月點檢+維修申請)|L3A必備(保養計畫+設備台帳)|L3B主導(改善降本)",
        "questions": "宿舍冷氣保養週期如何設定？熱水器故障緊急應變如何處理？公共區域廚房衛生如何監管？"
      },
      {
        "category": "[N]  廠內宿舍管理  In-Factory Dormitory Management",
        "code": "N3",
        "dimension": "宿舍安全與法規",
        "ability": "廠內宿舍消防安全（疏散計畫/逃生演練），宿舍居住人員緊急聯絡，外客管制",
        "levels": {
          "0": "不了解",
          "1": "了解宿舍安全管理要求",
          "2": "維護宿舍住宿人員名單+執行消防演練+外客登記管制+緊急聯絡機制",
          "3": "建立宿舍安全管理辦法+消防合規+零安全事故維持"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(名單+演練+外客管制)|L3A必備(安全管理辦法)|L3B主導(消防合規+零事故)",
        "questions": "廠內宿舍消防疏散計畫需包含哪些要素？外客進入宿舍區如何管制？宿舍發生住客急病時廠務應如何應變？"
      },
      {
        "category": "[N]  廠內宿舍管理  In-Factory Dormitory Management",
        "code": "N4",
        "dimension": "宿舍費用管理與住宿紀律",
        "ability": "宿舍費用（水電/房租）管理與分攤，住宿補貼申報核銷，住宿規範執行，違規住客紀律處理，住宿糾紛調解",
        "levels": {
          "0": "不了解宿舍費用管理",
          "1": "了解宿舍費用分類與住宿規範內容",
          "2": "執行每月水電費統計分攤+住宿補貼核銷+違規事件記錄並通報人資",
          "3": "建立宿舍費用管理SOP+費用分攤零爭議+住宿紀律制度化+有糾紛調解成功案例"
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L2A必備(費用統計+補貼核銷)|L3A必備(SOP建立+費用零爭議)|L3B主導(紀律制度化+調解)",
        "questions": "宿舍水電費如何公平分攤給住宿員工？住宿違規（噪音/帶外客）如何依程序處理？宿舍住宿補貼如何與薪資系統連動核銷？"
      },
      {
        "category": "[O]  廠外宿舍管理  Off-Site Dormitory Management",
        "code": "O1",
        "dimension": "廠外租賃宿舍管理",
        "ability": "廠外租賃宿舍合約管理，房東聯絡，租金支付，到期續租/退租，維修責任釐清",
        "levels": {
          "0": "不了解",
          "1": "了解廠外宿舍租賃基本流程",
          "2": "管理廠外宿舍合約到期提醒+租金帳務+維修責任認定+到期前60天啟動續租評估",
          "3": "建立廠外宿舍合約管理台帳+租金成本最佳化+談判技巧降低租金"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(合約到期提醒+租金帳務)|L3A必備(台帳建立+維修責任認定)|L3B主導(租金談判+成本最佳化)",
        "questions": "廠外租賃宿舍合約到期前多久應啟動續租評估？維修責任如何在合約中明確劃分？租金異常上漲時如何談判或尋找替代房源？"
      },
      {
        "category": "[O]  廠外宿舍管理  Off-Site Dormitory Management",
        "code": "O2",
        "dimension": "廠外宿舍住宿交通管理",
        "ability": "廠外宿舍至工廠交通安排（通勤車/費用補貼），住宿員工名單管理，交通費用申報核銷",
        "levels": {
          "0": "不了解",
          "1": "了解廠外宿舍交通安排",
          "2": "維護住宿員工名單+協調通勤車路線+交通費用月結核銷+異動即時更新",
          "3": "最佳化通勤路線降低費用，多家廠商比詢，交通費用月報"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(名單維護+交通費核銷)|L3A必備(通勤路線最佳化+月報)|L3B主導(費用降低+廠商比詢)",
        "questions": "廠外宿舍住宿員工名單如何即時維護並與人資連動？通勤車路線如何規劃最佳化？交通補貼費用如何與薪資核銷系統整合？"
      },
      {
        "category": "[O]  廠外宿舍管理  Off-Site Dormitory Management",
        "code": "O3",
        "dimension": "廠外宿舍安全衛生監督",
        "ability": "廠外宿舍定期安全巡查（消防/結構/電氣/衛生），與房東溝通改善，緊急狀況應變",
        "levels": {
          "0": "不了解",
          "1": "了解廠外宿舍安全監督責任",
          "2": "執行廠外宿舍季度安全巡查+發現問題通知房東改善+緊急狀況通報流程",
          "3": "建立廠外宿舍安全巡查標準+改善追蹤機制+零安全事故"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(季度巡查+問題通報房東)|L3A必備(巡查標準+改善追蹤)|L3B主導(零安全事故維持)",
        "questions": "廠外宿舍季度安全巡查重點項目有哪些？發現電氣安全隱患如何與房東協商改善期限？廠外宿舍住客急病或緊急事故如何應變？"
      },
      {
        "category": "[P]  其他廠房與場外空間管理  Multi-Site & Outdoor Facility Management",
        "code": "P1",
        "dimension": "多廠房設施統籌管理",
        "ability": "多棟廠房（A/B/C棟或不同地址）設施維護統籌，優先級管理，跨廠房資源調度",
        "levels": {
          "0": "只了解單一廠房",
          "1": "了解多廠房管理概念",
          "2": "建立各廠房設施台帳+統籌保養排程+跨廠房廠商調度+費用分攤計算",
          "3": "多廠房設施管理SOP，費用分攤制度建立，有資源整合降本案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L3A必備(各廠台帳+排程統籌)|L3B必備(費用分攤+廠商跨廠調度)|L4A主導(SOP建立+資源整合降本)",
        "questions": "多棟廠房保養排程如何統籌不漏項？不同廠房同時發生緊急報修如何優先排序？廠房間費用如何合理分攤至各部門？"
      },
      {
        "category": "[P]  其他廠房與場外空間管理  Multi-Site & Outdoor Facility Management",
        "code": "P2",
        "dimension": "停車場管理",
        "ability": "廠區及場外停車場管理（車位規劃/地面標線/路牌/出入管制/監控），停車費管理（如適用），定期維護",
        "levels": {
          "0": "不了解",
          "1": "了解停車場基本管理",
          "2": "執行停車場5S+車位標示更新+出入管制確認+監控設備正常+定期地面維護",
          "3": "停車場優化規劃（增加車位/動線改善），電動車充電樁導入評估，零交通事故"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L2A必備(5S+車位標示+監控正常)|L3A必備(優化規劃+EV充電樁評估)|L3B主導(零交通事故+規劃改善)",
        "questions": "廠區停車場車位規劃需考慮哪些因素（殘障/工程車/訪客/員工分區）？導入電動車充電樁需評估哪些電力基礎設施？違規停車如何管理確保通道暢通？"
      },
      {
        "category": "[P]  其他廠房與場外空間管理  Multi-Site & Outdoor Facility Management",
        "code": "P3",
        "dimension": "籃球場及運動設施管理",
        "ability": "員工籃球場/運動設施維護（地面/籃框/照明/周邊排水），使用規範，預約管理，定期整修",
        "levels": {
          "0": "不了解",
          "1": "了解運動設施基本維護",
          "2": "執行運動場月點檢+設施維修+使用規範張貼+照明定時控制",
          "3": "建立運動設施保養計畫+年度整修預算規劃+使用統計提報管理層，推動員工福利活動"
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L2A必備(月點檢+使用規範張貼)|L3A必備(保養計畫+整修預算)|L3B主導(使用統計+員工福利活動推動)",
        "questions": "運動設施安全維護重點有哪些（地面防滑/照明充足/設備固定）？如何推動員工積極使用運動設施？設施損壞需較長修繕時間時如何公告管理？"
      },
      {
        "category": "[P]  其他廠房與場外空間管理  Multi-Site & Outdoor Facility Management",
        "code": "P4",
        "dimension": "休閒農場管理",
        "ability": "公司休閒農場設施維護（農具/灌溉/圍牆/步道/停車/農作物管理），環境整潔，訪客接待安全",
        "levels": {
          "0": "不了解",
          "1": "了解農場基本管理概念",
          "2": "執行農場月度整潔維護+灌溉設備點檢+農具安全保管+颱風前後防災應變",
          "3": "農場年度維護計畫+外部訪客接待安全SOP+農作物管理制度化+有效活動規劃提升員工凝聚力"
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L2A必備(月整潔+農具安全保管+颱風應變)|L3A必備(年度維護計畫+訪客安全SOP)|L3B主導(活動制度化+農作管理)",
        "questions": "農場颱風前應採取哪些防災準備措施？外部訪客參觀農場如何確保人身安全與保險責任？農具使用安全規範如何向員工宣導？"
      },
      {
        "category": "[P]  其他廠房與場外空間管理  Multi-Site & Outdoor Facility Management",
        "code": "P5",
        "dimension": "場外空地與周邊環境管理",
        "ability": "公司場外空地（裸地/草坪/綠化區）管理，雜草清除，排水維護，非法占用防範，週邊道路清潔",
        "levels": {
          "0": "不了解",
          "1": "了解場外空地基本管理",
          "2": "定期除草+排水溝疏通+標示設置+違規占用處理",
          "3": "場外空地綠化規劃，長期維護合約，費用最小化，有改善工程案例"
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L2A必備(定期除草+排水疏通+違規占用處理)|L3A必備(長期維護合約+費用管控)|L3B主導(綠化規劃+費用最小化)",
        "questions": "場外空地非法占用如何依合法程序處理？除草外包廠商如何設定週期KPI並驗收？如何善用場外空地提升公司資產效益（停車/綠化/活動）？"
      },
      {
        "category": "[Q]  儲能設備管理  Energy Storage System Management",
        "code": "Q1",
        "dimension": "儲能系統基礎知識",
        "ability": "企業儲能系統類型（磷酸鐵鋰電池/鉛酸電池/超級電容），系統架構（PCS/BMS/EMS），應用場景（削峰填谷/緊急備電/太陽能儲能）",
        "levels": {
          "0": "完全不了解儲能設備",
          "1": "了解儲能系統類型與基本原理（磷酸鐵鋰vs鉛酸/PCS-BMS-EMS架構/削峰填谷概念）",
          "2": "熟悉公司儲能系統規格（kWh容量/充放電功率/SOC管理），能閱讀EMS監控介面，識別告警代碼",
          "3": "建立儲能系統操作SOP+日常監控標準+有協助廠商完成系統調試或年度維護記錄"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L2A必備(儲能類型認識+PCS/BMS/EMS架構)|L2B必備(EMS介面操作+告警代碼識別)|L3A主導(SOP建立+系統調試協助)",
        "questions": "磷酸鐵鋰電池與鉛酸電池在廠務應用上的主要差異？PCS/BMS/EMS各自功能如何協作？儲能系統在停電時如何自動切換供電保護生產線？"
      },
      {
        "category": "[Q]  儲能設備管理  Energy Storage System Management",
        "code": "Q2",
        "dimension": "儲能設備日常監控",
        "ability": "儲能系統日常監控（SOC/SOH/溫度/電壓/充放電功率），告警響應，異常通報廠商",
        "levels": {
          "0": "不了解監控作業",
          "1": "了解監控介面基本操作",
          "2": "每日確認SOC/SOH/溫度在正常範圍（SOC 20-90%/電芯溫度≤45°C/電壓差≤20mV），識別告警等級，異常即時通報廠商",
          "3": "建立日常監控SOP+告警響應時效管理+月度儲能效益報告（電費節省/削峰成效）"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(日常監控+告警識別)|L2B必備(異常通報+數值判斷)|L3A主導(SOP建立+效益月報)",
        "questions": "SOC低於20%時應採取什麼措施？電芯溫度異常升高（>45°C）的可能原因及緊急處理步驟？BMS告警分幾個等級，各等級的響應時限為何？"
      },
      {
        "category": "[Q]  儲能設備管理  Energy Storage System Management",
        "code": "Q3",
        "dimension": "儲能設備安全管理",
        "ability": "儲能設備安全管理（熱失控風險/消防特殊需求/電氣安全/氣體偵測），緊急應變程序",
        "levels": {
          "0": "不了解儲能安全",
          "1": "了解熱失控概念及危害",
          "2": "執行儲能區域氣體偵測器定期測試+消防設備確認（專用滅火劑）+緊急斷電程序熟悉+嚴禁在儲能室動火作業",
          "3": "建立儲能緊急應變SOP+年度演練+消防隊協調（告知設備特性避免誤用水滅火）+有熱失控應變成功案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2B必備(氣體偵測+緊急斷電)|L3A必備(緊急應變SOP+演練)|L3B主導(消防隊協調+年度演練)",
        "questions": "儲能電池熱失控的主要誘因有哪些？為何不能用水直接撲滅鋰電池火災？儲能室發生告警時，廠務人員進入前需確認哪些安全事項？"
      },
      {
        "category": "[Q]  儲能設備管理  Energy Storage System Management",
        "code": "Q4",
        "dimension": "儲能設備保養維護",
        "ability": "儲能系統定期保養（電芯容量測試/連接件緊固/冷卻系統清潔/BMS韌體更新），年度廠商大保養協調",
        "levels": {
          "0": "不了解儲能保養",
          "1": "了解儲能保養項目",
          "2": "執行廠務層級保養（外觀點檢/散熱風扇/連接線/接地確認）+協調廠商年度保養+保養記錄完整",
          "3": "建立儲能保養計畫年度排程+容量衰退趨勢分析+SOH<80%時評估更換時機"
        },
        "importance": 4,
        "weight": "10",
        "target_level": "L2A必備(廠務層級保養+廠商協調)|L3A必備(年度排程+保養記錄)|L3B主導(容量衰退分析+更換評估)",
        "questions": "儲能系統廠務可自行執行的保養項目有哪些，哪些必須由原廠或認證廠商執行？SOH（電池健康狀態）如何解讀？電芯容量衰退超過多少應考慮汰換？"
      },
      {
        "category": "[Q]  儲能設備管理  Energy Storage System Management",
        "code": "Q5",
        "dimension": "儲能效益分析與電費管理",
        "ability": "儲能削峰填谷策略設定，台電時間電價分析，電費帳單核對，儲能ROI計算，補貼申請（如台灣能源局儲能補助）",
        "levels": {
          "0": "不了解電費管理",
          "1": "了解時間電價概念（尖峰/離峰/半尖峰），了解削峰填谷原理",
          "2": "每月核對台電帳單+計算儲能節省電費+協調廠商調整充放電策略+提交效益月報",
          "3": "優化充放電策略（EMS設定調整）+完成補貼申請文件+有量化ROI報告（如3年回收期驗證）"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2B必備(帳單核對+效益月報)|L3A必備(策略調整+補貼申請)|L3B主導(ROI計算+策略優化)",
        "questions": "台灣時間電價尖峰時段是幾點到幾點？削峰填谷如何設定充電在離峰、放電在尖峰？能源局儲能補助申請需要準備哪些文件？如何計算儲能系統的回收年限？"
      },
      {
        "category": "[R]  冰水空調系統管理  Chilled Water HVAC System Management",
        "code": "R1",
        "dimension": "冰水空調系統基礎",
        "ability": "冰水主機系統架構（壓縮機/冷凝器/蒸發器/膨脹閥），冷卻水塔，冰水泵/冷卻水泵，空調箱(AHU)/風機盤管(FCU)，冷媒類型（R410a/R32/R134a）",
        "levels": {
          "0": "完全不了解冰水空調",
          "1": "了解冰水空調系統架構（壓縮機/冷凝器/蒸發器/冷卻水塔/AHU/FCU），能識別各設備位置",
          "2": "熟悉公司冰水主機規格（冷噸/COP/冷水出水溫度），能閱讀BAS/BMS控制介面，識別常見告警代碼（高壓保護/低壓保護/水流量不足）",
          "3": "建立冰水系統設備台帳+操作SOP+有協助廠商完成年度保養或系統調試記錄"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2B必備(主機規格+BAS介面+告警識別)|L3A必備(設備台帳+SOP)|L3B主導(系統調試協助+年度保養)",
        "questions": "冰水主機COP（性能係數）是什麼，越高越好還是越低越好？冷卻水塔在冰水系統中的作用？AHU和FCU的差異？R410a和R32冷媒的主要差異（環保性/壓力/毒性）？"
      },
      {
        "category": "[R]  冰水空調系統管理  Chilled Water HVAC System Management",
        "code": "R2",
        "dimension": "冰水主機日常監控",
        "ability": "冰水主機日常監控（出回水溫度/冷媒壓力/電流/COP），冷卻水塔水位/水質，水泵運轉確認，BAS系統操作",
        "levels": {
          "0": "不了解監控作業",
          "1": "了解監控項目基本概念",
          "2": "每日確認冰水系統關鍵參數（出水溫度7°C±1°C/冷卻水進出水溫差5°C/高低壓力正常範圍/電流不超標），識別異常告警，即時通報廠商",
          "3": "建立冰水系統日常監控SOP+告警響應時效管理+月度空調效益報告（COP趨勢/電費）"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(日常監控+告警識別)|L2B必備(異常通報+參數判斷)|L3A主導(SOP建立+月度效益報告)",
        "questions": "冰水主機出水溫度偏高（>8°C）可能的原因有哪些？壓縮機電流超過額定值時廠務如何處理？冷卻水塔水質管理不當會導致什麼問題（如退伍軍人症）？"
      },
      {
        "category": "[R]  冰水空調系統管理  Chilled Water HVAC System Management",
        "code": "R3",
        "dimension": "冰水系統保養維護",
        "ability": "冰水主機定期保養（月/季/年），冷卻水塔清洗，冷媒量確認，水質處理（冷凝器/蒸發器結垢預防），廠商管理",
        "levels": {
          "0": "不了解保養作業",
          "1": "了解冰水系統保養項目",
          "2": "執行廠務層級日常保養（過濾網/水位/水質pH監測），協調廠商月保養，保養記錄完整，追蹤廠商到場時效",
          "3": "建立冰水保養年度計畫排程+冷媒洩漏預防機制+水質管理SOP（加藥/水質報告）+有能效提升改善案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(廠務日常保養+廠商協調)|L3A必備(年度排程+保養記錄)|L3B主導(水質SOP+能效改善)",
        "questions": "冷卻水塔清洗頻率建議為何？水質處理加藥的目的（防腐蝕/防結垢/防菌）？冷媒不足如何從主機運行參數判斷（如蒸發壓力偏低）？冰水系統保養哪些工作廠務可自行做，哪些必須有冷凍空調證照執照才能操作？"
      },
      {
        "category": "[R]  冰水空調系統管理  Chilled Water HVAC System Management",
        "code": "R4",
        "dimension": "冰水空調節能管理",
        "ability": "冰水空調節能策略（台數控制/出水溫度重設/冷卻水塔最佳化），變頻主機操作，空調效益追蹤（COP/EER），節能KPI",
        "levels": {
          "0": "不了解空調節能",
          "1": "了解空調節能基本概念",
          "2": "依季節氣溫調整冰水出水溫度設定+執行台數控制減少空載運轉+每月統計空調電費趨勢",
          "3": "優化空調系統節能策略（與廠商協作調整變頻設定）+空調節能年省電費量化報告+導入BAS自動化節能控制評估"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2B必備(出水溫度調整+台數控制)|L3A必備(電費趨勢統計+月報)|L3B主導(節能策略優化+BAS評估)",
        "questions": "夏季與冬季冰水出水溫度應如何調整以節能？台數控制（多台主機輪替）如何決定開幾台最節能？BAS（樓宇自動化系統）如何輔助空調節能管理？空調電費佔廠務總電費的比例大約多少？"
      },
      {
        "category": "[R]  冰水空調系統管理  Chilled Water HVAC System Management",
        "code": "R5",
        "dimension": "冰水系統緊急應變",
        "ability": "冰水主機緊急停機應變（高壓保護停機/壓縮機故障），臨時冷源調度，廠房溫度超標緊急處理，SMT/精密設備保護",
        "levels": {
          "0": "不了解緊急應變",
          "1": "了解緊急停機基本步驟",
          "2": "冰水主機告警停機時：立即通報廠商+通知生產評估影響+確認備用設備啟動+SMT/精密設備優先保護+每15分鐘回報廠房溫度",
          "3": "建立冰水緊急應變SOP+廠商緊急聯絡機制（4H到場SLA）+有主機故障停產影響最小化成功案例"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2B必備(停機應變+廠商通報)|L3A必備(緊急應變SOP+廠商SLA)|L3B主導(備援機制+影響最小化)",
        "questions": "冰水主機跳機後廠房溫度多久會超過SMT製程允許上限？備用冷源（如移動式冰水機/緊急租借）如何預先建立應急方案？廠商緊急維修SLA如何在合約中規定並追蹤？"
      }
    ],
    "salary_structure": [
      {
        "grade": "L1A",
        "title_zh": "初級廠務員",
        "title_en": "Facility Staff I",
        "salary_min": "30000",
        "salary_mid": "31500",
        "salary_max": "33000",
        "requirements": "P40",
        "promotion": "廠區認識中，需全程OJT帶領，5S執行，釘釘基礎操作",
        "amoeba": "見習者/執行者"
      },
      {
        "grade": "L1B",
        "title_zh": "廠務員",
        "title_en": "Facility Staff II",
        "salary_min": "32000",
        "salary_mid": "34000",
        "salary_max": "36000",
        "requirements": "P45",
        "promotion": "了解廠區設施配置，獨立執行日常5S與消耗品補充，基礎報修",
        "amoeba": "執行者"
      },
      {
        "grade": "L2A",
        "title_zh": "資深廠務員",
        "title_en": "Senior Facility Staff",
        "salary_min": "34000",
        "salary_mid": "36500",
        "salary_max": "39000",
        "requirements": "P50",
        "promotion": "獨立廠務日常維護，法規基礎認知，釘釘工單熟練，廠商基礎協調",
        "amoeba": "獨立執行者"
      },
      {
        "grade": "L2B",
        "title_zh": "資深廠務員(熟)/組長",
        "title_en": "Senior Facility Staff II",
        "salary_min": "36000",
        "salary_mid": "39500",
        "salary_max": "43000",
        "requirements": "P55",
        "promotion": "廠務全面執行，廠商協調，鼎新ERP操作，KPI統計，可帶新人",
        "amoeba": "獨立執行者/組長"
      },
      {
        "grade": "L3A",
        "title_zh": "助理廠務工程師",
        "title_en": "Asst. Facility Engineer",
        "salary_min": "39000",
        "salary_mid": "42500",
        "salary_max": "46000",
        "requirements": "P55~P60",
        "promotion": "KPI追蹤分析，廠商評核，法規合規執行，IATF廠務稽查配合",
        "amoeba": "Reserve Amoeba Leader"
      },
      {
        "grade": "L3B",
        "title_zh": "助理廠務工程師(熟)",
        "title_en": "Asst. Facility Engineer II",
        "salary_min": "43000",
        "salary_mid": "47000",
        "salary_max": "51000",
        "requirements": "P60~P65",
        "promotion": "年度計畫制定，工程發包管理，SOP體系建立，節能改善量化",
        "amoeba": "Reserve Amoeba Leader"
      },
      {
        "grade": "L4A",
        "title_zh": "廠務工程師",
        "title_en": "Facility Engineer",
        "salary_min": "48000",
        "salary_mid": "54000",
        "salary_max": "60000",
        "requirements": "P65~P70",
        "promotion": "稽查應對，危化品管理主導，緊急應變SOP主導，COST DOWN改善",
        "amoeba": "L1 Amoeba巴長"
      },
      {
        "grade": "L4B",
        "title_zh": "廠務工程師(資)",
        "title_en": "Facility Engineer II",
        "salary_min": "55000",
        "salary_mid": "61500",
        "salary_max": "68000",
        "requirements": "P70~P75",
        "promotion": "廠務年度預算管控，法規零缺失，多廠區管理，外部稽查主導",
        "amoeba": "L1~L2 Amoeba Leader"
      },
      {
        "grade": "L5A",
        "title_zh": "資深廠務工程師",
        "title_en": "Senior Facility Engineer",
        "salary_min": "62000",
        "salary_mid": "69000",
        "salary_max": "76000",
        "requirements": "P75~P80",
        "promotion": "廠務系統化管理，對外稽查主責，ESG環境管理導入，人才梯隊培育",
        "amoeba": "L2 Amoeba Leader"
      },
      {
        "grade": "L5B",
        "title_zh": "資深廠務工程師(主)",
        "title_en": "Senior Facility Engineer II",
        "salary_min": "68000",
        "salary_mid": "76000",
        "salary_max": "84000",
        "requirements": "P78~P85",
        "promotion": "跨部門廠務策略規劃，廠務改善創新主導，資深人才培育，廠務代表",
        "amoeba": "L2 Amoeba Leader"
      },
      {
        "grade": "L6A",
        "title_zh": "主任廠務工程師/組長",
        "title_en": "Lead Facility Engineer",
        "salary_min": "72000",
        "salary_mid": "83500",
        "salary_max": "95000",
        "requirements": "P82~P92",
        "promotion": "廠務部門策略制定，IATF廠務體系代表，零法規違規多年維持，對外代表",
        "amoeba": "L2~L3 Amoeba Leader"
      }
    ]
  },
  {
    "job_name": "財務會計",
    "raw_job_name": "財務會計",
    "filename": "騏宏科技_財務會計職能薪資結構表_v1_2 (3).xlsx",
    "competencies": [
      {
        "category": "[A]  基礎財務會計  Basic Financial Accounting",
        "code": "A1",
        "dimension": "基礎財務會計",
        "ability": "借貸記帳原則與複式記帳熟練度",
        "levels": {
          "0": "不了解",
          "1": "知道借貸原理但需指導",
          "2": "獨立完成日記帳、分類帳、試算表",
          "3": "複雜多公司合併帳務+建立記帳規範"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L3A起必備｜得2分→L4A獨立記帳｜得3分→L5B帳務規範建立",
        "questions": "請用分錄說明購買原物料並支付貨款的帳務處理；如何確認借貸平衡？"
      },
      {
        "category": "[A]  基礎財務會計  Basic Financial Accounting",
        "code": "A2",
        "dimension": "財務報表編製",
        "ability": "損益表/資產負債表/現金流量表編製",
        "levels": {
          "0": "無",
          "1": "了解三表架構",
          "2": "獨立編製月報/季報三表",
          "3": "複雜調整分錄+合併報表+建立編製SOP"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A必備(月報編製)｜L5A熟練(季年報+調整)｜L6A主導(合併報表+SOP建立)",
        "questions": "月結前需要哪些結帳步驟？折舊如何計提？如何處理預付費用攤銷？"
      },
      {
        "category": "[A]  基礎財務會計  Basic Financial Accounting",
        "code": "A3",
        "dimension": "帳務管理",
        "ability": "分類帳/明細帳維護與科目對帳",
        "levels": {
          "0": "無",
          "1": "了解帳冊維護概念",
          "2": "獨立維護分類帳+月底與總帳對帳",
          "3": "建立帳務稽核機制+指導他人"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L4A必備(分類帳維護)｜L5A主導(對帳SOP建立)｜L6A主導(帳務稽核體系)",
        "questions": "若分類帳與總帳不符，如何系統性追查原因？月底對帳流程如何標準化？"
      },
      {
        "category": "[A]  基礎財務會計  Basic Financial Accounting",
        "code": "A4★",
        "dimension": "基礎財務會計",
        "ability": "固定資產管理與折舊計提",
        "levels": {
          "0": "0=無；1=了解折舊方法(直線/加速)；2=完整固定資產台帳管理+折舊計提量產化；3=建立固資管理SOP+有實地盤點案例",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L4B加分｜L5A必備(固資台帳管理)｜L5B主導(固資管理SOP建立)",
        "questions": "IATF16949下設備資產如何管理？如何處理設備報廢的帳務？"
      },
      {
        "category": "[B]  成本會計  Cost Accounting",
        "code": "B1",
        "dimension": "成本會計",
        "ability": "製造業標準成本制度設計與維護",
        "levels": {
          "0": "無",
          "1": "了解標準成本架構",
          "2": "獨立維護標準成本+差異分析",
          "3": "建立標準成本體系+BOM成本展算+與生產線對接"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L4B認知｜L5A必備(標準成本維護+差異分析)｜L6A主導(成本體系建立)",
        "questions": "材料差異、人工差異、製費差異如何計算分析？騏宏SMT+組裝成本如何歸集？"
      },
      {
        "category": "[B]  成本會計  Cost Accounting",
        "code": "B2",
        "dimension": "成本會計",
        "ability": "BOM成本展算 (物料+人工+製費完整計算)",
        "levels": {
          "0": "無",
          "1": "了解BOM成本組成",
          "2": "能從BOM展算完整製造成本",
          "3": "建立BOM成本計算模板+跨部門協作更新"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4B認知(BOM成本構成)｜L5A必備(獨立展算完整BOM成本)｜L6A主導(成本模板建立)",
        "questions": "LED警示燈一顆的完整製造成本如何計算？直接材料+直接人工+製造費用如何分攤？"
      },
      {
        "category": "[B]  成本會計  Cost Accounting",
        "code": "B3",
        "dimension": "成本會計",
        "ability": "製造費用分攤基礎與間接費用管控",
        "levels": {
          "0": "無",
          "1": "了解製費分攤概念",
          "2": "完整製費分攤作業+各部門費用歸集",
          "3": "建立製費分攤規則+實際vs預算差異分析"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A認知｜L5A必備(製費分攤+差異分析)｜L5B-L6A主導(分攤規則建立)",
        "questions": "SMT和組裝線的製費如何分別計算？間接人工費用如何分攤到各產品線？"
      },
      {
        "category": "[B]  成本會計  Cost Accounting",
        "code": "B4★",
        "dimension": "成本會計",
        "ability": "Cost Down成本降低分析與追蹤",
        "levels": {
          "0": "0=無；1=了解Cost Down分析方法；2=能主導Cost Down專案分析+追蹤成效；3=建立系統性Cost Down機制+有具體降本成果",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L5A建議(Cost Down分析)｜L5B必備(主導+追蹤有成效)｜L6A主導(系統性機制)",
        "questions": "說明一件你主導的Cost Down案例：找到什麼機會？最終降低多少成本？如何量化驗證？"
      },
      {
        "category": "[C]  財務分析與預算  Financial Analysis & Budgeting",
        "code": "C1",
        "dimension": "財務分析",
        "ability": "財務報表分析 (流動比率/毛利率/ROE/DSO等)",
        "levels": {
          "0": "無",
          "1": "知道常用財務比率公式",
          "2": "能計算並解讀財務比率+趨勢分析+客戶徵信分析",
          "3": "建立財務分析報告模板+管理層報告"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A必備(財務比率計算)｜L5A熟練(趨勢分析+客戶徵信)｜L6A主導(管理層報告)",
        "questions": "如何分析客戶的財務信用風險？DSO天數偏高表示什麼問題？如何改善？"
      },
      {
        "category": "[C]  財務分析與預算  Financial Analysis & Budgeting",
        "code": "C2",
        "dimension": "預算管理",
        "ability": "年度預算編製與月度差異分析",
        "levels": {
          "0": "無",
          "1": "了解預算編製流程",
          "2": "能協助各部門預算編製+月度預實差異分析",
          "3": "主導年度預算編製+滾動預測+差異報告"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4B認知(預算編製)｜L5A必備(月度差異分析)｜L6A主導(年度預算主導)",
        "questions": "如何推動各部門填報年度預算？實際vs預算差異超過5%時如何分析報告？"
      },
      {
        "category": "[C]  財務分析與預算  Financial Analysis & Budgeting",
        "code": "C3",
        "dimension": "損益平衡",
        "ability": "損益平衡點分析 (BEP/貢獻毛利率/安全邊際)",
        "levels": {
          "0": "無",
          "1": "了解BEP計算公式",
          "2": "能完整計算各產品BEP+貢獻毛利率分析",
          "3": "建立產品組合優化分析+新產品定價分析"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L4B認知(BEP概念)｜L5A必備(BEP+貢獻毛利分析)｜L5B-L6A主導(產品組合分析)",
        "questions": "騏宏LED警示燈的BEP如何計算？如果接到大訂單但毛利偏低，如何評估？"
      },
      {
        "category": "[C]  財務分析與預算  Financial Analysis & Budgeting",
        "code": "C4★",
        "dimension": "財務分析",
        "ability": "現金流量預測與資金規劃",
        "levels": {
          "0": "0=無；1=了解現金流量表三大活動；2=能編製月度現金流量預測+識別資金缺口；3=建立13週滾動現金流模型+提出資金對策",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L5A建議(現金流量預測)｜L5B必備(13週滾動模型)｜L6A主導(資金規劃+融資對策)",
        "questions": "如何預測騏宏未來3個月的資金需求？若出現缺口，有哪些籌資管道？"
      },
      {
        "category": "[D]  稅務管理  Tax Management",
        "code": "D1",
        "dimension": "稅務管理",
        "ability": "營業稅申報 (進銷項/統一發票/二代健保附費)",
        "levels": {
          "0": "無",
          "1": "了解進銷項概念",
          "2": "能獨立完成月底營業稅申報+統一發票開立/作廢作業",
          "3": "複雜申報(出口退稅/零稅率)+建立申報SOP"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A必備(基礎進銷項申報)｜L5A熟練(複雜申報+出口退稅)｜L6A主導(申報SOP+稅務規劃)",
        "questions": "出口銷售如何申請零稅率退稅？統一發票作廢流程？二代健保補充保費如何計算扣繳？"
      },
      {
        "category": "[D]  稅務管理  Tax Management",
        "code": "D2",
        "dimension": "稅務管理",
        "ability": "營利事業所得稅結算申報 (暫繳/年度申報)",
        "levels": {
          "0": "無",
          "1": "了解營所稅申報架構",
          "2": "能協助準備申報附件+帳務調整",
          "3": "主導年度申報+稅務規劃+應對稅務機關"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4B認知｜L5A必備(協助申報+帳務調整)｜L6A主導(年度申報+稅務規劃)",
        "questions": "哪些費用不可列為公司費用扣除項？外人關係人交易移轉訂價如何處理？"
      },
      {
        "category": "[D]  稅務管理  Tax Management",
        "code": "D3",
        "dimension": "個人所得稅",
        "ability": "薪資扣繳義務人作業 (扣繳憑單/免扣繳)",
        "levels": {
          "0": "無",
          "1": "了解扣繳概念",
          "2": "能執行薪資扣繳計算+年度憑單申報+免扣繳作業",
          "3": "建立扣繳管理SOP+指導HR部門"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L4A必備(扣繳基礎)｜L5A熟練(年度憑單+免扣繳)｜L5B-L6A主導(扣繳SOP建立)",
        "questions": "外籍員工薪資如何計算扣繳？年度所得扣繳憑單申報時程與流程？"
      },
      {
        "category": "[D]  稅務管理  Tax Management",
        "code": "D4★",
        "dimension": "稅務管理",
        "ability": "關稅與進出口稅務申報 (OEM/ODM出口退稅)",
        "levels": {
          "0": "0=無；1=了解進出口報關流程；2=能協助出口報關+退稅申請作業；3=主導進出口稅務規劃+關稅減免申請",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L5A加分(出口退稅認知)｜L5B建議(獨立執行)｜L6A主導(進出口稅務規劃)",
        "questions": "騏宏出口至美國客戶的退稅流程？進口電子零件如何申報關稅？"
      },
      {
        "category": "[E]  內部控制與稽核  Internal Control & Audit",
        "code": "E1",
        "dimension": "內部控制",
        "ability": "內部控制制度設計與執行 (COSO框架)",
        "levels": {
          "0": "無",
          "1": "了解COSO五大要素",
          "2": "能設計並執行各循環內控程序(採購/銷售/現金/薪資)",
          "3": "建立內控手冊+年度稽核計劃+管理階層報告"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4B認知(COSO框架)｜L5A必備(各循環內控設計+執行)｜L6A主導(內控手冊建立)",
        "questions": "騏宏採購循環有哪些關鍵控制點？如何防止付款舞弊？三方勾稽如何設計？"
      },
      {
        "category": "[E]  內部控制與稽核  Internal Control & Audit",
        "code": "E2",
        "dimension": "內部稽核",
        "ability": "內部稽核計劃與執行 (風險評估/稽核程序)",
        "levels": {
          "0": "無",
          "1": "了解內部稽核流程",
          "2": "能執行各循環稽核程序+出具稽核報告",
          "3": "主導年度稽核計劃+異常追蹤改善機制"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L4B認知(稽核概念)｜L5A必備(稽核程序執行+報告)｜L6A主導(年度稽核計劃)",
        "questions": "如何規劃騏宏年度稽核重點？稽核發現異常時如何追蹤改善？"
      },
      {
        "category": "[E]  內部控制與稽核  Internal Control & Audit",
        "code": "E3",
        "dimension": "IATF財務",
        "ability": "IATF16949/AS9100品質體系財務相關要求",
        "levels": {
          "0": "無",
          "1": "了解IATF財務相關要求",
          "2": "能配合IATF稽核準備財務相關文件+執行財務控制點",
          "3": "主導財務面IATF稽核準備+應對外部稽核"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L4A認知(IATF財務要求)｜L5A必備(稽核文件準備)｜L6A主導(IATF財務稽核應對)",
        "questions": "IATF16949對財務記錄保存有何要求？外部IATF稽核時財務部門需準備哪些資料？"
      },
      {
        "category": "[E]  內部控制與稽核  Internal Control & Audit",
        "code": "E4★",
        "dimension": "內部控制",
        "ability": "舞弊風險管控與Segregation of Duties",
        "levels": {
          "0": "0=無；1=了解職責分離概念；2=能識別高舞弊風險點+設計職責分離控制；3=建立反舞弊機制+有改善案例",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L5A加分｜L5B建議(高舞弊風險識別)｜L6A主導(反舞弊機制建立)",
        "questions": "騏宏現金收付如何設計職責分離？出納與帳務人員如何分工防弊？"
      },
      {
        "category": "[F]  帳務處理  Accounting Treatment",
        "code": "F1",
        "dimension": "應收帳款",
        "ability": "AR應收帳款管理 (帳齡分析/催收/呆帳提列)",
        "levels": {
          "0": "無",
          "1": "了解AR帳齡分析",
          "2": "能獨立執行AR帳齡分析+催收跟催+呆帳計提",
          "3": "建立AR管理SOP+客戶信用額度管理"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4A必備(AR帳齡分析)｜L5A熟練(催收+呆帳管理)｜L5B-L6A主導(AR管理SOP)",
        "questions": "美系客戶(Whelen/Federal Signal)付款條件如何管控？帳齡超90天如何處理？"
      },
      {
        "category": "[F]  帳務處理  Accounting Treatment",
        "code": "F2",
        "dimension": "應付帳款",
        "ability": "AP應付帳款管理 (三方勾稽/付款作業/早付折扣)",
        "levels": {
          "0": "無",
          "1": "了解AP付款流程",
          "2": "能執行三方勾稽(採購單/收貨單/發票)+付款作業",
          "3": "建立AP管理SOP+供應商付款優化策略"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4A必備(AP付款作業)｜L5A熟練(三方勾稽+付款優化)｜L6A主導(AP管理SOP)",
        "questions": "AP三方勾稽不符時如何處理？如何談判早付折扣？付款優先順序如何排列？"
      },
      {
        "category": "[F]  帳務處理  Accounting Treatment",
        "code": "F3",
        "dimension": "存貨帳務",
        "ability": "存貨帳務管理 (成本計算方法/盤點調整/呆滯處理)",
        "levels": {
          "0": "無",
          "1": "了解存貨計價方法(FIFO/加權平均)",
          "2": "能執行月底存貨盤點調整分錄+呆滯品處理",
          "3": "建立存貨帳務SOP+呆滯品分析機制"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4B必備(存貨計價方法)｜L5A必備(盤點調整分錄)｜L6A主導(存貨帳務體系)",
        "questions": "採用加權平均法時如何計算月底存貨成本？LED料件呆滯認定標準？如何帳務處理？"
      },
      {
        "category": "[F]  帳務處理  Accounting Treatment",
        "code": "F4",
        "dimension": "外幣帳務",
        "ability": "外幣帳務處理 (USD/EUR匯兌損益/外幣報表)",
        "levels": {
          "0": "無",
          "1": "了解外幣折算原則",
          "2": "能執行外幣應收應付匯兌損益計算+月底調整",
          "3": "建立外幣帳務管理SOP+匯率風險報告"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4B必備(外幣折算基礎)｜L5A必備(匯兌損益計算+月底調整)｜L6A主導(外幣管理SOP)",
        "questions": "出口美金收款如何認列匯兌損益？月底外幣資產負債如何重新評估？"
      },
      {
        "category": "[G]  鼎新ERP財務模組  Kingdee ERP Finance Module",
        "code": "G1",
        "dimension": "鼎新ERP財務",
        "ability": "鼎新ERP財務模組基礎操作 (AP/AR/GL/現金模組)",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作了解介面",
          "2": "熟練操作AP/AR/GL/現金模組+產出財務報表",
          "3": "熟練設定ERP財務參數+指導他人+有模組導入案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L3B起認知(ERP基礎)｜L4A必備(AP/AR/GL熟練)｜L5A主導(財務模組參數設定+指導)",
        "questions": "鼎新ERP如何執行月底結帳？如何從ERP產出損益表和資產負債表？"
      },
      {
        "category": "[G]  鼎新ERP財務模組  Kingdee ERP Finance Module",
        "code": "G2",
        "dimension": "鼎新ERP財務",
        "ability": "應收帳款模組操作 (客戶對帳/帳齡報表/收款沖帳)",
        "levels": {
          "0": "無",
          "1": "了解AR模組",
          "2": "能執行客戶對帳+帳齡分析報表+收款沖帳",
          "3": "建立AR模組SOP+有客戶對帳異常解決案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4A必備(AR基礎操作)｜L5A熟練(AR模組全流程)｜L6A主導(AR模組SOP建立)",
        "questions": "鼎新ERP如何執行收款沖帳？若帳齡報表與客戶對帳單不符如何查找原因？"
      },
      {
        "category": "[G]  鼎新ERP財務模組  Kingdee ERP Finance Module",
        "code": "G3",
        "dimension": "鼎新ERP財務",
        "ability": "應付帳款模組操作 (廠商對帳/付款申請/三方勾稽)",
        "levels": {
          "0": "無",
          "1": "了解AP模組基礎",
          "2": "能執行廠商對帳+付款申請+三方勾稽確認",
          "3": "建立AP模組SOP+有廠商對帳異常處理案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4A必備(AP基礎操作)｜L5A熟練(AP模組全流程)｜L6A主導(AP模組SOP建立)",
        "questions": "鼎新ERP如何執行付款作業？三方勾稽(採購單/收貨單/發票)在ERP如何確認？"
      },
      {
        "category": "[G]  鼎新ERP財務模組  Kingdee ERP Finance Module",
        "code": "G4",
        "dimension": "鼎新ERP財務",
        "ability": "ERP費用報銷與費用中心管理",
        "levels": {
          "0": "無",
          "1": "了解費用報銷流程",
          "2": "能執行費用報銷作業+費用中心歸集分析",
          "3": "建立費用管理SOP+各部門費用分析報告"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4A認知｜L4B必備(費用報銷作業+費用中心)｜L5A主導(費用管理SOP建立)",
        "questions": "騏宏各部門費用如何在ERP中歸集？如何產出各部門月度費用對比報告？"
      },
      {
        "category": "[G]  鼎新ERP財務模組  Kingdee ERP Finance Module",
        "code": "G5★",
        "dimension": "鼎新ERP財務",
        "ability": "ERP成本模組操作 (工單成本/BOM成本展算/成本差異)",
        "levels": {
          "0": "0=無；1=了解成本模組基礎；2=能執行工單成本計算+BOM成本展算+月度成本差異報告；3=建立成本模組SOP+有成本異常分析案例",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L5A建議(工單成本計算)｜L5B必備(BOM成本展算+差異分析)｜L6A主導(成本模組SOP)",
        "questions": "鼎新ERP如何展算一件LED警示燈的完整製造成本？工單成本差異如何分析？"
      },
      {
        "category": "[H]  資金管理與應收應付  Cash & Treasury Management",
        "code": "H1",
        "dimension": "資金管理",
        "ability": "每日資金調度與銀行對帳 (現金日報表/銀行對帳單)",
        "levels": {
          "0": "無",
          "1": "了解銀行對帳流程",
          "2": "能獨立完成每日現金日報表+銀行對帳+未達帳處理",
          "3": "建立資金調度SOP+銀行對帳自動化"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4A必備(現金日報表+銀行對帳)｜L5A熟練(資金調度+自動化)｜L6A主導(資金管理SOP)",
        "questions": "銀行對帳單與帳面不符時如何查找未達帳？如何編製每日資金頭寸報告？"
      },
      {
        "category": "[H]  資金管理與應收應付  Cash & Treasury Management",
        "code": "H2",
        "dimension": "信用管理",
        "ability": "客戶信用額度管理與帳齡風險控制",
        "levels": {
          "0": "無",
          "1": "了解客戶信用評估概念",
          "2": "能執行客戶信用評估+額度設定+超額預警",
          "3": "建立客戶信用管理政策+風險分級機制"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L4B認知｜L5A必備(信用評估+額度管理)｜L6A主導(信用管理政策建立)",
        "questions": "如何評估Whelen/Federal Signal等美系客戶的信用風險？信用額度如何設定？"
      },
      {
        "category": "[H]  資金管理與應收應付  Cash & Treasury Management",
        "code": "H3",
        "dimension": "票據管理",
        "ability": "票據管理 (支票/本票/電匯/信用狀操作)",
        "levels": {
          "0": "無",
          "1": "了解票據基本知識",
          "2": "能執行票據收付作業+到期提示+拒付處理",
          "3": "建立票據管理SOP+有信用狀操作案例"
        },
        "importance": 3,
        "weight": "6",
        "target_level": "L4A認知｜L4B必備(票據收付作業)｜L5A熟練(LC信用狀操作)",
        "questions": "遠期信用狀(Usance L/C)如何操作？出口收款選擇T/T vs L/C考量因素？"
      },
      {
        "category": "[H]  資金管理與應收應付  Cash & Treasury Management",
        "code": "H4★",
        "dimension": "資金管理",
        "ability": "外匯風險管理 (遠期外匯/自然避險)",
        "levels": {
          "0": "0=無；1=了解外匯風險概念；2=能識別外匯敞口+執行遠期外匯操作；3=建立外匯風險管理政策+有匯率避險成效案例",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L5A加分(外匯風險識別)｜L5B建議(遠期外匯操作)｜L6A主導(外匯管理政策)",
        "questions": "騏宏美元收入如何管理匯率風險？遠期外匯DF與換匯交易NDF差異？"
      },
      {
        "category": "[I]  薪資與費用管控  Payroll & Cost Control",
        "code": "I1",
        "dimension": "薪資作業",
        "ability": "薪資計算與薪資條製作 (底薪/加班費/勞健保)",
        "levels": {
          "0": "無",
          "1": "了解薪資計算構成",
          "2": "能獨立完成月薪計算+加班費計算+勞健保負擔計算+薪資條",
          "3": "建立薪資計算SOP+有薪資爭議處理案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4A必備(薪資計算基礎)｜L5A熟練(完整薪資作業)｜L5B-L6A主導(薪資SOP建立)",
        "questions": "計時工VS計月工加班費如何計算？勞保/健保/勞退公司負擔比例各為何？"
      },
      {
        "category": "[I]  薪資與費用管控  Payroll & Cost Control",
        "code": "I2",
        "dimension": "費用管控",
        "ability": "部門費用預算管控與差異分析",
        "levels": {
          "0": "無",
          "1": "了解費用預算管控概念",
          "2": "能執行各部門月度費用追蹤+差異分析+超支預警",
          "3": "建立費用管控SOP+有費用優化成果案例"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L4B認知｜L5A必備(費用追蹤+差異分析)｜L6A主導(費用管控政策建立)",
        "questions": "如何設計騏宏各部門費用預算管控制度？差異超過10%如何報告並追蹤？"
      },
      {
        "category": "[I]  薪資與費用管控  Payroll & Cost Control",
        "code": "I3",
        "dimension": "勞動法令",
        "ability": "勞基法勞動法令遵循 (工時/加班/假別/資遣)",
        "levels": {
          "0": "無",
          "1": "了解勞基法基本規定",
          "2": "能正確計算合法加班工時/假別應用/資遣費",
          "3": "有協助處理勞資爭議+建立勞令遵循查核機制"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L4A必備(勞基法基礎)｜L5A熟練(勞資爭議處理)｜L6A主導(勞令遵循機制建立)",
        "questions": "彈性工時如何計算合法加班？特休年資計算方式？勞資爭議調解如何進行？"
      },
      {
        "category": "[I]  薪資與費用管控  Payroll & Cost Control",
        "code": "I4★",
        "dimension": "薪資作業",
        "ability": "越南/外籍員工薪資與稅務處理",
        "levels": {
          "0": "0=無；1=了解外籍員工薪資特殊規定；2=能處理外籍員工薪資計算+扣繳+居留相關；3=建立外籍員工薪資SOP",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L5A加分(外籍薪資概念)｜L5B建議(獨立處理)｜L6A主導(外籍員工薪資SOP)",
        "questions": "騏宏越南員工如果派駐台灣，薪資稅務如何處理？外籍勞工健保費用計算？"
      },
      {
        "category": "[J]  財務申報與法令遵循  Regulatory Compliance & Reporting",
        "code": "J1",
        "dimension": "法令遵循",
        "ability": "公司法/商業會計法/稅捐稽徵法基礎",
        "levels": {
          "0": "無",
          "1": "了解主要財務法令架構",
          "2": "能應用相關法令完成申報作業+識別違規風險",
          "3": "建立法令遵循清單+定期更新機制+法令變更衝擊分析"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L4B認知(主要財務法令)｜L5A必備(應用法令識別風險)｜L6A主導(法令遵循清單建立)",
        "questions": "商業會計法對帳簿保存年限的規定？違反稅捐稽徵法的罰則有哪些？"
      },
      {
        "category": "[J]  財務申報與法令遵循  Regulatory Compliance & Reporting",
        "code": "J2",
        "dimension": "政府申報",
        "ability": "各類政府申報作業 (環保/勞安/統計調查)",
        "levels": {
          "0": "無",
          "1": "了解政府申報項目",
          "2": "能執行各類政府申報(環保費/工業安全/統計調查)",
          "3": "建立申報行事曆+申報SOP+有應對政府稽查案例"
        },
        "importance": 3,
        "weight": "6",
        "target_level": "L4A認知｜L5A必備(各類申報執行)｜L5B-L6A主導(申報管理SOP+稽查應對)",
        "questions": "騏宏需要每月/每季/每年向哪些政府機關申報哪些資料？如何建立申報行事曆？"
      },
      {
        "category": "[J]  財務申報與法令遵循  Regulatory Compliance & Reporting",
        "code": "J3★",
        "dimension": "法令遵循",
        "ability": "上市前準備/會計師查核配合",
        "levels": {
          "0": "0=無；1=了解會計師查核流程；2=能配合會計師查核準備財務佐證文件；3=主導查核配合作業+有查核意見改善追蹤案例",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L5B建議(查核配合)｜L6A主導(查核配合作業主導)｜L7CFO必備(上市前財務準備)",
        "questions": "會計師查核時財務部門如何準備？常見查核意見有哪些？如何改善帳務讓查核更順利？"
      },
      {
        "category": "[K]  阿米巴損益核算  Amoeba P&L Literacy",
        "code": "K1",
        "dimension": "阿米巴核算",
        "ability": "阿米巴時間附加值計算與分析",
        "levels": {
          "0": "不知道時間附加值",
          "1": "知道公式=(銷售額-外部費用)÷工時",
          "2": "可計算各部門日/月時間附加值並分析趨勢",
          "3": "可協助建立全公司阿米巴核算規則+帶領各巴達成目標"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A起認知(時間附加值公式)｜L5A必備(計算分析+趨勢)｜L6A主導(全公司核算規則建立)",
        "questions": "時間附加值=(銷售額-外部費用)÷總工時；財務部門的「銷售額分攤」如何定義？"
      },
      {
        "category": "[K]  阿米巴損益核算  Amoeba P&L Literacy",
        "code": "K2",
        "dimension": "阿米巴核算",
        "ability": "各部門每日損益表維護與異常分析",
        "levels": {
          "0": "無",
          "1": "可填寫損益表格",
          "2": "可分析各部門損益異常並提出改善行動",
          "3": "可建立全公司阿米巴損益核算體系+有損益改善實績"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4B必備(損益表填寫)｜L5A必備(異常分析+改善行動)｜L6A主導(核算體系建立)",
        "questions": "SMT部門外部費用應如何定義(材料/水電/設備折舊)？各部門時間附加值目標如何設定？"
      },
      {
        "category": "[K]  阿米巴損益核算  Amoeba P&L Literacy",
        "code": "K3★",
        "dimension": "阿米巴核算",
        "ability": "財務長阿米巴巴長責任 (L6A+)",
        "levels": {
          "0": "0=無；1=知道巴長角色與責任；2=可主持阿米巴月度會議與目標檢討；3=可帶領財務部阿米巴持續達成月度時間附加值目標",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "6",
        "target_level": "L6A必備(巴長角色+月度會議)｜L6B主導(帶領財務部達成月度目標)｜L7整合多巴管理",
        "questions": "財務部門如何設定阿米巴時間附加值目標？如何激勵成員達成？L6A+必備"
      },
      {
        "category": "[L]  AI財務工具應用  AI Finance Tools Application",
        "code": "L1",
        "dimension": "AI財務工具",
        "ability": "Claude Artifacts / CHART財務報表圖表生成",
        "levels": {
          "0": "無",
          "1": "基礎使用Claude生成圖表/報表",
          "2": "熟練應用CHART生成財務趨勢/預算達成/KPI報表",
          "3": "建立部門AI圖表應用規範+指導他人+有可量化效率提升案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4A建議(基礎CHART圖表)｜L5A必備(熟練財務KPI圖表,效率提升)｜L6A主導(部門規範建立)",
        "questions": "如何用Claude CHART生成每月損益趨勢圖？如何讓AI自動產出預算達成率報告？"
      },
      {
        "category": "[L]  AI財務工具應用  AI Finance Tools Application",
        "code": "L2",
        "dimension": "AI財務工具",
        "ability": "Excel進階應用 (VLOOKUP/PIVOT/Power Query財務分析)",
        "levels": {
          "0": "無",
          "1": "基礎Excel操作",
          "2": "熟練VLOOKUP/PIVOT TABLE/Power Query製作財務分析表",
          "3": "建立部門Excel財務分析模板+有自動化報表案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4A必備(VLOOKUP+PIVOT基礎)｜L5A必備(Power Query自動化)｜L6A主導(財務分析模板建立)",
        "questions": "如何用PIVOT TABLE分析各客戶月度銷售毛利？Power Query如何自動整合鼎新ERP匯出數據？"
      },
      {
        "category": "[L]  AI財務工具應用  AI Finance Tools Application",
        "code": "L3★",
        "dimension": "AI財務工具",
        "ability": "NotebookLM財務法規知識管理",
        "levels": {
          "0": "0=無；1=基礎使用NotebookLM進行文件整合；2=熟練建立稅務法規知識庫+快速查詢申報要求；3=建立部門AI知識管理體系+有知識庫維護案例",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L4B加分(NotebookLM基礎)｜L5A建議(稅務知識庫建立)｜L6A主導(部門AI知識管理)",
        "questions": "如何用NotebookLM整合所得稅法/商業會計法建立快速查詢知識庫？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z1",
        "dimension": "企業基本能力",
        "ability": "ISO文件讀寫能力 (程序書/財務作業規範SOP撰寫)",
        "levels": {
          "0": "無",
          "1": "可閱讀程序書",
          "2": "可獨立撰寫財務SOP/工作指導書",
          "3": "可建立財務文件體系架構 ► 對應職等: L4A必備"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L4A必備(獨立撰寫財務SOP)｜L5A主導(文件體系架構建立)｜L6A主導(跨部門財務文件)",
        "questions": "財務部門哪些作業需要建立SOP？如何撰寫月底結帳作業指導書？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z2",
        "dimension": "企業基本能力",
        "ability": "跨部門協作溝通 (生管/採購/業務/生技財務整合)",
        "levels": {
          "0": "無",
          "1": "被動配合等待指示",
          "2": "主動協調推進跨部門財務相關決策",
          "3": "推動跨部門財務整合流程有可量化成效"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L5A建議(主動協調)｜L6A必備(推動跨部門財務整合)｜L6B主導(跨組織協作機制建立)",
        "questions": "說明一次你主導協調解決採購/財務/生管三方對帳異常的具體案例"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z3",
        "dimension": "企業基本能力",
        "ability": "ERP系統操作 (鼎新查詢/報表/財務模組基礎)",
        "levels": {
          "0": "無",
          "1": "基礎查詢",
          "2": "可操作財務AP/AR/GL模組",
          "3": "可協助財務部門ERP教育訓練 ► 對應職等: L4A建議"
        },
        "importance": 4,
        "weight": "4",
        "target_level": "L4A建議(ERP基礎查詢)｜L4B必備(財務模組操作)｜L5A主導(協助財務ERP教育訓練)",
        "questions": "如何在鼎新ERP查詢特定客戶的應收帳款明細？如何查詢供應商付款明細？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z4",
        "dimension": "企業基本能力",
        "ability": "英語財務文件閱讀 (美系客戶報價/合約財務條款)",
        "levels": {
          "0": "無",
          "1": "基礎英語閱讀",
          "2": "可閱讀英語財務報表/合約付款條款/LC信用狀",
          "3": "可撰寫英語財務信函+應對外商財務查詢"
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L4B認知(英語財務文件閱讀)｜L5A建議(英語LC/合約條款)｜L6A主導(英語財務函件撰寫)",
        "questions": "如何閱讀Whelen/Federal Signal的付款條件Net 30/Net 60的財務含義？LC信用狀關鍵條款？"
      },
      {
        "category": "[N]  用人管理制度法規遵循  HR Policy & People Management Compliance",
        "code": "N1",
        "dimension": "用人法規遵循",
        "ability": "員工出勤、給假、出差管理遵循 (CMP-001：103出勤/104給假/105出差旅費報支管理辦法)",
        "levels": {
          "0": "無",
          "1": "了解出勤/假別/出差規定基本框架",
          "2": "能執行差旅費用審核+請假核算+出勤異常帳務調整",
          "3": "建立差旅費管控SOP+與HR完整交接+薪資帳務連動正確"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4A必備(差旅費審核+假別帳務)｜L5A熟練(費用管控SOP建立)｜L6A主導(出勤帳務系統整合)",
        "questions": "騏宏差旅費用如何審核報支？員工請特休/病假對當月薪資帳務如何調整？出差預借款如何管控沖帳？"
      },
      {
        "category": "[N]  用人管理制度法規遵循  HR Policy & People Management Compliance",
        "code": "N2",
        "dimension": "薪資與任免管理",
        "ability": "員工薪資計算與任免交接財務遵循 (CMP-001：102徵選任用/106離職/107薪資計算/108會計財務人員任免交接管理辦法)",
        "levels": {
          "0": "無",
          "1": "了解薪資計算規定及人員任免交接程序",
          "2": "能獨立執行月薪計算+離職結算+會計財務人員交接作業+帳務移交清冊",
          "3": "建立薪資計算SOP+有人員交接異常處理案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A必備(薪資計算+離職結算)｜L5A必備(會計人員交接完整作業)｜L6A主導(薪資SOP+交接制度建立)",
        "questions": "計時工vs計月工離職結算如何計算？108辦法對會計財務人員交接規定哪些帳冊需移交？交接清冊如何製作？"
      },
      {
        "category": "[N]  用人管理制度法規遵循  HR Policy & People Management Compliance",
        "code": "N3",
        "dimension": "職務代理管理",
        "ability": "財務部門職務代理制度建立與執行 (CMP-001：109職務代理管理辦法)",
        "levels": {
          "0": "無",
          "1": "了解職務代理規定",
          "2": "能設計財務部門職務代理矩陣+確保代理期間帳務不中斷+關鍵工作交接",
          "3": "建立財務部門職務代理SOP+定期演練+有代理案例"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4B必備(財務職務代理執行)｜L5A必備(職務代理矩陣設計)｜L6A主導(財務職務代理制度建立)",
        "questions": "財務部門結帳期間主辦會計請假，職務代理如何啟動？代理人需具備哪些財務操作授權？鼎新ERP如何設定代理權限？"
      },
      {
        "category": "[N]  用人管理制度法規遵循  HR Policy & People Management Compliance",
        "code": "N4",
        "dimension": "績效考核管理",
        "ability": "財務部門績效考核與升遷制度執行 (CMP-001：110獎懲/111績效考核暨升遷管理辦法)",
        "levels": {
          "0": "無",
          "1": "了解績效考核制度架構",
          "2": "能協助財務部門KPI設定+月度時間附加值追蹤+獎懲申請的帳務處理",
          "3": "主導財務部Amoeba績效目標設定+月度考核+升遷評估"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4A認知(績效考核架構)｜L5A必備(財務KPI追蹤+阿米巴月度考核)｜L6A主導(財務部績效制度建立)",
        "questions": "財務部門時間附加值KPI如何設定？月度考核差距超標時如何啟動改善計劃？獎懲申請對薪資帳務如何影響？"
      },
      {
        "category": "[N]  用人管理制度法規遵循  HR Policy & People Management Compliance",
        "code": "N5★",
        "dimension": "職場合規管理",
        "ability": "職場合規與人員管理高風險事項遵循 (CMP-001：112性騷擾防治申訴及懲戒管理辦法)",
        "levels": {
          "0": "0=無；1=了解性騷擾防治法令基本規定；2=能識別財務部門職場合規風險+執行相關費用申報處理(申訴費用/法律費用)；3=建立財務部門合規文化+有相關費用管控案例",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L4A認知(職場合規基本規定)｜L5A必備(合規費用申報處理)｜L6A主導(財務部合規文化建立)",
        "questions": "性騷擾申訴調查過程中產生的法律顧問費/外部調查費如何列帳？騏宏財務部如何維護職場合規文化？"
      }
    ],
    "salary_structure": [
      {
        "grade": "L3A",
        "title_zh": "助理財務會計員",
        "title_en": "Asst. Accountant",
        "salary_min": "32000",
        "salary_mid": "35000",
        "salary_max": "39000",
        "requirements": "借貸記帳基礎、科目認識、Excel基礎操作、ERP基礎查詢",
        "promotion": "記帳基礎、Excel操作、勞基法認識、OJT帶領",
        "amoeba": "執行者/學習者"
      },
      {
        "grade": "L3B",
        "title_zh": "助理財務會計員(熟)",
        "title_en": "Asst. Accountant II",
        "salary_min": "35000",
        "salary_mid": "38000",
        "salary_max": "43000",
        "requirements": "三表基礎編製、AR/AP基礎操作、薪資計算基礎、稅務基礎",
        "promotion": "三表基礎、AP/AR帳務操作、勞健保計算、ERP熟悉",
        "amoeba": "執行者/學習者"
      },
      {
        "grade": "L4A",
        "title_zh": "財務會計專員",
        "title_en": "Accounting Specialist",
        "salary_min": "40000",
        "salary_mid": "44000",
        "salary_max": "50000",
        "requirements": "月報三表獨立編製、AP/AR熟練、鼎新ERP財務模組、薪資完整作業",
        "promotion": "獨立月報三表、AR/AP熟練、鼎新財務模組、營業稅申報",
        "amoeba": "獨立執行者"
      },
      {
        "grade": "L4B",
        "title_zh": "財務會計專員(資)",
        "title_en": "Senior Accounting Specialist",
        "salary_min": "45000",
        "salary_mid": "50000",
        "salary_max": "58000",
        "requirements": "成本會計基礎、預算管控、BOM成本展算、外幣帳務、存貨帳務",
        "promotion": "成本會計、預算差異分析、外幣帳務、存貨盤點",
        "amoeba": "獨立執行者"
      },
      {
        "grade": "L5A",
        "title_zh": "資深財務會計專員",
        "title_en": "Senior Accountant",
        "salary_min": "52000",
        "salary_mid": "58000",
        "salary_max": "68000",
        "requirements": "標準成本體系、年度預算主導、現金流預測、IATF財務稽核配合、阿米巴核算",
        "promotion": "標準成本+差異分析、年度預算編製、現金流預測、內控設計",
        "amoeba": "Reserve Amoeba Leader"
      },
      {
        "grade": "L5B",
        "title_zh": "財務會計主任",
        "title_en": "Lead Accountant / Chief Accountant",
        "salary_min": "60000",
        "salary_mid": "68000",
        "salary_max": "78000",
        "requirements": "內控稽核主導、財務分析報告、損益平衡分析、阿米巴月度檢討、帶領後進",
        "promotion": "內控稽核主導、管理層報告、帶領1-2人財務小組、Amoeba目標設定",
        "amoeba": "Reserve Amoeba Leader"
      },
      {
        "grade": "L6A",
        "title_zh": "財務會計課長",
        "title_en": "Finance Manager",
        "salary_min": "68000",
        "salary_mid": "78000",
        "salary_max": "92000",
        "requirements": "年度財務策略、查核配合主導、稅務規劃、資金融資規劃、Amoeba巴長",
        "promotion": "財務策略主導、會計師查核應對、跨部門財務整合、阿米巴全公司管理",
        "amoeba": "L1 Amoeba巴長"
      },
      {
        "grade": "L6B",
        "title_zh": "資深財務主管",
        "title_en": "Senior Finance Manager / Controller",
        "salary_min": "78000",
        "salary_mid": "88000",
        "salary_max": "105000",
        "requirements": "公司財務最高執行、上市前財務準備、投資者關係、集團合併報表主導",
        "promotion": "對外財務代表、集團合併報表、投資者關係、財務IT系統規劃",
        "amoeba": "L1~L2 Amoeba Leader"
      },
      {
        "grade": "L7",
        "title_zh": "財務長",
        "title_en": "Chief Financial Officer (CFO)",
        "salary_min": "92000",
        "salary_mid": "105000",
        "salary_max": "130000",
        "requirements": "公司財務最高主管、年度財務策略制定、董事會報告、融資策略、上市規劃",
        "promotion": "公司財務最高決策、董事會/股東報告、M&A評估、外部投資人溝通",
        "amoeba": "L2 Amoeba Leader"
      }
    ]
  },
  {
    "job_name": "資訊管理 MIS",
    "raw_job_name": "資訊管理 MIS",
    "filename": "騏宏科技_資訊管理_MIS_職能薪資結構表_v1_4_0.xlsx",
    "competencies": [
      {
        "category": "[A]  網路與基礎建設管理  Network & Infrastructure Management",
        "code": "A1",
        "dimension": "網路架構與網段隔離",
        "ability": "辦公/研發/生產/訪客/IoT五大VLAN網段規劃與隔離，IP管理，路由與交換設定",
        "levels": {
          "0": "不了解網路架構",
          "1": "了解VLAN與IP基本概念，可協助佈線",
          "2": "獨立維護VLAN網段隔離、設定Switch/Router、排除一般連線異常",
          "3": "規劃網段架構改善、撰寫網路拓樸文件、主導隔離強化專案"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L1B認知|L2A必備(獨立維護)|L3A主導(架構規劃)",
        "questions": "研發網與生產網為何要隔離？訪客Wi-Fi如何避免存取內網？VLAN劃分依據為何？"
      },
      {
        "category": "[A]  網路與基礎建設管理  Network & Infrastructure Management",
        "code": "A2",
        "dimension": "防火牆與VPN管理",
        "ability": "防火牆政策設定、埠管理、VPN建置與帳號管理，遠端連線安全管控",
        "levels": {
          "0": "不了解",
          "1": "了解防火牆/VPN基本概念",
          "2": "獨立維護防火牆規則、開通/停用VPN帳號、檢視連線日誌",
          "3": "規劃防火牆政策優化、VPN雙因子強化、零未授權外連"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(規則維護)|L3A必備(政策優化)|L4A主導(零未授權外連)",
        "questions": "員工在家如何安全連回公司？防火牆開放新埠的審核流程？VPN帳號離職如何即時停用？"
      },
      {
        "category": "[A]  網路與基礎建設管理  Network & Infrastructure Management",
        "code": "A3",
        "dimension": "機房與資料中心管理",
        "ability": "Server Room/UPS室/網路中心動環管理（溫濕度/UPS/門禁/消防），定期巡檢",
        "levels": {
          "0": "不了解機房管理",
          "1": "了解機房環境要求",
          "2": "執行機房月巡檢、UPS測試、溫濕度記錄、異常通報",
          "3": "建立機房管理SOP、動環監控導入、零當機事件維持"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(巡檢+UPS測試)|L3A必備(SOP建立)|L3B主導(動環監控導入)",
        "questions": "機房溫濕度標準為何？UPS電池更換週期如何評估？機房斷電的應變程序？"
      },
      {
        "category": "[A]  網路與基礎建設管理  Network & Infrastructure Management",
        "code": "A4",
        "dimension": "網路設備維運",
        "ability": "Switch/AP/結構化佈線維護，頻寬與流量監控，網路效能調校與故障排除",
        "levels": {
          "0": "不了解",
          "1": "了解網路設備基本操作",
          "2": "獨立排除AP/Switch故障、執行頻寬監控、佈線標示管理",
          "3": "網路效能優化、設備汰換評估、建立監控告警機制"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(故障排除+監控)|L3A主導(效能優化+告警機制)",
        "questions": "生產線網路掉線如何快速定位？頻寬不足如何分析與擴充？網路設備如何納入資產管理？"
      },
      {
        "category": "[B]  伺服器與虛擬化管理 (Citrix)  Server & Virtualization",
        "code": "B1",
        "dimension": "Citrix Workspace平台管理",
        "ability": "虛擬桌面/應用發佈管理（ERP/PLM/SolidWorks/Altium/LucidShape/MPLAB X），連線品質維護",
        "levels": {
          "0": "未使用Citrix",
          "1": "了解Citrix基本架構與登入",
          "2": "獨立管理應用發佈、使用者連線、排除一般連線異常",
          "3": "規劃Citrix資源配置優化、版本升級、建立平台維運SOP"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(應用發佈+連線維護)|L3A必備(資源優化)|L3B主導(維運SOP+升級)",
        "questions": "Citrix發佈新應用的流程為何？使用者連線變慢如何診斷？研發軟體授權在Citrix如何集中管理？"
      },
      {
        "category": "[B]  伺服器與虛擬化管理 (Citrix)  Server & Virtualization",
        "code": "B2",
        "dimension": "伺服器與作業系統管理",
        "ability": "Windows Server/AD網域/檔案伺服器(NAS)管理，修補更新，效能監控",
        "levels": {
          "0": "不了解伺服器管理",
          "1": "了解Server/AD基本概念",
          "2": "獨立管理AD帳號、檔案伺服器權限、執行修補更新",
          "3": "規劃伺服器架構、GPO群組原則優化、建立修補管理機制"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(AD+檔案權限+修補)|L3A主導(架構+GPO優化)",
        "questions": "AD網域與本機帳號差異？檔案伺服器權限如何依部門設定？Windows Server更新如何避免影響營運？"
      },
      {
        "category": "[B]  伺服器與虛擬化管理 (Citrix)  Server & Virtualization",
        "code": "B3",
        "dimension": "Citrix資料隔離與防洩密",
        "ability": "剪貼簿雙向複製管制、下載限制、浮水印、研發機密(Source/Gerber/BOM/光學模擬/客戶圖面)防外流",
        "levels": {
          "0": "不了解防洩密機制",
          "1": "了解資料隔離概念",
          "2": "依政策設定剪貼簿/下載管制、執行下載核准流程、保存存取紀錄",
          "3": "建立防洩密政策SOP、稽核存取日誌、零機密外流事件"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(管制設定+核准流程)|L3A必備(政策SOP)|L4A主導(零外流+日誌稽核)",
        "questions": "為何研發資料禁止下載至本機？剪貼簿管制如何在Citrix設定？哪些資料需主管核准才能下載？"
      },
      {
        "category": "[B]  伺服器與虛擬化管理 (Citrix)  Server & Virtualization",
        "code": "B4",
        "dimension": "虛擬化資源監控與調校",
        "ability": "Citrix/伺服器資源(CPU/記憶體/儲存)監控，效能瓶頸分析，容量規劃",
        "levels": {
          "0": "不了解",
          "1": "了解資源監控基本概念",
          "2": "監控伺服器資源使用率、識別瓶頸、通報擴充需求",
          "3": "建立容量規劃機制、效能調校、虛擬化資源最佳化案例"
        },
        "importance": 3,
        "weight": "6",
        "target_level": "L2A必備(資源監控)|L3B主導(容量規劃+調校)",
        "questions": "Citrix連線壅塞如何判斷是頻寬或主機資源問題？儲存空間不足如何提前預警？"
      },
      {
        "category": "[C]  鼎新ERP系統管理  Digiwin ERP System Management",
        "code": "C1",
        "dimension": "ERP帳號與權限管理",
        "ability": "鼎新ERP使用者帳號、角色權限矩陣維護，依職務(研發/生管/採購/財務)最小權限授權",
        "levels": {
          "0": "未使用ERP",
          "1": "了解ERP權限概念",
          "2": "獨立開通/停用ERP帳號、依職務矩陣設定權限、配合稽核",
          "3": "建立ERP權限矩陣SOP、定期權限複查、職務異動權限即時調整"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(帳號+權限設定)|L3A必備(權限矩陣SOP)|L3B主導(定期複查)",
        "questions": "ERP權限為何要採最小權限？生管與財務權限如何區隔？離職員工ERP權限多久內須停用？"
      },
      {
        "category": "[C]  鼎新ERP系統管理  Digiwin ERP System Management",
        "code": "C2",
        "dimension": "ERP系統維運與備份",
        "ability": "鼎新ERP日常維運、資料庫備份(每日)、效能維護、與原廠維護窗口協調",
        "levels": {
          "0": "不了解",
          "1": "了解ERP維運基本概念",
          "2": "執行ERP每日備份確認、效能監控、異常通報原廠",
          "3": "建立ERP備份還原機制、定期還原測試、零資料遺失維持"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(備份確認+監控)|L3A必備(還原機制)|L4A主導(零資料遺失)",
        "questions": "鼎新ERP資料庫備份頻率與保留週期為何？備份失敗如何處理？ERP系統當機的緊急應變？"
      },
      {
        "category": "[C]  鼎新ERP系統管理  Digiwin ERP System Management",
        "code": "C3",
        "dimension": "ERP模組支援與報表",
        "ability": "ERP模組操作支援(LRP/缺料表/工單/採購/庫存)，報表產出與使用者教育訓練",
        "levels": {
          "0": "不了解ERP模組",
          "1": "了解ERP常用模組功能",
          "2": "支援各部門ERP操作問題、協助產出報表(LRP/缺料表)",
          "3": "建立ERP操作手冊、辦理使用者教育訓練、ERP流程優化建議"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(操作支援+報表)|L3A主導(操作手冊+流程優化)",
        "questions": "LRP與缺料表在鼎新ERP如何產出？使用者反映報表錯誤如何排查？ERP操作問題如何分級處理？"
      },
      {
        "category": "[C]  鼎新ERP系統管理  Digiwin ERP System Management",
        "code": "C4",
        "dimension": "ERP異常處理與原廠協調",
        "ability": "ERP系統異常診斷、原廠技術支援窗口管理、客製需求評估與導入協調",
        "levels": {
          "0": "不了解",
          "1": "了解ERP異常通報流程",
          "2": "診斷ERP一般異常、開立原廠服務單追蹤、客製需求初步評估",
          "3": "主導ERP客製需求導入、原廠SLA管理、ERP升級評估"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(異常診斷+原廠追蹤)|L3A主導(客製導入+SLA管理)",
        "questions": "ERP過帳異常如何初步判斷是資料或系統問題？原廠服務SLA如何在合約規範？ERP客製需求如何評估效益？"
      },
      {
        "category": "[D]  PLM與研發系統管理  PLM & R&D Systems Management",
        "code": "D1",
        "dimension": "PLM系統管理",
        "ability": "PLM系統維運，圖面/BOM/ECN版本管理，研發文件權限與生命週期控管",
        "levels": {
          "0": "未使用PLM",
          "1": "了解PLM基本概念",
          "2": "獨立維護PLM帳號權限、ECN版本流程、圖面文件管理",
          "3": "建立PLM管理SOP、版本控制機制、與研發流程整合優化"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(權限+版本流程)|L3A必備(管理SOP)|L3B主導(流程整合)",
        "questions": "ECN版本如何在PLM控管避免使用舊版圖面？PLM與ERP的BOM如何勾稽？研發圖面權限如何分級？"
      },
      {
        "category": "[D]  PLM與研發系統管理  PLM & R&D Systems Management",
        "code": "D2",
        "dimension": "研發軟體授權管理",
        "ability": "SolidWorks/Altium Designer/LucidShape/MPLAB X等研發軟體授權、安裝、版本與授權數管理",
        "levels": {
          "0": "不了解",
          "1": "了解研發軟體種類",
          "2": "管理軟體授權數、安裝部署、授權到期提醒",
          "3": "建立軟體資產台帳、授權成本最佳化、合規稽核零缺失"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(授權管理+部署)|L3A主導(台帳+成本最佳化)",
        "questions": "SolidWorks浮動授權如何管控避免不足？軟體授權到期如何提前管理？盜版軟體稽查風險如何防範？"
      },
      {
        "category": "[D]  PLM與研發系統管理  PLM & R&D Systems Management",
        "code": "D3",
        "dimension": "研發資料權限與保護",
        "ability": "研發機密資料(Source Code/Gerber/光學模擬/客戶圖面)存取權限與外流防護",
        "levels": {
          "0": "不了解",
          "1": "了解研發資料分級概念",
          "2": "依機密等級設定存取權限、執行下載核准、保存存取紀錄",
          "3": "建立研發資料保護SOP、存取稽核、零機密外洩維持"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(權限分級+核准)|L3A必備(保護SOP)|L4A主導(零外洩+稽核)",
        "questions": "研發A級機密資料如何定義與保護？離職工程師的研發資料如何回收與稽核？客戶圖面如何避免外流？"
      },
      {
        "category": "[E]  雲端與協作平台管理 (釘釘/Google)  Cloud & Collaboration",
        "code": "E1",
        "dimension": "釘釘平台管理",
        "ability": "釘釘組織架構/帳號/群組管理、簽核流程、知識庫、AI表單、考勤與CRM系統維運",
        "levels": {
          "0": "未使用釘釘管理",
          "1": "了解釘釘基本功能",
          "2": "獨立執行組織異動、帳號開停、群組與簽核流程設定",
          "3": "建立釘釘管理SOP、AI表單流程設計、知識庫版本控制"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(組織+帳號+簽核)|L3A必備(管理SOP)|L3B主導(AI表單設計)",
        "questions": "釘釘組織異動的執行時效要求為何？離職員工釘釘帳號如何停用？AI表單與鼎新簽核如何分工？"
      },
      {
        "category": "[E]  雲端與協作平台管理 (釘釘/Google)  Cloud & Collaboration",
        "code": "E2",
        "dimension": "Google Workspace管理",
        "ability": "Google企業版郵件/雲端硬碟/帳號管理，MFA多因子驗證，稽核紀錄與權限檢查",
        "levels": {
          "0": "不了解",
          "1": "了解Google Workspace基本管理",
          "2": "管理Google帳號、啟用MFA、權限與分享設定檢查",
          "3": "建立Google治理政策、稽核日誌檢視、外部分享管控"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(帳號+MFA+權限檢查)|L3A主導(治理政策+稽核)",
        "questions": "公司郵件為何用Google企業版？雲端硬碟外部分享如何管控？MFA如何全面啟用？"
      },
      {
        "category": "[E]  雲端與協作平台管理 (釘釘/Google)  Cloud & Collaboration",
        "code": "E3",
        "dimension": "協作平台稽核與資料治理",
        "ability": "釘釘/Google登入、簽核、文件異動紀錄保存與稽核，雲端資料分級治理",
        "levels": {
          "0": "不了解",
          "1": "了解稽核紀錄概念",
          "2": "保存並檢視平台稽核日誌、異常登入告警處理",
          "3": "建立雲端資料治理政策、定期稽核、敏感資料外流偵測"
        },
        "importance": 3,
        "weight": "6",
        "target_level": "L2A必備(日誌保存+告警)|L3B主導(治理政策+外流偵測)",
        "questions": "釘釘簽核紀錄需保存多久？異常登入如何偵測與處置？雲端機密資料如何分級管控？"
      },
      {
        "category": "[F]  帳號權限與身分管理  Account & Identity Management",
        "code": "F1",
        "dimension": "帳號生命週期管理",
        "ability": "到職/異動/離職帳號全流程管理(AD/ERP/Citrix/釘釘/Google/郵件)，離職當日4小時內完成停用",
        "levels": {
          "0": "不了解",
          "1": "了解帳號申請流程",
          "2": "依流程開通/異動/停用各系統帳號、離職當日完成停用與設備回收",
          "3": "建立帳號生命週期SOP、自動化開停帳評估、零逾期停用"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(開停帳+離職停用)|L3A必備(生命週期SOP)|L4A主導(零逾期+自動化)",
        "questions": "員工離職當日需停用哪些系統？停用時效要求為何？跨系統帳號如何確保不遺漏？"
      },
      {
        "category": "[F]  帳號權限與身分管理  Account & Identity Management",
        "code": "F2",
        "dimension": "最小權限與多因子驗證",
        "ability": "最小權限原則(Least Privilege)落實，MFA多因子驗證導入，特權帳號管控",
        "levels": {
          "0": "不了解",
          "1": "了解最小權限與MFA概念",
          "2": "依職務授予最小權限、為重要系統啟用MFA、禁止共用帳號",
          "3": "建立權限治理機制、MFA全面導入、特權帳號定期稽核"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(最小權限+MFA啟用)|L3A必備(權限治理)|L3B主導(MFA全面+特權稽核)",
        "questions": "為何要禁止共用帳號？哪些系統必須啟用MFA？特權(管理者)帳號如何特別管控？"
      },
      {
        "category": "[F]  帳號權限與身分管理  Account & Identity Management",
        "code": "F3",
        "dimension": "密碼政策與特權管理",
        "ability": "密碼強度政策(至少12碼/大小寫/數字/符號)、更新週期(一般180天/管理者90天)、特權帳號保管",
        "levels": {
          "0": "不了解",
          "1": "了解密碼政策基本要求",
          "2": "落實密碼政策設定、強制更新、特權密碼保管",
          "3": "建立密碼管理SOP、密碼保險庫評估、定期稽核合規"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(政策落實+更新)|L3A主導(SOP+保險庫評估)",
        "questions": "公司密碼強度政策為何？一般與管理者帳號更新週期差異？特權帳號密碼如何安全保管？"
      },
      {
        "category": "[G]  資訊安全管理  Information Security Management",
        "code": "G1",
        "dimension": "端點防護管理",
        "ability": "防毒/EDR端點防護部署、修補更新、硬碟加密，全終端納管",
        "levels": {
          "0": "不了解",
          "1": "了解端點防護基本概念",
          "2": "部署防毒/EDR、執行修補管理、確認硬碟加密啟用",
          "3": "建立端點防護政策、EDR告警處理、修補合規率管理"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(部署+修補)|L3A必備(防護政策)|L4A主導(告警處理+合規率)",
        "questions": "EDR與傳統防毒差異？修補更新如何避免影響生產？終端未納管如何偵測？"
      },
      {
        "category": "[G]  資訊安全管理  Information Security Management",
        "code": "G2",
        "dimension": "弱點管理與滲透測試",
        "ability": "系統弱點掃描、修補追蹤、滲透測試規劃與委外，資安風險評估",
        "levels": {
          "0": "不了解",
          "1": "了解弱點管理概念",
          "2": "執行弱點掃描、修補追蹤、配合滲透測試",
          "3": "建立弱點管理機制、風險評分排序、滲透測試委外管理"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(掃描+修補追蹤)|L3B主導(弱點機制+滲透委外)",
        "questions": "弱點掃描頻率建議為何？高風險弱點如何優先處理？滲透測試委外如何選擇廠商？"
      },
      {
        "category": "[G]  資訊安全管理  Information Security Management",
        "code": "G3",
        "dimension": "USB與資料外洩防護(DLP)",
        "ability": "USB管制(機密區禁用/一般區申請制)、DLP資料外洩防護、存取紀錄保留",
        "levels": {
          "0": "不了解",
          "1": "了解USB管制與DLP概念",
          "2": "設定USB管制政策、執行申請審核、保留存取紀錄",
          "3": "建立DLP政策、敏感資料偵測規則、外洩事件追蹤零容忍"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(USB管制+紀錄)|L3A必備(DLP政策)|L4A主導(外洩零容忍)",
        "questions": "機密區USB為何全面禁用？USB申請的審核流程為何？DLP如何偵測客戶圖面外洩？"
      },
      {
        "category": "[G]  資訊安全管理  Information Security Management",
        "code": "G4",
        "dimension": "上網行為與郵件安全",
        "ability": "上網行為管理(禁P2P/非法下載/未授權遠端工具)、郵件防護(釣魚/惡意附件)、流量監控",
        "levels": {
          "0": "不了解",
          "1": "了解上網與郵件安全基本概念",
          "2": "設定上網行為政策、郵件過濾、流量異常監控",
          "3": "建立資安行為規範、釣魚演練、郵件安全閘道優化"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(行為政策+郵件過濾)|L3B主導(釣魚演練+閘道優化)",
        "questions": "為何禁止P2P與未授權遠端工具？釣魚郵件如何防範與演練？流量異常如何發現內部威脅？"
      },
      {
        "category": "[H]  資料備份與災難復原  Backup & Disaster Recovery",
        "code": "H1",
        "dimension": "備份策略執行",
        "ability": "3-2-1備份原則(3份/2媒體/1異地)落實，ERP/PLM/檔案/郵件每日備份，VM每週備份",
        "levels": {
          "0": "不了解",
          "1": "了解備份基本概念",
          "2": "執行各系統備份排程、每日確認備份成功、異地備份管理",
          "3": "建立備份策略SOP、備份成功率≥99%、異地備援優化"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(備份執行+每日確認)|L3A必備(策略SOP)|L4A主導(成功率≥99%)",
        "questions": "3-2-1備份原則是什麼？備份失敗如何即時發現處理？異地備份如何規劃？"
      },
      {
        "category": "[H]  資料備份與災難復原  Backup & Disaster Recovery",
        "code": "H2",
        "dimension": "災難復原演練(DR)",
        "ability": "每年至少1次DR演練，驗證備份可用性/還原時間(RTO)/復原點(RPO)/系統完整性",
        "levels": {
          "0": "不了解",
          "1": "了解DR與RTO/RPO概念",
          "2": "配合執行DR演練、記錄還原時間、驗證備份可用性",
          "3": "主導DR演練規劃、RTO/RPO達標、演練報告提交與改善"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(演練執行+驗證)|L3A必備(DR規劃)|L4A主導(RTO/RPO達標)",
        "questions": "RTO與RPO的差異？DR演練多久執行一次？演練發現還原失敗如何改善？"
      },
      {
        "category": "[I]  終端設備與資產管理  Endpoint & IT Asset Management",
        "code": "I1",
        "dimension": "終端設備生命週期管理",
        "ability": "PC/NB採購配發、MDM行動裝置納管(遠端抹除/定位)、設備回收與汰換",
        "levels": {
          "0": "不了解",
          "1": "了解設備管理基本流程",
          "2": "執行設備配發/回收、MDM納管、汰換評估",
          "3": "建立設備生命週期SOP、TCO分析、汰換規劃最佳化"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(配發回收+MDM)|L3A主導(生命週期SOP+TCO)",
        "questions": "公司手機如何納入MDM管理？離職設備回收如何確保資料清除？設備汰換如何評估時機？"
      },
      {
        "category": "[I]  終端設備與資產管理  Endpoint & IT Asset Management",
        "code": "I2",
        "dimension": "軟硬體資產盤點與授權合規",
        "ability": "IT資產年度盤點(PC/Server/Switch/Firewall/NAS)、軟體授權(Windows/Office/CAD)合規管理",
        "levels": {
          "0": "不了解",
          "1": "了解資產盤點流程",
          "2": "執行年度IT資產盤點、軟體授權清點、帳物一致確認",
          "3": "建立資產管理系統、授權合規零缺失、呆滯資產處理"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(盤點+授權清點)|L3A主導(資產系統+合規零缺失)",
        "questions": "IT資產盤點如何確保帳物一致？軟體授權不足的稽查風險？資產報廢如何走流程？"
      },
      {
        "category": "[I]  終端設備與資產管理  Endpoint & IT Asset Management",
        "code": "I3",
        "dimension": "Help Desk與報修管理",
        "ability": "使用者報修受理、問題分級、結案追蹤(結案率≥95%)、知識庫建立",
        "levels": {
          "0": "不了解",
          "1": "了解報修流程",
          "2": "受理報修、問題分級處理、結案追蹤、釘釘工單記錄",
          "3": "建立Help Desk SOP、結案率管理、常見問題知識庫建立"
        },
        "importance": 3,
        "weight": "6",
        "target_level": "L2A必備(受理+結案追蹤)|L3B主導(SOP+知識庫)",
        "questions": "報修問題如何分級(P1-P4)？結案率如何統計管理？重複性問題如何用知識庫降低工單？"
      },
      {
        "category": "[J]  監控(CCTV)與門禁(人臉/指紋)管理  Surveillance & Access Control",
        "code": "J1",
        "dimension": "CCTV監控系統管理",
        "ability": "廠區/辦公/機房CCTV管理，錄影保存(一般90天/生產180天/機房180天)，調閱權限管控",
        "levels": {
          "0": "不了解",
          "1": "了解CCTV基本管理",
          "2": "執行CCTV設備半年檢查、錄影與儲存確認、調閱權限管理",
          "3": "建立監控管理SOP、調閱稽核紀錄、零錄影遺失維持"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(設備檢查+錄影確認)|L3A主導(管理SOP+調閱稽核)",
        "questions": "各區域錄影保存期限為何？誰有權調閱CCTV？錄影硬碟空間不足如何處理？"
      },
      {
        "category": "[J]  監控(CCTV)與門禁(人臉/指紋)管理  Surveillance & Access Control",
        "code": "J2",
        "dimension": "生物辨識與門禁管理",
        "ability": "人臉/指紋辨識門禁與考勤系統管理，特殊區域管制，到職/離職權限開停",
        "levels": {
          "0": "不了解",
          "1": "了解門禁辨識系統基本概念",
          "2": "管理門禁權限分級、人臉/指紋資料登錄、離職當日4H內刪除",
          "3": "建立門禁管理SOP、權限定期稽核、與人資/釘釘考勤整合"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(權限管理+離職刪除)|L3A主導(管理SOP+系統整合)",
        "questions": "門禁權限如何分級？離職員工生物辨識資料多久內須刪除？門禁與釘釘考勤如何整合？"
      },
      {
        "category": "[J]  監控(CCTV)與門禁(人臉/指紋)管理  Surveillance & Access Control",
        "code": "J3",
        "dimension": "個資保護與生物特徵管理",
        "ability": "生物特徵以Template儲存(不存原始照片/指紋影像)，個資法合規，資料不提供第三方",
        "levels": {
          "0": "不了解",
          "1": "了解個資法基本要求",
          "2": "確認生物特徵採Template儲存、執行個資保護措施、存取紀錄保留",
          "3": "建立個資保護SOP、個資盤點、稽查合規零缺失"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2B必備(Template儲存+保護措施)|L3A必備(保護SOP)|L4A主導(合規零缺失)",
        "questions": "為何生物特徵不能存原始影像？個資法對門禁資料有何要求？員工要求刪除個資如何處理？"
      },
      {
        "category": "[K]  MES與生產設備聯網管理  MES & Production Equipment Networking",
        "code": "K1",
        "dimension": "生產設備聯網管理",
        "ability": "SMT/SPI/AOI/ICT/FCT/燒機設備聯網建置與維護，生產網段安全管控",
        "levels": {
          "0": "不了解",
          "1": "了解生產設備聯網概念",
          "2": "維護生產設備連線、排除聯網異常、生產網段隔離確認",
          "3": "規劃MES設備聯網架構、OT資安管控、聯網標準化"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(聯網維護+網段隔離)|L3A主導(聯網架構+OT資安)",
        "questions": "SMT設備為何要與辦公網隔離？AOI/SPI資料如何上傳採集？生產設備聯網的資安風險為何？"
      },
      {
        "category": "[K]  MES與生產設備聯網管理  MES & Production Equipment Networking",
        "code": "K2",
        "dimension": "設備資料採集與分析",
        "ability": "設備資料採集(OEE/稼動率/良率/停機率)，生產大屏，資料視覺化分析",
        "levels": {
          "0": "不了解",
          "1": "了解設備資料採集概念",
          "2": "設定資料採集、產出OEE/良率報表、生產大屏維護",
          "3": "建立資料採集標準、分析儀表板、與品質/生管系統整合"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(資料採集+報表)|L3B主導(儀表板+系統整合)",
        "questions": "OEE由哪些指標組成？SMT稼動率資料如何自動採集？生產大屏如何即時呈現良率？"
      },
      {
        "category": "[K]  MES與生產設備聯網管理  MES & Production Equipment Networking",
        "code": "K3",
        "dimension": "電子履歷追溯管理",
        "ability": "工單/SN/BOM版本/程式版本/測試紀錄電子履歷建置，全程可追溯",
        "levels": {
          "0": "不了解",
          "1": "了解履歷追溯概念",
          "2": "建置工單/SN追溯、BOM與程式版本綁定、測試紀錄保存",
          "3": "建立追溯系統SOP、客訴快速追溯、與IATF/AS9100追溯要求整合"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(SN追溯+版本綁定)|L3A必備(追溯SOP)|L3B主導(客訴追溯+標準整合)",
        "questions": "客戶反映批次問題如何用SN快速追溯？程式版本如何與工單綁定？IATF對產品追溯有何要求？"
      },
      {
        "category": "[L]  變更管理  Change Management",
        "code": "L1",
        "dimension": "系統變更管理",
        "ability": "ERP/PLM/MES/網路設備/Server變更全流程(申請/評估/測試/核准/上線/回滾Rollback)",
        "levels": {
          "0": "不了解",
          "1": "了解變更管理基本流程",
          "2": "依流程提出變更申請、影響評估、測試與核准、保留回滾計畫",
          "3": "建立變更管理SOP、變更諮詢會議(CAB)、零變更導致事故"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(變更流程+回滾)|L3A必備(變更SOP)|L4A主導(CAB+零事故)",
        "questions": "重大系統變更前須準備什麼？回滾計畫(Rollback)為何重要？變更為何要在非上班時間執行？"
      },
      {
        "category": "[L]  變更管理  Change Management",
        "code": "L2",
        "dimension": "緊急變更與文件補齊",
        "ability": "重大異常緊急變更處理，事後24小時內補齊文件，緊急變更追蹤",
        "levels": {
          "0": "不了解",
          "1": "了解緊急變更概念",
          "2": "執行緊急變更處置、24H內補齊文件、記錄追蹤",
          "3": "建立緊急變更規範、事後檢討改善、緊急變更比例管控"
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L2A必備(緊急處置+補件)|L3B主導(規範+檢討改善)",
        "questions": "緊急變更與一般變更的差異？緊急變更為何仍需事後補件？如何降低緊急變更比例？"
      },
      {
        "category": "[M]  資安事件與應變管理  Security Incident Response",
        "code": "M1",
        "dimension": "資安事件分類與通報",
        "ability": "資安事件分類(一級重大:勒索/外洩/癱瘓；二級:木馬/盜帳號；三級:異常告警)，30分鐘內通報",
        "levels": {
          "0": "不了解",
          "1": "了解資安事件分類概念",
          "2": "識別資安事件等級、30分鐘內通報、初步隔離處置",
          "3": "建立事件分類與通報SOP、告警分級機制、通報時效零延誤"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(分類識別+通報)|L3A必備(通報SOP)|L4A主導(告警機制+零延誤)",
        "questions": "勒索病毒屬於幾級事件？發現異常多久內須通報？資安事件初步隔離如何做？"
      },
      {
        "category": "[M]  資安事件與應變管理  Security Incident Response",
        "code": "M2",
        "dimension": "資安事件應變與復原",
        "ability": "2小時內啟動應變程序，事件調查、遏制、根除、復原、事後檢討(矯正預防)",
        "levels": {
          "0": "不了解",
          "1": "了解資安應變基本步驟",
          "2": "2H內啟動應變、執行遏制與復原、記錄事件處理",
          "3": "主導資安應變SOP、演練、事後檢討與矯正預防、與8D連結"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2B必備(應變啟動+復原)|L3A必備(應變SOP+演練)|L4A主導(矯正預防+8D)",
        "questions": "資安事件應變的標準步驟為何？2小時內須啟動什麼？事後如何用8D做矯正預防？"
      },
      {
        "category": "[N]  IATF/AS9100 資訊管理配合  Quality System IT Support",
        "code": "N1",
        "dimension": "IATF/AS9100資訊要求",
        "ability": "IATF16949/AS9100D資訊相關要求(7.1.5監測測量資源/7.5文件化資訊/7.1.3 IT基礎設施)配合",
        "levels": {
          "0": "不了解",
          "1": "了解IATF資訊相關基本要求",
          "2": "確保資訊文件符合IATF要求、配合內外部稽查、無Major不符合",
          "3": "主導資訊IATF稽查準備、文件體系建立、零不符合"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(文件符規+配合稽查)|L3A必備(稽查準備)|L4A主導(文件體系+零不符合)",
        "questions": "IATF對IT基礎設施(7.1.3)有何要求？文件化資訊(7.5)如何在系統管控？稽查員常查哪些IT文件？"
      },
      {
        "category": "[N]  IATF/AS9100 資訊管理配合  Quality System IT Support",
        "code": "N2",
        "dimension": "資訊稽核配合與文件體系",
        "ability": "資訊管理程序文件(QPAD07資訊管理程序)維護，內外部稽核配合，資安稽核紀錄完整性",
        "levels": {
          "0": "不了解",
          "1": "了解資訊程序文件要求",
          "2": "維護資訊程序文件、配合稽核提供紀錄、稽核發現改善追蹤",
          "3": "建立資訊文件體系、稽核零缺失、客戶資安稽核主責"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(文件維護+稽核配合)|L3A必備(改善追蹤)|L4A主導(文件體系+客戶稽核)",
        "questions": "QPAD07資訊管理程序涵蓋哪些？資安稽核需準備哪些紀錄？客戶資安稽核如何應對？"
      },
      {
        "category": "[O]  AI工具導入與治理  AI Tools Governance",
        "code": "O1",
        "dimension": "AI工具評估與選型",
        "ability": "Claude/GPT/Gemini等AI工具評估測試，依釘釘生態優先篩選，建立AI工具比較矩陣，監控Anthropic/OpenAI API規格更新",
        "levels": {
          "0": "未接觸AI工具",
          "1": "基礎使用Claude/GPT生成報告草稿，了解主流AI工具功能差異",
          "2": "能獨立評估多款AI工具並建立比較矩陣，提交選型報告，持續追蹤API規格更新",
          "3": "建立公司AI工具評估框架，主導選型決策，與Anthropic/OpenAI廠商窗口建立關係"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A建議(基礎使用+比較)|L3A必備(評估矩陣+選型報告)|L4A主導(框架+廠商管理)",
        "questions": "如何比較Claude vs GPT vs Gemini在騏宏場景適用性？釘釘生態與哪些AI工具相容性最佳？如何系統化追蹤API更新並評估升級時機？"
      },
      {
        "category": "[O]  AI工具導入與治理  AI Tools Governance",
        "code": "O2",
        "dimension": "API Gateway與系統整合",
        "ability": "AI API Gateway管理（Claude Team+架構），n8n工作流程串接釘釘↔Claude↔鼎新ERP↔Google，MCP伺服器建置，Token費用監控",
        "levels": {
          "0": "不了解API概念",
          "1": "了解REST API/Webhook基本概念，知道n8n是自動化工具",
          "2": "能獨立建置n8n工作流程串接釘釘與Claude API，執行費用監控，排除常見API錯誤",
          "3": "主導AI API Gateway架構規劃，建立MCP伺服器，整合鼎新ERP（依API確認後），Token成本最佳化"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2B建議(n8n基礎+API串接)|L3A必備(Gateway管理+費用監控)|L4A主導(MCP架構+ERP整合)",
        "questions": "n8n如何串接釘釘與Claude API？API Gateway費用如何設上限告警？MCP連鼎新ERP前需確認什麼？Token使用率如何優化？"
      },
      {
        "category": "[O]  AI工具導入與治理  AI Tools Governance",
        "code": "O3",
        "dimension": "Prompt工程與AI應用開發",
        "ability": "各部門標準化Prompt庫設計（品管8D/資材缺料/業務RFQ/研發法規/人資JD），Prompt版本管理，釘釘AI表單範本開發與維護",
        "levels": {
          "0": "不了解Prompt Engineering",
          "1": "能撰寫基本Prompt指令，知道角色設定/背景提供的重要性",
          "2": "能為各部門設計並優化標準化Prompt，建立版本控制機制，開發釘釘AI表單範本",
          "3": "建立公司Prompt庫（≥20個標準Prompt），主導Prompt效果評估框架，指導各部門Prompt使用"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A建議(基礎Prompt撰寫)|L3A必備(各部門Prompt設計)|L3B主導(Prompt庫≥20個+版控)",
        "questions": "如何為品管部設計8D報告生成Prompt？Prompt版本如何管理（版次/效果評估）？如何設計釘釘AI表單範本？"
      },
      {
        "category": "[O]  AI工具導入與治理  AI Tools Governance",
        "code": "O4",
        "dimension": "AI教育訓練與推廣(OJT+Off-JT)",
        "ability": "各部門AI工具使用教育訓練（Off-JT），AI第一線技術支援（OJT指導員），AI使用SOP手冊建立（納入文管中心），季度AI成效分享會，AI素養評估追蹤",
        "levels": {
          "0": "無AI訓練規劃能力",
          "1": "了解OJT/Off-JT訓練架構，能協助準備AI教材",
          "2": "獨立規劃並執行全公司AI基礎教育訓練，建立AI使用SOP，統計員工活躍使用率≥60%",
          "3": "建立AI素養評估機制，每季成效分享會，有量化訓練成效案例（使用率/滿意度≥4.0/5.0）"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B建議(訓練協助+SOP)|L3A必備(全公司訓練+SOP建立)|L3B主導(成效評估+分享會)",
        "questions": "如何規劃全公司100人AI分級訓練計畫（Off-JT+OJT）？AI使用SOP如何納入文管控管（IATF §7.5）？員工AI活躍使用率如何統計追蹤？"
      },
      {
        "category": "[O]  AI工具導入與治理  AI Tools Governance",
        "code": "O5",
        "dimension": "資料治理與AI安全合規",
        "ability": "AI使用機密資料管制（客戶圖面/Source Code/報價/成本禁止輸入），資料分級制度，Human-in-the-loop複審機制，IATF16949 §7.5文件化合規，定期AI合規稽核",
        "levels": {
          "0": "不了解AI資料安全概念",
          "1": "了解公開AI的資料外洩風險，知道禁輸入項目清單",
          "2": "制定AI使用規範+資料分級制度，執行Human-in-the-loop複審，配合IATF §7.5管制",
          "3": "建立AI治理政策完整體系，企業版AI閘道評估導入，定期合規稽核並提交報告，零機密外洩"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(禁輸入清單+宣導)|L3A必備(治理政策+分級)|L4A主導(企業版閘道+稽核)",
        "questions": "哪些資料禁止輸入公開AI（列舉5項以上）？Human-in-the-loop如何設計複審流程？AI輸出如何納入IATF §7.5文件管制？企業版AI閘道評估重點為何？"
      },
      {
        "category": "[O]  AI工具導入與治理  AI Tools Governance",
        "code": "O6",
        "dimension": "AI專案管理與ROI追蹤",
        "ability": "AI導入專案時程管理（Phase 1→2→3路線圖），ROI評估框架建立（節省工時/錯誤率降低/速度提升），月度AI推進報告，跨部門AI需求協調排序",
        "levels": {
          "0": "無AI專案管理概念",
          "1": "了解AI導入Phase分階概念，能協助追蹤任務進度",
          "2": "獨立管理AI導入專案里程碑，建立ROI量化指標，每月提交AI推進報告",
          "3": "主導Phase 1→2→3完整路線圖執行，ROI有量化成果（節省≥50hr/月），跨部門需求優先排序決策"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B建議(進度追蹤)|L3A必備(里程碑管理+ROI指標)|L4A主導(Phase路線圖+ROI量化)",
        "questions": "AI導入Phase 1→2→3各階段里程碑為何？ROI如何量化（節省工時/錯誤率）？如何在多部門AI需求中排定優先序？每月AI推進報告包含哪些內容？"
      },
      {
        "category": "[P]  法規與稽核合規  Compliance & Audit",
        "code": "P1",
        "dimension": "個人資料保護法合規",
        "ability": "個資法合規（個資盤點/蒐集告知/當事人權利/委外監督），員工與客戶個資保護；CCTV/門禁生物特徵資料合規",
        "levels": {
          "0": "不了解個資法",
          "1": "了解個資法基本要求（蒐集目的告知/當事人權利）",
          "2": "執行個資盤點、落實保護措施、委外個資監督、門禁生物特徵Template儲存確認",
          "3": "建立個資管理制度、當事人權利回應SOP、定期個資稽查合規零缺失"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L2A必備(個資盤點+保護)|L3A必備(管理制度)|L4A主導(合規零缺失)",
        "questions": "個資法對員工資料蒐集有何規定？委外廠商接觸個資如何監督？當事人要求查詢/刪除如何處理？CCTV錄影資料保存期限為何？"
      },
      {
        "category": "[P]  法規與稽核合規  Compliance & Audit",
        "code": "P2",
        "dimension": "資安成熟度與第三方驗證",
        "ability": "ISO27001/TISAX/NIST CSF資安框架認知，資安成熟度評估與Gap Analysis，導入準備；汽車供應鏈客戶（Whelen/Federal Signal）資安問卷對應",
        "levels": {
          "0": "不了解任何資安框架",
          "1": "了解ISO27001/NIST CSF基本概念，知道TISAX是汽車業資安評估",
          "2": "對照資安框架執行差異分析（Gap Analysis），配合ISO27001/TISAX導入準備，能回應客戶資安問卷",
          "3": "主導資安成熟度提升專案、ISO27001/TISAX導入認證，有認證通過記錄"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2B建議(框架認知+Gap分析)|L3A必備(差異分析+導入準備)|L4A主導(認證專案)",
        "questions": "ISO27001與TISAX差異為何？汽車供應鏈客戶為何要求TISAX？資安成熟度如何評估（工具/方法）？Gap Analysis報告如何撰寫？"
      },
      {
        "category": "[P]  法規與稽核合規  Compliance & Audit",
        "code": "P3",
        "dimension": "客戶資安稽核應對",
        "ability": "美系大廠（Whelen/Federal Signal/Code3/ECCO/SoundOff）客戶資安稽核問卷與現場稽核應對；稽核缺失改善追蹤",
        "levels": {
          "0": "不了解客戶資安稽核",
          "1": "了解客戶資安稽核概念，知道常見問卷項目",
          "2": "回應客戶資安問卷、準備稽核佐證（權限矩陣/備份紀錄/DR報告/政策文件），配合現場稽核",
          "3": "主導客戶資安稽核應對、缺失改善限期達成、稽核通過率管理"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(問卷回應+佐證)|L3A主導(稽核應對+改善)",
        "questions": "客戶資安問卷常查哪些項目（列舉5項）？現場稽核需準備哪些佐證文件？稽核缺失如何限期改善並回覆客戶？"
      },
      {
        "category": "[Q]  KPI績效管理  KPI Performance Management",
        "code": "Q1",
        "dimension": "MIS KPI管理",
        "ability": "核心KPI：系統可用率≥99.5% / 備份成功率≥99% / Help Desk結案率≥95% / 資安教育完成率100% / 資安事件改善率≥95% / AI工具導入部門數≥3（Phase1/季）",
        "levels": {
          "0": "不了解MIS KPI定義",
          "1": "了解MIS KPI定義與計算公式，能手動統計各項",
          "2": "每月正確統計全部MIS KPI、警戒值觸發即時通報、建立KPI看板（釘釘/Excel），含AI KPI整合",
          "3": "KPI趨勢分析、有KPI從警戒值改善至目標的完整案例（含改善措施追蹤）"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L2A必備(月統計+警戒通報)|L3A必備(KPI看板+AI指標)|L3B主導(趨勢分析+改善案例)",
        "questions": "系統可用率如何計算（公式）？備份成功率未達標如何系統性改善？Help Desk結案率如何統計？AI工具KPI（活躍使用率/節省工時）如何加入MIS月報？"
      },
      {
        "category": "[Q]  KPI績效管理  KPI Performance Management",
        "code": "Q2",
        "dimension": "資訊成本與預算管控",
        "ability": "資訊年度預算管控（軟硬體/授權/雲端訂閱/維護費/AI API Token費用），費用月報，差異分析，COST DOWN目標年省≥5%",
        "levels": {
          "0": "不了解資訊費用分類",
          "1": "了解資訊費用各類別，能填寫費用月報表",
          "2": "每月費用月報+差異分析+提出COST DOWN方案，含AI API Token費用監控與上限告警設定",
          "3": "年度預算編制達費用達成率≥95%、COST DOWN年省≥5%量化案例，AI費用最佳化方案"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L2A必備(費用月報+差異分析)|L3A必備(COST DOWN方案+AI費控)|L3B主導(年度預算+≥5%)",
        "questions": "資訊費用如何分類（軟硬體/授權/雲端/維護/AI API）？Claude Team+ Token費用如何設上限告警？COST DOWN方案如何向管理層報告（量化格式）？"
      },
      {
        "category": "[R]  人員培育管理  Personnel Development",
        "code": "R1",
        "dimension": "OJT資訊帶領與技能矩陣",
        "ability": "資訊新人OJT帶領（系統架構/資安規範/AI工具基礎/緊急應變），技能矩陣建立與更新（含AI職能欄位），OJT里程碑追蹤（W1~W8）",
        "levels": {
          "0": "無OJT帶領概念",
          "1": "了解資訊OJT內容架構，知道技能矩陣用途",
          "2": "執行資訊新人OJT帶領（W1~W8里程碑），技能矩陣定期更新（含AI模組），帶訓記錄完整",
          "3": "建立資訊OJT標準計畫（含AI培訓模組）、帶訓成效追蹤、多名學員培育記錄可查"
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L3A必備(OJT執行+矩陣更新+AI模組)|L3B主導(計畫建立+成效追蹤)",
        "questions": "資訊新人OJT前兩週應涵蓋哪些核心（架構/資安/AI工具/應變）？AI工具培訓如何納入OJT計畫？如何確認新人達獨立作業標準（技能矩陣評核方式）？"
      }
    ],
    "salary_structure": [
      {
        "grade": "L1A",
        "title_zh": "初級資訊管理員",
        "title_en": "IT Support Staff I",
        "salary_min": "30000",
        "salary_mid": "31500",
        "salary_max": "33000",
        "requirements": "P40",
        "promotion": "系統架構認識中，需全程OJT帶領，帳號/工單基礎操作",
        "amoeba": "見習者/執行者"
      },
      {
        "grade": "L1B",
        "title_zh": "資訊管理員",
        "title_en": "IT Support Staff II",
        "salary_min": "32000",
        "salary_mid": "34000",
        "salary_max": "36000",
        "requirements": "P45",
        "promotion": "了解系統配置，獨立執行帳號開停、報修受理、設備維護",
        "amoeba": "執行者"
      },
      {
        "grade": "L2A",
        "title_zh": "資深資訊管理員",
        "title_en": "Senior IT Staff",
        "salary_min": "34000",
        "salary_mid": "36500",
        "salary_max": "39000",
        "requirements": "P50",
        "promotion": "獨立MIS日常維運，資安基礎認知，Citrix/ERP/釘釘操作熟練",
        "amoeba": "獨立執行者"
      },
      {
        "grade": "L2B",
        "title_zh": "資深資訊管理員(熟)/組長",
        "title_en": "Senior IT Staff II",
        "salary_min": "36000",
        "salary_mid": "39500",
        "salary_max": "43000",
        "requirements": "P55",
        "promotion": "MIS全面執行，廠商協調，備份/權限管理，KPI統計，可帶新人",
        "amoeba": "獨立執行者/組長"
      },
      {
        "grade": "L3A",
        "title_zh": "助理資訊工程師",
        "title_en": "Asst. IT Engineer",
        "salary_min": "39000",
        "salary_mid": "42500",
        "salary_max": "46000",
        "requirements": "P55~P60",
        "promotion": "KPI追蹤分析，資安政策執行，變更管理，IATF資訊稽查配合",
        "amoeba": "Reserve Amoeba Leader"
      },
      {
        "grade": "L3B",
        "title_zh": "助理資訊工程師(熟)",
        "title_en": "Asst. IT Engineer II",
        "salary_min": "43000",
        "salary_mid": "47000",
        "salary_max": "51000",
        "requirements": "P60~P65",
        "promotion": "年度計畫制定，DLP/DR機制建立，SOP體系建立，自動化導入",
        "amoeba": "Reserve Amoeba Leader"
      },
      {
        "grade": "L4A",
        "title_zh": "資訊工程師",
        "title_en": "IT Engineer",
        "salary_min": "48000",
        "salary_mid": "54000",
        "salary_max": "60000",
        "requirements": "P65~P70",
        "promotion": "稽查應對，資安事件應變主導，防洩密政策主導，COST DOWN改善",
        "amoeba": "L1 Amoeba巴長"
      },
      {
        "grade": "L4B",
        "title_zh": "資訊工程師(資)",
        "title_en": "IT Engineer II",
        "salary_min": "55000",
        "salary_mid": "61500",
        "salary_max": "68000",
        "requirements": "P70~P75",
        "promotion": "資訊年度預算管控，資安零事件，多系統整合，外部稽查主導",
        "amoeba": "L1~L2 Amoeba Leader"
      },
      {
        "grade": "L5A",
        "title_zh": "資深資訊工程師",
        "title_en": "Senior IT Engineer",
        "salary_min": "62000",
        "salary_mid": "69000",
        "salary_max": "76000",
        "requirements": "P75~P80",
        "promotion": "資訊系統化管理，客戶資安稽核主責，ISO27001/TISAX導入，人才培育",
        "amoeba": "L2 Amoeba Leader"
      },
      {
        "grade": "L5B",
        "title_zh": "資深資訊工程師(主)",
        "title_en": "Senior IT Engineer II",
        "salary_min": "68000",
        "salary_mid": "76000",
        "salary_max": "84000",
        "requirements": "P78~P85",
        "promotion": "跨部門資訊策略規劃，資安創新主導，資深人才培育，資訊代表",
        "amoeba": "L2 Amoeba Leader"
      },
      {
        "grade": "L6A",
        "title_zh": "資訊主任/MIS主管",
        "title_en": "Lead IT Engineer",
        "salary_min": "72000",
        "salary_mid": "83500",
        "salary_max": "95000",
        "requirements": "P82~P92",
        "promotion": "MIS部門策略制定，IATF資訊體系代表，零資安重大事件多年維持",
        "amoeba": "L2~L3 Amoeba Leader"
      }
    ]
  },
  {
    "job_name": "韌體工程師",
    "raw_job_name": "韌體工程師",
    "filename": "騏宏科技_韌體(電子.硬體)工程師職能薪資結構表_v3_0.xlsx",
    "competencies": [
      {
        "category": "[A]  核心電路設計  Core Circuit Design",
        "code": "A1",
        "dimension": "核心電路設計",
        "ability": "電路原理圖設計熟練度\n(Altium Designer/KiCad/OrCAD)",
        "levels": {
          "0": "完全不會",
          "1": "基礎操作須指導",
          "2": "獨立完成量產電路圖含元件選型與規格標注",
          "3": "複雜多層板電路+DFM優化建議可審圖指導"
        },
        "importance": 5,
        "weight": "15",
        "target_level": "L3A起必備｜得2分→L4A獨立出圖(缺失率≤5%)｜得3分→L5B審圖+DFM主導",
        "questions": "展示電路設計作品集；說明最複雜電路的電源架構與保護設計"
      },
      {
        "category": "[A]  核心電路設計  Core Circuit Design",
        "code": "A2",
        "dimension": "量產件數",
        "ability": "LED警示燈量產PCBA設計\n(完整主導到量產上市件數)",
        "levels": {
          "0": "無",
          "1": "量產<5件",
          "2": "量產5~20件",
          "3": "量產30件以上"
        },
        "importance": 5,
        "weight": "15",
        "target_level": "L4A≥5件(品質符合)｜L5A≥20件(準時率100%)｜L6A≥30件(主導設計方向)",
        "questions": "確認是否有電路設計責任(非單純Layout)；描述一件完整主導PCBA案例"
      },
      {
        "category": "[A]  核心電路設計  Core Circuit Design",
        "code": "A3★",
        "dimension": "核心電路設計",
        "ability": "多層PCB Layout設計\n(EMC/散熱/高速信號)",
        "levels": {
          "0": "0=無；1=基礎單雙層；2=完整4層+EMC規則量產；3=6層以上+SI/EMC規範建立",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L5A加分(4層EMC量產)｜L6A建議(6層+SI分析)｜得3分→L6B主導PCB設計規範",
        "questions": "說明如何規劃電源/GND分層；走線寬度與阻抗控制如何設定"
      },
      {
        "category": "[A]  核心電路設計  Core Circuit Design",
        "code": "A4★",
        "dimension": "核心電路設計",
        "ability": "類比電路設計\n(運放/比較器/濾波/基準電壓)",
        "levels": {
          "0": "0=無；1=基礎運放電路；2=完整類比信號鏈設計+量產；3=高精度/低雜訊類比設計規範建立",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L4B加分｜L5A建議(信號鏈設計量產)｜得3分→L6A必備(類比設計審查)",
        "questions": "運放輸入偏置電流如何影響高阻抗電路？低通濾波截止頻率如何計算？"
      },
      {
        "category": "[B]  電源管理設計  Power Management Design",
        "code": "B1",
        "dimension": "車載電源電路",
        "ability": "車載電源電路設計\n(DC 10~30V/過壓/反向保護/瞬態ISO 16750)",
        "levels": {
          "0": "無",
          "1": "知道車載電壓範圍概念",
          "2": "獨立設計含過壓/反向/瞬態保護量產",
          "3": "完整車載電源架構+ISO 16750驗證+建立設計規範"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A認知｜L4B至少1種量產｜L5A獨立完整車載電源設計+驗證",
        "questions": "DC 10~30V電源範圍下如何設計反向保護？Load Dump 87V如何保護？"
      },
      {
        "category": "[B]  電源管理設計  Power Management Design",
        "code": "B2",
        "dimension": "DC-DC轉換器",
        "ability": "DC-DC轉換器設計\n(Buck/Boost/SEPIC拓樸選擇與計算)",
        "levels": {
          "0": "無",
          "1": "知道Buck/Boost基本原理",
          "2": "完整DC-DC電路設計+量產含效率量測",
          "3": "多拓樸設計優化+電源雜訊分析+供應商評估主導"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4B認知建議｜L5A必備(DC-DC獨立設計量產,效率≥85%)｜L5B-L6A主導規範",
        "questions": "Buck電路電感值如何計算？CCM vs DCM如何判斷？輸出漣波如何抑制？"
      },
      {
        "category": "[B]  電源管理設計  Power Management Design",
        "code": "B3",
        "dimension": "LDO線性穩壓",
        "ability": "LDO線性穩壓器設計\n(壓降/噪聲/旁路電容選型)",
        "levels": {
          "0": "無",
          "1": "基礎了解LDO選型概念",
          "2": "完整LDO電源網路設計+量產含雜訊量測",
          "3": "LDO電源系統架構設計+建立選型規範"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4B建議｜L5A必備(LDO電源網路獨立設計量產)｜L5B-L6A主導電源架構規範",
        "questions": "LDO壓降電流如何計算熱耗散？輸入輸出電容如何選型避免振盪？"
      },
      {
        "category": "[B]  電源管理設計  Power Management Design",
        "code": "B4",
        "dimension": "LED定電流驅動",
        "ability": "LED定電流驅動電路設計\n(CHROMA 6314量測/PWM調光/多串並聯)",
        "levels": {
          "0": "無",
          "1": "了解定電流驅動概念",
          "2": "完整LED Driver設計+量產含CHROMA量測報告",
          "3": "多通道LED驅動架構+高效率設計+建立量測SOP"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L5A認知建議｜L5B必備(多通道LED驅動量產)｜L6A主導(LED驅動設計規範建立)",
        "questions": "LED定電流精度如何設計？PWM調光頻率如何設定避免閃爍法規問題？"
      },
      {
        "category": "[B]  電源管理設計  Power Management Design",
        "code": "B5",
        "dimension": "電源保護電路",
        "ability": "電源保護電路設計\n(過流/過溫/短路/反接/欠壓)",
        "levels": {
          "0": "無",
          "1": "知道基本保護概念",
          "2": "完整保護電路設計+量產含保護動作測試",
          "3": "保護電路失效分析+DFMEA整合+建立保護設計規範"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4B建議｜L5A必備(完整保護電路量產,品質符合)｜L5B-L6A主導(保護規範建立)",
        "questions": "MOSFET作電子保護開關如何設計？過溫保護門檻如何設定？復位機制？"
      },
      {
        "category": "[B]  電源管理設計  Power Management Design",
        "code": "B6",
        "dimension": "PWM調光控制",
        "ability": "PWM調光控制電路設計\n(占空比/頻率/閃爍模式)",
        "levels": {
          "0": "無",
          "1": "知道PWM調光原理",
          "2": "完整PWM調光電路設計+量產含多閃爍模式",
          "3": "多通道同步PWM+法規閃頻驗證+建立閃爍設計規範"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4B建議｜L5A必備(多模式PWM調光量產)｜L5B-L6A主導(閃爍規範建立)",
        "questions": "ECE R65閃頻75~200次/分如何用PWM實現？多通道同步閃爍如何設計？"
      },
      {
        "category": "[B]  電源管理設計  Power Management Design",
        "code": "B7★",
        "dimension": "高電流設計",
        "ability": "高電流設計\n(>5A車載功率/MOSFET選型/散熱)",
        "levels": {
          "0": "0=無；1=基礎了解功率元件選型；2=完整高電流電路設計+量產含熱分析；3=大電流系統設計規範建立",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L4B加分｜L5A建議(高電流量產)｜L5B主導(大電流系統設計規範)",
        "questions": "MOSFET RDS(on)如何影響效率？PCB大電流走線寬度如何計算？"
      },
      {
        "category": "[B]  電源管理設計  Power Management Design",
        "code": "B8★",
        "dimension": "電源效率優化",
        "ability": "電源效率優化設計\n(效率量測/損耗分析/輕載優化)",
        "levels": {
          "0": "0=無；1=了解效率量測方法；2=完整效率分析+有量產改善案例；3=系統性電源效率優化+建立測試規範",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L4B建議｜L5A加分(效率分析有改善實績)｜L5B主導(效率優化規範建立)",
        "questions": "如何用CHROMA量測電源轉換效率？輕載效率如何優化？"
      },
      {
        "category": "[B]  電源管理設計  Power Management Design",
        "code": "B9★",
        "dimension": "開關電源EMI",
        "ability": "開關電源EMI抑制設計\n(共模濾波/差模濾波/PCB佈局)",
        "levels": {
          "0": "0=無；1=了解開關電源EMI產生機制；2=完整EMI濾波電路設計+預測試通過；3=系統EMI設計規範+有認證案例",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L4B建議｜L5A加分(EMI濾波設計量產)｜L5B-L6A主導(EMI設計規範建立)",
        "questions": "開關電源EMI如何用共模/差模濾波抑制？PCB走線如何降低EMI輻射？"
      },
      {
        "category": "[B]  電源管理設計  Power Management Design",
        "code": "B10★",
        "dimension": "電源可靠度驗證",
        "ability": "電源系統可靠度驗證\n(ISO 16750-2電氣環境驗證)",
        "levels": {
          "0": "0=無；1=了解ISO 16750-2主要測試項目；2=完整電源可靠度驗證+有通過案例；3=電源驗證SOP+失效分析規範建立",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L5A建議(可靠度驗證認知)｜L5B加分(獨立執行+通過)｜L6A主導(驗證SOP建立)",
        "questions": "ISO 16750-2過壓測試16V/60秒與27V/0.1秒差異？負載突降試驗如何設計？"
      },
      {
        "category": "[B]  電源管理設計  Power Management Design",
        "code": "B11",
        "dimension": "直流高壓電路",
        "ability": "直流高壓電路設計\n(DC 60~100V HV LED驅動/高壓MOSFET/絕緣設計)",
        "levels": {
          "0": "無",
          "1": "了解高壓DC電路基本安全設計概念",
          "2": "獨立設計DC 60~100V高壓LED驅動電路+量產含高壓安全測試",
          "3": "完整高壓電源系統架構+絕緣耐壓設計規範+有CE/UL高壓認證案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4B認知(高壓DC電路概念)｜L5A必備(DC 60~100V高壓LED驅動量產)｜L6A主導(高壓設計規範建立)",
        "questions": "DC 60~100V電路爬電距離(Creepage)/電氣間隙(Clearance)如何設計？高壓MOSFET Gate驅動如何選型？絕緣耐壓測試條件？"
      },
      {
        "category": "[B]  電源管理設計  Power Management Design",
        "code": "B12",
        "dimension": "同步/非同步整流",
        "ability": "同步與非同步整流設計\n(Synchronous/Asynchronous Rectification)",
        "levels": {
          "0": "無",
          "1": "了解同步整流 vs 非同步整流原理差異",
          "2": "獨立設計同步整流Buck電路+量產含效率比較量測",
          "3": "多拓樸同步整流優化+有效率顯著提升量產改善案例+建立設計規範"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4B認知建議(同步/非同步整流差異)｜L5A必備(同步整流Buck設計量產,效率≥90%)｜L6A主導規範",
        "questions": "同步整流 vs 肖特基二極管效率差異？如何設計防止穿通(Cross-Conduction)的死區時間？輕載時為何同步整流反而可能降效率？"
      },
      {
        "category": "[B]  電源管理設計  Power Management Design",
        "code": "B13",
        "dimension": "Hi-Power LED散熱設計",
        "ability": "Hi-Power LED線路與PCB散熱設計\n(大功率LED熱阻鏈/鋁基板/散熱銅箔面積)",
        "levels": {
          "0": "無",
          "1": "了解LED熱阻基本概念(Tj→Tc→Ts→Ta)",
          "2": "完整Hi-Power LED散熱電路+PCB鋁基板設計+量產含Tj計算驗證",
          "3": "複雜多模組Hi-Power LED熱仿真+建立PCB散熱設計規範+有FLIR熱像驗證案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4B認知(LED熱阻鏈概念)｜L5A必備(Hi-Power LED散熱電路+Tj驗證量產)｜L6A主導(散熱規範建立)",
        "questions": "Hi-Power LED (>1W) PCB鋁基板散熱銅箔面積如何計算？Tj超過最大結溫時壽命如何加速衰退？如何用FLIR確認Hi-Power LED模組散熱均勻性？"
      },
      {
        "category": "[B]  電源管理設計  Power Management Design",
        "code": "B14",
        "dimension": "LED PCB散熱功率控制",
        "ability": "LED PCB散熱功率設計控制\n(電流×LED電壓×LED數量×散熱體積×軟體ON時間)",
        "levels": {
          "0": "無",
          "1": "了解LED功率計算基本公式(I×Vf×N)",
          "2": "完整LED系統散熱功率預算設計：考量電流/Vf/LED數量/散熱體積/韌體PWM ON時間比例+量產驗證",
          "3": "建立LED功率散熱設計計算工具+有複雜多模式閃爍熱管理設計案例+ORT長期驗證"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A認知(LED功率公式)｜L5A必備(完整功率散熱預算設計+韌體時間控制量產)｜L6A主導(設計規範)",
        "questions": "LED系統總功率P=I×Vf×N，如何利用軟體PWM ON時間比例(Duty Cycle)降低等效熱功率？多閃爍模式如何設計最壞情況(Worst Case)熱分析？"
      },
      {
        "category": "[B]  電源管理設計  Power Management Design",
        "code": "B15",
        "dimension": "定電流定電壓應用",
        "ability": "定電流(CC)/定電壓(CV)應用電路設計\n(LED定電流驅動/蓄電池充電/車載穩壓應用)",
        "levels": {
          "0": "無",
          "1": "了解CC/CV基本原理與應用場景",
          "2": "完整CC/CV複合應用電路設計+量產含CC→CV切換控制",
          "3": "多應用CC/CV電源系統設計+建立CC/CV應用設計規範+有車載充電或LED驅動量產案例"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4B必備(CC/CV應用電路概念)｜L5A必備(完整CC/CV電路設計+CC→CV切換量產)｜L6A主導規範",
        "questions": "LED定電流驅動如何保護開路LED？CC→CV切換點如何設定？蓄電池充電如何實現CC充電+CV浮充？"
      },
      {
        "category": "[C]  韌體開發能力  Firmware Development",
        "code": "C1",
        "dimension": "嵌入式C程式",
        "ability": "嵌入式C程式設計熟練度\n(PIC/STM32/GD32量產韌體)",
        "levels": {
          "0": "完全不會",
          "1": "基礎C語言須指導",
          "2": "獨立完成量產韌體含中斷/Timer/ADC/UART驅動",
          "3": "複雜多功能韌體+程式架構優化+可教導指導"
        },
        "importance": 5,
        "weight": "15",
        "target_level": "L3A起必備｜得2分→L4A獨立量產韌體(Bug率≤5%)｜得3分→L5B韌體架構主導",
        "questions": "說明最複雜的韌體專案；如何管理多個中斷源優先權？"
      },
      {
        "category": "[C]  韌體開發能力  Firmware Development",
        "code": "C2",
        "dimension": "閃爍模式韌體",
        "ability": "Flash Pattern閃爍模式韌體設計\n(SAE/ECE法規閃頻對應/多模式切換)",
        "levels": {
          "0": "無",
          "1": "了解閃爍計時基本概念",
          "2": "獨立開發符合SAE J595/ECE R65閃頻的量產韌體",
          "3": "多機種韌體架構+閃爍Pattern資料庫管理+指導他人"
        },
        "importance": 5,
        "weight": "12",
        "target_level": "L4A認知(閃頻法規)｜L5A必備(完整閃爍韌體量產,準時率100%)｜L6A主導(Pattern庫管理)",
        "questions": "ECE R65要求75~200次/分如何用Timer精確實現？多種閃爍模式如何用查表法管理？"
      },
      {
        "category": "[C]  韌體開發能力  Firmware Development",
        "code": "C3",
        "dimension": "MCU選型設計",
        "ability": "MCU選型與系統架構設計\n(PIC/STM32/GD32周邊資源規劃)",
        "levels": {
          "0": "無",
          "1": "了解MCU基本選型概念",
          "2": "完整MCU選型報告+周邊資源規劃+量產驗證",
          "3": "多平台MCU開發+建立公司MCU選型規範"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A認知(MCU選型概念)｜L5A必備(完整MCU選型+量產驗證)｜L6A主導(MCU平台標準化)",
        "questions": "如何評估MCU的ROM/RAM是否足夠？PIC vs STM32各適用何種場景？"
      },
      {
        "category": "[C]  韌體開發能力  Firmware Development",
        "code": "C4",
        "dimension": "韌體資源管理",
        "ability": "中斷/Timer/PWM/ADC韌體資源管理\n(多工/資源衝突/除錯)",
        "levels": {
          "0": "無",
          "1": "基礎Timer/PWM設定須指導",
          "2": "獨立管理多資源韌體+解決資源衝突問題",
          "3": "複雜多工韌體架構+RTOS應用+建立韌體規範"
        },
        "importance": 4,
        "weight": "8",
        "target_level": "L4B認知建議｜L5A必備(多資源韌體獨立管理)｜L5B-L6A主導(韌體架構規範建立)",
        "questions": "Timer資源不夠時如何用時間片分配？ADC多通道如何設計掃描序列？"
      },
      {
        "category": "[C]  韌體開發能力  Firmware Development",
        "code": "C5",
        "dimension": "美國警用系統整合",
        "ability": "美國警用整合控制系統韌體整合\n(Whelen Core/SoundOff bluePRINT/ECCO-Code3 Matrix/Federal Signal Pathfinder)",
        "levels": {
          "0": "無",
          "1": "了解美國主流警用系統(Whelen/SoundOff/Code3)基本架構",
          "2": "可開發符合Whelen CenCom Core WeCanX/SoundOff bluePRINT CAN Vehicle Data Integration/Code3 Matrix CAT5/Federal Signal Pathfinder OBD+CAN的韌體介面",
          "3": "完整美國警用系統韌體整合量產+建立系統整合設計規範"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A認知(美國警用系統架構)｜L5A必備(至少1種系統韌體整合量產)｜L6A主導(多系統整合+規範建立)",
        "questions": "Whelen Core WeCanX與標準CAN差異？SoundOff bluePRINT Vehicle Data Integration如何讀取車速/檔位觸發警示模式？Code3 Matrix如何透過CAT5網路同步多燈具？"
      },
      {
        "category": "[D]  通訊協議設計  Communication Protocols",
        "code": "D1",
        "dimension": "CAN Bus/J1939",
        "ability": "CAN Bus / SAE J1939通訊協議設計\n(Message定義/Node管理/診斷)",
        "levels": {
          "0": "無",
          "1": "知道CAN Bus基本概念",
          "2": "獨立開發CAN通訊韌體+完整Message矩陣設計量產",
          "3": "J1939 PGN/SPN定義+診斷DTC+建立CAN設計規範"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A認知(CAN基礎)｜L5A必備(獨立CAN韌體+Message矩陣設計量產)｜L6A主導(J1939規範)",
        "questions": "CAN 500Kbps如何設定位元時間？Message優先權如何規劃？CAN ID如何分配？"
      },
      {
        "category": "[D]  通訊協議設計  Communication Protocols",
        "code": "D2",
        "dimension": "LIN Bus",
        "ability": "LIN Bus通訊設計\n(Master/Slave/Schedule Table)",
        "levels": {
          "0": "無",
          "1": "了解LIN Bus與CAN差異",
          "2": "完整LIN Master/Slave設計+量產含Schedule Table",
          "3": "LIN診斷設計+建立LIN通訊設計規範"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知建議｜L5A必備(獨立LIN設計量產)｜L5B-L6A主導(LIN規範建立)",
        "questions": "LIN幀ID如何分配？Schedule Table如何設計？LIN從節點如何回應主節點？"
      },
      {
        "category": "[D]  通訊協議設計  Communication Protocols",
        "code": "D3",
        "dimension": "UART/RS485",
        "ability": "UART/RS232/RS485通訊設計\n(多設備/半雙工/Modbus協議)",
        "levels": {
          "0": "無",
          "1": "基礎UART串口設定",
          "2": "RS485半雙工多設備通訊+Modbus RTU量產設計",
          "3": "多協議通訊架構+自訂協議設計+建立通訊設計規範"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B建議｜L5A必備(RS485/Modbus RTU量產設計)｜L5B-L6A主導(通訊協議規範)",
        "questions": "RS485半雙工如何實現方向控制？Modbus RTU CRC如何計算？"
      },
      {
        "category": "[D]  通訊協議設計  Communication Protocols",
        "code": "D4",
        "dimension": "SPI/I2C",
        "ability": "SPI/I2C介面設計\n(外部IC通訊/時序/多設備)",
        "levels": {
          "0": "無",
          "1": "基礎SPI/I2C設定須指導",
          "2": "獨立設計SPI/I2C外部元件通訊量產(Flash/EEPROM/感測器)",
          "3": "多設備SPI/I2C架構+時序問題分析+建立設計規範"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4B建議｜L5A必備(獨立SPI/I2C外部元件設計量產)｜L5B-L6A主導(介面設計規範)",
        "questions": "SPI Mode 0/1/2/3如何選擇？I2C多設備時如何避免地址衝突？"
      },
      {
        "category": "[D]  通訊協議設計  Communication Protocols",
        "code": "D5★",
        "dimension": "無線通訊",
        "ability": "無線通訊設計\n(BLE/WiFi/Zigbee模組整合)",
        "levels": {
          "0": "0=無；1=基礎了解無線通訊模組；2=完整BLE/WiFi模組韌體整合量產；3=無線通訊系統架構設計+安全加密+規範建立",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L5A加分(BLE模組整合認知)｜L5B建議(完整無線韌體量產)｜L6A主導(無線通訊架構)",
        "questions": "BLE GATT Service/Characteristic如何定義？WiFi如何做OTA韌體更新？"
      },
      {
        "category": "[E]  EMC電磁相容設計  EMC/EMI Design",
        "code": "E1",
        "dimension": "EMI傳導干擾",
        "ability": "EMI傳導干擾設計改善\n(CISPR25 Class3/ECE R10傳導量測)",
        "levels": {
          "0": "無",
          "1": "見過傳導測試知道測試概念",
          "2": "獨立設計EMI濾波電路+預測試通過+改善記錄",
          "3": "傳導EMI系統設計+認證主導+建立改善設計規範"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A認知(傳導EMI概念)｜L5A必備(EMI濾波量產+預測試通過)｜L6A主導(EMI認證)",
        "questions": "CISPR25 Class3傳導限制值？共模扼流圈如何選型？X/Y電容如何選型？"
      },
      {
        "category": "[E]  EMC電磁相容設計  EMC/EMI Design",
        "code": "E2",
        "dimension": "EMI輻射干擾",
        "ability": "EMI輻射干擾設計改善\n(ECE R10輻射量測/PCB走線)",
        "levels": {
          "0": "無",
          "1": "了解輻射EMI產生機制",
          "2": "配合PCB Layout改善輻射EMI+有預測試通過案例",
          "3": "輻射EMI系統設計+機構屏蔽配合+認證主導"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知建議｜L5A必備(配合PCB改善輻射+預測試)｜L5B-L6A主導(輻射EMI規範)",
        "questions": "開關電源輻射EMI如何透過PCB走線改善？接地平面如何影響輻射？"
      },
      {
        "category": "[E]  EMC電磁相容設計  EMC/EMI Design",
        "code": "E3",
        "dimension": "EMS電磁耐受",
        "ability": "EMS電磁耐受性設計\n(ISO 11452 BCI/ISO 7637瞬態)",
        "levels": {
          "0": "無",
          "1": "了解EMS測試項目",
          "2": "配合硬體設計EMS保護電路+有預測試通過案例",
          "3": "EMS系統設計+失效根因分析+建立EMS設計規範"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知建議｜L5A必備(EMS保護設計+預測試通過)｜L6A主導(EMS設計規範建立)",
        "questions": "ISO 11452-4 BCI等級1~5各對應何種車型？ISO 7637-2脈衝1/2/3a如何保護？"
      },
      {
        "category": "[E]  EMC電磁相容設計  EMC/EMI Design",
        "code": "E4",
        "dimension": "ESD防護設計",
        "ability": "ESD靜電放電防護設計\n(ISO 10605/IEC 61000-4-2)",
        "levels": {
          "0": "無",
          "1": "了解ESD防護基本概念",
          "2": "獨立設計ESD保護電路+測試通過有量產案例",
          "3": "ESD防護系統設計+失效分析+建立ESD設計規範"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4B必備(ESD保護電路認知)｜L5A熟練(獨立設計ESD保護+量產)｜L6A主導(ESD規範)",
        "questions": "TVS vs VDR vs ESD保護器各適用場景？接觸放電8kV如何設計保護？"
      },
      {
        "category": "[E]  EMC電磁相容設計  EMC/EMI Design",
        "code": "E5★",
        "dimension": "EMC電磁相容設計",
        "ability": "共模/差模濾波電路設計\n(LC濾波/EMI濾波器選型計算)",
        "levels": {
          "0": "0=無；1=了解共模差模差異；2=完整濾波電路+量產含EMI預量測；3=EMI濾波系統優化+建立規範",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L5A加分(濾波電路認知)｜L5B建議(完整設計量產)｜L6A主導(EMI濾波規範建立)",
        "questions": "共模扼流圈如何抑制共模雜訊？LC濾波截止頻率如何計算？X/Y電容如何選型？"
      },
      {
        "category": "[F]  法規安規驗證  Regulation & Certification",
        "code": "F1",
        "dimension": "ECE R65電氣",
        "ability": "ECE R65警示燈電氣法規\n(光強度/閃頻/顏色座標/輸入功率)",
        "levels": {
          "0": "無",
          "1": "看過規範知道閃頻/光強度基本要求",
          "2": "設計符合ECE R65電氣要求+協助送測可解讀報告",
          "3": "主導ECE R65認證申請+與NB機構溝通+答覆技術問題"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L4A基礎認知｜L5A完整設計符合送測｜L6A主導認證申請(電氣方面代表)",
        "questions": "ECE R65 Class 1閃頻率範圍？輸入電流量測方法？色座標如何確認？"
      },
      {
        "category": "[F]  法規安規驗證  Regulation & Certification",
        "code": "F2",
        "dimension": "SAE J595/J845",
        "ability": "SAE J595/J845美規電氣驗證\n(Steady Burn/Flashing/CA Title 13)",
        "levels": {
          "0": "無",
          "1": "了解SAE與ECE架構差異",
          "2": "設計符合SAE電氣要求+協助送測",
          "3": "主導SAE認證申請熟悉各類別電氣差異"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知建議｜L5A設計符合送測｜L6A主導SAE電氣認證申請",
        "questions": "SAE J595 Steady Burn vs ECE R65閃頻光強度電氣設計差異？"
      },
      {
        "category": "[F]  法規安規驗證  Regulation & Certification",
        "code": "F3",
        "dimension": "ISO 16750",
        "ability": "ISO 16750車載電氣環境驗證\n(過壓/反向/瞬態/負載突降/絕緣電阻)",
        "levels": {
          "0": "無",
          "1": "操作1~2種設備須指導",
          "2": "獨立執行3~5項ISO 16750-2測試+判讀失效模式",
          "3": "制定電氣驗證規範+失效根因分析+改善電路建議"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B建議(3-5項操作)｜L5A必備(獨立操作+失效判讀,準時率100%)｜L6A主導(規範建立)",
        "questions": "過電壓16V/60sec vs 27V/0.1sec測試目的差異？絕緣電阻測試條件？"
      },
      {
        "category": "[F]  法規安規驗證  Regulation & Certification",
        "code": "F4★",
        "dimension": "法規安規驗證",
        "ability": "ISO 26262功能安全\n(ASIL分析/安全目標/電子電氣設計)",
        "levels": {
          "0": "0=無；1=基礎認知ASIL等級；2=參與ASIL分析了解電子電氣安全需求；3=主導功能安全設計可撰寫安全案例",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L6A加分(ASIL認知)｜L6B建議(參與ASIL分析)｜L7主導(功能安全電子設計)",
        "questions": "警示燈電路如何進行ASIL分類？HW DC如何計算？安全機制電路如何設計？"
      },
      {
        "category": "[F]  法規安規驗證  Regulation & Certification",
        "code": "F5",
        "dimension": "NFPA 1901/1907",
        "ability": "NFPA 1900(1901/1917)美國消防車/救護車警示燈法規\n(警告燈/方向燈/抽吸閃爍要求)",
        "levels": {
          "0": "無",
          "1": "看過NFPA1900(1901/1917)知道消防車警示燈基本要求",
          "2": "設計符合NFPA1900(1901/1917)警示燈電氣要求+協助送測",
          "3": "主導NFPA認證申請+與UL/FM認證機構溝通+答覆技術問題"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4A基礎認知(NFPA消防車法規)｜L5A設計符合+協助送測｜L6A主導NFPA認證申請(對外代表)",
        "questions": "NFPA 1901對警示燈光強度要求？NFPA 1907要求的閃光模式？消防車頂燈與救護車燈規格差異？"
      },
      {
        "category": "[F]  法規安規驗證  Regulation & Certification",
        "code": "F6",
        "dimension": "KKK-1822-F",
        "ability": "KKK-1822-F美國救護車標準\n(警告燈/警報/方向指示燈電氣規格)",
        "levels": {
          "0": "無",
          "1": "了解KKK-1822-F救護車標準基本要求",
          "2": "設計符合KKK-1822-F電氣要求+協助送測可解讀報告",
          "3": "主導KKK-1822-F認證+熟悉與NFPA 1917的整合要求"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知建議(KKK-1822-F救護車標準)｜L5A設計符合+協助送測｜L6A主導認證申請",
        "questions": "KKK-1822-F對救護車頂燈亮度要求？與SAE J595差異？NFPA 1917如何取代KKK-1822？"
      },
      {
        "category": "[F]  法規安規驗證  Regulation & Certification",
        "code": "F7",
        "dimension": "ECE R10 EMC",
        "ability": "ECE R10車輛電磁相容性認證\n(傳導/輻射發射/電磁耐受性歐規)",
        "levels": {
          "0": "無",
          "1": "了解ECE R10基本測試項目與CISPR25的關係",
          "2": "設計符合ECE R10電氣要求+協助正式認證測試",
          "3": "主導ECE R10認證申請+與歐洲認證機構(NB)溝通+技術答覆"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4A基礎認知(ECE R10 EMC要求)｜L5A設計符合+協助送測｜L6A主導ECE R10認證申請(歐規代表)",
        "questions": "ECE R10 Class III要求？傳導限制與CISPR25差異？ECE R10耐受性測試項目有哪些？"
      },
      {
        "category": "[G]  技術文件管理  Documentation",
        "code": "G1",
        "dimension": "規範SOP撰寫",
        "ability": "電路設計規範/SOP撰寫\n(WIRD0201電子設計/WIRD0202 PCB Layout)",
        "levels": {
          "0": "無",
          "1": "配合填寫現有表單",
          "2": "獨立撰寫完整電路設計規範文件",
          "3": "建立部門電子設計文件體系+主導文件審查"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L5A建議(獨立撰寫電路規範)｜L6A必備(建立電子設計文件體系)｜L6B主導(跨部門文件)",
        "questions": "請提供曾撰寫的電路設計規範樣本；如何確保電路規範與PCB設計規範一致性？"
      },
      {
        "category": "[G]  技術文件管理  Documentation",
        "code": "G2",
        "dimension": "跨部門技術協調",
        "ability": "跨部門技術協調\n(機構/光學/軟體/品管/生技整合)",
        "levels": {
          "0": "無",
          "1": "被動配合等待指示",
          "2": "主動協調推進跨部門電子設計決策",
          "3": "推動跨部門電子/軟體/機構整合流程有可量化成效"
        },
        "importance": 4,
        "weight": "4",
        "target_level": "L5A建議(主動協調)｜L6A必備(推動整合改善)｜L6B主導(跨組織協作機制建立)",
        "questions": "說明一次跨部門解決電路/機構EMC問題的具體案例（你的角色）"
      },
      {
        "category": "[G]  技術文件管理  Documentation",
        "code": "G3★",
        "dimension": "技術文件管理",
        "ability": "韌體版本控制管理\n(Git/SVN/版本發布/分支策略)",
        "levels": {
          "0": "0=無；1=知道版本控制概念；2=熟練Git操作+分支管理+量產韌體版本控制；3=建立韌體版本管理規範+指導他人",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L4B加分(Git基礎認知)｜L5A建議(熟練Git版本控制)｜L6A主導(韌體版本管理規範建立)",
        "questions": "如何管理量產韌體版本與開發版本分支？韌體Release流程如何設計？如何標記量產Release Tag？"
      },
      {
        "category": "[G]  技術文件管理  Documentation",
        "code": "G4★",
        "dimension": "專利佈局",
        "ability": "專利申請/佈局\n(電路專利/韌體方法專利)",
        "levels": {
          "0": "0=無；1=協助撰寫電路技術交底書；2=主導申請有核准案件；3=策略佈局制定有多件核准+競爭迴避設計",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L6A加分(主導申請有核准)｜L6B建議(策略佈局)｜L7主導(電路/韌體專利佈局策略)",
        "questions": "有無申請過電路或韌體專利？如何撰寫硬體電路的技術交底書？"
      },
      {
        "category": "[H]  量測驗證能力  Test & Measurement",
        "code": "H1",
        "dimension": "示波器量測",
        "ability": "示波器/數位電表精密量測\n(電壓/電流/波形/時序分析)",
        "levels": {
          "0": "無",
          "1": "基礎示波器操作須指導",
          "2": "熟練示波器量測含PWM/CAN波形解碼+電流探頭操作",
          "3": "建立量測SOP+指導品管人員+有複雜波形分析案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L3B必備(示波器基礎操作)｜L4A熟練(PWM/CAN波形量測)｜L5A主導(量測SOP+指導)",
        "questions": "如何用示波器量測CAN差動信號？電流探頭如何設定去消磁？"
      },
      {
        "category": "[H]  量測驗證能力  Test & Measurement",
        "code": "H2",
        "dimension": "CHROMA量測",
        "ability": "CHROMA電子負載/電源供應器量測\n(LED電流/效率/負載特性)",
        "levels": {
          "0": "無",
          "1": "基礎CHROMA操作需指導",
          "2": "熟練操作+LED電氣特性量測+解讀量測報告",
          "3": "建立CHROMA量測SOP+LED電氣驗收標準+指導他人"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B必備(CHROMA基礎量測)｜L5A熟練(LED特性量測+報告撰寫)｜L6A主導(SOP建立)",
        "questions": "CHROMA 6314電流量測模式設定？如何量測LED VF vs IF曲線？"
      },
      {
        "category": "[H]  量測驗證能力  Test & Measurement",
        "code": "H3",
        "dimension": "DVP電氣驗證",
        "ability": "DVT/EVT/PVT電氣驗證計畫制定\n(Design Verification Plan)",
        "levels": {
          "0": "無",
          "1": "了解DVP的作用",
          "2": "獨立制定完整電氣DVP+管理執行進度",
          "3": "建立DVP標準模板+有多件產品DVP完整執行記錄"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L5A必備(獨立制定電氣DVP+追蹤)｜L6A主導(DVP標準模板建立)｜L7主導(DVP策略)",
        "questions": "新警示燈PCBA的DVP需要包含哪些電氣測試項目？如何決定測試優先順序？"
      },
      {
        "category": "[H]  量測驗證能力  Test & Measurement",
        "code": "H4",
        "dimension": "量測驗證能力",
        "ability": "ICT/FCT量產測試治具設計規範\n(測試點設計/測試程式/自動化)",
        "levels": {
          "0": "無",
          "1": "了解ICT/FCT概念",
          "2": "參與FCT治具設計+測試程式撰寫+量產導入",
          "3": "建立FCT測試規範+自動化測試架構+有量產導入案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4B認知(ICT/FCT概念)｜L5A必備(FCT治具+測試程式參與)｜L6A主導(FCT規範建立)",
        "questions": "如何設計PCBA的FCT測試點位置確保良好接觸？量產FCT測試覆蓋率如何定義達到100%？"
      },
      {
        "category": "[H]  量測驗證能力  Test & Measurement",
        "code": "H5★",
        "dimension": "燒錄除錯工具",
        "ability": "PIC燒錄/JTAG/SWD韌體除錯工具\n(MPLAB ICD/J-Link/ST-Link)",
        "levels": {
          "0": "0=無；1=基礎操作燒錄器需指導；2=熟練操作除錯工具+韌體除錯+量產燒錄程式；3=建立量產燒錄SOP+指導他人",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L4A必備(基礎燒錄操作)｜L4B熟練(含JTAG/SWD除錯)｜L5A主導(量產燒錄SOP建立)",
        "questions": "量產PIC燒錄如何設定ID保護？JTAG與SWD除錯介面差異？"
      },
      {
        "category": "[H]  量測驗證能力  Test & Measurement",
        "code": "H6★",
        "dimension": "自動化測試",
        "ability": "自動化測試腳本設計\n(Python/LabVIEW/序列通訊)",
        "levels": {
          "0": "0=無；1=了解自動化測試概念；2=可撰寫Python/LabVIEW自動化測試腳本；3=建立自動化測試平台+有量產導入案例",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L5A加分(自動化測試腳本)｜L5B建議(完整平台建立)｜L6A主導(自動化測試架構)",
        "questions": "如何用Python通過UART與DUT通訊做自動化功能測試？"
      },
      {
        "category": "[H]  量測驗證能力  Test & Measurement",
        "code": "H7",
        "dimension": "電流鉤表量測",
        "ability": "電流鉤表/鉗形電流表量測\n(AC/DC電流/大電流LED回路/漏電流)",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道AC/DC模式",
          "2": "熟練量測LED驅動電流+大電流回路+判讀漏電流異常",
          "3": "建立電流量測SOP+指導品管人員+有電流異常分析案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L3B必備(電流鉤表基礎操作)｜L4A熟練(LED電流+大電流回路量測)｜L5A主導(量測SOP建立)",
        "questions": "如何用電流鉤表量測多串LED的平衡電流？漏電流超標如何追蹤根因？DC電流鉤表如何消磁？"
      },
      {
        "category": "[H]  量測驗證能力  Test & Measurement",
        "code": "H8",
        "dimension": "邏輯分析儀",
        "ability": "邏輯分析儀\n(SPI/I2C/UART/CAN數位協議解碼)",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道數位信號擷取",
          "2": "熟練操作邏輯分析儀解碼SPI/I2C/UART/CAN協議+問題分析",
          "3": "建立複雜多協議同步分析規範+有通訊時序問題排查案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4A認知(邏輯分析儀基礎)｜L5A熟練(多協議解碼+問題分析)｜L5B-L6A主導(分析規範建立)",
        "questions": "如何用邏輯分析儀同步擷取CAN+SPI信號分析韌體時序？I2C ACK缺失如何用分析儀定位？"
      },
      {
        "category": "[H]  量測驗證能力  Test & Measurement",
        "code": "H9★",
        "dimension": "EMC Chambers測試",
        "ability": "EMC正式認證測試室操作與結果判讀\n(CISPR25/ECE R10/ISO 11452 Chamber)",
        "levels": {
          "0": "0=無；1=見過EMC測試室環境知道基本測試流程；2=可參與EMC正式測試+解讀測試報告+配合改善；3=主導EMC測試計畫+與認證機構(NB)溝通+答覆技術問題",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4B加分(EMC測試室基礎概念)｜L5A建議(參與正式測試+報告解讀)｜L6A主導(EMC認證計畫+NB溝通)",
        "questions": "如何安排CISPR25傳導+輻射正式測試時程？測試不合格時如何快速鎖定頻率來源並提出改善方案？"
      },
      {
        "category": "[H]  量測驗證能力  Test & Measurement",
        "code": "H10",
        "dimension": "光學配光測試",
        "ability": "光學配光機測試\n(警示燈配光/發光角度/強度分佈/ECE R65光學驗收)",
        "levels": {
          "0": "從未使用",
          "1": "了解配光機測試原理與ECE R65光強度/角度要求",
          "2": "能操作配光機量測警示燈光強度分佈+判讀配光曲線+確認ECE R65/SAE J595各角度合格",
          "3": "建立警示燈光學驗收SOP+有配光曲線改善設計回饋案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4A認知(配光機原理+ECE R65光強度要求)｜L5A熟練(配光曲線量測+法規判讀)｜L6A主導(光學驗收SOP建立)",
        "questions": "ECE R65 Class 1各量測角度(H/V)的光強度最低要求？如何從配光曲線判斷LED模組是否需要調整光學設計？"
      },
      {
        "category": "[H]  量測驗證能力  Test & Measurement",
        "code": "H11",
        "dimension": "積分球光通量測試",
        "ability": "積分球(Integrating Sphere)光通量測試\n(總光通量/光效率/色座標CIE xy/色溫CCT)",
        "levels": {
          "0": "從未使用",
          "1": "了解積分球測試原理與光通量/色座標概念",
          "2": "能操作積分球量測LED警示燈總光通量/色座標/光效率+判讀是否符合ECE R65色度要求",
          "3": "建立積分球測試SOP+有色座標偏差根因分析+LED選型改善建議案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B必備(積分球基礎操作+色座標概念)｜L5A熟練(全參數量測+ECE色度判讀)｜L6A主導(積分球測試SOP建立)",
        "questions": "ECE R65對警示燈色座標的要求範圍(CIE xy)？積分球量測LED如何設定積分時間？色溫偏移如何回饋LED選型？"
      },
      {
        "category": "[H]  量測驗證能力  Test & Measurement",
        "code": "H12",
        "dimension": "警消頻道干擾測試",
        "ability": "警消用無線電頻道干擾測試\n(VHF 144MHz/UHF 430MHz/P25數位警用無線電)\n含 TWL HORA F-88VU 雙頻對講機驗證",
        "levels": {
          "0": "從未使用",
          "1": "了解警用無線電頻段(VHF 144~148 MHz / UHF 430~450 MHz)基本概念",
          "2": "能執行警示燈對警消無線電的干擾驗證：\n  ・使用 HORA F-88VU 雙頻對講機於警示燈旁接收信號\n  ・確認各閃爍模式下對 AM/FM/VHF/UHF 的干擾程度\n  ・FMRD0252 合車驗證表 EMI測試-AM/FM電台確認項目\n  ・發現干擾時回饋電路 PCB Layout / EMI 濾波改善",
          "3": "建立警消無線電干擾測試 SOP+有改善 EMI 設計並通過驗證案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(警用無線電頻段概念)｜L5A熟練(干擾驗證執行+改善回饋電路)｜L6A主導(警消無線電干擾SOP建立)",
        "questions": "警用P25數位無線電中心頻率？如何用HORA F-88VU驗證警示燈閃爍時VHF/UHF頻道不受干擾？干擾超標時如何改善PCB Layout？"
      },
      {
        "category": "[H]  量測驗證能力  Test & Measurement",
        "code": "H13",
        "dimension": "美國警用系統整合測試",
        "ability": "美國警用整合控制系統現場整合測試\n(Whelen CenCom Core/SoundOff bluePRINT/ECCO-Code3 Matrix/Federal Signal Pathfinder)",
        "levels": {
          "0": "從未使用",
          "1": "了解四大美國警用系統的控制架構與CAN介面基本概念",
          "2": "能執行現場整合測試並驗證：\n  ・Whelen CenCom Core (WeCanX CAN)：燈具ID設定/閃爍模式同步/優先順序設定\n  ・SoundOff bluePRINT (CAN Vehicle Data)：車速/檔位/煞車自動切換模式驗證\n  ・ECCO/Code3 Matrix (CAT5 Network Node)：多燈具網路同步/Z3S主機配對確認\n  ・Federal Signal Pathfinder (OBD+CAN)：場景自動化模式/多設備同步\n  ・合車驗證表 FMRD0252 Control box欄位確認",
          "3": "建立各系統整合測試 SOP+有量產交客戶並通過系統驗收案例"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L5A必備(至少1系統整合測試能力)｜L5B熟練(2+系統+合車驗證SOP)｜L6A主導(四系統整合規範建立)",
        "questions": "Whelen Core的WeCanX如何設定燈具節點ID？SoundOff bluePRINT如何設定車輛靜止時自動進入Intersection模式？Code3 Matrix Z3S如何與CAT5 Node配對？"
      },
      {
        "category": "[H]  量測驗證能力  Test & Measurement",
        "code": "H14",
        "dimension": "合車電氣功能驗證",
        "ability": "警示燈合車(Fit Test)電氣功能驗證\n(FMRD0252合車驗證表/車載電壓/Pattern/同步/特殊功能)",
        "levels": {
          "0": "從未使用",
          "1": "了解FMRD0252合車驗證表結構與各驗證項目",
          "2": "能獨立執行完整合車電氣功能驗證含：\n  ・線材組配：配線位置/端子卡腳/線材長度/線蕊外露確認\n  ・燈座/腳架/外框/螺絲/遮光罩組裝確認\n  ・功能檢測：Warning警示燈/Pattern切換/Synchronize同步\n    (PH1&PH1/PH1&PH2/PH2&PH2)/STOP/DIM/TAKE DOWN/ALLEY LIGHT/Group/雙控/方向燈/小燈/剎車燈\n  ・電器規格(12V/24V)：電壓/電流/功率/Pattern波形PWM量測\n  ・EMI測試：AM/FM電台確認(FMRD0252 Row39)\n  ・目視光學：光型/顏色/亮度/位置/角度/夜間監看\n  ・競爭對手比較：功能特點差異確認",
          "3": "建立合車電氣驗證SOP+有多款車型量產合車記錄"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(FMRD0252合車表結構)｜L5A熟練(獨立執行完整合車電氣驗證)｜L6A主導(合車驗證SOP建立)",
        "questions": "FMRD0252合車驗證表中電器規格量測如何記錄(V/A/W/Pattern波形)?同步測試PH1&PH2如何確認?"
      },
      {
        "category": "[I]  電子零件管理  Electronic Component Mgmt",
        "code": "I1",
        "dimension": "零件規格選型",
        "ability": "電子零件規格書評估與選型\n(IC/LED/被動元件/連接器/MOSFET)",
        "levels": {
          "0": "無",
          "1": "基礎了解零件規格書內容",
          "2": "能獨立評估並選型符合需求的電子零件含AEC-Q認證",
          "3": "建立零件選型規範+有多種零件系統性評估案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4A認知｜L5A必備(獨立選型含AEC-Q評估,品質符合)｜L5B-L6A主導(選型規範建立)",
        "questions": "新LED選型需確認哪些電氣參數？AEC-Q101車規IC vs工業級IC差異？"
      },
      {
        "category": "[I]  電子零件管理  Electronic Component Mgmt",
        "code": "I2",
        "dimension": "替代料評估",
        "ability": "替代料評估與驗證\n(等效性分析/雙向認證/PPAP)",
        "levels": {
          "0": "無",
          "1": "了解替代料評估重要性",
          "2": "主導電子替代料評估+完整電氣驗證測試+客戶認證",
          "3": "建立替代料評估SOP+有多件成功替代案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B認知(替代料概念)｜L5A必備(主導替代料評估+驗證)｜L6A主導(評估SOP體系建立)",
        "questions": "替代IC需要進行哪些等效性電氣測試？如何向客戶提交替代料認證文件？"
      },
      {
        "category": "[I]  電子零件管理  Electronic Component Mgmt",
        "code": "I3",
        "dimension": "RoHS/REACH合規",
        "ability": "RoHS/REACH/無鹵素物料合規\n(零件成分申報/供應商聲明/車規材料)",
        "levels": {
          "0": "無",
          "1": "知道RoHS/REACH基本要求",
          "2": "能主導電子零件合規審查+供應商聲明管理",
          "3": "建立電子料合規管理系統+有完整供應鏈合規追蹤"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4A基礎認知(RoHS/REACH要求)｜L5A必備(主導合規審查)｜L6A主導(合規管理系統建立)",
        "questions": "RoHS 3.0新增哪些限制物質？車規電子料如何追蹤REACH SVHC清單？"
      },
      {
        "category": "[I]  電子零件管理  Electronic Component Mgmt",
        "code": "I4",
        "dimension": "零件可靠度驗證",
        "ability": "電子零件可靠度驗證\n(老化/高低溫/ESD/電氣壽命)",
        "levels": {
          "0": "無",
          "1": "了解電子零件驗證測試項目",
          "2": "能規劃完整電子零件可靠度測試計畫並執行",
          "3": "建立零件驗證標準流程+有零件失效分析能力"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4B認知｜L5A必備(規劃電子零件可靠度測試計畫)｜L5B-L6A主導(驗證標準流程建立)",
        "questions": "新LED驗證需要哪些壽命測試？MOSFET如何驗證車載溫度範圍可靠性？"
      },
      {
        "category": "[I]  電子零件管理  Electronic Component Mgmt",
        "code": "I5",
        "dimension": "零件承認流程",
        "ability": "電子零件承認流程管理\n(IQC進料/首件/小批量/量產承認)",
        "levels": {
          "0": "無",
          "1": "了解電子零件承認流程",
          "2": "能主導完整零件承認流程含IQC電氣標準建立",
          "3": "建立零件承認SOP+供應商初樣電氣評估制度"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4A認知(承認流程)｜L5A必備(主導完整零件承認)｜L5B-L6A主導(承認SOP+IQC標準)",
        "questions": "新IC首次進料承認需要哪些電氣驗證步驟？如何設定IQC電氣抽樣計畫？"
      },
      {
        "category": "[J]  韌體架構設計  Firmware Architecture",
        "code": "J1",
        "dimension": "韌體架構設計",
        "ability": "狀態機設計\n(有限狀態機/狀態轉換圖/韌體實現)",
        "levels": {
          "0": "無",
          "1": "了解狀態機基本概念",
          "2": "獨立設計並實現複雜產品功能的有限狀態機",
          "3": "建立狀態機設計規範+有多種複雜狀態機量產案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B建議｜L5A必備(獨立設計FSM量產)｜L5B-L6A主導(狀態機設計規範建立)",
        "questions": "警示燈多模式切換如何用狀態機實現？如何避免狀態轉換死鎖？狀態機如何與CAN命令整合？"
      },
      {
        "category": "[J]  韌體架構設計  Firmware Architecture",
        "code": "J2",
        "dimension": "RTOS應用",
        "ability": "RTOS即時作業系統應用\n(FreeRTOS/CMSIS-RTOS任務管理)",
        "levels": {
          "0": "無",
          "1": "了解RTOS基本概念",
          "2": "完整FreeRTOS任務設計+優先權分配+量產應用",
          "3": "複雜RTOS系統設計+死鎖分析+建立RTOS使用規範"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L5A建議(FreeRTOS基礎認知)｜L5B必備(完整RTOS系統量產)｜L6A主導(RTOS規範建立)",
        "questions": "FreeRTOS任務優先權如何分配？如何避免任務飢餓？Mutex vs Semaphore差異？"
      },
      {
        "category": "[J]  韌體架構設計  Firmware Architecture",
        "code": "J3",
        "dimension": "記憶體管理",
        "ability": "韌體記憶體管理與優化\n(Flash/RAM最佳化/堆疊分析)",
        "levels": {
          "0": "無",
          "1": "了解MCU記憶體資源概念",
          "2": "完整記憶體規劃+堆疊分析+ROM/RAM優化有量產案例",
          "3": "建立韌體記憶體管理規範+有複雜資源優化成功案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4B認知｜L5A必備(記憶體規劃+堆疊分析量產)｜L6A主導(記憶體管理規範建立)",
        "questions": "如何分析MCU堆疊使用量？Flash如何存放多組閃爍Pattern參數？"
      },
      {
        "category": "[J]  韌體架構設計  Firmware Architecture",
        "code": "J4★",
        "dimension": "Bootloader/OTA",
        "ability": "Bootloader/OTA韌體更新機制\n(量產燒錄/現場升級)",
        "levels": {
          "0": "0=無；1=了解Bootloader概念；2=獨立開發Bootloader+現場OTA升級功能量產；3=安全韌體更新機制+防偽驗證+規範建立",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L5A加分(Bootloader概念)｜L5B建議(獨立開發量產)｜L6A主導(安全OTA機制建立)",
        "questions": "如何設計支援CAN或UART協議的IAP Bootloader？如何確保OTA更新的完整性？"
      },
      {
        "category": "[J]  韌體架構設計  Firmware Architecture",
        "code": "J5★",
        "dimension": "韌體安全設計",
        "ability": "韌體安全設計\n(Watchdog/故障偵測/防止死鎖/Flash保護)",
        "levels": {
          "0": "0=無；1=了解Watchdog基本概念；2=完整韌體安全機制設計+量產含Watchdog驗證；3=韌體安全設計規範+ISO 26262電子安全整合",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L5A加分(韌體安全機制認知)｜L5B建議(完整安全韌體量產)｜L6A主導(韌體安全規範)",
        "questions": "外部Watchdog vs 內部IWDT如何選擇？Flash代碼保護如何設定防止逆向工程？"
      },
      {
        "category": "[K]  新供應商找尋評估  Supplier Development",
        "code": "K1",
        "dimension": "供應商搜尋方法",
        "ability": "電子零件/模組供應商搜尋與篩選\n(IC廠/模組廠/原廠/代理商評估)",
        "levels": {
          "0": "無",
          "1": "了解搜尋電子零件供應商的基本方法",
          "2": "能獨立搜尋+初步篩選+規劃稽核計畫",
          "3": "建立電子零件供應商開發SOP+有多家成功導入案例"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L4A認知(搜尋方法)｜L5A必備(獨立搜尋+稽核計畫)｜L5B-L6A主導(開發SOP建立)",
        "questions": "如何找到符合車規AEC-Q認證的LED供應商？原廠 vs 代理商如何評估？"
      },
      {
        "category": "[K]  新供應商找尋評估  Supplier Development",
        "code": "K2",
        "dimension": "供應商稽核",
        "ability": "電子零件供應商實地稽核\n(品質系統/產能/ESD管理/測試能力)",
        "levels": {
          "0": "無",
          "1": "了解稽核項目",
          "2": "能獨立執行電子零件供應商稽核並出具稽核報告",
          "3": "建立稽核SOP+有稽核不合格改善追蹤案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B認知(稽核項目)｜L5A必備(獨立執行稽核+報告)｜L6A主導(稽核SOP+改善追蹤體系)",
        "questions": "稽核LED晶片供應商時關注哪些製程能力指標？如何評估ESD管理水準？"
      },
      {
        "category": "[K]  新供應商找尋評估  Supplier Development",
        "code": "K3",
        "dimension": "新供應商找尋評估",
        "ability": "電子零件供應商製程能力評估\n(Cpk/AQL/電氣特性一致性)",
        "levels": {
          "0": "無",
          "1": "了解Cpk概念",
          "2": "能要求供應商提交電氣製程能力報告並評估",
          "3": "建立電子零件製程能力評估標準+有多家評估案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B認知(Cpk概念)｜L5A必備(評估電子零件製程能力報告)｜L6A主導(製程能力評估標準建立)",
        "questions": "要求LED供應商提交哪些電氣特性製程能力數據？Cpk門檻如何設定？電氣Cpk不足時如何改善？"
      },
      {
        "category": "[K]  新供應商找尋評估  Supplier Development",
        "code": "K4",
        "dimension": "樣品確認流程",
        "ability": "電子零件樣品確認流程\n(初樣電氣驗證/小批量/首件/PPAP)",
        "levels": {
          "0": "無",
          "1": "了解樣品確認流程步驟",
          "2": "能主導完整電子零件樣品確認流程",
          "3": "建立樣品確認SOP+有多家供應商成功導入記錄"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B認知(樣品確認步驟)｜L5A必備(主導完整樣品確認)｜L6A主導(SOP+多家導入記錄)",
        "questions": "新LED首次樣品確認清單需要包含哪些電氣測試？如何判斷可進入小批量？"
      },
      {
        "category": "[K]  新供應商找尋評估  Supplier Development",
        "code": "K5",
        "dimension": "供應商分類管理",
        "ability": "合格供應商分類與管理\n(A/B/C分級/定期電氣評鑑/改善追蹤)",
        "levels": {
          "0": "無",
          "1": "了解供應商分類管理概念",
          "2": "能執行電子零件供應商定期評鑑並追蹤改善",
          "3": "建立供應商管理制度+有供應商升降級案例"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L5A必備(ABC分級電氣評鑑)｜L6A主導(供應商管理制度建立)｜L7主導(供應鏈策略)",
        "questions": "電子零件供應商如何分ABC等級？評鑑項目包含哪些電氣維度？"
      },
      {
        "category": "[K]  新供應商找尋評估  Supplier Development",
        "code": "K6",
        "dimension": "高風險供應商",
        "ability": "高風險電子零件供應商管理\n(IATF16949 APQP要求/風險緩解)",
        "levels": {
          "0": "無",
          "1": "了解高風險供應商定義",
          "2": "能識別高風險電子供應商並制定緩解計畫",
          "3": "建立高風險供應商管理程序+有完整風險緩解案例"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L5A必備(高風險識別)｜L6A主導(緩解計畫制定,IATF16949要求)｜L7主導(供應鏈風險)",
        "questions": "IATF16949如何定義高風險供應商？唯一供應商如何管理斷料風險？"
      },
      {
        "category": "[L]  成本計算能力  Cost Engineering",
        "code": "L1",
        "dimension": "PCBA物料成本",
        "ability": "PCBA物料成本估算\n(BOM展算/電子料單價/批量折扣)",
        "levels": {
          "0": "無",
          "1": "了解PCBA物料成本構成",
          "2": "能獨立估算完整PCBA物料成本含損耗率",
          "3": "建立PCBA物料成本資料庫+有系統性詢價比價能力"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4A認知(PCBA物料成本構成)｜L5A必備(獨立估算含損耗率)｜L6A主導(成本資料庫建立)",
        "questions": "LED警示燈PCBA如何估算物料成本？ICT/FCT測試費如何計入BOM？"
      },
      {
        "category": "[L]  成本計算能力  Cost Engineering",
        "code": "L2",
        "dimension": "PCB製造成本",
        "ability": "PCB製造成本計算\n(層數/面積/特殊工藝/表面處理)",
        "levels": {
          "0": "無",
          "1": "了解PCB製造成本構成",
          "2": "能分解PCB廠報價結構並評估合理性",
          "3": "建立PCB成本標準資料庫+有議價成功案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4A認知(PCB成本構成)｜L5A必備(分解PCB報價評估)｜L6A主導(PCB成本標準資料庫)",
        "questions": "4層板 vs 2層板成本差異？HASL vs ENIG表面處理成本差異？"
      },
      {
        "category": "[L]  成本計算能力  Cost Engineering",
        "code": "L3",
        "dimension": "SMT加工成本",
        "ability": "SMT加工/外包工序成本計算\n(貼片費/焊接費/ICT/FCT測試費)",
        "levels": {
          "0": "無",
          "1": "了解SMT加工成本構成",
          "2": "能分解SMT廠報價結構+評估合理性",
          "3": "建立SMT加工成本標準工時資料庫+有議價成功案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4A認知(SMT加工成本)｜L5A必備(分解SMT報價結構評估)｜L6A主導(加工成本資料庫)",
        "questions": "SMT貼片費如何計算（點數/複雜度）？DIP插件費如何估算？"
      },
      {
        "category": "[L]  成本計算能力  Cost Engineering",
        "code": "L4",
        "dimension": "成本計算能力",
        "ability": "電子料採購成本分析\n(長約/現貨/匯率/市場行情)",
        "levels": {
          "0": "無",
          "1": "了解電子料採購成本影響因素",
          "2": "能估算關鍵電子料成本合理範圍並進行談判",
          "3": "建立電子料成本資料庫+有採購成本降低案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B認知(電子料採購成本)｜L5A必備(估算合理範圍+談判)｜L6A主導(電子料成本資料庫建立)",
        "questions": "IC缺料時如何判斷現貨價格合理性？長交期IC如何規劃備料？匯率波動如何影響採購策略？"
      },
      {
        "category": "[L]  成本計算能力  Cost Engineering",
        "code": "L5",
        "dimension": "開發成本預算",
        "ability": "電子產品開發成本預算管理\n(電路板打樣/測試費/認證費/樣品費)",
        "levels": {
          "0": "無",
          "1": "了解電子開發成本構成項目",
          "2": "能制定完整電子開發成本預算並追蹤執行",
          "3": "建立開發成本管理機制+有多件電子產品開發成本控制案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L5A必備(制定完整電子開發成本預算)｜L6A主導(開發成本管理機制建立)｜L7策略規劃",
        "questions": "LED警示燈PCB打樣+SMT打樣預算如何估算？EMC認證費如何預算？"
      },
      {
        "category": "[L]  成本計算能力  Cost Engineering",
        "code": "L6",
        "dimension": "BOM Cost計算",
        "ability": "BOM Cost計算\n(完整BOM展開/物料+加工+管銷/目標成本)",
        "levels": {
          "0": "無",
          "1": "了解BOM成本計算基本概念",
          "2": "能獨立建立完整PCBA BOM Cost表格含各層級物料與加工",
          "3": "建立BOM Cost標準模板+有多件PCBA成本分析案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(BOM成本概念)｜L5A必備(獨立建立完整BOM Cost,品質符合)｜L6A主導(模板建立)",
        "questions": "如何建立包含PCBA+電線+連接器的完整BOM Cost？如何拆解達成目標成本？"
      },
      {
        "category": "[L]  成本計算能力  Cost Engineering",
        "code": "L7★",
        "dimension": "Cost Down分析",
        "ability": "Cost Down機會分析\n(替代料/設計簡化/製程改善)",
        "levels": {
          "0": "0=無；1=了解電子Cost Down方法；2=能主導電子替代料/設計簡化找出Cost Down機會；3=建立系統性Cost Down機制+有具體降本成果",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L5A建議(Cost Down方法了解)｜L5B主導(替代料/設計簡化有實績)｜L6A主導(系統性機制)",
        "questions": "說明一件你主導的電子料Cost Down案例：找到什麼機會？最終降低多少？"
      },
      {
        "category": "[M]  電氣試作開發驗證  Prototype & Electrical Verification",
        "code": "M1",
        "dimension": "電路手工樣品",
        "ability": "電路手工樣品/Demo板製作管理\n(飛線/手工焊接/快速驗證)",
        "levels": {
          "0": "無",
          "1": "了解Demo板製作方法",
          "2": "能獨立規劃Demo板製作+電氣功能快速驗證",
          "3": "建立Demo板評估SOP+有多種電路快速驗證案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4A認知(Demo板製作方法)｜L5A必備(獨立規劃Demo板+驗證)｜L6A主導(驗證SOP建立)",
        "questions": "新電路設計如何快速製作Demo板驗證？手工焊接QFN/BGA有哪些技巧？"
      },
      {
        "category": "[M]  電氣試作開發驗證  Prototype & Electrical Verification",
        "code": "M2",
        "dimension": "PCBA電氣驗證",
        "ability": "PCBA電氣功能驗證\n(電壓/電流/波形量測/功能確認)",
        "levels": {
          "0": "無",
          "1": "了解PCBA電氣驗證流程",
          "2": "能主導PCBA電氣驗證計畫+量測+問題分析",
          "3": "建立PCBA電氣驗證SOP+有從問題到設計改善的完整案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(PCBA電氣驗證流程)｜L5A必備(主導PCBA電氣驗證+量測)｜L6A主導(驗證SOP)",
        "questions": "首次PCBA上電前如何確認？發現電路異常時如何系統性分析根因？"
      },
      {
        "category": "[M]  電氣試作開發驗證  Prototype & Electrical Verification",
        "code": "M3",
        "dimension": "電氣試作開發驗證",
        "ability": "EMC預符合性測試規劃\n(Pre-compliance傳導/輻射初步驗證)",
        "levels": {
          "0": "無",
          "1": "了解EMC預測試概念",
          "2": "能配合規劃EMC預測試+問題改善+有預測試通過案例",
          "3": "建立EMC預測試規劃SOP+有從預測試到正式認證完整案例"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L5A建議(EMC預測試配合)｜L5B必備(主導預測試+改善)｜L6A主導(EMC認證SOP建立)",
        "questions": "如何規劃PCBA的EMC預符合性測試？發現傳導超標時如何系統性改善？"
      },
      {
        "category": "[M]  電氣試作開發驗證  Prototype & Electrical Verification",
        "code": "M4",
        "dimension": "DVP電氣計畫",
        "ability": "電氣DVP制定\n(Design Verification Plan/測試矩陣)",
        "levels": {
          "0": "無",
          "1": "了解DVP文件的作用",
          "2": "能獨立制定完整電氣DVP+管理執行進度",
          "3": "建立DVP標準模板+有多件產品DVP完整執行記錄"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L5A必備(獨立制定電氣DVP+追蹤)｜L6A主導(DVP標準模板建立)｜L7主導(DVP策略規劃)",
        "questions": "警示燈PCBA的DVP需要包含哪些電氣測試？如何決定測試優先順序？"
      },
      {
        "category": "[M]  電氣試作開發驗證  Prototype & Electrical Verification",
        "code": "M5",
        "dimension": "電路失效分析",
        "ability": "電路試作失效分析\n(8D/5Why/根因分析/電路追蹤)",
        "levels": {
          "0": "無",
          "1": "了解失效分析工具",
          "2": "能獨立應用8D/5Why進行電路失效分析",
          "3": "建立電路失效分析SOP+有多件複雜電路失效根因找出案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B認知(8D/5Why工具)｜L5A必備(獨立應用8D電路失效分析)｜L6A主導(案例庫建立)",
        "questions": "描述一件你主導的PCBA電路失效分析案例：如何用5Why找到根本原因？"
      },
      {
        "category": "[M]  電氣試作開發驗證  Prototype & Electrical Verification",
        "code": "M6",
        "dimension": "可靠度加速驗證",
        "ability": "可靠度加速老化驗證\n(HALT/HASS概念/PCBA壽命預測)",
        "levels": {
          "0": "無",
          "1": "了解可靠度驗證測試目的",
          "2": "能規劃完整PCBA可靠度測試計畫並執行",
          "3": "建立電子可靠度驗證標準流程+有壽命分析能力"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L4B認知｜L5A必備(規劃電子可靠度測試計畫)｜L5B-L6A主導(驗證標準流程建立)",
        "questions": "如何用HALT找出PCBA的設計弱點？LED壽命L70如何預測？"
      },
      {
        "category": "[M]  電氣試作開發驗證  Prototype & Electrical Verification",
        "code": "M7★",
        "dimension": "電路模擬驗證",
        "ability": "電路模擬驗證\n(SPICE/LTspice電源/類比電路模擬)",
        "levels": {
          "0": "0=無；1=了解電路模擬軟體基本操作；2=可操作LTspice模擬電源/類比電路並與實測比對；3=建立電路模擬驗證SOP+有設計優化模擬案例",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L5A加分(LTspice基礎模擬)｜L5B建議(完整電源模擬+實測比對)｜L6A主導(模擬規範)",
        "questions": "如何用LTspice模擬DC-DC轉換器的瞬態響應？模擬結果與實測差異如何分析？"
      },
      {
        "category": "[N]  產品試作試產量產  Pilot & Mass Production",
        "code": "N1",
        "dimension": "試作管理",
        "ability": "PCBA試作(Proto/EVT/DVT)管理\n(計畫制定/問題追蹤/里程碑)",
        "levels": {
          "0": "無",
          "1": "了解電子試作階段管理概念",
          "2": "能主導完整PCBA試作流程+問題追蹤系統管理",
          "3": "建立電子試作管理SOP+有多件PCBA試作到量產成功案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(電子試作階段概念)｜L5A必備(主導完整試作+問題追蹤)｜L6A主導(SOP建立)",
        "questions": "EVT/DVT/PVT各階段電子驗證目標有何不同？如何判斷PCBA可進入下一階段？"
      },
      {
        "category": "[N]  產品試作試產量產  Pilot & Mass Production",
        "code": "N2",
        "dimension": "SMT製程整合",
        "ability": "SMT製程理解與PCBA整合\n(回焊爐/錫膏/AOI/波峰焊)",
        "levels": {
          "0": "無",
          "1": "了解SMT基本流程",
          "2": "能配合SMT製程設計PCBA並解決製程問題",
          "3": "建立PCBA設計SMT可製造性規範+有DFM改善記錄"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L5A必備(配合SMT製程PCBA設計+問題解決)｜L6A主導(PCBA DFM規範建立)｜L7策略",
        "questions": "回焊爐溫度曲線如何影響焊點品質？BGA下方元件如何設計SMT可製造性？"
      },
      {
        "category": "[N]  產品試作試產量產  Pilot & Mass Production",
        "code": "N3",
        "dimension": "量產燒錄規範",
        "ability": "量產燒錄/測試規範制定\n(PIC燒錄SOP/FCT測試/燒錄防錯)",
        "levels": {
          "0": "無",
          "1": "了解量產燒錄規範所需文件",
          "2": "能主導量產燒錄SOP+FCT測試規範+錯誤防止機制",
          "3": "建立完整量產電子測試規範+有多件成功量產移轉案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L5A必備(主導量產燒錄SOP+FCT規範)｜L6A主導(SOP建立,方向設定)｜L7多產品線整合",
        "questions": "量產PIC燒錄防錯機制如何設計？FCT測試覆蓋率如何確認？"
      },
      {
        "category": "[N]  產品試作試產量產  Pilot & Mass Production",
        "code": "N4",
        "dimension": "量產移轉",
        "ability": "量產移轉(MP Transfer)管理\n(控制計畫/電氣SOP/人員培訓)",
        "levels": {
          "0": "無",
          "1": "了解電子量產移轉所需文件",
          "2": "能主導電子量產移轉含完整文件+人員訓練+電氣驗收",
          "3": "建立量產移轉SOP+有多件電子產品順利移轉量產案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L5A必備(主導量產移轉含文件訓練)｜L6A主導(量產移轉SOP建立)｜L7多產品線整合",
        "questions": "電子量產移轉檢查清單需要包含哪些項目？如何確認生產線燒錄人員已充分訓練？"
      },
      {
        "category": "[N]  產品試作試產量產  Pilot & Mass Production",
        "code": "N5",
        "dimension": "產品試作試產量產",
        "ability": "量產電氣問題快速處理\n(不良分析/緊急遏制/客訴電氣回覆)",
        "levels": {
          "0": "無",
          "1": "了解量產電氣問題處理流程",
          "2": "能主導量產電氣問題分析+緊急遏制+改善措施",
          "3": "建立電氣快速響應SOP+有複雜客訴電氣成功解決案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L5A必備(主導電氣問題分析+緊急遏制)｜L6A主導(快速響應SOP建立)｜L7策略",
        "questions": "量產出現批次電氣不良時如何實施緊急遏制？如何在48小時內給客戶電氣問題初步回覆？"
      },
      {
        "category": "[N]  產品試作試產量產  Pilot & Mass Production",
        "code": "N6",
        "dimension": "電氣良率管理",
        "ability": "電氣量產良率管理\n(FPY/SMT良率/ICT/FCT良率分析)",
        "levels": {
          "0": "無",
          "1": "了解電氣良率計算與追蹤方法",
          "2": "能分析電氣良率問題並主導改善",
          "3": "建立電氣良率改善機制+有量化的良率提升成果"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4B認知(FPY計算)｜L5A必備(分析電氣良率問題主導改善)｜L6A主導(良率改善機制建立)",
        "questions": "電氣FPY計算方法？SMT AOI不良率與FCT直通率如何關聯分析？"
      },
      {
        "category": "[O]  產品裝車/合車測試驗證  Vehicle Integration & Fit Test  (FMRD0252)",
        "code": "O1",
        "dimension": "合車驗證計畫制定",
        "ability": "合車(Fit Test)驗證計畫制定\n(FMRD0252合車驗證表/車型選定/配件確認)",
        "levels": {
          "0": "無",
          "1": "了解FMRD0252合車驗證表結構與合車流程步驟",
          "2": "能獨立制定合車驗證計畫含：\n  ・車型選定(Ford KUGA/MG HS/Hyundai STARIA等)\n  ・成品品號/合車人員/車載電壓/安裝位置確認\n  ・配件包/腳架/Control box型號確認\n  ・安裝照片拍攝計畫與驗收標準設定",
          "3": "建立合車驗證計畫SOP+有多車款合車計畫記錄"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B必備(FMRD0252合車表結構認知)｜L5A熟練(獨立制定多車款合車驗證計畫)｜L6A主導(合車計畫SOP建立)",
        "questions": "新機種合車驗證計畫需要選哪些代表車型？FMRD0252中Control box欄位如何選擇Code3 Matrix vs Whelen Core？"
      },
      {
        "category": "[O]  產品裝車/合車測試驗證  Vehicle Integration & Fit Test  (FMRD0252)",
        "code": "O2",
        "dimension": "機構裝車/安裝驗證",
        "ability": "機構裝車/安裝組配驗證\n(線材/燈座/腳架/外框/螺絲/遮光罩)",
        "levels": {
          "0": "無",
          "1": "了解燈具安裝組配的檢驗重點",
          "2": "能執行完整機構裝車驗證含：\n  ・線材組配：配線位置正確/端子卡腳定位/線材長度/線蕊不可外露\n  ・燈座與腳架/底座結合：鎖附後手壓確認不晃動/鬆緊度/拆裝順暢\n  ・外框組配：不變形彎曲/不可輕易脫落\n  ・螺絲鎖付：不歪斜/浮起/滑牙/脫落/合成品\n  ・遮光罩結合：不鬆動脫落",
          "3": "建立機構裝車驗證SOP+有改善安裝設計的案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4A認知(機構裝車檢驗項目)｜L5A熟練(獨立執行完整機構裝車驗證+問題追蹤)｜L6A主導(裝車驗證SOP建立)",
        "questions": "合車時發現燈具晃動如何判斷是燈座設計問題還是腳架問題？螺絲浮起如何確認扭力規格是否正確？"
      },
      {
        "category": "[O]  產品裝車/合車測試驗證  Vehicle Integration & Fit Test  (FMRD0252)",
        "code": "O3",
        "dimension": "電氣功能合車測試",
        "ability": "電氣功能合車測試\n(Warning/Pattern切換/Sync同步/特殊功能/電器規格量測)",
        "levels": {
          "0": "無",
          "1": "了解警示燈電氣功能合車測試項目",
          "2": "能執行完整電氣功能合車測試含：\n  ・Warning警示燈全Pattern切換確認\n  ・Synchronize同步測試(PH1&PH1/PH1&PH2/PH2&PH2)\n  ・STOP/DIM/TAKE DOWN/ALLEY LIGHT功能確認\n  ・Group控制/雙控功能確認\n  ・方向燈/小燈/剎車燈功能確認\n  ・電器規格量測：V/A/W+Pattern波形PWM確認",
          "3": "建立電氣功能合車測試SOP+有量產交車記錄"
        },
        "importance": 5,
        "weight": "9",
        "target_level": "L4B必備(電氣功能合車項目認知)｜L5A熟練(獨立執行全功能+電器規格量測)｜L6A主導(電氣合車測試SOP)",
        "questions": "FMRD0252中同步測試PH1&PH2如何確認同步正確性？電器規格量測中Pattern波形PWM如何用示波器記錄？"
      },
      {
        "category": "[O]  產品裝車/合車測試驗證  Vehicle Integration & Fit Test  (FMRD0252)",
        "code": "O4",
        "dimension": "車載EMI/AM-FM干擾驗證",
        "ability": "車載EMI/AM-FM無線電干擾驗證\n(FMRD0252 EMI測試/AM-FM電台確認/警用VHF-UHF)",
        "levels": {
          "0": "無",
          "1": "了解警示燈對車載AM/FM/警用無線電干擾的驗證方法",
          "2": "能執行完整車載EMI干擾驗證含：\n  ・AM電台(535~1705 kHz)掃頻確認無雜訊\n  ・FM電台(87~108 MHz)掃頻確認無雜訊\n  ・警用VHF(144~148 MHz)/UHF(430~450 MHz)確認無干擾\n  ・各閃爍模式/高功率模式下均需確認\n  ・發現干擾時記錄頻率點並回饋電路EMI改善",
          "3": "建立車載EMI驗證SOP+有改善案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(車載EMI驗證方法)｜L5A熟練(全頻段干擾驗證+問題回饋改善)｜L6A主導(車載EMI驗證SOP建立)",
        "questions": "AM電台驗證需要掃哪些頻段？警示燈開關切換時如何確認FM電台不受干擾？發現AM頻段有雜訊時如何定位干擾來源？"
      },
      {
        "category": "[O]  產品裝車/合車測試驗證  Vehicle Integration & Fit Test  (FMRD0252)",
        "code": "O5",
        "dimension": "光學目視合車驗證",
        "ability": "光學目視合車驗證\n(光型/顏色/亮度/角度/夜間監看/競爭對手比較)",
        "levels": {
          "0": "無",
          "1": "了解警示燈光學目視驗證的評估項目",
          "2": "能執行完整光學目視合車驗證含：\n  ・白天/夜間光型/顏色/亮度/角度確認\n  ・安裝位置與角度對光學效果的影響評估\n  ・夜間監看(各模式亮度是否足夠辨識)\n  ・競爭對手件比較(Whelen/Code3/Federal Signal功能特點)",
          "3": "建立光學目視合車驗收標準+有改善光學設計建議的量化記錄"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B認知(光學目視驗證項目)｜L5A熟練(完整光學合車驗證+競品比較)｜L6A主導(光學驗收標準建立)",
        "questions": "夜間監看如何評估警示燈在200m距離的能見度？競爭對手Whelen/Code3比較時需要記錄哪些光學參數差異？"
      },
      {
        "category": "[O]  產品裝車/合車測試驗證  Vehicle Integration & Fit Test  (FMRD0252)",
        "code": "O6",
        "dimension": "美國警用系統合車整合驗證",
        "ability": "美國警用系統合車整合驗證\n(Whelen Core/SoundOff bluePRINT/Code3 Matrix/Federal Signal Pathfinder)",
        "levels": {
          "0": "無",
          "1": "了解四大美國警用系統的合車整合驗證流程",
          "2": "能在實車環境執行警用系統整合驗證含：\n  ・Whelen CenCom Core：WeCanX設定/燈具ID/Pattern同步/優先順序確認\n  ・SoundOff bluePRINT：CAN Vehicle Data Integration\n    車速/檔位/煞車/車門狀態自動切換模式驗證\n  ・Code3 Matrix：Z3S Siren+CAT5 Node多燈網路同步確認\n  ・Federal Signal Pathfinder：OBD+CAN場景自動化+多設備同步\n  ・FMRD0252 Control box欄位各系統勾選確認",
          "3": "建立各系統合車整合測試SOP+有多系統量產交車記錄"
        },
        "importance": 5,
        "weight": "10",
        "target_level": "L5A必備(至少1系統合車整合驗證)｜L5B熟練(2+系統合車+FMRD0252完整記錄)｜L6A主導(四系統合車驗證SOP)",
        "questions": "SoundOff bluePRINT如何設定車輛靜止時自動啟動Intersection閃爍模式？Code3 Matrix CAT5網路如何確認所有Node正常連線？"
      },
      {
        "category": "[O]  產品裝車/合車測試驗證  Vehicle Integration & Fit Test  (FMRD0252)",
        "code": "O7",
        "dimension": "合車問題追蹤與設計改善",
        "ability": "合車問題追蹤與設計改善回饋\n(問題分類/根因分析/設計變更/再驗證)",
        "levels": {
          "0": "無",
          "1": "了解合車問題追蹤的分類方法",
          "2": "能主導合車問題追蹤含：\n  ・問題分類：機構/電氣/光學/韌體/系統整合問題\n  ・8D/5Why根因分析\n  ・設計變更申請(ECN/DCN)追蹤\n  ・改善後再驗證確認\n  ・更新FMRD0252合車驗證表記錄",
          "3": "建立合車問題追蹤SOP+有從合車問題到量產改善的完整案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L5A必備(合車問題追蹤+根因分析)｜L6A主導(問題追蹤SOP+設計改善回饋機制建立)｜L7策略",
        "questions": "合車發現閃爍Pattern不符規格時如何用5Why找到是韌體還是電路設計問題？設計變更ECN如何追蹤到合車再驗證完成？"
      },
      {
        "category": "[O]  產品裝車/合車測試驗證  Vehicle Integration & Fit Test  (FMRD0252)",
        "code": "O8★",
        "dimension": "合車量產移轉驗證",
        "ability": "合車量產移轉驗證\n(量產首件合車/客戶見證/出貨前合車抽查)",
        "levels": {
          "0": "0=無；1=了解量產合車移轉驗證的概念\n2=能執行量產首件合車驗證+客戶見證測試+FMRD0252記錄完整\n3=建立量產合車驗證抽查計畫+有客戶見證量產合車交車記錄",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L5A加分(量產首件合車驗證認知)｜L5B建議(主導客戶見證合車)｜L6A主導(量產合車抽查計畫建立)",
        "questions": "量產移轉後首件合車需要驗證哪些項目？客戶見證合車(Witness Test)如何準備FMRD0252報告？"
      },
      {
        "category": "[P]  PPAP  Production Part Approval Process",
        "code": "P1",
        "dimension": "PPAP基礎知識",
        "ability": "PPAP五個等級理解\n(Level 1~5送交要求差異)",
        "levels": {
          "0": "不了解",
          "1": "知道PPAP Level 1~5的差異",
          "2": "能依客戶要求選擇適當Level並準備文件",
          "3": "有多件完整PPAP文件準備+客戶核准成功案例"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L4A必備(PPAP Level差異認知)｜L5A獨立準備文件(品質符合)｜L6A主導(客戶核准溝通)",
        "questions": "PPAP Level 3需要提交哪些文件?Level 1與Level 3的差異在哪?"
      },
      {
        "category": "[P]  PPAP  Production Part Approval Process",
        "code": "P2",
        "dimension": "PPAP文件準備",
        "ability": "PPAP 18項要素文件準備\n(設計記錄/DFMEA/流程圖/PFMEA/SPC/MSA等)",
        "levels": {
          "0": "無",
          "1": "了解PPAP 18項要素",
          "2": "能獨立準備完整18項PPAP文件",
          "3": "建立PPAP文件標準模板+有多件客戶核准成功案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B必備(18項要素了解)｜L5A獨立準備完整18項(準時率100%)｜L6A主導(PPAP文件模板建立)",
        "questions": "PPAP的18項要素分別是什麼?哪些項目最容易被客戶退件?如何避免?"
      },
      {
        "category": "[P]  PPAP  Production Part Approval Process",
        "code": "P3",
        "dimension": "PPAP",
        "ability": "PPAP電氣量測報告\n(全PCBA電氣特性量測/Cpk/MSA)",
        "levels": {
          "0": "無",
          "1": "了解PPAP電氣量測報告格式",
          "2": "能主導PCBA電氣全量測+Cpk分析+報告準備",
          "3": "建立電氣量測報告SOP+有Cpk不足改善電路設計案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B必備(電氣量測報告格式)｜L5A主導(全電氣量測+Cpk分析)｜L6A主導(量測報告SOP+Cpk改善)",
        "questions": "PPAP電氣量測需要量測多少樣品？Cpk門檻通常設定多少？Cpk不足時如何改善電路設計？"
      },
      {
        "category": "[Q]  APQP  Advanced Product Quality Planning",
        "code": "Q1",
        "dimension": "APQP階段管理",
        "ability": "APQP五個階段規劃執行\n(概念→計畫→設計→製程→確認→回饋)",
        "levels": {
          "0": "不了解",
          "1": "了解APQP五階段內容",
          "2": "能主導APQP計畫制定+階段門審查",
          "3": "有多件完整APQP執行+客戶Gate Review通過案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B必備認知(APQP五階段)｜L5A主導計畫制定(準時率100%)｜L6A主導(Gate Review,方向設定者)",
        "questions": "APQP第三階段(產品設計開發驗證)需要完成哪些輸出?如何管理階段門評審?"
      },
      {
        "category": "[Q]  APQP  Advanced Product Quality Planning",
        "code": "Q3",
        "dimension": "APQP",
        "ability": "APQP各階段輸入輸出管理\n(設計FMEA/PFMEA/CP關聯性)",
        "levels": {
          "0": "無",
          "1": "了解各階段主要輸入輸出",
          "2": "能管理APQP各階段文件的連結性與一致性",
          "3": "建立APQP文件管理系統+有多件完整追溯案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B必備(各階段輸入輸出)｜L5A主導(DFMEA/PFMEA/CP連結管理)｜L6A主導(APQP文件管理體系建立)",
        "questions": "APQP中DFMEA/PFMEA/Control Plan三者如何互相連結？如何確保電氣設計各階段文件一致性？"
      },
      {
        "category": "[Q]  APQP  Advanced Product Quality Planning",
        "code": "Q4",
        "dimension": "進度監控管理",
        "ability": "APQP進度監控與風險管理\n(甘特圖/里程碑/風險矩陣)",
        "levels": {
          "0": "無",
          "1": "了解APQP進度管理工具",
          "2": "能使用工具管理APQP進度+識別風險+制定對策",
          "3": "有在緊急時程下完成APQP+有效風險管理案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L5A必備(APQP進度監控+風險管理)｜L6A主導(甘特圖/里程碑追蹤體系,方向設定)｜L7策略管理",
        "questions": "如何建立APQP里程碑追蹤系統?發現進度落後時如何評估風險並決定對策?"
      },
      {
        "category": "[R]  MSA  Measurement System Analysis",
        "code": "R1",
        "dimension": "MSA基礎概念",
        "ability": "MSA量測系統分析基礎\n(GR&R/偏倚/線性/穩定性/解析力)",
        "levels": {
          "0": "不了解",
          "1": "了解MSA的目的與主要評估指標",
          "2": "能執行基本GR&R分析並解讀結果",
          "3": "建立MSA標準程序+有多種量測系統評估案例"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L4B必備認知(GR&R基礎)｜L5A獨立執行GR&R(品質符合)｜L6A主導(MSA標準程序建立)",
        "questions": "GR&R分析的%Contribution和%Tolerance分別代表什麼?各自的允收標準是多少?"
      },
      {
        "category": "[R]  MSA  Measurement System Analysis",
        "code": "R2",
        "dimension": "計量型MSA",
        "ability": "計量型MSA執行\n(Gauge R&R/ANOVA法/X-bar R法)",
        "levels": {
          "0": "無",
          "1": "了解計量型MSA的執行步驟",
          "2": "能主導計量型MSA執行+分析報告準備",
          "3": "有MSA不合格的改善+重新驗證成功案例"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L5A必備(主導計量型MSA執行+報告)｜L5B主導(MSA不合格改善驗證)｜L6A主導(量測體系建立)",
        "questions": "計量型GR&R實驗需要幾個操作者/幾個樣品/重複幾次?ANOVA法 vs Xbar-R法差異?"
      },
      {
        "category": "[S]  FMEA  Failure Mode & Effects Analysis",
        "code": "S1",
        "dimension": "DFMEA基礎",
        "ability": "設計FMEA(DFMEA)執行\n(功能/失效模式/失效影響/嚴重度/探測度/RPN)",
        "levels": {
          "0": "不了解",
          "1": "了解DFMEA的基本格式與評分方法",
          "2": "能獨立執行DFMEA+識別高RPN項目+制定改善措施",
          "3": "建立DFMEA標準模板+有多件DFMEA提前識別設計風險案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B必備認知(DFMEA格式評分)｜L5A獨立執行(識別高RPN,品質符合)｜L6A主導(DFMEA模板體系建立)",
        "questions": "如何為LED警示燈的防水密封功能建立DFMEA?嚴重度/發生率/探測度各如何評分?"
      },
      {
        "category": "[S]  FMEA  Failure Mode & Effects Analysis",
        "code": "S2",
        "dimension": "PFMEA基礎",
        "ability": "製程FMEA(PFMEA)執行\n(製程步驟/製程失效/影響/PFMEA與CP連結)",
        "levels": {
          "0": "不了解",
          "1": "了解PFMEA的基本格式",
          "2": "能獨立執行PFMEA+與Control Plan連結",
          "3": "有完整PFMEA到Control Plan到SOP的連結管理案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B必備認知(PFMEA格式)｜L5A獨立執行(PFMEA+CP連結)｜L6A主導(PFMEA-CP-SOP連結體系)",
        "questions": "灌膠製程的PFMEA需要識別哪些關鍵失效模式?如何確保PFMEA與控制計畫一致?"
      },
      {
        "category": "[S]  FMEA  Failure Mode & Effects Analysis",
        "code": "S3",
        "dimension": "AIAG-VDA FMEA",
        "ability": "新版AIAG-VDA FMEA方法\n(AP取代RPN/7步驟/5T)",
        "levels": {
          "0": "無",
          "1": "了解AIAG-VDA新版FMEA與舊版的主要差異",
          "2": "能應用新版FMEA格式進行分析",
          "3": "有完整新版FMEA執行+獲客戶接受案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L5A必備(新版AIAG-VDA差異認知)｜L5B主導(新版格式執行)｜L6A主導(新版FMEA客戶核准體系)",
        "questions": "新版AIAG-VDA FMEA中AP(Action Priority)如何取代RPN?H/M/L如何判定?"
      },
      {
        "category": "[T]  SPC  Statistical Process Control",
        "code": "T1",
        "dimension": "SPC",
        "ability": "SPC統計製程管制基礎\n(變異來源/管制圖選擇/Cp/Cpk)",
        "levels": {
          "0": "不了解",
          "1": "了解SPC的目的與基本概念",
          "2": "能選擇適當管制圖+解讀製程異常信號",
          "3": "建立SPC系統+有SPC改善電氣製程穩定性成功案例"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L4B必備認知(SPC基礎+管制圖概念)｜L5A獨立應用(解讀異常信號)｜L6A主導(SPC系統建立)",
        "questions": "X-bar R管制圖 vs I-MR管制圖各適用何種情境？管制圖8種異常判讀準則是什麼？"
      },
      {
        "category": "[T]  SPC  Statistical Process Control",
        "code": "T2",
        "dimension": "管制圖應用",
        "ability": "管制圖實務應用\n(計量型/計數型管制圖選擇與建立)",
        "levels": {
          "0": "無",
          "1": "了解常用管制圖的類型",
          "2": "能建立管制圖+設定管制界限+識別異常",
          "3": "有SPC應用於量產改善+Cpk提升成功案例"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L5A必備(建立管制圖+識別異常)｜L5B主導(SPC改善Cpk提升)｜L6A主導(量產線SPC監控體系)",
        "questions": "如何為灌膠重量設定管制圖?管制界限如何計算?發現超出管制界限時如何處理?"
      },
      {
        "category": "[T]  SPC  Statistical Process Control",
        "code": "T3",
        "dimension": "製程能力分析",
        "ability": "製程能力分析\n(Cp/Cpk/Pp/Ppk計算與改善)",
        "levels": {
          "0": "無",
          "1": "了解Cp/Cpk的定義與計算",
          "2": "能計算分析製程能力並識別改善機會",
          "3": "有系統性製程能力改善(Cpk提升)成功案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4B必備認知(Cp/Cpk定義計算)｜L5A獨立分析(識別改善機會)｜L6A主導(系統性Cpk提升機制建立)",
        "questions": "Cp vs Cpk差異?Cpk=1.33代表什麼?如何提升製程能力從Cpk=0.8到Cpk=1.33?"
      },
      {
        "category": "[U]  專案執行管理  Project Execution Management",
        "code": "U1",
        "dimension": "A表-開發進度計畫",
        "ability": "產品開發進度計畫表(A表)\n(整體里程碑/Gate Review/交付物管理)",
        "levels": {
          "0": "無",
          "1": "了解A表格式與用途",
          "2": "能獨立建立A表+追蹤進度+管理里程碑",
          "3": "建立A表標準模板+有多件產品完整A表執行+客戶Gate Review通過案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(A表格式用途)｜L5A必備(獨立建立A表+追蹤里程碑,準時率100%)｜L6A主導(Gate Review主持)",
        "questions": "A表里程碑如何設定?發現進度落後時如何評估影響並決定對策?如何向客戶報告進度?"
      },
      {
        "category": "[U]  專案執行管理  Project Execution Management",
        "code": "U2",
        "dimension": "B表-零件製作進度",
        "ability": "構成零件製作計劃及進度管制表(B表)\n(各零件樣品時程/試模/首件確認進度)",
        "levels": {
          "0": "無",
          "1": "了解B表格式與用途",
          "2": "能獨立建立B表+追蹤各零件開模/試模進度+識別瓶頸",
          "3": "建立B表標準模板+有多件產品完整B表執行+有零件進度落後補救案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(B表格式用途)｜L5A必備(獨立建立B表+識別關鍵路徑)｜L6A主導(零件進度落後補救策略)",
        "questions": "B表如何拆解各零件的製作里程碑?如何識別關鍵路徑?哪個零件最可能成為瓶頸?"
      },
      {
        "category": "[U]  專案執行管理  Project Execution Management",
        "code": "U3",
        "dimension": "C表-模治量具規劃",
        "ability": "模具/治具/量具需求規劃及製作進度表(C表)\n(模具/治具/量具需求識別/製作追蹤)",
        "levels": {
          "0": "無",
          "1": "了解C表格式與用途",
          "2": "能獨立識別開發所需模具治具量具+建立C表追蹤",
          "3": "建立C表標準模板+有完整模治量具需求預測+有提前識別缺口案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(C表格式用途)｜L5A必備(獨立識別模治量具需求建立C表)｜L6A主導(缺口提前預警策略)",
        "questions": "如何在開發初期識別所有需要的模具/治具/量具?C表如何與B表零件製作進度連動?"
      },
      {
        "category": "[U]  專案執行管理  Project Execution Management",
        "code": "U4",
        "dimension": "D表-試驗規劃報告",
        "ability": "產品材質工程試驗規劃進度管制及綜合報告表(D表)\n(DVP試驗矩陣/執行進度/結果彙整報告)",
        "levels": {
          "0": "無",
          "1": "了解D表格式與DVP概念",
          "2": "能獨立建立D表試驗計畫+追蹤執行進度+彙整測試結果報告",
          "3": "建立D表標準模板+有完整DVP執行到量產移轉的完整記錄案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B認知(D表DVP概念)｜L5A必備(獨立建立D表+追蹤進度+彙整測試報告)｜L6A主導(DVP策略)",
        "questions": "D表試驗矩陣如何與DFMEA/法規要求連結?如何管理多個試驗同時進行的進度?測試不合格時如何更新D表?"
      },
      {
        "category": "[U]  專案執行管理  Project Execution Management",
        "code": "U5",
        "dimension": "BOM建立與結構",
        "ability": "BOM建立與BOM結構設計\n(BOM分層架構/半成品BOM/ERP BOM建立)",
        "levels": {
          "0": "無",
          "1": "了解BOM的基本架構與用途",
          "2": "能獨立建立完整多層BOM+設計合理BOM結構",
          "3": "建立BOM設計規範+有複雜產品多層BOM架構設計+有BOM變更管理案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B必備認知(BOM架構)｜L5A獨立建立(完整多層BOM結構設計)｜L6A主導(BOM設計規範+ECN管理)",
        "questions": "如何為LED警示燈設計多層BOM結構?哪些層級需要設半成品品號?如何處理共用件的BOM管理?"
      },
      {
        "category": "[U]  專案執行管理  Project Execution Management",
        "code": "U6",
        "dimension": "專案執行管理",
        "ability": "ERP系統BOM建立與維護\n(鼎新ERP BOM建立/品號申請/物料主檔建立)",
        "levels": {
          "0": "無",
          "1": "了解ERP BOM建立流程",
          "2": "能獨立在鼎新ERP建立完整BOM+申請品號+建立物料主檔",
          "3": "建立ERP BOM建立SOP+有BOM變更ECN執行案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B必備(ERP BOM建立步驟)｜L5A獨立建立BOM+申請品號｜L6A主導(BOM建立SOP+ECN執行)",
        "questions": "在鼎新ERP如何申請新品號？BOM建立時需要填寫哪些關鍵欄位？如何處理PCBA BOM版本變更？"
      },
      {
        "category": "[U]  專案執行管理  Project Execution Management",
        "code": "U7",
        "dimension": "ABCD四表整合管理",
        "ability": "ABCD四表整合管理\n(A/B/C/D表橫向整合+跨部門溝通+進度會議主持)",
        "levels": {
          "0": "無",
          "1": "了解四表之間的關聯性",
          "2": "能有效整合四表進行跨部門進度溝通",
          "3": "建立四表整合管理SOP+有主持多部門開發週會+有效推動專案完成案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L5A必備(有效整合四表跨部門進度溝通)｜L6A主導(開發週會主持,方向設定)｜L7跨產品線策略",
        "questions": "A/B/C/D四表如何在開發週會中整合呈現?如何快速識別整體專案的關鍵瓶頸?"
      },
      {
        "category": "[V]  鼎新ERP系統操作  Kingdee ERP System",
        "code": "V1",
        "dimension": "ERP系統基礎操作",
        "ability": "鼎新ERP基礎操作\n(系統登入/模組導覽/查詢功能/報表產出)",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作了解系統介面",
          "2": "能熟練使用各模組查詢+產出報表",
          "3": "能設定ERP參數+有多個模組熟練操作+有指導他人使用經驗"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L3B起認知(系統基礎操作)｜L4A必備(各模組查詢+報表產出)｜L5A主導(ERP參數設定+指導他人)",
        "questions": "鼎新ERP哪些模組與韌體(電子.硬體)工程師工作最相關?如何快速查詢一個品號的庫存與BOM?"
      },
      {
        "category": "[V]  鼎新ERP系統操作  Kingdee ERP System",
        "code": "V2",
        "dimension": "鼎新ERP系統操作",
        "ability": "品號申請與物料主檔建立\n(品號規則/物料主檔欄位/分類設定)",
        "levels": {
          "0": "無",
          "1": "了解品號申請流程",
          "2": "能獨立完成品號申請+物料主檔建立+設定正確分類",
          "3": "建立品號申請SOP+有品號管理規範建立案例"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4A必備(品號申請流程認知)｜L4B獨立完成(品號申請+物料主檔建立)｜L5A主導(品號管理規範建立)",
        "questions": "鼎新ERP品號申請需要填寫哪些必要欄位？如何設定PCBA物料的存貨分類與計量單位？"
      },
      {
        "category": "[V]  鼎新ERP系統操作  Kingdee ERP System",
        "code": "V3",
        "dimension": "BOM建立與維護",
        "ability": "ERP BOM建立與變更管理\n(BOM建立/版本管理/ECN變更執行)",
        "levels": {
          "0": "無",
          "1": "了解ERP BOM建立步驟",
          "2": "能獨立在ERP建立多層BOM+執行版本變更",
          "3": "建立BOM維護SOP+有多件BOM建立+有ECN設計變更ERP執行案例"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B必備(ERP BOM建立步驟)｜L5A獨立建立多層BOM+執行版本變更｜L6A主導(BOM維護SOP建立)",
        "questions": "在鼎新ERP如何建立多層BOM?如何執行設計變更(ECN)並更新ERP BOM?"
      },
      {
        "category": "[V]  鼎新ERP系統操作  Kingdee ERP System",
        "code": "V4",
        "dimension": "工單領料與發料",
        "ability": "生產工單領料/發料作業\n(工單開立/領料申請/倉庫確認/實際消耗扣帳)",
        "levels": {
          "0": "無",
          "1": "了解工單領料流程",
          "2": "能執行工單開立+領料單填寫+追蹤實際領料",
          "3": "熟練操作生產工單全流程+有領料異常處理案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4A認知(工單領料流程)｜L4B必備(工單開立+領料單填寫追蹤)｜L5A主導(生產工單全流程熟練)",
        "questions": "生產工單發料流程如何操作?領料超出標準用量時如何在ERP處理?實際耗料如何回沖扣帳?"
      },
      {
        "category": "[V]  鼎新ERP系統操作  Kingdee ERP System",
        "code": "V5",
        "dimension": "請購採購作業",
        "ability": "請購單與採購申請作業\n(請購申請/核准流程/採購單建立/跟催到貨)",
        "levels": {
          "0": "無",
          "1": "了解請購採購流程",
          "2": "能獨立完成請購申請+追蹤採購進度+確認到貨",
          "3": "熟練請購採購全流程+有緊急採購處理+有採購異常解決案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4A認知(請購採購流程)｜L4B必備(獨立完成請購申請+到貨確認)｜L5A主導(緊急採購+異常解決)",
        "questions": "鼎新ERP如何發起請購單?請購核准後採購部如何建立採購單?如何追蹤採購進度?"
      },
      {
        "category": "[V]  鼎新ERP系統操作  Kingdee ERP System",
        "code": "V6",
        "dimension": "庫存與倉管作業",
        "ability": "庫存查詢與倉管作業\n(庫存查詢/調撥/盤點/呆料查詢)",
        "levels": {
          "0": "無",
          "1": "了解庫存查詢操作",
          "2": "能執行庫存查詢+調撥申請+支援盤點作業",
          "3": "熟練倉管全流程+有呆料分析+有庫存異常調查案例"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L4A認知(庫存查詢操作)｜L4B必備(庫存查詢+調撥申請+盤點)｜L5A主導(呆料分析+庫存異常調查)",
        "questions": "如何在鼎新ERP查詢特定品號的即時庫存?如何辦理部門間物料調撥?如何查詢呆料清單?"
      },
      {
        "category": "[V]  鼎新ERP系統操作  Kingdee ERP System",
        "code": "V7",
        "dimension": "電子簽核流程",
        "ability": "鼎新電子簽核(e-Approval)操作\n(簽核表單發起/審核/追蹤/歸檔)",
        "levels": {
          "0": "無",
          "1": "了解電子簽核流程",
          "2": "能獨立發起各類電子簽核表單+追蹤審核狀態",
          "3": "熟練電子簽核全流程+有協助設定簽核流程+有指導他人使用案例"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L3B起認知(電子簽核流程)｜L4A必備(獨立發起簽核表單+追蹤)｜L5A主導(協助設定簽核流程)",
        "questions": "鼎新電子簽核有哪些常用表單類型?如何發起一個設計變更的電子簽核?如何查詢簽核歷程?"
      },
      {
        "category": "[V]  鼎新ERP系統操作  Kingdee ERP System",
        "code": "V8",
        "dimension": "鼎新ERP系統操作",
        "ability": "ERP報表產出與數據分析\n(生產進度報表/庫存報表/BOM成本展算)",
        "levels": {
          "0": "無",
          "1": "了解ERP報表功能",
          "2": "能從ERP產出所需報表+基本數據分析",
          "3": "能自定義ERP查詢報表+有BOM成本展算+數據決策分析案例"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L4A認知(ERP報表功能)｜L4B必備(從ERP產出所需報表)｜L5A主導(BOM成本展算+數據決策分析)",
        "questions": "如何從鼎新ERP展算一個PCBA產品的BOM成本？如何產出當前電子料生產進度報表？"
      },
      {
        "category": "[W]  阿米巴損益核算能力  Amoeba Daily P&L Literacy",
        "code": "W1",
        "dimension": "阿米巴核算",
        "ability": "阿米巴時間附加值\n（時間當量）認識",
        "levels": {
          "0": "不知道時間附加值",
          "1": "知道公式=(銷售額-外部費用)÷工時",
          "2": "可計算日/月時間附加值並分析趨勢",
          "3": "可協助建立阿米巴核算規則+帶領小巴達成目標"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4A起認知(時間附加值公式)｜L5A必備(計算日/月時間附加值+分析趨勢)｜L6A主導(核算規則建立)",
        "questions": "時間附加值=(銷售額-外部費用)÷總工時；你上月時間附加值為何？如何改善？"
      },
      {
        "category": "[W]  阿米巴損益核算能力  Amoeba Daily P&L Literacy",
        "code": "W2",
        "dimension": "每日損益",
        "ability": "每日損益表填寫\n與異常分析",
        "levels": {
          "0": "無",
          "1": "可填寫每日損益表格",
          "2": "可分析損益異常並提出改善行動",
          "3": "可協助建立部門阿米巴核算SOP+有損益改善實績"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4B必備(每日損益表填寫)｜L5A必備(分析損益異常+提出改善行動)｜L6A主導(阿米巴核算SOP建立)",
        "questions": "每日損益表中「製造費用」如何分攤？機構部門如何定義外部費用？"
      },
      {
        "category": "[X]  敏捷專案管理  Agile Project Management",
        "code": "X1",
        "dimension": "敏捷專案管理",
        "ability": "Scrum/Sprint週期應用\n(Sprint/Backlog/Daily Standup)",
        "levels": {
          "0": "無",
          "1": "知道Sprint/Backlog/Daily Standup概念",
          "2": "可在電子韌體設計專案中運用2週Sprint管理任務",
          "3": "可擔任Scrum Master主導Sprint"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4B認知(Sprint/Backlog/Standup概念)｜L5A必備(2週Sprint管理韌體設計專案)｜L6A主導Scrum Master",
        "questions": "如何用2週Sprint管理一個新品PCBA韌體的設計驗證階段？Daily Standup如何執行？"
      },
      {
        "category": "[X]  敏捷專案管理  Agile Project Management",
        "code": "X2",
        "dimension": "看板管理",
        "ability": "Kanban看板\n任務管理",
        "levels": {
          "0": "無",
          "1": "知道看板欄位(待辦/進行/完成)",
          "2": "可建立設計任務看板並控制WIP上限",
          "3": "可優化流動效率+建立團隊Kanban規範"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L4A認知(看板欄位概念)｜L5A必備(建立設計任務看板+WIP上限控制)｜L6A主導(Kanban規範優化)",
        "questions": "如何用Kanban追蹤10件同時進行的機構工程圖進度？WIP上限如何設定？"
      },
      {
        "category": "[X]  敏捷專案管理  Agile Project Management",
        "code": "X3",
        "dimension": "敏捷回顧",
        "ability": "Sprint回顧會議\n(Retrospective)",
        "levels": {
          "0": "無",
          "1": "知道回顧會議目的",
          "2": "可主持回顧並產出具體行動事項",
          "3": "可持續推動流程改善+有可量化改善成果"
        },
        "importance": 3,
        "weight": "4",
        "target_level": "L5A建議(回顧會議概念)｜L5B必備(主持回顧+產出行動事項)｜L6A主導(持續流程改善+量化成果)",
        "questions": "上一個Sprint哪件事做得好？哪件可改進？如何記錄並跟進行動？"
      },
      {
        "category": "[X]  敏捷專案管理  Agile Project Management",
        "code": "X4",
        "dimension": "風險整合",
        "ability": "敏捷風險管理\n與FMEA整合",
        "levels": {
          "0": "無",
          "1": "了解專案風險登錄概念",
          "2": "可建立風險矩陣+追蹤高風險項目",
          "3": "可整合FMEA風險與Sprint Backlog+有風險緩解成功案例"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L5A建議(專案風險登錄)｜L5B必備(風險矩陣+追蹤高風險)｜L6A主導(FMEA與敏捷風險整合)",
        "questions": "新品開發機構風險最高的3個議題是什麼？如何放入Sprint Backlog緩解？"
      },
      {
        "category": "[Y]  警示燈產品認識與電子料編碼  Product & Electronic Coding Knowledge",
        "code": "Y2",
        "dimension": "警示燈產品認識與電子料編碼",
        "ability": "騏宏產品編碼規則\n(品號規則/OEM-ODM-OBM區分/料號申請)",
        "levels": {
          "0": "不知道",
          "1": "知道料號規則",
          "2": "可正確建立新品PCBA料號",
          "3": "可維護/更新編碼規則\n► 對應職等: L3B必備，L4A熟練"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L3B必備(料號規則認知)｜L4A熟練(正確建立新品PCBA料號)｜L5A主導(維護/更新編碼規則體系)",
        "questions": "新開發PCBA如何申請料號？OEM/ODM/OBM機種電子料號如何區分？"
      },
      {
        "category": "[Y]  警示燈產品認識與電子料編碼  Product & Electronic Coding Knowledge",
        "code": "Y3",
        "dimension": "物料認識",
        "ability": "LED物料選型與認識\n(Cree/Nichia/Osram/Seoul選型)",
        "levels": {
          "0": "無",
          "1": "知道主要LED廠(Cree/Nichia/Osram)",
          "2": "可依光學/熱/法規需求選型",
          "3": "建立LED物料評選規範\n► 對應職等: L4A基礎，L5A熟練"
        },
        "importance": 5,
        "weight": "8",
        "target_level": "L4A基礎認知(主要LED廠)｜L5A熟練(依光學/熱/法規需求選型)｜L6A主導(LED物料評選規範建立)",
        "questions": "如何選擇符合ECE R65琥珀光色座標的LED？Tj與壽命關係？"
      },
      {
        "category": "[Y]  警示燈產品認識與電子料編碼  Product & Electronic Coding Knowledge",
        "code": "Y4",
        "dimension": "物料認識",
        "ability": "PCB物料與PCBA認識\n(SMT流程/BOM確認/PCBA機構整合)",
        "levels": {
          "0": "無",
          "1": "知道SMT流程",
          "2": "可讀懂BOM並確認機構相關料件",
          "3": "可與硬體工程師協同優化佈局\n► 對應職等: L4A建議"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4A建議(SMT流程認知)｜L4B必備(讀懂BOM確認機構相關料件)｜L5A主導(與硬體協同優化佈局)",
        "questions": "PCBA灌膠前需進行哪些清潔處理？燈具防潮烤板條件？"
      },
      {
        "category": "[Y]  警示燈產品認識與電子料編碼  Product & Electronic Coding Knowledge",
        "code": "Y5",
        "dimension": "物料認識",
        "ability": "膠料與密封材料認識\n(PU/環氧/矽膠/丁基膠/密封膠帶選型)",
        "levels": {
          "0": "無",
          "1": "知道PU/環氧/矽膠差異",
          "2": "可依使用溫度/硬度/防水需求選型",
          "3": "建立膠料評選SOP\n► 對應職等: L4B必備"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4B必備(PU/環氧/矽膠差異)｜L5A熟練(依溫度/硬度/防水需求選型)｜L6A主導(膠料評選SOP建立)",
        "questions": "軟膠/硬膠各適用哪些場景？A/B劑配比偏差對固化的影響？如何選擇適合工作溫度的密封膠？"
      },
      {
        "category": "[Y]  警示燈產品認識與電子料編碼  Product & Electronic Coding Knowledge",
        "code": "Y6",
        "dimension": "物料認識",
        "ability": "鋁材與結構材料認識\n(AL6063 vs ADC12/陽極/鋁擠選型)",
        "levels": {
          "0": "無",
          "1": "知道AL6063/ADC12差異",
          "2": "可依機械性能/製程需求選型",
          "3": "建立材料認識培訓教材\n► 對應職等: L4A建議"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4A建議(AL6063/ADC12差異)｜L4B熟練(依機械性能/製程需求選型)｜L5B主導(材料認識培訓教材建立)",
        "questions": "鋁擠型AL6063-T5與ADC12壓鑄鋁強度差異？陽極處理厚度如何影響防腐性？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z1",
        "dimension": "企業基本能力",
        "ability": "ISO/IATF文件讀寫能力\n(程序書/工作指導書WI/SOP撰寫)",
        "levels": {
          "0": "無",
          "1": "可閱讀程序書",
          "2": "可獨立撰寫WI/SOP",
          "3": "可建立文件體系架構\n► 對應職等: L3B建立，L4A必備"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L3B建立認知(程序書閱讀)｜L4A必備(獨立撰寫WI/SOP,品質符合)｜L5A主導(文件體系架構建立)",
        "questions": "工作指導書(WI)與程序書(Procedure)的差異？如何撰寫PIC韌體燒錄作業SOP？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z2",
        "dimension": "企業基本能力",
        "ability": "PCB/PCBA認識\n(SMT流程/焊接品質/BOM確認)",
        "levels": {
          "0": "無",
          "1": "知道SMT基本流程",
          "2": "可讀懂BOM並確認電子相關料件含AEC-Q確認",
          "3": "可主導PCBA DFM設計審查"
        },
        "importance": 5,
        "weight": "6",
        "target_level": "L4A必備(8D步驟認知)｜L5A獨立完成8D報告(返工率≦5%)｜L6A主導(指導他人+問題案例庫建立)",
        "questions": "以一次客訴案件說明8D各步驟如何執行"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z3",
        "dimension": "企業基本能力",
        "ability": "電子零件認識\n(IC/MOSFET/被動元件/連接器選型)",
        "levels": {
          "0": "無",
          "1": "知道主要電子零件類別",
          "2": "可依電氣規格/車規/溫度等級選型",
          "3": "建立電子零件評選SOP"
        },
        "importance": 4,
        "weight": "5",
        "target_level": "L4B建議(跨部門會議參與)｜L5A必備(主持技術協調會議,Amoeba協作)｜L6A主導(跨部門協作機制建立)",
        "questions": "說明一次你主動協調解決跨部門衝突的案例"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z4",
        "dimension": "企業基本能力",
        "ability": "車載電氣系統認識\n(CAN/LIN/OBD/ISO 16750電氣環境)",
        "levels": {
          "0": "無",
          "1": "知道車載電氣系統基本概念",
          "2": "可依車型電氣環境設計電路",
          "3": "建立車載電氣設計培訓教材"
        },
        "importance": 4,
        "weight": "4",
        "target_level": "L4A建議(基礎Excel)｜L4B必備(工程分析表單/VLOOKUP建立)｜L5A主導(Power Query+自動化報表)",
        "questions": "如何用Excel追蹤量產問題改善進度？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Z5",
        "dimension": "企業基本能力",
        "ability": "ERP系統操作（鼎新）\n(查詢/工單/BOM/請購基礎)",
        "levels": {
          "0": "無",
          "1": "基礎查詢",
          "2": "可操作工單/BOM/請購",
          "3": "可協助部門ERP教育訓練\n► 對應職等: L4A建議"
        },
        "importance": 4,
        "weight": "4",
        "target_level": "L4A建議(ERP基礎查詢)｜L4B必備(工單/BOM/請購操作)｜L5A主導(協助部門ERP教育訓練)",
        "questions": "如何在鼎新ERP建立新品PCBA的BOM？如何查詢LRP電子料缺料狀況？如何發起電子料請購單？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "AI1",
        "dimension": "AI工具應用",
        "ability": "Claude Artifacts / CHART圖表生成\n(Anthropic Claude AI圖表/報表製作)",
        "levels": {
          "0": "無",
          "1": "基礎使用Claude生成圖表/報表",
          "2": "熟練應用CHART生成量產數據分析/KPI報表/工程圖表",
          "3": "建立部門AI圖表應用規範+指導他人+有可量化效率提升案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4A建議(基礎CHART圖表生成)｜L5A必備(熟練量產數據分析應用,效率提升)｜L6A主導(部門規範)",
        "questions": "如何用Claude CHART生成每日阿米巴損益圖？如何讓AI自動產出ECE法規測試結果報表？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "AI2",
        "dimension": "AI工具應用",
        "ability": "Claude Cowork協作工具應用\n(AI輔助專案管理/文件協作/跨部門溝通)",
        "levels": {
          "0": "無",
          "1": "基礎使用Cowork協作工具",
          "2": "熟練應用Cowork進行APQP文件協作+跨部門技術溝通",
          "3": "建立部門AI協作工作流程+指導他人+有具體協作效率提升案例"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4A建議(基礎Cowork使用)｜L5A必備(APQP文件協作熟練應用)｜L6A主導(AI協作流程建立)",
        "questions": "如何用Cowork管理韌體開發進度並與機構/品管部門協作？如何用AI協作工具加速PPAP文件準備？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "AI3",
        "dimension": "AI工具應用",
        "ability": "Claude Code / AI輔助程式開發\n(AI程式碼生成/韌體除錯/自動化腳本)",
        "levels": {
          "0": "無",
          "1": "基礎使用AI生成程式片段",
          "2": "熟練應用Claude Code輔助韌體開發+自動化測試腳本生成",
          "3": "建立AI輔助開發工作流程+有AI加速韌體開發量化成果"
        },
        "importance": 4,
        "weight": "7",
        "target_level": "L4B建議(AI程式輔助基礎)｜L5A必備(熟練AI輔助韌體開發+測試腳本)｜L6A主導(AI開發流程)",
        "questions": "如何用Claude Code生成PIC/STM32 Timer中斷韌體框架？如何用AI加速CAN Message矩陣程式撰寫？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "AI4★",
        "dimension": "AI工具應用",
        "ability": "NotebookLM知識管理\n(技術文件整合/設計規範問答/法規知識庫)",
        "levels": {
          "0": "0=無；1=基礎使用NotebookLM進行文件整合；2=熟練應用NotebookLM建立技術知識庫+法規查詢+設計規範問答；3=建立部門AI知識管理體系+有知識庫建立與維護案例",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L4B加分(NotebookLM基礎使用)｜L5A建議(技術知識庫建立)｜L6A主導(部門AI知識管理體系)",
        "questions": "如何用NotebookLM整合ECE R65/SAE J595/NFPA1901法規文件建立快速查詢知識庫？如何用AI知識庫加速新工程師上手？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Ed1",
        "dimension": "教育訓練管理",
        "ability": "OJT 在職訓練執行\n(示範→協同→觀察→獨立 四階段指導法)",
        "levels": {
          "0": "無",
          "1": "了解OJT四階段（示範/協同/觀察/獨立）基本概念",
          "2": "能依OJT計畫對新人執行完整四階段帶訓含：\n  ・示範：完整說明步驟+安全提示+品質關鍵點\n  ・協同：新人操作時在旁指導糾正\n  ・觀察：退出後觀察獨立操作並記錄缺失\n  ・獨立：確認達到獨立作業標準後簽核\n  ・依騏宏「新人帶領8週每日作業時程表」執行\n  ・每週記錄OJT進度並回饋給直屬主管",
          "3": "建立部門OJT教材與帶訓SOP+有多名新人帶訓成功記錄"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4A必備(OJT四階段認知)｜L5A熟練(完整帶訓+週記錄)｜L6A主導(OJT教材建立+多人帶訓)",
        "questions": "OJT四階段中「觀察」階段的目的是什麼？如何判斷新人已達「獨立作業」標準？8週OJT計畫中第1~2週應優先培育哪些能力？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Ed2",
        "dimension": "教育訓練管理",
        "ability": "Off-JT 職外訓練規劃與執行\n(外部課程/法規課程/公司內部集訓)",
        "levels": {
          "0": "無",
          "1": "了解Off-JT（脫崗集中學習）與OJT的差異及適用場景",
          "2": "能規劃與執行Off-JT含：\n  ・識別部門知識缺口並提出外訓需求（年度計畫）\n  ・選擇合適外部課程（EMC法規/ASPICE/IATF/FMEA等）\n  ・出訓後整理學習重點並在部門內知識轉移分享\n  ・填寫OJT_TWL教育訓練體系圖對應欄位\n  ・追蹤Off-JT成效（前後測/實際應用確認）",
          "3": "建立年度Off-JT計畫+有知識轉移分享記錄+可量化成效"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L4B建議(Off-JT需求識別+外訓申請)｜L5A必備(年度計畫+知識轉移分享)｜L6A主導(部門Off-JT體系)",
        "questions": "Off-JT適合哪些類型的知識學習（OJT較難傳授的）？出訓回來如何有效做部門知識轉移？如何評估Off-JT的成效？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Ed3",
        "dimension": "教育訓練管理",
        "ability": "SD 自我發展計畫\n(Self-Development：證照/讀書會/專題研究/線上課程)",
        "levels": {
          "0": "無自我學習習慣",
          "1": "有基礎自我學習概念，了解SD與OJT/Off-JT的角色分工",
          "2": "能制定並執行個人SD計畫含：\n  ・識別個人能力缺口並設定學習目標（SMART原則）\n  ・選擇合適SD方式：\n    - 線上課程（Coursera/Udemy/Mooc）\n    - 技術專書研讀（EMC設計/嵌入式系統/韌體架構）\n    - 業界研討會/技術社群參與\n    - 證照考取（TOEIC/PMP/CQE/ISO Lead Auditor）\n    - 個人GitHub技術作品集建立\n  ・每月回顧學習進度並調整計畫",
          "3": "有具體SD成果記錄（證照/論文/GitHub作品/技術分享簡報）+可量化能力提升"
        },
        "importance": 4,
        "weight": "6",
        "target_level": "L3B建議(SD基礎學習計畫)｜L4B必備(SD計畫制定+執行+月回顧)｜L5A主導(SD成果展示+帶領部門讀書會)",
        "questions": "如何用SMART原則制定個人SD年度學習計畫？有哪些SD方式最適合韌體/電子工程師的技術提升？如何量化SD的學習成效？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Ed4",
        "dimension": "教育訓練管理",
        "ability": "新人帶訓計畫管理\n(8週OJT時程/里程碑評核/帶訓記錄表)",
        "levels": {
          "0": "無",
          "1": "了解騏宏「新人帶領8週每日作業時程表」的結構與目的",
          "2": "能執行完整新人8週帶訓計畫含：\n  ・第1~2週：5S/安全規範/ERP釘釘基礎/SOP閱讀\n  ・第3~4週：基礎設備操作/電路圖閱讀/量測工具\n  ・第5~6週：獨立操作電路測試/韌體燒錄/FCT流程\n  ・第7~8週：複合任務執行/品質確認/異常處理\n  ・每日填寫帶訓記錄表，每週評核里程碑達標情況\n  ・試用期結束前完成帶訓總結評核報告\n  ・對應騏宏「新人帶領8週每日作業時程表.xlsx」執行",
          "3": "建立部門標準化帶訓教材+有多位新人成功帶訓到獨立作業記錄"
        },
        "importance": 5,
        "weight": "7",
        "target_level": "L4A必備(8週帶訓計畫認知+執行)｜L5A熟練(完整帶訓+評核報告+多人記錄)｜L6A主導(標準化帶訓教材建立)",
        "questions": "騏宏8週OJT帶訓計畫中第5~6週應達到什麼里程碑？如何填寫每日帶訓記錄表確保可追溯？帶訓結束的評核標準如何設定？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "Ed5★",
        "dimension": "教育訓練管理",
        "ability": "教育訓練體系建立\n(OJT_TWL體系圖/年度訓練計畫/訓練矩陣/PDCA)",
        "levels": {
          "0": "0=無；1=了解OJT/Off-JT/SD三層架構概念\n2=能協助建立部門教育訓練體系含：\n  ・填寫並維護OJT_TWL教育訓練體系圖（各職等訓練項目對應）\n  ・制定年度教育訓練計畫（Off-JT/SD各12+小時目標）\n  ・建立技能矩陣（職能項目 × 人員 × 熟練度）\n  ・依IATF16949 §7.2人員能力要求管理訓練記錄\n  ・季度PDCA回顧訓練成效並調整下期計畫\n3=建立完整部門訓練體系+有訓練成效量化數據（如技能矩陣覆蓋率提升%）+\n  主導IATF/AS9100訓練稽核準備",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 3,
        "weight": "5",
        "target_level": "L5A加分(OJT_TWL體系圖維護+年度計畫)｜L5B建議(訓練矩陣+PDCA回顧)｜L6A主導(完整訓練體系+IATF稽核準備)",
        "questions": "OJT_TWL教育訓練體系圖如何對應各職等的OJT/Off-JT/SD配比？如何用技能矩陣識別部門單點風險（only1人會）？IATF16949 §7.2對訓練記錄有何要求？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "a1",
        "dimension": "數位示波器",
        "ability": "數位示波器(Rigol/Tektronix)\n(電壓/電流/PWM/CAN/LIN波形分析)",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作須指導",
          "2": "熟練量測PWM/CAN波形+電流探頭+解碼功能",
          "3": "熟練操作+複雜波形分析+建立量測規範"
        },
        "importance": 5,
        "weight": "WIRD0201/量測設備",
        "target_level": "L4A認知(示波器基礎)｜L5A必備(熟練操作含解碼)｜L5B-L6A主導(量測規範建立)",
        "questions": "如何用示波器量測CAN差動信號？電流探頭如何消磁？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "a2",
        "dimension": "數位電表/鉗形表",
        "ability": "數位萬用電表/鉗形電流表\n(精密量測/AC+DC電流/絕緣電阻)",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作",
          "2": "熟練量測含低電壓精密/大電流鉗形量測",
          "3": "建立量測SOP+指導品管人員"
        },
        "importance": 5,
        "weight": "Fluke/HIOKI",
        "target_level": "L3B必備(電表基礎操作)｜L4A熟練(精密量測)｜L5A主導(量測SOP建立)",
        "questions": "True RMS電表 vs 普通電表量測PWM信號差異？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "a3",
        "dimension": "電源供應器",
        "ability": "電源供應器(CHROMA/GW Instek)\n(DC 0~30V/可程式電源/過流保護測試)",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道電壓/電流設定",
          "2": "熟練操作+可程式控制+過壓過流保護測試",
          "3": "建立電源測試規範+指導他人"
        },
        "importance": 5,
        "weight": "CHROMA/GWInstek",
        "target_level": "L4A必備(電源供應器基礎操作)｜L5A熟練(可程式+保護測試)｜L6A主導(電源測試規範)",
        "questions": "如何用可程式電源模擬車載啟動浪湧電壓？過流保護如何設定驗證？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "a4",
        "dimension": "CHROMA電子負載",
        "ability": "CHROMA 6314A電子負載\n(定電流/定電壓/LED電氣特性量測)",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道CC/CV/CR模式",
          "2": "熟練操作LED VF/IF特性量測+撰寫量測報告",
          "3": "建立LED電氣量測SOP+批次驗收標準建立"
        },
        "importance": 5,
        "weight": "CHROMA 6314A",
        "target_level": "L4B必備(電子負載基礎量測)｜L5A熟練(LED VF/IF量測+報告)｜L6A主導(量測SOP建立)",
        "questions": "CHROMA 6314A如何量測LED在不同電流下的順向電壓？效率如何量測？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "a5",
        "dimension": "頻譜分析儀",
        "ability": "頻譜分析儀(EMI Pre-scan)\n(傳導/輻射雜訊頻譜分析)",
        "levels": {
          "0": "從未使用",
          "1": "了解頻譜分析概念",
          "2": "能操作頻譜分析儀做EMI預掃描+解讀結果",
          "3": "建立EMI Pre-scan規範+有改善超標問題案例"
        },
        "importance": 4,
        "weight": "EMI Pre-scan設備",
        "target_level": "L4B認知(頻譜分析概念)｜L5A熟練(EMI預掃描+問題識別)｜L6A主導(EMI改善規範建立)",
        "questions": "如何用頻譜分析儀找到開關電源的主要EMI諧波頻率？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "b1",
        "dimension": "PIC燒錄器/MPLAB",
        "ability": "PIC燒錄器/MPLAB ICD4\n(PIC18/PIC24/dsPIC量產燒錄/除錯)",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道燒錄流程",
          "2": "熟練量產燒錄+MPLAB除錯+燒錄程式撰寫",
          "3": "建立量產燒錄SOP+防錯機制+指導他人"
        },
        "importance": 5,
        "weight": "MPLAB ICD4/PICKit",
        "target_level": "L4A必備(PIC燒錄基礎)｜L5A熟練(量產燒錄+除錯)｜L5B-L6A主導(量產燒錄SOP建立)",
        "questions": "量產PIC燒錄如何設定ID保護？MPLAB除錯時如何設定斷點追蹤狀態？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "b2",
        "dimension": "J-Link/ST-Link",
        "ability": "J-Link/ST-Link除錯器\n(STM32/GD32 JTAG/SWD除錯)",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作",
          "2": "熟練SWD除錯+暫存器讀取+韌體問題追蹤",
          "3": "建立韌體除錯SOP+複雜韌體問題分析能力"
        },
        "importance": 5,
        "weight": "SEGGER J-Link/ST-Link",
        "target_level": "L4B必備(J-Link基礎操作)｜L5A熟練(SWD除錯+韌體追蹤)｜L6A主導(除錯SOP建立)",
        "questions": "SWD vs JTAG除錯介面差異？如何用J-Link讀取MCU Flash？如何設定硬體斷點追蹤韌體狀態？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "b3",
        "dimension": "CAN/LIN分析儀",
        "ability": "CAN/LIN Bus分析儀\n(Vector/PEAK/Kvaser通訊分析)",
        "levels": {
          "0": "從未使用",
          "1": "了解CAN/LIN分析概念",
          "2": "能操作分析儀擷取解碼CAN/LIN訊框+問題分析",
          "3": "建立CAN/LIN通訊測試SOP+有通訊問題解決案例"
        },
        "importance": 5,
        "weight": "Vector/PEAK/Kvaser",
        "target_level": "L4B必備(CAN分析儀基礎)｜L5A熟練(CAN/LIN訊框解碼+問題分析)｜L6A主導(通訊測試SOP)",
        "questions": "如何用CAN分析儀驗證警示燈控制器的J1939 PGN訊息？LIN排程如何驗證？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "b4",
        "dimension": "版次管控",
        "ability": "韌體版次管控\n(Git/版本號命名/FMRD軟體設計說明書履歷)",
        "levels": {
          "0": "從未使用",
          "1": "了解版本號命名規則(日期型/語意型)與軟體設計說明書履歷概念",
          "2": "熟練使用Git建立量產版本Tag+維護FMRD軟體設計說明書版本履歷表\n  (含：新舊程式名稱/修改日期/修改原因逐版記錄)",
          "3": "建立公司韌體版次管控SOP+有多機種完整版本追溯記錄"
        },
        "importance": 5,
        "weight": "FMRD軟體設計說明書/履歷sheet",
        "target_level": "L4A必備(版本號命名+履歷表概念)｜L5A熟練(Git Tag+FMRD說明書履歷維護)｜L6A主導(版次管控SOP建立)",
        "questions": "量產韌體版本號如何命名（如ECCO-29P-A1822-190114）？Git量產Tag如何管理？FMRD軟體設計說明書履歷表需記錄哪些欄位？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "b5",
        "dimension": "軟體設計說明書",
        "ability": "軟體設計說明書撰寫\n(FMRD格式/流程圖/架構圖/法規確認/散熱確認)",
        "levels": {
          "0": "從未使用",
          "1": "了解軟體設計說明書的結構(履歷/客戶要求/軟體流程圖/架構/散熱確認/法規要求/腳位定義)",
          "2": "能獨立撰寫完整軟體設計說明書含：\n  ・版本履歷(新舊程式名稱/日期/修改說明)\n  ・IC腳位功能定義(GP0~GP5/I/O/功能)\n  ・軟體流程圖/狀態機架構圖\n  ・散熱確認(I×Vf×N×Duty=焦耳/溫升vs SPEC)\n  ・法規要求對應(ECE R65/SAE J595閃頻/DUTY%)",
          "3": "建立公司軟體設計說明書標準模板+有多機種完整文件範例"
        },
        "importance": 5,
        "weight": "FMRD軟體設計說明書模板",
        "target_level": "L4B認知(說明書結構)｜L5A必備(獨立撰寫完整說明書含散熱/法規確認)｜L6A主導(標準模板建立)",
        "questions": "軟體設計說明書散熱確認欄位如何計算(I×Vf×N×Duty=J，溫升vs 75℃ SPEC)？IC腳位功能定義表需要記錄哪些資訊？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "b6",
        "dimension": "軟體驗證",
        "ability": "軟體設計檢核表驗證\n(騏宏FMRD軟體設計檢核表/27項功能驗證)",
        "levels": {
          "0": "從未使用",
          "1": "了解軟體設計檢核表的驗證項目結構",
          "2": "能獨立執行軟體設計檢核表全項驗證(含)：\n  ・軟體名稱/版本/定義檔確認(NO.1-2)\n  ・開關測試/記憶功能/0-1秒↓/1-3秒↑/3-5秒出廠設定(NO.3-8)\n  ・多燈同步確認/各模式同步/跨機種同步(NO.9-12)\n  ・TIMING/DUTY%誤差≤1%/PATTERN數確認(NO.13-14)\n  ・燒錄功能PIN/QC模式/預設模式確認(NO.15-17)\n  ・記憶功能誤動作/延遲時間偵測(NO.26-27)",
          "3": "建立軟體驗證SOP+有自動化驗證腳本或治具設計案例"
        },
        "importance": 5,
        "weight": "騏宏FMRD軟體設計檢核表",
        "target_level": "L4A必備(檢核表項目認知)｜L5A熟練(獨立執行全項驗證，誤差≤1%)｜L6A主導(驗證SOP+自動化治具)",
        "questions": "軟體設計檢核表中TIMING/DUTY%誤差如何量測確認≤1%？記憶功能誤動作測試如何移除輸入電容驗證？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "b7",
        "dimension": "軟體承認",
        "ability": "軟體PPAP承認/量產發布流程\n(樣品確認/燒錄檔發布/客戶簽核)",
        "levels": {
          "0": "從未使用",
          "1": "了解軟體量產承認發布流程步驟",
          "2": "能主導完整軟體量產承認流程含：\n  ・完成軟體設計檢核表全項OK\n  ・送燒錄樣品給客戶/鴻亞確認\n  ・客戶簽核後更新網路硬碟量產燒錄檔\n  ・通知產線確認燒錄版本正確\n  ・維護FMRD軟體設計說明書版本履歷",
          "3": "建立軟體承認SOP+有多機種完整承認記錄"
        },
        "importance": 5,
        "weight": "騏宏軟體承認流程",
        "target_level": "L4B認知(軟體承認流程步驟)｜L5A必備(主導完整承認含樣品確認+量產發布)｜L6A主導(承認SOP建立)",
        "questions": "量產燒錄檔發布前需要完成哪些確認？如何確保產線燒錄版本與承認版本一致？軟體版本承認後如何更新ERP料號與BOM？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "b8",
        "dimension": "ASPICE軟體開發流程",
        "ability": "Automotive SPICE (ASPICE)軟體開發流程\n(SWE.1~SWE.6/軟體需求/架構/詳細設計/整合測試)",
        "levels": {
          "0": "從未使用",
          "1": "了解ASPICE六大軟體工程流程基本概念\n  (SWE.1需求分析/SWE.2架構設計/SWE.3詳細設計/\n   SWE.4單元驗證/SWE.5整合測試/SWE.6軟體資格測試)",
          "2": "能在嵌入式韌體開發中應用ASPICE流程：\n  ・SWE.1:韌體需求文件(輸入:FMRD軟體設計說明書)\n  ・SWE.2:韌體架構設計(狀態機/通訊協議/模組分割)\n  ・SWE.3:詳細設計(流程圖/虛擬碼/介面定義)\n  ・SWE.4:單元測試計畫與記錄\n  ・SWE.5:整合測試(PCBA功能+通訊+閃爍模式)\n  ・SWE.6:軟體設計檢核表全項驗證+客戶承認",
          "3": "主導公司ASPICE Level 2導入+培訓部門成員"
        },
        "importance": 5,
        "weight": "ASPICE/VDA Automotive SPICE",
        "target_level": "L5A必備(ASPICE六大流程認知+SWE.1~SWE.6基礎應用)｜L6A主導(ASPICE Level 2導入)｜L7主導(ASPICE流程體系建立+稽核)",
        "questions": "ASPICE SWE.1~SWE.6各流程的輸入文件與輸出文件是什麼？如何將騏宏現有的FMRD軟體設計說明書與軟體設計檢核表對應到ASPICE流程？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c1",
        "dimension": "鹽霧試驗機",
        "ability": "鹽霧試驗機(NSS/ACSS)\nASTM B117/ISO 9227",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道NaCl濃度/溫度/pH設定",
          "2": "獨立操作+腐蝕等級評估Rating",
          "3": "建立測試規範+失效根因分析+材料改善建議"
        },
        "importance": 5,
        "weight": "WIQA0234",
        "target_level": "L4B必備(NSS試驗基礎操作)｜L5A熟練(腐蝕等級評估Rating)｜L5B-L6A主導(鹽霧測試規範建立)",
        "questions": "NSS試驗NaCl濃度?腐蝕後如何評估等級?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c2",
        "dimension": "振動試驗機EV220",
        "ability": "振動試驗機(EV220)\nISO 16750-3/SAE J1211 PCBA振動可靠度驗證",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道掃頻範圍",
          "2": "獨立操作正弦掃頻+隨機振動+PCBA振動後FCT電氣確認",
          "3": "建立PCBA振動測試規範+焊點疲勞根因分析+減振設計建議"
        },
        "importance": 5,
        "weight": "WIQA0220",
        "target_level": "L4B必備(振動機基礎操作)｜L5A熟練(正弦/隨機振動+PCBA FCT確認)｜L6A主導(振動規範建立)",
        "questions": "如何設定正弦掃頻速率？PCBA振動後如何用FCT確認電氣功能正常？找到共振點後如何評估焊點疲勞風險？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c3",
        "dimension": "機械衝擊試驗機",
        "ability": "機械衝擊試驗機\nIEC 60068-2-27半正弦波",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道半正弦波設定",
          "2": "獨立操作設定峰值加速度/脈衝寬度",
          "3": "建立衝擊測試規範+結構破壞根因分析"
        },
        "importance": 5,
        "weight": "WIQA0216",
        "target_level": "L4B必備(衝擊試驗基礎操作)｜L5A熟練(設定峰值加速度/脈衝寬度)｜L6A主導(衝擊測試規範建立)",
        "questions": "半正弦波設定原理?衝擊後如何評估結構完整性?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c4",
        "dimension": "QUV UV老化",
        "ability": "QUV試驗機(UV加速老化)\nSAE J2020/ISO 4892",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道UVA/UVB燈管差異",
          "2": "獨立操作設定輻照度/溫度/濕潤循環",
          "3": "老化後塑膠件劣化評估+建立允收標準"
        },
        "importance": 4,
        "weight": "WIQA0218",
        "target_level": "L4A認知(QUV燈管差異)｜L5A熟練(設定輻照度/溫度/濕潤循環)｜L5B-L6A主導(UV老化驗證規範)",
        "questions": "UVA-340 vs UVB-313選用差異?老化後如何評估PC燈罩劣化?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c5",
        "dimension": "冷熱衝擊試驗機",
        "ability": "冷熱衝擊試驗機\nIEC 60068-2-14(-40~+85°C)",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道轉換時間設定",
          "2": "獨立操作設定溫度/循環次數",
          "3": "與溫濕循環差異分析+PCB焊點疲勞預測"
        },
        "importance": 4,
        "weight": "WIQA0245",
        "target_level": "L4A認知(冷熱衝擊條件)｜L5A熟練(設定溫度/循環次數/轉換時間)｜L5B-L6A主導(冷熱衝擊規範)",
        "questions": "轉換時間≤30s的目的?冷熱衝擊後如何判斷密封件劣化?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c6",
        "dimension": "防塵試驗機",
        "ability": "防塵試驗機(IP6X)\nIEC 60529滑石粉塵",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道滑石粉粒徑要求",
          "2": "獨立操作設定旋轉/靜止循環",
          "3": "建立防塵測試SOP+改善機構密封設計"
        },
        "importance": 4,
        "weight": "WIQA0215",
        "target_level": "L4A認知(IP6X防塵條件)｜L5A熟練(設定旋轉/靜止循環)｜L5B-L6A主導(防塵測試SOP建立)",
        "questions": "IP6X滑石粉粒徑要求?如何判斷粉塵侵入位置?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c7",
        "dimension": "碎石試驗機",
        "ability": "碎石試驗機(SAE J400)\n道路碎石衝擊外觀",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作",
          "2": "獨立操作設定衝擊角度/次數",
          "3": "塗層/材料改善建議+建立允收標準"
        },
        "importance": 4,
        "weight": "WIQA0221",
        "target_level": "L4A認知(碎石試驗基礎)｜L5A熟練(設定衝擊角度/次數)｜L5B-L6A主導(碎石允收標準建立)",
        "questions": "碎石粒徑規格?PC燈罩碎石後如何評估裂紋等級?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c8",
        "dimension": "Q-SUN試驗機",
        "ability": "Q-SUN Xe-3試驗機\n(全光譜氙燈老化/ISO 4892-2/SAE J2527)",
        "levels": {
          "0": "從未使用",
          "1": "了解Q-SUN與QUV的差異(氙燈 vs UV燈)",
          "2": "能操作Q-SUN設定光照強度/溫度/噴水循環",
          "3": "建立Q-SUN測試規範+有塑膠件/塗裝老化完整驗證案例"
        },
        "importance": 5,
        "weight": "WIQA0218關聯",
        "target_level": "L4B認知(Q-SUN與QUV差異)｜L5A熟練(操作設定光照強度/溫度/噴水)｜L6A主導(Q-SUN規範建立)",
        "questions": "Q-SUN vs QUV各適用何種老化驗證情境?氙燈過濾片(窗玻璃型 vs 日光型)如何選擇?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c9",
        "dimension": "高溫試驗箱",
        "ability": "高低溫試驗箱/高溫老化試驗\n(IEC 60068-2-2/SAE J1455高溫耐久)",
        "levels": {
          "0": "從未使用",
          "1": "了解高溫試驗目的與條件設定",
          "2": "能操作設定高溫試驗條件+判讀老化失效",
          "3": "建立高溫耐久試驗SOP+有高溫失效根因分析+材料改善案例"
        },
        "importance": 5,
        "weight": "騏宏選配",
        "target_level": "L4B認知(高溫試驗條件)｜L5A熟練(操作設定+老化失效判讀)｜L5B-L6A主導(高溫耐久規範建立)",
        "questions": "LED警示燈高溫試驗條件如何設定?+85°C/1000h試驗後如何評估密封件與塑膠件劣化?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c10",
        "dimension": "耐化學腐蝕測試",
        "ability": "耐化學腐蝕測試(PCBA/Conformal Coating)\n(IEC 60068-2-43/WIQA1202 車載化學品)",
        "levels": {
          "0": "從未使用",
          "1": "了解PCBA耐化學測試目的與常用車載化學品清單",
          "2": "能規劃PCBA Conformal Coating耐化學測試+執行浸泡/噴塗+電氣功能評估",
          "3": "建立PCBA耐化學測試SOP+有防護塗層選型改善案例"
        },
        "importance": 5,
        "weight": "WIQA1202",
        "target_level": "L4B認知(車載化學品清單)｜L5A熟練(規劃測試+Conformal Coating評估)｜L6A主導(耐化學SOP建立)",
        "questions": "警示燈PCBA常接觸哪些化學品(機油/煞車液/清潔劑/電池酸液)？Conformal Coating耐化學性如何評估？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c11",
        "dimension": "防護塗層腐蝕測試",
        "ability": "PCBA防護塗層(Conformal Coating)相容性與腐蝕測試\n(丙烯酸/矽膠/聚氨酯塗層耐久性)",
        "levels": {
          "0": "從未使用",
          "1": "了解Conformal Coating與PCBA基材的相容性概念",
          "2": "能規劃防護塗層相容性測試+腐蝕評估+老化後絕緣電阻測試",
          "3": "建立防護塗層驗證SOP+有多種塗層系統完整驗證案例"
        },
        "importance": 5,
        "weight": "騏宏實驗室",
        "target_level": "L5A必備(防護塗層相容性認知)｜L5B熟練(相容性測試+絕緣評估)｜L6A主導(防護塗層驗證SOP建立)",
        "questions": "Conformal Coating與FR4 PCB/LED封裝/連接器塑膠的相容性如何驗證？老化後剝離強度如何測試？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c12",
        "dimension": "電子零件破壞測試",
        "ability": "電子零件破壞性測試\n(LED拉力/焊點剪切/連接器插拔壽命/引腳彎折)",
        "levels": {
          "0": "從未使用",
          "1": "了解常見電子零件機械破壞測試方法",
          "2": "能規劃電子零件破壞測試計畫+執行測試+評估選材",
          "3": "建立電子零件破壞測試矩陣+有多種零件比較選型案例"
        },
        "importance": 5,
        "weight": "WIQA0231關聯",
        "target_level": "L4B認知(電子零件機械測試方法)｜L5A熟練(規劃執行破壞測試+選材評估)｜L6A主導(測試矩陣建立)",
        "questions": "如何測試LED焊點的拉力強度？連接器插拔壽命如何定義測試條件？引腳彎折後如何評估電氣功能？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c13",
        "dimension": "PCBA半成品破壞測試",
        "ability": "PCBA半成品破壞性測試\n(SMT焊點拉力/BGA剪切力/灌膠黏著力/銅箔附著力)",
        "levels": {
          "0": "從未使用",
          "1": "了解PCBA半成品破壞測試的目的",
          "2": "能規劃PCBA半成品破壞測試計畫+執行測試+分析失效位置",
          "3": "建立PCBA半成品破壞測試SOP+有從失效位置回饋SMT製程改善案例"
        },
        "importance": 5,
        "weight": "騏宏實驗室",
        "target_level": "L5A必備(PCBA半成品破壞測試認知)｜L5B熟練(規劃執行+分析失效位置)｜L6A主導(半成品測試SOP)",
        "questions": "SMT焊點拉力測試如何設定測試速率？BGA剪切力如何評估焊點可靠度？從破壞位置如何判斷是設計還是製程問題？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c14",
        "dimension": "整燈電氣破壞測試",
        "ability": "整燈最終電氣破壞性測試\n(過壓破壞/反向破壞/過電流/絕緣擊穿)",
        "levels": {
          "0": "從未使用",
          "1": "了解整燈電氣破壞測試的目的",
          "2": "能規劃整燈電氣破壞測試計畫+執行測試+分析失效模式",
          "3": "建立整燈電氣破壞測試SOP+有從破壞分析到電路強化的完整案例"
        },
        "importance": 5,
        "weight": "騏宏實驗室",
        "target_level": "L5A必備(整燈電氣破壞測試認知)｜L5B熟練(規劃執行+分析失效模式)｜L6A主導(電氣破壞測試SOP)",
        "questions": "整燈過壓破壞測試電壓如何設定？反向電壓破壞如何評估電路保護裕度？絕緣擊穿後如何判斷設計薄弱點？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c15",
        "dimension": "氣壓/水壓密封壓力測試",
        "ability": "氣壓/水壓密封壓力測試\n(IP67/IP68/IP69K 密封驗證 / 抽真空 / 氣密洩漏測試)\n騏宏實驗室(抽真空機/壓力桶)",
        "levels": {
          "0": "1~0.15m\n  ・氣密測試：用抽真空機/壓力桶對燈具施加正/負壓\n    確認洩漏率（壓差法 Pressure Decay Method）",
          "1": "了解警示燈 IP 防護等級壓力測試原理與設備，知道：\n  ・IP67：水深 1m / 30分鐘浸水\n  ・IP68：水深 >1m / 客戶指定時間\n  ・IP69K：高壓蒸氣 80°C / 80 bar / 距離",
          "2": "能獨立執行完整壓力密封測試含：\n  ・設定測試壓力(Pa)/保壓時間/允收洩漏率門檻\n  ・IP67/IP68 水浸測試設定（水壓/時間/溫度）\n  ・IP69K 蒸氣高壓沖刷角度/距離/壓力設定\n  ・測試後電氣功能確認（FCT）及外觀/水滲入確認\n  ・骨膠/密封圈/出線孔填膠失效分析\n  ・溫度交變後密封耐久確認（熱脹冷縮效應）",
          "3": "建立 IP 壓力密封測試 SOP + 有失效根因分析回饋密封設計改善案例"
        },
        "importance": 5,
        "weight": "騏宏實驗室(抽真空機/壓力桶/IP67-69K)",
        "target_level": "L4B必備(IP67/68/69K測試方法認知)｜L5A熟練(獨立執行全IP等級壓力測試+FCT確認)｜L6A主導(IP壓力密封測試SOP+失效分析+密封設計改善)",
        "questions": "IP67與IP68測試條件差異為何？氣密測試壓差法(Pressure Decay)的洩漏率允收門檻如何設定？溫度循環後密封圈失效的根本原因如何分析？灌膠出線孔氣密測試如何確認？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c16",
        "dimension": "HALT/HASS 加速壽命應力篩選",
        "ability": "HALT/HASS 加速壽命應力篩選\n(Highly Accelerated Life/Stress Screen)\n高溫/低溫步進應力 + 振動步進應力",
        "levels": {
          "0": "從未使用",
          "1": "了解 HALT/HASS 的目的與應力篩選概念：\n  ・HALT（高加速壽命測試）：快速找到設計弱點\n    – 溫度步進：-100°C ~ +180°C，每步 10°C，停留 10 分鐘\n    – 振動步進：5 ~ 60 Grms（隨機多軸振動）\n    – 溫度+振動組合應力\n  ・HASS（高加速應力篩選）：量產篩選潛在缺陷\n    – 以 HALT 找到的操作極限設計 HASS 剖面",
          "2": "能配合執行 HALT/HASS 應力測試含：\n  ・HALT 溫度步進設定+每步功能確認（LED 發光/CAN 通訊/閃爍 Pattern）\n  ・HALT 振動步進+監控 PCBA 電氣功能異常\n  ・記錄首次失效點（FOTF/LODL）\n  ・失效模式分析：焊點疲勞/電容失效/連接器鬆動/韌體 Crash\n  ・HASS 剖面制定建議（以 HALT 結果為基礎）",
          "3": "建立 HALT 應力測試 SOP + 有 HALT 失效分析回饋設計強化完整案例"
        },
        "importance": 5,
        "weight": "HALT/HASS 試驗設備",
        "target_level": "L5A必備(HALT/HASS概念+應力步進方法)｜L5B熟練(配合執行HALT+失效模式分析)｜L6A主導(HALT測試SOP+HASS剖面制定+設計強化)",
        "questions": "HALT 溫度步進測試每步停留時間如何設定？振動步進 Grms 如何逐步提升？首次失效點（FOTF）如何記錄與分析根因？HALT 結果如何用於制定量產 HASS 剖面？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c17",
        "dimension": "熱應力與熱循環壓力測試",
        "ability": "熱應力 / 熱循環壓力測試\n(Thermal Stress / Temperature Cycling Stress)\nSMT 焊點熱疲勞 / PCBA 熱應力裂紋",
        "levels": {
          "0": "從未使用",
          "1": "了解熱應力對 PCBA 元件的影響機制：\n  ・熱膨脹係數（CTE）不匹配導致焊點熱疲勞裂紋\n  ・PCB 基材 CTE（14~17 ppm/°C）vs 陶瓷電容（6~9 ppm/°C）\n  ・BGA/QFN 封裝熱循環疲勞失效模式\n  ・溫度循環加速因子（Coffin-Manson 方程式）",
          "2": "能執行 PCBA 熱應力壓力測試含：\n  ・設定熱循環剖面：溫度範圍/升降溫速率/保溫時間/循環次數\n    例如：-40°C ~ +85°C，升降溫速率 15°C/min，各保溫 15 分鐘\n  ・熱循環中監控電氣功能（in-situ 監控或定期 FCT）\n  ・熱循環後切片分析（Cross-section）確認焊點裂紋\n  ・X-ray 確認 BGA Void 在熱循環後的變化\n  ・失效分析：裂紋位置（焊點頸部 vs 焊盤界面）",
          "3": "建立 PCBA 熱應力壓力測試 SOP + 有熱疲勞失效分析回饋 PCB 設計改善案例"
        },
        "importance": 5,
        "weight": "IEC 60068-2-14 / JEDEC JESD22-A104",
        "target_level": "L4B認知(CTE不匹配熱疲勞機制)｜L5A熟練(熱循環剖面設定+in-situ監控+切片失效分析)｜L6A主導(熱應力壓力測試SOP+疲勞失效分析+PCB設計改善)",
        "questions": "CTE 不匹配如何導致 BGA 焊點熱疲勞裂紋？Coffin-Manson 方程式如何用於估算焊點壽命？熱循環後切片分析如何確認裂紋位置與嚴重程度？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c18",
        "dimension": "成品機械破壞性測試",
        "ability": "成品整燈機械破壞性測試\n(Destructive Testing – 拉力/扭力/衝擊/墜落破壞)\n騏宏實驗室",
        "levels": {
          "0": "從未使用",
          "1": "了解成品機械破壞性測試的目的與測試方法分類：\n  ・找出成品機械結構的破壞臨界值與安全裕度\n  ・確認設計強度是否超過使用壽命要求的疲勞極限",
          "2": "能規劃與執行整燈成品機械破壞性測試含：\n  ・安裝拉力測試：燈具安裝後施加軸向拉力直至脫落\n    記錄破壞力值(N)與破壞位置（腳架/螺孔/燈體接合）\n  ・扭力破壞測試：鎖附螺絲施加漸增扭矩直至滑牙/斷裂\n    確認最大破壞扭矩 vs 規格扭矩的安全裕度（>3x）\n  ・衝擊墜落破壞：模擬運輸/安裝失誤場景的跌落撞擊\n    記錄破壞高度/衝擊能量(J)與失效模式\n  ・靜載壓縮破壞：燈罩/外殼施加靜態壓力直至破裂\n    確認破裂力值(N)與破壞模式（脆性/延性）\n  ・測試後切片/影像記錄+失效模式分析報告",
          "3": "建立成品機械破壞測試 SOP + 有破壞值回饋結構設計強化完整案例"
        },
        "importance": 5,
        "weight": "騏宏實驗室",
        "target_level": "L4B認知(成品機械破壞測試方法)｜L5A熟練(規劃執行拉力/扭力/衝擊破壞測試+失效分析)｜L6A主導(機械破壞測試SOP+安全裕度分析+結構設計改善)",
        "questions": "警示燈安裝拉力破壞測試如何設定載荷速率？扭力破壞測試安全裕度如何計算(>3x)?靜載壓縮破壞後如何判斷是脆性斷裂還是延性破壞？破壞位置如何回饋機構設計？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c19",
        "dimension": "防護殼體破壞性測試",
        "ability": "防護殼體/透鏡/燈罩破壞性測試\n(Destructive Testing – 外殼衝擊/透鏡壓縮/UV破壞)\n騏宏實驗室",
        "levels": {
          "0": "從未使用",
          "1": "了解防護殼體破壞性測試的目的：\n  ・評估外殼材料（PC/ABS/PA66）在極限條件下的強度\n  ・確認透鏡/燈罩在機械與環境應力下的耐久性",
          "2": "能規劃與執行防護殼體破壞性測試含：\n  ・擺錘衝擊破壞（Charpy/Izod）：\n    材料衝擊強度 kJ/m² 量測+破壞斷口形態分析\n  ・透鏡壓縮破壞：\n    施加靜態壓力直至龜裂，記錄破壞力(N)與裂紋模式\n  ・外殼高低溫脆化破壞：\n    -40°C 冷凍後立即衝擊，確認低溫脆化臨界溫度\n  ・UV 加速老化破壞：\n    設定 UV 輻照強度/時間 直至透鏡黃化/霧化/龜裂\n    記錄破壞時間(h)與光學透過率衰減曲線\n  ・螺孔疲勞破壞：\n    反覆鎖附/拆卸螺絲直至螺孔滑牙，記錄壽命次數",
          "3": "建立防護殼體破壞性測試 SOP + 有材料選型改善建議的完整案例"
        },
        "importance": 5,
        "weight": "騏宏實驗室 / IEC 60068-2-75",
        "target_level": "L4B認知(外殼材料衝擊/壓縮破壞測試方法)｜L5A熟練(規劃執行擺錘衝擊/UV破壞/低溫脆化測試+斷口分析)｜L6A主導(殼體破壞測試SOP+材料選型改善)",
        "questions": "PC vs ABS 材料的衝擊強度(kJ/m²)差異？低溫脆化(-40°C)後衝擊測試如何設計？UV 老化破壞測試輻照強度如何設定加速因子？透鏡黃化後光學透過率如何量測？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c20",
        "dimension": "線材連接器破壞性測試",
        "ability": "線材/連接器破壞性測試\n(Destructive Testing – 拉力/插拔壽命/彎折/鹽霧腐蝕破壞)\n騏宏實驗室",
        "levels": {
          "0": "從未使用",
          "1": "了解線材/連接器破壞性測試目的：\n  ・確認連接器/線材在極限使用條件下的失效模式\n  ・找出插拔壽命設計裕度與接觸電阻劣化臨界點",
          "2": "能規劃與執行線材/連接器破壞性測試含：\n  ・連接器插拔壽命破壞測試：\n    反覆插拔直至接觸失效，記錄失效次數與接觸電阻劣化曲線\n    警示燈連接器壽命要求：通常 > 200 次插拔\n  ・線材拉力破壞測試：\n    施加軸向拉力直至線芯斷裂或端子脫出\n    記錄破壞力(N)與失效位置（端子壓接 vs 線材本體）\n  ・線材彎折疲勞破壞：\n    反覆彎折（±90°）直至斷芯，記錄壽命次數\n    出線孔彎折半徑對壽命的影響分析\n  ・連接器腐蝕破壞（鹽霧後插拔力測試）：\n    鹽霧 96h 後測試插拔力/接觸電阻增量確認腐蝕程度\n  ・端子壓接截面分析：破壞後切片確認壓接品質",
          "3": "建立線材/連接器破壞性測試 SOP + 有失效分析回饋設計改善案例"
        },
        "importance": 5,
        "weight": "騏宏實驗室 / IEC 60068-2-21",
        "target_level": "L4B認知(連接器插拔壽命/線材拉力破壞方法)｜L5A熟練(規劃執行插拔壽命/彎折疲勞/腐蝕破壞測試+失效分析)｜L6A主導(線材連接器破壞測試SOP+設計改善)",
        "questions": "警示燈連接器插拔壽命要求幾次？線材拉力破壞測試如何判斷失效位置是端子壓接還是線材本體？出線孔彎折半徑如何影響線材疲勞壽命？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c21",
        "dimension": "灌膠材料破壞性測試",
        "ability": "灌膠層破壞性測試\n(Destructive Testing – 剝離/剪切/熱衝擊/氣泡定位破壞)\n騏宏實驗室",
        "levels": {
          "0": "從未使用",
          "1": "了解灌膠材料破壞性測試目的：\n  ・評估 PU/矽膠/環氧灌膠層的黏著強度與熱衝擊耐久性\n  ・確認灌膠氣泡對結構強度與防水性的影響",
          "2": "能規劃與執行灌膠材料破壞性測試含：\n  ・灌膠剝離強度測試：\n    對鋁底座/PCB 板面施加剝離力直至灌膠層分離\n    記錄剝離強度(N/mm)與失效界面（黏著失效 vs 凝集失效）\n  ・灌膠剪切強度測試：\n    對灌膠面施加剪切力，確認灌膠層耐剪切強度\n  ・熱衝擊破壞測試（-40°C ↔ +85°C，快速切換）：\n    熱衝擊後對灌膠層施加剝離力，確認熱應力後黏著性退化程度\n    X-ray 確認熱衝擊後灌膠氣泡是否擴展\n  ・氣泡定位破壞確認：\n    對已知含氣泡的樣品施加壓力確認氣泡位置對防水性的影響\n  ・灌膠層耐化學破壞：\n    浸泡車載化學品後施加剝離力，確認耐化學後強度保留率",
          "3": "建立灌膠材料破壞性測試 SOP + 有灌膠製程改善完整案例"
        },
        "importance": 5,
        "weight": "騏宏實驗室 / WIQA0233",
        "target_level": "L4B認知(灌膠剝離/剪切破壞測試方法)｜L5A熟練(規劃執行灌膠剝離/熱衝擊破壞測試+失效界面分析)｜L6A主導(灌膠破壞測試SOP+製程改善)",
        "questions": "PU 灌膠剝離失效是黏著失效還是凝集失效，各代表什麼設計/製程問題？熱衝擊後灌膠黏著性退化如何量化？灌膠氣泡如何影響防水密封強度？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "c22",
        "dimension": "電氣元件應力破壞性測試",
        "ability": "電氣元件應力破壞性測試\n(Destructive Testing – LED/MOSFET/電容 電應力/熱應力破壞)\n騏宏實驗室",
        "levels": {
          "0": "從未使用",
          "1": "了解電氣元件應力破壞性測試目的：\n  ・找出 LED/MOSFET/電容等關鍵元件的電應力/熱應力破壞臨界值\n  ・確認設計工作點與最大額定值之間的安全裕度",
          "2": "能規劃與執行電氣元件應力破壞性測試含：\n  ・LED 電流應力破壞：\n    逐步提升 LED 電流（步進 10%）直至光通量驟降 >50%\n    記錄破壞電流值 vs 標稱最大電流，確認設計裕度（>50%）\n  ・LED 熱應力破壞：\n    提升 Tj（結溫）逐步至 LED 失效，確認最高允許 Tj\n    結合熱像儀確認散熱路徑熱阻\n  ・MOSFET 過電流/過電壓破壞：\n    施加過電流/過電壓至破壞，記錄 SOA（Safe Operating Area）\n    確認保護電路動作裕度（保護觸發點 vs MOSFET 破壞點）\n  ・電解電容壽命應力破壞：\n    在高溫（+105°C）+ 額定電壓下連續加壓至失效（鼓包/洩漏）\n    記錄 MTTF 並確認設計壽命是否達標（>50,000h）\n  ・TVS/ESD 保護元件破壞：\n    施加超過額定值的浪湧電流直至破壞，確認保護裕度",
          "3": "建立電氣元件應力破壞性測試 SOP + 有元件選型改善完整案例"
        },
        "importance": 5,
        "weight": "騏宏實驗室 / JEDEC JESD22系列",
        "target_level": "L5A必備(電氣元件電應力/熱應力破壞測試方法)｜L5B熟練(規劃執行LED/MOSFET/電容應力破壞測試+SOA分析)｜L6A主導(電氣元件應力破壞測試SOP+選型改善)",
        "questions": "LED 電流應力破壞測試設計安全裕度如何設定(>50%)?MOSFET SOA（Safe Operating Area）如何驗證？電解電容高溫壽命應力測試如何推算 MTTF？TVS 保護裕度如何確認？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "d1",
        "dimension": "EMI CISPR25",
        "ability": "EMI CISPR 25實驗室\n傳導/輻射 電路/PCB屏蔽設計輔助",
        "levels": {
          "0": "從未使用",
          "1": "見過測試環境知道傳導/輻射概念",
          "2": "可配合硬體設計機構屏蔽方案",
          "3": "獨立分析機構屏蔽路徑主導EMC設計改善"
        },
        "importance": 4,
        "weight": "WIQA0219",
        "target_level": "L5A認知(EMI傳導/輻射概念)｜L5B熟練(配合硬體設計機構屏蔽方案)｜L6A主導(EMC路徑分析)",
        "questions": "機構接縫位置對EMI輻射有何影響?如何設計屏蔽結構?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "d2",
        "dimension": "BCI大電流注入",
        "ability": "BCI大電流注入試驗機\nISO 11452-4",
        "levels": {
          "0": "從未使用",
          "1": "基礎了解BCI測試原理",
          "2": "可操作設定測試等級",
          "3": "可分析電路接地路徑對BCI結果的影響"
        },
        "importance": 3,
        "weight": "WIQA0224",
        "target_level": "L5A認知(BCI測試原理)｜L5B加分(操作設定測試等級)｜L6A主導(電路接地路徑影響分析)",
        "questions": "BCI Level 1~5各對應何種車型?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "d3",
        "dimension": "ESD靜電模擬器",
        "ability": "ESD靜電放電模擬器\nIEC 61000-4-2/ISO 10605",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作知道接觸/空氣放電差異",
          "2": "獨立操作可評估外殼設計對ESD路徑影響",
          "3": "電路接地路徑設計優化建立ESD防護設計指引"
        },
        "importance": 4,
        "weight": "WIQA0241",
        "target_level": "L4B認知(ESD接觸/空氣放電差異)｜L5A熟練(操作評估外殼設計路徑)｜L6A主導(ESD防護設計指引)",
        "questions": "接觸放電 vs空氣放電差異?機構外殼如何設計確保ESD洩放?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "e1",
        "dimension": "AOI自動光學檢測",
        "ability": "AOI自動光學檢測機\n(SMT焊接品質/偏移/缺件/橋接)",
        "levels": {
          "0": "從未使用",
          "1": "了解AOI檢測原理與SMT焊接缺陷分類",
          "2": "能操作AOI設定程式+判讀偵測結果+提出SMT改善建議",
          "3": "建立AOI量產規範+有偽報率(False Call)優化案例"
        },
        "importance": 4,
        "weight": "SMT AOI設備",
        "target_level": "L4A認知(AOI原理)｜L5A熟練(AOI操作+結果判讀+SMT改善)｜L5B-L6A主導(AOI量產規範建立)",
        "questions": "AOI偽報(False Call)如何降低？偏移超過多少算不合格？如何設定AOI程式減少漏偵測？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "e2",
        "dimension": "X-ray SMT焊點",
        "ability": "X-ray SMT焊點/BGA/灌膠氣泡檢測\n(焊點品質/Void率/BGA導通)",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作可判讀X-ray影像",
          "2": "熟練操作建立BGA Void率允收標準+灌膠氣泡分析",
          "3": "X-ray+失效分析整合+改善SMT製程/灌膠設計並有量化改善案例"
        },
        "importance": 4,
        "weight": "WIQA0223",
        "target_level": "L4B認知(X-ray影像判讀)｜L5A熟練(Void率允收標準建立+失效分析)｜L6A主導(X-ray+失效分析整合)",
        "questions": "BGA Void率多少以下算合格(IPC-7711)？X-ray如何確認QFN底部焊錫品質？灌膠後X-ray如何確認無氣泡？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "e3",
        "dimension": "ICT/FCT測試機",
        "ability": "ICT/FCT線上電氣測試機\n(量產PCBA電氣功能全自動測試)",
        "levels": {
          "0": "從未使用",
          "1": "了解ICT/FCT測試原理與量產測試覆蓋率概念",
          "2": "能配合設計ICT/FCT測試程式+量產導入+測試覆蓋率定義",
          "3": "建立FCT測試規範+自動化測試架構+有量產導入成功案例"
        },
        "importance": 5,
        "weight": "量產FCT設備",
        "target_level": "L4B認知(ICT/FCT概念)｜L5A必備(FCT設計+量產導入)｜L6A主導(FCT測試規範建立+覆蓋率管理)",
        "questions": "如何設計PCBA的FCT夾具接觸點確保良好接觸？FCT測試覆蓋率如何定義達到100%？測試失敗如何快速定位問題？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "e4",
        "dimension": "LCR量表",
        "ability": "LCR量表\n(電感/電容/電阻精密量測)",
        "levels": {
          "0": "從未使用",
          "1": "基礎操作",
          "2": "熟練量測+選擇正確測試頻率+知道等效電路",
          "3": "建立元件量測SOP+有元件異常判斷案例"
        },
        "importance": 4,
        "weight": "HIOKI/GW Instek LCR",
        "target_level": "L4A認知(LCR量測基礎)｜L5A熟練(正確頻率量測+等效電路)｜L5B-L6A主導(量測規範)",
        "questions": "電感在不同頻率下如何選擇測試頻率？電解電容如何用LCR量測ESR？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "e5",
        "dimension": "信號產生器/AWG",
        "ability": "信號產生器/任意波形產生器(AWG)\n(CAN/LIN/PWM信號模擬/瞬態波形產生)",
        "levels": {
          "0": "從未使用",
          "1": "了解信號產生器產生標準波形概念",
          "2": "能操作AWG產生標準波形+CAN/LIN信號模擬+ISO 7637瞬態波形",
          "3": "建立信號模擬測試SOP+有複雜波形模擬驗證案例"
        },
        "importance": 4,
        "weight": "量測設備",
        "target_level": "L4B認知(信號產生器操作)｜L5A熟練(CAN/LIN信號模擬+ISO7637波形產生)｜L5B-L6A主導(信號測試SOP)",
        "questions": "如何用AWG產生符合ISO 7637的Pulse 1瞬態波形進行電路耐壓測試？如何模擬CAN Bus差動信號驗證收發器？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "e6",
        "dimension": "功率分析儀",
        "ability": "功率分析儀\n(效率/功率因數/電流諧波量測)",
        "levels": {
          "0": "從未使用",
          "1": "了解功率分析量測原理",
          "2": "能操作量測電源轉換效率+電流諧波分析+Crest Factor",
          "3": "建立電源效率量測SOP+有LED驅動效率優化改善案例"
        },
        "importance": 3,
        "weight": "功率分析設備",
        "target_level": "L5A認知(功率量測原理)｜L5B熟練(效率+諧波量測)｜L6A主導(電源效率量測規範建立)",
        "questions": "如何量測LED警示燈整燈的電源轉換效率？電流諧波超標時如何改善濾波設計？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "e7",
        "dimension": "絕緣電阻測試儀",
        "ability": "絕緣電阻測試儀/HiPot耐壓測試機\n(ISO 16750-2絕緣等級/HiPot耐壓驗證)",
        "levels": {
          "0": "從未使用",
          "1": "了解絕緣電阻測試與HiPot耐壓測試原理",
          "2": "能操作絕緣電阻量測+HiPot耐壓測試+判讀測試結果",
          "3": "建立電氣安全測試規範+有高壓設計(60~100V)耐壓驗證案例"
        },
        "importance": 3,
        "weight": "HiPot測試設備",
        "target_level": "L4B認知(絕緣測試原理)｜L5A熟練(絕緣電阻+HiPot操作)｜L6A主導(電氣安全測試規範建立)",
        "questions": "ISO 16750-2絕緣電阻測試條件(1MΩ/500VDC)？HiPot測試電壓如何設定？直流高壓60~100V電路絕緣如何驗證？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "f1",
        "dimension": "FLIR熱像儀E86",
        "ability": "FLIR E86 熱像儀\n(464×348像素/±2℃精度/-20~1500℃/IP54防護)\n騏宏設備",
        "levels": {
          "0": "從未使用",
          "1": "了解FLIR E86基本操作與熱像圖判讀原理，知道以下規格：\n  ・紅外線解析度：464×348像素(161,472像素)\n  ・UltraMax®解析度：645,888像素\n  ・量測範圍：-20~120°C / 0~650°C / 300~1,500°C\n  ・精度：±2°C或±2%讀值\n  ・F值：1.3 / 影像更新率：30Hz",
          "2": "能操作FLIR E86對PCBA進行熱點分析含：\n  ・AutoCal™鏡頭識別+MSX®/UltraMax®影像增強設定\n  ・雷射測距功能(m²或ft²面積測量)\n  ・設定熱點(Hot Spot)/冷點(Cold Spot)/中心點溫度量測模式\n  ・識別LED Driver IC/MOSFET/高電流走線的熱點位置\n  ・LED警示燈燒機後整燈熱分佈確認(最高溫點≤75°C)\n  ・FLIR Thermal Studio匯出報告",
          "3": "建立PCBA熱測試SOP+有從熱像分析回饋散熱改善設計的完整案例\n  ・FLIR Inspection Route™預定路線模式批次設備巡檢"
        },
        "importance": 4,
        "weight": "PDIC震儀科技/FLIR E86規格書",
        "target_level": "L4B認知(FLIR E86基本操作+熱像圖判讀)｜L5A熟練(PCBA熱點分析+LED燒機熱分佈確認+報告輸出)｜L6A主導(PCBA熱測試SOP建立+改善設計回饋)",
        "questions": "FLIR E86量測範圍最大可達幾度(°C)？精度為何(±2°C vs ±2%)?如何設定熱點模式確認LED Driver IC的散熱是否超標？MOSFET結溫Tj如何從熱像圖推算junction temperature?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "f2",
        "dimension": "X-ray焊點/灌膠",
        "ability": "善思 View X2000/2300 X-ray檢測機\n(100/130kV 5μm焦點/±70°傾斜/BGA Void自動分析)\n騏宏設備",
        "levels": {
          "0": "從未使用",
          "1": "了解X-ray焊點/灌膠氣泡檢測原理，知道以下規格：\n  ・X光管電壓：X2000=100kV / X2300=130kV\n  ・焦點尺寸：5微米(Focal Spot Size 5 micron)\n  ・系統放大倍率：1000倍(X2000) / 1200倍(X2300)\n  ・載物台傾斜：±70度(可斜角檢測BGA側面)\n  ・影像解析度：60+lp/mm / 速度32fps\n  ・應用：BGA焊點/SMT Void/灌膠氣泡/封裝元件",
          "2": "能操作X-ray進行PCBA/灌膠氣泡檢測含：\n  ・設定電壓(kV)/電流(μA)/亮度/對比度/曝光度\n  ・使用X-Y-Z軸+±70°傾斜載物台定位目標部位\n  ・BGA焊點Void率自動分析(直徑/空洞比例/面積/圓度)\n  ・判讀BGA焊點Void率允收標準(IPC-7711: <25%)\n  ・QFN底部焊錫均勻性確認\n  ・灌膠後PCBA氣泡分佈確認+允收標準建立",
          "3": "建立X-ray量測SOP+有從X-ray發現問題回饋SMT製程/灌膠改善的完整案例\n  ・CNC程式設定批次自動BGA檢測程序"
        },
        "importance": 4,
        "weight": "善思X-RAY X2000/2300規格書",
        "target_level": "L4B認知(X-ray原理+BGA Void判讀)｜L5A熟練(電壓/電流設定+Void率自動分析+允收標準建立)｜L6A主導(X-ray量測SOP+批次CNC程式+失效分析整合)",
        "questions": "X-ray X2000和X2300的主要規格差異是什麼(kV/放大倍率)?BGA Void率多少以下算合格(IPC-7711)?如何設定±70°傾斜角度從側面確認BGA焊點連接品質?灌膠後X-ray如何確認無氣泡殘留?"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "f3",
        "dimension": "黏度計RION VT-06",
        "ability": "黏度計(RION VT-06 / 螺旋式PC-11)\n(PU/矽膠/環氧灌膠前黏度管制/mPa·s)\n騏宏設備",
        "levels": {
          "0": "從未使用",
          "1": "了解黏度計測試原理與騏宏灌膠材料的黏度管制概念，知道：\n  ・RION VT-06 旋轉式黏度計量測範圍：約40~400,000 mPa·s\n  ・PC-11 螺旋式黏度計：可測試LED材料/電子材料\n    AA機型最大可測定2000 Pa·s(=2,000,000 mPa·s)\n    獨特螺旋感測器可精確測試非牛頓流體\n    USB連接電腦，自動測定資料與資料分析\n  ・灌膠用材料黏度範圍：\n    PU雙液灌膠膠：通常500~3,000 mPa·s(依配比/溫度)\n    矽膠(Silicone)：1,000~10,000 mPa·s\n    環氧樹脂(Epoxy)：500~50,000 mPa·s",
          "2": "能操作黏度計執行灌膠前黏度管制含：\n  ・選擇正確旋轉子(Spindle)並設定轉速\n  ・依製程SOP確認灌膠材料A/B劑混合後黏度\n  ・溫度對黏度影響確認(溫度升高黏度降低)\n  ・黏度偏高(>上限)：確認A/B劑比例/溫度/攪拌時間\n  ・黏度偏低(<下限)：確認材料批號/效期/儲存溫度\n  ・記錄量測值並判定是否符合灌膠製程管制範圍",
          "3": "建立灌膠前黏度管制SOP+有黏度偏差根因分析+灌膠品質改善案例"
        },
        "importance": 5,
        "weight": "RION VT-06 / PC-11螺旋式黏度計",
        "target_level": "L4B必備(黏度計操作+灌膠黏度管制目的)｜L5A熟練(A/B劑混合後黏度確認+異常黏度根因分析)｜L6A主導(灌膠前黏度管制SOP建立+製程改善)",
        "questions": "PU灌膠A/B劑混合後黏度管制範圍(mPa·s)？黏度偏高時如何排查是A/B配比問題還是溫度問題？溫度對PU灌膠黏度的影響為何？PC-11螺旋式黏度計適合量測哪類非牛頓流體？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "f4",
        "dimension": "耐化學腐蝕測試",
        "ability": "耐化學腐蝕測試(PCBA/Conformal Coating)\n(IEC 60068-2-43/WIQA1202)",
        "levels": {
          "0": "從未使用",
          "1": "了解PCBA耐化學測試目的與常用車載化學品清單",
          "2": "能規劃Conformal Coating耐化學測試+執行+電氣功能評估",
          "3": "建立PCBA耐化學測試SOP+有防護塗層選型改善案例"
        },
        "importance": 5,
        "weight": "WIQA1202",
        "target_level": "L4B認知(車載化學品清單)｜L5A熟練(規劃Conformal Coating耐化學測試+評估)｜L6A主導(SOP建立)",
        "questions": "警示燈PCBA常接觸哪些化學品(機油/煞車液/清潔劑/電池酸液)？Conformal Coating耐化學性如何評估？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "g1",
        "dimension": "回焊爐+爐溫曲線",
        "ability": "回焊爐(氮氣Reflow Oven)\n(PCB/元件耐熱設計/爐溫曲線理解)",
        "levels": {
          "0": "不了解",
          "1": "知道回焊爐各溫區概念了解峰溫",
          "2": "了解爐溫曲線對PCBA可靠度影響+電子元件耐熱設計限制",
          "3": "協助制定PCBA耐熱設計規範+有改善SMT不良案例"
        },
        "importance": 3,
        "weight": "騏宏SMT",
        "target_level": "L4B認知(回焊爐溫區+峰溫)｜L5A必備(爐溫曲線與PCBA設計關係)｜L5B主導(耐熱設計規範制定)",
        "questions": "SAC305無鉛焊錫峰溫要求？PCB設計高度如何影響SMT通過性？BGA如何設計確保回焊爐通過性？"
      },
      {
        "category": "[Z]  企業基本能力  Enterprise Fundamental Competencies",
        "code": "g2",
        "dimension": "錫膏印刷機+SPI",
        "ability": "",
        "levels": {
          "0": "",
          "1": "",
          "2": "",
          "3": ""
        },
        "importance": 2,
        "weight": "",
        "target_level": "",
        "questions": ""
      }
    ],
    "salary_structure": [
      {
        "grade": "L2A",
        "title_zh": "研發助理",
        "title_en": "R&D Assistant",
        "salary_min": "29500",
        "salary_mid": "31000",
        "salary_max": "35000",
        "requirements": "電路圖閱讀 / 元件識別 / 協助PCBA測試 / 文件整理",
        "promotion": "基礎電路概念建立 / 協助量產PCBA測試 / FMRD文件輔助整理 / 學習ECE R65閃頻概念",
        "amoeba": "學習者/支援者"
      },
      {
        "grade": "L3A",
        "title_zh": "助理韌體(電子.硬體)工程師",
        "title_en": "Asst. FW/HW Eng. Senior",
        "salary_min": "36000",
        "salary_mid": "39000",
        "salary_max": "43000",
        "requirements": "CAN通訊基礎、電路/韌體基礎、學習IATF",
        "promotion": "SolidWorks基礎、量產<10件、導師帶領",
        "amoeba": "執行者/學習者"
      },
      {
        "grade": "L3B",
        "title_zh": "助理韌體(電子.硬體)工程師(熟)",
        "title_en": "FW/HW Engineer",
        "salary_min": "38000",
        "salary_mid": "41000",
        "salary_max": "45000",
        "requirements": "獨立電路設計、量產PCBA 5+件、EMC/法規認知",
        "promotion": "量產10件以下、IP防水基礎、學習IATF",
        "amoeba": "執行者/學習者"
      },
      {
        "grade": "L4A",
        "title_zh": "韌體(電子.硬體)工程師",
        "title_en": "FW/HW Engineer II",
        "salary_min": "43000",
        "salary_mid": "47000",
        "salary_max": "52000",
        "requirements": "量產PCBA 15件以下、熟1種通訊協議、FMEA參與",
        "promotion": "獨立設計、量產10+件、IP67、ECE/SAE基礎",
        "amoeba": "獨立執行者"
      },
      {
        "grade": "L4B",
        "title_zh": "韌體(電子.硬體)工程師(資)",
        "title_en": "Senior FW/HW Engineer",
        "salary_min": "47000",
        "salary_mid": "52000",
        "salary_max": "58000",
        "requirements": "量產PCBA 20+件、CAN/LIN/UART熟練、IP67電氣整合",
        "promotion": "量產30件以下、熟1種製程、FMEA初步",
        "amoeba": "獨立執行者"
      },
      {
        "grade": "L5A",
        "title_zh": "資深韌體(電子.硬體)工程師",
        "title_en": "Senior FW/HW Engineer II",
        "salary_min": "55000",
        "salary_mid": "62000",
        "salary_max": "70000",
        "requirements": "量產PCBA 30+件、IATF五大完整、EMC認證、韌體架構",
        "promotion": "量產30+件、熟2+製程（鋁擠/LSR/灌膠）、IP69K、IATF3+",
        "amoeba": "Reserve Amoeba Leader"
      },
      {
        "grade": "L5B",
        "title_zh": "資深韌體(電子.硬體)工程師(主)",
        "title_en": "Lead FW/HW Engineer",
        "salary_min": "62000",
        "salary_mid": "68000",
        "salary_max": "76000",
        "requirements": "EMC法規認證主導(ECE/SAE/NFPA)、建立電路SOP、帶領後進",
        "promotion": "量產50+件、IATF五大完整、光學模擬、環測全熟",
        "amoeba": "Reserve Amoeba Leader"
      },
      {
        "grade": "L6A",
        "title_zh": "主任韌體(電子.硬體)工程師",
        "title_en": "Principal FW/HW Engineer",
        "salary_min": "68000",
        "salary_mid": "76000",
        "salary_max": "86000",
        "requirements": "對外電氣技術代表、ISO26262、電路/韌體專利佈局",
        "promotion": "領域帶頭人、法規認證主導(ECE/SAE)、建立SOP、帶領後進",
        "amoeba": "L1 Amoeba巴長"
      },
      {
        "grade": "L6B",
        "title_zh": "資深主任韌體(電子.硬體)工程師",
        "title_en": "Chief FW/HW Engineer",
        "salary_min": "76000",
        "salary_mid": "84000",
        "salary_max": "95000",
        "requirements": "公司電子/韌體最高技術核心、年度策略、跨產品線整合",
        "promotion": "對外技術代表、ISO26262、專利佈局",
        "amoeba": "L1~L2 Amoeba Leader"
      },
      {
        "grade": "L7",
        "title_zh": "首席韌體(電子.硬體)工程師",
        "title_en": "Chief Engineer",
        "salary_min": "88000",
        "salary_mid": "96000",
        "salary_max": "110000",
        "requirements": "P85~P95",
        "promotion": "公司機構最高技術代言、年度策略、跨產品線整合",
        "amoeba": "L2 Amoeba Leader"
      }
    ]
  }
];
