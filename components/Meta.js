import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />

      <meta charSet='utf-8' />
      <link rel='icon' href='/images/Yoable.svg' />

      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://yoable.com/"></meta>
      <meta property="og:title" content="Yoable" key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta property="og:image" content="https://yoable.com/meta-image.jpg"></meta>        
    </Head>

  );
};

Meta.defaultProps = {
    title: "Yoable",  
    keywords: "Integrity, teamwork, discipline, empathy",
    description: "A platform for youths to inquire and acquire the necessary skills for future and present purposes."
};

export default Meta;
