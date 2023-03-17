// import DashboardTabs from '../../dashboard-tabs/DashboardTabs';
import { useSelector } from 'react-redux';
import AccordionCard from '../accordion/AccordionCard';
import DashboardTabs from '../dashboard-tabs/DashboardTabs';
import Community from '../community/Community';
import MyQuestionsMyAnswersBtn from '../community/my-questions-my-answers/MyQuestionsMyAnswersBtn';
import MyQuestions from '../community/my-questions-my-answers/MyQuestions';
import MyAnswers from '../community/my-questions-my-answers/MyAnswers';
import { showQuestionDetailsPage } from '../community/CommunitySlice';
import QuestionDetails from '../community/question-details/QuestionDetails';

const tabKey = ['Support', 'FAQ', 'Community'];
const myQuestionsMyAnswersTabs = ['My Questions', 'My Answers'];

const Support = () => {
  const { myQuestionsMyAnswers, questionDetails } = useSelector(
    state => state.community
  );
  return (
    <>
      {!questionDetails && (
        <>
          {!myQuestionsMyAnswers && (
            <DashboardTabs tabsKey={tabKey} activeState={tabKey[0]}>
              <AccordionCard
                tabKey={tabKey[0]}
                itemLength={4}
                accordionTitle="What is App flow and why is the best App?"
                accordionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
              <AccordionCard
                tabKey={tabKey[1]}
                itemLength={4}
                accordionTitle="What is App flow and why is the best App FAQ?"
                accordionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
              <Community tabKey={tabKey[2]} />
            </DashboardTabs>
          )}

          {myQuestionsMyAnswers && (
            <DashboardTabs
              tabsKey={myQuestionsMyAnswersTabs}
              activeState={myQuestionsMyAnswersTabs[0]}
            >
              {/* tabKey={myQuestionsMyAnswersTabs[0]} */}
              {/* <MyQuestionsMyAnswers /> */}
              <MyQuestions tabKey={myQuestionsMyAnswersTabs[0]} />
              <MyAnswers tabKey={myQuestionsMyAnswersTabs[1]} />
            </DashboardTabs>
          )}
        </>
      )}

      {questionDetails && <QuestionDetails />}
    </>
  );
};

export default Support;
