import React, { useState, useRef, useEffect } from 'react';
import { Server, Cpu, MemoryStick as Memory, Network, Activity, Users, Globe2, Shield, X} from 'lucide-react';
import Scorecard                        from '../components/Scorecard';
import MyBarChart                       from '../components/MyBarChart';
import { requestAvgSpecialties, requestHospitalsPistion, requestMean }                  from '../requests/api_query';
import { connections, peerConnections } from '../requests/network';
// import MyLineChart from '../components/MyLineChart';

const serverStats = {
  cpu: '78%',
  memory: '12.4 GB / 16 GB',
  network: '1.2 GB/s',
  activeNodes: 178,
  region: 'EUR-WEST',
  uptime: '99.99%',
};


function NetworkPage()
{
  const [newPeerCo, setNewPeerCo] = useState<any[]>([]);

  const [transform,    setTransform   ] = useState({ x: -1100, y: 90, scale: .6 });
  const [isDragging,   setIsDragging  ] = useState(false);
  const [dragStart,    setDragStart   ] = useState({ x: 0, y: 0 });
  const [selectedNode, setSelectedNode] = useState<typeof peerConnections[0] | null>(null);

  const [mean, setMean] = useState<any>();
  const [meanCardio, setMeanCardio] = useState<any>();
  const [meanDentist, setMeanDentist] = useState<any>();
  
  const svgRef = useRef<SVGSVGElement>(null);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const scaleSensitivity = 0.02;
    const newScale = Math.max(0.5, Math.min(2, transform.scale + (e.deltaY > 0 ? -scaleSensitivity : scaleSensitivity)));
    
    const svgRect = svgRef.current?.getBoundingClientRect();
    if (!svgRect) return;
    
    const cursorX = e.clientX - svgRect.left;
    const cursorY = e.clientY - svgRect.top;
    
    const x = cursorX - (cursorX - transform.x) * (newScale / transform.scale);
    const y = cursorY - (cursorY - transform.y) * (newScale / transform.scale);
    
    setTransform({ x, y, scale: newScale });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - transform.x, y: e.clientY - transform.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setTransform({
      ...transform,
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleNodeClick = (peer: typeof peerConnections[0], e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent dragging when clicking nodes
    setSelectedNode(peer);
  };

  useEffect(() => {
    requestHospitalsPistion().then(res =>
      {
        console.log(res);

        setNewPeerCo(res);
        // console.log(res);
        // peerConnections.forEach(element => {
        //   const newX = res.get(element.id)!.x
        //   const newY = res.get(element.id)!.y
        //   element.x = newX;
        //   element.y = newY;
        // });
      }
    )
    requestAvgSpecialties().then(res => {setMeanCardio(res.cardio.toFixed(2)); setMeanDentist(res.dentist.toFixed(2))});
    requestMean().then(res => setMean(res.toFixed(2)));
  }, [])

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Server Stats */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Server className="h-5 w-5 text-purple-400" />
              Server Status
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-300">CPU Usage</span>
                </div>
                <span className="text-purple-400">{serverStats.cpu}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Memory className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-300">Memory</span>
                </div>
                <span className="text-purple-400">{serverStats.memory}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Network className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-300">Network</span>
                </div>
                <span className="text-purple-400">{serverStats.network}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-300">Active Nodes</span>
                </div>
                <span className="text-purple-400">{serverStats.activeNodes}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-300">Region</span>
                </div>
                <span className="text-purple-400">{serverStats.region}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-300">Uptime</span>
                </div>
                <span className="text-purple-400">{serverStats.uptime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Network Graph */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Scorecard title= 'Mean Visit/doc' value = {mean}/>
            <Scorecard title= 'Mean Visit/cardiologists' value = {meanCardio}/>
            <Scorecard title= 'Mean Visit/dentist'       value = {meanDentist}/>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Activity className="h-5 w-5 text-purple-400" />
              Network Activity
            </h2>
            <div className="h-[400px]">
              <MyBarChart/>
            </div>
          </div>

          {/* Peer Network Visualization */}
          <div className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Network className="h-5 w-5 text-purple-400" />
              Peer Connections
            </h2>
            <div className="relative h-[400px] w-full overflow-hidden cursor-move">
              <svg
                ref={svgRef}
                className="w-full h-full"
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
              >
                <g transform={`translate(${transform.x}, ${transform.y}) scale(${transform.scale})`}>
                  {/* Connection Lines */}
                  
                  {connections.map((connection, index) => {
                    const from = newPeerCo.find(p => p.id === connection.from);
                    const to = newPeerCo.find(p => p.id === connection.to);
                    if (!from || !to) return null;

                    return (
                      <g key={index}>
                        <line
                          x1 = {from.x}
                          y1 = {from.y}
                          x2 = {to.x}
                          y2 = {to.y}
                          stroke="#a855f7"
                          strokeWidth="2"
                          strokeDasharray="4"
                          className="animate-pulse"
                        />
                        <text
                          x          = {(from.x + to.x) / 2}
                          y          = {(from.y + to.y) / 2}
                          fill       = "#94a3b8"
                          textAnchor = "middle"
                          className  = "text-xs"
                        >
                          {connection.latency}
                        </text>
                      </g>
                    );
                  })}


                  {/* Nodes */}
                  {/*peerConnections*/newPeerCo.map((peer) => 
                  {
                    return (
                      <g 
                        key={peer.id}
                        // onClick={(e) => handleNodeClick(peer, e)}
                        className="cursor-pointer"
                      >
                        <circle
                          cx={peer.x}
                          cy={peer.y}
                          r={peer.id === 'your-node' ? 30 : 20}
                          fill={peer.id === 'your-node' ? '#a855f7' : '#1e293b'}
                          stroke="#a855f7"
                          strokeWidth="2"
                          className={`animate-pulse transition-all duration-200 ${selectedNode?.id === peer.id ? 'stroke-white stroke-[3]' : ''}`}
                        />
                        <text
                          x={peer.x}
                          y={peer.y + 40}
                          textAnchor="middle"
                          fill="#94a3b8"
                          className="text-sm"
                        >
                          {peer.id}
                        </text>
                      </g>
                    )
                  })}
                </g>
              </svg>

              {/* Node Details Popup */}
              {selectedNode && (
                <div 
                  className="absolute top-4 right-4 w-80 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg shadow-xl p-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{selectedNode.label}</h3>
                    <button 
                      onClick={() => setSelectedNode(null)}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Status</span>
                      <span className="text-green-400">{selectedNode.status}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Region</span>
                      <span className="text-purple-400">{selectedNode.region}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Uptime</span>
                      <span className="text-purple-400">{selectedNode.uptime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">CPU Usage</span>
                      <span className="text-purple-400">{selectedNode.cpu}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Memory</span>
                      <span className="text-purple-400">{selectedNode.memory}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Bandwidth</span>
                      <span className="text-purple-400">{selectedNode.bandwidth}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Connected Peers</span>
                      <span className="text-purple-400">{selectedNode.connectedPeers}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Last Seen</span>
                      <span className="text-purple-400">{selectedNode.lastSeen}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NetworkPage;