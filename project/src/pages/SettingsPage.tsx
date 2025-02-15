import React from 'react';
import { Server, User, Shield, Globe2, Bell, Key, Database, Cpu } from 'lucide-react';

function SettingsPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        {/* Profile Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 mb-8">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <User className="h-5 w-5 text-purple-400" />
            Profile
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
              <input
                type="email"
                value="admin@nexuscloud.dev"
                readOnly
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 text-slate-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Role</label>
              <input
                type="text"
                value="Administrator"
                readOnly
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 text-slate-300"
              />
            </div>
          </div>
        </div>

        {/* Server Configuration */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 mb-8">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Server className="h-5 w-5 text-purple-400" />
            Server Configuration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Region</label>
              <select className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 text-slate-300">
                <option>EUR-WEST</option>
                <option>US-EAST</option>
                <option>US-WEST</option>
                <option>ASIA-EAST</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Instance Type</label>
              <select className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 text-slate-300">
                <option>Standard (4 vCPU, 16GB RAM)</option>
                <option>Performance (8 vCPU, 32GB RAM)</option>
                <option>High Memory (8 vCPU, 64GB RAM)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 mb-8">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Shield className="h-5 w-5 text-purple-400" />
            Security
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
              <div className="flex items-center gap-3">
                <Key className="h-5 w-5 text-slate-400" />
                <div>
                  <h3 className="font-medium">Two-Factor Authentication</h3>
                  <p className="text-sm text-slate-400">Add an extra layer of security to your account</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-white font-medium transition-colors">
                Enable
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-slate-400" />
                <div>
                  <h3 className="font-medium">Security Alerts</h3>
                  <p className="text-sm text-slate-400">Get notified about important security events</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-medium transition-colors">
                Configure
              </button>
            </div>
          </div>
        </div>

        {/* System Resources */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Cpu className="h-5 w-5 text-purple-400" />
            System Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-slate-900/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-300">CPU Usage</span>
                <span className="text-sm text-purple-400">45%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-300">Memory Usage</span>
                <span className="text-sm text-purple-400">8.2 GB / 16 GB</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '51.25%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;