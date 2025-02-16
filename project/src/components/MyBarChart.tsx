import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function MyBarChart(datas: any)
{
  const data = [
    // { range: "Auvergne-Rhones-Alpes", categoryA: 2, categoryB: 3 },
    // { range: "Bourgogne-Franche-Comte", categoryA: 5, categoryB: 6 },
    // { range: "20-30", categoryA: 8, categoryB: 10 },
    // { range: "30-40", categoryA: 15, categoryB: 12 },
    // { range: "40-50", categoryA: 20, categoryB: 18 },
    // { range: "50-60", categoryA: 18, categoryB: 20 },
    // { range: "60-70", categoryA: 10, categoryB: 14 },
    // { range: "70-80", categoryA: 7, categoryB: 8 },
    // { range: "80-90", categoryA: 4, categoryB: 5 },
    // { range: "90-100", categoryA: 2, categoryB: 3 },
    {range : "Auvergne-Rhones-Alpes",      environement : 16.761194029850746, cardiologists : 263},
    {range : "Bourgogne-Franche-Comte",    environement : 12.127272727272727, cardiologists : 64},
    {range : "Bretagne",                   environement : 11.702702702702704, cardiologists : 72},
    {range : "Centre-Val-De-Loire",        environement : 11.964285714285714, cardiologists : 87},
    {range : "Corse",                      environement : 10.25925925925926,  cardiologists : 3.6},
    {range : "Grand-Est",                  environement : 14.554744525547445, cardiologists : 209},
    {range : "Hauts-De-France",            environement : 13.566666666666666, cardiologists : 207},
    {range : "Ile-De-France",              environement : 26.18421052631579,  cardiologists : 300},
    {range : "Normandie",                  environement : 15.147540983606557, cardiologists : 75},
    {range : "Nouvelle-Aquitaine",         environement : 12.017094017094017, cardiologists : 225},
    {range : "Occitanie",                  environement : 17.098591549295776, cardiologists : 198},
    {range : "Pays-De-La-Loire",           environement : 9.9,                cardiologists : 79},
    {range : "Provence-Alpes-Cote-D-Azur", environement : 19.263157894736842, cardiologists : 289},
  ]


  return (
    <ResponsiveContainer width="100%" height="100%">
       <BarChart
          data   = {data}
          margin = {{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
        <XAxis dataKey="range" />
        
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />

        <Tooltip />
        <Legend /> {/* Displays category labels */}
        <Bar yAxisId="left" dataKey="environement" fill="#8884d8" barSize={30}  name="environement" />
        <Bar yAxisId="right" dataKey="cardiologists" fill="#82ca9d" barSize={30} name="cardiologists" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default MyBarChart