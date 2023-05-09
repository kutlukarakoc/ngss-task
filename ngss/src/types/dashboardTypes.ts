export interface IDashboard {
   title: string
   data: number[]
   labels: string[]
   bgColor?: string
   type: 'doughnut' | 'pie' | 'vertical'
}