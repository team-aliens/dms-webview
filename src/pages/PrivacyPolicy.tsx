import { Text } from '@team-aliens/design-system';
import { color } from '@team-aliens/design-system/dist/styles/theme/color';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

enum THEME {
  'LIGHT' = 'LIGHT',
  'DARK' = 'DARK',
}
export const PrivacyPolicy = () => {
  const location = useLocation();
  const initTheme = new URLSearchParams(location.search);
  const [userTheme] = useState<THEME>(
    initTheme.get('theme') === 'dark' ? THEME.DARK : THEME.LIGHT,
  );
  console.log(location);
  return (
    <Wrapper Theme={userTheme}>
      <PolicyContent>
        <Text
          size="headlineS"
          color={userTheme === THEME.LIGHT ? 'gray10' : 'gray1'}
        >
          개인정보 처리 방침
        </Text>
        <br />
        <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
          DMS는 「개인정보 보호법」 제30조에 따라 정보 주체의 개인정보를
          보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기
          위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
        </Text>
        <br />
        <Text
          size="bodyS"
          color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}
        >
          ○ 이 개인정보처리방침은 2023년 2월 4일부터 적용됩니다.
        </Text>
        <PolicyArticle>
          <Text
            size="titleS"
            color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}
          >
            제1조(개인정보의 처리 목적)
          </Text>
          <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
            DMS(https://www.dsm-dms.com)는 다음의 목적을 위하여 개인정보를
            처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는
            이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」
            제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
          </Text>
          <ArticleDetailList>
            <ArticleDetail>
              <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
                1. 홈페이지 회원가입 및 관리
              </Text>
              <Sub>
                {' '}
                <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
                  회원가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증,
                  회원 자격 유지·관리 목적으로 개인정보를 처리합니다.
                </Text>
              </Sub>
            </ArticleDetail>
          </ArticleDetailList>
        </PolicyArticle>
        <PolicyArticle>
          <Text
            size="titleS"
            color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}
          >
            제2조(개인정보의 처리 및 보유 기간)
          </Text>
          <Sub>
            <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
              ① DMS는 법령에 따른 개인정보 보유·이용기간 또는 정보 주체로부터
              개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서
              개인정보를 처리·보유합니다.② 각각의 개인정보 처리 및 보유 기간은
            </Text>
            <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
              다음과 같습니다.
            </Text>
            <ArticleDetailList>
              <ArticleDetail>
                <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
                  1. [홈페이지 회원가입 및 관리]와 관련한 개인정보는 수집.이용에
                  관한 동의일로부터 3년까지 위 이용목적을 위하여
                  보유.이용됩니다.
                  <Sub>
                    {' '}
                    <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
                      - 보유 근거 : 홈페이지 회원정보 수집 등에 관한 기록
                    </Text>
                  </Sub>
                </Text>
                <Sub>
                  {' '}
                  <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
                    - 관련 법령 : 소비자의 불만 또는 분쟁 처리에 관한 기록 : 3년
                  </Text>
                </Sub>
                <Sub>
                  {' '}
                  <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
                    - 예외 사유 : 없음
                  </Text>
                </Sub>
              </ArticleDetail>
            </ArticleDetailList>
          </Sub>
        </PolicyArticle>
        <PolicyArticle>
          <Text
            size="titleS"
            color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}
          >
            제3조(처리하는 개인정보의 항목)
          </Text>
          <Sub>
            <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
              ① "DMS"는 다음의 개인정보 항목을 처리하고 있습니다.
            </Text>
            <ArticleDetailList>
              <ArticleDetail>
                <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
                  1. [홈페이지 회원가입 및 관리]
                  <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
                    <Sub>개인정보 항목 (필수) : 비밀번호, 로그인 ID, 이름</Sub>
                  </Text>
                  <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
                    <Sub>수집 방법 : 앱으로부터 제공받음</Sub>
                  </Text>
                </Text>
              </ArticleDetail>
            </ArticleDetailList>
          </Sub>
        </PolicyArticle>
        <PolicyArticle>
          <Text
            size="titleS"
            color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}
          >
            제4조(개인정보의 제3자 제공에 관한 사항)
          </Text>
          <Text>
            <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
              <Sub>
                ① "DMS"는 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위
                내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등
                「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만
                개인정보를 제3자에게 제공합니다.
              </Sub>
            </Text>
          </Text>
        </PolicyArticle>
        <PolicyArticle>
          <Text
            size="titleS"
            color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}
          >
            제5조(개인정보 처리의 위탁에 관한 사항)
          </Text>
          <Sub>
            <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
              ① "DMS"는 원활한 개인정보 업무 처리를 위하여 다음과 같이 개인정보
              처리 업무를 위탁하고 있습니다.
            </Text>
            <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
              <Sub>- 해당 없음</Sub>
            </Text>
          </Sub>
          <Sub>
            {' '}
            <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
              ② "DMS"는 위탁계약 체결시 「개인정보 보호법」 제26조에 따라
              위탁업무 수행 목적 외 개인정보 처리 금지, 기술적․관리적 보호조치,
              재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한
              사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게
              처리하는지를 감독하고 있습니다.
            </Text>
          </Sub>
          <Sub>
            {' '}
            <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
              ③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체 없이 본
              개인정보 처리방침을 통하여 공개하도록 하겠습니다.
            </Text>
          </Sub>
        </PolicyArticle>
        <PolicyArticle>
          <Text
            size="titleS"
            color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}
          >
            제6조(개인정보의 파기 절차 및 파기 방법){' '}
          </Text>
          <Sub>
            {' '}
            <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
              ① "DMS"는 개인정보 보유 기간의 경과, 처리목적 달성 등 개인정보가
              불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
            </Text>
          </Sub>
          <Sub>
            {' '}
            <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
              ② 개인정보 파기의 절차 및 방법은 다음과 같습니다.
            </Text>
            <br />
            <ArticleDetailList>
              <ArticleDetail>
                {' '}
                <Text
                  size="bodyM"
                  color={userTheme === THEME.LIGHT ? 'gray9' : 'gray3'}
                >
                  1. 파기절차{' '}
                </Text>
                <Sub>
                  {' '}
                  <Text color={userTheme === THEME.LIGHT ? 'gray9' : 'gray3'}>
                    "DMS"는 파기 사유가 발생한 개인정보를 선정하고, "DMS" 의
                    개인정보 보호 책임자의 승인을 받아 개인정보를 파기합니다.
                    이용자가 입력한 정보는 목적 달성 후 별도의 DB에
                    옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련
                    법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이때,
                    DB로 옮겨진 개인정보는 법률에 의한 경우 외 다른 목적으로
                    이용되지 않습니다.
                  </Text>
                </Sub>
              </ArticleDetail>
              <ArticleDetail>
                {' '}
                <Text
                  size="bodyM"
                  color={userTheme === THEME.LIGHT ? 'gray9' : 'gray3'}
                >
                  2. 파기기한{' '}
                </Text>
                <Sub>
                  <Text color={userTheme === THEME.LIGHT ? 'gray9' : 'gray3'}>
                    {' '}
                    이용자의 개인정보는 개인정보의 보유 기간이 경과된 경우에는
                    보유 기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적
                    달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가
                    불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로
                    인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.
                  </Text>
                </Sub>
              </ArticleDetail>
              <ArticleDetail>
                {' '}
                <Text
                  size="bodyM"
                  color={userTheme === THEME.LIGHT ? 'gray9' : 'gray3'}
                >
                  3.파기방법{' '}
                </Text>
                <Sub>
                  {' '}
                  <Text color={userTheme === THEME.LIGHT ? 'gray9' : 'gray3'}>
                    전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적
                    방법을 사용합니다.{' '}
                  </Text>
                </Sub>
              </ArticleDetail>
            </ArticleDetailList>
          </Sub>
        </PolicyArticle>
        <PolicyArticle>
          <Text
            size="titleS"
            color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}
          >
            {' '}
            제7조(정보 주체와 법정대리인의 권리·의무 및 그 행사방법에 관한 사항){' '}
          </Text>
          <Sub>
            {' '}
            <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
              ① 정보주체는 DMS에 대해 언제든지 개인정보 열람·정정·삭제·처리정지
              요구 등의 권리를 행사할 수 있습니다.{' '}
            </Text>
          </Sub>
          <Sub>
            {' '}
            <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
              ② 제1항에 따른 권리 행사는 DMS에 대해 「개인정보 보호법」 시행령
              제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실
              수 있으며 DMS은(는) 이에 대해 지체 없이 조치하겠습니다.
            </Text>
          </Sub>
          <Sub>
            {' '}
            <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
              ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은
              자 등 대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리
              방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을
              제출하셔야 합니다.
            </Text>
          </Sub>
          <Sub>
            {' '}
            <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
              ④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조
              제4항, 제37조 제2항에 의하여 정보 주체의 권리가 제한될 수
              있습니다.
            </Text>
          </Sub>
          <Sub>
            {' '}
            <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
              ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집
              대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
            </Text>
          </Sub>
          <Sub>
            {' '}
            <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
              ⑥ DMS은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구,
              처리 정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한
              대리인인지를 확인합니다.
            </Text>
          </Sub>
        </PolicyArticle>
        <PolicyArticle>
          <Text
            size="titleS"
            color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}
          >
            {' '}
            제8조(개인정보의 안전성 확보 조치에 관한 사항)
          </Text>
          <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
            "DMS"는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
            있습니다.
          </Text>

          <ArticleDetailList>
            <ArticleDetail>
              {' '}
              <Text
                size="bodyM"
                color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}
              >
                {' '}
                1. 개인정보 취급 직원의 최소화 및 교육{' '}
              </Text>
              <Sub>
                {' '}
                <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
                  개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화
                  하여 개인정보를 관리하는 대책을 시행하고 있습니다
                </Text>
              </Sub>
            </ArticleDetail>
            <ArticleDetail>
              {' '}
              <Text
                size="bodyM"
                color={userTheme === THEME.LIGHT ? 'gray9' : 'gray2'}
              >
                {' '}
                2. 해킹 등에 대비한 기술적 대책{' '}
              </Text>
              <Sub>
                {' '}
                <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
                  "DMS"는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및
                  훼손을 막기 위하여 보안프로그램을 설치하고 주기적인
                  갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을
                  설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.
                </Text>
              </Sub>
            </ArticleDetail>
            <ArticleDetail>
              {' '}
              <Text
                size="bodyM"
                color={userTheme === THEME.LIGHT ? 'gray9' : 'gray2'}
              >
                {' '}
                3. 개인정보의 암호화
              </Text>
              <Sub>
                {' '}
                <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
                  이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고
                  있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송
                  데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도
                  보안 기능을 사용하고 있습니다.
                </Text>
              </Sub>
            </ArticleDetail>
            <ArticleDetail>
              {' '}
              <Text
                size="bodyM"
                color={userTheme === THEME.LIGHT ? 'gray9' : 'gray2'}
              >
                {' '}
                4. 개인정보에 대한 접근 제한{' '}
              </Text>
              <Sub>
                {' '}
                <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
                  개인정보를 처리하는 데이터베이스 시스템에 대한 접근 권한의
                  부여, 변경, 말소를 통하여 개인정보에 대한 접근 통제에 필요한
                  조치를 하고 있으며, 침입 차단 시스템을 이용하여 외부로부터의
                  무단 접근을 통제하고 있습니다.
                </Text>
              </Sub>
            </ArticleDetail>
          </ArticleDetailList>
        </PolicyArticle>
        <PolicyArticle>
          <Text
            size="titleS"
            color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}
          >
            {' '}
            제10조 (개인정보 보호 책임자에 관한 사항){' '}
          </Text>
          <Sub>
            {' '}
            <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
              ① DMS는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
              처리와 관련한 정보 주체의 불만 처리 및 피해 구제 등을 위하여
              아래와 같이 개인정보 보호 책임자를 지정하고 있습니다.
            </Text>
            <Sub>
              <Sub>
                <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
                  {' '}
                  ▶ 개인정보 보호책임자{' '}
                </Text>
              </Sub>
              <Sub>
                {' '}
                <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
                  - 성명 : 김은빈{' '}
                </Text>
              </Sub>
              <Sub>
                {' '}
                <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
                  연락처 : 01071995931, rlaisqls@gmail.com{' '}
                </Text>
              </Sub>
            </Sub>
          </Sub>
          <Sub>
            {' '}
            <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
              ② 정보 주체는 DMS의 서비스(또는 사업)을 이용하면서 발생한 모든
              개인정보 보호 관련 문의, 불만 처리, 피해 구제 등에 관한 사항을
              개인정보 보호 책임자 및 담당부서로 문의할 수 있습니다. DMS는 정보
              주체의 문의에 대해 지체없이 답변 및 처리할 것입니다.
            </Text>
          </Sub>
        </PolicyArticle>
        <PolicyArticle>
          <Text
            size="titleS"
            color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}
          >
            {' '}
            제11조(정보 주체의 권익 침해에 대한 구제 방법){' '}
          </Text>
          <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
            정보 주체는 개인정보 침해로 인한 구제를 받기 위하여
            개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에
            분쟁 해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보
            침해의 신고, 상담에 대해서는 아래의 기관에 문의하시기 바랍니다.
          </Text>
          <ArticleDetailList>
            <ArticleDetail>
              {' '}
              <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
                1. 개인정보분쟁조정위원회 : 1833-6972 (www.kopico.go.kr){' '}
              </Text>
            </ArticleDetail>
            <ArticleDetail>
              {' '}
              <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
                2. 개인정보침해신고센터 : 118 (privacy.kisa.or.kr){' '}
              </Text>
            </ArticleDetail>
            <ArticleDetail>
              {' '}
              <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
                3. 대검찰청 : 1301 (www.spo.go.kr){' '}
              </Text>
            </ArticleDetail>
            <ArticleDetail>
              <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
                {' '}
                4. 경찰청 : 182 (ecrm.cyber.go.kr)
              </Text>{' '}
            </ArticleDetail>
          </ArticleDetailList>
          <br />
          <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
            「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의
            정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에
            대하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는
            이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을
            청구할 수 있습니다.
          </Text>
          <Text
            size="bodyS"
            color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}
          >
            ※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr)
            홈페이지를 참고하시기 바랍니다.
          </Text>
        </PolicyArticle>
        <PolicyArticle>
          <Text
            size="titleS"
            color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}
          >
            {' '}
            제12조(개인정보 처리 방침 변경){' '}
          </Text>
          <Sub>
            {' '}
            <Text color={userTheme === THEME.LIGHT ? 'gray8' : 'gray3'}>
              ① 이 개인정보처리방침은 2023년 2월 4일부터 적용됩니다. 변경시 본
              문서에서 변경 내역을 확인할 수 있습니다.
            </Text>
          </Sub>
        </PolicyArticle>
      </PolicyContent>
    </Wrapper>
  );
};

const Wrapper = styled.section<{ Theme: THEME }>`
  width: 100%;
  padding: 75px 7% 50px 7%;
  background: ${({ Theme }) =>
    Theme === THEME.LIGHT ? color.gray1 : '#242424'};
`;

const PolicyContent = styled.div`
`;

const PolicyArticle = styled.p`
  padding: 20px 5px 0 5px;
`;

const ArticleDetailList = styled.ul`
  padding: 10px 0 0 5px;
`;

const ArticleDetail = styled.li`
  margin-left: 10px;
`;

const Sub = styled.p`
  margin: 5px 0 5px 5px;
`;
