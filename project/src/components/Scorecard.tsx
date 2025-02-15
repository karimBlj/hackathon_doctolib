import { User } from 'lucide-react'

function Scorecard(props : {title : string, value : string | number})
{
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
        <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 rounded-lg">
                <User className="h-6 w-6 text-purple-400" />
            </div>
            <div>
                <p className="text-sm text-slate-400">{props.title}</p>
                <p className="text-2xl font-semibold">{props.value}</p>
            </div>
      </div>
    </div>
  )
}

export default Scorecard