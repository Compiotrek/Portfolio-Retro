const BootSequence = [
  { type: "line", text: "COMPIOTREK PERSONAL WORKSTATION" },
  { type: "line", text: "Firmware Revision v1.03" },
  { type: "line", text: "Prototype Unit: PORTFOLIO-01" },
  { type: "blank" },

  { type: "line", text: "Pentium CPU at 133 MHz, 1 Processor(s)" },
  {
    type: "memory",
    label: "Memory Test :",
    target: 32768,
    step: 2048,
    interval: 10,
  },
  { type: "blank" },

  { type: "line", text: "Peripheral Scan and Boot Services" },

  {
    type: "detect",
    left: "Detecting Hard Disk",
    dots: "...",
    right: "IDE Drive 2.1GB",
    delay: 50,
  },
  {
    type: "detect",
    left: "Detecting CD-ROM",
    dots: "...",
    right: "ATAPI CD-ROM 16X",
    delay: 50,
  },
  {
    type: "detect",
    left: "Detecting Floppy Drive",
    dots: "...",
    right: "3.5 Inch 1.44MB",
    delay: 50,
  },
  {
    type: "detect",
    left: "Detecting Video Adapter",
    dots: "...",
    right: "SVGA Compatible",
    delay: 50,
  },
  {
    type: "detect",
    left: "Checking Boot Sector",
    dots: "...",
    right: "OK",
    delay: 50,
  },

  { type: "blank" },
  { type: "finalSequence" },
];

export default BootSequence;