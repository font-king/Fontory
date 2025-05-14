import { Icon, InputGroup } from '@/components'
import { getCssVar } from '@/utils'

import { signupAttribute } from '../config/signup.schema'
import { TERMS_ITEMS } from '../constants/termItems.constant'
import { useTermsAgreement } from '../hooks/useTermsAgreement'

export const TermsAgreement = () => {
  const { checkedTerms, toggleTerm, toggleAllTerms } = useTermsAgreement()

  return (
    <InputGroup section={signupAttribute.terms}>
      <div className="flex-between-center">
        <InputGroup.Label />
        <button
          type="button"
          className="p5 text-grey border-b-grey cursor-pointer border-b"
          onClick={toggleAllTerms}
        >
          전체 동의
        </button>
      </div>

      <div className="flex-column">
        {TERMS_ITEMS.map((item) => (
          <div key={item.key} className="flex-between-center gap-7 py-3">
            <span className="p3 text-grey">{item.label}</span>

            <button
              type="button"
              className="border-b-grey p6 text-grey mr-auto cursor-pointer border-b py-1"
            >
              상세보기
            </button>

            <button type="button" onClick={() => toggleTerm(item.key)} className="cursor-pointer">
              <Icon
                name={'checkbox'}
                size={'3.2rem'}
                fill={
                  checkedTerms[item.key]
                    ? getCssVar('--color-primary')
                    : getCssVar('--color-lightgrey')
                }
              />
            </button>
          </div>
        ))}
      </div>
    </InputGroup>
  )
}
