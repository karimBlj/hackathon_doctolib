import React, { useState } from 'react';
import SplitPane from 'react-split-pane';
import { Database, Table, Play } from 'lucide-react';

const sampleDatasets = [
  {
    name: 'analytics',
    tables: ['events', 'users', 'sessions']
  },
  {
    name: 'transactions',
    tables: ['orders', 'payments', 'refunds']
  },
  {
    name: 'metrics',
    tables: ['system_stats', 'performance', 'errors']
  }
];

function DatabasePage() {
  const [query, setQuery] = useState('SELECT * FROM analytics.events\nLIMIT 10;');
  const [selectedDataset, setSelectedDataset] = useState<string | null>(null);

  return (
    <div className="h-[calc(100vh-5rem)]">
      <SplitPane
        split="vertical"
        minSize={200}
        defaultSize={250}
        className="!bg-transparent"
      >
        {/* Dataset Explorer */}
        <div className="h-full bg-slate-800/50 backdrop-blur-sm border-r border-slate-700 overflow-y-auto">
          <div className="p-4">
            <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <Database className="h-5 w-5 text-purple-400" />
              Datasets
            </h2>
            <div className="space-y-4">
              {sampleDatasets.map((dataset) => (
                <div key={dataset.name}>
                  <button
                    className={`flex items-center gap-2 w-full text-left p-2 rounded hover:bg-slate-700/50 ${
                      selectedDataset === dataset.name ? 'bg-slate-700/50' : ''
                    }`}
                    onClick={() => setSelectedDataset(dataset.name)}
                  >
                    <Database className="h-4 w-4 text-slate-400" />
                    <span>{dataset.name}</span>
                  </button>
                  {selectedDataset === dataset.name && (
                    <div className="ml-4 mt-2 space-y-1">
                      {dataset.tables.map((table) => (
                        <button
                          key={table}
                          className="flex items-center gap-2 w-full text-left p-2 text-sm text-slate-300 hover:bg-slate-700/50 rounded"
                        >
                          <Table className="h-4 w-4 text-slate-400" />
                          {table}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Query Editor and Results */}
        <SplitPane
          split="horizontal"
          defaultSize={300}
          minSize={100}
        >
          {/* Query Editor */}
          <div className="h-full bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Query Editor</h2>
              <button
                className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-white font-medium transition-colors"
              >
                <Play className="h-4 w-4" />
                Run Query
              </button>
            </div>
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-[calc(100%-4rem)] bg-slate-900/50 text-slate-200 p-4 rounded-lg font-mono resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              spellCheck="false"
            />
          </div>

          {/* Query Results */}
          <div className="h-full bg-slate-800/50 backdrop-blur-sm p-4 overflow-auto">
            <h2 className="text-lg font-semibold mb-4">Query Results</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-slate-700 rounded-lg">
                <thead>
                  <tr className="bg-slate-700/50">
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-300">event_id</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-300">event_type</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-300">timestamp</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-300">user_id</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, i) => (
                    <tr key={i} className="border-t border-slate-700">
                      <td className="px-4 py-2 text-sm text-slate-300">{`evt_${i + 1}`}</td>
                      <td className="px-4 py-2 text-sm text-slate-300">page_view</td>
                      <td className="px-4 py-2 text-sm text-slate-300">2024-03-14 12:00:00</td>
                      <td className="px-4 py-2 text-sm text-slate-300">{`usr_${i + 1}`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </SplitPane>
      </SplitPane>
    </div>
  );
}

export default DatabasePage;