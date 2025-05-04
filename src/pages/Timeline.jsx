import PageWrapper from '../components/PageWrapper';

const Timeline = () => {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-yellow-100 py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <img 
            src="/images/timeline.png" 
            alt="Timeline Lomba" 
            className="mx-auto mb-10 w-full max-w-4xl" 
          />
          <h1 className="text-5xl font-bold text-purple-800">TIMELINE</h1>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Timeline;
