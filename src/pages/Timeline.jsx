import PageWrapper from '../components/PageWrapper';

const Timeline = () => {
  return (
    <PageWrapper>
      <div
        className="min-h-screen bg-yellow-100 py-10 px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/03.png')" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-purple-800 mb-10">TIMELINE</h1>
          {/* Konten timeline masuk sini */}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Timeline;
