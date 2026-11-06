window.ROLES = [
  {
    slug: 'bim', number: '01', name: 'BIM Coordinator', image: 'assets/role-bim.webp',
    hook: 'Shrink down. Find the clash.',
    challenge: 'A waterfall service pipe crosses an air duct and blocks access.',
    story: 'Travel to a fictional service corridor and use a shrink jetpack to see the problem up close. Find a route that leaves enough room for maintenance.',
    steps: ['Follow the pipe and fly up to inspect the clash.', 'Choose a pipe repair from the interaction menu.', 'Recheck the duct clearance and maintenance access.'],
    keyResult: 'A checked route earns the BIM key to bring back to the Director.',
    collaboration: 'Share the new route with the M&E and Technical teams.',
    levels: [
      { stars: 1, title: 'Pipe meets duct', issue: 'A waterfall pipe crosses an air duct.', action: 'Use the shrink jetpack to find the clash and choose a clear pipe route from the interaction menu.' },
      { stars: 2, title: 'Blocked by a beam', issue: 'A second pipe route passes through a support beam.', action: 'Fly along the overhead services, find the clash and select a route around the beam.' },
      { stars: 3, title: 'No room to maintain', issue: 'A pipe avoids the duct but blocks access to a valve.', action: 'Compare the repair options and choose one that clears the duct and leaves the valve accessible.' }
    ]
  },
  {
    slug: 'construction', number: '02', name: 'Construction Manager', image: 'assets/role-construction.png',
    hook: 'Plan the lift. Keep everyone safe.',
    challenge: 'Waterfall equipment needs to reach its marked position safely and on time.',
    story: 'Lead a series of fictional lifting activities. Check the plan, protect the work area and guide the equipment into place before time runs out.',
    steps: ['Match each load to its lifting plan and destination.', 'Clear the lifting zone and check the load path.', 'Guide the lift, stop for hazards and check its final position.'],
    keyResult: 'Safe, checked lifts earn the Construction Manager key for the Director.',
    collaboration: 'Coordinate safe access with Safety and delivery timing with Planning.',
    levels: [
      { stars: 1, title: 'Move a service part', issue: 'A service component is waiting at the delivery area.', action: 'Check the lifting plan, clear the zone and guide it to its marked position.' },
      { stars: 2, title: 'Lift the pump', issue: 'A larger pump must pass a blocked part of the work area.', action: 'Choose a clear load path, set the barriers and guide the pump safely into place.' },
      { stars: 3, title: 'Lifts against the clock', issue: 'Several waterfall service parts must reach different positions before time runs out.', action: 'Plan the order and complete the lifts in time, stopping whenever the lifting zone becomes unsafe.' }
    ]
  },
  {
    slug: 'technical', number: '03', name: 'Technical Engineer', image: 'assets/role-technical.webp',
    hook: 'Make the details match.',
    challenge: 'The waterfall equipment information does not match across the drawing and records.',
    story: 'Review the fictional design information before the team installs the equipment. Find the differences and choose the correct details.',
    steps: ['Read the supplied drawing and equipment details.', 'Find and correct mismatched records.', 'Recheck the updated information before release.'],
    keyResult: 'A verified set of records earns the Technical key for the Director.',
    collaboration: 'Share the checked details with BIM and M&E.',
    levels: [
      { stars: 1, title: 'Wrong equipment tag', issue: 'A pump tag does not match the supplied drawing.', action: 'Compare the two records and select the correct tag.' },
      { stars: 2, title: 'Pipe size mismatch', issue: 'A pipe size differs between the drawing and equipment schedule.', action: 'Use the supplied reference to find and correct the wrong size.' },
      { stars: 3, title: 'Conflicting details', issue: 'An older drawing and an equipment sheet give conflicting pump connection details.', action: 'Check the drawing revision and supplied specifications, then choose a matching set of details.' }
    ]
  },
  {
    slug: 'planning', number: '04', name: 'Planning Engineer', image: 'assets/role-planning.webp',
    hook: 'Make a route. Keep the work moving.',
    challenge: 'A changing construction site is blocking a waterfall equipment delivery.',
    story: 'Work on a top-down 2D site map. Plan a road diversion for the current construction phase while keeping important access clear.',
    steps: ['Place barriers and route arrows on the map.', 'Keep emergency and work access open.', 'Test the delivery vehicle and adjust the route if needed.'],
    keyResult: 'A tested delivery route earns the Planning key for the Director.',
    collaboration: 'Tell the Construction Manager when equipment can reach the lifting area.',
    levels: [
      { stars: 1, title: 'One closed road', issue: 'A work area blocks the direct route for a waterfall part.', action: 'On the top-down 2D map, place a barrier and arrows, then test the delivery vehicle.' },
      { stars: 2, title: 'Keep access open', issue: 'The next construction phase closes another road near an emergency route.', action: 'Move the barriers and arrows to create a delivery route that keeps emergency access clear, then test it.' },
      { stars: 3, title: 'A changing site', issue: 'A new work zone blocks the planned route just before the pump delivery.', action: 'Revise the diversion, protect the emergency route and test the vehicle through the updated layout.' }
    ]
  },
  {
    slug: 'qaqc', number: '05', name: 'QAQC Engineer', image: 'assets/role-qaqc.webp',
    hook: 'Find it. Fix it. Check again.',
    challenge: 'The fictional waterfall services have defects that must be fixed before handover.',
    story: 'Inspect the installation carefully. A leaking connection, an incomplete seal or a wrong tag could delay the return of the flow.',
    steps: ['Inspect the service installation for defects.', 'Choose a repair for each problem.', 'Reinspect the repairs and approve the handover.'],
    keyResult: 'A passed reinspection earns the QAQC key for the Director.',
    collaboration: 'Share the inspection results with M&E and Technical.',
    levels: [
      { stars: 1, title: 'Missing seal', issue: 'A service opening has an incomplete seal.', action: 'Find it, select the supplied repair and reinspect the seal.' },
      { stars: 2, title: 'Leaking connection', issue: 'A pipe joint leaks during a fictional inspection.', action: 'Locate the leak, choose the repair and check the joint again.' },
      { stars: 3, title: 'Wrong component', issue: 'An installed fitting does not match the checked drawing.', action: 'Compare the fitting and records, select the correct replacement and reinspect the work.' }
    ]
  },
  {
    slug: 'quantity', number: '06', name: 'Quantity Surveyor', image: 'assets/role-quantity.webp',
    hook: 'Count what the job needs.',
    challenge: 'The team needs a complete waterfall service package within a training budget.',
    story: 'Use a fictional drawing and supplied prices to work out what the project needs. A low price is not useful if important parts are missing.',
    steps: ['Measure the pipes, fittings and equipment on the drawing.', 'Calculate the cost using the supplied rates.', 'Compare quotes and select a complete package.'],
    keyResult: 'A checked package and cost earn the Quantity Surveyor key for the Director.',
    collaboration: 'Confirm the required items with Technical and M&E.',
    levels: [
      { stars: 1, title: 'Count the fittings', issue: 'The service package list is missing fittings.', action: 'Count the fittings shown on the supplied drawing and complete the list.' },
      { stars: 2, title: 'Measure and price', issue: 'A pipe run has no quantity or cost.', action: 'Measure its length on the drawing and calculate its cost using the supplied rate.' },
      { stars: 3, title: 'Choose a complete quote', issue: 'One cheap quote leaves out parts needed for the waterfall service.', action: 'Compare quantities and prices, then select a complete package within the training budget.' }
    ]
  },
  {
    slug: 'mep', number: '07', name: 'M&E Coordinator', image: 'assets/role-mep.png',
    hook: 'Connect the systems.',
    challenge: 'The pump and its power and controls need to work together.',
    story: 'Trace the fictional mechanical and electrical connections for a waterfall service. Find the missing connection and check the system before a test.',
    steps: ['Trace the pump, power and control connections.', 'Match and connect the supplied components.', 'Run a safe test and check the response.'],
    keyResult: 'A checked system test earns the M&E key for the Director.',
    collaboration: 'Use BIM route information and QAQC inspection results to guide the work.',
    levels: [
      { stars: 1, title: 'Missing valve', issue: 'A valve is missing from the fictional water circuit.', action: 'Trace the marked pipe and choose the matching valve for the gap.' },
      { stars: 2, title: 'Power connection', issue: 'The pump is not linked to its supplied power connection.', action: 'Follow the diagram and match the pump to the correct power connection.' },
      { stars: 3, title: 'Control mismatch', issue: 'The pump has power but does not respond to the test control.', action: 'Compare the fictional control links with the diagram, correct the mismatch and run the test again.' }
    ]
  },
  {
    slug: 'sustainability', number: '08', name: 'Sustainability Engineer', image: 'assets/role-sustainability.png',
    hook: 'Restore the flow wisely.',
    challenge: 'The waterfall needs a practical plan for using water and energy.',
    story: 'Compare fictional operating choices and their effects. Choose a balanced plan that supports the waterfall while reducing waste.',
    steps: ['Review the supplied water and energy information.', 'Compare the effects of different operating choices.', 'Choose a balanced plan and explain your decision.'],
    keyResult: 'A checked operating plan earns the Sustainability key for the Director.',
    collaboration: 'Share the chosen plan with M&E for the system test.',
    levels: [
      { stars: 1, title: 'Water being wasted', issue: 'A fictional water-use report shows an unnecessary loss.', action: 'Compare the supplied choices and select a way to reduce the waste.' },
      { stars: 2, title: 'Energy choice', issue: 'Two pump settings use different amounts of energy.', action: 'Compare the supplied energy and flow figures and choose a setting that meets the target.' },
      { stars: 3, title: 'Balance the plan', issue: 'The lowest-energy choice does not meet the required water flow.', action: 'Compare the supplied water and energy trade-offs and select a balanced operating plan.' }
    ]
  },
  {
    slug: 'architecture', number: '09', name: 'Archi Coordinator', image: 'assets/role-architecture.png',
    hook: 'Make space for the people and the services.',
    challenge: 'A service access panel conflicts with a finished public space.',
    story: 'Find a way for the fictional waterfall services to be maintained while respecting the design and keeping the public route clear.',
    steps: ['Review the finished space and service access needs.', 'Choose a suitable panel and service route.', 'Check that maintenance and public access remain clear.'],
    keyResult: 'A checked access solution earns the Archi key for the Director.',
    collaboration: 'Coordinate the proposed access with BIM and Safety.',
    levels: [
      { stars: 1, title: 'Hidden access panel', issue: 'A finish covers a panel needed to reach a service valve.', action: 'Choose a panel position that allows the valve to be reached.' },
      { stars: 2, title: 'Pipe meets the finish', issue: 'A proposed pipe route crosses a finished wall feature.', action: 'Compare the options and select a route that fits the design and the services.' },
      { stars: 3, title: 'Space for everyone', issue: 'A maintenance panel opens into a busy public route.', action: 'Choose a revised panel and route that keep both maintenance access and the walkway clear.' }
    ]
  },
  {
    slug: 'safety', number: '10', name: 'Safety Engineer', image: 'assets/role-safety.webp',
    hook: 'Make the route safe.',
    challenge: 'Hazards are blocking the team from reaching the waterfall work area.',
    story: 'Inspect a fictional construction route and make it safe for the team. Check every control before reopening access.',
    steps: ['Find hazards at the edge, exit and lifting zone.', 'Choose and place the right safety controls.', 'Recheck the controls and walk the protected route.'],
    keyResult: 'A verified safe route earns the Safety key for the Director.',
    collaboration: 'Coordinate the lifting zone with the Construction Manager and safe access with Archi.',
    levels: [
      { stars: 1, title: 'Blocked exit', issue: 'Materials block the exit on the way to the waterfall work area.', action: 'Identify the obstruction, choose a control and recheck the exit.' },
      { stars: 2, title: 'Unprotected edge', issue: 'A work route passes an edge without protection.', action: 'Select and place the supplied edge protection, then inspect it.' },
      { stars: 3, title: 'Lift crosses the route', issue: 'A planned lifting zone overlaps the team’s access route.', action: 'Set an exclusion zone and a safe diversion, then check that the team and load remain separated.' }
    ]
  }
];

