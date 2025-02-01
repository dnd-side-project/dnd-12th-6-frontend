# dnd-12th-6-frontend

## Git convention

---

```bash
<commit type>: <description>
```

- **commit type**
  | feat | 새로운 기능 추가 |
  | --- | --------------------------------- |
  | fix | 버그 수정 |
  | docs | 문서 수정 |
  | style | 코드 스타일 변경 (코드 포매팅 등) |
  | refactor | 코드 리팩토링 |
  | test | 테스트 코드 작성 |
  | chore | 빌드 수정, 패키지 매니저 설정 등 | \

  \*출처: https://udacity.github.io/git-styleguide

- **description**
  - 커밋에 대한 설명

### Issue

1. 개발 요구사항에 맞추어 새로운 기능 혹은 수정이 필요한 경우, Github Issue를 등록하여 공유한다.
2. 이슈 등록 시에는 `이슈 종류: 내용` 의 형식으로 작성한다.
3. 이슈 등록 후에는 `Assignees`, `Labels`를 지정한다.
4. 이후 해당 이슈를 해결하는 Pull Request 작성 시 해당 이슈를 연결한다.
   - 아직 해결되지 않은 경우: `#이슈 번호`
   - 이슈를 해결한 경우: `resolves #이슈 번호`

### Pull Request

1. PR의 제목은 `[#이슈 번호] 주요한 기능`으로 설정한다. e.g. `[#23] 메인 컴포넌트 분리`
2. PR 템플릿을 사용하여 형식에 맞게 내용을 작성하고 적절한 label을 등록한다.
3. Reviewer에 팀원을 지정하고 Assignee에 자신을 등록한다.
4. 아직 작업 중이지만 중간 리뷰 등의 이유로 미리 등록한 PR의 경우 Draft로 설정한다.
5. 지정된 Reviewer의 Approval 이후에 merge를 진행한다.

## Git branch strategy

> - **main**: 가장 기본이 되는 branch
> - **develop**: 다음 출시 버전을 개발하는 브랜치
> - **feature**: 기능을 개발하는 브랜치

1. **main** → **develop** 브랜치 분기
2. **develop** → **feature** 브랜치 분기
   1. 브랜치 이름은 `이슈 유형/#이슈 번호` e.g. `feat/#27`
3. 코드 리뷰 진행
4. **feature** → **develop** Merge
   1. Squash and Merge
   2. Merge 후 feature 브랜치 삭제
5. 배포 시점에 **develop** → **main** PR 및 Merge
   1. Merge commit or Rebase and Merge
   2. CI/CD 작동

### Version

1. 버전 관리는 develop branch에서 작업 후, main branch를 릴리즈 branch로 활용한다.
2. 버전 배포 완료 후, Github의 release에 새로운 버전 업데이트를 확인하여 추가한다.

## Coding Convention

---

> 💡**Airbnb**의 **JavaScript 스타일 가이드**와 **React/JSX** **스타일 가이드**를 따른다.

- [**Airbnb JavaScript Style Guide**](https://github.com/ParkSB/javascript-style-guide)
- [**Airbnb React/JSX Style Guide**](https://github.com/apple77y/javascript/tree/master/react)
