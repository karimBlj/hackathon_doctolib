import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function MyBarChart()
{
  const data = [
    { range: "0-10", categoryA: 2, categoryB: 3 },
    { range: "10-20", categoryA: 5, categoryB: 6 },
    { range: "20-30", categoryA: 8, categoryB: 10 },
    { range: "30-40", categoryA: 15, categoryB: 12 },
    { range: "40-50", categoryA: 20, categoryB: 18 },
    { range: "50-60", categoryA: 18, categoryB: 20 },
    { range: "60-70", categoryA: 10, categoryB: 14 },
    { range: "70-80", categoryA: 7, categoryB: 8 },
    { range: "80-90", categoryA: 4, categoryB: 5 },
    { range: "90-100", categoryA: 2, categoryB: 3 },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
       <BarChart
          data   = {data}
          margin = {{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
        <XAxis dataKey="range" />
        <YAxis />
        <Tooltip />
        <Legend /> {/* Displays category labels */}
        <Bar dataKey="categoryA" fill="#8884d8" barSize={30} name="Category A" />
        <Bar dataKey="categoryB" fill="#82ca9d" barSize={30} name="Category B" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default MyBarChart