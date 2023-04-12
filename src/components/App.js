import FeedBack from './FeedBack/FeedBack';

export const App = () => {
  return (
    <div
      style={{
        height: '20vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      {/* <h2>Please leave feedback</h2> */}
      <FeedBack />
    </div>
  );
};
