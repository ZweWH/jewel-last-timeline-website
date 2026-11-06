window.ROLES = [
  {
    slug: 'bim', number: '01', name: 'BIM Coordinator', image: 'assets/role-bim.webp',
    hook: 'Shrink down. Find the clash.',
    challenge: 'A waterfall service pipe crosses an air duct and blocks access.',
    story: 'Travel to a fictional service corridor and use a shrink jetpack to see the problem up close. Find a route that leaves enough room for maintenance.',
    steps: ['Follow the pipe and fly up to inspect the clash.', 'Choose a pipe repair from the interaction menu.', 'Recheck the duct clearance and maintenance access.'],
    keyResult: 'A checked route earns the BIM key to bring back to the Director.',
    collaboration: 'Share the new route with the M&E and Technical teams.'
  },
  {
    slug: 'construction', number: '02', name: 'Construction Manager', image: 'assets/role-construction.png',
    hook: 'Plan the lift. Keep everyone safe.',
    challenge: 'Waterfall equipment needs to reach its marked position safely and on time.',
    story: 'Lead a series of fictional lifting activities. Check the plan, protect the work area and guide the equipment into place before time runs out.',
    steps: ['Match each load to its lifting plan and destination.', 'Clear the lifting zone and check the load path.', 'Guide the lift, stop for hazards and check its final position.'],
    keyResult: 'Safe, checked lifts earn the Construction Manager key for the Director.',
    collaboration: 'Coordinate safe access with Safety and delivery timing with Planning.'
  },
  {
    slug: 'technical', number: '03', name: 'Technical Engineer', image: 'assets/role-technical.webp',
    hook: 'Make the details match.',
    challenge: 'The waterfall equipment information does not match across the drawing and records.',
    story: 'Review the fictional design information before the team installs the equipment. Find the differences and choose the correct details.',
    steps: ['Read the supplied drawing and equipment details.', 'Find and correct mismatched records.', 'Recheck the updated information before release.'],
    keyResult: 'A verified set of records earns the Technical key for the Director.',
    collaboration: 'Share the checked details with BIM and M&E.'
  },
  {
    slug: 'planning', number: '04', name: 'Planning Engineer', image: 'assets/role-planning.webp',
    hook: 'Make a route. Keep the work moving.',
    challenge: 'A changing construction site is blocking a waterfall equipment delivery.',
    story: 'Work on a top-down 2D site map. Plan a road diversion for the current construction phase while keeping important access clear.',
    steps: ['Place barriers and route arrows on the map.', 'Keep emergency and work access open.', 'Test the delivery vehicle and adjust the route if needed.'],
    keyResult: 'A tested delivery route earns the Planning key for the Director.',
    collaboration: 'Tell the Construction Manager when equipment can reach the lifting area.'
  },
  {
    slug: 'qaqc', number: '05', name: 'QAQC Engineer', image: 'assets/role-qaqc.webp',
    hook: 'Find it. Fix it. Check again.',
    challenge: 'The fictional waterfall services have defects that must be fixed before handover.',
    story: 'Inspect the installation carefully. A leaking connection, an incomplete seal or a wrong tag could delay the return of the flow.',
    steps: ['Inspect the service installation for defects.', 'Choose a repair for each problem.', 'Reinspect the repairs and approve the handover.'],
    keyResult: 'A passed reinspection earns the QAQC key for the Director.',
    collaboration: 'Share the inspection results with M&E and Technical.'
  },
  {
    slug: 'quantity', number: '06', name: 'Quantity Surveyor', image: 'assets/role-quantity.webp',
    hook: 'Count what the job needs.',
    challenge: 'The team needs a complete waterfall service package within a training budget.',
    story: 'Use a fictional drawing and supplied prices to work out what the project needs. A low price is not useful if important parts are missing.',
    steps: ['Measure the pipes, fittings and equipment on the drawing.', 'Calculate the cost using the supplied rates.', 'Compare quotes and select a complete package.'],
    keyResult: 'A checked package and cost earn the Quantity Surveyor key for the Director.',
    collaboration: 'Confirm the required items with Technical and M&E.'
  },
  {
    slug: 'mep', number: '07', name: 'M&E Coordinator', image: 'assets/role-mep.png',
    hook: 'Connect the systems.',
    challenge: 'The pump and its power and controls need to work together.',
    story: 'Trace the fictional mechanical and electrical connections for a waterfall service. Find the missing connection and check the system before a test.',
    steps: ['Trace the pump, power and control connections.', 'Match and connect the supplied components.', 'Run a safe test and check the response.'],
    keyResult: 'A checked system test earns the M&E key for the Director.',
    collaboration: 'Use BIM route information and QAQC inspection results to guide the work.'
  },
  {
    slug: 'sustainability', number: '08', name: 'Sustainability Engineer', image: 'assets/role-sustainability.png',
    hook: 'Restore the flow wisely.',
    challenge: 'The waterfall needs a practical plan for using water and energy.',
    story: 'Compare fictional operating choices and their effects. Choose a balanced plan that supports the waterfall while reducing waste.',
    steps: ['Review the supplied water and energy information.', 'Compare the effects of different operating choices.', 'Choose a balanced plan and explain your decision.'],
    keyResult: 'A checked operating plan earns the Sustainability key for the Director.',
    collaboration: 'Share the chosen plan with M&E for the system test.'
  },
  {
    slug: 'architecture', number: '09', name: 'Archi Coordinator', image: 'assets/role-architecture.png',
    hook: 'Make space for the people and the services.',
    challenge: 'A service access panel conflicts with a finished public space.',
    story: 'Find a way for the fictional waterfall services to be maintained while respecting the design and keeping the public route clear.',
    steps: ['Review the finished space and service access needs.', 'Choose a suitable panel and service route.', 'Check that maintenance and public access remain clear.'],
    keyResult: 'A checked access solution earns the Archi key for the Director.',
    collaboration: 'Coordinate the proposed access with BIM and Safety.'
  },
  {
    slug: 'safety', number: '10', name: 'Safety Engineer', image: 'assets/role-safety.webp',
    hook: 'Make the route safe.',
    challenge: 'Hazards are blocking the team from reaching the waterfall work area.',
    story: 'Inspect a fictional construction route and make it safe for the team. Check every control before reopening access.',
    steps: ['Find hazards at the edge, exit and lifting zone.', 'Choose and place the right safety controls.', 'Recheck the controls and walk the protected route.'],
    keyResult: 'A verified safe route earns the Safety key for the Director.',
    collaboration: 'Coordinate the lifting zone with the Construction Manager and safe access with Archi.'
  }
];

