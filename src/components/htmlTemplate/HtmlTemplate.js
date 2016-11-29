const HtmlTemplate = (props) => {

  const createMarkupArticle = () => ({
      __html: props.content
  });

  return (
    <div
      className="article__content article__content-margintop"
      dangerouslySetInnerHTML={createMarkupArticle()}
    />
  );
}

export default HtmlTemplate;
