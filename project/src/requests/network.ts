export const hospitals = [
    { 
        id: 'your-node',
        label: "Auvergne-Rhones-Alpes" ,
        port : "8000",
        x: 400,
        y: 300,
        region: 'EUR-WEST',
        status: 'Active',
        uptime: '99.99%',
        cpu: '45%',
        memory: '8.2 GB / 16 GB',
        bandwidth: '850 MB/s',
        connectedPeers: 4,
        lastSeen: 'Now'
    },
    { 
        id: 'your-node',
        label: "Bourgogne-Franche-Comte" ,
        port : "8001",
        x: 400,
        y: 300,
        region: 'EUR-WEST',
        status: 'Active',
        uptime: '99.99%',
        cpu: '45%',
        memory: '8.2 GB / 16 GB',
        bandwidth: '850 MB/s',
        connectedPeers: 4,
        lastSeen: 'Now'
    },
    { 
        id: 'your-node',
        label: "Bretagne" ,
        port : "8002",
        x: 400,
        y: 300,
        region: 'EUR-WEST',
        status: 'Active',
        uptime: '99.99%',
        cpu: '45%',
        memory: '8.2 GB / 16 GB',
        bandwidth: '850 MB/s',
        connectedPeers: 4,
        lastSeen: 'Now'
    },
    { 
        id: 'your-node',
        label: "Centre-Val-De-Loire" ,
        port : "8003",
        x: 400,
        y: 300,
        region: 'EUR-WEST',
        status: 'Active',
        uptime: '99.99%',
        cpu: '45%',
        memory: '8.2 GB / 16 GB',
        bandwidth: '850 MB/s',
        connectedPeers: 4,
        lastSeen: 'Now'
    },
    { 
        id: 'your-node',
        label: "Corse" ,
        port : "8004",
        x: 400,
        y: 300,
        region: 'EUR-WEST',
        status: 'Active',
        uptime: '99.99%',
        cpu: '45%',
        memory: '8.2 GB / 16 GB',
        bandwidth: '850 MB/s',
        connectedPeers: 4,
        lastSeen: 'Now'
    },
    { 
        id: 'your-node',
        label: "Grand-Est" ,
        port : "8005",
        x: 400,
        y: 300,
        region: 'EUR-WEST',
        status: 'Active',
        uptime: '99.99%',
        cpu: '45%',
        memory: '8.2 GB / 16 GB',
        bandwidth: '850 MB/s',
        connectedPeers: 4,
        lastSeen: 'Now'
    },
    { 
        id: 'your-node',
        label: "Hauts-De-France" ,
        port : "8006",
        x: 400,
        y: 300,
        region: 'EUR-WEST',
        status: 'Active',
        uptime: '99.99%',
        cpu: '45%',
        memory: '8.2 GB / 16 GB',
        bandwidth: '850 MB/s',
        connectedPeers: 4,
        lastSeen: 'Now'
    },
    { 
        id: 'your-node',
        label: "Ile-De-France" ,
        port : "8007",
        x: 400,
        y: 300,
        region: 'EUR-WEST',
        status: 'Active',
        uptime: '99.99%',
        cpu: '45%',
        memory: '8.2 GB / 16 GB',
        bandwidth: '850 MB/s',
        connectedPeers: 4,
        lastSeen: 'Now'
    },
    { 
        id: 'your-node',
        label: "Normandie" ,
        port : "8008",
        x: 400,
        y: 300,
        region: 'EUR-WEST',
        status: 'Active',
        uptime: '99.99%',
        cpu: '45%',
        memory: '8.2 GB / 16 GB',
        bandwidth: '850 MB/s',
        connectedPeers: 4,
        lastSeen: 'Now'
    },
    { 
        id: 'your-node',
        label: "Nouvelle-Aquitaine" ,
        port : "8009",
        x: 400,
        y: 300,
        region: 'EUR-WEST',
        status: 'Active',
        uptime: '99.99%',
        cpu: '45%',
        memory: '8.2 GB / 16 GB',
        bandwidth: '850 MB/s',
        connectedPeers: 4,
        lastSeen: 'Now'
    },
    { 
        id: 'your-node',
        label: "Occitanie" ,
        port : "8010",
        x: 400,
        y: 300,
        region: 'EUR-WEST',
        status: 'Active',
        uptime: '99.99%',
        cpu: '45%',
        memory: '8.2 GB / 16 GB',
        bandwidth: '850 MB/s',
        connectedPeers: 4,
        lastSeen: 'Now'
    },
    { 
        id: 'your-node',
        label: "Pays-De-La-Loire" ,
        port : "8011",
        x: 400,
        y: 300,
        region: 'EUR-WEST',
        status: 'Active',
        uptime: '99.99%',
        cpu: '45%',
        memory: '8.2 GB / 16 GB',
        bandwidth: '850 MB/s',
        connectedPeers: 4,
        lastSeen: 'Now'
    },
    { 
        id: 'your-node',
        label: "Provence-Alpes-Cote-D-Azur",
        port : "8012",
        x: 400,
        y: 300,
        region: 'EUR-WEST',
        status: 'Active',
        uptime: '99.99%',
        cpu: '45%',
        memory: '8.2 GB / 16 GB',
        bandwidth: '850 MB/s',
        connectedPeers: 4,
        lastSeen: 'Now'
    },
]

export type PeerCo = {
    id : string,
    label : string,
    x : number,
    y : number,
    region : string,
    status : string,
    uptime : string,
    cpu : string,
    memory : string,
    bandwidth : string,
    connectedPeers : number,
    lastSeen : string,
}
export const peerConnections : PeerCo[] = [
    { 
      id: 'your-node',
      label: 'Your Node',
      x: 400,
      y: 300,
      region: 'EUR-WEST',
      status: 'Active',
      uptime: '99.99%',
      cpu: '45%',
      memory: '8.2 GB / 16 GB',
      bandwidth: '850 MB/s',
      connectedPeers: 4,
      lastSeen: 'Now'
    },
    { 
      id: 'peer1',
      label: 'Peer 1 (US-WEST)',
      x: 200,
      y: 150,
      region: 'US-WEST',
      status: 'Active',
      uptime: '99.95%',
      cpu: '32%',
      memory: '6.8 GB / 16 GB',
      bandwidth: '620 MB/s',
      connectedPeers: 3,
      lastSeen: '2s ago'
    },
    { 
      id: 'peer2',
      label: 'Peer 2 (ASIA-EAST)',
      x: 600,
      y: 150,
      region: 'ASIA-EAST',
      status: 'Active',
      uptime: '99.87%',
      cpu: '28%',
      memory: '5.4 GB / 16 GB',
      bandwidth: '580 MB/s',
      connectedPeers: 5,
      lastSeen: '1s ago'
    },
    { 
      id: 'peer3',
      label: 'Peer 3 (EUR-CENTRAL)',
      x: 200,
      y: 450,
      region: 'EUR-CENTRAL',
      status: 'Active',
      uptime: '99.92%',
      cpu: '38%',
      memory: '7.1 GB / 16 GB',
      bandwidth: '720 MB/s',
      connectedPeers: 6,
      lastSeen: '3s ago'
    },
    { 
      id: 'peer4',
      label: 'Peer 4 (AUS-EAST)',
      x: 600,
      y: 450,
      region: 'AUS-EAST',
      status: 'Active',
      uptime: '99.85%',
      cpu: '42%',
      memory: '9.3 GB / 16 GB',
      bandwidth: '480 MB/s',
      connectedPeers: 4,
      lastSeen: '5s ago'
    },
  ];
  
export const connections = [
    {from: "Auvergne-Rhones-Alpes"  , to : "Auvergne-Rhones-Alpes" , latency : "1ms"},
    {from: "Bourgogne-Franche-Comte"  , to : "Bourgogne-Franche-Comte" , latency : "1ms"},
    {from: "Bretagne"  , to : "Bretagne" , latency : "1ms"},
    {from: "Centre-Val-De-Loire"  , to : "Centre-Val-De-Loire" , latency : "1ms"},
    {from: "Corse"  , to : "Corse" , latency : "1ms"},
    {from: "Grand-Est"  , to : "Grand-Est" , latency : "1ms"},
    {from: "Hauts-De-France"  , to : "Hauts-De-France" , latency : "1ms"},
    {from: "Ile-De-France"  , to : "Ile-De-France" , latency : "1ms"},
    {from: "Normandie"  , to : "Normandie" , latency : "1ms"},
    {from: "Nouvelle-Aquitaine"  , to : "Nouvelle-Aquitaine" , latency : "1ms"},
    {from: "Occitanie"  , to : "Occitanie" , latency : "1ms"},
    {from: "Pays-De-La-Loire"  , to : "Pays-De-La-Loire" , latency : "1ms"},
    {from: "Provence-Alpes-Cote-D-Azur" , to : "Provence-Alpes-Cote-D-Azur", latency : "1ms"},
    // { from: 'your-node', to: 'peer1', latency: '45ms' },
    // { from: 'your-node', to: 'peer2', latency: '120ms' },
    // { from: 'your-node', to: 'peer3', latency: '25ms' },
    // { from: 'your-node', to: 'peer4', latency: '150ms' },
  ];


export function generateGraphCoordinates(nodes: Array<any>, connections: Array<any>){
    // Initialize node positions randomly within a defined space
    const positions: Record<string, any> = {};
  const width = 500; // Width of the graph
  const height = 500; // Height of the graph

  // Random initial positions for each node
  nodes.forEach(node => {
    positions[node.id] = {
      x: Math.random() * width,
      y: Math.random() * height
    };
  });

  const force = 0.1; // Force for attracting or repelling nodes
  const iterations = 500; // Number of iterations to stabilize the graph

  // Simple force-directed layout calculation (simulation of forces)
  for (let i = 0; i < iterations; i++) {
    // For each pair of nodes, apply an attraction/repulsion force
    nodes.forEach((node1) => {
      nodes.forEach((node2) => {
        if (node1.id !== node2.id) {
          const dx = positions[node2.id].x - positions[node1.id].x;
          const dy = positions[node2.id].y - positions[node1.id].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Repulsive force (push nodes apart)
          const repulsion = force / (distance + 0.1);
          positions[node1.id].x -= dx * repulsion;
          positions[node1.id].y -= dy * repulsion;
          
          // Apply force to the second node as well
          positions[node2.id].x += dx * repulsion;
          positions[node2.id].y += dy * repulsion;
        }
      });
    });

    // For each connection, apply an attraction force (pull connected nodes closer)
    connections.forEach((connection) => {
      const node1 = positions[connection.from];
      const node2 = positions[connection.to];
      const dx = node2.x - node1.x;
      const dy = node2.y - node1.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const attraction = force * (distance - 100); // 100 is an arbitrary length constant

      // Apply attraction force to both nodes
      positions[connection.from].x += dx * attraction;
      positions[connection.from].y += dy * attraction;
      positions[connection.to].x -= dx * attraction;
      positions[connection.to].y -= dy * attraction;
    });
  }

  // Ensure nodes are within the bounds of the graph
  Object.values(positions).forEach((pos) => {
    pos.x = Math.max(0, Math.min(width, pos.x));
    pos.y = Math.max(0, Math.min(height, pos.y));
  });

  return positions;
}


export async function requestForHostpitals(
    callback : any
)
{
    const res = hospitals.map(async hospital => {
        const callRes =  await callback(hospital.port);
        return callRes
    })
    return Promise.all(res)
}