export const modulesDataEN = {
  "Net Discovery": {
    "Endpoints and Servers": {
      description: "Automated discovery of end devices and servers within the corporate network.",
      features: [
        "Complete hardware and software inventory",
        "Automatic synchronization with Aleph Manager CMDB",
        "Configurable synchronization rules",
        "Multiplatform agent"
      ],
      icon: "server"
    },
    "Networking": {
      description: "Dynamic inventory of network equipment (routers, switches) and network topology analysis.",
      features: [
        "Detection via SNMP v2, v2c and v3",
        "Detection of device characteristics, interface status and connection speed",
        "Automatic synchronization with Aleph Manager CMDB",
        "Customizable synchronization rules"
      ],
      icon: "network"
    }
  },
  "GRC (Governance, Risk and Compliance)": {
    "CMDB": {
      description: "Centralized and dynamic repository of technological assets and configuration relationships. The CMDB module allows modeling the technological infrastructure, identifying dependencies and maintaining updated and reliable information for risk management and compliance.",
      features: [
        "Automated registration of technological assets (servers, networks, applications, endpoints)",
        "Visualization of relationships between components and cross-impact",
        "Integration with automatic discovery systems (Net Discovery)",
        "Version control and change traceability",
        "Synchronization with other GRC modules for risk analysis, incidents and compliance"
      ],
      icon: "database"
    },
    "Information Asset Classification": {
      description: "Allows classification of technological and information assets according to security, criticality and value criteria for the organization. This module facilitates regulatory compliance and strengthens risk management by establishing clear protection and treatment priorities.",
      features: [
        "Assignment of confidentiality, integrity and availability levels (C-I-A)",
        "Application of customizable taxonomies according to internal policies",
        "Automatic classification based on rules or integration with CMDB",
        "Visualization of classified assets by criticality level",
        "Report generation for audit, compliance and risk management",
        "Fully configurable: allows adapting methodologies, classification criteria, rating scales and data structures according to each organization's needs"
      ],
      icon: "tag"
    },
    "Operational Risk Analysis": {
      description: "Allows identifying, assessing and managing operational risks that may affect processes and organizational structures. This module provides a clear view of non-technical risk maps, facilitating decision making and regulatory compliance.",
      features: [
        "Identification of potential events according to processes or organizational units",
        "Impact and probability assessment through qualitative and/or quantitative methodologies",
        "Definition of mitigating controls and monitoring of their effectiveness",
        "Recording of action plans, assigned responsible parties and committed dates",
        "Integration with historical event database to feed risk matrices",
        "Highly configurable: allows adapting methodologies, scales, survey questions and risk structure to each organization"
      ],
      icon: "bar-chart"
    },
    "Technological Risk Analysis": {
      description: "Facilitates the identification, assessment and treatment of risks associated with technological infrastructure, critical systems and digital services. This module contributes to strengthening operational resilience and regulatory compliance through a structured and adaptable approach.",
      features: [
        "Assessment of threats and vulnerabilities on technological assets",
        "Impact and probability estimation adjustable according to asset type",
        "Associations with existing controls and definition of mitigation plans",
        "Recording of responsible parties, committed dates and progress status",
        "Visualization of risks by criticality and asset type",
        "Highly configurable: allows defining analysis methodologies, evaluation criteria, measurement scales and specific workflows"
      ],
      icon: "shield"
    },
    "Dependency Tree": {
      description: "Allows visual modeling of relationships between processes, assets, services and organizational units, to understand their level of interdependence and anticipate the impact of incidents or failures. This module is key for operational continuity analysis, risks and criticality assessment.",
      features: [
        "Hierarchical visualization of dependencies between business and technology components",
        "Establishment of relationships between items defined in the CMDB and Business Model",
        "Integration with Technological Risks, Operational Risks, BIA and Classification modules",
        "Possibility to build trees according to different dimensions (operational, technological, regulatory)",
        "Fully configurable: allows defining node types, attributes, levels, allowed relationships and visualization rules"
      ],
      icon: "git-merge"
    },
    "Operational Risk Event Database": {
      description: "Allows recording, importing, querying and exporting loss events associated with operational risks. This module provides historical traceability, regulatory compliance and supports risk analysis based on real events that occurred in the organization.",
      features: [
        "Manual registration or bulk import of events through .txt, .csv or .xls files",
        "Assignment of categories, causes, impacts and dates to each event",
        "Export of the database in accordance with regulatory requirements",
        "Data quality control: event editing according to allowed dates, event ID validation, and duplicate control",
        "Parameterization of the event structure, including entity codes, date ranges, and editing permissions",
        "Fully configurable: allows defining fields to capture, import sources and processing rules according to the regulatory or internal framework"
      ],
      icon: "alert-circle"
    },
    "Digital Financial Services Analysis": {
      description: "Allows evaluating risks associated with digital channels used by the entity, such as online banking, mobile banking and electronic wallets. This module supports regulatory compliance and strengthens technological risk management applied to digital financial operations.",
      features: [
        "Identification and survey of assets categorized as Digital Financial Services",
        "Assignment of regulatory, technical and security requirements",
        "Compliance management through forms and control monitoring",
        "Recording of periodicity, responsible parties, evidence and findings",
        "Highly configurable: allows defining scenarios, requirements, criticality, compliance levels, periodicities and responsible parties"
      ],
      icon: "credit-card"
    },
    "Third Party Delegation Analysis": {
      description: "Allows evaluating the degree of compliance of technological services delegated to external providers, based on the regulatory, contractual and operational requirements defined for each service type. This module facilitates periodic supervision of providers and traceability of their obligations.",
      features: [
        "Structured registration of outsourced services and associated providers",
        "Assignment of specific requirements to each service according to criticality and service type",
        "Compliance evaluation by requirement",
        "Upload and control of evidence, comments, findings and follow-up by internal or external references",
        "Management of review periodicity, control status and assigned responsible parties",
        "Action plans linked to unmet requirements, with responsible parties and resolution dates",
        "Highly configurable: allows defining service types, requirements, compliance scales, customized forms and follow-up rules adapted to regulations and internal policies"
      ],
      icon: "users"
    },
    "Decentralized Services Analysis": {
      description: "Allows supervising services provided between companies within the same corporate group, where one entity assumes operational, technological or administrative functions for another. This module ensures compliance with regulatory and operational requirements applicable to this particular type of delegation, differentiating them from traditional outsourced services.",
      features: [
        "Structured registration of decentralized services provided or received between entities of the same group",
        "Association of services to specific regulatory scenarios and internal requirements",
        "Compliance evaluation by requirement",
        "Management of control periodicities, designated responsible parties and evidence",
        "Follow-up of findings, observations and action plans with resolution dates",
        "Highly configurable: allows defining requirements, criticality, review periodicity and evaluation forms adapted to the corporate group's reality"
      ],
      icon: "cpu"
    },
    "Compliance": {
      description: "Allows centralized management of controls, regulations and internal and external audits applicable to the entity. This module provides traceability on regulatory compliance and facilitates supervision of constantly evolving regulatory obligations.",
      features: [
        "Registration of applicable regulations (regulatory, internal or external) with their corresponding detail",
        "Association of controls to assets, processes or responsible areas",
        "Compliance management by control: compliance, evidence, periodicity and responsible parties",
        "Follow-up of findings, observations and action plans derived from audits or reviews",
        "Visualization of expirations, alerts and upcoming controls to execute",
        "Fully configurable: allows defining regulations, controls, compliance statuses, periodicities, responsible parties and evidence structures adapted to current regulations"
      ],
      icon: "check-circle"
    },
    "Incident Database": {
      description: "Allows recording, managing and monitoring incidents affecting the entity's technology or security. This module centralizes key information for response, analysis and continuous improvement, and integrates with the technological risk module.",
      features: [
        "Structured registration of incidents with details of date, area, type, cause and consequences",
        "Customizable categorization and classification by incident type (technological, security, regulatory, etc.)",
        "Recording of responsible parties, actions taken, resolution deadlines and current status",
        "Association of the incident to affected assets, services, processes or units",
        "Action history, comments and related documentation",
        "Highly configurable: allows defining categories, workflows, custom fields, criticality levels and closure criteria"
      ],
      icon: "file-text"
    },
    "Vulnerability Management": {
      description: "Allows recording, analyzing and monitoring technical vulnerabilities detected in the technological infrastructure. This module centralizes information about weaknesses, facilitates their treatment and allows prioritizing corrective actions according to asset criticality and failure severity.",
      features: [
        "Registration of vulnerabilities detected through external scanners, audits or manual input",
        "Association of vulnerabilities to technological assets defined in the CMDB",
        "Classification by severity, asset criticality and treatment status",
        "Follow-up of corrective actions, responsible parties, target dates and results",
        "Possibility to document exceptions, recurrences and internal validations"
      ],
      icon: "activity"
    }
  },
  "Business Continuity": {
    "BIA": {
      description: "Allows identifying essential processes and analyzing the impacts that their unavailability would have over time.",
      features: [
        "Impact assessment in different configurable dimensions (legal, reputational, financial, operational, etc.)",
        "Definition of time scales and associated impacts for each one",
        "Manual or automatic calculation of MTPD (Maximum Tolerable Downtime)",
        "Identification of critical applications, required resources and interdependencies for each process or subprocess",
        "Management of surveys to references and approval flows",
        "Fully configurable: allows defining variables, scales, responsible parties, impact types and customized survey structures"
      ],
      icon: "target"
    },
    "Scenarios": {
      description: "Allows defining and managing different types of disruptive scenarios that may affect operational continuity, such as technological failures, natural disasters or regulatory events. This module links scenarios to processes, assets and strategies to evaluate response capacity in different situations.",
      features: [
        "Registration of critical scenarios adjusted to the entity's reality",
        "Association with processes, areas, assets and affected services",
        "Linkage with continuity strategies and recovery plans",
        "Highly configurable: allows defining scenario types, analysis dimensions, metrics and exposure levels"
      ],
      icon: "layers"
    },
    "Strategies": {
      description: "Documents and organizes the planned response strategies for each scenario or critical process. This module allows structuring action lines in case of interruptions, assigning responsible parties and ensuring consistency with continuity plans.",
      features: [
        "Registration of continuity strategies by process, scenario or business unit",
        "Detail of preventive measures, response actions and alternative resources",
        "Association with BIA results and defined scenarios",
        "Assignment of responsible parties, priority levels and recovery objectives",
        "Fully configurable: allows defining strategy structure, categories, action types and responsible parties according to the adopted continuity methodology"
      ],
      icon: "award"
    },
    "Continuity Plans": {
      description: "Allows documenting, maintaining and activating operational continuity plans associated with each scenario or critical process. This module ensures that the organization has clear procedures, designated responsible parties and planned actions to respond to disruptive events.",
      features: [
        "Registration of continuity plans linked to processes and critical scenarios",
        "Detail of activation steps, responsible parties, alternative resources and estimated times",
        "Association with BIA analysis results (criticality, MTPD, applications and critical resources)",
        "Management of supporting documents and validation evidence",
        "Follow-up of plan status",
        "Highly configurable: allows defining plan structure, action types, custom fields, responsible parties and review frequencies"
      ],
      icon: "book"
    },
    "Disaster Recovery Plans": {
      description: "Allows documenting specific procedures to restore critical technological and operational services in case of disasters. This module focuses on the technical recovery of infrastructure, communications and systems, ensuring a controlled return to normal operation.",
      features: [
        "Registration of technical plans associated with defined disaster scenarios",
        "Detail of technical steps, responsible parties, estimated times and required resources",
        "Association with assets, services and critical sites defined in the BIA",
        "Follow-up of each plan's status",
        "Fully configurable: allows defining plan types, activation flows, responsible parties and supporting documentation"
      ],
      icon: "refresh-cw"
    }
  },
  "Expected Credit Loss": {
    "Expected Credit Loss": {
      description: "Allows calculating and documenting the expected credit loss on credit portfolios, in accordance with IFRS 9 guidelines and local regulations. The solution integrates imports of operations and payments, portfolio segmentation, parameter calculation (PD, LGD, EAD), classification by stages and documentation of results, guaranteeing complete traceability of the process.",
      features: [
        "Bulk import of historical operations and payments in standardized format",
        "Portfolio segmentation through dynamic and customizable filters",
        "PD calculation by month and 12-month PD according to defined rules and applied segmentation",
        "LGD calculation by segment, considering effective rates, payments made and present value",
        "Automatic classification into stages 1, 2 and 3 with configurable criteria (by days or months of delay)",
        "Panel to complete the expected loss table by segment and stage, and save historical results",
        "Fully configurable: allows defining segmentation criteria, file structure, calculation parameters, default rules, applicable rates, and review flows adapted to the entity's policies"
      ],
      icon: "dollar-sign"
    }
  },
  "AML/CFT (Anti-Money Laundering and Counter-Terrorism Financing)": {
    "Customer Database": {
      description: "The module centralizes all necessary information about the entity's customers, integrating identifying data, segmentation, classification and updated status. It is the starting point for risk analysis, operation monitoring and compliance with regulatory obligations regarding AML/CFT.",
      features: [
        "Bulk data import from core or external systems (banking, ERP, etc.)",
        "Configurable fields: personal, tax, contact, sector, activity, customer type, etc.",
        "Automatic or manual assignment of risk segment and operational status",
        "Historical record of customer data changes and updates",
        "Consolidated customer view with access to their file, associated operations and alerts",
        "Fully configurable: allows defining data structure, load sources, custom attributes, update rules and internal validations"
      ],
      icon: "user"
    },
    "Transaction Database": {
      description: "The transaction database concentrates all financial movements made by customers, functioning as a key source for operational analysis and automated monitoring within the AML/CFT framework. Its design allows integrating data from multiple systems and maintaining complete traceability on each recorded operation.",
      features: [
        "Bulk import of movements from transactional systems (banking core, digital channels, etc.)",
        "Structured registration of operations: date, channel, type, currency, amount, accounts involved, among others",
        "Automatic association of each operation with its corresponding customer",
        "Configurable categorization by operation type, channel used, product or risk level",
        "Visualization of transaction history by customer, with advanced filters",
        "Fully configurable: data structure, load frequency, filters, validations and custom fields adaptable to each entity"
      ],
      icon: "credit-card"
    },
    "Lists": {
      description: "Allows administering and consulting in a centralized manner the lists of observed persons and entities, including both external (official) lists and internal lists generated by the entity itself. It integrates with the customer and transaction databases to activate automated controls and due diligence actions for relevant matches.",
      features: [
        "Automatic update of external lists (FIU, UN, OFAC, FATF, among others) through API integration",
        "Possibility to create and maintain internal lists according to own criteria (rejected customers, background, blacklists, etc.)",
        "Automated detection of matches with customers, related persons and counterparts",
        "Flexible matching rules: exact, partial, by name, document, alias or other identifiers",
        "Registration and traceability of match analysis: result, evidence, actions taken and assigned responsible party",
        "Association with automatic alerts and enhanced due diligence flows",
        "Fully configurable: sources, update frequency, list structure, matching criteria and treatment flows adaptable to each entity"
      ],
      icon: "list"
    },
    "Risk Matrix": {
      description: "Allows evaluating and classifying each customer's risk level through a configurable matrix based on multiple parameterizable variables such as economic activity, jurisdiction, linking channel, transactional behavior and other relevant factors.",
      features: [
        "Automatic evaluation of customer risk based on parameters defined by the entity",
        "Dynamic calculation of risk level from configurable formulas, weightings and scales",
        "Programmed periodic review and possibility of reclassification by events",
        "Recording of risk history and justifications for audit",
        "Highly configurable: allows defining matrix structure, variables to consider, scores, risk ranges and update rules according to internal policies or FIU regulations"
      ],
      icon: "filter"
    },
    "Transactional Monitoring": {
      description: "Allows continuous supervision of customer operations based on configurable formulas, risk profiles and list matches, generating alerts that must be managed according to internal procedures and current regulations. Centralizes the generation, analysis and documentation of alerts in an environment with complete traceability.",
      features: [
        "Automatic generation of alerts from defined formulas on transactions, lists and behaviors",
        "Fully configurable rules engine: allows creating multiple conditions using customer, channel, amount, frequency, etc. variables",
        "Manual registration of alerts by analysts or compliance officers",
        "Assignment of alerts to responsible analysts, with status, time and priority control",
        "Operational flow with review, approval, comments, attachment of supporting documentation and formal closure",
        "Customizable alert statuses: open, in analysis, escalated, approved, closed, archived",
        "Fully configurable: allows defining generation rules, workflows, closure criteria, involved roles and traceability of each action performed"
      ],
      icon: "eye"
    },
    "Reporting Regimes": {
      description: "Allows generating, managing and submitting reports required by regulatory bodies regarding AML/CFT. Centralizes the preparation of files in required formats, with data validation, duplicate control and complete traceability of the process.",
      features: [
        "Automated generation of reports according to regimes established by the FIU or other regulatory entities",
        "Integration with customer, transaction, alert and file databases to extract required data",
        "Internal validations prior to submission: mandatory fields, consistency, duplicates and technical structure",
        "Recording of versions, generation dates, responsible parties and file status (draft, validated, submitted)",
        "Submission history with evidence of sending and acknowledgment, if applicable",
        "Fully configurable: allows activating or deactivating regimes, defining fields to include, output structure and extraction logic according to current or future regulations"
      ],
      icon: "file-text"
    }
  }
};

export const categoriesListEN = Object.keys(modulesDataEN);