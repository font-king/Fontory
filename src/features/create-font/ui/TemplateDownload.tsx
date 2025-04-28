import { Button } from '@/shared/ui/Button'

export const TemplateDownload = () => (
  <div className="flex-column grow gap-11">
    <p className="p4 text-primary">1. 아래의 템플릿을 다운받아 작성해주세요.</p>
    <a href="/assets/font_template.jpeg" download="폰트 제작 템플릿.jpeg">
      <Button size="md" className="w-full">
        템플릿 다운받기
      </Button>
    </a>
  </div>
)
