/* Role identities and artwork; legacy solo level ideas are retained for reference only. Shared missions are defined in groups.js. */
window.ROLES = [
  {
    slug: 'bim', number: '01', name: 'BIM Engineer', image: 'assets/role-bim-engineer.png',
    hook: 'Shrink down. Find the clash.',
    challenge: 'A waterfall service pipe crosses an air duct and blocks access.',
    story: 'Travel to a fictional service corridor and use a shrink jetpack to see the problem up close. Find a route that leaves enough room for maintenance.',
    collaboration: 'Share the new route with the M&E and Technical teams.',
    levels: [
      { level: 1, title: 'Pipe meets duct', issue: 'A waterfall pipe crosses an air duct.', action: 'Use the shrink jetpack to find the clash and choose a clear pipe route from the interaction menu.', location: 'Imagined basement corridor', map: ['Entry', 'Pipe clash', 'Clear route'] },
      { level: 2, title: 'Blocked by a beam', issue: 'A second pipe route passes through a support beam.', action: 'Fly along the overhead services, find the clash and select a route around the beam.', location: 'Imagined service bay', map: ['Lift point', 'Beam clash', 'New route'] },
      { level: 3, title: 'Cable meets pipe', issue: 'A cable tray and water pipe need the same space.', action: 'Inspect the overlap and select a separate path for the tray.', location: 'Imagined overhead corridor', map: ['Access', 'Cable clash', 'Clear tray'] },
      { level: 4, title: 'Tight turn', issue: 'A proposed pipe bend does not fit between two ducts.', action: 'Compare supplied routes and select a bend with enough clearance.', location: 'Imagined service junction', map: ['Junction', 'Tight bend', 'Clear bend'] },
      { level: 5, title: 'No room to maintain', issue: 'A pipe avoids the duct but blocks access to a valve.', action: 'Compare the repair options and choose one that clears the duct and leaves the valve accessible.', location: 'Imagined valve bay', map: ['Entry', 'Blocked valve', 'Clear access'] }
    ]
  },
  {
    slug: 'construction', number: '02', name: 'Construction Engineer', image: 'assets/role-construction.png',
    hook: 'Plan the lift. Keep everyone safe.',
    challenge: 'Waterfall equipment needs to reach its marked position safely and on time.',
    story: 'Lead a series of fictional lifting activities. Check the plan, protect the work area and guide the equipment into place before time runs out.',
    collaboration: 'Coordinate safe access with Safety and delivery timing with Planning.',
    levels: [
      { level: 1, title: 'Move a service part', issue: 'A service component is waiting at the delivery area.', action: 'Check the lifting plan, clear the zone and guide it to its marked position.', location: 'Imagined delivery yard', map: ['Load', 'Lift zone', 'Marked pad'] },
      { level: 2, title: 'Lift the pump', issue: 'A larger pump must pass a blocked part of the work area.', action: 'Choose a clear load path, set the barriers and guide the pump safely into place.', location: 'Imagined pump yard', map: ['Pump', 'Blocked path', 'Pump pad'] },
      { level: 3, title: 'Place a pipe section', issue: 'A long service section must pass a narrow opening.', action: 'Check its lift plan and guide it through a clear route to the marked supports.', location: 'Imagined service entrance', map: ['Pipe', 'Narrow gap', 'Supports'] },
      { level: 4, title: 'Stop an unsafe lift', issue: 'A person enters the marked lifting zone.', action: 'Stop the lift, clear and protect the zone, then continue to the marked position.', location: 'Imagined lifting bay', map: ['Load', 'Unsafe zone', 'Safe pad'] },
      { level: 5, title: 'Lifts against the clock', issue: 'Several waterfall service parts must reach different positions before time runs out.', action: 'Plan the order and complete the lifts in time, stopping whenever the lifting zone becomes unsafe.', location: 'Imagined equipment yard', map: ['Loads', 'Timed lifts', 'Destinations'] }
    ]
  },
  {
    slug: 'technical', number: '03', name: 'Technical Engineer', image: 'assets/role-technical.webp',
    hook: 'Make the details match.',
    challenge: 'The waterfall equipment information does not match across the drawing and records.',
    story: 'Review the fictional design information before the team installs the equipment. Find the differences and choose the correct details.',
    collaboration: 'Share the checked details with BIM and M&E.',
    levels: [
      { level: 1, title: 'Wrong equipment tag', issue: 'A pump tag does not match the supplied drawing.', action: 'Compare the two records and select the correct tag.', location: 'Imagined drawing desk', map: ['Pump tag', 'Drawing', 'Correct tag'] },
      { level: 2, title: 'Pipe size mismatch', issue: 'A pipe size differs between the drawing and equipment schedule.', action: 'Use the supplied reference to find and correct the wrong size.', location: 'Imagined records room', map: ['Drawing', 'Wrong size', 'Correct size'] },
      { level: 3, title: 'Wrong pump specification', issue: 'Two listed pumps have different design flow rates.', action: 'Compare the supplied requirement and select the matching pump.', location: 'Imagined equipment review', map: ['Requirement', 'Pump options', 'Match'] },
      { level: 4, title: 'Missing drawing note', issue: 'A service connection is missing a required note.', action: 'Check the reference sheet and add the correct supplied note to the drawing.', location: 'Imagined review desk', map: ['Reference', 'Missing note', 'Update'] },
      { level: 5, title: 'Conflicting details', issue: 'An older drawing and an equipment sheet give conflicting pump connection details.', action: 'Check the drawing revision and supplied specifications, then choose a matching set of details.', location: 'Imagined review room', map: ['Old drawing', 'Conflict', 'Checked set'] }
    ]
  },
  {
    slug: 'planning', number: '04', name: 'Planning Engineer', image: 'assets/role-planning.webp',
    hook: 'Make a route. Keep the work moving.',
    challenge: 'A changing construction site is blocking a waterfall equipment delivery.',
    story: 'Work on a top-down 2D site map. Plan a road diversion for the current construction phase while keeping important access clear.',
    collaboration: 'Tell the Construction Engineer when equipment can reach the lifting area.',
    levels: [
      { level: 1, title: 'One closed road', issue: 'A work area blocks the direct route for a waterfall part.', action: 'On the top-down 2D map, place a barrier and arrows, then test the delivery vehicle.', location: 'Imagined site entrance', map: ['Entry', 'Roadworks', 'Delivery'] },
      { level: 2, title: 'Keep access open', issue: 'The next construction phase closes another road near an emergency route.', action: 'Move the barriers and arrows to create a delivery route that keeps emergency access clear, then test it.', location: 'Imagined site junction', map: ['Entry', 'Closed road', 'Open exit'] },
      { level: 3, title: 'Two deliveries', issue: 'A narrow site route cannot fit both deliveries at once.', action: 'Set arrows and barriers, then test the vehicles in a safe order.', location: 'Imagined narrow road', map: ['Two trucks', 'Narrow road', 'Work area'] },
      { level: 4, title: 'Protect the crossing', issue: 'A proposed delivery route crosses a pedestrian path.', action: 'Choose barriers and a diversion that separate pedestrians and the test vehicle.', location: 'Imagined site crossing', map: ['Truck', 'Crossing', 'Safe route'] },
      { level: 5, title: 'A changing site', issue: 'A new work zone blocks the planned route just before the pump delivery.', action: 'Revise the diversion, protect the emergency route and test the vehicle through the updated layout.', location: 'Imagined pump delivery', map: ['Pump truck', 'New works', 'Pump yard'] }
    ]
  },
  {
    slug: 'qaqc', number: '05', name: 'QAQC Engineer', image: 'assets/role-qaqc.webp',
    hook: 'Find it. Fix it. Check again.',
    challenge: 'The fictional waterfall services have defects that must be fixed before handover.',
    story: 'Inspect the installation carefully. A leaking connection, an incomplete seal or a wrong tag could delay the return of the flow.',
    collaboration: 'Share the inspection results with M&E and Technical.',
    levels: [
      { level: 1, title: 'Missing seal', issue: 'A service opening has an incomplete seal.', action: 'Find it, select the supplied repair and reinspect the seal.', location: 'Imagined service opening', map: ['Entry', 'Open seal', 'Reinspect'] },
      { level: 2, title: 'Leaking connection', issue: 'A pipe joint leaks during a fictional inspection.', action: 'Locate the leak, choose the repair and check the joint again.', location: 'Imagined pipe bay', map: ['Entry', 'Leaking joint', 'Recheck'] },
      { level: 3, title: 'Wrong equipment tag', issue: 'An installed pump has the wrong identification tag.', action: 'Compare it with the supplied record, select the correct tag and reinspect.', location: 'Imagined pump bay', map: ['Pump', 'Wrong tag', 'Checked tag'] },
      { level: 4, title: 'Loose support', issue: 'A pipe support is missing a fastening.', action: 'Find the defect, choose the supplied fix and check the support again.', location: 'Imagined overhead bay', map: ['Pipe', 'Loose support', 'Reinspect'] },
      { level: 5, title: 'Wrong component', issue: 'An installed fitting does not match the checked drawing.', action: 'Compare the fitting and records, select the correct replacement and reinspect the work.', location: 'Imagined fitting station', map: ['Drawing', 'Wrong fitting', 'Reinspect'] }
    ]
  },
  {
    slug: 'quantity', number: '06', name: 'Quantity Surveyor', image: 'assets/role-quantity.webp',
    hook: 'Count what the job needs.',
    challenge: 'The team needs a complete waterfall service package within a training budget.',
    story: 'Use a fictional drawing and supplied prices to work out what the project needs. A low price is not useful if important parts are missing.',
    collaboration: 'Confirm the required items with Technical and M&E.',
    levels: [
      { level: 1, title: 'Count the fittings', issue: 'The service package list is missing fittings.', action: 'Count the fittings shown on the supplied drawing and complete the list.', location: 'Imagined drawing desk', map: ['Drawing', 'Fittings', 'Complete list'] },
      { level: 2, title: 'Measure and price', issue: 'A pipe run has no quantity or cost.', action: 'Measure its length on the drawing and calculate its cost using the supplied rate.', location: 'Imagined measuring desk', map: ['Pipe plan', 'Measure', 'Price'] },
      { level: 3, title: 'Count equipment', issue: 'The package schedule does not include all the pumps shown.', action: 'Compare the drawing with the schedule and enter the missing quantity.', location: 'Imagined equipment review', map: ['Drawing', 'Missing pump', 'Updated list'] },
      { level: 4, title: 'Check a variation', issue: 'A changed pipe route adds a supplied length and fittings.', action: 'Update the quantities and use the given rates to calculate the change.', location: 'Imagined cost desk', map: ['Change', 'New parts', 'Revised cost'] },
      { level: 5, title: 'Choose a complete quote', issue: 'One cheap quote leaves out parts needed for the waterfall service.', action: 'Compare quantities and prices, then select a complete package within the training budget.', location: 'Imagined tender desk', map: ['Quotes', 'Missing parts', 'Complete bid'] }
    ]
  },
  {
    slug: 'mep', number: '07', name: 'M&E Engineer', image: 'assets/role-mep.png',
    hook: 'Connect the systems.',
    challenge: 'The pump and its power and controls need to work together.',
    story: 'Trace the fictional mechanical and electrical connections for a waterfall service. Find the missing connection and check the system before a test.',
    collaboration: 'Use BIM route information and QAQC inspection results to guide the work.',
    levels: [
      { level: 1, title: 'Missing valve', issue: 'A valve is missing from the fictional water circuit.', action: 'Trace the marked pipe and choose the matching valve for the gap.', location: 'Imagined service bay', map: ['Pipe', 'Valve gap', 'Complete line'] },
      { level: 2, title: 'Power connection', issue: 'The pump is not linked to its supplied power connection.', action: 'Follow the diagram and match the pump to the correct power connection.', location: 'Imagined equipment bay', map: ['Panel', 'Connection', 'Pump'] },
      { level: 3, title: 'Wrong flow direction', issue: 'A fictional valve is shown facing against the indicated flow.', action: 'Follow the arrows on the supplied diagram and select the matching orientation.', location: 'Imagined pipe junction', map: ['Flow arrow', 'Valve', 'Clear flow'] },
      { level: 4, title: 'Missing sensor link', issue: 'A water-level sensor is not linked to the control diagram.', action: 'Trace the supplied diagram and match the sensor to its marked control input.', location: 'Imagined control bay', map: ['Sensor', 'Missing link', 'Controller'] },
      { level: 5, title: 'Control mismatch', issue: 'The pump has power but does not respond to the test control.', action: 'Compare the fictional control links with the diagram, correct the mismatch and run the test again.', location: 'Imagined test station', map: ['Control', 'Wrong link', 'Test pump'] }
    ]
  },
  {
    slug: 'sustainability', number: '08', name: 'Sustainability Engineer', image: 'assets/role-sustainability.png',
    hook: 'Restore the flow wisely.',
    challenge: 'The waterfall needs a practical plan for using water and energy.',
    story: 'Compare fictional operating choices and their effects. Choose a balanced plan that supports the waterfall while reducing waste.',
    collaboration: 'Share the chosen plan with M&E for the system test.',
    levels: [
      { level: 1, title: 'Water being wasted', issue: 'A fictional water-use report shows an unnecessary loss.', action: 'Compare the supplied choices and select a way to reduce the waste.', location: 'Imagined review desk', map: ['Report', 'Water loss', 'Better choice'] },
      { level: 2, title: 'Energy choice', issue: 'Two pump settings use different amounts of energy.', action: 'Compare the supplied energy and flow figures and choose a setting that meets the target.', location: 'Imagined pump dashboard', map: ['Settings', 'Energy use', 'Flow target'] },
      { level: 3, title: 'Reuse option', issue: 'A fictional plan sends reusable water away.', action: 'Compare the supplied options and choose a reuse route that meets the given conditions.', location: 'Imagined water review', map: ['Used water', 'Options', 'Reuse path'] },
      { level: 4, title: 'Choose materials', issue: 'Two supplied pipe options have different waste and maintenance needs.', action: 'Compare the supplied information and choose the option with the better overall fit.', location: 'Imagined materials desk', map: ['Options', 'Trade-offs', 'Selection'] },
      { level: 5, title: 'Balance the plan', issue: 'The lowest-energy choice does not meet the required water flow.', action: 'Compare the supplied water and energy trade-offs and select a balanced operating plan.', location: 'Imagined planning table', map: ['Energy', 'Flow target', 'Balanced plan'] }
    ]
  },
  {
    slug: 'architecture', number: '09', name: 'Architect', image: 'assets/role-architecture.png',
    hook: 'Make space for the people and the services.',
    challenge: 'A service access panel conflicts with a finished public space.',
    story: 'Find a way for the fictional waterfall services to be maintained while respecting the design and keeping the public route clear.',
    collaboration: 'Coordinate the proposed access with BIM and Safety.',
    levels: [
      { level: 1, title: 'Hidden access panel', issue: 'A finish covers a panel needed to reach a service valve.', action: 'Choose a panel position that allows the valve to be reached.', location: 'Imagined service wall', map: ['Wall', 'Hidden valve', 'Access panel'] },
      { level: 2, title: 'Pipe meets the finish', issue: 'A proposed pipe route crosses a finished wall feature.', action: 'Compare the options and select a route that fits the design and the services.', location: 'Imagined public corridor', map: ['Pipe route', 'Wall feature', 'New route'] },
      { level: 3, title: 'Ceiling clearance', issue: 'A ceiling finish leaves no space for a service cover.', action: 'Compare supplied layouts and select one that allows the cover to open.', location: 'Imagined ceiling zone', map: ['Ceiling', 'Blocked cover', 'Clear opening'] },
      { level: 4, title: 'Screen the equipment', issue: 'Fictional service equipment needs a screen without blocking access.', action: 'Choose a screen that fits the space and leaves the marked access clear.', location: 'Imagined garden edge', map: ['Equipment', 'Screen', 'Access'] },
      { level: 5, title: 'Space for everyone', issue: 'A maintenance panel opens into a busy public route.', action: 'Choose a revised panel and route that keep both maintenance access and the walkway clear.', location: 'Imagined public walkway', map: ['Walkway', 'Panel clash', 'Clear access'] }
    ]
  },
  {
    slug: 'safety', number: '10', name: 'Safety Engineer', image: 'assets/role-safety.webp',
    hook: 'Make the route safe.',
    challenge: 'Hazards are blocking the team from reaching the waterfall work area.',
    story: 'Inspect a fictional construction route and make it safe for the team. Check every control before reopening access.',
    collaboration: 'Coordinate the lifting zone with the Construction Engineer and safe access with the Architect.',
    levels: [
      { level: 1, title: 'Blocked exit', issue: 'Materials block the exit on the way to the waterfall work area.', action: 'Identify the obstruction, choose a control and recheck the exit.', location: 'Imagined work route', map: ['Entry', 'Blocked exit', 'Clear exit'] },
      { level: 2, title: 'Unprotected edge', issue: 'A work route passes an edge without protection.', action: 'Select and place the supplied edge protection, then inspect it.', location: 'Imagined upper deck', map: ['Route', 'Open edge', 'Protected'] },
      { level: 3, title: 'Trip hazard', issue: 'A loose cable crosses the walking route to the equipment.', action: 'Find the hazard, choose a supplied control and recheck the route.', location: 'Imagined service corridor', map: ['Entry', 'Loose cable', 'Clear path'] },
      { level: 4, title: 'Missing warning', issue: 'A temporary work area has no warning at its entrance.', action: 'Choose a warning and barrier, then check the approach is clearly marked.', location: 'Imagined work entrance', map: ['Approach', 'Work area', 'Safe entry'] },
      { level: 5, title: 'Lift crosses the route', issue: 'A planned lifting zone overlaps the team’s access route.', action: 'Set an exclusion zone and a safe diversion, then check that the team and load remain separated.', location: 'Imagined lifting zone', map: ['Team route', 'Lift zone', 'Safe diversion'] }
    ]
  }
];

