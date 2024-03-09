import PrivacyPolicyExpandCollapseSection from "@/components/PrivacyPolicyExpandCollapseSection";
import "@/css/privacy-policy.css";

const page = () => {
  const privacyPolicyExpandCollapseSectionData = [
    {
      heading: "TERMS AND DEFINITIONS",
      content: `<p>
      We designate and capitalize certain terms. Their use throughout this
      Policy means that they have a specific meaning as defined in the
      description of such terms. In Section 1 of this Policy, we explain
      definitions of certain capitalized terms.
      <br />
    </p>
    <ol>
      <li>
        <strong>Client </strong>means a natural or legal person registered
        in the EU, USA, Switzerland, UK, Canada who enters or may enter
        into a Contract with <strong>CGS TEAM</strong> under which
        <strong>CGS TEAM</strong> and/or
        <strong>CGS TEAM</strong> Consultants shall have access to
        employees’, Clients’ or Users’ Personal Data.
        <br />
      </li>
      <li>
        <strong>Contract </strong>means a bilateral legal obligation to
        provide/receive the Services whereby <strong>CGS TEAM</strong> is
        authorized to collect, process and protect Personal Data.
        <br />
      </li>
      <li>
        <strong>Consultant </strong>means an employee of
        <strong>CGS TEAM</strong>, an independent contractor, an
        outsourcing company providing services to{" "}
        <strong>CGS TEAM </strong>on the basis of a commercial or
        partnership agreement.
        <br />
      </li>
      <li>
        <strong>Controller</strong> means any natural or legal person,
        public authority, institution or other body, which independently
        determines the purposes and means of Personal Data processing.
        <br />
      </li>
      <li>
        <strong>Questionnaire </strong>means a list of questions in a
        document designed as a method for collecting data from the
        respondent, which defines the category and type of data.
        <br />
      </li>
      <li>
        <strong>Personal Data</strong> means information that identifies
        you as an individual or can be identified in order to interact
        with you
        <br />
      </li>
      <li>
        <strong>User</strong> means an identifiable and non-identifiable
        person who interacts with the Software.
        <br />
      </li>
      <li>
        <strong>Software </strong>means web applications, mobile
        applications, desktop applications, server applications, software
        modules and code developed or maintained by
        <strong>CGS TEAM</strong> and owned by <strong>CGS TEAM</strong>{" "}
        or the Client. The content of the software is protected by
        copyright, trademark law and other rights related to intellectual
        property and unfair competition law.
        <br />
      </li>
      <li>
        <strong>Processor </strong>means any natural or legal person,
        public authority, institution or other body that gains access to
        the Personal Data processing and storage.
        <br />
      </li>
      <li>
        <strong>Means of communication </strong>- email, mobile
        connection, corporate and mobile messengers such as Telegram,
        WhatsApp, Slack, and conferencing tools such as Google Meet, Zoom,
        and Microsoft Teams.
        <br />
      </li>
      <li>
        <strong>Services </strong>mean software development, design,
        testing and consulting activities provided by CGS TEAM or
        Consultants.
        <br />
      </li>
      <li>
        <strong>EDPB </strong>(European Data Protection Board) means The
        European Data Protection Board.
        <br />
      </li>
      <li>
        <strong>CCPA </strong>(
        <a
          target="_blank"
          rel="nofollow"
          href=""
          alt="California Consumer Privacy Act"
          className="on"
        >
          California Consumer Privacy Act
        </a>
        ) means California state statute designed to increase privacy
        rights and consumer protection for residents of California and the
        United States.
        <br />
      </li>
      <li>
        <strong>Cookie </strong>means small text files that store
        information about your past actions in the Software.
        <br />
      </li>
      <li>
        <strong>GDPR </strong>means the
        <a
          target="_blank"
          rel="nofollow"
          href=""
          alt='General Data Protection Regulation ("GDPR")'
        >
          General Data Protection Regulation ("GDPR")
        </a>
        , which applies to regulate the Personal Data processing as of May
        25, 2018.
        <br />
      </li>
    </ol>`,
    },
    {
      heading: "WAYS OF COLLECTING PERSONAL DATA",
      content: `<ol>
      <li>
        <span style={{ fontFamily: "NAMU" }}>
          We collect identifiable and non-identifiable Users’, Clients’
          and Consultants’ Personal Data in the ways set out below:
          <br />
        </span>
        <ol>
          <li style={{ fontFamily: "NAMU" }}>
            &nbsp;By means of the Software when accessing
            <strong>CGS TEAM</strong> and Consultants.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            On social networks such as Twitter, Facebook, LinkedIn,
            Behance by <strong>CGS TEAM</strong> and Consultants. The
            list is not exhaustive.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            At the time of participation in offline and online events in
            Ukraine, the EU and the US by <strong>CGS TEAM</strong> and
            Consultants scanning QR codes and online business cards.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            During email marketing campaigns by sending out
            <strong>CGS TEAM</strong> promotional emails and special
            offers.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            In the course of searching for Clients and establishing
            commercial relationships, <strong>CGS TEAM</strong> gains
            access to Personal Data on freelance exchanges such as
            UpWork, Fiverr, Freelancer. The list is not exhaustive.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            During advertising campaign analytics using advertising and
            analytics services such as Google ADS, Google Analytics,
            Facebook ADS, Facebook Analytics. The list is not
            exhaustive.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            On public web resources on the internet by
            <strong>CGS TEAM</strong> and Consultants to establish
            commercial relationships.​
            <br />
          </li>
        </ol>
        <span style={{ fontFamily: "NAMU" }}></span>
      </li>
    </ol>`,
    },
    {
      heading: "TYPES OF PERSONAL DATA WE COLLECT",
      content: `<ol>
      <li>
        <span style={{ fontFamily: "NAMU" }}>
          <strong>
            Personal data collected voluntarily at the initiative of the
            Users, Customers and Consultants
          </strong>
          . The data you hand over when you visit and/or interact with
          the Software, when you complete Contracts and Questionnaires,
          the data you provide when you are interviewed using the
          Communication Tools and the data you provide when you complete
          forms in the Software:
        </span>
        <ol>
          <li style={{ fontFamily: "NAMU" }}>
            We collect Personal Data from Users, Customers and
            Consultants which identifies you as an individual and which
            can be used to contact you and/or to provide the Services.
            Users’, Clients’ and Consultants’ Personal Data shall
            include: name, surname, email, address, payment details,
            contact details of Client's employees, representatives and
            clients, type of employment, professional experience,
            educational background, skills and competencies, employment
            details, marital status.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            <strong>Client’s and Consultant’s Personal Data</strong>: we
            may collect Personal Data of Client’s and Consultants’
            employees, agents, contractors, and partners. This data will
            be processed and used in accordance with this Policy.
            <br />
          </li>
        </ol>
      </li>
      <li>
        <span style={{ fontFamily: "NAMU" }}>
          <strong>Personal data collected automatically</strong>. Some
          information about Users, Customers and Consultants is
          automatically collected from a computer or mobile device when
          interacting with the Software:
          <br />
        </span>
        <ol>
          <li style={{ fontFamily: "NAMU" }}>
            We may collect Personal Data, such as IP address, to
            understand the country which you are connecting from, when
            using the Software, time zone setting, information about the
            device and browser type using to access the Software,
            website URL from which you visited the Software, and third
            party websites you visit to log off the Software.
            <br />
          </li>
        </ol>
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        <strong>
          Non-Identifying Users’, Customers’, Consultants’ Personal Data
        </strong>
        : we may also collect other information such as postal codes,
        demographic and statistical data and information about using the
        Software.
        <br />
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        In some cases we may convert some Personal Data into
        Non-Identifying Information. This is done by converting such
        information into a code. The code does not identify you and is
        not considered Personal Data under the GDPR, as it does not
        reveal your identity. We may combine the information collected
        from Software Users as statistical data and use it for
        analytics.​
        <br />
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        <strong>
          Combining Personal Data and Non-Identifying Information
        </strong>
        : when combining Personal Data and Non-Identifying Information,
        it is possible to convert it into information that can identify
        you. For example, in cases where a User’s or Customer's name and
        social media profile is available. We will treat the combined
        information as Personal Data that must be processed under this
        Policy.
        <br />
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        <strong>Information collected from third parties</strong>: we
        may receive information from the third parties. For example, we
        may supplement the information we collect with records from
        public sources, including social networks, freelance exchanges
        or databases. If we combine information we collect from third
        parties with information we collect about you, we will treat
        such information as Personal Information under the Policy.
        <br />
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        We may collect and process specific categories of Users’,
        Customers’ or Consultants’ Personal Data, such as information on
        race or ethnicity, religious or philosophical beliefs, sexuality
        and orientation, political views, trade union membership, health
        information, and genetic and biometric information. We may
        collect information about Consultants' criminal convictions and
        offences.
        <br />
      </li>
    </ol>`,
    },
    {
      heading: "PURPOSES OF USING PERSONAL DATA",
      content: `<ol>
      <li>
        <span style={{ fontFamily: "NAMU" }}>
          We process Users’, Customers’ or Consultants’ Personal Data
          for the purposes set out in this Policy:
        </span>
        <ol>
          <li style={{ fontFamily: "NAMU" }}>
            To fulfill obligations to Clients, provide the Services and
            develop a business and commercial relationship with you
            and/or the legal entity you represent.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            To fulfill your obligations to Consultants, provide the
            Services and develop your business and commercial
            relationship with you and/or the entity you represent.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            To develop, provide, improve, update, correct errors in the
            Software and/or enhance the Services.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            To provide internal quality and security controls, protect
            against fraudulent or illegal activities and hold those
            responsible for such activities accountable.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            To measure the interest and Users’ interaction with the
            Software.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            To adapt the content and offers shown on the Software as
            well as on other resources.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            To authenticate and verify the Users’ identity and to verify
            the provided information.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            To analyze the current Software functionality for security
            and vulnerability.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            To respond to queries and complaints and to communicate.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            To perform legal obligations and enter into Contracts with
            Consultants and Clients.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            To enforce the law, including protecting our rights or third
            parties’ rights.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            To prevent or stop an activity that we may consider illegal,
            fraudulent or unethical.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            To analyze the target audience and Software client
            environment.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            To prototype and create Software mock-ups.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            To fulfill financial and accounting obligations to Clients
            and Consultants.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            To create contextual, targeting, media and other types of
            advertising.​
            <br />
          </li>
        </ol>
        <span style={{ fontFamily: "NAMU" }}></span>
      </li>
    </ol>`,
    },
    {
      heading: "RETENTION PERIODS FOR PERSONAL DATA",
      content: `<ol>
      <li style={{ fontFamily: "NAMU" }}>
        By providing access to Personal Data, you consent to the
        Personal Data transfer, storage and processing. We are obliged
        to take all necessary measures to ensure that Personal Data is
        processed in a secure manner and in accordance with the
        provisions of the Policy.
        <br />
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        Personal Data shall be stored until requested to be deleted by
        the User, Client or Consultant or for five (5) years from the
        date of receipt if such storage is necessary to record
        statistical, financial, corporate and commercial data.
        <br />
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        We may retain Personal Data for as long as necessary to provide
        the Services or fulfill obligations, resolve disputes, prevent
        misuse and enforce agreements.
        <br />
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        The Personal Data we process and store is the Users’, Customers’
        and Consultants’ property.
        <br />
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        We are entitled to use and disclose the Users’, Customers’ and
        Consultants’ Personal Data only for the purposes specified in
        section 4 of the Policy.
        <br />
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        If we change the Personal Data required for the correct
        provision/receipt of the Services, Users, Customers and
        Consultants are responsible for notifying us of such changes.​
        <br />
      </li>
    </ol>`,
    },
    {
      heading: "DATA STORAGE SECURITY AND DPO",
      content: `<ol>
      <li style={{ fontFamily: "NAMU" }}>
        We make every effort to ensure that the storage of Personal Data
        complies, to the extent possible, with the GDPR and the CCPA.
        Taking into account that no method of transmission over the
        Internet is completely secure, <strong>CGS TEAM</strong> cannot
        and does not guarantee the security of any information you hand
        over to us.
        <br />
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        We comply with the security measures for the storage of Personal
        Data under
        <a target="_blank" rel="nofollow" href="" alt="Article 32">
          Article 32
        </a>
        &nbsp;of the GDPR, such as anonymization and encryption,
        ensuring confidentiality, integrity, availability and resilience
        of processing services, timely recovery of access to data and
        testing the effectiveness of security measures.
        <br />
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        To improve data storage and security controls, the
        <strong>CGS TEAM</strong> engages a Data Protection Officer ("
        <strong>DPO</strong>") who is responsible for
        <strong>CGS TEAM</strong>'s compliance with the personal data
        protection law in accordance with
        <a
          target="_blank"
          rel="nofollow"
          href=""
          alt="GDPR articles 37, 38, 39"
        >
          GDPR articles 37, 38, 39
        </a>
        .<br />
      </li>
      <li>
        <span style={{ fontFamily: "NAMU" }}>
          According to the
          <a
            target="_blank"
            rel="nofollow"
            href=""
            alt="GDPR"
            className="on"
          >
            GDPR
          </a>
          , the CGS TEAM may engage the DPO to carry out the following
          tasks:
          <br />
        </span>
        <ol>
          <li style={{ fontFamily: "NAMU" }}>
            Informing the Сontroller and the Data Processor of the
            obligations under the data protection regulation;
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Monitoring of compliance with the regulation rules and
            requirements;
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Representation before the supervisory authorities for
            compliance with the regulations;
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Advising in all situations related to the regulation;
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Receiving and investigating Users’, Clients’ and
            Consultants’ appeals and complaints to protect their rights
            as set out in section 10 of this Policy.
            <br />
          </li>
        </ol>
        <span style={{ fontFamily: "NAMU" }}></span>
      </li>
      <li>
        <span style={{ fontFamily: "NAMU" }}>
          We provide measures for the secure storage of collected
          Personal Data on servers and hosts and provide data encryption
          and anonymization. Access to the Software is encrypted using
          standard Transport Layer Security ("TLS") technology. We also
          use strict HTTPS transport security.
          <br />
        </span>
        <ol>
          <li style={{ fontFamily: "NAMU" }}>
            <strong>Access control and management system</strong>. When
            granting access to sensitive data, several layers of
            security are used.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            <strong>Data access control</strong>. Consultants obtain
            access only to data required for the provision of Services.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            <strong>Data transmission controls</strong>. The movement of
            data across CGS TEAM's internal networks and between
            Consultants, Users and Clients is protected.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            <strong>Data entry controls</strong>.
            <strong>CGS TEAM</strong> verifies changes made or data
            deleted from processing systems.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            <strong>Accessibility controls</strong>. Personal data is
            protected against accidental destruction or loss.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            <strong>Data Integrity Control</strong>.
            <strong>CGS TEAM </strong>uses firewalls, anti-virus
            software and carries out external and internal penetration
            testing.
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            <strong>CGS TEAM </strong>is not responsible for leakage,
            unauthorized collection and disclosure, resale or misuse of
            Personal Data by the Controller or the Client.​
            <br />
          </li>
        </ol>
        <span style={{ fontFamily: "NAMU" }}></span>
      </li>
    </ol>`,
    },
    {
      heading: "INTERNATIONAL TRANSFER OF PERSONAL DATA",
      content: `<ol>
      <li>
        <span style={{ fontFamily: "NAMU" }}>
          <strong>CGS TEAM</strong> is a European company registered in
          Cyprus and we process and store Personal Data in the European
          Union. <strong>CGS TEAM’s</strong> Consultants may process and
          store Personal Data in the United States of America, EU
          countries and third countries.
        </span>
      </li>
      <li>
        <span style={{ fontFamily: "NAMU" }}>
          When we transfer Personal Data to third parties, we will
          comply with safety measures under the&nbsp;
          <a target="_blank" rel="nofollow" href="" alt="GDPR">
            GDPR
          </a>
          &nbsp;and in accordance with the Policy. When transferring
          data, we rely on approved data transfer mechanisms, which may
          include&nbsp;
          <a
            href=""
            alt="Standard contractual clauses for international transfers"
            target="_blank"
            rel="nofollow"
          >
            Standard contractual clauses for international transfers
          </a>
          , approved by the EDPB and&nbsp;
          <a target="_blank" rel="nofollow" href="" alt="GDPR">
            GDPR
          </a>
          . You may request a copy of the standard contractual clauses
          relating to your Personal Data if any.​
        </span>
        <br />
      </li>
    </ol>`,
    },
    {
      heading: "PERSONAL DATA PROVIDED TO CONSULTANTS",
      content: `<ol>
      <li style={{ fontFamily: "NAMU" }}>
        <strong>CGS TEAM</strong> engages Consultants to receive and
        provide the Services. Consultants may access the Clients’ and
        Users’ Personal Data to the extent and wherever necessary for
        the performance of their obligations.
      </li>
      <li>
        <span style={{ fontFamily: "NAMU" }}>
          <strong>CGS TEAM</strong>&nbsp;engages Consultants to:&nbsp;
        </span>
        <ol>
          <li style={{ fontFamily: "NAMU" }}>
            Provide Software development services;
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Develop design solutions;
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Conduct research and marketing analysis;&nbsp;
          </li>
          <li style={{ fontFamily: "NAMU" }}>Test the Software;</li>
          <li style={{ fontFamily: "NAMU" }}>
            Provide technical support for the Software:
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Analyze traffic information in the Software;&nbsp;
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Display and set up advertising in the Software;&nbsp;
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Analyze information about the Users’ activities in the
            Software;&nbsp;
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Create and provide content in the Software;
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Perform integration via API with external services and
            program modules;
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Carry out marketing and advertising campaigns;&nbsp;
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Obtain legal support;&nbsp;
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Receive accounting and financial support;
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Order recruiting and HR services;
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Order the services of sales and customer service managers;
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Order the services of project and product managers;&nbsp;
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Order the services of IT consultants, architects, DevOps,
            business analysts.
          </li>
        </ol>
        <span style={{ fontFamily: "NAMU" }}></span>
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        Consultants may collect Personal Data and access Clients' and
        Users' sensitive information via Means of Communication, in the
        Software or databases and by tracking activities on your device,
        including cookies and web beacons. Consultants may access
        sensitive information about Software Users and process data
        about family status, health, financial well-being, purchase and
        payment history, personal preferences and beliefs.
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        We may also transfer certain non-identifiable information about
        Software Users and&nbsp;<strong>CGS TEAM</strong>
        &nbsp;Clients to Consultants, to the extent necessary to provide
        the Services.​
        <br />
      </li>
    </ol>`,
    },
    {
      heading: "USE OF COOKIES",
      content: `<ol>
      <li>
        <span style={{ fontFamily: "NAMU" }}>
          We use cookies to improve and simplify your interaction with
          the Software. Cookies are required to store the settings you
          have chosen in the Software, for example, language, and/or to
          remember your preferences. We use Cookies only in compliance
          with the requirements of the GDPR and the relevant guidelines
          and regulations provided by the EDPB. We follow legal grounds
          under&nbsp;
        </span>
        <a
          target="_blank"
          rel="nofollow"
          href=""
          alt="Article 6 of the GDPR"
        >
          <span style={{ fontFamily: "NAMU" }}>
            Article 6 of the GDPR
          </span>
        </a>
        <span style={{ fontFamily: "NAMU" }}>
          &nbsp;when we use cookies and similar technologies:
          <br />
        </span>
        <ol>
          <li style={{ fontFamily: "NAMU" }}>User consent;</li>
          <li style={{ fontFamily: "NAMU" }}>
            Legitimate&nbsp;<strong>CGS TEAM’s</strong>
            &nbsp;interests.
          </li>
        </ol>
        <span style={{ fontFamily: "NAMU" }}></span>
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        We use basic and additional Cookies for the operation of the
        Software. Basic Cookies are always used and are necessary for
        the operation of the Software. Additional Cookies are collected
        and used if the Software User consents to this. It is up to you
        whether or not you accept Cookies, in full or in part. The User
        may block or delete Cookies, but in such case you may be
        restricted from using certain features of the Software.&nbsp;
        <br />
      </li>
      <li>
        <span style={{ fontFamily: "NAMU" }}>
          To change the Cookie settings on your browser, follow the
          instructions given in the following links:
        </span>
        <ol>
          <li style={{ fontFamily: "NAMU" }}>
            <a
              target="_blank"
              rel="nofollow"
              href="https://support.google.com/chrome/answer/95647?hl=ru"
              alt="Google Chrome"
            >
              Google Chrome
            </a>
            ;
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            ​
            <a target="_blank" rel="nofollow" href="https://support.apple.com/ru-ru/guide/safari/sfri11471/mac" alt="Safari">
              Safari
            </a>
            ;
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            ​
            <a
              target="_blank"
              rel="nofollow"
              href="https://support.mozilla.org/ru/kb/kuki-informaciya-kotoruyu-veb-sajty-hranyat-na-vas"
              alt="Mozilla Firefox"
            >
              Mozilla Firefox
            </a>
            ;
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            ​
            <a target="_blank" rel="nofollow" href="https://help.opera.com/ru/latest/web-preferences/" alt="Opera">
              Opera
            </a>
            ;
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            ​
            <a target="_blank" rel="nofollow" href="https://support.microsoft.com/en-gb/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" alt="Microsoft">
              Microsoft
            </a>
            .
          </li>
        </ol>
        <span style={{ fontFamily: "NAMU" }}></span>
      </li>
      <li>
        <span style={{ fontFamily: "NAMU" }}>
          ​
          <strong>
            Types of cookies, purposes and retention period:
          </strong>
          ​
        </span>
        <ol>
          <li style={{ fontFamily: "NAMU" }}>
            <strong>Basic</strong>&nbsp;Cookies and other tracking
            technologies are necessary for using the Software and comply
            with applicable data protection laws. We use cookies to
            check the Software functionality on your device, for
            example: whether the User's browser supports cookies, or
            whether the User has accepted the use of cookies or not.
          </li>
          <li>
            <span style={{ fontFamily: "NAMU" }}>
              ​<strong>Additional:</strong>​
            </span>
            <ol>
              <li style={{ fontFamily: "NAMU" }}>
                Analytical Cookies help to understand how Users interact
                with the Software, for example: which pages are visited,
                and how fast pages load. Such cookies collect
                information anonymously to avoid identifying you. The
                purpose of collecting such files is to improve the
                Software operation.
              </li>
              <li style={{ fontFamily: "NAMU" }}>
                Marketing Cookies are used to display relevant
                advertising.
              </li>
              <li style={{ fontFamily: "NAMU" }}>
                Functional Cookies allow you to remember your
                preferences and the choices you make in the Software and
                also allow you to provide you with important features
                including comments, widgets and online chat.​
                <br />
              </li>
            </ol>
          </li>
        </ol>
        <span style={{ fontFamily: "NAMU" }}></span>
      </li>
    </ol>`,
    },
    {
      heading: "USERS’, CLIENTS’ AND CONSULTANTS’ RIGHTS",
      content: `<ol>
      <li>
        <span style={{ fontFamily: "NAMU" }}>
          &nbsp;<strong>Access right</strong>. The Privacy Policy lists
          the Personal Data of the User, Customer, Consultant that we
          collect and process. The User, Customer and Consultant may
          contact&nbsp;<strong>DPO</strong>&nbsp;to request access to
          the Personal Data we hold in accordance with Article&nbsp;
        </span>
        <a
          target="_blank"
          rel="nofollow"
          href="http://gdpr-text.com/ru/read/article-15/"
          alt="15 of the General Data Protection Regulation"
        >
          <span style={{ fontFamily: "NAMU" }}>
            15 of the General Data Protection Regulation
          </span>
        </a>
        <span style={{ fontFamily: "NAMU" }}>
          .&nbsp;
          <br />
        </span>
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        ​<strong>Right to rectification</strong>. The User, the Customer
        and the Consultant shall have the right to update, correct, and
        supplement their Personal Data. The User, Customer and
        Consultant may also contact&nbsp;
        <a
          target="_blank"
          rel="nofollow"
          href="http://gdpr-text.com/ru/read/article-16/"
          alt="Article 16 of the General Data Protection Regulation"
        >
          Article 16 of the General Data Protection Regulation
        </a>
        &nbsp;to access their Personal Data in order to update, correct
        and/or amend it, pursuant to Article 16 of the General Data
        Protection Regulation.
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        ​<strong>Right to portability</strong>. User, Client and
        Consultant may request the transfer of Personal Data to third
        parties, pursuant to&nbsp;
        <a
          target="_blank"
          rel="nofollow"
          href="http://gdpr-text.com/ru/read/article-20/"
          alt="Article 20 of the General Data Protection Regulation"
        >
          Article 20 of the General Data Protection Regulation
        </a>
        .
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        ​<strong>Right to be forgotten</strong>. The User, the Client
        and the Consultant shall have the right to delete Personal Data
        about themselves in accordance with&nbsp;
        <a
          target="_blank"
          rel="nofollow"
          href=""
          alt="Article 17 of the General Data Protection Regulation"
        >
          Article 17 of the General Data Protection Regulation
        </a>
        . The Personal Data, in such a case, shall be deleted
        permanently.
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        ​<strong>Right to object</strong>. The User, the Client and the
        Consultant shall have the right to raise an objection to the
        processing of Personal Data at any time, in accordance
        with&nbsp;
        <a
          target="_blank"
          rel="nofollow"
          href=""
          alt="Article 21 of the General Data Protection Regulation"
        >
          Article 21 of the General Data Protection Regulation
        </a>
        .
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        ​
        <strong>
          The right to withdraw consent to data processing
        </strong>
        . The User, Client and Consultant shall have the right to
        withdraw their consent to the processing of Personal Data that
        has been provided to us at any time. In the event of withdrawal
        of the consent to the processing, certain features of our
        Software may not be available.
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        ​
        <strong>
          The right not to be subjected to automated decision-making in
          individual cases, including profiling
        </strong>
        . The User shall have the right not to be subjected to a
        decision that is based solely on automated processing, including
        profiling, which gives rise to its legal consequences pursuant
        to article&nbsp;
        <a
          target="_blank"
          rel="nofollow"
          href="http://gdpr-text.com/ru/read/article-22/"
          alt="22 of the General Data Protection Regulation"
        >
          22 of the General Data Protection Regulation
        </a>
        .
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        ​<strong>CGS TEAM may deny Users access right, right to</strong>
        &nbsp;rectification, portability, be forgotten, to object
        if&nbsp;<strong>CGS TEAM</strong>&nbsp;acts as the Processor of
        Personal Data and is restricted in its powers by the Data
        Controller.
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        We will make commercially reasonable efforts to accommodate your
        requests for deletion; however, certain information will be
        retained in the Software. In addition, the rights described
        above may be limited, for example, if complying with your
        request would result in disclosure of another person's Personal
        Data or if you ask us to delete information that we are required
        to retain by law, or if we have a legitimate interest in
        retaining (for example, for fraud prevention purposes).
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        Your Personal Data may remain on our records and information
        that you update or delete may be retained for our administrative
        purposes to the extent permitted by law. We will not delete
        information you have posted publicly using Software or within
        it. Be aware that neither you nor&nbsp;
        <strong>CGS TEAM</strong>&nbsp;can delete all copies of
        information that has previously been shared with others.​
        <br />
      </li>
    </ol>`,
    },
    {
      heading: "ADDITIONAL PRIVACY NOTICE FOR CALIFORNIA RESIDENTS",
      content: `<ol>
      <li style={{ fontFamily: "NAMU" }}>
        This supplemental privacy notice for California residents
        applies solely to California residents. It applies to Personal
        Data that we collect in the Software or through other means and
        resources, such as information collected offline, in person or
        by telephone, freelance exchanges or social media.
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        The CCPA requires us to disclose the categories of Personal Data
        we collect about consumers in California, the categories of
        sources from which the information was collected, the business
        or commercial purposes for which the information was collected,
        and the categories of parties to whom we share California
        residents’ Personal Data.
        <br />
      </li>
      <li>
        <span style={{ fontFamily: "NAMU" }}>
          The CCPA permits you to request that we:
        </span>
        <ol>
          <li style={{ fontFamily: "NAMU" }}>
            Provide you with the categories of Personal Data we have
            collected or disclosed about you in the past twelve (12)
            months;&nbsp;
            <br />
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Provide you with the source categories of your Personal
            Information;
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Explain the business or/and commercial purpose for which we
            collected or processed your Personal Data;
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Limited the categories of third parties to whom we may share
            your Personal Data;
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Provide you with access and/or a copy of the information we
            hold about you;
          </li>
          <li style={{ fontFamily: "NAMU" }}>
            Deleted your Personal Data in our possession.​
            <br />
          </li>
        </ol>
        <span style={{ fontFamily: "NAMU" }}></span>
      </li>
    </ol>`,
    },
    {
      heading: "VACANCIES PUBLISHED FOR CONSULTANTS",
      content: `<ol>
      <li style={{ fontFamily: "NAMU" }}>
        We may publish current vacancies for the recruitment of
        Consultants. To apply for a vacancy, Consultants need to
        complete a questionnaire and be interviewed, which may be a
        video/audio call using the Means of Communication. By completing
        the questionnaire, the Consultant hands over to us Personal Data
        and agrees that such data will be processed by&nbsp;
        <strong>CGS TEAM</strong>.
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        The questionnaire data shall only be available for processing
        by&nbsp;&nbsp;<strong>CGS TEAM</strong>&nbsp;and Clients
        of&nbsp;<strong>CGS TEAM</strong>. The questionnaire includes
        the collection of the following data: location, work portfolio,
        information about employers, employer references, participation
        in rankings and awards, professional achievements, diplomas and
        certificates of education, hourly rate, name, age, contact
        details, marital status and state of health.
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        The information handed over in the questionnaire is the
        Consultant's Personal Data and will be processed and used
        according to this Privacy Policy.​
        <br />
      </li>
    </ol>`,
    },
    {
      heading: "LINKS TO OTHER WEBSITES",
      content: `<ol>
      <li style={{ fontFamily: "NAMU" }}>
        The Software may contain links to third party websites such as
        advertisements, partners, online payments, external services and
        programs integrated via API. If you decide to link to a third
        party website, you will be redirected to that third party
        website.&nbsp;
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        The fact that we link to a third party website is not an
        indication of our association with that website, nor is it an
        indication that their privacy and/or information security policy
        complies with our Policy.
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        We have no control over any third party websites that may be
        located on the Software. Third party websites may place their
        own Cookies or other files on your device, collect data or
        solicit personal information from you. We encourage you to
        review the privacy policy of websites you visit by clicking on
        links provided by you through the Software.​
        <br />
      </li>
    </ol>`,
    },
    {
      heading: "CHANGES TO THIS POLICY",
      content: `<ol>
      <li style={{ fontFamily: "NAMU" }}>
        We may change, update and amend this Policy from time to time to
        ensure that Personal Data is kept secure and that Policy
        complies with the GDPR/CCPA.
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        In the event of material changes that affect Personal Data, we
        shall notify Users, Customers and Consultants of such changes by
        posting a news release on the Software and/or by means of an
        email newsletter.
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        If you unsubscribe from emails notifying us of changes to legal
        documentation, it remains the responsibility of Users, Clients
        and Consultants to familiarize themselves with them.
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        Once the Privacy Policy has been amended, we have the right to
        request that Users, Clients and Consultants re-consent to the
        updated Policy.
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        Our electronic or otherwise retained copies of this Policy shall
        be deemed to be true, complete, valid and enforceable versions
        of this Policy in effect at the time you use the Software​
        <br />
      </li>
    </ol>`,
    },
    {
      heading: "CASES AND REFERENCES",
      content: `<ol>
      <li style={{ fontFamily: "NAMU" }}>
        We collect Personal Data for the publication of cases and
        references from&nbsp;<strong>CGS TEAM’s</strong>&nbsp;Users,
        Clients and Consultants. Please note that the cases and
        references you provide may be available for public viewing by
        Users on the Software.
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        We collect feedback and references about the Services and the
        Software to promote and market the&nbsp;
        <strong>CGS TEAM’s</strong>&nbsp;Services. We use this
        information to respond to your requests, improve the Services
        and the Software, develop new products and features and attract
        new Customers.
      </li>
      <li style={{ fontFamily: "NAMU" }}>
        With the consent of Users, Clients, Consultants, we may publish
        references or cases which include or link to your Personal Data
        in the Software. If you wish to update or delete your case
        and/or reference, you may contact us at
        <a
          href=""
          alt="legal@cgsteam.io"
          className="on"
        >
          legal@cgsteam.io
        </a>
        .<br />
      </li>
    </ol>`,
    },
  ];
  return (
    <article className="sc-fa001905-0 gKGfyV privacy">
      <header className="sc-89d0896a-8 kzAMve">
        <h1 className="sc-89d0896a-0 kLvbzv">Privacy Policy</h1>
        <div className="sc-89d0896a-1 gWDVZj">
          <p>
            <span style={{ fontFamily: "NAMU" }}>
              The Privacy Policy describes the rules and principles of Personal
              Data collection and processing by
            </span>
            <strong>
              <span style={{ fontFamily: "NAMU" }}>
                CODE GENERATION SOFTWARE TEAM LTD ("CGS TEAM")
              </span>
            </strong>
            <span style={{ fontFamily: "NAMU" }}>
              , code: HE 436706, which is the Processor and may act as Data
              Controller for the purposes described in this Policy, registered
              address at Charalampou Mouskou, 20, ABC CENTER, 1st floor,
              Flat/Office 108, 8010, Paphos, Cyprus.
            </span>
          </p>
          <p>
            <span style={{ fontFamily: "NAMU" }}>
              This Privacy Policy ("Policy") regulates the Personal Data
              collection, processing, storage and transfer, defines the lawful
              basis for the Personal Data processing and sets out the rights of
              Users, Customers, Consultants under applicable data protection and
              privacy laws.
              <br />
            </span>
          </p>
          <p>
            <span style={{ fontFamily: "NAMU" }}>
              References to the words "we", "our" or "us" or similar words
              herein shall mean{" "}
            </span>
            <strong>
              <span style={{ fontFamily: "NAMU" }}>
                CODE GENERATION SOFTWARE TEAM LTD ("CGS TEAM")
              </span>
            </strong>
            <span style={{ fontFamily: "NAMU" }}>
              , depending on the context of the Policy.
            </span>
            <br />
          </p>
          <p>
            <span style={{ fontFamily: "NAMU" }}>
              References to "you" or "your" or similar words in the content
              shall mean Users, Customers and Consultants of
            </span>
            <strong>
              <span style={{ fontFamily: "NAMU" }}>
                CODE GENERATION SOFTWARE TEAM LTD ("CGS TEAM")
              </span>
            </strong>
            <span style={{ fontFamily: "NAMU" }}>.</span>
            <br />
          </p>
          <p>
            <span style={{ fontFamily: "NAMU" }}>
              We pursue privacy-protecting and creating measures to provide
              security for the Personal Data you hand over to us. We will only
              collect, use and transfer your data in the ways described in this
              Policy.​
            </span>
            <br />
          </p>
        </div>
      </header>
      <ol className="sc-89d0896a-2 fFoxLL">
        {privacyPolicyExpandCollapseSectionData.map((section, index) => (
          <PrivacyPolicyExpandCollapseSection
            key={index}
            heading={section.heading}
            content={section.content}
          />
        ))}
        <div className="lastItem">
          <PrivacyPolicyExpandCollapseSection
            heading="CONTACTING US"
            content={`<ol>
                <li style={{ fontFamily: "NAMU" }}>
                  For any questions regarding collection and processing of your
                  data by&nbsp;<strong>CGS TEAM</strong>, you can contact
                  our&nbsp;<strong>DPO</strong>, at
                  <a href="/" alt="legal@cgsteam.io">
                    legal@cgsteam.io
                  </a>
                  .
                </li>
                <li style={{ fontFamily: "NAMU" }}>
                  You are also entitled to receive further information about
                  your rights in relation to your Personal Data by sending an
                  email to:
                  <a href="/" alt="legal@cgsteam.io">
                    legal@cgsteam.io
                  </a>
                  .
                </li>
                <li style={{ fontFamily: "NAMU" }}>
                  If you have an unresolved privacy or data use issue that we
                  have not resolved, any questions or complaints about the
                  Software or this Policy, you may contact us by sending an
                  email to:
                  <a href="/" alt="legal@cgsteam.io" className="on">
                    legal@cgsteam.io
                  </a>
                  .​
                  <br />
                </li>
              </ol>`}
          />
        </div>
      </ol>
    </article>
  );
};

export default page;
