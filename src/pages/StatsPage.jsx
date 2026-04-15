import { useMemo } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { useAppContext } from '../context/AppContext'

const colorByType = {
  text: '#7c3aed',
  call: '#245c4c',
  video: '#2ea56a'
}

const StatsPage = () => {
  const { timelineEntries } = useAppContext()

  const chartData = useMemo(() => {
    const base = { call: 0, text: 0, video: 0 }

    timelineEntries.forEach((entry) => {
      if (base[entry.type] !== undefined) {
        base[entry.type] += 1
      }
    })

    return [
      { name: 'Text', key: 'text', value: base.text },
      { name: 'Call', key: 'call', value: base.call },
      { name: 'Video', key: 'video', value: base.video }
    ]
  }, [timelineEntries])

  return (
    <div className="container page-stats">
      <h1>Friendship Analytics</h1>

      <section className="panel analytics-panel">
        <h2>By Interaction Type</h2>

        <div className="chart-wrap">
          <ResponsiveContainer width="100%" height={290}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                innerRadius={56}
                outerRadius={85}
                paddingAngle={3}
                cornerRadius={6}
              >
                {chartData.map((entry) => (
                  <Cell key={entry.key} fill={colorByType[entry.key]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-legend">
          {chartData.map((entry) => (
            <div key={entry.key} className="legend-item">
              <span
                className="legend-dot"
                style={{ backgroundColor: colorByType[entry.key] }}
              />
              <span>{entry.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default StatsPage

