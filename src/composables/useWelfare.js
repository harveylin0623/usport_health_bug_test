import { ref } from 'vue'

export const useWelfare = () => {
  const welfareCategory = ref({
    employeeBenefit1s: 'employee_benefit1s',
    employeeBenefit2s: 'employee_benefit2s',
    employeeBenefit3s: 'employee_benefit3s',
    employeeBenefit4s: 'employee_benefit4s',
    employeeBenefit5s: 'employee_benefit5s',
  })

  return { welfareCategory }
}