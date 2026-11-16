/* Proposed two-player missions; checkpoints and gameplay require development. */
window.GROUPS = [
  {
    "slug": "bim-technical",
    "number": "01",
    "name": "BIM Engineer + Technical Engineer",
    "roles": [
      "bim",
      "technical"
    ],
    "hook": "Find five clashes. Design a route. Bring the flow back.",
    "challenge": "Five clashes block a fictional waterfall water pipe.",
    "story": "The pair travel from the Jewel atrium to a planned Revit-designed pump room and service area. The BIM Engineer shrinks and flies above the ceiling to find the clashes. The Technical Engineer follows on foot and designs each new pipe route on a wall screen. Together, they repair the route and test the flow.",
    "levels": [
      {
        "level": 1,
        "title": "First repair",
        "issue": "A water pipe crosses an air duct. A guided first clash introduces a simple elbow and route.",
        "location": "Pump-room service corridor · planned fictional environment",
        "actions": [
          {
            "role": "bim",
            "text": "Shrink, fly to the pipe and show your teammate where the duct blocks it."
          },
          {
            "role": "technical",
            "text": "Read the supplied drawing, choose the pipe and elbow, and arrange the route on the screen."
          }
        ],
        "map": [
          "Find the duct",
          "Plan an elbow",
          "Place and test"
        ]
      },
      {
        "level": 2,
        "title": "Choose the right pipe",
        "issue": "A new route needs the correct pipe size and material, plus more than one fitting.",
        "location": "Service corridor · planned fictional environment",
        "actions": [
          {
            "role": "bim",
            "text": "Inspect the space above the ceiling and place the agreed pieces."
          },
          {
            "role": "technical",
            "text": "Compare the fictional specification with the choices, then design the route with the matching fittings."
          }
        ],
        "map": [
          "Check the space",
          "Choose pipe and fittings",
          "Install and test"
        ]
      },
      {
        "level": 3,
        "title": "Two obstacles",
        "issue": "A duct and cable tray both block the water pipe.",
        "location": "Overhead service crossing · planned fictional environment",
        "actions": [
          {
            "role": "bim",
            "text": "Find both obstacles and describe the space between them."
          },
          {
            "role": "technical",
            "text": "Use the wall screen to route the chosen pipe and fittings around both obstacles."
          }
        ],
        "map": [
          "Find both obstacles",
          "Design a clear route",
          "Build and test"
        ]
      },
      {
        "level": 4,
        "title": "Keep access clear",
        "issue": "One possible route blocks access to equipment.",
        "location": "Equipment access area · planned fictional environment",
        "actions": [
          {
            "role": "bim",
            "text": "Spot the access point above the ceiling and tell your teammate which route blocks it."
          },
          {
            "role": "technical",
            "text": "Revise the section-view route to keep the equipment accessible."
          }
        ],
        "map": [
          "Inspect access",
          "Revise the route",
          "Check clearance"
        ]
      },
      {
        "level": 5,
        "title": "Final connection",
        "issue": "A tight service area combines pipe selection, fittings, clearance and access.",
        "location": "Pump-room connection · planned fictional environment",
        "actions": [
          {
            "role": "bim",
            "text": "Inspect the tight space and install the agreed pieces in their positions."
          },
          {
            "role": "technical",
            "text": "Use the drawing and your teammate’s clues to complete the final route on the screen."
          }
        ],
        "map": [
          "Share final clues",
          "Complete the route",
          "Test the flow"
        ]
      }
    ],
    "mission": "The Hidden Clash"
  },
  {
    "slug": "construction-safety",
    "number": "02",
    "name": "Construction Engineer + Safety Engineer",
    "roles": [
      "construction",
      "safety"
    ],
    "hook": "Move the vital load. Keep the team safe.",
    "challenge": "A replacement component must reach the waterfall service area.",
    "story": "In a fictional construction zone, the Construction Engineer guides a lift while the Safety Engineer checks hazards, controls access and signals when it is clear. A change on site forces both to communicate and adapt.",
    "levels": [
      {
        "level": 1,
        "title": "Check the load",
        "issue": "A component arrives at a busy site.",
        "location": "Fictional training setting",
        "actions": [
          {
            "role": "construction",
            "text": "Identify the load and its destination."
          },
          {
            "role": "safety",
            "text": "Inspect the route and share hazards."
          }
        ],
        "map": [
          "Share clues",
          "Work together",
          "Check the result"
        ]
      },
      {
        "level": 2,
        "title": "Prepare the area",
        "issue": "An exit and an edge need attention.",
        "location": "Fictional training setting",
        "actions": [
          {
            "role": "construction",
            "text": "Choose a route for the load."
          },
          {
            "role": "safety",
            "text": "Select the supplied controls and recheck the area."
          }
        ],
        "map": [
          "Share clues",
          "Work together",
          "Check the result"
        ]
      },
      {
        "level": 3,
        "title": "Plan the lift",
        "issue": "The route passes a narrow work zone.",
        "location": "Fictional training setting",
        "actions": [
          {
            "role": "construction",
            "text": "Choose a lift route and share the plan."
          },
          {
            "role": "safety",
            "text": "Set the exclusion zone and give the all-clear."
          }
        ],
        "map": [
          "Share clues",
          "Work together",
          "Check the result"
        ]
      },
      {
        "level": 4,
        "title": "A change on site",
        "issue": "An obstruction enters the work zone.",
        "location": "Fictional training setting",
        "actions": [
          {
            "role": "construction",
            "text": "Pause the lift and wait for the signal."
          },
          {
            "role": "safety",
            "text": "Clear the obstruction using the supplied choices and signal your partner."
          }
        ],
        "map": [
          "Share clues",
          "Work together",
          "Check the result"
        ]
      },
      {
        "level": 5,
        "title": "Place and check",
        "issue": "The component must reach its marked position.",
        "location": "Fictional training setting",
        "actions": [
          {
            "role": "construction",
            "text": "Guide the load to its destination."
          },
          {
            "role": "safety",
            "text": "Check the final area and confirm the handover."
          }
        ],
        "map": [
          "Share clues",
          "Work together",
          "Check the result"
        ]
      }
    ],
    "mission": "The Safe Lift"
  },
  {
    "slug": "planning-quantity",
    "number": "03",
    "name": "Planning Engineer + Quantity Surveyor",
    "roles": [
      "planning",
      "quantity"
    ],
    "hook": "Plan the diversion. Deliver the right package.",
    "challenge": "Road changes threaten a waterfall equipment delivery.",
    "story": "On a fictional top-down site map, the Planning Engineer sets diversions while the Quantity Surveyor checks the package and budget. Together they test a delivery vehicle and respond to a change in the work phase.",
    "levels": [
      {
        "level": 1,
        "title": "Read the brief",
        "issue": "The normal road is closed.",
        "location": "Fictional training setting",
        "actions": [
          {
            "role": "planning",
            "text": "Inspect the map and identify the destination."
          },
          {
            "role": "quantity",
            "text": "Check the supplied equipment list."
          }
        ],
        "map": [
          "Share clues",
          "Work together",
          "Check the result"
        ]
      },
      {
        "level": 2,
        "title": "Build a diversion",
        "issue": "The vehicle needs a clear route.",
        "location": "Fictional training setting",
        "actions": [
          {
            "role": "planning",
            "text": "Place barriers and route arrows."
          },
          {
            "role": "quantity",
            "text": "Share delivery constraints and missing items."
          }
        ],
        "map": [
          "Share clues",
          "Work together",
          "Check the result"
        ]
      },
      {
        "level": 3,
        "title": "Choose the package",
        "issue": "Quotes vary in cost and contents.",
        "location": "Fictional training setting",
        "actions": [
          {
            "role": "planning",
            "text": "Check the delivery order against the site phase."
          },
          {
            "role": "quantity",
            "text": "Select a complete fictional package within the training budget."
          }
        ],
        "map": [
          "Share clues",
          "Work together",
          "Check the result"
        ]
      },
      {
        "level": 4,
        "title": "Respond to change",
        "issue": "A new work area blocks the route.",
        "location": "Fictional training setting",
        "actions": [
          {
            "role": "planning",
            "text": "Revise the diversion and keep emergency access clear."
          },
          {
            "role": "quantity",
            "text": "Check that the package still meets the supplied limits."
          }
        ],
        "map": [
          "Share clues",
          "Work together",
          "Check the result"
        ]
      },
      {
        "level": 5,
        "title": "Test the delivery",
        "issue": "The truck must reach its destination.",
        "location": "Fictional training setting",
        "actions": [
          {
            "role": "planning",
            "text": "Run the simulated delivery and revise the route if needed."
          },
          {
            "role": "quantity",
            "text": "Confirm the delivered items match the agreed package."
          }
        ],
        "map": [
          "Share clues",
          "Work together",
          "Check the result"
        ]
      }
    ],
    "mission": "The Delivery Route"
  },
  {
    "slug": "mep-qaqc",
    "number": "04",
    "name": "M&E Engineer + QAQC Engineer",
    "roles": [
      "mep",
      "qaqc"
    ],
    "hook": "Trace the fault. Inspect the fix. Test the flow.",
    "challenge": "A fictional water circuit fails its pre-start check.",
    "story": "In an imagined training plant, the M&E Engineer follows a system diagram while the QAQC Engineer uses an inspection checklist. Each has different evidence; they compare notes, choose a repair and test the circuit together.",
    "levels": [
      {
        "level": 1,
        "title": "Study the warning",
        "issue": "The training circuit reports a fault.",
        "location": "Fictional training setting",
        "actions": [
          {
            "role": "mep",
            "text": "Trace the circuit using the supplied diagram."
          },
          {
            "role": "qaqc",
            "text": "Review the inspection checklist."
          }
        ],
        "map": [
          "Share clues",
          "Work together",
          "Check the result"
        ]
      },
      {
        "level": 2,
        "title": "Find the defects",
        "issue": "A connection and a tag do not match the records.",
        "location": "Fictional training setting",
        "actions": [
          {
            "role": "mep",
            "text": "Find the suspect connection and share its location."
          },
          {
            "role": "qaqc",
            "text": "Inspect the joint and tag against the checklist."
          }
        ],
        "map": [
          "Share clues",
          "Work together",
          "Check the result"
        ]
      },
      {
        "level": 3,
        "title": "Choose a repair",
        "issue": "The team must agree on a fix.",
        "location": "Fictional training setting",
        "actions": [
          {
            "role": "mep",
            "text": "Compare the diagram with the repair choices."
          },
          {
            "role": "qaqc",
            "text": "Check the choices against the inspection notes."
          }
        ],
        "map": [
          "Share clues",
          "Work together",
          "Check the result"
        ]
      },
      {
        "level": 4,
        "title": "Repair and reinspect",
        "issue": "The correction needs an independent check.",
        "location": "Fictional training setting",
        "actions": [
          {
            "role": "mep",
            "text": "Apply the agreed in-game repair."
          },
          {
            "role": "qaqc",
            "text": "Reinspect and tell your partner what remains."
          }
        ],
        "map": [
          "Share clues",
          "Work together",
          "Check the result"
        ]
      },
      {
        "level": 5,
        "title": "Run the test",
        "issue": "A simulated flow test checks the result.",
        "location": "Fictional training setting",
        "actions": [
          {
            "role": "mep",
            "text": "Start the test and watch the circuit."
          },
          {
            "role": "qaqc",
            "text": "Check the result and confirm the handover."
          }
        ],
        "map": [
          "Share clues",
          "Work together",
          "Check the result"
        ]
      }
    ],
    "mission": "The Water Test"
  },
  {
    "slug": "sustainability-architect",
    "number": "05",
    "name": "Sustainability Engineer + Architect",
    "roles": [
      "sustainability",
      "architecture"
    ],
    "hook": "Protect the garden. Find a better route for water.",
    "challenge": "A proposed water route conflicts with access and resource targets.",
    "story": "In a fictional Jewel-inspired garden, the Sustainability Engineer compares water, energy and material options while the Architect protects public and maintenance access. Together they balance both sets of clues and test the design.",
    "levels": [
      {
        "level": 1,
        "title": "Read the challenge",
        "issue": "The proposed route affects a garden path.",
        "location": "Fictional training setting",
        "actions": [
          {
            "role": "sustainability",
            "text": "Check the supplied water and energy targets."
          },
          {
            "role": "architecture",
            "text": "Review the layout and its access points."
          }
        ],
        "map": [
          "Share clues",
          "Work together",
          "Check the result"
        ]
      },
      {
        "level": 2,
        "title": "Explore options",
        "issue": "Several routes cross different spaces.",
        "location": "Fictional training setting",
        "actions": [
          {
            "role": "sustainability",
            "text": "Compare the water and landscape effects on the option cards."
          },
          {
            "role": "architecture",
            "text": "Compare visitor routes and maintenance access."
          }
        ],
        "map": [
          "Share clues",
          "Work together",
          "Check the result"
        ]
      },
      {
        "level": 3,
        "title": "Choose materials",
        "issue": "The service needs a screen and accessible cover.",
        "location": "Fictional training setting",
        "actions": [
          {
            "role": "sustainability",
            "text": "Compare the supplied material and waste information."
          },
          {
            "role": "architecture",
            "text": "Choose a layout with room for people and maintenance."
          }
        ],
        "map": [
          "Share clues",
          "Work together",
          "Check the result"
        ]
      },
      {
        "level": 4,
        "title": "Balance the plan",
        "issue": "The lowest-energy choice misses another target.",
        "location": "Fictional training setting",
        "actions": [
          {
            "role": "sustainability",
            "text": "Share which options meet the resource targets."
          },
          {
            "role": "architecture",
            "text": "Explain which layouts preserve access."
          }
        ],
        "map": [
          "Share clues",
          "Work together",
          "Check the result"
        ]
      },
      {
        "level": 5,
        "title": "Test the design",
        "issue": "The route must pass a simulated review.",
        "location": "Fictional training setting",
        "actions": [
          {
            "role": "sustainability",
            "text": "Review the simulated flow and resource results."
          },
          {
            "role": "architecture",
            "text": "Run the visitor and access check and agree the handover."
          }
        ],
        "map": [
          "Share clues",
          "Work together",
          "Check the result"
        ]
      }
    ],
    "mission": "The Garden Route"
  }
];
