import React, { useState } from 'react';
import { Play, Pause, Clock, Cpu, MemoryStick, Network, Search, Plus, Filter, MoreVertical, RefreshCw } from 'lucide-react';

// Sample adapter data
const adapters = [
  {
    id: 'adapter-1',
    name: 'Data Sync Service',
    runtime: 'Node.js 18',
    status: 'Running',
    region: 'EUR-WEST',
    memory: '512 MB',
    timeout: '30s',
    lastInvoked: '2 minutes ago',
    avgDuration: '1.2s',
    invocations: 1243,
    errors: 2,
  },
  {
    id: 'adapter-2',
    name: 'Image Processing',
    runtime: 'Python 3.9',
    status: 'Running',
    region: 'US-EAST',
    memory: '1024 MB',
    timeout: '60s',
    lastInvoked: '5 minutes ago',
    avgDuration: '2.8s',
    invocations: 856,
    errors: 0,
  },
  {
    id: 'adapter-3',
    name: 'Email Notification',
    runtime: 'Node.js 18',
    status: 'Stopped',
    region: 'ASIA-EAST',
    memory: '256 MB',
    timeout: '10s',
    lastInvoked: '1 hour ago',
    avgDuration: '0.8s',
    invocations: 2341,
    errors: 5,
  },
  {
    id: 'adapter-4',
    name: 'Analytics Pipeline',
    runtime: 'Python 3.9',
    status: 'Running',
    region: 'EUR-WEST',
    memory: '2048 MB',
    timeout: '300s',
    lastInvoked: 'Just now',
    avgDuration: '45.2s',
    invocations: 432,
    errors: 1,
  },
];

function AdaptersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRuntime, setSelectedRuntime] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const filteredAdapters = adapters.filter(adapter => {
    const matchesSearch = adapter.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRuntime = selectedRuntime === 'all' || adapter.runtime === selectedRuntime;
    const matchesRegion = selectedRegion === 'all' || adapter.region === selectedRegion;
    return matchesSearch && matchesRuntime && matchesRegion;
  });

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Adapters</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-white font-medium transition-colors">
          <Plus className="h-4 w-4" />
          Create Adapter
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search adapters..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <select
          value={selectedRuntime}
          onChange={(e) => setSelectedRuntime(e.target.value)}
          className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="all">All Runtimes</option>
          <option value="Node.js 18">Node.js 18</option>
          <option value="Python 3.9">Python 3.9</option>
        </select>
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="all">All Regions</option>
          <option value="EUR-WEST">EUR-WEST</option>
          <option value="US-EAST">US-EAST</option>
          <option value="ASIA-EAST">ASIA-EAST</option>
        </select>
      </div>

      {/* Adapters List */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Runtime</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Region</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Memory</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Last Invoked</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Metrics</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAdapters.map((adapter) => (
                <tr key={adapter.id} className="border-b border-slate-700 hover:bg-slate-700/30">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-white">{adapter.name}</div>
                      <div className="text-sm text-slate-400">Timeout: {adapter.timeout}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-400/10 text-blue-400">
                      {adapter.runtime}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      adapter.status === 'Running' 
                        ? 'bg-green-400/10 text-green-400' 
                        : 'bg-slate-400/10 text-slate-400'
                    }`}>
                      {adapter.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-slate-300">{adapter.region}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-slate-300">{adapter.memory}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-slate-300">{adapter.lastInvoked}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Invocations</span>
                        <span className="text-slate-300">{adapter.invocations}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Avg. Duration</span>
                        <span className="text-slate-300">{adapter.avgDuration}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Errors</span>
                        <span className={adapter.errors > 0 ? 'text-red-400' : 'text-slate-300'}>
                          {adapter.errors}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center space-x-2">
                      {adapter.status === 'Running' ? (
                        <button className="p-1 hover:bg-slate-700 rounded" title="Stop">
                          <Pause className="h-4 w-4 text-slate-400" />
                        </button>
                      ) : (
                        <button className="p-1 hover:bg-slate-700 rounded" title="Start">
                          <Play className="h-4 w-4 text-slate-400" />
                        </button>
                      )}
                      <button className="p-1 hover:bg-slate-700 rounded" title="More">
                        <MoreVertical className="h-4 w-4 text-slate-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdaptersPage;