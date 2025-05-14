import { useEffect } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'

import { TERMS_ITEMS } from '../constants/termItems.constant'

/**
 * 약관 동의 관련 상태 및 액션을 제공하는 커스텀 훅
 *
 * - 개별 약관 항목의 체크 여부를 감시하고 상태를 업데이트
 * - 모든 약관이 체크되었는지 판단하여 `terms` 필드 값을 자동으로 설정
 * - 전체 동의 및 개별 동의 토글 기능을 제공
 *
 * @returns {Object} 객체
 * @property {Object} checkedTerms - 현재 체크된 약관 항목 상태 객체 (key: boolean)
 * @property {Function} toggleTerm - 개별 항목을 토글하는 함수
 * @property {Function} toggleAllTerms - 전체 항목을 토글하는 함수 (전체 선택/해제)
 * @property {boolean} allChecked - 모든 항목이 체크되었는지 여부
 */

export const useTermsAgreement = () => {
  const { control, setValue } = useFormContext()

  const checkedTerms = useWatch({ name: 'checkedTerms', control }) || {}

  const allChecked = TERMS_ITEMS.every((item) => checkedTerms[item.key])

  useEffect(() => {
    setValue('terms', allChecked)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(checkedTerms), setValue])

  const toggleTerm = (key: string) => {
    setValue(`checkedTerms.${key}`, !checkedTerms[key])
  }

  const toggleAllTerms = () => {
    const newState = TERMS_ITEMS.reduce((acc, item) => ({ ...acc, [item.key]: !allChecked }), {})
    setValue('checkedTerms', newState)
  }

  return {
    checkedTerms,
    toggleTerm,
    toggleAllTerms,
    allChecked,
  }
}
