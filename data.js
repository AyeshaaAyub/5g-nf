// This file holds the 5G NF → API mapping
const nfData = [
  {
    name: "AMF",
    description: "Access and Mobility Management Function",
    apis: [
      { name: "UE Context Management", url: "/amf/ue-context" },
      { name: "Event Exposure", url: "/amf/event-exposure" }
    ]
  },
  {
    name: "SMF",
    description: "Session Management Function",
    apis: [
      { name: "PDU Session Management", url: "/smf/pdu-session" }
    ]
  },
  {
    name: "UPF",
    description: "User Plane Function",
    apis: [
      { name: "Packet Forwarding Control", url: "/upf/packet-forwarding" }
    ]
  },
  {
    name: "NRF",
    description: "Network Repository Function",
    apis: [
      { name: "NF Discovery", url: "/nrf/nf-discovery" }
    ]
  }
];
