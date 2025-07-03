// languageContent object holds all text content for both English and Tamil
const languageContent = {
  en: {
    headerTitle: "Indian Land & Intellectual Property Regulation",
    headerSubtitle:
      "An Interactive Guide to Physical and Traditional Asset Protection",
    tabLand: "Part 1: Land",
    tabNonAgri: "Part 1.5: Urban Land",
    tabKnowledge: "Part 2: Knowledge",
    landSectionTitle: "Part 1: The Land Story - Protecting Ownership",
    landSectionSubtitle:
      "Understanding the laws that govern India's most crucial physical asset.",
    agriLandIntroTitle: "Introduction to Agricultural Land Ownership",
    agriLandIntroDesc:
      "Agricultural land is the backbone of India's economy and livelihood for millions. To prevent land concentration and ensure equitable distribution, clear laws govern its ownership.",
    stateLawsTitle: "State-Specific Laws",
    stateLawsDesc:
      "Land laws in India fall under state jurisdiction, leading to unique regulations and ceiling limits for agricultural land ownership in each state.",
    agriTamilNaduTitle: "Tamil Nadu: Agricultural Land Laws",
    agriTamilNaduDesc:
      "The Tamil Nadu Land Reforms (Fixation of Ceiling on Land) Act, 1961, sets clear limits to prevent land concentration. Generally, non-agriculturists are restricted from purchasing such land.",
    agriLimit15: "15",
    agriUnitAcres: "Standard Acres",
    agriLimitFamily: "for a family of up to 5 members",
    agriLimit30: "30",
    agriUnitAcres2: "Standard Acres",
    agriLimitOverall: "is the overall maximum ceiling",
    viewActLink: "View Original Act (PDF) →",
    nonAgriSectionTitle:
      "Part 1.5: Urban Growth - Non-Agricultural & Residential Lands",
    landConversionTitle: "Land Use Conversion and Zoning",
    landConversionDesc:
      "Converting agricultural land for residential or commercial use requires specific legal and planning permissions. Adhering to zoning regulations is crucial for orderly urban development and infrastructure.",
    townPlanningTitle: "Town and Country Planning",
    townPlanningDesc:
      "The Tamil Nadu Town and Country Planning Act, 1971, governs the use, development, and sale of these types of lands.",
    nonAgriRulesTitle: "Tamil Nadu: Land Development Rules",
    nonAgriRulesDesc:
      "Key regulations in Tamil Nadu related to non-agricultural and residential lands:",
    nonAgriRule1:
      "**Change of Use:** Government authorization is essential for changing land use from agricultural to urban.",
    nonAgriRule2:
      "**Zoning:** Land use is strictly determined by its designated zone (e.g., residential, commercial).",
    nonAgriRule3:
      "**Infrastructure:** Development must include essential facilities like roads, water, and drainage.",
    knowledgeSectionTitle: "Part 2: The Knowledge Story - Preserving Heritage",
    knowledgeSectionSubtitle:
      "Exploring the fight to protect India's priceless traditional and intellectual heritage.",
    docImportanceTitle: "The Importance of Documentation",
    docImportanceDesc:
      "Like land, traditional knowledge is an invaluable asset. Insufficient documentation leaves ancient systems like Siddha medicine vulnerable to exploitation, a practice known as biopiracy.",
    docBenefit1:
      '<span class="text-xl mr-2 text-[#19ca7a]">⚖️</span> Reduces Disputes',
    docBenefit2:
      '<span class="text-xl mr-2 text-[#19ca7a]">🔑</span> Clarifies Ownership',
    docBenefit3:
      '<span class="text-xl mr-2 text-[#19ca7a]">🛡️</span> Protects IP Rights',
    docBenefit4:
      '<span class="text-xl mr-2 text-[#19ca7a]">📈</span> Boosts Economic Benefit',
    siddhaStatusTitle: "Status of Siddha Knowledge",
    siddhaStatusDesc:
      "A large portion of traditional knowledge is undocumented and at risk of misappropriation.",
    turmericCaseTitle: "Case Study: The Turmeric Patent Battle",
    turmericStep1Title: "Centuries of Use",
    turmericStep1Desc:
      "Turmeric was used for wound healing in India for generations, a well-known home remedy.",
    turmericStep2Title: "1995: US Patent Granted",
    turmericStep2Desc:
      "A US company was granted a patent on turmeric's healing properties, claiming it as a novel invention.",
    turmericStep3Title: "India's Challenge (CSIR)",
    turmericStep3Desc:
      'India\'s Council of Scientific & Industrial Research challenged the patent, presenting ancient texts as "prior art" evidence.',
    turmericStep4Title: "1997: Victory & TKDL Creation",
    turmericStep4Desc:
      "The patent was revoked. This led to the creation of the Traditional Knowledge Digital Library (TKDL) to prevent future biopiracy.",
    chartLabels: ["Undocumented Knowledge (At Risk)", "Documented Knowledge"],
    tabNextSteps: "Next Steps",
    nextStepsTitle: "Project Roadmap",
    phase1Title: "Phase 1: Data Digitization",
    phase1Item1:
      "Scan and digitize all physical land records and legal documents.",
    phase1Item2:
      "Store the digitized data in an encrypted, secure cloud server.",
    phase1Item3: "Create a structured database for easy and fast retrieval.",
    phase2Title: "Phase 2: Physical Document Security",
    phase2Item1:
      "Archive original documents in a climate-controlled, secure facility.",
    phase2Item2:
      "Implement a tracking system for document check-in and check-out.",
    phase2Item3:
      "Establish strict access protocols to ensure document integrity.",
    phase3Title: "Phase 3: Application Development",
    phase3Item1: "Develop a user-friendly mobile and web application.",
    phase3Item2:
      "Integrate features for searching, viewing, and managing documents.",
    phase3Item3: "Implement role-based access control for users.",
    roadmapConclusion:
      "This roadmap ensures a comprehensive, secure, and accessible system for managing critical land and legal documentation, transforming a complex paper-based process into a streamlined digital workflow.",
    footerText: "© 2020. Copyrighted and powered by wedoo.",
    tabSummary: "Summary",
    summaryTitle: "Executive Summary",
    summaryIntro:
      "This proposal outlines a comprehensive plan to create a modern, secure, and efficient system for preserving and managing our nation's critical land documents and traditional knowledge.",
    summaryProblemTitle: "The Challenge",
    summaryProblemText:
      "Physical documents are vulnerable to damage, loss, and fraud. Simultaneously, traditional knowledge, like Siddha medicine, is susceptible to biopiracy due to a lack of formal documentation. Protecting both assets is vital for our cultural and economic stability.",
    summarySolutionTitle: "Our Solution",
    summarySolutionIntroText:
      "Our three-phase solution directly addresses these challenges:",
    summarySolution1:
      "<strong>Digitization:</strong> Digitize all documents and store them on a secure server.",
    summarySolution2:
      "<strong>Security:</strong> Archive physical documents in a secure, climate-controlled facility.",
    summarySolution3:
      "<strong>Accessibility:</strong> Develop a dedicated application for easy access to all data.",
    summaryConclusion:
      "This project not only protects our invaluable assets but also streamlines their accessibility and management, paving the way for a more transparent and efficient future.",
    tabContact: "Thank You & Contact",
    pocTitle: "POC for the app",
    pocDescription:
      "This video demonstrates the Proof of Concept for the application.",
    contactTitle: "Thank You & Contact",
    thankYouMessage:
      "Thank you for taking the time to review this proposal. This project represents a significant step forward in safeguarding our valuable land and intellectual assets.",
    contactInfoTitle: "Contact Information",
    contactEmail: "subbiah.wedoo@gmail.com",
    contactPhone: "+91 95442 18899",
    addressTitle: "Office Address",
    addressLine1: "WEDOO CONTRACTORS AND MANUFACTURERS",
    addressLine2: "OLD NO: 16 NEW NO: 2 D.R MALIGAI, POES ROAD, 3 RD STREET,TEYNAMPET",
    addressLine3: "Chennai, Tamil Nadu - 600018",
    followUpNote:
      "We look forward to discussing this further. Please feel free to reach out with any questions.",
  },
  ta: {
    headerTitle: "இந்திய நிலம் மற்றும் அறிவுசார் ஒழுங்குமுறை",
    headerSubtitle:
      "விவசாய நில உரிமை மற்றும் பாரம்பரிய அறிவைப் பாதுகாப்பதற்கான ஒரு பார்வை",
    tabLand: "பகுதி 1: நிலம்",
    tabNonAgri: "பகுதி 1.5: நகர நிலம்",
    tabKnowledge: "பகுதி 2: அறிவு",
    landSectionTitle: "பகுதி 1: நிலத்தின் கதை - உரிமையைப் பாதுகாத்தல்",
    landSectionSubtitle:
      "இந்தியாவின் மிக முக்கியமான பௌதிக சொத்தை நிர்வகிக்கும் சட்டங்களைப் புரிந்துகொள்ளுதல்.",
    agriLandIntroTitle: "விவசாய நில உரிமைக்கு ஒரு அறிமுகம்",
    agriLandIntroDesc:
      "விவசாய நிலம் இந்தியாவின் பொருளாதாரத்தின் முதுகெலும்பாகவும், கோடிக்கணக்கான மக்களின் வாழ்வாதாரமாகவும் உள்ளது. நிலக் குவிப்பைத் தடுத்து, சமமான விநியோகத்தை உறுதிசெய்ய, அதன் உரிமையை நிர்வகிக்க தெளிவான சட்டங்கள் உள்ளன.",
    stateLawsTitle: "மாநில வாரியான சட்டங்கள்",
    stateLawsDesc:
      "இந்தியாவில் நிலம் என்பது மாநில அரசின் அதிகார வரம்புக்குள் வருவதால், ஒவ்வொரு மாநிலத்திற்கும் விவசாய நில உரிமை தொடர்பான தனித்தனி சட்டங்கள் மற்றும் உச்சவரம்பு விதிகள் உள்ளன.",
    agriTamilNaduTitle: "தமிழ்நாடு: விவசாய நிலச் சட்டங்கள்",
    agriTamilNaduDesc:
      "தமிழ்நாடு நில சீர்திருத்தங்கள் (நில உச்சவரம்பு நிர்ணயம்) சட்டம், 1961, நிலக் குவிப்பைத் தடுக்க தெளிவான வரம்புகளை நிர்ணயித்துள்ளது. பொதுவாக, விவசாயிகள் அல்லாதவர்கள் அத்தகைய நிலத்தை வாங்குவது கட்டுப்படுத்தப்பட்டுள்ளது.",
    agriLimit15: "15",
    agriUnitAcres: "ஸ்டாண்டர்ட் ஏக்கர்கள்",
    agriLimitFamily: "5 பேர் கொண்ட குடும்பத்திற்கு",
    agriLimit30: "30",
    agriUnitAcres2: "ஸ்டாண்டர்ட் ஏக்கர்கள்",
    agriLimitOverall: "மொத்த அதிகபட்ச உச்சவரம்பு",
    viewActLink: "அசல் சட்டத்தை (PDF) பார்க்கவும் →",
    nonAgriSectionTitle:
      "பகுதி 1.5: நகரங்களின் வளர்ச்சி - விவசாயம் அல்லாத மற்றும் குடியிருப்பு நிலங்கள்",
    landConversionTitle: "நில வகை மாற்றம் மற்றும் மண்டலப்படுத்தல்",
    landConversionDesc:
      "விவசாய நிலங்களை குடியிருப்பு அல்லது வணிகப் பயன்பாட்டிற்காக மாற்றுவதற்கு குறிப்பிட்ட சட்ட மற்றும் திட்டமிடல் அனுமதிகள் தேவை. மண்டல விதிகளுக்கு இணங்குவது, நகர வளர்ச்சி மற்றும் உள்கட்டமைப்பை ஒழுங்குபடுத்துவதற்கு முக்கியமாகும்.",
    townPlanningTitle: "நகர மற்றும் கிராம திட்டமிடல்",
    townPlanningDesc:
      "தமிழ்நாடு நகர மற்றும் கிராம திட்டமிடல் சட்டம், 1971, இந்த வகை நிலங்களின் பயன்பாடு, வளர்ச்சி மற்றும் விற்பனையை ஒழுங்குபடுத்துகிறது.",
    nonAgriRulesTitle: "தமிழ்நாடு: நில மேம்பாட்டு விதிகள்",
    nonAgriRulesDesc:
      "தமிழ்நாட்டில் விவசாயம் அல்லாத மற்றும் குடியிருப்பு நிலங்கள் தொடர்பான சில முக்கிய விதிகள்:",
    nonAgriRule1:
      "**பயன்பாடு மாற்றம்:** விவசாய நிலத்தை குடியிருப்பு/வணிக நிலமாக மாற்ற அரசு அனுமதி அவசியம்.",
    nonAgriRule2:
      "**மண்டலப்படுத்தல்:** நிலம் அமைந்துள்ள மண்டலத்தின் (Zone) அடிப்படையில் அதன் பயன்பாடு தீர்மானிக்கப்படுகிறது.",
    nonAgriRule3:
      "**உள்கட்டமைப்பு:** நில மேம்பாட்டிற்கு சாலைகள், நீர் மற்றும் வடிகால் போன்ற அத்தியாவசிய உள்கட்டமைப்பு வசதிகள் தேவை.",
    knowledgeSectionTitle: "பகுதி 2: அறிவின் கதை - பாரம்பரியத்தைப் பாதுகாத்தல்",
    knowledgeSectionSubtitle:
      "இந்தியாவின் விலைமதிப்பற்ற பாரம்பரிய மற்றும் அறிவுசார் பாரம்பரியத்தைப் பாதுகாப்பதற்கான போராட்டம்.",
    docImportanceTitle: "ஆவணப்படுத்துதலின் முக்கியத்துவம்",
    docImportanceDesc:
      "நிலம் போலவே, பாரம்பரிய அறிவும் ஒரு விலைமதிப்பற்ற சொத்து. போதிய ஆவணங்கள் இல்லாததால், சித்த மருத்துவம் போன்ற பழங்கால அமைப்புகள் உயிரியல் திருட்டு எனப்படும் சுரண்டலுக்கு ஆளாகின்றன.",
    docBenefit1: "⚖️ சர்ச்சைகளை குறைக்கிறது",
    docBenefit2: "🔑 உரிமையை தெளிவுபடுத்துகிறது",
    docBenefit3: "🛡️ அறிவுசார் சொத்துரிமையை பாதுகாக்கிறது",
    docBenefit4: "📈 பொருளாதாரப் பலனை அளிக்கிறது",
    siddhaStatusTitle: "சித்த மருத்துவ அறிவின் நிலை",
    siddhaStatusDesc:
      "பாரம்பரிய அறிவின் பெரும்பகுதி ஆவணப்படுத்தப்படாதது மற்றும் தவறான பயன்பாட்டின் அபாயத்தில் உள்ளது.",
    turmericCaseTitle: "வழக்கு ஆய்வு: மஞ்சள் காப்புரிமைப் போர்",
    turmericStep1Title: "நூற்றாண்டுகாலப் பயன்பாடு",
    turmericStep1Desc:
      "மஞ்சள் இந்தியாவில் பல தலைமுறைகளாக காயம் குணப்படுத்த பயன்படுத்தப்பட்டது, இது நன்கு அறியப்பட்ட வீட்டு வைத்தியம்.",
    turmericStep2Title: "1995: அமெரிக்க காப்புரிமை வழங்கப்பட்டது",
    turmericStep2Desc:
      "ஒரு அமெரிக்க நிறுவனம் மஞ்சளின் குணப்படுத்தும் பண்புகளுக்கு ஒரு காப்புரிமை வழங்கியது, இது ஒரு புதிய கண்டுபிடிப்பு என்று கூறியது.",
    turmericStep3Title: "இந்தியா வின் சவால் (CSIR)",
    turmericStep3Desc:
      'இந்திய அறிவியல் மற்றும் தொழில்துறை ஆராய்ச்சி கவுன்சில் காப்புரிமையை சவால் செய்தது, "முந்தைய கலை" ஆதாரமாக பண்டைய நூல்களை முன்வைத்தது.',
    turmericStep4Title: "1997: வெற்றி & TKDL உருவாக்கம்",
    turmericStep4Desc:
      "காப்புரிமை ரத்து செய்யப்பட்டது. இது பாரம்பரிய அறிவு டிஜிட்டல் நூலகம் (TKDL) உருவாக வழிவகுத்தது.",
    chartLabels: [
      "ஆவணப்படுத்தப்படாத அறிவு (அபாயத்தில்)",
      "ஆவணப்படுத்தப்பட்ட அறிவு",
    ],
    tabNextSteps: "அடுத்த படிகள்",
    nextStepsTitle: "திட்ட வரைபடம்",
    phase1Title: "கட்டம் 1: தரவு டிஜிட்டல் மயமாக்கல்",
    phase1Item1:
      "அனைத்து அசல் நிலப் பதிவுகளையும் சட்ட ஆவணங்களையும் ஸ்கேன் செய்து டிஜிட்டல் மயமாக்குதல்.",
    phase1Item2:
      "டிஜிட்டல் மயமாக்கப்பட்ட தரவை மறைகுறியாக்கப்பட்ட, பாதுகாப்பான கிளவுட் சேவையகத்தில் சேமித்தல்.",
    phase1Item3:
      "எளிதாகவும் வேகமாகவும் மீட்டெடுப்பதற்காக ஒரு கட்டமைக்கப்பட்ட தரவுத்தளத்தை உருவாக்குதல்.",
    phase2Title: "கட்டம் 2: அசல் ஆவணப் பாதுகாப்பு",
    phase2Item1:
      "அசல் ஆவணங்களை காலநிலை கட்டுப்படுத்தப்பட்ட, பாதுகாப்பான வசதியில் காப்பகப்படுத்துதல்.",
    phase2Item2:
      "ஆவணங்களை சரிபார்க்க மற்றும் வெளியே எடுக்க ஒரு கண்காணிப்பு முறையை செயல்படுத்துதல்.",
    phase2Item3:
      "ஆவணங்களின் நேர்மையை உறுதிப்படுத்த கடுமையான அணுகல் நெறிமுறைகளை நிறுவுதல்.",
    phase3Title: "கட்டம் 3: செயலி உருவாக்கம்",
    phase3Item1: "பயனருக்கு ஏற்ற மொபைல் மற்றும் வலைச் செயலியை உருவாக்குதல்.",
    phase3Item2:
      "ஆவணங்களைத் தேட, பார்க்க மற்றும் நிர்வகிக்க அம்சங்களை ஒருங்கிணைத்தல்.",
    phase3Item3:
      "பயனர்களுக்கான பங்கு அடிப்படையிலான அணுகல் கட்டுப்பாட்டை செயல்படுத்துதல்.",
    roadmapConclusion:
      "இந்த வரைபடம், முக்கியமான நிலம் மற்றும் சட்ட ஆவணங்களை நிர்வகிப்பதற்கான ஒரு விரிவான, பாதுகாப்பான மற்றும் அணுகக்கூடிய அமைப்பை உறுதிசெய்கிறது, சிக்கலான காகித அடிப்படையிலான செயல்முறையை ஒரு நெறிப்படுத்தப்பட்ட டிஜிட்டல் பணிப்பாய்வாக மாற்றுகிறது.",
    footerText: "© 2020. பதிப்புரிமை மற்றும் இயக்கம்: wedoo.",
    tabSummary: "சுருக்கம்",
    summaryTitle: "செயல்பாட்டு சுருக்கம்",
    summaryIntro:
      "இந்த முன்மொழிவு, நமது நாட்டின் முக்கியமான நில ஆவணங்கள் மற்றும் பாரம்பரிய அறிவைப் பாதுகாப்பதற்கும், நிர்வகிப்பதற்கும் ஒரு நவீன, பாதுகாப்பான மற்றும் திறமையான அமைப்பை உருவாக்குவதற்கான ஒரு விரிவான திட்டத்தை கோடிட்டுக் காட்டுகிறது.",
    summaryProblemTitle: "சவால்",
    summaryProblemText:
      "அசல் ஆவணங்கள் சேதம், இழப்பு மற்றும் மோசடிக்கு ஆளாகின்றன. அதே நேரத்தில், சித்த மருத்துவம் போன்ற பாரம்பரிய அறிவு, முறையான ஆவணப்படுத்தல் இல்லாததால், அறிவுத் திருட்டுக்கு உள்ளாகிறது. இந்த இரண்டு சொத்துக்களையும் பாதுகாப்பது நமது கலாச்சார மற்றும் பொருளாதார ஸ்திரத்தன்மைக்கு அவசியமானது.",
    summarySolutionTitle: "எங்கள் தீர்வு",
    summarySolutionIntroText:
      "எங்கள் மூன்று-கட்ட தீர்வு இந்த சவால்களை நேரடியாக எதிர்கொள்கிறது:",
    summarySolution1:
      "<strong>டிஜிட்டல் மயமாக்கல்:</strong> அனைத்து ஆவணங்களையும் டிஜிட்டல் மயமாக்கி, பாதுகாப்பான சேவையகத்தில் சேமித்தல்.",
    summarySolution2:
      "<strong>பாதுகாப்பு:</strong> அசல் ஆவணங்களை பாதுகாப்பான வசதியில் காப்பகப்படுத்துதல்.",
    summarySolution3:
      "<strong>அணுகல்:</strong> அனைத்து தரவையும் எளிதாக அணுக ஒரு பிரத்யேக செயலியை உருவாக்குதல்.",
    summaryConclusion:
      "இந்தத் திட்டம், நமது விலைமதிப்பற்ற சொத்துக்களைப் பாதுகாப்பது மட்டுமல்லாமல், அவற்றை அணுகுவதையும், நிர்வகிப்பதையும் எளிதாக்குகிறது, இது ஒரு வெளிப்படையான மற்றும் திறமையான எதிர்காலத்திற்கு வழிவகுக்கிறது.",
    tabContact: "நன்றி",
    pocTitle: "செயலி முன்மாதிரி (POC)",
    pocDescription:
      "இந்த வீடியோ செயலியின் செயல்பாட்டு முன்மாதிரியை விளக்குகிறது.",
    contactTitle: "நன்றி மற்றும் தொடர்பு",
    thankYouMessage:
      "இந்த முன்மொழிவை மதிப்பாய்வு செய்ய நேரம் ஒதுக்கியதற்கு நன்றி. இந்தத் திட்டம் நமது மதிப்புமிக்க நிலம் மற்றும் அறிவுசார் சொத்துக்களைப் பாதுகாப்பதில் ஒரு குறிப்பிடத்தக்க படியாகும்.",
    contactInfoTitle: "தொடர்பு தகவல்",
    contactEmail: "subbiah.wedoo@gmail.com",
    contactPhone: "+91 95442 18899",
    addressTitle: "அலுவலக முகவரி",
    addressLine1: "WEDOO CONTRACTORS AND MANUFACTURERS",
    addressLine2: "OLD NO: 16 NEW NO: 2 D.R MALIGAI, POES ROAD, 3 RD STREET,TEYNAMPET",
    addressLine3: "சென்னை, தமிழ்நாடு - 600018",
    followUpNote:
      "மேலும் விவாதிக்க அல்லது ஏதேனும் கேள்விகளுக்கு, தயவுசெய்து எங்களைத் தொடர்பு கொள்ளவும்.",
  },
};

let currentLanguage = "ta";
let siddhaChartInstance = null;

// Event listener for when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // --- Cache DOM elements for performance ---
  const elementsToTranslate = {};
  document.querySelectorAll("[data-lang-key]").forEach((element) => {
    const key = element.dataset.langKey;
    if (!elementsToTranslate[key]) {
      elementsToTranslate[key] = [];
    }
    elementsToTranslate[key].push(element);
  });
  const body = document.body;
  const languageToggleButton = document.getElementById("language-toggle");

  /**
   * Updates the content of the page based on the selected language.
   * This function is optimized to avoid repeated DOM queries by using cached elements.
   * @param {string} lang - The language to update the content to ('en' or 'ta').
   */
  function updateContent(lang) {
    const content = languageContent[lang];
    document.documentElement.lang = lang;

    // Update text content using the pre-cached element map
    for (const key in elementsToTranslate) {
      if (content[key]) {
        const elements = elementsToTranslate[key];
        // Use innerHTML for keys that contain HTML tags (icons, bold text)
        if (
          key.startsWith("nonAgriRule") ||
          key.startsWith("docBenefit") ||
          key.startsWith("summarySolution")
        ) {
          elements.forEach((el) => (el.innerHTML = content[key]));
        } else {
          elements.forEach((el) => (el.textContent = content[key]));
        }
      }
    }

    // Update chart labels if the chart instance exists
    if (siddhaChartInstance) {
      siddhaChartInstance.data.labels = content.chartLabels;
      siddhaChartInstance.update();
    }

    // Toggle CSS class for font changes and update button text
    if (lang === "en") {
      body.classList.add("lang-en");
      languageToggleButton.textContent = "தமிழ் / English";
    } else {
      body.classList.remove("lang-en");
      languageToggleButton.textContent = "English / தமிழ்";
    }
  }

  // Get the canvas context for the Chart.js
  const ctx = document.getElementById("siddhaChart").getContext("2d");

  // Initialize the Chart.js doughnut chart
  siddhaChartInstance = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: languageContent[currentLanguage].chartLabels,
      datasets: [
        {
          label: "சித்த மருத்துவ அறிவு",
          data: [80, 20], // Example data: 80% undocumented, 20% documented
          backgroundColor: ["#FFD166", "#19ca7a"],
          borderColor: ["#FFFFFF"],
          borderWidth: 4,
          hoverOffset: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            font: {
              family: "'Noto Sans Tamil', sans-serif",
            },
          },
        },
        tooltip: {
          callbacks: {
            title: function (tooltipItems) {
              const item = tooltipItems[0];
              let label = item.chart.data.labels[item.dataIndex];
              return Array.isArray(label) ? label.join(" ") : label;
            },
          },
        },
      },
    },
  });

  // Initial content load based on current language
  updateContent(currentLanguage);

  // Language toggle functionality
  languageToggleButton.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "ta" : "en";
    updateContent(currentLanguage);
  });

  // Tab switching logic
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.dataset.tab;

      // Deactivate all tab buttons and hide all tab contents
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Activate the clicked button and show its corresponding content
      button.classList.add("active");
      document.getElementById(`tab-${targetTab}`).classList.add("active");

      // If the knowledge tab is activated and the chart exists, resize it
      if (targetTab === "knowledge" && siddhaChartInstance) {
        siddhaChartInstance.resize();
      }
    });
  });

  // --- Scroll-triggered animation for cascade elements ---
  const cascadeElements = document.querySelectorAll(".cascade");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // Animate only once
        }
      });
    },
    {
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  cascadeElements.forEach((element) => {
    observer.observe(element);
  });

  // --- Video Slideshow Logic ---
  const videoSlideshowContainer = document.getElementById("video-slideshow");
  if (videoSlideshowContainer) {
    // IMPORTANT: Add the paths to your videos in the video/ folder here
    const videoSources = [
      "video/v1.mp4",
      "video/v2.mp4",
      "video/v3.mp4",
      "video/v4.mp4",
    ];
    let currentVideoIndex = 0;

    // Preload videos for smoother transitions
    videoSources.forEach((src) => {
      const video = document.createElement("video");
      video.src = src;
      video.preload = "auto";
    });

    function playNextVideo() {
      // Increment index, looping back to 0 if at the end
      currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
      const nextVideo = videoSlideshowContainer.children[currentVideoIndex];

      // Fade out all videos, then fade in the next one
      Array.from(videoSlideshowContainer.children).forEach((v) => {
        v.style.opacity = "0";
        v.pause();
      });

      nextVideo.style.opacity = "1";
      nextVideo.currentTime = 0;
      nextVideo.play().catch((error) => console.error("Video play failed:", error));
    }

    videoSources.forEach((src, index) => {
      const video = document.createElement("video");
      video.src = src;
      video.muted = true; // Autoplay requires the video to be muted
      video.playsInline = true;
      video.className = "absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500";
      video.style.opacity = index === 0 ? "1" : "0"; // Show first video
      video.addEventListener("ended", playNextVideo);
      videoSlideshowContainer.appendChild(video);
    });

    // Start the first video
    if (videoSlideshowContainer.children.length > 0) {
      videoSlideshowContainer.children[0].play().catch((error) => console.error("Initial video play failed:", error));
    }
  }
});
