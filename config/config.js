var config = {
    /**/
    name: "Xuechu Xie",
    sex: "Männlich",
    age: "44",
    phone: "068120778188",
    email: "xiexuechu@gmail.com",
    address: "Rosentalerstaße 74/3",
    whatsapp: "+43 681 20778188",
    log: "CSAW Test",
    excpect_work: "Web developer",


    /**/
    motto: [
        "Informationstechnologie für ein besseres Leben",
        "Ständig lernen, agil wachsen",
        "Go For IT!",     
    ],


    /**/
    welcome: "Vielen Dank für Ihren Besuch." +
             "Hallo, ich bin Xuechu Xie aus China und lebe seit 7 Jahren in Österreich!<br>" +
             "Schön, Sie kennen zu lernen.",


    /**/
    about: "<p>Hallo! Mein Name ist Xie Xuechu, ich bin 44 Jahre alt, und ich habe einen Master-Abschluss in Medien und Convergence Management von der Universität Klagenfurt. Mein Berufswunsch ist Projektmanagement und Kommunikation.</p>" +
        "<p>Ich verfüge über mehr Berufserfahrung in IT-Unternehmen und habe solide Computerkenntnisse. Als Marketing- und Kommunikationsleiter des Unternehmens bin ich in der Lage, meine Aufgaben in der Arbeit gut zu erledigen. Darüber hinaus habe ich eine leidenschaftliche Arbeitseinstellung, eine starke Teamfähigkeit und die Fähigkeit, mich selbständig weiterzuentwickeln, Probleme zu finden und zu lösen. Ich verfüge über ausgeprägte Führungsqualitäten, hohes Verantwortungsbewusstsein, einen ausgeprägten Sinn für kollektive Ehre und den Mut, Verantwortung zu übernehmen.</p>" +
        "<p>Ich freue mich sehr auf den Kontakt mit Ihnen!</p>",


    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */     
    skills: [
        ["Kommunikation", 80, "red"],
        ["Projektmanagement", 77, "blue"],
        ["Bürosoftware", 75, "#1abc9c"],
        ["Verwaltungssoftware", 67, "rgba(0,0,0)"],
        ["Video- und Audiobearbeitung", 60, "yellow"],
        ["C#", 70, "pink"]
    ],


 /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>Hauptfach Medienmanagement, Verständnis für den Markt, gute interne und externe Unternehmensbeziehungen</li>" +
        "     <li>Über 10 Jahre Erfahrung im Projektmanagement</li>" +
        "     <li>Beherrschung von Bürosoftware, Projekt- und Inhaltsverwaltungssoftware sowie Audio-/Videobearbeitungssoftware</li>" +
        "     <li>Verständnis grundlegender Computersprachen und systematische Kenntnisse in C#</li>" +
        "     <li>Verständnis von HTML, CSS, JavaScript und entsprechende Front-End-Kenntnisse.</li>" +     
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
     portfolio: [
        ["./images/pro-1.png", "https://delta-q.com/resources/", "Blog", "Meine Notizen zum Projektmanagement sind hier zu finden<br>ständige Aktualisierung"],
        ["./images/pro-2.png", "https://github.com/happysnaker/Gobang", "Eine Sammlung meiner Erfahrungen mit Kundenkommunikation", "Zahlreiche strategische Management- und Praxiserfahrungen<br>2021/7/23"],
        ["https://pic3.zhimg.com/80/v2-d9766956d5c85c2780e4c5008fd946ca_1440w.jpg", "https://github.com/happysnaker/StudentsManageSystem", "Inhaltsverwaltungssystem (CMS) (Internet)", "Veröffentlichung und Bearbeitung von Medieninhalten im Backoffice"]
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
  work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]
      

        ["2023/7/1 — 2024/3/15", "<br>Project Manager",
            "<p><strong>Energetica Industries GmbH</strong></p>" +
            "<p>Repräsentation des Unternehmens in der kommerziellen Kommunikation mit chinesischen Lieferanten</p>" +
            "<p>Koordinierung mit internen und externen technischen Teams zur Gewährleistung der Produktion</p>"
        ],

        ["2020/9/1 — 2023/6/30", "<br>Qualitätsprüfer",
            "<p><strong>Ginzinger Electronic Systems GmbH</strong></p>" +
            "<p>Qualitätsprüfung der Busbar-Elektronik vor Ort bei Firma Energetica in Liebenfels</p>" +
            "<p>Verantwortlich für die Modernisierung der Prozesse in Abstimmung mit den chinesischen Herstellern</p>"
        ]
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2004-07-02", "Communication University of China", "Music communication"],  
        ["2006-09-01", "Chefredakteur", "Chefplaner - Aktualisierung und Freigabe der großen Website-Promotions- und Festivalveranstaltungen"],
        ["2012-10-01", "Stellvertretender General Manager zuständig für Unternehmensentwicklung und PR", "Planung und Durchführung von Branding- und Marketingkampagnen des Unternehmens auf Messen, Festivals usw. "],        
        ["2023-01-02", "Alpen-Adria-Universität, Klagenfurt", "Media and Convergence Management"],       
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["./svg/FaceBook.svg", "https://www.facebook.com/xiexuechu", "Mein Facebook"],
        ["./svg/github.svg", "https://github.com/happysnaker", "Mein GitHub"],
        ["./svg/博客.svg", "http://1.15.234.109:8000", "Mein Blog"],
        ["./svg/掘金.svg", "https://juejin.cn/user/3853167638625000", "Juejin"],
        ["./svg/知乎.svg", "https://www.zhihu.com/people/tian-xia-you-dao-81", "Mein Zhihu"]
    ],


  //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/intro-bg.jpg",
        "./images/2.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]

}
