export interface MarketingUi {
  docLinkBanner: {
    aboutMessage: string;
    homeMessage: string;
    productMessage: string;
    linkLabel: string;
  };
  homeSubscribe: {
    kicker: string;
    heading: string;
    description: string;
    benefitCrowdfunding: string;
    benefitGuides: string;
    benefitUnsubscribe: string;
    submitLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    footnote: string;
  };
  productSubscribe: {
    kicker: string;
    heading: string;
    description: string;
    benefitCrowdfunding: string;
    benefitGuides: string;
    benefitUnsubscribe: string;
    submitLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    footnote: string;
  };
  siteFooter: {
    tagline: string;
    productsHeading: string;
    keymodSeries: string;
    kvmGoSeries: string;
    miniKvm: string;
    accessories: string;
    resourcesHeading: string;
    videos: string;
    faqs: string;
    apps: string;
    support: string;
    newsletterLink: string;
    newsletterTitle: string;
    newsletterDescription: string;
    newsletterSubmit: string;
    newsletterNamePlaceholder: string;
    newsletterEmailPlaceholder: string;
    newsletterFootnote: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
  productLanding: {
    downloadApp: string;
    backers: string;
    theProblem: string;
    theSolution: string;
    hwSoftwareTitle: string;
    hwSoftwareSubtitle: string;
    hardware: string;
    software: string;
    swFallback: string;
    keySpecs: string;
    useCases: string;
    documentation: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
}

export const ui: MarketingUi = {
  "docLinkBanner": {
    "aboutMessage": "제품 가이드, FAQ, 튜토리얼 및 앱 다운로드는 docs.openterface.com 에서 확인하세요.",
    "homeMessage": "튜토리얼, FAQ, 앱 다운로드 및 제품 가이드는 docs.openterface.com 에서 확인하세요.",
    "linkLabel": "문서 열기 ↗",
    "productMessage": "상세 사양, 설정 가이드 및 FAQ는 docs.openterface.com 에서 확인하세요."
  },
  "homeSubscribe": {
    "kicker": "소식 받기",
    "heading": "KVM-GO, KeyMod, Mini-KVM 업데이트를 가장 먼저",
    "description": "제품 출시, 펌웨어, 실용적인 IT 팁 — 월 최대 1회. 스팸 없이 Openterface 팀의 유용한 소식만.",
    "benefitCrowdfunding": "크라우dfunding 및 사전 주문 기간 조기 알림",
    "benefitGuides": "설정 가이드 및 앱 릴리스 노트",
    "benefitUnsubscribe": "언제든 한 번의 클릭으로 구독 취소",
    "submitLabel": "업데이트 구독",
    "namePlaceholder": "이름 (선택)",
    "emailPlaceholder": "이메일 주소 *",
    "footnote": "월 최대 1통. 언제든 구독 취소 가능. 문의: info@openterface.com"
  },
  "siteFooter": {
    "tagline": "IT 전문가를 위한 초소형 KVM-over-USB 솔루션.",
    "productsHeading": "제품",
    "keymodSeries": "KeyMod 시리즈",
    "kvmGoSeries": "KVM-GO 시리즈",
    "miniKvm": "Mini-KVM",
    "accessories": "액세서리",
    "resourcesHeading": "리소스",
    "videos": "비디오",
    "faqs": "FAQ",
    "apps": "앱",
    "support": "지원",
    "newsletterTitle": "뉴스레터",
    "newsletterDescription": "출시 소식, 월간 제품·펌웨어 업데이트, KVM 팁을 가장 먼저 — 월 1회 이메일.",
    "newsletterSubmit": "구독",
    "newsletterNamePlaceholder": "이름",
    "newsletterEmailPlaceholder": "이메일 *",
    "newsletterFootnote": "언제든지 구독 취소 가능.",
    "copyright": "Openterface. 오픈 소스 KVM-over-USB.",
    "privacy": "개인정보 보호정책",
    "terms": "서비스 약관",
    "newsletterLink": "뉴스레터"
  },
  "productLanding": {
    "downloadApp": "앱 다운로드",
    "backers": "후원자",
    "theProblem": "문제",
    "theSolution": "해결책",
    "hwSoftwareTitle": "하드웨어 + 소프트웨어",
    "hwSoftwareSubtitle": "Openterface 제품은 오픈 소스 호스트 앱과 함께 사용할 때 가장 잘 작동합니다.",
    "hardware": "하드웨어",
    "software": "소프트웨어",
    "swFallback": "액세서리 호환성 자세한 내용은 TxA Shop을 참조하세요.",
    "keySpecs": "주요 사양",
    "useCases": "사용 사례",
    "documentation": "문서",
    "ctaTitle": "시작할 준비가 되셨나요?",
    "ctaSubtitle": "하드웨어를 주문하고 플랫폼용 Openterface 앱을 다운로드하세요."
  },
  "productSubscribe": {
    "kicker": "소식 받기",
    "heading": "{product} 출시 및 펌웨어 업데이트 받기",
    "description": "이 제품의 사전 주문, 펌웨어, 설정 팁을 가장 먼저 — 월 1회 이메일.",
    "benefitCrowdfunding": "크라우dfunding 및 사전 주문 기간 조기 알림",
    "benefitGuides": "설정 가이드 및 앱 릴리스 노트",
    "benefitUnsubscribe": "언제든 한 번의 클릭으로 구독 취소",
    "submitLabel": "업데이트 구독",
    "namePlaceholder": "이름 (선택)",
    "emailPlaceholder": "이메일 주소 *",
    "footnote": "월 최대 1통. 언제든 구독 취소 가능. 문의: info@openterface.com"
  }
};
