/* A conceptual, interactive map of 50 shared-edge puzzle pieces. */
(() => {
  const host = document.querySelector('[data-jigsaw]');
  if (!host) return;
  const roles = window.ROLES;
  if (!Array.isArray(roles) || roles.length !== 10) {
    host.textContent = 'The puzzle map could not be loaded.';
    return;
  }

  const NS = 'http://www.w3.org/2000/svg';
  const svgNode = (tag, attributes = {}) => {
    const node = document.createElementNS(NS, tag);
    for (const [key, value] of Object.entries(attributes)) node.setAttribute(key, String(value));
    return node;
  };
  const columns = 10, rows = 5, cell = 100;
  const width = columns * cell, height = rows * cell;

  // Generate each boundary exactly once. Adjacent pieces use the same points
  // in the opposite direction, so every tab matches its neighbouring socket.
  const cubic = (a, b, c, d, t) => {
    const u = 1 - t;
    return u*u*u*a + 3*u*u*t*b + 3*u*t*t*c + t*t*t*d;
  };
  const shape = (x, y, horizontal, sign, isOuter) => {
    const point = (along, out) => horizontal
      ? [x + along * cell, y + sign * out * cell]
      : [x + sign * out * cell, y + along * cell];
    if (isOuter) return [point(0, 0), point(1, 0)];
    const result = [point(0, 0), point(.36, 0)];
    const curves = [
      [[.36,0],[.46,0],[.28,.16],[.37,.22]],
      [[.37,.22],[.42,.27],[.58,.27],[.63,.22]],
      [[.63,.22],[.72,.16],[.54,0],[.64,0]]
    ];
    for (const curve of curves) for (let i = 1; i <= 8; i++) {
      const t = i / 8;
      result.push(point(cubic(curve[0][0],curve[1][0],curve[2][0],curve[3][0],t),
                        cubic(curve[0][1],curve[1][1],curve[2][1],curve[3][1],t)));
    }
    result.push(point(1, 0));
    return result;
  };
  const hEdges = Array.from({length:rows+1},(_,r) => Array.from({length:columns},(_,c) =>
    shape(c*cell,r*cell,true,(r+c)%2 ? 1 : -1,r===0||r===rows)));
  const vEdges = Array.from({length:columns+1},(_,c) => Array.from({length:rows},(_,r) =>
    shape(c*cell,r*cell,false,(r+c)%2 ? -1 : 1,c===0||c===columns)));

  const board = document.createElement('div');
  board.className = 'jigsaw-board';
  board.tabIndex = 0;
  board.setAttribute('aria-label', 'Jigsaw picture, scroll sideways if needed');
  const svg = svgNode('svg', {viewBox:`0 0 ${width} ${height}`,class:'jigsaw-svg',role:'group','aria-label':'Fifty-piece jigsaw of an illustrated exterior view of Jewel with the Woh Hup logo. Select a piece to see its role and level.'});
  const title = svgNode('title'); title.textContent = 'Jewel exterior jigsaw: 50 pieces, ten roles and five levels'; svg.append(title);
  const base = host.dataset.assetBase || '';
  svg.append(svgNode('image',{href:base+'assets/jigsaw-jewel-exterior-detailed.webp',x:0,y:0,width,height,preserveAspectRatio:'xMidYMid slice'}));
  // Place the actual logo, including its wordmark, over the artwork and beneath the puzzle pieces.
  svg.append(svgNode('image',{href:base+'assets/wohhup-official-logo-transparent.png',x:5,y:5,width:65,height:65,'pointer-events':'none','aria-hidden':'true'}));
  const status = document.createElement('p');
  status.className='jigsaw-status';
  status.setAttribute('aria-live','polite');
  status.textContent='Select a piece to see which role and level earns it.';
  let selected;
  const display = (tile, role, row, number) => {
    if (selected) selected.classList.remove('is-selected');
    tile.classList.add('is-selected'); selected=tile;
    const level = role.levels?.[row];
    status.textContent = `Piece ${String(number).padStart(2,'0')} of 50 · ${role.name} · Level ${row+1}${level?.title ? ' — '+level.title : ''}`;
  };
  for (let r=0;r<rows;r++) for (let c=0;c<columns;c++) {
    const role=roles[c], number=c*rows+r+1;
    const points=[...hEdges[r][c],...vEdges[c+1][r].slice(1),...[...hEdges[r+1][c]].reverse().slice(1),...[...vEdges[c][r]].reverse().slice(1)];
    const d=points.map((p,i)=>`${i?'L':'M'}${p[0].toFixed(3)},${p[1].toFixed(3)}`).join(' ')+' Z';
    svg.append(svgNode('path',{d,class:'jigsaw-outline','aria-hidden':'true'}));
    const label=`Piece ${number} of 50. ${role.name}, level ${r+1}${role.levels?.[r]?.title ? ': '+role.levels[r].title : ''}.`;
    const tile=svgNode('path',{d,class:'jigsaw-piece',tabindex:'0',role:'button','aria-label':label});
    const tileTitle=svgNode('title'); tileTitle.textContent=label; tile.append(tileTitle);
    tile.addEventListener('click',()=>display(tile,role,r,number));
    tile.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();display(tile,role,r,number);}});
    svg.append(tile);
    const num=svgNode('text',{x:r===0&&c===0 ? 16 : c*cell+50,y:r===0&&c===0 ? 92 : r*cell+54,class:'jigsaw-number','text-anchor':'middle','aria-hidden':'true'});
    num.textContent=String(number).padStart(2,'0'); svg.append(num);
  }
  board.append(svg);
  const legend=document.createElement('ol'); legend.className='jigsaw-legend';
  roles.forEach((role,i)=>{const item=document.createElement('li'); const start=i*rows+1; item.textContent=`${String(start).padStart(2,'0')}–${String(start+4).padStart(2,'0')} · ${role.name}`; legend.append(item);});
  host.append(board,status,legend);
})();
