/**
 * Branch-style user flows aligned with the Jio World Centre Roadways case study in Figma.
 * Rendered via Mermaid in the case study (see MermaidFlowchart).
 */

export const OPERATOR_FLOW_MERMAID = `flowchart TB
  OD[Dashboard]
  OD --> VTB[View today's bookings]
  OD --> MBA[Monitor bay availability]
  OD --> VRL[Vehicle ready to leave]
  VTB --> VAG[Vehicle arrives at gate]
  VAG --> TAV{Ticket available?}
  TAV -->|Yes| CI[Check-in]
  CI --> ED1[Enter details]
  ED1 --> PTS[Print or Send ticket]
  PTS --> CIC([Check-in complete])
  TAV -->|No| UOE{Utility or Exhibitor?}
  UOE --> ED2[Enter details]
  ED2 --> PIC[Proceed to check-in]
  VRL --> SS[Scan / Search / Check-out]
  SS --> COC([Check-out complete])`;

export const ADMINISTRATOR_FLOW_MERMAID = `flowchart TB
  DD[Dashboard]
  DD --> VUE[View upcoming events]
  VUE --> AEM[Add / Edit / Delete event]
  DD --> VSL[View layout of site]
  VSL --> ABN[Add / Edit / Delete bay]
  DD --> MBM[Monitor bay availability]`;

export const EXHIBITOR_FLOW_MERMAID = `flowchart TB
  ED[Dashboard]
  ED --> VME[View my events]
  VME --> ANB[Add new booking]
  ANB --> EDD[Enter details]
  EDD --> BS([Book slot])
  ED --> VMB[View my bookings]
  VMB --> ECO[Edit or Cancel booking]`;
