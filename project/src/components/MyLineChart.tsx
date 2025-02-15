import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function MyLineChart()
{
    const data = [
        { time: '00:00', nodes: 156 },
        { time: '04:00', nodes: 142 },
        { time: '08:00', nodes: 164 },
        { time: '12:00', nodes: 185 },
        { time: '16:00', nodes: 197 },
        { time: '20:00', nodes: 178 },
        { time: '24:00', nodes: 156 },
      ];
      
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis 
                dataKey="time" 
                stroke="#94a3b8"
                tick={{ fill: '#94a3b8' }}
                />
                <YAxis 
                stroke="#94a3b8"
                tick={{ fill: '#94a3b8' }}
                />
                <Tooltip 
                contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #475569',
                    borderRadius: '0.5rem',
                }}
                labelStyle={{ color: '#94a3b8' }}
                />
                <Line 
                type="monotone" 
                dataKey="nodes" 
                stroke="#a855f7" 
                strokeWidth={2}
                dot={{ fill: '#a855f7', strokeWidth: 2 }}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default MyLineChart